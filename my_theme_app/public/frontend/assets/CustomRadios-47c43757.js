import{W as V,k as v,bm as b,Y as C,o as a,b as c,w as o,p as l,c as i,F as y,a as R,Z as g,s as x,q as _,m as s,n as h,y as d,B as p,H as k}from"./index-3bb1be67.js";import{V as w,a as B}from"./VRow-51cf7d9e.js";import{V as q}from"./VInput-4b070ba9.js";import{a as S,V as N}from"./VRadioGroup-7e71f540.js";import{V as F}from"./VSpacer-9d1fa0e2.js";const L={class:"flex-grow-1"},z={class:"d-flex align-center mb-1"},A={class:"cr-title text-base"},D={key:0,class:"text-disabled text-base"},E={class:"text-sm mb-0"},G={__name:"CustomRadios",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(n,{emit:m}){const r=n,t=v(structuredClone(b(r.selectedRadio)));return C(t,()=>{m("update:selectedRadio",t.value)}),(f,u)=>r.radioContent?(a(),c(N,{key:0,modelValue:_(t),"onUpdate:modelValue":u[0]||(u[0]=e=>k(t)?t.value=e:null)},{default:o(()=>[l(w,null,{default:o(()=>[(a(!0),i(y,null,R(r.radioContent,e=>(a(),c(B,g({key:e.title},n.gridColumn),{default:o(()=>[l(q,{class:x(["custom-input custom-radio rounded cursor-pointer",_(t)===e.value?"active":""])},{default:o(()=>[s("div",null,[l(S,{value:e.value},null,8,["value"])]),h(f.$slots,"default",{item:e},()=>[s("div",L,[s("div",z,[s("h6",A,d(e.title),1),l(F),e.subtitle?(a(),i("span",D,d(e.subtitle),1)):p("",!0)]),s("p",E,d(e.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["modelValue"])):p("",!0)}},W=V(G,[["__scopeId","data-v-5807b0ce"]]);export{W as _};