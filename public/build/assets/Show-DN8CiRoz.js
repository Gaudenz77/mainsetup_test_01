import{_ as c}from"./AppLayout-B14eDap7.js";import p from"./DeleteUserForm-CUDiq6d2.js";import l from"./LogoutOtherBrowserSessionsForm-Cflfit4i.js";import{S as s}from"./SectionBorder-BLrFZ8Z1.js";import f from"./TwoFactorAuthenticationForm-CYm3kFK6.js";import u from"./UpdatePasswordForm-C30hhqT2.js";import d from"./UpdateProfileInformationForm-Cjs_qXJD.js";import{o,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-C6YAwWgc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-CACitYVQ.js";import"./SectionTitle-D5_RhCpN.js";import"./DangerButton-Cbr-35Yh.js";import"./TextInput-CpUWXUEM.js";import"./SecondaryButton-DG1QYgTp.js";import"./ActionMessage-CDD7eAFv.js";import"./PrimaryButton-DLLCDqeb.js";import"./InputLabel-DSQc7AqI.js";import"./FormSection-DxT4qpkD.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-slate-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},x={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,y)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",x,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};