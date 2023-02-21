var e=Object.defineProperty,t=(t,a,l)=>(((t,a,l)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l})(t,"symbol"!=typeof a?a+"":a,l),l);import{d as a,k as l,e as n,w as s,o,R as u,Z as r,_ as i,ai as c,ae as v,af as d,g as h,r as p,u as m,f,U as g,h as b,t as M,a1 as _,G as k,W as P,q as $,E as x,a0 as C}from"./vue-76105073.js";import{_ as y}from"./plugin-vueexport-helper-1b428a4d.js";const N=(e,t)=>{let a=e;var l;"string"==typeof(l=e)&&l.includes(".")&&1===Number.parseFloat(l)&&(a="100%");const n=(e=>"string"==typeof e&&e.includes("%"))(a);return a=Math.min(t,Math.max(0,Number.parseFloat(`${a}`))),n&&(a=Number.parseInt(""+a*t,10)/100),Math.abs(a-t)<1e-6?1:a%t/Number.parseFloat(t)},V={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},w={A:10,B:11,C:12,D:13,E:14,F:15},E=e=>2===e.length?16*(w[e[0].toUpperCase()]||+e[0])+(w[e[1].toUpperCase()]||+e[1]):w[e[1].toUpperCase()]||+e[1],F=e=>{const t=Math.min(Math.round(e),255),a=Math.floor(t/16),l=t%16;return`${V[a]||a}${V[l]||l}`};class H{constructor(e){t(this,"hueP",0),t(this,"saturationP",100),t(this,"valueP",100),t(this,"format","hex"),t(this,"value",""),e.value?this.fromString(e.value):this.changeColor()}set(e,t){if(1!==arguments.length||"object"!=typeof e)this[`${e}P`]=t,this.changeColor();else for(const[a,l]of Object.entries(e))this.set(a,l)}get(e){return this[`${e}P`]}fromString(e){if(!e)return this.hueP=0,this.saturationP=100,this.valueP=100,void this.changeColor();const t=(e,t,a)=>{this.hueP=Math.max(0,Math.min(360,e)),this.saturationP=Math.max(0,Math.min(100,t)),this.valueP=Math.max(0,Math.min(100,a)),this.changeColor()};if(e.includes("#")){const a=e.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(a))return;let l=0,n=0,s=0;3===a.length?(l=E(a[0]+a[0]),n=E(a[1]+a[1]),s=E(a[2]+a[2])):6===a.length&&(l=E(a.slice(0,2)),n=E(a.slice(2,4)),s=E(a.slice(4,6)));const{h:o,s:u,v:r}=((e,t,a)=>{const l=N(e,255),n=N(t,255),s=N(a,255),o=Math.max(l,n,s),u=Math.min(l,n,s);let r=0;const i=o,c=o-u,v=0===o?0:c/o;if(o===u)r=0;else{switch(o){case l:r=(n-s)/c+(n<s?6:0);break;case n:r=(s-l)/c+2;break;case s:r=(l-n)/c+4}r/=6}return{h:360*r,s:100*v,v:100*i}})(l,n,s);t(o,u,r)}}changeColor(){const{hueP:e,saturationP:t,valueP:a,format:l}=this;this.value=(({r:e,g:t,b:a})=>Number.isNaN(+e)||Number.isNaN(+t)||Number.isNaN(+a)?"":`#${F(e)}${F(t)}${F(a)}`)(((e,t,a)=>{const l=6*N(e,360),n=N(t,100),s=N(a,100),o=Math.floor(l),u=l-o,r=s*(1-n),i=s*(1-u*n),c=s*(1-(1-u)*n),v=o%6,d=[s,i,r,r,c,s][v],h=[c,s,s,i,r,r][v],p=[r,r,c,s,s,i][v];return{r:Math.round(255*d),g:Math.round(255*h),b:Math.round(255*p)}})(e,t,a))}}let R=!1;function U(e,t){const a=e=>{var a;null==(a=t.drag)||a.call(t,e)},l=e=>{var n;document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l),document.onselectstart=null,document.ondragstart=null,R=!1,null==(n=t.end)||n.call(t,e)};e.addEventListener("mousedown",(e=>{var n;R||(e.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",a),document.addEventListener("mouseup",l),R=!0,null==(n=t.start)||n.call(t,e))}))}const j=e=>(v("data-v-b7c91beb"),e=e(),d(),e),A=j((()=>i("div",{class:"panel-white"},null,-1))),L=j((()=>i("div",{class:"panel-black"},null,-1))),B=y(a({__name:"PickerMain",props:{color:null},setup(e){const t=e,a=h(),v=l(),d=l(0),p=l(0),m=l("hsl(0, 100%, 50%)"),f=n((()=>({hue:t.color.get("hue"),value:t.color.get("value")})));function g(){if(!a)return;const e=t.color.get("saturation"),l=t.color.get("value"),n=a.vnode.el,{clientWidth:s,clientHeight:o}=n;d.value=e*s/100,p.value=(100-l)*o/100,m.value=`hsl(${t.color.get("hue")}, 100%, 50%)`}function b(e){const l=(null==a?void 0:a.vnode.el).getBoundingClientRect(),{clientX:n,clientY:s}=e;let o=n-l.left,u=s-l.top;o=Math.max(0,o),o=Math.min(o,l.width),u=Math.max(0,u),u=Math.min(u,l.height),d.value=o,p.value=u,t.color.set({saturation:o/l.width*100,value:100-u/l.height*100})}return s((()=>f.value),(()=>{g()})),o((()=>{v.value&&(U(v.value,{drag:e=>{b(e)},end:e=>{b(e)}}),g())})),(e,t)=>(u(),r("div",{ref_key:"panelRef",ref:v,class:"panel-main",style:c({background:`${m.value}`})},[A,L,i("div",{class:"panel-point",style:c({left:`${d.value}px`,top:`${p.value}px`})},null,4)],4))}}),[["__scopeId","data-v-b7c91beb"]]),I={class:"panel-slider"},S=y(a({__name:"PickerSlider",props:{color:null},setup(e){const t=e,a=h(),v=l(),d=l(),p=l(0),m=n((()=>t.color.get("hue")));function f(e){if(!d.value||!v.value)return;const l=(null==a?void 0:a.vnode.el).getBoundingClientRect(),{clientY:n}=e;let s=n-l.top;s=Math.min(s,l.height-v.value.offsetHeight/2),s=Math.max(v.value.offsetHeight/2,s);const o=Math.round((s-v.value.offsetHeight/2)/(l.height-v.value.offsetHeight)*360);t.color.set("hue",o)}function g(e){const{target:t}=e;t!==v.value&&f(e)}function b(){p.value=function(){if(!v.value||!a)return 0;const e=a.vnode.el,l=t.color.get("hue");return e?Math.round(l*(e.offsetHeight-v.value.offsetHeight/2)/360):0}()}return s((()=>m.value),(()=>{b()})),o((()=>{if(!d.value||!v.value)return;const e={drag:e=>{f(e)},end:e=>{f(e)}};U(d.value,e),U(v.value,e),b()})),(e,t)=>(u(),r("div",I,[i("div",{ref_key:"barRef",ref:d,class:"panel-slider-bar",onClick:g},null,512),i("div",{ref_key:"pointRef",ref:v,class:"panel-slider-point",style:c({top:`${p.value}px`})},null,4)]))}}),[["__scopeId","data-v-aeca62f6"]]),D={class:"color-picker"},O={class:"trigger-wrap"},W={key:0,class:"panel-wrap"},Y={class:"panel-top"},q={class:"panel-bot"},G={class:"panel-input"},X=y(a({__name:"index",props:{modelValue:null},emits:["change","update:modelValue"],setup(e,{emit:t}){const a=e,s=p(new H({value:a.modelValue})),o=n((()=>a.modelValue?s.value:"")),v=l(!1),d=()=>{v.value=!1},h=()=>{v.value=!0},x=()=>{d(),t("update:modelValue",s.value),t("change",s.value)},C=()=>{d(),t("change",""),$((()=>{a.modelValue?s.fromString(a.modelValue):s.value=""}))};return(e,t)=>(u(),r("div",D,[i("div",O,[i("div",{class:"trigger",style:c({background:`${m(o)}`}),onClick:h},null,4)]),f(b,{name:"panel"},{default:g((()=>[v.value?(u(),r("div",W,[i("div",Y,[f(B,{color:m(s)},null,8,["color"]),f(S,{color:m(s)},null,8,["color"])]),i("div",q,[i("div",G,[M(i("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>k(o)?o.value=e:null),type:"text",class:"input"},null,512),[[_,m(o)]])]),i("div",{class:"panel-btn"},[i("div",{class:"btn",onClick:C},"清空"),i("div",{class:"btn",onClick:x},"确定")])])])):P("",!0)])),_:1})]))}}),[["__scopeId","data-v-566fd208"]]),Z=i("p",null,"基础的颜色选择器，主要难点在于各种颜色模式之间的转换",-1),z=i("p",null,"此组件未做兼容处理",-1),J=a({__name:"color-picker",setup(e){const t=l("#ff0000");return(e,a)=>(u(),r("div",null,[Z,z,f(X,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},null,8,["modelValue"]),x(" "+C(t.value),1)]))}});export{J as default};