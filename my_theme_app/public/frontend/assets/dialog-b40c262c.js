var ne=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var Q=(o,l,t)=>l in o?ne(o,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[l]=t,k=(o,l)=>{for(var t in l||(l={}))re.call(l,t)&&Q(o,t,l[t]);if(Y)for(var t of Y(l))ce.call(l,t)&&Q(o,t,l[t]);return o};import{_ as de}from"./AppTextField-b844d277.js";import{_ as j}from"./DialogCloseBtn-1e50a495.js";import{k as b,o as D,b as _,w as a,p as e,G as p,ab as A,ac as P,Q as r,q as d,H as f,aG as ee,at as U,aY as ae,as as G,az as q,a_ as ue,a$ as pe,b1 as me,au as ge,b4 as be,ax as $,b3 as fe,b5 as Ve,b7 as ve,av as he,D as Z,bc as le,bl as I,ay as S,ap as ke,br as ye,m as h,A as De,Z as Ce,c as J,F as O,Y as we,ao as Be,a as xe}from"./index-3bb1be67.js";import{V as C,d as v,a as _e,b as Te}from"./VCard-21e67de5.js";import{V as te,a as V}from"./VRow-51cf7d9e.js";import{V as w}from"./VDialog-f40fcf71.js";import{V as je}from"./VImg-4f16a21c.js";import{V as oe}from"./VSpacer-9d1fa0e2.js";import{V as K,d as X,a as L}from"./VList-b935207c.js";import{V as F}from"./VDivider-a0af681e.js";import{V as N}from"./VListItemAction-e4b33b5f.js";import{V as z}from"./VCheckbox-42103450.js";import{V as Le,a as Ae}from"./VRadioGroup-7e71f540.js";import{_ as Pe}from"./AppCardCode-42fac92a.js";import"./VInput-4b070ba9.js";import"./transition-a6bd692a.js";import"./VTextField-4c862cea.js";/* empty css                   */import"./VField-41dca5e8.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-2bd3570e.js";import"./VAvatar-e8c12b97.js";import"./VOverlay-9e706984.js";import"./lazy-be572c86.js";import"./dialog-transition-7cbfa88f.js";import"./ssrBoot-60944e8b.js";import"./VCheckboxBtn-c5bc4053.js";import"./VSelectionControl-0871be4a.js";import"./vue.runtime.esm-bundler-abeb18d8.js";const Se={__name:"DemoDialogForm",setup(o){const l=b(!1),t=b(""),i=b(""),s=b(""),n=b(""),g=b(""),m=b(),B=b([]);return(T,c)=>{const x=j,y=de;return D(),_(w,{modelValue:d(l),"onUpdate:modelValue":c[10]||(c[10]=u=>f(l)?l.value=u:null),"max-width":"600"},{activator:a(({props:u})=>[e(p,A(P(u)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(x,{onClick:c[0]||(c[0]=u=>l.value=!d(l))}),e(C,{title:"User Profile"},{default:a(()=>[e(v,null,{default:a(()=>[e(te,null,{default:a(()=>[e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(y,{modelValue:d(t),"onUpdate:modelValue":c[1]||(c[1]=u=>f(t)?t.value=u:null),label:"First Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(y,{modelValue:d(i),"onUpdate:modelValue":c[2]||(c[2]=u=>f(i)?i.value=u:null),label:"Middle Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(y,{modelValue:d(s),"onUpdate:modelValue":c[3]||(c[3]=u=>f(s)?s.value=u:null),label:"Last Name","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(y,{modelValue:d(n),"onUpdate:modelValue":c[4]||(c[4]=u=>f(n)?n.value=u:null),label:"Email"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(y,{modelValue:d(g),"onUpdate:modelValue":c[5]||(c[5]=u=>f(g)?g.value=u:null),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(y,{modelValue:d(m),"onUpdate:modelValue":c[6]||(c[6]=u=>f(m)?m.value=u:null),label:"Age",type:"number"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(y,{modelValue:d(B),"onUpdate:modelValue":c[7]||(c[7]=u=>f(B)?B.value=u:null),label:"Interests"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:c[8]||(c[8]=u=>l.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(p,{onClick:c[9]||(c[9]=u=>l.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}};const Ie=ee(k(k({text:String},U()),ae()),"v-toolbar-title"),ie=G()({name:"VToolbarTitle",props:Ie(),setup(o,l){let{slots:t}=l;return q(()=>{const i=!!(t.default||t.text||o.text);return e(o.tag,{class:["v-toolbar-title",o.class],style:o.style},{default:()=>{var s;return[i&&e("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():o.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),Ne=[null,"prominent","default","comfortable","compact"],ze=ee(k(k(k(k(k(k({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:o=>Ne.includes(o)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String},ue()),U()),pe()),me()),ae({tag:"header"})),ge()),"v-toolbar"),$e=G()({name:"VToolbar",props:ze(),setup(o,l){var y;let{slots:t}=l;const{backgroundColorClasses:i,backgroundColorStyles:s}=be($(o,"color")),{borderClasses:n}=fe(o),{elevationClasses:g}=Ve(o),{roundedClasses:m}=ve(o),{themeClasses:B}=he(o),T=b(!!(o.extended||(y=t.extension)!=null&&y.call(t))),c=Z(()=>parseInt(Number(o.height)+(o.density==="prominent"?Number(o.height):0)-(o.density==="comfortable"?8:0)-(o.density==="compact"?16:0),10)),x=Z(()=>T.value?parseInt(Number(o.extensionHeight)+(o.density==="prominent"?Number(o.extensionHeight):0)-(o.density==="comfortable"?4:0)-(o.density==="compact"?8:0),10):0);return le({VBtn:{variant:"text"}}),q(()=>{var R;const u=!!(o.title||t.title),se=!!(t.image||o.image),M=(R=t.extension)==null?void 0:R.call(t);return T.value=!!(o.extended||M),e(o.tag,{class:["v-toolbar",{"v-toolbar--absolute":o.absolute,"v-toolbar--collapse":o.collapse,"v-toolbar--flat":o.flat,"v-toolbar--floating":o.floating,[`v-toolbar--density-${o.density}`]:!0},i.value,n.value,g.value,m.value,B.value,o.class],style:[s.value,o.style]},{default:()=>[se&&e("div",{key:"image",class:"v-toolbar__image"},[t.image?e(I,{key:"image-defaults",disabled:!o.image,defaults:{VImg:{cover:!0,src:o.image}}},t.image):e(je,{key:"image-img",cover:!0,src:o.image},null)]),e(I,{defaults:{VTabs:{height:S(c.value)}}},{default:()=>{var H,E,W;return[e("div",{class:"v-toolbar__content",style:{height:S(c.value)}},[t.prepend&&e("div",{class:"v-toolbar__prepend"},[(H=t.prepend)==null?void 0:H.call(t)]),u&&e(ie,{key:"title",text:o.title},{text:t.title}),(E=t.default)==null?void 0:E.call(t),t.append&&e("div",{class:"v-toolbar__append"},[(W=t.append)==null?void 0:W.call(t)])])]}}),e(I,{defaults:{VTabs:{height:S(x.value)}}},{default:()=>[e(ke,null,{default:()=>[T.value&&e("div",{class:"v-toolbar__extension",style:{height:S(x.value)}},[M])]})]})]})}),{contentHeight:c,extensionHeight:x}}}),Fe=G()({name:"VToolbarItems",props:k(k({},U()),ye({variant:"text"})),setup(o,l){let{slots:t}=l;return le({VBtn:{color:$(o,"color"),height:"inherit",variant:$(o,"variant")}}),q(()=>{var i;return e("div",{class:["v-toolbar-items",o.class],style:o.style},[(i=t.default)==null?void 0:i.call(t)])}),{}}}),Ue={__name:"DemoDialogFullscreen",setup(o){const l=b(!1);return(t,i)=>(D(),_(w,{modelValue:d(l),"onUpdate:modelValue":i[2]||(i[2]=s=>f(l)?l.value=s:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:s})=>[e(p,A(P(s)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(C,null,{default:a(()=>[h("div",null,[e($e,{color:"primary"},{default:a(()=>[e(p,{icon:"",variant:"plain",onClick:i[0]||(i[0]=s=>l.value=!1)},{default:a(()=>[e(De,{color:"white",icon:"tabler-x"})]),_:1}),e(ie,null,{default:a(()=>[r("Settings")]),_:1}),e(oe),e(Fe,null,{default:a(()=>[e(p,{variant:"text",onClick:i[1]||(i[1]=s=>l.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),e(K,{lines:"two"},{default:a(()=>[e(X,null,{default:a(()=>[r("User Controls")]),_:1}),e(L,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(L,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(F),e(K,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(X,null,{default:a(()=>[r("General")]),_:1}),e(L,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:s})=>[e(N,{start:""},{default:a(()=>[e(z,{"model-value":s,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(L,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:s})=>[e(N,{start:""},{default:a(()=>[e(z,{"model-value":s,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(L,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:s})=>[e(N,{start:""},{default:a(()=>[e(z,{"model-value":s,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Ge={__name:"DemoDialogOverflowed",setup(o){const l=b(!1);return(t,i)=>{const s=j;return D(),_(w,{modelValue:d(l),"onUpdate:modelValue":i[3]||(i[3]=n=>f(l)?l.value=n:null),class:"v-dialog-sm"},{activator:a(({props:n})=>[e(p,Ce({color:"primary"},n),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(s,{onClick:i[0]||(i[0]=n=>l.value=!d(l))}),e(C,{title:"Use Google's location service?"},{default:a(()=>[e(v,null,{default:a(()=>[r(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:i[1]||(i[1]=n=>l.value=!1)},{default:a(()=>[r(" Disagree ")]),_:1}),e(p,{onClick:i[2]||(i[2]=n=>l.value=!1)},{default:a(()=>[r(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},qe={__name:"DemoDialogNesting",setup(o){const l=b(!1),t=b(!1);return(i,s)=>{const n=j;return D(),J(O,null,[e(p,{onClick:s[0]||(s[0]=g=>l.value=!0)},{default:a(()=>[r(" Open Dialog ")]),_:1}),e(w,{modelValue:d(l),"onUpdate:modelValue":s[4]||(s[4]=g=>f(l)?l.value=g:null),class:"v-dialog-sm"},{default:a(()=>[e(n,{onClick:s[1]||(s[1]=g=>l.value=!1)}),e(C,{title:"Dialog"},{default:a(()=>[e(v,null,{default:a(()=>[r(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:s[2]||(s[2]=g=>l.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(p,{onClick:s[3]||(s[3]=g=>t.value=!d(t))},{default:a(()=>[r(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{modelValue:d(t),"onUpdate:modelValue":s[7]||(s[7]=g=>f(t)?t.value=g:null),class:"v-dialog-sm"},{default:a(()=>[e(n,{onClick:s[5]||(s[5]=g=>t.value=!1)}),e(C,{title:"Dialog 2"},{default:a(()=>[e(v,null,{default:a(()=>[r("I'm a nested dialog.")]),_:1}),e(v,{class:"d-flex flex-wrap gap-3"},{default:a(()=>[e(oe),e(p,{onClick:s[6]||(s[6]=g=>t.value=!1)},{default:a(()=>[r(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},Je={__name:"DemoDialogLoader",setup(o){const l=b(!1);return we(l,t=>{t&&setTimeout(()=>{l.value=!1},4e3)}),(t,i)=>(D(),J(O,null,[e(p,{disabled:d(l),onClick:i[0]||(i[0]=s=>l.value=!0)},{default:a(()=>[r(" Start loading ")]),_:1},8,["disabled"]),e(w,{modelValue:d(l),"onUpdate:modelValue":i[1]||(i[1]=s=>f(l)?l.value=s:null),width:"300"},{default:a(()=>[e(C,{color:"primary",width:"300"},{default:a(()=>[e(v,{class:"pt-3"},{default:a(()=>[r(" Please stand by "),e(Be,{indeterminate:"",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},Oe={__name:"DemoDialogScrollable",setup(o){const l=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],t=b(""),i=b(!1);return(s,n)=>{const g=j;return D(),_(w,{modelValue:d(i),"onUpdate:modelValue":n[4]||(n[4]=m=>f(i)?i.value=m:null),scrollable:"","max-width":"350"},{activator:a(({props:m})=>[e(p,A(P(m)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(g,{onClick:n[0]||(n[0]=m=>i.value=!d(i))}),e(C,null,{default:a(()=>[e(_e,{class:"pb-5"},{default:a(()=>[e(Te,null,{default:a(()=>[r("Select Country")]),_:1})]),_:1}),e(F),e(v,{style:{"block-size":"300px"}},{default:a(()=>[e(Le,{modelValue:d(t),"onUpdate:modelValue":n[1]||(n[1]=m=>f(t)?t.value=m:null),inline:!1},{default:a(()=>[(D(),J(O,null,xe(l,m=>e(Ae,{key:m.label,label:m.label,value:m.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(F),e(v,{class:"d-flex justify-end flex-wrap gap-3 pt-5"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:n[2]||(n[2]=m=>i.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(p,{onClick:n[3]||(n[3]=m=>i.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Me={__name:"DemoDialogPersistent",setup(o){const l=b(!1);return(t,i)=>{const s=j;return D(),_(w,{modelValue:d(l),"onUpdate:modelValue":i[3]||(i[3]=n=>f(l)?l.value=n:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:n})=>[e(p,A(P(n)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(s,{onClick:i[0]||(i[0]=n=>l.value=!d(l))}),e(C,{title:"Use Google's location service?"},{default:a(()=>[e(v,null,{default:a(()=>[r(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:i[1]||(i[1]=n=>l.value=!1)},{default:a(()=>[r(" Disagree ")]),_:1}),e(p,{onClick:i[2]||(i[2]=n=>l.value=!1)},{default:a(()=>[r(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Re={__name:"DemoDialogBasic",setup(o){const l=b(!1);return(t,i)=>{const s=j;return D(),_(w,{modelValue:d(l),"onUpdate:modelValue":i[2]||(i[2]=n=>f(l)?l.value=n:null),width:"500"},{activator:a(({props:n})=>[e(p,A(P(n)),{default:a(()=>[r(" Click Me ")]),_:2},1040)]),default:a(()=>[e(s,{onClick:i[0]||(i[0]=n=>l.value=!d(l))}),e(C,{title:"Privacy Policy"},{default:a(()=>[e(v,null,{default:a(()=>[r(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(v,{class:"d-flex justify-end"},{default:a(()=>[e(p,{onClick:i[1]||(i[1]=n=>l.value=!1)},{default:a(()=>[r(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},He={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},We={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},Ye={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Qe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ze={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ke={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Xe={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ea=h("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),aa=h("p",null,[r("Use "),h("code",null,"persistent"),r(" prop to create persistent dialog.")],-1),la=h("p",null,[r("Use "),h("code",null,"scrollable"),r(" prop to create scrollable dialog.")],-1),ta=h("p",null,[r("The "),h("code",null,"v-dialog"),r(" component makes it easy to create a customized loading experience for your application.")],-1),oa=h("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),ia=h("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),sa=h("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),na=h("p",null,"Just a simple example of a form in a dialog.",-1),Ua={__name:"dialog",setup(o){return(l,t)=>{const i=Re,s=Pe,n=Me,g=Oe,m=Je,B=qe,T=Ge,c=Ue,x=Se;return D(),_(te,null,{default:a(()=>[e(V,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Basic",code:He},{default:a(()=>[ea,e(i)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Persistent",code:Ke},{default:a(()=>[aa,e(n)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Scrollable",code:Xe},{default:a(()=>[la,e(g)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Loader",code:Ye},{default:a(()=>[ta,e(m)]),_:1},8,["code"])]),_:1}),e(V,{col:"12",md:"6"},{default:a(()=>[e(s,{title:"Nesting",code:Qe},{default:a(()=>[oa,e(B)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Overflowed",code:Ze},{default:a(()=>[ia,e(T)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Fullscreen",code:We},{default:a(()=>[sa,e(c)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(s,{title:"Form",code:Ee},{default:a(()=>[na,e(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ua as default};
