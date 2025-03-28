(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ia=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function w(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function z(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ra(a){return sa(a,a)}
function sa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ua});
function va(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function wa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
va.prototype.G=function(a){this.i=a};
function xa(a,b){a.j={exception:b,wd:!0};a.h=a.M||a.o}
va.prototype.return=function(a){this.j={return:a};this.h=this.o};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.A=function(a){this.h=a};
function ya(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function za(a,b){a.h=b;a.M=0}
function Aa(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.wd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Ca(a){this.h=new va;this.i=a}
function Da(a,b){wa(a.h);var c=a.h.u;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,xa(a.h,g),Fa(a)}a.h.u=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.wd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){wa(a.h);a.h.u?b=Ea(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Fa(a));return b};
this.throw=function(b){wa(a.h);a.h.u?b=Ea(a,a.h.u["throw"],b,a.h.G):(xa(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ha(new Ga(new Ca(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||fa});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return la});
u("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=fa.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.ic(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.ic(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ic=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).ic(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).ic(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||qa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ta(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ta(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ta(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ta(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function La(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Na(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(){return Date.now()}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ab(bb,Error);bb.prototype.name="CustomError";var cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var db=globalThis.trustedTypes,eb;function fb(){var a=null;if(!db)return a;try{var b=function(c){return c};
a=db.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function gb(){eb===void 0&&(eb=fb());return eb}
;function hb(a){this.h=a}
hb.prototype.toString=function(){return this.h+""};
function ib(a){var b=gb();return new hb(b?b.createScriptURL(a):a)}
function jb(a){if(a instanceof hb)return a.h;throw Error("");}
;var kb=ra([""]),lb=sa(["\x00"],["\\0"]),mb=sa(["\n"],["\\n"]),nb=sa(["\x00"],["\\u0000"]);function ob(a){return a.toString().indexOf("`")===-1}
ob(function(a){return a(kb)})||ob(function(a){return a(lb)})||ob(function(a){return a(mb)})||ob(function(a){return a(nb)});function pb(a){this.h=a}
pb.prototype.toString=function(){return this.h};
var qb=new pb("about:invalid#zClosurez");function rb(a){this.Fe=a}
function sb(a){return new rb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var tb=[sb("data"),sb("http"),sb("https"),sb("mailto"),sb("ftp"),new rb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],ub=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function vb(a){if(a instanceof pb)if(a instanceof pb)a=a.h;else throw Error("");else a=ub.test(a)?a:void 0;return a}
;function wb(a,b){b=vb(b);b!==void 0&&(a.href=b)}
;function xb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function yb(a){this.h=a}
yb.prototype.toString=function(){return this.h+""};function zb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Ab(a){this.h=a}
Ab.prototype.toString=function(){return this.h+""};
function Bb(a){var b=gb();return new Ab(b?b.createScript(a):a)}
function Cb(a){if(a instanceof Ab)return a.h;throw Error("");}
;function Db(a){var b=zb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Eb(a,b){a.src=jb(b);Db(a)}
;function Fb(){this.h=Gb[0].toLowerCase()}
Fb.prototype.toString=function(){return this.h};function Hb(a){var b="true".toString(),c=[new Fb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Fb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Ib="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Jb(a,b){if(b instanceof hb)a.href=jb(b).toString(),a.rel="stylesheet";else{if(Ib.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=vb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Kb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Lb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Nb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ob=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Lb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Qb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Rb(a,b){b=Kb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Sb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Tb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Ub(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Vb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Wb[c])c=Wb[c];else{c=String(c);if(!Wb[c]){var f=/function\s+([^\(]+)/m.exec(c);Wb[c]=f?f[1]:"[Anonymous]"}c=Wb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Vb(a,b){b||(b={});b[Xb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Xb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Vb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Xb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Vb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Xb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Wb={};function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function hc(a,b){b=fc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function ic(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var jc=/#|$/,kc=/[?&]($|#)/;function lc(a,b){for(var c=a.search(jc),d=0,e,f=[];(e=ic(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(kc,"$1")}
;var mc=(new Date("2024-01-01T00:00:00Z")).getTime();function nc(a){var b=C.apply(1,arguments).filter(function(d){return d}).join("&");
if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")===-1?"?":"&")+b}
function oc(a){var b=a.url;a=a.Xh;this.j=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}this.o=(new Date).getTime()-mc}
function pc(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b.substring(1)}
;function qc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function rc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function sc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?sc.apply(null,d):rc(d)}}
;function G(){this.ea=this.ea;this.M=this.M}
G.prototype.ea=!1;G.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
G.prototype[Symbol.dispose]=function(){this.dispose()};
function tc(a,b){a.addOnDisposeCallback(Ya(rc,b))}
G.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
G.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};function uc(){var a=vc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:qc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new wc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new wc(f))}))})}
function wc(a){G.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Yc=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void xc(b)})}
w(wc,G);wc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.wb&&{c:a.wb},a.bd&&{s:a.bd},a.cd!==void 0&&{p:a.cd}))};
wc.prototype.o=function(a){this.vm.e(a)};
function xc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function yc(a){var b=b===void 0?48:b;var c=[];zc(a,Ac,6).forEach(function(d){Bc(d,2)<=b&&c.push(Bc(d,1))});
return c}
function Cc(a){var b=b===void 0?48:b;var c=[];zc(a,Ac,6).forEach(function(d){Bc(d,2)>b&&c.push(Bc(d,1))});
return c}
;var Dc;function Ec(){G.apply(this,arguments);this.j=1;this[Dc]=this.dispose}
w(Ec,G);Ec.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Ec.prototype.dispose=function(){--this.j||G.prototype.dispose.call(this)};
Dc=Symbol.dispose;function Fc(a){return{fieldType:2,fieldName:a}}
function Gc(a){return{fieldType:3,fieldName:a}}
;function Hc(a){this.h=a;a.Hc("/client_streamz/bg/frs",Gc("mk"))}
Hc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Ic(a){this.h=a;a.Hc("/client_streamz/bg/wrl",Gc("mn"),Fc("ac"),Fc("sc"),Gc("rk"),Gc("mk"))}
Ic.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Jc(a){this.h=a;a.Mb("/client_streamz/bg/ec",Gc("en"),Gc("mk"))}
Jc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/ec",a,b)};
function Kc(a){this.h=a;a.Hc("/client_streamz/bg/el",Gc("en"),Gc("rk"),Gc("mk"))}
Kc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Lc(a){this.h=a;a.Mb("/client_streamz/bg/cec",Fc("ec"),Gc("rk"),Gc("mk"))}
Lc.prototype.kb=function(a,b,c){this.h.Jb("/client_streamz/bg/cec",a,b,c)};
function Mc(a){this.h=a;a.Mb("/client_streamz/bg/po/csc",Fc("cs"),Gc("rk"),Gc("mk"))}
Mc.prototype.kb=function(a,b,c){this.h.Jb("/client_streamz/bg/po/csc",a,b,c)};
function Nc(a){this.h=a;a.Mb("/client_streamz/bg/po/ctav",Gc("av"),Gc("rk"),Gc("mk"))}
Nc.prototype.kb=function(a,b,c){this.h.Jb("/client_streamz/bg/po/ctav",a,b,c)};
function Oc(a){this.h=a;a.Mb("/client_streamz/bg/po/cwsc",Gc("su"),Gc("rk"),Gc("mk"))}
Oc.prototype.kb=function(a,b,c){this.h.Jb("/client_streamz/bg/po/cwsc",a,b,c)};function Pc(a){D.setTimeout(function(){throw a;},0)}
;var Qc,Rc=F("CLOSURE_FLAGS"),Sc=Rc&&Rc[610401301];Qc=Sc!=null?Sc:!1;function Tc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Uc,Vc=D.navigator;Uc=Vc?Vc.userAgentData||null:null;function Wc(a){if(!Qc||!Uc)return!1;for(var b=0;b<Uc.brands.length;b++){var c=Uc.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function I(a){return Tc().indexOf(a)!=-1}
;function Xc(){return Qc?!!Uc&&Uc.brands.length>0:!1}
function Yc(){return Xc()?!1:I("Opera")}
function Zc(){return I("Firefox")||I("FxiOS")}
function $c(){return Xc()?Wc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Xc()?0:I("Edge"))||I("Silk")}
;function ad(){return Qc?!!Uc&&!!Uc.platform:!1}
function bd(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function cd(a){cd[" "](a);return a}
cd[" "]=function(){};var dd=Yc(),ed=Xc()?!1:I("Trident")||I("MSIE"),fd=I("Edge"),gd=I("Gecko")&&!(Tc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),hd=Tc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");hd&&I("Mobile");ad()||I("Macintosh");ad()||I("Windows");(ad()?Uc.platform==="Linux":I("Linux"))||ad()||I("CrOS");var id=ad()?Uc.platform==="Android":I("Android");bd();I("iPad");I("iPod");bd()||I("iPad")||I("iPod");Tc().toLowerCase().indexOf("kaios");Zc();var jd=bd()||I("iPod"),kd=I("iPad");!I("Android")||$c()||Zc()||Yc()||I("Silk");$c();var ld=I("Safari")&&!($c()||(Xc()?0:I("Coast"))||Yc()||(Xc()?0:I("Edge"))||(Xc()?Wc("Microsoft Edge"):I("Edg/"))||(Xc()?Wc("Opera"):I("OPR"))||Zc()||I("Silk")||I("Android"))&&!(bd()||I("iPad")||I("iPod"));var md={},nd=null;function od(a,b){Ma(a);b===void 0&&(b=0);pd();b=md[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function qd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;rd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function rd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=nd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
pd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function pd(){if(!nd){nd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));md[c]=d;for(var e=0;e<d.length;e++){var f=d[e];nd[f]===void 0&&(nd[f]=e)}}}}
;var sd=typeof Uint8Array!=="undefined",td=!ed&&typeof btoa==="function",ud=/[-_.]/g,vd={"-":"+",_:"/",".":"="};function wd(a){return vd[a]||""}
var xd={};function yd(a,b){zd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
yd.prototype.sizeBytes=function(){zd(xd);var a=this.h;if(!(a==null||sd&&a!=null&&a instanceof Uint8Array))if(typeof a==="string")if(td){ud.test(a)&&(a=a.replace(ud,wd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=qd(a);else La(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Ad;function zd(a){if(a!==xd)throw Error("illegal external caller");}
;var Bd=void 0;function Cd(a){a=Error(a);Tb(a,"warning");return a}
function Dd(a,b){if(a!=null){var c;var d=(c=Bd)!=null?c:Bd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),Tb(a,"incident"),Pc(a))}}
;var Ed=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Fd(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var Gd=Fd("jas",void 0,!0),Hd=Fd(void 0,"1oa"),Id=Fd(void 0,"0actk"),Jd=Fd("m_m","Jh",!0),Kd=Fd(void 0,"mrtk"),Ld=Fd(void 0,"vps");Math.max.apply(Math,z(Object.values({lh:1,kh:2,jh:4,oh:8,nh:16,mh:32,Mf:64,qh:128,hh:256,gh:512,Sf:1024,ph:2048,Tf:4096,Nf:8192,ih:16384})));var J=Ed?Gd:"Ee",Md={Ee:{value:0,configurable:!0,writable:!0,enumerable:!1}},Nd=Object.defineProperties;function Od(a,b){Ed||J in a||Nd(a,Md);a[J]|=b}
function Pd(a,b){Ed||J in a||Nd(a,Md);a[J]=b}
;var Qd=typeof Jd==="symbol",Rd={};function L(a){a=a[Jd];var b=a===Rd;Qd&&a&&!b&&Dd(Kd,3);return b}
function Sd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Td,Ud=[];Pd(Ud,55);Td=Object.freeze(Ud);function Vd(a){if(a&2)throw Error();}
var Wd=Object.freeze({});function Xd(){return typeof BigInt==="function"}
;function Yd(a){a.Eh=!0;return a}
;var Zd=Yd(function(a){return typeof a==="number"}),$d=Yd(function(a){return typeof a==="string"}),ae=Yd(function(a){return typeof a==="boolean"});
function be(){var a=ce;return Yd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var de=Yd(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ee=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function fe(a){var b=a;if($d(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Zd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ee?BigInt(a):a=ae(a)?a?"1":"0":$d(a)?a.trim()||"0":String(a)}
var le=Yd(function(a){return ee?a>=ge&&a<=he:a[0]==="-"?ie(a,je):ie(a,ke)}),je=Number.MIN_SAFE_INTEGER.toString(),ge=ee?BigInt(Number.MIN_SAFE_INTEGER):void 0,ke=Number.MAX_SAFE_INTEGER.toString(),he=ee?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ie(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var me=0,ne=0;function oe(a){var b=a>>>0;me=b;ne=(a-b)/4294967296>>>0}
function pe(a){if(a<0){oe(0-a);var b=y(qe(me,ne));a=b.next().value;b=b.next().value;me=a>>>0;ne=b>>>0}else oe(a)}
function re(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Xd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+se(c)+se(a));return c}
function se(a){a=String(a);return"0000000".slice(a.length)+a}
function te(){var a=me,b=ne;b&2147483648?Xd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(qe(a,b)),a=b.next().value,b=b.next().value,a="-"+re(a,b)):a=re(a,b);return a}
function qe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function ue(a){return Array.prototype.slice.call(a)}
;var ve=typeof BigInt==="function"?BigInt.asIntN:void 0,we=Number.isSafeInteger,xe=Number.isFinite,ye=Math.trunc;function ze(a){return a.displayName||a.name||"unknown type name"}
function Ae(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+La(a)+": "+a);return a}
var Be=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ce(a){switch(typeof a){case "bigint":return!0;case "number":return xe(a);case "string":return Be.test(a);default:return!1}}
function De(a){if(typeof a!=="number")throw Cd("int32");if(!xe(a))throw Cd("int32");return a|0}
function Ee(a){return a==null?a:De(a)}
function Fe(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return xe(a)?a|0:void 0}
function Ge(a){var b=0;b=b===void 0?0:b;if(!Ce(a))throw Cd("int64");var c=typeof a;switch(b){case 2048:switch(c){case "string":return He(a);case "bigint":return String(ve(64,a));default:return Ie(a)}case 4096:switch(c){case "string":return Je(a);case "bigint":return fe(ve(64,a));default:return Ke(a)}case 0:switch(c){case "string":return He(a);case "bigint":return fe(ve(64,a));default:return Le(a)}default:return xb(b,"Unknown format requested type for int64")}}
function Me(a){return a==null?a:Ge(a)}
function Ne(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Oe(a){a.indexOf(".");if(Ne(a))return a;if(a.length<16)pe(Number(a));else if(Xd())a=BigInt(a),me=Number(a&BigInt(4294967295))>>>0,ne=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");ne=me=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ne*=1E6,me=me*1E6+d,me>=4294967296&&(ne+=Math.trunc(me/4294967296),ne>>>=0,me>>>=0);b&&(b=y(qe(me,ne)),a=b.next().value,b=b.next().value,me=a,ne=b)}return te()}
function Le(a){Ce(a);a=ye(a);if(!we(a)){pe(a);var b=me,c=ne;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:re(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Ie(a){Ce(a);a=ye(a);if(we(a))a=String(a);else{var b=String(a);Ne(b)?a=b:(pe(a),a=te())}return a}
function He(a){Ce(a);var b=ye(Number(a));if(we(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Oe(a)}
function Je(a){var b=ye(Number(a));if(we(b))return fe(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Xd()?fe(ve(64,BigInt(a))):fe(Oe(a))}
function Ke(a){return we(a)?fe(Le(a)):fe(Ie(a))}
function Pe(a){if(typeof a!=="string")throw Error();return a}
function Qe(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Re(a){return a==null||typeof a==="string"?a:void 0}
function Se(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ze(b)+" but got "+(a&&ze(a.constructor)));}
function Te(a,b,c){if(a!=null&&typeof a==="object"&&L(a))return a;if(Array.isArray(a)){var d=a[J]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Pd(a,e);return new b(a)}}
;var Ue={};function Ve(a){return a}
;function We(a,b,c,d,e){d=d?!!(b&32):void 0;var f=[],g=a.length,h=!1;if(b&64){if(b&256){g--;var k=a[g];var l=g;Sd(k)}else l=4294967295,k=void 0,g&&Sd(a[g-1]);if(!(e||b&512)){h=!0;var m;var n=((m=Xe)!=null?m:Ve)(k?l- -1:b>>15&1023||536870912,-1,a,k);l=n+-1}}else l=4294967295,b&1||(k=g&&a[g-1],Sd(k)?(g--,l=g,n=0):k=void 0);m=void 0;for(var p=0;p<g;p++){var t=a[p];if(t!=null&&(t=c(t,d))!=null)if(p>=l){var v=void 0;((v=m)!=null?v:m={})[p- -1]=t}else f[p]=t}if(k)for(var x in k)a=k[x],a!=null&&(a=c(a,d))!=
null&&(g=+x,g<n?f[g+-1]=a:(g=void 0,((g=m)!=null?g:m={})[x]=a));m&&(h?f.push(m):f[l]=m);e&&Pd(f,b&33522241|(m!=null?290:34));return f}
function Ye(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return le(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[J]|0;return a.length===0&&b&1?void 0:We(a,b,Ye,!1,!1)}if(L(a))return Ze(a);if(a instanceof yd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(td){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):b);
b=btoa(c)}else b=od(b);a=a.h=b}return a}return}return a}
var Xe;function $e(a,b){if(b){Xe=b==null||b===Ve||b[Ld]!==Ue?Ve:b;try{return Ze(a)}finally{Xe=void 0}}return Ze(a)}
function Ze(a){L(a);a=a.F;return We(a,a[J]|0,Ye,void 0,!1)}
;function M(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=a[J]|0;8192&d||!(64&d)||2&d||af();if(d&1024)throw Error("farr");if(d&64)return d&16384||Pd(a,d|16384),a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Sd(g)){d|=256;b=d&512?0:-1;f-=b;if(f>=1024)throw Error("pvtlmt");for(var h in g)e=+h,e<f&&(c[e+b]=g[h],delete g[h]);d=d&-33521665|(f&1023)<<15;break a}}if(b){h=
Math.max(b,e-(d&512?0:-1));if(h>1024)throw Error("spvt");d=d&-33521665|(h&1023)<<15}}}Pd(a,d|16384);return a}
function af(){Dd(Id,5)}
;function bf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[J]|0;if(a.length===0&&c&1)return;if(c&2)return a;var d;if(d=b)d=c===0||!!(c&32)&&!(c&64||!(c&16));return d?(Od(a,34),c&4&&Object.freeze(a),a):We(a,c,bf,b!==void 0,!0)}if(L(a))return L(a),L(a),b=a.F,c=b[J]|0,c&2?a:We(b,c,bf,!0,!0);if(a instanceof yd)return a}
function cf(a){var b=a;L(b);b=b.F;if(!((b[J]|0)&2))return a;b=a=new a.constructor(We(b,b[J]|0,bf,!0,!0));L(b);b=b.F;b[J]&=-3;return a}
;var df=fe(0);function ef(a,b){Object.isExtensible(a);L(a);a=a.F;return ff(a,a[J]|0,b)}
function ff(a,b,c){if(c===-1)return null;var d=c+(b&512?0:-1),e=a.length-1;if(d>=e&&b&256)a=a[e][c];else if(d<=e)a=a[d];else return;return a}
function gf(a,b,c){L(a);var d=a.F;var e=d[J]|0;Vd(e);hf(d,e,b,c);return a}
function hf(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Pd(a,b)):a[f]=d);return b}
function jf(a){return!!(2&a)&&!!(4&a)||!!(1024&a)}
function kf(a,b,c){L(a);var d=a.F;var e=d[J]|0;Vd(e);if(b==null)return hf(d,e,3),a;if(!Array.isArray(b))throw Cd();var f=b[J]|0,g=f,h=jf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=ue(b),g=0,f=lf(f,e),f=mf(f,e,!0),k=!1);f|=21;h=4&f?2048&f?2048:4096&f?4096:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=ue(b),g=0,f=lf(f,e),f=mf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=ue(b),f=lf(f,e),f=mf(f,e,!0)),Pd(b,f));hf(d,e,3,b);return a}
function nf(a,b,c,d){L(a);a=a.F;var e=a[J]|0;Vd(e);if(d==null){var f=of(a);if(pf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=of(a);var g=pf(f,a,e,c);g!==b&&(g&&(e=hf(a,e,g)),f.set(c,b))}hf(a,e,b,d)}
function of(a){if(Ed){var b;return(b=a[Hd])!=null?b:a[Hd]=new Map}if(Hd in a)return a[Hd];b=new Map;Object.defineProperty(a,Hd,{value:b});return b}
function pf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];ff(b,c,g)!=null&&(e!==0&&(c=hf(b,c,e)),e=g)}a.set(d,e);return e}
function qf(a,b,c){L(a);a=a.F;var d=a[J]|0,e=ff(a,d,c);b=Te(e,b,d);b!==e&&b!=null&&hf(a,d,c,b);return b}
function rf(a,b,c){b=qf(a,b,c);if(b==null)return b;L(a);a=a.F;var d=a[J]|0;if(!(d&2)){var e=cf(b);e!==b&&(b=e,hf(a,d,c,b))}return b}
function zc(a,b,c){var d=void 0===Wd?2:4;L(a);var e=a.F[J]|0,f=e,g=!(2&e);e=!1;L(a);a=a.F;var h=!!(2&f),k=h?1:d;e=!!e;g&&(g=!h);d=ff(a,f,c);d=Array.isArray(d)?d:Td;var l=d[J]|0;h=!!(4&l);if(!h){var m=l;m===0&&(m=lf(m,f));l=d;m|=1;var n=f,p=!!(2&m);p&&(n|=2);for(var t=!p,v=!0,x=0,A=0;x<l.length;x++){var H=Te(l[x],b,n);if(H instanceof b){if(!p){L(H);var K=!!((H.F[J]|0)&2);t&&(t=!K);v&&(v=K)}l[A++]=H}}A<x&&(l.length=A);m|=4;m=v?m|16:m&-17;m=t?m|8:m&-9;Pd(l,m);p&&Object.freeze(l);l=m}if(g&&!(8&l||!d.length&&
(k===1||k===4&&32&l))){jf(l)&&(d=ue(d),l=lf(l,f),f=hf(a,f,c,d));b=d;g=l;for(l=0;l<b.length;l++)m=b[l],n=cf(m),m!==n&&(b[l]=n);g|=8;g=b.length?g&-17:g|16;Pd(b,g);l=g}k===1||k===4&&32&l?jf(l)||(f=l,c=!!(32&l),l|=!d.length||16&l&&(!h||c)?2:1024,l!==f&&Pd(d,l),Object.freeze(d)):(k===2&&jf(l)&&(d=ue(d),l=lf(l,f),l=mf(l,f,e),Pd(d,l),f=hf(a,f,c,d)),jf(l)||(c=l,l=mf(l,f,e),l!==c&&Pd(d,l)));return d}
function sf(a,b,c,d){d!=null?Se(d,b):d=void 0;return gf(a,c,d)}
function tf(a,b,c,d){L(a);var e=a.F;var f=e[J]|0;Vd(f);if(d==null)return hf(e,f,c),a;if(!Array.isArray(d))throw Cd();for(var g=d[J]|0,h=g,k=jf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];Se(t,b);k||(L(t),t=!!((t.F[J]|0)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=ue(d),h=0,g=lf(g,f),g=mf(g,f,!0));g!==h&&Pd(d,g);hf(e,f,c,d);return a}
function lf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-1025}
function mf(a,b,c){32&b&&c||(a&=-33);return a}
function Bc(a,b,c){c=c===void 0?0:c;var d;return(d=Fe(ef(a,b)))!=null?d:c}
function uf(a,b,c){c=c===void 0?df:c;a=ef(a,b);b=typeof a;a=a==null?a:b==="bigint"?fe(ve(64,a)):Ce(a)?b==="string"?Je(a):Ke(a):void 0;return a!=null?a:c}
function vf(a,b){var c=c===void 0?"":c;var d;return(d=Re(ef(a,b)))!=null?d:c}
function wf(a){var b=b===void 0?0:b;a=ef(a,1);a=a==null?a:xe(a)?a|0:void 0;return a!=null?a:b}
function xf(a,b,c){return gf(a,b,Qe(c))}
function yf(a,b,c){c=Qe(c);L(a);a=a.F;var d=a[J]|0;Vd(d);hf(a,d,b,c===""?void 0:c)}
function zf(a,b,c){if(c!=null){if(!xe(c))throw Cd("enum");c|=0}return gf(a,b,c)}
;function N(a,b,c){a=M(a,b,c);L(this);this.F=a}
N.prototype.toJSON=function(){return $e(this)};
N.prototype.serialize=function(a){return JSON.stringify($e(this,a))};
function Af(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Od(b,32);return new a(b)}
N.prototype.clone=function(){var a=this;L(a);var b=a;L(b);b=b.F;b=a=new a.constructor(We(b,b[J]|0,bf,!0,!0));L(b);b=b.F;b[J]&=-3;return a};
N.prototype[Jd]=Rd;N.prototype.toString=function(){L(this);return this.F.toString()};function Bf(){this.ctor=Cf;this.isRepeated=0;this.h=rf;this.defaultValue=void 0}
Bf.prototype.register=function(){cd(this)};function Df(a){return function(b){return Af(a,b)}}
;function Ef(a){a=M(a);L(this);this.F=a}
w(Ef,N);function Ff(a,b){return kf(a,b,De)}
;function Gf(a){a=M(a);L(this);this.F=a}
w(Gf,N);var Hf=[1,2,3];function If(a){a=M(a);L(this);this.F=a}
w(If,N);var Jf=[1,2,3];function Kf(a){a=M(a);L(this);this.F=a}
w(Kf,N);function Lf(a){a=M(a);L(this);this.F=a}
w(Lf,N);function Mf(a){a=M(a);L(this);this.F=a}
w(Mf,N);function Nf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Of(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],A=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var K=A^v&(x^A);var ca=1518500249}else K=v^x^A,ca=1859775393;else t<60?(K=v&x|A&(v|x),ca=2400959708):(K=v^x^A,ca=3395469782);K=((n<<5|n>>>27)&4294967295)+K+H+ca+p[t]&4294967295;H=A;A=x;x=(v<<30|v>>>2)&4294967295;v=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+H&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,he:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function Pf(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Qf(Nf(d),a,c||null)].join(" "):null}
function Qf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Lb(d,function(h){e.push(h)}),Rf(e.join(" "));
var f=[],g=[];Lb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Lb(d,function(h){e.push(h)});
a=Rf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Rf(a){var b=Of();b.update(a);return b.he().toLowerCase()}
;function Sf(a){this.h=a||{cookie:""}}
r=Sf.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Vb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.af;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Vb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=cb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Vb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=cb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Tf=new Sf(typeof document=="undefined"?null:document);function Uf(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new Sf(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function Vf(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new Sf(document)).get(b));return a?Pf(a,c,d):null}
function Wf(a){var b=Nf(String(D.location.href)),c=[];if(Uf()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new Sf(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?Pf(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=Vf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Vf("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function Xf(){}
Xf.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
Xf.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function Yf(a){a=M(a);L(this);this.F=a}
w(Yf,N);function Zf(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return $a()};
this.i=this.h()}
Zf.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Zf.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Zf.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Zf.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function $f(a){a=M(a);L(this);this.F=a}
w($f,N);function ag(a){a=M(a);L(this);this.F=a}
w(ag,N);function bg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=bg.prototype;r.clone=function(){return new bg(this.x,this.y)};
r.equals=function(a){return a instanceof bg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function cg(a,b){this.width=a;this.height=b}
r=cg.prototype;r.clone=function(){return new cg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function dg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function eg(a){var b=fg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gg(a){for(var b in a)return!1;return!0}
function hg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ig(a){return a!==null&&"privembed"in a?a.privembed:!1}
function jg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lg(a[c]);return b}
var mg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ng(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mg.length;f++)c=mg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function og(a,b){this.h=a===pg&&b||""}
og.prototype.toString=function(){return this.h};
var pg={};new og(pg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function qg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function rg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function sg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function tg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ug(a){a=M(a);L(this);this.F=a}
w(ug,N);ug.prototype.oc=function(){return wf(this)};function vg(a){a=M(a);L(this);this.F=a}
w(vg,N);function wg(a){a=M(a);L(this);this.F=a}
w(wg,N);function xg(a,b){tf(a,vg,1,b)}
;function yg(a){a=M(a);L(this);this.F=a}
w(yg,N);var zg=["platform","platformVersion","architecture","model","uaFullVersion"],Ag=new wg,Bg=null;function Cg(a,b){b=b===void 0?zg:b;if(!Bg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new vg;f=xf(f,1,e.brand);return xf(f,2,e.version)});
xg(gf(Ag,2,Ae(a.mobile)),c);Bg=a.getHighEntropyValues(b)}var d=new Set(b);return Bg.then(function(e){var f=Ag.clone();d.has("platform")&&xf(f,3,e.platform);d.has("platformVersion")&&xf(f,4,e.platformVersion);d.has("architecture")&&xf(f,5,e.architecture);d.has("model")&&xf(f,6,e.model);d.has("uaFullVersion")&&xf(f,7,e.uaFullVersion);return f}).catch(function(){return Ag.clone()})}
;function Dg(a){a=M(a);L(this);this.F=a}
w(Dg,N);function Eg(a){a=M(a,4);L(this);this.F=a}
w(Eg,N);function Fg(a){a=M(a,36);L(this);this.F=a}
w(Fg,N);function Gg(a){a=M(a,19);L(this);this.F=a}
w(Gg,N);Gg.prototype.Yb=function(a){return zf(this,2,a)};function Hg(a,b){this.Wa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Gg;Number.isInteger(a)&&this.h.Yb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Ig(this,new Dg)}
Hg.prototype.Yb=function(a){this.h.Yb(a);return this};
function Ig(a,b){sf(a.h,Dg,1,b);wf(b)||zf(b,1,1);a.Wa||(b=Jg(a),vf(b,5)||xf(b,5,a.locale));a.j&&(b=Jg(a),rf(b,wg,9)||sf(b,wg,9,a.j))}
function Kg(a,b){a.i=b}
function Lg(a){var b=b===void 0?zg:b;var c=a.Wa?void 0:window;c?Cg(c,b).then(function(d){a.j=d;d=Jg(a);sf(d,wg,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Jg(a){a=rf(a.h,Dg,1);var b=rf(a,yg,11);b||(b=new yg,sf(a,yg,11,b));return b}
function Mg(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(qf(rf(a.h,Dg,1),yg,11)!==void 0){var h=Jg(a);var k=new ug;k=zf(k,1,a.i);k=gf(k,2,Ae(a.isFinal));d=gf(k,3,Ee(d>0?d:void 0));d=gf(d,4,Ee(f>0?f:void 0));d=gf(d,5,Ee(g>0?g:void 0));L(d);f=d.F;g=f[J]|0;d=g&2?d:new d.constructor(We(f,g,bf,!0,!0));sf(h,ug,10,d)}a=a.h.clone();h=Date.now().toString();a=gf(a,4,Me(h));b=b.slice();b=tf(a,Fg,3,b);e&&(a=new $f,e=gf(a,13,Ee(e)),a=new ag,e=sf(a,$f,
2,e),a=new Eg,e=sf(a,ag,1,e),e=zf(e,2,9),sf(b,Eg,18,e));c&&gf(b,14,Me(c));return b}
;var Ng=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Og(a){this.h=this.i=this.j=a}
Og.prototype.reset=function(){this.h=this.i=this.j};
Og.prototype.getValue=function(){return this.i};function Pg(a){a=M(a,8);L(this);this.F=a}
w(Pg,N);var Qg=Df(Pg);function Cf(a){a=M(a);L(this);this.F=a}
w(Cf,N);var Rg=new Bf;function Sg(a){G.call(this);var b=this;this.componentId="";this.h=[];this.Qa="";this.pageId=null;this.eb=this.ma=-1;this.G=this.experimentIds=null;this.D=this.o=0;this.U=null;this.Z=this.ha=0;this.Kb=1;this.timeoutMillis=0;this.xa=!1;this.logSource=a.logSource;this.ib=a.ib||function(){};
this.j=new Hg(a.logSource,a.Wa);this.network=a.network||null;this.ob=a.ob||null;this.bufferSize=1E3;this.P=a.yf||null;this.sessionIndex=a.sessionIndex||null;this.Qb=a.Qb||!1;this.logger=null;this.withCredentials=!a.pd;this.Wa=a.Wa||!1;this.Y=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Pa=typeof URLSearchParams!=="undefined"&&!!(new URL(Tg())).searchParams&&!!(new URL(Tg())).searchParams.set;var c=zf(new Dg,1,1);Ig(this.j,c);this.u=new Og(1E4);a=Ug(this,a.kd);
this.i=new Zf(this.u.getValue(),a);this.Fa=new Zf(6E5,a);this.Qb||this.Fa.start();this.Wa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){Vg(b);var d;(d=b.U)==null||d.flush()}}),document.addEventListener("pagehide",function(){Vg(b);
var d;(d=b.U)==null||d.flush()}))}
w(Sg,G);function Ug(a,b){return a.Pa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
Sg.prototype.ba=function(){Vg(this);this.i.stop();this.Fa.stop();G.prototype.ba.call(this)};
function Wg(a){a.P||(a.P=Tg());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
function Xg(a,b,c){a.U&&a.U.kb(b,c)}
Sg.prototype.log=function(a){Xg(this,2,1);if(this.Pa){a=a.clone();var b=this.Kb++;a=gf(a,21,Me(b));this.componentId&&xf(a,26,this.componentId);b=a;var c=ef(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(ve(64,c)):Ce(c)?e==="string"?He(c):d?Ie(c):Le(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",gf(b,1,Me(d)));d=ef(b,15);d!=null&&(typeof d==="bigint"?le(d)?d=Number(d):(d=ve(64,d),d=le(d)?Number(d):String(d)):d=Ce(d)?typeof d==="number"?Le(d):He(d):
void 0);d==null&&gf(b,15,Me((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),sf(b,Yf,16,d));Xg(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,Xg(this,3,b));this.h.push(a);this.Qb||this.i.enabled||this.i.start()}};
Sg.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.xa&&this.Y)this.j.i=3,Yg(this);else{var d=Date.now();if(this.eb>d&&this.ma<d)b&&b("throttled");else{this.network&&(typeof this.network.oc==="function"?Kg(this.j,this.network.oc()):this.j.i=0);var e=this.h.length,f=Mg(this.j,this.h,this.o,this.D,this.ob,this.ha,this.Z),g=this.ib();if(g&&this.Qa===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=Zg(this,d,g),l=function(p){c.u.reset();c.i.setInterval(c.u.getValue());if(p){var t=null;try{var v=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));t=Qg(v)}catch(x){}t&&(p=Number(uf(t,1,fe("-1"))),p>0&&(c.ma=Date.now(),c.eb=c.ma+p),L(t),t=Rg.ctor?Rg.h(t,Rg.ctor,175237375):Rg.h(t,175237375,null),t=t===null?void 0:t)&&(t=Bc(t,1,-1),t!==-1&&(c.u=new Og(t<1?1:t),c.i.setInterval(c.u.getValue())))}a&&a();c.D=0},m=function(p,t){var v=zc(f,Fg,3);
var x=Number(uf(f,14)),A=c.u;A.h=Math.min(3E5,A.h*2);A.i=Math.min(3E5,A.h+Math.round(.1*(Math.random()-.5)*2*A.h));c.i.setInterval(c.u.getValue());p===401&&g&&(c.Qa=g);x&&(c.o+=x);t===void 0&&(t=c.isRetryable(p));t&&(c.h=v.concat(c.h),c.Qb||c.i.enabled||c.i.start());Xg(c,7,1);b&&b("net-send-failed",p);++c.D},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(p){Xg(c,5,e);k.Dc["Content-Encoding"]="gzip";k.Dc["Content-Type"]="application/binary";k.body=p;k.be=2;n()},function(){Xg(c,6,e);
n()}):n()}}}};
function Zg(a,b,c){c=c===void 0?a.ib():c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(Wg(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,be:1,Dc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function Vg(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Yg(a){$g(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Y=!1);return d})}
function $g(a,b){if(a.h.length!==0){var c=new URL(Wg(a));c.searchParams.delete("format");var d=a.ib();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Mg(a.j,e,a.o,a.D,a.ob,a.ha,a.Z);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.ha=0;a.Z=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
Sg.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function Tg(){return"https://play.google.com/log?format=json&hasfast=true"}
;function ah(){this.Vd=typeof AbortController!=="undefined"}
ah.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:return f=(e=d.Vd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,ya(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Dc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.A(3);break}if((l=b)==null){v.A(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.P=[v.j];v.M=0;v.o=0;clearTimeout(f);Ba(v);break;case 2:m=Aa(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.A(3)}})};
ah.prototype.oc=function(){return 4};function bh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.ob=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
w(bh,G);function ch(a,b){a.i=b;return a}
function dh(a,b){a.network=b;return a}
function gh(a,b){a.h=b}
function hh(a){a.j=!0;return a}
bh.prototype.pd=function(){this.u=!0;return this};
function ih(a){a.network||(a.network=new ah);var b=new Sg({logSource:a.logSource,ib:a.ib?a.ib:Wf,sessionIndex:a.sessionIndex,yf:a.Ua,Wa:a.o,Qb:!1,pd:a.u,kd:a.kd,network:a.network});tc(a,b);if(a.i){var c=a.i,d=Jg(b.j);xf(d,7,c)}b.G=new Xf;a.componentId&&(b.componentId=a.componentId);a.ob&&(b.ob=a.ob);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new Yf),c=b.experimentIds,d=d.serialize(),xf(c,4,d)):b.experimentIds&&gf(b.experimentIds,4));a.j&&(b.xa=b.Y);Lg(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.Yb&&a.network.Yb(a.logSource);a.network.mf&&a.network.mf(b);return b}
;function jh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;G.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new bh(a,"0"),a.componentId=b,tc(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&ch(a,e),g&&dh(a,g),b=ih(a));this.h=b}
w(jh,G);
jh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Mf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Lf;f=xf(f,1,e.i);var g=kh(e);f=kf(f,g,Pe);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Kc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new If;switch(m){case 3:x=Number(x);Number.isFinite(x)&&nf(v,1,Jf,Me(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);nf(v,2,Jf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Kf;p=sf(t,If,2,p);t=l;v=[];x=lh(e);for(var A=0;A<x.length;A++){var H=x[A],K=t[A],ca=new Gf;switch(H){case 3:nf(ca,1,Hf,Qe(String(K)));break;case 2:H=Number(K);Number.isFinite(H)&&nf(ca,2,Hf,Ee(H));break;case 1:nf(ca,3,Hf,Ae(K==="true"))}v.push(ca)}tf(p,Gf,1,v);g.push(p)}}tf(f,Kf,4,g);c.push(f);e.clear()}tf(a,Lf,1,c);b=this.h;if(a instanceof Fg)b.log(a);else try{var da=new Fg,Oa=a.serialize();var Mb=xf(da,8,Oa);b.log(Mb)}catch(ka){Xg(b,
4,1)}this.h.flush()}};function mh(a){this.h=a}
;function nh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function lh(a){return a.fields.map(function(b){return b.fieldType})}
function kh(a){return a.fields.map(function(b){return b.fieldName})}
r=nh.prototype;r.Wd=function(a){var b=C.apply(1,arguments),c=this.Kc(b);c?c.push(new mh(a)):this.Hd(a,b)};
r.Hd=function(a){var b=this.jd(C.apply(1,arguments));this.h.set(b,[new mh(a)])};
r.Kc=function(){var a=this.jd(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.ue=function(){var a=this.Kc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.jd=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function oh(a,b){nh.call(this,a,3,b)}
w(oh,nh);oh.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.ue(b);d&&(c=d.h);this.Hd(c+a,b)};function ph(a,b){nh.call(this,a,2,b)}
w(ph,nh);ph.prototype.record=function(a){this.Wd(a,C.apply(1,arguments))};function qh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
qh.prototype.stopPropagation=function(){this.j=!0};
qh.prototype.preventDefault=function(){this.defaultPrevented=!0};function rh(a,b){qh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(rh,qh);
rh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&rh.Aa.preventDefault.call(this)};
rh.prototype.stopPropagation=function(){rh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
rh.prototype.preventDefault=function(){rh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sh="closure_listenable_"+(Math.random()*1E6|0);var th=0;function uh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qc=e;this.key=++th;this.Xb=this.hc=!1}
function vh(a){a.Xb=!0;a.listener=null;a.proxy=null;a.src=null;a.qc=null}
;function wh(a){this.src=a;this.listeners={};this.h=0}
wh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=xh(a,b,d,e);g>-1?(b=a[g],c||(b.hc=!1)):(b=new uh(b,this.src,f,!!d,e),b.hc=c,a.push(b));return b};
wh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=xh(e,b,c,d);return b>-1?(vh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function yh(a,b){var c=b.type;c in a.listeners&&Rb(a.listeners[c],b)&&(vh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function xh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Xb&&f.listener==b&&f.capture==!!c&&f.qc==d)return e}return-1}
;var zh="closure_lm_"+(Math.random()*1E6|0),Ah={},Bh=0;function Ch(a,b,c,d,e){if(d&&d.once)Dh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ch(a,b[f],c,d,e);else c=Eh(c),a&&a[sh]?a.listen(b,c,Na(d)?!!d.capture:!!d,e):Fh(a,b,c,!1,d,e)}
function Fh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=Gh(a);h||(a[zh]=h=new wh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Hh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ng||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ih(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Bh++}}
function Hh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Jh;return a}
function Dh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Dh(a,b[f],c,d,e);else c=Eh(c),a&&a[sh]?Kh(a,b,c,Na(d)?!!d.capture:!!d,e):Fh(a,b,c,!0,d,e)}
function Lh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Lh(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=Eh(c),a&&a[sh])?a.i.remove(String(b),c,d,e):a&&(a=Gh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=xh(b,c,d,e)),(c=a>-1?b[a]:null)&&Mh(c))}
function Mh(a){if(typeof a!=="number"&&a&&!a.Xb){var b=a.src;if(b&&b[sh])yh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ih(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Bh--;(c=Gh(b))?(yh(c,a),c.h==0&&(c.src=null,b[zh]=null)):vh(a)}}}
function Ih(a){return a in Ah?Ah[a]:Ah[a]="on"+a}
function Jh(a,b){if(a.Xb)a=!0;else{b=new rh(b,this);var c=a.listener,d=a.qc||a.src;a.hc&&Mh(a);a=c.call(d,b)}return a}
function Gh(a){a=a[zh];return a instanceof wh?a:null}
var Nh="__closure_events_fn_"+(Math.random()*1E9>>>0);function Eh(a){if(typeof a==="function")return a;a[Nh]||(a[Nh]=function(b){return a.handleEvent(b)});
return a[Nh]}
;function Oh(){G.call(this);this.i=new wh(this);this.xa=this;this.Z=null}
ab(Oh,G);Oh.prototype[sh]=!0;r=Oh.prototype;r.addEventListener=function(a,b,c,d){Ch(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Lh(this,a,b,c,d)};
function Ph(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new qh(b,a):b instanceof qh?b.target=b.target||a:(e=b,b=new qh(c,a),ng(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Qh(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Qh(g,c,!0,b)&&e,b.j||(e=Qh(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Qh(g,c,!1,b)&&e}
r.ba=function(){Oh.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Kh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,vh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Qh(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Xb&&g.capture==c){var h=g.listener,k=g.qc||g.src;g.hc&&yh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Rh=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Sh(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Sh.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Th(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Uh(){this.i=this.h=null}
Uh.prototype.add=function(a,b){var c=Vh.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Uh.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Vh=new Sh(function(){return new Wh},function(a){return a.reset()});
function Wh(){this.next=this.scope=this.h=null}
Wh.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Wh.prototype.reset=function(){this.next=this.scope=this.h=null};var Xh,Yh=!1,Zh=new Uh;function $h(a,b){Xh||ai();Yh||(Xh(),Yh=!0);Zh.add(a,b)}
function ai(){var a=Promise.resolve(void 0);Xh=function(){a.then(bi)}}
function bi(){for(var a;a=Zh.remove();){try{a.h.call(a.scope)}catch(b){Pc(b)}Th(Vh,a)}Yh=!1}
;function ci(){}
function di(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function ei(a){this.X=0;this.ab=void 0;this.vb=this.Sa=this.parent_=null;this.pc=this.Jc=!1;if(a!=ci)try{var b=this;a.call(void 0,function(c){fi(b,2,c)},function(c){fi(b,3,c)})}catch(c){fi(this,3,c)}}
function gi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
gi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var hi=new Sh(function(){return new gi},function(a){a.reset()});
function ii(a,b,c){var d=hi.get();d.i=a;d.h=b;d.context=c;return d}
function ji(a){return new ei(function(b,c){c(a)})}
ei.prototype.then=function(a,b,c){return ki(this,Rh(typeof a==="function"?a:null),Rh(typeof b==="function"?b:null),c)};
ei.prototype.$goog_Thenable=!0;function li(a,b,c,d){mi(a,ii(b||ci,c||null,d))}
r=ei.prototype;r.finally=function(a){var b=this;a=Rh(a);return new Promise(function(c,d){li(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Fc=function(a,b){return ki(this,null,Rh(a),b)};
r.catch=ei.prototype.Fc;r.cancel=function(a){if(this.X==0){var b=new ni(a);$h(function(){oi(this,b)},this)}};
function oi(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?oi(c,b):(f?(d=f,d.next==c.vb&&(c.vb=d),d.next=d.next.next):pi(c),qi(c,e,3,b)))}a.parent_=null}else fi(a,3,b)}
function mi(a,b){a.Sa||a.X!=2&&a.X!=3||ri(a);a.vb?a.vb.next=b:a.Sa=b;a.vb=b}
function ki(a,b,c,d){var e=ii(null,null,null);e.child=new ei(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ni?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;mi(a,e);return e.child}
r.wf=function(a){this.X=0;fi(this,2,a)};
r.xf=function(a){this.X=0;fi(this,3,a)};
function fi(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.wf,f=a.xf;if(d instanceof ei){li(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if(typeof k==="function"){si(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,ri(a),b!=3||c instanceof ni||ti(a,c))}}
function si(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ri(a){a.Jc||(a.Jc=!0,$h(a.pe,a))}
function pi(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.vb=null);return b}
r.pe=function(){for(var a;a=pi(this);)qi(this,a,this.X,this.ab);this.Jc=!1};
function qi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.pc;a=a.parent_)a.pc=!1;if(b.child)b.child.parent_=null,ui(b,c,d);else try{b.j?b.i.call(b.context):ui(b,c,d)}catch(e){vi.call(null,e)}Th(hi,b)}
function ui(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ti(a,b){a.pc=!0;$h(function(){a.pc&&vi.call(null,b)})}
var vi=Pc;function ni(a){bb.call(this,a)}
ab(ni,bb);ni.prototype.name="cancel";function wi(a,b){Oh.call(this);this.j=a||1;this.h=b||D;this.o=Xa(this.sf,this);this.u=$a()}
ab(wi,Oh);r=wi.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.sf=function(){if(this.enabled){var a=$a()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),Ph(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=$a())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){wi.Aa.ba.call(this);this.stop();delete this.h};function xi(a){G.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new wi(this.flushInterval);this.h.listen("tick",this.ac,!1,this);tc(this,this.h)}
w(xi,G);r=xi.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function yi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.ac()}
r.ac=function(){var a=this.i.values();a=[].concat(z(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);zi(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Mb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new oh(a,b))};
r.Hc=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new ph(a,b))};
function Ai(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Jb=function(a){this.Ud(a,1,C.apply(1,arguments))};
r.Ud=function(a,b){var c=C.apply(2,arguments),d=Ai(this,a);d&&d instanceof oh&&(d.j(b,c),yi(this))};
r.record=function(a,b){var c=C.apply(2,arguments),d=Ai(this,a);d&&d instanceof ph&&(d.record(b,c),yi(this))};
function zi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Bi(){}
Bi.prototype.serialize=function(a){var b=[];Ci(this,a,b);return b.join("")};
function Ci(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ci(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Di(d,c),c.push(":"),Ci(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Di(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ei={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Fi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Di(a,b){b.push('"',a.replace(Fi,function(c){var d=Ei[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ei[c]=d);return d}),'"')}
;function Gi(){Oh.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.ma="";this.ha=!1}
ab(Gi,Oh);var Hi=/^https?$/i,Ii=["POST","PUT"],Ji=[];function Ki(a,b,c,d,e,f,g){var h=new Gi;Ji.push(h);b&&h.listen("complete",b);Kh(h,"ready",h.de);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Gi.prototype;r.de=function(){this.dispose();Rb(Ji,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=Rh(Xa(this.Ad,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Li(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Kb(Ii,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.ma&&(this.J.responseType=this.ma);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.uf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Li(this,g)}};
r.uf=function(){typeof Ka!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Ph(this,"timeout"),this.abort(8))};
function Li(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Mi(a);Ni(a)}
function Mi(a){a.P||(a.P=!0,Ph(a,"complete"),Ph(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,Ph(this,"complete"),Ph(this,"abort"),Ni(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Ni(this,!0));Gi.Aa.ba.call(this)};
r.Ad=function(){this.ea||(this.U||this.D||this.j?Oi(this):this.Me())};
r.Me=function(){Oi(this)};
function Oi(a){if(a.h&&typeof Ka!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Ad.bind(a),0);else if(Ph(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Pi(a))Ph(a,"complete"),Ph(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Mi(a)}}finally{Ni(a)}}}
function Ni(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||Ph(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function Pi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=ac(1,String(a.Y)),!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Hi.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Qi(){}
Qi.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Ki(a.url,function(d){d=d.target;if(Pi(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Dc,a.timeoutMillis,a.withCredentials)};
Qi.prototype.oc=function(){return 1};function Ri(a,b){this.logger=a;this.event=b;this.startTime=Si()}
Ri.prototype.done=function(){this.logger.Ub(this.event,Si()-this.startTime)};
function Ti(){Ec.apply(this,arguments)}
w(Ti,Ec);function Ui(a,b){var c=Si();b=b();a.Ub("n",Si()-c);return b}
function Vi(){Ti.apply(this,arguments)}
w(Vi,Ti);r=Vi.prototype;r.Oc=function(){};
r.Cb=function(){};
r.Ub=function(){};
r.Ha=function(){};
r.Cc=function(){};
r.Md=function(){};
function Wi(a){return{qf:new Hc(a),errorCount:new Lc(a),eventCount:new Jc(a),oe:new Kc(a),ai:new Ic(a),ci:new Mc(a),uh:new Nc(a),bi:new Oc(a)}}
function Xi(a,b,c,d){a=hh(dh(ch(new bh(1828,"0"),a),new Qi));b.length&&gh(a,Ff(new Ef,b));d!==void 0&&(a.Ua=d);var e=new jh(1828,"","",!1,"",ih(a));tc(e,a);var f=new xi({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.ac()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Yi(a,b){G.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(Yi,G);function Zi(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Si());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Si(),a.timer=void 0}},b)}}
function $i(a,b,c){Ti.call(this);this.metrics=a;this.Da=b;this.qb=c}
w($i,Ti);$i.prototype.Oc=function(a){this.metrics.qf.record(a,this.Da)};
$i.prototype.Cb=function(a){this.metrics.eventCount.kb(a,this.Da)};
$i.prototype.Ub=function(a,b){this.metrics.oe.record(b,a,this.qb,this.Da)};
$i.prototype.Ha=function(a){this.metrics.errorCount.kb(a,this.qb,this.Da)};
function aj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",qb:a.qb||"",nc:a.nc||[],vc:a.vc|0,Ua:a.Ua,wc:a.wc||function(){},
Ib:a.Ib||function(e,f){return Xi(e,f,c.wc,c.Ua)}};
b=c.Ib("48",c.nc.concat(b));$i.call(this,Wi(b),c.Da,c.qb);var d=this;this.options=c;this.service=b;this.i=!a.Ib;this.h=new Yi(function(){return void d.service.ac()},c.vc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(aj,$i);aj.prototype.Md=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Ib("48",this.options.nc.concat(a));this.h=new Yi(function(){return void b.service.ac()},this.options.vc);
this.metrics=Wi(this.service)};
aj.prototype.Cc=function(){Zi(this.h)};
function Si(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function bj(a){a=M(a);L(this);this.F=a}
w(bj,N);function cj(a){a=M(a);L(this);this.F=a}
w(cj,N);function dj(a){a=M(a,0,"bfkj");L(this);this.F=a}
w(dj,N);var ej=function(a){return Yd(function(b){var c;if(c=b instanceof a)L(b),c=!((b.F[J]|0)&2);return c})}(dj);function Ac(a){a=M(a);L(this);this.F=a}
w(Ac,N);function fj(a){a=M(a);L(this);this.F=a}
w(fj,N);var gj=Df(fj);function hj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ij(a,b,c){if(a.disable)return new Vi;b=b?yc(b):[];if(c)return c.Md(b),c.share();a={Da:a.Da,qb:a.qb,nc:a.Ah,vc:a.Lh,Ua:a.Ua,wc:a.wc,Ib:a.Ib};c=b;c=c===void 0?[]:c;return new aj(a,c)}
function jj(a){function b(v,x,A,H){Promise.resolve().then(function(){k.done();h.Cc();h.dispose();g.resolve({Yd:v,pf:x,Qe:A,wh:H})})}
function c(v,x,A,H){if(!d.logger.ea){var K="k";x?K="h":A&&(K="u");K!=="k"?H!==0&&(d.logger.Cb(K),d.logger.Ub(K,v)):d.i<=0?(d.logger.Cb(K),d.logger.Ub(K,v),d.i=Math.floor(Math.random()*200)):d.i--}}
G.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new fj;if("challenge"in a&&ej(a.challenge)){var e=vf(a.challenge,4);var f=vf(a.challenge,5);vf(a.challenge,7)&&(this.h=gj(vf(a.challenge,7)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var v,x,A;return B(function(H){if(H.h==1)return H.yield(d.j,2);v=H.i;x=v.pf;(A=x)==null||A();H.h=0})});
this.logger=ij(a.yd||{},this.h,a.xh);tc(this,this.logger);var g=new hj;this.j=g.promise;this.logger.Cb("t");var h=this.logger.share(),k=new Ri(h,"t");if(!D[f])throw this.logger.Ha(25),Error("EGOU");if(!D[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=yc(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=Cc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.Zh,c,[f,m],vf(this.h,5))).next().value;this.Yc=g.promise.then(function(){})}catch(v){throw this.logger.Ha(28),
v;
}}
w(jj,G);jj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Yd;return new Promise(function(e){var f=new Ri(b,"n");d(function(g){f.done();b.Oc(g.length);b.Cc();b.dispose();e(g)},[a.wb,
a.bd,a.Af,a.cd])})})};
jj.prototype.dd=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var c=Ui(this.logger,function(){return b.u([a.wb,a.bd,a.Af,a.cd])});
this.logger.Oc(c.length);this.logger.Cc();return c};
jj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Qe)==null||c(a)})};function kj(a){if(!a)return null;a=Re(ef(a,4));return a===null||a===void 0?null:ib(a)}
;function lj(){this.promises={};this.h=null}
function mj(){lj.instance||(lj.instance=new lj);return lj.instance}
function nj(a,b){return oj(a,rf(b,bj,1),rf(b,cj,2),vf(b,3))}
function oj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return pj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){pj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function pj(a,b){return b?qj(b):a?rj(a):Promise.resolve()}
function qj(a){return new Promise(function(b,c){var d=rg("SCRIPT"),e=kj(a);Eb(d,e);d.onload=function(){sg(d);b()};
d.onerror=function(){sg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function rj(a){return new Promise(function(b){var c=rg("SCRIPT");if(a){var d=Re(ef(a,6));d=d===null||d===void 0?null:Bb(d)}else d=null;c.textContent=Cb(d);Db(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);sg(c);b()})}
;var sj=window;function tj(a){var b=uj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function vj(){var a=[];tj(function(b){a.push(b)});
return a}
var uj={Bf:"allow-forms",Cf:"allow-modals",Df:"allow-orientation-lock",Ef:"allow-pointer-lock",Ff:"allow-popups",Gf:"allow-popups-to-escape-sandbox",Hf:"allow-presentation",If:"allow-same-origin",Jf:"allow-scripts",Kf:"allow-top-navigation",Lf:"allow-top-navigation-by-user-activation"},wj=di(function(){return vj()});
function xj(){var a=yj(),b={};Lb(wj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function yj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function zj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Aj=(new Date).getTime();function Bj(a){Oh.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(Cj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Dj(this)}
w(Bj,Oh);function Ej(){var a=Fj;Bj.instance||(Bj.instance=new Bj(a));return Bj.instance}
Bj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Bj.instance};
Bj.prototype.ta=function(){return this.h};
function Dj(a){a.D=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Cj(a),3):c.yield(Cj(a),3);Dj(a);c.h=0})},3E4)}
function Cj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Ph(a,"networkstatus-online"):Ph(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.A(3)}})})}
;function Gj(){this.data=[];this.h=-1}
Gj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Gj.prototype.get=function(a){return!!this.data[a]};
function Hj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Ij(){this.blockSize=-1}
;function Jj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
ab(Jj,Ij);Jj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Kj(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Jj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Kj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Kj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Kj(this,e);f=0;break}}this.i=f;this.o+=b}};
Jj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Kj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Lj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Mj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Nj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Lj(a).match(/\S+/g)||[],b=Kb(a,b)>=0);return b}
function Oj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Nj(a,"inverted-hdpi")&&Mj(a,Array.prototype.filter.call(a.classList?a.classList:Lj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Pj(){}
Pj.prototype.next=function(){return Qj};
var Qj={done:!0,value:void 0};Pj.prototype.tb=function(){return this};function Rj(a){if(a instanceof Sj||a instanceof Tj||a instanceof Uj)return a;if(typeof a.next=="function")return new Sj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Sj(function(){return a[Symbol.iterator]()});
if(typeof a.tb=="function")return new Sj(function(){return a.tb()});
throw Error("Not an iterator or iterable.");}
function Sj(a){this.h=a}
Sj.prototype.tb=function(){return new Tj(this.h())};
Sj.prototype[Symbol.iterator]=function(){return new Uj(this.h())};
Sj.prototype.i=function(){return new Uj(this.h())};
function Tj(a){this.h=a}
w(Tj,Pj);Tj.prototype.next=function(){return this.h.next()};
Tj.prototype[Symbol.iterator]=function(){return new Uj(this.h)};
Tj.prototype.i=function(){return new Uj(this.h)};
function Uj(a){Sj.call(this,function(){return a});
this.j=a}
w(Uj,Sj);Uj.prototype.next=function(){return this.j.next()};function O(a){G.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
ab(O,G);r=O.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.dc(a)}return!1};
r.dc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Rb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.sb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],Vj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.dc(c)}}return f!=0}return!1};
function Vj(a,b,c){$h(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.dc,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){O.Aa.ba.call(this);this.clear();this.j.length=0};function Wj(a){this.h=a}
Wj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Bi).serialize(b))};
Wj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Wj.prototype.remove=function(a){this.h.remove(a)};function Xj(a){this.h=a}
ab(Xj,Wj);function Yj(a){this.data=a}
function Zj(a){return a===void 0||a instanceof Yj?a:new Yj(a)}
Xj.prototype.set=function(a,b){Xj.Aa.set.call(this,a,Zj(b))};
Xj.prototype.i=function(a){a=Xj.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ak(a){this.h=a}
ab(ak,Xj);ak.prototype.set=function(a,b,c){if(b=Zj(b)){if(c){if(c<$a()){ak.prototype.remove.call(this,a);return}b.expiration=c}b.creation=$a()}ak.Aa.set.call(this,a,b)};
ak.prototype.i=function(a){var b=ak.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<$a()||c&&c>$a())ak.prototype.remove.call(this,a);else return b}};function bk(){}
;function ck(){}
ab(ck,bk);ck.prototype[Symbol.iterator]=function(){return Rj(this.tb(!0)).i()};
ck.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function dk(a){this.h=a;this.i=null}
ab(dk,ck);r=dk.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){ek(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){ek(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){ek(this);this.h.removeItem(a)};
r.tb=function(a){ek(this);var b=0,c=this.h,d=new Pj;d.next=function(){if(b>=c.length)return Qj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){ek(this);this.h.clear()};
r.key=function(a){ek(this);return this.h.key(a)};
function ek(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Pc(Error("Storage mechanism: Storage unavailable"))}
;function fk(){var a=null;try{a=D.localStorage||null}catch(b){}dk.call(this,a)}
ab(fk,dk);function gk(a,b){this.i=a;this.h=b+"::"}
ab(gk,ck);gk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
gk.prototype.get=function(a){return this.i.get(this.h+a)};
gk.prototype.remove=function(a){this.i.remove(this.h+a)};
gk.prototype.tb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Pj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},hk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.Zc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var ik={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
rd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},jk={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
rd:function(a){return[].concat.apply([],a)}};
P.nf=function(){hk?(P.rb=Uint8Array,P.Ja=Uint16Array,P.Td=Int32Array,P.assign(P,ik)):(P.rb=Array,P.Ja=Array,P.Td=Array,P.assign(P,jk))};
P.nf();var kk=!0;try{new Uint8Array(1)}catch(a){kk=!1}
function lk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new P.rb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var mk={};mk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var nk={},ok,pk=[],qk=0;qk<256;qk++){ok=qk;for(var rk=0;rk<8;rk++)ok=ok&1?3988292384^ok>>>1:ok>>>1;pk[qk]=ok}nk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^pk[(a^b[d])&255];return a^-1};var sk={};sk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function tk(a){for(var b=a.length;--b>=0;)a[b]=0}
var uk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],vk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],wk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],xk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],yk=Array(576);tk(yk);var zk=Array(60);tk(zk);var Ak=Array(512);tk(Ak);var Bk=Array(256);tk(Bk);var Ck=Array(29);tk(Ck);var Dk=Array(30);tk(Dk);function Ek(a,b,c,d,e){this.Jd=a;this.se=b;this.re=c;this.ke=d;this.Ke=e;this.ud=a&&a.length}
var Fk,Gk,Hk;function Ik(a,b){this.qd=a;this.Eb=0;this.bb=b}
function Jk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Kk(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,Jk(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function Lk(a,b,c){Kk(a,c[b*2],c[b*2+1])}
function Mk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Nk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Mk(d[e]++,e))}
function Ok(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.gb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Hb=0;a.ya=a.matches=0}
function Pk(a){a.ia>8?Jk(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function Qk(a,b,c){Pk(a);Jk(a,c);Jk(a,~c);P.ub(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Rk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Sk(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&Rk(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Rk(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Tk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Pb+d*2]<<8|a.aa[a.Pb+d*2+1];var f=a.aa[a.Nc+d];d++;if(e===0)Lk(a,f,b);else{var g=Bk[f];Lk(a,g+256+1,b);var h=uk[g];h!==0&&(f-=Ck[g],Kk(a,f,h));e--;g=e<256?Ak[e]:Ak[256+(e>>>7)];Lk(a,g,c);h=vk[g];h!==0&&(e-=Dk[g],Kk(a,e,h))}}while(d<a.ya)}Lk(a,256,b)}
function Uk(a,b){var c=b.qd,d=b.bb.Jd,e=b.bb.ud,f=b.bb.ke,g,h=-1;a.Na=0;a.zb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Hb-=d[k*2+1])}b.Eb=h;for(g=a.Na>>1;g>=1;g--)Sk(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],Sk(a,c,1),d=a.da[1],a.da[--a.zb]=g,a.da[--a.zb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Sk(a,c,1);while(a.Na>=
2);a.da[--a.zb]=a.da[1];g=b.qd;k=b.Eb;d=b.bb.Jd;e=b.bb.ud;f=b.bb.se;var l=b.bb.re,m=b.bb.Ke,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.zb]*2+1]=0;for(b=a.zb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Oa+=x*(n+v);e&&(a.Hb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Nk(c,h,a.Ka)}
function Vk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Wk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Lk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Lk(a,l,a.ja),g--),Lk(a,16,a.ja),Kk(a,g-3,2)):g<=10?(Lk(a,17,a.ja),Kk(a,g-3,3)):(Lk(a,18,a.ja),Kk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Xk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var Yk=!1;function Zk(a,b,c){a.aa[a.Pb+a.ya*2]=b>>>8&255;a.aa[a.Pb+a.ya*2+1]=b&255;a.aa[a.Nc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Bk[c]+256+1)*2]++,a.gb[(b<256?Ak[b]:Ak[256+(b>>>7)])*2]++);return a.ya===a.Tb-1}
;function $k(a,b){a.msg=sk[b];return b}
function al(a){for(var b=a.length;--b>=0;)a[b]=0}
function bl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(P.ub(a.output,b.aa,b.Wb,c,a.Fb),a.Fb+=c,b.Wb+=c,a.ed+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Wb=0))}
function cl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Ic===2&&(a.K.Ic=Xk(a));Uk(a,a.uc);Uk(a,a.kc);Vk(a,a.ra,a.uc.Eb);Vk(a,a.gb,a.kc.Eb);Uk(a,a.md);for(e=18;e>=3&&a.ja[xk[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Kk(a,b?1:0,3),Qk(a,c,d);else if(a.strategy===4||g===f)Kk(a,2+(b?1:0),3),Tk(a,yk,zk);else{Kk(a,4+(b?1:0),3);c=a.uc.Eb+1;d=a.kc.Eb+1;e+=1;Kk(a,c-257,5);Kk(a,d-1,5);Kk(a,e-4,4);for(f=0;f<e;f++)Kk(a,
a.ja[xk[f]*2+1],3);Wk(a,a.ra,c-1);Wk(a,a.gb,d-1);Tk(a,a.ra,a.gb)}Ok(a);b&&Pk(a);a.va=a.v;bl(a.K)}
function R(a,b){a.aa[a.pending++]=b}
function dl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function el(a,b){var c=a.xd,d=a.v,e=a.wa,f=a.zd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.td&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Db=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function fl(a){var b=a.la,c;do{var d=a.Rd-a.B-a.v;if(a.v>=b+(b-262)){P.ub(a.window,a.window,b,b,0);a.Db-=b;a.v-=b;a.va-=b;var e=c=a.sc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,P.ub(c,e.input,e.nb,g,f),e.state.wrap===1?e.I=mk(e.I,c,g,f):e.state.wrap===2&&(e.I=nk(e.I,c,g,f)),e.nb+=g,e.pb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.na!==0)}
function gl(a,b){for(var c;;){if(a.B<262){fl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=el(a,c));if(a.T>=3)if(c=Zk(a,a.v-a.Db,a.T-3),a.B-=a.T,a.T<=a.Pc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=Zk(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(cl(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(cl(a,!0),a.K.S===0?3:4):a.ya&&(cl(a,!1),a.K.S===0)?1:2}
function hl(a,b){for(var c,d;;){if(a.B<262){fl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Cd=a.Db;a.T=2;c!==0&&a.wa<a.Pc&&a.v-c<=a.la-262&&(a.T=el(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Db>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=Zk(a,a.v-1-a.Cd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.lb=0;a.T=2;a.v++;if(c&&(cl(a,!1),a.K.S===0))return 1}else if(a.lb){if((c=Zk(a,0,a.window[a.v-1]))&&cl(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.lb=1,a.v++,a.B--}a.lb&&(Zk(a,0,a.window[a.v-1]),a.lb=0);a.sa=a.v<2?a.v:2;return b===4?(cl(a,!0),a.K.S===0?3:4):a.ya&&(cl(a,!1),a.K.S===0)?1:2}
function il(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){fl(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=Zk(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=Zk(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(cl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(cl(a,!0),a.K.S===0?3:4):
a.ya&&(cl(a,!1),a.K.S===0)?1:2}
function jl(a,b){for(var c;;){if(a.B===0&&(fl(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=Zk(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(cl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(cl(a,!0),a.K.S===0?3:4):a.ya&&(cl(a,!1),a.K.S===0)?1:2}
function kl(a,b,c,d,e){this.xe=a;this.Je=b;this.Le=c;this.Ie=d;this.te=e}
var ll;ll=[new kl(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){fl(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,cl(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(cl(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return cl(a,!0),a.K.S===0?3:4;a.v>a.va&&cl(a,!1);return 1}),
new kl(4,4,8,4,gl),new kl(4,5,16,8,gl),new kl(4,6,32,32,gl),new kl(4,4,16,16,hl),new kl(8,16,32,32,hl),new kl(8,16,128,128,hl),new kl(8,32,128,256,hl),new kl(32,128,258,1024,hl),new kl(32,258,258,4096,hl)];
function ml(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Wb=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Bb=-1;this.cb=this.hd=this.la=0;this.window=null;this.Rd=0;this.head=this.Ia=null;this.zd=this.td=this.strategy=this.level=this.Pc=this.xd=this.wa=this.B=this.Db=this.v=this.lb=this.Cd=this.T=this.va=this.Ma=this.La=this.Lc=this.sc=this.R=0;this.ra=new P.Ja(1146);this.gb=new P.Ja(122);this.ja=new P.Ja(78);al(this.ra);al(this.gb);al(this.ja);this.md=this.kc=this.uc=
null;this.Ka=new P.Ja(16);this.da=new P.Ja(573);al(this.da);this.zb=this.Na=0;this.depth=new P.Ja(573);al(this.depth);this.ia=this.oa=this.sa=this.matches=this.Hb=this.Oa=this.Pb=this.ya=this.Tb=this.Nc=0}
function nl(a,b){if(!a||!a.state||b>5||b<0)return a?$k(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return $k(a,a.S===0?-5:-2);c.K=a;var d=c.Bb;c.Bb=b;if(c.status===42)if(c.wrap===2)a.I=0,R(c,31),R(c,139),R(c,8),c.H?(R(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),R(c,c.H.time&255),R(c,c.H.time>>8&255),R(c,c.H.time>>16&255),R(c,c.H.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(R(c,c.H.extra.length&255),R(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=nk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.hd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;dl(c,e+(31-e%31));c.v!==0&&(dl(c,a.I>>>16),dl(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=nk(a.I,c.aa,c.pending-e,e)),bl(a),e=c.pending,c.pending!==c.za));)R(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=nk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=nk(a.I,c.aa,c.pending-e,e)),bl(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=nk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=nk(a.I,c.aa,c.pending-e,e)),bl(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=nk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&bl(a),c.pending+2<=c.za&&(R(c,
a.I&255),R(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(bl(a),a.S===0)return c.Bb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return $k(a,-5);if(c.status===666&&a.na!==0)return $k(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?jl(c,b):c.strategy===3?il(c,b):ll[c.level].te(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Bb=-1),0;if(d===2&&(b===1?(Kk(c,2,3),Lk(c,256,yk),c.ia===16?(Jk(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(Kk(c,0,3),Qk(c,0,0),b===3&&(al(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),bl(a),a.S===0))return c.Bb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.I&255),R(c,a.I>>8&255),R(c,a.I>>16&255),R(c,a.I>>24&255),R(c,a.pb&255),R(c,a.pb>>8&255),R(c,a.pb>>16&255),R(c,a.pb>>24&255)):(dl(c,a.I>>>16),dl(c,a.I&65535));bl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var ol={};ol=function(){this.input=null;this.pb=this.na=this.nb=0;this.output=null;this.ed=this.S=this.Fb=0;this.msg="";this.state=null;this.Ic=2;this.I=0};var pl=Object.prototype.toString;
function ql(a){if(!(this instanceof ql))return new ql(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new ol;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=$k(b,-2);else{e===8&&(e=9);var k=new ml;b.state=k;k.K=b;k.wrap=h;k.H=null;k.hd=e;k.la=1<<k.hd;k.cb=k.la-1;k.Lc=f+7;k.sc=1<<k.Lc;k.La=k.sc-1;k.Ma=~~((k.Lc+3-1)/3);k.window=new P.rb(k.la*2);k.head=new P.Ja(k.sc);k.Ia=new P.Ja(k.la);k.Tb=1<<f+6;k.za=k.Tb*4;k.aa=new P.rb(k.za);k.Pb=1*k.Tb;k.Nc=3*k.Tb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.pb=b.ed=0;b.Ic=2;c=b.state;c.pending=0;c.Wb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Bb=0;if(!Yk){d=Array(16);for(f=g=0;f<28;f++)for(Ck[f]=g,e=0;e<1<<uk[f];e++)Bk[g++]=f;Bk[g-1]=f;for(f=g=0;f<16;f++)for(Dk[f]=g,e=0;e<1<<vk[f];e++)Ak[g++]=f;for(g>>=7;f<30;f++)for(Dk[f]=g<<7,e=0;e<1<<vk[f]-7;e++)Ak[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)yk[e*2+1]=8,e++,d[8]++;for(;e<=255;)yk[e*2+1]=9,e++,d[9]++;for(;e<=279;)yk[e*2+1]=7,e++,d[7]++;for(;e<=287;)yk[e*2+1]=8,e++,d[8]++;Nk(yk,287,d);for(e=0;e<30;e++)zk[e*2+1]=5,zk[e*2]=Mk(e,5);Fk=new Ek(yk,uk,257,286,15);Gk=new Ek(zk,
vk,0,30,15);Hk=new Ek([],wk,0,19,7);Yk=!0}c.uc=new Ik(c.ra,Fk);c.kc=new Ik(c.gb,Gk);c.md=new Ik(c.ja,Hk);c.oa=0;c.ia=0;Ok(c);c=0}else c=$k(b,-2);c===0&&(b=b.state,b.Rd=2*b.la,al(b.head),b.Pc=ll[b.level].Je,b.td=ll[b.level].xe,b.zd=ll[b.level].Le,b.xd=ll[b.level].Ie,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.lb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(sk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=lk(a.dictionary):
pl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=mk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(al(l.head),l.v=0,l.va=0,l.sa=0),c=new P.rb(l.la),P.ub(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.nb;e=a.input;a.na=g;a.nb=0;a.input=f;for(fl(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;fl(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.lb=0;a.nb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(sk[b]);this.rh=!0}}
ql.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=lk(a):pl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.nb=0;c.na=c.input.length;do{c.S===0&&(c.output=new P.rb(d),c.Fb=0,c.S=d);a=nl(c,e);if(a!==1&&a!==0)return rl(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=P.Zc(c.output,c.Fb);b=f;f=f.length;if(f<65537&&(b.subarray&&kk||!b.subarray))b=
String.fromCharCode.apply(null,P.Zc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.Zc(c.output,c.Fb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=$k(c,-2):(c.state=null,a=d===113?$k(c,-3):0)):a=-2,rl(this,a),this.ended=!0,a===0;e===2&&(rl(this,0),c.S=0);return!0};
function rl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):P.rd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function sl(a,b){b=b||{};b.gzip=!0;b=new ql(b);b.push(a,!0);if(b.err)throw b.msg||sk[b.err];return b.result}
;function tl(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Bb(a):null:null}
function ul(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?ib(a):null:null}
;function vl(a){return ib(a===null?"null":a===void 0?"undefined":a)}
;function wl(a){this.name=a}
;var xl=new wl("rawColdConfigGroup");var yl=new wl("rawHotConfigGroup");function zl(a){a=M(a);L(this);this.F=a}
w(zl,N);function Al(a){a=M(a);L(this);this.F=a}
w(Al,N);Al.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new yd(a,xd):Ad||(Ad=new yd(null,xd));else if(a.constructor!==yd)if(sd&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new yd(new Uint8Array(a),xd):Ad||(Ad=new yd(null,xd));else throw Error();return gf(this,1,a)};var Bl=new wl("continuationCommand");var Cl=new wl("webCommandMetadata");var Dl=new wl("signalServiceEndpoint");var El={Rf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Of:"EMBEDDED_PLAYER_MODE_DEFAULT",Qf:"EMBEDDED_PLAYER_MODE_PFP",Pf:"EMBEDDED_PLAYER_MODE_PFL"};var Fl=new wl("feedbackEndpoint");var ce={Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED"};var Gl=new wl("shareEndpoint"),Hl=new wl("shareEntityEndpoint"),Il=new wl("shareEntityServiceEndpoint"),Jl=new wl("webPlayerShareEntityServiceEndpoint");var Kl=new wl("playlistEditEndpoint");var Ll=new wl("modifyChannelNotificationPreferenceEndpoint");var Ml=new wl("unsubscribeEndpoint");var Nl=new wl("subscribeEndpoint");function Ol(){var a=Pl;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Ql(a){E("yt.ads.biscotti.lastId_",a)}
;function Rl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Sl=D.window,Tl,Ul,Vl=(Sl==null?void 0:(Tl=Sl.yt)==null?void 0:Tl.config_)||(Sl==null?void 0:(Ul=Sl.ytcfg)==null?void 0:Ul.data_)||{};E("yt.config_",Vl);function Wl(){Rl(Vl,arguments)}
function S(a,b){return a in Vl?Vl[a]:b}
function Xl(a){var b=Vl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Yl=[];function Zl(a){Yl.forEach(function(b){return b(a)})}
function $l(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){am(b)}}:a}
function am(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Wl("ERRORS",b));Zl(a)}
function bm(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Wl("ERRORS",f))}
;var cm=/^[\w.]*$/,dm={q:!0,search_query:!0};function em(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=fm(f[0]||""),h=fm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Sb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(em);l.args=[{key:m,value:f[1],query:a,method:gm===n?"unchanged":n}];dm.hasOwnProperty(m)||bm(l)}}return c}
var gm=String(em);function hm(a){var b=[];dg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Lb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function im(a){a.charAt(0)==="?"&&(a=a.substring(1));return em(a,"&")}
function jm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),im(a.length>1?a[1]:a[0])):{}}
function km(a,b){return lm(a,b||{},!0)}
function lm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=im(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return hc(a,e)+d}
function mm(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)===d&&(Number(ac(4,b))||null)===(Number(ac(4,a))||null):!0;return a}
function fm(a){return a&&a.match(cm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function nm(a){var b=om;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Aj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Pa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?sj:g;try{var h=g.history.length}catch(Pa){h=0}e.u_his=h;var k;e.u_h=(k=sj.screen)==null?void 0:k.height;var l;e.u_w=(l=sj.screen)==null?void 0:l.width;var m;e.u_ah=(m=sj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=sj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=sj.screen)==null?void 0:p.colorDepth}catch(Pa){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Pa){}try{var x=h.outerWidth;var A=h.outerHeight}catch(Pa){}try{var H=h.innerWidth;var K=h.innerHeight}catch(Pa){}try{var ca=h.screenLeft;var da=h.screenTop}catch(Pa){}try{H=h.innerWidth,K=h.innerHeight}catch(Pa){}try{var Oa=h.screen.availWidth;var Mb=h.screen.availTop}catch(Pa){}t=[ca,da,t,v,Oa,Mb,x,A,H,K];try{var ka=(b.h.top||window).document,Za=
ka.compatMode=="CSS1Compat"?ka.documentElement:ka.body;var Qa=(new cg(Za.clientWidth,Za.clientHeight)).round()}catch(Pa){Qa=new cg(-12245933,-12245933)}ka=Qa;Qa={};var Ra=Ra===void 0?D:Ra;Za=new Gj;"SVGElement"in Ra&&"createElementNS"in Ra.document&&Za.set(0);v=xj();v["allow-top-navigation-by-user-activation"]&&Za.set(1);v["allow-popups-to-escape-sandbox"]&&Za.set(2);Ra.crypto&&Ra.crypto.subtle&&Za.set(3);"TextDecoder"in Ra&&"TextEncoder"in Ra&&Za.set(4);Ra=Hj(Za);Qa.bc=Ra;Qa.bih=ka.height;Qa.biw=
ka.width;Qa.brdim=t.join();b=b.i;b=(Qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Qa.wgl=!!sj.WebGLRenderingContext,Qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var om=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return hm(nm(a))});$a();navigator.userAgent.indexOf(" (CrKey ");var pm="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function qm(){if(!pm)return null;var a=pm();return"open"in a?a:null}
function rm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function sm(a,b){typeof a==="function"&&(a=$l(a));return window.setTimeout(a,b)}
;var tm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(z(tm),["client_dev_set_cookie"]);function T(a){a=um(a);return typeof a==="string"&&a==="false"?!1:!!a}
function wm(a,b){a=um(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function um(a){return S("EXPERIMENT_FLAGS",{})[a]}
function xm(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var ym={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},zm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(z(tm)),Am=!1;function Bm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&$l(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=qm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Cm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Dm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){bm(n)}}l.send(d);return l}
function Dm(a,b){b=b===void 0?{}:b;var c=mm(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in ym){var g=S(ym[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(bc(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=bc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=$b(ac(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!bc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=hm(nm()));return b}
function Em(a,b){b.method="POST";b.postParams||(b.postParams={});return Fm(a,b)}
function Fm(a,b){var c=b.format||"JSON";a=Gm(a,b);var d=Hm(a,b),e=!1,f=Im(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=rm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Jm(a,c,k,b.convertToSafeHtml);l&&(l=Km(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=sm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Gm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=km(a,b);return a}
function Hm(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=im(e),ng(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):fc(e));f=e||f&&!gg(f);!Am&&f&&b.method!=="POST"&&(Am=!0,am(Error("AJAX request with postData should use POST")));return e}
function Jm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,bm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Lm(a):null)e={},Lb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Mm(g)})}d&&Nm(e);
return e}
function Nm(a){if(Na(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=gb();d=new yb(e?e.createHTML(d):d);a[c]=d}else Nm(a[b])}}
function Km(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Lm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Mm(a){var b="";Lb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Cm(a){var b=window.location.search,c=bc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&mm(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=im(b),f={};Lb(zm,function(g){e[g]&&(f[g]=e[g])});
return lm(a,f||{},!1)}
var Im=Bm;var Om=[{Qc:function(a){return"Cannot read property '"+a.key+"'"},
xc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Qc:function(a){return"Cannot call '"+a.key+"'"},
xc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Qc:function(a){return a.key+" is not defined"},
xc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Qm={Ya:[],Ta:[{callback:Pm,weight:500}]};function Pm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Rm(){this.Ta=[];this.Ya=[]}
var Sm;function Tm(){if(!Sm){var a=Sm=new Rm;a.Ya.length=0;a.Ta.length=0;Qm.Ya&&a.Ya.push.apply(a.Ya,Qm.Ya);Qm.Ta&&a.Ta.push.apply(a.Ta,Qm.Ta)}return Sm}
;var Um=new O;function Vm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Wm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Wm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Wm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Wm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Xm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ym(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Vm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ym(f+".ve",g,h,k):0;d+=f;d+=Ym(e,a[e],b,c);if(d>500)break}}else c[b]=Zm(a),d+=c[b].length;else c[b]=Zm(a),d+=c[b].length;return d}
function Ym(a,b,c,d){c+="."+a;a=Zm(b);d[c]=a;return c.length+a.length}
function Zm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function $m(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function an(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function bn(){this.Kd=!0}
function cn(){bn.instance||(bn.instance=new bn);return bn.instance}
function dn(a,b){a={};var c=[];"USER_SESSION_ID"in Vl&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=Wf(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Vl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Vl&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return a}
;var en={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function fn(a,b,c,d,e){Tf.set(""+a,b,{Vb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function gn(a){return Tf.get(""+a,void 0)}
function hn(a,b,c){Tf.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function jn(){if(T("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!Tf.isEnabled())return!1;if(Tf.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?Tf.set("TESTCOOKIESENABLED","1",{Vb:60,af:"none",secure:!0}):Tf.set("TESTCOOKIESENABLED","1",{Vb:60});if(Tf.get("TESTCOOKIESENABLED")!=="1")return!1;Tf.remove("TESTCOOKIESENABLED");return!0}
;var kn=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",kn);function ln(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=gn(this.h);a&&this.parse(a)}
var mn;function nn(){mn||(mn=new ln);return mn}
r=ln.prototype;r.get=function(a,b){on(a);pn(a);a=kn[a]!==void 0?kn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){on(a);pn(a);if(b==null)throw Error("ExpectedNotNull");kn[a]=b.toString()};
function qn(a){return!!((rn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){on(a);pn(a);delete kn[a]};
r.clear=function(){for(var a in kn)delete kn[a]};
function pn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function on(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function rn(a){a=kn[a]!==void 0?kn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(kn[d]=c.toString())}};var sn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},tn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function un(){var a=D.navigator;return a?a.connection:void 0}
function vn(){var a=un();if(a){var b=sn[a.type||"unknown"]||"CONN_UNKNOWN";a=sn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function wn(){var a=un();if(a!=null&&a.effectiveType)return tn.hasOwnProperty(a.effectiveType)?tn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(z(b));Object.setPrototypeOf(this,this.constructor.prototype)}
w(U,Error);function xn(){try{return yn(),!0}catch(a){return!1}}
function yn(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function zn(){}
function An(a,b){return Fj.Ra(a,0,b)}
zn.prototype.pa=function(a,b){return this.Ra(a,1,b)};
zn.prototype.Lb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Bn=wm("web_emulated_idle_callback_delay",300),Cn=1E3/60-3,Dn=[8,5,4,3,2,1,0];
function En(a){a=a===void 0?{}:a;G.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(Dn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Gc=a.timeout||1;this.G=Cn;this.D=0;this.xa=this.Ne.bind(this);this.Kb=this.tf.bind(this);this.Pa=this.Xd.bind(this);this.Qa=this.ye.bind(this);this.eb=this.Ue.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ma=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(En,G);r=En.prototype;r.Lb=function(a){var b=$a();Fn(this,a);a=$a()-b;this.u||(this.G-=a)};
r.Ra=function(a,b,c){++this.Z;if(b===10)return this.Lb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Gn(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Hn(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function In(a){return!a.isHidden()&&a.ma}
function Gn(a){if(a.i[8].length){if(a.U)return 4;if(In(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?In(a)?3:2:1;return 0}
r.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function Fn(a,b){try{b()}catch(c){a.Ha(c)}}
function Jn(a){for(var b=y(Dn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.ye=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Kn(this,b);this.ha=!1};
r.tf=function(){Kn(this)};
r.Xd=function(){Ln(this)};
r.Ue=function(a){this.U=!0;var b=Gn(this);b===4&&b!==this.D&&(this.stop(),this.start());Kn(this,void 0,a);this.U=!1};
r.Ne=function(){this.isHidden()||Ln(this);this.h&&(this.stop(),this.start())};
function Ln(a){a.stop();a.u=!0;for(var b=$a(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Fn(a,e)}Mn(a);a.u=!1;Jn(a)&&a.start();b=$a()-b;a.G-=b}
function Mn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Kn(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=$a()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Fn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!($a()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Fn(a,c)}while(c&&$a()<b)}a.u=!1;Mn(a);a.G=Cn;Jn(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Gn(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Bn);break;case 2:this.h=window.setTimeout(this.Kb,this.Gc);break;case 3:this.h=window.requestAnimationFrame(this.eb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){Hn(this);this.stop();this.ma&&document.removeEventListener("visibilitychange",this.xa);G.prototype.ba.call(this)};var Nn=F("yt.scheduler.instance.timerIdMap_")||{},On=wm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Pn=0,Qn=0;function Rn(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new En(S("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Sn(){Tn();var a=F("ytglobal.schedulerInstanceInstance_");a&&(rc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Tn(){Hn(Rn());for(var a in Nn)Nn.hasOwnProperty(a)&&delete Nn[Number(a)]}
function Un(a,b,c){if(!c)return c=c===void 0,-Rn().Ra(a,b,c);var d=window.setTimeout(function(){var e=Rn().Ra(a,b);Nn[d]=e},c);
return d}
function Vn(a){Rn().Lb(a)}
function Wn(a){var b=Rn();if(a<0)b.qa(-a);else{var c=Nn[a];c?(b.qa(c),delete Nn[a]):window.clearTimeout(a)}}
function Xn(){Yn()}
function Yn(){window.clearTimeout(Pn);Rn().start()}
function Zn(){Rn().pause();window.clearTimeout(Pn);Pn=window.setTimeout(Xn,On)}
function $n(){window.clearTimeout(Qn);Qn=window.setTimeout(function(){ao(0)},On)}
function ao(a){$n();var b=Rn();b.o=a;b.start()}
function bo(a){$n();var b=Rn();b.o>a&&(b.o=a,b.start())}
function co(){window.clearTimeout(Qn);var a=Rn();a.o=0;a.start()}
;function eo(){zn.apply(this,arguments)}
w(eo,zn);function fo(){eo.instance||(eo.instance=new eo);return eo.instance}
eo.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):sm(a,c||0)};
eo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
eo.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
eo.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var Fj=fo();
T("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Sn),E("yt.scheduler.instance.addJob",Un),E("yt.scheduler.instance.addImmediateJob",Vn),E("yt.scheduler.instance.cancelJob",Wn),E("yt.scheduler.instance.cancelAllJobs",Tn),E("yt.scheduler.instance.start",Yn),E("yt.scheduler.instance.pause",Zn),E("yt.scheduler.instance.setPriorityThreshold",ao),E("yt.scheduler.instance.enablePriorityThreshold",bo),E("yt.scheduler.instance.clearPriorityThreshold",co),E("yt.scheduler.initialized",
!0));function go(a){var b=new fk;this.h=(a=b.isAvailable()?a?new gk(b,a):b:null)?new ak(a):null;this.i=document.domain||window.location.hostname}
go.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Bi).serialize(b))}catch(f){return}else e=escape(b);fn(a,e,c,this.i)};
go.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=gn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
go.prototype.remove=function(a){this.h&&this.h.remove(a);hn(a,"/",this.i)};var ho=function(){var a;return function(){a||(a=new go("ytidb"));return a}}();
function io(){var a;return(a=ho())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var jo=[],ko,lo=!1;function mo(){var a={};for(ko=new no(a.handleError===void 0?oo:a.handleError,a.logEvent===void 0?po:a.logEvent);jo.length>0;)switch(a=jo.shift(),a.type){case "ERROR":ko.Ha(a.payload);break;case "EVENT":ko.logEvent(a.eventType,a.payload)}}
function qo(a){lo||(ko?ko.Ha(a):(jo.push({type:"ERROR",payload:a}),jo.length>10&&jo.shift()))}
function ro(a,b){lo||(ko?ko.logEvent(a,b):(jo.push({type:"EVENT",eventType:a,payload:b}),jo.length>10&&jo.shift()))}
;function so(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function to(a){return a.substr(0,a.indexOf(":"))||a}
;var uo=jd||kd;function vo(a){var b=Tc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var wo={},xo=(wo.AUTH_INVALID="No user identifier specified.",wo.EXPLICIT_ABORT="Transaction was explicitly aborted.",wo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",wo.MISSING_INDEX="Index not created.",wo.MISSING_OBJECT_STORES="Object stores not created.",wo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",wo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",wo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
wo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",wo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",wo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",wo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",wo),yo={},zo=(yo.AUTH_INVALID="ERROR",yo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",yo.EXPLICIT_ABORT="IGNORED",yo.IDB_NOT_SUPPORTED="ERROR",yo.MISSING_INDEX=
"WARNING",yo.MISSING_OBJECT_STORES="ERROR",yo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",yo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",yo.QUOTA_EXCEEDED="WARNING",yo.QUOTA_MAYBE_EXCEEDED="WARNING",yo.UNKNOWN_ABORT="WARNING",yo.INCOMPATIBLE_DB_VERSION="WARNING",yo),Ao={},Bo=(Ao.AUTH_INVALID=!1,Ao.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ao.EXPLICIT_ABORT=!1,Ao.IDB_NOT_SUPPORTED=!1,Ao.MISSING_INDEX=!1,Ao.MISSING_OBJECT_STORES=!1,Ao.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ao.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ao.QUOTA_EXCEEDED=!1,Ao.QUOTA_MAYBE_EXCEEDED=!0,Ao.UNKNOWN_ABORT=!0,Ao.INCOMPATIBLE_DB_VERSION=!1,Ao);function Co(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?xo[a]:c;d=d===void 0?zo[a]:d;e=e===void 0?Bo[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Co.prototype)}
w(Co,U);function Do(a,b){Co.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},xo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Do.prototype)}
w(Do,Co);function Eo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Eo.prototype)}
w(Eo,Error);var Fo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Go(a,b,c,d){b=to(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Co)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Co("QUOTA_EXCEEDED",a);if(ld&&e.name==="UnknownError")return new Co("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Eo)return new Co("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Fo.some(function(f){return e.message.includes(f)}))return new Co("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Co("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Bd:e.name})];e.level="WARNING";return e}
function Ho(a,b,c){var d=io();return new Co("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Io(a){if(!a)throw Error();throw a;}
function Jo(a){return a}
function Ko(a){this.h=a}
function Lo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Lo.all=function(a){return new Lo(new Ko(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ab:0};f.Ab<a.length;f={Ab:f.Ab},++f.Ab)Lo.resolve(a[f.Ab]).then(function(g){return function(h){d[g.Ab]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Lo.resolve=function(a){return new Lo(new Ko(function(b,c){a instanceof Lo?a.then(b,c):b(a)}))};
Lo.reject=function(a){return new Lo(new Ko(function(b,c){c(a)}))};
Lo.prototype.then=function(a,b){var c=this,d=a!=null?a:Jo,e=b!=null?b:Io;return new Lo(new Ko(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Mo(c,c,d,f,g)}),c.i.push(function(){No(c,c,e,f,g)})):c.state.status==="FULFILLED"?Mo(c,c,d,f,g):c.state.status==="REJECTED"&&No(c,c,e,f,g)}))};
Lo.prototype.catch=function(a){return this.then(void 0,a)};
function Mo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Lo?Oo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function No(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Lo?Oo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Oo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Lo?Oo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Po(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Qo(a){return new Promise(function(b,c){Po(a,b,c)})}
function Ro(a){return new Lo(new Ko(function(b,c){Po(a,b,c)}))}
;function So(a,b){return new Lo(new Ko(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var To=window,V=To.ytcsi&&To.ytcsi.now?To.ytcsi.now:To.performance&&To.performance.timing&&To.performance.now&&To.performance.timing.navigationStart?function(){return To.performance.timing.navigationStart+To.performance.now()}:function(){return(new Date).getTime()};function Uo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
r=Uo.prototype;r.add=function(a,b,c){return Vo(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Vo(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return Vo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function Wo(a,b,c){a=a.h.createObjectStore(b,c);return new Xo(a)}
r.delete=function(a,b){return Vo(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Vo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function Yo(a,b,c){return Vo(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Ro(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Vo(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return B(function(A){switch(A.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){A.A(4);break}g++;k=Math.round(V());ya(A,5);l=a.h.transaction(b,e.mode);H=A.yield;var K=new Zo(l);K=$o(K,d);return H.call(A,K,7);case 7:return m=A.i,n=Math.round(V()),ap(a,k,n,g,void 0,b.join(),e),A.return(m);case 5:p=Aa(A);t=Math.round(V());v=Go(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof Co&&!v.h)||g>=f)ap(a,k,t,g,v,b.join(),e),h=v;A.A(2);break;case 4:return A.return(Promise.reject(h))}})}
function ap(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Co&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&ro("QUOTA_EXCEEDED",{dbName:to(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Co&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),ro("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),bp(a,!1,d,f,b,g.tag),qo(e)):bp(a,!0,d,f,b,g.tag)}
function bp(a,b,c,d,e,f){ro("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function Xo(a){this.h=a}
r=Xo.prototype;r.add=function(a,b){return Ro(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Ro(this.h.clear()).then(function(){})};
function cp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Ro(this.h.count(a))};
function dp(a,b){return ep(a,{query:b},function(c){return c.delete().then(function(){return fp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?dp(this,a):Ro(this.h.delete(a))};
r.get=function(a){return Ro(this.h.get(a))};
r.index=function(a){try{return new gp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Eo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function ep(a,b,c){a=a.h.openCursor(b.query,b.direction);return hp(a).then(function(d){return So(d,c)})}
function Zo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Co;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function $o(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
Zo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Co("EXPLICIT_ABORT");};
Zo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Xo(a),this.i.set(a,b));return b};
function gp(a){this.h=a}
r=gp.prototype;r.count=function(a){return Ro(this.h.count(a))};
r.delete=function(a){return ip(this,{query:a},function(b){return b.delete().then(function(){return fp(b)})})};
r.get=function(a){return Ro(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function ip(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return hp(a).then(function(d){return So(d,c)})}
function jp(a,b){this.request=a;this.cursor=b}
function hp(a){return Ro(a).then(function(b){return b?new jp(a,b):null})}
function fp(a){a.cursor.continue(void 0);return hp(a.request)}
jp.prototype.delete=function(){return Ro(this.cursor.delete()).then(function(){})};
jp.prototype.getValue=function(){return this.cursor.value};
jp.prototype.update=function(a){return Ro(this.cursor.update(a))};function kp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new Uo(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.ae,k=c.blocking,l=c.rf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&ro("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:to(a)});var v=f(),x=new Zo(g.transaction);
m&&m(v,function(A){return t.oldVersion<A&&t.newVersion>=A},x);
x.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){ro("IDB_UNEXPECTEDLY_CLOSED",{dbName:to(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function lp(a,b,c){c=c===void 0?{}:c;return kp(a,b,c)}
function mp(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.ae)&&c.addEventListener("blocked",function(){e()}),g.yield(Qo(c),4);
if(g.h!=2)return za(g,0);f=Aa(g);throw Go(f,a,"",-1);})}
;function np(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
np.prototype.i=function(a,b,c){c=c===void 0?{}:c;return lp(a,b,c)};
np.prototype.delete=function(a){a=a===void 0?{}:a;return mp(this.name,a)};
function op(a,b){return new Co("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function pp(a,b){if(!b)throw Ho("openWithToken",to(a.name));return a.open()}
np.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return B(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var A=h=x.i,H=c.options,K=[],ca=y(Object.keys(H.Gb)),da=ca.next();!da.done;da=ca.next()){da=da.value;var Oa=H.Gb[da],Mb=Oa.Ve===void 0?Number.MAX_VALUE:Oa.Ve;!(A.h.version>=Oa.Nb)||A.h.version>=Mb||A.h.objectStoreNames.contains(da)||K.push(da)}k=K;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Gb);
m=h.objectStoreNames();if(c.u<wm("ytidb_reopen_db_retries",0))return c.u++,h.close(),qo(new Co("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<wm("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return qo(new Co("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Do(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,op(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Go(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw op(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,rf:b,upgrade:this.options.upgrade};return this.h=d=a()};var qp=new np("YtIdbMeta",{Gb:{databases:{Nb:1}},upgrade:function(a,b){b(1)&&Wo(a,"databases",{keyPath:"actualName"})}});
function rp(a,b){var c;return B(function(d){if(d.h==1)return d.yield(pp(qp,b),2);c=d.i;return d.return(Vo(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ro(f.h.put(a,void 0)).then(function(){})})}))})}
function sp(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(pp(qp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function tp(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(pp(qp,b),2)):e.h!=3?(d=e.i,e.yield(Vo(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return ep(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return fp(g)})}),3)):e.return(c)})}
function up(a){return tp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function vp(a,b,c){return tp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function wp(a){var b,c;return B(function(d){if(d.h==1)return b=yn("YtIdbMeta hasAnyMeta other"),d.yield(tp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var xp,yp=new function(){}(new function(){});
function zp(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=io();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=uo)f=/WebKit\/([0-9]+)/.exec(Tc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Tc()),f=!(f&&parseInt(f[1],10)>=602));if(f||fd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(rp(d,yp),4);case 4:return e.yield(sp("yt-idb-test-do-not-use",yp),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Ap(){if(xp!==void 0)return xp;lo=!0;return xp=zp().then(function(a){lo=!1;var b;if((b=ho())!=null&&b.h){var c;b={hasSucceededOnce:((c=io())==null?void 0:c.hasSucceededOnce)||a};var d;(d=ho())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Bp(){return F("ytglobal.idbToken_")||void 0}
function Cp(){var a=Bp();return a?Promise.resolve(a):Ap().then(function(b){(b=b?yp:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var Dp=0;function Ep(a,b){Dp||(Dp=Fj.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(Cp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(vp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(mp(f.actualName),7);case 7:return h.yield(sp(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),qo(g),d=!1;case 4:Fj.qa(Dp),Dp=0,d&&Ep(a,b),h.h=0}})}))}
function Fp(){var a;return B(function(b){return b.h==1?b.yield(Cp(),2):(a=b.i)?b.return(wp(a)):b.return(!1)})}
new hj;function Gp(a){if(!xn())throw a=new Co("AUTH_INVALID",{dbName:a}),qo(a),a;var b=yn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Hp(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Cp(),2);case 2:g=m.i;if(!g)throw h=Ho("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),qo(h),h;so(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Gp(a);ya(m,3);return m.yield(rp(k,g),5);case 5:return m.yield(lp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),ya(m,7),m.yield(sp(k.actualName,
g),9);case 9:za(m,8);break;case 7:Aa(m);case 8:throw l;}})}
function Ip(a,b,c){c=c===void 0?{}:c;return Hp(a,b,!1,c)}
function Jp(a,b,c){c=c===void 0?{}:c;return Hp(a,b,!0,c)}
function Kp(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(Cp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();so(a);d=Gp(a);return e.yield(mp(d.actualName,b),3)}return e.yield(sp(d.actualName,c),0)})}
function Lp(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(mp(d.actualName,b),2):e.yield(sp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Mp(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Cp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();so("LogsDatabaseV2");return d.yield(up(b),3)}c=d.i;return d.yield(Lp(c,a,b),0)})}
function Np(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(Cp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();so(a);return d.yield(mp(a,b),3)}return d.yield(sp(a,c),0)})}
;function Op(a,b){np.call(this,a,b);this.options=b;so(a)}
w(Op,np);function Pp(a,b){var c;return function(){c||(c=new Op(a,b));return c}}
Op.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Jp:Ip)(a,b,Object.assign({},c))};
Op.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Np:Kp)(this.name,a)};
function Qp(a,b){return Pp(a,b)}
;var Rp={},Sp=Qp("ytGcfConfig",{Gb:(Rp.coldConfigStore={Nb:1},Rp.hotConfigStore={Nb:1},Rp),shared:!1,upgrade:function(a,b){b(1)&&(cp(Wo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),cp(Wo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Tp(a){return pp(Sp(),a)}
function Up(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Tp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Yo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Vp(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Tp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Yo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Wp(a){var b,c;return B(function(d){return d.h==1?d.yield(Tp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Vo(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return ip(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Xp(a){var b,c;return B(function(d){return d.h==1?d.yield(Tp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Vo(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return ip(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Yp(){G.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(z(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Yp,G);Yp.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;G.prototype.ba.call(this)};function Zp(){this.h=0;this.i=new Yp}
function $p(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function aq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.A(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Bp();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(Xp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Up(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function bq(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.A(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Bp())?c?h.A(4):h.yield(Wp(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(Vp(c,b,g,d),0)})}
function cq(){if(!Zp.instance){var a=new Zp;Zp.instance=a}a=Zp.instance;var b=V()-a.h;if(!(a.h!==0&&b<wm("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Zp.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function dq(){return"INNERTUBE_API_KEY"in Vl&&"INNERTUBE_API_VERSION"in Vl}
function eq(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),ze:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),vd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ch:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),Be:S("INNERTUBE_CONTEXT_HL"),Ae:S("INNERTUBE_CONTEXT_GL"),Ce:S("INNERTUBE_HOST_OVERRIDE")||"",De:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Dh:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function fq(a){var b={client:{hl:a.Be,gl:a.Ae,clientName:a.vd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ze}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=xm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.vd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=an()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=vn())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=wn())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=cq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=S("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(im(S("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function gq(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().sh:(a=dn(cn()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var hq=typeof TextEncoder!=="undefined"?new TextEncoder:null,iq=hq?function(a){return hq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var jq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},kq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function lq(a,b){this.version=a;this.args=b}
lq.prototype.serialize=function(){return{version:this.version,args:this.args}};function mq(a,b){this.topic=a;this.h=b}
mq.prototype.toString=function(){return this.topic};var nq=F("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.dc;O.prototype.publish=O.prototype.sb;O.prototype.clear=O.prototype.clear;E("ytPubsub2Pubsub2Instance",nq);var oq=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",oq);var pq=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",pq);var qq=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",qq);
E("ytPubsub2Pubsub2SkipSubKey",null);function rq(a,b){var c=sq();c&&c.publish.call(c,a.toString(),a,b)}
function tq(a){var b=uq,c=sq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(oq[d])try{if(f&&b instanceof mq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Pd){var l=new h;h.Pd=l.version}var m=h.Pd}catch(A){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(A){throw A.message="yt.pubsub2.Data.deserialize(): "+A.message,A;}}catch(A){throw A.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+A.message,A;}a.call(window,f)}catch(A){am(A)}},qq[b.toString()]?F("yt.scheduler.instance")?Fj.pa(g):sm(g,0):g())});
oq[d]=!0;pq[b.toString()]||(pq[b.toString()]=[]);pq[b.toString()].push(d);return d}
function vq(){var a=wq,b=tq(function(c){a.apply(void 0,arguments);xq(b)});
return b}
function xq(a){var b=sq();b&&(typeof a==="number"&&(a=[a]),Lb(a,function(c){b.unsubscribeByKey(c);delete oq[c]}))}
function sq(){return F("ytPubsub2Pubsub2Instance")}
;function yq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&rq("meta_logging_csi_event",{timerName:a,Wh:b})}
;var zq=void 0,Aq=void 0;function Bq(){Aq||(Aq=ul(S("WORKER_SERIALIZATION_URL")));return Aq||void 0}
function Cq(){var a=Bq();zq||a===void 0||(zq=new Worker(jb(a),void 0));return zq}
;var Dq=wm("max_body_size_to_compress",5E5),Eq=wm("min_body_size_to_compress",500),Fq=!0,Gq=0,Hq=0,Iq=wm("compression_performance_threshold_lr",250),Jq=wm("slow_compressions_before_abandon_count",4),Kq=!1,Lq=new Map,Mq=1,Nq=!0;function Oq(){if(typeof Worker==="function"&&Bq()&&!Kq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Lq.get(c.key);d&&(Pq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Lq.delete(c.key))}},b=Cq();
b&&(b.addEventListener("message",a),b.onerror=function(){Lq.clear()},Kq=!0)}}
function Qq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Fq)try{var g=Rq(b);if(g!=null&&(g>Dq||g<Eq))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Nq||!T("initial_gzip_use_main_thread"))){Kq||Oq();var h=Cq();if(h&&!e){Lq.set(Mq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Mq});Mq++;return}}var k=sl(iq(b));Pq(k,f,a,c,d)}}catch(l){bm(l),d(a,c)}else d(a,c)}
function Pq(a,b,c,d,e){Nq=!1;var f=V();b.ticks.gelc=f;Hq++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Iq&&(Gq++,T("abandon_compression_after_N_slow_zips")?Hq===wm("compression_disable_point")&&Gq>Jq&&(Fq=!1):Fq=!1);Sq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Tq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(Fq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Rq(g);if(h!=null&&(h>Dq||h<Eq))return a;c=b?{level:1}:void 0;f=sl(iq(g),c);var k=V();e.ticks.gelc=k;if(b){Hq++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Iq)if(Gq++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Gq/Hq;var l=Jq/wm("compression_disable_point");Hq>0&&Hq%wm("compression_disable_point")===0&&b>=l&&(Fq=!1)}else Fq=!1;Sq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return bm(m),a}}else return a}
function Rq(a){try{return(new Blob(a.split(""))).size}catch(b){return bm(b),null}}
function Sq(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||yq("gel_compression",a,{sampleRate:.1})}
;function Uq(a){a=Object.assign({},a);delete a.Authorization;var b=Wf();if(b){var c=new Jj;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=od(c.digest(),3)}return a}
;var Vq;function Wq(){Vq||(Vq=new go("yt.innertube"));return Vq}
function Xq(a,b,c,d){if(d)return null;d=Wq().get("nextId",!0)||1;var e=Wq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Uq(c),requestTime:Math.round(V())};Wq().set("nextId",d+1,86400,!0);Wq().set("requests",e,86400,!0);return d}
function Yq(a){var b=Wq().get("requests",!0)||{};delete b[a];Wq().set("requests",b,86400,!0)}
function Zq(a){var b=Wq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=Uq(gq(!1));jg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),$q(a,d.method,e,{}));delete b[c]}}Wq().set("requests",b,86400,!0)}}
;function ar(a){this.fc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.yb=function(){};
this.now=Date.now;this.Rb=!1;var b;this.Ld=(b=a.Ld)!=null?b:100;var c;this.Gd=(c=a.Gd)!=null?c:1;var d;this.Ed=(d=a.Ed)!=null?d:2592E6;var e;this.Dd=(e=a.Dd)!=null?e:12E4;var f;this.Fd=(f=a.Fd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.lc=!!a.lc;var h;this.jc=(h=a.jc)!=null?h:.1;var k;this.zc=(k=a.zc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.yb&&(this.yb=a.yb);a.Rb&&(this.Rb=a.Rb);a.fc&&(this.fc=a.fc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Vc=a.Vc;this.Sc=a.Sc;br(this)&&(!this.W||this.W("networkless_logging"))&&cr(this)}
function cr(a){br(a)&&!a.Rb&&(a.h=!0,a.lc&&Math.random()<=a.jc&&a.ga.ce(a.V),dr(a),a.fa.ta()&&a.cc(),a.fa.listen(a.Vc,a.cc.bind(a)),a.fa.listen(a.Sc,a.nd.bind(a)))}
r=ar.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(br(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&er(c,d)}).catch(function(e){er(c,d);
fr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(br(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){fr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
fr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(br(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.xb(d.id,c.V):e=!0;c.fa.mb&&c.W&&c.W("vss_network_hint")&&c.fa.mb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.xb(d.id,c.V)}).catch(function(g){fr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.cc=function(){var a=this;if(!br(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.sd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(er(a,b),3):(a.nd(),c.return());a.i&&(a.i=0,a.cc());c.h=0})},this.Ld))};
r.nd=function(){this.Ca.qa(this.i);this.i=0};
function er(a,b){var c;return B(function(d){switch(d.h){case 1:if(!br(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.He(b.id,a.V),3);case 3:(c=d.i)||a.yb(Error("The request cannot be found in the database."));case 2:if(gr(a,b,a.Ed)){d.A(4);break}a.yb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.xb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=hr(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.xb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function hr(a,b){if(!br(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=ir(f);(h=jr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.zc)){m.A(2);break}if(!a.fa.Ec){m.A(3);break}return m.yield(a.fa.Ec(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Wc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.zc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Gd?m.yield(a.ga.Wc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.xb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.cc()},a.Fd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.xb(b.id,a.V),2);a.fa.mb&&a.W&&a.W("vss_network_hint")&&a.fa.mb(!0);d(e,f);h.h=0})};
return b}
function gr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function dr(a){if(!br(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.sd("QUEUED",a.V).then(function(b){b&&!gr(a,b,a.Dd)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Wc(b.id,a.V),2);dr(a);c.h=0})}):a.fa.ta()&&a.cc()})}
function fr(a,b){a.Sd&&!a.fa.ta()?a.Sd(b):a.handleError(b)}
function br(a){return!!a.V||a.fc}
function ir(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function jr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var kr;
function lr(){if(kr)return kr();var a={};kr=Qp("LogsDatabaseV2",{Gb:(a.LogsRequestsStore={Nb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Wo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),cp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return kr()}
;function mr(a){return pp(lr(),a)}
function nr(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(mr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Yo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();or(c);return g.return(f)})}
function pr(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(mr(b),2);if(m.h!=3)return d=m.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Vo(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return ip(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=V();or(c);return m.return(l)})}
function qr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(mr(b),2);c=d.i;return d.return(Vo(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ro(f.h.put(g,void 0)).then(function(){return g})})}))})}
function rr(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(mr(b),2);e=f.i;return f.return(Vo(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Ro(h.h.put(k,void 0)).then(function(){return k})):Lo.resolve(void 0)})}))})}
function sr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(mr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function tr(a){var b,c;return B(function(d){if(d.h==1)return d.yield(mr(a),2);b=d.i;c=V()-2592E6;return d.yield(Vo(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return ep(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return fp(f)})})}),0)})}
function ur(){B(function(a){return a.yield(Mp(),0)})}
function or(a){T("nwl_csi_killswitch")||yq("networkless_performance",a,{sampleRate:1})}
;var vr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};var wr={},xr=Qp("ServiceWorkerLogsDatabase",{Gb:(wr.SWHealthLog={Nb:1},wr),shared:!0,upgrade:function(a,b){b(1)&&cp(Wo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function yr(a){return pp(xr(),a)}
function zr(a){var b,c;B(function(d){if(d.h==1)return d.yield(yr(a),2);b=d.i;c=V()-2592E6;return d.yield(Vo(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return ep(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return fp(f)})})}),0)})}
function Ar(a){var b;return B(function(c){if(c.h==1)return c.yield(yr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Br={},Cr=0;function Dr(a){var b=b===void 0?{}:b;var c=new Image,d=""+Cr++;Br[d]=c;c.onload=c.onerror=function(){delete Br[d]};
b.Sh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Er;function Fr(){Er||(Er=new go("yt.offline"));return Er}
function Gr(a){if(T("offline_error_handling")){var b=Fr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Fr().set("errors",b,2592E3,!0)}}
;function Hr(){this.h=new Map;this.i=!1}
function Ir(){if(!Hr.instance){var a=F("yt.networkRequestMonitor.instance")||new Hr;E("yt.networkRequestMonitor.instance",a);Hr.instance=a}return Hr.instance}
Hr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Hr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Hr.prototype.removeParams=function(a){return a.split("?")[0]};
Hr.prototype.removeParams=Hr.prototype.removeParams;Hr.prototype.isEndpointCFR=Hr.prototype.isEndpointCFR;Hr.prototype.requestComplete=Hr.prototype.requestComplete;Hr.getInstance=Ir;function Jr(){Oh.call(this);var a=this;this.j=!1;this.h=Ej();this.h.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Fr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;am(d)}Fr().set("errors",{},2592E3,!0)}}})}
w(Jr,Oh);function Kr(){if(!Jr.instance){var a=F("yt.networkStatusManager.instance")||new Jr;E("yt.networkStatusManager.instance",a);Jr.instance=a}return Jr.instance}
r=Jr.prototype;r.ta=function(){return this.h.ta()};
r.mb=function(a){this.h.h=a};
r.we=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.le=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Ec=function(a){a=Cj(this.h,a);a.then(function(b){T("use_cfr_monitor")&&Ir().requestComplete("generate_204",b)});
return a};
Jr.prototype.sendNetworkCheckRequest=Jr.prototype.Ec;Jr.prototype.listen=Jr.prototype.listen;Jr.prototype.enableErrorFlushing=Jr.prototype.le;Jr.prototype.getWindowStatus=Jr.prototype.we;Jr.prototype.networkStatusHint=Jr.prototype.mb;Jr.prototype.isNetworkAvailable=Jr.prototype.ta;Jr.getInstance=Kr;function Lr(a){a=a===void 0?{}:a;Oh.call(this);var b=this;this.h=this.u=0;this.j=Kr();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Mr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Mr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ph(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ph(b,"publicytnetworkstatus-offline")})))}
w(Lr,Oh);Lr.prototype.ta=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Lr.prototype.mb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Lr.prototype.Ec=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Ir().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.mb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Mr(a,b){a.rateLimit?a.h?(Fj.qa(a.u),a.u=Fj.pa(function(){a.o!==b&&(Ph(a,b),a.o=b,a.h=V())},a.rateLimit-(V()-a.h))):(Ph(a,b),a.o=b,a.h=V()):Ph(a,b)}
;var Nr;function Or(){var a=ar.call;Nr||(Nr=new Lr({Ih:!0,zh:!0}));a.call(ar,this,{ga:{ce:tr,xb:sr,sd:pr,He:qr,Wc:rr,set:nr},fa:Nr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;bm(new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else am(b)},
yb:bm,sendFn:Pr,now:V,Sd:Gr,Ca:fo(),Vc:"publicytnetworkstatus-online",Sc:"publicytnetworkstatus-offline",lc:!0,jc:.1,zc:wm("potential_esf_error_limit",10),W:T,Rb:!(xn()&&Qr())});this.j=new hj;T("networkless_immediately_drop_all_requests")&&ur();Np("LogsDatabaseV2")}
w(Or,ar);function Rr(){var a=F("yt.networklessRequestController.instance");a||(a=new Or,E("yt.networklessRequestController.instance",a),T("networkless_logging")&&Cp().then(function(b){a.V=b;cr(a);a.j.resolve();a.lc&&Math.random()<=a.jc&&a.V&&zr(a.V);T("networkless_immediately_drop_sw_health_store")&&Sr(a)}));
return a}
Or.prototype.writeThenSend=function(a,b){b||(b={});b=Tr(a,b);xn()||(this.h=!1);ar.prototype.writeThenSend.call(this,a,b)};
Or.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Tr(a,b);xn()||(this.h=!1);ar.prototype.sendThenWrite.call(this,a,b,c)};
Or.prototype.sendAndWrite=function(a,b){b||(b={});b=Tr(a,b);xn()||(this.h=!1);ar.prototype.sendAndWrite.call(this,a,b)};
Or.prototype.awaitInitialization=function(){return this.j.promise};
function Sr(a){var b;B(function(c){if(!a.V)throw b=Ho("clearSWHealthLogsDb"),b;return c.return(Ar(a.V).catch(function(d){a.handleError(d)}))})}
function Pr(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Ur(a,b);if(T("use_request_time_ms_header"))b.headers&&mm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Bm(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Bm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new oc({url:a});if(k.u?typeof k.i!=="string"||k.i.length===0?0:{version:3,je:k.i,Zd:nc(k.j,"act=1","ri=1",pc(k))}:k.M&&{version:4,je:nc(k.j,"dct=1","suid="+k.o,""),Zd:nc(k.j,"act=1","ri=1","suid="+k.o)}){var l=$b(ac(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(jc),p=ic(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(p+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=
!m;break b}}catch(H){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(H){}A=!1}c=A?!0:!1}else c=!1;c||Dr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Qq(a,b.postBody,b,Fm,d)):Qq(a,JSON.stringify(b.postParams),b,Em,d):Fm(a,b)}
function Tr(a,b){T("use_event_time_ms_header")&&mm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function Ur(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ir().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ir().requestComplete(a,!0);d(e,f)}}
function Qr(){return bc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Vr=!1,Wr=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Vr};E("ytNetworklessLoggingInitializationOptions",Wr);function Xr(){var a;B(function(b){if(b.h==1)return b.yield(Cp(),2);a=b.i;if(!a||!xn()&&!T("nwl_init_require_datasync_id_killswitch")||!Qr())return b.A(0);Vr=!0;Wr.isNwlInitialized=Vr;return b.yield(Rr().awaitInitialization(),0)})}
;function Yr(a){var b=this;this.config_=null;a?this.config_=a:dq()&&(this.config_=eq());An(function(){Zq(b)},5E3)}
Yr.prototype.isReady=function(){!this.config_&&dq()&&(this.config_=eq());return!!this.config_};
function $q(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=Xq(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(H,K){Yq(p);t(H,K)};
c.onFetchSuccess=function(H,K){Yq(p);v(H,K)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Rr().writeThenSend(m,g):Rr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var A=g.postBody;typeof A!=="string"&&(A=JSON.stringify(g.postBody));Qq(m,A,g,Fm,x)}else Qq(m,JSON.stringify(g.postParams),g,Em,x)}else T("web_all_payloads_via_jspb")?Fm(m,g):Em(m,g)}catch(H){if(H.name==="InvalidAccessError")p&&(Yq(p),p=0),bm(Error("An extension is blocking network request."));else throw H;}p&&An(function(){Zq(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&bm(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);am(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Ce)&&(h=f);var k=a.config_.De||!1,l=gq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=km(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?Wr.isNwlInitialized:Vr)?Ap().then(function(n){e(n)}):e(!1)}
;var Zr=0,$r=hd?"webkit":gd?"moz":ed?"ms":dd?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++Zr});var as={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function bs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in as||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function cs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
bs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
bs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
bs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var fg=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",fg);var ds=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",ds);
function es(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Na(e[4])&&Na(d)&&jg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function gs(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=es(a,b,c,d);if(e)return e;e=++ds.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new bs(h);if(!tg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new bs(h);
h.currentTarget=a;return c.call(a,h)};
g=$l(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),hs()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);fg[e]=[a,b,c,g,d];return e}
function is(a){a&&(typeof a=="string"&&(a=[a]),Lb(a,function(b){if(b in fg){var c=fg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?hs()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete fg[b]}}))}
var hs=di(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ns(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=gs(window,"mousemove",Xa(this.Y,this));a=Xa(this.P,this);typeof a==="function"&&(a=$l(a));this.Z=window.setInterval(a,25)}
ab(ns,G);ns.prototype.Y=function(a){a.h===void 0&&cs(a);var b=a.h;a.i===void 0&&cs(a);this.h=new bg(b,a.i)};
ns.prototype.P=function(){if(this.h){var a=V();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
ns.prototype.ba=function(){window.clearInterval(this.Z);is(this.U)};var ps={};
function qs(a){var b=a===void 0?{}:a;a=b.Se===void 0?!1:b.Se;b=b.ne===void 0?!0:b.ne;if(F("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&rs();gs(document,"keydown",rs);gs(document,"keyup",rs);gs(document,"mousedown",rs);gs(document,"mouseup",rs);a?gs(window,"touchmove",function(){ss("touchmove",200)},{passive:!0}):(gs(window,"resize",function(){ss("resize",200)}),b&&gs(window,"scroll",function(){ss("scroll",200)}));
new ns(function(){ss("mouse",100)});
gs(document,"touchstart",rs,{passive:!0});gs(document,"touchend",rs,{passive:!0})}}
function ss(a,b){ps[a]||(ps[a]=!0,Fj.pa(function(){rs();ps[a]=!1},b))}
function rs(){F("_lact",window)==null&&qs();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function ts(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var us=D.ytPubsubPubsubInstance||new O,vs=D.ytPubsubPubsubSubscribedKeys||{},ws=D.ytPubsubPubsubTopicToKeys||{},xs=D.ytPubsubPubsubIsSynchronous||{};function ys(a,b){var c=zs();if(c&&b){var d=c.subscribe(a,function(){function e(){vs[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{xs[a]?e():sm(e,0)}catch(g){am(g)}},void 0);
vs[d]=!0;ws[a]||(ws[a]=[]);ws[a].push(d);return d}return 0}
function As(a){var b=zs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Lb(a,function(c){b.unsubscribeByKey(c);delete vs[c]}))}
function Bs(a,b){var c=zs();c&&c.publish.apply(c,arguments)}
function Cs(a){var b=zs();if(b)if(b.clear(a),a)Ds(a);else for(var c in ws)Ds(c)}
function zs(){return D.ytPubsubPubsubInstance}
function Ds(a){ws[a]&&(a=ws[a],Lb(a,function(b){vs[b]&&delete vs[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.dc;O.prototype.publish=O.prototype.sb;O.prototype.clear=O.prototype.clear;E("ytPubsubPubsubInstance",us);E("ytPubsubPubsubTopicToKeys",ws);E("ytPubsubPubsubIsSynchronous",xs);E("ytPubsubPubsubSubscribedKeys",vs);var Es=Symbol("injectionDeps");function Fs(a){this.name=a}
Fs.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Gs(a){this.key=a}
function Hs(a){return new Gs(a)}
function Is(){this.i=new Map;this.j=new Map;this.h=new Map}
function Js(a,b){a.i.set(b.Bc,b);var c=a.j.get(b.Bc);if(c)try{c.Rh(a.resolve(b.Bc))}catch(d){c.Ph(d)}}
Is.prototype.resolve=function(a){return a instanceof Gs?Ks(this,a.key,[],!0):Ks(this,a,[])};
function Ks(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Od!==void 0)var e=d.Od;else if(d.zf)e=d[Es]?Ls(a,d[Es],c):[],e=d.zf.apply(d,z(e));else if(d.Nd){e=d.Nd;var f=e[Es]?Ls(a,e[Es],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(z(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Vh||a.h.set(b,e);return e}
function Ls(a,b,c){return b?b.map(function(d){return d instanceof Gs?Ks(a,d.key,c,!0):Ks(a,d,c)}):[]}
;var Ms;function Ns(){Ms||(Ms=new Is);return Ms}
;var Os=window;function Ps(){var a,b;return"h5vcc"in Os&&((a=Os.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Os.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Os&&Os.performance.mark&&Os.performance.measure?2:0}
function Qs(a){var b=Ps();switch(b){case 1:Os.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Os.performance.mark(a+"-start");break;case 0:break;default:xb(b,"unknown trace type")}}
function Rs(a){var b=Ps();switch(b){case 1:Os.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Os.performance.mark(c);Os.performance.measure(a,b,c);break;case 0:break;default:xb(b,"unknown trace type")}}
;var Ss=T("web_enable_lifecycle_monitoring")&&Ps()!==0,Ts=T("web_enable_lifecycle_monitoring");function Us(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Vs(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?fo():d;this.j=c;this.scheduler=d;this.i=new hj;this.h=a;for(a={jb:0};a.jb<this.h.length;a={yc:void 0,jb:a.jb},a.jb++)a.yc=this.h[a.jb],c=function(e){return function(){e.yc.Mc();b.h[e.jb].Ac=!0;b.h.every(function(f){return f.Ac===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.yc),d=this.scheduler.Ra(c,d),this.h[a.jb]=Object.assign({},a.yc,{Mc:c,
jobId:d})}
function Ws(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Ac||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Mc,10))}
Vs.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Ac||this.scheduler.qa(b.jobId),b.Ac=!0;this.i.resolve()};
Vs.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Xs(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};Ss&&Qs(this.state)}
r=Xs.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Ss&&Rs(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Ws(this.j),this.j=void 0);Ys(this,a,b);this.state=a;Ss&&Qs(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Zs(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Zs(a,b){var c=b.filter(function(e){return $s(a,e)===10}),d=b.filter(function(e){return $s(a,e)!==10});
return a.D.Uh?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.Ye.apply(a,[c].concat(z(e))),2);a.Id.apply(a,[d].concat(z(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.Ze.apply(a,[c].concat(z(e)));a.Id.apply(a,[d].concat(z(e)))}}
r.Ze=function(a){for(var b=C.apply(1,arguments),c=fo(),d=y(a),e=d.next(),f={};!e.done;f={Sb:void 0},e=d.next())f.Sb=e.value,c.Lb(function(g){return function(){at(g.Sb.name);bt(function(){return g.Sb.callback.apply(g.Sb,z(b))});
ct(g.Sb.name)}}(f))};
r.Ye=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=fo(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.ec=void 0;g=function(k){return function(){at(k.Xa.name);var l=bt(function(){return k.Xa.callback.apply(k.Xa,z(b))});
de(l)?k.ec=T("web_lifecycle_error_handling_killswitch")?l.then(function(){ct(k.Xa.name)}):l.then(function(){ct(k.Xa.name)},function(m){Us(m);
ct(k.Xa.name)}):ct(k.Xa.name)}}(f);
c.Lb(g);return f.ec?h.yield(f.ec,3):h.A(3)}f={Xa:void 0,ec:void 0};e=d.next();return h.A(2)})};
r.Id=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{Mc:function(){at(e.name);bt(function(){return e.callback.apply(e,z(b))});
ct(e.name)},
priority:$s(c,e)}});
d.length&&(this.j=new Vs(d))};
function $s(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function at(a){Ss&&a&&Qs(a)}
function ct(a){Ss&&a&&Rs(a)}
function Ys(a,b,c){Ts&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Xs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function bt(a){if(T("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Us(b)}}
;function dt(a){Xs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var et;w(dt,Xs);dt.prototype.i=function(a,b){var c=this;this.h=An(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
dt.prototype.u=function(a,b){this.h&&(Fj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function ft(){et||(et=new dt);return et}
;var gt=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return gt});function ht(){this.store={};this.h={}}
ht.prototype.storePayload=function(a,b){a=jt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ht.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=kt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,z(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,z(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,z(this.smartExtractMatchingEntries(a))));return c};
ht.prototype.extractMatchingEntries=function(a){a=kt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,z(this.store[a[c]])),delete this.store[a[c]]);return b};
ht.prototype.getSequenceCount=function(a){a=kt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function kt(a,b){var c=jt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&jt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(lt(b.auth,g[0])){var h=b.isJspb;lt(h===void 0?"undefined":h?"true":"false",g[1])&&lt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),lt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function lt(a,b){return a===void 0||a==="undefined"?!0:a===b}
ht.prototype.getSequenceCount=ht.prototype.getSequenceCount;ht.prototype.extractMatchingEntries=ht.prototype.extractMatchingEntries;ht.prototype.smartExtractMatchingEntries=ht.prototype.smartExtractMatchingEntries;ht.prototype.storePayload=ht.prototype.storePayload;function jt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function mt(a,b){if(a)return a[b.name]}
;var nt=wm("initial_gel_batch_timeout",2E3),ot=wm("gel_queue_timeout_max_ms",6E4),pt=wm("gel_min_batch_size",5),qt=void 0;function rt(){this.o=this.h=this.i=0;this.j=!1}
var st=new rt,tt=new rt,ut=new rt,vt=new rt,wt,xt=!0,zt=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",zt);var At={};function Bt(){var a=F("yt.logging.ims");a||(a=new ht,E("yt.logging.ims",a));return a}
function Ct(a,b){if(a.endpoint==="log_event"){Dt();var c=Et(a),d=Ft(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=vr[d||""];var f,g,h,k=Ns().resolve(Hs(Zp))==null?void 0:(f=$p())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Gt(e.tier);if(k===400){Ht(a,b);return}}At[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Bt().storePayload(c,a.payload);It(b,c,d==="gelDebuggingEvent")}}
function It(a,b,c){function d(){Jt({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(qt=new a);a=wm("tvhtml5_logging_max_batch_ads_fork")||wm("tvhtml5_logging_max_batch")||wm("web_logging_max_batch")||100;var f=V(),g=Kt(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Bt().getSequenceCount(b));c>=1E3?d():c>=a?wt||(wt=Lt(function(){d();wt=void 0},0)):f-h>=10&&(Mt(e,b.tier),g.o=f)}
function Ht(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&Bt().storePayload({isJspb:!1},a.payload);Dt();var c=Et(a),d=new Map;d.set(c,[a.payload]);var e=Ft(a.payload)||"";b&&(qt=new b);return new ei(function(f,g){qt&&qt.isReady()?Nt(d,qt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Et(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);zt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Jt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new ei(function(e,f){var g=Kt(c,d),h=g.j;g.j=!1;Ot(g.i);Ot(g.h);g.h=0;qt&&qt.isReady()?d===void 0&&T("enable_web_tiered_gel")?Pt(e,f,a,b,c,300,h):Pt(e,f,a,b,c,d,h):(Mt(c,d),e())})}
function Pt(a,b,c,d,e,f,g){var h=qt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?Bt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Bt().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(At)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?Bt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Bt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete At[l];Nt(k,h,a,b,c,!1,g)}
function Mt(a,b){function c(){Jt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Kt(a,b),e=d===vt||d===ut?5E3:ot;T("web_gel_timeout_cap")&&!d.h&&(e=Lt(function(){c()},e),d.h=e);
Ot(d.i);e=S("LOGGING_BATCH_TIMEOUT",wm("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&xt&&(e=nt);e=Lt(function(){wm("gel_min_batch_size")>0?Bt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=pt&&c():c()},e);
d.i=e}
function Nt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Rc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Uc:void 0,Tc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=lg({context:fq(b.config_||eq())});if(!Ma(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=zt[m])&&
Qt(g.batchRequest,m,n);delete zt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Rt(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Uc=function(p){T("start_client_gcf")&&Fj.pa(function(){return B(function(t){return t.yield(St(p),0)})});
k--;k||c()};
g.Rc=0;g.Tc=function(p){return function(){p.Rc++;if(e.bypassNetworkless&&p.Rc===1)try{$q(b,l,p.batchRequest,Tt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Uc,p.Tc,f)),xt=!1}catch(t){am(t),d()}k--;k||c()}}(g);
try{$q(b,l,g.batchRequest,Tt(e,g.dangerousLogToVisitorSession,g.Uc,g.Tc,f)),xt=!1}catch(p){am(p),d()}}}
function Tt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,th:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Ut()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Rt(a,b,c){Ut()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Wl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Qt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Dt(){var a;(a=F("yt.logging.transport.enableScrapingForTest"))||(a=um("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(gt=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",gt),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0))}
function Ut(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Lt(a,b){return T("transport_use_scheduler")===!1?sm(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?An(function(){if(ft().currentState==="none")a();else{var c={};ft().install((c.none={callback:a},c))}},b):An(a,b)}
function Ot(a){T("transport_use_scheduler")?Fj.qa(a):window.clearTimeout(a)}
function St(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=mt(d,yl),g=(f=d)==null?void 0:f.hotHashData,h=mt(d,xl),l=(k=d)==null?void 0:k.coldHashData,(m=Ns().resolve(Hs(Zp)))?g?e?n.yield(aq(m,g,e),2):n.yield(aq(m,g),2):n.A(2):n.return()):l?h?n.yield(bq(m,l,h),0):n.yield(bq(m,l),0):n.A(0)})}
function Kt(a,b){b=b===void 0?200:b;return a?b===300?vt:tt:b===300?ut:st}
function Ft(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,vr[b])return b}
function Gt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Vt=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Vt);
function Wt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ts();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Vt[b]=b in Vt?Vt[b]+1:0,a.sequence={index:Vt[b],groupKey:b},d.endOfSequence&&delete Vt[d.sequenceGroup]);(d.sendIsolatedPayload?Ht:Ct)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function po(a,b,c){c=c===void 0?{}:c;var d=Yr;S("ytLoggingEventsDefaultDisabled",!1)&&Yr===Yr&&(d=null);Wt(a,b,d,c)}
;function Xt(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Yt=new Set,Zt=0,$t=0,au=0,bu=[],cu=[],du=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function oo(a){eu(a)}
function W(a){eu(a,"WARNING")}
function fu(a){a instanceof Error?eu(a):(a=Na(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",W(a))}
function eu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Zt>=5))){d=[];e=y(cu);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(A){}}d=[].concat(z(bu),z(d));var k=Ub(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=Xm(a.args[p],"params."+p,c,n),n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=Zm(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=Zm(t)}if(d.length)for(p=0;p<d.length&&!(n=Xm(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Tm();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Kh)){a=d.weight;break a}a=y(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=y(Om);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.xc[p.name])for(e=y(c.xc[p.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Qc(f);break}p.params||(p.params={});a=Tm();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new og(pg,"sample")).constructor!==
og&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(p);if(p.sampleWeight!==0&&!Yt.has(p.message)){if(g&&T("web_enable_error_204"))gu(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Um.sb("handleError",p),T("record_app_crashed_web")&&au===0&&p.sampleWeight===1&&(au++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),po("appCrashed",
g)),$t++):b==="WARNING"&&Um.sb("handleWarning",p);if(T("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(du);for(c=a.next();!c.done;c=a.next())if(vo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Xl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(po("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Jt(void 0,void 0,!1))}T("suppress_error_204_logging")||
gu(b,p)}try{Yt.add(p.message)}catch(A){}Zt++}}}
function gu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=S("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Fm(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function hu(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,z(b))}
;function iu(){this.register=new Map}
function ju(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Oh("ABORTED")}
iu.prototype.clear=function(){ju(this);this.register.clear()};
var ku=new iu;var lu=Date.now().toString();
function mu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(lu)for(a=1,b=0;b<lu.length;b++)d[a%16]^=d[(a-1)%16]/4^lu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var nu,ou=D.ytLoggingDocDocumentNonce_;ou||(ou=mu(),E("ytLoggingDocDocumentNonce_",ou));nu=ou;function pu(a){this.h=a}
r=pu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Al;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&gf(a,2,Ee(this.h.veType)),this.h.veCounter!==void 0&&gf(a,6,Ee(this.h.veCounter)),this.h.elementIndex!==void 0&&gf(a,3,Ee(this.h.elementIndex)),this.h.isCounterfactual&&gf(a,5,Ae(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();sf(a,Al,7,b)}this.h.youtubeData!==void 0&&sf(a,zl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function qu(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function ru(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},Wl("client-screen-nonce-store",c));c[b]=a}
function su(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function tu(a){return S(su(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",tu);function uu(){var a=S("csn-to-ctt-auth-info");a||(a={},Wl("csn-to-ctt-auth-info",a));return a}
function vu(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function wu(a){a=qu(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",wu);function xu(a,b,c){var d=uu();(c=wu(c))&&delete d[c];b&&(d[a]=b)}
function yu(a){return uu()[a]}
E("yt_logging_screen.getCttAuthInfo",yu);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==qu(c)||b!==S(su(c)))if(xu(a,d,c),ru(a,c),Wl(su(c),b),b=function(){setTimeout(function(){a&&po("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:nu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function zu(){var a=kg(Au),b;return(new ei(function(c,d){a.onSuccess=function(e){rm(e)?c(new Bu(e)):d(new Cu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Cu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Cu("Request timed out","net.timeout",e))};
b=Fm("//googleads.g.doubleclick.net/pagead/id",a)})).Fc(function(c){if(c instanceof ni){var d;
(d=b)==null||d.abort()}return ji(c)})}
function Cu(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Cu,bb);function Bu(a){this.xhr=a}
;function Du(){this.X=0;this.h=null}
Du.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Eu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Fu(a):this};
Du.prototype.getValue=function(){return this.h};
Du.prototype.isRejected=function(){return this.X==2};
Du.prototype.$goog_Thenable=!0;function Fu(a){var b=new Du;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Eu(a){var b=new Du;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Gu(a){var b=S("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(cc(a)));return a}
function Hu(a){var b={};T("json_condensed_response")&&(b.prettyPrint="false");return a=lm(a,b||{},!1)}
function Iu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:mm(a)?"same-origin":"cors",credentials:mm(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Ju(){return Uf()||(jd||kd)&&vo("applewebkit")&&!vo("version")&&(!vo("safari")||vo("gsa/"))||id&&vo("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Ku(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Lu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in El)if(El[d]==c.embeddedPlayerMode){b=El[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Mu(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Nu;this.isTimeout=a instanceof Cu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ni}
w(Mu,bb);Mu.prototype.name="BiscottiError";function Nu(){bb.call(this,"Biscotti ID is missing from server")}
w(Nu,bb);Nu.prototype.name="BiscottiMissingError";var Au={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ou=null;function Pu(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ju())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(ig(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Lu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Pl(){var a=Pu();if(a!==void 0)return ji(a);Ou||(Ou=zu().then(Qu).Fc(function(b){return Ru(2,b)}));
return Ou}
function Qu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Nu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Nu;a=a.id;Ql(a);Ou=Eu(a);Su(18E5,2);return a}
function Ru(a,b){b=new Mu(b);Ql("");Ou=Fu(b);a>0&&Su(12E4,a-1);throw b;}
function Su(a,b){sm(function(){zu().then(Qu,function(c){return Ru(b,c)}).Fc(ci)},a)}
function Tu(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Pl()}catch(b){return ji(b)}}
;var Gb=ra(["data-"]);function Uu(a){a&&(a.dataset?a.dataset[Vu()]="true":Hb(a))}
function Wu(a){return a?a.dataset?a.dataset[Vu()]:a.getAttribute("data-loaded"):null}
var Xu={};function Vu(){return Xu.loaded||(Xu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Yu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||kg(b);this.assets=a.assets||{};this.attrs=a.attrs||kg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Yu.prototype.clone=function(){var a=new Yu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];La(c)=="object"?a[b]=kg(c):a[b]=c}return a};var Zu=["att/get"],$u=["share/get_share_panel"],av=["share/get_web_player_share_panel"],bv=["feedback"],cv=["notification/modify_channel_preference"],dv=["browse/edit_playlist"],ev=["subscription/subscribe"],fv=["subscription/unsubscribe"];var gv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",gv);function hv(a){Rl(gv,arguments)}
;function iv(a,b,c){jv(a,b,c===void 0?null:c)}
function kv(a){a=lv(a);var b=document.getElementById(a);b&&(Cs(a),b.parentNode.removeChild(b))}
function mv(a,b){a&&b&&(a=""+Sa(b),(a=nv[a])&&As(a))}
function jv(a,b,c){c=c===void 0?null:c;var d=lv(a),e=document.getElementById(d),f=e&&Wu(e),g=e&&!f;f?b&&b():(b&&(f=ys(d,b),b=""+Sa(b),nv[b]=f),g||(e=ov(a,d,function(){Wu(e)||(Uu(e),Bs(d),sm(function(){Cs(d)},0))},c)))}
function ov(a,b,c,d){d=d===void 0?null:d;var e=rg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Eb(e,vl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function lv(a){var b=document.createElement("a");wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var nv={};function pv(a){var b=qv(a),c=document.getElementById(b),d=c&&Wu(c);d||c&&!d||(c=rv(a,b,function(){if(!Wu(c)){Uu(c);Bs(b);var e=Ya(Cs,b);sm(e,0)}}))}
function rv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=vl(a);Jb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function qv(a){var b=rg("A");wb(b,new pb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function sv(a){var b=C.apply(1,arguments);if(!tv(a)||b.some(function(d){return!tv(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())uv(a,c.value)}
function uv(a,b){for(var c in b)if(tv(b[c])){if(c in a&&!tv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});uv(a[c],b[c])}else if(vv(b[c])){if(c in a&&!vv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);wv(a[c],b[c])}else a[c]=b[c];return a}
function wv(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,tv(c)?a.push(uv({},c)):vv(c)?a.push(wv([],c)):a.push(c);return a}
function tv(a){return typeof a==="object"&&!Array.isArray(a)}
function vv(a){return typeof a==="object"&&Array.isArray(a)}
;var xv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function yv(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(Kb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),wb(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:wu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&zv(a,b,f)}else zv(a,b)}
function zv(a,b,c){a=Av(a);b=b?fc(b):"";c=c||5;Ju()&&fn(a,b,c)}
function Av(a){for(var b=y(xv),c=b.next();!c.done;c=b.next())a=lc(a,c.value);return"ST-"+Yb(a).toString(36)}
;function Bv(a){lq.call(this,1,arguments);this.csn=a}
w(Bv,lq);var uq=new mq("screen-created",Bv),Cv=[],Dv=0,Ev=new Map,Fv=new Map,Gv=new Map;
function Hv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Iv({cttAuthInfo:yu(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(gg(k)||!k.trackingParams&&!k.veType)&&W(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Jv(h,b);if(k.veType&&!Fv.has(l)&&!Gv.has(l)&&!e){if(!T("il_attach_cache_limit")||Ev.size<1E3){Ev.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Ev.size>1E3&&W(new U("IL Attach cache exceeded limit"))}h=Jv(c,b);Ev.has(h)?
Kv(c,b):Gv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Ob(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Lv("visualElementAttached",f,c):a?Wt("visualElementAttached",c,a,f):po("visualElementAttached",c,f)}
function Lv(a,b,c){Cv.push({Re:a,payload:c,Fh:void 0,options:b});Dv||(Dv=vq())}
function wq(a){if(Cv){for(var b=y(Cv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,po(c.Re,c.payload,c.options));Cv.length=0}Dv=0}
function Jv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Kv(a,b){a=Jv(a,b);Ev.has(a)&&(b=Ev.get(a)||[],Hv(b[0],b[1],b[2],[b[3]],!0),Ev.delete(a))}
function Iv(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Mv(){try{return!!self.localStorage}catch(a){return!1}}
;function Nv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Ov(a){if(Mv()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Nv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Pv(){if(!Mv())return!1;var a=yn(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Nv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Qv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Rv(a){if(S("LOGGED_IN",!0)&&Qv()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);Kb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=cc(a),(b=dc(b))?(b=Av(b),b=(b=gn(b)||null)?im(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Qv()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&yv(a,b)}}
;function Sv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&yv(a,b);if(c)return!1;Rv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=hc(a,e);Rv(b);a=void 0;a=a===void 0?tb:a;a:if(f=b+f,a=a===void 0?tb:a,!(f instanceof pb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof rb&&c.Fe(f)){f=new pb(f);break a}f=void 0}g=g.location;f=vb(f||qb);f!==void 0&&(g.href=f);return!0}
;function Tv(a){if(ig(S("PLAYER_VARS",{}))!="1"){a&&Ol();try{Tu().then(function(){},function(){}),sm(Tv,18E5)}catch(b){am(b)}}}
;var Uv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Vv(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=$b(ac(5,a));if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=jm(a).theme;return Uv.get(c)||null}catch(d){}return null}
;function Wv(){this.h={};if(this.i=jn()){var a=gn("CONSISTENCY");a&&Xv(this,{encryptedTokenJarContents:a})}}
Wv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Xv(this,a)}};
function Xv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&fn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Yv=window.location.hostname.split(".").slice(-2).join(".");function Zv(){this.j=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=$v(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var aw;function bw(){aw=F("yt.clientLocationService.instance");aw||(aw=new Zv,E("yt.clientLocationService.instance",aw));return aw}
r=Zv.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=$v(this))&&this.h.set("yt-location-playability-token",a,15552E3):fn("YT_CL",JSON.stringify({loctok:a}),15552E3,Yv,!0))};
function $v(a){return a.h===void 0?new go("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=$v(this))&&this.h.remove("yt-location-playability-token"):hn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function cw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=S("INNERTUBE_CONTEXT");if(!d)return eu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=lg(d);T("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;nn();var g="USER_INTERFACE_THEME_LIGHT";qn(165)?g="USER_INTERFACE_THEME_DARK":qn(174)?g="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:Vv()||g;e.userInterfaceTheme=f;if(!b){if(f=vn())e.connectionType=f;T("web_log_effective_connection_type")&&(f=wn())&&(d.client.effectiveConnectionType=f)}var h;if(T("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}T("web_gcf_hashes_innertube")&&(f=cq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=jm(D.location.href);!T("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:D.location.href},T("kevlar_woffle")&&$m.instance&&(k=$m.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=
an(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(k=S("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!T("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Oa){}l=
void 0}l&&(e.timeZone=l)}(l=S("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=xm();Wv.instance||(Wv.instance=new Wv);e=Wv.instance.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!T("web_prequest_context_killswitch")&&(m=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=nn();m=qn(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=
m);l&&(d.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?c&&(b=wu())&&(d.clientScreenNonce=b):!b&&(b=wu())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;bw().setLocationOnInnerTubeContext(d);try{var n=nm(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=y(Object.entries(n)),v=t.next();!v.done;v=t.next()){var x=y(v.value),A=x.next().value,H=x.next().value;n=A;p=H;a=void 0;(a=d.adSignalsInfo.params)==
null||a.push({key:n,value:""+p})}var K,ca;if(((K=d.client)==null?void 0:K.clientName)==="TVHTML5"||((ca=d.client)==null?void 0:ca.clientName)==="TVHTML5_UNPLUGGED"){var da=S("INNERTUBE_CONTEXT");da.adSignalsInfo&&(d.adSignalsInfo.advertisingId=da.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=da.adSignalsInfo.limitAdTracking)}}catch(Oa){eu(Oa)}return d}
;function dw(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),S("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=S("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function ew(){this.h={}}
ew.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
ew.prototype.get=function(a){if(this.contains(a))return this.h[a]};
ew.prototype.set=function(a,b){this.h[a]=b};
ew.prototype.remove=function(a){delete this.h[a]};function fw(){this.mappings=new ew}
fw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
fw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=xb(b)}}return a};
new fw;function gw(a){return function(){return new a}}
;var hw={},iw=(hw.WEB_UNPLUGGED="^unplugged/",hw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",hw.WEB_UNPLUGGED_OPS="^unplugged/",hw.WEB_UNPLUGGED_PUBLIC="^unplugged/",hw.WEB_CREATOR="^creator/",hw.WEB_KIDS="^kids/",hw.WEB_EXPERIMENTS="^experiments/",hw.WEB_MUSIC="^music/",hw.WEB_REMIX="^music/",hw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",hw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",hw);
function jw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=iw[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(iw).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function kw(){}
kw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?en:c;var d={context:cw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+jw(this.j());(e=(f=mt(a.commandMetadata,Cl))==null?void 0:f.apiUrl)&&(b=e);f=Hu(Gu(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Iu(f),Ga:d,config:a};d.config.Ob?d.config.Ob.identity=c:d.config.Ob={identity:c};return d}eu(new U("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(kw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function lw(){}
w(lw,kw);function mw(){}
w(mw,lw);mw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Iu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
mw.prototype.j=function(){return[]};
mw.prototype.i=function(){};
mw.prototype.h=function(){};var nw={},ow=(nw.GET_DATASYNC_IDS=gw(mw),nw);function pw(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function qw(){var a=pw();a.info||(a.info={});return a.info}
function rw(a){a=pw(a);a.metadata||(a.metadata={});return a.metadata}
function sw(a){a=pw(a);a.tick||(a.tick={});return a.tick}
function tw(a){a=pw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function uw(a){a=tw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function vw(a){var b=pw(a).nonce;b||(b=mu(),pw(a).nonce=b);return b}
;function ww(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function xw(a){a=a||"";var b=F("ytcsi.reference");b||(ww(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=ww(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},yw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.editor=
"LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",
X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",X);function zw(a,b){lq.call(this,1,arguments);this.timer=b}
w(zw,lq);var Aw=new mq("aft-recorded",zw);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var Bw=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",Bw);function Cw(){this.h=0}
function Dw(){Cw.instance||(Cw.instance=new Cw);return Cw.instance}
Cw.prototype.tick=function(a,b,c,d){Ew(this,"tick_"+a+"_"+b)||po("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Cw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Ew(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,po("latencyActionInfo",a,{cttAuthInfo:c}))};
Cw.prototype.jspbInfo=function(){};
Cw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Ew(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,po("latencyActionSpan",a,{cttAuthInfo:c}))};
function Ew(a,b){Bw[b]=Bw[b]||{count:0};var c=Bw[b];c.count++;c.time=V();a.h||(a.h=An(function(){var d=V(),e;for(e in Bw)Bw[e]&&d-Bw[e].time>6E4&&delete Bw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||W(c)),!0):!1}
;var Fw=window;function Gw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Hw(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Iw(e.requestStart),e.responseEnd=Iw(e.responseEnd),e.redirectStart=Iw(e.redirectStart),e.redirectEnd=Iw(e.redirectEnd),e.domainLookupEnd=Iw(e.domainLookupEnd),e.connectStart=Iw(e.connectStart),e.connectEnd=
Iw(e.connectEnd),e.responseStart=Iw(e.responseStart),e.secureConnectionStart=Iw(e.secureConnectionStart),e.domainLookupStart=Iw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Iw(a){return Math.round(Jw()+a)}
function Jw(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Fw.performance||Fw.mozPerformance||Fw.msPerformance||Fw.webkitPerformance||new Gw;var Kw=!1,Lw=!1,Mw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ci,Y);function Nw(a,b){if(!T("web_csi_action_sampling_enabled")||!pw(b).actionDisabled){var c=xw(b||"");sv(c.info,a);a.loadType&&(c=a.loadType,rw(b).loadType=c);sv(uw(b),a);c=vw(b);b=pw(b).cttAuthInfo;Dw().info(a,c,b)}}
function Ow(){var a,b,c,d;return((d=Ns().resolve(Hs(Zp))==null?void 0:(a=$p())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!T("web_csi_action_sampling_enabled")||!pw(c).actionDisabled){var d=vw(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(Ns().resolve(Hs(Zp))==null?0:$p())&&!Lw&&(Lw=!0,Z("gcfl",V(),c));var f,g,h;e=(Ns().resolve(Hs(Zp))==null?void 0:(f=$p())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Ow();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;pw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Nw(f,c));pw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=xw(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=tw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=sw(c);e=b||V();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=pw(c).cttAuthInfo;a==="_start"?(a=Dw(),Ew(a,"baseline_"+d)||po("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Dw().tick(a,d,b,f);Pw(c);return e}}}
function Qw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=$r+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Rw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Sw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);zb(document)&&a.setAttribute("nonce",zb(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Jw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Tw(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Nb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Pb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Iw(b.startTime)),Z("wffe",Iw(b.responseEnd)))}
function Uw(a){var b=Vw("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Vw(b[d],a);if(e)return e}return NaN}
function Vw(a,b){if(a=sw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Pw(a){var b=Vw("_start",a),c=Uw(a),d=T("enable_cow_info_csi")||!Kw;b&&c&&d&&(rq(Aw,new zw(Math.round(c-b),a)),Kw=!0)}
function Ww(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Qb(a,function(c){return c.name==="first-paint"}))return Iw(a.startTime)}var b;
T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Mh;return b?Math.max(0,b):0}
;function Xw(a,b){$l(function(){xw("").info.actionType=a;b&&Wl("TIMING_AFT_KEYS",b);Wl("TIMING_ACTION",a);var c=Rw();Object.keys(c).length>0&&Nw(c);c={isNavigation:!0,actionType:yw[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=yw[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=wu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Qw();if(d===1||d===-1)c.isVisible=!0;rw();qw();
c.loadType="cold";d=qw();var e=Hw(),f=Jw(),g=S("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=Ww();d>0&&Z("fpt",d);d=Hw();d.isPerformanceNavigationTiming&&Nw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Jw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Tw();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Mw)Mw.hasOwnProperty(h)&&(e=Mw[h],
Sw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Nw(c);c=tw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=uw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(rw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=sw();e=tw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,Vw(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,sv(c,d),sv(k,d),d=!0;d&&Nw(k)}E("ytglobal.timingready_",!0);k=S("TIMING_ACTION");F("ytglobal.timingready_")&&k&&Yw()&&Uw()&&Pw()})()}
function Yw(a){return $l(function(){return Zw("_start",a)})()}
function $w(a,b,c){$l(Nw)(a,b,c===void 0?!1:c)}
function ax(a,b,c){return $l(Z)(a,b,c)}
function Zw(a,b){return $l(function(){var c=sw(b);return a in c})()}
function bx(a){if(!T("universal_csi_network_ticks"))return"";a=$b(ac(5,a))||"";for(var b=Object.keys(jq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function cx(a){if(!T("universal_csi_network_ticks"))return function(){};
var b=jq[a];return b?(dx(b),function(){var c=T("universal_csi_network_ticks")?(c=kq[a])?dx(c):!1:!1;return c}):function(){}}
function dx(a){return $l(function(){if(Zw(a))return!1;ax(a,void 0,void 0);return!0})()}
function ex(a){$l(function(){if(!Yw("attestation_challenge_fetch")||Zw(a,"attestation_challenge_fetch"))return!1;ax(a,void 0,"attestation_challenge_fetch");return!0})()}
function fx(){$l(function(){var a=vw();requestAnimationFrame(function(){setTimeout(function(){a===vw()&&ax("ol",void 0,void 0)},0)})})()}
var gx=window;gx.ytcsi&&(gx.ytcsi.infoGel=$w,gx.ytcsi.tick=ax);var hx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),ix=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function jx(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Zb||(a.Zb={});a.Zb=Object.assign({},ow,a.Zb)}
function kx(a,b,c,d){if(jx.instance!==void 0){if(d=jx.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else jx.instance=new jx(a,b,c,d)}
function lx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?en:c;var d=mx(a,b);return d?new ei(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.A(0);break}Rv(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Kd){m=nx(h.config,l);n.A(4);break}return n.yield(ox(h.config,l),5);case 5:m=n.i;case 4:e(px(a,h,m)),n.h=
0}})}):ji(new U("Error: No request builder found for command.",b))}
function qx(a,b){function c(){}
var d="/youtubei/v1/"+jw(Zu);var e=e===void 0?{Ob:{identity:en}}:e;var f=f===void 0?!0:f;c=cx(bx(d));b.context||(b.context=cw(void 0,f));return new ei(function(g){var h,k,l,m,n;return B(function(p){if(p.h==1)return h=Gu(d),k=mm(h)?"same-origin":"cors",a.j.Kd?(l=nx(e,k),p.A(2)):p.yield(ox(e,k),3);p.h!=2&&(l=p.i);m=Hu(Gu(d));n={input:m,Za:Iu(m),Ga:b,config:e};g(px(a,n,l,c));p.h=0})})}
function rx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(hx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function px(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,A,H,K,ca,da,Oa,Mb,ka,Za,Qa,Ra,Pa,eh,fh,js,ks,ls,ms;return B(function(ja){switch(ja.h){case 1:ja.A(2);break;case 3:if((e=ja.i)&&!e.isExpired())return ja.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ja.A(4);break}h=b.Ga.context;ja.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ja.A(4);break}m=l.value;return ja.yield(m.Nh(h),9);case 9:l=k.next();ja.A(8);break;case 4:if((n=a.i)==null||!n.Th(b.input,b.Ga)){ja.A(12);break}return ja.yield(a.i.Hh(b.input,
b.Ga),13);case 13:return p=ja.i,rx(a,p,b),ja.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Qh)&&a.h.has(x)?t=a.h.get(x):(A=JSON.stringify(b.Ga),ca=(K=(H=b.Za)==null?void 0:H.headers)!=null?K:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},ca,c)}),da=Object.assign({},b.Za),b.Za.method==="POST"&&(da=Object.assign({},da,{body:A})),((Oa=b.config)==null?0:Oa.We)&&ax(b.config.We),Mb=function(){return a.fa.fetch(b.input,da,b.config)},t=Mb(),x&&a.h.set(x,t)),ja.yield(t,14);
case 14:if((ka=ja.i)&&"error"in ka&&((Za=ka)==null?0:(Qa=Za.error)==null?0:Qa.details))for(Ra=ka.error.details,Pa=y(Ra),eh=Pa.next();!eh.done;eh=Pa.next())fh=eh.value,(js=fh["@type"])&&ix.indexOf(js)>-1&&(delete fh["@type"],ka=fh);x&&a.h.has(x)&&a.h.delete(x);((ks=b.config)==null?0:ks.Xe)&&ax(b.config.Xe);if(ka||(ls=a.i)==null||!ls.vh(b.input,b.Ga)){ja.A(15);break}return ja.yield(a.i.Gh(b.input,b.Ga),16);case 16:ka=ja.i;case 15:return rx(a,ka,b),((ms=b.config)==null?0:ms.Te)&&ax(b.config.Te),d(),
ja.return(ka||void 0)}})}
function mx(a,b){a:{a=a.u;var c,d=(c=mt(b,Dl))==null?void 0:c.signal;if(d&&a.Zb&&(c=a.Zb[d])){var e=c();break a}var f;if((c=(f=mt(b,Bl))==null?void 0:f.request)&&a.ge&&(f=a.ge[c])){e=f();break a}for(e in b)if(a.od[e]&&(b=a.od[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function ox(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Ob)==null?void 0:d.sessionIndex;var h=g.yield;var k=dn(0,{sessionIndex:e});if(!(k instanceof ei)){var l=new ei(ci);fi(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},dw(b),f)))})}
function nx(a,b){var c;a=a==null?void 0:(c=a.Ob)==null?void 0:c.sessionIndex;c=dn(0,{sessionIndex:a});return Object.assign({},dw(b),c)}
;var sx=new Fs("INNERTUBE_TRANSPORT_TOKEN");function tx(){}
w(tx,lw);tx.prototype.j=function(){return ev};
tx.prototype.i=function(a){return mt(a,Nl)||void 0};
tx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(tx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ux(){}
w(ux,lw);ux.prototype.j=function(){return fv};
ux.prototype.i=function(a){return mt(a,Ml)||void 0};
ux.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(ux.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var vx=new Fs("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function wx(a){this.M=a}
w(wx,lw);wx.prototype.j=function(){return $u};
wx.prototype.i=function(a){return mt(a,Hl)||mt(a,Il)||mt(a,Gl)};
wx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
wx[Es]=[vx];function xx(){}
w(xx,lw);xx.prototype.j=function(){return bv};
xx.prototype.i=function(a){return mt(a,Fl)||void 0};
xx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(xx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function yx(){}
w(yx,lw);yx.prototype.j=function(){return cv};
yx.prototype.i=function(a){return mt(a,Ll)||void 0};
yx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function zx(){}
w(zx,lw);zx.prototype.j=function(){return dv};
zx.prototype.i=function(a){return mt(a,Kl)||void 0};
zx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Ax(){}
w(Ax,lw);Ax.prototype.j=function(){return av};
Ax.prototype.i=function(a){return mt(a,Jl)};
Ax.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Bx=new Fs("FETCH_FN_TOKEN"),Cx=new Fs("PARSE_FN_TOKEN"),Dx=new Fs("WINDOW_REQUEST_TOKEN");function Ex(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Ex,U);var Fx=new Fs("NETWORK_SLI_TOKEN");function Gx(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
Gx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return B(function(h){e=Hx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){W(k);
if((c==null?0:c.qe)&&k instanceof Ex&&k.errorType===1)return Promise.reject(k)}))})};
function Hx(a,b,c){if(a.h){var d=$b(ac(5,lc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}d=c;T("wug_networking_gzip_request")&&(d=Tq(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
Gx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.Ge)&&a.ok)return Af(b.Ge,e);e=e.replace(")]}'","");if((b==null?0:b.qe)&&e)try{var f=d(e)}catch(h){throw new Ex(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Bh(),c=c.then(function(e){W(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Gx[Es]=[Hs(Fx),Hs(Bx),Hs(Cx),Hs(Dx)];var Ix=new Fs("NETWORK_MANAGER_TOKEN");var Jx;function Kx(){var a,b;if(!Jx){var c=Ns();Js(c,{Bc:Ix,Nd:Gx});var d={od:{feedbackEndpoint:gw(xx),modifyChannelNotificationPreferenceEndpoint:gw(yx),playlistEditEndpoint:gw(zx),shareEntityEndpoint:gw(wx),subscribeEndpoint:gw(tx),unsubscribeEndpoint:gw(ux),webPlayerShareEntityServiceEndpoint:gw(Ax)}},e=bw(),f={};e&&(f.client_location=e);a===void 0&&(a=cn());b===void 0&&(b=c.resolve(Ix));kx(d,b,a,f);Js(c,{Bc:sx,Od:jx.instance});Jx=c.resolve(sx)}return Jx}
;function Lx(a){var b=new dj;if(a.interpreterJavascript){var c=tl(a.interpreterJavascript);c=Cb(c).toString();var d=new bj;xf(d,6,c);sf(b,bj,1,d)}else a.interpreterUrl&&(c=ul(a.interpreterUrl),c=jb(c).toString(),d=new cj,xf(d,4,c),sf(b,cj,2,d));a.interpreterHash&&yf(b,3,a.interpreterHash);a.program&&yf(b,4,a.program);a.globalName&&yf(b,5,a.globalName);a.clientExperimentsStateBlob&&yf(b,7,a.clientExperimentsStateBlob);return b}
function Mx(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function vc(){if(T("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Nx(a){this.h=a}
Nx.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Nx.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Nx.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function Ox(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Nx(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Nx(c))}))})}
;var Px=[],Qx=!1;function Rx(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ju()){var a=S("PLAYER_VARS",{});if(ig(a)!="1"&&!Lu(a)){var b=function(){Qx=!0;"google_ad_status"in window?Wl("DCLKSTAT",1):Wl("DCLKSTAT",2)};
try{iv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Px.push(Fj.pa(function(){if(!(Qx||"google_ad_status"in window)){try{mv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Qx=!0;Wl("DCLKSTAT",3)}},5E3))}}}
function Sx(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Tx(a){this.h=a}
[new Tx("b.f_"),new Tx("j.s_"),new Tx("r.s_"),new Tx("e.h_"),new Tx("i.s_"),new Tx("s.t_"),new Tx("p.h_"),new Tx("s.i_"),new Tx("f.i_"),new Tx("a.b_"),new Tx("a.o_"),new Tx("g.o_"),new Tx("p.i_"),new Tx("p.m_"),new Tx("n.k_"),new Tx("i.f_"),new Tx("a.s_"),new Tx("m.c_"),new Tx("n.h_"),new Tx("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function Ux(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.Yh){var e=new hj;this.h=e.promise;D.ytAtRC&&Fj.Ra(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=Vx(null);return h.yield(d.hb(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
Ox().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.hb(Vx(n))}),m.yield(uc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,fb:Mx(k),vm:g,bgChallenge:new dj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,fb:Mx(n),vm:g,bgChallenge:new dj};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&Wx(this,new Promise(function(f){An(function(){f(Xx(d))},0)}))}
Ux.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
Ux.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&Wx(d,Xx(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.fb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);ya(n,4);e=!0;if(T("attbs")&&!T("attmusi")){m=k.vm.dd({wb:l});n.A(6);break}return n.yield(k.vm.snapshot({wb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";za(n,3);break;case 4:Aa(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.fb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^Sx()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(S("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),Yx(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function Vx(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function Xx(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:c=Vx(mj().h);if(T("att_fet_ks"))return ya(v,7),v.yield(a.hb(c),9);ya(v,4);return v.yield(Zx(a,c),6);case 6:g=v.i;e=g.Oe;f=g.Pe;d=g;za(v,3);break;case 4:return Aa(v),W(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),$x(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});case 9:d=v.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=Mx(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");za(v,3);break;case 7:h=Aa(v);W(h);b++;if(b>=5)return W(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),$x(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return v.return(new Promise(function(x){An(function(){x(Xx(a,
b))},k)}));
case 3:l=Number(f.t)||7200;$x(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){v.A(10);break}n=Lx(d.bgChallenge);ya(v,11);return v.yield(nj(mj(),n),13);case 13:za(v,12);break;case 11:return p=Aa(v),W(p),v.return({challenge:e,fb:f,vm:m,bgChallenge:n});case 12:return ya(v,14),m=new jj({challenge:n,yd:{Da:"aGIf"}}),v.yield(m.Yc,16);case 16:za(v,10);break;case 14:t=Aa(v),W(t),m=void 0;case 10:return v.return({challenge:e,fb:f,vm:m,bgChallenge:n})}})}
Ux.prototype.hb=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.hb(a));ex("att_pna");return d.return(new Promise(function(e){Kh(c,"publicytnetworkstatus-online",function(){b.network.hb(a).then(e)})}))})};
function ay(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=Mx(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Oe:b,Pe:c})}
function Zx(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.ld=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){An(function(){l(void 0)},k.ld)}}(e)),5);
case 5:return ya(h,7),h.yield(a.hb(b),9);case 9:return f=h.i,h.return(ay(f));case 7:c=g=Aa(h),g instanceof Error&&W(g);case 8:d++;e={ld:void 0};h.A(2);break;case 4:throw c;}})}
function Wx(a,b){a.h=b}
function by(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=Xx(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function $x(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(by(a),0):(An(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function Yx(a,b){return new Promise(function(c){An(function(){c(b())},a)})}
;function cy(){this.h=Kx()}
cy.prototype.hb=function(a){ex("att_fsr");return qx(this.h,a).then(function(b){ex("att_frr");return b})};function dy(){var a,b,c;return B(function(d){if(d.h==1)return a=Ns().resolve(sx),a?d.yield(lx(a),2):(W(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return W(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.yh;return d.return(c)}W(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function ey(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var fy=D.caches,gy;function hy(a){var b=a.indexOf(":");return b===-1?{Bd:a}:{Bd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function iy(){return B(function(a){if(gy!==void 0)return a.return(gy);gy=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return ya(d,2),d.yield(fy.open("test-only"),4);case 4:return d.yield(fy.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(gy)})}
function jy(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(iy(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(fy.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=hy(f),h=g.datasyncId,!h||a.includes(h)||b.push(fy.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function ky(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(iy(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=yn("cache contains other");return h.yield(fy.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=hy(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function ly(){try{return!!self.sessionStorage}catch(a){return!1}}
;function my(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function ny(a){if(ly()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=my(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function oy(){if(!ly())return!1;var a=yn(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=my(c.value),c!==void 0&&c!==a)return!0;return!1}
;function py(){dy().then(function(a){a&&(Ep(a),jy(a),Ov(a),ny(a))})}
function qy(){var a=new Lr;Fj.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=yn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Ep(h);jy(h);Ov(h);ny(h);return g.return()}c=Pv();d=oy();return g.yield(ky(),3);case 3:return e=g.i,g.yield(Fp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?py():Kh(a,"publicytnetworkstatus-online",py),g.h=0}})})}
;var ry=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function sy(){this.state=1;this.vm=null;this.h=void 0}
r=sy.prototype;r.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=tl(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=ul(a.interpreterSafeUrl).toString());ty(this,e,d,a.program,b,c)}else W(Error("BL:CIP"))};
function ty(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,iv(c,function(){window[g]?uy(a,d,g,e):(a.state=3,kv(c),W(new U("BL:ULB",""+c)))},f)):b?(f=rg("SCRIPT"),b instanceof Ab?(f.textContent=Cb(b),Db(f)):f.textContent=b,f.nonce=zb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?uy(a,d,g,e):(a.state=4,W(new U("BL:ULBJ")))):W(new U("BL:ULV"))}
r.isLoading=function(){return this.state===2};
function uy(a,b,c,d){a.state=5;var e=!!a.h&&ry.includes(bc(a.h)||"");try{var f=new jj({program:b,globalName:c,yd:{disable:!T("att_web_record_metrics")||!T("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.Yc.then(function(){a.state=6;d&&d(b)});
a.Xc(f)}catch(g){a.state=7,g instanceof Error&&W(g)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.gd()?this.Qd({wb:a}):null};
r.dispose=function(){this.Xc(null);this.state=8};
r.gd=function(){return!!this.vm};
r.Qd=function(a){return this.vm.dd(a)};
r.Xc=function(a){rc(this.vm);this.vm=a};function vy(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function wy(){sy.apply(this,arguments)}
w(wy,sy);wy.prototype.Xc=function(a){var b;(b=vy())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.dd.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
wy.prototype.gd=function(){return!!vy()};
wy.prototype.Qd=function(a){return vy().bgvmc(a)};function xy(a){Xs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(xy,Xs);xy.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
xy.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
xy.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
xy.prototype.i=function(){this.h=new Map};function yy(a){Xs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(yy,Xs);yy.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
yy.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
yy.prototype.u=function(a,b){a(b==null?void 0:b.event)};
yy.prototype.M=function(a,b){a(b==null?void 0:b.event)};function zy(){this.o=new xy;this.u=new yy}
zy.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Ay(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Ay.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=wu(c===void 0?0:c)){a=this.client;d=new pu({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Jv(d,c);Fv.set(f,!0);Kv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Iv({cttAuthInfo:yu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Lv("visualElementGestured",f,d):a?Wt("visualElementGestured",d,a,f):po("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Ay.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new pu({trackingParams:a}),b,c===void 0?0:c)};
Ay.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=wu(d);a||(a=(a=tu(d===void 0?0:d))?new pu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Iv({cttAuthInfo:yu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Lv("visualElementStateChanged",d,b):a?Wt("visualElementStateChanged",b,a,d):po("visualElementStateChanged",b,d))}};
function By(a,b){if(b===void 0)for(var c=vu(),d=0;d<c.length;d++)c[d]!==void 0&&By(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Hv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Cy(){zy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||An(Dy)}
w(Cy,zy);Cy.prototype.j=function(){po("finalPayload",{csn:wu()})};
Cy.prototype.h=function(){ju(ku)};
Cy.prototype.i=function(){var a=By;Ay.instance||(Ay.instance=new Ay);a(Ay.instance)};
function Dy(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=be();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&po("genericClientExperimentEvent",{eventType:c});delete Vl.CLIENT_EXPERIMENT_EVENTS}}
;function Ey(){}
function Fy(){var a=F("ytglobal.storage_");a||(a=new Ey,E("ytglobal.storage_",a));return a}
Ey.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Gy()):d.return()})};
function Gy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",Ey);function no(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
no.prototype.Ha=function(a){this.handleError(a)};
no.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Hy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Hy(a,b){Fy().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Iy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Iy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Iy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Jy={},Ky=(Jy["api.invalidparam"]=2,Jy.auth=150,Jy["drm.auth"]=150,Jy["heartbeat.net"]=150,Jy["heartbeat.servererror"]=150,Jy["heartbeat.stop"]=150,Jy["html5.unsupportedads"]=5,Jy["fmt.noneavailable"]=5,Jy["fmt.decode"]=5,Jy["fmt.unplayable"]=5,Jy["html5.missingapi"]=5,Jy["html5.unsupportedlive"]=5,Jy["drm.unavailable"]=5,Jy["mrm.blocked"]=151,Jy["embedder.identity.denied"]=152,Jy);var Ly=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function My(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Ny(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Ly);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Oy(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Py(a){G.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=T("web_player_split_event_bus_iframe");this.o=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",Qy(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())Ry(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=Sy(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&My(e)){var f=d;if(Na(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Ny(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Ny(g);break;case "loadPlaylist":case "cuePlaylist":g=Oy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);My(e)&&Ty(b,Qy(b))}}}};
Uy.addEventListener("message",this.G);if(a=S("WIDGET_ID"))this.sessionId=a;Vy(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Ky[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
Vy(this,"onVideoProgress",this.jf.bind(this));Vy(this,"onVolumeChange",this.kf.bind(this));Vy(this,"onApiChange",this.bf.bind(this));Vy(this,"onPlaybackQualityChange",this.ff.bind(this));Vy(this,"onPlaybackRateChange",this.gf.bind(this));Vy(this,"onStateChange",this.hf.bind(this));Vy(this,"onWebglSettingsChanged",this.lf.bind(this));Vy(this,"onCaptionsTrackListChanged",this.cf.bind(this));Vy(this,"captionssettingschanged",this.df.bind(this))}
w(Py,G);function Ty(a,b){a.sendMessage("infoDelivery",b)}
r=Py.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?Ry(this,a):this.D.push(a)};
function Sy(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Vy(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Qy(a){if(!a.api)return null;var b=a.api.getApiInterface();Rb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.hf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&!T("embeds_enable_vfsyb")&&(a.storyboardFormat=this.api.getStoryboardFormat());Ty(this,a)};
r.ff=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Ty(this,a)};
r.gf=function(a){Ty(this,{playbackRate:a})};
r.bf=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.kf=function(){Ty(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.jf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ty(this,a)};
r.lf=function(){Ty(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.cf=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Ty(this,a)}};
r.df=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Ty(this,a)}};
function Ry(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){W(d)}}}
r.ba=function(){G.prototype.ba.call(this);Uy.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Uy=window;function Wy(a,b,c){G.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Xy(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=Yy(g,f))&&Zy(d,g,f))}}}}}};
$y.addEventListener("message",this.i);Zy(this,"RECEIVING")}
w(Wy,G);r=Wy.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.ef.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.ef=function(a,b){this.ea||Zy(this,a,az(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Xy(a,b){switch(a){case "loadVideoById":return[Ny(b)];case "cueVideoById":return[Ny(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Oy(b)];case "cuePlaylist":return[Oy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Yy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function az(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function Zy(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),bz.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){$y.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.ba.call(this)};
var $y=window,bz=window.parent;var cz=new wy;function dz(){return cz.gd()}
function ez(a){a=a===void 0?{}:a;return cz.invoke(a)}
;function fz(a,b,c,d,e){G.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Kb=e;this.Pa=!1;this.api={};this.ma=this.u=null;this.U=new O;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Gc=["onReady"];this.lastError=null;this.eb=NaN;this.P={};this.ha=0;this.i=this.o=a;tc(this,this.U);gz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(hz(this),iz(this))}
w(fz,G);r=fz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof Yu||(b=new Yu(b));this.config=b;this.setConfig(a);iz(this);this.isReady()&&jz(this)}};
function hz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Qa=a;this.config=kz(a);hz(this);if(!this.xa){var b;this.xa=lz(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=zj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=zj(Number(a)||a))};
function jz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function mz(a){var b=!0,c=nz(a);c&&a.config&&(b=c.dataset.version===oz(a));return b&&!!F("yt.player.Application.create")}
function iz(a){if(!a.ea&&!a.Y){var b=mz(a);if(b&&(nz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||pz(a);else if(qz(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),pz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=rz(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?kz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Kb);pz(a)};
a.Y=!0;b?a.G():(iv(oz(a),a.G),(b=sz(a))&&pv(b||""),tz(a)&&!c&&E("yt.player.Application.create",null))}}}
function nz(a){var b=qg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function pz(a){if(!a.ea){var b=nz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!rz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}uz(a)}else a.eb=setTimeout(function(){pz(a)},50)}}
function uz(a){gz(a);a.Pa=!0;var b=nz(a);if(b){a.u=vz(a,b,"addEventListener");a.ma=vz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=vz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);jz(a);a.xa&&a.xa(a.api);a.U.sb("onReady",a.api)}
function vz(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function gz(a){a.Pa=!1;if(a.ma)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ma(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Pa};
r.addEventListener=function(a,b){var c=this,d=lz(this,b);d&&(Kb(this.Gc,a)>=0||this.h[a]||(b=wz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=lz(this,b))&&this.U.unsubscribe(a,b)};
function lz(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function wz(a,b){function c(d){function e(){if(!a.ea)try{a.U.sb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.ee});g.level="WARNING";throw g;}}
if(rz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
hg(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(nz(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function qz(a){a.cancel();gz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=nz(a);b&&(mz(a)||!tz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&mv(oz(this),this.G);clearTimeout(this.eb);this.Y=!1};
r.ba=function(){qz(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;G.prototype.ba.call(this)};
function tz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function oz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function sz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function rz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function kz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?kg(e):e}return b}
;var xz={},yz="player_uid_"+(Math.random()*1E9>>>0);function zz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?qg(c):c;var e=yz+"_"+Sa(c),f=xz[e];if(f&&d)return Az(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new fz(c,e,a,b,void 0);xz[e]=f;f.addOnDisposeCallback(function(){delete xz[f.getId()]});
return f.api}
function Az(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Bz=null,Cz=null;
function Dz(){fx();var a=nn(),b=qn(119),c=window.devicePixelRatio>1;if(document.body&&Nj(document.body,"exp-invert-logo"))if(c&&!Nj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Nj(d,"inverted-hdpi")){var e=Lj(d);Mj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Nj(document.body,"inverted-hdpi")&&Oj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=rn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete kn[b]:(c=d.toString(16),kn[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in kn)kn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(kn[f])));var f=d.join("&");fn(b,f,63072E3,a.i,c)}}
function Ez(){Fz()}
function Gz(){ax("ep_init_pr");Fz()}
function Fz(){var a=Bz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Hz(){Bz&&Bz.sendAbandonmentPing&&Bz.sendAbandonmentPing();S("PL_ATT")&&cz.dispose();for(var a=Fj,b=0,c=Px.length;b<c;b++)a.qa(Px[b]);Px.length=0;kv("//static.doubleclick.net/instream/ad_status.js");Qx=!1;Wl("DCLKSTAT",0);sc(Cz);Bz&&(Bz.removeEventListener("onVideoDataChange",Ez),Bz.destroy())}
;ax("ep_init_eps");E("yt.setConfig",Wl);E("yt.config.set",Wl);E("yt.setMsg",hv);E("yt.msgs.set",hv);E("yt.logging.errors.log",eu);
E("writeEmbed",function(){ax("ep_init_wes");var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Tv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=ey();if(!c.serializedForcedExperimentIds){var d=jm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?Xw("watch",["pbs","pbu","pbp"]):a.args&&Ku(a.args)?Xw("video_preview",["ol"]):Xw("embed_no_video",["ep_init_pr"]);Bz=zz(a,c);Bz.addEventListener("onVideoDataChange",Ez);Bz.addEventListener("onReady",Gz);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Cz=new Py(Bz):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Cz=new Wy(Bz,a,b));Rx();T("ytidb_create_logger_embed_killswitch")||mo();a={};Cy.h||(Cy.h=new Cy);Cy.h.install((a.flush_logs=
{callback:function(){Jt()}},a));
Xr();T("ytidb_clear_embedded_player")&&Fj.pa(function(){Kx();qy()});
T("enable_rta_manager")&&An(function(){var f=new cy;var g={preload:!T("enable_rta_npi")},h;typeof g==="boolean"?h={preload:g}:typeof g==="undefined"?h={preload:!0}:h=g;g=new Lr;Ux.instance=new Ux(f,h,g);f=Ux.instance;h=f.i.bind(f);E("yt.aba.att",h);f=f.j.bind(f);E("yt.aba.att2",f)});
ax("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||dz);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||ez);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Sx);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||Sv);E("yt.util.activity.init",F("yt.util.activity.init")||qs);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||ts);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||rs);window.addEventListener("load",$l(function(){Dz()}));
window.addEventListener("pageshow",$l(function(a){a.persisted||Dz()}));
window.addEventListener("pagehide",$l(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Hz():a.persisted||Hz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Xl("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.ee)f||(f={}),f.componentStack=Xt(m)}f&&hu(e,f);g?eu(e):W(e)}};
vi=fu;window.addEventListener("unhandledrejection",function(a){fu(a.reason)});
Lb(S("ERRORS")||[],function(a){eu.apply(null,a)});
Wl("ERRORS",[]);ax("ep_init_epe");}).call(this);
