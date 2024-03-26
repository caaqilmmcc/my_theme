import{d as T,k as R,r as $,o as i,b as u,w as t,q as C,c as A,p as e,ab as S,ac as x,m as a,n as V,A as c,I as N,B as m,Q as l,y as b,ap as k,K as O,L as w,H as D,aq as Y,a as E,F as L}from"./index-3d65e1d5.js";import{V as P,a as j,b as F,d as h}from"./VCard-832e4254.js";import{V as U}from"./VOverlay-70c268ac.js";import{V as H}from"./VTable-a9c627b5.js";import{a as _,V as K}from"./VRow-3ae3623c.js";import{V as Q}from"./VChip-566276cc.js";import"./VAvatar-bf736ddf.js";import"./VImg-cfa7fa77.js";import"./transition-a7abc3a3.js";import"./lazy-542d72bf.js";import"./easing-512405f0.js";const G={key:0},J={class:"v-card-content"},M=T({inheritAttrs:!1}),W=Object.assign(M,{__name:"AppCardActions",props:{collapsed:{type:Boolean,required:!1,default:!1},noActions:{type:Boolean,required:!1,default:!1},actionCollapsed:{type:Boolean,required:!1,default:!1},actionRefresh:{type:Boolean,required:!1,default:!1},actionRemove:{type:Boolean,required:!1,default:!1},title:{type:String,required:!1,default:void 0}},emits:["collapsed","refresh","trash"],setup(o,{emit:f}){const r=o,s=R(r.collapsed),v=R(!1),n=R(!1),d=()=>{n.value=!1},B=()=>{s.value=!s.value,f("collapsed",s.value)},z=()=>{n.value=!0,f("refresh",d)},q=()=>{v.value=!0,f("trash")};return(p,g)=>{const y=$("IconBtn");return i(),u(k,null,{default:t(()=>[C(v)?m("",!0):(i(),A("div",G,[e(P,S(x(p.$attrs)),{default:t(()=>[e(j,null,{append:t(()=>[a("div",null,[V(p.$slots,"before-actions"),(!(o.actionRemove||o.actionRefresh)||o.actionCollapsed)&&!o.noActions?(i(),u(y,{key:0,onClick:B},{default:t(()=>[e(c,{size:"20",icon:"tabler-chevron-up",style:N([{transform:C(s)?"rotate(-180deg)":null},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):m("",!0),(!(o.actionRemove||o.actionCollapsed)||o.actionRefresh)&&!o.noActions?(i(),u(y,{key:1,onClick:z},{default:t(()=>[e(c,{size:"20",icon:"tabler-refresh"})]),_:1})):m("",!0),(!(o.actionRefresh||o.actionCollapsed)||o.actionRemove)&&!o.noActions?(i(),u(y,{key:2,onClick:q},{default:t(()=>[e(c,{size:"20",icon:"tabler-x"})]),_:1})):m("",!0)])]),default:t(()=>[r.title||p.$slots.title?(i(),u(F,{key:0},{default:t(()=>[V(p.$slots,"title",{},()=>[l(b(r.title),1)])]),_:3})):m("",!0)]),_:3}),e(k,null,{default:t(()=>[O(a("div",J,[V(p.$slots,"default")],512),[[w,!C(s)]])]),_:3}),e(U,{modelValue:C(n),"onUpdate:modelValue":g[0]||(g[0]=I=>D(n)?n.value=I:null),contained:"",persistent:"",class:"align-center justify-center"},{default:t(()=>[e(Y,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3})}}}),X=a("thead",null,[a("tr",null,[a("th",{scope:"col"}," ACTION "),a("th",{scope:"col"}," ICON "),a("th",{scope:"col"}," DETAILS ")])],-1),Z=a("p",null,[l("You can specifically add collapsible action using "),a("code",null,"actionCollapse"),l(" prop")],-1),ee=a("p",null,[l("You can specifically add refresh action using "),a("code",null,"actionRefresh"),l(" prop")],-1),te=a("p",null,[l("You can specifically add remove action using "),a("code",null,"actionRemove"),l(" prop")],-1),ae=a("p",null,[a("code",null,"app-card-actions"),l(" also provides "),a("code",null,"before-actions"),l(" and "),a("code",null,"after-actions"),l(" slot")],-1),le=a("span",null,"You can find more details in our documentation",-1),he={__name:"card-actions",setup(o){const f=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],r=s=>{setTimeout(s,3e3)};return(s,v)=>{const n=W;return i(),u(K,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:r},{default:t(()=>[e(h,null,{default:t(()=>[e(H,null,{default:t(()=>[X,a("tbody",null,[(i(),A(L,null,E(f,d=>a("tr",{key:d.icon},[a("td",null,b(d.action),1),a("td",null,[e(c,{size:"20",icon:d.icon},null,8,["icon"])]),a("td",null,b(d.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(h,null,{default:t(()=>[Z,a("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-chevron-up"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:r},{default:t(()=>[e(h,null,{default:t(()=>[ee,a("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-refresh"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(h,null,{default:t(()=>[te,a("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-x"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:r},{"before-actions":t(()=>[e(Q,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[l(" 3 Updates ")]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[ae,le]),_:1})]),_:1})]),_:1})]),_:1})}}};export{he as default};