import{f as e,k as a,r as t,d as r,aa as o,b as n,Y as l,Q as s,R as i,Z as c,U as u,a2 as p,_ as d}from"./vue-114e4185.js";import{m}from"./index.esm-7b8e2ed2.js";import{P as h}from"./overlayscrollbars-vue.es-90bada0f.js";import{A as f}from"./antd-27e5ee8c.js";import{_ as v}from"./_plugin-vue_export-helper-1b428a4d.js";const b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 010-12.9l246-178a8 8 0 0112.7 6.5v46.8z"}}]},name:"left-circle",theme:"filled"};function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?Object(arguments[a]):{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){C(e,a,t[a])}))}return e}function C(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var y=function(a,t){var r=g({},a,t.attrs);return e(f,g({},r,{icon:b}),null)};y.displayName="LeftCircleFilled",y.inheritAttrs=!1;const j=y;t({routeName:""});const w=r({name:"RightPanel",components:{LeftCircleFilled:j,OverlayScrollbarsComponent:h},props:{childRouteName:{type:String,default:""}},setup(e){const t=o(),r=a(!1),{dataToChild:s,sendDataToChild:i,handleDataChange:c}=function(e){const t=a("");return e&&(t.value=e),{dataToChild:a({state:"基座发送给子应用的数据",routeName:sessionStorage.getItem("routeName")||""}),sendDataToChild:()=>{m.setData("vue-app",{state:"基座通过调用方法发送的数据",routeName:t.value})},handleDataChange:e=>{e.detail.data.routeName&&(t.value=e.detail.data.routeName)}}}(e.childRouteName);n((()=>{r.value=!1})),l((()=>{r.value=!1}));return{currPath:t.path,isShow:r,showPanel:()=>{r.value=!r.value,i()},dataToChild:s,handleDataChange:c,sendDataToChild:i,microAppMounted:()=>{i()},microAppUrl:"https://afei008.github.io/apps/vue-app"}}}),D={class:"micro-app"},O=["url","baseroute","data"];const N=v(w,[["render",function(a,t,r,o,n,l){const m=s("left-circle-filled"),h=s("OverlayScrollbarsComponent");return i(),c("div",{class:p(["right-panel",a.isShow?"show-panel":""])},[e(m,{class:"btn bg-white",style:{"font-size":"32px"},onClick:a.showPanel},null,8,["onClick"]),e(h,{defer:""},{default:u((()=>[d("div",D,[d("micro-app",{name:"vue-app",url:a.microAppUrl,baseroute:a.currPath,data:a.dataToChild,onDatachange:t[0]||(t[0]=(...e)=>a.handleDataChange&&a.handleDataChange(...e)),onMounted:t[1]||(t[1]=(...e)=>a.microAppMounted&&a.microAppMounted(...e))},null,40,O)])])),_:1})],2)}],["__scopeId","data-v-27402ed7"]]);export{N as _};
