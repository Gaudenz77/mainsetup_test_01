import{p as le,k as se,Q as oe,o as $,e as P,b as W,u as x,a as ue,c as G,w as A,g as D,F as K,f as X,N as fe,Z as ce,j as R}from"./app-C6YAwWgc.js";var de=String.prototype.replace,he=/%20/g,k={RFC1738:"RFC1738",RFC3986:"RFC3986"},M={default:k.RFC3986,formatters:{RFC1738:function(l){return de.call(l,he,"+")},RFC3986:function(l){return String(l)}},RFC1738:k.RFC1738,RFC3986:k.RFC3986},pe=M,_=Object.prototype.hasOwnProperty,C=Array.isArray,b=function(){for(var l=[],e=0;e<256;++e)l.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return l}(),me=function(e){for(;e.length>1;){var r=e.pop(),t=r.obj[r.prop];if(C(t)){for(var a=[],n=0;n<t.length;++n)typeof t[n]<"u"&&a.push(t[n]);r.obj[r.prop]=a}}},ee=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},a=0;a<e.length;++a)typeof e[a]<"u"&&(t[a]=e[a]);return t},ye=function l(e,r,t){if(!r)return e;if(typeof r!="object"){if(C(e))e.push(r);else if(e&&typeof e=="object")(t&&(t.plainObjects||t.allowPrototypes)||!_.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var a=e;return C(e)&&!C(r)&&(a=ee(e,t)),C(e)&&C(r)?(r.forEach(function(n,i){if(_.call(e,i)){var o=e[i];o&&typeof o=="object"&&n&&typeof n=="object"?e[i]=l(o,n,t):e.push(n)}else e[i]=n}),e):Object.keys(r).reduce(function(n,i){var o=r[i];return _.call(n,i)?n[i]=l(n[i],o,t):n[i]=o,n},a)},ge=function(e,r){return Object.keys(r).reduce(function(t,a){return t[a]=r[a],t},e)},ve=function(l,e,r){var t=l.replace(/\+/g," ");if(r==="iso-8859-1")return t.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(t)}catch{return t}},be=function(e,r,t,a,n){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),t==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(f){return"%26%23"+parseInt(f.slice(2),16)+"%3B"});for(var o="",u=0;u<i.length;++u){var s=i.charCodeAt(u);if(s===45||s===46||s===95||s===126||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||n===pe.RFC1738&&(s===40||s===41)){o+=i.charAt(u);continue}if(s<128){o=o+b[s];continue}if(s<2048){o=o+(b[192|s>>6]+b[128|s&63]);continue}if(s<55296||s>=57344){o=o+(b[224|s>>12]+b[128|s>>6&63]+b[128|s&63]);continue}u+=1,s=65536+((s&1023)<<10|i.charCodeAt(u)&1023),o+=b[240|s>>18]+b[128|s>>12&63]+b[128|s>>6&63]+b[128|s&63]}return o},we=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],a=0;a<r.length;++a)for(var n=r[a],i=n.obj[n.prop],o=Object.keys(i),u=0;u<o.length;++u){var s=o[u],f=i[s];typeof f=="object"&&f!==null&&t.indexOf(f)===-1&&(r.push({obj:i,prop:s}),t.push(f))}return me(r),e},xe=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Ce=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Oe=function(e,r){return[].concat(e,r)},Le=function(e,r){if(C(e)){for(var t=[],a=0;a<e.length;a+=1)t.push(r(e[a]));return t}return r(e)},re={arrayToObject:ee,assign:ge,combine:Oe,compact:we,decode:ve,encode:be,isBuffer:Ce,isRegExp:xe,maybeMap:Le,merge:ye},B=re,S=M,je=Object.prototype.hasOwnProperty,Y={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},O=Array.isArray,$e=String.prototype.split,Se=Array.prototype.push,te=function(l,e){Se.apply(l,O(e)?e:[e])},Ne=Date.prototype.toISOString,J=S.default,g={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:B.encode,encodeValuesOnly:!1,format:J,formatter:S.formatters[J],indices:!1,serializeDate:function(e){return Ne.call(e)},skipNulls:!1,strictNullHandling:!1},Ee=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Fe=function l(e,r,t,a,n,i,o,u,s,f,h,p,m,d){var c=e;if(typeof o=="function"?c=o(r,c):c instanceof Date?c=f(c):t==="comma"&&O(c)&&(c=B.maybeMap(c,function(V){return V instanceof Date?f(V):V})),c===null){if(a)return i&&!m?i(r,g.encoder,d,"key",h):r;c=""}if(Ee(c)||B.isBuffer(c)){if(i){var H=m?r:i(r,g.encoder,d,"key",h);if(t==="comma"&&m){for(var z=$e.call(String(c),","),I="",N=0;N<z.length;++N)I+=(N===0?"":",")+p(i(z[N],g.encoder,d,"value",h));return[p(H)+"="+I]}return[p(H)+"="+p(i(c,g.encoder,d,"value",h))]}return[p(r)+"="+p(String(c))]}var E=[];if(typeof c>"u")return E;var j;if(t==="comma"&&O(c))j=[{value:c.length>0?c.join(",")||null:void 0}];else if(O(o))j=o;else{var U=Object.keys(c);j=u?U.sort(u):U}for(var F=0;F<j.length;++F){var w=j[F],q=typeof w=="object"&&typeof w.value<"u"?w.value:c[w];if(!(n&&q===null)){var ae=O(c)?typeof t=="function"?t(r,w):r:r+(s?"."+w:"["+w+"]");te(E,l(q,ae,t,a,n,i,o,u,s,f,h,p,m,d))}}return E},Ve=function(e){if(!e)return g;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||g.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=S.default;if(typeof e.format<"u"){if(!je.call(S.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var a=S.formatters[t],n=g.filter;return(typeof e.filter=="function"||O(e.filter))&&(n=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:g.addQueryPrefix,allowDots:typeof e.allowDots>"u"?g.allowDots:!!e.allowDots,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:g.charsetSentinel,delimiter:typeof e.delimiter>"u"?g.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:g.encode,encoder:typeof e.encoder=="function"?e.encoder:g.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:g.encodeValuesOnly,filter:n,format:t,formatter:a,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:g.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:g.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:g.strictNullHandling}},Pe=function(l,e){var r=l,t=Ve(e),a,n;typeof t.filter=="function"?(n=t.filter,r=n("",r)):O(t.filter)&&(n=t.filter,a=n);var i=[];if(typeof r!="object"||r===null)return"";var o;e&&e.arrayFormat in Y?o=e.arrayFormat:e&&"indices"in e?o=e.indices?"indices":"repeat":o="indices";var u=Y[o];a||(a=Object.keys(r)),t.sort&&a.sort(t.sort);for(var s=0;s<a.length;++s){var f=a[s];t.skipNulls&&r[f]===null||te(i,Fe(r[f],f,u,t.strictNullHandling,t.skipNulls,t.encode?t.encoder:null,t.filter,t.sort,t.allowDots,t.serializeDate,t.format,t.formatter,t.encodeValuesOnly,t.charset))}var h=i.join(t.delimiter),p=t.addQueryPrefix===!0?"?":"";return t.charsetSentinel&&(t.charset==="iso-8859-1"?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),h.length>0?p+h:""},L=re,Q=Object.prototype.hasOwnProperty,Ae=Array.isArray,y={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:L.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},De=function(l){return l.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},ne=function(l,e){return l&&typeof l=="string"&&e.comma&&l.indexOf(",")>-1?l.split(","):l},Re="utf8=%26%2310003%3B",ke="utf8=%E2%9C%93",_e=function(e,r){var t={},a=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,n=r.parameterLimit===1/0?void 0:r.parameterLimit,i=a.split(r.delimiter,n),o=-1,u,s=r.charset;if(r.charsetSentinel)for(u=0;u<i.length;++u)i[u].indexOf("utf8=")===0&&(i[u]===ke?s="utf-8":i[u]===Re&&(s="iso-8859-1"),o=u,u=i.length);for(u=0;u<i.length;++u)if(u!==o){var f=i[u],h=f.indexOf("]="),p=h===-1?f.indexOf("="):h+1,m,d;p===-1?(m=r.decoder(f,y.decoder,s,"key"),d=r.strictNullHandling?null:""):(m=r.decoder(f.slice(0,p),y.decoder,s,"key"),d=L.maybeMap(ne(f.slice(p+1),r),function(c){return r.decoder(c,y.decoder,s,"value")})),d&&r.interpretNumericEntities&&s==="iso-8859-1"&&(d=De(d)),f.indexOf("[]=")>-1&&(d=Ae(d)?[d]:d),Q.call(t,m)?t[m]=L.combine(t[m],d):t[m]=d}return t},Te=function(l,e,r,t){for(var a=t?e:ne(e,r),n=l.length-1;n>=0;--n){var i,o=l[n];if(o==="[]"&&r.parseArrays)i=[].concat(a);else{i=r.plainObjects?Object.create(null):{};var u=o.charAt(0)==="["&&o.charAt(o.length-1)==="]"?o.slice(1,-1):o,s=parseInt(u,10);!r.parseArrays&&u===""?i={0:a}:!isNaN(s)&&o!==u&&String(s)===u&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(i=[],i[s]=a):u!=="__proto__"&&(i[u]=a)}a=i}return a},Ze=function(e,r,t,a){if(e){var n=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,u=t.depth>0&&i.exec(n),s=u?n.slice(0,u.index):n,f=[];if(s){if(!t.plainObjects&&Q.call(Object.prototype,s)&&!t.allowPrototypes)return;f.push(s)}for(var h=0;t.depth>0&&(u=o.exec(n))!==null&&h<t.depth;){if(h+=1,!t.plainObjects&&Q.call(Object.prototype,u[1].slice(1,-1))&&!t.allowPrototypes)return;f.push(u[1])}return u&&f.push("["+n.slice(u.index)+"]"),Te(f,r,t,a)}},Be=function(e){if(!e)return y;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?y.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?y.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:y.allowPrototypes,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:y.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:y.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:y.comma,decoder:typeof e.decoder=="function"?e.decoder:y.decoder,delimiter:typeof e.delimiter=="string"||L.isRegExp(e.delimiter)?e.delimiter:y.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:y.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:y.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:y.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:y.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:y.strictNullHandling}},Qe=function(l,e){var r=Be(e);if(l===""||l===null||typeof l>"u")return r.plainObjects?Object.create(null):{};for(var t=typeof l=="string"?_e(l,r):l,a=r.plainObjects?Object.create(null):{},n=Object.keys(t),i=0;i<n.length;++i){var o=n[i],u=Ze(o,t[o],r,typeof l=="string");a=L.merge(a,u,r)}return L.compact(a)},Me=Pe,He=Qe,ze=M,ie={formats:ze,parse:He,stringify:Me};function v(){return v=Object.assign?Object.assign.bind():function(l){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t])}return l},v.apply(this,arguments)}class T{constructor(e,r,t){var a,n;this.name=e,this.definition=r,this.bindings=(a=r.bindings)!=null?a:{},this.wheres=(n=r.wheres)!=null?n:{},this.config=t}get template(){const e=`${this.origin}/${this.definition.uri}`.replace(/\/+$/,"");return e===""?"/":e}get origin(){return this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?`:${this.config.port}`:""}`:this.config.url:""}get parameterSegments(){var e,r;return(e=(r=this.template.match(/{[^}?]+\??}/g))==null?void 0:r.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))!=null?e:[]}matchesUrl(e){if(!this.definition.methods.includes("GET"))return!1;const r=this.template.replace(/(\/?){([^}?]*)(\??)}/g,(i,o,u,s)=>{var f;const h=`(?<${u}>${((f=this.wheres[u])==null?void 0:f.replace(/(^\^)|(\$$)/g,""))||"[^/?]+"})`;return s?`(${o}${h})?`:`${o}${h}`}).replace(/^\w+:\/\//,""),[t,a]=e.replace(/^\w+:\/\//,"").split("?"),n=new RegExp(`^${r}/?$`).exec(decodeURI(t));if(n){for(const i in n.groups)n.groups[i]=typeof n.groups[i]=="string"?decodeURIComponent(n.groups[i]):n.groups[i];return{params:n.groups,query:ie.parse(a)}}return!1}compile(e){return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,(r,t,a)=>{var n,i;if(!a&&[null,void 0].includes(e[t]))throw new Error(`Ziggy error: '${t}' parameter is required for route '${this.name}'.`);if(this.wheres[t]&&!new RegExp(`^${a?`(${this.wheres[t]})?`:this.wheres[t]}$`).test((i=e[t])!=null?i:""))throw new Error(`Ziggy error: '${t}' parameter does not match required format '${this.wheres[t]}' for route '${this.name}'.`);return encodeURI((n=e[t])!=null?n:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")}).replace(`${this.origin}//`,`${this.origin}/`).replace(/\/+$/,""):this.template}}class Ie extends String{constructor(e,r,t=!0,a){if(super(),this.t=a??(typeof Ziggy<"u"?Ziggy:globalThis==null?void 0:globalThis.Ziggy),this.t=v({},this.t,{absolute:t}),e){if(!this.t.routes[e])throw new Error(`Ziggy error: route '${e}' is not in the route list.`);this.i=new T(e,this.t.routes[e],this.t),this.o=this.h(r)}}toString(){const e=Object.keys(this.o).filter(r=>!this.i.parameterSegments.some(({name:t})=>t===r)).filter(r=>r!=="_query").reduce((r,t)=>v({},r,{[t]:this.o[t]}),{});return this.i.compile(this.o)+ie.stringify(v({},e,this.o._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(r,t)=>typeof r=="boolean"?Number(r):t(r)})}u(e){e?this.t.absolute&&e.startsWith("/")&&(e=this.l().host+e):e=this.m();let r={};const[t,a]=Object.entries(this.t.routes).find(([n,i])=>r=new T(n,i,this.t).matchesUrl(e))||[void 0,void 0];return v({name:t},r,{route:a})}m(){const{host:e,pathname:r,search:t}=this.l();return(this.t.absolute?e+r:r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+t}current(e,r){const{name:t,params:a,query:n,route:i}=this.u();if(!e)return t;const o=new RegExp(`^${e.replace(/\./g,"\\.").replace(/\*/g,".*")}$`).test(t);if([null,void 0].includes(r)||!o)return o;const u=new T(t,i,this.t);r=this.h(r,u);const s=v({},a,n);if(Object.values(r).every(h=>!h)&&!Object.values(s).some(h=>h!==void 0))return!0;const f=(h,p)=>Object.entries(h).every(([m,d])=>Array.isArray(d)&&Array.isArray(p[m])?d.every(c=>p[m].includes(c)):typeof d=="object"&&typeof p[m]=="object"&&d!==null&&p[m]!==null?f(d,p[m]):p[m]==d);return f(r,s)}l(){var e,r,t,a,n,i;const{host:o="",pathname:u="",search:s=""}=typeof window<"u"?window.location:{};return{host:(e=(r=this.t.location)==null?void 0:r.host)!=null?e:o,pathname:(t=(a=this.t.location)==null?void 0:a.pathname)!=null?t:u,search:(n=(i=this.t.location)==null?void 0:i.search)!=null?n:s}}get params(){const{params:e,query:r}=this.u();return v({},e,r)}has(e){return Object.keys(this.t.routes).includes(e)}h(e={},r=this.i){e!=null||(e={}),e=["string","number"].includes(typeof e)?[e]:e;const t=r.parameterSegments.filter(({name:a})=>!this.t.defaults[a]);return Array.isArray(e)?e=e.reduce((a,n,i)=>v({},a,t[i]?{[t[i].name]:n}:typeof n=="object"?n:{[n]:""}),{}):t.length!==1||e[t[0].name]||!e.hasOwnProperty(Object.values(r.bindings)[0])&&!e.hasOwnProperty("id")||(e={[t[0].name]:e}),v({},this.p(r),this.$(e,r))}p(e){return e.parameterSegments.filter(({name:r})=>this.t.defaults[r]).reduce((r,{name:t},a)=>v({},r,{[t]:this.t.defaults[t]}),{})}$(e,{bindings:r,parameterSegments:t}){return Object.entries(e).reduce((a,[n,i])=>{if(!i||typeof i!="object"||Array.isArray(i)||!t.some(({name:o})=>o===n))return v({},a,{[n]:i});if(!i.hasOwnProperty(r[n])){if(!i.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${n}' parameter is missing route model binding key '${r[n]}'.`);r[n]="id"}return v({},a,{[n]:i[r[n]]})},{})}valueOf(){return this.toString()}}function Z(l,e,r,t){const a=new Ie(l,e,r,t);return l?a.toString():a}const Ue={class:"relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"},qe={key:0,class:"sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10"},We=fe('<div class="max-w-7xl mx-auto p-6 lg:p-8"><div class="flex justify-center"><svg viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto bg-gray-100 dark:bg-gray-900"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="#FF2D20"></path></svg></div><div class="mt-16"><div class="flex flex-auto justify-start"><div class="bricolage-grotesque-welcome text-stone-600 text-center">WELCOME <br> to my <br>UNIVERSE!</div></div></div></div>',1),Ke=le({__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(l){const e=se(()=>{var r;return(r=oe().props)==null?void 0:r.user});return(r,t)=>($(),P(K,null,[W(x(ce),{title:"Welcome"}),ue("div",Ue,[l.canLogin?($(),P("div",qe,[e.value?($(),G(x(R),{key:0,href:x(Z)("dashboard"),class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:A(()=>[D(" Dashboard")]),_:1},8,["href"])):($(),P(K,{key:1},[W(x(R),{href:x(Z)("login"),class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:A(()=>[D("Log in")]),_:1},8,["href"]),l.canRegister?($(),G(x(R),{key:0,href:x(Z)("register"),class:"ml-4 text-sm text-gray-700 dark:text-gray-500 underline"},{default:A(()=>[D("Register")]),_:1},8,["href"])):X("",!0)],64))])):X("",!0),We])],64))}});export{Ke as default};