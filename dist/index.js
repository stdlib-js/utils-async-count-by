"use strict";var h=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var T=h(function(Z,P){
var k=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),L=require('@stdlib/assert-is-boolean/dist').isPrimitive,J=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,d=require('@stdlib/error-tools-fmtprodmsg/dist');function R(r,e){return k(e)?(b(e,"thisArg")&&(r.thisArg=e.thisArg),b(e,"series")&&(r.series=e.series,!L(r.series))?new TypeError(d('1Qx2o',"series",r.series)):b(e,"limit")&&(r.limit=e.limit,!J(r.limit))?new TypeError(d('1Qx3P',"limit",r.limit)):null):new TypeError(d('1Qx2V',e));}P.exports=R
});var F=h(function(_,C){
var S=require("debug"),z=require('@stdlib/assert-has-own-property/dist'),l=S("count-by-async:limit");function D(r,e,i,n){var u,v,c,a,t,f,m,y;if(t=r.length,l("Collection length: %d",t),m={},t===0)return l("Finished processing a collection."),n(null,m);for(t<e.limit?a=t:a=e.limit,l("Concurrency limit: %d",a),l("Number of arguments: %d",i.length),u=t-1,v=0,f=-1,y=0;y<a;y++)f<u&&A();function A(){var s,g;f+=1,g=f,s=r[g],l("Collection element %d: %s.",g,JSON.stringify(s)),i.length===2?i.call(e.thisArg,s,q):i.length===3?i.call(e.thisArg,s,g,q):i.call(e.thisArg,s,g,r,q);function q(E,o){if(!c){if(E)return c=!0,O(E);l("Collection element %d group: %s.",g,o),z(m,o)?m[o]+=1:m[o]=1,O()}}}function O(s){if(s)return l("Encountered an error: %s",s.message),n(s);if(v+=1,l("Processed %d of %d collection elements.",v,t),f<u)return A();if(v===t)return l("Finished processing a collection."),n(null,m)}}C.exports=D
});var x=h(function($,j){
var V=require('@stdlib/assert-is-function/dist'),G=require('@stdlib/assert-is-collection/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist'),H=require('@stdlib/constants-float64-pinf/dist'),K=T(),M=F();function Q(r,e){var i,n,u;if(i={},arguments.length>1){if(n=K(i,r),n)throw n;u=e}else u=r;if(!V(u))throw new TypeError(w('1Qx3q',u));return i.series?i.limit=1:i.limit||(i.limit=H),v;function v(c,a){if(!G(c))throw new TypeError(w('1QxAh',c));if(!V(a))throw new TypeError(w('1Qx3q',a));return M(c,i,u,t);function t(f,m){if(f)return a(f);a(null,m)}}}j.exports=Q
});var I=h(function(ee,B){
var p=x();function U(r,e,i,n){if(arguments.length<4)return p(e)(r,i);p(e,i)(r,n)}B.exports=U
});var W=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=I(),X=x();W(N,"factory",X);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
