(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2768"],{"23e6":function(e,t,n){"use strict";n.r(t);var c=n("8bbf"),o=Object(c["createTextVNode"])(" admin auth "),r=Object(c["createTextVNode"])("admin"),a=Object(c["createTextVNode"])("editor");function i(e,t,n,i,u,b){var d=Object(c["resolveComponent"])("a-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[o,Object(c["createVNode"])(d,{onClick:t[0]||(t[0]=function(t){return e.changePermission("admin")})},{default:Object(c["withCtx"])((function(){return[r]})),_:1}),Object(c["createVNode"])(d,{onClick:t[1]||(t[1]=function(t){return e.changePermission("editor")})},{default:Object(c["withCtx"])((function(){return[a]})),_:1})])}var u=n("5530"),b=(n("b0c0"),n("5880")),d=Object(c["defineComponent"])({name:"AdminAuth",methods:Object(u["a"])(Object(u["a"])({},Object(b["mapActions"])("userState",["changeRoles"])),{},{changePermission:function(e){var t=this;this.changeRoles([e]).then((function(){t.$router.hasRoute(t.$route.name)||t.$router.push("/404")}))}})}),s=n("6b0d"),h=n.n(s);const j=h()(d,[["render",i]]);t["default"]=j}}]);