import{a as r,V as T}from"./VTabs-3e137c12.js";import{k,o as i,c as p,m as s,p as e,w as a,A as W,Q as l,q as c,H as b,F as V,a as _,y as w,Y as z,b as f,G as P,W as O}from"./index-6e9ab8b8.js";import{d as C,V as I}from"./VCard-c05bc65f.js";import{V as y,a as v}from"./VWindowItem-6a817fff.js";import{_ as U}from"./AppCardCode-b292dd52.js";import{a as x,V as N}from"./VRow-c1d5def7.js";import"./VSlideGroup-ede99e6d.js";import"./easing-512405f0.js";import"./VAvatar-4c62c8c1.js";import"./VImg-5111e2cf.js";import"./transition-19a281fe.js";import"./lazy-60318aa3.js";import"./ssrBoot-12880581.js";import"./vue.runtime.esm-bundler-1614b3c2.js";import"./VDivider-72b477de.js";const E={class:"d-flex gap-6"},M=s("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),G=s("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. ",-1),H=s("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),R=s("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),L={__name:"DemoTabsVerticalPill",setup(g){const t=k(0);return(u,d)=>(i(),p("div",E,[s("div",null,[e(T,{modelValue:c(t),"onUpdate:modelValue":d[0]||(d[0]=n=>b(t)?t.value=n:null),direction:"vertical",class:"v-tabs-pill"},{default:a(()=>[e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-user"}),l(" Option 1 ")]),_:1}),e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-lock"}),l(" Option 2 ")]),_:1}),e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-access-point"}),l(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(I,null,{default:a(()=>[e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":d[1]||(d[1]=n=>b(t)?t.value=n:null)},{default:a(()=>[e(v,null,{default:a(()=>[M,G]),_:1}),e(v,null,{default:a(()=>[H]),_:1}),e(v,null,{default:a(()=>[R]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}},Q={__name:"DemoTabsBasicPill",setup(g){const t=k(0),u="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(d,n)=>(i(),p(V,null,[e(T,{modelValue:c(t),"onUpdate:modelValue":n[0]||(n[0]=o=>b(t)?t.value=o:null),class:"v-tabs-pill"},{default:a(()=>[e(r,null,{default:a(()=>[l("Tab One")]),_:1}),e(r,null,{default:a(()=>[l("Tab Two")]),_:1}),e(r,null,{default:a(()=>[l("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(I,{class:"mt-5"},{default:a(()=>[e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":n[1]||(n[1]=o=>b(t)?t.value=o:null)},{default:a(()=>[(i(),p(V,null,_(3,o=>e(v,{key:o},{default:a(()=>[l(w(u))]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},Y={__name:"DemoTabsDynamic",setup(g){const t=k(3),u=k(0);return z(t,d=>{u.value=d-1}),(d,n)=>(i(),f(I,null,{default:a(()=>[e(T,{modelValue:c(u),"onUpdate:modelValue":n[0]||(n[0]=o=>b(u)?u.value=o:null)},{default:a(()=>[(i(!0),p(V,null,_(c(t),o=>(i(),f(r,{key:o,value:o},{default:a(()=>[l(" Tab "+w(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(C,{class:"text-center d-flex items-center gap-y-2 flex-wrap"},{default:a(()=>[e(P,{disabled:!c(t),class:"me-4",variant:c(t)?void 0:"tonal",onClick:n[1]||(n[1]=o=>t.value--)},{default:a(()=>[l(" Remove Tab ")]),_:1},8,["disabled","variant"]),e(P,{onClick:n[2]||(n[2]=o=>t.value++)},{default:a(()=>[l(" Add Tab ")]),_:1})]),_:1})]),_:1}))}},J={class:"d-flex justify-center gap-4 mt-3"},K={__name:"DemoTabsProgrammaticNavigation",setup(g){const t=k(0),u=["Appetizers","Entrees","Deserts","Cocktails"],d="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",n=u.length,o=()=>{t.value!==1&&(t.value-=1)},m=()=>{t.value!==n&&(t.value+=1)};return(S,q)=>(i(),f(I,null,{default:a(()=>[e(T,{modelValue:c(t),"onUpdate:modelValue":q[0]||(q[0]=h=>b(t)?t.value=h:null),grow:""},{default:a(()=>[(i(!0),p(V,null,_(u.length,h=>(i(),f(r,{key:h,value:h},{default:a(()=>[l(w(u[h-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":q[1]||(q[1]=h=>b(t)?t.value=h:null)},{default:a(()=>[(i(!0),p(V,null,_(u.length,h=>(i(),f(v,{key:h,value:h},{default:a(()=>[l(w(d))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),s("div",J,[e(P,{disabled:c(t)===1,variant:c(t)===1?"tonal":void 0,onClick:o},{default:a(()=>[l(" Previous ")]),_:1},8,["disabled","variant"]),e(P,{disabled:c(t)===c(n),variant:c(t)===c(n)?"tonal":void 0,onClick:m},{default:a(()=>[l(" Next ")]),_:1},8,["disabled","variant"])])]),_:1})]),_:1}))}},X={__name:"DemoTabsGrow",setup(g){const t=k("Appetizers"),u=["Appetizers","Entrees","Deserts","Cocktails"],d="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.";return(n,o)=>(i(),f(I,null,{default:a(()=>[e(T,{modelValue:c(t),"onUpdate:modelValue":o[0]||(o[0]=m=>b(t)?t.value=m:null),grow:""},{default:a(()=>[(i(),p(V,null,_(u,m=>e(r,{key:m,value:m},{default:a(()=>[l(w(m),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":o[1]||(o[1]=m=>b(t)?t.value=m:null)},{default:a(()=>[(i(),p(V,null,_(u,m=>e(v,{key:m,value:m},{default:a(()=>[l(w(d))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},Z={__name:"DemoTabsFixed",setup(g){const t=k("Appetizers"),u=["Fixed Tab 1","Fixed Tab 2","Fixed Tab 3","Fixed Tab 4"],d="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.";return(n,o)=>(i(),f(I,null,{default:a(()=>[e(T,{modelValue:c(t),"onUpdate:modelValue":o[0]||(o[0]=m=>b(t)?t.value=m:null),"fixed-tabs":""},{default:a(()=>[(i(),p(V,null,_(u,m=>e(r,{key:m,value:m},{default:a(()=>[l(w(m),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":o[1]||(o[1]=m=>b(t)?t.value=m:null)},{default:a(()=>[(i(),p(V,null,_(u,m=>e(v,{key:m,value:m},{default:a(()=>[l(w(d))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ee={__name:"DemoTabsCustomIcons",setup(g){const t=k(0),u="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.";return(d,n)=>(i(),f(I,null,{default:a(()=>[e(T,{"next-icon":"tabler-arrow-right","prev-icon":"tabler-arrow-left"},{default:a(()=>[(i(),p(V,null,_(10,o=>e(r,{key:o},{default:a(()=>[l(" Item "+w(o),1)]),_:2},1024)),64))]),_:1}),e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":n[0]||(n[0]=o=>b(t)?t.value=o:null)},{default:a(()=>[(i(),p(V,null,_(10,o=>e(v,{key:o,value:o},{default:a(()=>[l(w(u))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ae={__name:"DemoTabsPagination",setup(g){const t=k(0),u="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.";return(d,n)=>(i(),f(I,null,{default:a(()=>[e(T,{modelValue:c(t),"onUpdate:modelValue":n[0]||(n[0]=o=>b(t)?t.value=o:null)},{default:a(()=>[(i(),p(V,null,_(10,o=>e(r,{key:o,value:o},{default:a(()=>[l(" Item "+w(o),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":n[1]||(n[1]=o=>b(t)?t.value=o:null)},{default:a(()=>[(i(),p(V,null,_(10,o=>e(v,{key:o,value:o},{default:a(()=>[l(w(u))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},te={};function le(g,t){return i(),f(I,null,{default:a(()=>[e(C,{class:"d-flex flex-column gap-4"},{default:a(()=>[s("div",null,[e(T,null,{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})]),s("div",null,[e(T,{"align-tabs":"center"},{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})]),s("div",null,[e(T,{"align-tabs":"end"},{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})])]),_:1})]),_:1})}const oe=O(te,[["render",le]]),ne={class:"d-flex"},se=s("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),re=s("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget. ",-1),ie=s("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero. ",-1),ce=s("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper. ",-1),ue={__name:"DemoTabsVertical",setup(g){const t=k(0);return(u,d)=>(i(),f(I,null,{default:a(()=>[s("div",ne,[s("div",null,[e(T,{modelValue:c(t),"onUpdate:modelValue":d[0]||(d[0]=n=>b(t)?t.value=n:null),direction:"vertical"},{default:a(()=>[e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-user"}),l(" Option 1 ")]),_:1}),e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-lock"}),l(" Option 2 ")]),_:1}),e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-access-point"}),l(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":d[1]||(d[1]=n=>b(t)?t.value=n:null),class:"ms-3"},{default:a(()=>[e(v,null,{default:a(()=>[se,re]),_:1}),e(v,null,{default:a(()=>[ie]),_:1}),e(v,null,{default:a(()=>[ce]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1}))}},de=s("span",null,"Recent",-1),me=s("span",null,"Favorites",-1),be=s("span",null,"Nearby",-1),pe={__name:"DemoTabsStacked",setup(g){const t=k("tab-1"),u="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.";return(d,n)=>(i(),f(I,null,{default:a(()=>[e(T,{modelValue:c(t),"onUpdate:modelValue":n[0]||(n[0]=o=>b(t)?t.value=o:null),grow:"",stacked:""},{default:a(()=>[e(r,{value:"tab-1"},{default:a(()=>[e(W,{icon:"tabler-phone",class:"mb-2"}),de]),_:1}),e(r,{value:"tab-2"},{default:a(()=>[e(W,{icon:"tabler-heart",class:"mb-2"}),me]),_:1}),e(r,{value:"tab-3"},{default:a(()=>[e(W,{icon:"tabler-user",class:"mb-2"}),be]),_:1})]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":n[1]||(n[1]=o=>b(t)?t.value=o:null)},{default:a(()=>[(i(),p(V,null,_(3,o=>e(v,{key:o,value:`tab-${o}`},{default:a(()=>[l(w(u))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},Ve={__name:"DemoTabsBasic",setup(g){const t=k(0),u="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(d,n)=>(i(),f(I,null,{default:a(()=>[e(T,{modelValue:c(t),"onUpdate:modelValue":n[0]||(n[0]=o=>b(t)?t.value=o:null)},{default:a(()=>[e(r,null,{default:a(()=>[l("Tab One")]),_:1}),e(r,null,{default:a(()=>[l("Tab Two")]),_:1}),e(r,null,{default:a(()=>[l("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:c(t),"onUpdate:modelValue":n[1]||(n[1]=o=>b(t)?t.value=o:null)},{default:a(()=>[(i(),p(V,null,_(3,o=>e(v,{key:o},{default:a(()=>[l(w(u))]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},Te={ts:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`},fe={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ve={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},_e={ts:`<script setup lang="ts">
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},we={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},ge={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Fixed Tab 1',
  'Fixed Tab 2',
  'Fixed Tab 3',
  'Fixed Tab 4',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},he={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},xe={ts:`<script setup lang="ts">
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
        :value="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
        :value="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ke={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          :variant="currentTab === 1 ? 'tonal' : undefined"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          :variant="currentTab === totalTabs ? 'tonal' : undefined"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          :variant="currentTab === 1 ? 'tonal' : undefined"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          :variant="currentTab === totalTabs ? 'tonal' : undefined"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`},Ce={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab value="tab-1">
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab value="tab-2">
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab value="tab-3">
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab value="tab-1">
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab value="tab-2">
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab value="tab-3">
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ie={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`},ye={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`},We=s("p",null,[l("The "),s("code",null,"v-tabs"),l(" component is used for hiding content behind a selectable item.")],-1),qe=s("p",null,[l("Using "),s("code",null,"stacked"),l(" prop you can have buttons that use both icons and text.")],-1),Pe=s("p",null,[l("The "),s("code",null,"vertical"),l(" prop allows for "),s("code",null,"v-tab"),l(" components to stack vertically.")],-1),Se=s("p",null,[l("Use "),s("code",null,"align-tabs"),l(" prop to change the tabs alignment.")],-1),De=s("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Fe=s("p",null,[s("code",null,"prev-icon"),l(" and "),s("code",null,"next-icon"),l(" props can be used for applying custom pagination icons.")],-1),je=s("p",null,[l("The "),s("code",null,"fixed-tabs"),l(" prop forces "),s("code",null,"v-tab"),l(" to take up all available space up to the maximum width (300px).")],-1),Be=s("p",null,[l("The "),s("code",null,"grow"),l(" prop will make the tab items take up all available space with no limit.")],-1),$e=s("p",null,[l("Tabs can be dynamically added and removed. This allows you to update to any number and the "),s("code",null,"v-tabs"),l(" component will react.")],-1),Ae=s("p",null,[l("Use our custom class "),s("code",null,".v-tabs-pill"),l(" along with "),s("code",null,"v-tabs"),l(" component to style pill tabs.")],-1),ze=s("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),ea={__name:"tabs",setup(g){return(t,u)=>{const d=Ve,n=U,o=pe,m=ue,S=oe,q=ae,h=ee,D=Z,F=X,j=K,B=Y,$=Q,A=L;return i(),f(N,{class:"match-height"},{default:a(()=>[e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Basic",variant:"outlined",code:fe},{default:a(()=>[We,e(d)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Stacked",variant:"outlined",code:Ce},{default:a(()=>[qe,e(o)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Vertical",variant:"outlined",code:Ie},{default:a(()=>[Pe,e(m)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Alignment",variant:"outlined",code:Te},{default:a(()=>[Se,e(S)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Pagination",variant:"outlined",code:xe},{default:a(()=>[De,e(q)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Custom Icons",variant:"outlined",code:_e},{default:a(()=>[Fe,e(h)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Fixed",variant:"outlined",code:ge},{default:a(()=>[je,e(D)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Grow",variant:"outlined",code:he},{default:a(()=>[Be,e(F)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Programmatic Navigation",variant:"outlined",code:ke},{default:a(()=>[e(j)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Dynamic",variant:"outlined",code:we},{default:a(()=>[$e,e(B)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Basic Pill",variant:"outlined",code:ve},{default:a(()=>[Ae,e($)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Vertical Pill",variant:"outlined",code:ye},{default:a(()=>[ze,e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ea as default};
