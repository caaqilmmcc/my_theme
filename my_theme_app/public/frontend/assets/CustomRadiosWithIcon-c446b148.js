import{W as f,k as V,bm as v,Y as C,o as n,b as d,w as a,p as s,c as g,F as x,a as y,Z as c,s as R,q as i,n as h,m as o,A as b,y as _,H as k,B as w}from"./index-3d65e1d5.js";import{V as B,a as I}from"./VRow-3ae3623c.js";import{V as q}from"./VInput-520171d3.js";import{a as W,V as N}from"./VRadioGroup-d2472d55.js";const S={class:"d-flex flex-column align-center text-center gap-2"},A={class:"cr-title text-base"},F={class:"text-sm mb-0 clamp-text"},L={__name:"CustomRadiosWithIcon",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(r,{emit:p}){const l=r,t=V(structuredClone(v(l.selectedRadio)));return C(t,()=>{p("update:selectedRadio",t.value)}),(m,u)=>l.radioContent?(n(),d(N,{key:0,modelValue:i(t),"onUpdate:modelValue":u[0]||(u[0]=e=>k(t)?t.value=e:null)},{default:a(()=>[s(B,null,{default:a(()=>[(n(!0),g(x,null,y(l.radioContent,e=>(n(),d(I,c({key:e.title},r.gridColumn),{default:a(()=>[s(q,{class:R(["custom-input custom-radio-icon rounded cursor-pointer",i(t)===e.value?"active":""])},{default:a(()=>[h(m.$slots,"default",{item:e},()=>[o("div",S,[s(b,c(e.icon,{class:"text-high-emphasis"}),null,16),o("h6",A,_(e.title),1),o("p",F,_(e.desc),1)])],!0),o("div",null,[s(W,{value:e.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["modelValue"])):w("",!0)}},H=f(L,[["__scopeId","data-v-ebce9043"]]);export{H as _};
