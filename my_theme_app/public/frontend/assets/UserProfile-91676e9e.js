import{o as l,b as i,w as a,p as o,q as t,A as s,Q as n,y as c,P as V,c as u,a as I,F as m,t as k,aa as P,ab as h,ac as S,ad as A}from"./index-3d65e1d5.js";import{u as L}from"./useAppAbility-edfa27a5.js";import{V as p}from"./VBadge-3864c4bb.js";import{V as d}from"./VImg-cfa7fa77.js";import{V as x}from"./VMenu-ef1e62a9.js";import{V as w,a as f,b as g,c as C}from"./VList-8244b403.js";import{V as B}from"./VListItemAction-5cb0ce60.js";import{V as b}from"./VAvatar-bf736ddf.js";import{V as D}from"./VDivider-43e3ef44.js";import"./transition-a7abc3a3.js";import"./forwardRefs-bb5e4b03.js";import"./VOverlay-70c268ac.js";import"./lazy-542d72bf.js";import"./easing-512405f0.js";import"./dialog-transition-b0c9e904.js";import"./ssrBoot-0b36a967.js";const tt={__name:"UserProfile",setup(N){const v=k(),y=L(),e=JSON.parse(localStorage.getItem("userData")||"null"),_=[{type:"divider"},{type:"navItem",icon:"tabler-user",title:"Profile",to:{name:"apps-user-view-id",params:{id:21}}},{type:"navItem",icon:"tabler-settings",title:"Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{type:"navItem",icon:"tabler-credit-card",title:"Billing",to:{name:"pages-account-settings-tab",params:{tab:"billing-plans"}},badgeProps:{color:"error",content:"3"}},{type:"divider"},{type:"navItem",icon:"tabler-lifebuoy",title:"Help",to:{name:"pages-help-center"}},{type:"navItem",icon:"tabler-currency-dollar",title:"Pricing",to:{name:"pages-pricing"}},{type:"navItem",icon:"tabler-help",title:"FAQ",to:{name:"pages-faq"}},{type:"divider"},{type:"navItem",icon:"tabler-logout",title:"Logout",onClick:()=>{localStorage.removeItem("userData"),localStorage.removeItem("accessToken"),v.push("/login").then(()=>{localStorage.removeItem("userAbilities"),y.update(A)})}}];return(T,q)=>(l(),i(p,{dot:"",bordered:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:a(()=>[o(b,{class:"cursor-pointer",color:t(e)&&t(e).avatar?void 0:"primary",variant:t(e)&&t(e).avatar?void 0:"tonal"},{default:a(()=>[t(e)&&t(e).avatar?(l(),i(d,{key:0,src:t(e).avatar},null,8,["src"])):(l(),i(s,{key:1,icon:"tabler-user"})),o(x,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:a(()=>[o(w,null,{default:a(()=>[o(f,null,{prepend:a(()=>[o(B,{start:""},{default:a(()=>[o(p,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:a(()=>[o(b,{color:t(e)&&t(e).avatar?void 0:"primary",variant:t(e)&&t(e).avatar?void 0:"tonal"},{default:a(()=>[t(e)&&t(e).avatar?(l(),i(d,{key:0,src:t(e).avatar},null,8,["src"])):(l(),i(s,{key:1,icon:"tabler-user"}))]),_:1},8,["color","variant"])]),_:1})]),_:1})]),default:a(()=>[o(g,{class:"font-weight-medium"},{default:a(()=>[n(c(t(e).fullName||t(e).username),1)]),_:1}),o(C,null,{default:a(()=>[n(c(t(e).role),1)]),_:1})]),_:1}),o(t(V),{options:{wheelPropagation:!1}},{default:a(()=>[(l(),u(m,null,I(_,r=>(l(),u(m,{key:r.title},[r.type==="navItem"?(l(),i(f,{key:0,to:r.to,onClick:z=>r.onClick&&r.onClick()},P({prepend:a(()=>[o(s,{class:"me-2",icon:r.icon,size:"22"},null,8,["icon"])]),default:a(()=>[o(g,null,{default:a(()=>[n(c(r.title),1)]),_:2},1024)]),_:2},[r.badgeProps?{name:"append",fn:a(()=>[o(p,h(S(r.badgeProps)),null,16)]),key:"0"}:void 0]),1032,["to","onClick"])):(l(),i(D,{key:1,class:"my-2"}))],64))),64))]),_:1})]),_:1})]),_:1})]),_:1},8,["color","variant"])]),_:1}))}};export{tt as default};
