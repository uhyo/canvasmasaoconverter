(()=>{
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

// Get the data element
const dataElement = document.getElementById('canvas-masao-converter-data');
if (dataElement && dataElement.dataset.targets) {
  try {
    const targets = JSON.parse(dataElement.dataset.targets);
    
    for (let {mode, id, code} of targets){
      if (mode !== "MasaoKani"){
        conv(id, code, {});
      } else {
        conv(id, code, {
          extensions: [CanvasMasao.MasaoKani2],
        });
      }
    }
    
    // Disable these methods as they're not needed
    CanvasMasao.Game.replaceAll = ()=>{};
    CanvasMasao.Game.replace = ()=>{};
    CanvasMasao.Game.replaceByDom = ()=>{};
    
    // Signal that conversion is complete
    console.info("Canvas Masao Converter: conversion complete");
    
    // Clean up the data element
    dataElement.remove();
  } catch (error) {
    console.error("Canvas Masao Converter: Error parsing targets data", error);
  }
} else {
  console.error("Canvas Masao Converter: Data element not found");
}
})();
