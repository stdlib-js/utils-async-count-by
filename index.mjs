// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";function d(e,t){return s(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(r("0iK30","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!m(e.limit))?new TypeError(r("0iK3b","limit",e.limit)):null):new TypeError(r("0iK2h",t))}function c(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var r=Function.bind.apply(t,i);return new r}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var f=c(Object.freeze({__proto__:null,default:()=>()=>{}}))("count-by-async:limit");function p(e,t,i,r){var n,s,l,m,d,c,p,u;if(d=e.length,f("Collection length: %d",d),p={},0===d)return f("Finished processing a collection."),r(null,p);for(m=d<t.limit?d:t.limit,f("Concurrency limit: %d",m),f("Number of arguments: %d",i.length),n=d-1,s=0,c=-1,u=0;u<m;u++)c<n&&a();function a(){var r,n;function s(e,t){if(!l){if(e)return l=!0,h(e);f("Collection element %d group: %s.",n,t),o(p,t)?p[t]+=1:p[t]=1,h()}}r=e[n=c+=1],f("Collection element %d: %s.",n,JSON.stringify(r)),2===i.length?i.call(t.thisArg,r,s):3===i.length?i.call(t.thisArg,r,n,s):i.call(t.thisArg,r,n,e,s)}function h(e){return e?(f("Encountered an error: %s",e.message),r(e)):(f("Processed %d of %d collection elements.",s+=1,d),c<n?a():s===d?(f("Finished processing a collection."),r(null,p)):void 0)}}function u(e,s){var o,l,m;if(o={},arguments.length>1){if(l=d(o,e))throw l;m=s}else m=e;if(!t(m))throw new TypeError(r("0iK43",m));return o.series?o.limit=1:o.limit||(o.limit=n),c;function c(e,n){if(!i(e))throw new TypeError(r("0iKBO",e));if(!t(n))throw new TypeError(r("0iK43",n));return p(e,o,m,(function(e,t){if(e)return n(e);n(null,t)}))}}function a(e,t,i,r){if(arguments.length<4)return u(t)(e,i);u(t,i)(e,r)}e(a,"factory",u);export{a as default,u as factory};
//# sourceMappingURL=index.mjs.map
