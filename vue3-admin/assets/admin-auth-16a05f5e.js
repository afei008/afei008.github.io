/* empty css              */import{d as a,ab as e,aa as s,R as n,Z as t,E as o,f as r,U as i}from"./vue-c27573a7.js";import{u as m}from"./request-59a48326.js";import{_ as u}from"./plugin-vueexport-helper-1b428a4d.js";import{B as d}from"./antd-172b9328.js";const p=u(a({name:"AdminAuth",setup(){const a=e(),n=s(),t=m();return{changePermission:e=>{t.changeRoles([e]).then((()=>{a.hasRoute(n.name)||a.push("/404")}))}}}}),[["render",function(a,e,s,m,u,p){const c=d;return n(),t("div",null,[o(" admin auth "),r(c,{onClick:e[0]||(e[0]=e=>a.changePermission("admin"))},{default:i((()=>[o("admin")])),_:1}),r(c,{onClick:e[1]||(e[1]=e=>a.changePermission("editor"))},{default:i((()=>[o("editor")])),_:1})])}]]);export{p as default};