/* empty css              */import{u as e}from"./usePager-7d9e1797.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{O as a}from"./overlayscrollbars-9b9f1fdc.js";import{u as i}from"./useArticle-f968405b.js";import{k as t,r as s,e as l,d as o,o as r,Q as n,R as d,S as p,U as u,_ as g,f as c,E as f,Z as m,$ as h,F as b,a0 as v,ak as C}from"./vue-114e4185.js";import{H as k,S as F,q as x,x as y,I as S,B as R,F as j,e as z}from"./antd-27e5ee8c.js";import{_}from"./plugin-vueexport-helper-1b428a4d.js";import"./useCurrentInstance-b421f673.js";const w=o({name:"AdvancedTable",setup(){const{formData:o,params:n,onFinish:d,onFinishFailed:p,statusOptions:u,resetForm:g,formRef:c}=function(){const e=t({}),a=s({status:void 0,operator:"",pageNum:1,pageSize:10}),i=t({pageNum:1,pageSize:10}),l=t([{value:"",label:"全部"},{value:1,label:"关闭"},{value:2,label:"已上线"},{value:3,label:"运行中"},{value:4,label:"异常"}]);return{formRef:e,formData:a,params:i,onFinish:e=>{e.pageSize&&(a.pageSize=e.pageSize),i.value={...a,...e,pageNum:1}},onFinishFailed:e=>{},statusOptions:l,resetForm:()=>{e.value.resetFields()}}}(),{isLoading:f,articleList:m,pages:h}=i(n),{gridRef:b,gridOptions:v,changeColumn:C,gridCheckeds:F}=function(e){const a=t({}),i=s([{type:"checkbox",field:"checkbox",width:50,visible:!0},{type:"seq",field:"seq",width:50,visible:!0},{field:"describe",title:"描述",filters:[{data:""}],filterRender:{name:"FilterInput"},visible:!0},{field:"pageviews",title:"浏览量",sortable:!0,filters:[{data:""}],filterRender:{name:"FilterContent"},visible:!0},{field:"statusStr",title:"状态",sortable:!0,filters:[{label:"关闭",value:"关闭"},{label:"已上线",value:"已上线"},{label:"运行中",value:"运行中"},{label:"异常",value:"异常"}],visible:!0},{field:"updateTime",title:"更新时间",visible:!0},{field:"operator",title:"操作人",slots:{default:"operator"},filters:[{data:""}],filterRender:{name:"FilterCondition"},visible:!0},{field:"handle",title:"操作",slots:{default:"handle"},visible:!0}]),o=l((()=>({border:!0,height:"auto",autoResize:!0,align:"center",highlightHoverRow:!0,checkboxConfig:{checkField:"checked"},columnConfig:{resizable:!0},sortConfig:{trigger:"cell"},columns:i,data:e.value}))),r=s({records:[],pageviews:0,checkboxChange(e){const{records:a}=e;r.records=a,r.pageviews=a.reduce(((e,a)=>e+a.pageviews),0)}});return{gridRef:a,gridOptions:o,changeColumn:e=>{const i=a.value,{fullColumn:t}=i.getTableColumn();t.forEach((a=>{e===a.property&&(a.visible=!a.visible)})),i.refreshColumn()},gridCheckeds:r}}(m),{page:x}=e(h,d);return r((()=>{a(document.querySelector(".vxe-table--body-wrapper"),{scrollbars:{autoHide:"leave"},overflow:{x:"hidden"}})})),{isLoading:f,gridRef:b,gridOptions:v,page:x,clickSetting:e=>{k.info(`订阅成功${e}`)},formRef:c,formData:o,onFinish:d,onFinishFailed:p,statusOptions:u,resetForm:g,changeColumn:C,gridCheckeds:F}}}),O={class:"form"},D={class:"checkboxs"},U={class:"table"},P={class:"pager-left"};const I=_(w,[["render",function(e,a,i,t,s,l){const o=x,r=y,k=S,_=R,w=j,I=z,q=n("vxe-pager"),A=n("vxe-grid"),H=F;return d(),p(H,{spinning:e.isLoading},{default:u((()=>[g("div",O,[c(w,{ref:"formRef",model:e.formData,layout:"inline",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:u((()=>[c(r,{label:"状态",name:"status"},{default:u((()=>[c(o,{ref:"statusSelect",value:e.formData.status,"onUpdate:value":a[0]||(a[0]=a=>e.formData.status=a),placeholder:"请选择",style:{width:"100px"},options:e.statusOptions},null,8,["value","options"])])),_:1}),c(r,{label:"操作人",name:"operator"},{default:u((()=>[c(k,{value:e.formData.operator,"onUpdate:value":a[1]||(a[1]=a=>e.formData.operator=a)},null,8,["value"])])),_:1}),c(r,null,{default:u((()=>[c(_,{type:"primary","html-type":"submit"},{default:u((()=>[f("查询")])),_:1}),c(_,{style:{"margin-left":"10px"},onClick:e.resetForm},{default:u((()=>[f("重置")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","onFinish","onFinishFailed"])]),g("p",D,[(d(!0),m(b,null,h(e.gridOptions.columns,((a,i)=>(d(),p(I,{checked:a.visible,"onUpdate:checked":e=>a.visible=e,key:i,onChange:i=>e.changeColumn(a.field)},{default:u((()=>[0===i?(d(),m(b,{key:0},[f("多选框")],64)):1===i?(d(),m(b,{key:1},[f("序号")],64)):(d(),m(b,{key:2},[f(v(a.title),1)],64))])),_:2},1032,["checked","onUpdate:checked","onChange"])))),128))]),g("div",U,[c(A,C(e.gridOptions,{ref:"gridRef",class:"my-grid",onCheckboxChange:e.gridCheckeds.checkboxChange,onCheckboxAll:e.gridCheckeds.checkboxChange}),{operator:u((({row:e})=>[g("span",null,v(e.operator),1)])),handle:u((({row:a})=>[c(_,{type:"primary",onClick:i=>e.clickSetting(a.id)},{default:u((()=>[f(" 订阅报警 ")])),_:2},1032,["onClick"])])),pager:u((()=>[g("div",P,[g("span",null,"已选择 "+v(e.gridCheckeds.records.length)+" 条数据，浏览次数总计 "+v(e.gridCheckeds.pageviews)+" 次",1)]),c(q,{background:"","current-page":e.page.currentPage,"onUpdate:currentPage":a[2]||(a[2]=a=>e.page.currentPage=a),"page-size":e.page.pageSize,"onUpdate:pageSize":a[3]||(a[3]=a=>e.page.pageSize=a),total:e.page.totalResult,"page-sizes":e.page.pageSizes,layouts:e.page.layouts,onPageChange:e.page.pageChange},null,8,["current-page","page-size","total","page-sizes","layouts","onPageChange"])])),_:1},16,["onCheckboxChange","onCheckboxAll"])])])),_:1},8,["spinning"])}],["__scopeId","data-v-7ab63bb0"]]);export{I as default};
