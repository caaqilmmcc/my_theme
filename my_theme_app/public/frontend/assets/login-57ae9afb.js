var w=(I,h,c)=>new Promise((d,_)=>{var y=r=>{try{m(c.next(r))}catch(l){_(l)}},x=r=>{try{m(c.throw(r))}catch(l){_(l)}},m=r=>r.done?d(r.value):Promise.resolve(r.value).then(y,x);m((c=c.apply(I,h)).next())});import{_ as D}from"./AppTextField-583fab88.js";import{k as f,o as F,b as J,w as t,p as e,m as o,q as s,V as M,x as C,Q as n,y as q,$ as E,H as k,G as $,ag as G,t as z,r as H,a5 as N}from"./index-dea2516e.js";import{u as Q}from"./useAppAbility-7fedb8ed.js";import{_ as W}from"./AuthProvider-b0052c9c.js";import{u as L}from"./useGenerateImageVariant-a4e66fdd.js";import{a as K,b as X,c as Y,d as Z}from"./auth-v2-login-illustration-light-b29eb6f3.js";import{m as ee,a as te}from"./misc-mask-light-eb104613.js";import{r as R}from"./validators-50c95554.js";import{b as A}from"./route-block-83d24a4e.js";import{V as P}from"./VImg-9210c4df.js";import{a as u,V as T}from"./VRow-6d5fb2f3.js";import{V as ae,d as S}from"./VCard-0fcf72b4.js";import{V as se}from"./VAlert-f91b55d3.js";import{V as oe}from"./VForm-2604706f.js";import{V as re}from"./VCheckbox-15730ff9.js";import{V as O}from"./VDivider-3a816182.js";import"./VInput-47172c35.js";import"./transition-79a2ac22.js";import"./VTextField-692b1cc3.js";/* empty css                   */import"./VField-2d5a3932.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-a2d2f8e4.js";import"./index-61e4df1a.js";import"./VAvatar-8615dc07.js";import"./VCheckboxBtn-5583829a.js";import"./VSelectionControl-41a81448.js";const le={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},ne={class:"d-flex align-center justify-center w-100 h-100"},ie={class:"text-h5 mb-1"},me={class:"text-capitalize"},ue=o("p",{class:"mb-0"},"Please sign-in to your account and start the adventure",-1),ce=o("p",{class:"text-caption mb-2"},[n(" Admin Email: "),o("strong",null,"admin@demo.com"),n(" / Pass: "),o("strong",null,"admin")],-1),de=o("p",{class:"text-caption mb-0"},[n(" Client Email: "),o("strong",null,"client@demo.com"),n(" / Pass: "),o("strong",null,"client")],-1),pe={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},fe=o("span",null,"New on our platform?",-1),_e=o("span",{class:"mx-4"},"or",-1),ge={__name:"login",setup(I){const h=L(Z,Y,X,K,!0),c=L(te,ee),d=f(!1),_=G(),y=z(),x=Q(),m=f({email:void 0,password:void 0}),r=f(),l=f("administrator"),V=f("mmcccc."),v=f(!1),U=i=>w(this,null,function*(){return(yield N.get("/api/resource/User",{params:{filters:JSON.stringify({username:i}),fields:JSON.stringify(["username","name","full_name","email","user_image","role_profile_name"])}})).data.data}),j=()=>{N({url:"/api/method/login",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:JSON.stringify({usr:l.value,pwd:V.value})}).then(i=>w(this,null,function*(){if(i.data){const a=yield U(l.value),b={id:a[0].name,fullName:a[0].full_name,username:a[0].username,avatar:a[0].user_image,email:a[0].email,role:"admin"},g=[{action:"manage",subject:"all"}];localStorage.setItem("userAbilities",JSON.stringify(g)),x.update(g),localStorage.setItem("userData",JSON.stringify(b)),localStorage.setItem("accessToken",JSON.stringify("680e237cdc355e4.4c9f82915c34ffd")),y.replace(_.query.to?String(_.query.to):"/")}})).catch(i=>{m.value={email:"Email or Password is Invalid",password:""}})},B=()=>{var i;(i=r.value)==null||i.validate().then(({valid:a})=>{a&&j()})};return(i,a)=>{const b=D,g=H("RouterLink");return F(),J(T,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:t(()=>[e(u,{lg:"8",class:"d-none d-lg-flex"},{default:t(()=>[o("div",le,[o("div",ne,[e(P,{"max-width":"505",src:s(h),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(P,{src:s(c),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),e(u,{cols:"12",lg:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(ae,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(S,null,{default:t(()=>[e(s(M),{nodes:s(C).app.logo,class:"mb-6"},null,8,["nodes"]),o("h5",ie,[n(" Welcome to "),o("span",me,q(s(C).app.title),1),n("! 👋🏻 ")]),ue]),_:1}),e(S,null,{default:t(()=>[e(se,{color:"primary",variant:"tonal"},{default:t(()=>[ce,de]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(s(oe),{ref_key:"refVForm",ref:r,onSubmit:E(B,["prevent"])},{default:t(()=>[e(T,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(b,{modelValue:s(l),"onUpdate:modelValue":a[0]||(a[0]=p=>k(l)?l.value=p:null),label:"Email",type:"text",autofocus:"",rules:[s(R)],"error-messages":s(m).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(b,{modelValue:s(V),"onUpdate:modelValue":a[1]||(a[1]=p=>k(V)?V.value=p:null),label:"Password",rules:[s(R)],type:s(d)?"text":"password","error-messages":s(m).password,"append-inner-icon":s(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[2]||(a[2]=p=>d.value=!s(d))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),o("div",pe,[e(re,{modelValue:s(v),"onUpdate:modelValue":a[3]||(a[3]=p=>k(v)?v.value=p:null),label:"Remember me"},null,8,["modelValue"]),e(g,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:t(()=>[n(" Forgot Password? ")]),_:1})]),e($,{block:"",type:"submit"},{default:t(()=>[n(" Login ")]),_:1})]),_:1}),e(u,{cols:"12",class:"text-center"},{default:t(()=>[fe,e(g,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[n(" Create an account ")]),_:1})]),_:1}),e(u,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(O),_e,e(O)]),_:1}),e(u,{cols:"12",class:"text-center"},{default:t(()=>[e(W)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof A=="function"&&A(ge);export{ge as default};