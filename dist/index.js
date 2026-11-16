"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var x=c(function(R,f){
function p(e,r,a,s,u){var t,n,i,o;for(t=a.data,n=a.accessors[0],i=u,o=0;o<e;o++){if(n(t,i)<r)return o;i+=s}return-1}f.exports=p
});var v=c(function(m,d){
var O=require('@stdlib/array-base-arraylike2object/dist'),L=x();function T(e,r,a,s,u){var t,n,i;if(e<=0)return-1;if(n=O(a),n.accessorProtocol)return L(e,r,n,s,u);for(t=u,i=0;i<e;i++){if(a[t]<r)return i;t+=s}return-1}d.exports=T
});var y=c(function(w,q){
var b=require('@stdlib/strided-base-stride2offset/dist'),h=v();function l(e,r,a,s){return h(e,r,a,s,b(e,s))}q.exports=l
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=y(),k=v();j(g,"ndarray",k);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
