/* empty css              */import{u as n}from"./request-51c7b7f8.js";import{c as e,aK as a,B as o,r as i}from"./antd-27e5ee8c.js";import{d as t,e as s,Q as l,R as p,S as r,U as c,f as d,_ as u,a0 as f,V as A,k as M,o as v,al as m,Z as w,E as g,ae as I,af as h}from"./vue-114e4185.js";import{u as U}from"./antd-3b7653df.js";/* empty css              *//* empty css              */import{_ as k}from"./_plugin-vue_export-helper-1b428a4d.js";var y={};({get exports(){return y},set exports(n){y=n}}).exports=function(){function n(n){var o=[];return n.AMapUI&&o.push(e(n.AMapUI)),n.Loca&&o.push(a(n.Loca)),Promise.all(o)}function e(n){return new Promise((function(e,a){var i=[];if(n.plugins)for(var p=0;p<n.plugins.length;p+=1)-1==t.AMapUI.plugins.indexOf(n.plugins[p])&&i.push(n.plugins[p]);if(s.AMapUI===o.failed)a("前次请求 AMapUI 失败");else if(s.AMapUI===o.notload){s.AMapUI=o.loading,t.AMapUI.version=n.version||t.AMapUI.version,p=t.AMapUI.version;var r=document.body||document.head,c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/ui/"+p+"/main.js",c.onerror=function(n){s.AMapUI=o.failed,a("请求 AMapUI 失败")},c.onload=function(){if(s.AMapUI=o.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var n=0,a=i.length;n<a;n++){var o=i[n].split("/").slice(-1)[0];window.AMapUI[o]=arguments[n]}for(e();l.AMapUI.length;)l.AMapUI.splice(0,1)[0]()}));else for(e();l.AMapUI.length;)l.AMapUI.splice(0,1)[0]()},r.appendChild(c)}else s.AMapUI===o.loaded?n.version&&n.version!==t.AMapUI.version?a("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var n=0,a=i.length;n<a;n++){var o=i[n].split("/").slice(-1)[0];window.AMapUI[o]=arguments[n]}e()})):e():n.version&&n.version!==t.AMapUI.version?a("不允许多个版本 AMapUI 混用"):l.AMapUI.push((function(n){n?a(n):i.length?window.AMapUI.loadUI(i,(function(){for(var n=0,a=i.length;n<a;n++){var o=i[n].split("/").slice(-1)[0];window.AMapUI[o]=arguments[n]}e()})):e()}))}))}function a(n){return new Promise((function(e,a){if(s.Loca===o.failed)a("前次请求 Loca 失败");else if(s.Loca===o.notload){s.Loca=o.loading,t.Loca.version=n.version||t.Loca.version;var i=t.Loca.version,p=t.AMap.version.startsWith("2"),r=i.startsWith("2");if(p&&!r||!p&&r)a("JSAPI 与 Loca 版本不对应！！");else{p=t.key,r=document.body||document.head;var c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/loca?v="+i+"&key="+p,c.onerror=function(n){s.Loca=o.failed,a("请求 AMapUI 失败")},c.onload=function(){for(s.Loca=o.loaded,e();l.Loca.length;)l.Loca.splice(0,1)[0]()},r.appendChild(c)}}else s.Loca===o.loaded?n.version&&n.version!==t.Loca.version?a("不允许多个版本 Loca 混用"):e():n.version&&n.version!==t.Loca.version?a("不允许多个版本 Loca 混用"):l.Loca.push((function(n){n?a(n):a()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var o,i;(i=o||(o={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},l={AMap:[],AMapUI:[],Loca:[]},p=[],r=function(n){"function"==typeof n&&(s.AMap===o.loaded?n(window.AMap):p.push(n))};return{load:function(e){return new Promise((function(a,i){if(s.AMap==o.failed)i("");else if(s.AMap==o.notload){var l=e.key,c=e.version,d=e.plugins;l?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=l,t.AMap.version=c||t.AMap.version,t.AMap.plugins=d||t.AMap.plugins,s.AMap=o.loading,c=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)s.AMap=o.failed,i(t);else for(s.AMap=o.loaded,n(e).then((function(){a(window.AMap)})).catch(i);p.length;)p.splice(0,1)[0]()},(d=document.createElement("script")).type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+l+"&plugin="+t.AMap.plugins.join(","),d.onerror=function(n){s.AMap=o.failed,i(n)},c.appendChild(d)):i("请填写key")}else if(s.AMap==o.loaded)if(e.key&&e.key!==t.key)i("多个不一致的 key");else if(e.version&&e.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(l=[],e.plugins)for(c=0;c<e.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(e.plugins[c])&&l.push(e.plugins[c]);l.length?window.AMap.plugin(l,(function(){n(e).then((function(){a(window.AMap)})).catch(i)})):n(e).then((function(){a(window.AMap)})).catch(i)}else if(e.key&&e.key!==t.key)i("多个不一致的 key");else if(e.version&&e.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var u=[];if(e.plugins)for(c=0;c<e.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(e.plugins[c])&&u.push(e.plugins[c]);r((function(){u.length?window.AMap.plugin(u,(function(){n(e).then((function(){a(window.AMap)})).catch(i)})):n(e).then((function(){a(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},l={AMap:[],AMapUI:[],Loca:[]}}}}();const L=y;const _=k(t({name:"InfoWindow",components:{CloseOutlined:a},props:["firstName","lastName","alias","getInfoWindow"],setup(e){const a=n();return{toggleCard:()=>{e.getInfoWindow().close()},nickname:s((()=>a.nickname))}}}),[["render",function(n,e,a,t,s,A){const M=l("close-outlined"),v=o,m=i;return p(),r(m,{title:"这是信息窗体",style:{width:"300px"}},{extra:c((()=>[d(v,{type:"text",danger:"",onClick:n.toggleCard},{icon:c((()=>[d(M)])),_:1},8,["onClick"])])),default:c((()=>[u("p",null,f(n.firstName),1),u("p",null,f(n.lastName),1),u("p",null,f(n.alias),1),u("p",null,"昵称："+f(n.nickname),1)])),_:1})}]]);function x(n={}){const e=A(_,n),a=document.createElement("div");e.use(U);return e.mount(a).$el}function C(n){const e=[116.401337,39.907886],a=M(null);let o=null,i=null,t=!1;const s=t=>{a.value=new t.Map("amap",n),o=new t.Marker({position:e,map:a.value}),o.on("click",(()=>{i.open(a.value,e)})),(n=>{i=new n.InfoWindow({anchor:"top-left",isCustom:!0,content:x({firstName:"walter",lastName:"white",alias:"heisenberg",getInfoWindow:()=>i})}),i.open(a.value,e)})(t)};return v((()=>{})),m((()=>{a.value.destroy(),a.value=null})),{amap:a,amapInit:()=>{t||(t=!0,window._AMapSecurityConfig={securityJsCode:"1ce560052f5de747fde072c5d56cc139"},L.load({key:"fbc9756a8fa8eed439c3818ff2b6300c",version:"2.0",plugins:[],
// 需要使用的的插件列表，如比例尺'AMap.Scale'等
AMapUI:{
// 是否加载 AMapUI，缺省不加载
version:"1.1",
// AMapUI 版本
plugins:["overlay/SimpleMarker"]},Loca:{
// 是否加载 Loca， 缺省不加载
version:"2.0"}}).then((n=>s(n))).catch((n=>{})).finally((()=>{t=!1})))}}}const b=t({name:"AmapComp",setup(){const e=n(),{amap:a,amapInit:o}=C({zoom:11,center:[116.397428,39.90923],viewMode:"3D"});return{amap:a,amapInit:o,clickChange:()=>{const n=["凌大","唐二","张三","李四","王五","朱六","卓七"][Math.floor(6*Math.random())];e.changeNickname(n)}}},beforeRouteEnter(n,e,a){a((n=>{n.amapInit()}))}}),j=n=>(I("data-v-b5650c56"),n=n(),h(),n),P=j((()=>u("p",null," 高德地图的调用，主要在于自定义信息窗体的实现，vue3 因为删除了 extends 这个方法，因此实现上有点区别，具体请查看源码（因为演示开启了mockjs，因此地图不显示） ",-1))),E=j((()=>u("div",{id:"amap",class:"amap"},null,-1)));const N=k(b,[["render",function(n,e,a,i,t,s){const l=o;return p(),w("div",null,[P,E,d(l,{onClick:n.clickChange},{default:c((()=>[g("改变昵称")])),_:1},8,["onClick"])])}],["__scopeId","data-v-b5650c56"]]);export{N as default};
