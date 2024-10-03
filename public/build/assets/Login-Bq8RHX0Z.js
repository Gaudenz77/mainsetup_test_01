import{T as b,o as n,e as d,b as t,w as m,F as w,u as s,t as x,f as u,a as o,c as y,g as c,n as h,i as k,Z as V,j as v}from"./app-CjfQt-Oh.js";import{A as $}from"./AuthenticationCard-DDCzqYo7.js";import{_ as B}from"./AuthenticationCardLogo-Ch1EPdbV.js";import{_ as C}from"./Checkbox-D9kbIu4P.js";import{_ as f,a as g}from"./TextInput-BITKxv7w.js";import{_ as p}from"./InputLabel-w759aocy.js";import{_ as F}from"./PrimaryButton-DGbpRv0y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},q={class:"mt-4"},L={class:"block mt-4"},P={class:"flex items-center"},R=o("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1),S={class:"flex items-center justify-end mt-4"},Z={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=b({email:"",password:"",remember:!1}),_=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,a)=>(n(),d(w,null,[t(s(V),{title:"Log in"}),t($,null,{logo:m(()=>[t(B)]),default:m(()=>[l.status?(n(),d("div",N,x(l.status),1)):u("",!0),o("form",{onSubmit:k(_,["prevent"])},[o("div",null,[t(p,{for:"email",value:"Email"}),t(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).email=r),type:"email",class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full text-slate-100 dark:text-slate-20 bg-slate-800",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",q,[t(p,{for:"password",value:"Password"}),t(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).password=r),type:"password",class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full text-slate-100 dark:text-slate-20 bg-slate-800",style:{"letter-spacing":".3rem"},required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),o("div",L,[o("label",P,[t(C,{checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),o("div",S,[l.canResetPassword?(n(),y(s(v),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),t(F,{class:h(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{Z as default};
