import{_ as a}from"./index.cf2878ed.js";import{d as t,c as e,n as l,U as s,a1 as o,F as n,a3 as r,a4 as d,r as u,af as p,p as b,f as c,N as m,a2 as f,E as i,W as y}from"./vue.3a1c5826.js";import{_ as g}from"./index.1351dcf1.js";import{B as h}from"./antd.e0f179d3.js";const D=t({setup(){const{state:a}=e("table");return a.data.length?()=>l("tbody",a.data.map((t=>l("tr",a.columns.map((e=>a.slots[e.prop]?l("td",{rowData:t},a.slots[e.prop]({rowData:t})):l("td",t[e.prop]))))))):()=>l("p","no found")}});const _=g(t({setup(){const{state:a}=e("table");return{columns:a.columns}}}),[["render",function(a,t,e,l,u,p){return s(),o("thead",null,[(s(!0),o(n,null,r(a.columns,((a,t)=>(s(),o("th",{key:t},d(a.label),1)))),128))])}]]);const k=t({components:{ETableHead:_,ETableBody:D},props:{data:{type:Array,default:()=>[]}},setup(a){b("table",function(a){const t=u({columns:[],data:a,slots:{}});return{state:p(t),setColumns:a=>{t.columns.push(a)},setSlots:(a,e)=>{t.slots[a]=e}}}(a.data))}}),T={border:"1"};const w=g(k,[["render",function(a,t,e,l,n,r){const d=_,u=D;return s(),o("table",T,[c(d),m(a.$slots,"default"),c(u)])}]]),E=t({props:{prop:{type:String,default:""},label:{type:String,default:""}},setup(a,t){const{setColumns:l,setSlots:s}=e("table");l({label:a.label,prop:a.prop});const{slots:o}=t;o&&o.default&&s(`${a.prop}`,o.default)},render:()=>null}),j=t({props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}}}),S={border:"1"};const $=g(j,[["render",function(a,t,e,l,u,p){return s(),o("table",S,[f("thead",null,[(s(!0),o(n,null,r(a.columns,((a,t)=>(s(),o("th",{key:t},d(a.label),1)))),128))]),f("tbody",null,[(s(!0),o(n,null,r(a.data,((t,e)=>(s(),o("tr",{key:e},[(s(!0),o(n,null,r(a.columns,((e,l)=>(s(),o("td",{key:l},[f("span",null,[e.slots?m(a.$slots,e.slots,{key:1,rowData:t}):m(a.$slots,"default",{key:0},(()=>[i(d(t[e.prop]),1)]))])])))),128))])))),128))])])}]]),x=t({components:{BTable:$,ETable:w,ETableColumn:E,RightPanel:a},setup:()=>({tableData:u([{big:10,date:"2016-05-02",name:"1王小虎",address:"上海市普陀区金沙江路 1518 弄"},{big:0,date:"2016-05-04",name:"2王小虎",address:"上海市普陀区金沙江路 1517 弄"},{big:1,date:"2016-05-01",name:"4王小虎",address:"上海市普陀区金沙江路 1519 弄"},{big:3,date:"2016-05-03",name:"3王小虎",address:"上海市普陀区金沙江路 1516 弄"}]),columns:[{label:"大小",prop:"big"},{label:"地址",prop:"address"},{label:"姓名",prop:"name"},{label:"日期",prop:"date",slots:"detail"}]})}),A=f("h1",null,"类似 antd 表格的传参方式",-1),B=f("h1",null,"类似 element-ui 表格的传参方式",-1);const C=g(x,[["render",function(t,e,l,r,u,p){const b=h,m=$,f=E,g=w,D=a;return s(),o(n,null,[A,c(m,{data:t.tableData,columns:t.columns},{detail:y((a=>[c(b,null,{default:y((()=>[i(d(a.rowData),1)])),_:2},1024)])),_:1},8,["data","columns"]),B,c(g,{data:t.tableData},{default:y((()=>[c(f,{sortable:!0,prop:"big",label:"大小"}),c(f,{sortable:!0,prop:"address",label:"地址"}),c(f,{sortable:!0,prop:"name",label:"姓名"}),c(f,{sortable:!0,prop:"date",label:"日期"},{default:y((a=>[c(b,null,{default:y((()=>[i(d(a.rowData),1)])),_:2},1024)])),_:1})])),_:1},8,["data"]),c(D,{childRouteName:"Table"})],64)}]]);export{C as default};
