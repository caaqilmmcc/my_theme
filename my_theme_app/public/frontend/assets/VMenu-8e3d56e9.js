var w=Object.defineProperty;var v=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(e,o,a)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,V=(e,o)=>{for(var a in o||(o={}))O.call(o,a)&&f(e,a,o[a]);if(v)for(var a of v(o))x.call(o,a)&&f(e,a,o[a]);return e};import{f as A}from"./forwardRefs-bb5e4b03.js";import{as as k,aA as I,aD as N,aC as R,D as p,k as g,aN as T,Y as U,Z as P,az as $,p as y,bl as j,aL as z}from"./index-dea2516e.js";import{m as L,u as Y,a as C,V as D}from"./VOverlay-e4d23481.js";import{V as Z}from"./dialog-transition-155a81b2.js";const H=k()({name:"VMenu",props:V({id:String},I(L({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Z}}),["absolute"])),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const s=N(e,"modelValue"),{scopeId:S}=Y(),h=R(),u=p(()=>e.id||`v-menu-${h}`),c=g(),t=T(C,null),r=g(0);z(C,{register(){++r.value},unregister(){--r.value},closeParents(){setTimeout(()=>{r.value||(s.value=!1,t==null||t.closeParents())},40)}}),U(s,i=>{i?t==null||t.register():t==null||t.unregister()});function M(){t==null||t.closeParents()}const b=p(()=>P({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":u.value},e.activatorProps));return $(()=>{const[i]=D.filterProps(e);return y(D,P({ref:c,class:["v-menu",e.class],style:e.style},i,{modelValue:s.value,"onUpdate:modelValue":n=>s.value=n,absolute:!0,activatorProps:b.value,"onClick:outside":M},S),{activator:a.activator,default:function(){for(var n=arguments.length,d=new Array(n),l=0;l<n;l++)d[l]=arguments[l];return y(j,{root:!0},{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,...d)]}})}})}),A({id:u,ΨopenChildren:r},c)}});export{H as V};