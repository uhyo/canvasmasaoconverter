(function(){
  "use strict";

  let mob = new MutationObserver(mutationHandler);
  mob.observe(document, {
    childList: true,
    subtree: true,
  });
  // 変数
  let options_loaded = false;
  let lib_urls = false;
  let glb_loaded = false;
  let kani_loaded = false;

  let stop_flg = false;
  let dcl_flg = false;
  // 読み込むファイル
  let loadCount = 0;
  // 変換対象
  const targets = [];

  document.addEventListener('DOMContentLoaded', ()=>{
    dcl_flg = true;
    mob.disconnect();
    mob = null;
    if (glb_loaded){
      // 正男を検知したなら
      handleScriptLoad();
    }
  }, false);

  // Local file paths for the libraries
  function loadOptions(){
    options_loaded = true;
    lib_urls = {
      url_fx: chrome.runtime.getURL("vendor/CanvasMasao.js"),
      url_kani2: chrome.runtime.getURL("vendor/MasaoKani2.js"),
      url_v28: chrome.runtime.getURL("vendor/CanvasMasao_v28.js")
    };
    return Promise.resolve(lib_urls);
  }

  function mutationHandler(records){
    for (let i=0, l=records.length; i<l; i++){
      const r = records[i];
      for (let j=0, m=r.addedNodes.length; j<m; j++){
        const n = r.addedNodes[j];
        if (n.tagName === "APPLET"){
          handleApplet(n);
        }else if(n.tagName === "OBJECT"){
          handleObject(n);
        }else if(n.tagName === "SCRIPT"){
          handleScript(n);
        }
      }
    }
  }
  function hideDOM(node){
    node.hidden = true;
    node.style.display = 'none';
  }
  function handleApplet(a){
    // handle <applet>.
    const code=a.getAttribute('code');
    let mode;
    if(/^(?:MasaoConstruction|MasaoJSS)(?:\.class)?$/i.test(code)){
      if(/\.zip$/.test(a.getAttribute('archive'))){
        mode="2.8";
      }else{
        mode="FX";
      }
    }else if(/^MasaoKani2?(?:\.class)?$/.test(code)){
      mode="MasaoKani";
    }else{
      // Not masao!
      return;
    }
    convertMasaoAt(mode, a, code);
  }
  function handleObject(a){
    //handle <object>.
    const cl=a.querySelector('param[name="classid"]');
    if(cl && /^java:MasaoConstruction\.class$/i.test(cl.value)){
      //masao!?
      console.warn("Possible java Masao detected. Canvas Masao does not convert Java Masao represented as <object/>.")
    }
  }
  function handleScript(n){
    // Canvas正男を自分で読み込んでたらやめる
    if (n.dataset.cmc === 'cmc'){
      // 自分によるものは許す
      return;
    }
    if (/CanvasMasao(?:_v28)?\.js$/.test(n.src)){
      // このページは正男を読み込んでいる
      stop_flg = true;
      // console.log('stopping');
    }
  }
  async function convertMasaoAt(mode, a, code){
    // aにはIDをつけてあげる
    if (stop_flg){
      return;
    }
    hideDOM(a);

    let newid;
    if (a.id){
      newid = a.id;
    }else{
      const name = a.getAttribute('name');
      if (name){
        newid = name;
      }else{
        newid = Math.random().toString(36).slice(2);
      }
    }
    a.id = newid;
    targets.push({
      mode,
      id: a.id,
      code,
    });

    // せっかちなひとのためのfake

    if (!glb_loaded){
      glb_loaded = true;
      // awaitより前にloadCountをインクリメントしないとDOMContentLoadedが呼ばれてloadCountが0のままhandleScriptLoad()が実行されてしまう
      loadCount++;
      const s=document.createElement("script");
      s.dataset.cmc='cmc';
      if(mode==="2.8"){
        s.src= (await loadOptions()).url_v28;
      }else{
        s.src= (await loadOptions()).url_fx;
      }
      s.addEventListener("load", e=>{
        if(--loadCount <= 0){
          handleScriptLoad();
        }
      }, false);
      (document.head||document.body).appendChild(s);
    }
    if (mode==='MasaoKani' && !kani_loaded){
      kani_loaded = true;
      loadCount++;
      const s=document.createElement("script");
      s.dataset.cmc='cmc';
      s.src= (await loadOptions()).url_kani2;
      s.addEventListener("load", e=>{
        if(--loadCount <= 0){
          handleScriptLoad();
        }
      }, false);
      (document.head||document.body).appendChild(s);
    }


  }
  function handleScriptLoad(){
    if (loadCount > 0){
      return;
    }
    if (stop_flg){
      return;
    }
    if (dcl_flg === false){
      return;
    }
    stop_flg = true;
    console.info("Canvas Masao Converter: converting Masao");
    // 変換スクリプトをひとつずつアレする
    let scriptText = String.raw`(()=>{
'use strict';
function conv(id, code, options){
  const app = document.getElementById(id);
  const paramElements = app.getElementsByTagName('param');
  const paramLength = paramElements.length;
  const params = {}; 
  for(let i = 0; i < paramLength; i++) {
    const e = paramElements[i];
    params[e.name] = e.value;
  }
  const div = document.createElement('div');
  div.id = Math.random().toString(36).slice(2);
  app.parentNode.insertBefore(div, app.nextSibling);

  const opt2 = Object.assign({
    userJSCallback,
  }, options);

  const game = new CanvasMasao.Game(params, div.id, opt2);

  let emu_flg = false;

  // 気の早い人のためのfake
  app.getMode = ()=>0;
  app.getHighscore = ()=>0;

  function userJSCallback(os_g, mode, wx, wy, emu){
    if (emu_flg === false){
      emu_flg = true;
      setupEmulation(emu, app);
      if ('function' !== typeof userJS){
        game.__mc.options.userJSCallback = null;
        return;
      }
    }
    userJS(os_g, mode, wx, wy);
  }
  function setupEmulation(emu, app){
    const functionTable = new Map();
    for (const key of Object.getOwnPropertyNames(emu)){
      if ('function' === typeof emu[key]){
        app[key] = emu[key].bind(emu);
        functionTable.set(key.toLowerCase(), key);
      }
    }
    const polys = makeJavaAppletPolyfill(emu);
    for (const key of Object.getOwnPropertyNames(polys)){
      app[key] = polys[key].bind(emu);
      functionTable.set(key.toLowerCase(), key);
    }
    // make a new prototype
    const protoTarget = Object.create(Object.getPrototypeOf(app));
    const proto = new Proxy(protoTarget, {
      get(target, name, receiver){
        const origName = functionTable.get(name.toLowerCase());
        if (origName){
          app[name] = app[origName];
          return app[origName];
        }else{
          return Reflect.get(target, name, receiver);
        }
      },
    });
    Object.setPrototypeOf(app, proto);
  }
  // Java Applet用のPolyfillも入れる
  function makeJavaAppletPolyfill(){
    const codeAbst = new URL(code, location.href);
    const codeBase = codeAbst.href.replace(/\/[^\/]*$/, '/');
    const imageCache = new Map();
    return {
      getDocumentBase(){
        return location.href;
      },
      getCodeBase(){
        return codeBase;
      },
      getImage(base, name){
        const u = name ? new URL(name, base) : new URL(base);
        const str = u.href;
        const ca = imageCache.get(str);
        if (ca != null){
          return ca;
        } else {
          const img = this.newImageOnLoad(str);
          imageCache.set(str, img);
          return img;
        }
      },
      getAudioClip(){
        return null;
      },
    };
  }
}
    `;
    for (let {mode, id, code} of targets){
      const ids = JSON.stringify(id);
      const codes = JSON.stringify(code);
      if (mode !== "MasaoKani"){
        scriptText += `  conv(${ids}, ${codes}, {});\n`;
      }else{
        scriptText += `  conv(${ids}, ${codes}, {
  extensions: [CanvasMasao.MasaoKani2],
});\n`;
      }
    }
    scriptText += `
CanvasMasao.Game.replaceAll = ()=>{};
CanvasMasao.Game.replace = ()=>{};
CanvasMasao.Game.replaceByDom = ()=>{};
  })();`;
    const s2=document.createElement("script");
    s2.dataset.cmc='cmc';
    s2.textContent = scriptText;
    (document.head||document.body).appendChild(s2);
  }
})();
