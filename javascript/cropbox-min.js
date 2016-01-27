"use strict";var cropbox=function(a){var b=document.querySelector(a.imageBox),c={state:{},ratio:1,options:a,imageBox:b,thumbBox:b.querySelector(a.thumbBox),spinner:b.querySelector(a.spinner),image:new Image,getDataURL:function(){var a=this.thumbBox.clientWidth,c=this.thumbBox.clientHeight,d=document.createElement("canvas"),e=b.style.backgroundPosition.split(" "),f=b.style.backgroundSize.split(" "),g=parseInt(e[0])-b.clientWidth/2+a/2,h=parseInt(e[1])-b.clientHeight/2+c/2,i=parseInt(f[0]),j=parseInt(f[1]),k=parseInt(this.image.height),l=parseInt(this.image.width);d.width=a,d.height=c;var m=d.getContext("2d");m.drawImage(this.image,0,0,l,k,g,h,i,j);var n=d.toDataURL("image/png");return n},getBlob:function(){for(var a=this.getDataURL(),b=a.replace("data:image/png;base64,",""),c=atob(b),d=[],e=0;e<c.length;e++)d.push(c.charCodeAt(e));return new Blob([new Uint8Array(d)],{type:"image/png"})},zoomIn:function(){this.ratio*=1.1,g()},zoomOut:function(){this.ratio*=.9,g()}},d=function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c)},e=function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,render)},f=function(a){window.event?a.cancelBubble=!0:a.stopImmediatePropagation()},g=function(){var a=parseInt(c.image.width)*c.ratio,d=parseInt(c.image.height)*c.ratio,e=(b.clientWidth-a)/2,f=(b.clientHeight-d)/2;b.setAttribute("style","background-image: url("+c.image.src+"); background-size: "+a+"px "+d+"px; background-position: "+e+"px "+f+"px; background-repeat: no-repeat")},h=function(a){f(a),c.state.dragable=!0,c.state.mouseX=a.clientX,c.state.mouseY=a.clientY},i=function(a){if(f(a),c.state.dragable){var d=a.clientX-c.state.mouseX,e=a.clientY-c.state.mouseY,g=b.style.backgroundPosition.split(" "),h=d+parseInt(g[0]),i=e+parseInt(g[1]);b.style.backgroundPosition=h+"px "+i+"px",c.state.mouseX=a.clientX,c.state.mouseY=a.clientY}},j=function(a){f(a),c.state.dragable=!1},k=function(a){var b=window.event||a,d=b.detail?-120*b.detail:b.wheelDelta;d>-120?c.ratio*=1.1:c.ratio*=.9,g()};return c.spinner.style.display="block",c.image.onload=function(){c.spinner.style.display="none",g(),d(b,"mousedown",h),d(b,"mousemove",i),d(document.body,"mouseup",j);var a=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";d(b,a,k)},a.imgSrc&&(c.image.src=a.imgSrc),d(b,"DOMNodeRemoved",function(){e(document.body,"DOMNodeRemoved",j)}),c};