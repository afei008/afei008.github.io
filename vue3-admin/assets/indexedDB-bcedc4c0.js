/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{r as e,w as a,o as l,H as n,k as s,e as t,d as o,J as i,Z as d,S as r,a1 as m,Y as u,f as c,W as f,ad as p,ae as v,E as g,ak as F}from"./vue-8d5f356c.js";import{aJ as h,ah as b,ak as k,a4 as x,aM as D,a7 as w}from"./antd-ca98a620.js";import{_}from"./plugin-vueexport-helper-1b428a4d.js";function R(s){let t,o;const i="customers",d=e({idbList:[]}),r=Array.from({length:10},((e,a)=>({sn:`${a}`,name:`name-${a}`,age:`${18+a}`,email:`name-${a}@email.com`}))),m=(e,a)=>o.transaction(e,a).objectStore(e[0]),u=()=>{m([i]).getAll().onsuccess=e=>{d.idbList=e.target.result}},c=e=>new Promise((a=>{m([i]).get(e).onsuccess=e=>{const{result:l}=e.target;a(l)}})),f=()=>{window.indexedDB?(t=window.indexedDB.open("myIdb"),t.onerror=e=>{},t.onsuccess=e=>{o=e.target.result,u()},t.onupgradeneeded=e=>{o=e.target.result,(()=>{const e=o.createObjectStore(i,{keyPath:"sn"});e.createIndex("name","name",{unique:!1}),e.createIndex("email","email",{unique:!0}),e.transaction.oncomplete=()=>{const e=m([i],"readwrite");r.forEach((a=>e.add(a)))}})()}):h.error("您的浏览器不支持 IndexedDB")},p=e=>new Promise((a=>{const l=[];m([i]).index("name").openCursor().onsuccess=n=>{const s=n.target.result;s?(s.key.indexOf(e)>-1&&l.push(s.value),s.continue()):a(l)}}));return a(s,(()=>{(()=>{const{sn:e,name:a}=s.value;""===e&&""===a?u():""!==e&&""===a?c(e).then((e=>{d.idbList=[e]})):""===e&&""!==a?p(a).then((e=>{d.idbList=e})):p(a).then((a=>{d.idbList=a.filter((a=>a.sn===e))}))})()}),{deep:!0}),l((()=>{f()})),{addDB:async e=>{const{sn:a}=e;await c(a)?h.error("数据已存在"):m([i],"readwrite").add(e).onsuccess=()=>u()},putDB:(e,a)=>{const l=m([i],"readwrite");l.get(e).onsuccess=e=>{const n=e.target.result;Object.assign(n,a);l.put(n).onsuccess=()=>{h.success("操作成功"),u()}}},delDB:e=>{m([i],"readwrite").delete(e).onsuccess=()=>u()},getAllDB:u,...n(d)}}const{useForm:y}=b;const j=o({name:"IndexedDB",setup(){const a=s(!0),l=s(""),{formRef:n,formData:o,formParams:d,onFinishForm:r,onFinishFailedForm:m,resetForm:u}=function(){const a=s({}),l=e({sn:"",name:""}),n=s({pageNum:1,pageSize:10});return{formRef:a,formData:l,formParams:n,onFinishForm:e=>{n.value={...l,...e,pageNum:1}},onFinishFailedForm:e=>{},resetForm:()=>{a.value.resetFields()}}}(),{showModal:c,modelRef:f,modalValidateInfos:p,modalResetFields:v,modalValidate:g}=function(){const a=s(!1),l=e({sn:"",name:"",age:"",email:""}),n=e({sn:[{required:!0,message:"请输入 ssn 码"}],name:[{required:!0,message:"请输入姓名"}],age:[{required:!0,message:"请输入年龄"}],email:[{required:!0,message:"请输入邮箱"}]}),{resetFields:t,validate:o,validateInfos:i}=y(l,n,{onValidate:(...e)=>{}});return{showModal:a,modelRef:l,modalValidateInfos:i,modalResetFields:t,modalValidate:o}}(),{addDB:F,putDB:h,delDB:b,idbList:k}=R(d),{gridOptions:x}=function(e){const a=s([{type:"seq",width:50},{field:"sn",title:"sn码"},{field:"name",title:"姓名"},{field:"age",title:"年龄"},{field:"email",title:"邮箱"},{field:"handle",title:"操作",slots:{default:"handle"}}]);return{gridOptions:t((()=>({border:!0,columns:a.value,data:e.value})))}}(k);return{formRef:n,formData:o,formParams:d,onFinishForm:r,onFinishFailedForm:m,resetForm:u,gridOptions:x,showModal:c,modelRef:f,modalValidateInfos:p,clickAdd:()=>{c.value=!0,a.value=!0},clickAddOk:()=>{g().then((()=>{c.value=!1,a.value?F(i(f)):h(l.value,i(f))})).catch((e=>{}))},clickAddCancel:()=>{v()},clickEdit:e=>{a.value=!1,c.value=!0,l.value=e.sn,Object.assign(f,e)},clickDel:e=>{b(e.sn)},isAdd:a}}}),I={class:"form"},C={class:"table"};const B=_(j,[["render",function(e,a,l,n,s,t){const o=x,i=D,h=w,_=b,R=d("vxe-grid"),y=k;return r(),m("div",null,[u("div",I,[c(_,{ref:"formRef",model:e.formData,layout:"inline",autocomplete:"off",onFinish:e.onFinishForm,onFinishFailed:e.onFinishFailedForm},{default:f((()=>[c(i,{label:"sn码",name:"sn"},{default:f((()=>[c(o,{value:e.formData.sn,"onUpdate:value":a[0]||(a[0]=a=>e.formData.sn=a)},null,8,["value"])])),_:1}),c(i,{label:"姓名",name:"name"},{default:f((()=>[c(o,{value:e.formData.name,"onUpdate:value":a[1]||(a[1]=a=>e.formData.name=a)},null,8,["value"])])),_:1}),c(i,null,{default:f((()=>[c(h,{type:"primary","html-type":"submit"},{default:f((()=>[g("查询")])),_:1}),c(h,{style:{"margin-left":"10px"},onClick:e.resetForm},{default:f((()=>[g("重置")])),_:1},8,["onClick"]),c(h,{style:{"margin-left":"10px"},onClick:e.clickAdd},{default:f((()=>[g("新增")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","onFinish","onFinishFailed"])]),u("div",C,[c(R,p(v(e.gridOptions)),{handle:f((({row:a})=>[c(h,{type:"primary",onClick:l=>e.clickEdit(a)},{default:f((()=>[g(" 编辑 ")])),_:2},1032,["onClick"]),c(h,{style:{"margin-left":"10px"},type:"primary",onClick:l=>e.clickDel(a)},{default:f((()=>[g(" 删除 ")])),_:2},1032,["onClick"])])),_:1},16)]),c(y,{visible:e.showModal,"onUpdate:visible":a[6]||(a[6]=a=>e.showModal=a),title:"Basic Modal",onOk:e.clickAddOk,onCancel:e.clickAddCancel},{default:f((()=>[c(_,{"label-col":{span:4},"wrapper-col":{span:14}},{default:f((()=>[c(i,F({label:"ssn码"},e.modalValidateInfos.sn),{default:f((()=>[c(o,{value:e.modelRef.sn,"onUpdate:value":a[2]||(a[2]=a=>e.modelRef.sn=a),disabled:!e.isAdd},null,8,["value","disabled"])])),_:1},16),c(i,F({label:"姓名"},e.modalValidateInfos.name),{default:f((()=>[c(o,{value:e.modelRef.name,"onUpdate:value":a[3]||(a[3]=a=>e.modelRef.name=a)},null,8,["value"])])),_:1},16),c(i,F({label:"年龄"},e.modalValidateInfos.age),{default:f((()=>[c(o,{value:e.modelRef.age,"onUpdate:value":a[4]||(a[4]=a=>e.modelRef.age=a)},null,8,["value"])])),_:1},16),c(i,F({label:"邮箱"},e.modalValidateInfos.email),{default:f((()=>[c(o,{value:e.modelRef.email,"onUpdate:value":a[5]||(a[5]=a=>e.modelRef.email=a)},null,8,["value"])])),_:1},16)])),_:1})])),_:1},8,["visible","onOk","onCancel"])])}],["__scopeId","data-v-4cb2c42a"]]);export{B as default};
