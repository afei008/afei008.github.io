(function(e){function t(t){for(var r,o,a=t[0],i=t[1],d=t[2],f=0,l=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(l.length)l.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d215fad":"9487831b","chunk-2d21a3d2":"b0bab558","chunk-f6fb1cbe":"6a16fd4b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-f6fb1cbe":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d215fad":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-f6fb1cbe":"7368bfee"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var d=u[a],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===c))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){d=l[a],f=d.getAttribute("data-href");if(f===r||f===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],s.parentNode.removeChild(s),n(u)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var l=new Error;d=function(t){f.onerror=f.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/apps/vue-app/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var s=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},b20f:function(e,t,n){},bd99:function(e,t,n){"use strict";window.__MICRO_APP_ENVIRONMENT__&&(n.p=window.__MICRO_APP_PUBLIC_PATH__)},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("bd99");var r=n("7a23"),o=(n("b0c0"),{class:"container"}),c={id:"nav"},u=["onClick"],a={class:"body"};function i(e,t,n,i,d,f){var l=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])("div",o,[Object(r["f"])("div",c,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(e.routes,(function(t){var n;return Object(r["r"])(),Object(r["e"])("a",{class:Object(r["m"])(["link",e.currRoute===t.path?"active":""]),onClick:function(n){return e.goto("".concat(String(t.name)))},key:t.path},Object(r["A"])(null===t||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.title),11,u)})),128))]),Object(r["f"])("div",a,[Object(r["g"])(l)])])}n("4e82"),n("4de4"),n("d3b7");var d=n("6c02");function f(){var e=Object(d["c"])(),t=Object(d["d"])(),n=Object(r["w"])({});n.value=window.microApp?window.microApp.getData():{};var o=function(e){n.value=e,e.routeName&&t.push({name:e.routeName})},c=function(e){window.microApp&&window.microApp.dispatch({routeName:e})};Object(r["p"])((function(){window.microApp&&window.microApp.addDataListener(o)})),Object(r["D"])(e,(function(e){c(e.name)})),Object(r["D"])(n,(function(e){var n=e.routeName;n&&t.push({name:n})}),{deep:!0,immediate:!0}),Object(r["q"])((function(){window.microApp&&window.microApp.clearDataListener()}))}var l=Object(r["h"])({setup:function(){var e=Object(d["c"])(),t=Object(d["d"])(),n=t.getRoutes(),o=Object(r["w"])(""),c=n.filter((function(e){return e.name})).sort((function(e,t){var n=e.meta,r=t.meta;return(null===n||void 0===n?void 0:n.sort)===(null===r||void 0===r?void 0:r.sort)?0:(null===n||void 0===n?void 0:n.sort)>(null===r||void 0===r?void 0:r.sort)?1:-1})),u=function(e){t.push({name:e})};return f(),Object(r["D"])(e,(function(e){o.value=e.path})),{goto:u,routes:c,currRoute:o}}}),s=(n("d102"),n("6b0d")),p=n.n(s);const b=p()(l,[["render",i],["__scopeId","data-v-422b4c1e"]]);var m=b;n("3ca3"),n("ddb0");function v(e,t){var n=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["d"])(n)}const h={},O=p()(h,[["render",v]]);var w=O,j=[{path:window.__MICRO_APP_BASE_ROUTE__||"/",component:w,children:[{path:"",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},meta:{title:"首页",sort:1}},{path:"table",name:"Table",component:function(){return n.e("chunk-f6fb1cbe").then(n.bind(null,"3f0e"))},meta:{title:"表格",sort:2}},{path:"form",name:"Form",component:function(){return n.e("chunk-2d215fad").then(n.bind(null,"c109"))},meta:{title:"表单",sort:3}}]}],g=Object(d["a"])({history:Object(d["b"])(),routes:j}),y=g,_=(n("b20f"),Object(r["c"])(m).use(y));_.mount("#app"),window.addEventListener("unmount",(function(){_.unmount()}))},d102:function(e,t,n){"use strict";n("ed05")},ed05:function(e,t,n){}});