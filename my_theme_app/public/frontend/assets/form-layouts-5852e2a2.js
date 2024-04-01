import{_ as Q}from"./AppSelect-3108b3de.js";import{_ as oe}from"./AppTextarea-73297191.js";import{_ as T}from"./AppTextField-b844d277.js";import{k as r,o as k,b as A,w as l,p as e,Q as x,$ as R,q as a,H as d,m as C,s as q,c as J,F as ee,a as te,y as ae,A as se,K as ne,L as re,G as F}from"./index-3bb1be67.js";import{a as W,b as Y,c as G,V as de}from"./VExpansionPanel-3fef0715.js";import{V as g}from"./VForm-90b1c620.js";import{V as w,a as o}from"./VRow-51cf7d9e.js";import{V as me}from"./VInput-4b070ba9.js";import{V as j,a as L}from"./VRadioGroup-7e71f540.js";import{V as le}from"./VDivider-a0af681e.js";import{a as K,V as ie}from"./VTabs-8acc4326.js";import{d as Z,V as ue}from"./VCard-21e67de5.js";import{V as ce,a as O}from"./VWindowItem-b6035ae2.js";import{r as U,e as pe}from"./validators-50c95554.js";import{V as P}from"./VCheckbox-42103450.js";import{_ as Ve}from"./AppAutocomplete-cdb9674a.js";import{_ as be}from"./AppCardCode-42fac92a.js";import"./VSelect-24248bc9.js";import"./VTextField-4c862cea.js";/* empty css                   */import"./VField-41dca5e8.js";import"./easing-512405f0.js";import"./VImg-4f16a21c.js";import"./transition-a6bd692a.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-2bd3570e.js";import"./VList-b935207c.js";import"./ssrBoot-60944e8b.js";import"./VAvatar-e8c12b97.js";import"./dialog-transition-7cbfa88f.js";import"./VMenu-57404f31.js";import"./VOverlay-9e706984.js";import"./lazy-be572c86.js";import"./VCheckboxBtn-c5bc4053.js";import"./VSelectionControl-0871be4a.js";import"./VChip-85f2a41a.js";import"./VTextarea-257a167a.js";import"./VSlideGroup-b7c8babd.js";import"./index-61e4df1a.js";import"./filter-d710a65c.js";import"./vue.runtime.esm-bundler-abeb18d8.js";const fe=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),C("h6",{class:"text-base font-weight-medium"}," Free ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1),Ce=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h5",{class:"text-base font-weight-medium"}," Express "),C("h6",{class:"text-base font-weight-medium"}," $5.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1),ve=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Overnight "),C("h6",{class:"text-base font-weight-medium"}," $10.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1),xe={class:"me-1"},ye={class:"d-flex gap-4"},we={__name:"DemoFormLayoutCollapsible",setup(N){const p=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],b=r("home"),u=r("standard"),m=r("credit-debit-card"),f=r(0),y=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"tabler-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"tabler-help"}];return(n,s)=>{const t=T,_=oe,i=Q;return k(),A(de,{modelValue:a(f),"onUpdate:modelValue":s[7]||(s[7]=v=>d(f)?f.value=v:null)},{default:l(()=>[e(W,null,{default:l(()=>[e(Y,null,{default:l(()=>[x("Delivery Address")]),_:1}),e(G,null,{default:l(()=>[e(g,{onSubmit:s[1]||(s[1]=R(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Full Name"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Phone No",type:"number"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{label:"Address",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Pincode",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Landmark"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"City"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{items:p,label:"State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(me,{class:"mb-3"},{default:l(()=>[x(" Address Type ")]),_:1}),e(j,{modelValue:a(b),"onUpdate:modelValue":s[0]||(s[0]=v=>d(b)?b.value=v:null),inline:""},{default:l(()=>[C("div",null,[e(L,{label:"Home (All day delivery)",value:"home"}),e(L,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(W,null,{default:l(()=>[e(Y,null,{default:l(()=>[x("Delivery Options")]),_:1}),e(G,null,{default:l(()=>[e(j,{modelValue:a(u),"onUpdate:modelValue":s[5]||(s[5]=v=>d(u)?u.value=v:null),class:"delivery-options"},{default:l(()=>[C("div",{class:q(["delivery-option d-flex rounded-t",a(u)==="standard"?"active":""]),onClick:s[2]||(s[2]=v=>u.value="standard")},[e(L,{inline:"",value:"standard",class:"mt-n4"}),fe],2),C("div",{class:q(["delivery-option d-flex",a(u)==="express"?"active":""]),onClick:s[3]||(s[3]=v=>u.value="express")},[e(L,{inline:"",class:"mt-n4",value:"express"}),Ce],2),C("div",{class:q(["delivery-option d-flex rounded-b",a(u)==="overnight"?"active":""]),onClick:s[4]||(s[4]=v=>u.value="overnight")},[e(L,{inline:"",class:"mt-n4",value:"overnight"}),ve],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(W,null,{default:l(()=>[e(Y,null,{default:l(()=>[x("Payment Method")]),_:1}),e(G,null,{default:l(()=>[e(w,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(g,null,{default:l(()=>[C("div",null,[e(j,{modelValue:a(m),"onUpdate:modelValue":s[6]||(s[6]=v=>d(m)?m.value=v:null),inline:""},{default:l(()=>[C("div",null,[(k(),J(ee,null,te(y,v=>e(L,{key:v.radioValue,value:v.radioValue},{label:l(()=>[C("span",xe,ae(v.radioLabel),1),e(se,{size:"18",icon:v.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),ne(e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(t,{label:"Card Number",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Name"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(t,{label:"Expiry"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(t,{label:"CVV",type:"number",max:"3"})]),_:1})]),_:1},512),[[re,a(m)==="credit-debit-card"]])]),_:1})]),_:1})]),_:1}),e(le,{class:"my-5"}),C("div",ye,[e(F,null,{default:l(()=>[x("Place Order")]),_:1}),e(F,{color:"secondary",variant:"tonal"},{default:l(()=>[x(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Fe={__name:"DemoFormLayoutFormWithTabs",setup(N){const p=r("personal-info"),b=r(""),u=r(""),m=r(),f=r(""),y=r(),n=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],s=["English","German","French","Spanish","Portuguese","Russian","Korean"],t=r(""),_=r(""),i=r(""),v=r(""),E=r(""),D=r(""),S=r(""),z=r(""),H=r(""),M=r(""),$=r([]),I=r(!1),B=r(!1);return(je,c)=>{const h=T,X=Q;return k(),J(ee,null,[e(ie,{modelValue:a(p),"onUpdate:modelValue":c[0]||(c[0]=V=>d(p)?p.value=V:null)},{default:l(()=>[e(K,{value:"personal-info"},{default:l(()=>[x(" Personal Info ")]),_:1}),e(K,{value:"account-details"},{default:l(()=>[x(" Account Details ")]),_:1}),e(K,{value:"social-links"},{default:l(()=>[x(" Social Links ")]),_:1})]),_:1},8,["modelValue"]),e(ue,{flat:""},{default:l(()=>[e(Z,null,{default:l(()=>[e(ce,{modelValue:a(p),"onUpdate:modelValue":c[19]||(c[19]=V=>d(p)?p.value=V:null),class:"disable-tab-transition"},{default:l(()=>[e(O,{value:"personal-info"},{default:l(()=>[e(g,{class:"mt-2"},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(h,{modelValue:a(b),"onUpdate:modelValue":c[1]||(c[1]=V=>d(b)?b.value=V:null),label:"First name"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(h,{modelValue:a(u),"onUpdate:modelValue":c[2]||(c[2]=V=>d(u)?u.value=V:null),label:"Last name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(X,{modelValue:a(m),"onUpdate:modelValue":c[3]||(c[3]=V=>d(m)?m.value=V:null),items:n,label:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(X,{modelValue:a($),"onUpdate:modelValue":c[4]||(c[4]=V=>d($)?$.value=V:null),items:s,multiple:"",chips:"",clearable:"",label:"Language"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(f),"onUpdate:modelValue":c[5]||(c[5]=V=>d(f)?f.value=V:null),label:"Birth Date",placeholder:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(y),"onUpdate:modelValue":c[6]||(c[6]=V=>d(y)?y.value=V:null),type:"number",label:"Phone No."},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"account-details"},{default:l(()=>[e(g,{class:"mt-2"},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(t),"onUpdate:modelValue":c[7]||(c[7]=V=>d(t)?t.value=V:null),label:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(_),"onUpdate:modelValue":c[8]||(c[8]=V=>d(_)?_.value=V:null),label:"Email",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(i),"onUpdate:modelValue":c[9]||(c[9]=V=>d(i)?i.value=V:null),label:"Password",type:a(I)?"text":"password","append-inner-icon":a(I)?"tabler-eye":"tabler-eye-off","onClick:appendInner":c[10]||(c[10]=V=>I.value=!a(I))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(v),"onUpdate:modelValue":c[11]||(c[11]=V=>d(v)?v.value=V:null),label:"Confirm Password",type:a(B)?"text":"password","append-inner-icon":a(B)?"tabler-eye":"tabler-eye-off","onClick:appendInner":c[12]||(c[12]=V=>B.value=!a(B))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"social-links"},{default:l(()=>[e(g,{class:"mt-2"},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(E),"onUpdate:modelValue":c[13]||(c[13]=V=>d(E)?E.value=V:null),label:"Twitter"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(D),"onUpdate:modelValue":c[14]||(c[14]=V=>d(D)?D.value=V:null),label:"Facebook"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(S),"onUpdate:modelValue":c[15]||(c[15]=V=>d(S)?S.value=V:null),label:"Google+"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(z),"onUpdate:modelValue":c[16]||(c[16]=V=>d(z)?z.value=V:null),label:"LinkedIn"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(H),"onUpdate:modelValue":c[17]||(c[17]=V=>d(H)?H.value=V:null),label:"Instagram"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(h,{modelValue:a(M),"onUpdate:modelValue":c[18]||(c[18]=V=>d(M)?M.value=V:null),label:"Quora"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(le),e(Z,{class:"d-flex gap-4"},{default:l(()=>[e(F,null,{default:l(()=>[x("Submit")]),_:1}),e(F,{color:"secondary",variant:"tonal"},{default:l(()=>[x(" Cancel ")]),_:1})]),_:1})]),_:1})],64)}}},_e={__name:"DemoFormLayoutFormValidation",setup(N){const p=r(""),b=r(""),u=["Item 1","Item 2","Item 3","Item 4"],m=r(),f=r(!1),y=r();return(n,s)=>{const t=T,_=Q;return k(),A(g,{ref_key:"form",ref:y,"lazy-validation":""},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(t,{modelValue:a(p),"onUpdate:modelValue":s[0]||(s[0]=i=>d(p)?p.value=i:null),rules:[a(U)],label:"Name",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(t,{modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=i=>d(b)?b.value=i:null),rules:[a(pe),a(U)],label:"E-mail",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{modelValue:a(m),"onUpdate:modelValue":s[2]||(s[2]=i=>d(m)?m.value=i:null),items:u,rules:[a(U)],label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(P,{modelValue:a(f),"onUpdate:modelValue":s[3]||(s[3]=i=>d(f)?f.value=i:null),rules:[a(U)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(F,{color:"success",onClick:s[4]||(s[4]=i=>{var v;return(v=a(y))==null?void 0:v.validate()})},{default:l(()=>[x(" Validate ")]),_:1}),e(F,{color:"error",onClick:s[5]||(s[5]=i=>{var v;return(v=a(y))==null?void 0:v.reset()})},{default:l(()=>[x(" Reset Form ")]),_:1}),e(F,{color:"warning",onClick:s[6]||(s[6]=i=>{var v;return(v=a(y))==null?void 0:v.resetValidation()})},{default:l(()=>[x(" Reset Validation ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},he={__name:"DemoFormLayoutFormHint",setup(N){const p=r(""),b=r(""),u=r(),m=r(!1),f=["foo","bar","fizz","buzz"],y=r([]);return(n,s)=>{const t=T,_=Ve;return k(),A(g,{onSubmit:s[5]||(s[5]=R(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(t,{modelValue:a(p),"onUpdate:modelValue":s[0]||(s[0]=i=>d(p)?p.value=i:null),label:"Username",placeholder:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(t,{modelValue:a(b),"onUpdate:modelValue":s[1]||(s[1]=i=>d(b)?b.value=i:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(t,{modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=i=>d(u)?u.value=i:null),label:"Password",type:"password","persistent-hint":"",placeholder:"Password",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{modelValue:a(y),"onUpdate:modelValue":s[3]||(s[3]=i=>d(y)?y.value=i:null),items:f,chips:"",multiple:"",label:"Autocomplete"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(P,{modelValue:a(m),"onUpdate:modelValue":s[4]||(s[4]=i=>d(m)?m.value=i:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},ge={__name:"DemoFormLayoutMultipleColumn",setup(N){const p=r(""),b=r(""),u=r(""),m=r(""),f=r(""),y=r(""),n=r(!1);return(s,t)=>{const _=T;return k(),A(g,{onSubmit:t[7]||(t[7]=R(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:a(p),"onUpdate:modelValue":t[0]||(t[0]=i=>d(p)?p.value=i:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:a(b),"onUpdate:modelValue":t[1]||(t[1]=i=>d(b)?b.value=i:null),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:a(y),"onUpdate:modelValue":t[2]||(t[2]=i=>d(y)?y.value=i:null),label:"Email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:a(u),"onUpdate:modelValue":t[3]||(t[3]=i=>d(u)?u.value=i:null),label:"City",placeholder:"City"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:a(m),"onUpdate:modelValue":t[4]||(t[4]=i=>d(m)?m.value=i:null),label:"Country",placeholder:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:a(f),"onUpdate:modelValue":t[5]||(t[5]=i=>d(f)?f.value=i:null),label:"Company",placeholder:"Company"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(P,{modelValue:a(n),"onUpdate:modelValue":t[6]||(t[6]=i=>d(n)?n.value=i:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},ke={__name:"DemoFormLayoutVerticalFormWithIcons",setup(N){const p=r(""),b=r(""),u=r(),m=r(),f=r(!1);return(y,n)=>{const s=T;return k(),A(g,{onSubmit:R(t=>({}),["prevent"])},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:a(p),"onUpdate:modelValue":n[0]||(n[0]=t=>d(p)?p.value=t:null),"prepend-inner-icon":"tabler-user",label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:a(b),"onUpdate:modelValue":n[1]||(n[1]=t=>d(b)?b.value=t:null),"prepend-inner-icon":"tabler-mail",label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:a(u),"onUpdate:modelValue":n[2]||(n[2]=t=>d(u)?u.value=t:null),"prepend-inner-icon":"tabler-device-mobile",label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:a(m),"onUpdate:modelValue":n[3]||(n[3]=t=>d(m)?m.value=t:null),"prepend-inner-icon":"tabler-lock",label:"Password",type:"password",placeholder:"Password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(P,{modelValue:a(f),"onUpdate:modelValue":n[4]||(n[4]=t=>d(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(F,{type:"submit",class:"me-2"},{default:l(()=>[x(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])}}},Ne={__name:"DemoFormLayoutVerticalForm",setup(N){const p=r(""),b=r(""),u=r(),m=r(),f=r(!1);return(y,n)=>{const s=T;return k(),A(g,{onSubmit:n[5]||(n[5]=R(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:a(p),"onUpdate:modelValue":n[0]||(n[0]=t=>d(p)?p.value=t:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:a(b),"onUpdate:modelValue":n[1]||(n[1]=t=>d(b)?b.value=t:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:a(u),"onUpdate:modelValue":n[2]||(n[2]=t=>d(u)?u.value=t:null),label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:a(m),"onUpdate:modelValue":n[3]||(n[3]=t=>d(m)?m.value=t:null),label:"Password",type:"password",placeholder:"Password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(P,{modelValue:a(f),"onUpdate:modelValue":n[4]||(n[4]=t=>d(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},Te=C("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstNameHorizontalIcons"},"First Name",-1),Ae=C("label",{class:"v-label text-body-2 text-high-emphasis",for:"emailHorizontalIcons"},"Email",-1),Re=C("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobileHorizontalIcons"},"Mobile",-1),Pe=C("label",{class:"v-label text-body-2 text-high-emphasis",for:"passwordHorizontalIcons"},"Password",-1),Le={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(N){const p=r(""),b=r(""),u=r(),m=r(),f=r(!1);return(y,n)=>{const s=T;return k(),A(g,{onSubmit:n[5]||(n[5]=R(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(w,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Te]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(s,{id:"firstNameHorizontalIcons",modelValue:a(p),"onUpdate:modelValue":n[0]||(n[0]=t=>d(p)?p.value=t:null),"prepend-inner-icon":"tabler-user",placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(w,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Ae]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(s,{id:"emailHorizontalIcons",modelValue:a(b),"onUpdate:modelValue":n[1]||(n[1]=t=>d(b)?b.value=t:null),"prepend-inner-icon":"tabler-mail",placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(w,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Re]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(s,{id:"mobileHorizontalIcons",modelValue:a(u),"onUpdate:modelValue":n[2]||(n[2]=t=>d(u)?u.value=t:null),type:"number","prepend-inner-icon":"tabler-device-mobile",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(w,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Pe]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(s,{id:"passwordHorizontalIcons",modelValue:a(m),"onUpdate:modelValue":n[3]||(n[3]=t=>d(m)?m.value=t:null),"prepend-inner-icon":"tabler-lock",type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(P,{modelValue:a(f),"onUpdate:modelValue":n[4]||(n[4]=t=>d(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},Ie=C("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstName"},"First Name",-1),Be=C("label",{class:"v-label text-body-2 text-high-emphasis",for:"email"},"Email",-1),Ue=C("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobile"},"Mobile",-1),Ee=C("label",{class:"v-label text-body-2 text-high-emphasis",for:"password"},"Password",-1),De={__name:"DemoFormLayoutHorizontalForm",setup(N){const p=r(""),b=r(""),u=r(),m=r(),f=r(!1);return(y,n)=>{const s=T;return k(),A(g,{onSubmit:n[5]||(n[5]=R(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(w,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Ie]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(s,{id:"firstName",modelValue:a(p),"onUpdate:modelValue":n[0]||(n[0]=t=>d(p)?p.value=t:null),placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(w,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Be]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(s,{id:"email",modelValue:a(b),"onUpdate:modelValue":n[1]||(n[1]=t=>d(b)?b.value=t:null),placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(w,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Ue]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(s,{id:"mobile",modelValue:a(u),"onUpdate:modelValue":n[2]||(n[2]=t=>d(u)?u.value=t:null),type:"number",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(w,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Ee]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(s,{id:"password",modelValue:a(m),"onUpdate:modelValue":n[3]||(n[3]=t=>d(m)?m.value=t:null),type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(P,{modelValue:a(f),"onUpdate:modelValue":n[4]||(n[4]=t=>d(f)?f.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[x(" Submit ")]),_:1}),e(F,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[x(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}},Se={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ze={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { emailValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},He={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},Me={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},$e={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},qe={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},We={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ye={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ge=C("h4",{class:"text-h6 font-weight-medium mb-5"}," Collapsible Section ",-1),Ul={__name:"form-layouts",setup(N){return(p,b)=>{const u=De,m=be,f=Le,y=Ne,n=ke,s=ge,t=he,_=_e,i=Fe,v=we;return k(),J("div",null,[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Horizontal Form",code:Me},{default:l(()=>[e(u)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Horizontal Form with Icons",code:$e},{default:l(()=>[e(f)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Vertical Form",code:We},{default:l(()=>[e(y)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Vertical Form with Icons",code:Ye},{default:l(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{title:"Multiple Column",code:qe},{default:l(()=>[e(s)]),_:1},8,["code"])]),_:1})]),_:1}),e(w,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Form Hint",code:Se},{default:l(()=>[e(t)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Form Validation",code:ze},{default:l(()=>[e(_)]),_:1},8,["code"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{title:"Form with Tabs","no-padding":"",code:He},{default:l(()=>[e(i)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[Ge,e(v)]),_:1})]),_:1})])}}};export{Ul as default};
