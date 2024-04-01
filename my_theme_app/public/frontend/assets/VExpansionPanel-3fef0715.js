var B=Object.defineProperty;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var P=(e,l,a)=>l in e?B(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,t=(e,l)=>{for(var a in l||(l={}))L.call(l,a)&&P(e,a,l[a]);if(g)for(var a of g(l))$.call(l,a)&&P(e,a,l[a]);return e};import{as as b,at as f,bY as D,aY as k,au as G,bZ as R,av as z,D as u,bc as j,ax as S,az as m,p as s,aG as N,aB as V,bp as Y,aN as E,b4 as I,K as C,bk as F,A as K,L as O,ap as Z,a$ as q,b_ as H,b1 as J,b$ as M,b5 as Q,b7 as U,aL as W}from"./index-3bb1be67.js";import{m as h,u as X}from"./lazy-be572c86.js";const v=Symbol.for("vuetify:v-expansion-panel"),ee=["default","accordion","inset","popout"],oe=b()({name:"VExpansionPanels",props:t(t(t(t({color:String,variant:{type:String,default:"default",validator:e=>ee.includes(e)},readonly:Boolean},f()),D()),k()),G()),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;R(e,v);const{themeClasses:n}=z(e),d=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return j({VExpansionPanel:{color:S(e,"color")},VExpansionPanelTitle:{readonly:S(e,"readonly")}}),m(()=>s(e.tag,{class:["v-expansion-panels",n.value,d.value,e.class],style:e.style},a)),{}}}),T=N({color:String,expandIcon:{type:V,default:"$expand"},collapseIcon:{type:V,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),ae=b()({name:"VExpansionPanelTitle",directives:{Ripple:Y},props:t(t({},f()),T()),setup(e,l){let{slots:a}=l;const n=E(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:d,backgroundColorStyles:r}=I(e,"color"),c=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return m(()=>{var p;return C(s("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value},d.value,e.class],style:[r.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[s("span",{class:"v-expansion-panel-title__overlay"},null),(p=a.default)==null?void 0:p.call(a,c.value),!e.hideActions&&s("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(c.value):s(K,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[F("ripple"),e.ripple]])}),{}}}),ne=b()({name:"VExpansionPanelText",props:t(t({},f()),h()),setup(e,l){let{slots:a}=l;const n=E(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:d,onAfterLeave:r}=X(e,n.isSelected);return m(()=>s(Z,{onAfterLeave:r},{default:()=>{var c;return[C(s("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&d.value&&s("div",{class:"v-expansion-panel-text__wrapper"},[(c=a.default)==null?void 0:c.call(a)])]),[[O,n.isSelected.value]])]}})),{}}}),ie=b()({name:"VExpansionPanel",props:t(t(t(t(t(t(t({title:String,text:String,bgColor:String},f()),q()),H()),h()),J()),k()),T()),emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const n=M(e,v),{backgroundColorClasses:d,backgroundColorStyles:r}=I(e,"bgColor"),{elevationClasses:c}=Q(e),{roundedClasses:p}=U(e),w=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),y=u(()=>n.group.items.value.reduce((i,o,x)=>(n.group.selected.value.includes(o.id)&&i.push(x),i),[])),_=u(()=>{const i=n.group.items.value.findIndex(o=>o.id===n.id);return!n.isSelected.value&&y.value.some(o=>o-i===1)}),A=u(()=>{const i=n.group.items.value.findIndex(o=>o.id===n.id);return!n.isSelected.value&&y.value.some(o=>o-i===-1)});return W(v,n),m(()=>{const i=!!(a.text||e.text),o=!!(a.title||e.title);return s(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":_.value,"v-expansion-panel--after-active":A.value,"v-expansion-panel--disabled":w.value},p.value,d.value,e.class],style:[r.value,e.style],"aria-expanded":n.isSelected.value},{default:()=>{var x;return[s("div",{class:["v-expansion-panel__shadow",...c.value]},null),o&&s(ae,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),i&&s(ne,{key:"text",eager:e.eager},{default:()=>[a.text?a.text():e.text]}),(x=a.default)==null?void 0:x.call(a)]}})}),{}}});export{oe as V,ie as a,ae as b,ne as c};