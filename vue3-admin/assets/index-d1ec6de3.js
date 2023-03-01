import{c as t,d as a,s as r}from"./transform-78bf2321.js";import{e}from"./extent-333dc500.js";import{l as n,a as i,b as o}from"./linear-3636c8d5.js";import{d as s,o as d,R as l,Z as p}from"./vue-51189269.js";import{_ as c}from"./plugin-vueexport-helper-1b428a4d.js";import"./init-cf76ae07.js";const g=[[10,20],[20,100],[200,50],[25,80],[10,200],[150,75],[10,70],[30,150],[100,15]],h={top:20,right:40,bottom:30,left:40};const m=s({name:"D3Scatterplot",setup(){const{xScale:s,yScale:l}=function(t){const{width:a,height:r,data:i,padding:o}=t,s=e(i,(t=>t[0])),d=e(i,(t=>t[1])),l=[0,s[1]],p=[0,d[1]];return{xScale:n().domain(l).range([o.left,a-o.right]),yScale:n().domain(p).range([r-o.bottom,o.top])}}({data:g,width:1200,height:600,padding:h}),{axis:p}=function(a){const{width:r,height:e,padding:n,xScale:s,yScale:d}=a,l=t("svg").attr("viewBox",[0,0,r,e]);return l.append("g").attr("transform",`translate(0, ${e-n.bottom})`).call(i(s)),l.append("g").attr("transform",`translate(${n.left}, 0)`).call(o(d)),{axis:l}}({width:1200,height:600,padding:h,xScale:s,yScale:l}),{svg:c}=function(r){const{data:e,width:n,height:i,padding:o,xScale:s,yScale:d}=r,l=t("svg").attr("width",n).attr("height",i),p=l.selectAll("g").data(e).join("g").attr("transform",((t,a)=>`translate(${s(t[0])}, ${d(t[1])+o.top})`));return p.append("circle").attr("fill",(t=>a("rgb(87, 178, 176)","rgb(225, 78, 111)")(t[0]/100*(t[1]/100)))).attr("cx",0).attr("cy",0).attr("r",(t=>Math.sqrt(s(t[0])*s(t[0])+d(t[1])*d(t[1]))/50)),p.append("text").attr("fill","white").attr("x",4).attr("y",4).attr("dx","0").attr("dy","0").attr("fill","black").text((t=>`${t[0]},${t[1]}`)),{svg:l}}({data:g,width:1200,height:600,padding:h,xScale:s,yScale:l});return d((()=>{r("#path").append((()=>c.node())).append((()=>p.node()))})),{}}}),f={id:"path"};const x=c(m,[["render",function(t,a,r,e,n,i){return l(),p("div",f)}]]);export{x as default};
