import{_ as e}from"./index-b9a9d756.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{r as a,d as t,H as l,k as n,w as r,R as o,S as u,U as s,f as m,e as i,Z as c,F as p,$ as d,a9 as v,Q as f,_ as b,E as y,a0 as j}from"./vue-114e4185.js";/* empty css              */import{_ as D}from"./plugin-vueexport-helper-1b428a4d.js";import{K as g,x as h,q as x,I as k,F as _,B as O}from"./antd-27e5ee8c.js";/* empty css              *//* empty css              */import"./index.esm-7b8e2ed2.js";import"./overlayscrollbars-vue.es-90bada0f.js";import"./overlayscrollbars-9b9f1fdc.js";const S=a({data:{},setData(e){S.data=e},changeData(e,a){S.data[e]=a}}),C=S;const R=D(t({name:"CheckboxComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:t}=l(e),o=n(a.value.value);return r(o,(e=>{C.changeData(t.value,e)})),{value:o}}}),[["render",function(e,a,t,l,n,r){const i=g,c=h;return o(),u(c,{label:e.item.label,name:e.item.name},{default:s((()=>[m(i,{value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),name:"checkboxgroup",options:e.item.options},null,8,["value","options"])])),_:1},8,["label","name"])}]]),T=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const F=D(t({name:"SelectComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:t}=l(e),o=n(a.value.value);return r(o,(e=>{C.changeData(t.value,e)})),{value:o}}}),[["render",function(e,a,t,l,n,r){const i=x,c=h;return o(),u(c,{label:e.item.label,name:e.item.name},{default:s((()=>[m(i,{ref:"select",value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),options:e.item.options,placeholder:"请选择"},null,8,["value","options"])])),_:1},8,["label","name"])}]]),P=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const U=D(t({name:"TextComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:t}=l(e),o=n(a.value.value);return r(o,(e=>{C.changeData(t.value,e)})),{value:o}}}),[["render",function(e,a,t,l,n,r){const i=k,c=h;return o(),u(c,{label:e.item.label,name:e.item.name},{default:s((()=>[m(i,{value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),placeholder:e.item.attrs.placeholder},null,8,["value","placeholder"])])),_:1},8,["label","name"])}]]),$=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),z={},M=Object.assign({"./Checkbox.vue":T,"./Select.vue":P,"./Text.vue":$});Object.entries(M).forEach((e=>{const[a,t]=e,l=`${a.replace(/(^\.\/)|(.vue)$/g,"")}`;z[l]=t.default}));const q=t({name:"DynamicForm",components:{...z},props:{dynamicData:{type:Array,default:()=>[]},formData:{type:Object,default:()=>({})},rules:{type:Object,default:()=>({})}},setup(e){const{dynamicData:a,formData:t}=l(e);C.setData(t.value);const r=n(),o=i((()=>a.value.sort(((e,a)=>{const t={...e},l={...a};return t.rank||(t.rank=0),l.rank||(l.rank=0),t.rank===l.rank?0:t.rank>l.rank?1:-1}))));return{formRef:r,sortData:o,validate:()=>r.value.validate()}}});const E=t({name:"DynamicForm",components:{DynamicFormComponent:D(q,[["render",function(e,a,t,l,n,r){const i=_;return o(),c("div",null,[m(i,{model:e.formData,ref:"formRef",layout:"inline",rules:e.rules},{default:s((()=>[(o(!0),c(p,null,d(e.sortData,(e=>(o(),u(v(`${e.type}`),{key:e.name,item:e,name:e.name},null,8,["item","name"])))),128))])),_:1},8,["model","rules"])])}]]),RightPanel:e},setup(){const e=n(),t=a([{type:"Text",label:"文本框",name:"text",value:null,attrs:{placeholder:"请输入"},rank:1},{type:"Select",label:"下拉列表",name:"select",value:null,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"yiminghe",label:"Yiminghe"}],attrs:{placeholder:"请选择"},rank:2},{type:"Checkbox",label:"多选框",name:"checkbox",value:null,options:[{value:"111",label:"选项一"},{value:"222",label:"选项二"}],attrs:{placeholder:"请选择"},rank:3}]),l=a({text:"",select:"",checkbox:""}),r=a({text:[{required:!0,message:"请输入活动名称",trigger:"blur"}]});return{dynamicRef:e,dynamicData:t,formData:l,rules:r,getData:()=>{e.value.validate().then((()=>{})).catch((e=>{}))}}}}),H=b("p",null," 封装常用表单组件，使用时只需传入表单生成对象，即可自动生成表单，更多其他类型请参考源码自行封装 ",-1);const I=D(E,[["render",function(a,t,l,n,r,u){const i=f("dynamic-form-component"),d=O,v=e;return o(),c(p,null,[H,m(i,{ref:"dynamicRef",dynamicData:a.dynamicData,formData:a.formData,rules:a.rules},null,8,["dynamicData","formData","rules"]),b("p",null,[m(d,{type:"primary",onClick:a.getData},{default:s((()=>[y("获取数据")])),_:1},8,["onClick"]),y(" "+j(a.formData),1)]),m(v,{childRouteName:"Form"})],64)}]]);export{I as default};
