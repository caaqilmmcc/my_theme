import{k as f,o as c,b as g,w as n,p as e,A as D,Z as U,q as r,H as u,W as v,c as V,m as l,y as S,F as R,a as j,Q as s}from"./index-3bb1be67.js";import{V as i}from"./VRating-7ebbdf80.js";import{V as k}from"./VSlider-1ae4e1f9.js";import{_ as F}from"./AppCardCode-42fac92a.js";import{a as p,V as I}from"./VRow-51cf7d9e.js";import"./VSliderTrack-c078d7d4.js";import"./VInput-4b070ba9.js";import"./transition-a6bd692a.js";import"./vue.runtime.esm-bundler-abeb18d8.js";import"./VCard-21e67de5.js";import"./VAvatar-e8c12b97.js";import"./VImg-4f16a21c.js";import"./VDivider-a0af681e.js";const B={__name:"DemoRatingItemSlot",setup(m){const t=f(4.5);return(d,a)=>(c(),g(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null)},{item:n(o=>[e(D,U(o,{size:25,color:o.isFilled?"success":"secondary",class:"me-3",icon:o.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},T={__name:"DemoRatingIncremented",setup(m){const t=f(4.5);return(d,a)=>(c(),g(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null),"half-increments":"",hover:""},null,8,["modelValue"]))}},L={};function H(m,t){return c(),g(i,{hover:""})}const M=v(L,[["render",H]]),N={};function A(m,t){return c(),g(i,{readonly:"","model-value":4})}const P=v(N,[["render",A]]),q={};function E(m,t){return c(),g(i,{clearable:""})}const Q=v(q,[["render",E]]),W=l("div",{class:"text-caption"}," Custom length ",-1),Z={class:"font-weight-medium mb-0"},G={__name:"DemoRatingLength",setup(m){const t=f(5),d=f(2);return(a,o)=>(c(),V(R,null,[W,e(k,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=_=>u(t)?t.value=_:null),min:1,max:7},null,8,["modelValue"]),e(i,{modelValue:r(d),"onUpdate:modelValue":o[1]||(o[1]=_=>u(d)?d.value=_:null),length:r(t)},null,8,["modelValue","length"]),l("p",Z," Model: "+S(r(d)),1)],64))}},J={class:"d-flex flex-column"},K={__name:"DemoRatingSize",setup(m){const t=f(4);return(d,a)=>(c(),V("div",J,[e(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null),size:"x-small"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[1]||(a[1]=o=>u(t)?t.value=o:null),size:"small"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[2]||(a[2]=o=>u(t)?t.value=o:null)},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[3]||(a[3]=o=>u(t)?t.value=o:null),size:"large"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[4]||(a[4]=o=>u(t)?t.value=o:null),size:"x-large"},null,8,["modelValue"])]))}},O={class:"d-flex flex-column"},X={__name:"DemoRatingColors",setup(m){const t=f(4),d=["primary","secondary","success","info","warning","error"];return(a,o)=>(c(),V("div",O,[(c(),V(R,null,j(d,_=>e(i,{key:_,modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=h=>u(t)?t.value=h:null),color:_},null,8,["modelValue","color"])),64))]))}},Y={};function ee(m,t){return c(),g(i,{density:"compact"})}const te=v(Y,[["render",ee]]),oe={};function ne(m,t){return c(),g(i)}const le=v(oe,[["render",ne]]),ae={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},se={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},ie={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},re={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},ce={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},me={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},de={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`},pe={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},ue={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},_e={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},ge=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component provides a simple interface for gathering user feedback.")],-1),fe=l("p",null,[s("Control the space occupied by "),l("code",null,"v-rating"),s(" items using the "),l("code",null,"density"),s(" prop.")],-1),ve=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component can be colored as you want, you can set both selected and not selected colors.")],-1),Ve=l("p",null,[s("Utilize the same sizing classes available in "),l("code",null,"v-icon"),s(" or provide your own with the "),l("code",null,"size"),s(" prop.")],-1),he=l("p",null,[s("Change the number of items by modifying the the "),l("code",null,"length"),s(" prop.")],-1),Re=l("p",null,[s("Use "),l("code",null,"clearable"),s(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),xe=l("p",null,[s("For ratings that are not meant to be changed you can use "),l("code",null,"readonly"),s(" prop.")],-1),ye=l("p",null,"Provides visual feedback when hovering over icons",-1),be=l("p",null,[s("The "),l("code",null,"half-increments"),s(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),ze=l("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),He={__name:"rating",setup(m){return(t,d)=>{const a=le,o=F,_=te,h=X,x=K,y=G,b=Q,z=P,w=M,C=T,$=B;return c(),g(I,{class:"match-height"},{default:n(()=>[e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Basic",code:ae},{default:n(()=>[ge,e(a)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Density",code:re},{default:n(()=>[fe,e(_)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Colors",code:ie},{default:n(()=>[ve,e(h)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Size",code:_e},{default:n(()=>[Ve,e(x)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Length",code:pe},{default:n(()=>[he,e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Clearable",code:se},{default:n(()=>[Re,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Readonly",code:ue},{default:n(()=>[xe,e(z)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Hover",code:ce},{default:n(()=>[ye,e(w)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Incremented",code:me},{default:n(()=>[be,e(C)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Item slot",code:de},{default:n(()=>[ze,e($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{He as default};
