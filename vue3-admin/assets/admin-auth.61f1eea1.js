import{b as a,_ as s}from"./index.1351dcf1.js";import{d as n,aa as e,a9 as t,U as o,a1 as i,f as r,W as d,E as m}from"./vue.3a1c5826.js";import{B as c}from"./antd.e0f179d3.js";const u=n({name:"AdminAuth",setup(){const s=e(),n=t(),o=a();return{changePermission:a=>{o.changeRoles([a]).then((()=>{s.hasRoute(n.name)||s.push("/404")}))}}}}),f=m(" admin auth "),h=m("admin"),l=m("editor");const p=s(u,[["render",function(a,s,n,e,t,m){const u=c;return o(),i("div",null,[f,r(u,{onClick:s[0]||(s[0]=s=>a.changePermission("admin"))},{default:d((()=>[h])),_:1}),r(u,{onClick:s[1]||(s[1]=s=>a.changePermission("editor"))},{default:d((()=>[l])),_:1})])}]]);export{p as default};
