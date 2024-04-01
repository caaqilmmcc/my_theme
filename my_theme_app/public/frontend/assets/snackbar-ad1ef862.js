var j=Object.defineProperty;var D=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var U=(r,n,s)=>n in r?j(r,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[n]=s,y=(r,n)=>{for(var s in n||(n={}))q.call(n,s)&&U(r,s,n[s]);if(D)for(var s of D(n))L.call(n,s)&&U(r,s,n[s]);return r};import{as as M,be as H,bF as z,b1 as N,br as G,au as J,aA as W,aD as Q,bf as Y,bG as Z,av as h,bt as K,b7 as X,k as m,Y as P,aQ as aa,az as ea,p as a,bu as ta,bl as na,Z as E,o as _,c as x,w as e,Q as t,G as k,q as S,H as p,A as B,F as w,b as la,m as V}from"./index-dea2516e.js";import{m as ia,u as oa,V as F}from"./VOverlay-e4d23481.js";import{f as sa}from"./forwardRefs-bb5e4b03.js";import{_ as ra}from"./AppCardCode-570fe7fd.js";import{a as I,V as ca}from"./VRow-6d5fb2f3.js";import"./lazy-4381940c.js";import"./easing-512405f0.js";import"./transition-79a2ac22.js";import"./vue.runtime.esm-bundler-fed9b9b9.js";import"./VCard-0fcf72b4.js";import"./VAvatar-8615dc07.js";import"./VImg-9210c4df.js";import"./VDivider-3a816182.js";const f=M()({name:"VSnackbar",props:y(y(y(y(y(y({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean},H({location:"bottom"})),z()),N()),G()),J()),W(ia({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])),emits:{"update:modelValue":r=>!0},setup(r,n){let{slots:s}=n;const l=Q(r,"modelValue"),{locationStyles:i}=Y(r),{positionClasses:u}=Z(r),{scopeId:v}=oa(),{themeClasses:c}=h(r),{colorClasses:d,colorStyles:g,variantClasses:C}=K(r),{roundedClasses:o}=X(r),b=m();P(l,$),P(()=>r.timeout,$),aa(()=>{l.value&&$()});let O=-1;function $(){window.clearTimeout(O);const T=Number(r.timeout);!l.value||T===-1||(O=window.setTimeout(()=>{l.value=!1},T))}function R(){window.clearTimeout(O)}return ea(()=>{const[T]=F.filterProps(r);return a(F,E({ref:b,class:["v-snackbar",{"v-snackbar--active":l.value,"v-snackbar--multi-line":r.multiLine&&!r.vertical,"v-snackbar--vertical":r.vertical},u.value,r.class],style:r.style},T,{modelValue:l.value,"onUpdate:modelValue":A=>l.value=A,contentProps:E({class:["v-snackbar__wrapper",c.value,d.value,o.value,C.value],style:[i.value,g.value],onPointerenter:R,onPointerleave:$},T.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},v),{default:()=>[ta(!1,"v-snackbar"),s.default&&a("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[s.default()]),s.actions&&a(na,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[s.actions()])]})],activator:s.activator})}),sa({},b)}}),ba={class:"demo-space-x"},ua={__name:"DemoSnackbarTransition",setup(r){const n=m(!1),s=m(!1),l=m(!1);return(i,u)=>(_(),x("div",ba,[a(k,{onClick:u[0]||(u[0]=v=>n.value=!0)},{default:e(()=>[t(" fade snackbar ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":u[1]||(u[1]=v=>p(n)?n.value=v:null),transition:"fade-transition",location:"top start"},{default:e(()=>[t(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(k,{onClick:u[2]||(u[2]=v=>s.value=!0)},{default:e(()=>[t(" Scale snackbar ")]),_:1}),a(f,{modelValue:S(s),"onUpdate:modelValue":u[3]||(u[3]=v=>p(s)?s.value=v:null),transition:"scale-transition",location:"bottom end"},{default:e(()=>[t(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(k,{onClick:u[4]||(u[4]=v=>l.value=!0)},{default:e(()=>[t(" scroll y reverse ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":u[5]||(u[5]=v=>p(l)?l.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:e(()=>[t(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])]))}},ka={class:"demo-space-x"},Va={__name:"DemoSnackbarVariants",setup(r){const n=m(!1),s=m(!1),l=m(!1),i=m(!1),u=m(!1);return(v,c)=>(_(),x("div",ka,[a(k,{onClick:c[0]||(c[0]=d=>n.value=!0)},{default:e(()=>[t(" Default ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":c[1]||(c[1]=d=>p(n)?n.value=d:null),location:"top start"},{default:e(()=>[t(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(k,{onClick:c[2]||(c[2]=d=>s.value=!0)},{default:e(()=>[t(" tonal ")]),_:1}),a(f,{modelValue:S(s),"onUpdate:modelValue":c[3]||(c[3]=d=>p(s)?s.value=d:null),location:"top end",variant:"tonal"},{default:e(()=>[t(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(k,{onClick:c[4]||(c[4]=d=>l.value=!0)},{default:e(()=>[t(" Text ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":c[5]||(c[5]=d=>p(l)?l.value=d:null),location:"end center",variant:"text"},{default:e(()=>[t(" Pie icing biscuit soufflé liquorice topping. ")]),_:1},8,["modelValue"]),a(k,{onClick:c[6]||(c[6]=d=>i.value=!0)},{default:e(()=>[t(" Outlined ")]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":c[7]||(c[7]=d=>p(i)?i.value=d:null),location:"bottom end",variant:"outlined",color:"error"},{default:e(()=>[t(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(k,{onClick:c[8]||(c[8]=d=>u.value=!0)},{default:e(()=>[t(" Flat ")]),_:1}),a(f,{modelValue:S(u),"onUpdate:modelValue":c[9]||(c[9]=d=>p(u)?u.value=d:null),location:"bottom start",variant:"flat",color:"error"},{default:e(()=>[t(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])]))}},da={class:"demo-space-x"},ma={__name:"DemoSnackbarPosition",setup(r){const n=m(!1),s=m(!1),l=m(!1),i=m(!1),u=m(!1),v=m(!1),c=m(!1),d=m(!1),g=m(!1);return(C,o)=>(_(),x("div",da,[a(k,{icon:"",variant:"text",onClick:o[0]||(o[0]=b=>s.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-up"})]),_:1}),a(f,{modelValue:S(s),"onUpdate:modelValue":o[1]||(o[1]=b=>p(s)?s.value=b:null),location:"top"},{default:e(()=>[t(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(k,{icon:"",variant:"text",onClick:o[2]||(o[2]=b=>l.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-up-right"})]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":o[3]||(o[3]=b=>p(l)?l.value=b:null),location:"top end"},{default:e(()=>[t(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(k,{icon:"",variant:"text",onClick:o[4]||(o[4]=b=>c.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-right"})]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":o[5]||(o[5]=b=>p(c)?c.value=b:null),location:"end center"},{default:e(()=>[t(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(k,{icon:"",variant:"text",onClick:o[6]||(o[6]=b=>i.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-down-right"})]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":o[7]||(o[7]=b=>p(i)?i.value=b:null),location:"bottom end"},{default:e(()=>[t(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(k,{icon:"",variant:"text",onClick:o[8]||(o[8]=b=>u.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-down"})]),_:1}),a(f,{modelValue:S(u),"onUpdate:modelValue":o[9]||(o[9]=b=>p(u)?u.value=b:null)},{default:e(()=>[t(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(k,{icon:"",variant:"text",onClick:o[10]||(o[10]=b=>v.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-down-left"})]),_:1}),a(f,{modelValue:S(v),"onUpdate:modelValue":o[11]||(o[11]=b=>p(v)?v.value=b:null),location:"bottom start"},{default:e(()=>[t(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(k,{icon:"",variant:"text",onClick:o[12]||(o[12]=b=>d.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-left"})]),_:1}),a(f,{modelValue:S(d),"onUpdate:modelValue":o[13]||(o[13]=b=>p(d)?d.value=b:null),location:"start center"},{default:e(()=>[t(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(k,{icon:"",variant:"text",onClick:o[14]||(o[14]=b=>n.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-up-left"})]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":o[15]||(o[15]=b=>p(n)?n.value=b:null),location:"top start"},{default:e(()=>[t(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(k,{icon:"",variant:"text",onClick:o[16]||(o[16]=b=>g.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrows-minimize"})]),_:1}),a(f,{modelValue:S(g),"onUpdate:modelValue":o[17]||(o[17]=b=>p(g)?g.value=b:null),location:"center"},{default:e(()=>[t(" I'm a center snackbar. ")]),_:1},8,["modelValue"])]))}},Sa={__name:"DemoSnackbarVertical",setup(r){const n=m(!1);return(s,l)=>(_(),x(w,null,[a(k,{onClick:l[0]||(l[0]=i=>n.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":l[3]||(l[3]=i=>p(n)?n.value=i:null),vertical:""},{actions:e(()=>[a(k,{color:"success",onClick:l[1]||(l[1]=i=>n.value=!1)},{default:e(()=>[t(" Undo ")]),_:1}),a(k,{color:"error",onClick:l[2]||(l[2]=i=>n.value=!1)},{default:e(()=>[t(" Close ")]),_:1})]),default:e(()=>[t(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64))}},pa={__name:"DemoSnackbarTimeout",setup(r){const n=m(!1);return(s,l)=>(_(),x(w,null,[a(k,{onClick:l[0]||(l[0]=i=>n.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":l[1]||(l[1]=i=>p(n)?n.value=i:null),timeout:2e3},{default:e(()=>[t(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64))}},fa={__name:"DemoSnackbarMultiLine",setup(r){const n=m(!1);return(s,l)=>(_(),x(w,null,[a(k,{onClick:l[0]||(l[0]=i=>n.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":l[2]||(l[2]=i=>p(n)?n.value=i:null),"multi-line":""},{actions:e(()=>[a(k,{color:"error",onClick:l[1]||(l[1]=i=>n.value=!1)},{default:e(()=>[t(" Close ")]),_:1})]),default:e(()=>[t(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64))}},va={__name:"DemoSnackbarWithAction",setup(r){const n=m(!1);return(s,l)=>(_(),x(w,null,[a(k,{onClick:l[0]||(l[0]=i=>n.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":l[2]||(l[2]=i=>p(n)?n.value=i:null)},{actions:e(()=>[a(k,{color:"error",onClick:l[1]||(l[1]=i=>n.value=!1)},{default:e(()=>[t(" Close ")]),_:1})]),default:e(()=>[t(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64))}},Ba={__name:"DemoSnackbarBasic",setup(r){const n=m(!1);return(s,l)=>(_(),x(w,null,[a(k,{onClick:l[0]||(l[0]=i=>n.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":l[1]||(l[1]=i=>p(n)?n.value=i:null)},{default:e(()=>[t(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64))}},_a={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},ga={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ia={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},xa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},ya={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},Ta={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},wa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ca={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},$a=V("p",null,[t("The "),V("code",null,"v-snackbar"),t(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),Oa=V("p",null,[t("Use "),V("code",null,"actions"),t(" slot to add action button. A "),V("code",null,"v-snackbar"),t(" in its simplest form displays a temporary and closable notification to the user.")],-1),Da=V("p",null,[t("The "),V("code",null,"multi-line"),t(" property extends the height of the "),V("code",null,"v-snackbar"),t(" to give you a little more room for content.")],-1),Ua=V("p",null,[t("The "),V("code",null,"timeout"),t(" property lets you customize the delay before the "),V("code",null,"v-snackbar"),t(" is hidden.")],-1),Pa=V("p",null,[t("The "),V("code",null,"vertical"),t(" property allows you to stack the content of your "),V("code",null,"v-snackbar"),t(".")],-1),Ea=V("p",null,[t("Use "),V("code",null,"location"),t(" prop to change the position of snackbar.")],-1),Fa=V("p",null,[t("Apply different styles to the snackbar using props such as "),V("code",null,"shaped"),t(", "),V("code",null,"rounded"),t(", "),V("code",null,"color"),t(", "),V("code",null,"text"),t(", "),V("code",null,"outlined"),t(", "),V("code",null,"tile"),t(" and more.")],-1),Ra=V("p",null,"Use transition prop to sets the component transition.",-1),ha={__name:"snackbar",setup(r){return(n,s)=>{const l=Ba,i=ra,u=va,v=fa,c=pa,d=Sa,g=ma,C=Va,o=ua;return _(),la(ca,{class:"match-height"},{default:e(()=>[a(I,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Basic",code:_a},{default:e(()=>[$a,a(l)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"With Action",code:Ca},{default:e(()=>[Oa,a(u)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Multi Line",code:ga},{default:e(()=>[Da,a(v)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Timeout",code:xa},{default:e(()=>[Ua,a(c)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Vertical",code:wa},{default:e(()=>[Pa,a(d)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Position",code:Ia},{default:e(()=>[Ea,a(g)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Variants",code:Ta},{default:e(()=>[Fa,a(C)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Transition",code:ya},{default:e(()=>[Ra,a(o)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ha as default};
