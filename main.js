(function(){'use strict';
document.addEventListener('keydown',function(a){try{const k=a.key.toUpperCase();if(a.keyCode===123||(a.ctrlKey&&a.shiftKey&&['I','J','C'].includes(k))||(a.ctrlKey&&['U','S'].includes(k))){a.preventDefault();a.stopPropagation();return false}}catch(e){}});
document.addEventListener('contextmenu',function(a){try{a.preventDefault();return false}catch(e){}});
var d=(function(){var t=150;return function(){try{return window.outerWidth-window.innerWidth>t||window.outerHeight-window.innerHeight>t}catch(e){return false}}}());
var g=(function(){return function(){try{var s=performance.now();debugger;var u=performance.now()-s;return u>50}catch(e){return false}}}());
var t=(function(){var b=function(){};return function(){try{var B=new Image(),c=!1;Object.defineProperty(B,'id',{get:function(){if(!c){c=!0;try{alert('Console dibuka! Menyegarkan halaman...')}catch(e){}try{location.reload()}catch(e){}}}});setTimeout(function(){try{console.log(B)}catch(e){}},2000)}catch(e){}}}());
setInterval(function(){try{if(d()||g()){try{alert('Wopp ngapain boss? DevTools terdeteksi silahkan tutup ')}catch(e){}try{location.reload()}catch(e){}}}catch(e){}},100);
try{t()}catch(e){} })();
