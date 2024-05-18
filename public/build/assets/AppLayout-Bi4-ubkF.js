import{o as s,e as r,a as e,Q as P,d as $,L as A,n as p,f as h,t as y,i as x,q as F,H as E,k as M,r as g,M as C,u as m,l as L,I as T,b as d,w as a,J as O,c as b,j,g as c,F as k,h as B,Z as V,O as z}from"./app-B8Jh2uG-.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as H,M as R}from"./MyFooter-DthjCnI1.js";const q={},J={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Q=e("path",{style:{fill:"#fec84b"},d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"},null,-1),U=[Q];function Z(u,n){return s(),r("svg",J,U)}const G=I(q,[["render",Z]]),K={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},W={class:"flex items-center justify-between flex-wrap"},X={class:"w-0 flex-1 flex items-center min-w-0"},Y={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ee=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),te=[ee],se={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},oe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),re=[oe],ae={class:"ms-3 font-medium text-sm text-white truncate"},ne={class:"shrink-0 sm:ms-3"},ie=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),le=[ie],de={__name:"Banner",setup(u){const n=P(),o=$(!0),l=$("success"),t=$("");return A(async()=>{var v,i;l.value=((v=n.props.jetstream.flash)==null?void 0:v.bannerStyle)||"success",t.value=((i=n.props.jetstream.flash)==null?void 0:i.banner)||"",o.value=!0}),(v,i)=>(s(),r("div",null,[o.value&&t.value?(s(),r("div",{key:0,class:p({"bg-indigo-500":l.value=="success","bg-red-700":l.value=="danger"})},[e("div",K,[e("div",W,[e("div",X,[e("span",{class:p(["flex p-2 rounded-lg",{"bg-indigo-600":l.value=="success","bg-red-600":l.value=="danger"}])},[l.value=="success"?(s(),r("svg",Y,te)):h("",!0),l.value=="danger"?(s(),r("svg",se,re)):h("",!0)],2),e("p",ae,y(t.value),1)]),e("div",ne,[e("button",{type:"button",class:p(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":l.value=="success","hover:bg-red-600 focus:bg-red-600":l.value=="danger"}]),"aria-label":"Dismiss",onClick:i[0]||(i[0]=x(f=>o.value=!1,["prevent"]))},le,2)])])])],2)):h("",!0)]))}},ue={class:"relative"},D={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(u){const n=u;let o=$(!1);const l=i=>{o.value&&i.key==="Escape"&&(o.value=!1)};F(()=>document.addEventListener("keydown",l)),E(()=>document.removeEventListener("keydown",l));const t=M(()=>({48:"w-48"})[n.width.toString()]),v=M(()=>n.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":n.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(i,f)=>(s(),r("div",ue,[e("div",{onClick:f[0]||(f[0]=S=>C(o)?o.value=!m(o):o=!m(o))},[g(i.$slots,"trigger")]),L(e("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=S=>C(o)?o.value=!1:o=!1)},null,512),[[T,m(o)]]),d(O,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[L(e("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,v.value]]),style:{display:"none"},onClick:f[2]||(f[2]=S=>C(o)?o.value=!1:o=!1)},[e("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",u.contentClasses])},[g(i.$slots,"content")],2)],2),[[T,m(o)]])]),_:3})]))}},ce={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},he=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(u){return(n,o)=>(s(),r("div",null,[u.as=="button"?(s(),r("button",ce,[g(n.$slots,"default")])):u.as=="a"?(s(),r("a",{key:1,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[g(n.$slots,"default")],8,he)):(s(),b(m(j),{key:2,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[g(n.$slots,"default")]),_:3},8,["href"]))]))}},N={__name:"NavLink",props:{href:String,active:Boolean},setup(u){const n=u,o=M(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 dark:text-gray-100 dark:hover:text-gray-800 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 dark:text-gray-100 dark:hover:text-gray-800 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(l,t)=>(s(),b(m(j),{href:u.href,class:p(o.value)},{default:a(()=>[g(l.$slots,"default")]),_:3},8,["href","class"]))}},_={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(u){const n=u,o=M(()=>n.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(l,t)=>(s(),r("div",null,[u.as=="button"?(s(),r("button",{key:0,class:p([o.value,"w-full text-start"])},[g(l.$slots,"default")],2)):(s(),b(m(j),{key:1,href:u.href,class:p(o.value)},{default:a(()=>[g(l.$slots,"default")]),_:3},8,["href","class"]))]))}},pe={"data-theme":""},ge={class:"min-h-screen"},fe={class:"border-b-4 border-gray-600 dark:border-gray-100 invert"},me={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ve={class:"flex justify-between h-16"},_e={class:"flex"},be={class:"shrink-0 flex items-center"},ye={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},we={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},ke=e("div",{class:"space-x-8 sm:-my-px sm:ms-10 sm:flex"},null,-1),xe={class:"hidden sm:flex sm:items-center sm:ms-6"},$e={class:"ms-3 relative"},Me={class:"inline-flex rounded-md"},je={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Ce=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),Se={class:"w-60"},Le=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Te=e("div",{class:"border-t border-gray-200"},null,-1),Be=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ze=["onSubmit"],De={class:"flex items-center"},Ne={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Pe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ae=[Pe],Fe={class:"ms-3 relative"},Ee={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Oe=["src","alt"],Ve={key:1,class:"inline-flex rounded-md"},Ie={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},He=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Re=e("div",{class:"block px-4 py-2 text-xs text-gray-400","data-theme":""}," Manage Account ",-1),qe=e("div",{class:"border-t border-gray-200"},null,-1),Je={class:"-me-2 flex items-center sm:hidden"},Qe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ue={class:"pt-2 pb-3 space-y-1"},Ze={class:"pt-4 pb-1 border-t border-gray-200"},Ge={class:"flex items-center px-4"},Ke={key:0,class:"shrink-0 me-3"},We=["src","alt"],Xe={class:"font-medium text-base text-gray-800"},Ye={class:"font-medium text-sm text-gray-500"},et={class:"mt-3 space-y-1"},tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),ot=e("div",{class:"border-t border-gray-200"},null,-1),rt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),at=["onSubmit"],nt={class:"flex items-center"},it={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},lt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),dt=[lt],ut={key:0,class:"bg-white dark:bg-zinc-600 shadow"},ct={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ft={__name:"AppLayout",props:{title:String},setup(u){const n=$(!1),o=t=>{z.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},l=()=>{z.post(route("logout"))};return(t,v)=>(s(),r("div",pe,[d(m(V),{title:u.title},null,8,["title"]),d(de),e("div",ge,[e("nav",fe,[e("div",me,[e("div",ve,[e("div",_e,[e("div",be,[d(m(j),{href:t.route("dashboard")},{default:a(()=>[d(G,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ye,[d(N,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[c(" Dashboard ")]),_:1},8,["href","active"])]),e("div",we,[d(N,{class:"dark:filter-none",href:t.route("blogpage"),active:t.route().current("blogpage")},{default:a(()=>[c(" Blogpage ")]),_:1},8,["href","active"])]),ke,d(H)]),e("div",xe,[e("div",$e,[t.$page.props.jetstream.hasTeamFeatures?(s(),b(D,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",Me,[e("button",je,[c(y(t.$page.props.auth.user.current_team.name)+" ",1),Ce])])]),content:a(()=>[e("div",Se,[Le,d(w,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:a(()=>[c(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),b(w,{key:0,href:t.route("teams.create")},{default:a(()=>[c(" Create New Team ")]),_:1},8,["href"])):h("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(k,{key:1},[Te,Be,(s(!0),r(k,null,B(t.$page.props.auth.user.all_teams,i=>(s(),r("form",{key:i.id,onSubmit:x(f=>o(i),["prevent"])},[d(w,{as:"button"},{default:a(()=>[e("div",De,[i.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Ne,Ae)):h("",!0),e("div",null,y(i.name),1)])]),_:2},1024)],40,ze))),128))],64)):h("",!0)])]),_:1})):h("",!0)]),e("div",Fe,[d(D,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",Ee,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Oe)])):(s(),r("span",Ve,[e("button",Ie,[c(y(t.$page.props.auth.user.name)+" ",1),He])]))]),content:a(()=>[Re,d(w,{href:t.route("profile.show")},{default:a(()=>[c(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),b(w,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[c(" API Tokens ")]),_:1},8,["href"])):h("",!0),qe,e("form",{onSubmit:x(l,["prevent"])},[d(w,{as:"button"},{default:a(()=>[c(" Log Out ")]),_:1})],32)]),_:1})])]),e("div",Je,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:v[0]||(v[0]=i=>n.value=!n.value)},[(s(),r("svg",Qe,[e("path",{class:p({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:p({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:p([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",Ue,[d(_,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[c(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ze,[e("div",Ge,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",Ke,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,We)])):h("",!0),e("div",null,[e("div",Xe,y(t.$page.props.auth.user.name),1),e("div",Ye,y(t.$page.props.auth.user.email),1)])]),e("div",et,[d(_,{href:t.route("blogpage"),active:t.route().current("blogpage")},{default:a(()=>[c(" Blogpage ")]),_:1},8,["href","active"]),d(_,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[c(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),b(_,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[c(" API Tokens ")]),_:1},8,["href","active"])):h("",!0),e("form",{method:"POST",onSubmit:x(l,["prevent"])},[d(_,{as:"button"},{default:a(()=>[c(" Log Out ")]),_:1})],32),t.$page.props.jetstream.hasTeamFeatures?(s(),r(k,{key:1},[tt,st,d(_,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:a(()=>[c(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),b(_,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:a(()=>[c(" Create New Team ")]),_:1},8,["href","active"])):h("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(k,{key:1},[ot,rt,(s(!0),r(k,null,B(t.$page.props.auth.user.all_teams,i=>(s(),r("form",{key:i.id,onSubmit:x(f=>o(i),["prevent"])},[d(_,{as:"button"},{default:a(()=>[e("div",nt,[i.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",it,dt)):h("",!0),e("div",null,y(i.name),1)])]),_:2},1024)],40,at))),128))],64)):h("",!0)],64)):h("",!0)])])],2)]),t.$slots.header?(s(),r("header",ut,[e("div",ct,[g(t.$slots,"header")])])):h("",!0),e("main",null,[g(t.$slots,"default")]),d(R)])]))}};export{ft as _};
