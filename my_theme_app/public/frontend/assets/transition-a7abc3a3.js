var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var r=(o,s)=>{var n={};for(var t in o)f.call(o,t)&&s.indexOf(t)<0&&(n[t]=o[t]);if(o!=null&&i)for(var t of i(o))s.indexOf(t)<0&&l.call(o,t)&&(n[t]=o[t]);return n};import{aG as y,h as u,Z as T,T as b}from"./index-3d65e1d5.js";const P=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:o=>o!==!0}},"transition"),j=(o,s)=>{let{slots:n}=s;const a=o,{transition:t}=a,p=r(a,["transition"]),e=typeof t=="object"?t:{},{component:c=b}=e,m=r(e,["component"]);return u(c,T(typeof t=="string"?{name:t}:m,p),n)};export{j as M,P as m};
