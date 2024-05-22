import{o as d,e as c,a as e,p as I,d as h,q as E,F as y,h as M,b as g,w as v,f as z,s as C,t as b,i as B,y as T,z as $,c as L,l as f,B as x,g as w,C as V}from"./app-DWAKEeZ0.js";import{_ as D}from"./AppLayout-Bg7c2WNq.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./Modal-Bpbzuh7s.js";import"./MyFooter-wdaLOBn4.js";const U={},j={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},O=e("path",{style:{fill:"#fec84b"},d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"},null,-1),P=[O];function F(l,n){return d(),c("svg",j,P)}const q=k(U,[["render",F]]),A=l=>(T("data-v-b432cf3d"),l=l(),$(),l),H={"data-theme":""},R=A(()=>e("thead",null,[e("tr",null,[e("th",null,"Title"),e("th",null,"Lead Text"),e("th",null,"Image")])],-1)),G=["onClick"],K=["src"],W={class:"modal-content","data-theme":""},X=A(()=>e("i",{class:"fa-solid fa-circle-xmark p-3 invert"},null,-1)),J=[X],Q=["src"],Y=I({__name:"ImageTable",setup(l){const n=h(null),m=h([]),t=i=>{n.value="/storage/"+i},r=()=>{n.value=null},p=async()=>{try{const i=await C.get("/blogs");m.value=i.data}catch(i){console.error("Error fetching blogs:",i)}};return E(()=>{p()}),(i,_)=>(d(),c(y,null,[e("table",H,[R,e("tbody",null,[(d(!0),c(y,null,M(m.value,o=>(d(),c("tr",{key:o.id},[e("td",null,b(o.title),1),e("td",null,b(o.leadtext),1),e("td",null,[e("a",{href:"#",onClick:B(a=>t(o.image),["prevent"])},[e("img",{src:"/storage/"+o.image,alt:"Blog Image",style:{width:"100px",height:"auto"}},null,8,K)],8,G)])]))),128))])]),g(N,{show:n.value!==null,maxWidth:"2xl",closeable:!0,onClose:r},{default:v(()=>[e("div",W,[e("span",{class:"close",onClick:r},J),n.value!==null?(d(),c("img",{key:0,src:n.value,alt:"Preview Image"},null,8,Q)):z("",!0)])]),_:1},8,["show"])],64))}}),Z=k(Y,[["__scopeId","data-v-b432cf3d"]]),s=l=>(T("data-v-d52695fa"),l=l(),$(),l),ee=s(()=>e("h2",{class:"bricolage-grotesque-mainsetup-lead font-semibold text-xl leading-tight"}," Dashboard NEUE KAMPFIS GABRIELA ",-1)),te={class:"lg:py-12 sm:pt-0","data-theme":""},se={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},oe={class:"overflow-hidden shadow-xl sm:rounded-lg"},ae={class:"p-6 lg:p-8 dark:bg-white bg-zinc-600 border-b border-gray-200"},le={class:"flex md:justify-start justify-center items-center",href:"/"},ne=s(()=>e("h1",{class:"bricolage-grotesque-mainsetup-lead ps-4 text-base font-medium"}," Welcome to your Dashoboard Command Center",-1)),ie={class:"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8"},de=s(()=>e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",class:"w-6 h-6 stroke-gray-400"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})]),e("h2",{class:"ms-3 text-xl font-semibold"},[e("a",{href:"https://laravel.com/docs",class:"cupcake"},"Create New Blogs")])],-1)),re=s(()=>e("button",{class:"btn",popovertarget:"my-popover",style:{}}," Open Popover ",-1)),ce=s(()=>e("div",{class:"modal-box invert",id:"my-popover",popover:""},[e("p",null,[w("I am a popover with more information. Hit "),e("kbd",null,"esc"),w(" or click away to close me.")])],-1)),me={class:"mt-4 text-gray-500 text-sm leading-relaxed"},ue=s(()=>e("label",{"data-theme":"",for:"title",class:"block text-sm font-medium"},"Title",-1)),ge=s(()=>e("label",{"data-theme":"",for:"leadtext",class:"block text-sm font-medium"},"Leadtext",-1)),he=s(()=>e("label",{"data-theme":"",for:"message",class:"block text-sm font-medium"},"Text",-1)),pe=s(()=>e("label",{"data-theme":"",for:"image",class:"block text-sm font-medium"},"Image",-1)),_e=s(()=>e("div",null,[e("button",{type:"submit",class:"btn"}," Submit ")],-1)),fe={key:0,class:"fixed inset-0 overflow-y-auto"},xe={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},ve=s(()=>e("div",{class:"fixed inset-0 transition-opacity","aria-hidden":"true"},[e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"})],-1)),be=s(()=>e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1)),we={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},ke={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},ye={class:"sm:flex sm:items-start"},Ie=s(()=>e("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"},[e("svg",{class:"h-6 w-6 text-green-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1)),ze={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Ce=s(()=>e("h3",{class:"text-lg font-medium text-gray-900",id:"modal-headline"}," Success! ",-1)),Be={class:"mt-2"},Te={class:"text-sm text-gray-500"},$e=s(()=>e("div",{class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},[e("a",{href:"/blogpage",type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"}," Go to Blogpage ")],-1)),Ae=s(()=>e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",class:"w-6 h-6 stroke-gray-400"},[e("path",{"stroke-linecap":"round",d:"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"})]),e("h2",{class:"ms-3 text-xl font-semibold text-gray-900 dark:text-gray-100"},[e("a",{href:"https://laracasts.com"},"Uploaded Image Collection")])],-1)),Se={class:"mt-4 text-sm leading-relaxed"},Ee=s(()=>e("div",null,[e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",class:"w-6 h-6 stroke-gray-400"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})]),e("h2",{class:"ms-3 text-xl font-semibold"},[e("a",{href:"https://tailwindcss.com/"},"Uploaded Events / Publications ")])]),e("p",{class:"mt-4 0 text-sm leading-relaxed"}," EVENTS / PUBLICATIONS FORM ")],-1)),Me=s(()=>e("div",null,[e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",class:"w-6 h-6 stroke-gray-400"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})]),e("h2",{class:"ms-3 text-xl font-semibold"}," Uploaded Events / Publications (Chat?) ")]),e("p",{class:"mt-4 text-sm leading-relaxed"}," EVENTS / PUBLICATIONS TABLE (CHAT FORM) ")],-1)),Le=I({__name:"Dashboard",props:["authId"],setup(l){var _;const n=((_=document.head.querySelector('meta[name="csrf-token"]'))==null?void 0:_.getAttribute("content"))||"",{authId:m}=l,t=h({title:"",leadtext:"",message:"",image:null}),r=h(null),p=o=>{const a=o.target;a.files&&a.files[0]&&(t.value.image=a.files[0])},i=async()=>{try{console.log("User ID:",m);const o=new FormData;o.append("title",t.value.title),o.append("leadtext",t.value.leadtext),o.append("message",t.value.message),t.value.image&&o.append("image",t.value.image),o.append("user_id",m);const a=await C.post("/blogs",o,{headers:{"X-CSRF-TOKEN":n,"Content-Type":"multipart/form-data"}});console.log(a.data),r.value=a.data.blog,t.value.title="",t.value.leadtext="",t.value.message="",t.value.image=null}catch(o){console.error(o.response.data)}};return(o,a)=>{const S=V("Input");return d(),L(D,{title:"Dashboard"},{header:v(()=>[ee]),default:v(()=>[e("div",te,[e("div",se,[e("div",oe,[e("div",ae,[e("a",le,[g(q,{class:"block h-12 w-auto fa-beat-fade"}),ne])]),e("div",ie,[e("div",null,[de,re,ce,e("p",me,[e("form",{onSubmit:B(i,["prevent"]),enctype:"multipart/form-data",class:"formOwnOne space-y-4","data-theme":""},[e("div",null,[ue,f(e("input",{type:"text",id:"title","onUpdate:modelValue":a[0]||(a[0]=u=>t.value.title=u),class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[x,t.value.title]])]),e("div",null,[ge,f(e("input",{type:"text",id:"leadtext","onUpdate:modelValue":a[1]||(a[1]=u=>t.value.leadtext=u),class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[x,t.value.leadtext]])]),e("div",null,[he,f(e("textarea",{id:"message","onUpdate:modelValue":a[2]||(a[2]=u=>t.value.message=u),class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[x,t.value.message]])]),e("div",null,[pe,g(S,{type:"file",id:"image",accept:"image/*",onChange:p,class:"mt-1 focus:ring-indigo-500 text-zinc-100 dark:text-zinc-800 focus:border-indigo-500 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md fileInputOwn"})]),_e],32)]),r.value?(d(),c("div",fe,[e("div",xe,[ve,be,e("div",we,[e("div",ke,[e("div",ye,[Ie,e("div",ze,[Ce,e("div",Be,[e("p",Te,b(r.value),1)])])])]),$e])])])):z("",!0)]),e("div",null,[Ae,e("p",Se,[w(" IMAGE TABLE "),g(Z)])]),Ee,Me])])])])]),_:1})}}}),Oe=k(Le,[["__scopeId","data-v-d52695fa"]]);export{Oe as default};
