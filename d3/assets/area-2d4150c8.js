import{a as z}from"./array-9f3ba611.js";import{c as i}from"./constant-f354b64a.js";import{c as A,x as X,y as Y,l as b}from"./line-9e4e291f.js";import{w as j}from"./path-bbeba479.js";function y(r,f,l){var c=null,s=i(!0),o=null,a=A,u=null,x=j(e);r=typeof r=="function"?r:r===void 0?X:i(+r),f=typeof f=="function"?f:f===void 0?i(0):i(+f),l=typeof l=="function"?l:l===void 0?Y:i(+l);function e(n){var t,S,g,m=(n=z(n)).length,p,h=!1,v,w=new Array(m),E=new Array(m);for(o==null&&(u=a(v=x())),t=0;t<=m;++t){if(!(t<m&&s(p=n[t],t,n))===h)if(h=!h)S=t,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),g=t-1;g>=S;--g)u.point(w[g],E[g]);u.lineEnd(),u.areaEnd()}h&&(w[t]=+r(p,t,n),E[t]=+f(p,t,n),u.point(c?+c(p,t,n):w[t],l?+l(p,t,n):E[t]))}if(v)return u=null,v+""||null}function d(){return b().defined(s).curve(a).context(o)}return e.x=function(n){return arguments.length?(r=typeof n=="function"?n:i(+n),c=null,e):r},e.x0=function(n){return arguments.length?(r=typeof n=="function"?n:i(+n),e):r},e.x1=function(n){return arguments.length?(c=n==null?null:typeof n=="function"?n:i(+n),e):c},e.y=function(n){return arguments.length?(f=typeof n=="function"?n:i(+n),l=null,e):f},e.y0=function(n){return arguments.length?(f=typeof n=="function"?n:i(+n),e):f},e.y1=function(n){return arguments.length?(l=n==null?null:typeof n=="function"?n:i(+n),e):l},e.lineX0=e.lineY0=function(){return d().x(r).y(f)},e.lineY1=function(){return d().x(r).y(l)},e.lineX1=function(){return d().x(c).y(f)},e.defined=function(n){return arguments.length?(s=typeof n=="function"?n:i(!!n),e):s},e.curve=function(n){return arguments.length?(a=n,o!=null&&(u=a(o)),e):a},e.context=function(n){return arguments.length?(n==null?o=u=null:u=a(o=n),e):o},e}export{y as a};
