import{_ as K}from"./AppTextField-82e9d536.js";import{_ as W}from"./AppSelect-0e0c131e.js";import{k as c,a3 as X,o as y,c as k,p as t,w as a,F as Y,a as ee,q as s,H as m,m as r,G as f,Q as u,b as te,y as n,A as d,ah as ae,Z as I,r as R,s as le}from"./index-3d65e1d5.js";import{_ as se}from"./AddNewUserDrawer-6febf6b0.js";import{u as re}from"./useUserListStore-f30ee8b9.js";import{a as oe}from"./formatters-9ef7de78.js";import{a as v,V as T}from"./VRow-3ae3623c.js";import{V as $,d as C}from"./VCard-832e4254.js";import{V as S}from"./VDivider-43e3ef44.js";import{V as ie}from"./VSpacer-49e18a7e.js";import{V as ne}from"./VDataTableServer-c3cd0545.js";import{V as L}from"./VAvatar-bf736ddf.js";import{V as ce}from"./VImg-cfa7fa77.js";import{V as ue}from"./VChip-566276cc.js";import{V as de}from"./VMenu-ef1e62a9.js";import{V as pe,a as A,b as z}from"./VList-8244b403.js";import{V as me}from"./VPagination-64f851cf.js";import"./VInput-520171d3.js";import"./transition-a7abc3a3.js";import"./VTextField-85f8d610.js";/* empty css                   */import"./VField-ced76ed7.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-b3b5b6fc.js";import"./VSelect-baa71b1e.js";import"./dialog-transition-b0c9e904.js";import"./VCheckboxBtn-e4cee54f.js";import"./VSelectionControl-0737fedc.js";import"./AppDrawerHeaderSection-7ec79258.js";import"./validators-50c95554.js";import"./index-61e4df1a.js";import"./VForm-8205b5a2.js";import"./VNavigationDrawer-f70cfaa4.js";import"./ssrBoot-0b36a967.js";import"./VDataTable-8bc83314.js";import"./filter-5881a2d1.js";import"./VTable-a9c627b5.js";import"./VOverlay-70c268ac.js";import"./lazy-542d72bf.js";const fe={class:"d-flex align-center gap-2 my-1"},ve={class:"text-h4"},_e={class:"me-3 d-flex gap-3"},ge={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},be={style:{"inline-size":"10rem"}},we={class:"d-flex align-center"},Ve={key:1},xe={class:"d-flex flex-column"},ye={class:"text-base"},he={class:"text-sm text-medium-emphasis"},Ue={class:"d-flex align-center gap-4"},Pe={class:"text-capitalize"},ke={class:"text-capitalize font-weight-medium"},Ce={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Se={class:"text-sm text-disabled mb-0"},_t={__name:"index",setup(Le){const h=re(),_=c(""),g=c(),b=c(),w=c(),E=c(1),p=c(0),B=c([]),i=c({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),M=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],U=()=>{h.fetchUsers({q:_.value,status:w.value,plan:b.value,role:g.value,options:i.value}).then(o=>{B.value=o.data.users,E.value=o.data.totalPage,p.value=o.data.totalUsers,i.value.page=o.data.page}).catch(o=>{console.error(o)})};X(U);const F=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],j=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],O=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],P=o=>{const l=o.toLowerCase();return l==="subscriber"?{color:"warning",icon:"tabler-circle-check"}:l==="author"?{color:"success",icon:"tabler-user"}:l==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:l==="editor"?{color:"info",icon:"tabler-edit"}:l==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}},q=o=>{const l=o.toLowerCase();return l==="pending"?"warning":l==="active"?"success":l==="inactive"?"secondary":"primary"},V=c(!1),Q=o=>{h.addUser(o),U()},G=[{icon:"tabler-user",color:"primary",title:"Session",stats:"21,459",percentage:29,subtitle:"Total Users"},{icon:"tabler-user-plus",color:"error",title:"Paid Users",stats:"4,567",percentage:18,subtitle:"Last week analytics"},{icon:"tabler-user-check",color:"success",title:"Active Users",stats:"19,860",percentage:-14,subtitle:"Last week analytics"},{icon:"tabler-user-exclamation",color:"warning",title:"Pending Users",stats:"237",percentage:42,subtitle:"Last week analytics"}],D=o=>{h.deleteUser(o),U()};return(o,l)=>{const x=W,H=K,Z=R("RouterLink"),N=R("IconBtn");return y(),k("section",null,[t(T,null,{default:a(()=>[(y(),k(Y,null,ee(G,e=>t(v,{key:e.title,cols:"12",sm:"6",lg:"3"},{default:a(()=>[t($,null,{default:a(()=>[t(C,{class:"d-flex justify-space-between"},{default:a(()=>[r("div",null,[r("span",null,n(e.title),1),r("div",fe,[r("h6",ve,n(e.stats),1),r("span",{class:le(e.percentage>0?"text-success":"text-error")},"( "+n(e.percentage>0?"+":"")+" "+n(e.percentage)+"%)",3)]),r("span",null,n(e.subtitle),1)]),t(L,{rounded:"",variant:"tonal",color:e.color,icon:e.icon},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),t(v,{cols:"12"},{default:a(()=>[t($,{title:"Search Filter"},{default:a(()=>[t(C,null,{default:a(()=>[t(T,null,{default:a(()=>[t(v,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(g),"onUpdate:modelValue":l[0]||(l[0]=e=>m(g)?g.value=e:null),label:"Select Role",items:F,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(b),"onUpdate:modelValue":l[1]||(l[1]=e=>m(b)?b.value=e:null),label:"Select Plan",items:j,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(w),"onUpdate:modelValue":l[2]||(l[2]=e=>m(w)?w.value=e:null),label:"Select Status",items:O,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(S),t(C,{class:"d-flex flex-wrap py-4 gap-4"},{default:a(()=>[r("div",_e,[t(x,{"model-value":s(i).itemsPerPage,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":l[3]||(l[3]=e=>s(i).itemsPerPage=parseInt(e,10))},null,8,["model-value"])]),t(ie),r("div",ge,[r("div",be,[t(H,{modelValue:s(_),"onUpdate:modelValue":l[4]||(l[4]=e=>m(_)?_.value=e:null),placeholder:"Search",density:"compact"},null,8,["modelValue"])]),t(f,{variant:"tonal",color:"secondary","prepend-icon":"tabler-screen-share"},{default:a(()=>[u(" Export ")]),_:1}),t(f,{"prepend-icon":"tabler-plus",onClick:l[5]||(l[5]=e=>V.value=!0)},{default:a(()=>[u(" Add New User ")]),_:1})])]),_:1}),t(S),t(s(ne),{"items-per-page":s(i).itemsPerPage,"onUpdate:itemsPerPage":l[7]||(l[7]=e=>s(i).itemsPerPage=e),page:s(i).page,"onUpdate:page":l[8]||(l[8]=e=>s(i).page=e),items:s(B),"items-length":s(p),headers:M,class:"text-no-wrap","onUpdate:options":l[9]||(l[9]=e=>i.value=e)},{"item.user":a(({item:e})=>[r("div",we,[t(L,{size:"34",variant:e.raw.avatar?void 0:"tonal",color:e.raw.avatar?void 0:P(e.raw.role).color,class:"me-3"},{default:a(()=>[e.raw.avatar?(y(),te(ce,{key:0,src:e.raw.avatar},null,8,["src"])):(y(),k("span",Ve,n(s(oe)(e.raw.fullName)),1))]),_:2},1032,["variant","color"]),r("div",xe,[r("h6",ye,[t(Z,{to:{name:"apps-user-view-id",params:{id:e.raw.id}},class:"font-weight-medium user-list-name"},{default:a(()=>[u(n(e.raw.fullName),1)]),_:2},1032,["to"])]),r("span",he,"@"+n(e.raw.email),1)])])]),"item.role":a(({item:e})=>[r("div",Ue,[t(L,{size:30,color:P(e.raw.role).color,variant:"tonal"},{default:a(()=>[t(d,{size:20,icon:P(e.raw.role).icon},null,8,["icon"])]),_:2},1032,["color"]),r("span",Pe,n(e.raw.role),1)])]),"item.plan":a(({item:e})=>[r("span",ke,n(e.raw.currentPlan),1)]),"item.status":a(({item:e})=>[t(ue,{color:q(e.raw.status),size:"small",label:"",class:"text-capitalize"},{default:a(()=>[u(n(e.raw.status),1)]),_:2},1032,["color"])]),"item.actions":a(({item:e})=>[t(N,{onClick:J=>D(e.raw.id)},{default:a(()=>[t(d,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),t(N,null,{default:a(()=>[t(d,{icon:"tabler-edit"})]),_:1}),t(f,{icon:"",variant:"text",size:"small",color:"medium-emphasis"},{default:a(()=>[t(d,{size:"24",icon:"tabler-dots-vertical"}),t(de,{activator:"parent"},{default:a(()=>[t(pe,null,{default:a(()=>[t(A,{to:{name:"apps-user-view-id",params:{id:e.raw.id}}},{prepend:a(()=>[t(d,{icon:"tabler-eye"})]),default:a(()=>[t(z,null,{default:a(()=>[u("View")]),_:1})]),_:2},1032,["to"]),t(A,{link:""},{prepend:a(()=>[t(d,{icon:"tabler-pencil"})]),default:a(()=>[t(z,null,{default:a(()=>[u("Edit")]),_:1})]),_:1}),t(A,{onClick:J=>D(e.raw.id)},{prepend:a(()=>[t(d,{icon:"tabler-trash"})]),default:a(()=>[t(z,null,{default:a(()=>[u("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(S),r("div",Ce,[r("p",Se,n(s(ae)(s(i),s(p))),1),t(me,{modelValue:s(i).page,"onUpdate:modelValue":l[6]||(l[6]=e=>s(i).page=e),length:Math.ceil(s(p)/s(i).itemsPerPage),"total-visible":o.$vuetify.display.xs?1:Math.ceil(s(p)/s(i).itemsPerPage)},{prev:a(e=>[t(f,I({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[u(" Previous ")]),_:2},1040)]),next:a(e=>[t(f,I({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[u(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),t(se,{isDrawerOpen:s(V),"onUpdate:isDrawerOpen":l[10]||(l[10]=e=>m(V)?V.value=e:null),onUserData:Q},null,8,["isDrawerOpen"])]),_:1})]),_:1})])}}};export{_t as default};