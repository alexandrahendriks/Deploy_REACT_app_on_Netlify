function $w(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ww(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pi=Symbol.for("react.element"),Hw=Symbol.for("react.portal"),Uw=Symbol.for("react.fragment"),Gw=Symbol.for("react.strict_mode"),Kw=Symbol.for("react.profiler"),Yw=Symbol.for("react.provider"),Zw=Symbol.for("react.context"),Xw=Symbol.for("react.forward_ref"),Qw=Symbol.for("react.suspense"),Jw=Symbol.for("react.memo"),e3=Symbol.for("react.lazy"),mm=Symbol.iterator;function t3(e){return e===null||typeof e!="object"?null:(e=mm&&e[mm]||e["@@iterator"],typeof e=="function"?e:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jg=Object.assign,Ng={};function zo(e,t,n){this.props=e,this.context=t,this.refs=Ng,this.updater=n||Lg}zo.prototype.isReactComponent={};zo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bg(){}Bg.prototype=zo.prototype;function Jd(e,t,n){this.props=e,this.context=t,this.refs=Ng,this.updater=n||Lg}var ef=Jd.prototype=new Bg;ef.constructor=Jd;jg(ef,zo.prototype);ef.isPureReactComponent=!0;var hm=Array.isArray,Dg=Object.prototype.hasOwnProperty,tf={current:null},Og={key:!0,ref:!0,__self:!0,__source:!0};function $g(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Dg.call(t,r)&&!Og.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:pi,type:e,key:a,ref:i,props:o,_owner:tf.current}}function n3(e,t){return{$$typeof:pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nf(e){return typeof e=="object"&&e!==null&&e.$$typeof===pi}function r3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gm=/\/+/g;function _u(e,t){return typeof e=="object"&&e!==null&&e.key!=null?r3(""+e.key):t.toString(36)}function us(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case pi:case Hw:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+_u(i,0):r,hm(o)?(n="",e!=null&&(n=e.replace(gm,"$&/")+"/"),us(o,t,n,"",function(u){return u})):o!=null&&(nf(o)&&(o=n3(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(gm,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",hm(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+_u(a,s);i+=us(a,t,n,l,o)}else if(l=t3(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+_u(a,s++),i+=us(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ri(e,t,n){if(e==null)return e;var r=[],o=0;return us(e,r,"","",function(a){return t.call(n,a,o++)}),r}function o3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},cs={transition:null},a3={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:cs,ReactCurrentOwner:tf};W.Children={map:Ri,forEach:function(e,t,n){Ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ri(e,function(){t++}),t},toArray:function(e){return Ri(e,function(t){return t})||[]},only:function(e){if(!nf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=zo;W.Fragment=Uw;W.Profiler=Kw;W.PureComponent=Jd;W.StrictMode=Gw;W.Suspense=Qw;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a3;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jg({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=tf.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Dg.call(t,l)&&!Og.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:pi,type:e.type,key:o,ref:a,props:r,_owner:i}};W.createContext=function(e){return e={$$typeof:Zw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yw,_context:e},e.Consumer=e};W.createElement=$g;W.createFactory=function(e){var t=$g.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Xw,render:e}};W.isValidElement=nf;W.lazy=function(e){return{$$typeof:e3,_payload:{_status:-1,_result:e},_init:o3}};W.memo=function(e,t){return{$$typeof:Jw,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=cs.transition;cs.transition={};try{e()}finally{cs.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Je.current.useCallback(e,t)};W.useContext=function(e){return Je.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};W.useEffect=function(e,t){return Je.current.useEffect(e,t)};W.useId=function(){return Je.current.useId()};W.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Je.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};W.useRef=function(e){return Je.current.useRef(e)};W.useState=function(e){return Je.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Je.current.useTransition()};W.version="18.2.0";(function(e){e.exports=W})(k);const M=Ww(k.exports),ym=$w({__proto__:null,default:M},[k.exports]);var Va=Boolean(globalThis==null?void 0:globalThis.document)?k.exports.useLayoutEffect:k.exports.useEffect,wl={exports:{}},xl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i3=k.exports,s3=Symbol.for("react.element"),l3=Symbol.for("react.fragment"),u3=Object.prototype.hasOwnProperty,c3=i3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d3={key:!0,ref:!0,__self:!0,__source:!0};function Wg(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)u3.call(t,r)&&!d3.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:s3,type:e,key:a,ref:i,props:o,_owner:c3.current}}xl.Fragment=l3;xl.jsx=Wg;xl.jsxs=Wg;(function(e){e.exports=xl})(wl);const Pr=wl.exports.Fragment,T=wl.exports.jsx,G=wl.exports.jsxs;var rf=k.exports.createContext({});rf.displayName="ColorModeContext";function of(){const e=k.exports.useContext(rf);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}var zi={light:"chakra-ui-light",dark:"chakra-ui-dark"};function f3(e={}){const{preventTransition:t=!0}=e,n={setDataset:r=>{const o=t?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,o==null||o()},setClassName(r){document.body.classList.add(r?zi.dark:zi.light),document.body.classList.remove(r?zi.light:zi.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var a;return((a=n.query().matches)!=null?a:r==="dark")?"dark":"light"},addListener(r){const o=n.query(),a=i=>{r(i.matches?"dark":"light")};return typeof o.addListener=="function"?o.addListener(a):o.addEventListener("change",a),()=>{typeof o.removeListener=="function"?o.removeListener(a):o.removeEventListener("change",a)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var p3="chakra-ui-color-mode";function m3(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let n;try{n=localStorage.getItem(e)||t}catch{}return n||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}var h3=m3(p3),bm=()=>{};function vm(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}function Hg(e){const{value:t,children:n,options:{useSystemColorMode:r,initialColorMode:o,disableTransitionOnChange:a}={},colorModeManager:i=h3}=e,s=o==="dark"?"dark":"light",[l,u]=k.exports.useState(()=>vm(i,s)),[c,d]=k.exports.useState(()=>vm(i)),{getSystemTheme:f,setClassName:p,setDataset:b,addListener:v}=k.exports.useMemo(()=>f3({preventTransition:a}),[a]),C=o==="system"&&!l?c:l,g=k.exports.useCallback(S=>{const F=S==="system"?f():S;u(F),p(F==="dark"),b(F),i.set(F)},[i,f,p,b]);Va(()=>{o==="system"&&d(f())},[]),k.exports.useEffect(()=>{const S=i.get();if(S){g(S);return}if(o==="system"){g("system");return}g(s)},[i,s,o,g]);const m=k.exports.useCallback(()=>{g(C==="dark"?"light":"dark")},[C,g]);k.exports.useEffect(()=>{if(!!r)return v(g)},[r,v,g]);const h=k.exports.useMemo(()=>({colorMode:t!=null?t:C,toggleColorMode:t?bm:m,setColorMode:t?bm:g,forced:t!==void 0}),[C,m,g,t]);return T(rf.Provider,{value:h,children:n})}Hg.displayName="ColorModeProvider";var Tc={exports:{}};(function(e,t){var n=200,r="__lodash_hash_undefined__",o=800,a=16,i=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object AsyncFunction]",c="[object Boolean]",d="[object Date]",f="[object Error]",p="[object Function]",b="[object GeneratorFunction]",v="[object Map]",C="[object Number]",g="[object Null]",m="[object Object]",h="[object Proxy]",S="[object RegExp]",F="[object Set]",E="[object String]",A="[object Undefined]",q="[object WeakMap]",B="[object ArrayBuffer]",V="[object DataView]",_e="[object Float32Array]",Le="[object Float64Array]",St="[object Int8Array]",Ht="[object Int16Array]",Ut="[object Int32Array]",xe="[object Uint8Array]",It="[object Uint8ClampedArray]",I="[object Uint16Array]",O="[object Uint32Array]",$=/[\\^$.*+?()[\]{}|]/g,he=/^\[object .+?Constructor\]$/,Te=/^(?:0|[1-9]\d*)$/,J={};J[_e]=J[Le]=J[St]=J[Ht]=J[Ut]=J[xe]=J[It]=J[I]=J[O]=!0,J[s]=J[l]=J[B]=J[c]=J[V]=J[d]=J[f]=J[p]=J[v]=J[C]=J[m]=J[S]=J[F]=J[E]=J[q]=!1;var Gt=typeof Ii=="object"&&Ii&&Ii.Object===Object&&Ii,$o=typeof self=="object"&&self&&self.Object===Object&&self,ct=Gt||$o||Function("return this")(),lr=t&&!t.nodeType&&t,Wo=lr&&!0&&e&&!e.nodeType&&e,Up=Wo&&Wo.exports===lr,pu=Up&&Gt.process,Gp=function(){try{var y=Wo&&Wo.require&&Wo.require("util").types;return y||pu&&pu.binding&&pu.binding("util")}catch{}}(),Kp=Gp&&Gp.isTypedArray;function P2(y,w,_){switch(_.length){case 0:return y.call(w);case 1:return y.call(w,_[0]);case 2:return y.call(w,_[0],_[1]);case 3:return y.call(w,_[0],_[1],_[2])}return y.apply(w,_)}function q2(y,w){for(var _=-1,R=Array(y);++_<y;)R[_]=w(_);return R}function I2(y){return function(w){return y(w)}}function R2(y,w){return y==null?void 0:y[w]}function z2(y,w){return function(_){return y(w(_))}}var M2=Array.prototype,V2=Function.prototype,ki=Object.prototype,mu=ct["__core-js_shared__"],_i=V2.toString,pn=ki.hasOwnProperty,Yp=function(){var y=/[^.]+$/.exec(mu&&mu.keys&&mu.keys.IE_PROTO||"");return y?"Symbol(src)_1."+y:""}(),Zp=ki.toString,L2=_i.call(Object),j2=RegExp("^"+_i.call(pn).replace($,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ti=Up?ct.Buffer:void 0,Xp=ct.Symbol,Qp=ct.Uint8Array,Jp=Ti?Ti.allocUnsafe:void 0,em=z2(Object.getPrototypeOf,Object),tm=Object.create,N2=ki.propertyIsEnumerable,B2=M2.splice,ur=Xp?Xp.toStringTag:void 0,Fi=function(){try{var y=yu(Object,"defineProperty");return y({},"",{}),y}catch{}}(),D2=Ti?Ti.isBuffer:void 0,nm=Math.max,O2=Date.now,rm=yu(ct,"Map"),Ho=yu(Object,"create"),$2=function(){function y(){}return function(w){if(!dr(w))return{};if(tm)return tm(w);y.prototype=w;var _=new y;return y.prototype=void 0,_}}();function cr(y){var w=-1,_=y==null?0:y.length;for(this.clear();++w<_;){var R=y[w];this.set(R[0],R[1])}}function W2(){this.__data__=Ho?Ho(null):{},this.size=0}function H2(y){var w=this.has(y)&&delete this.__data__[y];return this.size-=w?1:0,w}function U2(y){var w=this.__data__;if(Ho){var _=w[y];return _===r?void 0:_}return pn.call(w,y)?w[y]:void 0}function G2(y){var w=this.__data__;return Ho?w[y]!==void 0:pn.call(w,y)}function K2(y,w){var _=this.__data__;return this.size+=this.has(y)?0:1,_[y]=Ho&&w===void 0?r:w,this}cr.prototype.clear=W2,cr.prototype.delete=H2,cr.prototype.get=U2,cr.prototype.has=G2,cr.prototype.set=K2;function mn(y){var w=-1,_=y==null?0:y.length;for(this.clear();++w<_;){var R=y[w];this.set(R[0],R[1])}}function Y2(){this.__data__=[],this.size=0}function Z2(y){var w=this.__data__,_=Ai(w,y);if(_<0)return!1;var R=w.length-1;return _==R?w.pop():B2.call(w,_,1),--this.size,!0}function X2(y){var w=this.__data__,_=Ai(w,y);return _<0?void 0:w[_][1]}function Q2(y){return Ai(this.__data__,y)>-1}function J2(y,w){var _=this.__data__,R=Ai(_,y);return R<0?(++this.size,_.push([y,w])):_[R][1]=w,this}mn.prototype.clear=Y2,mn.prototype.delete=Z2,mn.prototype.get=X2,mn.prototype.has=Q2,mn.prototype.set=J2;function Dr(y){var w=-1,_=y==null?0:y.length;for(this.clear();++w<_;){var R=y[w];this.set(R[0],R[1])}}function ew(){this.size=0,this.__data__={hash:new cr,map:new(rm||mn),string:new cr}}function tw(y){var w=Pi(this,y).delete(y);return this.size-=w?1:0,w}function nw(y){return Pi(this,y).get(y)}function rw(y){return Pi(this,y).has(y)}function ow(y,w){var _=Pi(this,y),R=_.size;return _.set(y,w),this.size+=_.size==R?0:1,this}Dr.prototype.clear=ew,Dr.prototype.delete=tw,Dr.prototype.get=nw,Dr.prototype.has=rw,Dr.prototype.set=ow;function Or(y){var w=this.__data__=new mn(y);this.size=w.size}function aw(){this.__data__=new mn,this.size=0}function iw(y){var w=this.__data__,_=w.delete(y);return this.size=w.size,_}function sw(y){return this.__data__.get(y)}function lw(y){return this.__data__.has(y)}function uw(y,w){var _=this.__data__;if(_ instanceof mn){var R=_.__data__;if(!rm||R.length<n-1)return R.push([y,w]),this.size=++_.size,this;_=this.__data__=new Dr(R)}return _.set(y,w),this.size=_.size,this}Or.prototype.clear=aw,Or.prototype.delete=iw,Or.prototype.get=sw,Or.prototype.has=lw,Or.prototype.set=uw;function cw(y,w){var _=wu(y),R=!_&&vu(y),U=!_&&!R&&lm(y),ae=!_&&!R&&!U&&cm(y),fe=_||R||U||ae,H=fe?q2(y.length,String):[],pe=H.length;for(var Ct in y)(w||pn.call(y,Ct))&&!(fe&&(Ct=="length"||U&&(Ct=="offset"||Ct=="parent")||ae&&(Ct=="buffer"||Ct=="byteLength"||Ct=="byteOffset")||im(Ct,pe)))&&H.push(Ct);return H}function hu(y,w,_){(_!==void 0&&!qi(y[w],_)||_===void 0&&!(w in y))&&gu(y,w,_)}function dw(y,w,_){var R=y[w];(!(pn.call(y,w)&&qi(R,_))||_===void 0&&!(w in y))&&gu(y,w,_)}function Ai(y,w){for(var _=y.length;_--;)if(qi(y[_][0],w))return _;return-1}function gu(y,w,_){w=="__proto__"&&Fi?Fi(y,w,{configurable:!0,enumerable:!0,value:_,writable:!0}):y[w]=_}var fw=_w();function Ei(y){return y==null?y===void 0?A:g:ur&&ur in Object(y)?Tw(y):Iw(y)}function om(y){return Uo(y)&&Ei(y)==s}function pw(y){if(!dr(y)||Pw(y))return!1;var w=Su(y)?j2:he;return w.test(Vw(y))}function mw(y){return Uo(y)&&um(y.length)&&!!J[Ei(y)]}function hw(y){if(!dr(y))return qw(y);var w=sm(y),_=[];for(var R in y)R=="constructor"&&(w||!pn.call(y,R))||_.push(R);return _}function am(y,w,_,R,U){y!==w&&fw(w,function(ae,fe){if(U||(U=new Or),dr(ae))gw(y,w,fe,_,am,R,U);else{var H=R?R(bu(y,fe),ae,fe+"",y,w,U):void 0;H===void 0&&(H=ae),hu(y,fe,H)}},dm)}function gw(y,w,_,R,U,ae,fe){var H=bu(y,_),pe=bu(w,_),Ct=fe.get(pe);if(Ct){hu(y,_,Ct);return}var dt=ae?ae(H,pe,_+"",y,w,fe):void 0,Go=dt===void 0;if(Go){var Cu=wu(pe),ku=!Cu&&lm(pe),pm=!Cu&&!ku&&cm(pe);dt=pe,Cu||ku||pm?wu(H)?dt=H:Lw(H)?dt=Sw(H):ku?(Go=!1,dt=vw(pe,!0)):pm?(Go=!1,dt=xw(pe,!0)):dt=[]:jw(pe)||vu(pe)?(dt=H,vu(H)?dt=Nw(H):(!dr(H)||Su(H))&&(dt=Fw(pe))):Go=!1}Go&&(fe.set(pe,dt),U(dt,pe,R,ae,fe),fe.delete(pe)),hu(y,_,dt)}function yw(y,w){return zw(Rw(y,w,fm),y+"")}var bw=Fi?function(y,w){return Fi(y,"toString",{configurable:!0,enumerable:!1,value:Dw(w),writable:!0})}:fm;function vw(y,w){if(w)return y.slice();var _=y.length,R=Jp?Jp(_):new y.constructor(_);return y.copy(R),R}function ww(y){var w=new y.constructor(y.byteLength);return new Qp(w).set(new Qp(y)),w}function xw(y,w){var _=w?ww(y.buffer):y.buffer;return new y.constructor(_,y.byteOffset,y.length)}function Sw(y,w){var _=-1,R=y.length;for(w||(w=Array(R));++_<R;)w[_]=y[_];return w}function Cw(y,w,_,R){var U=!_;_||(_={});for(var ae=-1,fe=w.length;++ae<fe;){var H=w[ae],pe=R?R(_[H],y[H],H,_,y):void 0;pe===void 0&&(pe=y[H]),U?gu(_,H,pe):dw(_,H,pe)}return _}function kw(y){return yw(function(w,_){var R=-1,U=_.length,ae=U>1?_[U-1]:void 0,fe=U>2?_[2]:void 0;for(ae=y.length>3&&typeof ae=="function"?(U--,ae):void 0,fe&&Aw(_[0],_[1],fe)&&(ae=U<3?void 0:ae,U=1),w=Object(w);++R<U;){var H=_[R];H&&y(w,H,R,ae)}return w})}function _w(y){return function(w,_,R){for(var U=-1,ae=Object(w),fe=R(w),H=fe.length;H--;){var pe=fe[y?H:++U];if(_(ae[pe],pe,ae)===!1)break}return w}}function Pi(y,w){var _=y.__data__;return Ew(w)?_[typeof w=="string"?"string":"hash"]:_.map}function yu(y,w){var _=R2(y,w);return pw(_)?_:void 0}function Tw(y){var w=pn.call(y,ur),_=y[ur];try{y[ur]=void 0;var R=!0}catch{}var U=Zp.call(y);return R&&(w?y[ur]=_:delete y[ur]),U}function Fw(y){return typeof y.constructor=="function"&&!sm(y)?$2(em(y)):{}}function im(y,w){var _=typeof y;return w=w==null?i:w,!!w&&(_=="number"||_!="symbol"&&Te.test(y))&&y>-1&&y%1==0&&y<w}function Aw(y,w,_){if(!dr(_))return!1;var R=typeof w;return(R=="number"?xu(_)&&im(w,_.length):R=="string"&&w in _)?qi(_[w],y):!1}function Ew(y){var w=typeof y;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?y!=="__proto__":y===null}function Pw(y){return!!Yp&&Yp in y}function sm(y){var w=y&&y.constructor,_=typeof w=="function"&&w.prototype||ki;return y===_}function qw(y){var w=[];if(y!=null)for(var _ in Object(y))w.push(_);return w}function Iw(y){return Zp.call(y)}function Rw(y,w,_){return w=nm(w===void 0?y.length-1:w,0),function(){for(var R=arguments,U=-1,ae=nm(R.length-w,0),fe=Array(ae);++U<ae;)fe[U]=R[w+U];U=-1;for(var H=Array(w+1);++U<w;)H[U]=R[U];return H[w]=_(fe),P2(y,this,H)}}function bu(y,w){if(!(w==="constructor"&&typeof y[w]=="function")&&w!="__proto__")return y[w]}var zw=Mw(bw);function Mw(y){var w=0,_=0;return function(){var R=O2(),U=a-(R-_);if(_=R,U>0){if(++w>=o)return arguments[0]}else w=0;return y.apply(void 0,arguments)}}function Vw(y){if(y!=null){try{return _i.call(y)}catch{}try{return y+""}catch{}}return""}function qi(y,w){return y===w||y!==y&&w!==w}var vu=om(function(){return arguments}())?om:function(y){return Uo(y)&&pn.call(y,"callee")&&!N2.call(y,"callee")},wu=Array.isArray;function xu(y){return y!=null&&um(y.length)&&!Su(y)}function Lw(y){return Uo(y)&&xu(y)}var lm=D2||Ow;function Su(y){if(!dr(y))return!1;var w=Ei(y);return w==p||w==b||w==u||w==h}function um(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=i}function dr(y){var w=typeof y;return y!=null&&(w=="object"||w=="function")}function Uo(y){return y!=null&&typeof y=="object"}function jw(y){if(!Uo(y)||Ei(y)!=m)return!1;var w=em(y);if(w===null)return!0;var _=pn.call(w,"constructor")&&w.constructor;return typeof _=="function"&&_ instanceof _&&_i.call(_)==L2}var cm=Kp?I2(Kp):mw;function Nw(y){return Cw(y,dm(y))}function dm(y){return xu(y)?cw(y,!0):hw(y)}var Bw=kw(function(y,w,_,R){am(y,w,_,R)});function Dw(y){return function(){return y}}function fm(y){return y}function Ow(){return!1}e.exports=Bw})(Tc,Tc.exports);const rn=Tc.exports;function Dt(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function vr(e,...t){return g3(e)?e(...t):e}var g3=e=>typeof e=="function",y3=e=>/!(important)?$/.test(e),wm=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,Fc=(e,t)=>n=>{const r=String(t),o=y3(r),a=wm(r),i=e?`${e}.${a}`:a;let s=Dt(n.__cssMap)&&i in n.__cssMap?n.__cssMap[i].varRef:t;return s=wm(s),o?`${s} !important`:s};function La(e){const{scale:t,transform:n,compose:r}=e;return(a,i)=>{var u;const s=Fc(t,a)(i);let l=(u=n==null?void 0:n(s,i))!=null?u:s;return r&&(l=r(l,i)),l}}var Mi=(...e)=>t=>e.reduce((n,r)=>r(n),t);function Rt(e,t){return n=>{const r={property:n,scale:e};return r.transform=La({scale:e,transform:t}),r}}var b3=({rtl:e,ltr:t})=>n=>n.direction==="rtl"?e:t;function v3(e){const{property:t,scale:n,transform:r}=e;return{scale:n,property:b3(t),transform:n?La({scale:n,compose:r}):r}}var Ug=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function w3(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...Ug].join(" ")}function x3(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...Ug].join(" ")}var S3={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},C3={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function k3(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}var _3={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},Gg="& > :not(style) ~ :not(style)",T3={[Gg]:{marginInlineStart:"calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",marginInlineEnd:"calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"}},F3={[Gg]:{marginTop:"calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",marginBottom:"calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"}},Ac={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},A3=new Set(Object.values(Ac)),Kg=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),E3=e=>e.trim();function P3(e,t){var d;var n;if(e==null||Kg.has(e))return e;const r=/(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,{type:o,values:a}=(d=(n=r.exec(e))==null?void 0:n.groups)!=null?d:{};if(!o||!a)return e;const i=o.includes("-gradient")?o:`${o}-gradient`,[s,...l]=a.split(",").map(E3).filter(Boolean);if((l==null?void 0:l.length)===0)return e;const u=s in Ac?Ac[s]:s;l.unshift(u);const c=l.map(f=>{if(A3.has(f))return f;const p=f.indexOf(" "),[b,v]=p!==-1?[f.substr(0,p),f.substr(p+1)]:[f],C=Yg(v)?v:v&&v.split(" "),g=`colors.${b}`,m=g in t.__cssMap?t.__cssMap[g].varRef:b;return C?[m,...Array.isArray(C)?C:[C]].join(" "):m});return`${i}(${c.join(", ")})`}var Yg=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),q3=(e,t)=>P3(e,t!=null?t:{});function I3(e){return/^var\(--.+\)$/.test(e)}var R3=e=>{const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}},Kt=e=>t=>`${e}(${t})`,K={filter(e){return e!=="auto"?e:S3},backdropFilter(e){return e!=="auto"?e:C3},ring(e){return k3(K.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?w3():e==="auto-gpu"?x3():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=R3(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const n={left:"right",right:"left"};return t.direction==="rtl"?n[e]:e},degree(e){if(I3(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:q3,blur:Kt("blur"),opacity:Kt("opacity"),brightness:Kt("brightness"),contrast:Kt("contrast"),dropShadow:Kt("drop-shadow"),grayscale:Kt("grayscale"),hueRotate:Kt("hue-rotate"),invert:Kt("invert"),saturate:Kt("saturate"),sepia:Kt("sepia"),bgImage(e){return e==null||Yg(e)||Kg.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var o;const{space:t,divide:n}=(o=_3[e])!=null?o:{},r={flexDirection:e};return t&&(r[t]=1),n&&(r[n]=1),r}},x={borderWidths:Rt("borderWidths"),borderStyles:Rt("borderStyles"),colors:Rt("colors"),borders:Rt("borders"),radii:Rt("radii",K.px),space:Rt("space",Mi(K.vh,K.px)),spaceT:Rt("space",Mi(K.vh,K.px)),degreeT(e){return{property:e,transform:K.degree}},prop(e,t,n){return{property:e,scale:t,...t&&{transform:La({scale:t,transform:n})}}},propT(e,t){return{property:e,transform:t}},sizes:Rt("sizes",Mi(K.vh,K.px)),sizesT:Rt("sizes",Mi(K.vh,K.fraction)),shadows:Rt("shadows"),logical:v3,blur:Rt("blur",K.blur)},ds={background:x.colors("background"),backgroundColor:x.colors("backgroundColor"),backgroundImage:x.propT("backgroundImage",K.bgImage),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:K.bgClip},bgSize:x.prop("backgroundSize"),bgPosition:x.prop("backgroundPosition"),bg:x.colors("background"),bgColor:x.colors("backgroundColor"),bgPos:x.prop("backgroundPosition"),bgRepeat:x.prop("backgroundRepeat"),bgAttachment:x.prop("backgroundAttachment"),bgGradient:x.propT("backgroundImage",K.gradient),bgClip:{transform:K.bgClip}};Object.assign(ds,{bgImage:ds.backgroundImage,bgImg:ds.backgroundImage});var Z={border:x.borders("border"),borderWidth:x.borderWidths("borderWidth"),borderStyle:x.borderStyles("borderStyle"),borderColor:x.colors("borderColor"),borderRadius:x.radii("borderRadius"),borderTop:x.borders("borderTop"),borderBlockStart:x.borders("borderBlockStart"),borderTopLeftRadius:x.radii("borderTopLeftRadius"),borderStartStartRadius:x.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:x.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:x.radii("borderTopRightRadius"),borderStartEndRadius:x.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:x.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:x.borders("borderRight"),borderInlineEnd:x.borders("borderInlineEnd"),borderBottom:x.borders("borderBottom"),borderBlockEnd:x.borders("borderBlockEnd"),borderBottomLeftRadius:x.radii("borderBottomLeftRadius"),borderBottomRightRadius:x.radii("borderBottomRightRadius"),borderLeft:x.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:x.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:x.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:x.borders(["borderLeft","borderRight"]),borderInline:x.borders("borderInline"),borderY:x.borders(["borderTop","borderBottom"]),borderBlock:x.borders("borderBlock"),borderTopWidth:x.borderWidths("borderTopWidth"),borderBlockStartWidth:x.borderWidths("borderBlockStartWidth"),borderTopColor:x.colors("borderTopColor"),borderBlockStartColor:x.colors("borderBlockStartColor"),borderTopStyle:x.borderStyles("borderTopStyle"),borderBlockStartStyle:x.borderStyles("borderBlockStartStyle"),borderBottomWidth:x.borderWidths("borderBottomWidth"),borderBlockEndWidth:x.borderWidths("borderBlockEndWidth"),borderBottomColor:x.colors("borderBottomColor"),borderBlockEndColor:x.colors("borderBlockEndColor"),borderBottomStyle:x.borderStyles("borderBottomStyle"),borderBlockEndStyle:x.borderStyles("borderBlockEndStyle"),borderLeftWidth:x.borderWidths("borderLeftWidth"),borderInlineStartWidth:x.borderWidths("borderInlineStartWidth"),borderLeftColor:x.colors("borderLeftColor"),borderInlineStartColor:x.colors("borderInlineStartColor"),borderLeftStyle:x.borderStyles("borderLeftStyle"),borderInlineStartStyle:x.borderStyles("borderInlineStartStyle"),borderRightWidth:x.borderWidths("borderRightWidth"),borderInlineEndWidth:x.borderWidths("borderInlineEndWidth"),borderRightColor:x.colors("borderRightColor"),borderInlineEndColor:x.colors("borderInlineEndColor"),borderRightStyle:x.borderStyles("borderRightStyle"),borderInlineEndStyle:x.borderStyles("borderInlineEndStyle"),borderTopRadius:x.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:x.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:x.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:x.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(Z,{rounded:Z.borderRadius,roundedTop:Z.borderTopRadius,roundedTopLeft:Z.borderTopLeftRadius,roundedTopRight:Z.borderTopRightRadius,roundedTopStart:Z.borderStartStartRadius,roundedTopEnd:Z.borderStartEndRadius,roundedBottom:Z.borderBottomRadius,roundedBottomLeft:Z.borderBottomLeftRadius,roundedBottomRight:Z.borderBottomRightRadius,roundedBottomStart:Z.borderEndStartRadius,roundedBottomEnd:Z.borderEndEndRadius,roundedLeft:Z.borderLeftRadius,roundedRight:Z.borderRightRadius,roundedStart:Z.borderInlineStartRadius,roundedEnd:Z.borderInlineEndRadius,borderStart:Z.borderInlineStart,borderEnd:Z.borderInlineEnd,borderTopStartRadius:Z.borderStartStartRadius,borderTopEndRadius:Z.borderStartEndRadius,borderBottomStartRadius:Z.borderEndStartRadius,borderBottomEndRadius:Z.borderEndEndRadius,borderStartRadius:Z.borderInlineStartRadius,borderEndRadius:Z.borderInlineEndRadius,borderStartWidth:Z.borderInlineStartWidth,borderEndWidth:Z.borderInlineEndWidth,borderStartColor:Z.borderInlineStartColor,borderEndColor:Z.borderInlineEndColor,borderStartStyle:Z.borderInlineStartStyle,borderEndStyle:Z.borderInlineEndStyle});var z3={color:x.colors("color"),textColor:x.colors("color"),fill:x.colors("fill"),stroke:x.colors("stroke")},Ec={boxShadow:x.shadows("boxShadow"),mixBlendMode:!0,blendMode:x.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:x.prop("backgroundBlendMode"),opacity:!0};Object.assign(Ec,{shadow:Ec.boxShadow});var M3={filter:{transform:K.filter},blur:x.blur("--chakra-blur"),brightness:x.propT("--chakra-brightness",K.brightness),contrast:x.propT("--chakra-contrast",K.contrast),hueRotate:x.degreeT("--chakra-hue-rotate"),invert:x.propT("--chakra-invert",K.invert),saturate:x.propT("--chakra-saturate",K.saturate),dropShadow:x.propT("--chakra-drop-shadow",K.dropShadow),backdropFilter:{transform:K.backdropFilter},backdropBlur:x.blur("--chakra-backdrop-blur"),backdropBrightness:x.propT("--chakra-backdrop-brightness",K.brightness),backdropContrast:x.propT("--chakra-backdrop-contrast",K.contrast),backdropHueRotate:x.degreeT("--chakra-backdrop-hue-rotate"),backdropInvert:x.propT("--chakra-backdrop-invert",K.invert),backdropSaturate:x.propT("--chakra-backdrop-saturate",K.saturate)},Ps={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:K.flexDirection},experimental_spaceX:{static:T3,transform:La({scale:"space",transform:e=>e!==null?{"--chakra-space-x":e}:null})},experimental_spaceY:{static:F3,transform:La({scale:"space",transform:e=>e!=null?{"--chakra-space-y":e}:null})},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:x.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:x.space("gap"),rowGap:x.space("rowGap"),columnGap:x.space("columnGap")};Object.assign(Ps,{flexDir:Ps.flexDirection});var Zg={gridGap:x.space("gridGap"),gridColumnGap:x.space("gridColumnGap"),gridRowGap:x.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},V3={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:K.outline},outlineOffset:!0,outlineColor:x.colors("outlineColor")},kt={width:x.sizesT("width"),inlineSize:x.sizesT("inlineSize"),height:x.sizes("height"),blockSize:x.sizes("blockSize"),boxSize:x.sizes(["width","height"]),minWidth:x.sizes("minWidth"),minInlineSize:x.sizes("minInlineSize"),minHeight:x.sizes("minHeight"),minBlockSize:x.sizes("minBlockSize"),maxWidth:x.sizes("maxWidth"),maxInlineSize:x.sizes("maxInlineSize"),maxHeight:x.sizes("maxHeight"),maxBlockSize:x.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:x.propT("float",K.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(kt,{w:kt.width,h:kt.height,minW:kt.minWidth,maxW:kt.maxWidth,minH:kt.minHeight,maxH:kt.maxHeight,overscroll:kt.overscrollBehavior,overscrollX:kt.overscrollBehaviorX,overscrollY:kt.overscrollBehaviorY});var L3={listStyleType:!0,listStylePosition:!0,listStylePos:x.prop("listStylePosition"),listStyleImage:!0,listStyleImg:x.prop("listStyleImage")};function j3(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var N3=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},B3=N3(j3),D3={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},O3={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},Tu=(e,t,n)=>{const r={},o=B3(e,t,{});for(const a in o)a in n&&n[a]!=null||(r[a]=o[a]);return r},$3={srOnly:{transform(e){return e===!0?D3:e==="focusable"?O3:{}}},layerStyle:{processResult:!0,transform:(e,t,n)=>Tu(t,`layerStyles.${e}`,n)},textStyle:{processResult:!0,transform:(e,t,n)=>Tu(t,`textStyles.${e}`,n)},apply:{processResult:!0,transform:(e,t,n)=>Tu(t,e,n)}},ma={position:!0,pos:x.prop("position"),zIndex:x.prop("zIndex","zIndices"),inset:x.spaceT("inset"),insetX:x.spaceT(["left","right"]),insetInline:x.spaceT("insetInline"),insetY:x.spaceT(["top","bottom"]),insetBlock:x.spaceT("insetBlock"),top:x.spaceT("top"),insetBlockStart:x.spaceT("insetBlockStart"),bottom:x.spaceT("bottom"),insetBlockEnd:x.spaceT("insetBlockEnd"),left:x.spaceT("left"),insetInlineStart:x.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:x.spaceT("right"),insetInlineEnd:x.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(ma,{insetStart:ma.insetInlineStart,insetEnd:ma.insetInlineEnd});var W3={ring:{transform:K.ring},ringColor:x.colors("--chakra-ring-color"),ringOffset:x.prop("--chakra-ring-offset-width"),ringOffsetColor:x.colors("--chakra-ring-offset-color"),ringInset:x.prop("--chakra-ring-inset")},ue={margin:x.spaceT("margin"),marginTop:x.spaceT("marginTop"),marginBlockStart:x.spaceT("marginBlockStart"),marginRight:x.spaceT("marginRight"),marginInlineEnd:x.spaceT("marginInlineEnd"),marginBottom:x.spaceT("marginBottom"),marginBlockEnd:x.spaceT("marginBlockEnd"),marginLeft:x.spaceT("marginLeft"),marginInlineStart:x.spaceT("marginInlineStart"),marginX:x.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:x.spaceT("marginInline"),marginY:x.spaceT(["marginTop","marginBottom"]),marginBlock:x.spaceT("marginBlock"),padding:x.space("padding"),paddingTop:x.space("paddingTop"),paddingBlockStart:x.space("paddingBlockStart"),paddingRight:x.space("paddingRight"),paddingBottom:x.space("paddingBottom"),paddingBlockEnd:x.space("paddingBlockEnd"),paddingLeft:x.space("paddingLeft"),paddingInlineStart:x.space("paddingInlineStart"),paddingInlineEnd:x.space("paddingInlineEnd"),paddingX:x.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:x.space("paddingInline"),paddingY:x.space(["paddingTop","paddingBottom"]),paddingBlock:x.space("paddingBlock")};Object.assign(ue,{m:ue.margin,mt:ue.marginTop,mr:ue.marginRight,me:ue.marginInlineEnd,marginEnd:ue.marginInlineEnd,mb:ue.marginBottom,ml:ue.marginLeft,ms:ue.marginInlineStart,marginStart:ue.marginInlineStart,mx:ue.marginX,my:ue.marginY,p:ue.padding,pt:ue.paddingTop,py:ue.paddingY,px:ue.paddingX,pb:ue.paddingBottom,pl:ue.paddingLeft,ps:ue.paddingInlineStart,paddingStart:ue.paddingInlineStart,pr:ue.paddingRight,pe:ue.paddingInlineEnd,paddingEnd:ue.paddingInlineEnd});var H3={textDecorationColor:x.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:x.shadows("textShadow")},U3={clipPath:!0,transform:x.propT("transform",K.transform),transformOrigin:!0,translateX:x.spaceT("--chakra-translate-x"),translateY:x.spaceT("--chakra-translate-y"),skewX:x.degreeT("--chakra-skew-x"),skewY:x.degreeT("--chakra-skew-y"),scaleX:x.prop("--chakra-scale-x"),scaleY:x.prop("--chakra-scale-y"),scale:x.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:x.degreeT("--chakra-rotate")},G3={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:x.prop("transitionDuration","transition.duration"),transitionProperty:x.prop("transitionProperty","transition.property"),transitionTimingFunction:x.prop("transitionTimingFunction","transition.easing")},K3={fontFamily:x.prop("fontFamily","fonts"),fontSize:x.prop("fontSize","fontSizes",K.px),fontWeight:x.prop("fontWeight","fontWeights"),lineHeight:x.prop("lineHeight","lineHeights"),letterSpacing:x.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},Y3={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:x.spaceT("scrollMargin"),scrollMarginTop:x.spaceT("scrollMarginTop"),scrollMarginBottom:x.spaceT("scrollMarginBottom"),scrollMarginLeft:x.spaceT("scrollMarginLeft"),scrollMarginRight:x.spaceT("scrollMarginRight"),scrollMarginX:x.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:x.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:x.spaceT("scrollPadding"),scrollPaddingTop:x.spaceT("scrollPaddingTop"),scrollPaddingBottom:x.spaceT("scrollPaddingBottom"),scrollPaddingLeft:x.spaceT("scrollPaddingLeft"),scrollPaddingRight:x.spaceT("scrollPaddingRight"),scrollPaddingX:x.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:x.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function Xg(e){return Dt(e)&&e.reference?e.reference:String(e)}var Sl=(e,...t)=>t.map(Xg).join(` ${e} `).replace(/calc/g,""),xm=(...e)=>`calc(${Sl("+",...e)})`,Sm=(...e)=>`calc(${Sl("-",...e)})`,Pc=(...e)=>`calc(${Sl("*",...e)})`,Cm=(...e)=>`calc(${Sl("/",...e)})`,km=e=>{const t=Xg(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:Pc(t,-1)},yr=Object.assign(e=>({add:(...t)=>yr(xm(e,...t)),subtract:(...t)=>yr(Sm(e,...t)),multiply:(...t)=>yr(Pc(e,...t)),divide:(...t)=>yr(Cm(e,...t)),negate:()=>yr(km(e)),toString:()=>e.toString()}),{add:xm,subtract:Sm,multiply:Pc,divide:Cm,negate:km});function Z3(e,t="-"){return e.replace(/\s+/g,t)}function X3(e){const t=Z3(e.toString());return J3(Q3(t))}function Q3(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function J3(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function e5(e,t=""){return[t,e].filter(Boolean).join("-")}function t5(e,t){return`var(${e}${t?`, ${t}`:""})`}function n5(e,t=""){return X3(`--${e5(e,t)}`)}function oe(e,t,n){const r=n5(e,n);return{variable:r,reference:t5(r,t)}}function r5(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function o5(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function qc(e){if(e==null)return e;const{unitless:t}=o5(e);return t||typeof e=="number"?`${e}px`:e}var Qg=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,af=e=>Object.fromEntries(Object.entries(e).sort(Qg));function _m(e){const t=af(e);return Object.assign(Object.values(t),t)}function a5(e){const t=Object.keys(af(e));return new Set(t)}function Tm(e){var n;if(!e)return e;e=(n=qc(e))!=null?n:e;const t=e.endsWith("px")?-1:-.0625;return typeof e=="number"?`${e+t}`:e.replace(/(\d+\.?\d*)/u,r=>`${parseFloat(r)+t}`)}function sa(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${qc(e)})`),t&&n.push("and",`(max-width: ${qc(t)})`),n.join(" ")}function i5(e){var a;if(!e)return null;e.base=(a=e.base)!=null?a:"0px";const t=_m(e),n=Object.entries(e).sort(Qg).map(([i,s],l,u)=>{var d;let[,c]=(d=u[l+1])!=null?d:[];return c=parseFloat(c)>0?Tm(c):void 0,{_minW:Tm(s),breakpoint:i,minW:s,maxW:c,maxWQuery:sa(null,c),minWQuery:sa(s),minMaxQuery:sa(s,c)}}),r=a5(e),o=Array.from(r.values());return{keys:r,normalized:t,isResponsive(i){const s=Object.keys(i);return s.length>0&&s.every(l=>r.has(l))},asObject:af(e),asArray:_m(e),details:n,media:[null,...t.map(i=>sa(i)).slice(1)],toArrayValue(i){if(!Dt(i))throw new Error("toArrayValue: value must be an object");const s=o.map(l=>{var u;return(u=i[l])!=null?u:null});for(;r5(s)===null;)s.pop();return s},toObjectValue(i){if(!Array.isArray(i))throw new Error("toObjectValue: value must be an array");return i.reduce((s,l,u)=>{const c=o[u];return c!=null&&l!=null&&(s[c]=l),s},{})}}}var je={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},In=e=>Jg(t=>e(t,"&"),"[role=group]","[data-group]",".group"),hn=e=>Jg(t=>e(t,"~ &"),"[data-peer]",".peer"),Jg=(e,...t)=>t.map(e).join(", "),Cl={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:In(je.hover),_peerHover:hn(je.hover),_groupFocus:In(je.focus),_peerFocus:hn(je.focus),_groupFocusVisible:In(je.focusVisible),_peerFocusVisible:hn(je.focusVisible),_groupActive:In(je.active),_peerActive:hn(je.active),_groupDisabled:In(je.disabled),_peerDisabled:hn(je.disabled),_groupInvalid:In(je.invalid),_peerInvalid:hn(je.invalid),_groupChecked:In(je.checked),_peerChecked:hn(je.checked),_groupFocusWithin:In(je.focusWithin),_peerFocusWithin:hn(je.focusWithin),_peerPlaceholderShown:hn(je.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"},s5=Object.keys(Cl);function Fm(e,t){return oe(String(e).replace(/\./g,"-"),void 0,t)}function l5(e,t){let n={};const r={};for(const[o,a]of Object.entries(e)){const{isSemantic:i,value:s}=a,{variable:l,reference:u}=Fm(o,t==null?void 0:t.cssVarPrefix);if(!i){if(o.startsWith("space")){const f=o.split("."),[p,...b]=f,v=`${p}.-${b.join(".")}`,C=yr.negate(s),g=yr.negate(u);r[v]={value:C,var:l,varRef:g}}n[l]=s,r[o]={value:s,var:l,varRef:u};continue}const c=f=>{const b=[String(o).split(".")[0],f].join(".");if(!e[b])return f;const{reference:C}=Fm(b,t==null?void 0:t.cssVarPrefix);return C},d=Dt(s)?s:{default:s};n=rn(n,Object.entries(d).reduce((f,[p,b])=>{var m;var v;const C=c(b);if(p==="default")return f[l]=C,f;const g=(m=(v=Cl)==null?void 0:v[p])!=null?m:p;return f[g]={[l]:C},f},{})),r[o]={value:u,var:l,varRef:u}}return{cssVars:n,cssMap:r}}function u5(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function c5(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}var d5=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur"];function f5(e){return c5(e,d5)}function p5(e){return e.semanticTokens}function m5(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}function h5({tokens:e,semanticTokens:t}){var o,a;const n=Object.entries((o=Ic(e))!=null?o:{}).map(([i,s])=>[i,{isSemantic:!1,value:s}]),r=Object.entries((a=Ic(t,1))!=null?a:{}).map(([i,s])=>[i,{isSemantic:!0,value:s}]);return Object.fromEntries([...n,...r])}function Ic(e,t=1/0){return!Dt(e)&&!Array.isArray(e)||!t?e:Object.entries(e).reduce((n,[r,o])=>(Dt(o)||Array.isArray(o)?Object.entries(Ic(o,t-1)).forEach(([a,i])=>{n[`${r}.${a}`]=i}):n[r]=o,n),{})}function g5(e){var t;const n=m5(e),r=f5(n),o=p5(n),a=h5({tokens:r,semanticTokens:o}),i=(t=n.config)==null?void 0:t.cssVarPrefix,{cssMap:s,cssVars:l}=l5(a,{cssVarPrefix:i});return Object.assign(n,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...l},__cssMap:s,__breakpoints:i5(n.breakpoints)}),n}var sf=rn({},ds,Z,z3,Ps,kt,M3,W3,V3,Zg,$3,ma,Ec,ue,Y3,K3,H3,U3,L3,G3);Object.assign({},ue,kt,Ps,Zg,ma);var y5=[...Object.keys(sf),...s5],b5={...sf,...Cl},v5=e=>e in b5,w5=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,media:o}=t.__breakpoints,a={};for(const i in e){let s=vr(e[i],t);if(s==null)continue;if(s=Dt(s)&&n(s)?r(s):s,!Array.isArray(s)){a[i]=s;continue}const l=s.slice(0,o.length).length;for(let u=0;u<l;u+=1){const c=o==null?void 0:o[u];if(!c){a[i]=s[u];continue}a[c]=a[c]||{},s[u]!=null&&(a[c][i]=s[u])}}return a};function x5(e){const t=[];let n="",r=!1;for(let o=0;o<e.length;o++){const a=e[o];a==="("?(r=!0,n+=a):a===")"?(r=!1,n+=a):a===","&&!r?(t.push(n),n=""):n+=a}return n=n.trim(),n&&t.push(n),t}function S5(e){return/^var\(--.+\)$/.test(e)}var C5=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!S5(t),k5=(e,t)=>{var i,s;if(t==null)return t;const n=l=>{var u,c;return(c=(u=e.__cssMap)==null?void 0:u[l])==null?void 0:c.varRef},r=l=>{var u;return(u=n(l))!=null?u:l},[o,a]=x5(t);return t=(s=(i=n(o))!=null?i:r(a))!=null?s:r(t),t};function _5(e){const{configs:t={},pseudos:n={},theme:r}=e,o=(a,i=!1)=>{var d,f;var s;const l=vr(a,r),u=w5(l)(r);let c={};for(let p in u){const b=u[p];let v=vr(b,r);p in n&&(p=n[p]),C5(p,v)&&(v=k5(r,v));let C=t[p];if(C===!0&&(C={property:p}),Dt(v)){c[p]=(d=c[p])!=null?d:{},c[p]=rn({},c[p],o(v,!0));continue}let g=(f=(s=C==null?void 0:C.transform)==null?void 0:s.call(C,v,r,l))!=null?f:v;g=C!=null&&C.processResult?o(g,!0):g;const m=vr(C==null?void 0:C.property,r);if(!i&&(C==null?void 0:C.static)){const h=vr(C.static,r);c=rn({},c,h)}if(m&&Array.isArray(m)){for(const h of m)c[h]=g;continue}if(m){m==="&"&&Dt(g)?c=rn({},c,g):c[m]=g;continue}if(Dt(g)){c=rn({},c,g);continue}c[p]=g}return c};return o}var ey=e=>t=>_5({theme:t,pseudos:Cl,configs:sf})(e);function de(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function T5(e,t){if(Array.isArray(e))return e;if(Dt(e))return t(e);if(e!=null)return[e]}function F5(e,t){for(let n=t+1;n<e.length;n++)if(e[n]!=null)return n;return-1}function A5(e){const t=e.__breakpoints;return function(r,o,a,i){var s,l;if(!t)return;const u={},c=T5(a,t.toArrayValue);if(!c)return u;const d=c.length,f=d===1,p=!!r.parts;for(let b=0;b<d;b++){const v=t.details[b],C=t.details[F5(c,b)],g=sa(v.minW,C==null?void 0:C._minW),m=vr((s=r[o])==null?void 0:s[c[b]],i);if(!!m){if(p){(l=r.parts)==null||l.forEach(h=>{rn(u,{[h]:f?m[h]:{[g]:m[h]}})});continue}if(!p){f?rn(u,m):u[g]=m;continue}u[g]=m}}return u}}function E5(e){return t=>{var i;const{variant:n,size:r,theme:o}=t,a=A5(o);return rn({},vr((i=e.baseStyle)!=null?i:{},t),a(e,"sizes",r,t),a(e,"variants",n,t))}}function Ie(e){return u5(e,["styleConfig","size","variant","colorScheme"])}function P5(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function q5(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var I5=function(){function e(n){var r=this;this._insertTag=function(o){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,a),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(q5(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=P5(o);try{a.insertRule(r,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),He="-ms-",qs="-moz-",X="-webkit-",ty="comm",lf="rule",uf="decl",R5="@import",ny="@keyframes",z5=Math.abs,kl=String.fromCharCode,M5=Object.assign;function V5(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function ry(e){return e.trim()}function L5(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Rc(e,t){return e.indexOf(t)}function Be(e,t){return e.charCodeAt(t)|0}function ja(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function cf(e){return e.length}function Vi(e,t){return t.push(e),e}function j5(e,t){return e.map(t).join("")}var _l=1,ko=1,oy=0,lt=0,Fe=0,Mo="";function Tl(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:_l,column:ko,length:i,return:""}}function Ko(e,t){return M5(Tl("",null,null,"",null,null,0),e,{length:-e.length},t)}function N5(){return Fe}function B5(){return Fe=lt>0?Be(Mo,--lt):0,ko--,Fe===10&&(ko=1,_l--),Fe}function mt(){return Fe=lt<oy?Be(Mo,lt++):0,ko++,Fe===10&&(ko=1,_l++),Fe}function an(){return Be(Mo,lt)}function fs(){return lt}function mi(e,t){return ja(Mo,e,t)}function Na(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ay(e){return _l=ko=1,oy=Jt(Mo=e),lt=0,[]}function iy(e){return Mo="",e}function ps(e){return ry(mi(lt-1,zc(e===91?e+2:e===40?e+1:e)))}function D5(e){for(;(Fe=an())&&Fe<33;)mt();return Na(e)>2||Na(Fe)>3?"":" "}function O5(e,t){for(;--t&&mt()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return mi(e,fs()+(t<6&&an()==32&&mt()==32))}function zc(e){for(;mt();)switch(Fe){case e:return lt;case 34:case 39:e!==34&&e!==39&&zc(Fe);break;case 40:e===41&&zc(e);break;case 92:mt();break}return lt}function $5(e,t){for(;mt()&&e+Fe!==47+10;)if(e+Fe===42+42&&an()===47)break;return"/*"+mi(t,lt-1)+"*"+kl(e===47?e:mt())}function W5(e){for(;!Na(an());)mt();return mi(e,lt)}function H5(e){return iy(ms("",null,null,null,[""],e=ay(e),0,[0],e))}function ms(e,t,n,r,o,a,i,s,l){for(var u=0,c=0,d=i,f=0,p=0,b=0,v=1,C=1,g=1,m=0,h="",S=o,F=a,E=r,A=h;C;)switch(b=m,m=mt()){case 40:if(b!=108&&Be(A,d-1)==58){Rc(A+=ee(ps(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:A+=ps(m);break;case 9:case 10:case 13:case 32:A+=D5(b);break;case 92:A+=O5(fs()-1,7);continue;case 47:switch(an()){case 42:case 47:Vi(U5($5(mt(),fs()),t,n),l);break;default:A+="/"}break;case 123*v:s[u++]=Jt(A)*g;case 125*v:case 59:case 0:switch(m){case 0:case 125:C=0;case 59+c:p>0&&Jt(A)-d&&Vi(p>32?Em(A+";",r,n,d-1):Em(ee(A," ","")+";",r,n,d-2),l);break;case 59:A+=";";default:if(Vi(E=Am(A,t,n,u,c,o,s,h,S=[],F=[],d),a),m===123)if(c===0)ms(A,t,E,E,S,a,d,s,F);else switch(f===99&&Be(A,3)===110?100:f){case 100:case 109:case 115:ms(e,E,E,r&&Vi(Am(e,E,E,0,0,o,s,h,o,S=[],d),F),o,F,d,s,r?S:F);break;default:ms(A,E,E,E,[""],F,0,s,F)}}u=c=p=0,v=g=1,h=A="",d=i;break;case 58:d=1+Jt(A),p=b;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&B5()==125)continue}switch(A+=kl(m),m*v){case 38:g=c>0?1:(A+="\f",-1);break;case 44:s[u++]=(Jt(A)-1)*g,g=1;break;case 64:an()===45&&(A+=ps(mt())),f=an(),c=d=Jt(h=A+=W5(fs())),m++;break;case 45:b===45&&Jt(A)==2&&(v=0)}}return a}function Am(e,t,n,r,o,a,i,s,l,u,c){for(var d=o-1,f=o===0?a:[""],p=cf(f),b=0,v=0,C=0;b<r;++b)for(var g=0,m=ja(e,d+1,d=z5(v=i[b])),h=e;g<p;++g)(h=ry(v>0?f[g]+" "+m:ee(m,/&\f/g,f[g])))&&(l[C++]=h);return Tl(e,t,n,o===0?lf:s,l,u,c)}function U5(e,t,n){return Tl(e,t,n,ty,kl(N5()),ja(e,2,-2),0)}function Em(e,t,n,r){return Tl(e,t,n,uf,ja(e,0,r),ja(e,r+1,-1),r)}function lo(e,t){for(var n="",r=cf(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function G5(e,t,n,r){switch(e.type){case R5:case uf:return e.return=e.return||e.value;case ty:return"";case ny:return e.return=e.value+"{"+lo(e.children,r)+"}";case lf:e.value=e.props.join(",")}return Jt(n=lo(e.children,r))?e.return=e.value+"{"+n+"}":""}function K5(e){var t=cf(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function Y5(e){return function(t){t.root||(t=t.return)&&e(t)}}var Pm=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function sy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Z5=function(t,n,r){for(var o=0,a=0;o=a,a=an(),o===38&&a===12&&(n[r]=1),!Na(a);)mt();return mi(t,lt)},X5=function(t,n){var r=-1,o=44;do switch(Na(o)){case 0:o===38&&an()===12&&(n[r]=1),t[r]+=Z5(lt-1,n,r);break;case 2:t[r]+=ps(o);break;case 4:if(o===44){t[++r]=an()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=kl(o)}while(o=mt());return t},Q5=function(t,n){return iy(X5(ay(t),n))},qm=new WeakMap,J5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!qm.get(r))&&!o){qm.set(t,!0);for(var a=[],i=Q5(n,a),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=a[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},e9=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ly(e,t){switch(V5(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+qs+e+He+e+e;case 6828:case 4268:return X+e+He+e+e;case 6165:return X+e+He+"flex-"+e+e;case 5187:return X+e+ee(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+He+"flex-$1$2")+e;case 5443:return X+e+He+"flex-item-"+ee(e,/flex-|-self/,"")+e;case 4675:return X+e+He+"flex-line-pack"+ee(e,/align-content|flex-|-self/,"")+e;case 5548:return X+e+He+ee(e,"shrink","negative")+e;case 5292:return X+e+He+ee(e,"basis","preferred-size")+e;case 6060:return X+"box-"+ee(e,"-grow","")+X+e+He+ee(e,"grow","positive")+e;case 4554:return X+ee(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+qs+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Rc(e,"stretch")?ly(ee(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Be(e,t+1)!==115)break;case 6444:switch(Be(e,Jt(e)-3-(~Rc(e,"!important")&&10))){case 107:return ee(e,":",":"+X)+e;case 101:return ee(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+X+(Be(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+He+"$2box$3")+e}break;case 5936:switch(Be(e,t+11)){case 114:return X+e+He+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+He+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+He+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return X+e+He+e+e}return e}var t9=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case uf:t.return=ly(t.value,t.length);break;case ny:return lo([Ko(t,{value:ee(t.value,"@","@"+X)})],o);case lf:if(t.length)return j5(t.props,function(a){switch(L5(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return lo([Ko(t,{props:[ee(a,/:(read-\w+)/,":"+qs+"$1")]})],o);case"::placeholder":return lo([Ko(t,{props:[ee(a,/:(plac\w+)/,":"+X+"input-$1")]}),Ko(t,{props:[ee(a,/:(plac\w+)/,":"+qs+"$1")]}),Ko(t,{props:[ee(a,/:(plac\w+)/,He+"input-$1")]})],o)}return""})}},n9=[t9],r9=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var C=v.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||n9,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var C=v.getAttribute("data-emotion").split(" "),g=1;g<C.length;g++)a[C[g]]=!0;s.push(v)});var l,u=[J5,e9];{var c,d=[G5,Y5(function(v){c.insert(v)})],f=K5(u.concat(o,d)),p=function(C){return lo(H5(C),f)};l=function(C,g,m,h){c=m,p(C?C+"{"+g.styles+"}":g.styles),h&&(b.inserted[g.name]=!0)}}var b={key:n,sheet:new I5({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(s),b};function Is(){return Is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Is.apply(this,arguments)}var uy={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=typeof Symbol=="function"&&Symbol.for,df=Ve?Symbol.for("react.element"):60103,ff=Ve?Symbol.for("react.portal"):60106,Fl=Ve?Symbol.for("react.fragment"):60107,Al=Ve?Symbol.for("react.strict_mode"):60108,El=Ve?Symbol.for("react.profiler"):60114,Pl=Ve?Symbol.for("react.provider"):60109,ql=Ve?Symbol.for("react.context"):60110,pf=Ve?Symbol.for("react.async_mode"):60111,Il=Ve?Symbol.for("react.concurrent_mode"):60111,Rl=Ve?Symbol.for("react.forward_ref"):60112,zl=Ve?Symbol.for("react.suspense"):60113,o9=Ve?Symbol.for("react.suspense_list"):60120,Ml=Ve?Symbol.for("react.memo"):60115,Vl=Ve?Symbol.for("react.lazy"):60116,a9=Ve?Symbol.for("react.block"):60121,i9=Ve?Symbol.for("react.fundamental"):60117,s9=Ve?Symbol.for("react.responder"):60118,l9=Ve?Symbol.for("react.scope"):60119;function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case df:switch(e=e.type,e){case pf:case Il:case Fl:case El:case Al:case zl:return e;default:switch(e=e&&e.$$typeof,e){case ql:case Rl:case Vl:case Ml:case Pl:return e;default:return t}}case ff:return t}}}function cy(e){return vt(e)===Il}re.AsyncMode=pf;re.ConcurrentMode=Il;re.ContextConsumer=ql;re.ContextProvider=Pl;re.Element=df;re.ForwardRef=Rl;re.Fragment=Fl;re.Lazy=Vl;re.Memo=Ml;re.Portal=ff;re.Profiler=El;re.StrictMode=Al;re.Suspense=zl;re.isAsyncMode=function(e){return cy(e)||vt(e)===pf};re.isConcurrentMode=cy;re.isContextConsumer=function(e){return vt(e)===ql};re.isContextProvider=function(e){return vt(e)===Pl};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===df};re.isForwardRef=function(e){return vt(e)===Rl};re.isFragment=function(e){return vt(e)===Fl};re.isLazy=function(e){return vt(e)===Vl};re.isMemo=function(e){return vt(e)===Ml};re.isPortal=function(e){return vt(e)===ff};re.isProfiler=function(e){return vt(e)===El};re.isStrictMode=function(e){return vt(e)===Al};re.isSuspense=function(e){return vt(e)===zl};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fl||e===Il||e===El||e===Al||e===zl||e===o9||typeof e=="object"&&e!==null&&(e.$$typeof===Vl||e.$$typeof===Ml||e.$$typeof===Pl||e.$$typeof===ql||e.$$typeof===Rl||e.$$typeof===i9||e.$$typeof===s9||e.$$typeof===l9||e.$$typeof===a9)};re.typeOf=vt;(function(e){e.exports=re})(uy);var dy=uy.exports,u9={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c9={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fy={};fy[dy.ForwardRef]=u9;fy[dy.Memo]=c9;var d9=!0;function f9(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var py=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||d9===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},my=function(t,n,r){py(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function p9(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var m9={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},h9=/[A-Z]|^ms/g,g9=/_EMO_([^_]+?)_([^]*?)_EMO_/g,hy=function(t){return t.charCodeAt(1)===45},Im=function(t){return t!=null&&typeof t!="boolean"},Fu=sy(function(e){return hy(e)?e:e.replace(h9,"-$&").toLowerCase()}),Rm=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(g9,function(r,o,a){return en={name:o,styles:a,next:en},o})}return m9[t]!==1&&!hy(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ba(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return en={name:n.name,styles:n.styles,next:en},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)en={name:r.name,styles:r.styles,next:en},r=r.next;var o=n.styles+";";return o}return y9(e,t,n)}case"function":{if(e!==void 0){var a=en,i=n(e);return en=a,Ba(e,t,i)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function y9(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ba(e,t,n[o])+";";else for(var a in n){var i=n[a];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=a+"{"+t[i]+"}":Im(i)&&(r+=Fu(a)+":"+Rm(a,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var s=0;s<i.length;s++)Im(i[s])&&(r+=Fu(a)+":"+Rm(a,i[s])+";");else{var l=Ba(e,t,i);switch(a){case"animation":case"animationName":{r+=Fu(a)+":"+l+";";break}default:r+=a+"{"+l+"}"}}}return r}var zm=/label:\s*([^\s;\n{]+)\s*(;|$)/g,en,mf=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,a="";en=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,a+=Ba(r,n,i)):a+=i[0];for(var s=1;s<t.length;s++)a+=Ba(r,n,t[s]),o&&(a+=i[s]);zm.lastIndex=0;for(var l="",u;(u=zm.exec(a))!==null;)l+="-"+u[1];var c=p9(a)+l;return{name:c,styles:a,next:en}},b9=function(t){return t()},gy=ym["useInsertionEffect"]?ym["useInsertionEffect"]:!1,v9=gy||b9,Mm=gy||k.exports.useLayoutEffect,yy=k.exports.createContext(typeof HTMLElement<"u"?r9({key:"css"}):null);yy.Provider;var by=function(t){return k.exports.forwardRef(function(n,r){var o=k.exports.useContext(yy);return t(n,o,r)})},Da=k.exports.createContext({}),w9=function(t,n){if(typeof n=="function"){var r=n(t);return r}return Is({},t,n)},x9=Pm(function(e){return Pm(function(t){return w9(e,t)})}),S9=function(t){var n=k.exports.useContext(Da);return t.theme!==n&&(n=x9(n)(t.theme)),k.exports.createElement(Da.Provider,{value:n},t.children)},Ll=by(function(e,t){var n=e.styles,r=mf([n],void 0,k.exports.useContext(Da)),o=k.exports.useRef();return Mm(function(){var a=t.key+"-global",i=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+a+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",a),i.hydrate([l])),o.current=[i,s],function(){i.flush()}},[t]),Mm(function(){var a=o.current,i=a[0],s=a[1];if(s){a[1]=!1;return}if(r.next!==void 0&&my(t,r.next,!0),i.tags.length){var l=i.tags[i.tags.length-1].nextElementSibling;i.before=l,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function C9(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return mf(t)}var k9=function(){var t=C9.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function _9(e){return typeof e=="function"}function T9(e,t){const n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}function F9(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var A9=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},vy=A9(F9);function wy(e,t){const n={};return Object.keys(e).forEach(r=>{const o=e[r];t(o,r,e)&&(n[r]=o)}),n}var xy=e=>wy(e,t=>t!=null);function Sy(e,...t){return _9(e)?e(...t):e}Object.freeze(["base","sm","md","lg","xl","2xl"]);function E9(e={}){const{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:r}=e,o=k.exports.createContext(void 0);o.displayName=r;function a(){var i;const s=k.exports.useContext(o);if(!s&&t){const l=new Error(n);throw l.name="ContextError",(i=Error.captureStackTrace)==null||i.call(Error,l,a),l}return s}return[o.Provider,a,o]}var P9=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,q9=sy(function(e){return P9.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),I9=q9,R9=function(t){return t!=="theme"},Vm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?I9:R9},Lm=function(t,n,r){var o;if(n){var a=n.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},z9=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return py(n,r,o),v9(function(){return my(n,r,o)}),null},M9=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,a,i;n!==void 0&&(a=n.label,i=n.target);var s=Lm(t,n,r),l=s||Vm(o),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,p=1;p<f;p++)d.push(c[p],c[0][p])}var b=by(function(v,C,g){var m=u&&v.as||o,h="",S=[],F=v;if(v.theme==null){F={};for(var E in v)F[E]=v[E];F.theme=k.exports.useContext(Da)}typeof v.className=="string"?h=f9(C.registered,S,v.className):v.className!=null&&(h=v.className+" ");var A=mf(d.concat(S),C.registered,F);h+=C.key+"-"+A.name,i!==void 0&&(h+=" "+i);var q=u&&s===void 0?Vm(m):l,B={};for(var V in v)u&&V==="as"||q(V)&&(B[V]=v[V]);return B.className=h,B.ref=g,k.exports.createElement(k.exports.Fragment,null,k.exports.createElement(z9,{cache:C,serialized:A,isStringTag:typeof m=="string"}),k.exports.createElement(m,B))});return b.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=d,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+i}}),b.withComponent=function(v,C){return e(v,Is({},n,C,{shouldForwardProp:Lm(b,C,!0)})).apply(void 0,d)},b}},V9=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Mc=M9.bind();V9.forEach(function(e){Mc[e]=Mc(e)});function te(e,t={}){let n=!1;function r(){if(!n){n=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function o(...c){r();for(const d of c)t[d]=l(d);return te(e,t)}function a(...c){for(const d of c)d in t||(t[d]=l(d));return te(e,t)}function i(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.selector]))}function s(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.className]))}function l(c){const p=`chakra-${(["container","root"].includes(c!=null?c:"")?[e]:[e,c]).filter(Boolean).join("__")}`;return{className:p,selector:`.${p}`,toString:()=>c}}return{parts:o,toPart:l,extend:a,selectors:i,classnames:s,get keys(){return Object.keys(t)},__type:{}}}var L9=te("accordion").parts("root","container","button","panel").extend("icon"),j9=te("alert").parts("title","description","container").extend("icon","spinner"),N9=te("avatar").parts("label","badge","container").extend("excessLabel","group"),B9=te("breadcrumb").parts("link","item","container").extend("separator");te("button").parts();var D9=te("checkbox").parts("control","icon","container").extend("label");te("progress").parts("track","filledTrack").extend("label");var O9=te("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),$9=te("editable").parts("preview","input","textarea"),W9=te("form").parts("container","requiredIndicator","helperText"),H9=te("formError").parts("text","icon"),U9=te("input").parts("addon","field","element"),G9=te("list").parts("container","item","icon"),K9=te("menu").parts("button","list","item").extend("groupTitle","command","divider"),Y9=te("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),Z9=te("numberinput").parts("root","field","stepperGroup","stepper");te("pininput").parts("field");var X9=te("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),Q9=te("progress").parts("label","filledTrack","track"),J9=te("radio").parts("container","control","label"),e6=te("select").parts("field","icon"),t6=te("slider").parts("container","track","thumb","filledTrack","mark"),n6=te("stat").parts("container","label","helpText","number","icon"),r6=te("switch").parts("container","track","thumb"),o6=te("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),a6=te("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),i6=te("tag").parts("container","label","closeButton"),s6=te("card").parts("container","header","body","footer");function wr(e,t,n){return Math.min(Math.max(e,n),t)}class l6 extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var la=l6;function hf(e){if(typeof e!="string")throw new la(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=g6.test(e)?d6(e):e;const n=f6.exec(t);if(n){const i=Array.from(n).slice(1);return[...i.slice(0,3).map(s=>parseInt(Oa(s,2),16)),parseInt(Oa(i[3]||"f",2),16)/255]}const r=p6.exec(t);if(r){const i=Array.from(r).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,16)),parseInt(i[3]||"ff",16)/255]}const o=m6.exec(t);if(o){const i=Array.from(o).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,10)),parseFloat(i[3]||"1")]}const a=h6.exec(t);if(a){const[i,s,l,u]=Array.from(a).slice(1).map(parseFloat);if(wr(0,100,s)!==s)throw new la(e);if(wr(0,100,l)!==l)throw new la(e);return[...y6(i,s,l),u||1]}throw new la(e)}function u6(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const jm=e=>parseInt(e.replace(/_/g,""),36),c6="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=jm(t.substring(0,3)),r=jm(t.substring(3)).toString(16);let o="";for(let a=0;a<6-r.length;a++)o+="0";return e[n]=`${o}${r}`,e},{});function d6(e){const t=e.toLowerCase().trim(),n=c6[u6(t)];if(!n)throw new la(e);return`#${n}`}const Oa=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),f6=new RegExp(`^#${Oa("([a-f0-9])",3)}([a-f0-9])?$`,"i"),p6=new RegExp(`^#${Oa("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),m6=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Oa(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),h6=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,g6=/^[a-z]+$/i,Nm=e=>Math.round(e*255),y6=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(Nm);const o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),i=a*(1-Math.abs(o%2-1));let s=0,l=0,u=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,u=i):o>=3&&o<4?(l=i,u=a):o>=4&&o<5?(s=i,u=a):o>=5&&o<6&&(s=a,u=i);const c=r-a/2,d=s+c,f=l+c,p=u+c;return[d,f,p].map(Nm)};function b6(e,t,n,r){return`rgba(${wr(0,255,e).toFixed()}, ${wr(0,255,t).toFixed()}, ${wr(0,255,n).toFixed()}, ${parseFloat(wr(0,1,r).toFixed(3))})`}function v6(e,t){const[n,r,o,a]=hf(e);return b6(n,r,o,a-t)}function w6(e){const[t,n,r,o]=hf(e);let a=i=>{const s=wr(0,255,i).toString(16);return s.length===1?`0${s}`:s};return`#${a(t)}${a(n)}${a(r)}${o<1?a(Math.round(o*255)):""}`}function x6(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}var S6=e=>Object.keys(e).length===0,Ze=(e,t,n)=>{const r=x6(e,`colors.${t}`,t);try{return w6(r),r}catch{return n!=null?n:"#000000"}},C6=e=>{const[t,n,r]=hf(e);return(t*299+n*587+r*114)/1e3},k6=e=>t=>{const n=Ze(t,e);return C6(n)<128?"dark":"light"},_6=e=>t=>k6(e)(t)==="dark",_o=(e,t)=>n=>{const r=Ze(n,e);return v6(r,1-t)};function Bm(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var T6=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function F6(e){const t=T6();return!e||S6(e)?t:e.string&&e.colors?E6(e.string,e.colors):e.string&&!e.colors?A6(e.string):e.colors&&!e.string?P6(e.colors):t}function A6(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1){const o=t>>r*8&255;n+=`00${o.toString(16)}`.substr(-2)}return n}function E6(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function P6(e){return e[Math.floor(Math.random()*e.length)]}function j(e,t){return n=>n.colorMode==="dark"?t:e}function gf(e){const{orientation:t,vertical:n,horizontal:r}=e;return t?t==="vertical"?n:r:{}}function q6(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function Cy(e){return q6(e)&&e.reference?e.reference:String(e)}var jl=(e,...t)=>t.map(Cy).join(` ${e} `).replace(/calc/g,""),Dm=(...e)=>`calc(${jl("+",...e)})`,Om=(...e)=>`calc(${jl("-",...e)})`,Vc=(...e)=>`calc(${jl("*",...e)})`,$m=(...e)=>`calc(${jl("/",...e)})`,Wm=e=>{const t=Cy(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:Vc(t,-1)},wn=Object.assign(e=>({add:(...t)=>wn(Dm(e,...t)),subtract:(...t)=>wn(Om(e,...t)),multiply:(...t)=>wn(Vc(e,...t)),divide:(...t)=>wn($m(e,...t)),negate:()=>wn(Wm(e)),toString:()=>e.toString()}),{add:Dm,subtract:Om,multiply:Vc,divide:$m,negate:Wm});function I6(e){return!Number.isInteger(parseFloat(e.toString()))}function R6(e,t="-"){return e.replace(/\s+/g,t)}function ky(e){const t=R6(e.toString());return t.includes("\\.")?e:I6(e)?t.replace(".","\\."):e}function z6(e,t=""){return[t,ky(e)].filter(Boolean).join("-")}function M6(e,t){return`var(${ky(e)}${t?`, ${t}`:""})`}function V6(e,t=""){return`--${z6(e,t)}`}function Re(e,t){const n=V6(e,t==null?void 0:t.prefix);return{variable:n,reference:M6(n,L6(t==null?void 0:t.fallback))}}function L6(e){return typeof e=="string"?e:e==null?void 0:e.reference}var{definePartsStyle:j6,defineMultiStyleConfig:N6}=de(L9.keys),B6={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},D6={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},O6={pt:"2",px:"4",pb:"5"},$6={fontSize:"1.25em"},W6=j6({container:B6,button:D6,panel:O6,icon:$6}),H6=N6({baseStyle:W6}),{definePartsStyle:hi,defineMultiStyleConfig:U6}=de(j9.keys),ht=oe("alert-fg"),_n=oe("alert-bg"),G6=hi({container:{bg:_n.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:ht.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:ht.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function yf(e){const{theme:t,colorScheme:n}=e,r=_o(`${n}.200`,.16)(t);return{light:`colors.${n}.100`,dark:r}}var K6=hi(e=>{const{colorScheme:t}=e,n=yf(e);return{container:{[ht.variable]:`colors.${t}.500`,[_n.variable]:n.light,_dark:{[ht.variable]:`colors.${t}.200`,[_n.variable]:n.dark}}}}),Y6=hi(e=>{const{colorScheme:t}=e,n=yf(e);return{container:{[ht.variable]:`colors.${t}.500`,[_n.variable]:n.light,_dark:{[ht.variable]:`colors.${t}.200`,[_n.variable]:n.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:ht.reference}}}),Z6=hi(e=>{const{colorScheme:t}=e,n=yf(e);return{container:{[ht.variable]:`colors.${t}.500`,[_n.variable]:n.light,_dark:{[ht.variable]:`colors.${t}.200`,[_n.variable]:n.dark},pt:"2",borderTopWidth:"4px",borderTopColor:ht.reference}}}),X6=hi(e=>{const{colorScheme:t}=e;return{container:{[ht.variable]:"colors.white",[_n.variable]:`colors.${t}.500`,_dark:{[ht.variable]:"colors.gray.900",[_n.variable]:`colors.${t}.200`},color:ht.reference}}}),Q6={subtle:K6,"left-accent":Y6,"top-accent":Z6,solid:X6},J6=U6({baseStyle:G6,variants:Q6,defaultProps:{variant:"subtle",colorScheme:"blue"}}),_y={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},ex={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},tx={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},nx={..._y,...ex,container:tx},Ty=nx,rx=e=>typeof e=="function";function Xe(e,...t){return rx(e)?e(...t):e}var{definePartsStyle:Fy,defineMultiStyleConfig:ox}=de(N9.keys),uo=oe("avatar-border-color"),Au=oe("avatar-bg"),ax={borderRadius:"full",border:"0.2em solid",[uo.variable]:"white",_dark:{[uo.variable]:"colors.gray.800"},borderColor:uo.reference},ix={[Au.variable]:"colors.gray.200",_dark:{[Au.variable]:"colors.whiteAlpha.400"},bgColor:Au.reference},Hm=oe("avatar-background"),sx=e=>{const{name:t,theme:n}=e,r=t?F6({string:t}):"colors.gray.400",o=_6(r)(n);let a="white";return o||(a="gray.800"),{bg:Hm.reference,"&:not([data-loaded])":{[Hm.variable]:r},color:a,[uo.variable]:"colors.white",_dark:{[uo.variable]:"colors.gray.800"},borderColor:uo.reference,verticalAlign:"top"}},lx=Fy(e=>({badge:Xe(ax,e),excessLabel:Xe(ix,e),container:Xe(sx,e)}));function Rn(e){const t=e!=="100%"?Ty[e]:void 0;return Fy({container:{width:e,height:e,fontSize:`calc(${t!=null?t:e} / 2.5)`},excessLabel:{width:e,height:e},label:{fontSize:`calc(${t!=null?t:e} / 2.5)`,lineHeight:e!=="100%"?t!=null?t:e:void 0}})}var ux={"2xs":Rn(4),xs:Rn(6),sm:Rn(8),md:Rn(12),lg:Rn(16),xl:Rn(24),"2xl":Rn(32),full:Rn("100%")},cx=ox({baseStyle:lx,sizes:ux,defaultProps:{size:"md"}}),dx={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold"},co=oe("badge-bg"),on=oe("badge-color"),fx=e=>{const{colorScheme:t,theme:n}=e,r=_o(`${t}.500`,.6)(n);return{[co.variable]:`colors.${t}.500`,[on.variable]:"colors.white",_dark:{[co.variable]:r,[on.variable]:"colors.whiteAlpha.800"},bg:co.reference,color:on.reference}},px=e=>{const{colorScheme:t,theme:n}=e,r=_o(`${t}.200`,.16)(n);return{[co.variable]:`colors.${t}.100`,[on.variable]:`colors.${t}.800`,_dark:{[co.variable]:r,[on.variable]:`colors.${t}.200`},bg:co.reference,color:on.reference}},mx=e=>{const{colorScheme:t,theme:n}=e,r=_o(`${t}.200`,.8)(n);return{[on.variable]:`colors.${t}.500`,_dark:{[on.variable]:r},color:on.reference,boxShadow:`inset 0 0 0px 1px ${on.reference}`}},hx={solid:fx,subtle:px,outline:mx},ha={baseStyle:dx,variants:hx,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:gx,definePartsStyle:yx}=de(B9.keys),bx={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},vx=yx({link:bx}),wx=gx({baseStyle:vx}),xx={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},Ay=e=>{const{colorScheme:t,theme:n}=e;if(t==="gray")return{color:j("inherit","whiteAlpha.900")(e),_hover:{bg:j("gray.100","whiteAlpha.200")(e)},_active:{bg:j("gray.200","whiteAlpha.300")(e)}};const r=_o(`${t}.200`,.12)(n),o=_o(`${t}.200`,.24)(n);return{color:j(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:j(`${t}.50`,r)(e)},_active:{bg:j(`${t}.100`,o)(e)}}},Sx=e=>{const{colorScheme:t}=e,n=j("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?n:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...Xe(Ay,e)}},Cx={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},kx=e=>{var s;const{colorScheme:t}=e;if(t==="gray"){const l=j("gray.100","whiteAlpha.200")(e);return{bg:l,_hover:{bg:j("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:j("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${t}.500`,color:r="white",hoverBg:o=`${t}.600`,activeBg:a=`${t}.700`}=(s=Cx[t])!=null?s:{},i=j(n,`${t}.200`)(e);return{bg:i,color:j(r,"gray.800")(e),_hover:{bg:j(o,`${t}.300`)(e),_disabled:{bg:i}},_active:{bg:j(a,`${t}.400`)(e)}}},_x=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:j(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:j(`${t}.700`,`${t}.500`)(e)}}},Tx={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},Fx={ghost:Ay,outline:Sx,solid:kx,link:_x,unstyled:Tx},Ax={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},Ex={baseStyle:xx,variants:Fx,sizes:Ax,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:_r,defineMultiStyleConfig:Px}=de(s6.keys),Rs=oe("card-bg"),fo=oe("card-padding"),qx=_r({container:{[Rs.variable]:"chakra-body-bg",backgroundColor:Rs.reference,color:"chakra-body-text"},body:{padding:fo.reference,flex:"1 1 0%"},header:{padding:fo.reference},footer:{padding:fo.reference}}),Ix={sm:_r({container:{borderRadius:"base",[fo.variable]:"space.3"}}),md:_r({container:{borderRadius:"md",[fo.variable]:"space.5"}}),lg:_r({container:{borderRadius:"xl",[fo.variable]:"space.7"}})},Rx={elevated:_r({container:{boxShadow:"base",_dark:{[Rs.variable]:"colors.gray.700"}}}),outline:_r({container:{borderWidth:"1px",borderColor:"chakra-border-color"}}),filled:_r({container:{[Rs.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{padding:0},header:{padding:0},footer:{padding:0}}},zx=Px({baseStyle:qx,variants:Rx,sizes:Ix,defaultProps:{variant:"elevated",size:"md"}}),{definePartsStyle:hs,defineMultiStyleConfig:Mx}=de(D9.keys),ga=oe("checkbox-size"),Vx=e=>{const{colorScheme:t}=e;return{w:ga.reference,h:ga.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:j(`${t}.500`,`${t}.200`)(e),borderColor:j(`${t}.500`,`${t}.200`)(e),color:j("white","gray.900")(e),_hover:{bg:j(`${t}.600`,`${t}.300`)(e),borderColor:j(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:j("gray.200","transparent")(e),bg:j("gray.200","whiteAlpha.300")(e),color:j("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:j(`${t}.500`,`${t}.200`)(e),borderColor:j(`${t}.500`,`${t}.200`)(e),color:j("white","gray.900")(e)},_disabled:{bg:j("gray.100","whiteAlpha.100")(e),borderColor:j("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:j("red.500","red.300")(e)}}},Lx={_disabled:{cursor:"not-allowed"}},jx={userSelect:"none",_disabled:{opacity:.4}},Nx={transitionProperty:"transform",transitionDuration:"normal"},Bx=hs(e=>({icon:Nx,container:Lx,control:Xe(Vx,e),label:jx})),Dx={sm:hs({control:{[ga.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:hs({control:{[ga.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:hs({control:{[ga.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},zs=Mx({baseStyle:Bx,sizes:Dx,defaultProps:{size:"md",colorScheme:"blue"}}),ya=Re("close-button-size"),Yo=Re("close-button-bg"),Ox={w:[ya.reference],h:[ya.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[Yo.variable]:"colors.blackAlpha.100",_dark:{[Yo.variable]:"colors.whiteAlpha.100"}},_active:{[Yo.variable]:"colors.blackAlpha.200",_dark:{[Yo.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:Yo.reference},$x={lg:{[ya.variable]:"sizes.10",fontSize:"md"},md:{[ya.variable]:"sizes.8",fontSize:"xs"},sm:{[ya.variable]:"sizes.6",fontSize:"2xs"}},Wx={baseStyle:Ox,sizes:$x,defaultProps:{size:"md"}},{variants:Hx,defaultProps:Ux}=ha,Gx={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm"},Kx={baseStyle:Gx,variants:Hx,defaultProps:Ux},Yx={w:"100%",mx:"auto",maxW:"prose",px:"4"},Zx={baseStyle:Yx},Xx={opacity:.6,borderColor:"inherit"},Qx={borderStyle:"solid"},Jx={borderStyle:"dashed"},e4={solid:Qx,dashed:Jx},t4={baseStyle:Xx,variants:e4,defaultProps:{variant:"solid"}},{definePartsStyle:Lc,defineMultiStyleConfig:n4}=de(O9.keys),Eu=oe("drawer-bg"),Pu=oe("drawer-box-shadow");function $r(e){return Lc(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}var r4={bg:"blackAlpha.600",zIndex:"overlay"},o4={display:"flex",zIndex:"modal",justifyContent:"center"},a4=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[Eu.variable]:"colors.white",[Pu.variable]:"shadows.lg",_dark:{[Eu.variable]:"colors.gray.700",[Pu.variable]:"shadows.dark-lg"},bg:Eu.reference,boxShadow:Pu.reference}},i4={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},s4={position:"absolute",top:"2",insetEnd:"3"},l4={px:"6",py:"2",flex:"1",overflow:"auto"},u4={px:"6",py:"4"},c4=Lc(e=>({overlay:r4,dialogContainer:o4,dialog:Xe(a4,e),header:i4,closeButton:s4,body:l4,footer:u4})),d4={xs:$r("xs"),sm:$r("md"),md:$r("lg"),lg:$r("2xl"),xl:$r("4xl"),full:$r("full")},f4=n4({baseStyle:c4,sizes:d4,defaultProps:{size:"xs"}}),{definePartsStyle:p4,defineMultiStyleConfig:m4}=de($9.keys),h4={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},g4={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},y4={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},b4=p4({preview:h4,input:g4,textarea:y4}),v4=m4({baseStyle:b4}),{definePartsStyle:w4,defineMultiStyleConfig:x4}=de(W9.keys),po=oe("form-control-color"),S4={marginStart:"1",[po.variable]:"colors.red.500",_dark:{[po.variable]:"colors.red.300"},color:po.reference},C4={mt:"2",[po.variable]:"colors.gray.600",_dark:{[po.variable]:"colors.whiteAlpha.600"},color:po.reference,lineHeight:"normal",fontSize:"sm"},k4=w4({container:{width:"100%",position:"relative"},requiredIndicator:S4,helperText:C4}),_4=x4({baseStyle:k4}),{definePartsStyle:T4,defineMultiStyleConfig:F4}=de(H9.keys),mo=oe("form-error-color"),A4={[mo.variable]:"colors.red.500",_dark:{[mo.variable]:"colors.red.300"},color:mo.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},E4={marginEnd:"0.5em",[mo.variable]:"colors.red.500",_dark:{[mo.variable]:"colors.red.300"},color:mo.reference},P4=T4({text:A4,icon:E4}),q4=F4({baseStyle:P4}),I4={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},R4={baseStyle:I4},z4={fontFamily:"heading",fontWeight:"bold"},M4={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},V4={baseStyle:z4,sizes:M4,defaultProps:{size:"xl"}},{definePartsStyle:xn,defineMultiStyleConfig:L4}=de(U9.keys),j4=xn({field:{width:"100%",minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),zn={lg:{fontSize:"lg",px:"4",h:"12",borderRadius:"md"},md:{fontSize:"md",px:"4",h:"10",borderRadius:"md"},sm:{fontSize:"sm",px:"3",h:"8",borderRadius:"sm"},xs:{fontSize:"xs",px:"2",h:"6",borderRadius:"sm"}},N4={lg:xn({field:zn.lg,addon:zn.lg}),md:xn({field:zn.md,addon:zn.md}),sm:xn({field:zn.sm,addon:zn.sm}),xs:xn({field:zn.xs,addon:zn.xs})};function bf(e){const{focusBorderColor:t,errorBorderColor:n}=e;return{focusBorderColor:t||j("blue.500","blue.300")(e),errorBorderColor:n||j("red.500","red.300")(e)}}var B4=xn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=bf(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:j("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ze(t,r),boxShadow:`0 0 0 1px ${Ze(t,r)}`},_focusVisible:{zIndex:1,borderColor:Ze(t,n),boxShadow:`0 0 0 1px ${Ze(t,n)}`}},addon:{border:"1px solid",borderColor:j("inherit","whiteAlpha.50")(e),bg:j("gray.100","whiteAlpha.300")(e)}}}),D4=xn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=bf(e);return{field:{border:"2px solid",borderColor:"transparent",bg:j("gray.100","whiteAlpha.50")(e),_hover:{bg:j("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ze(t,r)},_focusVisible:{bg:"transparent",borderColor:Ze(t,n)}},addon:{border:"2px solid",borderColor:"transparent",bg:j("gray.100","whiteAlpha.50")(e)}}}),O4=xn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=bf(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ze(t,r),boxShadow:`0px 1px 0px 0px ${Ze(t,r)}`},_focusVisible:{borderColor:Ze(t,n),boxShadow:`0px 1px 0px 0px ${Ze(t,n)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),$4=xn({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),W4={outline:B4,filled:D4,flushed:O4,unstyled:$4},Q=L4({baseStyle:j4,sizes:N4,variants:W4,defaultProps:{size:"md",variant:"outline"}}),qu=oe("kbd-bg"),H4={[qu.variable]:"colors.gray.100",_dark:{[qu.variable]:"colors.whiteAlpha.100"},bg:qu.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},U4={baseStyle:H4},G4={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},K4={baseStyle:G4},{defineMultiStyleConfig:Y4,definePartsStyle:Z4}=de(G9.keys),X4={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},Q4=Z4({icon:X4}),J4=Y4({baseStyle:Q4}),{defineMultiStyleConfig:eS,definePartsStyle:tS}=de(K9.keys),Qt=oe("menu-bg"),Iu=oe("menu-shadow"),nS={[Qt.variable]:"#fff",[Iu.variable]:"shadows.sm",_dark:{[Qt.variable]:"colors.gray.700",[Iu.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:Qt.reference,boxShadow:Iu.reference},rS={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[Qt.variable]:"colors.gray.100",_dark:{[Qt.variable]:"colors.whiteAlpha.100"}},_active:{[Qt.variable]:"colors.gray.200",_dark:{[Qt.variable]:"colors.whiteAlpha.200"}},_expanded:{[Qt.variable]:"colors.gray.100",_dark:{[Qt.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:Qt.reference},oS={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},aS={opacity:.6},iS={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},sS={transitionProperty:"common",transitionDuration:"normal"},lS=tS({button:sS,list:nS,item:rS,groupTitle:oS,command:aS,divider:iS}),uS=eS({baseStyle:lS}),{defineMultiStyleConfig:cS,definePartsStyle:jc}=de(Y9.keys),dS={bg:"blackAlpha.600",zIndex:"modal"},fS=e=>{const{isCentered:t,scrollBehavior:n}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:n==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},pS=e=>{const{scrollBehavior:t}=e;return{borderRadius:"md",bg:j("white","gray.700")(e),color:"inherit",my:"16",zIndex:"modal",maxH:t==="inside"?"calc(100% - 7.5rem)":void 0,boxShadow:j("lg","dark-lg")(e)}},mS={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},hS={position:"absolute",top:"2",insetEnd:"3"},gS=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},yS={px:"6",py:"4"},bS=jc(e=>({overlay:dS,dialogContainer:Xe(fS,e),dialog:Xe(pS,e),header:mS,closeButton:hS,body:Xe(gS,e),footer:yS}));function zt(e){return jc(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}var vS={xs:zt("xs"),sm:zt("sm"),md:zt("md"),lg:zt("lg"),xl:zt("xl"),"2xl":zt("2xl"),"3xl":zt("3xl"),"4xl":zt("4xl"),"5xl":zt("5xl"),"6xl":zt("6xl"),full:zt("full")},wS=cS({baseStyle:bS,sizes:vS,defaultProps:{size:"md"}}),xS={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},Ey=xS,{defineMultiStyleConfig:SS,definePartsStyle:Py}=de(Z9.keys),vf=Re("number-input-stepper-width"),qy=Re("number-input-input-padding"),CS=wn(vf).add("0.5rem").toString(),Ru=Re("number-input-bg"),zu=Re("number-input-color"),Mu=Re("number-input-border-color"),kS={[vf.variable]:"sizes.6",[qy.variable]:CS},_S=e=>{var n;var t;return(n=(t=Xe(Q.baseStyle,e))==null?void 0:t.field)!=null?n:{}},TS={width:vf.reference},FS={borderStart:"1px solid",borderStartColor:Mu.reference,color:zu.reference,bg:Ru.reference,[zu.variable]:"colors.chakra-body-text",[Mu.variable]:"colors.chakra-border-color",_dark:{[zu.variable]:"colors.whiteAlpha.800",[Mu.variable]:"colors.whiteAlpha.300"},_active:{[Ru.variable]:"colors.gray.200",_dark:{[Ru.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},AS=Py(e=>{var t;return{root:kS,field:(t=Xe(_S,e))!=null?t:{},stepperGroup:TS,stepper:FS}});function Li(e){var s;var t,n;const r=(t=Q.sizes)==null?void 0:t[e],o={lg:"md",md:"md",sm:"sm",xs:"sm"},a=(s=(n=r.field)==null?void 0:n.fontSize)!=null?s:"md",i=Ey.fontSizes[a];return Py({field:{...r.field,paddingInlineEnd:qy.reference,verticalAlign:"top"},stepper:{fontSize:wn(i).multiply(.75).toString(),_first:{borderTopEndRadius:o[e]},_last:{borderBottomEndRadius:o[e],mt:"-1px",borderTopWidth:1}}})}var ES={xs:Li("xs"),sm:Li("sm"),md:Li("md"),lg:Li("lg")},PS=SS({baseStyle:AS,sizes:ES,variants:Q.variants,defaultProps:Q.defaultProps}),Um,qS={...(Um=Q.baseStyle)==null?void 0:Um.field,textAlign:"center"},IS={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},Gm,qg,RS={outline:e=>{var r;var t,n;return(r=(n=Xe((t=Q.variants)==null?void 0:t.outline,e))==null?void 0:n.field)!=null?r:{}},flushed:e=>{var r;var t,n;return(r=(n=Xe((t=Q.variants)==null?void 0:t.flushed,e))==null?void 0:n.field)!=null?r:{}},filled:e=>{var r;var t,n;return(r=(n=Xe((t=Q.variants)==null?void 0:t.filled,e))==null?void 0:n.field)!=null?r:{}},unstyled:(qg=(Gm=Q.variants)==null?void 0:Gm.unstyled.field)!=null?qg:{}},zS={baseStyle:qS,sizes:IS,variants:RS,defaultProps:Q.defaultProps},{defineMultiStyleConfig:MS,definePartsStyle:VS}=de(X9.keys),ji=Re("popper-bg"),LS=Re("popper-arrow-bg"),Km=Re("popper-arrow-shadow-color"),jS={zIndex:10},NS={[ji.variable]:"colors.white",bg:ji.reference,[LS.variable]:ji.reference,[Km.variable]:"colors.gray.200",_dark:{[ji.variable]:"colors.gray.700",[Km.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},BS={px:3,py:2,borderBottomWidth:"1px"},DS={px:3,py:2},OS={px:3,py:2,borderTopWidth:"1px"},$S={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},WS=VS({popper:jS,content:NS,header:BS,body:DS,footer:OS,closeButton:$S}),HS=MS({baseStyle:WS}),{defineMultiStyleConfig:US,definePartsStyle:ua}=de(Q9.keys),GS=e=>{const{colorScheme:t,theme:n,isIndeterminate:r,hasStripe:o}=e,a=j(Bm(),Bm("1rem","rgba(0,0,0,0.1)"))(e),i=j(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${Ze(n,i)} 50%,
    transparent 100%
  )`;return{...!r&&o&&a,...r?{bgImage:s}:{bgColor:i}}},KS={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},YS=e=>({bg:j("gray.100","whiteAlpha.300")(e)}),ZS=e=>({transitionProperty:"common",transitionDuration:"slow",...GS(e)}),XS=ua(e=>({label:KS,filledTrack:ZS(e),track:YS(e)})),QS={xs:ua({track:{h:"1"}}),sm:ua({track:{h:"2"}}),md:ua({track:{h:"3"}}),lg:ua({track:{h:"4"}})},JS=US({sizes:QS,baseStyle:XS,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:eC,definePartsStyle:gs}=de(J9.keys),tC=e=>{var t;const n=(t=Xe(zs.baseStyle,e))==null?void 0:t.control;return{...n,borderRadius:"full",_checked:{...n==null?void 0:n._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},nC=gs(e=>{var t,n,r,o;return{label:(n=(t=zs).baseStyle)==null?void 0:n.call(t,e).label,container:(o=(r=zs).baseStyle)==null?void 0:o.call(r,e).container,control:tC(e)}}),rC={md:gs({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:gs({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:gs({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},oC=eC({baseStyle:nC,sizes:rC,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:aC,definePartsStyle:iC}=de(e6.keys),Ni=oe("select-bg"),Ym,sC={...(Ym=Q.baseStyle)==null?void 0:Ym.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:Ni.reference,[Ni.variable]:"colors.white",_dark:{[Ni.variable]:"colors.gray.700"},"> option, > optgroup":{bg:Ni.reference}},lC={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},uC=iC({field:sC,icon:lC}),Bi={paddingInlineEnd:"8"},Zm,Xm,Qm,Jm,e0,t0,n0,r0,cC={lg:{...(Zm=Q.sizes)==null?void 0:Zm.lg,field:{...(Xm=Q.sizes)==null?void 0:Xm.lg.field,...Bi}},md:{...(Qm=Q.sizes)==null?void 0:Qm.md,field:{...(Jm=Q.sizes)==null?void 0:Jm.md.field,...Bi}},sm:{...(e0=Q.sizes)==null?void 0:e0.sm,field:{...(t0=Q.sizes)==null?void 0:t0.sm.field,...Bi}},xs:{...(n0=Q.sizes)==null?void 0:n0.xs,field:{...(r0=Q.sizes)==null?void 0:r0.xs.field,...Bi},icon:{insetEnd:"1"}}},dC=aC({baseStyle:uC,sizes:cC,variants:Q.variants,defaultProps:Q.defaultProps}),Vu=oe("skeleton-start-color"),Lu=oe("skeleton-end-color"),fC={[Vu.variable]:"colors.gray.100",[Lu.variable]:"colors.gray.400",_dark:{[Vu.variable]:"colors.gray.800",[Lu.variable]:"colors.gray.600"},background:Vu.reference,borderColor:Lu.reference,opacity:.7,borderRadius:"sm"},pC={baseStyle:fC},ju=oe("skip-link-bg"),mC={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[ju.variable]:"colors.white",_dark:{[ju.variable]:"colors.gray.700"},bg:ju.reference}},hC={baseStyle:mC},{defineMultiStyleConfig:gC,definePartsStyle:Nl}=de(t6.keys),$a=oe("slider-thumb-size"),Wa=oe("slider-track-size"),Dn=oe("slider-bg"),yC=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...gf({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},bC=e=>({...gf({orientation:e.orientation,horizontal:{h:Wa.reference},vertical:{w:Wa.reference}}),overflow:"hidden",borderRadius:"sm",[Dn.variable]:"colors.gray.200",_dark:{[Dn.variable]:"colors.whiteAlpha.200"},_disabled:{[Dn.variable]:"colors.gray.300",_dark:{[Dn.variable]:"colors.whiteAlpha.300"}},bg:Dn.reference}),vC=e=>{const{orientation:t}=e;return{...gf({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}}),w:$a.reference,h:$a.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},wC=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[Dn.variable]:`colors.${t}.500`,_dark:{[Dn.variable]:`colors.${t}.200`},bg:Dn.reference}},xC=Nl(e=>({container:yC(e),track:bC(e),thumb:vC(e),filledTrack:wC(e)})),SC=Nl({container:{[$a.variable]:"sizes.4",[Wa.variable]:"sizes.1"}}),CC=Nl({container:{[$a.variable]:"sizes.3.5",[Wa.variable]:"sizes.1"}}),kC=Nl({container:{[$a.variable]:"sizes.2.5",[Wa.variable]:"sizes.0.5"}}),_C={lg:SC,md:CC,sm:kC},TC=gC({baseStyle:xC,sizes:_C,defaultProps:{size:"md",colorScheme:"blue"}}),br=Re("spinner-size"),FC={width:[br.reference],height:[br.reference]},AC={xs:{[br.variable]:"sizes.3"},sm:{[br.variable]:"sizes.4"},md:{[br.variable]:"sizes.6"},lg:{[br.variable]:"sizes.8"},xl:{[br.variable]:"sizes.12"}},EC={baseStyle:FC,sizes:AC,defaultProps:{size:"md"}},{defineMultiStyleConfig:PC,definePartsStyle:Iy}=de(n6.keys),qC={fontWeight:"medium"},IC={opacity:.8,marginBottom:"2"},RC={verticalAlign:"baseline",fontWeight:"semibold"},zC={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},MC=Iy({container:{},label:qC,helpText:IC,number:RC,icon:zC}),VC={md:Iy({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},LC=PC({baseStyle:MC,sizes:VC,defaultProps:{size:"md"}}),{defineMultiStyleConfig:jC,definePartsStyle:ys}=de(r6.keys),ba=Re("switch-track-width"),Tr=Re("switch-track-height"),Nu=Re("switch-track-diff"),NC=wn.subtract(ba,Tr),Nc=Re("switch-thumb-x"),Zo=Re("switch-bg"),BC=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[ba.reference],height:[Tr.reference],transitionProperty:"common",transitionDuration:"fast",[Zo.variable]:"colors.gray.300",_dark:{[Zo.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[Zo.variable]:`colors.${t}.500`,_dark:{[Zo.variable]:`colors.${t}.200`}},bg:Zo.reference}},DC={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[Tr.reference],height:[Tr.reference],_checked:{transform:`translateX(${Nc.reference})`}},OC=ys(e=>({container:{[Nu.variable]:NC,[Nc.variable]:Nu.reference,_rtl:{[Nc.variable]:wn(Nu).negate().toString()}},track:BC(e),thumb:DC})),$C={sm:ys({container:{[ba.variable]:"1.375rem",[Tr.variable]:"sizes.3"}}),md:ys({container:{[ba.variable]:"1.875rem",[Tr.variable]:"sizes.4"}}),lg:ys({container:{[ba.variable]:"2.875rem",[Tr.variable]:"sizes.6"}})},WC=jC({baseStyle:OC,sizes:$C,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:HC,definePartsStyle:ho}=de(o6.keys),UC=ho({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),Ms={"&[data-is-numeric=true]":{textAlign:"end"}},GC=ho(e=>{const{colorScheme:t}=e;return{th:{color:j("gray.600","gray.400")(e),borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Ms},td:{borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Ms},caption:{color:j("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),KC=ho(e=>{const{colorScheme:t}=e;return{th:{color:j("gray.600","gray.400")(e),borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Ms},td:{borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Ms},caption:{color:j("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e)},td:{background:j(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),YC={simple:GC,striped:KC,unstyled:{}},ZC={sm:ho({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:ho({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:ho({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},XC=HC({baseStyle:UC,variants:YC,sizes:ZC,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),rt=oe("tabs-color"),Bt=oe("tabs-bg"),Di=oe("tabs-border-color"),{defineMultiStyleConfig:QC,definePartsStyle:sn}=de(a6.keys),JC=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},e8=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},t8=e=>{const{align:t="start",orientation:n}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:n==="vertical"?"column":"row"}},n8={p:4},r8=sn(e=>({root:JC(e),tab:e8(e),tablist:t8(e),tabpanel:n8})),o8={sm:sn({tab:{py:1,px:4,fontSize:"sm"}}),md:sn({tab:{fontSize:"md",py:2,px:4}}),lg:sn({tab:{fontSize:"lg",py:3,px:4}})},a8=sn(e=>{const{colorScheme:t,orientation:n}=e,r=n==="vertical",o=n==="vertical"?"borderStart":"borderBottom",a=r?"marginStart":"marginBottom";return{tablist:{[o]:"2px solid",borderColor:"inherit"},tab:{[o]:"2px solid",borderColor:"transparent",[a]:"-2px",_selected:{[rt.variable]:`colors.${t}.600`,_dark:{[rt.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[Bt.variable]:"colors.gray.200",_dark:{[Bt.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:rt.reference,bg:Bt.reference}}}),i8=sn(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[Di.variable]:"transparent",_selected:{[rt.variable]:`colors.${t}.600`,[Di.variable]:"colors.white",_dark:{[rt.variable]:`colors.${t}.300`,[Di.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:Di.reference},color:rt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),s8=sn(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[Bt.variable]:"colors.gray.50",_dark:{[Bt.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[Bt.variable]:"colors.white",[rt.variable]:`colors.${t}.600`,_dark:{[Bt.variable]:"colors.gray.800",[rt.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:rt.reference,bg:Bt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),l8=sn(e=>{const{colorScheme:t,theme:n}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:Ze(n,`${t}.700`),bg:Ze(n,`${t}.100`)}}}}),u8=sn(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[rt.variable]:"colors.gray.600",_dark:{[rt.variable]:"inherit"},_selected:{[rt.variable]:"colors.white",[Bt.variable]:`colors.${t}.600`,_dark:{[rt.variable]:"colors.gray.800",[Bt.variable]:`colors.${t}.300`}},color:rt.reference,bg:Bt.reference}}}),c8=sn({}),d8={line:a8,enclosed:i8,"enclosed-colored":s8,"soft-rounded":l8,"solid-rounded":u8,unstyled:c8},f8=QC({baseStyle:r8,sizes:o8,variants:d8,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),{defineMultiStyleConfig:p8,definePartsStyle:Fr}=de(i6.keys),m8={fontWeight:"medium",lineHeight:1.2,outline:0,borderRadius:"md",_focusVisible:{boxShadow:"outline"}},h8={lineHeight:1.2,overflow:"visible"},g8={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},y8=Fr({container:m8,label:h8,closeButton:g8}),b8={sm:Fr({container:{minH:"5",minW:"5",fontSize:"xs",px:"2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:Fr({container:{minH:"6",minW:"6",fontSize:"sm",px:"2"}}),lg:Fr({container:{minH:"8",minW:"8",fontSize:"md",px:"3"}})},v8={subtle:Fr(e=>{var t;return{container:(t=ha.variants)==null?void 0:t.subtle(e)}}),solid:Fr(e=>{var t;return{container:(t=ha.variants)==null?void 0:t.solid(e)}}),outline:Fr(e=>{var t;return{container:(t=ha.variants)==null?void 0:t.outline(e)}})},w8=p8({variants:v8,baseStyle:y8,sizes:b8,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),o0,x8={...(o0=Q.baseStyle)==null?void 0:o0.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},a0,Ig,S8={outline:e=>{var n;var t;return(n=(t=Q.variants)==null?void 0:t.outline(e).field)!=null?n:{}},flushed:e=>{var n;var t;return(n=(t=Q.variants)==null?void 0:t.flushed(e).field)!=null?n:{}},filled:e=>{var n;var t;return(n=(t=Q.variants)==null?void 0:t.filled(e).field)!=null?n:{}},unstyled:(Ig=(a0=Q.variants)==null?void 0:a0.unstyled.field)!=null?Ig:{}},i0,s0,l0,u0,Rg,zg,Mg,Vg,C8={xs:(Rg=(i0=Q.sizes)==null?void 0:i0.xs.field)!=null?Rg:{},sm:(zg=(s0=Q.sizes)==null?void 0:s0.sm.field)!=null?zg:{},md:(Mg=(l0=Q.sizes)==null?void 0:l0.md.field)!=null?Mg:{},lg:(Vg=(u0=Q.sizes)==null?void 0:u0.lg.field)!=null?Vg:{}},k8={baseStyle:x8,sizes:C8,variants:S8,defaultProps:{size:"md",variant:"outline"}},Oi=Re("tooltip-bg"),Bu=Re("tooltip-fg"),_8=Re("popper-arrow-bg"),T8={bg:Oi.reference,color:Bu.reference,[Oi.variable]:"colors.gray.700",[Bu.variable]:"colors.whiteAlpha.900",_dark:{[Oi.variable]:"colors.gray.300",[Bu.variable]:"colors.gray.900"},[_8.variable]:Oi.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},F8={baseStyle:T8},A8={Accordion:H6,Alert:J6,Avatar:cx,Badge:ha,Breadcrumb:wx,Button:Ex,Checkbox:zs,CloseButton:Wx,Code:Kx,Container:Zx,Divider:t4,Drawer:f4,Editable:v4,Form:_4,FormError:q4,FormLabel:R4,Heading:V4,Input:Q,Kbd:U4,Link:K4,List:J4,Menu:uS,Modal:wS,NumberInput:PS,PinInput:zS,Popover:HS,Progress:JS,Radio:oC,Select:dC,Skeleton:pC,SkipLink:hC,Slider:TC,Spinner:EC,Stat:LC,Switch:WC,Table:XC,Tabs:f8,Tag:w8,Textarea:k8,Tooltip:F8,Card:zx},E8={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},P8=E8,q8={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},I8=q8,R8={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},z8=R8,M8={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},V8=M8,L8={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},j8=L8,N8={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},B8={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},D8={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},O8={property:N8,easing:B8,duration:D8},$8=O8,W8={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},H8=W8,U8={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},G8=U8,K8={breakpoints:I8,zIndices:H8,radii:V8,blur:G8,colors:z8,...Ey,sizes:Ty,shadows:j8,space:_y,borders:P8,transition:$8},Y8={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},Z8={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color",wordWrap:"break-word"}}},X8="ltr",Q8={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},J8={semanticTokens:Y8,direction:X8,...K8,components:A8,styles:Z8,config:Q8},e7=typeof Element<"u",t7=typeof Map=="function",n7=typeof Set=="function",r7=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function bs(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!bs(e[r],t[r]))return!1;return!0}var a;if(t7&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!bs(r.value[1],t.get(r.value[0])))return!1;return!0}if(n7&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(r7&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(e7&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!bs(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var o7=function(t,n){try{return bs(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};function Ry(){const e=k.exports.useContext(Da);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function a7(){const e=of(),t=Ry();return{...e,theme:t}}function i7(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__breakpoints)==null?void 0:s.asArray)==null?void 0:l[i]};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function s7(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__cssMap)==null?void 0:s[i])==null?void 0:l.value};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function l7(e,t,n){const r=Array.isArray(t)?t:[t],o=Array.isArray(n)?n:[n];return a=>{const i=o.filter(Boolean),s=r.map((l,u)=>{var d,f;if(e==="breakpoints")return i7(a,l,(d=i[u])!=null?d:l);const c=`${e}.${l}`;return s7(a,c,(f=i[u])!=null?f:l)});return Array.isArray(t)?s:s[0]}}function u7(e){const{cssVarsRoot:t,theme:n,children:r}=e,o=k.exports.useMemo(()=>g5(n),[n]);return G(S9,{theme:o,children:[T(c7,{root:t}),r]})}function c7({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return T(Ll,{styles:n=>({[t]:n.__cssVars})})}E9({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function d7(){const{colorMode:e}=of();return T(Ll,{styles:t=>{const n=vy(t,"styles.global"),r=Sy(n,{theme:t,colorMode:e});return r?ey(r)(t):void 0}})}var f7=new Set([...y5,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),p7=new Set(["htmlWidth","htmlHeight","htmlSize"]);function m7(e){return p7.has(e)||!f7.has(e)}var h7=({baseStyle:e})=>t=>{const{theme:n,css:r,__css:o,sx:a,...i}=t,s=wy(i,(d,f)=>v5(f)),l=Sy(e,t),u=Object.assign({},o,l,xy(s),a),c=ey(u)(t.theme);return r?[c,r]:c};function Du(e,t){const{baseStyle:n,...r}=t!=null?t:{};r.shouldForwardProp||(r.shouldForwardProp=m7);const o=h7({baseStyle:n}),a=Mc(e,r)(o);return M.forwardRef(function(l,u){const{colorMode:c,forced:d}=of();return M.createElement(a,{ref:u,"data-theme":d?c:void 0,...l})})}function L(e){return k.exports.forwardRef(e)}function zy(e,t={}){var c;const{styleConfig:n,...r}=t,{theme:o,colorMode:a}=a7(),i=e?vy(o,`components.${e}`):void 0,s=n||i,l=rn({theme:o,colorMode:a},(c=s==null?void 0:s.defaultProps)!=null?c:{},xy(T9(r,["children"]))),u=k.exports.useRef({});if(s){const f=E5(s)(l);o7(u.current,f)||(u.current=f)}return u.current}function ut(e,t={}){return zy(e,t)}function Vo(e,t={}){return zy(e,t)}function g7(){const e=new Map;return new Proxy(Du,{apply(t,n,r){return Du(...r)},get(t,n){return e.has(n)||e.set(n,Du(n)),e.get(n)}})}var N=g7();function y7(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function fn(e={}){const{name:t,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:a}=e,i=k.exports.createContext(void 0);i.displayName=t;function s(){var l;const u=k.exports.useContext(i);if(!u&&n){const c=new Error(a!=null?a:y7(r,o));throw c.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,c,s),c}return u}return[i.Provider,s,i]}function b7(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function Bc(...e){return t=>{e.forEach(n=>{b7(n,t)})}}function v7(...e){return k.exports.useMemo(()=>Bc(...e),e)}var ke=(...e)=>e.filter(Boolean).join(" "),c0={path:G("g",{stroke:"currentColor",strokeWidth:"1.5",children:[T("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),T("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),T("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Vr=L((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=ke("chakra-icon",s),d=ut("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},p={ref:t,focusable:a,className:c,__css:f},b=r!=null?r:c0.viewBox;if(n&&typeof n!="string")return M.createElement(N.svg,{as:n,...p,...u});const v=i!=null?i:c0.path;return M.createElement(N.svg,{verticalAlign:"middle",viewBox:b,...p,...u},v)});Vr.displayName="Icon";function w7(e,t=[]){const n=k.exports.useRef(e);return k.exports.useEffect(()=>{n.current=e}),k.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}const wf=k.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Bl=k.exports.createContext({});function x7(){return k.exports.useContext(Bl).visualElement}const Lo=k.exports.createContext(null),Lr=typeof document<"u",Vs=Lr?k.exports.useLayoutEffect:k.exports.useEffect,My=k.exports.createContext({strict:!1});function S7(e,t,n,r){const o=x7(),a=k.exports.useContext(My),i=k.exports.useContext(Lo),s=k.exports.useContext(wf).reducedMotion,l=k.exports.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceId:i?i.id:void 0,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;return Vs(()=>{u&&u.render()}),k.exports.useEffect(()=>{u&&u.animationState&&u.animationState.animateChanges()}),Vs(()=>()=>u&&u.notify("Unmount"),[]),u}function Gr(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function C7(e,t,n){return k.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Gr(n)&&(n.current=r))},[t])}function Ha(e){return typeof e=="string"||Array.isArray(e)}function Dl(e){return typeof e=="object"&&typeof e.start=="function"}const k7=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function Ol(e){return Dl(e.animate)||k7.some(t=>Ha(e[t]))}function Vy(e){return Boolean(Ol(e)||e.variants)}function _7(e,t){if(Ol(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ha(n)?n:void 0,animate:Ha(r)?r:void 0}}return e.inherit!==!1?t:{}}function T7(e){const{initial:t,animate:n}=_7(e,k.exports.useContext(Bl));return k.exports.useMemo(()=>({initial:t,animate:n}),[d0(t),d0(n)])}function d0(e){return Array.isArray(e)?e.join(" "):e}const gn=e=>({isEnabled:t=>e.some(n=>!!t[n])}),Ua={measureLayout:gn(["layout","layoutId","drag"]),animation:gn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:gn(["exit"]),drag:gn(["drag","dragControls"]),focus:gn(["whileFocus"]),hover:gn(["whileHover","onHoverStart","onHoverEnd"]),tap:gn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:gn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:gn(["whileInView","onViewportEnter","onViewportLeave"])};function F7(e){for(const t in e)t==="projectionNodeConstructor"?Ua.projectionNodeConstructor=e[t]:Ua[t].Component=e[t]}function $l(e){const t=k.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const va={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let A7=1;function E7(){return $l(()=>{if(va.hasEverUpdated)return A7++})}const xf=k.exports.createContext({});class P7 extends M.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const Ly=k.exports.createContext({}),q7=Symbol.for("motionComponentSymbol");function I7({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:o,Component:a}){e&&F7(e);function i(l,u){const c={...k.exports.useContext(wf),...l,layoutId:R7(l)},{isStatic:d}=c;let f=null;const p=T7(l),b=d?void 0:E7(),v=o(l,d);if(!d&&Lr){p.visualElement=S7(a,v,c,t);const C=k.exports.useContext(My).strict,g=k.exports.useContext(Ly);p.visualElement&&(f=p.visualElement.loadFeatures(c,C,e,b,n||Ua.projectionNodeConstructor,g))}return G(P7,{visualElement:p.visualElement,props:c,children:[f,T(Bl.Provider,{value:p,children:r(a,l,b,C7(v,p.visualElement,u),v,d,p.visualElement)})]})}const s=k.exports.forwardRef(i);return s[q7]=a,s}function R7({layoutId:e}){const t=k.exports.useContext(xf).id;return t&&e!==void 0?t+"-"+e:e}function z7(e){function t(r,o={}){return I7(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const M7=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","text","tspan","use","view"];function Sf(e){return typeof e!="string"||e.includes("-")?!1:!!(M7.indexOf(e)>-1||/[A-Z]/.test(e))}const Ls={};function V7(e){Object.assign(Ls,e)}const js=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jo=new Set(js);function jy(e,{layout:t,layoutId:n}){return jo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ls[e]||e==="opacity")}const dn=e=>!!(e!=null&&e.getVelocity),L7={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},j7=(e,t)=>js.indexOf(e)-js.indexOf(t);function N7({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,a){let i="";t.sort(j7);for(const s of t)i+=`${L7[s]||s}(${e[s]}) `;return n&&!e.z&&(i+="translateZ(0)"),i=i.trim(),a?i=a(e,o?"":i):r&&o&&(i="none"),i}function Ny(e){return e.startsWith("--")}const B7=(e,t)=>t&&typeof e=="number"?t.transform(e):e,By=(e,t)=>n=>Math.max(Math.min(n,t),e),wa=e=>e%1?Number(e.toFixed(5)):e,Ga=/(-)?([\d]*\.?[\d])+/g,Dc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,D7=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function gi(e){return typeof e=="string"}const jr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},xa=Object.assign(Object.assign({},jr),{transform:By(0,1)}),$i=Object.assign(Object.assign({},jr),{default:1}),yi=e=>({test:t=>gi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Vn=yi("deg"),ln=yi("%"),D=yi("px"),O7=yi("vh"),$7=yi("vw"),f0=Object.assign(Object.assign({},ln),{parse:e=>ln.parse(e)/100,transform:e=>ln.transform(e*100)}),Cf=(e,t)=>n=>Boolean(gi(n)&&D7.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Dy=(e,t,n)=>r=>{if(!gi(r))return r;const[o,a,i,s]=r.match(Ga);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:s!==void 0?parseFloat(s):1}},Kr={test:Cf("hsl","hue"),parse:Dy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ln.transform(wa(t))+", "+ln.transform(wa(n))+", "+wa(xa.transform(r))+")"},W7=By(0,255),Ou=Object.assign(Object.assign({},jr),{transform:e=>Math.round(W7(e))}),xr={test:Cf("rgb","red"),parse:Dy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ou.transform(e)+", "+Ou.transform(t)+", "+Ou.transform(n)+", "+wa(xa.transform(r))+")"};function H7(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Oc={test:Cf("#"),parse:H7,transform:xr.transform},Ke={test:e=>xr.test(e)||Oc.test(e)||Kr.test(e),parse:e=>xr.test(e)?xr.parse(e):Kr.test(e)?Kr.parse(e):Oc.parse(e),transform:e=>gi(e)?e:e.hasOwnProperty("red")?xr.transform(e):Kr.transform(e)},Oy="${c}",$y="${n}";function U7(e){var t,n,r,o;return isNaN(e)&&gi(e)&&((n=(t=e.match(Ga))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(Dc))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function Wy(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(Dc);r&&(n=r.length,e=e.replace(Dc,Oy),t.push(...r.map(Ke.parse)));const o=e.match(Ga);return o&&(e=e.replace(Ga,$y),t.push(...o.map(jr.parse))),{values:t,numColors:n,tokenised:e}}function Hy(e){return Wy(e).values}function Uy(e){const{values:t,numColors:n,tokenised:r}=Wy(e),o=t.length;return a=>{let i=r;for(let s=0;s<o;s++)i=i.replace(s<n?Oy:$y,s<n?Ke.transform(a[s]):wa(a[s]));return i}}const G7=e=>typeof e=="number"?0:e;function K7(e){const t=Hy(e);return Uy(e)(t.map(G7))}const Tn={test:U7,parse:Hy,createTransformer:Uy,getAnimatableNone:K7},Y7=new Set(["brightness","contrast","saturate","opacity"]);function Z7(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ga)||[];if(!r)return e;const o=n.replace(r,"");let a=Y7.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const X7=/([a-z-]*)\(.*?\)/g,$c=Object.assign(Object.assign({},Tn),{getAnimatableNone:e=>{const t=e.match(X7);return t?t.map(Z7).join(" "):e}}),p0={...jr,transform:Math.round},Gy={borderWidth:D,borderTopWidth:D,borderRightWidth:D,borderBottomWidth:D,borderLeftWidth:D,borderRadius:D,radius:D,borderTopLeftRadius:D,borderTopRightRadius:D,borderBottomRightRadius:D,borderBottomLeftRadius:D,width:D,maxWidth:D,height:D,maxHeight:D,size:D,top:D,right:D,bottom:D,left:D,padding:D,paddingTop:D,paddingRight:D,paddingBottom:D,paddingLeft:D,margin:D,marginTop:D,marginRight:D,marginBottom:D,marginLeft:D,rotate:Vn,rotateX:Vn,rotateY:Vn,rotateZ:Vn,scale:$i,scaleX:$i,scaleY:$i,scaleZ:$i,skew:Vn,skewX:Vn,skewY:Vn,distance:D,translateX:D,translateY:D,translateZ:D,x:D,y:D,z:D,perspective:D,transformPerspective:D,opacity:xa,originX:f0,originY:f0,originZ:D,zIndex:p0,fillOpacity:xa,strokeOpacity:xa,numOctaves:p0};function kf(e,t,n,r){const{style:o,vars:a,transform:i,transformKeys:s,transformOrigin:l}=e;s.length=0;let u=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(Ny(f)){a[f]=p;continue}const b=Gy[f],v=B7(p,b);if(jo.has(f)){if(u=!0,i[f]=v,s.push(f),!d)continue;p!==(b.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=v):o[f]=v}if(t.transform||(u||r?o.transform=N7(e,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:b=0}=l;o.transformOrigin=`${f} ${p} ${b}`}}const _f=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function Ky(e,t,n){for(const r in t)!dn(t[r])&&!jy(r,n)&&(e[r]=t[r])}function Q7({transformTemplate:e},t,n){return k.exports.useMemo(()=>{const r=_f();return kf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function J7(e,t,n){const r=e.style||{},o={};return Ky(o,r,e),Object.assign(o,Q7(e,t,n)),e.transformValues?e.transformValues(o):o}function ek(e,t,n){const r={},o=J7(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=o,r}const tk=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],nk=["whileTap","onTap","onTapStart","onTapCancel"],rk=["onPan","onPanStart","onPanSessionStart","onPanEnd"],ok=["whileInView","onViewportEnter","onViewportLeave","viewport"],ak=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...ok,...nk,...tk,...rk]);function Ns(e){return ak.has(e)}let Yy=e=>!Ns(e);function ik(e){!e||(Yy=t=>t.startsWith("on")?!Ns(t):e(t))}try{ik(require("@emotion/is-prop-valid").default)}catch{}function sk(e,t,n){const r={};for(const o in e)(Yy(o)||n===!0&&Ns(o)||!t&&!Ns(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function m0(e,t,n){return typeof e=="string"?e:D.transform(t+n*e)}function lk(e,t,n){const r=m0(t,e.x,e.width),o=m0(n,e.y,e.height);return`${r} ${o}`}const uk={offset:"stroke-dashoffset",array:"stroke-dasharray"},ck={offset:"strokeDashoffset",array:"strokeDasharray"};function dk(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?uk:ck;e[a.offset]=D.transform(-r);const i=D.transform(t),s=D.transform(n);e[a.array]=`${i} ${s}`}function Tf(e,{attrX:t,attrY:n,originX:r,originY:o,pathLength:a,pathSpacing:i=1,pathOffset:s=0,...l},u,c){kf(e,l,u,c),e.attrs=e.style,e.style={};const{attrs:d,style:f,dimensions:p}=e;d.transform&&(p&&(f.transform=d.transform),delete d.transform),p&&(r!==void 0||o!==void 0||f.transform)&&(f.transformOrigin=lk(p,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),a!==void 0&&dk(d,a,i,s,!1)}const Zy=()=>({..._f(),attrs:{}});function fk(e,t){const n=k.exports.useMemo(()=>{const r=Zy();return Tf(r,t,{enableHardwareAcceleration:!1},e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};Ky(r,e.style,e),n.style={...r,...n.style}}return n}function pk(e=!1){return(n,r,o,a,{latestValues:i},s)=>{const u=(Sf(n)?fk:ek)(r,i,s),d={...sk(r,typeof n=="string",e),...u,ref:a};return o&&(d["data-projection-id"]=o),k.exports.createElement(n,d)}}const Xy=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function Qy(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const Jy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function e1(e,t,n,r){Qy(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(Jy.has(o)?o:Xy(o),t.attrs[o])}function Ff(e){const{style:t}=e,n={};for(const r in t)(dn(t[r])||jy(r,e))&&(n[r]=t[r]);return n}function t1(e){const t=Ff(e);for(const n in e)if(dn(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function Af(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}const Ka=e=>Array.isArray(e),mk=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),n1=e=>Ka(e)?e[e.length-1]||0:e;function vs(e){const t=dn(e)?e.get():e;return mk(t)?t.toValue():t}function hk({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const i={latestValues:gk(r,o,a,e),renderState:t()};return n&&(i.mount=s=>n(r,s,i)),i}const r1=e=>(t,n)=>{const r=k.exports.useContext(Bl),o=k.exports.useContext(Lo),a=()=>hk(e,t,r,o);return n?a():$l(a)};function gk(e,t,n,r){const o={},a=r(e);for(const f in a)o[f]=vs(a[f]);let{initial:i,animate:s}=e;const l=Ol(e),u=Vy(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||i===!1;const d=c?s:i;return d&&typeof d!="boolean"&&!Dl(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const b=Af(e,p);if(!b)return;const{transitionEnd:v,transition:C,...g}=b;for(const m in g){let h=g[m];if(Array.isArray(h)){const S=c?h.length-1:0;h=h[S]}h!==null&&(o[m]=h)}for(const m in v)o[m]=v[m]}),o}const yk={useVisualState:r1({scrapeMotionValuesFromProps:t1,createRenderState:Zy,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Tf(n,r,{enableHardwareAcceleration:!1},e.transformTemplate),e1(t,n)}})},bk={useVisualState:r1({scrapeMotionValuesFromProps:Ff,createRenderState:_f})};function vk(e,{forwardMotionProps:t=!1},n,r,o){return{...Sf(e)?yk:bk,preloadedFeatures:n,useRender:pk(t),createVisualElement:r,projectionNodeConstructor:o,Component:e}}var ie;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(ie||(ie={}));function Wl(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Wc(e,t,n,r){k.exports.useEffect(()=>{const o=e.current;if(n&&o)return Wl(o,t,n,r)},[e,t,n,r])}function wk({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(ie.Focus,!0)},o=()=>{n&&n.setActive(ie.Focus,!1)};Wc(t,"focus",e?r:void 0),Wc(t,"blur",e?o:void 0)}function o1(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function a1(e){return!!e.touches}function xk(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const Sk={pageX:0,pageY:0};function Ck(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||Sk;return{x:r[t+"X"],y:r[t+"Y"]}}function kk(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function Ef(e,t="page"){return{point:a1(e)?Ck(e,t):kk(e,t)}}const i1=(e,t=!1)=>{const n=r=>e(r,Ef(r));return t?xk(n):n},_k=()=>Lr&&window.onpointerdown===null,Tk=()=>Lr&&window.ontouchstart===null,Fk=()=>Lr&&window.onmousedown===null,Ak={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},Ek={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function s1(e){return _k()?e:Tk()?Ek[e]:Fk()?Ak[e]:e}function go(e,t,n,r){return Wl(e,s1(t),i1(n,t==="pointerdown"),r)}function Bs(e,t,n,r){return Wc(e,s1(t),n&&i1(n,t==="pointerdown"),r)}function l1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const h0=l1("dragHorizontal"),g0=l1("dragVertical");function u1(e){let t=!1;if(e==="y")t=g0();else if(e==="x")t=h0();else{const n=h0(),r=g0();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function c1(){const e=u1(!0);return e?(e(),!1):!0}function y0(e,t,n){return(r,o)=>{!o1(r)||c1()||(e.animationState&&e.animationState.setActive(ie.Hover,t),n&&n(r,o))}}function Pk({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){Bs(r,"pointerenter",e||n?y0(r,!0,e):void 0,{passive:!e}),Bs(r,"pointerleave",t||n?y0(r,!1,t):void 0,{passive:!t})}const d1=(e,t)=>t?e===t?!0:d1(e,t.parentElement):!1;function Pf(e){return k.exports.useEffect(()=>()=>e(),[])}const qk=(e,t)=>n=>t(e(n)),Hl=(...e)=>e.reduce(qk);function Ik({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:o}){const a=e||t||n||r,i=k.exports.useRef(!1),s=k.exports.useRef(null),l={passive:!(t||e||n||p)};function u(){s.current&&s.current(),s.current=null}function c(){return u(),i.current=!1,o.animationState&&o.animationState.setActive(ie.Tap,!1),!c1()}function d(b,v){!c()||(d1(o.current,b.target)?e&&e(b,v):n&&n(b,v))}function f(b,v){!c()||n&&n(b,v)}function p(b,v){u(),!i.current&&(i.current=!0,s.current=Hl(go(window,"pointerup",d,l),go(window,"pointercancel",f,l)),o.animationState&&o.animationState.setActive(ie.Tap,!0),t&&t(b,v))}Bs(o,"pointerdown",a?p:void 0,l),Pf(u)}const Rk="production",f1=typeof process>"u"||process.env===void 0?Rk:"production",b0=new Set;function p1(e,t,n){e||b0.has(t)||(console.warn(t),n&&console.warn(n),b0.add(t))}const Hc=new WeakMap,$u=new WeakMap,zk=e=>{const t=Hc.get(e.target);t&&t(e)},Mk=e=>{e.forEach(zk)};function Vk({root:e,...t}){const n=e||document;$u.has(n)||$u.set(n,{});const r=$u.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(Mk,{root:e,...t})),r[o]}function Lk(e,t,n){const r=Vk(t);return Hc.set(e,n),r.observe(e),()=>{Hc.delete(e),r.unobserve(e)}}function jk({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:o={}}){const a=k.exports.useRef({hasEnteredView:!1,isInView:!1});let i=Boolean(t||n||r);o.once&&a.current.hasEnteredView&&(i=!1),(typeof IntersectionObserver>"u"?Dk:Bk)(i,a.current,e,o)}const Nk={some:0,all:1};function Bk(e,t,n,{root:r,margin:o,amount:a="some",once:i}){k.exports.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:o,threshold:typeof a=="number"?a:Nk[a]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,i&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(ie.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return Lk(n.current,s,l)},[e,r,o,a])}function Dk(e,t,n,{fallback:r=!0}){k.exports.useEffect(()=>{!e||!r||(f1!=="production"&&p1(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:o}=n.getProps();o&&o(null),n.animationState&&n.animationState.setActive(ie.InView,!0)}))},[e])}const Wn=e=>t=>(e(t),null),Ok={inView:Wn(jk),tap:Wn(Ik),focus:Wn(wk),hover:Wn(Pk)};function m1(){const e=k.exports.useContext(Lo);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=k.exports.useId();return k.exports.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}function $k(){return Wk(k.exports.useContext(Lo))}function Wk(e){return e===null?!0:e.isPresent}function h1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Ds=e=>e*1e3;var Hk=function(){},Os=function(){};const qf=e=>e,g1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Uk=1e-7,Gk=12;function Kk(e,t,n,r,o){let a,i,s=0;do i=t+(n-t)/2,a=g1(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>Uk&&++s<Gk);return i}function Yk(e,t,n,r){if(e===t&&n===r)return qf;const o=a=>Kk(a,0,1,e,n);return a=>a===0||a===1?a:g1(o(a),t,r)}const If=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Rf=e=>t=>1-e(1-t),zf=e=>e*e,Zk=Rf(zf),y1=If(zf),b1=e=>1-Math.sin(Math.acos(e)),Mf=Rf(b1),Xk=If(Mf),v1=(e=1.525)=>t=>t*t*((e+1)*t-e),Vf=v1(),Qk=Rf(Vf),Jk=If(Vf),e_=e=>{const t=v1(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},t_=e_(),n_={linear:qf,easeIn:zf,easeInOut:y1,easeOut:Zk,circIn:b1,circInOut:Xk,circOut:Mf,backIn:Vf,backInOut:Jk,backOut:Qk,anticipate:t_},v0=e=>{if(Array.isArray(e)){Os(e.length===4);const[t,n,r,o]=e;return Yk(t,n,r,o)}else if(typeof e=="string")return n_[e];return e},r_=e=>Array.isArray(e)&&typeof e[0]!="number",w0=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Tn.test(t)&&!t.startsWith("url(")),fr=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Wi=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Wu=()=>({type:"keyframes",ease:"linear",duration:.3}),o_=e=>({type:"keyframes",duration:.8,values:e}),x0={x:fr,y:fr,z:fr,rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scaleX:Wi,scaleY:Wi,scale:Wi,opacity:Wu,backgroundColor:Wu,color:Wu,default:Wi},a_=(e,t)=>{let n;return Ka(t)?n=o_:n=x0[e]||x0.default,{to:t,...n(t)}},i_={...Gy,color:Ke,backgroundColor:Ke,outlineColor:Ke,fill:Ke,stroke:Ke,borderColor:Ke,borderTopColor:Ke,borderRightColor:Ke,borderBottomColor:Ke,borderLeftColor:Ke,filter:$c,WebkitFilter:$c},Lf=e=>i_[e];function jf(e,t){var n;let r=Lf(e);return r!==$c&&(r=Tn),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const s_={current:!1},w1=1/60*1e3,l_=typeof performance<"u"?()=>performance.now():()=>Date.now(),x1=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(l_()),w1);function u_(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&i.add(l),f.indexOf(l)===-1&&(f.push(l),d&&o&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),i.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),i.has(c)&&(s.schedule(c),e())}o=!1,a&&(a=!1,s.process(l))}};return s}const c_=40;let Uc=!0,Ya=!1,Gc=!1;const yo={delta:0,timestamp:0},bi=["read","update","preRender","render","postRender"],Ul=bi.reduce((e,t)=>(e[t]=u_(()=>Ya=!0),e),{}),At=bi.reduce((e,t)=>{const n=Ul[t];return e[t]=(r,o=!1,a=!1)=>(Ya||f_(),n.schedule(r,o,a)),e},{}),tr=bi.reduce((e,t)=>(e[t]=Ul[t].cancel,e),{}),Hu=bi.reduce((e,t)=>(e[t]=()=>Ul[t].process(yo),e),{}),d_=e=>Ul[e].process(yo),S1=e=>{Ya=!1,yo.delta=Uc?w1:Math.max(Math.min(e-yo.timestamp,c_),1),yo.timestamp=e,Gc=!0,bi.forEach(d_),Gc=!1,Ya&&(Uc=!1,x1(S1))},f_=()=>{Ya=!0,Uc=!0,Gc||x1(S1)},$s=()=>yo;function C1(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(tr.read(r),e(a-t))};return At.read(r,!0),()=>tr.read(r)}const Ws=(e,t,n)=>Math.min(Math.max(n,e),t),we=(e,t,n)=>-n*e+n*t+e;function Uu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function p_({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=Uu(l,s,e+1/3),a=Uu(l,s,e),i=Uu(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const Gu=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},m_=[Oc,xr,Kr],h_=e=>m_.find(t=>t.test(e));function S0(e){const t=h_(e);let n=t.parse(e);return t===Kr&&(n=p_(n)),n}const k1=(e,t)=>{const n=S0(e),r=S0(t),o={...n};return a=>(o.red=Gu(n.red,r.red,a),o.green=Gu(n.green,r.green,a),o.blue=Gu(n.blue,r.blue,a),o.alpha=we(n.alpha,r.alpha,a),xr.transform(o))};function _1(e,t){return typeof e=="number"?n=>we(e,t,n):Ke.test(e)?k1(e,t):F1(e,t)}const T1=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>_1(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},g_=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=_1(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function C0(e){const t=Tn.parse(e),n=t.length;let r=0,o=0;for(let a=0;a<n;a++)r||typeof t[a]=="number"?r++:o++;return{parsed:t,numNumbers:r,numColors:o}}const F1=(e,t)=>{const n=Tn.createTransformer(t),r=C0(e),o=C0(t);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?Hl(T1(r.parsed,o.parsed),n):i=>`${i>0?t:e}`},Hs=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},k0=(e,t)=>n=>we(e,t,n);function y_(e){return typeof e=="number"?k0:typeof e=="string"?Ke.test(e)?k1:F1:Array.isArray(e)?T1:typeof e=="object"?g_:k0}function b_(e,t,n){const r=[],o=n||y_(e[0]),a=e.length-1;for(let i=0;i<a;i++){let s=o(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;s=Hl(l,s)}r.push(s)}return r}function A1(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;Os(a===t.length),Os(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const i=b_(t,r,o),s=i.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Hs(e[c],e[c+1],u);return i[c](d)};return n?u=>l(Ws(e[0],e[a-1],u)):l}function v_(e,t){return e.map(()=>t||y1).splice(0,e.length-1)}function w_(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function x_(e,t){return e.map(n=>n*t)}function S_({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},i=Array.isArray(t)?t:[e,t],s=x_(r&&r.length===i.length?r:w_(i),o);function l(){return A1(s,i,{ease:Array.isArray(n)?n:v_(i,n)})}let u=l();return{next:c=>(a.value=u(c),a.done=c>=o,a),flipTarget:()=>{i.reverse(),u=l()}}}const Ku=.001,C_=.01,_0=10,k_=.05,__=1;function T_({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;Hk(e<=_0*1e3);let i=1-t;i=Ws(k_,__,i),e=Ws(C_,_0,e/1e3),i<1?(o=u=>{const c=u*i,d=c*e,f=c-n,p=Kc(u,i),b=Math.exp(-d);return Ku-f/p*b},a=u=>{const d=u*i*e,f=d*n+n,p=Math.pow(i,2)*Math.pow(u,2)*e,b=Math.exp(-d),v=Kc(Math.pow(u,2),i);return(-o(u)+Ku>0?-1:1)*((f-p)*b)/v}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Ku+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=A_(o,a,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:i*2*Math.sqrt(r*u),duration:e}}}const F_=12;function A_(e,t,n){let r=n;for(let o=1;o<F_;o++)r=r-e(r)/t(r);return r}function Kc(e,t){return e*Math.sqrt(1-t*t)}const E_=["duration","bounce"],P_=["stiffness","damping","mass"];function T0(e,t){return t.some(n=>e[n]!==void 0)}function q_(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!T0(e,P_)&&T0(e,E_)){const n=T_(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function E1({from:e=0,to:t=1,restSpeed:n=2,restDelta:r=.01,...o}){const a={done:!1,value:e};let{stiffness:i,damping:s,mass:l,velocity:u,duration:c,isResolvedFromDuration:d}=q_(o),f=F0,p=F0;function b(){const v=u?-(u/1e3):0,C=t-e,g=s/(2*Math.sqrt(i*l)),m=Math.sqrt(i/l)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),g<1){const h=Kc(m,g);f=S=>{const F=Math.exp(-g*m*S);return t-F*((v+g*m*C)/h*Math.sin(h*S)+C*Math.cos(h*S))},p=S=>{const F=Math.exp(-g*m*S);return g*m*F*(Math.sin(h*S)*(v+g*m*C)/h+C*Math.cos(h*S))-F*(Math.cos(h*S)*(v+g*m*C)-h*C*Math.sin(h*S))}}else if(g===1)f=h=>t-Math.exp(-m*h)*(C+(v+m*C)*h);else{const h=m*Math.sqrt(g*g-1);f=S=>{const F=Math.exp(-g*m*S),E=Math.min(h*S,300);return t-F*((v+g*m*C)*Math.sinh(E)+h*C*Math.cosh(E))/h}}}return b(),{next:v=>{const C=f(v);if(d)a.done=v>=c;else{const g=p(v)*1e3,m=Math.abs(g)<=n,h=Math.abs(t-C)<=r;a.done=m&&h}return a.value=a.done?t:C,a},flipTarget:()=>{u=-u,[e,t]=[t,e],b()}}}E1.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const F0=e=>0;function I_({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i={done:!1,value:t};let s=n*e;const l=t+s,u=a===void 0?l:a(l);return u!==l&&(s=u-t),{next:c=>{const d=-s*Math.exp(-c/r);return i.done=!(d>o||d<-o),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const R_={decay:I_,keyframes:S_,spring:E1};function P1(e,t,n=0){return e-t-n}function z_(e,t=0,n=0,r=!0){return r?P1(t+-e,t,n):t-(e-t)+n}function M_(e,t,n,r){return r?e>=t+n:e<=-n}const V_=e=>{const t=({delta:n})=>e(n);return{start:()=>At.update(t,!0),stop:()=>tr.update(t)}};function q1({from:e,autoplay:t=!0,driver:n=V_,elapsed:r=0,repeat:o=0,repeatType:a="loop",repeatDelay:i=0,onPlay:s,onStop:l,onComplete:u,onRepeat:c,onUpdate:d,type:f="keyframes",...p}){var b,v;let{to:C}=p,g,m=0,h=p.duration,S,F=!1,E=!0,A;const q=R_[Array.isArray(C)?"keyframes":f];!((v=(b=q).needsInterpolation)===null||v===void 0)&&v.call(b,e,C)&&(A=A1([0,100],[e,C],{clamp:!1}),e=0,C=100);const B=q({...p,from:e,to:C});function V(){m++,a==="reverse"?(E=m%2===0,r=z_(r,h,i,E)):(r=P1(r,h,i),a==="mirror"&&B.flipTarget()),F=!1,c&&c()}function _e(){g.stop(),u&&u()}function Le(Ht){if(E||(Ht=-Ht),r+=Ht,!F){const Ut=B.next(Math.max(0,r));S=Ut.value,A&&(S=A(S)),F=E?Ut.done:r<=0}d==null||d(S),F&&(m===0&&(h!=null||(h=r)),m<o?M_(r,h,i,E)&&V():_e())}function St(){s==null||s(),g=n(Le),g.start()}return t&&St(),{stop:()=>{l==null||l(),g.stop()}}}function I1(e,t){return t?e*(1e3/t):0}function L_({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:p}){let b;function v(h){return n!==void 0&&h<n||r!==void 0&&h>r}function C(h){return n===void 0?r:r===void 0||Math.abs(n-h)<Math.abs(r-h)?n:r}function g(h){b==null||b.stop(),b=q1({...h,driver:c,onUpdate:S=>{var F;d==null||d(S),(F=h.onUpdate)===null||F===void 0||F.call(h,S)},onComplete:f,onStop:p})}function m(h){g({type:"spring",stiffness:i,damping:s,restDelta:l,...h})}if(v(e))m({from:e,velocity:t,to:C(e)});else{let h=o*t+e;typeof u<"u"&&(h=u(h));const S=C(h),F=S===n?-1:1;let E,A;const q=B=>{E=A,A=B,t=I1(B-E,$s().delta),(F===1&&B>S||F===-1&&B<S)&&m({from:B,to:S,velocity:t})};g({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:u,onUpdate:v(h)?q:void 0})}return{stop:()=>b==null?void 0:b.stop()}}function j_({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:i,repeatDelay:s,from:l,...u}){return!!Object.keys(u).length}function N_({ease:e,times:t,yoyo:n,flip:r,loop:o,...a}){const i={...a};return t&&(i.offset=t),a.duration&&(i.duration=Ds(a.duration)),a.repeatDelay&&(i.repeatDelay=Ds(a.repeatDelay)),e&&(i.ease=r_(e)?e.map(v0):v0(e)),a.type==="tween"&&(i.type="keyframes"),(n||o||r)&&(n?i.repeatType="reverse":o?i.repeatType="loop":r&&(i.repeatType="mirror"),i.repeat=o||n||r||a.repeat),a.type!=="spring"&&(i.type="keyframes"),i}function B_(e,t){var n,r;return(r=(n=(Nf(e,t)||{}).delay)!==null&&n!==void 0?n:e.delay)!==null&&r!==void 0?r:0}function D_(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function O_(e,t,n){return Array.isArray(t.to)&&e.duration===void 0&&(e.duration=.8),D_(t),j_(e)||(e={...e,...a_(n,t.to)}),{...t,...N_(e)}}function $_(e,t,n,r,o){const a=Nf(r,e)||{};let i=a.from!==void 0?a.from:t.get();const s=w0(e,n);i==="none"&&s&&typeof n=="string"?i=jf(e,n):A0(i)&&typeof n=="string"?i=E0(n):!Array.isArray(n)&&A0(n)&&typeof i=="string"&&(n=E0(i));const l=w0(e,i);function u(){const d={from:i,to:n,velocity:t.getVelocity(),onComplete:o,onUpdate:f=>t.set(f)};return a.type==="inertia"||a.type==="decay"?L_({...d,...a}):q1({...O_(a,d,e),onUpdate:f=>{d.onUpdate(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{d.onComplete(),a.onComplete&&a.onComplete()}})}function c(){const d=n1(n);return t.set(d),o(),a.onUpdate&&a.onUpdate(d),a.onComplete&&a.onComplete(),{stop:()=>{}}}return!l||!s||a.type===!1?c:u}function A0(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function E0(e){return typeof e=="number"?0:jf("",e)}function Nf(e,t){return e[t]||e.default||e}function Bf(e,t,n,r={}){return s_.current&&(r={type:!1}),t.start(o=>{let a;const i=$_(e,t,n,r,o),s=B_(r,e),l=()=>a=i();let u;return s?u=C1(l,Ds(s)):l(),()=>{u&&u(),a&&a.stop()}})}const W_=e=>/^\-?\d*\.?\d+$/.test(e),H_=e=>/^0[^.\s]+$/.test(e);function Df(e,t){e.indexOf(t)===-1&&e.push(t)}function Of(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Sa{constructor(){this.subscriptions=[]}add(t){return Df(this.subscriptions,t),()=>Of(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(!!o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const i=this.subscriptions[a];i&&i(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const U_=e=>!isNaN(parseFloat(e));class G_{constructor(t){this.version="7.6.18",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Sa,this.velocityUpdateSubscribers=new Sa,this.renderSubscribers=new Sa,this.canTrackVelocity=!1,this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:a}=$s();this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,At.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.updateSubscribers.notify(this.current),this.velocityUpdateSubscribers.getSize()&&this.velocityUpdateSubscribers.notify(this.getVelocity()),r&&this.renderSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>At.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.velocityUpdateSubscribers.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=U_(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}onRenderRequest(t){return t(this.get()),this.renderSubscribers.add(t)}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?I1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n)}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()}}function To(e){return new G_(e)}const R1=e=>t=>t.test(e),K_={test:e=>e==="auto",parse:e=>e},z1=[jr,D,ln,Vn,$7,O7,K_],Xo=e=>z1.find(R1(e)),Y_=[...z1,Ke,Tn],Z_=e=>Y_.find(R1(e));function X_(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Q_(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Gl(e,t,n){const r=e.getProps();return Af(r,t,n!==void 0?n:r.custom,X_(e),Q_(e))}function J_(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,To(n))}function eT(e,t){const n=Gl(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const s=n1(a[i]);J_(e,i,s)}}function tT(e,t,n){var r,o;const a=Object.keys(t).filter(s=>!e.hasValue(s)),i=a.length;if(!!i)for(let s=0;s<i;s++){const l=a[s],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(W_(c)||H_(c))?c=parseFloat(c):!Z_(c)&&Tn.test(u)&&(c=jf(l,u)),e.addValue(l,To(c)),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function nT(e,t){return t?(t[e]||t.default||t).from:void 0}function rT(e,t,n){var r;const o={};for(const a in e){const i=nT(a,t);o[a]=i!==void 0?i:(r=n.getValue(a))===null||r===void 0?void 0:r.get()}return o}function Us(e){return Boolean(dn(e)&&e.add)}function oT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>Yc(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=Yc(e,t,n);else{const o=typeof t=="function"?Gl(e,t,n.custom):t;r=M1(e,o,n)}return r.then(()=>e.notify("AnimationComplete",t))}function Yc(e,t,n={}){var r;const o=Gl(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const i=o?()=>M1(e,o,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=a;return aT(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,c]=l==="beforeChildren"?[i,s]:[s,i];return u().then(c)}else return Promise.all([i(),s(n.delay)])}function M1(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:i=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(i=r);const c=[],d=o&&((a=e.animationState)===null||a===void 0?void 0:a.getState()[o]);for(const f in l){const p=e.getValue(f),b=l[f];if(!p||b===void 0||d&&sT(d,f))continue;let v={delay:n,...i};e.shouldReduceMotion&&jo.has(f)&&(v={...v,type:!1,delay:0});let C=Bf(f,p,b,v);Us(u)&&(u.add(f),C=C.then(()=>u.remove(f))),c.push(C)}return Promise.all(c).then(()=>{s&&eT(e,s)})}function aT(e,t,n=0,r=0,o=1,a){const i=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(iT).forEach((u,c)=>{i.push(Yc(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(i)}function iT(e,t){return e.sortNodePosition(t)}function sT({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const $f=[ie.Animate,ie.InView,ie.Focus,ie.Hover,ie.Tap,ie.Drag,ie.Exit],lT=[...$f].reverse(),uT=$f.length;function cT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>oT(e,n,r)))}function dT(e){let t=cT(e);const n=pT();let r=!0;const o=(l,u)=>{const c=Gl(e,u);if(c){const{transition:d,transitionEnd:f,...p}=c;l={...l,...p,...f}}return l};function a(l){t=l(e)}function i(l,u){var c;const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],b=new Set;let v={},C=1/0;for(let m=0;m<uT;m++){const h=lT[m],S=n[h],F=(c=d[h])!==null&&c!==void 0?c:f[h],E=Ha(F),A=h===u?S.isActive:null;A===!1&&(C=m);let q=F===f[h]&&F!==d[h]&&E;if(q&&r&&e.manuallyAnimateOnMount&&(q=!1),S.protectedKeys={...v},!S.isActive&&A===null||!F&&!S.prevProp||Dl(F)||typeof F=="boolean")continue;const B=fT(S.prevProp,F);let V=B||h===u&&S.isActive&&!q&&E||m>C&&E;const _e=Array.isArray(F)?F:[F];let Le=_e.reduce(o,{});A===!1&&(Le={});const{prevResolvedValues:St={}}=S,Ht={...St,...Le},Ut=xe=>{V=!0,b.delete(xe),S.needsAnimating[xe]=!0};for(const xe in Ht){const It=Le[xe],I=St[xe];v.hasOwnProperty(xe)||(It!==I?Ka(It)&&Ka(I)?!h1(It,I)||B?Ut(xe):S.protectedKeys[xe]=!0:It!==void 0?Ut(xe):b.add(xe):It!==void 0&&b.has(xe)?Ut(xe):S.protectedKeys[xe]=!0)}S.prevProp=F,S.prevResolvedValues=Le,S.isActive&&(v={...v,...Le}),r&&e.blockInitialAnimation&&(V=!1),V&&!q&&p.push(..._e.map(xe=>({animation:xe,options:{type:h,...l}})))}if(b.size){const m={};b.forEach(h=>{const S=e.getBaseTarget(h);S!==void 0&&(m[h]=S)}),p.push({animation:m})}let g=Boolean(p.length);return r&&d.initial===!1&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(p):Promise.resolve()}function s(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var b;return(b=p.animationState)===null||b===void 0?void 0:b.setActive(l,u)}),n[l].isActive=u;const f=i(c,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:i,setActive:s,setAnimateFunction:a,getState:()=>n}}function fT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!h1(t,e):!1}function pr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pT(){return{[ie.Animate]:pr(!0),[ie.InView]:pr(),[ie.Hover]:pr(),[ie.Tap]:pr(),[ie.Drag]:pr(),[ie.Focus]:pr(),[ie.Exit]:pr()}}const mT={animation:Wn(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=dT(e)),Dl(t)&&k.exports.useEffect(()=>t.subscribe(e),[t])}),exit:Wn(e=>{const{custom:t,visualElement:n}=e,[r,o]=m1(),a=k.exports.useContext(Lo);k.exports.useEffect(()=>{n.isPresent=r;const i=n.animationState&&n.animationState.setActive(ie.Exit,!r,{custom:a&&a.custom||t});i&&!r&&i.then(o)},[r])})},P0=(e,t)=>Math.abs(e-t);function hT(e,t){const n=P0(e.x,t.x),r=P0(e.y,t.y);return Math.sqrt(n**2+r**2)}class V1{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Zu(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=hT(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:p}=$s();this.history.push({...f,timestamp:p});const{onStart:b,onMove:v}=this.handlers;c||(b&&b(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=Yu(c,this.transformPagePoint),o1(u)&&u.buttons===0){this.handlePointerUp(u,c);return}At.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,p=Zu(Yu(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,p),f&&f(u,p)},a1(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const o=Ef(t),a=Yu(o,this.transformPagePoint),{point:i}=a,{timestamp:s}=$s();this.history=[{...i,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,Zu(a,this.history)),this.removeListeners=Hl(go(window,"pointermove",this.handlePointerMove),go(window,"pointerup",this.handlePointerUp),go(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),tr.update(this.updatePoint)}}function Yu(e,t){return t?{point:t(e.point)}:e}function q0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zu({point:e},t){return{point:e,delta:q0(e,L1(t)),offset:q0(e,gT(t)),velocity:yT(t,.1)}}function gT(e){return e[0]}function L1(e){return e[e.length-1]}function yT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=L1(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Ds(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function yt(e){return e.max-e.min}function Zc(e,t=0,n=.01){return Math.abs(e-t)<=n}function I0(e,t,n,r=.5){e.origin=r,e.originPoint=we(t.min,t.max,e.origin),e.scale=yt(n)/yt(t),(Zc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=we(n.min,n.max,e.origin)-e.originPoint,(Zc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ca(e,t,n,r){I0(e.x,t.x,n.x,r==null?void 0:r.originX),I0(e.y,t.y,n.y,r==null?void 0:r.originY)}function R0(e,t,n){e.min=n.min+t.min,e.max=e.min+yt(t)}function bT(e,t,n){R0(e.x,t.x,n.x),R0(e.y,t.y,n.y)}function z0(e,t,n){e.min=t.min-n.min,e.max=e.min+yt(t)}function ka(e,t,n){z0(e.x,t.x,n.x),z0(e.y,t.y,n.y)}function vT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?we(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?we(n,e,r.max):Math.min(e,n)),e}function M0(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function wT(e,{top:t,left:n,bottom:r,right:o}){return{x:M0(e.x,n,o),y:M0(e.y,t,r)}}function V0(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function xT(e,t){return{x:V0(e.x,t.x),y:V0(e.y,t.y)}}function ST(e,t){let n=.5;const r=yt(e),o=yt(t);return o>r?n=Hs(t.min,t.max-r,e.min):r>o&&(n=Hs(e.min,e.max-o,t.min)),Ws(0,1,n)}function CT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Xc=.35;function kT(e=Xc){return e===!1?e=0:e===!0&&(e=Xc),{x:L0(e,"left","right"),y:L0(e,"top","bottom")}}function L0(e,t,n){return{min:j0(e,t),max:j0(e,n)}}function j0(e,t){var n;return typeof e=="number"?e:(n=e[t])!==null&&n!==void 0?n:0}const N0=()=>({translate:0,scale:1,origin:0,originPoint:0}),_a=()=>({x:N0(),y:N0()}),B0=()=>({min:0,max:0}),Ee=()=>({x:B0(),y:B0()});function Zt(e){return[e("x"),e("y")]}function j1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function _T({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function TT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Xu(e){return e===void 0||e===1}function Qc({scale:e,scaleX:t,scaleY:n}){return!Xu(e)||!Xu(t)||!Xu(n)}function mr(e){return Qc(e)||N1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function N1(e){return D0(e.x)||D0(e.y)}function D0(e){return e&&e!=="0%"}function Gs(e,t,n){const r=e-n,o=t*r;return n+o}function O0(e,t,n,r,o){return o!==void 0&&(e=Gs(e,o,r)),Gs(e,n,r)+t}function Jc(e,t=0,n=1,r,o){e.min=O0(e.min,t,n,r,o),e.max=O0(e.max,t,n,r,o)}function B1(e,{x:t,y:n}){Jc(e.x,t.translate,t.scale,t.originPoint),Jc(e.y,n.translate,n.scale,n.originPoint)}function FT(e,t,n,r=!1){var o,a;const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++)s=n[u],l=s.projectionDelta,((a=(o=s.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Yr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,B1(e,l)),r&&mr(s.latestValues)&&Yr(e,s.latestValues));t.x=$0(t.x),t.y=$0(t.y)}function $0(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Ln(e,t){e.min=e.min+t,e.max=e.max+t}function W0(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,i=we(e.min,e.max,a);Jc(e,t[n],t[r],i,t.scale)}const AT=["x","scaleX","originX"],ET=["y","scaleY","originY"];function Yr(e,t){W0(e.x,t,AT),W0(e.y,t,ET)}function D1(e,t){return j1(TT(e.getBoundingClientRect(),t))}function PT(e,t,n){const r=D1(e,n),{scroll:o}=t;return o&&(Ln(r.x,o.offset.x),Ln(r.y,o.offset.y)),r}const qT=new WeakMap;class IT{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ee(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(Ef(s,"page").point)},o=(s,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=u1(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Zt(p=>{var b,v;let C=this.getAxisMotionValue(p).get()||0;if(ln.test(C)){const g=(v=(b=this.visualElement.projection)===null||b===void 0?void 0:b.layout)===null||v===void 0?void 0:v.layoutBox[p];g&&(C=yt(g)*(parseFloat(C)/100))}this.originPoint[p]=C}),f==null||f(s,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(ie.Drag,!0))},a=(s,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:p}=l;if(c&&this.currentDirection===null){this.currentDirection=RT(p),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,p),this.updateAxis("y",l.point,p),this.visualElement.render(),f==null||f(s,l)},i=(s,l)=>this.stop(s,l);this.panSession=new V1(t,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:i},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a==null||a(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(ie.Drag,!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Hi(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let i=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(i=vT(i,this.constraints[t],this.elastic[t])),a.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},o=this.constraints;t&&Gr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=wT(r.layoutBox,t):this.constraints=!1,this.elastic=kT(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Zt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=CT(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Gr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=PT(r,o.root,this.visualElement.getTransformPagePoint());let i=xT(o.layout.layoutBox,a);if(n){const s=n(_T(i));this.hasMutatedConstraints=!!s,s&&(i=j1(s))}return i}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Zt(c=>{var d;if(!Hi(c,n,this.currentDirection))return;let f=(d=l==null?void 0:l[c])!==null&&d!==void 0?d:{};i&&(f={min:0,max:0});const p=o?200:1e6,b=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:p,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Bf(t,r,0,n)}stopAnimation(){Zt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n,r;const o="_drag"+t.toUpperCase(),a=this.visualElement.getProps()[o];return a||this.visualElement.getValue(t,(r=(n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])!==null&&r!==void 0?r:0)}snapToCursor(t){Zt(n=>{const{drag:r}=this.getProps();if(!Hi(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:i,max:s}=o.layout.layoutBox[n];a.set(t[n]-we(i,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Gr(r)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Zt(s=>{const l=this.getAxisMotionValue(s);if(l){const u=l.get();a[s]=ST({min:u,max:u},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",(t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),Zt(s=>{if(!Hi(s,n,null))return;const l=this.getAxisMotionValue(s),{min:u,max:c}=this.constraints[s];l.set(we(u,c,a[s]))})}addListeners(){var t;if(!this.visualElement.current)return;qT.set(this.visualElement,this);const n=this.visualElement.current,r=go(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();Gr(u)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",o);a&&!a.layout&&((t=a.root)===null||t===void 0||t.updateScroll(),a.updateLayout()),o();const s=Wl(window,"resize",()=>this.scalePositionWithinConstraints()),l=a.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Zt(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:i=Xc,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:i,dragMomentum:s}}}function Hi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function RT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function zT(e){const{dragControls:t,visualElement:n}=e,r=$l(()=>new IT(n));k.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),k.exports.useEffect(()=>r.addListeners(),[r])}function MT({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:o}){const a=e||t||n||r,i=k.exports.useRef(null),{transformPagePoint:s}=k.exports.useContext(wf),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{i.current=null,n&&n(c,d)}};k.exports.useEffect(()=>{i.current!==null&&i.current.updateHandlers(l)});function u(c){i.current=new V1(c,l,{transformPagePoint:s})}Bs(o,"pointerdown",a&&u),Pf(()=>i.current&&i.current.end())}const VT={pan:Wn(MT),drag:Wn(zT)};function ed(e){return typeof e=="string"&&e.startsWith("var(--")}const O1=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function LT(e){const t=O1.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function td(e,t,n=1){const[r,o]=LT(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);return a?a.trim():ed(o)?td(o,t,n+1):o}function jT(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!ed(a))return;const i=td(a,r);i&&o.set(i)});for(const o in t){const a=t[o];if(!ed(a))continue;const i=td(a,r);!i||(t[o]=i,n&&n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const NT=new Set(["width","height","top","left","right","bottom","x","y"]),$1=e=>NT.has(e),BT=e=>Object.keys(e).some($1),W1=(e,t)=>{e.set(t,!1),e.set(t)},H0=e=>e===jr||e===D;var U0;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(U0||(U0={}));const G0=(e,t)=>parseFloat(e.split(", ")[t]),K0=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return G0(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?G0(a[1],e):0}},DT=new Set(["x","y","z"]),OT=js.filter(e=>!DT.has(e));function $T(e){const t=[];return OT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Y0={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:K0(4,13),y:K0(5,14)},WT=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:i}=a,s={};i==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=Y0[u](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);W1(c,s[u]),e[u]=Y0[u](l,a)}),e},HT=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter($1);let a=[],i=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=Xo(c);const f=t[l];let p;if(Ka(f)){const b=f.length,v=f[0]===null?1:0;c=f[v],d=Xo(c);for(let C=v;C<b;C++)p?Os(Xo(f[C])===p):p=Xo(f[C])}else p=Xo(f);if(d!==p)if(H0(d)&&H0(p)){const b=u.get();typeof b=="string"&&u.set(parseFloat(b)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&p===D&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(p==null?void 0:p.transform)&&(c===0||f===0)?c===0?u.set(p.transform(c)):t[l]=d.transform(f):(i||(a=$T(e),i=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],W1(u,f))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=WT(t,e,s);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Lr&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function UT(e,t,n,r){return BT(t)?HT(e,t,n,r):{target:t,transitionEnd:r}}const GT=(e,t,n,r)=>{const o=jT(e,t,r);return t=o.target,r=o.transitionEnd,UT(e,t,n,r)},nd={current:null},H1={current:!1};function KT(){if(H1.current=!0,!!Lr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>nd.current=e.matches;e.addListener(t),t()}else nd.current=!1}function YT(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],i=n[o];if(dn(a))e.addValue(o,a),Us(r)&&r.add(o);else if(dn(i))e.addValue(o,To(a)),Us(r)&&r.remove(o);else if(i!==a)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(a)}else{const s=e.getStaticValue(o);e.addValue(o,To(s!==void 0?s:a))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const U1=Object.keys(Ua),ZT=U1.length,Z0=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class XT{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>At.render(this.render,!1,!0);const{latestValues:i,renderState:s}=o;this.latestValues=i,this.baseTarget={...i},this.initialValues=n.initial?{...i}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=Ol(n),this.isVariantNode=Vy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n);for(const c in u){const d=u[c];i[c]!==void 0&&dn(d)&&(d.set(i[c],!1),Us(l)&&l.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),H1.current||KT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:nd.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),tr.update(this.notifyUpdate),tr.render(this.render),this.valueSubscriptions.forEach(o=>o()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const o in this.events)this.events[o].clear();this.current=null}bindToMotionValue(t,n){const r=jo.has(t),o=n.onChange(i=>{this.latestValues[t]=i,this.props.onUpdate&&At.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.onRenderRequest(this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,o,a,i){const s=[];for(let l=0;l<ZT;l++){const u=U1[l],{isEnabled:c,Component:d}=Ua[u];c(t)&&d&&s.push(k.exports.createElement(d,{key:u,...t,visualElement:this}))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(c)||d&&Gr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ee()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<Z0.length;n++){const r=Z0[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=t["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=YT(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const a=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<QT;a++){const i=G1[a],s=this.props[i];(Ha(s)||s===!1)&&(o[i]=s)}return o}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=To(n),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=Af(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!dn(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Sa),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const G1=["initial",...$f],QT=G1.length;class K1 extends XT{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let i=rT(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),i&&(i=o(i))),a){tT(this,r,i);const s=GT(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function JT(e){return window.getComputedStyle(e)}class eF extends K1{readValueFromInstance(t,n){if(jo.has(n)){const r=Lf(n);return r&&r.default||0}else{const r=JT(t),o=(Ny(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return D1(t,n)}build(t,n,r,o){kf(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t){return Ff(t)}renderInstance(t,n,r,o){Qy(t,n,r,o)}}class tF extends K1{getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return jo.has(n)?((r=Lf(n))===null||r===void 0?void 0:r.default)||0:(n=Jy.has(n)?n:Xy(n),t.getAttribute(n))}measureInstanceViewportBox(){return Ee()}scrapeMotionValuesFromProps(t){return t1(t)}build(t,n,r,o){Tf(t,n,r,o.transformTemplate)}renderInstance(t,n,r,o){e1(t,n,r,o)}}const nF=(e,t)=>Sf(e)?new tF(t,{enableHardwareAcceleration:!1}):new eF(t,{enableHardwareAcceleration:!0});function X0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Qo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(D.test(e))e=parseFloat(e);else return e;const n=X0(e,t.target.x),r=X0(e,t.target.y);return`${n}% ${r}%`}},Q0="_$css",rF={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=e.includes("var("),a=[];o&&(e=e.replace(O1,p=>(a.push(p),Q0)));const i=Tn.parse(e);if(i.length>5)return r;const s=Tn.createTransformer(e),l=typeof i[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=u,i[1+l]/=c;const d=we(u,c,.5);typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d);let f=s(i);if(o){let p=0;f=f.replace(Q0,()=>{const b=a[p];return p++,b})}return f}};class oF extends M.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;V7(iF),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),va.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,i=r.projection;return i&&(i.isPresent=a,o||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?i.promote():i.relegate()||At.postRender(()=>{var s;!((s=i.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(o),r!=null&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function aF(e){const[t,n]=m1(),r=k.exports.useContext(xf);return T(oF,{...e,layoutGroup:r,switchLayoutGroup:k.exports.useContext(Ly),isPresent:t,safeToRemove:n})}const iF={borderRadius:{...Qo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qo,borderTopRightRadius:Qo,borderBottomLeftRadius:Qo,borderBottomRightRadius:Qo,boxShadow:rF},sF={measureLayout:aF};function lF(e,t,n={}){const r=dn(e)?e:To(e);return Bf("",r,t,n),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const Y1=["TopLeft","TopRight","BottomLeft","BottomRight"],uF=Y1.length,J0=e=>typeof e=="string"?parseFloat(e):e,eh=e=>typeof e=="number"||D.test(e);function cF(e,t,n,r,o,a){var i,s,l,u;o?(e.opacity=we(0,(i=n.opacity)!==null&&i!==void 0?i:1,dF(r)),e.opacityExit=we((s=t.opacity)!==null&&s!==void 0?s:1,0,fF(r))):a&&(e.opacity=we((l=t.opacity)!==null&&l!==void 0?l:1,(u=n.opacity)!==null&&u!==void 0?u:1,r));for(let c=0;c<uF;c++){const d=`border${Y1[c]}Radius`;let f=th(t,d),p=th(n,d);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||eh(f)===eh(p)?(e[d]=Math.max(we(J0(f),J0(p),r),0),(ln.test(p)||ln.test(f))&&(e[d]+="%")):e[d]=p}(t.rotate||n.rotate)&&(e.rotate=we(t.rotate||0,n.rotate||0,r))}function th(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e.borderRadius}const dF=Z1(0,.5,Mf),fF=Z1(.5,.95,qf);function Z1(e,t,n){return r=>r<e?0:r>t?1:n(Hs(e,t,r))}function nh(e,t){e.min=t.min,e.max=t.max}function Mt(e,t){nh(e.x,t.x),nh(e.y,t.y)}function rh(e,t,n,r,o){return e-=t,e=Gs(e,1/n,r),o!==void 0&&(e=Gs(e,1/o,r)),e}function pF(e,t=0,n=1,r=.5,o,a=e,i=e){if(ln.test(t)&&(t=parseFloat(t),t=we(i.min,i.max,t/100)-i.min),typeof t!="number")return;let s=we(a.min,a.max,r);e===a&&(s-=t),e.min=rh(e.min,t,n,s,o),e.max=rh(e.max,t,n,s,o)}function oh(e,t,[n,r,o],a,i){pF(e,t[n],t[r],t[o],t.scale,a,i)}const mF=["x","scaleX","originX"],hF=["y","scaleY","originY"];function ah(e,t,n,r){oh(e.x,t,mF,n==null?void 0:n.x,r==null?void 0:r.x),oh(e.y,t,hF,n==null?void 0:n.y,r==null?void 0:r.y)}function ih(e){return e.translate===0&&e.scale===1}function X1(e){return ih(e.x)&&ih(e.y)}function Q1(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function sh(e){return yt(e.x)/yt(e.y)}class gF{constructor(){this.members=[]}add(t){Df(this.members,t),t.scheduleRender()}remove(t){if(Of(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,o,a,i;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(i=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||i===void 0||i.call(a)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function lh(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const i=e.x.scale*t.x,s=e.y.scale*t.y;return(i!==1||s!==1)&&(r+=`scale(${i}, ${s})`),r||"none"}const yF=(e,t)=>e.depth-t.depth;class bF{constructor(){this.children=[],this.isDirty=!1}add(t){Df(this.children,t),this.isDirty=!0}remove(t){Of(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(yF),this.isDirty=!1,this.children.forEach(t)}}const uh=["","X","Y","Z"],ch=1e3;let vF=0;function J1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(i,s={},l=t==null?void 0:t()){this.id=vF++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(SF),this.nodes.forEach(_F),this.nodes.forEach(TF)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=i,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,i&&this.root.registerPotentialNode(i,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new bF)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new Sa),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const l=this.eventHandlers.get(i);l==null||l.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}registerPotentialNode(i,s){this.potentialNodes.set(i,s)}mount(i,s=!1){var l;if(this.instance)return;this.isSVG=i instanceof SVGElement&&i.tagName!=="svg",this.instance=i;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=C1(p,250),va.hasAnimatedSinceResize&&(va.hasAnimatedSinceResize=!1,this.nodes.forEach(fh))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:b,layout:v})=>{var C,g,m,h,S;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const F=(g=(C=this.options.transition)!==null&&C!==void 0?C:d.getDefaultTransition())!==null&&g!==void 0?g:qF,{onLayoutAnimationStart:E,onLayoutAnimationComplete:A}=d.getProps(),q=!this.targetLayout||!Q1(this.targetLayout,v)||b,B=!p&&b;if(((m=this.resumeFrom)===null||m===void 0?void 0:m.instance)||B||p&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,B);const V={...Nf(F,"layout"),onPlay:E,onComplete:A};d.shouldReduceMotion&&(V.delay=0,V.type=!1),this.startAnimation(V)}else!p&&this.animationProgress===0&&fh(this),this.isLead()&&((S=(h=this.options).onExitComplete)===null||S===void 0||S.call(h));this.targetLayout=v})}unmount(){var i,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(i=this.getStack())===null||i===void 0||i.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,tr.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var i;return this.isAnimationBlocked||((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimationBlocked())||!1}startUpdate(){var i;this.isUpdateBlocked()||(this.isUpdating=!0,(i=this.nodes)===null||i===void 0||i.forEach(FF),this.animationId++)}willUpdate(i=!0){var s,l,u;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const b=this.path[p];b.shouldResetTransform=!0,b.updateScroll("snapshot")}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(dh);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(IF),this.potentialNodes.clear()),this.nodes.forEach(kF),this.nodes.forEach(wF),this.nodes.forEach(xF),this.clearAllSnapshots(),Hu.update(),Hu.preRender(),Hu.render())}clearAllSnapshots(){this.nodes.forEach(CF),this.sharedNodes.forEach(AF)}scheduleUpdateProjection(){At.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){At.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var i;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ee(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(i=this.options.visualElement)===null||i===void 0||i.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(i="measure"){let s=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:i,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var i;if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!X1(this.projectionDelta),u=(i=this.options.visualElement)===null||i===void 0?void 0:i.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;s&&(l||mr(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return i&&(l=this.removeTransform(l)),RF(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return Ee();const s=i.measureViewportBox(),{scroll:l}=this.root;return l&&(Ln(s.x,l.offset.x),Ln(s.y,l.offset.y)),s}removeElementScroll(i){const s=Ee();Mt(s,i);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Mt(s,i);const{scroll:f}=this.root;f&&(Ln(s.x,-f.offset.x),Ln(s.y,-f.offset.y))}Ln(s.x,c.offset.x),Ln(s.y,c.offset.y)}}return s}applyTransform(i,s=!1){const l=Ee();Mt(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Yr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),mr(c.latestValues)&&Yr(l,c.latestValues)}return mr(this.latestValues)&&Yr(l,this.latestValues),l}removeTransform(i){var s;const l=Ee();Mt(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!mr(c.latestValues))continue;Qc(c.latestValues)&&c.updateSnapshot();const d=Ee(),f=c.measurePageBox();Mt(d,f),ah(l,c.latestValues,(s=c.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return mr(this.latestValues)&&ah(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var i;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:u}=this.options;if(!(!this.layout||!(l||u))){if(!this.targetDelta&&!this.relativeTarget){const c=this.getClosestProjectingParent();c&&c.layout?(this.relativeParent=c,this.relativeTarget=Ee(),this.relativeTargetOrigin=Ee(),ka(this.relativeTargetOrigin,this.layout.layoutBox,c.layout.layoutBox),Mt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ee(),this.targetWithTransforms=Ee()),this.relativeTarget&&this.relativeTargetOrigin&&((i=this.relativeParent)===null||i===void 0?void 0:i.target)?bT(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Mt(this.target,this.layout.layoutBox),B1(this.target,this.targetDelta)):Mt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const c=this.getClosestProjectingParent();c&&Boolean(c.resumingFrom)===Boolean(this.resumingFrom)&&!c.options.layoutScroll&&c.target?(this.relativeParent=c,this.relativeTarget=Ee(),this.relativeTargetOrigin=Ee(),ka(this.relativeTargetOrigin,this.target,c.target),Mt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Qc(this.parent.latestValues)||N1(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var i;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const u=this.getLead(),c=Boolean(this.resumingFrom)||this!==u;let d=!0;if(s&&(d=!1),c&&l&&(d=!1),d)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=Boolean(((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||p))return;Mt(this.layoutCorrected,this.layout.layoutBox),FT(this.layoutCorrected,this.treeScale,this.path,c);const{target:b}=u;if(!b)return;this.projectionDelta||(this.projectionDelta=_a(),this.projectionDeltaWithTransform=_a());const v=this.treeScale.x,C=this.treeScale.y,g=this.projectionTransform;Ca(this.projectionDelta,this.layoutCorrected,b,this.latestValues),this.projectionTransform=lh(this.projectionDelta,this.treeScale),(this.projectionTransform!==g||this.treeScale.x!==v||this.treeScale.y!==C)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var s,l,u;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),i&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(i,s=!1){var l,u;const c=this.snapshot,d=(c==null?void 0:c.latestValues)||{},f={...this.latestValues},p=_a();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const b=Ee(),v=(c==null?void 0:c.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),C=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,g=Boolean(v&&!C&&this.options.crossfade===!0&&!this.path.some(PF));this.animationProgress=0,this.mixTargetDelta=m=>{var h;const S=m/1e3;ph(p.x,i.x,S),ph(p.y,i.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((h=this.relativeParent)===null||h===void 0?void 0:h.layout)&&(ka(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),EF(this.relativeTarget,this.relativeTargetOrigin,b,S)),v&&(this.animationValues=f,cF(f,d,this.latestValues,S,g,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(0)}startAnimation(i){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(tr.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=At.update(()=>{va.hasAnimatedSinceResize=!0,this.currentAnimation=lF(0,ch,{...i,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=i.onUpdate)===null||c===void 0||c.call(i,u)},onComplete:()=>{var u;(u=i.onComplete)===null||u===void 0||u.call(i),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var i;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(i=this.getStack())===null||i===void 0||i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var i;this.currentAnimation&&((i=this.mixTargetDelta)===null||i===void 0||i.call(this,ch),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=i;if(!(!s||!l||!u)){if(this!==i&&this.layout&&u&&eb(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ee();const d=yt(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+d;const f=yt(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+f}Mt(s,l),Yr(s,c),Ca(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(i,s){var l,u,c;this.sharedNodes.has(i)||this.sharedNodes.set(i,new gF),this.sharedNodes.get(i).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=s.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,s)})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:s}=this.options;return s?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:s}=this.options;return s?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:l}=i;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let c=0;c<uh.length;c++){const d="rotate"+uh[c];l[d]&&(u[d]=l[d],i.setStaticValue(d,0))}i==null||i.render();for(const c in u)i.setStaticValue(c,u[c]);i.scheduleRender()}getProjectionStyles(i={}){var s,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=vs(i.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const C={};return this.options.layoutId&&(C.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,C.pointerEvents=vs(i.pointerEvents)||""),this.hasProjected&&!mr(this.latestValues)&&(C.transform=d?d({},""):"none",this.hasProjected=!1),C}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=lh(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:b,y:v}=this.projectionDelta;c.transformOrigin=`${b.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const C in Ls){if(p[C]===void 0)continue;const{correct:g,applyTo:m}=Ls[C],h=g(p[C],f);if(m){const S=m.length;for(let F=0;F<S;F++)c[m[F]]=h}else c[C]=h}return this.options.layoutId&&(c.pointerEvents=f===this?vs(i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var s;return(s=i.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(dh),this.root.sharedNodes.clear()}}}function wF(e){e.updateLayout()}function xF(e){var t,n,r;const o=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,l=o.source!==e.layout.source;s==="size"?Zt(p=>{const b=l?o.measuredBox[p]:o.layoutBox[p],v=yt(b);b.min=a[p].min,b.max=b.min+v}):eb(s,o.layoutBox,a)&&Zt(p=>{const b=l?o.measuredBox[p]:o.layoutBox[p],v=yt(a[p]);b.max=b.min+v});const u=_a();Ca(u,a,o.layoutBox);const c=_a();l?Ca(c,e.applyTransform(i,!0),o.measuredBox):Ca(c,a,o.layoutBox);const d=!X1(u);let f=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:b,layout:v}=p;if(b&&v){const C=Ee();ka(C,o.layoutBox,b.layoutBox);const g=Ee();ka(g,a,v.layoutBox),Q1(C,g)||(f=!0)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeTargetChanged:f})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function SF(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function CF(e){e.clearSnapshot()}function dh(e){e.clearMeasurements()}function kF(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function fh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function _F(e){e.resolveTargetDelta()}function TF(e){e.calcProjection()}function FF(e){e.resetRotation()}function AF(e){e.removeLeadSnapshot()}function ph(e,t,n){e.translate=we(t.translate,0,n),e.scale=we(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function mh(e,t,n,r){e.min=we(t.min,n.min,r),e.max=we(t.max,n.max,r)}function EF(e,t,n,r){mh(e.x,t.x,n.x,r),mh(e.y,t.y,n.y,r)}function PF(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const qF={duration:.45,ease:[.4,0,.1,1]};function IF(e,t){let n=e.root;for(let a=e.path.length-1;a>=0;a--)if(Boolean(e.path[a].instance)){n=e.path[a];break}const o=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);o&&e.mount(o,!0)}function hh(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function RF(e){hh(e.x),hh(e.y)}function eb(e,t,n){return e==="position"||e==="preserve-aspect"&&!Zc(sh(t),sh(n),.2)}const zF=J1({attachResizeListener:(e,t)=>Wl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qu={current:void 0},MF=J1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Qu.current){const e=new zF(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Qu.current=e}return Qu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),VF={...mT,...Ok,...VT,...sF},LF=z7((e,t)=>vk(e,t,VF,nF,MF));function tb(){const e=k.exports.useRef(!1);return Vs(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function jF(){const e=tb(),[t,n]=k.exports.useState(0),r=k.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[k.exports.useCallback(()=>At.postRender(r),[r]),t]}class NF extends k.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function BF({children:e,isPresent:t}){const n=k.exports.useId(),r=k.exports.useRef(null),o=k.exports.useRef({width:0,height:0,top:0,left:0});return k.exports.useInsertionEffect(()=>{const{width:a,height:i,top:s,left:l}=o.current;if(t||!r.current||!a||!i)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),T(NF,{isPresent:t,childRef:r,sizeRef:o,children:k.exports.cloneElement(e,{ref:r})})}const Ju=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:i})=>{const s=$l(DF),l=k.exports.useId(),u=k.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{s.set(c,!0);for(const d of s.values())if(!d)return;r&&r()},register:c=>(s.set(c,!1),()=>s.delete(c))}),a?void 0:[n]);return k.exports.useMemo(()=>{s.forEach((c,d)=>s.set(d,!1))},[n]),k.exports.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),i==="popLayout"&&(e=T(BF,{isPresent:n,children:e})),T(Lo.Provider,{value:u,children:e})};function DF(){return new Map}const Ur=e=>e.key||"";function OF(e,t){e.forEach(n=>{const r=Ur(n);t.set(r,n)})}function $F(e){const t=[];return k.exports.Children.forEach(e,n=>{k.exports.isValidElement(n)&&t.push(n)}),t}const WF=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:i="sync"})=>{o&&(i="wait",p1(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=jF();const l=k.exports.useContext(xf).forceRender;l&&(s=l);const u=tb(),c=$F(e);let d=c;const f=new Set,p=k.exports.useRef(d),b=k.exports.useRef(new Map).current,v=k.exports.useRef(!0);if(Vs(()=>{v.current=!1,OF(c,b),p.current=d}),Pf(()=>{v.current=!0,b.clear(),f.clear()}),v.current)return T(Pr,{children:d.map(h=>T(Ju,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:i,children:h},Ur(h)))});d=[...d];const C=p.current.map(Ur),g=c.map(Ur),m=C.length;for(let h=0;h<m;h++){const S=C[h];g.indexOf(S)===-1&&f.add(S)}return i==="wait"&&f.size&&(d=[]),f.forEach(h=>{if(g.indexOf(h)!==-1)return;const S=b.get(h);if(!S)return;const F=C.indexOf(h),E=()=>{b.delete(h),f.delete(h);const A=p.current.findIndex(q=>q.key===h);if(p.current.splice(A,1),!f.size){if(p.current=c,u.current===!1)return;s(),r&&r()}};d.splice(F,0,T(Ju,{isPresent:!1,onExitComplete:E,custom:t,presenceAffectsLayout:a,mode:i,children:S},Ur(S)))}),d=d.map(h=>{const S=h.key;return f.has(S)?h:T(Ju,{isPresent:!0,presenceAffectsLayout:a,mode:i,children:h},Ur(h))}),f1!=="production"&&i==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),T(Pr,{children:f.size?d:d.map(h=>k.exports.cloneElement(h))})};var HF=(...e)=>e.filter(Boolean).join(" "),UF=k9({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),Wf=L((e,t)=>{const n=ut("Spinner",e),{label:r="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:s,...l}=Ie(e),u=HF("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${UF} ${a} linear infinite`,...n};return M.createElement(N.div,{ref:t,__css:c,className:u,...l},r&&M.createElement(N.span,{srOnly:!0},r))});Wf.displayName="Spinner";var Kl=(...e)=>e.filter(Boolean).join(" ");function GF(e){return T(Vr,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function KF(e){return T(Vr,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function gh(e){return T(Vr,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var[YF,ZF]=fn({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[XF,Hf]=fn({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),nb={info:{icon:KF,colorScheme:"blue"},warning:{icon:gh,colorScheme:"orange"},success:{icon:GF,colorScheme:"green"},error:{icon:gh,colorScheme:"red"},loading:{icon:Wf,colorScheme:"blue"}};function QF(e){return nb[e].colorScheme}function JF(e){return nb[e].icon}var rb=L(function(t,n){var u;const{status:r="info",addRole:o=!0,...a}=Ie(t),i=(u=t.colorScheme)!=null?u:QF(r),s=Vo("Alert",{...t,colorScheme:i}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return M.createElement(YF,{value:{status:r}},M.createElement(XF,{value:s},M.createElement(N.div,{role:o?"alert":void 0,ref:n,...a,className:Kl("chakra-alert",t.className),__css:l})))});rb.displayName="Alert";var ob=L(function(t,n){const o={display:"inline",...Hf().description};return M.createElement(N.div,{ref:n,...t,className:Kl("chakra-alert__desc",t.className),__css:o})});ob.displayName="AlertDescription";function ab(e){const{status:t}=ZF(),n=JF(t),r=Hf(),o=t==="loading"?r.spinner:r.icon;return M.createElement(N.span,{display:"inherit",...e,className:Kl("chakra-alert__icon",e.className),__css:o},e.children||T(n,{h:"100%",w:"100%"}))}ab.displayName="AlertIcon";var ib=L(function(t,n){const r=Hf();return M.createElement(N.div,{ref:n,...t,className:Kl("chakra-alert__title",t.className),__css:r.title})});ib.displayName="AlertTitle";function eA(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function tA(e){const{loading:t,src:n,srcSet:r,onLoad:o,onError:a,crossOrigin:i,sizes:s,ignoreFallback:l}=e,[u,c]=k.exports.useState("pending");k.exports.useEffect(()=>{c(n?"loading":"pending")},[n]);const d=k.exports.useRef(),f=k.exports.useCallback(()=>{if(!n)return;p();const b=new Image;b.src=n,i&&(b.crossOrigin=i),r&&(b.srcset=r),s&&(b.sizes=s),t&&(b.loading=t),b.onload=v=>{p(),c("loaded"),o==null||o(v)},b.onerror=v=>{p(),c("failed"),a==null||a(v)},d.current=b},[n,i,r,s,o,a,t]),p=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return Va(()=>{if(!l)return u==="loading"&&f(),()=>{p()}},[u,f,l]),l?"loaded":u}var nA=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError",Ks=L(function(t,n){const{htmlWidth:r,htmlHeight:o,alt:a,...i}=t;return T("img",{width:r,height:o,ref:n,alt:a,...i})});Ks.displayName="NativeImage";var Uf=L(function(t,n){const{fallbackSrc:r,fallback:o,src:a,srcSet:i,align:s,fit:l,loading:u,ignoreFallback:c,crossOrigin:d,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:p,...b}=t,v=r!==void 0||o!==void 0,C=u!=null||c||!v,g=tA({...t,ignoreFallback:C}),m=nA(g,f),h={ref:n,objectFit:l,objectPosition:s,...C?b:eA(b,["onError","onLoad"])};return m?o||M.createElement(N.img,{as:Ks,className:"chakra-image__placeholder",src:r,...h}):M.createElement(N.img,{as:Ks,src:a,srcSet:i,crossOrigin:d,loading:u,referrerPolicy:p,className:"chakra-image",...h})});Uf.displayName="Image";L((e,t)=>M.createElement(N.img,{ref:t,as:Ks,className:"chakra-image",...e}));function Gf(e){return k.exports.Children.toArray(e).filter(t=>k.exports.isValidElement(t))}var Yl=(...e)=>e.filter(Boolean).join(" "),yh=e=>e?"":void 0,[rA,oA]=fn({strict:!1,name:"ButtonGroupContext"});function rd(e){const{children:t,className:n,...r}=e,o=k.exports.isValidElement(t)?k.exports.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,a=Yl("chakra-button__icon",n);return M.createElement(N.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:a},o)}rd.displayName="ButtonIcon";function od(e){const{label:t,placement:n,spacing:r="0.5rem",children:o=T(Wf,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...s}=e,l=Yl("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=k.exports.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?r:0,fontSize:"1em",lineHeight:"normal",...i}),[i,t,u,r]);return M.createElement(N.div,{className:l,...s,__css:c},o)}od.displayName="ButtonSpinner";function aA(e){const[t,n]=k.exports.useState(!e);return{ref:k.exports.useCallback(a=>{!a||n(a.tagName==="BUTTON")},[]),type:t?"button":void 0}}var Kf=L((e,t)=>{const n=oA(),r=ut("Button",{...n,...e}),{isDisabled:o=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:s,leftIcon:l,rightIcon:u,loadingText:c,iconSpacing:d="0.5rem",type:f,spinner:p,spinnerPlacement:b="start",className:v,as:C,...g}=Ie(e),m=k.exports.useMemo(()=>{const E={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:E}}},[r,n]),{ref:h,type:S}=aA(C),F={rightIcon:u,leftIcon:l,iconSpacing:d,children:s};return M.createElement(N.button,{disabled:o||a,ref:v7(t,h),as:C,type:f!=null?f:S,"data-active":yh(i),"data-loading":yh(a),__css:m,className:Yl("chakra-button",v),...g},a&&b==="start"&&T(od,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:d,children:p}),a?c||M.createElement(N.span,{opacity:0},T(bh,{...F})):T(bh,{...F}),a&&b==="end"&&T(od,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:d,children:p}))});Kf.displayName="Button";function bh(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return G(Pr,{children:[t&&T(rd,{marginEnd:o,children:t}),r,n&&T(rd,{marginStart:o,children:n})]})}var iA={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},sA={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},lA=L(function(t,n){const{size:r,colorScheme:o,variant:a,className:i,spacing:s="0.5rem",isAttached:l,isDisabled:u,orientation:c="horizontal",...d}=t,f=Yl("chakra-button__group",i),p=k.exports.useMemo(()=>({size:r,colorScheme:o,variant:a,isDisabled:u}),[r,o,a,u]);let b={display:"inline-flex",...l?iA[c]:sA[c](s)};const v=c==="vertical";return M.createElement(rA,{value:p},M.createElement(N.div,{ref:n,role:"group",__css:b,className:f,"data-attached":l?"":void 0,"data-orientation":c,flexDir:v?"column":void 0,...d}))});lA.displayName="ButtonGroup";var uA=L((e,t)=>{const{icon:n,children:r,isRound:o,"aria-label":a,...i}=e,s=n||r,l=k.exports.isValidElement(s)?k.exports.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return T(Kf,{padding:"0",borderRadius:o?"full":void 0,ref:t,"aria-label":a,...i,children:l})});uA.displayName="IconButton";var No=(...e)=>e.filter(Boolean).join(" "),Ui=e=>e?"":void 0,ec=e=>e?!0:void 0;function vh(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[cA,sb]=fn({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[dA,Bo]=fn({strict:!1,name:"FormControlContext"});function fA(e){const{id:t,isRequired:n,isInvalid:r,isDisabled:o,isReadOnly:a,...i}=e,s=k.exports.useId(),l=t||`field-${s}`,u=`${l}-label`,c=`${l}-feedback`,d=`${l}-helptext`,[f,p]=k.exports.useState(!1),[b,v]=k.exports.useState(!1),[C,g]=k.exports.useState(!1),m=k.exports.useCallback((A={},q=null)=>({id:d,...A,ref:Bc(q,B=>{!B||v(!0)})}),[d]),h=k.exports.useCallback((A={},q=null)=>{var B,V;return{...A,ref:q,"data-focus":Ui(C),"data-disabled":Ui(o),"data-invalid":Ui(r),"data-readonly":Ui(a),id:(B=A.id)!=null?B:u,htmlFor:(V=A.htmlFor)!=null?V:l}},[l,o,C,r,a,u]),S=k.exports.useCallback((A={},q=null)=>({id:c,...A,ref:Bc(q,B=>{!B||p(!0)}),"aria-live":"polite"}),[c]),F=k.exports.useCallback((A={},q=null)=>({...A,...i,ref:q,role:"group"}),[i]),E=k.exports.useCallback((A={},q=null)=>({...A,ref:q,role:"presentation","aria-hidden":!0,children:A.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!o,isFocused:!!C,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:f,setHasFeedbackText:p,hasHelpText:b,setHasHelpText:v,id:l,labelId:u,feedbackId:c,helpTextId:d,htmlProps:i,getHelpTextProps:m,getErrorMessageProps:S,getRootProps:F,getLabelProps:h,getRequiredIndicatorProps:E}}var pA=L(function(t,n){const r=Vo("Form",t),o=Ie(t),{getRootProps:a,htmlProps:i,...s}=fA(o),l=No("chakra-form-control",t.className);return M.createElement(dA,{value:s},M.createElement(cA,{value:r},M.createElement(N.div,{...a({},n),className:l,__css:r.container})))});pA.displayName="FormControl";var mA=L(function(t,n){const r=Bo(),o=sb(),a=No("chakra-form__helper-text",t.className);return M.createElement(N.div,{...r==null?void 0:r.getHelpTextProps(t,n),__css:o.helperText,className:a})});mA.displayName="FormHelperText";function hA(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:o,...a}=gA(e);return{...a,disabled:t,readOnly:r,required:o,"aria-invalid":ec(n),"aria-required":ec(o),"aria-readonly":ec(r)}}function gA(e){var b,v,C;const t=Bo(),{id:n,disabled:r,readOnly:o,required:a,isRequired:i,isInvalid:s,isReadOnly:l,isDisabled:u,onFocus:c,onBlur:d,...f}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(t==null?void 0:t.hasFeedbackText)&&(t==null?void 0:t.isInvalid)&&p.push(t.feedbackId),t!=null&&t.hasHelpText&&p.push(t.helpTextId),{...f,"aria-describedby":p.join(" ")||void 0,id:n!=null?n:t==null?void 0:t.id,isDisabled:(b=r!=null?r:u)!=null?b:t==null?void 0:t.isDisabled,isReadOnly:(v=o!=null?o:l)!=null?v:t==null?void 0:t.isReadOnly,isRequired:(C=a!=null?a:i)!=null?C:t==null?void 0:t.isRequired,isInvalid:s!=null?s:t==null?void 0:t.isInvalid,onFocus:vh(t==null?void 0:t.onFocus,c),onBlur:vh(t==null?void 0:t.onBlur,d)}}var[yA,bA]=fn({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),vA=L((e,t)=>{const n=Vo("FormError",e),r=Ie(e),o=Bo();return o!=null&&o.isInvalid?M.createElement(yA,{value:n},M.createElement(N.div,{...o==null?void 0:o.getErrorMessageProps(r,t),className:No("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null});vA.displayName="FormErrorMessage";var wA=L((e,t)=>{const n=bA(),r=Bo();if(!(r!=null&&r.isInvalid))return null;const o=No("chakra-form__error-icon",e.className);return T(Vr,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:o,children:T("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});wA.displayName="FormErrorIcon";var xA=L(function(t,n){var f;const r=ut("FormLabel",t),o=Ie(t),{className:a,children:i,requiredIndicator:s=T(lb,{}),optionalIndicator:l=null,...u}=o,c=Bo(),d=(f=c==null?void 0:c.getLabelProps(u,n))!=null?f:{ref:n,...u};return M.createElement(N.label,{...d,className:No("chakra-form__label",o.className),__css:{display:"block",textAlign:"start",...r}},i,c!=null&&c.isRequired?s:l)});xA.displayName="FormLabel";var lb=L(function(t,n){const r=Bo(),o=sb();if(!(r!=null&&r.isRequired))return null;const a=No("chakra-form__required-indicator",t.className);return M.createElement(N.span,{...r==null?void 0:r.getRequiredIndicatorProps(t,n),__css:o.requiredIndicator,className:a})});lb.displayName="RequiredIndicator";function wh(e,t){const n=k.exports.useRef(!1),r=k.exports.useRef(!1);k.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),k.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])}function SA(e){return T(Vr,{focusable:"false","aria-hidden":!0,...e,children:T("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}var ub=L(function(t,n){const r=ut("CloseButton",t),{children:o,isDisabled:a,__css:i,...s}=Ie(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return M.createElement(N.button,{type:"button","aria-label":"Close",ref:n,disabled:a,__css:{...l,...r,...i},...s},o||T(SA,{width:"1em",height:"1em"}))});ub.displayName="CloseButton";var cb=`
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,CA=()=>T(Ll,{styles:cb}),kA=()=>T(Ll,{styles:`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${cb}
    `});function Yf(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}var Zf=L(function(t,n){const{htmlSize:r,...o}=t,a=Vo("Input",o),i=Ie(o),s=hA(i),l=ke("chakra-input",t.className);return M.createElement(N.input,{size:r,...s,__css:a.field,ref:n,className:l})});Zf.displayName="Input";Zf.id="Input";var[_A,db]=fn({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),TA=L(function(t,n){const r=Vo("Input",t),{children:o,className:a,...i}=Ie(t),s=ke("chakra-input__group",a),l={},u=Gf(o),c=r.field;u.forEach(f=>{var p,b;!r||(c&&f.type.id==="InputLeftElement"&&(l.paddingStart=(p=c.height)!=null?p:c.h),c&&f.type.id==="InputRightElement"&&(l.paddingEnd=(b=c.height)!=null?b:c.h),f.type.id==="InputRightAddon"&&(l.borderEndRadius=0),f.type.id==="InputLeftAddon"&&(l.borderStartRadius=0))});const d=u.map(f=>{var p,b;const v=Yf({size:((p=f.props)==null?void 0:p.size)||t.size,variant:((b=f.props)==null?void 0:b.variant)||t.variant});return f.type.id!=="Input"?k.exports.cloneElement(f,v):k.exports.cloneElement(f,Object.assign(v,l,f.props))});return M.createElement(N.div,{className:s,ref:n,__css:{width:"100%",display:"flex",position:"relative"},...i},T(_A,{value:r,children:d}))});TA.displayName="InputGroup";var FA={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},AA=N("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),Xf=L(function(t,n){var s;const{placement:r="left",...o}=t,a=(s=FA[r])!=null?s:{},i=db();return T(AA,{ref:n,...o,__css:{...i.addon,...a}})});Xf.displayName="InputAddon";var fb=L(function(t,n){return T(Xf,{ref:n,placement:"left",...t,className:ke("chakra-input__left-addon",t.className)})});fb.displayName="InputLeftAddon";fb.id="InputLeftAddon";var pb=L(function(t,n){return T(Xf,{ref:n,placement:"right",...t,className:ke("chakra-input__right-addon",t.className)})});pb.displayName="InputRightAddon";pb.id="InputRightAddon";var EA=N("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Zl=L(function(t,n){var u,c;const{placement:r="left",...o}=t,a=db(),i=a.field,l={[r==="left"?"insetStart":"insetEnd"]:"0",width:(u=i==null?void 0:i.height)!=null?u:i==null?void 0:i.h,height:(c=i==null?void 0:i.height)!=null?c:i==null?void 0:i.h,fontSize:i==null?void 0:i.fontSize,...a.element};return T(EA,{ref:n,__css:l,...o})});Zl.id="InputElement";Zl.displayName="InputElement";var mb=L(function(t,n){const{className:r,...o}=t,a=ke("chakra-input__left-element",r);return T(Zl,{ref:n,placement:"left",className:a,...o})});mb.id="InputLeftElement";mb.displayName="InputLeftElement";var hb=L(function(t,n){const{className:r,...o}=t,a=ke("chakra-input__right-element",r);return T(Zl,{ref:n,placement:"right",className:a,...o})});hb.id="InputRightElement";hb.displayName="InputRightElement";function PA(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function nr(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):PA(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var qA=L(function(e,t){const{ratio:n=4/3,children:r,className:o,...a}=e,i=k.exports.Children.only(r),s=ke("chakra-aspect-ratio",o);return M.createElement(N.div,{ref:t,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:nr(n,l=>`${1/l*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...a},i)});qA.displayName="AspectRatio";var tn=L(function(t,n){const r=ut("Badge",t),{className:o,...a}=Ie(t);return M.createElement(N.span,{ref:n,className:ke("chakra-badge",t.className),...a,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});tn.displayName="Badge";var tt=N("div");tt.displayName="Box";var gb=L(function(t,n){const{size:r,centerContent:o=!0,...a}=t;return T(tt,{ref:n,boxSize:r,__css:{...o?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});gb.displayName="Square";var IA=L(function(t,n){const{size:r,...o}=t;return T(gb,{size:r,ref:n,borderRadius:"9999px",...o})});IA.displayName="Circle";var yb=N("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});yb.displayName="Center";var RA={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};L(function(t,n){const{axis:r="both",...o}=t;return M.createElement(N.div,{ref:n,__css:RA[r],...o,position:"absolute"})});var zA=L(function(t,n){const r=ut("Code",t),{className:o,...a}=Ie(t);return M.createElement(N.code,{ref:n,className:ke("chakra-code",t.className),...a,__css:{display:"inline-block",...r}})});zA.displayName="Code";var Ys=L(function(t,n){const{className:r,centerContent:o,...a}=Ie(t),i=ut("Container",t);return M.createElement(N.div,{ref:n,className:ke("chakra-container",r),...a,__css:{...i,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Ys.displayName="Container";var MA=L(function(t,n){const{borderLeftWidth:r,borderBottomWidth:o,borderTopWidth:a,borderRightWidth:i,borderWidth:s,borderStyle:l,borderColor:u,...c}=ut("Divider",t),{className:d,orientation:f="horizontal",__css:p,...b}=Ie(t),v={vertical:{borderLeftWidth:r||i||s||"1px",height:"100%"},horizontal:{borderBottomWidth:o||a||s||"1px",width:"100%"}};return M.createElement(N.hr,{ref:n,"aria-orientation":f,...b,__css:{...c,border:"0",borderColor:u,borderStyle:l,...v[f],...p},className:ke("chakra-divider",d)})});MA.displayName="Divider";var Se=L(function(t,n){const{direction:r,align:o,justify:a,wrap:i,basis:s,grow:l,shrink:u,...c}=t,d={display:"flex",flexDirection:r,alignItems:o,justifyContent:a,flexWrap:i,flexBasis:s,flexGrow:l,flexShrink:u};return M.createElement(N.div,{ref:n,__css:d,...c})});Se.displayName="Flex";var bb=L(function(t,n){const{templateAreas:r,gap:o,rowGap:a,columnGap:i,column:s,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:p,...b}=t,v={display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:p};return M.createElement(N.div,{ref:n,__css:v,...b})});bb.displayName="Grid";function xh(e){return nr(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var VA=L(function(t,n){const{area:r,colSpan:o,colStart:a,colEnd:i,rowEnd:s,rowSpan:l,rowStart:u,...c}=t,d=Yf({gridArea:r,gridColumn:xh(o),gridRow:xh(l),gridColumnStart:a,gridColumnEnd:i,gridRowStart:u,gridRowEnd:s});return M.createElement(N.div,{ref:n,__css:d,...c})});VA.displayName="GridItem";var jn=L(function(t,n){const r=ut("Heading",t),{className:o,...a}=Ie(t);return M.createElement(N.h2,{ref:n,className:ke("chakra-heading",t.className),...a,__css:r})});jn.displayName="Heading";L(function(t,n){const r=ut("Mark",t),o=Ie(t);return T(tt,{ref:n,...o,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})});var LA=L(function(t,n){const r=ut("Kbd",t),{className:o,...a}=Ie(t);return M.createElement(N.kbd,{ref:n,className:ke("chakra-kbd",o),...a,__css:{fontFamily:"mono",...r}})});LA.displayName="Kbd";var jA=L(function(t,n){const r=ut("Link",t),{className:o,isExternal:a,...i}=Ie(t);return M.createElement(N.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:ke("chakra-link",o),...i,__css:r})});jA.displayName="Link";L(function(t,n){const{isExternal:r,target:o,rel:a,className:i,...s}=t;return M.createElement(N.a,{...s,ref:n,className:ke("chakra-linkbox__overlay",i),rel:r?"noopener noreferrer":a,target:r?"_blank":o,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})});L(function(t,n){const{className:r,...o}=t;return M.createElement(N.div,{ref:n,position:"relative",...o,className:ke("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[NA,vb]=fn({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),Qf=L(function(t,n){const r=Vo("List",t),{children:o,styleType:a="none",stylePosition:i,spacing:s,...l}=Ie(t),u=Gf(o),d=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return M.createElement(NA,{value:r},M.createElement(N.ul,{ref:n,listStyleType:a,listStylePosition:i,role:"list",__css:{...r.container,...d},...l},u))});Qf.displayName="List";var BA=L((e,t)=>{const{as:n,...r}=e;return T(Qf,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});BA.displayName="OrderedList";var DA=L(function(t,n){const{as:r,...o}=t;return T(Qf,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...o})});DA.displayName="UnorderedList";var OA=L(function(t,n){const r=vb();return M.createElement(N.li,{ref:n,...t,__css:r.item})});OA.displayName="ListItem";var $A=L(function(t,n){const r=vb();return T(Vr,{ref:n,role:"presentation",...t,__css:r.icon})});$A.displayName="ListIcon";var WA=L(function(t,n){const{columns:r,spacingX:o,spacingY:a,spacing:i,minChildWidth:s,...l}=t,u=Ry(),c=s?UA(s,u):GA(r);return T(bb,{ref:n,gap:i,columnGap:o,rowGap:a,templateColumns:c,...l})});WA.displayName="SimpleGrid";function HA(e){return typeof e=="number"?`${e}px`:e}function UA(e,t){return nr(e,n=>{const r=l7("sizes",n,HA(n))(t);return n===null?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function GA(e){return nr(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}var KA=N("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});KA.displayName="Spacer";var ad="& > *:not(style) ~ *:not(style)";function YA(e){const{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[ad]:nr(n,o=>r[o])}}function ZA(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":nr(n,o=>r[o])}}var wb=e=>M.createElement(N.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});wb.displayName="StackItem";var Jf=L((e,t)=>{const{isInline:n,direction:r,align:o,justify:a,spacing:i="0.5rem",wrap:s,children:l,divider:u,className:c,shouldWrapChildren:d,...f}=e,p=n?"row":r!=null?r:"column",b=k.exports.useMemo(()=>YA({direction:p,spacing:i}),[p,i]),v=k.exports.useMemo(()=>ZA({spacing:i,direction:p}),[i,p]),C=!!u,g=!d&&!C,m=k.exports.useMemo(()=>{const S=Gf(l);return g?S:S.map((F,E)=>{const A=typeof F.key<"u"?F.key:E,q=E+1===S.length,V=d?T(wb,{children:F},A):F;if(!C)return V;const _e=k.exports.cloneElement(u,{__css:v}),Le=q?null:_e;return G(k.exports.Fragment,{children:[V,Le]},A)})},[u,v,C,g,d,l]),h=ke("chakra-stack",c);return M.createElement(N.div,{ref:t,display:"flex",alignItems:o,justifyContent:a,flexDirection:b.flexDirection,flexWrap:s,className:h,__css:C?{}:{[ad]:b[ad]},...f},m)});Jf.displayName="Stack";var XA=L((e,t)=>T(Jf,{align:"center",...e,direction:"row",ref:t}));XA.displayName="HStack";var QA=L((e,t)=>T(Jf,{align:"center",...e,direction:"column",ref:t}));QA.displayName="VStack";var yn=L(function(t,n){const r=ut("Text",t),{className:o,align:a,decoration:i,casing:s,...l}=Ie(t),u=Yf({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return M.createElement(N.p,{ref:n,className:ke("chakra-text",t.className),...u,...l,__css:r})});yn.displayName="Text";function Sh(e){return typeof e=="number"?`${e}px`:e}var JA=L(function(t,n){const{spacing:r="0.5rem",spacingX:o,spacingY:a,children:i,justify:s,direction:l,align:u,className:c,shouldWrapChildren:d,...f}=t,p=k.exports.useMemo(()=>{const{spacingX:v=r,spacingY:C=r}={spacingX:o,spacingY:a};return{"--chakra-wrap-x-spacing":g=>nr(v,m=>Sh(Fc("space",m)(g))),"--chakra-wrap-y-spacing":g=>nr(C,m=>Sh(Fc("space",m)(g))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:u,flexDirection:l,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,o,a,s,u,l]),b=k.exports.useMemo(()=>d?k.exports.Children.map(i,(v,C)=>T(ep,{children:v},C)):i,[i,d]);return M.createElement(N.div,{ref:n,className:ke("chakra-wrap",c),overflow:"hidden",...f},M.createElement(N.ul,{className:"chakra-wrap__list",__css:p},b))});JA.displayName="Wrap";var ep=L(function(t,n){const{className:r,...o}=t;return M.createElement(N.li,{ref:n,__css:{display:"flex",alignItems:"flex-start"},className:ke("chakra-wrap__listitem",r),...o})});ep.displayName="WrapItem";var eE={body:{classList:{add(){},remove(){}}},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}}},xb=eE,Wr=()=>{},tE={document:xb,navigator:{userAgent:""},CustomEvent:function(){return this},addEventListener:Wr,removeEventListener:Wr,getComputedStyle(){return{getPropertyValue(){return""}}},matchMedia(){return{matches:!1,addListener:Wr,removeListener:Wr}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)},setTimeout:()=>0,clearTimeout:Wr,setInterval:()=>0,clearInterval:Wr},nE=tE,rE={window:nE,document:xb},Sb=typeof window<"u"?{window,document}:rE,Cb=k.exports.createContext(Sb);Cb.displayName="EnvironmentContext";function kb(e){const{children:t,environment:n}=e,[r,o]=k.exports.useState(null),[a,i]=k.exports.useState(!1);k.exports.useEffect(()=>i(!0),[]);const s=k.exports.useMemo(()=>{if(n)return n;const l=r==null?void 0:r.ownerDocument,u=r==null?void 0:r.ownerDocument.defaultView;return l?{document:l,window:u}:Sb},[r,n]);return G(Cb.Provider,{value:s,children:[t,!n&&a&&T("span",{id:"__chakra_env",hidden:!0,ref:l=>{k.exports.startTransition(()=>{l&&o(l)})}})]})}kb.displayName="EnvironmentProvider";var Xl={exports:{}},wt={},_b={exports:{}},Tb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,O){var $=I.length;I.push(O);e:for(;0<$;){var he=$-1>>>1,Te=I[he];if(0<o(Te,O))I[he]=O,I[$]=Te,$=he;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],$=I.pop();if($!==O){I[0]=$;e:for(var he=0,Te=I.length,J=Te>>>1;he<J;){var Gt=2*(he+1)-1,$o=I[Gt],ct=Gt+1,lr=I[ct];if(0>o($o,$))ct<Te&&0>o(lr,$o)?(I[he]=lr,I[ct]=$,he=ct):(I[he]=$o,I[Gt]=$,he=Gt);else if(ct<Te&&0>o(lr,$))I[he]=lr,I[ct]=$,he=ct;else break e}}return O}function o(I,O){var $=I.sortIndex-O.sortIndex;return $!==0?$:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,f=3,p=!1,b=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=I)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function S(I){if(v=!1,h(I),!b)if(n(l)!==null)b=!0,xe(F);else{var O=n(u);O!==null&&It(S,O.startTime-I)}}function F(I,O){b=!1,v&&(v=!1,g(q),q=-1),p=!0;var $=f;try{for(h(O),d=n(l);d!==null&&(!(d.expirationTime>O)||I&&!_e());){var he=d.callback;if(typeof he=="function"){d.callback=null,f=d.priorityLevel;var Te=he(d.expirationTime<=O);O=e.unstable_now(),typeof Te=="function"?d.callback=Te:d===n(l)&&r(l),h(O)}else r(l);d=n(l)}if(d!==null)var J=!0;else{var Gt=n(u);Gt!==null&&It(S,Gt.startTime-O),J=!1}return J}finally{d=null,f=$,p=!1}}var E=!1,A=null,q=-1,B=5,V=-1;function _e(){return!(e.unstable_now()-V<B)}function Le(){if(A!==null){var I=e.unstable_now();V=I;var O=!0;try{O=A(!0,I)}finally{O?St():(E=!1,A=null)}}else E=!1}var St;if(typeof m=="function")St=function(){m(Le)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,Ut=Ht.port2;Ht.port1.onmessage=Le,St=function(){Ut.postMessage(null)}}else St=function(){C(Le,0)};function xe(I){A=I,E||(E=!0,St())}function It(I,O){q=C(function(){I(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){b||p||(b=!0,xe(F))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var $=f;f=O;try{return I()}finally{f=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=f;f=I;try{return O()}finally{f=$}},e.unstable_scheduleCallback=function(I,O,$){var he=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?he+$:he):$=he,I){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=$+Te,I={id:c++,callback:O,priorityLevel:I,startTime:$,expirationTime:Te,sortIndex:-1},$>he?(I.sortIndex=$,t(u,I),n(l)===null&&I===n(u)&&(v?(g(q),q=-1):v=!0,It(S,$-he))):(I.sortIndex=Te,t(l,I),b||p||(b=!0,xe(F))),I},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(I){var O=f;return function(){var $=f;f=O;try{return I.apply(this,arguments)}finally{f=$}}}})(Tb);(function(e){e.exports=Tb})(_b);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fb=k.exports,bt=_b.exports;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ab=new Set,Za={};function Nr(e,t){Fo(e,t),Fo(e+"Capture",t)}function Fo(e,t){for(Za[e]=t,e=0;e<t.length;e++)Ab.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=Object.prototype.hasOwnProperty,oE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},kh={};function aE(e){return id.call(kh,e)?!0:id.call(Ch,e)?!1:oE.test(e)?kh[e]=!0:(Ch[e]=!0,!1)}function iE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sE(e,t,n,r){if(t===null||typeof t>"u"||iE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var tp=/[\-:]([a-z])/g;function np(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tp,np);Oe[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tp,np);Oe[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tp,np);Oe[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function rp(e,t,n,r){var o=Oe.hasOwnProperty(t)?Oe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sE(t,n,o,r)&&(n=null),r||o===null?aE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qn=Fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),Eb=Symbol.for("react.provider"),Pb=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),ip=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),qb=Symbol.for("react.offscreen"),_h=Symbol.iterator;function Jo(e){return e===null||typeof e!="object"?null:(e=_h&&e[_h]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,tc;function ca(e){if(tc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tc=t&&t[1]||""}return`
`+tc+e}var nc=!1;function rc(e,t){if(!e||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ca(e):""}function lE(e){switch(e.tag){case 5:return ca(e.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return e=rc(e.type,!1),e;case 11:return e=rc(e.type.render,!1),e;case 1:return e=rc(e.type,!0),e;default:return""}}function cd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xr:return"Fragment";case Zr:return"Portal";case sd:return"Profiler";case op:return"StrictMode";case ld:return"Suspense";case ud:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pb:return(e.displayName||"Context")+".Consumer";case Eb:return(e._context.displayName||"Context")+".Provider";case ap:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ip:return t=e.displayName||null,t!==null?t:cd(e.type)||"Memo";case Nn:t=e._payload,e=e._init;try{return cd(e(t))}catch{}}return null}function uE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cd(t);case 8:return t===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ib(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cE(e){var t=Ib(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){e._valueTracker||(e._valueTracker=cE(e))}function Rb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ib(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dd(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Th(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zb(e,t){t=t.checked,t!=null&&rp(e,"checked",t,!1)}function fd(e,t){zb(e,t);var n=rr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pd(e,t.type,n):t.hasOwnProperty("defaultValue")&&pd(e,t.type,rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pd(e,t,n){(t!=="number"||Zs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var da=Array.isArray;function bo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function md(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ah(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(da(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rr(n)}}function Mb(e,t){var n=rr(t.value),r=rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Eh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yi,Lb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dE=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(e){dE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ta[t]=Ta[e]})});function jb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ta.hasOwnProperty(e)&&Ta[e]?(""+t).trim():t+"px"}function Nb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=jb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var fE=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gd(e,t){if(t){if(fE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function yd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function sp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vd=null,vo=null,wo=null;function Ph(e){if(e=xi(e)){if(typeof vd!="function")throw Error(P(280));var t=e.stateNode;t&&(t=nu(t),vd(e.stateNode,e.type,t))}}function Bb(e){vo?wo?wo.push(e):wo=[e]:vo=e}function Db(){if(vo){var e=vo,t=wo;if(wo=vo=null,Ph(e),t)for(e=0;e<t.length;e++)Ph(t[e])}}function Ob(e,t){return e(t)}function $b(){}var oc=!1;function Wb(e,t,n){if(oc)return e(t,n);oc=!0;try{return Ob(e,t,n)}finally{oc=!1,(vo!==null||wo!==null)&&($b(),Db())}}function Qa(e,t){var n=e.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var wd=!1;if(Fn)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){wd=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{wd=!1}function pE(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fa=!1,Xs=null,Qs=!1,xd=null,mE={onError:function(e){Fa=!0,Xs=e}};function hE(e,t,n,r,o,a,i,s,l){Fa=!1,Xs=null,pE.apply(mE,arguments)}function gE(e,t,n,r,o,a,i,s,l){if(hE.apply(this,arguments),Fa){if(Fa){var u=Xs;Fa=!1,Xs=null}else throw Error(P(198));Qs||(Qs=!0,xd=u)}}function Br(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qh(e){if(Br(e)!==e)throw Error(P(188))}function yE(e){var t=e.alternate;if(!t){if(t=Br(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return qh(o),e;if(a===r)return qh(o),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Ub(e){return e=yE(e),e!==null?Gb(e):null}function Gb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gb(e);if(t!==null)return t;e=e.sibling}return null}var Kb=bt.unstable_scheduleCallback,Ih=bt.unstable_cancelCallback,bE=bt.unstable_shouldYield,vE=bt.unstable_requestPaint,Ce=bt.unstable_now,wE=bt.unstable_getCurrentPriorityLevel,lp=bt.unstable_ImmediatePriority,Yb=bt.unstable_UserBlockingPriority,Js=bt.unstable_NormalPriority,xE=bt.unstable_LowPriority,Zb=bt.unstable_IdlePriority,Ql=null,un=null;function SE(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Ql,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:_E,CE=Math.log,kE=Math.LN2;function _E(e){return e>>>=0,e===0?32:31-(CE(e)/kE|0)|0}var Zi=64,Xi=4194304;function fa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=fa(s):(a&=i,a!==0&&(r=fa(a)))}else i=n&~o,i!==0?r=fa(i):a!==0&&(r=fa(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),o=1<<n,r|=e[n],t&=~o;return r}function TE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Ot(a),s=1<<i,l=o[i];l===-1?((s&n)===0||(s&r)!==0)&&(o[i]=TE(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Sd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xb(){var e=Zi;return Zi<<=1,(Zi&4194240)===0&&(Zi=64),e}function ac(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function AE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ot(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function up(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ne=0;function Qb(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Jb,cp,ev,tv,nv,Cd=!1,Qi=[],Gn=null,Kn=null,Yn=null,Ja=new Map,ei=new Map,On=[],EE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Ja.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function ta(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=xi(t),t!==null&&cp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function PE(e,t,n,r,o){switch(t){case"focusin":return Gn=ta(Gn,e,t,n,r,o),!0;case"dragenter":return Kn=ta(Kn,e,t,n,r,o),!0;case"mouseover":return Yn=ta(Yn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Ja.set(a,ta(Ja.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,ei.set(a,ta(ei.get(a)||null,e,t,n,r,o)),!0}return!1}function rv(e){var t=Sr(e.target);if(t!==null){var n=Br(t);if(n!==null){if(t=n.tag,t===13){if(t=Hb(n),t!==null){e.blockedOn=t,nv(e.priority,function(){ev(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return t=xi(n),t!==null&&cp(t),e.blockedOn=n,!1;t.shift()}return!0}function zh(e,t,n){ws(e)&&n.delete(t)}function qE(){Cd=!1,Gn!==null&&ws(Gn)&&(Gn=null),Kn!==null&&ws(Kn)&&(Kn=null),Yn!==null&&ws(Yn)&&(Yn=null),Ja.forEach(zh),ei.forEach(zh)}function na(e,t){e.blockedOn===t&&(e.blockedOn=null,Cd||(Cd=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,qE)))}function ti(e){function t(o){return na(o,e)}if(0<Qi.length){na(Qi[0],e);for(var n=1;n<Qi.length;n++){var r=Qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gn!==null&&na(Gn,e),Kn!==null&&na(Kn,e),Yn!==null&&na(Yn,e),Ja.forEach(t),ei.forEach(t),n=0;n<On.length;n++)r=On[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)rv(n),n.blockedOn===null&&On.shift()}var xo=qn.ReactCurrentBatchConfig,tl=!0;function IE(e,t,n,r){var o=ne,a=xo.transition;xo.transition=null;try{ne=1,dp(e,t,n,r)}finally{ne=o,xo.transition=a}}function RE(e,t,n,r){var o=ne,a=xo.transition;xo.transition=null;try{ne=4,dp(e,t,n,r)}finally{ne=o,xo.transition=a}}function dp(e,t,n,r){if(tl){var o=kd(e,t,n,r);if(o===null)hc(e,t,r,nl,n),Rh(e,r);else if(PE(o,e,t,n,r))r.stopPropagation();else if(Rh(e,r),t&4&&-1<EE.indexOf(e)){for(;o!==null;){var a=xi(o);if(a!==null&&Jb(a),a=kd(e,t,n,r),a===null&&hc(e,t,r,nl,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else hc(e,t,r,null,n)}}var nl=null;function kd(e,t,n,r){if(nl=null,e=sp(r),e=Sr(e),e!==null)if(t=Br(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nl=e,null}function ov(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wE()){case lp:return 1;case Yb:return 4;case Js:case xE:return 16;case Zb:return 536870912;default:return 16}default:return 16}}var Hn=null,fp=null,xs=null;function av(){if(xs)return xs;var e,t=fp,n=t.length,r,o="value"in Hn?Hn.value:Hn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return xs=o.slice(e,1<r?1-r:void 0)}function Ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ji(){return!0}function Mh(){return!1}function xt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ji:Mh,this.isPropagationStopped=Mh,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),t}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pp=xt(Do),wi=be({},Do,{view:0,detail:0}),zE=xt(wi),ic,sc,ra,Jl=be({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ra&&(ra&&e.type==="mousemove"?(ic=e.screenX-ra.screenX,sc=e.screenY-ra.screenY):sc=ic=0,ra=e),ic)},movementY:function(e){return"movementY"in e?e.movementY:sc}}),Vh=xt(Jl),ME=be({},Jl,{dataTransfer:0}),VE=xt(ME),LE=be({},wi,{relatedTarget:0}),lc=xt(LE),jE=be({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),NE=xt(jE),BE=be({},Do,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),DE=xt(BE),OE=be({},Do,{data:0}),Lh=xt(OE),$E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=HE[e])?!!t[e]:!1}function mp(){return UE}var GE=be({},wi,{key:function(e){if(e.key){var t=$E[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?WE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mp,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),KE=xt(GE),YE=be({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=xt(YE),ZE=be({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mp}),XE=xt(ZE),QE=be({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),JE=xt(QE),eP=be({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tP=xt(eP),nP=[9,13,27,32],hp=Fn&&"CompositionEvent"in window,Aa=null;Fn&&"documentMode"in document&&(Aa=document.documentMode);var rP=Fn&&"TextEvent"in window&&!Aa,iv=Fn&&(!hp||Aa&&8<Aa&&11>=Aa),Nh=String.fromCharCode(32),Bh=!1;function sv(e,t){switch(e){case"keyup":return nP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function oP(e,t){switch(e){case"compositionend":return lv(t);case"keypress":return t.which!==32?null:(Bh=!0,Nh);case"textInput":return e=t.data,e===Nh&&Bh?null:e;default:return null}}function aP(e,t){if(Qr)return e==="compositionend"||!hp&&sv(e,t)?(e=av(),xs=fp=Hn=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return iv&&t.locale!=="ko"?null:t.data;default:return null}}var iP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!iP[e.type]:t==="textarea"}function uv(e,t,n,r){Bb(r),t=rl(t,"onChange"),0<t.length&&(n=new pp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ea=null,ni=null;function sP(e){wv(e,0)}function eu(e){var t=to(e);if(Rb(t))return e}function lP(e,t){if(e==="change")return t}var cv=!1;if(Fn){var uc;if(Fn){var cc="oninput"in document;if(!cc){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),cc=typeof Oh.oninput=="function"}uc=cc}else uc=!1;cv=uc&&(!document.documentMode||9<document.documentMode)}function $h(){Ea&&(Ea.detachEvent("onpropertychange",dv),ni=Ea=null)}function dv(e){if(e.propertyName==="value"&&eu(ni)){var t=[];uv(t,ni,e,sp(e)),Wb(sP,t)}}function uP(e,t,n){e==="focusin"?($h(),Ea=t,ni=n,Ea.attachEvent("onpropertychange",dv)):e==="focusout"&&$h()}function cP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eu(ni)}function dP(e,t){if(e==="click")return eu(t)}function fP(e,t){if(e==="input"||e==="change")return eu(t)}function pP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:pP;function ri(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!id.call(t,o)||!Wt(e[o],t[o]))return!1}return!0}function Wh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hh(e,t){var n=Wh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wh(n)}}function fv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pv(){for(var e=window,t=Zs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zs(e.document)}return t}function gp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mP(e){var t=pv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fv(n.ownerDocument.documentElement,n)){if(r!==null&&gp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Hh(n,a);var i=Hh(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hP=Fn&&"documentMode"in document&&11>=document.documentMode,Jr=null,_d=null,Pa=null,Td=!1;function Uh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||Jr==null||Jr!==Zs(r)||(r=Jr,"selectionStart"in r&&gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pa&&ri(Pa,r)||(Pa=r,r=rl(_d,"onSelect"),0<r.length&&(t=new pp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jr)))}function es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var eo={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},dc={},mv={};Fn&&(mv=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function tu(e){if(dc[e])return dc[e];if(!eo[e])return e;var t=eo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mv)return dc[e]=t[n];return e}var hv=tu("animationend"),gv=tu("animationiteration"),yv=tu("animationstart"),bv=tu("transitionend"),vv=new Map,Gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(e,t){vv.set(e,t),Nr(t,[e])}for(var fc=0;fc<Gh.length;fc++){var pc=Gh[fc],gP=pc.toLowerCase(),yP=pc[0].toUpperCase()+pc.slice(1);ar(gP,"on"+yP)}ar(hv,"onAnimationEnd");ar(gv,"onAnimationIteration");ar(yv,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(bv,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bP=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Kh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gE(r,t,void 0,e),e.currentTarget=null}function wv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;Kh(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;Kh(o,s,u),a=l}}}if(Qs)throw e=xd,Qs=!1,xd=null,e}function le(e,t){var n=t[qd];n===void 0&&(n=t[qd]=new Set);var r=e+"__bubble";n.has(r)||(xv(t,e,2,!1),n.add(r))}function mc(e,t,n){var r=0;t&&(r|=4),xv(n,e,r,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function oi(e){if(!e[ts]){e[ts]=!0,Ab.forEach(function(n){n!=="selectionchange"&&(bP.has(n)||mc(n,!1,e),mc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,mc("selectionchange",!1,t))}}function xv(e,t,n,r){switch(ov(t)){case 1:var o=IE;break;case 4:o=RE;break;default:o=dp}n=o.bind(null,t,n,e),o=void 0,!wd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hc(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Sr(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}Wb(function(){var u=a,c=sp(n),d=[];e:{var f=vv.get(e);if(f!==void 0){var p=pp,b=e;switch(e){case"keypress":if(Ss(n)===0)break e;case"keydown":case"keyup":p=KE;break;case"focusin":b="focus",p=lc;break;case"focusout":b="blur",p=lc;break;case"beforeblur":case"afterblur":p=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=VE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=XE;break;case hv:case gv:case yv:p=NE;break;case bv:p=JE;break;case"scroll":p=zE;break;case"wheel":p=tP;break;case"copy":case"cut":case"paste":p=DE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jh}var v=(t&4)!==0,C=!v&&e==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,h;m!==null;){h=m;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=Qa(m,g),S!=null&&v.push(ai(m,S,h)))),C)break;m=m.return}0<v.length&&(f=new p(f,b,null,n,c),d.push({event:f,listeners:v}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==bd&&(b=n.relatedTarget||n.fromElement)&&(Sr(b)||b[An]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(b=n.relatedTarget||n.toElement,p=u,b=b?Sr(b):null,b!==null&&(C=Br(b),b!==C||b.tag!==5&&b.tag!==6)&&(b=null)):(p=null,b=u),p!==b)){if(v=Vh,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=jh,S="onPointerLeave",g="onPointerEnter",m="pointer"),C=p==null?f:to(p),h=b==null?f:to(b),f=new v(S,m+"leave",p,n,c),f.target=C,f.relatedTarget=h,S=null,Sr(c)===u&&(v=new v(g,m+"enter",b,n,c),v.target=h,v.relatedTarget=C,S=v),C=S,p&&b)t:{for(v=p,g=b,m=0,h=v;h;h=Hr(h))m++;for(h=0,S=g;S;S=Hr(S))h++;for(;0<m-h;)v=Hr(v),m--;for(;0<h-m;)g=Hr(g),h--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=Hr(v),g=Hr(g)}v=null}else v=null;p!==null&&Yh(d,f,p,v,!1),b!==null&&C!==null&&Yh(d,C,b,v,!0)}}e:{if(f=u?to(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var F=lP;else if(Dh(f))if(cv)F=fP;else{F=cP;var E=uP}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(F=dP);if(F&&(F=F(e,u))){uv(d,F,n,c);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&pd(f,"number",f.value)}switch(E=u?to(u):window,e){case"focusin":(Dh(E)||E.contentEditable==="true")&&(Jr=E,_d=u,Pa=null);break;case"focusout":Pa=_d=Jr=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,Uh(d,n,c);break;case"selectionchange":if(hP)break;case"keydown":case"keyup":Uh(d,n,c)}var A;if(hp)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else Qr?sv(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(iv&&n.locale!=="ko"&&(Qr||q!=="onCompositionStart"?q==="onCompositionEnd"&&Qr&&(A=av()):(Hn=c,fp="value"in Hn?Hn.value:Hn.textContent,Qr=!0)),E=rl(u,q),0<E.length&&(q=new Lh(q,e,null,n,c),d.push({event:q,listeners:E}),A?q.data=A:(A=lv(n),A!==null&&(q.data=A)))),(A=rP?oP(e,n):aP(e,n))&&(u=rl(u,"onBeforeInput"),0<u.length&&(c=new Lh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}wv(d,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Qa(e,n),a!=null&&r.unshift(ai(e,a,o)),a=Qa(e,t),a!=null&&r.push(ai(e,a,o))),e=e.return}return r}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yh(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Qa(n,a),l!=null&&i.unshift(ai(n,l,s))):o||(l=Qa(n,a),l!=null&&i.push(ai(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var vP=/\r\n?/g,wP=/\u0000|\uFFFD/g;function Zh(e){return(typeof e=="string"?e:""+e).replace(vP,`
`).replace(wP,"")}function ns(e,t,n){if(t=Zh(t),Zh(e)!==t&&n)throw Error(P(425))}function ol(){}var Fd=null,Ad=null;function Ed(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pd=typeof setTimeout=="function"?setTimeout:void 0,xP=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,SP=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(e){return Xh.resolve(null).then(e).catch(CP)}:Pd;function CP(e){setTimeout(function(){throw e})}function gc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ti(t)}function Zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),nn="__reactFiber$"+Oo,ii="__reactProps$"+Oo,An="__reactContainer$"+Oo,qd="__reactEvents$"+Oo,kP="__reactListeners$"+Oo,_P="__reactHandles$"+Oo;function Sr(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[An]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qh(e);e!==null;){if(n=e[nn])return n;e=Qh(e)}return t}e=n,n=e.parentNode}return null}function xi(e){return e=e[nn]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function to(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function nu(e){return e[ii]||null}var Id=[],no=-1;function ir(e){return{current:e}}function ce(e){0>no||(e.current=Id[no],Id[no]=null,no--)}function se(e,t){no++,Id[no]=e.current,e.current=t}var or={},Ge=ir(or),at=ir(!1),qr=or;function Ao(e,t){var n=e.type.contextTypes;if(!n)return or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function it(e){return e=e.childContextTypes,e!=null}function al(){ce(at),ce(Ge)}function Jh(e,t,n){if(Ge.current!==or)throw Error(P(168));se(Ge,t),se(at,n)}function Sv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,uE(e)||"Unknown",o));return be({},n,r)}function il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,qr=Ge.current,se(Ge,e),se(at,at.current),!0}function eg(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Sv(e,t,qr),r.__reactInternalMemoizedMergedChildContext=e,ce(at),ce(Ge),se(Ge,e)):ce(at),se(at,n)}var vn=null,ru=!1,yc=!1;function Cv(e){vn===null?vn=[e]:vn.push(e)}function TP(e){ru=!0,Cv(e)}function sr(){if(!yc&&vn!==null){yc=!0;var e=0,t=ne;try{var n=vn;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vn=null,ru=!1}catch(o){throw vn!==null&&(vn=vn.slice(e+1)),Kb(lp,sr),o}finally{ne=t,yc=!1}}return null}var ro=[],oo=0,sl=null,ll=0,_t=[],Tt=0,Ir=null,Sn=1,Cn="";function hr(e,t){ro[oo++]=ll,ro[oo++]=sl,sl=e,ll=t}function kv(e,t,n){_t[Tt++]=Sn,_t[Tt++]=Cn,_t[Tt++]=Ir,Ir=e;var r=Sn;e=Cn;var o=32-Ot(r)-1;r&=~(1<<o),n+=1;var a=32-Ot(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Sn=1<<32-Ot(t)+o|n<<o|r,Cn=a+e}else Sn=1<<a|n<<o|r,Cn=e}function yp(e){e.return!==null&&(hr(e,1),kv(e,1,0))}function bp(e){for(;e===sl;)sl=ro[--oo],ro[oo]=null,ll=ro[--oo],ro[oo]=null;for(;e===Ir;)Ir=_t[--Tt],_t[Tt]=null,Cn=_t[--Tt],_t[Tt]=null,Sn=_t[--Tt],_t[Tt]=null}var gt=null,pt=null,me=!1,Nt=null;function _v(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,pt=Zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ir!==null?{id:Sn,overflow:Cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,gt=e,pt=null,!0):!1;default:return!1}}function Rd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zd(e){if(me){var t=pt;if(t){var n=t;if(!tg(e,t)){if(Rd(e))throw Error(P(418));t=Zn(n.nextSibling);var r=gt;t&&tg(e,t)?_v(r,n):(e.flags=e.flags&-4097|2,me=!1,gt=e)}}else{if(Rd(e))throw Error(P(418));e.flags=e.flags&-4097|2,me=!1,gt=e}}}function ng(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function rs(e){if(e!==gt)return!1;if(!me)return ng(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ed(e.type,e.memoizedProps)),t&&(t=pt)){if(Rd(e))throw Tv(),Error(P(418));for(;t;)_v(e,t),t=Zn(t.nextSibling)}if(ng(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=gt?Zn(e.stateNode.nextSibling):null;return!0}function Tv(){for(var e=pt;e;)e=Zn(e.nextSibling)}function Eo(){pt=gt=null,me=!1}function vp(e){Nt===null?Nt=[e]:Nt.push(e)}var FP=qn.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ul=ir(null),cl=null,ao=null,wp=null;function xp(){wp=ao=cl=null}function Sp(e){var t=ul.current;ce(ul),e._currentValue=t}function Md(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function So(e,t){cl=e,wp=ao=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(wp!==e)if(e={context:e,memoizedValue:t,next:null},ao===null){if(cl===null)throw Error(P(308));ao=e,cl.dependencies={lanes:0,firstContext:e}}else ao=ao.next=e;return t}var Cr=null;function Cp(e){Cr===null?Cr=[e]:Cr.push(e)}function Fv(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Cp(t)):(n.next=o.next,o.next=n),t.interleaved=n,En(e,r)}function En(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bn=!1;function kp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Y&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,En(e,n)}return o=r.interleaved,o===null?(t.next=t,Cp(r)):(t.next=o.next,o.next=t),r.interleaved=t,En(e,n)}function Cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,up(e,n)}}function rg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dl(e,t,n,r){var o=e.updateQueue;Bn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=o.baseState;i=0,c=u=l=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,v=s;switch(f=t,p=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){d=b.call(p,d,f);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,f=typeof b=="function"?b.call(p,d,f):b,f==null)break e;d=be({},d,f);break e;case 2:Bn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);zr|=i,e.lanes=i,e.memoizedState=d}}function og(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Ev=new Fb.Component().refs;function Vd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ou={isMounted:function(e){return(e=e._reactInternals)?Br(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=Jn(e),a=kn(r,o);a.payload=t,n!=null&&(a.callback=n),t=Xn(e,a,o),t!==null&&($t(t,e,o,r),Cs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=Jn(e),a=kn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Xn(e,a,o),t!==null&&($t(t,e,o,r),Cs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Jn(e),o=kn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xn(e,o,r),t!==null&&($t(t,e,r,n),Cs(t,e,r))}};function ag(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(o,a):!0}function Pv(e,t,n){var r=!1,o=or,a=t.contextType;return typeof a=="object"&&a!==null?a=Pt(a):(o=it(t)?qr:Ge.current,r=t.contextTypes,a=(r=r!=null)?Ao(e,o):or),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ou,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ig(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ou.enqueueReplaceState(t,t.state,null)}function Ld(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ev,kp(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Pt(a):(a=it(t)?qr:Ge.current,o.context=Ao(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Vd(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ou.enqueueReplaceState(o,o.state,null),dl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function oa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;s===Ev&&(s=o.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function os(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sg(e){var t=e._init;return t(e._payload)}function qv(e){function t(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=er(g,m),g.index=0,g.sibling=null,g}function a(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,h,S){return m===null||m.tag!==6?(m=kc(h,g.mode,S),m.return=g,m):(m=o(m,h),m.return=g,m)}function l(g,m,h,S){var F=h.type;return F===Xr?c(g,m,h.props.children,S,h.key):m!==null&&(m.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Nn&&sg(F)===m.type)?(S=o(m,h.props),S.ref=oa(g,m,h),S.return=g,S):(S=Es(h.type,h.key,h.props,null,g.mode,S),S.ref=oa(g,m,h),S.return=g,S)}function u(g,m,h,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=_c(h,g.mode,S),m.return=g,m):(m=o(m,h.children||[]),m.return=g,m)}function c(g,m,h,S,F){return m===null||m.tag!==7?(m=Er(h,g.mode,S,F),m.return=g,m):(m=o(m,h),m.return=g,m)}function d(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=kc(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:return h=Es(m.type,m.key,m.props,null,g.mode,h),h.ref=oa(g,null,m),h.return=g,h;case Zr:return m=_c(m,g.mode,h),m.return=g,m;case Nn:var S=m._init;return d(g,S(m._payload),h)}if(da(m)||Jo(m))return m=Er(m,g.mode,h,null),m.return=g,m;os(g,m)}return null}function f(g,m,h,S){var F=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return F!==null?null:s(g,m,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Gi:return h.key===F?l(g,m,h,S):null;case Zr:return h.key===F?u(g,m,h,S):null;case Nn:return F=h._init,f(g,m,F(h._payload),S)}if(da(h)||Jo(h))return F!==null?null:c(g,m,h,S,null);os(g,h)}return null}function p(g,m,h,S,F){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,s(m,g,""+S,F);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gi:return g=g.get(S.key===null?h:S.key)||null,l(m,g,S,F);case Zr:return g=g.get(S.key===null?h:S.key)||null,u(m,g,S,F);case Nn:var E=S._init;return p(g,m,h,E(S._payload),F)}if(da(S)||Jo(S))return g=g.get(h)||null,c(m,g,S,F,null);os(m,S)}return null}function b(g,m,h,S){for(var F=null,E=null,A=m,q=m=0,B=null;A!==null&&q<h.length;q++){A.index>q?(B=A,A=null):B=A.sibling;var V=f(g,A,h[q],S);if(V===null){A===null&&(A=B);break}e&&A&&V.alternate===null&&t(g,A),m=a(V,m,q),E===null?F=V:E.sibling=V,E=V,A=B}if(q===h.length)return n(g,A),me&&hr(g,q),F;if(A===null){for(;q<h.length;q++)A=d(g,h[q],S),A!==null&&(m=a(A,m,q),E===null?F=A:E.sibling=A,E=A);return me&&hr(g,q),F}for(A=r(g,A);q<h.length;q++)B=p(A,g,q,h[q],S),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?q:B.key),m=a(B,m,q),E===null?F=B:E.sibling=B,E=B);return e&&A.forEach(function(_e){return t(g,_e)}),me&&hr(g,q),F}function v(g,m,h,S){var F=Jo(h);if(typeof F!="function")throw Error(P(150));if(h=F.call(h),h==null)throw Error(P(151));for(var E=F=null,A=m,q=m=0,B=null,V=h.next();A!==null&&!V.done;q++,V=h.next()){A.index>q?(B=A,A=null):B=A.sibling;var _e=f(g,A,V.value,S);if(_e===null){A===null&&(A=B);break}e&&A&&_e.alternate===null&&t(g,A),m=a(_e,m,q),E===null?F=_e:E.sibling=_e,E=_e,A=B}if(V.done)return n(g,A),me&&hr(g,q),F;if(A===null){for(;!V.done;q++,V=h.next())V=d(g,V.value,S),V!==null&&(m=a(V,m,q),E===null?F=V:E.sibling=V,E=V);return me&&hr(g,q),F}for(A=r(g,A);!V.done;q++,V=h.next())V=p(A,g,q,V.value,S),V!==null&&(e&&V.alternate!==null&&A.delete(V.key===null?q:V.key),m=a(V,m,q),E===null?F=V:E.sibling=V,E=V);return e&&A.forEach(function(Le){return t(g,Le)}),me&&hr(g,q),F}function C(g,m,h,S){if(typeof h=="object"&&h!==null&&h.type===Xr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Gi:e:{for(var F=h.key,E=m;E!==null;){if(E.key===F){if(F=h.type,F===Xr){if(E.tag===7){n(g,E.sibling),m=o(E,h.props.children),m.return=g,g=m;break e}}else if(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Nn&&sg(F)===E.type){n(g,E.sibling),m=o(E,h.props),m.ref=oa(g,E,h),m.return=g,g=m;break e}n(g,E);break}else t(g,E);E=E.sibling}h.type===Xr?(m=Er(h.props.children,g.mode,S,h.key),m.return=g,g=m):(S=Es(h.type,h.key,h.props,null,g.mode,S),S.ref=oa(g,m,h),S.return=g,g=S)}return i(g);case Zr:e:{for(E=h.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(g,m.sibling),m=o(m,h.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=_c(h,g.mode,S),m.return=g,g=m}return i(g);case Nn:return E=h._init,C(g,m,E(h._payload),S)}if(da(h))return b(g,m,h,S);if(Jo(h))return v(g,m,h,S);os(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(g,m.sibling),m=o(m,h),m.return=g,g=m):(n(g,m),m=kc(h,g.mode,S),m.return=g,g=m),i(g)):n(g,m)}return C}var Po=qv(!0),Iv=qv(!1),Si={},cn=ir(Si),si=ir(Si),li=ir(Si);function kr(e){if(e===Si)throw Error(P(174));return e}function _p(e,t){switch(se(li,t),se(si,e),se(cn,Si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hd(t,e)}ce(cn),se(cn,t)}function qo(){ce(cn),ce(si),ce(li)}function Rv(e){kr(li.current);var t=kr(cn.current),n=hd(t,e.type);t!==n&&(se(si,e),se(cn,n))}function Tp(e){si.current===e&&(ce(cn),ce(si))}var ge=ir(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bc=[];function Fp(){for(var e=0;e<bc.length;e++)bc[e]._workInProgressVersionPrimary=null;bc.length=0}var ks=qn.ReactCurrentDispatcher,vc=qn.ReactCurrentBatchConfig,Rr=0,ye=null,Pe=null,ze=null,pl=!1,qa=!1,ui=0,AP=0;function $e(){throw Error(P(321))}function Ap(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function Ep(e,t,n,r,o,a){if(Rr=a,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?IP:RP,e=n(r,o),qa){a=0;do{if(qa=!1,ui=0,25<=a)throw Error(P(301));a+=1,ze=Pe=null,t.updateQueue=null,ks.current=zP,e=n(r,o)}while(qa)}if(ks.current=ml,t=Pe!==null&&Pe.next!==null,Rr=0,ze=Pe=ye=null,pl=!1,t)throw Error(P(300));return e}function Pp(){var e=ui!==0;return ui=0,e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ye.memoizedState=ze=e:ze=ze.next=e,ze}function qt(){if(Pe===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=ze===null?ye.memoizedState:ze.next;if(t!==null)ze=t,Pe=e;else{if(e===null)throw Error(P(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ze===null?ye.memoizedState=ze=e:ze=ze.next=e}return ze}function ci(e,t){return typeof t=="function"?t(e):t}function wc(e){var t=qt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Pe,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((Rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,ye.lanes|=c,zr|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,Wt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ye.lanes|=a,zr|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xc(e){var t=qt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Wt(a,t.memoizedState)||(ot=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function zv(){}function Mv(e,t){var n=ye,r=qt(),o=t(),a=!Wt(r.memoizedState,o);if(a&&(r.memoizedState=o,ot=!0),r=r.queue,qp(jv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,di(9,Lv.bind(null,n,r,o,t),void 0,null),Me===null)throw Error(P(349));(Rr&30)!==0||Vv(n,t,o)}return o}function Vv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lv(e,t,n,r){t.value=n,t.getSnapshot=r,Nv(t)&&Bv(e)}function jv(e,t,n){return n(function(){Nv(t)&&Bv(e)})}function Nv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function Bv(e){var t=En(e,1);t!==null&&$t(t,e,1,-1)}function lg(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=qP.bind(null,ye,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dv(){return qt().memoizedState}function _s(e,t,n,r){var o=Xt();ye.flags|=e,o.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function au(e,t,n,r){var o=qt();r=r===void 0?null:r;var a=void 0;if(Pe!==null){var i=Pe.memoizedState;if(a=i.destroy,r!==null&&Ap(r,i.deps)){o.memoizedState=di(t,n,a,r);return}}ye.flags|=e,o.memoizedState=di(1|t,n,a,r)}function ug(e,t){return _s(8390656,8,e,t)}function qp(e,t){return au(2048,8,e,t)}function Ov(e,t){return au(4,2,e,t)}function $v(e,t){return au(4,4,e,t)}function Wv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hv(e,t,n){return n=n!=null?n.concat([e]):null,au(4,4,Wv.bind(null,t,e),n)}function Ip(){}function Uv(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ap(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gv(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ap(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kv(e,t,n){return(Rr&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(Wt(n,t)||(n=Xb(),ye.lanes|=n,zr|=n,e.baseState=!0),t)}function EP(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=vc.transition;vc.transition={};try{e(!1),t()}finally{ne=n,vc.transition=r}}function Yv(){return qt().memoizedState}function PP(e,t,n){var r=Jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zv(e))Xv(t,n);else if(n=Fv(e,t,n,r),n!==null){var o=Qe();$t(n,e,r,o),Qv(n,t,r)}}function qP(e,t,n){var r=Jn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zv(e))Xv(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,Wt(s,i)){var l=t.interleaved;l===null?(o.next=o,Cp(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Fv(e,t,o,r),n!==null&&(o=Qe(),$t(n,e,r,o),Qv(n,t,r))}}function Zv(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Xv(e,t){qa=pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qv(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,up(e,n)}}var ml={readContext:Pt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},IP={readContext:Pt,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:ug,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_s(4194308,4,Wv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _s(4194308,4,e,t)},useInsertionEffect:function(e,t){return _s(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=PP.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:lg,useDebugValue:Ip,useDeferredValue:function(e){return Xt().memoizedState=e},useTransition:function(){var e=lg(!1),t=e[0];return e=EP.bind(null,e[1]),Xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,o=Xt();if(me){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Me===null)throw Error(P(349));(Rr&30)!==0||Vv(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,ug(jv.bind(null,r,a,e),[e]),r.flags|=2048,di(9,Lv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Xt(),t=Me.identifierPrefix;if(me){var n=Cn,r=Sn;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=AP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},RP={readContext:Pt,useCallback:Uv,useContext:Pt,useEffect:qp,useImperativeHandle:Hv,useInsertionEffect:Ov,useLayoutEffect:$v,useMemo:Gv,useReducer:wc,useRef:Dv,useState:function(){return wc(ci)},useDebugValue:Ip,useDeferredValue:function(e){var t=qt();return Kv(t,Pe.memoizedState,e)},useTransition:function(){var e=wc(ci)[0],t=qt().memoizedState;return[e,t]},useMutableSource:zv,useSyncExternalStore:Mv,useId:Yv,unstable_isNewReconciler:!1},zP={readContext:Pt,useCallback:Uv,useContext:Pt,useEffect:qp,useImperativeHandle:Hv,useInsertionEffect:Ov,useLayoutEffect:$v,useMemo:Gv,useReducer:xc,useRef:Dv,useState:function(){return xc(ci)},useDebugValue:Ip,useDeferredValue:function(e){var t=qt();return Pe===null?t.memoizedState=e:Kv(t,Pe.memoizedState,e)},useTransition:function(){var e=xc(ci)[0],t=qt().memoizedState;return[e,t]},useMutableSource:zv,useSyncExternalStore:Mv,useId:Yv,unstable_isNewReconciler:!1};function Io(e,t){try{var n="",r=t;do n+=lE(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Sc(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function jd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var MP=typeof WeakMap=="function"?WeakMap:Map;function Jv(e,t,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gl||(gl=!0,Kd=r),jd(e,t)},n}function e2(e,t,n){n=kn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){jd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){jd(e,t),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function cg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new MP;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=YP.bind(null,e,t,n),t.then(e,e))}function dg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fg(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kn(-1,1),t.tag=2,Xn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var VP=qn.ReactCurrentOwner,ot=!1;function Ye(e,t,n,r){t.child=e===null?Iv(t,null,n,r):Po(t,e.child,n,r)}function pg(e,t,n,r,o){n=n.render;var a=t.ref;return So(t,o),r=Ep(e,t,n,r,a,o),n=Pp(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pn(e,t,o)):(me&&n&&yp(t),t.flags|=1,Ye(e,t,r,o),t.child)}function mg(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Bp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,t2(e,t,a,r,o)):(e=Es(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(i,r)&&e.ref===t.ref)return Pn(e,t,o)}return t.flags|=1,e=er(a,r),e.ref=t.ref,e.return=t,t.child=e}function t2(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(ri(a,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Pn(e,t,o)}return Nd(e,t,n,r,o)}function n2(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(so,ft),ft|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(so,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(so,ft),ft|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(so,ft),ft|=r;return Ye(e,t,o,n),t.child}function r2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nd(e,t,n,r,o){var a=it(n)?qr:Ge.current;return a=Ao(t,a),So(t,o),n=Ep(e,t,n,r,a,o),r=Pp(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pn(e,t,o)):(me&&r&&yp(t),t.flags|=1,Ye(e,t,n,o),t.child)}function hg(e,t,n,r,o){if(it(n)){var a=!0;il(t)}else a=!1;if(So(t,o),t.stateNode===null)Ts(e,t),Pv(t,n,r),Ld(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=it(n)?qr:Ge.current,u=Ao(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ig(t,i,r,u),Bn=!1;var f=t.memoizedState;i.state=f,dl(t,r,i,o),l=t.memoizedState,s!==r||f!==l||at.current||Bn?(typeof c=="function"&&(Vd(t,n,c,r),l=t.memoizedState),(s=Bn||ag(t,n,s,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Av(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Lt(t.type,s),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=it(n)?qr:Ge.current,l=Ao(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||f!==l)&&ig(t,i,r,l),Bn=!1,f=t.memoizedState,i.state=f,dl(t,r,i,o);var b=t.memoizedState;s!==d||f!==b||at.current||Bn?(typeof p=="function"&&(Vd(t,n,p,r),b=t.memoizedState),(u=Bn||ag(t,n,u,r,f,b,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,b,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,b,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),i.props=r,i.state=b,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Bd(e,t,n,r,a,o)}function Bd(e,t,n,r,o,a){r2(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&eg(t,n,!1),Pn(e,t,a);r=t.stateNode,VP.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Po(t,e.child,null,a),t.child=Po(t,null,s,a)):Ye(e,t,s,a),t.memoizedState=r.state,o&&eg(t,n,!0),t.child}function o2(e){var t=e.stateNode;t.pendingContext?Jh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jh(e,t.context,!1),_p(e,t.containerInfo)}function gg(e,t,n,r,o){return Eo(),vp(o),t.flags|=256,Ye(e,t,n,r),t.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function Od(e){return{baseLanes:e,cachePool:null,transitions:null}}function a2(e,t,n){var r=t.pendingProps,o=ge.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(ge,o&1),e===null)return zd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=lu(i,r,0,null),e=Er(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Od(n),t.memoizedState=Dd,e):Rp(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return LP(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=er(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=er(s,a):(a=Er(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Od(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Dd,r}return a=e.child,e=a.sibling,r=er(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rp(e,t){return t=lu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function as(e,t,n,r){return r!==null&&vp(r),Po(t,e.child,null,n),e=Rp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function LP(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Sc(Error(P(422))),as(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=lu({mode:"visible",children:r.children},o,0,null),a=Er(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Po(t,e.child,null,i),t.child.memoizedState=Od(i),t.memoizedState=Dd,a);if((t.mode&1)===0)return as(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(P(419)),r=Sc(a,r,void 0),as(e,t,i,r)}if(s=(i&e.childLanes)!==0,ot||s){if(r=Me,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,En(e,o),$t(r,e,o,-1))}return Np(),r=Sc(Error(P(421))),as(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ZP.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,pt=Zn(o.nextSibling),gt=t,me=!0,Nt=null,e!==null&&(_t[Tt++]=Sn,_t[Tt++]=Cn,_t[Tt++]=Ir,Sn=e.id,Cn=e.overflow,Ir=t),t=Rp(t,r.children),t.flags|=4096,t)}function yg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Md(e.return,t,n)}function Cc(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function i2(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Ye(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yg(e,n,t);else if(e.tag===19)yg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Cc(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Cc(t,!0,n,null,a);break;case"together":Cc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ts(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jP(e,t,n){switch(t.tag){case 3:o2(t),Eo();break;case 5:Rv(t);break;case 1:it(t.type)&&il(t);break;case 4:_p(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(ul,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?a2(e,t,n):(se(ge,ge.current&1),e=Pn(e,t,n),e!==null?e.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return i2(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,n2(e,t,n)}return Pn(e,t,n)}var s2,$d,l2,u2;s2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};l2=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,kr(cn.current);var a=null;switch(n){case"input":o=dd(e,o),r=dd(e,r),a=[];break;case"select":o=be({},o,{value:void 0}),r=be({},r,{value:void 0}),a=[];break;case"textarea":o=md(e,o),r=md(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}gd(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Za.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Za.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};u2=function(e,t,n,r){n!==r&&(t.flags|=4)};function aa(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function NP(e,t,n){var r=t.pendingProps;switch(bp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return it(t.type)&&al(),We(t),null;case 3:return r=t.stateNode,qo(),ce(at),ce(Ge),Fp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(Xd(Nt),Nt=null))),$d(e,t),We(t),null;case 5:Tp(t);var o=kr(li.current);if(n=t.type,e!==null&&t.stateNode!=null)l2(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return We(t),null}if(e=kr(cn.current),rs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[nn]=t,r[ii]=a,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<pa.length;o++)le(pa[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Th(r,a),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},le("invalid",r);break;case"textarea":Ah(r,a),le("invalid",r)}gd(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&ns(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ns(r.textContent,s,e),o=["children",""+s]):Za.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&le("scroll",r)}switch(n){case"input":Ki(r),Fh(r,a,!0);break;case"textarea":Ki(r),Eh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ol)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[nn]=t,e[ii]=r,s2(e,t,!1,!1),t.stateNode=e;e:{switch(i=yd(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<pa.length;o++)le(pa[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":Th(e,r),o=dd(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=be({},r,{value:void 0}),le("invalid",e);break;case"textarea":Ah(e,r),o=md(e,r),le("invalid",e);break;default:o=r}gd(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Nb(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lb(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xa(e,l):typeof l=="number"&&Xa(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Za.hasOwnProperty(a)?l!=null&&a==="onScroll"&&le("scroll",e):l!=null&&rp(e,a,l,i))}switch(n){case"input":Ki(e),Fh(e,r,!1);break;case"textarea":Ki(e),Eh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?bo(e,!!r.multiple,a,!1):r.defaultValue!=null&&bo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)u2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=kr(li.current),kr(cn.current),rs(t)){if(r=t.stateNode,n=t.memoizedProps,r[nn]=t,(a=r.nodeValue!==n)&&(e=gt,e!==null))switch(e.tag){case 3:ns(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=t,t.stateNode=r}return We(t),null;case 13:if(ce(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Tv(),Eo(),t.flags|=98560,a=!1;else if(a=rs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[nn]=t}else Eo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),a=!1}else Nt!==null&&(Xd(Nt),Nt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?qe===0&&(qe=3):Np())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return qo(),$d(e,t),e===null&&oi(t.stateNode.containerInfo),We(t),null;case 10:return Sp(t.type._context),We(t),null;case 17:return it(t.type)&&al(),We(t),null;case 19:if(ce(ge),a=t.memoizedState,a===null)return We(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)aa(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=fl(e),i!==null){for(t.flags|=128,aa(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ce()>Ro&&(t.flags|=128,r=!0,aa(a,!1),t.lanes=4194304)}else{if(!r)if(e=fl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),aa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!me)return We(t),null}else 2*Ce()-a.renderingStartTime>Ro&&n!==1073741824&&(t.flags|=128,r=!0,aa(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ce(),t.sibling=null,n=ge.current,se(ge,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return jp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ft&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function BP(e,t){switch(bp(t),t.tag){case 1:return it(t.type)&&al(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qo(),ce(at),ce(Ge),Fp(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Tp(t),null;case 13:if(ce(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(ge),null;case 4:return qo(),null;case 10:return Sp(t.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var is=!1,Ue=!1,DP=typeof WeakSet=="function"?WeakSet:Set,z=null;function io(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Wd(e,t,n){try{n()}catch(r){ve(e,t,r)}}var bg=!1;function OP(e,t){if(Fd=tl,e=pv(),gp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||o!==0&&d.nodeType!==3||(s=i+o),d!==a||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=i),f===a&&++c===r&&(l=i),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ad={focusedElem:e,selectionRange:n},tl=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,C=b.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Lt(t.type,v),C);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){ve(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return b=bg,bg=!1,b}function Ia(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Wd(t,n,a)}o=o.next}while(o!==r)}}function iu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function c2(e){var t=e.alternate;t!==null&&(e.alternate=null,c2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nn],delete t[ii],delete t[qd],delete t[kP],delete t[_P])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function d2(e){return e.tag===5||e.tag===3||e.tag===4}function vg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ud(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(Ud(e,t,n),e=e.sibling;e!==null;)Ud(e,t,n),e=e.sibling}function Gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gd(e,t,n),e=e.sibling;e!==null;)Gd(e,t,n),e=e.sibling}var Ne=null,jt=!1;function Mn(e,t,n){for(n=n.child;n!==null;)f2(e,t,n),n=n.sibling}function f2(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:Ue||io(n,t);case 6:var r=Ne,o=jt;Ne=null,Mn(e,t,n),Ne=r,jt=o,Ne!==null&&(jt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(jt?(e=Ne,n=n.stateNode,e.nodeType===8?gc(e.parentNode,n):e.nodeType===1&&gc(e,n),ti(e)):gc(Ne,n.stateNode));break;case 4:r=Ne,o=jt,Ne=n.stateNode.containerInfo,jt=!0,Mn(e,t,n),Ne=r,jt=o;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Wd(n,t,i),o=o.next}while(o!==r)}Mn(e,t,n);break;case 1:if(!Ue&&(io(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ve(n,t,s)}Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Mn(e,t,n),Ue=r):Mn(e,t,n);break;default:Mn(e,t,n)}}function wg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new DP),t.forEach(function(r){var o=XP.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,jt=!1;break e;case 3:Ne=s.stateNode.containerInfo,jt=!0;break e;case 4:Ne=s.stateNode.containerInfo,jt=!0;break e}s=s.return}if(Ne===null)throw Error(P(160));f2(a,i,o),Ne=null,jt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ve(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)p2(t,e),t=t.sibling}function p2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),Yt(e),r&4){try{Ia(3,e,e.return),iu(3,e)}catch(v){ve(e,e.return,v)}try{Ia(5,e,e.return)}catch(v){ve(e,e.return,v)}}break;case 1:Vt(t,e),Yt(e),r&512&&n!==null&&io(n,n.return);break;case 5:if(Vt(t,e),Yt(e),r&512&&n!==null&&io(n,n.return),e.flags&32){var o=e.stateNode;try{Xa(o,"")}catch(v){ve(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&zb(o,a),yd(s,i);var u=yd(s,a);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?Nb(o,d):c==="dangerouslySetInnerHTML"?Lb(o,d):c==="children"?Xa(o,d):rp(o,c,d,u)}switch(s){case"input":fd(o,a);break;case"textarea":Mb(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?bo(o,!!a.multiple,p,!1):f!==!!a.multiple&&(a.defaultValue!=null?bo(o,!!a.multiple,a.defaultValue,!0):bo(o,!!a.multiple,a.multiple?[]:"",!1))}o[ii]=a}catch(v){ve(e,e.return,v)}}break;case 6:if(Vt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){ve(e,e.return,v)}}break;case 3:if(Vt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(v){ve(e,e.return,v)}break;case 4:Vt(t,e),Yt(e);break;case 13:Vt(t,e),Yt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Vp=Ce())),r&4&&wg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,Vt(t,e),Ue=u):Vt(t,e),Yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(f=z,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ia(4,f,f.return);break;case 1:io(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){ve(r,n,v)}}break;case 5:io(f,f.return);break;case 22:if(f.memoizedState!==null){Sg(d);continue}}p!==null?(p.return=f,z=p):Sg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=jb("display",i))}catch(v){ve(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ve(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vt(t,e),Yt(e),r&4&&wg(e);break;case 21:break;default:Vt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(d2(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xa(o,""),r.flags&=-33);var a=vg(e);Gd(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=vg(e);Ud(e,s,i);break;default:throw Error(P(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $P(e,t,n){z=e,m2(e)}function m2(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||is;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Ue;s=is;var u=Ue;if(is=i,(Ue=l)&&!u)for(z=o;z!==null;)i=z,l=i.child,i.tag===22&&i.memoizedState!==null?Cg(o):l!==null?(l.return=i,z=l):Cg(o);for(;a!==null;)z=a,m2(a),a=a.sibling;z=o,is=s,Ue=u}xg(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,z=a):xg(e)}}function xg(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ue||iu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&og(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}og(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ti(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ue||t.flags&512&&Hd(t)}catch(f){ve(t,t.return,f)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Sg(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Cg(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{iu(4,t)}catch(l){ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ve(t,o,l)}}var a=t.return;try{Hd(t)}catch(l){ve(t,a,l)}break;case 5:var i=t.return;try{Hd(t)}catch(l){ve(t,i,l)}}}catch(l){ve(t,t.return,l)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var WP=Math.ceil,hl=qn.ReactCurrentDispatcher,zp=qn.ReactCurrentOwner,Et=qn.ReactCurrentBatchConfig,Y=0,Me=null,Ae=null,De=0,ft=0,so=ir(0),qe=0,fi=null,zr=0,su=0,Mp=0,Ra=null,nt=null,Vp=0,Ro=1/0,bn=null,gl=!1,Kd=null,Qn=null,ss=!1,Un=null,yl=0,za=0,Yd=null,Fs=-1,As=0;function Qe(){return(Y&6)!==0?Ce():Fs!==-1?Fs:Fs=Ce()}function Jn(e){return(e.mode&1)===0?1:(Y&2)!==0&&De!==0?De&-De:FP.transition!==null?(As===0&&(As=Xb()),As):(e=ne,e!==0||(e=window.event,e=e===void 0?16:ov(e.type)),e)}function $t(e,t,n,r){if(50<za)throw za=0,Yd=null,Error(P(185));vi(e,n,r),((Y&2)===0||e!==Me)&&(e===Me&&((Y&2)===0&&(su|=n),qe===4&&$n(e,De)),st(e,r),n===1&&Y===0&&(t.mode&1)===0&&(Ro=Ce()+500,ru&&sr()))}function st(e,t){var n=e.callbackNode;FE(e,t);var r=el(e,e===Me?De:0);if(r===0)n!==null&&Ih(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ih(n),t===1)e.tag===0?TP(kg.bind(null,e)):Cv(kg.bind(null,e)),SP(function(){(Y&6)===0&&sr()}),n=null;else{switch(Qb(r)){case 1:n=lp;break;case 4:n=Yb;break;case 16:n=Js;break;case 536870912:n=Zb;break;default:n=Js}n=S2(n,h2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function h2(e,t){if(Fs=-1,As=0,(Y&6)!==0)throw Error(P(327));var n=e.callbackNode;if(Co()&&e.callbackNode!==n)return null;var r=el(e,e===Me?De:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=bl(e,r);else{t=r;var o=Y;Y|=2;var a=y2();(Me!==e||De!==t)&&(bn=null,Ro=Ce()+500,Ar(e,t));do try{GP();break}catch(s){g2(e,s)}while(1);xp(),hl.current=a,Y=o,Ae!==null?t=0:(Me=null,De=0,t=qe)}if(t!==0){if(t===2&&(o=Sd(e),o!==0&&(r=o,t=Zd(e,o))),t===1)throw n=fi,Ar(e,0),$n(e,r),st(e,Ce()),n;if(t===6)$n(e,r);else{if(o=e.current.alternate,(r&30)===0&&!HP(o)&&(t=bl(e,r),t===2&&(a=Sd(e),a!==0&&(r=a,t=Zd(e,a))),t===1))throw n=fi,Ar(e,0),$n(e,r),st(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:gr(e,nt,bn);break;case 3:if($n(e,r),(r&130023424)===r&&(t=Vp+500-Ce(),10<t)){if(el(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pd(gr.bind(null,e,nt,bn),t);break}gr(e,nt,bn);break;case 4:if($n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ot(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WP(r/1960))-r,10<r){e.timeoutHandle=Pd(gr.bind(null,e,nt,bn),r);break}gr(e,nt,bn);break;case 5:gr(e,nt,bn);break;default:throw Error(P(329))}}}return st(e,Ce()),e.callbackNode===n?h2.bind(null,e):null}function Zd(e,t){var n=Ra;return e.current.memoizedState.isDehydrated&&(Ar(e,t).flags|=256),e=bl(e,t),e!==2&&(t=nt,nt=n,t!==null&&Xd(t)),e}function Xd(e){nt===null?nt=e:nt.push.apply(nt,e)}function HP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Wt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t){for(t&=~Mp,t&=~su,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function kg(e){if((Y&6)!==0)throw Error(P(327));Co();var t=el(e,0);if((t&1)===0)return st(e,Ce()),null;var n=bl(e,t);if(e.tag!==0&&n===2){var r=Sd(e);r!==0&&(t=r,n=Zd(e,r))}if(n===1)throw n=fi,Ar(e,0),$n(e,t),st(e,Ce()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gr(e,nt,bn),st(e,Ce()),null}function Lp(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Ro=Ce()+500,ru&&sr())}}function Mr(e){Un!==null&&Un.tag===0&&(Y&6)===0&&Co();var t=Y;Y|=1;var n=Et.transition,r=ne;try{if(Et.transition=null,ne=1,e)return e()}finally{ne=r,Et.transition=n,Y=t,(Y&6)===0&&sr()}}function jp(){ft=so.current,ce(so)}function Ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xP(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:qo(),ce(at),ce(Ge),Fp();break;case 5:Tp(r);break;case 4:qo();break;case 13:ce(ge);break;case 19:ce(ge);break;case 10:Sp(r.type._context);break;case 22:case 23:jp()}n=n.return}if(Me=e,Ae=e=er(e.current,null),De=ft=t,qe=0,fi=null,Mp=su=zr=0,nt=Ra=null,Cr!==null){for(t=0;t<Cr.length;t++)if(n=Cr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}Cr=null}return e}function g2(e,t){do{var n=Ae;try{if(xp(),ks.current=ml,pl){for(var r=ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}pl=!1}if(Rr=0,ze=Pe=ye=null,qa=!1,ui=0,zp.current=null,n===null||n.return===null){qe=1,fi=t,Ae=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=De,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=dg(i);if(p!==null){p.flags&=-257,fg(p,i,s,a,t),p.mode&1&&cg(a,u,t),t=p,l=u;var b=t.updateQueue;if(b===null){var v=new Set;v.add(l),t.updateQueue=v}else b.add(l);break e}else{if((t&1)===0){cg(a,u,t),Np();break e}l=Error(P(426))}}else if(me&&s.mode&1){var C=dg(i);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),fg(C,i,s,a,t),vp(Io(l,s));break e}}a=l=Io(l,s),qe!==4&&(qe=2),Ra===null?Ra=[a]:Ra.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Jv(a,l,t);rg(a,g);break e;case 1:s=l;var m=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qn===null||!Qn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=e2(a,s,t);rg(a,S);break e}}a=a.return}while(a!==null)}v2(n)}catch(F){t=F,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function y2(){var e=hl.current;return hl.current=ml,e===null?ml:e}function Np(){(qe===0||qe===3||qe===2)&&(qe=4),Me===null||(zr&268435455)===0&&(su&268435455)===0||$n(Me,De)}function bl(e,t){var n=Y;Y|=2;var r=y2();(Me!==e||De!==t)&&(bn=null,Ar(e,t));do try{UP();break}catch(o){g2(e,o)}while(1);if(xp(),Y=n,hl.current=r,Ae!==null)throw Error(P(261));return Me=null,De=0,qe}function UP(){for(;Ae!==null;)b2(Ae)}function GP(){for(;Ae!==null&&!bE();)b2(Ae)}function b2(e){var t=x2(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?v2(e):Ae=t,zp.current=null}function v2(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=NP(n,t,ft),n!==null){Ae=n;return}}else{if(n=BP(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);qe===0&&(qe=5)}function gr(e,t,n){var r=ne,o=Et.transition;try{Et.transition=null,ne=1,KP(e,t,n,r)}finally{Et.transition=o,ne=r}return null}function KP(e,t,n,r){do Co();while(Un!==null);if((Y&6)!==0)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(AE(e,a),e===Me&&(Ae=Me=null,De=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ss||(ss=!0,S2(Js,function(){return Co(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Et.transition,Et.transition=null;var i=ne;ne=1;var s=Y;Y|=4,zp.current=null,OP(e,n),p2(n,e),mP(Ad),tl=!!Fd,Ad=Fd=null,e.current=n,$P(n),vE(),Y=s,ne=i,Et.transition=a}else e.current=n;if(ss&&(ss=!1,Un=e,yl=o),a=e.pendingLanes,a===0&&(Qn=null),SE(n.stateNode),st(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(gl)throw gl=!1,e=Kd,Kd=null,e;return(yl&1)!==0&&e.tag!==0&&Co(),a=e.pendingLanes,(a&1)!==0?e===Yd?za++:(za=0,Yd=e):za=0,sr(),null}function Co(){if(Un!==null){var e=Qb(yl),t=Et.transition,n=ne;try{if(Et.transition=null,ne=16>e?16:e,Un===null)var r=!1;else{if(e=Un,Un=null,yl=0,(Y&6)!==0)throw Error(P(331));var o=Y;for(Y|=4,z=e.current;z!==null;){var a=z,i=a.child;if((z.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Ia(8,c,a)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var f=c.sibling,p=c.return;if(c2(c),c===u){z=null;break}if(f!==null){f.return=p,z=f;break}z=p}}}var b=a.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}z=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,z=i;else e:for(;z!==null;){if(a=z,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Ia(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,z=g;break e}z=a.return}}var m=e.current;for(z=m;z!==null;){i=z;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,z=h;else e:for(i=m;z!==null;){if(s=z,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:iu(9,s)}}catch(F){ve(s,s.return,F)}if(s===i){z=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,z=S;break e}z=s.return}}if(Y=o,sr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Ql,e)}catch{}r=!0}return r}finally{ne=n,Et.transition=t}}return!1}function _g(e,t,n){t=Io(n,t),t=Jv(e,t,1),e=Xn(e,t,1),t=Qe(),e!==null&&(vi(e,1,t),st(e,t))}function ve(e,t,n){if(e.tag===3)_g(e,e,n);else for(;t!==null;){if(t.tag===3){_g(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=Io(n,e),e=e2(t,e,1),t=Xn(t,e,1),e=Qe(),t!==null&&(vi(t,1,e),st(t,e));break}}t=t.return}}function YP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(De&n)===n&&(qe===4||qe===3&&(De&130023424)===De&&500>Ce()-Vp?Ar(e,0):Mp|=n),st(e,t)}function w2(e,t){t===0&&((e.mode&1)===0?t=1:(t=Xi,Xi<<=1,(Xi&130023424)===0&&(Xi=4194304)));var n=Qe();e=En(e,t),e!==null&&(vi(e,t,n),st(e,n))}function ZP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),w2(e,n)}function XP(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),w2(e,n)}var x2;x2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,jP(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,me&&(t.flags&1048576)!==0&&kv(t,ll,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ts(e,t),e=t.pendingProps;var o=Ao(t,Ge.current);So(t,n),o=Ep(null,t,r,e,o,n);var a=Pp();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(a=!0,il(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,kp(t),o.updater=ou,t.stateNode=o,o._reactInternals=t,Ld(t,r,e,n),t=Bd(null,t,r,!0,a,n)):(t.tag=0,me&&a&&yp(t),Ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ts(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=JP(r),e=Lt(r,e),o){case 0:t=Nd(null,t,r,e,n);break e;case 1:t=hg(null,t,r,e,n);break e;case 11:t=pg(null,t,r,e,n);break e;case 14:t=mg(null,t,r,Lt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Nd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),hg(e,t,r,o,n);case 3:e:{if(o2(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Av(e,t),dl(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Io(Error(P(423)),t),t=gg(e,t,r,n,o);break e}else if(r!==o){o=Io(Error(P(424)),t),t=gg(e,t,r,n,o);break e}else for(pt=Zn(t.stateNode.containerInfo.firstChild),gt=t,me=!0,Nt=null,n=Iv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),r===o){t=Pn(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Rv(t),e===null&&zd(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Ed(r,o)?i=null:a!==null&&Ed(r,a)&&(t.flags|=32),r2(e,t),Ye(e,t,i,n),t.child;case 6:return e===null&&zd(t),null;case 13:return a2(e,t,n);case 4:return _p(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Po(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),pg(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,se(ul,r._currentValue),r._currentValue=i,a!==null)if(Wt(a.value,i)){if(a.children===o.children&&!at.current){t=Pn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=kn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Md(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(P(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Md(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,So(t,n),o=Pt(o),r=r(o),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,o=Lt(r,t.pendingProps),o=Lt(r.type,o),mg(e,t,r,o,n);case 15:return t2(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),Ts(e,t),t.tag=1,it(r)?(e=!0,il(t)):e=!1,So(t,n),Pv(t,r,o),Ld(t,r,o,n),Bd(null,t,r,!0,e,n);case 19:return i2(e,t,n);case 22:return n2(e,t,n)}throw Error(P(156,t.tag))};function S2(e,t){return Kb(e,t)}function QP(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new QP(e,t,n,r)}function Bp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function JP(e){if(typeof e=="function")return Bp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ap)return 11;if(e===ip)return 14}return 2}function er(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Es(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Bp(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xr:return Er(n.children,o,a,t);case op:i=8,o|=8;break;case sd:return e=Ft(12,n,t,o|2),e.elementType=sd,e.lanes=a,e;case ld:return e=Ft(13,n,t,o),e.elementType=ld,e.lanes=a,e;case ud:return e=Ft(19,n,t,o),e.elementType=ud,e.lanes=a,e;case qb:return lu(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eb:i=10;break e;case Pb:i=9;break e;case ap:i=11;break e;case ip:i=14;break e;case Nn:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ft(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Er(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function lu(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=qb,e.lanes=n,e.stateNode={isHidden:!1},e}function kc(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function _c(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eq(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Dp(e,t,n,r,o,a,i,s,l){return e=new eq(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kp(a),e}function tq(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function C2(e){if(!e)return or;e=e._reactInternals;e:{if(Br(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(it(n))return Sv(e,n,t)}return t}function k2(e,t,n,r,o,a,i,s,l){return e=Dp(n,r,!0,e,o,a,i,s,l),e.context=C2(null),n=e.current,r=Qe(),o=Jn(n),a=kn(r,o),a.callback=t!=null?t:null,Xn(n,a,o),e.current.lanes=o,vi(e,o,r),st(e,r),e}function uu(e,t,n,r){var o=t.current,a=Qe(),i=Jn(o);return n=C2(n),t.context===null?t.context=n:t.pendingContext=n,t=kn(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xn(o,t,i),e!==null&&($t(e,o,i,a),Cs(e,o,i)),i}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Op(e,t){Tg(e,t),(e=e.alternate)&&Tg(e,t)}function nq(){return null}var _2=typeof reportError=="function"?reportError:function(e){console.error(e)};function $p(e){this._internalRoot=e}cu.prototype.render=$p.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));uu(e,t,null,null)};cu.prototype.unmount=$p.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mr(function(){uu(null,e,null,null)}),t[An]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var t=tv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&t!==0&&t<On[n].priority;n++);On.splice(n,0,e),n===0&&rv(e)}};function Wp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function rq(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=vl(i);a.call(u)}}var i=k2(t,r,e,0,null,!1,!1,"",Fg);return e._reactRootContainer=i,e[An]=i.current,oi(e.nodeType===8?e.parentNode:e),Mr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=vl(l);s.call(u)}}var l=Dp(e,0,!1,null,null,!1,!1,"",Fg);return e._reactRootContainer=l,e[An]=l.current,oi(e.nodeType===8?e.parentNode:e),Mr(function(){uu(t,l,n,r)}),l}function fu(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=vl(i);s.call(l)}}uu(t,i,e,o)}else i=rq(n,t,e,o,r);return vl(i)}Jb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fa(t.pendingLanes);n!==0&&(up(t,n|1),st(t,Ce()),(Y&6)===0&&(Ro=Ce()+500,sr()))}break;case 13:Mr(function(){var r=En(e,1);if(r!==null){var o=Qe();$t(r,e,1,o)}}),Op(e,1)}};cp=function(e){if(e.tag===13){var t=En(e,134217728);if(t!==null){var n=Qe();$t(t,e,134217728,n)}Op(e,134217728)}};ev=function(e){if(e.tag===13){var t=Jn(e),n=En(e,t);if(n!==null){var r=Qe();$t(n,e,t,r)}Op(e,t)}};tv=function(){return ne};nv=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};vd=function(e,t,n){switch(t){case"input":if(fd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=nu(r);if(!o)throw Error(P(90));Rb(r),fd(r,o)}}}break;case"textarea":Mb(e,n);break;case"select":t=n.value,t!=null&&bo(e,!!n.multiple,t,!1)}};Ob=Lp;$b=Mr;var oq={usingClientEntryPoint:!1,Events:[xi,to,nu,Bb,Db,Lp]},ia={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aq={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ub(e),e===null?null:e.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||nq,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{Ql=ls.inject(aq),un=ls}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oq;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(t))throw Error(P(200));return tq(e,t,null,n)};wt.createRoot=function(e,t){if(!Wp(e))throw Error(P(299));var n=!1,r="",o=_2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Dp(e,1,!1,null,null,n,!1,r,o),e[An]=t.current,oi(e.nodeType===8?e.parentNode:e),new $p(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Ub(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return Mr(e)};wt.hydrate=function(e,t,n){if(!du(t))throw Error(P(200));return fu(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!Wp(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=_2;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=k2(t,null,e,1,n!=null?n:null,o,!1,a,i),e[An]=t.current,oi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cu(t)};wt.render=function(e,t,n){if(!du(t))throw Error(P(200));return fu(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!du(e))throw Error(P(40));return e._reactRootContainer?(Mr(function(){fu(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1};wt.unstable_batchedUpdates=Lp;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!du(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return fu(e,t,n,!1,r)};wt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=wt})(Xl);var[iq,sq]=fn({strict:!1,name:"PortalManagerContext"});function T2(e){const{children:t,zIndex:n}=e;return T(iq,{value:{zIndex:n},children:t})}T2.displayName="PortalManager";var[F2,lq]=fn({strict:!1,name:"PortalContext"}),Hp="chakra-portal",uq=".chakra-portal",cq=e=>T("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),dq=e=>{const{appendToParentPortal:t,children:n}=e,[r,o]=k.exports.useState(null),a=k.exports.useRef(null),[,i]=k.exports.useState({});k.exports.useEffect(()=>i({}),[]);const s=lq(),l=sq();Va(()=>{if(!r)return;const c=r.ownerDocument,d=t&&s!=null?s:c.body;if(!d)return;a.current=c.createElement("div"),a.current.className=Hp,d.appendChild(a.current),i({});const f=a.current;return()=>{d.contains(f)&&d.removeChild(f)}},[r]);const u=l!=null&&l.zIndex?T(cq,{zIndex:l==null?void 0:l.zIndex,children:n}):n;return a.current?Xl.exports.createPortal(T(F2,{value:a.current,children:u}),a.current):T("span",{ref:c=>{c&&o(c)}})},fq=e=>{const{children:t,containerRef:n,appendToParentPortal:r}=e,o=n.current,a=o!=null?o:typeof window<"u"?document.body:void 0,i=k.exports.useMemo(()=>{const l=o==null?void 0:o.ownerDocument.createElement("div");return l&&(l.className=Hp),l},[o]),[,s]=k.exports.useState({});return Va(()=>s({}),[]),Va(()=>{if(!(!i||!a))return a.appendChild(i),()=>{a.removeChild(i)}},[i,a]),a&&i?Xl.exports.createPortal(T(F2,{value:r?i:null,children:t}),i):null};function Ci(e){const{containerRef:t,...n}=e;return t?T(fq,{containerRef:t,...n}):T(dq,{...n})}Ci.defaultProps={appendToParentPortal:!0};Ci.className=Hp;Ci.selector=uq;Ci.displayName="Portal";function pq(e,t){const n=w7(e);k.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}function mq(e,...t){return hq(e)?e(...t):e}var hq=e=>typeof e=="function",gq=(e,t)=>e.find(n=>n.id===t);function Ag(e,t){const n=A2(e,t),r=n?e[n].findIndex(o=>o.id===t):-1;return{position:n,index:r}}function A2(e,t){for(const[n,r]of Object.entries(e))if(gq(r,t))return n}function yq(e){const t=e.includes("right"),n=e.includes("left");let r="center";return t&&(r="flex-end"),n&&(r="flex-start"),{display:"flex",flexDirection:"column",alignItems:r}}function bq(e){const n=e==="top"||e==="bottom"?"0 auto":void 0,r=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,a=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:5500,pointerEvents:"none",display:"flex",flexDirection:"column",margin:n,top:r,bottom:o,right:a,left:i}}var vq={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},Ma=wq(vq);function wq(e){let t=e;const n=new Set,r=o=>{t=o(t),n.forEach(a=>a())};return{getState:()=>t,subscribe:o=>(n.add(o),()=>{r(()=>e),n.delete(o)}),removeToast:(o,a)=>{r(i=>({...i,[a]:i[a].filter(s=>s.id!=o)}))},notify:(o,a)=>{const i=xq(o,a),{position:s,id:l}=i;return r(u=>{var f,p;const d=s.includes("top")?[i,...(f=u[s])!=null?f:[]]:[...(p=u[s])!=null?p:[],i];return{...u,[s]:d}}),l},update:(o,a)=>{!o||r(i=>{const s={...i},{position:l,index:u}=Ag(s,o);return l&&u!==-1&&(s[l][u]={...s[l][u],...a,message:Cq(a)}),s})},closeAll:({positions:o}={})=>{r(a=>{const i=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:i).reduce((l,u)=>(l[u]=a[u].map(c=>({...c,requestClose:!0})),l),{...a})})},close:o=>{r(a=>{const i=A2(a,o);return i?{...a,[i]:a[i].map(s=>s.id==o?{...s,requestClose:!0}:s)}:a})},isActive:o=>Boolean(Ag(Ma.getState(),o).position)}}var Eg=0;function xq(e,t={}){var o,a;Eg+=1;const n=(o=t.id)!=null?o:Eg,r=(a=t.position)!=null?a:"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>Ma.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var Sq=e=>{const{status:t,variant:n="solid",id:r,title:o,isClosable:a,onClose:i,description:s,icon:l}=e,u=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return M.createElement(rb,{addRole:!1,status:t,variant:n,id:u==null?void 0:u.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto"},T(ab,{children:l}),M.createElement(N.div,{flex:"1",maxWidth:"100%"},o&&T(ib,{id:u==null?void 0:u.title,children:o}),s&&T(ob,{id:u==null?void 0:u.description,display:"block",children:s})),a&&T(ub,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1}))};function Cq(e={}){const{render:t,toastComponent:n=Sq}=e;return o=>typeof t=="function"?t({...o,...e}):T(n,{...o,...e})}var kq={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(r=1),{opacity:0,[n]:r*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},E2=k.exports.memo(e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=kq,toastSpacing:c="0.5rem"}=e,[d,f]=k.exports.useState(s),p=$k();wh(()=>{p||r==null||r()},[p]),wh(()=>{f(s)},[s]);const b=()=>f(null),v=()=>f(s),C=()=>{p&&o()};k.exports.useEffect(()=>{p&&a&&o()},[p,a,o]),pq(C,d);const g=k.exports.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l}),[l,c]),m=k.exports.useMemo(()=>yq(i),[i]);return M.createElement(LF.li,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:b,onHoverEnd:v,custom:{position:i},style:m},M.createElement(N.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:g},mq(n,{id:t,onClose:C})))});E2.displayName="ToastComponent";var _q=e=>{const t=k.exports.useSyncExternalStore(Ma.subscribe,Ma.getState,Ma.getState),{children:n,motionVariants:r,component:o=E2,portalProps:a}=e,s=Object.keys(t).map(l=>{const u=t[l];return T("ul",{role:"region","aria-live":"polite",id:`chakra-toast-manager-${l}`,style:bq(l),children:T(WF,{initial:!1,children:u.map(c=>T(o,{motionVariants:r,...c},c.id))})},l)});return G(Pr,{children:[n,T(Ci,{...a,children:s})]})},Tq=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetCSS:o=!0,theme:a={},environment:i,cssVarsRoot:s}=e,l=T(kb,{environment:i,children:t});return T(u7,{theme:a,cssVarsRoot:s,children:G(Hg,{colorModeManager:n,options:a.config,children:[o?T(kA,{}):T(CA,{}),T(d7,{}),r?T(T2,{zIndex:r,children:l}):l]})})},Fq=e=>function({children:n,theme:r=e,toastOptions:o,...a}){return G(Tq,{theme:r,...a,children:[n,T(_q,{...o})]})},Aq=Fq(J8),Qd={},Pg=Xl.exports;Qd.createRoot=Pg.createRoot,Qd.hydrateRoot=Pg.hydrateRoot;const Eq=JSON.parse(`{
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {},
  "hits": [
    {
      "recipe": {
        "label": "Paleo Chocolate Covered Caramels",
        "image": "https://media.wincacademy.nl/react/images/final-project/chocolate-caramel.jpeg",
        "url": "http://ourfineday.com/happy-birthday-travis-and-a-recipe-for-chocolate-covered-chocolates/",
        "yield": 12,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 cup honey",
          "1 1/2 Tbsp almond butter",
          "3 tsp butter or coconut butter for dairy free",
          "1 tsp water",
          "1/2 tsp vanilla",
          "1 cup chocolate chips",
          "1/2 tsp coconut oil"
        ],
        "ingredients": [
          {
            "text": "1/2 cup honey",
            "quantity": 0.5,
            "measure": "cup",
            "food": "honey",
            "weight": 169.5,
            "foodCategory": null,
            "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
            "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
          },
          {
            "text": "1 1/2 Tbsp almond butter",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "almond butter",
            "weight": 24,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "3 tsp butter or coconut butter for dairy free",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "coconut butter",
            "weight": 14.000000000710095,
            "foodCategory": null,
            "foodId": "food_bkx1ggcaouz8qob002t72ay33jbo",
            "image": "https://www.edamam.com/food-img/0d0/0d0a27d667f0b7930bdda17da8ea7dc7.jpg"
          },
          {
            "text": "1 tsp water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "water",
            "weight": 4.928921594,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1/2 tsp vanilla",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 cup chocolate chips",
            "quantity": 1,
            "measure": "cup",
            "food": "chocolate chips",
            "weight": 224,
            "foodCategory": "chocolate",
            "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
            "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
          },
          {
            "text": "1/2 tsp coconut oil",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "coconut oil",
            "weight": 2.25,
            "foodCategory": "Oils",
            "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
            "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
          }
        ],
        "calories": 1912.5630000050721,
        "totalWeight": 440.7789215947101,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1912.5630000050721,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.8976600004565,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 35.34678,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4121600000000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.917509999999998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.307704,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 301.1664500001775,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 290.8074500001014,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.359000000076083,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 280.61185,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 279.283,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.247360000050723,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 33.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.71615686414296,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 353.66886764782004,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 70.65128921593998,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 270.768,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.668120000018259,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.1653028921594002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 128.826,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.1915,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.010071,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.291765,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.97122,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.065946,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.812424999999999,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.01125,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 38.766272672406004,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Grilled Pork Chops with Chipotle Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg",
        "url": "https://grumpyshoneybunch.com/2009/07/grilled-pork-chops-chipotle-sauce.html",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "* 8 pork chops",
          "* 1/2 cup sugar free ketchup",
          "* 1/3 cup Seasoned Rice Vinegar, original",
          "* 1/3 cup Swerve Brown Sweetener",
          "* 1 Tablespoon ground cumin",
          "* 1 teaspoons chipotle chili powder"
        ],
        "ingredients": [
          {
            "text": "* 8 pork chops",
            "quantity": 8,
            "measure": "<unit>",
            "food": "pork chops",
            "weight": 1592,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "* 1/2 cup sugar free ketchup",
            "quantity": 0.5,
            "measure": "cup",
            "food": "ketchup",
            "weight": 120,
            "foodCategory": "condiments and sauces",
            "foodId": "food_au7jthtab0n3era9uue8pauakroe",
            "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
          },
          {
            "text": "* 1/3 cup Seasoned Rice Vinegar, original",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Seasoned Rice Vinegar",
            "weight": 79.66666666666666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bhk02bwbp4x7kkbeajj2pbnj15cp",
            "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
          },
          {
            "text": "* 1/3 cup Swerve Brown Sweetener",
            "quantity": 0.3333333333333333,
            "measure": "<unit>",
            "food": "Sweetener",
            "weight": 0.3333333333333333,
            "foodCategory": "sugars",
            "foodId": "food_b3755atafogvz2ac74adra225skl",
            "image": "https://www.edamam.com/food-img/0e3/0e3edc39fe123b516c4c758f4f09e99f.jpg"
          },
          {
            "text": "* 1 Tablespoon ground cumin",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cumin",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "* 1 teaspoons chipotle chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          }
        ],
        "calories": 2875.644,
        "totalWeight": 1800.7,
        "totalTime": 0,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2875.644,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.59936,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 47.823934,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.46464,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 57.431257,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.406902,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 37.914233333333335,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 35.984633333333335,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.9296,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.455763333333334,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.28396666666666665,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 332.3863533333334,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1098.48,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2056.899,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 390.8266666666667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 443.5663333333334,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6015.86,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.057766666666668,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.8184,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3402.8933333333334,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 106.92099999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 5.400899999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 7.77883,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.25308,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 107.68321999999998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.368478,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 8.4376,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 7.96,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.89198,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.7779,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1267.3743166666668,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Slow Cooker Turkey Dip Sandwiches recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/turkey-sandwich.jpeg",
        "url": "http://www.bobbiskozykitchen.com/2015/03/slow-cooker-turkey-dip-sandwiches.html",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "7 tablespoons room temperature unsalted butter, divided",
          "3 tablespoons fresh thyme leaves, chopped",
          "4 cloves garlic, minced",
          "1 lemon, zested",
          "kosher salt",
          "cracked black pepper",
          "1 large onion, chopped",
          "1/2 cup chicken stock",
          "3 tablespoons Worcestershire sauce",
          "1 (4-pound) bone-in turkey breast",
          "4 demi French baguettes, sliced in half",
          "12 slices Swiss Cheese"
        ],
        "ingredients": [
          {
            "text": "7 tablespoons room temperature unsalted butter, divided",
            "quantity": 7,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 99.39999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3 tablespoons fresh thyme leaves, chopped",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "fresh thyme",
            "weight": 7.19999999951308,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "4 cloves garlic, minced",
            "quantity": 4,
            "measure": "clove",
            "food": "garlic",
            "weight": 12,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lemon, zested",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 58,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "kosher salt",
            "weight": 23.087816879997078,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "cracked black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 11.543908439998539,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 large onion, chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup chicken stock",
            "quantity": 0.5,
            "measure": "cup",
            "food": "chicken stock",
            "weight": 120,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "3 tablespoons Worcestershire sauce",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Worcestershire sauce",
            "weight": 51,
            "foodCategory": "canned soup",
            "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
            "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
          },
          {
            "text": "1 (4-pound) bone-in turkey breast",
            "quantity": 4,
            "measure": "pound",
            "food": "turkey breast",
            "weight": 1814.36948,
            "foodCategory": "Poultry",
            "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
            "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
          },
          {
            "text": "4 demi French baguettes, sliced in half",
            "quantity": 4,
            "measure": "<unit>",
            "food": "baguettes",
            "weight": 1200,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
            "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
          },
          {
            "text": "12 slices Swiss Cheese",
            "quantity": 12,
            "measure": "slice",
            "food": "Swiss Cheese",
            "weight": 336,
            "foodCategory": "Cheese",
            "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
            "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
          }
        ],
        "calories": 8031.129285423905,
        "totalWeight": 3859.513388439512,
        "totalTime": 375,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "sandwiches"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8031.129285423905,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 320.02449516153575,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 149.01005856668252,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.318332,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.9322608345712,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.1734542374286,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 687.3825694472602,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 652.6279606120087,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.75460883525146,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 74.95002101401599,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 585.4535633416888,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1587.8361458,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 9117.120975567957,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3727.6667435472214,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 970.9018911116184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7255.567006164616,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 73.40638389343889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 53.81769326282717,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 6386.241884854681,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1476.3375059176406,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.98119999922044,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.893574289674964,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.318519446989704,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 145.90443453746033,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.910386927158704,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2227.9697416745803,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 859.9697416745806,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 804,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 18.2496966344,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.171,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.426336647775984,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 44.209378116277605,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2031.4894896573069,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Blueberry Basil Margarita Cocktail recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/blueberry-margarita.jpeg",
        "url": "http://drinkwire.liquor.com/post/blueberry-basil-margarita-cocktail-recipe/",
        "yield": 4,
        "dietLabels": [
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Alcohol-Cocktail"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2.0 oz. Tres Agaves Blanco Tequila",
          "1.0 oz. agave nectar",
          "12-15 blueberries",
          "1 lime squeezed",
          "A couple sprigs of basil"
        ],
        "ingredients": [
          {
            "text": "2.0 oz. Tres Agaves Blanco Tequila",
            "quantity": 2,
            "measure": "ounce",
            "food": "Tequila",
            "weight": 56.69904625,
            "foodCategory": "liquors and cocktails",
            "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
            "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
          },
          {
            "text": "1.0 oz. agave nectar",
            "quantity": 1,
            "measure": "ounce",
            "food": "agave nectar",
            "weight": 28.349523125,
            "foodCategory": "sugar syrups",
            "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
            "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
          },
          {
            "text": "12-15 blueberries",
            "quantity": 13.5,
            "measure": "<unit>",
            "food": "blueberries",
            "weight": 18.360000000000003,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 lime squeezed",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "A couple sprigs of basil",
            "quantity": 2,
            "measure": "sprig",
            "food": "basil",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          }
        ],
        "calories": 243.539632975,
        "totalWeight": 174.408569375,
        "totalTime": 15,
        "cuisineType": [
          "world"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "alcohol cocktail"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 243.539632975,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.22018800000000005,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.0215208,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.0248792,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.07921560000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.37380157500001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 27.57568541875001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7981161562500003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.101117418750007,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 20.128161418750004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7308640000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.2505904625000004,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 30.291600000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.681600000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 95.41118092500001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.6028876185,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.1581556185,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 18.771161850000006,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.450800000000001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.997920000000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.031655142775000006,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.026235561850000005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.25419567601250004,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0451241904625,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.28405199999999997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.537480000000002,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 116.03912080250001,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Potato Gratin",
        "image": "https://media.wincacademy.nl/react/images/final-project/potatoes-gratin.webp",
        "url": "http://www.cookstr.com/recipes/potato-gratin-2",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup milk",
          "1 cup heavy cream",
          "2 cups finely sliced leeks, white part only",
          "1 tablespoon roasted garlic pur\xE9e (see note)",
          "1 tablespoon chopped rosemary leaves",
          "Pinch freshly ground nutmeg",
          "Coarse salt and freshly ground white pepper to taste",
          "5 tablespoons unsalted butter, at room temperature",
          "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices"
        ],
        "ingredients": [
          {
            "text": "1 cup milk",
            "quantity": 1,
            "measure": "cup",
            "food": "milk",
            "weight": 244,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 cup heavy cream",
            "quantity": 1,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 238,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 cups finely sliced leeks, white part only",
            "quantity": 2,
            "measure": "cup",
            "food": "leeks",
            "weight": 178,
            "foodCategory": "vegetables",
            "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
            "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
          },
          {
            "text": "1 tablespoon roasted garlic pur\xE9e (see note)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "garlic",
            "weight": 8.499999999856291,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tablespoon chopped rosemary leaves",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "rosemary",
            "weight": 1.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
            "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
          },
          {
            "text": "Pinch freshly ground nutmeg",
            "quantity": 1,
            "measure": "pinch",
            "food": "ground nutmeg",
            "weight": 0.14583333352071937,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
            "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 13.304075000000262,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "white pepper",
            "weight": 0,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
            "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
          },
          {
            "text": "5 tablespoons unsalted butter, at room temperature",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices",
            "quantity": 4,
            "measure": "<unit>",
            "food": "Yukon Gold potatoes",
            "weight": 1476,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 2739.76762500077,
        "totalWeight": 2229.800431236176,
        "totalTime": 120,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2739.76762500077,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 155.63557208340066,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 96.38664016671514,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.32738,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 42.400860833339344,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.873602416666964,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 304.67288125004484,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 268.54834791667554,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.12453333336929,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 37.54896041667083,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.259086666668466,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 503.11,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5156.393388500102,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 753.6314368300897,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 435.86342097933505,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7098.92778449897,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.712683506415825,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.138100014571826,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1287.6176250001793,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1726.289291666676,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 316.5869749999608,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4738665833336944,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2360371249999487,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.685738375001428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.0317103333318585,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6471,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.9030000000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.132799999999884,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 125.16649999999754,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1690.0881846123998,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Seafood Casserole",
        "image": "https://media.wincacademy.nl/react/images/final-project/seafood-casserol.jpeg",
        "url": "http://www.bigoven.com/recipe/Seafood-Casserole/296427",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "6 oz pasta or noodles",
          "1/2 cup mayonnaise or salad dressing",
          "1/2 cup white wine",
          "1 can condensed cream of mushroom soup",
          "1 cup cheddar cheese",
          "1/2 tsp dry mustard",
          "8 oz, can tuna, shrimp or crab",
          "1 cup breadcrumbs"
        ],
        "ingredients": [
          {
            "text": "6 oz pasta or noodles",
            "quantity": 6,
            "measure": "ounce",
            "food": "pasta",
            "weight": 170.09713875,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup mayonnaise or salad dressing",
            "quantity": 0.5,
            "measure": "cup",
            "food": "salad dressing",
            "weight": 125,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a67f1v3boelh4wasob4qib34t5bv",
            "image": "https://www.edamam.com/food-img/241/24178db68d42001caf980f8f209534cb.jpg"
          },
          {
            "text": "1/2 cup white wine",
            "quantity": 0.5,
            "measure": "cup",
            "food": "white wine",
            "weight": 117.6,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "1 can condensed cream of mushroom soup",
            "quantity": 1,
            "measure": "can",
            "food": "condensed cream of mushroom soup",
            "weight": 303,
            "foodCategory": "canned soup",
            "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
            "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
          },
          {
            "text": "1 cup cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/2 tsp dry mustard",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dry mustard",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
            "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
          },
          {
            "text": "8 oz, can tuna, shrimp or crab",
            "quantity": 8,
            "measure": "ounce",
            "food": "can tuna",
            "weight": 226.796185,
            "foodCategory": "canned seafood",
            "foodId": "food_a0jj77zb6yprvtasct45abh6qkxp",
            "image": "https://www.edamam.com/food-img/b53/b53adeb03d265a094fb598dd89f33450.jpg"
          },
          {
            "text": "1 cup breadcrumbs",
            "quantity": 1,
            "measure": "cup",
            "food": "breadcrumbs",
            "weight": 108,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          }
        ],
        "calories": 2690.7571038625,
        "totalWeight": 1183.49332375,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2690.7571038625,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 134.158510171125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 42.130519024687494,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6305059237000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.1820880252125,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.719843295,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 233.57303350462502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.026925064625,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.546108440000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.141053604625,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.85426525700001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 216.28662660000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4312.022405275,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1212.5197505875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 248.9446060875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1392.0777905625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.290660619250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.592083332875001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1541.4582893875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.79535145,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.071,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.351416280375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3694170786500002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 34.31560067035,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2685977671750002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 259.985332375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 109.86533237500001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 88.56,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.322902717500002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.11955422,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.379734263125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 194.99208950874998,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 668.15201569525,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Green coconut curry with salmon",
        "image": "https://media.wincacademy.nl/react/images/final-project/coconut-curry-salmon.jpeg",
        "url": "http://www.aliceincookingland.com/recipe/green-coconut-curry-salmon/",
        "yield": 18,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 1/2 lb salmon",
          "1 zuchinni finely chopped",
          "2 green peppers",
          "2 cloves garlic diced",
          "1 lb mushrooms sliced",
          "2 heads baby bok choy cut into fourths",
          "3 tsp ginger finely grated",
          "4 tbsp grapeseed oil",
          "2 14-oz cans coconut milk",
          "4 tbsp green curry paste",
          "2 tbsp fish sauce",
          "1 lime juiced",
          "1/2 cup fresh basil chopped",
          "2 green onions sliced",
          "1 tsp salt",
          "1 tsp pepper",
          "1 package Aisian noodles we used Soba"
        ],
        "ingredients": [
          {
            "text": "1 1/2 lb salmon",
            "quantity": 1.5,
            "measure": "pound",
            "food": "salmon",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bhncugnadgibupafbeeapbislbom",
            "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
          },
          {
            "text": "1 zuchinni finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "zuchinni",
            "weight": 196,
            "foodCategory": "vegetables",
            "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
            "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
          },
          {
            "text": "2 green peppers",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green peppers",
            "weight": 232.57777777777778,
            "foodCategory": "vegetables",
            "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
            "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
          },
          {
            "text": "2 cloves garlic diced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lb mushrooms sliced",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 heads baby bok choy cut into fourths",
            "quantity": 2,
            "measure": "head",
            "food": "bok choy",
            "weight": 151.99999999999983,
            "foodCategory": "vegetables",
            "foodId": "food_bq7w3usaxapk30b8utp6lasy79lv",
            "image": "https://www.edamam.com/food-img/c76/c7698a4dc6baecd186476820b6b91cdc.jpg"
          },
          {
            "text": "3 tsp ginger finely grated",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "ginger",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "4 tbsp grapeseed oil",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "grapeseed oil",
            "weight": 54.4,
            "foodCategory": "Oils",
            "foodId": "food_br8vwihb5tm7wybd4ppzjaox5089",
            "image": "https://www.edamam.com/food-img/88b/88bb3399c7bf214d2bce6bd86780eaf2.jpg"
          },
          {
            "text": "2 14-oz cans coconut milk",
            "quantity": 28,
            "measure": "ounce",
            "food": "coconut milk",
            "weight": 793.7866475000001,
            "foodCategory": "non-dairy beverages",
            "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
            "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
          },
          {
            "text": "4 tbsp green curry paste",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "curry paste",
            "weight": 64,
            "foodCategory": "condiments and sauces",
            "foodId": "food_aojdol2are6zg7af2nincbe87jot",
            "image": "https://www.edamam.com/food-img/b6a/b6a9ebae5850f42eca0253827603ef9c.jpg"
          },
          {
            "text": "2 tbsp fish sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "fish sauce",
            "weight": 36,
            "foodCategory": "canned soup",
            "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
            "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
          },
          {
            "text": "1 lime juiced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "1/2 cup fresh basil chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "fresh basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "2 green onions sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green onions",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tsp pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 2.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package Aisian noodles we used Soba",
            "quantity": 1,
            "measure": "package",
            "food": "noodles",
            "weight": 340,
            "foodCategory": "grains",
            "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
            "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
          }
        ],
        "calories": 5112.068417170556,
        "totalWeight": 3132.645350277778,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5112.068417170556,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 336.96978048289225,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 181.28297571055614,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2074,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.68709068526722,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.26260006699724,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 328.1063749712389,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 297.98885939653667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.11751557470222,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.25989848546667,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 230.65632545302884,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 665.70150452552,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6120.048996514333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 673.4619165553777,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 988.5084524161775,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8413.89930292511,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 51.18356467470444,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.335398636711112,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3885.2424455315554,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 246.90042395519998,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 345.5847355913334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.220408624813333,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.799611279027777,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 114.07125079756834,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.403383890282219,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1891.6150528181777,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 732.2150528181777,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 683.4000000000001,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 23.33407684378,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.9271847400000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 44.03291935599778,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 218.48374043807544,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2193.2876144164557,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Vegan Herb Crackers recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/herb-crackers.jpeg",        
        "url": "https://elanaspantry.com/herb-crackers/",
        "yield": 15,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "2 cups blanched almond flour (not almond meal)",
          "\xBE teaspoon celtic sea salt",
          "2 tablespoons herbes de provence",
          "1 tablespoon olive oil",
          "2 tablespoons water"
        ],
        "ingredients": [
          {
            "text": "2 cups blanched almond flour (not almond meal)",
            "quantity": 2,
            "measure": "cup",
            "food": "blanched almond flour",
            "weight": 224,
            "foodCategory": "grains",
            "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
            "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
          },
          {
            "text": "\xBE teaspoon celtic sea salt",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "sea salt",
            "weight": 3.6406250001846567,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons herbes de provence",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "herbes de provence",
            "weight": 5.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons water",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "water",
            "weight": 29.573529562,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1445.316,
        "totalWeight": 274.08661383452016,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1445.316,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.81162,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.739500000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 9.875115000000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.484865,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.10236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 20.920359999999995,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.182000000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.8203400000000025,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 50.60074000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 633.6317435258399,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 260.2693461122648,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 12.191866138345203,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1675.5672467418017,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.174523178099317,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.33829043722872015,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1074.4284000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.260000000000002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.7,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.027702000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.021546000000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.26676000000000005,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.029700000000000008,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.34117,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.71000000000001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 29.967842200983043,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Baked Chicken Parm",
        "image": "https://media.wincacademy.nl/react/images/final-project/baked-chicken-parm.jpeg",
        "url": "https://food52.com/recipes/17016-baked-chicken-parm",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon oil",
          "1 1/2 cup panko",
          "1/2 cup grated parmesan cheese",
          "1/4 teaspoon salt",
          "1/4 teaspoon ground black pepper",
          "1/8 teaspoon garlic powder",
          "1 teaspoon dried italian seasoning",
          "2 large eggs",
          "2 large boneless, skinless chicken breast halves",
          "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
          "2 cups purchased marinara sauce",
          "4 servings angel hair pasta, prepared according to package instructions"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 1/2 cup panko",
            "quantity": 1.5,
            "measure": "cup",
            "food": "panko",
            "weight": 90,
            "foodCategory": "grains",
            "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
            "image": null
          },
          {
            "text": "1/2 cup grated parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon ground black pepper",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 0.575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1/8 teaspoon garlic powder",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "garlic powder",
            "weight": 0.3875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1 teaspoon dried italian seasoning",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "italian seasoning",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "2 large eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 100,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 large boneless, skinless chicken breast halves",
            "quantity": 2,
            "measure": "half",
            "food": "boneless, skinless chicken breast",
            "weight": 217.5,
            "foodCategory": "Poultry",
            "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
            "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
          },
          {
            "text": "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 66,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 cups purchased marinara sauce",
            "quantity": 2,
            "measure": "cup",
            "food": "marinara sauce",
            "weight": 528,
            "foodCategory": "canned soup",
            "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
            "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
          },
          {
            "text": "4 servings angel hair pasta, prepared according to package instructions",
            "quantity": 4,
            "measure": "serving",
            "food": "angel hair pasta",
            "weight": 1200,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 6118.390125,
        "totalWeight": 2293.315625,
        "totalTime": 116,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6118.390125,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.64538593750002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.6237216875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.913065,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.21728721875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 17.610497531249997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1004.0793118749999,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 952.744961875,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 51.33435000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 65.13982125000001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 276.6349159375,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 659.2151250000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4683.3015000000005,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1981.3793750000002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 857.972,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5363.8595000000005,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.297121875000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 25.1352396875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3941.5084375,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.0112187500001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.06465,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5054243437500001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.42291875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 62.323053718749996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.66494884375,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.8197875000000003,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.767765625,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.466153125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 106.57482812500001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 863.4466100000002,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Parmesan grissini",
        "image": "https://media.wincacademy.nl/react/images/final-project/parmesan-grissini.jpeg",
        "url": "https://www.goodfood.com.au/recipes/parmesan-grissini-20121001-33zi8",
        "yield": 6,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon (3 g) instant dried yeast",
          "a pinch of caster (superfine) sugar",
          "1 tablespoon extra virgin olive oil",
          "250 g (9 oz/2 cups) white strong flour",
          "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon (3 g) instant dried yeast",
            "quantity": 3,
            "measure": "gram",
            "food": "yeast",
            "weight": 3,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "a pinch of caster (superfine) sugar",
            "quantity": 1,
            "measure": "pinch",
            "food": "sugar",
            "weight": 0.2604166669968817,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 tablespoon extra virgin olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "extra virgin olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "250 g (9 oz/2 cups) white strong flour",
            "quantity": 250,
            "measure": "gram",
            "food": "flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese",
            "quantity": 60,
            "measure": "gram",
            "food": "parmesan cheese",
            "weight": 60,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 1275.297812501278,
        "totalWeight": 326.7604166669969,
        "totalTime": 90,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "biscuits and cookies"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1275.297812501278,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 31.676299999999998,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.12761,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.705504999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.7950150000000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.2039645836635,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 186.64696458366348,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.557,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.414895833662888,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.25989583366288793,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 48.48819999999999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.8,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 832.40260416667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 748.93760416667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.02,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 351.4902083333399,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.557830208333498,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6382260416667,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 705.51,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 124.19999999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.009,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6530999999999999,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4192494791667294,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.4936,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.20959999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.7221,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.3,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.21925,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.909,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 47.4484520833334,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Easy Chili Almonds recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/easy-chili-almonds.jpeg",
        "url": "http://www.pumpkinnspice.com/2017/02/05/easy-chili-almonds/",
        "yield": 2,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups California Almonds",
          "1 tablespoon olive oil",
          "1 1/2 teaspoons chili powder",
          "1 tablespoon kosher salt",
          "2 tablespoons fresh cilantro, chopped"
        ],
        "ingredients": [
          {
            "text": "2 cups California Almonds",
            "quantity": 2,
            "measure": "cup",
            "food": "Almonds",
            "weight": 286,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons chili powder",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 4.050000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "1 tablespoon kosher salt",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons fresh cilantro, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "cilantro",
            "weight": 1.999999999966186,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1787.160999999992,
        "totalWeight": 307.0732646524249,
        "totalTime": 10,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1787.160999999992,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 156.88853999999984,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.837790999999994,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.042899999999999994,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.22114049999989,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 37.00658799999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 63.71924999999876,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 26.50384999999971,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 37.21539999999905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.749594999999704,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.07672999999927,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 710.5504139999216,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 784.5455835165673,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 778.7697326465158,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2186.0318611720204,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.427276773352515,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.108873264652289,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1388.7699999999836,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.80149999988606,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.5683499999908702,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5977649999999773,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.2959899999999447,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.839559999999622,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.47960699999994966,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 76.83371999999916,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.60784999989518,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 14.895221529273739,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Korean Seasoned Potatoes (\uAC10\uC790 \uC870&",
        "image": "https://media.wincacademy.nl/react/images/final-project/korean-potatoes.webp",
        "url": "http://www.food.com/recipe/korean-seasoned-potatoes-44048-51088-51312-390718",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium potatoes",
          "2 tablespoons soy sauce",
          "2 teaspoons sugar (or sweetener of your choice)",
          "1 teaspoon garlic, minced",
          "2 teaspoons sesame seeds",
          "1 -2 teaspoon sesame seed oil",
          "4 tablespoons scallions, minced"
        ],
        "ingredients": [
          {
            "text": "2 medium potatoes",
            "quantity": 2,
            "measure": "<unit>",
            "food": "potatoes",
            "weight": 426,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "2 tablespoons soy sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "soy sauce",
            "weight": 32,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
          },
          {
            "text": "2 teaspoons sugar (or sweetener of your choice)",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 8.4,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 teaspoon garlic, minced",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 2.8,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons sesame seeds",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sesame seeds",
            "weight": 6.000000000304327,
            "foodCategory": "plant-based protein",
            "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
            "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
          },
          {
            "text": "1 -2 teaspoon sesame seed oil",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "4 tablespoons scallions, minced",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "scallions",
            "weight": 24,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          }
        ],
        "calories": 483.3900000017438,
        "totalWeight": 505.9500000003043,
        "totalTime": 20,
        "cuisineType": [
          "south east asian",
          "korean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 483.3900000017438,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.35560000015116,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.058849500021172,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.026662500000000002,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.440138000057089,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.498037000066261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 88.49240000007136,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 77.47360000003545,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.018800000035911,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.439200000000914,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 8.3832,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.891080000053957,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1788.3800000000335,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 142.6120000029672,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 148.2200000010682,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2038.376000001424,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.06680000004428,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.105720000023585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 346.8440000019142,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 89.3076,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.41762000000240723,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.22781600000075167,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.60926000001374,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.4006800000024042,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3703900000007612,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.63435,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 384.2389200000143,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Oven Baked Mexican Rice recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/mexican-rice.webp",
        "url": "http://keciasflavorbreakthrough.com/oven-baked-mexican-rice/",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup whole grain rice",
          "2 cup chicken or vegetable broth",
          "1 cup tomato sauce",
          "6 scallions chopped, divided",
          "1 jalapeno pepper, seeds, veins removed and diced",
          "\xBD bell pepper diced",
          "1 clove garlic minced",
          "\xBD cup frozen sweet corn kernels, thawed",
          "1 tsp cilantro",
          "2 tsp cumin",
          "1 tsp chili powder",
          "2 tsp salt",
          "1/2 cup shredded cheddar or Mexican blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 cup whole grain rice",
            "quantity": 1,
            "measure": "cup",
            "food": "whole grain rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
          },
          {
            "text": "2 cup chicken or vegetable broth",
            "quantity": 2,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 454,
            "foodCategory": "Vegan products",
            "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
            "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
          },
          {
            "text": "1 cup tomato sauce",
            "quantity": 1,
            "measure": "cup",
            "food": "tomato sauce",
            "weight": 245,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 scallions chopped, divided",
            "quantity": 6,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 90,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 jalapeno pepper, seeds, veins removed and diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "jalapeno pepper",
            "weight": 14,
            "foodCategory": "vegetables",
            "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
            "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
          },
          {
            "text": "\xBD bell pepper diced",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "bell pepper",
            "weight": 59.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 clove garlic minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "\xBD cup frozen sweet corn kernels, thawed",
            "quantity": 0.5,
            "measure": "cup",
            "food": "corn kernels",
            "weight": 70.5,
            "foodCategory": "vegetables",
            "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
            "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
          },
          {
            "text": "1 tsp cilantro",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "cilantro",
            "weight": 0.33333333335024,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          },
          {
            "text": "2 tsp cumin",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1 tsp chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 cup shredded cheddar or Mexican blend cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mexican blend cheese",
            "weight": 56,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 1123.0241452052305,
        "totalWeight": 1192.4077378998313,
        "totalTime": 50,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1123.0241452052305,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 24.70364773767342,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.97607104170667,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.384159168186714,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.43750068367334,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 192.94110791691398,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.34687236822018,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.594235548693803,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.516731647060148,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 36.73504390126037,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2765.5383320000396,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 612.3098797637601,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 393.489078675556,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2051.7486483513735,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.424348741549686,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.386391343193232,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 969.6826463092882,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 365.3858809112703,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 129.28132405812454,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0456329733333447,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6373697849600275,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.972286409053524,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.7363836725666917,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 160.10624152709713,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.89624152709712,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.6890773940000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28166164000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.9083901328137545,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 211.47728196646577,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 922.7590471832152,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Swedish Pancakes",
        "image": "https://media.wincacademy.nl/react/images/final-project/swedish-pancakes.webp",
        "url": "http://scratchthiswithsandy.com/2014/01/19/swedish-pancakes/",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "* 4 egg",
          "* 2 cup milk",
          "* 3/4 cup flour",
          "* 1 tbl sugar",
          "* pinch of salt",
          "* 2 tbl melted butter"
        ],
        "ingredients": [
          {
            "text": "* 4 egg",
            "quantity": 4,
            "measure": "<unit>",
            "food": "egg",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "* 2 cup milk",
            "quantity": 2,
            "measure": "cup",
            "food": "milk",
            "weight": 488,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "* 3/4 cup flour",
            "quantity": 0.75,
            "measure": "cup",
            "food": "flour",
            "weight": 93.75,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "* 1 tbl sugar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "sugar",
            "weight": 12.4999999997887,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "* pinch of salt",
            "quantity": 1,
            "measure": "pinch",
            "food": "salt",
            "weight": 0.380208333815447,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "* 2 tbl melted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          }
        ],
        "calories": 1136.8929999991822,
        "totalWeight": 795.030208333604,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "pancake"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1136.8929999991822,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 56.171189999999996,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.211744500000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9963119999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 16.3058465,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.489919499999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 108.71756499978872,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 106.18631499978872,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.53125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 38.02556499978912,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 12.474999999789123,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.900975,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 749.6999999999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 606.5651460201889,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 668.8547500001135,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.63680208333815,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 988.9289166667011,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.266459687501484,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.707840208333794,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 858.546,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 693.9359999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.40719999999999995,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.66029099999996,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.747123,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5101819999999999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.77508,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 10.21,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.86273,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.24925,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 577.3256204166676,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Pizza with taleggio, prosciutto and pear",
        "image": "https://media.wincacademy.nl/react/images/final-project/pizza-pear.jpeg",
        "url": "https://www.goodfood.com.au/recipes/pizza-with-taleggio-prosciutto-and-pear-20111018-29wks",
        "yield": 12,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500g flour",
          "1 tbsp instant yeast",
          "1 tsp salt",
          "300ml warm water",
          "2 tbsp olive oil",
          "For the topping",
          "1-2 tbsp olive oil",
          "300g taleggio",
          "8 slices prosciutto",
          "2 pears, finely sliced",
          "handful fresh rocket"
        ],
        "ingredients": [
          {
            "text": "500g flour",
            "quantity": 500,
            "measure": "gram",
            "food": "flour",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1 tbsp instant yeast",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "yeast",
            "weight": 12,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "300ml warm water",
            "quantity": 300,
            "measure": "milliliter",
            "food": "water",
            "weight": 300,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1-2 tbsp olive oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 20.25,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "300g taleggio",
            "quantity": 300,
            "measure": "gram",
            "food": "taleggio",
            "weight": 300,
            "foodCategory": "Cheese",
            "foodId": "food_b6s9dpea421339bjgiudnaoxh7nl",
            "image": "https://www.edamam.com/food-img/419/419fc950e8f2a589a11d63efb28b8bef.jpg"
          },
          {
            "text": "8 slices prosciutto",
            "quantity": 8,
            "measure": "slice",
            "food": "prosciutto",
            "weight": 120,
            "foodCategory": "cured meats",
            "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
            "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
          },
          {
            "text": "2 pears, finely sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pears",
            "weight": 372.8888888888889,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "handful fresh rocket",
            "quantity": 1,
            "measure": "handful",
            "food": "rocket",
            "weight": 2.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
            "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
          }
        ],
        "calories": 3623.8616666666667,
        "totalWeight": 1654.638888888889,
        "totalTime": 120,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3623.8616666666667,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 136.36574444444446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 56.61658555555556,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.39480416666666,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.733648055555555,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 445.1186277777778,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 416.7910722222223,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.327555555555556,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.137916666666676,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.66970000000003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 300,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5793.4688888888895,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1301.6325,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.75722222222225,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2264.848611111111,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.404700000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.379438888888888,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2085.086666666667,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 729.7038888888889,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.445222222222224,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.729046666666667,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.533501111111111,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.229176111111112,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6949627777777776,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.9644,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2800000000000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.504591666666666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 55.11461111111112,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 897.795861111111,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Strawberry Cheesecake recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/strawberry-cheesecake.webp",
        "url": "http://allrecipes.com/recipe/222588/strawberry-cheesecake/",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/4 cups graham cracker crumbs",
          "1/4 cup white sugar",
          "2 teaspoons ground cinnamon",
          "1/3 cup butter, melted",
          "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
          "1 tablespoon cornstarch",
          "3 (8 ounce) packages cream cheese, softened",
          "1 (14 ounce) can sweetened condensed milk",
          "1/4 cup lemon juice",
          "1/2 teaspoon vanilla extract",
          "3 eggs",
          "1 tablespoon water (optional)"
        ],
        "ingredients": [
          {
            "text": "1 1/4 cups graham cracker crumbs",
            "quantity": 1.25,
            "measure": "cup",
            "food": "cracker crumbs",
            "weight": 65,
            "foodCategory": "crackers",
            "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
            "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
          },
          {
            "text": "1/4 cup white sugar",
            "quantity": 0.25,
            "measure": "cup",
            "food": "white sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 teaspoons ground cinnamon",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "1/3 cup butter, melted",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "butter",
            "weight": 75.66666666666666,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
            "quantity": 20,
            "measure": "ounce",
            "food": "strawberries",
            "weight": 566.9904625,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "1 tablespoon cornstarch",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cornstarch",
            "weight": 7.999999999864745,
            "foodCategory": null,
            "foodId": "food_bevnfkfbvjm45pbbgj9nsb3ypntm",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "3 (8 ounce) packages cream cheese, softened",
            "quantity": 24,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 680.388555,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1 (14 ounce) can sweetened condensed milk",
            "quantity": 14,
            "measure": "ounce",
            "food": "sweetened condensed milk",
            "weight": 396.89332375000004,
            "foodCategory": "Milk",
            "foodId": "food_a89byenbz1jssabxmx7i6aa77jz1",
            "image": "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg"
          },
          {
            "text": "1/4 cup lemon juice",
            "quantity": 0.25,
            "measure": "cup",
            "food": "lemon juice",
            "weight": 61,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1/2 teaspoon vanilla extract",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla extract",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "3 eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 tablespoon water (optional)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "water",
            "weight": 14.786764781,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 5097.185375336985,
        "totalWeight": 2055.0257726975315,
        "totalTime": 645,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5097.185375336985,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 360.2325051190833,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 199.67873967423336,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.2287733333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.42800230728746,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 25.31875591992914,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 393.92277982837663,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.0717705783778,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.851009249998782,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 323.13166435175,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 97.1447459855413,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1525.9344739083335,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3659.6764554620613,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2110.1749002934275,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 274.24919523113937,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3641.375844637496,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.102928053707698,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.184514197728019,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2305.5836883874827,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3514.3330755000006,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 367.5142183675,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9711577467083332,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5607334889666666,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.099651569875,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0063791067374999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 427.49071766249995,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 335.1907176625,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 54.599999999999994,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.724035345333334,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.5911179775,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.544035135416665,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 86.93748487916668,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1181.137699732458,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Mushroom and Spinach Ravioli",
        "image": "https://media.wincacademy.nl/react/images/final-project/spinach-ravioli.jpeg",
        "url": "http://ourlifetastesgood.blogspot.com/2012/07/mushroom-and-spinach-ravioli-with-chive.html",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon olive oil",
          "1 1/2 teaspoons water (or more as needed)",
          "2 eggs",
          "2 cups all-purpose flour (or more as needed)",
          "1/4 teaspoon salt",
          "1 teaspoon olive oil",
          "1 clove garlic, minced",
          "1/2 chopped onion",
          "1 (8 ounce) package fresh mushrooms, chopped",
          "4 ounces cream cheese softened",
          "1/3 cup grated Parmesan Cheese",
          "1/2 cup Mozzarella Cheese",
          "1/2 cup frozen spinach, thawed and drained",
          "1 tablespoon chopped fresh chives",
          "1 tablespoon fresh parsley",
          "1/2 teaspoon ground cayenne pepper",
          "salt",
          "pepper",
          "1 egg white beaten",
          "3 tablespoons unsalted butter",
          "1 1/2 teaspoons chopped fresh chives"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons water (or more as needed)",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "water",
            "weight": 7.393382391,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 86,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 cups all-purpose flour (or more as needed)",
            "quantity": 2,
            "measure": "cup",
            "food": "all-purpose flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 chopped onion",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "onion",
            "weight": 62.5,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 (8 ounce) package fresh mushrooms, chopped",
            "quantity": 8,
            "measure": "ounce",
            "food": "mushrooms",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "4 ounces cream cheese softened",
            "quantity": 4,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1/3 cup grated Parmesan Cheese",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan Cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup Mozzarella Cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mozzarella Cheese",
            "weight": 129.9375,
            "foodCategory": "Cheese",
            "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
            "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
          },
          {
            "text": "1/2 cup frozen spinach, thawed and drained",
            "quantity": 0.5,
            "measure": "cup",
            "food": "spinach",
            "weight": 15,
            "foodCategory": "vegetables",
            "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
            "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
          },
          {
            "text": "1 tablespoon chopped fresh chives",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chives",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          },
          {
            "text": "1 tablespoon fresh parsley",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "parsley",
            "weight": 3.8,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1/2 teaspoon ground cayenne pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cayenne pepper",
            "weight": 0.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
            "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
          },
          {
            "text": "salt",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 6.193763459345999,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 3.0968817296729996,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 egg white beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg white",
            "weight": 26.4,
            "foodCategory": "Eggs",
            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
          },
          {
            "text": "3 tablespoons unsalted butter",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 42.599999999999994,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 1/2 teaspoons chopped fresh chives",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chives",
            "weight": 1.5,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          }
        ],
        "calories": 2523.210560191479,
        "totalWeight": 1034.356009510093,
        "totalTime": 75,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2523.210560191479,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 139.10042037038735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 76.66771694127705,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4291079999999998,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.58860721698228,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.370521302387136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 218.72712386187592,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 206.98745093426865,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.739672927607268,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.017192025319906,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 101.38330313846303,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 685.5990267500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2404.2923580980423,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1609.214281027642,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 178.172863735545,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1740.9563865685082,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.68506486148633,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.56972100746163,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1691.469395282883,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1318.3283641170117,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 22.894819885000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.306116973118047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.3985371664384116,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 23.86636554774516,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8420161031083486,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 888.1944240190444,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 233.19442401904442,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 385,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.77916245525,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.3905121750000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.1493016567386,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 167.2074463239747,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 561.1935454974051,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Cajun Pork Pinwheels",
        "image": "https://media.wincacademy.nl/react/images/final-project/cayun-pork-pinwheel.jpeg",
        "url": "https://www.bigoven.com/recipe/cajun-pork-pinwheels/158806",
        "yield": 6,
        "dietLabels": [
          "High-Protein",
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pork tenderloins ; about 1 pound each",
          "1 tablespoon Vegetable oil",
          "1 cup red bell pepper ; finely chopped",
          "1/2 cup Onion ; finely chopped",
          "1/2 cup celery ; finely chopped",
          "1 teaspoon dried thyme leaves ; crushed",
          "1/4 teaspoon Garlic salt",
          "1/2 teaspoon Ground red pepper",
          "1/2 teaspoon Paprika",
          "1 tablespoon fennel seed ; crushed",
          "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)"
        ],
        "ingredients": [
          {
            "text": "2 pork tenderloins ; about 1 pound each",
            "quantity": 2,
            "measure": "pound",
            "food": "pork tenderloins",
            "weight": 907.18474,
            "foodCategory": "meats",
            "foodId": "food_bgd2x5qbzpcbz0apfim52a8wr97x",
            "image": "https://www.edamam.com/food-img/4df/4dfc18749ffa490e3d4daf9dd2ea4d34.jpg"
          },
          {
            "text": "1 tablespoon Vegetable oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Vegetable oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 cup red bell pepper ; finely chopped",
            "quantity": 1,
            "measure": "cup",
            "food": "red bell pepper",
            "weight": 149,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 cup Onion ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup celery ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "celery",
            "weight": 50.5,
            "foodCategory": "vegetables",
            "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "1 teaspoon dried thyme leaves ; crushed",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried thyme",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1/4 teaspoon Garlic salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "Garlic salt",
            "weight": 0.775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1/2 teaspoon Ground red pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper",
            "weight": 1.5520833334120565,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 teaspoon Paprika",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Paprika",
            "weight": 1.15,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
            "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
          },
          {
            "text": "1 tablespoon fennel seed ; crushed",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "fennel seed",
            "weight": 5.8,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
            "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
          },
          {
            "text": "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "seasoning",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          }
        ],
        "calories": 1277.8849994333577,
        "totalWeight": 1212.4618233334124,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1277.8849994333577,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 46.243549005900235,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.316188002930023,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.41763718108000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.405505878150002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.625709285193389,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.89075312500475,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 15.242159375003098,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.648593750001652,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.573730000003305,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 182.1281044945008,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 560.18657695,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 505.07734489333643,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.30192601333886,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 294.8478858100095,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4104.8568726235,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.403798837433673,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 17.090634614433537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2208.340013956687,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.087270833457,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.65816041676715,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 8.631749814460042,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.1252729659434006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.261679644134105,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.2544416604502295,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.481492615600001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.585476509,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.9135315232679115,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.6461020833372,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 905.3225831408392,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Fire Roasted Tomato Soup recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/tomato-soup.jpeg",
        "url": "http://therecipecritic.com/2013/02/fire-roasted-tomato-soup/",
        "yield": 8,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Mediterranean",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 T olive oil",
          "8 oz can tomato sauce",
          "6 oz can tomato paste",
          "28 oz can whole tomatoes",
          "2 14 oz cans fire roasted diced tomatoes",
          "2 cups water",
          "2 cups chicken broth",
          "2 tsp salt",
          "1/2 tsp pepper",
          "1 1/2 cups heavy cream",
          "1/4 cup parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 cloves garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 T olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "8 oz can tomato sauce",
            "quantity": 8,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 226.796185,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 oz can tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "28 oz can whole tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "whole tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 14 oz cans fire roasted diced tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "diced tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 cups water",
            "quantity": 2,
            "measure": "cup",
            "food": "water",
            "weight": 474,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 cups chicken broth",
            "quantity": 2,
            "measure": "cup",
            "food": "chicken broth",
            "weight": 480,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 tsp pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 1.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 1/2 cups heavy cream",
            "quantity": 1.5,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 357,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 cup parmesan cheese",
            "quantity": 0.25,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 37.1765625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2098.9340903750003,
        "totalWeight": 3463.8814151342513,
        "totalTime": 55,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "soup"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2098.9340903750003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 157.603754438375,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.36432640115001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.8967418560875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.816557503037501,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.57510001012503,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 98.60943194137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.96566806875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 91.87988720825001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 57.249755738250016,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 528.7700625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 8040.563791133251,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1367.2937993322207,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 345.2976253638426,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6453.095646035741,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.285999876568027,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.353450237759252,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1129.2093990125002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2046.1006295250002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 267.21124150624996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.616240673275,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2471676422875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.833612026075002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.018696610325001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.0887187500000002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6848828125,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.64674290825,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 85.70992423,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 3072.464483754519,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Homemade Sweet Spaghetti Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/sweet-spaghetti-sauce.jpeg",
        "url": "https://www.recipezazz.com/recipe/homemade-sweet-spaghetti-sauce-4752",
        "yield": 8,
        "dietLabels": [],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon olive oil (or coconut oil)",
          "1 to 2 garlic cloves, minced",
          "1 pound ground turkey (or 1 pound lean ground beef, optional)",
          "1 can (32 ounce) tomato sauce (no-salt-added)",
          "8 ounces red wine",
          "24 ounces water (or use all water and no wine)",
          "3 cans (6 ounce) tomato paste",
          "3 to 4 tablespoons instant minced onion",
          "1/4 cup granulated sugar (more less to your taste)",
          "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
          "1 teaspoon dried basil (see note)",
          "1/2 teaspoon dried oregano",
          "1 teaspoon onion powder"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon olive oil (or coconut oil)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 to 2 garlic cloves, minced",
            "quantity": 1.5,
            "measure": "clove",
            "food": "garlic",
            "weight": 4.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 pound ground turkey (or 1 pound lean ground beef, optional)",
            "quantity": 1,
            "measure": "pound",
            "food": "ground turkey",
            "weight": 453.59237,
            "foodCategory": "Poultry",
            "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
            "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
          },
          {
            "text": "1 can (32 ounce) tomato sauce (no-salt-added)",
            "quantity": 32,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 907.18474,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "8 ounces red wine",
            "quantity": 8,
            "measure": "ounce",
            "food": "red wine",
            "weight": 226.796185,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "24 ounces water (or use all water and no wine)",
            "quantity": 24,
            "measure": "ounce",
            "food": "water",
            "weight": 680.388555,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cans (6 ounce) tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "3 to 4 tablespoons instant minced onion",
            "quantity": 3.5,
            "measure": "tablespoon",
            "food": "onion",
            "weight": 35,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/4 cup granulated sugar (more less to your taste)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "granulated sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 4.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon dried basil (see note)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried basil",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_abrithza96sev8ae5za0paqf42o0",
            "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
          },
          {
            "text": "1/2 teaspoon dried oregano",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dried oregano",
            "weight": 0.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 teaspoon onion powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "onion powder",
            "weight": 2.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
            "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
          }
        ],
        "calories": 1565.9824562250003,
        "totalWeight": 2544.6589887499995,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack",
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1565.9824562250003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.898536314125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.633647450949999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4672001411,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.346231165462502,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.825390744512502,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.58068906012502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 121.46823527137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.112453788749995,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 106.04028459075,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.69633054550003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 312.97873530000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5948.538027925,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 362.68973530000005,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 359.52818212500006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5900.798736575001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.922087522749997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.389442611625002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1372.8893675125003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 420.25694225000007,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 105.32690518625,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6680063943000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.6646896178375001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.40809048785001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.07339265715,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.535923700000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8143694800000003,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.906400355250003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 69.2513312775,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2191.2693134367505,
            "unit": "g"
          }
        }
      }
    }
  ]
}`),Pq=({image:e,label:t,dietLabels:n,cautions:r,mealType:o,dishType:a,healthLabels:i,id:s,onClick:l,recipe:u})=>G(Se,{backgroundColor:"white",flexDirection:{base:"column"},marginBottom:"20px",borderTopRadius:"10px",borderBottomRadius:"10px",maxWidth:{base:"300px"},flexBasis:"300px",grow:"1",shrink:"0",id:s,onClick:()=>l(u),children:[T(Uf,{borderTopRadius:"10px",objectFit:"cover",src:e,alt:"",width:"auto",height:"200px"}),G(tt,{display:"flex",flexDirection:"column",alignItems:"center",pt:"20px",pb:"20px",ml:"10px",mr:"10px",children:[T(tn,{color:"grey",backgroundColor:"white",children:o}),T(tt,{fontSize:"25px",fontWeight:"bold",children:t}),T(tt,{display:"flex",flexDirection:"row",columnGap:"15px",mt:"10px",mb:"10px",children:n.map(c=>T(tn,{backgroundColor:"#D6BCFA",borderBottomRadius:"3px",borderTopRadius:"3px",children:c},c))}),T(tt,{display:"flex",flexDirection:"row",columnGap:"10px",mb:"10px",children:i.map(c=>T(tn,{backgroundColor:"#C6F6D5",borderBottomRadius:"3px",borderTopRadius:"3px",children:c}))}),G(Se,{flexDir:"row",columnGap:"5px",children:[T(tt,{children:"Dish:"}),T(tt,{fontSize:"16px",fontWeight:"bold",children:a})]}),T(tt,{mt:"5px",children:"Cautions:"}),T(tt,{display:"flex",flexDirection:"row",columnGap:"10px",mb:"10px",mt:"5px",children:r.map(c=>T(tn,{backgroundColor:"#FC8181",borderBottomRadius:"3px",borderTopRadius:"3px",children:c}))})]})]}),qq=({recipes:e,onClick:t})=>T(Se,{flexDir:{base:"column",md:"row"},wrap:"wrap",basis:"50px",grow:"1",shrink:"0",columnGap:{base:"1",sm:"3",md:"3",lg:"5"},m:"10px",justify:"center",children:e.map(n=>T(Pq,{id:n.recipe.url,recipe:n.recipe,onClick:t,image:n.recipe.image,label:n.recipe.label,dietLabels:n.recipe.dietLabels,cautions:n.recipe.cautions,mealType:n.recipe.mealType,dishType:n.recipe.dishType.map(r=>r.charAt(0).toUpperCase()+r.substr(1)),healthLabels:n.recipe.healthLabels.filter(r=>{if(r==="Vegetarian"||r==="Vegan")return r})},n.recipe.url))}),Iq=({onChange:e,...t})=>T(Zf,{backgroundColor:"white",mb:{base:"30px",md:"40px"},ml:"5px",width:{base:"300px",md:"400px"},type:"text",placeholder:"Search here for recipe",onChange:e,...t}),Rq=({recipes:e,onClick:t})=>{const[n,r]=k.exports.useState(""),o=e.filter(i=>i.recipe.label.toLowerCase().includes(n.toLowerCase()));return G(Pr,{children:[T(Iq,{onChange:i=>{r(i.target.value)}}),T(Se,{ml:"15px",mr:"15px",children:T(qq,{onClick:t,recipes:o})})]})},zq=({onClick:e,...t})=>T(Kf,{colorScheme:"teal",onClick:e,...t,children:"<"}),Mq=({recipe:e,onClick:t})=>(k.exports.useEffect(()=>{window.scrollTo(0,0)},[]),G(Ys,{backgroundColor:"white",maxWidth:{base:"95vw",sm:"80vw",md:"70vw"},minHeight:{base:"140vh",sm:"110vh",md:"110vh"},padding:"0px",ml:"auto",mr:"auto",children:[T(zq,{className:"back-button",onClick:()=>t(),display:"flex",variant:"ghost",marginBottom:"15px"}),T(Uf,{className:"photo",src:e.image,alt:"",width:"100%",height:"200px",objectFit:"cover",mb:"15px"}),G(Ys,{display:"flex",flexDirection:"row",columnGap:{sm:"2",md:"5",lg:"5"},justifyContent:"center",flexBasis:"auto",flexGrow:"1",flexShrink:"0",m:"auto",children:[G(tt,{display:"flex",flexDirection:"column",textAlign:"left",flexGrow:"1",flexShrink:"0",flexBasis:{base:"100px",sm:"100px",md:"200px",lg:"300px"},mb:"20px",children:[T(tn,{color:"grey",backgroundColor:"white",fontSize:{base:"12px",lg:"14px"},padding:"0px",mb:"5px",children:e.mealType}),T(jn,{fontSize:{base:"18px",lg:"22px"},mb:"5px",children:e.label}),G(tt,{mb:"10px",fontSize:{base:"14px",lg:"16px"},children:["Dish type:",T(tn,{mb:"3px",backgroundColor:"white",fontSize:{base:"14px",lg:"16px"},fontWeight:"normal",children:e.dishType})]}),G(yn,{lineHeight:"normal",fontSize:{base:"14px",lg:"16px"},mb:"10px",children:["Total cooking time: ",e.totalTime," minutes"]}),G(yn,{fontSize:{base:"14px",lg:"16px"},mb:"10px",children:["Servings: ",e.yield]}),T(jn,{fontSize:{base:"16px",lg:"18px"},mb:"5px",children:"Ingerdients:"}),e.ingredientLines.map(n=>T(ep,{fontSize:{base:"15px",lg:"18px"},children:n},n))]}),G(tt,{display:"flex",flexDirection:"column",flexGrow:"1",flexShrink:"0",flexBasis:{base:"100px",sm:"100px",md:"300px",lg:"300px"},textAlign:"left",children:[T(jn,{fontSize:{base:"14px",lg:"16px"},fontWeight:"normal",mb:"5px",children:"Health Labels:"}),T(Se,{flexWrap:"wrap",columnGap:"2",rowGap:"2",mb:"10px",children:e.healthLabels.map(n=>T(tn,{fontSize:"12px",backgroundColor:"#D6BCFA",children:n},n))}),T(jn,{fontSize:{base:"14px",lg:"16px"},fontWeight:"normal",mb:"5px",children:"Diet:"}),T(Se,{flexWrap:"wrap",columnGap:"2",rowGap:"2",mb:"10px",children:e.dietLabels.map(n=>T(tn,{className:"diet-title-label",backgroundColor:"#C6F6D5",fontSize:"12px",children:n},n))}),T(jn,{fontSize:{base:"14px",lg:"16px"},fontWeight:"normal",mb:"5px",children:"Cautions:"}),T(Se,{flexWrap:"wrap",columnGap:"2",rowGap:"2",mb:"10px",children:e.cautions.map(n=>T(tn,{backgroundColor:"#FC8181",fontSize:"12px",children:n},n))}),T(jn,{fontSize:{base:"14px",lg:"16px"},mb:"10px",children:"Total nutrients:"}),G(Se,{flexDir:"row",wrap:"wrap",justify:"flex-start",columnGap:{base:"3",lg:"5"},rowGap:"1",mb:"15px",children:[G(Se,{flexDir:"column",justify:"space-evenly",children:[T(Se,{fontSize:{base:"14px",lg:"16px"},children:Math.round(e.totalNutrients.ENERC_KCAL.quantity)}),T(yn,{fontWeight:"bold",fontSize:{base:"11px",lg:"14px"},children:"CALORIES"})]}),G(Se,{flexDir:"column",children:[G(Se,{fontSize:{base:"14px",lg:"16px"},children:[Math.round(e.totalNutrients.CHOCDF.quantity),e.totalNutrients.CHOCDF.unit]}),T(yn,{fontWeight:"bold",fontSize:{base:"11px",lg:"14px"},children:e.totalNutrients.CHOCDF.label.toUpperCase()})]}),G(Se,{flexDir:"column",children:[G(Se,{fontSize:{base:"14px",lg:"16px"},children:[Math.round(e.totalNutrients.PROCNT.quantity),e.totalNutrients.PROCNT.unit]}),T(yn,{fontWeight:"bold",fontSize:{base:"11px",lg:"14px"},children:e.totalNutrients.PROCNT.label.toUpperCase()})]}),G(Se,{flexDir:"column",children:[G(Se,{fontSize:{base:"14px",lg:"16px"},children:[Math.round(e.totalNutrients.FAT.quantity),e.totalNutrients.FAT.unit]}),T(yn,{fontWeight:"bold",fontSize:{base:"11px",lg:"14px"},children:e.totalNutrients.FAT.label.toUpperCase()})]}),G(Se,{flexDir:"column",children:[G(Se,{fontSize:{base:"14px",lg:"16px"},children:[Math.round(e.totalNutrients.CHOLE.quantity),e.totalNutrients.CHOLE.unit]}),T(yn,{fontWeight:"bold",fontSize:{base:"11px",lg:"14px"},children:e.totalNutrients.CHOLE.label.toUpperCase()})]}),G(Se,{flexDir:"column",children:[G(Se,{fontSize:{base:"14px",lg:"16px"},children:[Math.round(e.totalNutrients.NA.quantity),e.totalNutrients.NA.unit]}),T(yn,{fontWeight:"bold",fontSize:{base:"11px",lg:"14px"},children:e.totalNutrients.NA.label.toUpperCase()})]})]})]})]})]})),Vq=()=>{const[e,t]=k.exports.useState();return T(Ys,{backgroundColor:"rgb(22, 127, 180)",maxWidth:"100vw",minHeight:"100vh",textAlign:"center",children:e?T(Pr,{children:T(Mq,{recipe:e,onClick:t})}):T(Pr,{children:G(yb,{pt:"40px",pb:"80px",display:"flex",flexDir:"column",justifyContent:"center",children:[T(jn,{mb:"25px",color:"white",children:"Winc Recipe Checker"}),T(Rq,{recipes:Eq.hits,onClick:t})]})})})};Qd.createRoot(document.getElementById("root")).render(T(M.StrictMode,{children:T(Aq,{children:T(Vq,{})})}));
