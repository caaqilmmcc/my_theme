import{W as f,k as g,bm as y,Y as I,q as i,o as r,b as m,w as a,c as h,F as R,a as W,Z as k,p as n,s as V,m as p,H as d,B as x,n as z,A as j,y as C}from"./index-6e9ab8b8.js";import{a as b,V as v}from"./VRow-c1d5def7.js";import{V as w}from"./VInput-9f585516.js";import{V as $}from"./VCheckbox-3dd18105.js";import{a as B,V as q}from"./VRadioGroup-ac6b1a5d.js";import{_ as G}from"./CustomRadiosWithIcon-17d90870.js";import{V as S}from"./VSpacer-1a623a8b.js";import{_ as F}from"./AppCardCode-b292dd52.js";import{_ as A}from"./CustomRadios-3c425e80.js";import"./transition-19a281fe.js";import"./VCheckboxBtn-58e76b9a.js";import"./VSelectionControl-3c698f5b.js";import"./VAvatar-4c62c8c1.js";import"./VImg-5111e2cf.js";import"./vue.runtime.esm-bundler-1614b3c2.js";import"./VCard-c05bc65f.js";import"./VDivider-72b477de.js";const E=["src"],P={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:l}){const o=u,t=g(structuredClone(y(o.selectedCheckbox)));return I(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(r(),m(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>d(t)?t.value=e:null)},{default:a(()=>[(r(!0),h(R,null,W(o.checkboxContent,e=>(r(),m(b,k({key:e.value},u.gridColumn),{default:a(()=>[n(w,{class:V(["custom-input custom-checkbox rounded cursor-pointer w-100",i(t).includes(e.value)?"active":""])},{default:a(()=>[p("div",null,[n($,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=_=>d(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])]),p("img",{src:e.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,E)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):x("",!0)}},T=f(P,[["__scopeId","data-v-4388636f"]]),L="/assets/my_theme_app/frontend/assets/custom-checkbox-img-1-ad01355a.png",O="/assets/my_theme_app/frontend/assets/custom-checkbox-img-2-2d35a86b.png",J="/assets/my_theme_app/frontend/assets/custom-checkbox-img-3-1a4526bb.png",N={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(u){const l=[{bgImage:L,value:"basic"},{bgImage:O,value:"premium"},{bgImage:J,value:"enterprise"}],o=g(["basic"]);return(t,c)=>{const s=T;return r(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>d(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}};const H=["src"],Y={__name:"CustomRadiosWithImage",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(u,{emit:l}){const o=u,t=g(structuredClone(y(o.selectedRadio)));return I(t,()=>{l("update:selectedRadio",t.value)}),(c,s)=>o.radioContent?(r(),m(q,{key:0,modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=e=>d(t)?t.value=e:null)},{default:a(()=>[n(v,null,{default:a(()=>[(r(!0),h(R,null,W(o.radioContent,e=>(r(),m(b,k({key:e.bgImage},u.gridColumn),{default:a(()=>[n(w,{class:V(["custom-input custom-radio rounded cursor-pointer w-100",i(t)===e.value?"active":""])},{default:a(()=>[p("img",{src:e.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,H),n(B,{value:e.value},null,8,["value"])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):x("",!0)}},Z=f(Y,[["__scopeId","data-v-76689b43"]]),K="/assets/my_theme_app/frontend/assets/custom-radio-img-1-9fd6addb.png",M="/assets/my_theme_app/frontend/assets/custom-radio-img-2-81c76549.png",Q="/assets/my_theme_app/frontend/assets/custom-radio-img-3-9150de6f.png",X={__name:"DemoCustomInputCustomRadiosWithImage",setup(u){const l=[{bgImage:K,value:"basic"},{bgImage:M,value:"premium"},{bgImage:Q,value:"enterprise"}],o=g("basic");return(t,c)=>{const s=Z;return r(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>d(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const ee={class:"d-flex flex-column align-center text-center gap-2"},te={class:"cr-title text-base"},oe={class:"text-sm clamp-text mb-0"},se={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:l}){const o=u,t=g(structuredClone(y(o.selectedCheckbox)));return I(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(r(),m(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>d(t)?t.value=e:null)},{default:a(()=>[(r(!0),h(R,null,W(o.checkboxContent,e=>(r(),m(b,k({key:e.title},u.gridColumn),{default:a(()=>[n(w,{class:V(["custom-input custom-checkbox-icon rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:a(()=>[z(c.$slots,"default",{item:e},()=>[p("div",ee,[n(j,k(e.icon,{class:"text-high-emphasis"}),null,16),p("h6",te,C(e.title),1),p("p",oe,C(e.desc),1)])],!0),p("div",null,[n($,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=_=>d(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3},8,["modelValue"])):x("",!0)}},ce=f(se,[["__scopeId","data-v-18cc8252"]]),ne={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(u){const l=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"tabler-server-2",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"tabler-ban",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"tabler-lock",size:"28"}}],o=g(["basic"]);return(t,c)=>{const s=ce;return r(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>d(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},ae={__name:"DemoCustomInputCustomRadiosWithIcon",setup(u){const l=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"tabler-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"tabler-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"tabler-crown",size:"28"}}],o=g("basic");return(t,c)=>{const s=G;return r(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>d(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const le={class:"flex-grow-1"},ie={class:"d-flex align-center mb-1"},re={class:"cr-title text-base"},ue={key:0,class:"text-disabled text-base"},me={class:"text-sm mb-0"},de={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(u,{emit:l}){const o=u,t=g(structuredClone(y(o.selectedCheckbox)));return I(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&i(t)?(r(),m(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>d(t)?t.value=e:null)},{default:a(()=>[(r(!0),h(R,null,W(o.checkboxContent,e=>(r(),m(b,k({key:e.title},u.gridColumn),{default:a(()=>[n(w,{class:V(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:a(()=>[p("div",null,[n($,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=_=>d(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])]),z(c.$slots,"default",{item:e},()=>[p("div",le,[p("div",ie,[p("h6",re,C(e.title),1),n(S),e.subtitle?(r(),h("span",ue,C(e.subtitle),1)):x("",!0)]),p("p",me,C(e.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3},8,["modelValue"])):x("",!0)}},pe=f(de,[["__scopeId","data-v-b4c64ae8"]]),be={__name:"DemoCustomInputCustomCheckboxes",setup(u){const l=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],o=g(["basic"]);return(t,c)=>{const s=pe;return r(),m(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>d(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}},ge={__name:"DemoCustomInputCustomRadios",setup(u){const l=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],o=g("basic");return(t,c)=>{const s=A;return r(),m(s,{"selected-radio":i(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>d(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}},_e={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},Ce={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'tabler-server-2', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'tabler-ban', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'tabler-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'tabler-server-2',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'tabler-ban',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'tabler-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ke={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},xe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'tabler-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'tabler-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'tabler-crown', size: '28' },
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'tabler-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'tabler-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'tabler-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ve={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ae={__name:"custom-input",setup(u){return(l,o)=>{const t=ge,c=F,s=be,e=ae,_=ne,U=X,D=N;return r(),m(v,null,{default:a(()=>[n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios",code:ke},{default:a(()=>[n(t)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes",code:_e},{default:a(()=>[n(s)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios With Icon",code:xe},{default:a(()=>[n(e)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes With Icon",code:Ce},{default:a(()=>[n(_)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios With Image",code:ve},{default:a(()=>[n(U)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes With Image",code:he},{default:a(()=>[n(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ae as default};
