import{_ as e}from"./index.cf2878ed.js";import{_ as a}from"./index.1351dcf1.js";/* empty css               *//* empty css              *//* empty css               */import{r as t,d as l,H as n,k as r,w as o,U as u,V as m,W as s,f as c,e as i,a1 as p,F as d,a3 as f,a8 as v,S as b,a2 as y,E as D,a4 as g}from"./vue.3a1c5826.js";import{K as h,x as k,q as j,I as x,F as _,B as O}from"./antd.e0f179d3.js";/* empty css               */const S=t({data:{},setData(e){S.data=e},changeData(e,a){S.data[e]=a}}),C=S;const F=a(l({name:"CheckboxComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:t}=n(e),l=r(a.value.value);return o(l,(e=>{C.changeData(t.value,e)})),{value:l}}}),[["render",function(e,a,t,l,n,r){const o=h,i=k;return u(),m(i,{label:e.item.label,name:e.item.name},{default:s((()=>[c(o,{value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),name:"checkboxgroup",options:e.item.options},null,8,["value","options"])])),_:1},8,["label","name"])}]]),R=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const T=a(l({name:"SelectComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:t}=n(e),l=r(a.value.value);return o(l,(e=>{C.changeData(t.value,e)})),{value:l}}}),[["render",function(e,a,t,l,n,r){const o=j,i=k;return u(),m(i,{label:e.item.label,name:e.item.name},{default:s((()=>[c(o,{ref:"select",value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),options:e.item.options,placeholder:"请选择"},null,8,["value","options"])])),_:1},8,["label","name"])}]]),P=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const U=a(l({name:"TextComp",props:{item:{type:Object,default:()=>({})},name:{type:String,default:""}},setup(e){const{item:a,name:t}=n(e),l=r(a.value.value);return o(l,(e=>{C.changeData(t.value,e)})),{value:l}}}),[["render",function(e,a,t,l,n,r){const o=x,i=k;return u(),m(i,{label:e.item.label,name:e.item.name},{default:s((()=>[c(o,{value:e.value,"onUpdate:value":a[0]||(a[0]=a=>e.value=a),placeholder:e.item.attrs.placeholder},null,8,["value","placeholder"])])),_:1},8,["label","name"])}]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),M={},$=Object.assign({"./Checkbox.vue":R,"./Select.vue":P,"./Text.vue":z});Object.entries($).forEach((e=>{const[a,t]=e,l=`${a.replace(/(^\.\/)|(.vue)$/g,"")}`;M[l]=t.default}));const q=l({name:"DynamicForm",components:{...M},props:{dynamicData:{type:Array,default:()=>[]},formData:{type:Object,default:()=>({})},rules:{type:Object,default:()=>({})}},setup(e){const{dynamicData:a,formData:t}=n(e);C.setData(t.value);const l=r(),o=i((()=>a.value.sort(((e,a)=>{const t={...e},l={...a};return t.rank||(t.rank=0),l.rank||(l.rank=0),t.rank===l.rank?0:t.rank>l.rank?1:-1}))));return{formRef:l,sortData:o,validate:()=>l.value.validate()}}});const E=l({name:"DynamicForm",components:{DynamicFormComponent:a(q,[["render",function(e,a,t,l,n,r){const o=_;return u(),p("div",null,[c(o,{model:e.formData,ref:"formRef",layout:"inline",rules:e.rules},{default:s((()=>[(u(!0),p(d,null,f(e.sortData,(e=>(u(),m(v(`${e.type}`),{key:e.name,item:e,name:e.name},null,8,["item","name"])))),128))])),_:1},8,["model","rules"])])}]]),RightPanel:e},setup(){const e=r(),a=t([{type:"Text",label:"文本框",name:"text",value:null,attrs:{placeholder:"请输入"},rank:1},{type:"Select",label:"下拉列表",name:"select",value:null,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"yiminghe",label:"Yiminghe"}],attrs:{placeholder:"请选择"},rank:2},{type:"Checkbox",label:"多选框",name:"checkbox",value:null,options:[{value:"111",label:"选项一"},{value:"222",label:"选项二"}],attrs:{placeholder:"请选择"},rank:3}]),l=t({text:"",select:"",checkbox:""}),n=t({text:[{required:!0,message:"请输入活动名称",trigger:"blur"}]});return{dynamicRef:e,dynamicData:a,formData:l,rules:n,getData:()=>{e.value.validate().then((()=>{})).catch((e=>{}))}}}}),w=y("p",null," 封装常用表单组件，使用时只需传入表单生成对象，即可自动生成表单，更多其他类型请参考源码自行封装 ",-1),A=D("获取数据");const B=a(E,[["render",function(a,t,l,n,r,o){const m=b("dynamic-form-component"),i=O,f=e;return u(),p(d,null,[w,c(m,{ref:"dynamicRef",dynamicData:a.dynamicData,formData:a.formData,rules:a.rules},null,8,["dynamicData","formData","rules"]),y("p",null,[c(i,{type:"primary",onClick:a.getData},{default:s((()=>[A])),_:1},8,["onClick"]),D(" "+g(a.formData),1)]),c(f,{childRouteName:"Form"})],64)}]]);export{B as default};
