import{_ as e}from"./index.1351dcf1.js";import{u as a}from"./usePager.09aae911.js";/* empty css               */import{u as t}from"./useArticle.71dfe112.js";import{k as i,e as s,d as r,S as n,U as o,V as p,W as g,f as l,a2 as d,a4 as u,ab as c,ac as f,E as m}from"./vue.3a1c5826.js";import{H as S,S as h,B as v}from"./antd.e0f179d3.js";import"./useCurrentInstance.87714743.js";const z=r({name:"BaseTable",setup(){const e=i({pageNum:1,pageSize:10}),{isLoading:r,articleList:n,pages:o}=t(e),{gridOptions:p}=function(e){const a=i([{type:"checkbox",width:50},{type:"seq",width:50},{field:"describe",title:"描述"},{field:"pageviews",title:"浏览量"},{field:"statusStr",title:"状态"},{field:"updateTime",title:"更新时间"},{field:"operator",title:"操作人",slots:{default:"operator"}},{field:"handle",title:"操作",slots:{default:"handle"}}]);return{gridOptions:s((()=>({border:!0,columns:a.value,data:e.value})))}}(n),{page:g}=a(o,(a=>{e.value.pageNum=a.pageNum,e.value.pageSize=a.pageSize}));return{isLoading:r,gridOptions:p,page:g,clickSetting:e=>{S.info(`订阅成功${e}`)}}}}),j=m(" 订阅报警 ");const k=e(z,[["render",function(e,a,t,i,s,r){const m=v,S=n("vxe-pager"),z=n("vxe-grid"),k=h;return o(),p(k,{spinning:e.isLoading},{default:g((()=>[l(z,c(f(e.gridOptions)),{operator:g((({row:e})=>[d("span",null,u(e.operator),1)])),handle:g((({row:a})=>[l(m,{type:"primary",onClick:t=>e.clickSetting(a.id)},{default:g((()=>[j])),_:2},1032,["onClick"])])),pager:g((()=>[l(S,{background:"","current-page":e.page.currentPage,"onUpdate:current-page":a[0]||(a[0]=a=>e.page.currentPage=a),"page-size":e.page.pageSize,"onUpdate:page-size":a[1]||(a[1]=a=>e.page.pageSize=a),total:e.page.totalResult,onPageChange:e.page.pageChange,layouts:e.page.layouts},null,8,["current-page","page-size","total","onPageChange","layouts"])])),_:1},16)])),_:1},8,["spinning"])}]]);export{k as default};
