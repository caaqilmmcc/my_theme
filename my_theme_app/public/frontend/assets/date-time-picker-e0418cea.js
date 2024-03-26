import{_ as d}from"./AppDateTimePicker-abd70ab6.js";import{k as u,o as r,b as c,q as m,H as _,w as n,p as l}from"./index-3d65e1d5.js";import{_ as b}from"./AppCardCode-ac648f3b.js";import{a as s,V as A}from"./VRow-3ae3623c.js";import"./VField-ced76ed7.js";import"./VInput-520171d3.js";import"./transition-a7abc3a3.js";import"./easing-512405f0.js";import"./vue.runtime.esm-bundler-a1c123d0.js";import"./VCard-832e4254.js";import"./VAvatar-bf736ddf.js";import"./VImg-cfa7fa77.js";import"./VDivider-43e3ef44.js";const F={__name:"DemoDateTimePickerInline",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Inline",config:{inline:!0}},null,8,["modelValue"])}}},V={__name:"DemoDateTimePickerDisabledRange",setup(p){const e=new Date,i=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=u("");return(o,D)=>{const f=d;return r(),c(f,{modelValue:m(t),"onUpdate:modelValue":D[0]||(D[0]=g=>_(t)?t.value=g:null),label:"Disabled Range",config:{dateFormat:"Y-m-d",disable:[{from:`${m(a)}-${m(i)}-20`,to:`${m(a)}-${m(i)}-25`}]}},null,8,["modelValue","config"])}}},v={__name:"DemoDateTimePickerHumanFriendly",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Human Friendly",config:{dateFormat:"F j, Y"}},null,8,["modelValue"])}}},Y={__name:"DemoDateTimePickerRange",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Range",config:{mode:"range"}},null,8,["modelValue"])}}},$={__name:"DemoDateTimePickerMultipleDates",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Multiple Dates",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}},R={__name:"DemoDateTimePickerDateAndTime",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Date & TIme",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])}}},w={__name:"DemoDateTimePickerTimePicker",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Time picker",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])}}},H={__name:"DemoDateTimePickerBasic",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Default"},null,8,["modelValue"])}}},M={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>
`},j={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},I={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},y={ts:`<script setup lang="ts">
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},C={ts:`<script setup lang="ts">
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},h={ts:`<script setup lang="ts">
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},X={__name:"date-time-picker",setup(p){return(e,i)=>{const a=H,t=b,o=w,D=R,f=$,g=Y,T=v,k=V,P=F;return r(),c(A,null,{default:n(()=>[l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Basic",code:M},{default:n(()=>[l(a)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Time Picker",code:h},{default:n(()=>[l(o)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Date and Time",code:j},{default:n(()=>[l(D)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Multiple Dates",code:y},{default:n(()=>[l(f)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Range",code:C},{default:n(()=>[l(g)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Human Friendly",code:I},{default:n(()=>[l(T)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Disabled Range",code:x},{default:n(()=>[l(k)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Inline",code:U},{default:n(()=>[l(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{X as default};
