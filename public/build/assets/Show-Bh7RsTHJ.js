import{_ as p}from"./AppLayout-Bi4-ubkF.js";import c from"./DeleteUserForm-8R16LV_h.js";import l from"./LogoutOtherBrowserSessionsForm-BuwafcAg.js";import{S as s}from"./SectionBorder-D-6f18gA.js";import f from"./TwoFactorAuthenticationForm-DnDLc3d_.js";import u from"./UpdatePasswordForm-CMBfik2W.js";import d from"./UpdateProfileInformationForm-BnVlqWF9.js";import{o,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-B8Jh2uG-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MyFooter-DthjCnI1.js";import"./DialogModal-Cv7pqwUr.js";import"./SectionTitle-CoNwJSRm.js";import"./Modal-DSvcaUPl.js";import"./DangerButton-SEUqFQ9V.js";import"./TextInput-D6sEklMn.js";import"./SecondaryButton-Cg2im0S1.js";import"./ActionMessage-Pb_H6oL3.js";import"./PrimaryButton-0qnQjIKT.js";import"./InputLabel-CyvPglhq.js";import"./FormSection-B1vpeqNX.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-slate-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},x={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,y)=>(o(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",x,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};
