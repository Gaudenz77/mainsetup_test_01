import{d as i,G as p,q as x,H as b,k as g,o as _,e as k,a,b as d,w as m,l as u,I as f,J as y,n as B,r as C,f as E}from"./app-B0v8P25L.js";const S={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},z=a("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),M=[z],V={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:v}){const e=t,w=v,o=i(),l=i(e.show);p(()=>e.show,()=>{var s;e.show?(document.body.style.overflow="hidden",l.value=!0,(s=o.value)==null||s.showModal()):(document.body.style.overflow=null,setTimeout(()=>{var n;(n=o.value)==null||n.close(),l.value=!1},200))});const c=()=>{e.closeable&&w("close")},r=s=>{s.key==="Escape"&&e.show&&c()};x(()=>document.addEventListener("keydown",r)),b(()=>{document.removeEventListener("keydown",r),document.body.style.overflow=null});const h=g(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[e.maxWidth]);return(s,n)=>(_(),k("dialog",{class:"z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",ref_key:"dialog",ref:o},[a("div",S,[d(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:m(()=>[u(a("div",{class:"fixed inset-0 transform transition-all",onClick:c},M,512),[[f,t.show]])]),_:1}),d(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:m(()=>[u(a("div",{class:B(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",h.value])},[l.value?C(s.$slots,"default",{key:0}):E("",!0)],2),[[f,t.show]])]),_:3})])],512))}};export{V as _};