import{W as _,o as u,c as g,p as e,ao as s,k as f,q as v,H as h,w as a,m as r,y as b,b as y,aQ as k,aP as B,Y as $,Q as o}from"./index-dea2516e.js";import{_ as M}from"./AppCardCode-570fe7fd.js";import{a as p,V as x}from"./VRow-6d5fb2f3.js";import"./vue.runtime.esm-bundler-fed9b9b9.js";import"./VCard-0fcf72b4.js";import"./VAvatar-8615dc07.js";import"./VImg-9210c4df.js";import"./transition-79a2ac22.js";import"./VDivider-3a816182.js";const I={},D={class:"demo-space-y"};function U(m,l){return u(),g("div",D,[e(s,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(s,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(s,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const T=_(I,[["render",U]]),j={class:"demo-space-y"},R={__name:"DemoProgressLinearSlots",setup(m){const l=f(20),c=f(33),d=f(78);return(n,i)=>(u(),g("div",j,[e(s,{modelValue:v(d),"onUpdate:modelValue":i[0]||(i[0]=t=>h(d)?d.value=t:null),color:"primary",height:"8"},null,8,["modelValue"]),e(s,{modelValue:v(l),"onUpdate:modelValue":i[1]||(i[1]=t=>h(l)?l.value=t:null),color:"primary",height:"20"},{default:a(({value:t})=>[r("strong",null,b(Math.ceil(t))+"%",1)]),_:1},8,["modelValue"]),e(s,{modelValue:v(c),"onUpdate:modelValue":i[2]||(i[2]=t=>h(c)?c.value=t:null),height:"20",color:"primary"},{default:a(()=>[r("strong",null,b(Math.ceil(v(c)))+"%",1)]),_:1},8,["modelValue"])]))}},C={},S={class:"demo-space-y"};function N(m,l){return u(),g("div",S,[e(s,{"model-value":"78",height:"8",color:"primary",rounded:!1}),e(s,{"model-value":"20",color:"primary",height:"20",rounded:!1}),e(s,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const Y=_(C,[["render",N]]),Q={};function q(m,l){return u(),y(s,{color:"primary",indeterminate:"",reverse:""})}const A=_(Q,[["render",q]]),E={};function H(m,l){return u(),y(s,{indeterminate:"",color:"primary"})}const W=_(E,[["render",H]]),z={class:"demo-space-y"},F={__name:"DemoProgressLinearBuffering",setup(m){const l=f(10),c=f(20),d=f(),n=()=>{clearInterval(d.value),d.value=setInterval(()=>{l.value+=Math.random()*(15-5)+5,c.value+=Math.random()*(15-5)+6},2e3)};return k(n),B(()=>{clearInterval(d.value)}),$(l,()=>{if(l.value<100)return!1;l.value=0,c.value=10,n()}),(i,t)=>(u(),g("div",z,[e(s,{modelValue:v(l),"onUpdate:modelValue":t[0]||(t[0]=V=>h(l)?l.value=V:null),color:"primary",height:"8","buffer-value":v(c)},null,8,["modelValue","buffer-value"])]))}},G={},J={class:"demo-space-y"};function K(m,l){return u(),g("div",J,[e(s,{"model-value":"15","bg-color":"primary",color:"primary"}),e(s,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(s,{"model-value":"45","bg-color":"success",color:"success"})])}const O=_(G,[["render",K]]),X={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},Z={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},ee={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},re={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},oe={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},le={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`},ae={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},se=r("p",null,[o("Use the props "),r("code",null,"color"),o(" and "),r("code",null,"background-color"),o(" to set colors.")],-1),te=r("p",null,[o("The primary value is controlled by "),r("code",null,"v-model"),o(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),o(" prop.")],-1),ne=r("p",null,[o("for continuously animating progress bar,use prop "),r("code",null,"indeterminate"),o(". This indicates continuous process. ")],-1),ce=r("p",null,[o("Use prop "),r("code",null,"reverse"),o(" to animate continuously in reverse direction. The component also has RTL support.")],-1),de=r("p",null,[o(" The "),r("code",null," rounded "),o("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),r("code",null,"rounded"),o(" prop true. You can disable it by using "),r("code",null,":rounded='false'"),o(". ")],-1),ie=r("p",null,[o("The v-progress-linear component will be responsive to user input when using "),r("code",null,"v-model"),o(". You can use the default slot or bind a local model to display inside of the progress.")],-1),ue=r("p",null,[o(" The "),r("code",null,"striped"),o(" prop is used to apply striped background.")],-1),be={__name:"progress-linear",setup(m){return(l,c)=>{const d=O,n=M,i=F,t=W,V=A,L=Y,P=R,w=T;return u(),y(x,{class:"match-height"},{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Color",code:Z},{default:a(()=>[se,e(d)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Buffering",code:X},{default:a(()=>[te,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Indeterminate",code:ee},{default:a(()=>[ne,e(t)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Reversed",code:re},{default:a(()=>[ce,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Rounded",code:oe},{default:a(()=>[de,e(L)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Slots",code:le},{default:a(()=>[ie,e(P)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Striped",code:ae},{default:a(()=>[ue,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{be as default};
