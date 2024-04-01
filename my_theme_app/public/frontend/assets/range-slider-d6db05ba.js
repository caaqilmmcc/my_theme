var ae=Object.defineProperty,te=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var E=(e,l,a)=>l in e?ae(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,C=(e,l)=>{for(var a in l||(l={}))oe.call(l,a)&&E(e,a,l[a]);if(q)for(var a of q(l))ue.call(l,a)&&E(e,a,l[a]);return e},z=(e,l)=>te(e,se(l));import{m as ne,u as re,a as ie,V as de,b as H,g as Q}from"./VSliderTrack-70447c7d.js";import{c as ce,m as me,u as pe,a as Z,V as ve}from"./VInput-47172c35.js";import{as as be,k as V,aD as fe,D as G,az as Ve,p as s,F as _e,Z as he,o as R,b as k,q as w,H as x,w as i,A as ge,m as d,Q as p}from"./index-dea2516e.js";import{_ as Se}from"./AppCardCode-570fe7fd.js";import{a as $,V as Re}from"./VRow-6d5fb2f3.js";import"./transition-79a2ac22.js";import"./vue.runtime.esm-bundler-fed9b9b9.js";import"./VCard-0fcf72b4.js";import"./VAvatar-8615dc07.js";import"./VImg-9210c4df.js";import"./VDivider-3a816182.js";const D=be()({name:"VRangeSlider",props:z(C(C(C({},ce()),me()),ne()),{strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}}),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,l){let{slots:a,emit:u}=l;const t=V(),n=V(),g=V();function j(c){if(!t.value||!n.value)return;const v=Q(c,t.value.$el,e.direction),b=Q(c,n.value.$el,e.direction),r=Math.abs(v),m=Math.abs(b);return r<m||r===m&&v<0?t.value.$el:n.value.$el}const P=re(e),o=fe(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(v=>P.roundValue(v)):[0,0]),{activeThumbRef:f,hasLabels:J,max:L,min:I,mousePressed:K,onSliderMousedown:X,onSliderTouchstart:ee,position:A,trackContainerRef:le}=ie({props:e,steps:P,onSliderStart:()=>{u("start",o.value)},onSliderEnd:c=>{var r;let{value:v}=c;const b=f.value===((r=t.value)==null?void 0:r.$el)?[v,o.value[1]]:[o.value[0],v];o.value=b,u("end",b)},onSliderMove:c=>{var m,_,h,y;let{value:v}=c;const[b,r]=o.value;!e.strict&&b===r&&b!==I.value&&(f.value=v>b?(m=n.value)==null?void 0:m.$el:(_=t.value)==null?void 0:_.$el,(h=f.value)==null||h.focus()),f.value===((y=t.value)==null?void 0:y.$el)?o.value=[Math.min(v,r),r]:o.value=[b,Math.max(b,v)]},getActiveThumb:j}),{isFocused:M,focus:N,blur:O}=pe(e),W=G(()=>A(o.value[0])),Y=G(()=>A(o.value[1]));return Ve(()=>{const[c,v]=Z.filterProps(e),b=!!(e.label||a.label||a.prepend);return s(Z,he({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!a["tick-label"]||J.value,"v-slider--focused":M.value,"v-slider--pressed":K.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:g},c,{focused:M.value}),z(C({},a),{prepend:b?r=>{var m,_,h;return s(_e,null,[((_=(m=a.label)==null?void 0:m.call(a,r))!=null?_:e.label)?s(ve,{class:"v-slider__label",text:e.label},null):void 0,(h=a.prepend)==null?void 0:h.call(a,r)])}:void 0,default:r=>{var h,y;let{id:m,messagesId:_}=r;return s("div",{class:"v-slider__container",onMousedown:X,onTouchstartPassive:ee},[s("input",{id:`${m.value}_start`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:o.value[0]},null),s("input",{id:`${m.value}_stop`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:o.value[1]},null),s(de,{ref:le,start:W.value,stop:Y.value},{"tick-label":a["tick-label"]}),s(H,{ref:t,"aria-describedby":_.value,focused:M&&f.value===((h=t.value)==null?void 0:h.$el),modelValue:o.value[0],"onUpdate:modelValue":S=>o.value=[S,o.value[1]],onFocus:S=>{var T,F,U,B;N(),f.value=(T=t.value)==null?void 0:T.$el,o.value[0]===o.value[1]&&o.value[1]===I.value&&S.relatedTarget!==((F=n.value)==null?void 0:F.$el)&&((U=t.value)==null||U.$el.blur(),(B=n.value)==null||B.$el.focus())},onBlur:()=>{O(),f.value=void 0},min:I.value,max:o.value[1],position:W.value},{"thumb-label":a["thumb-label"]}),s(H,{ref:n,"aria-describedby":_.value,focused:M&&f.value===((y=n.value)==null?void 0:y.$el),modelValue:o.value[1],"onUpdate:modelValue":S=>o.value=[o.value[0],S],onFocus:S=>{var T,F,U,B;N(),f.value=(T=n.value)==null?void 0:T.$el,o.value[0]===o.value[1]&&o.value[0]===L.value&&S.relatedTarget!==((F=t.value)==null?void 0:F.$el)&&((U=n.value)==null||U.$el.blur(),(B=t.value)==null||B.$el.focus())},onBlur:()=>{O(),f.value=void 0},min:o.value[0],max:L.value,position:Y.value},{"thumb-label":a["thumb-label"]})])}}))}),{}}}),ke={__name:"DemoRangeSliderVertical",setup(e){const l=V([20,40]);return(a,u)=>(R(),k(D,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null),direction:"vertical"},null,8,["modelValue"]))}},$e={__name:"DemoRangeSliderThumbLabel",setup(e){const l=["Winter","Spring","Summer","Fall"],a=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],u=V([1,2]);return(t,n)=>(R(),k(D,{modelValue:w(u),"onUpdate:modelValue":n[0]||(n[0]=g=>x(u)?u.value=g:null),tick:l,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:g})=>[s(ge,{icon:a[g]},null,8,["icon"])]),_:1},8,["modelValue"]))}},we={__name:"DemoRangeSliderStep",setup(e){const l=V([20,40]);return(a,u)=>(R(),k(D,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null),step:"10"},null,8,["modelValue"]))}},xe={__name:"DemoRangeSliderColor",setup(e){const l=V([10,60]);return(a,u)=>(R(),k(D,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null),color:"success","track-color":"warning"},null,8,["modelValue"]))}},De={__name:"DemoRangeSliderDisabled",setup(e){const l=V([30,60]);return(a,u)=>(R(),k(D,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},ye={__name:"DemoRangeSliderBasic",setup(e){const l=V([10,60]);return(a,u)=>(R(),k(D,{modelValue:w(l),"onUpdate:modelValue":u[0]||(u[0]=t=>x(l)?l.value=t:null)},null,8,["modelValue"]))}},Te={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Fe={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`},Ue={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},Be={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},Ce={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Pe={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Me=d("p",null,[p("The "),d("code",null,"v-slider"),p(" component is a better visualization of the number input.")],-1),je=d("p",null,[p("You cannot interact with "),d("code",null,"disabled"),p(" sliders.")],-1),Ie=d("p",null,[p("Use "),d("code",null,"color"),p(" prop to the sets the slider color. "),d("code",null,"track-color"),p(" prop to sets the color of slider's unfilled track.")],-1),ze=d("p",null,[d("code",null,"v-range-slider"),p(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Le=d("p",null,[p(" Using the "),d("code",null,"tick-labels"),p(" prop along with the "),d("code",null,"thumb-label"),p(" slot, you can create a very customized solution. ")],-1),Ae=d("p",null,[p("You can use the "),d("code",null,"vertical"),p(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Xe={__name:"range-slider",setup(e){return(l,a)=>{const u=ye,t=Se,n=De,g=xe,j=we,P=$e,o=ke;return R(),k(Re,null,{default:i(()=>[s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Basic",code:Te},{default:i(()=>[Me,s(u)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Disabled",code:Ue},{default:i(()=>[je,s(n)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Color",code:Fe},{default:i(()=>[Ie,s(g)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Step",code:Be},{default:i(()=>[ze,s(j)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Thumb label",code:Ce},{default:i(()=>[Le,s(P)]),_:1},8,["code"])]),_:1}),s($,{cols:"12",md:"6"},{default:i(()=>[s(t,{title:"Vertical",code:Pe},{default:i(()=>[Ae,s(o)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Xe as default};
