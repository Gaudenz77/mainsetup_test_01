import{T as m,d,o as c,e as u,b as a,w as r,F as p,u as e,a as o,n as f,g as _,i as w,Z as g}from"./app-CPgmlzS5.js";import{A as b}from"./AuthenticationCard-BqrCq-c7.js";import{_ as h}from"./AuthenticationCardLogo-Dv0MRdQN.js";import{_ as x,a as v}from"./TextInput-BBeF8P2V.js";import{_ as y}from"./InputLabel-BiPFUeR2.js";import{_ as V}from"./PrimaryButton-6gJuYB1s.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C=o("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(k){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(A,i)=>(c(),u(p,null,[a(e(g),{title:"Secure Area"}),a(b,null,{logo:r(()=>[a(h)]),default:r(()=>[C,o("form",{onSubmit:w(n,["prevent"])},[o("div",null,[a(y,{for:"password",value:"Password"}),a(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(v,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",$,[a(V,{class:f(["ms-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[_(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{j as default};
