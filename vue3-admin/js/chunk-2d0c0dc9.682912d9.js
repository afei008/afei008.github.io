(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0dc9"],{"441d":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["createTextVNode"])(" admin "),o=Object(c["createTextVNode"])(" editor "),u=Object(c["createElementVNode"])("p",null,"切换权限时，左侧的权限测试菜单会变化",-1);function i(e,t,n,i,a,d){var l=Object(c["resolveComponent"])("a-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createElementVNode"])("p",null,"当前权限:"+Object(c["toDisplayString"])(e.currRole),1),Object(c["createVNode"])(l,{type:e.btnType("admin"),onClick:t[0]||(t[0]=function(t){return e.changePermission("admin")})},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["type"]),Object(c["createVNode"])(l,{type:e.btnType("editor"),onClick:t[1]||(t[1]=function(t){return e.changePermission("editor")})},{default:Object(c["withCtx"])((function(){return[o]})),_:1},8,["type"]),u])}n("caad"),n("2532");var a=n("0613"),d=Object(c["defineComponent"])({name:"PagePermission",setup:function(){var e=Object(a["c"])(),t=Object(c["ref"])(1),n=Object(c["computed"])((function(){return e.getters["userState/roles"]})),r=function(t){return e.dispatch("userState/changeRoles",t)},o=function(e){t.value+=1,r([e])},u=function(e){return n.value.includes(e)?"primary":"default"};return{key:t,currRole:n,changePermission:o,btnType:u}}}),l=n("6b0d"),s=n.n(l);const b=s()(d,[["render",i]]);t["default"]=b}}]);