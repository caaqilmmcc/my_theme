import{W as N,dP as j,k as _,bm as f,Y as I,a3 as E,r as H,o as l,b as g,w as t,p as a,q as r,H as O,dC as B,m as o,A as u,P as W,K as w,c as p,F as v,a as x,Q as L,y as b,n as D,L as $,B as K,a7 as X,a8 as Y}from"./index-3d65e1d5.js";import{V as G,d as A}from"./VCard-832e4254.js";import{V as J}from"./VTextField-85f8d610.js";import{V as Z}from"./VDivider-43e3ef44.js";import{V as Q,d as ee,a as R,b as se}from"./VList-8244b403.js";import{V as te,a as ae}from"./VRow-3ae3623c.js";import{V as re}from"./VDialog-c264e12f.js";import"./VAvatar-bf736ddf.js";import"./VImg-cfa7fa77.js";import"./transition-a7abc3a3.js";/* empty css                   */import"./VField-ced76ed7.js";import"./VInput-520171d3.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-b3b5b6fc.js";import"./ssrBoot-0b36a967.js";import"./VOverlay-70c268ac.js";import"./lazy-542d72bf.js";import"./dialog-transition-b0c9e904.js";const z=m=>(X("data-v-c4522287"),m=m(),Y(),m),le={class:"d-flex align-center text-high-emphasis me-1"},oe={class:"d-flex align-center"},ie={class:"h-100"},ne={class:"text-xs text-disabled text-uppercase"},ce={class:"h-100"},ue={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},pe={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},de=z(()=>o("span",null,"No Result For ",-1)),he={key:0,class:"mt-8"},fe=z(()=>o("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),me=["onClick"],ye={class:"text-sm"},_e={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchQuery:{type:String,required:!0},searchResults:{type:Array,required:!0},suggestions:{type:Array,required:!1},noDataSuggestion:{type:Array,required:!1}},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(m,{emit:y}){const i=m,{ctrl_k:F,meta_k:T}=j({passive:!1,onEventFired(e){e.ctrlKey&&e.key==="k"&&e.type==="keydown"&&e.preventDefault()}}),S=_(),n=_(structuredClone(f(i.searchQuery))),q=_(),C=_(structuredClone(f(i.isDialogVisible))),d=_(structuredClone(f(i.searchResults)));I(i,()=>{C.value=structuredClone(f(i.isDialogVisible)),d.value=structuredClone(f(i.searchResults)),n.value=structuredClone(f(i.searchQuery))}),I([F,T],()=>{C.value=!0,y("update:isDialogVisible",!0)});const V=()=>{y("update:isDialogVisible",!1),y("update:searchQuery","")};E(()=>{n.value.length||(d.value=[])});const P=e=>{var c,k;e.key==="ArrowDown"?(e.preventDefault(),(c=S.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(k=S.value)==null||k.focus("prev"))},U=e=>{y("update:isDialogVisible",e),y("update:searchQuery","")},M=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>{const k=H("IconBtn");return l(),g(re,{"max-width":"600","model-value":r(C),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":U,onKeyup:B(V,["esc"])},{default:t(()=>[a(G,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a(A,{class:"pt-1",style:{"min-block-size":"65px"}},{default:t(()=>[a(J,{ref_key:"refSearchInput",ref:q,modelValue:r(n),"onUpdate:modelValue":[c[0]||(c[0]=s=>O(n)?n.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",r(n)))],autofocus:"",density:"comfortable",variant:"plain",class:"app-bar-autocomplete-box",onKeyup:B(V,["esc"]),onKeydown:P},{"prepend-inner":t(()=>[o("div",le,[a(u,{size:"22",icon:"tabler-search",class:"mt-1",style:{opacity:"1"}})])]),"append-inner":t(()=>[o("div",oe,[o("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:V}," [esc] "),a(k,{size:"small",onClick:V},{default:t(()=>[a(u,{icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(Z),a(r(W),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[w(a(r(Q),{ref_key:"refSearchList",ref:S,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(l(!0),p(v,null,x(r(d),s=>(l(),p(v,{key:s.title},["header"in s?(l(),g(r(ee),{key:0,class:"text-disabled"},{default:t(()=>[L(b(M(s.title)),1)]),_:2},1024)):D(e.$slots,"searchResult",{key:1,item:s},()=>[a(r(R),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(se,null,{default:t(()=>[L(b(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[$,r(n).length&&!!r(d).length]]),w(o("div",ie,[D(e.$slots,"suggestions",{},()=>[a(A,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[i.suggestions?(l(),g(te,{key:0,class:"gap-y-4"},{default:t(()=>[(l(!0),p(v,null,x(i.suggestions,s=>(l(),g(ae,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[o("p",ne,b(s.title),1),a(r(Q),{class:"card-list"},{default:t(()=>[(l(!0),p(v,null,x(s.content,h=>(l(),g(r(R),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:ge=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):K("",!0)]),_:1})],!0)],512),[[$,!!r(d)&&!r(n)]]),w(o("div",ce,[D(e.$slots,"noData",{},()=>[a(A,{class:"h-100"},{default:t(()=>[o("div",ue,[a(u,{size:"75",icon:"tabler-file-x"}),o("div",pe,[de,o("span",null,'"'+b(r(n))+'"',1)]),i.noDataSuggestion?(l(),p("div",he,[fe,(l(!0),p(v,null,x(i.noDataSuggestion,s=>(l(),p("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),o("span",ye,b(s.title),1)],8,me))),128))])):K("",!0)])]),_:1})],!0)],512),[[$,!r(d).length&&r(n).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"])}}},qe=N(_e,[["__scopeId","data-v-c4522287"]]);export{qe as default};
