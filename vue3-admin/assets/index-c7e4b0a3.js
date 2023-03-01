import{c as t,s as a}from"./transform-78bf2321.js";import{o as r}from"./ordinal-58af7f32.js";import{c as e}from"./colors-91c27d7c.js";import{l as o}from"./line-18fa829e.js";import{d as s,o as n,R as l,Z as i}from"./vue-51189269.js";import{_ as p}from"./plugin-vueexport-helper-1b428a4d.js";import"./init-cf76ae07.js";import"./array-9cb07d00.js";const c=e("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),h=[{label:"1月",value:[15.5,10]},{label:"2月",value:[10.5,60]},{label:"3月",value:[40.5,100]},{label:"4月",value:[50.5,40]},{label:"5月",value:[20.5,10]},{label:"6月",value:[90.5,20]}],d={top:20,right:40,bottom:30,left:40};function u(e){const{data:s,width:n,height:l,points:i}=e,p=t("svg").attr("width",n).attr("height",l),h=p.append("g").attr("class","axes").attr("transform","translate(600, 300)");h.append("g").selectAll().data(i).join("polygon").attr("class","axis").attr("points",(t=>t)).attr("fill",((t,a)=>a%2==0?"white":"#ddd")).attr("stroke","gray");const d=i[0].split(" ").map((t=>t.split(","))),u=o();h.append("g").selectAll().data(d).join("path").attr("class","line").attr("d",(t=>u([[0,0],[t[0],t[1]]]))).attr("stroke","gray");h.append("g").selectAll().data(s).join("text").attr("fill","#e14e6f").attr("x",((t,a)=>220*Math.sin(a*Math.PI*2/s.length))).attr("y",((t,a)=>220*Math.cos(a*Math.PI*2/s.length))).attr("text-anchor",((t,a)=>((t,a)=>{const r=360*a/t;return 0===r||Math.abs(r-180)<.01?"middle":r>180?"end":"start"})(s.length,a))).attr("dy",6.5).text((t=>t.label));const f=[s.map((t=>t.value[0])),s.map((t=>t.value[1]))],g=r(c);return h.selectAll().data(f).join("polygon").attr("class","polygon").attr("fill","none").attr("stroke",((t,a)=>g(a))).attr("stroke-white","2").on("mouseover",(t=>{a(t.target).attr("stroke-width","5")})).on("mouseleave",(t=>{a(t.target).attr("stroke-width","2")})).attr("points",(t=>{const a=[];return t.forEach((()=>{a.push("0,0")})),a.join(" ")})).transition().duration(1e3).attr("points",(function(t,a){const r=[],e=2*Math.PI/t.length;return t.forEach(((t,o)=>{const s=Math.sin(o*e)*t,n=Math.cos(o*e)*t;h.append("circle").attr("fill","white").attr("stroke",g(a)).attr("cx",0).attr("cy",0).attr("r",3).transition().duration(1e3).attr("cx",s).attr("cy",n),r.push(`${s},${n}`)})),r.join(" ")})),{svg:p}}const f=s({name:"D3Scatterplot",setup(){const{points:t}=function(t,a,r){const e=[];let o=[];const s=2*Math.PI/t,n=a/r;for(let l=a;l>0;l-=n){o=[];for(let a=0;a<t;a+=1)o.push(`${Math.sin(a*s)*l},${Math.cos(a*s)*l}`);e.push(o.join(" "))}return{points:e}}(h.length,200,5),{svg:r}=u({data:h,width:1200,height:600,padding:d,points:t});return n((()=>{a("#path").append((()=>r.node()))})),{}}}),g={id:"path"};const m=p(f,[["render",function(t,a,r,e,o,s){return l(),i("div",g)}]]);export{m as default};
