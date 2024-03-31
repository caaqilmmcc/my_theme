import{_ as v}from"./AppTextField-0e9af958.js";import{k as d,o as x,b as k,w as a,p as e,m as o,q as t,V as w,x as C,$ as I,G as R,Q as u,r as B}from"./index-6e9ab8b8.js";import{_ as L}from"./AuthProvider-4b882e4b.js";import{u as p}from"./useGenerateImageVariant-82f6d642.js";import{a as M,b as P,c as U,d as D}from"./auth-v2-register-illustration-light-f88155f9.js";import{m as N,a as T}from"./misc-mask-light-eb104613.js";import{b as c}from"./route-block-83d24a4e.js";import{V as f}from"./VImg-5111e2cf.js";import{a as i,V as _}from"./VRow-c1d5def7.js";import{V as $,d as V}from"./VCard-c05bc65f.js";import{V as j}from"./VForm-0ab3e403.js";import{V as A}from"./VCheckbox-3dd18105.js";import{V as S}from"./VInput-9f585516.js";import{V as g}from"./VDivider-72b477de.js";import"./VTextField-0a2b69e1.js";/* empty css                   */import"./VField-f5a6d12c.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-76d6d7ad.js";import"./transition-19a281fe.js";import"./VAvatar-4c62c8c1.js";import"./VCheckboxBtn-58e76b9a.js";import"./VSelectionControl-3c698f5b.js";const F={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},G={class:"d-flex align-center justify-center w-100 h-100"},q=o("h5",{class:"text-h5 mb-1"}," Adventure starts here 🚀 ",-1),E=o("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),Q={class:"d-flex align-center mt-2 mb-4"},z=o("span",{class:"me-1"},"I agree to",-1),H=o("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),J=o("span",null,"Already have an account?",-1),K=o("span",{class:"mx-4"},"or",-1),O={__name:"register-v2",setup(W){const l=d({username:"",email:"",password:"",privacyPolicies:!1}),y=p(D,U,P,M,!0),b=p(T,N),n=d(!1);return(X,s)=>{const m=v,h=B("RouterLink");return x(),k(_,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:a(()=>[e(i,{md:"8",class:"d-none d-md-flex"},{default:a(()=>[o("div",F,[o("div",G,[e(f,{"max-width":"441",src:t(y),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(f,{class:"auth-footer-mask",src:t(b)},null,8,["src"])])]),_:1}),e(i,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:a(()=>[e($,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:a(()=>[e(V,null,{default:a(()=>[e(t(w),{nodes:t(C).app.logo,class:"mb-6"},null,8,["nodes"]),q,E]),_:1}),e(V,null,{default:a(()=>[e(j,{onSubmit:s[5]||(s[5]=I(()=>{},["prevent"]))},{default:a(()=>[e(_,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:t(l).username,"onUpdate:modelValue":s[0]||(s[0]=r=>t(l).username=r),autofocus:"",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:t(l).email,"onUpdate:modelValue":s[1]||(s[1]=r=>t(l).email=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:t(l).password,"onUpdate:modelValue":s[2]||(s[2]=r=>t(l).password=r),label:"Password",type:t(n)?"text":"password","append-inner-icon":t(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=r=>n.value=!t(n))},null,8,["modelValue","type","append-inner-icon"]),o("div",Q,[e(A,{id:"privacy-policy",modelValue:t(l).privacyPolicies,"onUpdate:modelValue":s[4]||(s[4]=r=>t(l).privacyPolicies=r),inline:""},null,8,["modelValue"]),e(S,{for:"privacy-policy",style:{opacity:"1"}},{default:a(()=>[z,H]),_:1})]),e(R,{block:"",type:"submit"},{default:a(()=>[u(" Sign up ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:a(()=>[J,e(h,{class:"text-primary ms-2",to:{name:"pages-authentication-login-v2"}},{default:a(()=>[u(" Sign in instead ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(g),K,e(g)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:a(()=>[e(L)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof c=="function"&&c(O);export{O as default};