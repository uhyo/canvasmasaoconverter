(function(){
  var apps=document.querySelectorAll("applet, object");
  var mode=null;
  for(var i=0,l=apps.length;i<l;i++){
    var a=apps[i];
    if(a.tagName==="APPLET"){
      //masao!
      var code=a.getAttribute('code');
      if(/^MasaoConstruction$/i.test(code)){
        if(/\.zip$/.test(a.getAttribute('archive'))){
          mode="2.8";
        }else{
          mode="FX";
        }
        break;
      }else if(/^MasaoKani2?$/.test(code)){
        mode="MasaoKani";
        break;
      }
    }else if(a.tagName==="OBJECT"){
      var cl=a.querySelector('param[name="classid"]');
      if(cl && /^java:MasaoConstruction\.class$/i.test(cl.value)){
        //masao!?
        console.warn("Possible java Masao detected. Canvas Masao does not convert Java Masao represented as <object/>.")
      }
    }
  }
  if(mode==null)return;
  //convert masao
  if("undefined"!==typeof CanvasMasao){
    //sudeni aru
    return;
  }
  console.log("Canvas Masao Converter: converting Masao");
  var s=document.createElement("script");
  if(mode==="2.8"){
    s.src="http://Ryo-9399.github.io/mc_canvas/Outputs/CanvasMasao_v28.js";
  }else{
    s.src="http://Ryo-9399.github.io/mc_canvas/Outputs/CanvasMasao.js";
  }
  s.addEventListener("load",function(e){
    var s2=document.createElement("script");
    if(mode!=="MasaoKani"){
      s2.textContent="CanvasMasao.Game.replaceAll();";
      (document.head||document.body).appendChild(s2);
    }else{
      s2.src="http://Ryo-9399.github.io/mc_canvas/Outputs/MasaoKani2.js";
      s2.addEventListener("load",function(e){
        var s3=document.createElement("script");
        s3.textContent="CanvasMasao.Game.replaceAll();";
        (document.head||document.body).appendChild(s3);
      },false);
      (document.head||document.body).appendChild(s2);
    }
  },false);
  (document.head||document.body).appendChild(s);
})();