/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{r as e,d as a,H as l,k as t,w as n,R as o,S as u,U as r,f as s,e as i,Z as d,F as c,$ as p,a9 as m,_ as v,u as f,W as b,ae as y,af as h,Q as k,E as _,a0 as x}from"./vue-c27573a7.js";/* empty css              */import{_ as g}from"./plugin-vueexport-helper-1b428a4d.js";import{K as j,x as C,q as D,I as S,F as U,N as O,O as T,B as w,n as I}from"./antd-dee7649b.js";/* empty css              *//* empty css              *//* empty css              */const M=e({data:{},setData(e){M.data=e},changeData(e,a){M.data[e]=a}}),P=M;const R=g(a({name:"CheckboxComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:o}=l(e),u=t(a.value.value);return n([u,e.item],(a=>{P.changeData(o.value,a[0]),e.item.build||(u.value=a[1].value)})),{value:u}}}),[["render",function(e,a,l,t,n,i){const d=j,c=C;return o(),u(c,{label:e.item.label,name:e.item.name},{default:r((()=>[s(d,{value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),name:"checkboxgroup",options:e.item.options},null,8,["value","options"])])),_:1},8,["label","name"])}]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const $=g(a({name:"SelectComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:o}=l(e),u=t(a.value.value);return n([u,e.item],(a=>{P.changeData(o.value,a[0]),e.item.build||(u.value=a[1].value)})),{value:u}}}),[["render",function(e,a,l,t,n,i){const d=D,c=C;return o(),u(c,{label:e.item.label,name:e.item.name},{default:r((()=>[s(d,{value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),options:e.item.options,placeholder:"请选择"},null,8,["value","options"])])),_:1},8,["label","name"])}]]),B=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const E=g(a({name:"TextComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:o}=l(e),u=t(a.value.value);return n([u,e.item],(a=>{P.changeData(o.value,a[0]),e.item.build||(u.value=a[1].value)})),{value:u}}}),[["render",function(e,a,l,t,n,i){const d=S,c=C;return o(),u(c,{label:e.item.label,name:e.item.name},{default:r((()=>[s(d,{value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),placeholder:e.item.attrs.placeholder},null,8,["value","placeholder"])])),_:1},8,["label","name"])}]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),z={},A=Object.assign({"./Checkbox.vue":F,"./Select.vue":B,"./Text.vue":K});Object.entries(A).forEach((e=>{const[a,l]=e,t=`${a.replace(/(^\.\/)|(.vue)$/g,"")}`;z[t]=l.default}));const J=z,N=e({prop:{type:"",name:"",label:"",value:"",options:[],attrs:{placeholder:""}},setProp(e){this.prop=e}}),q=a({name:"DynamicForm",components:{...J},props:{data:{type:Array,default:()=>[]}},setup(a){const{data:n}=l(a),o=t(),u={};n.value.forEach((e=>{u[e.name]=""}));const r=e(u);P.setData(r);const s={};n.value.filter((e=>e.rule)).forEach((e=>{s[e.name]=e.rule}));const d=i((()=>n.value.sort(((e,a)=>{const l={...e},t={...a};return l.rank||(l.rank=0),t.rank||(t.rank=0),l.rank===t.rank?0:l.rank>t.rank?1:-1}))));return{formRef:o,sortData:d,validate:()=>o.value.validate(),rules:s,clickComp:e=>{if(e.build)return;const{name:a}=e,l=d.value.find((e=>e.name===a));N.setProp(l)},formData:r}}}),H={class:"form-wrap"};const L=g(q,[["render",function(e,a,l,t,n,i){const v=U;return o(),d("div",H,[s(v,{ref:"formRef",model:e.formData,rules:e.rules},{default:r((()=>[(o(!0),d(c,null,p(e.sortData,(a=>(o(),u(m(`${a.type}`),{key:a.name,item:a,name:a.name,onClick:l=>e.clickComp(a)},null,8,["item","name","onClick"])))),128))])),_:1},8,["model","rules"])])}]]),Q=e=>(y("data-v-994878c0"),e=e(),h(),e),V={class:"sidebar"},W={class:"flex"},Y=Q((()=>v("div",{class:"addon-before"},"绑定值",-1))),Z=Q((()=>v("div",{class:"addon-before"},"标签",-1))),G={class:"flex"},X=Q((()=>v("div",{class:"addon-before"},"占位符",-1))),ee=a({name:"DynamicForm",components:{DynamicFormComponent:L,SidebarComp:g(a({__name:"SidebarComp",setup(e){const a=t(["1"]),{prop:n}=l(N);return(e,l)=>{const t=S,i=T,c=D,p=j,m=O;return o(),d("div",V,[s(m,{activeKey:a.value,"onUpdate:activeKey":l[6]||(l[6]=e=>a.value=e)},{default:r((()=>[s(i,{key:"1",header:"基础"},{default:r((()=>[v("div",W,[s(t,{value:f(n).name,"onUpdate:value":l[0]||(l[0]=e=>f(n).name=e)},{addonBefore:r((()=>[Y])),_:1},8,["value"]),s(t,{value:f(n).label,"onUpdate:value":l[1]||(l[1]=e=>f(n).label=e)},{addonBefore:r((()=>[Z])),_:1},8,["value"])]),v("div",G,[f(n).attrs?(o(),u(t,{key:0,value:f(n).attrs.placeholder,"onUpdate:value":l[2]||(l[2]=e=>f(n).attrs.placeholder=e)},{addonBefore:r((()=>[X])),_:1},8,["value"])):b("",!0)])])),_:1}),s(i,{header:"默认值"},{default:r((()=>["Text"===f(n).type?(o(),u(t,{key:0,value:f(n).value,"onUpdate:value":l[3]||(l[3]=e=>f(n).value=e)},null,8,["value"])):b("",!0),"Select"===f(n).type?(o(),u(c,{key:1,ref:"select",value:f(n).value,"onUpdate:value":l[4]||(l[4]=e=>f(n).value=e),options:f(n).options,placeholder:"请选择"},null,8,["value","options"])):b("",!0),"Checkbox"===f(n).type?(o(),u(p,{key:2,value:f(n).value,"onUpdate:value":l[5]||(l[5]=e=>f(n).value=e),name:"checkboxgroup",options:f(n).options},null,8,["value","options"])):b("",!0)])),_:1})])),_:1},8,["activeKey"])])}}}),[["__scopeId","data-v-994878c0"]])},setup(){const a=t(),l=e([{type:"Text",label:"文本框",name:"text",value:null,attrs:{placeholder:"请输入"},rank:1},{type:"Select",label:"下拉列表",name:"select",value:null,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"yiminghe",label:"Yiminghe"}],attrs:{placeholder:"请选择"},rank:2},{type:"Checkbox",label:"多选框",name:"checkbox",value:["111"],options:[{value:"111",label:"选项一"},{value:"222",label:"选项二"}],attrs:{placeholder:"请选择"},rank:3}]),n=t([]),o=t(""),u=t(!1),r=t(!1);return{dynamicRef:a,data:l,buildData:n,modalData:o,visible:u,show:r,clickModal:e=>{"config"===e?(n.value=l.map((e=>{const a={...e};return a.build=!0,a})),r.value=!0):"data"===e&&a.value.validate().then((e=>{o.value=e,u.value=!0}))},clickAddInput:()=>{l.push({type:"Text",label:"文本框",name:`text${l.length+1}`,value:null,attrs:{placeholder:"请输入"},rank:1/0})}}}}),ae={class:"dynamic-form"},le={class:"head"},te={class:"body flex"},ne={class:"left"},oe=(e=>(y("data-v-df348aab"),e=e(),h(),e))((()=>v("p",null," 封装常用表单组件，使用时只需传入表单生成对象，即可自动生成表单，更多其他类型请参考源码自行封装 ",-1))),ue={class:"right shadow bg-white"};const re=g(ee,[["render",function(e,a,l,t,n,u){const i=w,c=k("dynamic-form-component"),p=k("sidebar-comp"),m=I;return o(),d("div",ae,[v("div",le,[s(i,{type:"primary",onClick:e.clickAddInput},{default:r((()=>[_("新增文本框")])),_:1},8,["onClick"]),s(i,{type:"primary",onClick:a[0]||(a[0]=a=>e.clickModal("data"))},{default:r((()=>[_("表单返回值")])),_:1}),s(i,{type:"primary",onClick:a[1]||(a[1]=a=>e.clickModal("config"))},{default:r((()=>[_("预览")])),_:1})]),v("div",te,[v("div",ne,[oe,s(c,{ref:"dynamicRef",data:e.data},null,8,["data"])]),v("div",ue,[s(p,{data:e.data},null,8,["data"])])]),s(m,{visible:e.visible,"onUpdate:visible":a[2]||(a[2]=a=>e.visible=a),title:"请自行格式化代码查看"},{default:r((()=>[_(x(e.modalData),1)])),_:1},8,["visible"]),s(m,{visible:e.show,"onUpdate:visible":a[3]||(a[3]=a=>e.show=a),title:"实际效果","destroy-on-close":!0},{default:r((()=>[s(c,{ref:"dynamicRef",data:e.buildData},null,8,["data"])])),_:1},8,["visible"])])}],["__scopeId","data-v-df348aab"]]);export{re as default};
