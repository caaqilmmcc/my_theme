import{_ as x}from"./AppTextField-b844d277.js";import{W as h,k as _,o as u,b as f,w as l,p as e,A,Z as D,Q as n,J as U,q as p,aq as S,V as q,x as j,G as N,c as B,B as L,H as g,m as t}from"./index-3bb1be67.js";import{V as W}from"./VTooltip-ad9f5ce0.js";import{a as s,V as T}from"./VRow-51cf7d9e.js";import{r as E,e as H}from"./validators-50c95554.js";import{V as z}from"./VForm-90b1c620.js";import{V as C}from"./VTextField-4c862cea.js";import{_ as Y}from"./AppCardCode-42fac92a.js";import"./VInput-4b070ba9.js";import"./transition-a6bd692a.js";import"./VOverlay-9e706984.js";import"./lazy-be572c86.js";import"./easing-512405f0.js";import"./forwardRefs-bb5e4b03.js";import"./index-61e4df1a.js";/* empty css                   */import"./VField-41dca5e8.js";import"./VImg-4f16a21c.js";import"./VCounter-2bd3570e.js";import"./vue.runtime.esm-bundler-abeb18d8.js";import"./VCard-21e67de5.js";import"./VAvatar-e8c12b97.js";import"./VDivider-a0af681e.js";const O={key:0,class:"ms-3"},G={__name:"DemoTextfieldIconSlots",setup(b){const a=_("Hey!"),o=_(!1),m=()=>{o.value=!0,a.value="Wait for it...",setTimeout(()=>{o.value=!1,a.value="You've clicked me!"},2e3)};return(i,d)=>{const c=x;return u(),f(c,{modelValue:p(a),"onUpdate:modelValue":d[0]||(d[0]=r=>g(a)?a.value=r:null),clearable:"",label:"Message",type:"text",class:"textfield-demo-icon-slot"},{prepend:l(()=>[e(W,{location:"bottom"},{activator:l(({props:r})=>[e(A,D(r,{icon:"tabler-help"}),null,16)]),default:l(()=>[n(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(U,{"leave-absolute":""},{default:l(()=>[p(o)?(u(),f(S,{key:0,color:"info",indeterminate:""})):(u(),f(p(q),{key:1,class:"text-2xl",nodes:p(j).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(N,{icon:i.$vuetify.display.smAndDown,onClick:m},{default:l(()=>[e(A,{icon:"tabler-viewfinder"}),i.$vuetify.display.mdAndUp?(u(),B("span",O,"Click me")):L("",!0)]),_:1},8,["icon"])]),_:1},8,["modelValue"])}}},J=h(G,[["__scopeId","data-v-0fb555b2"]]),Q={__name:"DemoTextfieldPasswordInput",setup(b){const a=_(!1),o=_(!0),m=_("Password"),i=_("wqfasds"),d={required:c=>!!c||"Required.",min:c=>c.length>=8||"Min 8 characters"};return(c,r)=>{const V=x;return u(),f(T,null,{default:l(()=>[e(s,{cols:"12",sm:"6"},{default:l(()=>[e(V,{modelValue:p(m),"onUpdate:modelValue":r[0]||(r[0]=v=>g(m)?m.value=v:null),"append-inner-icon":p(a)?"tabler-eye-off":"tabler-eye",rules:[d.required,d.min],type:p(a)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:appendInner":r[1]||(r[1]=v=>a.value=!p(a))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(s,{cols:"12",sm:"6"},{default:l(()=>[e(V,{modelValue:p(i),"onUpdate:modelValue":r[2]||(r[2]=v=>g(i)?i.value=v:null),"append-inner-icon":p(o)?"tabler-eye-off":"tabler-eye",rules:[d.required,d.min],type:p(o)?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters","onClick:appendInner":r[3]||(r[3]=v=>o.value=!p(o))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1})]),_:1})}}},Z={},K=t("strong",null,"icon",-1);function X(b,a){const o=x;return u(),f(o,null,{label:l(()=>[n(" What about  "),K,n(" here? "),e(A,{icon:"tabler-file-search"})]),_:1})}const ee=h(Z,[["render",X]]),le={__name:"DemoTextfieldIconEvents",setup(b){const a=_("Hey!"),o=_(!0),m=_(0),i=()=>{o.value=!o.value},d=()=>{a.value=""},c=()=>{m.value=0},r=()=>{c(),d()};return(V,v)=>{const w=x;return u(),f(w,{modelValue:p(a),"onUpdate:modelValue":v[0]||(v[0]=y=>g(a)?a.value=y:null),clearable:"",type:"text",label:"Message",color:"primary","clear-icon":"tabler-circle-x","append-icon":p(a)?V.$vuetify.locale.isRtl?"tabler-arrow-big-left-lines":"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":p(o)?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":i,"onClick:append":r,"onClick:clear":d},null,8,["modelValue","append-icon","append-inner-icon"])}}},te={__name:"DemoTextfieldValidation",setup(b){const a=_("");return(o,m)=>{const i=x;return u(),f(z,null,{default:l(()=>[e(i,{modelValue:p(a),"onUpdate:modelValue":m[0]||(m[0]=d=>g(a)?a.value=d:null),rules:[p(E),p(H)],label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}}},oe={};function ne(b,a){const o=x;return u(),f(o,{label:"Regular","single-line":""})}const ae=h(oe,[["render",ne]]),se={__name:"DemoTextfieldPrefixesAndSuffixes",setup(b){const a=_(10.05),o=_(28.02),m=_("example"),i=_("04:56");return(d,c)=>{const r=x;return u(),f(T,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(r,{modelValue:p(a),"onUpdate:modelValue":c[0]||(c[0]=V=>g(a)?a.value=V:null),label:"Amount",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(r,{modelValue:p(o),"onUpdate:modelValue":c[1]||(c[1]=V=>g(o)?o.value=V:null),label:"Weight",suffix:"lbs",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(r,{modelValue:p(m),"onUpdate:modelValue":c[2]||(c[2]=V=>g(m)?m.value=V:null),label:"Email address",suffix:"@gmail.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(r,{modelValue:p(i),"onUpdate:modelValue":c[3]||(c[3]=V=>g(i)?i.value=V:null),label:"Label Text",type:"time",suffix:"PST"},null,8,["modelValue"])]),_:1})]),_:1})}}},ie={};function re(b,a){const o=x;return u(),f(T,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Prepend","prepend-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Append","append-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Append Inner","append-inner-icon":"tabler-map-pin"})]),_:1})]),_:1})}const pe=h(ie,[["render",re]]),ce={};function de(b,a){const o=x;return u(),f(o,{color:"success",label:"First name"})}const me=h(ce,[["render",de]]),ue={};function fe(b,a){const o=x;return u(),f(o,{label:"Regular",clearable:""})}const _e=h(ue,[["render",fe]]),be={__name:"DemoTextfieldCounter",setup(b){const a=_("Preliminary report"),o=_("California is a state in the western United States"),m=[i=>i.length<=25||"Max 25 characters"];return(i,d)=>{const c=x;return u(),f(T,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(c,{modelValue:p(a),"onUpdate:modelValue":d[0]||(d[0]=r=>g(a)?a.value=r:null),rules:m,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(c,{modelValue:p(o),"onUpdate:modelValue":d[1]||(d[1]=r=>g(o)?o.value=r:null),rules:m,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}}},Ve={};function xe(b,a){const o=x;return u(),f(T,null,{default:l(()=>[e(s,null,{default:l(()=>[e(o,{label:"Disabled",disabled:""})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(o,{label:"Readonly",readonly:""})]),_:1})]),_:1})}const ge=h(Ve,[["render",xe]]),ve={};function he(b,a){return u(),f(T,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(C,{label:"Outlined"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(C,{label:"Filled",variant:"filled"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(C,{label:"Solo",variant:"solo"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(C,{label:"Plain",variant:"plain"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(C,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const Te=h(ve,[["render",he]]),Ce={};function we(b,a){const o=x;return u(),f(o,{label:"Compact",density:"compact"})}const ye=h(Ce,[["render",we]]),Ae={};function Fe(b,a){const o=x;return u(),f(o,{label:"Regular"})}const ke=h(Ae,[["render",Fe]]),Re={ts:`<template>
  <AppTextField label="Regular" />
</template>
`,js:`<template>
  <AppTextField label="Regular" />
</template>
`},Ie={ts:`<template>
  <AppTextField
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    clearable
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
  />
</template>
`},Pe={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},Ue={ts:`<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
.textfield-demo-icon-slot {
  :deep(.v-input) {
    align-content: center;

    .v-input__prepend,
    .v-input__append {
      padding-block-start: 0 !important;
    }

    .v-input__prepend {
      align-items: center;
    }

    .v-field__append-inner .v-progress-circular svg {
      block-size: 1.3em;
      inline-size: 1.3em;
    }

    .v-field__append-inner svg {
      margin-block-start: 0.1rem;
    }
  }
}
</style>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
.textfield-demo-icon-slot {
  :deep(.v-input) {
    align-content: center;

    .v-input__prepend,
    .v-input__append {
      padding-block-start: 0 !important;
    }

    .v-input__prepend {
      align-items: center;
    }

    .v-field__append-inner .v-progress-circular svg {
      block-size: 1.3em;
      inline-size: 1.3em;
    }

    .v-field__append-inner svg {
      margin-block-start: 0.1rem;
    }
  }
}
</style>
`},Se={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`},qe={ts:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`,js:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`},je={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<template>
  <AppTextField
    label="Regular"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    single-line
  />
</template>
`},Le={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},We={ts:`<script lang="ts" setup>
import { emailValidator, requiredValidator } from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`},Ee={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},He=t("p",null,"Text fields components are used for collecting user provided information.",-1),ze=t("p",null,[n("The "),t("code",null,"density"),n(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),t("code",null,"default"),n(", "),t("code",null,"comfortable"),n(", and "),t("code",null,"compact"),n(".")],-1),Ye=t("p",null,[n("Use "),t("code",null,"solo"),n(", "),t("code",null,"filled"),n(", "),t("code",null,"outlined"),n(", "),t("code",null,"plain"),n(" and "),t("code",null,"underlined"),n(" option of "),t("code",null,"variant"),n(" prop to change the look of the textfield. ")],-1),Oe=t("p",null,"Text fields can be disabled or readonly.",-1),Ge=t("p",null,[n("Use a "),t("code",null,"counter"),n(" prop to inform a user of the character limit.")],-1),Je=t("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Qe=t("p",null,[n("Use "),t("code",null,"color"),n(" prop to change the input border color.")],-1),Ze=t("p",null,[n("You can add icons to the text field with "),t("code",null,"prepend-icon"),n(", "),t("code",null,"append-icon"),n(" and "),t("code",null,"append-inner-icon"),n(" and "),t("code",null,"prepend-inner-icon"),n(" props.")],-1),Ke=t("p",null,[n("The "),t("code",null,"prefix"),n(" and "),t("code",null,"suffix"),n(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Xe=t("p",null,[t("code",null,"single-line"),n(" text fields do not float their label on focus or with data.")],-1),el=t("p",null,[n("Vuetify includes simple validation through the "),t("code",null,"rules"),n(" prop.")],-1),ll=t("p",null,[t("code",null,"click:prepend"),n(", "),t("code",null,"click:append"),n(", "),t("code",null,"click:append-inner"),n(", and "),t("code",null,"click:clear"),n(" will be emitted when you click on the respective icon")],-1),tl=t("p",null,[n("Text field label can be defined in "),t("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1),ol=t("p",null,[n("Using the HTML input "),t("code",null,"type"),n(" password can be used with an appended icon and callback to control the visibility.")],-1),nl=t("p",null,[n("Instead of using "),t("code",null,"prepend"),n("/"),t("code",null,"append"),n("/"),t("code",null,"append-inner"),n(" icons you can use slots to extend input's functionality.")],-1),kl={__name:"textfield",setup(b){return(a,o)=>{const m=ke,i=Y,d=ye,c=Te,r=ge,V=be,v=_e,w=me,y=pe,F=se,k=ae,R=te,I=le,$=ee,M=Q,P=J;return u(),f(T,{class:"match-height"},{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Basic",code:Re},{default:l(()=>[He,e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Density",code:Pe},{default:l(()=>[ze,e(d)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{title:"Variant",code:Ee},{default:l(()=>[Ye,e(c)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"State",code:Le},{default:l(()=>[Oe,e(r)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Counter",code:$e},{default:l(()=>[Ge,e(V)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Clearable",code:Ie},{default:l(()=>[Je,e(v)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Custom Colors",code:Me},{default:l(()=>[Qe,e(w)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Icons",code:Se},{default:l(()=>[Ze,e(y)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Prefixes and suffixes",code:Ne},{default:l(()=>[Ke,e(F)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Single line",code:Be},{default:l(()=>[Xe,e(k)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Validation",code:We},{default:l(()=>[el,e(R)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Icon events",code:De},{default:l(()=>[ll,e(I)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Label Slot",code:qe},{default:l(()=>[tl,e($)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Password input",code:je},{default:l(()=>[ol,e(M)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Icon slots",code:Ue},{default:l(()=>[nl,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{kl as default};
