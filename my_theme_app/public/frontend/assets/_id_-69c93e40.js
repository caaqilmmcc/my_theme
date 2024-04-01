import{_ as C}from"./AppSelect-e043b34a.js";import{_ as B,a as N}from"./InvoiceSendInvoiceDrawer-e5a4349d.js";import{_ as T}from"./InvoiceEditable-98096f4a.js";import{u as U}from"./useInvoiceStore-be7f7a3f.js";import{k as s,o as D,b as P,w as a,q as l,p as e,B as I,G as u,Q as i,m as n,H as r,ag as O}from"./index-dea2516e.js";import{a as S,V as $}from"./VRow-6d5fb2f3.js";import{V as h,d as j}from"./VCard-0fcf72b4.js";import{V}from"./VInput-47172c35.js";import{V as b}from"./VSwitch-b2ce529f.js";import"./VSelect-9e79a62e.js";import"./VTextField-692b1cc3.js";/* empty css                   */import"./VField-2d5a3932.js";import"./easing-512405f0.js";import"./VImg-9210c4df.js";import"./transition-79a2ac22.js";import"./forwardRefs-bb5e4b03.js";import"./VCounter-a2d2f8e4.js";import"./VList-c07f77ee.js";import"./ssrBoot-99a0dc1f.js";import"./VAvatar-8615dc07.js";import"./VDivider-3a816182.js";import"./dialog-transition-155a81b2.js";import"./VMenu-8e3d56e9.js";import"./VOverlay-e4d23481.js";import"./lazy-4381940c.js";import"./VCheckboxBtn-5583829a.js";import"./VSelectionControl-41a81448.js";import"./VChip-f02b8801.js";import"./AppTextarea-91dc8d12.js";import"./VTextarea-02a87a7a.js";import"./AppDateTimePicker-1acf6c69.js";import"./AppTextField-583fab88.js";import"./AppDrawerHeaderSection-e0f563b7.js";import"./VSpacer-dc8648fe.js";import"./VForm-2604706f.js";import"./VNavigationDrawer-68157516.js";import"./VTooltip-002dfbc6.js";const M={class:"d-flex gap-2"},R={class:"w-50"},q={class:"w-50"},L={class:"d-flex align-center justify-space-between mb-2"},G={class:"d-flex align-center justify-space-between mb-2"},H={class:"d-flex align-center justify-space-between"},Be={__name:"[id]",setup(Q){const g=U(),w=O(),c=s();g.fetchInvoice(Number(w.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,qty:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=s(!1),p=s(!1),f=s(!0),v=s(!1),y=s(!1),_=s("Bank Account"),A=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>{const x=C;return D(),P($,null,{default:a(()=>{var k;return[(k=l(c))!=null&&k.invoice?(D(),P(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(T,{data:l(c)},null,8,["data"])]),_:1})):I("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(h,{class:"mb-8"},{default:a(()=>[e(j,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),n("div",M,[n("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(w).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),n("div",q,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e(x,{modelValue:l(_),"onUpdate:modelValue":t[2]||(t[2]=o=>r(_)?_.value=o:null),items:A,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",L,[e(V,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),n("div",null,[e(b,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),n("div",G,[e(V,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),n("div",null,[e(b,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),n("div",H,[e(V,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),n("div",null,[e(b,{id:"payment-stub",modelValue:l(y),"onUpdate:modelValue":t[5]||(t[5]=o=>r(y)?y.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(B,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(N,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1})}}};export{Be as default};