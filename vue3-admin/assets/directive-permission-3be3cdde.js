/* empty css              */import{u as e}from"./request-93d71c74.js";import{d as n,k as i,e as s,v as r,S as a,a1 as o,Y as t,a3 as l,f as d,W as p,t as u,E as m,F as c}from"./vue-8d5f356c.js";import{_ as v}from"./plugin-vueexport-helper-1b428a4d.js";import{a7 as f}from"./antd-ca98a620.js";const y=n({name:"DirectivePermission",setup(){const n=e(),r=i(1),a=s((()=>n.roles));return{key:r,currRole:a,changePermission:e=>{r.value+=1,(e=>{n.changeRoles(e)})([e])},btnType:e=>{var n;return(null==(n=null==a?void 0:a.value)?void 0:n.includes(e))?"primary":"default"}}}}),k=t("span",null,"v-permission=\"['admin']\"",-1),g=t("span",null,"v-permission=\"['editor']\"",-1),h=t("span",null,"v-permission=\"['admin', 'editor']\"",-1),j=t("p",null,"不适合使用 v-permission 的情况下，请手动设置 v-if 实现",-1);const P=v(y,[["render",function(e,n,i,s,v,y){const P=f,b=r("permission");return a(),o(c,null,[t("p",null,"当前权限:"+l(e.currRole),1),d(P,{type:e.btnType("admin"),onClick:n[0]||(n[0]=n=>e.changePermission("admin"))},{default:p((()=>[m(" admin ")])),_:1},8,["type"]),d(P,{type:e.btnType("editor"),onClick:n[1]||(n[1]=n=>e.changePermission("editor"))},{default:p((()=>[m(" editor ")])),_:1},8,["type"]),(a(),o("div",{key:e.key},[u((a(),o("p",null,[m(" 只有 admin 才能看到该文字 "),k])),[[b,["admin"]]]),u((a(),o("p",null,[m(" 只有 editor 才能看到该文字 "),g])),[[b,["editor"]]]),u((a(),o("p",null,[m(" admin 和 editor 都能看到该文字 "),h])),[[b,["admin","editor"]]]),j]))],64)}]]);export{P as default};