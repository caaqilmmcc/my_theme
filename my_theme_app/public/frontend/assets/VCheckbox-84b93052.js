var I=Object.defineProperty,B=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var c=(e,s,t)=>s in e?I(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,o=(e,s)=>{for(var t in s||(s={}))D.call(s,t)&&c(e,t,s[t]);if(r)for(var t of r(s))R.call(s,t)&&c(e,t,s[t]);return e},u=(e,s)=>B(e,F(s));import{m as _,u as $,a as n}from"./VInput-520171d3.js";import{m as z,V as i}from"./VCheckboxBtn-e4cee54f.js";import{as as E,aA as N,aC as U,D as Z,az as j,aE as q,p as l,Z as d}from"./index-3d65e1d5.js";const M=E()({name:"VCheckbox",inheritAttrs:!1,props:o(o({},_()),N(z(),["inline"])),emits:{"update:focused":e=>!0},setup(e,s){let{attrs:t,slots:a}=s;const{isFocused:m,focus:b,blur:p}=$(e),f=U(),k=Z(()=>e.id||`checkbox-${f}`);return j(()=>{const[V,h]=q(t),[x,w]=n.filterProps(e),[v,G]=i.filterProps(e);return l(n,d({class:["v-checkbox",e.class]},V,x,{id:k.value,focused:m.value,style:e.style}),u(o({},a),{default:C=>{let{id:P,messagesId:y,isDisabled:A,isReadonly:g}=C;return l(i,d(v,{id:P.value,"aria-describedby":y.value,disabled:A.value,readonly:g.value},h,{onFocus:b,onBlur:p}),a)}}))}),{}}});export{M as V};
