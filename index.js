// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).countByAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var f=e;function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&d.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[m],e=g(t,m);try{t[m]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[m]=r:delete t[m],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="object"==typeof global?global:null;var S=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),I=S.document&&S.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",F);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function K(t){return null!==t&&"object"==typeof t}function V(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=F.exec(n.toString()))return e[1]}return K(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(K,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!C(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(K));var x="function"==typeof s||"object"==typeof N||"function"==typeof I?function(t){return V(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?V(t).toLowerCase():e};function M(t){return"function"===x(t)}var k=Math.floor;function G(t){return k(t)===t}function L(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=9007199254740991}function R(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var U=Number.POSITIVE_INFINITY;var Y,z=Object.getPrototypeOf;Y=M(Object.getPrototypeOf)?z:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=Y;var J=Object.prototype;function X(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),D(t))}(t),!e||!g(t,"constructor")&&g(e,"constructor")&&M(e.constructor)&&"[object Function]"===h(e.constructor)&&g(e,"isPrototypeOf")&&M(e.isPrototypeOf)&&(e===J||function(t){var e;for(e in t)if(!g(t,e))return!1;return!0}(t)))}function q(t){return"number"==typeof t}var H=Number,Q=H.prototype.toString;var W=b();function Z(t){return"object"==typeof t&&(t instanceof H||(W?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function $(t){return q(t)||Z(t)}a($,"isPrimitive",q),a($,"isObject",Z);var tt=H.NEGATIVE_INFINITY;function et(t){return t<U&&t>tt&&G(t)}function rt(t){return q(t)&&et(t)}function nt(t){return Z(t)&&et(t.valueOf())}function ot(t){return rt(t)||nt(t)}function it(t){return rt(t)&&t>0}function ut(t){return nt(t)&&t.valueOf()>0}function ct(t){return it(t)||ut(t)}function lt(t,e){return X(e)?(g(e,"thisArg")&&(t.thisArg=e.thisArg),g(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(R("0iK30","series",t.series)):g(e,"limit")&&(t.limit=e.limit,!it(t.limit))?new TypeError(R("0iK3b","limit",t.limit)):null):new TypeError(R("0iK2h",e))}function ft(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){if(this instanceof t){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(e,r);return new n}return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}a(ot,"isPrimitive",rt),a(ot,"isObject",nt),a(ct,"isPrimitive",it),a(ct,"isObject",ut);var at=ft(Object.freeze({__proto__:null,default:()=>()=>{}}))("count-by-async:limit");function st(t,e,r,n){var o,i,u,c,l,f,a,s;if(l=t.length,at("Collection length: %d",l),a={},0===l)return at("Finished processing a collection."),n(null,a);for(c=l<e.limit?l:e.limit,at("Concurrency limit: %d",c),at("Number of arguments: %d",r.length),o=l-1,i=0,f=-1,s=0;s<c;s++)f<o&&p();function p(){var n,o;function i(t,e){if(!u){if(t)return u=!0,y(t);at("Collection element %d group: %s.",o,e),g(a,e)?a[e]+=1:a[e]=1,y()}}n=t[o=f+=1],at("Collection element %d: %s.",o,JSON.stringify(n)),2===r.length?r.call(e.thisArg,n,i):3===r.length?r.call(e.thisArg,n,o,i):r.call(e.thisArg,n,o,t,i)}function y(t){return t?(at("Encountered an error: %s",t.message),n(t)):(at("Processed %d of %d collection elements.",i+=1,l),f<o?p():i===l?(at("Finished processing a collection."),n(null,a)):void 0)}}function pt(t,e){var r,n,o;if(r={},arguments.length>1){if(n=lt(r,t))throw n;o=e}else o=t;if(!M(o))throw new TypeError(R("0iK43",o));return r.series?r.limit=1:r.limit||(r.limit=U),i;function i(t,e){if(!L(t))throw new TypeError(R("0iKBO",t));if(!M(e))throw new TypeError(R("0iK43",e));return st(t,r,o,(function(t,r){if(t)return e(t);e(null,r)}))}}function yt(t,e,r,n){if(arguments.length<4)return pt(e)(t,r);pt(e,r)(t,n)}return a(yt,"factory",pt),yt}));
//# sourceMappingURL=index.js.map
