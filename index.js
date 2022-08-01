// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).countByAsync={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,r,e.get),p&&c&&c.call(t,r,e.set),t};var a=e;function s(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&g.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(t){var r,e,n;if(null==t)return d.call(t);e=t[h],r=m(t,h);try{t[h]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[h]=e:delete t[h],n}:function(t){return d.call(t)},_=Boolean.prototype.toString;var w=v();function O(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function E(t){return y(t)||O(t)}function T(){return new Function("return this;")()}s(E,"isPrimitive",y),s(E,"isObject",O);var A="object"==typeof self?self:null,P="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof S?S:null;var N=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(A)return A;if(P)return P;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),B=N.document&&N.document.childNodes,x=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var K=/^\s*function\s*([^(]*)/i;s(F,"REGEXP",K);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function C(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=K.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var M="function"==typeof p||"object"==typeof x||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function k(t){return"function"===M(t)}var L=Math.floor;function R(t){return L(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function Y(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var J=Number.POSITIVE_INFINITY;var X,q=Object.getPrototypeOf;X=k(Object.getPrototypeOf)?q:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var z=X;var D=Object.prototype;function H(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),z(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&k(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===D||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Q(t){return"number"==typeof t}var W=Number,Z=W.prototype.toString;var $=v();function tt(t){return"object"==typeof t&&(t instanceof W||($?function(t){try{return Z.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function rt(t){return Q(t)||tt(t)}s(rt,"isPrimitive",Q),s(rt,"isObject",tt);var et=W.NEGATIVE_INFINITY;function nt(t){return t<J&&t>et&&R(t)}function ot(t){return Q(t)&&nt(t)}function it(t){return tt(t)&&nt(t.valueOf())}function ut(t){return ot(t)||it(t)}function ct(t){return ot(t)&&t>0}function ft(t){return it(t)&&t.valueOf()>0}function lt(t){return ct(t)||ft(t)}function at(t,r){return H(r)?(m(r,"thisArg")&&(t.thisArg=r.thisArg),m(r,"series")&&(t.series=r.series,!y(t.series))?new TypeError(Y("0iK30","series",t.series)):m(r,"limit")&&(t.limit=r.limit,!ct(t.limit))?new TypeError(Y("0iK3b","limit",t.limit)):null):new TypeError(Y("0iK2h",r))}s(ut,"isPrimitive",ot),s(ut,"isObject",it),s(lt,"isPrimitive",ct),s(lt,"isObject",ft);var st=()=>{};function pt(t,r,e,n){var o,i,u,c,f,l,a,s;if(f=t.length,a={},0===f)return n(null,a);for(c=f<r.limit?f:r.limit,st("Number of arguments: %d",e.length),o=f-1,i=0,l=-1,s=0;s<c;s++)l<o&&p();function p(){var n,o;function i(t,r){if(!u){if(t)return u=!0,y(t);m(a,r)?a[r]+=1:a[r]=1,y()}}n=t[o=l+=1],st("Collection element %d: %s.",o,JSON.stringify(n)),2===e.length?e.call(r.thisArg,n,i):3===e.length?e.call(r.thisArg,n,o,i):e.call(r.thisArg,n,o,t,i)}function y(t){return t?(st("Encountered an error: %s",t.message),n(t)):(i+=1,l<o?p():i===f?n(null,a):void 0)}}function yt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=at(e,t))throw n;o=r}else o=t;if(!k(o))throw new TypeError(Y("0iK43",o));return e.series?e.limit=1:e.limit||(e.limit=J),i;function i(t,r){if(!U(t))throw new TypeError(Y("0iKBO",t));if(!k(r))throw new TypeError(Y("0iK43",r));return pt(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function bt(t,r,e,n){if(arguments.length<4)return yt(r)(t,e);yt(r,e)(t,n)}s(bt,"factory",yt),t.default=bt,t.factory=yt,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
