import{p as le,k as ue,Q as ce,o as O,e as A,b as G,u as b,a as S,c as K,w as P,g as M,F as J,f as X,t as Y,q as de,Z as fe,j as D}from"./app-CaVqn7C3.js";var he=String.prototype.replace,me=/%20/g,_={RFC1738:"RFC1738",RFC3986:"RFC3986"},Q={default:_.RFC3986,formatters:{RFC1738:function(s){return he.call(s,me,"+")},RFC3986:function(s){return String(s)}},RFC1738:_.RFC1738,RFC3986:_.RFC3986},ge=Q,B=Object.prototype.hasOwnProperty,k=Array.isArray,w=function(){for(var s=[],e=0;e<256;++e)s.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return s}(),pe=function(e){for(;e.length>1;){var r=e.pop(),t=r.obj[r.prop];if(k(t)){for(var i=[],a=0;a<t.length;++a)typeof t[a]<"u"&&i.push(t[a]);r.obj[r.prop]=i}}},te=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},i=0;i<e.length;++i)typeof e[i]<"u"&&(t[i]=e[i]);return t},ve=function s(e,r,t){if(!r)return e;if(typeof r!="object"){if(k(e))e.push(r);else if(e&&typeof e=="object")(t&&(t.plainObjects||t.allowPrototypes)||!B.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var i=e;return k(e)&&!k(r)&&(i=te(e,t)),k(e)&&k(r)?(r.forEach(function(a,n){if(B.call(e,n)){var l=e[n];l&&typeof l=="object"&&a&&typeof a=="object"?e[n]=s(l,a,t):e.push(a)}else e[n]=a}),e):Object.keys(r).reduce(function(a,n){var l=r[n];return B.call(a,n)?a[n]=s(a[n],l,t):a[n]=l,a},i)},ye=function(e,r){return Object.keys(r).reduce(function(t,i){return t[i]=r[i],t},e)},we=function(s,e,r){var t=s.replace(/\+/g," ");if(r==="iso-8859-1")return t.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(t)}catch{return t}},xe=function(e,r,t,i,a){if(e.length===0)return e;var n=e;if(typeof e=="symbol"?n=Symbol.prototype.toString.call(e):typeof e!="string"&&(n=String(e)),t==="iso-8859-1")return escape(n).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var l="",u=0;u<n.length;++u){var o=n.charCodeAt(u);if(o===45||o===46||o===95||o===126||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||a===ge.RFC1738&&(o===40||o===41)){l+=n.charAt(u);continue}if(o<128){l=l+w[o];continue}if(o<2048){l=l+(w[192|o>>6]+w[128|o&63]);continue}if(o<55296||o>=57344){l=l+(w[224|o>>12]+w[128|o>>6&63]+w[128|o&63]);continue}u+=1,o=65536+((o&1023)<<10|n.charCodeAt(u)&1023),l+=w[240|o>>18]+w[128|o>>12&63]+w[128|o>>6&63]+w[128|o&63]}return l},be=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],i=0;i<r.length;++i)for(var a=r[i],n=a.obj[a.prop],l=Object.keys(n),u=0;u<l.length;++u){var o=l[u],c=n[o];typeof c=="object"&&c!==null&&t.indexOf(c)===-1&&(r.push({obj:n,prop:o}),t.push(c))}return pe(r),e},ke=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Ce=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Le=function(e,r){return[].concat(e,r)},je=function(e,r){if(k(e)){for(var t=[],i=0;i<e.length;i+=1)t.push(r(e[i]));return t}return r(e)},ae={arrayToObject:te,assign:ye,combine:Le,compact:be,decode:we,encode:xe,isBuffer:Ce,isRegExp:ke,maybeMap:je,merge:ve},T=ae,$=Q,Oe=Object.prototype.hasOwnProperty,ee={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},C=Array.isArray,Se=String.prototype.split,$e=Array.prototype.push,ne=function(s,e){$e.apply(s,C(e)?e:[e])},Ne=Date.prototype.toISOString,re=$.default,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:T.encode,encodeValuesOnly:!1,format:re,formatter:$.formatters[re],indices:!1,serializeDate:function(e){return Ne.call(e)},skipNulls:!1,strictNullHandling:!1},Ee=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Ve=function s(e,r,t,i,a,n,l,u,o,c,h,m,g,f){var d=e;if(typeof l=="function"?d=l(r,d):d instanceof Date?d=c(d):t==="comma"&&C(d)&&(d=T.maybeMap(d,function(F){return F instanceof Date?c(F):F})),d===null){if(i)return n&&!g?n(r,v.encoder,f,"key",h):r;d=""}if(Ee(d)||T.isBuffer(d)){if(n){var z=g?r:n(r,v.encoder,f,"key",h);if(t==="comma"&&g){for(var I=Se.call(String(d),","),q="",N=0;N<I.length;++N)q+=(N===0?"":",")+m(n(I[N],v.encoder,f,"value",h));return[m(z)+"="+q]}return[m(z)+"="+m(n(d,v.encoder,f,"value",h))]}return[m(r)+"="+m(String(d))]}var E=[];if(typeof d>"u")return E;var j;if(t==="comma"&&C(d))j=[{value:d.length>0?d.join(",")||null:void 0}];else if(C(l))j=l;else{var U=Object.keys(d);j=u?U.sort(u):U}for(var V=0;V<j.length;++V){var x=j[V],W=typeof x=="object"&&typeof x.value<"u"?x.value:d[x];if(!(a&&W===null)){var oe=C(d)?typeof t=="function"?t(r,x):r:r+(o?"."+x:"["+x+"]");ne(E,s(W,oe,t,i,a,n,l,u,o,c,h,m,g,f))}}return E},Fe=function(e){if(!e)return v;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||v.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=$.default;if(typeof e.format<"u"){if(!Oe.call($.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var i=$.formatters[t],a=v.filter;return(typeof e.filter=="function"||C(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:v.addQueryPrefix,allowDots:typeof e.allowDots>"u"?v.allowDots:!!e.allowDots,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:v.charsetSentinel,delimiter:typeof e.delimiter>"u"?v.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:v.encode,encoder:typeof e.encoder=="function"?e.encoder:v.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:v.encodeValuesOnly,filter:a,format:t,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:v.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:v.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:v.strictNullHandling}},Ae=function(s,e){var r=s,t=Fe(e),i,a;typeof t.filter=="function"?(a=t.filter,r=a("",r)):C(t.filter)&&(a=t.filter,i=a);var n=[];if(typeof r!="object"||r===null)return"";var l;e&&e.arrayFormat in ee?l=e.arrayFormat:e&&"indices"in e?l=e.indices?"indices":"repeat":l="indices";var u=ee[l];i||(i=Object.keys(r)),t.sort&&i.sort(t.sort);for(var o=0;o<i.length;++o){var c=i[o];t.skipNulls&&r[c]===null||ne(n,Ve(r[c],c,u,t.strictNullHandling,t.skipNulls,t.encode?t.encoder:null,t.filter,t.sort,t.allowDots,t.serializeDate,t.format,t.formatter,t.encodeValuesOnly,t.charset))}var h=n.join(t.delimiter),m=t.addQueryPrefix===!0?"?":"";return t.charsetSentinel&&(t.charset==="iso-8859-1"?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&"),h.length>0?m+h:""},L=ae,Z=Object.prototype.hasOwnProperty,Pe=Array.isArray,p={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:L.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Me=function(s){return s.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},ie=function(s,e){return s&&typeof s=="string"&&e.comma&&s.indexOf(",")>-1?s.split(","):s},De="utf8=%26%2310003%3B",_e="utf8=%E2%9C%93",Be=function(e,r){var t={},i=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=r.parameterLimit===1/0?void 0:r.parameterLimit,n=i.split(r.delimiter,a),l=-1,u,o=r.charset;if(r.charsetSentinel)for(u=0;u<n.length;++u)n[u].indexOf("utf8=")===0&&(n[u]===_e?o="utf-8":n[u]===De&&(o="iso-8859-1"),l=u,u=n.length);for(u=0;u<n.length;++u)if(u!==l){var c=n[u],h=c.indexOf("]="),m=h===-1?c.indexOf("="):h+1,g,f;m===-1?(g=r.decoder(c,p.decoder,o,"key"),f=r.strictNullHandling?null:""):(g=r.decoder(c.slice(0,m),p.decoder,o,"key"),f=L.maybeMap(ie(c.slice(m+1),r),function(d){return r.decoder(d,p.decoder,o,"value")})),f&&r.interpretNumericEntities&&o==="iso-8859-1"&&(f=Me(f)),c.indexOf("[]=")>-1&&(f=Pe(f)?[f]:f),Z.call(t,g)?t[g]=L.combine(t[g],f):t[g]=f}return t},Re=function(s,e,r,t){for(var i=t?e:ie(e,r),a=s.length-1;a>=0;--a){var n,l=s[a];if(l==="[]"&&r.parseArrays)n=[].concat(i);else{n=r.plainObjects?Object.create(null):{};var u=l.charAt(0)==="["&&l.charAt(l.length-1)==="]"?l.slice(1,-1):l,o=parseInt(u,10);!r.parseArrays&&u===""?n={0:i}:!isNaN(o)&&l!==u&&String(o)===u&&o>=0&&r.parseArrays&&o<=r.arrayLimit?(n=[],n[o]=i):u!=="__proto__"&&(n[u]=i)}i=n}return i},He=function(e,r,t,i){if(e){var a=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,l=/(\[[^[\]]*])/g,u=t.depth>0&&n.exec(a),o=u?a.slice(0,u.index):a,c=[];if(o){if(!t.plainObjects&&Z.call(Object.prototype,o)&&!t.allowPrototypes)return;c.push(o)}for(var h=0;t.depth>0&&(u=l.exec(a))!==null&&h<t.depth;){if(h+=1,!t.plainObjects&&Z.call(Object.prototype,u[1].slice(1,-1))&&!t.allowPrototypes)return;c.push(u[1])}return u&&c.push("["+a.slice(u.index)+"]"),Re(c,r,t,i)}},Te=function(e){if(!e)return p;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?p.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?p.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:p.allowPrototypes,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:p.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:p.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:p.comma,decoder:typeof e.decoder=="function"?e.decoder:p.decoder,delimiter:typeof e.delimiter=="string"||L.isRegExp(e.delimiter)?e.delimiter:p.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:p.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:p.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:p.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:p.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:p.strictNullHandling}},Ze=function(s,e){var r=Te(e);if(s===""||s===null||typeof s>"u")return r.plainObjects?Object.create(null):{};for(var t=typeof s=="string"?Be(s,r):s,i=r.plainObjects?Object.create(null):{},a=Object.keys(t),n=0;n<a.length;++n){var l=a[n],u=He(l,t[l],r,typeof s=="string");i=L.merge(i,u,r)}return L.compact(i)},Qe=Ae,ze=Ze,Ie=Q,se={formats:Ie,parse:ze,stringify:Qe};function y(){return y=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(s[t]=r[t])}return s},y.apply(this,arguments)}class R{constructor(e,r,t){var i,a;this.name=e,this.definition=r,this.bindings=(i=r.bindings)!=null?i:{},this.wheres=(a=r.wheres)!=null?a:{},this.config=t}get template(){const e=`${this.origin}/${this.definition.uri}`.replace(/\/+$/,"");return e===""?"/":e}get origin(){return this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?`:${this.config.port}`:""}`:this.config.url:""}get parameterSegments(){var e,r;return(e=(r=this.template.match(/{[^}?]+\??}/g))==null?void 0:r.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))!=null?e:[]}matchesUrl(e){if(!this.definition.methods.includes("GET"))return!1;const r=this.template.replace(/(\/?){([^}?]*)(\??)}/g,(n,l,u,o)=>{var c;const h=`(?<${u}>${((c=this.wheres[u])==null?void 0:c.replace(/(^\^)|(\$$)/g,""))||"[^/?]+"})`;return o?`(${l}${h})?`:`${l}${h}`}).replace(/^\w+:\/\//,""),[t,i]=e.replace(/^\w+:\/\//,"").split("?"),a=new RegExp(`^${r}/?$`).exec(decodeURI(t));if(a){for(const n in a.groups)a.groups[n]=typeof a.groups[n]=="string"?decodeURIComponent(a.groups[n]):a.groups[n];return{params:a.groups,query:se.parse(i)}}return!1}compile(e){return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,(r,t,i)=>{var a,n;if(!i&&[null,void 0].includes(e[t]))throw new Error(`Ziggy error: '${t}' parameter is required for route '${this.name}'.`);if(this.wheres[t]&&!new RegExp(`^${i?`(${this.wheres[t]})?`:this.wheres[t]}$`).test((n=e[t])!=null?n:""))throw new Error(`Ziggy error: '${t}' parameter does not match required format '${this.wheres[t]}' for route '${this.name}'.`);return encodeURI((a=e[t])!=null?a:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")}).replace(`${this.origin}//`,`${this.origin}/`).replace(/\/+$/,""):this.template}}class qe extends String{constructor(e,r,t=!0,i){if(super(),this.t=i??(typeof Ziggy<"u"?Ziggy:globalThis==null?void 0:globalThis.Ziggy),this.t=y({},this.t,{absolute:t}),e){if(!this.t.routes[e])throw new Error(`Ziggy error: route '${e}' is not in the route list.`);this.i=new R(e,this.t.routes[e],this.t),this.o=this.h(r)}}toString(){const e=Object.keys(this.o).filter(r=>!this.i.parameterSegments.some(({name:t})=>t===r)).filter(r=>r!=="_query").reduce((r,t)=>y({},r,{[t]:this.o[t]}),{});return this.i.compile(this.o)+se.stringify(y({},e,this.o._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(r,t)=>typeof r=="boolean"?Number(r):t(r)})}u(e){e?this.t.absolute&&e.startsWith("/")&&(e=this.l().host+e):e=this.m();let r={};const[t,i]=Object.entries(this.t.routes).find(([a,n])=>r=new R(a,n,this.t).matchesUrl(e))||[void 0,void 0];return y({name:t},r,{route:i})}m(){const{host:e,pathname:r,search:t}=this.l();return(this.t.absolute?e+r:r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+t}current(e,r){const{name:t,params:i,query:a,route:n}=this.u();if(!e)return t;const l=new RegExp(`^${e.replace(/\./g,"\\.").replace(/\*/g,".*")}$`).test(t);if([null,void 0].includes(r)||!l)return l;const u=new R(t,n,this.t);r=this.h(r,u);const o=y({},i,a);if(Object.values(r).every(h=>!h)&&!Object.values(o).some(h=>h!==void 0))return!0;const c=(h,m)=>Object.entries(h).every(([g,f])=>Array.isArray(f)&&Array.isArray(m[g])?f.every(d=>m[g].includes(d)):typeof f=="object"&&typeof m[g]=="object"&&f!==null&&m[g]!==null?c(f,m[g]):m[g]==f);return c(r,o)}l(){var e,r,t,i,a,n;const{host:l="",pathname:u="",search:o=""}=typeof window<"u"?window.location:{};return{host:(e=(r=this.t.location)==null?void 0:r.host)!=null?e:l,pathname:(t=(i=this.t.location)==null?void 0:i.pathname)!=null?t:u,search:(a=(n=this.t.location)==null?void 0:n.search)!=null?a:o}}get params(){const{params:e,query:r}=this.u();return y({},e,r)}has(e){return Object.keys(this.t.routes).includes(e)}h(e={},r=this.i){e!=null||(e={}),e=["string","number"].includes(typeof e)?[e]:e;const t=r.parameterSegments.filter(({name:i})=>!this.t.defaults[i]);return Array.isArray(e)?e=e.reduce((i,a,n)=>y({},i,t[n]?{[t[n].name]:a}:typeof a=="object"?a:{[a]:""}),{}):t.length!==1||e[t[0].name]||!e.hasOwnProperty(Object.values(r.bindings)[0])&&!e.hasOwnProperty("id")||(e={[t[0].name]:e}),y({},this.p(r),this.$(e,r))}p(e){return e.parameterSegments.filter(({name:r})=>this.t.defaults[r]).reduce((r,{name:t},i)=>y({},r,{[t]:this.t.defaults[t]}),{})}$(e,{bindings:r,parameterSegments:t}){return Object.entries(e).reduce((i,[a,n])=>{if(!n||typeof n!="object"||Array.isArray(n)||!t.some(({name:l})=>l===a))return y({},i,{[a]:n});if(!n.hasOwnProperty(r[a])){if(!n.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${a}' parameter is missing route model binding key '${r[a]}'.`);r[a]="id"}return y({},i,{[a]:n[r[a]]})},{})}valueOf(){return this.toString()}}function H(s,e,r,t){const i=new qe(s,e,r,t);return s?i.toString():i}const Ue={class:"relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"},We={key:0,class:"sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10"},Ge={class:"max-w-7xl mx-auto p-6 lg:p-8"},Ke=de('<div class="flex justify-center"><svg viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto bg-gray-100 dark:bg-gray-900"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="#FF2D20"></path></svg></div><div class="mt-16"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"><a href="https://laravel.com/docs" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Documentation</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laracasts.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laracasts</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laravel News</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Vibrant Ecosystem</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Forge</a>, <a href="https://vapor.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Vapor</a>, <a href="https://nova.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Nova</a>, and <a href="https://envoyer.io" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Telescope</a>, and more. </p></div></div></div></div>',2),Je={class:"flex justify-center mt-16 px-6 sm:items-center sm:justify-between"},Xe=S("div",{class:"text-center text-sm sm:text-start"},"   ",-1),Ye={class:"text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0"},rr=le({__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(s){const e=ue(()=>{var r;return(r=ce().props)==null?void 0:r.user});return(r,t)=>(O(),A(J,null,[G(b(fe),{title:"Welcome"}),S("div",Ue,[s.canLogin?(O(),A("div",We,[e.value?(O(),K(b(D),{key:0,href:b(H)("dashboard"),class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:P(()=>[M(" Dashboard")]),_:1},8,["href"])):(O(),A(J,{key:1},[G(b(D),{href:b(H)("login"),class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:P(()=>[M("Log in")]),_:1},8,["href"]),s.canRegister?(O(),K(b(D),{key:0,href:b(H)("register"),class:"ml-4 text-sm text-gray-700 dark:text-gray-500 underline"},{default:P(()=>[M("Register")]),_:1},8,["href"])):X("",!0)],64))])):X("",!0),S("div",Ge,[Ke,S("div",Je,[Xe,S("div",Ye," Laravel v"+Y(s.laravelVersion)+" (PHP v"+Y(s.phpVersion)+") ",1)])])])],64))}});export{rr as default};