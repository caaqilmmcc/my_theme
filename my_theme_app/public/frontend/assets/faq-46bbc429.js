import{_ as U}from"./AppSearchHeader-e35c3300.js";import{k as _,Y as x,o as n,c,p as t,q as l,H as h,w as a,K as w,L as q,F as V,a as v,s as B,A as g,m as s,Q as T,a5 as F,b,y as d}from"./index-6e9ab8b8.js";import{s as N}from"./sitting-girl-with-laptop-c8037201.js";import{a as y,V as k}from"./VRow-c1d5def7.js";import{V as Q,a as W}from"./VTabs-3e137c12.js";import{V as A}from"./VImg-5111e2cf.js";import{V as E,a as H}from"./VWindowItem-6a817fff.js";import{V as P}from"./VChip-b98d9410.js";import{V as I}from"./VAvatar-4c62c8c1.js";import{V as R,a as D}from"./VExpansionPanel-b4de8b87.js";import{V as Y,d as z}from"./VCard-c05bc65f.js";import"./AppTextField-0e9af958.js";import"./VInput-9f585516.js";import"./transition-19a281fe.js";import"./VTextField-0a2b69e1.js";/* empty css                   */import"./VField-f5a6d12c.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-76d6d7ad.js";import"./VSlideGroup-ede99e6d.js";import"./lazy-60318aa3.js";import"./ssrBoot-12880581.js";const j={class:"d-flex align-center mb-6"},G={class:"text-h6"},K={class:"text-sm"},O=s("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),$={class:"text-center pt-15"},J=s("h5",{class:"text-h5 mb-2"}," You still have a question? ",-1),M=s("p",null," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),X={class:"text-h6 mb-2"},we={__name:"faq",setup(Z){const u=_(""),r=_([]),C=()=>F.get("/pages/faqs",{params:{q:u.value}}).then(f=>{r.value=f.data}).catch(f=>{console.error(f)}),i=_("Payment"),p=_(0);x(i,()=>p.value=0),x(u,C,{immediate:!0});const L=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(f,o)=>{const S=U;return n(),c("section",null,[t(S,{modelValue:l(u),"onUpdate:modelValue":o[0]||(o[0]=e=>h(u)?u.value=e:null),title:"Hello, how can we help?",subtitle:"or select a category to quickly find the help you require","custom-class":"mb-7"},null,8,["modelValue"]),t(k,null,{default:a(()=>[w(t(y,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:a(()=>[t(Q,{modelValue:l(i),"onUpdate:modelValue":o[1]||(o[1]=e=>h(i)?i.value=e:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:a(()=>[(n(!0),c(V,null,v(l(r),e=>(n(),b(W,{key:e.faqTitle,value:e.faqTitle,class:"text-high-emphasis"},{default:a(()=>[t(g,{icon:e.faqIcon,size:20,start:""},null,8,["icon"]),T(" "+d(e.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(A,{width:245,src:l(N),class:"d-none d-sm-block mt-10 mx-auto"},null,8,["src"])]),_:1},512),[[q,l(r).length]]),t(y,{cols:"12",sm:"8",lg:"9"},{default:a(()=>[t(E,{modelValue:l(i),"onUpdate:modelValue":o[3]||(o[3]=e=>h(i)?i.value=e:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(n(!0),c(V,null,v(l(r),e=>(n(),b(H,{key:e.faqTitle,value:e.faqTitle},{default:a(()=>[s("div",j,[t(I,{rounded:"",color:"primary",variant:"tonal",class:"me-3",size:"large"},{default:a(()=>[t(g,{size:32,icon:e.faqIcon},null,8,["icon"])]),_:2},1024),s("div",null,[s("h6",G,d(e.faqTitle),1),s("span",K,d(e.faqSubtitle),1)])]),t(R,{modelValue:l(p),"onUpdate:modelValue":o[2]||(o[2]=m=>h(p)?p.value=m:null),multiple:""},{default:a(()=>[(n(!0),c(V,null,v(e.faqs,m=>(n(),b(D,{key:m.question,title:m.question,text:m.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),w(t(y,{cols:"12",class:B(l(r).length?"":"d-flex justify-center align-center")},{default:a(()=>[t(g,{icon:"tabler-help",start:"",size:"20"}),O]),_:1},8,["class"]),[[q,!l(r).length]])]),_:1}),s("div",$,[t(P,{label:"",color:"primary",size:"small",class:"mb-2"},{default:a(()=>[T(" QUESTION? ")]),_:1}),J,M,t(k,{class:"mt-4"},{default:a(()=>[(n(),c(V,null,v(L,e=>t(y,{key:e.icon,sm:"6",cols:"12"},{default:a(()=>[t(Y,{flat:"",class:"bg-var-theme-background"},{default:a(()=>[t(z,null,{default:a(()=>[t(I,{rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:a(()=>[t(g,{icon:e.icon},null,8,["icon"])]),_:2},1024)]),_:2},1024),t(z,null,{default:a(()=>[s("h6",X,d(e.via),1),s("span",null,d(e.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])])}}};export{we as default};