/* empty css              */import{u as e}from"./request-66ff45c9.js";import{d as n,k as i,e as s,v as r,R as a,Z as o,_ as t,a0 as l,f as p,U as d,t as u,E as m,F as c}from"./vue-76105073.js";import{_ as v}from"./plugin-vueexport-helper-1b428a4d.js";import{B as f}from"./antd-b7aad617.js";const y=n({name:"DirectivePermission",setup(){const n=e(),r=i(1),a=s((()=>n.roles));return{key:r,currRole:a,changePermission:e=>{r.value+=1,(e=>{n.changeRoles(e)})([e])},btnType:e=>{var n;return(null==(n=null==a?void 0:a.value)?void 0:n.includes(e))?"primary":"default"}}}}),k=t("span",null,"v-permission=\"['admin']\"",-1),g=t("span",null,"v-permission=\"['editor']\"",-1),h=t("span",null,"v-permission=\"['admin', 'editor']\"",-1),j=t("p",null,"不适合使用 v-permission 的情况下，请手动设置 v-if 实现",-1);const P=v(y,[["render",function(e,n,i,s,v,y){const P=f,R=r("permission");return a(),o(c,null,[t("p",null,"当前权限:"+l(e.currRole),1),p(P,{type:e.btnType("admin"),onClick:n[0]||(n[0]=n=>e.changePermission("admin"))},{default:d((()=>[m(" admin ")])),_:1},8,["type"]),p(P,{type:e.btnType("editor"),onClick:n[1]||(n[1]=n=>e.changePermission("editor"))},{default:d((()=>[m(" editor ")])),_:1},8,["type"]),(a(),o("div",{key:e.key},[u((a(),o("p",null,[m(" 只有 admin 才能看到该文字 "),k])),[[R,["admin"]]]),u((a(),o("p",null,[m(" 只有 editor 才能看到该文字 "),g])),[[R,["editor"]]]),u((a(),o("p",null,[m(" admin 和 editor 都能看到该文字 "),h])),[[R,["admin","editor"]]]),j]))],64)}]]);export{P as default};