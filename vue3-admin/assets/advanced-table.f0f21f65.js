import{a as e,_ as a}from"./index.1351dcf1.js";import{u as i}from"./usePager.09aae911.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{u as t}from"./useArticle.71dfe112.js";import{k as s,r as l,e as o,d as n,o as r,S as d,U as p,V as g,W as u,a2 as c,f,a1 as h,a3 as m,F as v,E as b,a4 as C,ag as k}from"./vue.3a1c5826.js";import{H as F,S as x,q as y,x as z,I as S,B as R,F as _,e as w}from"./antd.e0f179d3.js";import"./useCurrentInstance.87714743.js";const j=n({name:"AdvancedTable",setup(){const{formData:a,params:n,onFinish:d,onFinishFailed:p,statusOptions:g,resetForm:u,formRef:c}=function(){const e=s({}),a=l({status:void 0,operator:"",pageNum:1,pageSize:10}),i=s({pageNum:1,pageSize:10}),t=s([{value:"",label:"全部"},{value:1,label:"关闭"},{value:2,label:"已上线"},{value:3,label:"运行中"},{value:4,label:"异常"}]);return{formRef:e,formData:a,params:i,onFinish:e=>{e.pageSize&&(a.pageSize=e.pageSize),i.value={...a,...e,pageNum:1}},onFinishFailed:e=>{},statusOptions:t,resetForm:()=>{e.value.resetFields()}}}(),{isLoading:f,articleList:h,pages:m}=t(n),{gridRef:v,gridOptions:b,changeColumn:C,gridCheckeds:k}=function(e){const a=s({}),i=l([{type:"checkbox",field:"checkbox",width:50,visible:!0},{type:"seq",field:"seq",width:50,visible:!0},{field:"describe",title:"描述",filters:[{data:""}],filterRender:{name:"FilterInput"},visible:!0},{field:"pageviews",title:"浏览量",sortable:!0,filters:[{data:""}],filterRender:{name:"FilterContent"},visible:!0},{field:"statusStr",title:"状态",sortable:!0,filters:[{label:"关闭",value:"关闭"},{label:"已上线",value:"已上线"},{label:"运行中",value:"运行中"},{label:"异常",value:"异常"}],visible:!0},{field:"updateTime",title:"更新时间",visible:!0},{field:"operator",title:"操作人",slots:{default:"operator"},filters:[{data:""}],filterRender:{name:"FilterCondition"},visible:!0},{field:"handle",title:"操作",slots:{default:"handle"},visible:!0}]),t=o((()=>({border:!0,height:"auto",autoResize:!0,align:"center",highlightHoverRow:!0,checkboxConfig:{checkField:"checked"},columnConfig:{resizable:!0},sortConfig:{trigger:"cell"},columns:i,data:e.value}))),n=l({records:[],pageviews:0,checkboxChange(e){const{records:a}=e;n.records=a,n.pageviews=a.reduce(((e,a)=>e+a.pageviews),0)}});return{gridRef:a,gridOptions:t,changeColumn:e=>{const i=a.value,{fullColumn:t}=i.getTableColumn();t.forEach((a=>{e===a.property&&(a.visible=!a.visible)})),i.refreshColumn()},gridCheckeds:n}}(h),{page:x}=i(m,d),{initScrollbars:y}=e({el:".vxe-table--body-wrapper"});return r((()=>{y.value()})),{isLoading:f,gridRef:v,gridOptions:b,page:x,clickSetting:e=>{F.info(`订阅成功${e}`)},formRef:c,formData:a,onFinish:d,onFinishFailed:p,statusOptions:g,resetForm:u,changeColumn:C,gridCheckeds:k}}}),O={class:"form"},D=b("查询"),U=b("重置"),P={class:"checkboxs"},A=b("多选框"),I=b("序号"),L={class:"table"},q=b(" 订阅报警 "),N={class:"pager-left"};const T=a(j,[["render",function(e,a,i,t,s,l){const o=y,n=z,r=S,F=R,j=_,T=w,E=d("vxe-pager"),H=d("vxe-grid"),B=x;return p(),g(B,{spinning:e.isLoading},{default:u((()=>[c("div",O,[f(j,{ref:"formRef",model:e.formData,layout:"inline",autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:u((()=>[f(n,{label:"状态",name:"status"},{default:u((()=>[f(o,{ref:"statusSelect",value:e.formData.status,"onUpdate:value":a[0]||(a[0]=a=>e.formData.status=a),placeholder:"请选择",style:{width:"100px"},options:e.statusOptions},null,8,["value","options"])])),_:1}),f(n,{label:"操作人",name:"operator"},{default:u((()=>[f(r,{value:e.formData.operator,"onUpdate:value":a[1]||(a[1]=a=>e.formData.operator=a)},null,8,["value"])])),_:1}),f(n,null,{default:u((()=>[f(F,{type:"primary","html-type":"submit"},{default:u((()=>[D])),_:1}),f(F,{style:{"margin-left":"10px"},onClick:e.resetForm},{default:u((()=>[U])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","onFinish","onFinishFailed"])]),c("p",P,[(p(!0),h(v,null,m(e.gridOptions.columns,((a,i)=>(p(),g(T,{checked:a.visible,"onUpdate:checked":e=>a.visible=e,key:i,onChange:i=>e.changeColumn(a.field)},{default:u((()=>[0===i?(p(),h(v,{key:0},[A],64)):1===i?(p(),h(v,{key:1},[I],64)):(p(),h(v,{key:2},[b(C(a.title),1)],64))])),_:2},1032,["checked","onUpdate:checked","onChange"])))),128))]),c("div",L,[f(H,k(e.gridOptions,{ref:"gridRef",class:"my-grid",onCheckboxChange:e.gridCheckeds.checkboxChange,onCheckboxAll:e.gridCheckeds.checkboxChange}),{operator:u((({row:e})=>[c("span",null,C(e.operator),1)])),handle:u((({row:a})=>[f(F,{type:"primary",onClick:i=>e.clickSetting(a.id)},{default:u((()=>[q])),_:2},1032,["onClick"])])),pager:u((()=>[c("div",N,[c("span",null,"已选择 "+C(e.gridCheckeds.records.length)+" 条数据，浏览次数总计 "+C(e.gridCheckeds.pageviews)+" 次",1)]),f(E,{background:"","current-page":e.page.currentPage,"onUpdate:current-page":a[2]||(a[2]=a=>e.page.currentPage=a),"page-size":e.page.pageSize,"onUpdate:page-size":a[3]||(a[3]=a=>e.page.pageSize=a),total:e.page.totalResult,"page-sizes":e.page.pageSizes,layouts:e.page.layouts,onPageChange:e.page.pageChange},null,8,["current-page","page-size","total","page-sizes","layouts","onPageChange"])])),_:1},16,["onCheckboxChange","onCheckboxAll"])])])),_:1},8,["spinning"])}],["__scopeId","data-v-c6487d23"]]);export{T as default};