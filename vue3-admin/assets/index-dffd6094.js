/* empty css              */import{b as e,u as t,c as a}from"./request-93d71c74.js";import{d as n,e as l,Z as s,S as r,U as o,W as i,f as c,h as u,aa as d,X as p,k as h,ab as f,w as m,a1 as g,a3 as v,E as y,r as k,o as b,H as C,ac as A,q as _,F as w,a2 as T,a5 as x,Y as O,ad as K,ae as P,P as j,n as S,_ as $,af as V,ag as I}from"./vue-8d5f356c.js";import{_ as L}from"./plugin-vueexport-helper-1b428a4d.js";import{as as E,ae as M,al as U,at as q,ad as R,ai as B,ak as H,au as z,av as F,aw as D,ax as N,ay as W,az as J,aA as X,aB as Y,ag as Z,aC as G,af as Q,aD as ee,aE as te,ac as ae}from"./antd-ca98a620.js";/* empty css              *//* empty css              *//* empty css              */import{g as ne,P as le}from"./overlayscrollbars-322272d2.js";import{a as se}from"./avatar-fe417f06.js";/* empty css              */const re=L(n({name:"AppMain",setup(){const t=e();return{cachedViews:l((()=>t.cachedViews))}}}),[["render",function(e,t,a,n,l,h){const f=s("router-view"),m=E;return r(),o(m,{class:"app-main"},{default:i((()=>[c(f,null,{default:i((({Component:t})=>[c(u,{name:"fade-transform",mode:"out-in"},{default:i((()=>[(r(),o(d,{include:e.cachedViews},[(r(),o(p(t),{key:e.$route.path}))],1032,["include"]))])),_:2},1024)])),_:1})])),_:1})}]]),oe=n({name:"AppBreadcrumb",setup(){const e=h([]),t=f(),a=()=>{const a=t.matched.filter((e=>e.meta&&e.meta.title));let n=[];(e=>{const t=e&&e.name;return!!t&&("symbol"==typeof t?t:t.trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase())})(a[0])||(n=[{path:"/",meta:{title:"主页"}},...a]),e.value=n.filter((e=>e.meta&&e.meta.title))};return a(),m(t,a),{routes:e}}}),ie={key:0};const ce=L(oe,[["render",function(e,t,a,n,l,c){const u=s("router-link"),d=M;return r(),o(d,{routes:e.routes,class:"breadcrumb"},{itemRender:i((({route:t,paths:a})=>[e.routes.indexOf(t)===e.routes.length-1?(r(),g("span",ie,v(t.meta.title),1)):(r(),o(u,{key:1,to:`/${a.join("/")}`},{default:i((()=>[y(v(t.meta.title),1)])),_:2},1032,["to"]))])),_:1},8,["routes"])}]]);function ue(){const e=f(),{path:t,matched:a}=e,n=k({selectedKeys:[t],openKeys:[""]}),l=()=>{n.selectedKeys=[e.path]},s=()=>{const e=[];a.length>1&&n.selectedKeys[0].split("/").slice(1).reduce(((t,a)=>(0===e.length?(e.push(`/${t}`),e.push(`/${t}/${a}`)):e.push(`/${t}/${a}`),`${t}/${a}`))),n.openKeys=e};return m(e,(()=>{l()})),b((()=>{l(),s()})),{...C(n),getOpenKeys:s}}function de(){const e=f(),[t,a]=ne({options:{scrollbars:{autoHide:"leave"},overflow:{y:"hidden"}}});m(e,(()=>{_((()=>{const e=a();if(null==e?void 0:e.elements){const{viewport:t}=e.elements(),a=document.querySelector(".tag-active").getBoundingClientRect().left-220;t.scrollTo({left:a})}}))})),b((()=>{t({target:document.querySelector(".app-tags-container")})}))}const pe=n({name:"AppTags",setup(){const t=e(),{isActive:a,clickTag:n,refreshTag:s,closeTag:r,closeOthersTags:o,closeAllTags:i}=function(){const t=e(),a=f(),n=A(),l=()=>{const{name:e}=a;e&&t.addView(a)},s=e=>e.path===a.path,r=(e,t)=>{const a=e.slice(-1)[0];a?n.push(a.fullPath):"Workplace"===t.name?n.replace({path:`/redirect${t.fullPath}`}):n.push("/")},{getOpenKeys:o}=ue();return m(a,(()=>{l()})),b((()=>{l()})),{isActive:s,clickTag:e=>{n.push(e.path),o()},refreshTag:e=>{t.delCachedView(e).then((()=>{const{fullPath:t}=e;_((()=>{n.replace({path:`/redirect${t}`})}))}))},closeTag:e=>{t.delView(e).then((t=>{const{visitedViews:a}=t;s(e)&&r(a,e)}))},closeOthersTags:e=>{n.push(e.path),t.delOthersViews(e)},closeAllTags:e=>{t.delAllViews().then((t=>{const{visitedViews:a}=t;r(a,e)}))}}}();return de(),{visitedViews:l((()=>t.visitedViews)),isActive:a,clickTag:n,refreshTag:s,closeTag:r,closeOthersTags:o,closeAllTags:i}}}),he={class:"app-tags-container"};const fe=L(pe,[["render",function(e,t,a,n,l,u){const d=U,p=q,h=R,f=B,m=s("router-link");return r(),g("div",he,[(r(!0),g(w,null,T(e.visitedViews,(t=>(r(),o(m,{key:t.path,to:{path:t.path},custom:""},{default:i((()=>[c(f,{trigger:["contextmenu"]},{overlay:i((()=>[c(h,null,{default:i((()=>[c(p,{key:"1",onClick:a=>e.refreshTag(t)},{default:i((()=>[y("刷新")])),_:2},1032,["onClick"]),c(p,{key:"2",onClick:a=>e.closeTag(t)},{default:i((()=>[y("关闭")])),_:2},1032,["onClick"]),c(p,{key:"3",onClick:a=>e.closeOthersTags(t)},{default:i((()=>[y(" 关闭其他 ")])),_:2},1032,["onClick"]),c(p,{key:"4",onClick:a=>e.closeAllTags(t)},{default:i((()=>[y(" 关闭所有 ")])),_:2},1032,["onClick"])])),_:2},1024)])),default:i((()=>[c(d,{class:x(["app-tags-item",e.isActive(t)?"tag-active":""]),closable:"",onClick:a=>e.clickTag(t),onClose:a=>e.closeTag(t)},{default:i((()=>[y(v(t.title),1)])),_:2},1032,["class","onClick","onClose"])])),_:2},1024)])),_:2},1032,["to"])))),128))])}],["__scopeId","data-v-d85320c4"]]);function me(){const e=t(),a=()=>{H.confirm({title:"退出登录",icon:c(z),content:c("div",{},"确定退出登录吗？"),onOk:()=>e.logout(),class:"test"})};return{clickMenu:({key:e})=>{switch(e){case 1:(()=>{const e=document.createElement("a");e.href="https://github.com/afei008/vue3-admin",e.target="_blank",e.click()})();break;case 0:a()}}}}const ge=k({collapsed:!1,changeCollapsed(){ge.collapsed=!ge.collapsed}}),ve=ge,ye=n({name:"AppHeader",components:{MenuUnfoldOutlined:F,MenuFoldOutlined:D,UserOutlined:N,SettingOutlined:W,LogoutOutlined:J,LinkOutlined:X,AppBreadcrumb:ce,AppTags:fe},setup(){const{nickname:e,avatar:a}=function(){const e=t();return{nickname:l((()=>e.nickname)),avatar:se}}(),{clickMenu:n}=me();return{nickname:e,avatar:a,clickMenu:n,...C(ve)}}}),ke={class:"ant-dropdown-link"},be=["src"];const Ce=L(ye,[["render",function(e,t,a,n,l,u){const d=s("menu-unfold-outlined"),p=s("menu-fold-outlined"),h=Z,f=s("app-breadcrumb"),m=s("link-outlined"),g=q,k=s("user-outlined"),b=s("setting-outlined"),C=G,A=s("logout-outlined"),_=R,w=B,T=Q,x=s("app-tags"),K=Y;return r(),o(K,{class:"app-header"},{default:i((()=>[c(T,{align:"middle"},{default:i((()=>[c(h,null,{default:i((()=>[e.collapsed?(r(),o(d,{key:0,class:"trigger",onClick:e.changeCollapsed},null,8,["onClick"])):(r(),o(p,{key:1,class:"trigger",onClick:e.changeCollapsed},null,8,["onClick"]))])),_:1}),c(h,null,{default:i((()=>[c(f)])),_:1}),c(h,{class:"dropdown"},{default:i((()=>[c(w,null,{overlay:i((()=>[c(_,{onClick:e.clickMenu},{default:i((()=>[(r(),o(g,{key:1},{default:i((()=>[c(m),y(" 项目地址")])),_:1})),(r(),o(g,{key:2},{default:i((()=>[c(k),y(" 个人中心")])),_:1})),(r(),o(g,{key:3},{default:i((()=>[c(b),y(" 个人设置")])),_:1})),c(C),(r(),o(g,{key:0},{default:i((()=>[c(A),y(" 退出登录")])),_:1}))])),_:1},8,["onClick"])])),default:i((()=>[O("span",ke,[O("img",{src:e.avatar,class:"avatar"},null,8,be),y(v(e.nickname),1)])])),_:1})])),_:1})])),_:1}),c(x)])),_:1})}],["__scopeId","data-v-c972e33a"]]);function Ae(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function _e(e,t){for(var a,n="",l=0,s=-1,r=0,o=0;o<=e.length;++o){if(o<e.length)a=e.charCodeAt(o);else{if(47===a)break;a=47}if(47===a){if(s===o-1||1===r);else if(s!==o-1&&2===r){if(n.length<2||2!==l||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var i=n.lastIndexOf("/");if(i!==n.length-1){-1===i?(n="",l=0):l=(n=n.slice(0,i)).length-1-n.lastIndexOf("/"),s=o,r=0;continue}}else if(2===n.length||1===n.length){n="",l=0,s=o,r=0;continue}t&&(n.length>0?n+="/..":n="..",l=2)}else n.length>0?n+="/"+e.slice(s+1,o):n=e.slice(s+1,o),l=o-s-1;s=o,r=0}else 46===a&&-1!==r?++r:r=-1}return n}var we={
// path.resolve([from ...], to)
resolve:function(){for(var e,t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var l;n>=0?l=arguments[n]:(void 0===e&&(e=process.cwd()),l=e),Ae(l),0!==l.length&&(t=l+"/"+t,a=47===l.charCodeAt(0))}return t=_e(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(Ae(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=_e(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return Ae(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];Ae(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":we.normalize(e)},relative:function(e,t){if(Ae(e),Ae(t),e===t)return"";if((e=we.resolve(e))===(t=we.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var n=e.length,l=n-a,s=1;s<t.length&&47===t.charCodeAt(s);++s);for(var r=t.length-s,o=l<r?l:r,i=-1,c=0;c<=o;++c){if(c===o){if(r>o){if(47===t.charCodeAt(s+c))return t.slice(s+c+1);if(0===c)return t.slice(s+c)}else l>o&&(47===e.charCodeAt(a+c)?i=c:0===c&&(i=0));break}var u=e.charCodeAt(a+c);if(u!==t.charCodeAt(s+c))break;47===u&&(i=c)}var d="";for(c=a+i+1;c<=n;++c)c!==n&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(s+i):(s+=i,47===t.charCodeAt(s)&&++s,t.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(Ae(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,l=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!l){n=s;break}}else l=!1;return-1===n?a?"/":".":a&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');Ae(e);var a,n=0,l=-1,s=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var r=t.length-1,o=-1;for(a=e.length-1;a>=0;--a){var i=e.charCodeAt(a);if(47===i){if(!s){n=a+1;break}}else-1===o&&(s=!1,o=a+1),r>=0&&(i===t.charCodeAt(r)?-1==--r&&(l=a):(r=-1,l=o))}return n===l?l=o:-1===l&&(l=e.length),e.slice(n,l)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!s){n=a+1;break}}else-1===l&&(s=!1,l=a+1);return-1===l?"":e.slice(n,l)},extname:function(e){Ae(e);for(var t=-1,a=0,n=-1,l=!0,s=0,r=e.length-1;r>=0;--r){var o=e.charCodeAt(r);if(47!==o)-1===n&&(l=!1,n=r+1),46===o?-1===t?t=r:1!==s&&(s=1):-1!==t&&(s=-1);else if(!l){a=r+1;break}}return-1===t||-1===n||// We saw a non-dot character immediately before the dot
0===s||// The (right-most) trimmed path component is exactly '..'
1===s&&t===n-1&&t===a+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+n:a+e+n:n}("/",e)},parse:function(e){Ae(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,n=e.charCodeAt(0),l=47===n;l?(t.root="/",a=1):a=0;for(var s=-1,r=0,o=-1,i=!0,c=e.length-1,u=0;c>=a;--c)if(47!==(n=e.charCodeAt(c)))-1===o&&(i=!1,o=c+1),46===n?-1===s?s=c:1!==u&&(u=1):-1!==s&&(u=-1);else if(!i){r=c+1;break}return-1===s||-1===o||// We saw a non-dot character immediately before the dot
0===u||// The (right-most) trimmed path component is exactly '..'
1===u&&s===o-1&&s===r+1?-1!==o&&(t.base=t.name=0===r&&l?e.slice(1,o):e.slice(r,o)):(0===r&&l?(t.name=e.slice(1,s),t.base=e.slice(1,o)):(t.name=e.slice(r,s),t.base=e.slice(r,o)),t.ext=e.slice(s,o)),r>0?t.dir=e.slice(0,r-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};we.posix=we;var Te=we;function xe(e){return/^(https?:|mailto:|tel:)/.test(e)}const Oe=L(n({name:"AppLink",props:{to:{type:String,default:"",required:!0}},computed:{isExternal(){return xe(this.to)},type(){return this.isExternal?"a":"router-link"}},methods:{linkProps(e){return this.isExternal?{href:e,target:"_blank",rel:"noopener"}:{to:e}}}}),[["render",function(e,t,a,n,l,s){return r(),o(p(e.type),K(P(e.linkProps(e.to))),{default:i((()=>[j(e.$slots,"default")])),_:3},16)}]]);const Ke=L(n({name:"IconFont",props:{type:{type:String,default:""}}}),[["render",function(e,t,a,n,l,s){return r(),g("i",{class:x(`iconfont ${e.type}`)},null,2)}]]),Pe=n({name:"TitleItem",props:{icon:{type:String,default:""},title:{type:String,default:""}},setup:()=>({...C(ve)}),render(){const e=[];return this.icon&&e.push(S(Ke,{type:this.icon,class:"menu-icon"})),this.title&&e.push(S("span",{class:"menu-text"},this.title)),S("span",{class:"menu-title "+(this.collapsed?"center":"")},e)}}),je=n({name:"AppSidebarItem",components:{AppLink:Oe,TitleItem:L(Pe,[["__scopeId","data-v-b9327435"]])},props:{item:{type:Object,default:()=>({}),required:!0},basePath:{type:String,default:""},isNest:{type:Boolean,default:!1}},computed:{onlyChild(){if(!this.item.children)return this.item;let e={};const t=this.item.children.filter((t=>{var a,n;return(null==(a=null==t?void 0:t.meta)?void 0:a.hidden)||(e=t),!(null==(n=null==t?void 0:t.meta)?void 0:n.hidden)}));if(t.length>1)return!1;let a=e.path;return this.basePath!==this.item.path&&(a=`${this.basePath}/${this.item.path}/${null==e?void 0:e.path}`),1===t.length?!(t[0].children&&t[0].children.length>0)&&{...e,path:a}:0===t.length?{...this.item,path:""}:e}},methods:{resolvePath(e){return xe(e)?e:xe(this.basePath)?this.basePath:Te.resolve(this.basePath,e)}}}),Se={key:0};const $e=n({name:"AppSidebar",components:{AppSidebarItem:L(je,[["render",function(e,t,a,n,l,u){var d,p;const h=s("title-item"),f=q,m=s("app-link"),v=s("app-sidebar-item",!0),y=ee;return(null==(p=null==(d=e.item)?void 0:d.meta)?void 0:p.hidden)?$("",!0):(r(),g("div",Se,[e.onlyChild?(r(),g(w,{key:0},[e.onlyChild.meta?(r(),o(m,{key:0,to:e.resolvePath(e.onlyChild.path)},{default:i((()=>[(r(),o(f,{key:e.resolvePath(e.onlyChild.path)},{default:i((()=>[c(h,{title:e.onlyChild.meta.title,icon:e.onlyChild.meta.icon||e.item.meta.icon},null,8,["title","icon"])])),_:1}))])),_:1},8,["to"])):$("",!0)],64)):(r(),o(y,{key:e.resolvePath(e.item.path)},{title:i((()=>[c(h,{title:e.item.meta.title,icon:e.item.meta.icon},null,8,["title","icon"])])),default:i((()=>[(r(!0),g(w,null,T(e.item.children,(t=>(r(),o(v,{key:t.path,"is-nest":!0,item:t,"base-path":e.resolvePath(e.item.path),class:"nest-menu"},null,8,["item","base-path"])))),128))])),_:1}))]))}]]),OverlayScrollbarsComponent:le},setup(){const{selectedKeys:e,openKeys:t}=ue(),{refresh:n,routes:s}=function(){const e=a(),t=l((()=>e.newRoutes)),n=h(!0),s=h(t.value);return m(t,(e=>{n.value=!1,s.value=e,_((()=>{n.value=!0}))}),{deep:!0}),{refresh:n,routes:s}}();return{selectedKeys:e,openKeys:t,routes:s,refresh:n,...C(ve)}}}),Ve=(e=>(V("data-v-76f31e01"),e=e(),I(),e))((()=>O("div",{class:"logo"},null,-1)));const Ie=L(n({name:"LayoutIndex",components:{AppSidebar:L($e,[["render",function(e,t,a,n,l,u){const d=s("app-sidebar-item"),p=R,h=s("overlay-scrollbars-component"),f=te;return r(),o(f,{collapsed:e.collapsed,"onUpdate:collapsed":t[2]||(t[2]=t=>e.collapsed=t),class:"app-sidebar",breakpoint:"lg",trigger:null,collapsible:""},{default:i((()=>[Ve,e.refresh?(r(),o(h,{key:0,defer:"",options:{scrollbars:{autoHide:"leave"},overflow:{x:"hidden"}}},{default:i((()=>[c(p,{selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[0]||(t[0]=t=>e.selectedKeys=t),openKeys:e.openKeys,"onUpdate:openKeys":t[1]||(t[1]=t=>e.openKeys=t),theme:"dark",mode:"inline",class:"app-menu"},{default:i((()=>[(r(!0),g(w,null,T(e.routes,(e=>(r(),o(d,{key:e.path,item:e,"base-path":e.path},null,8,["item","base-path"])))),128))])),_:1},8,["selectedKeys","openKeys"])])),_:1})):$("",!0)])),_:1},8,["collapsed"])}],["__scopeId","data-v-76f31e01"]]),AppHeader:Ce,AppMain:re}}),[["render",function(e,t,a,n,l,u){const d=s("app-sidebar"),p=s("app-header"),h=s("app-main"),f=ae;return r(),o(f,{style:{"min-height":"100vh"}},{default:i((()=>[c(d),c(f,null,{default:i((()=>[c(p),c(h)])),_:1})])),_:1})}],["__scopeId","data-v-f0961b9e"]]);export{Ie as default};