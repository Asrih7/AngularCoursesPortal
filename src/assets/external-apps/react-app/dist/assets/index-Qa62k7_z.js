var Xp=e=>{throw TypeError(e)};var Wl=(e,t,n)=>t.has(e)||Xp("Cannot "+n);var L=(e,t,n)=>(Wl(e,t,"read from private field"),n?n.call(e):t.get(e)),me=(e,t,n)=>t.has(e)?Xp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ee=(e,t,n,r)=>(Wl(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ge=(e,t,n)=>(Wl(e,t,"access private method"),n);var ks=(e,t,n,r)=>({set _(o){ee(e,t,o,n)},get _(){return L(e,t,r)}});function D0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ng={exports:{}},nl={},rg={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),F0=Symbol.for("react.portal"),_0=Symbol.for("react.fragment"),z0=Symbol.for("react.strict_mode"),U0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),W0=Symbol.for("react.context"),H0=Symbol.for("react.forward_ref"),q0=Symbol.for("react.suspense"),$0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),Jp=Symbol.iterator;function Q0(e){return e===null||typeof e!="object"?null:(e=Jp&&e[Jp]||e["@@iterator"],typeof e=="function"?e:null)}var og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,sg={};function ei(e,t,n){this.props=e,this.context=t,this.refs=sg,this.updater=n||og}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ag(){}ag.prototype=ei.prototype;function pd(e,t,n){this.props=e,this.context=t,this.refs=sg,this.updater=n||og}var fd=pd.prototype=new ag;fd.constructor=pd;ig(fd,ei.prototype);fd.isPureReactComponent=!0;var Zp=Array.isArray,lg=Object.prototype.hasOwnProperty,md={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function cg(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)lg.call(t,r)&&!ug.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ps,type:e,key:i,ref:s,props:o,_owner:md.current}}function G0(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function K0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ef=/\/+/g;function Hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K0(""+e.key):t.toString(36)}function ea(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ps:case F0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Hl(s,0):r,Zp(o)?(n="",e!=null&&(n=e.replace(ef,"$&/")+"/"),ea(o,t,n,"",function(u){return u})):o!=null&&(hd(o)&&(o=G0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(ef,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Zp(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Hl(i,a);s+=ea(i,t,n,l,o)}else if(l=Q0(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Hl(i,a++),s+=ea(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Es(e,t,n){if(e==null)return e;var r=[],o=0;return ea(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},ta={transition:null},X0={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:ta,ReactCurrentOwner:md};function dg(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Es,forEach:function(e,t,n){Es(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Es(e,function(){t++}),t},toArray:function(e){return Es(e,function(t){return t})||[]},only:function(e){if(!hd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=ei;le.Fragment=_0;le.Profiler=U0;le.PureComponent=pd;le.StrictMode=z0;le.Suspense=q0;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;le.act=dg;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ig({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=md.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)lg.call(t,l)&&!ug.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ps,type:e.type,key:o,ref:i,props:r,_owner:s}};le.createContext=function(e){return e={$$typeof:W0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B0,_context:e},e.Consumer=e};le.createElement=cg;le.createFactory=function(e){var t=cg.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:H0,render:e}};le.isValidElement=hd;le.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:Y0}};le.memo=function(e,t){return{$$typeof:$0,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=ta.transition;ta.transition={};try{e()}finally{ta.transition=t}};le.unstable_act=dg;le.useCallback=function(e,t){return it.current.useCallback(e,t)};le.useContext=function(e){return it.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return it.current.useDeferredValue(e)};le.useEffect=function(e,t){return it.current.useEffect(e,t)};le.useId=function(){return it.current.useId()};le.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return it.current.useMemo(e,t)};le.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};le.useRef=function(e){return it.current.useRef(e)};le.useState=function(e){return it.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return it.current.useTransition()};le.version="18.3.1";rg.exports=le;var v=rg.exports;const B=tl(v),gd=D0({__proto__:null,default:B},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=v,Z0=Symbol.for("react.element"),eb=Symbol.for("react.fragment"),tb=Object.prototype.hasOwnProperty,nb=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rb={key:!0,ref:!0,__self:!0,__source:!0};function pg(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)tb.call(t,r)&&!rb.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Z0,type:e,key:i,ref:s,props:o,_owner:nb.current}}nl.Fragment=eb;nl.jsx=pg;nl.jsxs=pg;ng.exports=nl;var C=ng.exports,fg={exports:{}},Rt={},mg={exports:{}},hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,N){var S=R.length;R.push(N);e:for(;0<S;){var K=S-1>>>1,Q=R[K];if(0<o(Q,N))R[K]=N,R[S]=Q,S=K;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var N=R[0],S=R.pop();if(S!==N){R[0]=S;e:for(var K=0,Q=R.length,E=Q>>>1;K<E;){var Y=2*(K+1)-1,de=R[Y],re=Y+1,H=R[re];if(0>o(de,S))re<Q&&0>o(H,de)?(R[K]=H,R[re]=S,K=re):(R[K]=de,R[Y]=S,K=Y);else if(re<Q&&0>o(H,S))R[K]=H,R[re]=S,K=re;else break e}}return N}function o(R,N){var S=R.sortIndex-N.sortIndex;return S!==0?S:R.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,p=null,f=3,d=!1,w=!1,m=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=R)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function b(R){if(m=!1,y(R),!w)if(n(l)!==null)w=!0,q(T);else{var N=n(u);N!==null&&V(b,N.startTime-R)}}function T(R,N){w=!1,m&&(m=!1,h(P),P=-1),d=!0;var S=f;try{for(y(N),p=n(l);p!==null&&(!(p.expirationTime>N)||R&&!D());){var K=p.callback;if(typeof K=="function"){p.callback=null,f=p.priorityLevel;var Q=K(p.expirationTime<=N);N=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(l)&&r(l),y(N)}else r(l);p=n(l)}if(p!==null)var E=!0;else{var Y=n(u);Y!==null&&V(b,Y.startTime-N),E=!1}return E}finally{p=null,f=S,d=!1}}var k=!1,A=null,P=-1,O=5,j=-1;function D(){return!(e.unstable_now()-j<O)}function M(){if(A!==null){var R=e.unstable_now();j=R;var N=!0;try{N=A(!0,R)}finally{N?$():(k=!1,A=null)}}else k=!1}var $;if(typeof g=="function")$=function(){g(M)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,W=F.port2;F.port1.onmessage=M,$=function(){W.postMessage(null)}}else $=function(){x(M,0)};function q(R){A=R,k||(k=!0,$())}function V(R,N){P=x(function(){R(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||d||(w=!0,q(T))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var S=f;f=N;try{return R()}finally{f=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,N){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var S=f;f=R;try{return N()}finally{f=S}},e.unstable_scheduleCallback=function(R,N,S){var K=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?K+S:K):S=K,R){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=S+Q,R={id:c++,callback:N,priorityLevel:R,startTime:S,expirationTime:Q,sortIndex:-1},S>K?(R.sortIndex=S,t(u,R),n(l)===null&&R===n(u)&&(m?(h(P),P=-1):m=!0,V(b,S-K))):(R.sortIndex=Q,t(l,R),w||d||(w=!0,q(T))),R},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(R){var N=f;return function(){var S=f;f=N;try{return R.apply(this,arguments)}finally{f=S}}}})(hg);mg.exports=hg;var ob=mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib=v,Pt=ob;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gg=new Set,Bi={};function no(e,t){$o(e,t),$o(e+"Capture",t)}function $o(e,t){for(Bi[e]=t,e=0;e<t.length;e++)gg.add(t[e])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,sb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tf={},nf={};function ab(e){return Uu.call(nf,e)?!0:Uu.call(tf,e)?!1:sb.test(e)?nf[e]=!0:(tf[e]=!0,!1)}function lb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ub(e,t,n,r){if(t===null||typeof t>"u"||lb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var yd=/[\-:]([a-z])/g;function vd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yd,vd);Ve[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yd,vd);Ve[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yd,vd);Ve[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function wd(e,t,n,r){var o=Ve.hasOwnProperty(t)?Ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ub(t,n,o,r)&&(n=null),r||o===null?ab(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wn=ib.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ts=Symbol.for("react.element"),fo=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),yg=Symbol.for("react.provider"),vg=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),Cd=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),rf=Symbol.iterator;function ci(e){return e===null||typeof e!="object"?null:(e=rf&&e[rf]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,ql;function Ci(e){if(ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||""}return`
`+ql+e}var $l=!1;function Vl(e,t){if(!e||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ci(e):""}function cb(e){switch(e.tag){case 5:return Ci(e.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return e=Vl(e.type,!1),e;case 11:return e=Vl(e.type.render,!1),e;case 1:return e=Vl(e.type,!0),e;default:return""}}function qu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mo:return"Fragment";case fo:return"Portal";case Bu:return"Profiler";case xd:return"StrictMode";case Wu:return"Suspense";case Hu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vg:return(e.displayName||"Context")+".Consumer";case yg:return(e._context.displayName||"Context")+".Provider";case bd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cd:return t=e.displayName||null,t!==null?t:qu(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return qu(e(t))}catch{}}return null}function db(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(t);case 8:return t===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pb(e){var t=xg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){e._valueTracker||(e._valueTracker=pb(e))}function bg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $u(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function of(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=br(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cg(e,t){t=t.checked,t!=null&&wd(e,"checked",t,!1)}function Vu(e,t){Cg(e,t);var n=br(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qu(e,t.type,br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qu(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Si=Array.isArray;function Eo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+br(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Gu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function af(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Si(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:br(n)}}function Sg(e,t){var n=br(t.value),r=br(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ps,Eg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fb=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(e){fb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ai[t]=Ai[e]})});function Tg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ai.hasOwnProperty(e)&&Ai[e]?(""+t).trim():t+"px"}function Ag(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Tg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var mb=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(e,t){if(t){if(mb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Xu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function Sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zu=null,To=null,Ao=null;function uf(e){if(e=hs(e)){if(typeof Zu!="function")throw Error(_(280));var t=e.stateNode;t&&(t=al(t),Zu(e.stateNode,e.type,t))}}function Pg(e){To?Ao?Ao.push(e):Ao=[e]:To=e}function Rg(){if(To){var e=To,t=Ao;if(Ao=To=null,uf(e),t)for(e=0;e<t.length;e++)uf(t[e])}}function Ig(e,t){return e(t)}function Mg(){}var Ql=!1;function Ng(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return Ig(e,t,n)}finally{Ql=!1,(To!==null||Ao!==null)&&(Mg(),Rg())}}function Hi(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ec=!1;if(Dn)try{var di={};Object.defineProperty(di,"passive",{get:function(){ec=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{ec=!1}function hb(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Pi=!1,ba=null,Ca=!1,tc=null,gb={onError:function(e){Pi=!0,ba=e}};function yb(e,t,n,r,o,i,s,a,l){Pi=!1,ba=null,hb.apply(gb,arguments)}function vb(e,t,n,r,o,i,s,a,l){if(yb.apply(this,arguments),Pi){if(Pi){var u=ba;Pi=!1,ba=null}else throw Error(_(198));Ca||(Ca=!0,tc=u)}}function ro(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Og(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cf(e){if(ro(e)!==e)throw Error(_(188))}function wb(e){var t=e.alternate;if(!t){if(t=ro(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return cf(o),e;if(i===r)return cf(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Lg(e){return e=wb(e),e!==null?jg(e):null}function jg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jg(e);if(t!==null)return t;e=e.sibling}return null}var Dg=Pt.unstable_scheduleCallback,df=Pt.unstable_cancelCallback,xb=Pt.unstable_shouldYield,bb=Pt.unstable_requestPaint,je=Pt.unstable_now,Cb=Pt.unstable_getCurrentPriorityLevel,kd=Pt.unstable_ImmediatePriority,Fg=Pt.unstable_UserBlockingPriority,Sa=Pt.unstable_NormalPriority,Sb=Pt.unstable_LowPriority,_g=Pt.unstable_IdlePriority,rl=null,xn=null;function kb(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Ab,Eb=Math.log,Tb=Math.LN2;function Ab(e){return e>>>=0,e===0?32:31-(Eb(e)/Tb|0)|0}var Rs=64,Is=4194304;function ki(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=ki(a):(i&=s,i!==0&&(r=ki(i)))}else s=n&~o,s!==0?r=ki(s):i!==0&&(r=ki(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),o=1<<n,r|=e[n],t&=~o;return r}function Pb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-en(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=Pb(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function nc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zg(){var e=Rs;return Rs<<=1,!(Rs&4194240)&&(Rs=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function Ib(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-en(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ed(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-en(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ye=0;function Ug(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bg,Td,Wg,Hg,qg,rc=!1,Ms=[],fr=null,mr=null,hr=null,qi=new Map,$i=new Map,nr=[],Mb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(t.pointerId)}}function pi(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=hs(t),t!==null&&Td(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Nb(e,t,n,r,o){switch(t){case"focusin":return fr=pi(fr,e,t,n,r,o),!0;case"dragenter":return mr=pi(mr,e,t,n,r,o),!0;case"mouseover":return hr=pi(hr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return qi.set(i,pi(qi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,$i.set(i,pi($i.get(i)||null,e,t,n,r,o)),!0}return!1}function $g(e){var t=Fr(e.target);if(t!==null){var n=ro(t);if(n!==null){if(t=n.tag,t===13){if(t=Og(n),t!==null){e.blockedOn=t,qg(e.priority,function(){Wg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function na(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ju=r,n.target.dispatchEvent(r),Ju=null}else return t=hs(n),t!==null&&Td(t),e.blockedOn=n,!1;t.shift()}return!0}function ff(e,t,n){na(e)&&n.delete(t)}function Ob(){rc=!1,fr!==null&&na(fr)&&(fr=null),mr!==null&&na(mr)&&(mr=null),hr!==null&&na(hr)&&(hr=null),qi.forEach(ff),$i.forEach(ff)}function fi(e,t){e.blockedOn===t&&(e.blockedOn=null,rc||(rc=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,Ob)))}function Vi(e){function t(o){return fi(o,e)}if(0<Ms.length){fi(Ms[0],e);for(var n=1;n<Ms.length;n++){var r=Ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&fi(fr,e),mr!==null&&fi(mr,e),hr!==null&&fi(hr,e),qi.forEach(t),$i.forEach(t),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&nr.shift()}var Po=Wn.ReactCurrentBatchConfig,Ea=!0;function Lb(e,t,n,r){var o=ye,i=Po.transition;Po.transition=null;try{ye=1,Ad(e,t,n,r)}finally{ye=o,Po.transition=i}}function jb(e,t,n,r){var o=ye,i=Po.transition;Po.transition=null;try{ye=4,Ad(e,t,n,r)}finally{ye=o,Po.transition=i}}function Ad(e,t,n,r){if(Ea){var o=oc(e,t,n,r);if(o===null)ou(e,t,r,Ta,n),pf(e,r);else if(Nb(o,e,t,n,r))r.stopPropagation();else if(pf(e,r),t&4&&-1<Mb.indexOf(e)){for(;o!==null;){var i=hs(o);if(i!==null&&Bg(i),i=oc(e,t,n,r),i===null&&ou(e,t,r,Ta,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ou(e,t,r,null,n)}}var Ta=null;function oc(e,t,n,r){if(Ta=null,e=Sd(r),e=Fr(e),e!==null)if(t=ro(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Og(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ta=e,null}function Vg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cb()){case kd:return 1;case Fg:return 4;case Sa:case Sb:return 16;case _g:return 536870912;default:return 16}default:return 16}}var cr=null,Pd=null,ra=null;function Qg(){if(ra)return ra;var e,t=Pd,n=t.length,r,o="value"in cr?cr.value:cr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ra=o.slice(e,1<r?1-r:void 0)}function oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function mf(){return!1}function It(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ns:mf,this.isPropagationStopped=mf,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=It(ti),ms=Me({},ti,{view:0,detail:0}),Db=It(ms),Kl,Yl,mi,ol=Me({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Id,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(Kl=e.screenX-mi.screenX,Yl=e.screenY-mi.screenY):Yl=Kl=0,mi=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),hf=It(ol),Fb=Me({},ol,{dataTransfer:0}),_b=It(Fb),zb=Me({},ms,{relatedTarget:0}),Xl=It(zb),Ub=Me({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),Bb=It(Ub),Wb=Me({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hb=It(Wb),qb=Me({},ti,{data:0}),gf=It(qb),$b={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qb[e])?!!t[e]:!1}function Id(){return Gb}var Kb=Me({},ms,{key:function(e){if(e.key){var t=$b[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Id,charCode:function(e){return e.type==="keypress"?oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yb=It(Kb),Xb=Me({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=It(Xb),Jb=Me({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Id}),Zb=It(Jb),e1=Me({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=It(e1),n1=Me({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=It(n1),o1=[9,13,27,32],Md=Dn&&"CompositionEvent"in window,Ri=null;Dn&&"documentMode"in document&&(Ri=document.documentMode);var i1=Dn&&"TextEvent"in window&&!Ri,Gg=Dn&&(!Md||Ri&&8<Ri&&11>=Ri),vf=" ",wf=!1;function Kg(e,t){switch(e){case"keyup":return o1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ho=!1;function s1(e,t){switch(e){case"compositionend":return Yg(t);case"keypress":return t.which!==32?null:(wf=!0,vf);case"textInput":return e=t.data,e===vf&&wf?null:e;default:return null}}function a1(e,t){if(ho)return e==="compositionend"||!Md&&Kg(e,t)?(e=Qg(),ra=Pd=cr=null,ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gg&&t.locale!=="ko"?null:t.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l1[e.type]:t==="textarea"}function Xg(e,t,n,r){Pg(r),t=Aa(t,"onChange"),0<t.length&&(n=new Rd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ii=null,Qi=null;function u1(e){ly(e,0)}function il(e){var t=vo(e);if(bg(t))return e}function c1(e,t){if(e==="change")return t}var Jg=!1;if(Dn){var Jl;if(Dn){var Zl="oninput"in document;if(!Zl){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Zl=typeof bf.oninput=="function"}Jl=Zl}else Jl=!1;Jg=Jl&&(!document.documentMode||9<document.documentMode)}function Cf(){Ii&&(Ii.detachEvent("onpropertychange",Zg),Qi=Ii=null)}function Zg(e){if(e.propertyName==="value"&&il(Qi)){var t=[];Xg(t,Qi,e,Sd(e)),Ng(u1,t)}}function d1(e,t,n){e==="focusin"?(Cf(),Ii=t,Qi=n,Ii.attachEvent("onpropertychange",Zg)):e==="focusout"&&Cf()}function p1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Qi)}function f1(e,t){if(e==="click")return il(t)}function m1(e,t){if(e==="input"||e==="change")return il(t)}function h1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:h1;function Gi(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Uu.call(t,o)||!nn(e[o],t[o]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kf(e,t){var n=Sf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function ey(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ey(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ty(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function g1(e){var t=ty(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ey(n.ownerDocument.documentElement,n)){if(r!==null&&Nd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=kf(n,i);var s=kf(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var y1=Dn&&"documentMode"in document&&11>=document.documentMode,go=null,ic=null,Mi=null,sc=!1;function Ef(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sc||go==null||go!==xa(r)||(r=go,"selectionStart"in r&&Nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mi&&Gi(Mi,r)||(Mi=r,r=Aa(ic,"onSelect"),0<r.length&&(t=new Rd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=go)))}function Os(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yo={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},eu={},ny={};Dn&&(ny=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function sl(e){if(eu[e])return eu[e];if(!yo[e])return e;var t=yo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ny)return eu[e]=t[n];return e}var ry=sl("animationend"),oy=sl("animationiteration"),iy=sl("animationstart"),sy=sl("transitionend"),ay=new Map,Tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){ay.set(e,t),no(t,[e])}for(var tu=0;tu<Tf.length;tu++){var nu=Tf[tu],v1=nu.toLowerCase(),w1=nu[0].toUpperCase()+nu.slice(1);Er(v1,"on"+w1)}Er(ry,"onAnimationEnd");Er(oy,"onAnimationIteration");Er(iy,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(sy,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Af(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vb(r,t,void 0,e),e.currentTarget=null}function ly(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Af(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Af(o,a,u),i=l}}}if(Ca)throw e=tc,Ca=!1,tc=null,e}function Ee(e,t){var n=t[dc];n===void 0&&(n=t[dc]=new Set);var r=e+"__bubble";n.has(r)||(uy(t,e,2,!1),n.add(r))}function ru(e,t,n){var r=0;t&&(r|=4),uy(n,e,r,t)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function Ki(e){if(!e[Ls]){e[Ls]=!0,gg.forEach(function(n){n!=="selectionchange"&&(x1.has(n)||ru(n,!1,e),ru(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ls]||(t[Ls]=!0,ru("selectionchange",!1,t))}}function uy(e,t,n,r){switch(Vg(t)){case 1:var o=Lb;break;case 4:o=jb;break;default:o=Ad}n=o.bind(null,t,n,e),o=void 0,!ec||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ou(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Fr(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Ng(function(){var u=i,c=Sd(n),p=[];e:{var f=ay.get(e);if(f!==void 0){var d=Rd,w=e;switch(e){case"keypress":if(oa(n)===0)break e;case"keydown":case"keyup":d=Yb;break;case"focusin":w="focus",d=Xl;break;case"focusout":w="blur",d=Xl;break;case"beforeblur":case"afterblur":d=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=_b;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Zb;break;case ry:case oy:case iy:d=Bb;break;case sy:d=t1;break;case"scroll":d=Db;break;case"wheel":d=r1;break;case"copy":case"cut":case"paste":d=Hb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=yf}var m=(t&4)!==0,x=!m&&e==="scroll",h=m?f!==null?f+"Capture":null:f;m=[];for(var g=u,y;g!==null;){y=g;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,h!==null&&(b=Hi(g,h),b!=null&&m.push(Yi(g,b,y)))),x)break;g=g.return}0<m.length&&(f=new d(f,w,null,n,c),p.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",f&&n!==Ju&&(w=n.relatedTarget||n.fromElement)&&(Fr(w)||w[Fn]))break e;if((d||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,d?(w=n.relatedTarget||n.toElement,d=u,w=w?Fr(w):null,w!==null&&(x=ro(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(d=null,w=u),d!==w)){if(m=hf,b="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(m=yf,b="onPointerLeave",h="onPointerEnter",g="pointer"),x=d==null?f:vo(d),y=w==null?f:vo(w),f=new m(b,g+"leave",d,n,c),f.target=x,f.relatedTarget=y,b=null,Fr(c)===u&&(m=new m(h,g+"enter",w,n,c),m.target=y,m.relatedTarget=x,b=m),x=b,d&&w)t:{for(m=d,h=w,g=0,y=m;y;y=so(y))g++;for(y=0,b=h;b;b=so(b))y++;for(;0<g-y;)m=so(m),g--;for(;0<y-g;)h=so(h),y--;for(;g--;){if(m===h||h!==null&&m===h.alternate)break t;m=so(m),h=so(h)}m=null}else m=null;d!==null&&Pf(p,f,d,m,!1),w!==null&&x!==null&&Pf(p,x,w,m,!0)}}e:{if(f=u?vo(u):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var T=c1;else if(xf(f))if(Jg)T=m1;else{T=p1;var k=d1}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=f1);if(T&&(T=T(e,u))){Xg(p,T,n,c);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Qu(f,"number",f.value)}switch(k=u?vo(u):window,e){case"focusin":(xf(k)||k.contentEditable==="true")&&(go=k,ic=u,Mi=null);break;case"focusout":Mi=ic=go=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,Ef(p,n,c);break;case"selectionchange":if(y1)break;case"keydown":case"keyup":Ef(p,n,c)}var A;if(Md)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ho?Kg(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gg&&n.locale!=="ko"&&(ho||P!=="onCompositionStart"?P==="onCompositionEnd"&&ho&&(A=Qg()):(cr=c,Pd="value"in cr?cr.value:cr.textContent,ho=!0)),k=Aa(u,P),0<k.length&&(P=new gf(P,e,null,n,c),p.push({event:P,listeners:k}),A?P.data=A:(A=Yg(n),A!==null&&(P.data=A)))),(A=i1?s1(e,n):a1(e,n))&&(u=Aa(u,"onBeforeInput"),0<u.length&&(c=new gf("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=A))}ly(p,t)})}function Yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Aa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Hi(e,n),i!=null&&r.unshift(Yi(e,i,o)),i=Hi(e,t),i!=null&&r.push(Yi(e,i,o))),e=e.return}return r}function so(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pf(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=Hi(n,i),l!=null&&s.unshift(Yi(n,l,a))):o||(l=Hi(n,i),l!=null&&s.push(Yi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var b1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function Rf(e){return(typeof e=="string"?e:""+e).replace(b1,`
`).replace(C1,"")}function js(e,t,n){if(t=Rf(t),Rf(e)!==t&&n)throw Error(_(425))}function Pa(){}var ac=null,lc=null;function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(e){return If.resolve(null).then(e).catch(E1)}:cc;function E1(e){setTimeout(function(){throw e})}function iu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Vi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Vi(t)}function gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),gn="__reactFiber$"+ni,Xi="__reactProps$"+ni,Fn="__reactContainer$"+ni,dc="__reactEvents$"+ni,T1="__reactListeners$"+ni,A1="__reactHandles$"+ni;function Fr(e){var t=e[gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fn]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mf(e);e!==null;){if(n=e[gn])return n;e=Mf(e)}return t}e=n,n=e.parentNode}return null}function hs(e){return e=e[gn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function al(e){return e[Xi]||null}var pc=[],wo=-1;function Tr(e){return{current:e}}function Te(e){0>wo||(e.current=pc[wo],pc[wo]=null,wo--)}function Ce(e,t){wo++,pc[wo]=e.current,e.current=t}var Cr={},Ze=Tr(Cr),pt=Tr(!1),Gr=Cr;function Vo(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ft(e){return e=e.childContextTypes,e!=null}function Ra(){Te(pt),Te(Ze)}function Nf(e,t,n){if(Ze.current!==Cr)throw Error(_(168));Ce(Ze,t),Ce(pt,n)}function cy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,db(e)||"Unknown",o));return Me({},n,r)}function Ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,Gr=Ze.current,Ce(Ze,e),Ce(pt,pt.current),!0}function Of(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=cy(e,t,Gr),r.__reactInternalMemoizedMergedChildContext=e,Te(pt),Te(Ze),Ce(Ze,e)):Te(pt),Ce(pt,n)}var Mn=null,ll=!1,su=!1;function dy(e){Mn===null?Mn=[e]:Mn.push(e)}function P1(e){ll=!0,dy(e)}function Ar(){if(!su&&Mn!==null){su=!0;var e=0,t=ye;try{var n=Mn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mn=null,ll=!1}catch(o){throw Mn!==null&&(Mn=Mn.slice(e+1)),Dg(kd,Ar),o}finally{ye=t,su=!1}}return null}var xo=[],bo=0,Ma=null,Na=0,Ot=[],Lt=0,Kr=null,On=1,Ln="";function Lr(e,t){xo[bo++]=Na,xo[bo++]=Ma,Ma=e,Na=t}function py(e,t,n){Ot[Lt++]=On,Ot[Lt++]=Ln,Ot[Lt++]=Kr,Kr=e;var r=On;e=Ln;var o=32-en(r)-1;r&=~(1<<o),n+=1;var i=32-en(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,On=1<<32-en(t)+o|n<<o|r,Ln=i+e}else On=1<<i|n<<o|r,Ln=e}function Od(e){e.return!==null&&(Lr(e,1),py(e,1,0))}function Ld(e){for(;e===Ma;)Ma=xo[--bo],xo[bo]=null,Na=xo[--bo],xo[bo]=null;for(;e===Kr;)Kr=Ot[--Lt],Ot[Lt]=null,Ln=Ot[--Lt],Ot[Lt]=null,On=Ot[--Lt],Ot[Lt]=null}var Tt=null,kt=null,Pe=!1,Zt=null;function fy(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,kt=gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kr!==null?{id:On,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,kt=null,!0):!1;default:return!1}}function fc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mc(e){if(Pe){var t=kt;if(t){var n=t;if(!Lf(e,t)){if(fc(e))throw Error(_(418));t=gr(n.nextSibling);var r=Tt;t&&Lf(e,t)?fy(r,n):(e.flags=e.flags&-4097|2,Pe=!1,Tt=e)}}else{if(fc(e))throw Error(_(418));e.flags=e.flags&-4097|2,Pe=!1,Tt=e}}}function jf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Ds(e){if(e!==Tt)return!1;if(!Pe)return jf(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uc(e.type,e.memoizedProps)),t&&(t=kt)){if(fc(e))throw my(),Error(_(418));for(;t;)fy(e,t),t=gr(t.nextSibling)}if(jf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){kt=gr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=Tt?gr(e.stateNode.nextSibling):null;return!0}function my(){for(var e=kt;e;)e=gr(e.nextSibling)}function Qo(){kt=Tt=null,Pe=!1}function jd(e){Zt===null?Zt=[e]:Zt.push(e)}var R1=Wn.ReactCurrentBatchConfig;function hi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Fs(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Df(e){var t=e._init;return t(e._payload)}function hy(e){function t(h,g){if(e){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function o(h,g){return h=xr(h,g),h.index=0,h.sibling=null,h}function i(h,g,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,g,y,b){return g===null||g.tag!==6?(g=fu(y,h.mode,b),g.return=h,g):(g=o(g,y),g.return=h,g)}function l(h,g,y,b){var T=y.type;return T===mo?c(h,g,y.props.children,b,y.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===er&&Df(T)===g.type)?(b=o(g,y.props),b.ref=hi(h,g,y),b.return=h,b):(b=da(y.type,y.key,y.props,null,h.mode,b),b.ref=hi(h,g,y),b.return=h,b)}function u(h,g,y,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=mu(y,h.mode,b),g.return=h,g):(g=o(g,y.children||[]),g.return=h,g)}function c(h,g,y,b,T){return g===null||g.tag!==7?(g=Qr(y,h.mode,b,T),g.return=h,g):(g=o(g,y),g.return=h,g)}function p(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=fu(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ts:return y=da(g.type,g.key,g.props,null,h.mode,y),y.ref=hi(h,null,g),y.return=h,y;case fo:return g=mu(g,h.mode,y),g.return=h,g;case er:var b=g._init;return p(h,b(g._payload),y)}if(Si(g)||ci(g))return g=Qr(g,h.mode,y,null),g.return=h,g;Fs(h,g)}return null}function f(h,g,y,b){var T=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(h,g,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ts:return y.key===T?l(h,g,y,b):null;case fo:return y.key===T?u(h,g,y,b):null;case er:return T=y._init,f(h,g,T(y._payload),b)}if(Si(y)||ci(y))return T!==null?null:c(h,g,y,b,null);Fs(h,y)}return null}function d(h,g,y,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(y)||null,a(g,h,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ts:return h=h.get(b.key===null?y:b.key)||null,l(g,h,b,T);case fo:return h=h.get(b.key===null?y:b.key)||null,u(g,h,b,T);case er:var k=b._init;return d(h,g,y,k(b._payload),T)}if(Si(b)||ci(b))return h=h.get(y)||null,c(g,h,b,T,null);Fs(g,b)}return null}function w(h,g,y,b){for(var T=null,k=null,A=g,P=g=0,O=null;A!==null&&P<y.length;P++){A.index>P?(O=A,A=null):O=A.sibling;var j=f(h,A,y[P],b);if(j===null){A===null&&(A=O);break}e&&A&&j.alternate===null&&t(h,A),g=i(j,g,P),k===null?T=j:k.sibling=j,k=j,A=O}if(P===y.length)return n(h,A),Pe&&Lr(h,P),T;if(A===null){for(;P<y.length;P++)A=p(h,y[P],b),A!==null&&(g=i(A,g,P),k===null?T=A:k.sibling=A,k=A);return Pe&&Lr(h,P),T}for(A=r(h,A);P<y.length;P++)O=d(A,h,P,y[P],b),O!==null&&(e&&O.alternate!==null&&A.delete(O.key===null?P:O.key),g=i(O,g,P),k===null?T=O:k.sibling=O,k=O);return e&&A.forEach(function(D){return t(h,D)}),Pe&&Lr(h,P),T}function m(h,g,y,b){var T=ci(y);if(typeof T!="function")throw Error(_(150));if(y=T.call(y),y==null)throw Error(_(151));for(var k=T=null,A=g,P=g=0,O=null,j=y.next();A!==null&&!j.done;P++,j=y.next()){A.index>P?(O=A,A=null):O=A.sibling;var D=f(h,A,j.value,b);if(D===null){A===null&&(A=O);break}e&&A&&D.alternate===null&&t(h,A),g=i(D,g,P),k===null?T=D:k.sibling=D,k=D,A=O}if(j.done)return n(h,A),Pe&&Lr(h,P),T;if(A===null){for(;!j.done;P++,j=y.next())j=p(h,j.value,b),j!==null&&(g=i(j,g,P),k===null?T=j:k.sibling=j,k=j);return Pe&&Lr(h,P),T}for(A=r(h,A);!j.done;P++,j=y.next())j=d(A,h,P,j.value,b),j!==null&&(e&&j.alternate!==null&&A.delete(j.key===null?P:j.key),g=i(j,g,P),k===null?T=j:k.sibling=j,k=j);return e&&A.forEach(function(M){return t(h,M)}),Pe&&Lr(h,P),T}function x(h,g,y,b){if(typeof y=="object"&&y!==null&&y.type===mo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ts:e:{for(var T=y.key,k=g;k!==null;){if(k.key===T){if(T=y.type,T===mo){if(k.tag===7){n(h,k.sibling),g=o(k,y.props.children),g.return=h,h=g;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===er&&Df(T)===k.type){n(h,k.sibling),g=o(k,y.props),g.ref=hi(h,k,y),g.return=h,h=g;break e}n(h,k);break}else t(h,k);k=k.sibling}y.type===mo?(g=Qr(y.props.children,h.mode,b,y.key),g.return=h,h=g):(b=da(y.type,y.key,y.props,null,h.mode,b),b.ref=hi(h,g,y),b.return=h,h=b)}return s(h);case fo:e:{for(k=y.key;g!==null;){if(g.key===k)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),g=o(g,y.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=mu(y,h.mode,b),g.return=h,h=g}return s(h);case er:return k=y._init,x(h,g,k(y._payload),b)}if(Si(y))return w(h,g,y,b);if(ci(y))return m(h,g,y,b);Fs(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),g=o(g,y),g.return=h,h=g):(n(h,g),g=fu(y,h.mode,b),g.return=h,h=g),s(h)):n(h,g)}return x}var Go=hy(!0),gy=hy(!1),Oa=Tr(null),La=null,Co=null,Dd=null;function Fd(){Dd=Co=La=null}function _d(e){var t=Oa.current;Te(Oa),e._currentValue=t}function hc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ro(e,t){La=e,Dd=Co=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(Dd!==e)if(e={context:e,memoizedValue:t,next:null},Co===null){if(La===null)throw Error(_(308));Co=e,La.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var _r=null;function zd(e){_r===null?_r=[e]:_r.push(e)}function yy(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zd(t)):(n.next=o.next,o.next=n),t.interleaved=n,_n(e,r)}function _n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function Ud(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,_n(e,n)}return o=r.interleaved,o===null?(t.next=t,zd(r)):(t.next=o.next,o.next=t),r.interleaved=t,_n(e,n)}function ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ed(e,n)}}function Ff(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ja(e,t,n,r){var o=e.updateQueue;tr=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var p=o.baseState;s=0,c=u=l=null,a=i;do{var f=a.lane,d=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,m=a;switch(f=t,d=n,m.tag){case 1:if(w=m.payload,typeof w=="function"){p=w.call(d,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=m.payload,f=typeof w=="function"?w.call(d,p,f):w,f==null)break e;p=Me({},p,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else d={eventTime:d,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=p):c=c.next=d,s|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(l=p),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xr|=s,e.lanes=s,e.memoizedState=p}}function _f(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var gs={},bn=Tr(gs),Ji=Tr(gs),Zi=Tr(gs);function zr(e){if(e===gs)throw Error(_(174));return e}function Bd(e,t){switch(Ce(Zi,t),Ce(Ji,e),Ce(bn,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ku(t,e)}Te(bn),Ce(bn,t)}function Ko(){Te(bn),Te(Ji),Te(Zi)}function wy(e){zr(Zi.current);var t=zr(bn.current),n=Ku(t,e.type);t!==n&&(Ce(Ji,e),Ce(bn,n))}function Wd(e){Ji.current===e&&(Te(bn),Te(Ji))}var Re=Tr(0);function Da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var au=[];function Hd(){for(var e=0;e<au.length;e++)au[e]._workInProgressVersionPrimary=null;au.length=0}var sa=Wn.ReactCurrentDispatcher,lu=Wn.ReactCurrentBatchConfig,Yr=0,Ie=null,ze=null,We=null,Fa=!1,Ni=!1,es=0,I1=0;function Ke(){throw Error(_(321))}function qd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function $d(e,t,n,r,o,i){if(Yr=i,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sa.current=e===null||e.memoizedState===null?L1:j1,e=n(r,o),Ni){i=0;do{if(Ni=!1,es=0,25<=i)throw Error(_(301));i+=1,We=ze=null,t.updateQueue=null,sa.current=D1,e=n(r,o)}while(Ni)}if(sa.current=_a,t=ze!==null&&ze.next!==null,Yr=0,We=ze=Ie=null,Fa=!1,t)throw Error(_(300));return e}function Vd(){var e=es!==0;return es=0,e}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ie.memoizedState=We=e:We=We.next=e,We}function zt(){if(ze===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=We===null?Ie.memoizedState:We.next;if(t!==null)We=t,ze=e;else{if(e===null)throw Error(_(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},We===null?Ie.memoizedState=We=e:We=We.next=e}return We}function ts(e,t){return typeof t=="function"?t(e):t}function uu(e){var t=zt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,Ie.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,nn(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Ie.lanes|=i,Xr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cu(e){var t=zt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);nn(i,t.memoizedState)||(dt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xy(){}function by(e,t){var n=Ie,r=zt(),o=t(),i=!nn(r.memoizedState,o);if(i&&(r.memoizedState=o,dt=!0),r=r.queue,Qd(ky.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ns(9,Sy.bind(null,n,r,o,t),void 0,null),He===null)throw Error(_(349));Yr&30||Cy(n,t,o)}return o}function Cy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sy(e,t,n,r){t.value=n,t.getSnapshot=r,Ey(t)&&Ty(e)}function ky(e,t,n){return n(function(){Ey(t)&&Ty(e)})}function Ey(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function Ty(e){var t=_n(e,1);t!==null&&tn(t,e,1,-1)}function zf(e){var t=dn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:e},t.queue=e,e=e.dispatch=O1.bind(null,Ie,e),[t.memoizedState,e]}function ns(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ay(){return zt().memoizedState}function aa(e,t,n,r){var o=dn();Ie.flags|=e,o.memoizedState=ns(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var o=zt();r=r===void 0?null:r;var i=void 0;if(ze!==null){var s=ze.memoizedState;if(i=s.destroy,r!==null&&qd(r,s.deps)){o.memoizedState=ns(t,n,i,r);return}}Ie.flags|=e,o.memoizedState=ns(1|t,n,i,r)}function Uf(e,t){return aa(8390656,8,e,t)}function Qd(e,t){return ul(2048,8,e,t)}function Py(e,t){return ul(4,2,e,t)}function Ry(e,t){return ul(4,4,e,t)}function Iy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function My(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Iy.bind(null,t,e),n)}function Gd(){}function Ny(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oy(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ly(e,t,n){return Yr&21?(nn(n,t)||(n=zg(),Ie.lanes|=n,Xr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function M1(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=lu.transition;lu.transition={};try{e(!1),t()}finally{ye=n,lu.transition=r}}function jy(){return zt().memoizedState}function N1(e,t,n){var r=wr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dy(e))Fy(t,n);else if(n=yy(e,t,n,r),n!==null){var o=ot();tn(n,e,r,o),_y(n,t,r)}}function O1(e,t,n){var r=wr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dy(e))Fy(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,nn(a,s)){var l=t.interleaved;l===null?(o.next=o,zd(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=yy(e,t,o,r),n!==null&&(o=ot(),tn(n,e,r,o),_y(n,t,r))}}function Dy(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function Fy(e,t){Ni=Fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _y(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ed(e,n)}}var _a={readContext:_t,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},L1={readContext:_t,useCallback:function(e,t){return dn().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Uf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,aa(4194308,4,Iy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return aa(4,2,e,t)},useMemo:function(e,t){var n=dn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=N1.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=dn();return e={current:e},t.memoizedState=e},useState:zf,useDebugValue:Gd,useDeferredValue:function(e){return dn().memoizedState=e},useTransition:function(){var e=zf(!1),t=e[0];return e=M1.bind(null,e[1]),dn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,o=dn();if(Pe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),He===null)throw Error(_(349));Yr&30||Cy(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Uf(ky.bind(null,r,i,e),[e]),r.flags|=2048,ns(9,Sy.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=dn(),t=He.identifierPrefix;if(Pe){var n=Ln,r=On;n=(r&~(1<<32-en(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=es++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=I1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},j1={readContext:_t,useCallback:Ny,useContext:_t,useEffect:Qd,useImperativeHandle:My,useInsertionEffect:Py,useLayoutEffect:Ry,useMemo:Oy,useReducer:uu,useRef:Ay,useState:function(){return uu(ts)},useDebugValue:Gd,useDeferredValue:function(e){var t=zt();return Ly(t,ze.memoizedState,e)},useTransition:function(){var e=uu(ts)[0],t=zt().memoizedState;return[e,t]},useMutableSource:xy,useSyncExternalStore:by,useId:jy,unstable_isNewReconciler:!1},D1={readContext:_t,useCallback:Ny,useContext:_t,useEffect:Qd,useImperativeHandle:My,useInsertionEffect:Py,useLayoutEffect:Ry,useMemo:Oy,useReducer:cu,useRef:Ay,useState:function(){return cu(ts)},useDebugValue:Gd,useDeferredValue:function(e){var t=zt();return ze===null?t.memoizedState=e:Ly(t,ze.memoizedState,e)},useTransition:function(){var e=cu(ts)[0],t=zt().memoizedState;return[e,t]},useMutableSource:xy,useSyncExternalStore:by,useId:jy,unstable_isNewReconciler:!1};function Gt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?ro(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ot(),o=wr(e),i=jn(r,o);i.payload=t,n!=null&&(i.callback=n),t=yr(e,i,o),t!==null&&(tn(t,e,o,r),ia(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ot(),o=wr(e),i=jn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yr(e,i,o),t!==null&&(tn(t,e,o,r),ia(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ot(),r=wr(e),o=jn(n,r);o.tag=2,t!=null&&(o.callback=t),t=yr(e,o,r),t!==null&&(tn(t,e,r,n),ia(t,e,r))}};function Bf(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Gi(n,r)||!Gi(o,i):!0}function zy(e,t,n){var r=!1,o=Cr,i=t.contextType;return typeof i=="object"&&i!==null?i=_t(i):(o=ft(t)?Gr:Ze.current,r=t.contextTypes,i=(r=r!=null)?Vo(e,o):Cr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function yc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ud(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=_t(i):(i=ft(t)?Gr:Ze.current,o.context=Vo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(gc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&cl.enqueueReplaceState(o,o.state,null),ja(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yo(e,t){try{var n="",r=t;do n+=cb(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function du(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var F1=typeof WeakMap=="function"?WeakMap:Map;function Uy(e,t,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ua||(Ua=!0,Pc=r),vc(e,t)},n}function By(e,t,n){n=jn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){vc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){vc(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Hf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new F1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=X1.bind(null,e,t,n),t.then(e,e))}function qf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $f(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jn(-1,1),t.tag=2,yr(n,t,1))),n.lanes|=1),e)}var _1=Wn.ReactCurrentOwner,dt=!1;function nt(e,t,n,r){t.child=e===null?gy(t,null,n,r):Go(t,e.child,n,r)}function Vf(e,t,n,r,o){n=n.render;var i=t.ref;return Ro(t,o),r=$d(e,t,n,r,i,o),n=Vd(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zn(e,t,o)):(Pe&&n&&Od(t),t.flags|=1,nt(e,t,r,o),t.child)}function Qf(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!np(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wy(e,t,i,r,o)):(e=da(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(s,r)&&e.ref===t.ref)return zn(e,t,o)}return t.flags|=1,e=xr(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wy(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Gi(i,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,zn(e,t,o)}return wc(e,t,n,r,o)}function Hy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ko,Ct),Ct|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(ko,Ct),Ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(ko,Ct),Ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ce(ko,Ct),Ct|=r;return nt(e,t,o,n),t.child}function qy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wc(e,t,n,r,o){var i=ft(n)?Gr:Ze.current;return i=Vo(t,i),Ro(t,o),n=$d(e,t,n,r,i,o),r=Vd(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zn(e,t,o)):(Pe&&r&&Od(t),t.flags|=1,nt(e,t,n,o),t.child)}function Gf(e,t,n,r,o){if(ft(n)){var i=!0;Ia(t)}else i=!1;if(Ro(t,o),t.stateNode===null)la(e,t),zy(t,n,r),yc(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=ft(n)?Gr:Ze.current,u=Vo(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wf(t,s,r,u),tr=!1;var f=t.memoizedState;s.state=f,ja(t,r,s,o),l=t.memoizedState,a!==r||f!==l||pt.current||tr?(typeof c=="function"&&(gc(t,n,c,r),l=t.memoizedState),(a=tr||Bf(t,n,a,r,f,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,vy(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Gt(t.type,a),s.props=u,p=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=ft(n)?Gr:Ze.current,l=Vo(t,l));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||f!==l)&&Wf(t,s,r,l),tr=!1,f=t.memoizedState,s.state=f,ja(t,r,s,o);var w=t.memoizedState;a!==p||f!==w||pt.current||tr?(typeof d=="function"&&(gc(t,n,d,r),w=t.memoizedState),(u=tr||Bf(t,n,u,r,f,w,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return xc(e,t,n,r,i,o)}function xc(e,t,n,r,o,i){qy(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Of(t,n,!1),zn(e,t,i);r=t.stateNode,_1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Go(t,e.child,null,i),t.child=Go(t,null,a,i)):nt(e,t,a,i),t.memoizedState=r.state,o&&Of(t,n,!0),t.child}function $y(e){var t=e.stateNode;t.pendingContext?Nf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nf(e,t.context,!1),Bd(e,t.containerInfo)}function Kf(e,t,n,r,o){return Qo(),jd(o),t.flags|=256,nt(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vy(e,t,n){var r=t.pendingProps,o=Re.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ce(Re,o&1),e===null)return mc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=fl(s,r,0,null),e=Qr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Cc(n),t.memoizedState=bc,e):Kd(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return z1(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=xr(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=xr(a,i):(i=Qr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Cc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=bc,r}return i=e.child,e=i.sibling,r=xr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kd(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _s(e,t,n,r){return r!==null&&jd(r),Go(t,e.child,null,n),e=Kd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function z1(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=du(Error(_(422))),_s(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=fl({mode:"visible",children:r.children},o,0,null),i=Qr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Go(t,e.child,null,s),t.child.memoizedState=Cc(s),t.memoizedState=bc,i);if(!(t.mode&1))return _s(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(_(419)),r=du(i,r,void 0),_s(e,t,s,r)}if(a=(s&e.childLanes)!==0,dt||a){if(r=He,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,_n(e,o),tn(r,e,o,-1))}return tp(),r=du(Error(_(421))),_s(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=J1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,kt=gr(o.nextSibling),Tt=t,Pe=!0,Zt=null,e!==null&&(Ot[Lt++]=On,Ot[Lt++]=Ln,Ot[Lt++]=Kr,On=e.id,Ln=e.overflow,Kr=t),t=Kd(t,r.children),t.flags|=4096,t)}function Yf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hc(e.return,t,n)}function pu(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Qy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(nt(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yf(e,n,t);else if(e.tag===19)Yf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Da(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pu(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Da(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pu(t,!0,n,null,i);break;case"together":pu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function la(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function U1(e,t,n){switch(t.tag){case 3:$y(t),Qo();break;case 5:wy(t);break;case 1:ft(t.type)&&Ia(t);break;case 4:Bd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ce(Oa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?Vy(e,t,n):(Ce(Re,Re.current&1),e=zn(e,t,n),e!==null?e.sibling:null);Ce(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ce(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,Hy(e,t,n)}return zn(e,t,n)}var Gy,Sc,Ky,Yy;Gy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sc=function(){};Ky=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,zr(bn.current);var i=null;switch(n){case"input":o=$u(e,o),r=$u(e,r),i=[];break;case"select":o=Me({},o,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":o=Gu(e,o),r=Gu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pa)}Yu(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bi.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Yy=function(e,t,n,r){n!==r&&(t.flags|=4)};function gi(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function B1(e,t,n){var r=t.pendingProps;switch(Ld(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return ft(t.type)&&Ra(),Ye(t),null;case 3:return r=t.stateNode,Ko(),Te(pt),Te(Ze),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zt!==null&&(Mc(Zt),Zt=null))),Sc(e,t),Ye(t),null;case 5:Wd(t);var o=zr(Zi.current);if(n=t.type,e!==null&&t.stateNode!=null)Ky(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ye(t),null}if(e=zr(bn.current),Ds(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[gn]=t,r[Xi]=i,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(o=0;o<Ei.length;o++)Ee(Ei[o],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":of(r,i),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ee("invalid",r);break;case"textarea":af(r,i),Ee("invalid",r)}Yu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&js(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&js(r.textContent,a,e),o=["children",""+a]):Bi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ee("scroll",r)}switch(n){case"input":As(r),sf(r,i,!0);break;case"textarea":As(r),lf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Pa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[gn]=t,e[Xi]=r,Gy(e,t,!1,!1),t.stateNode=e;e:{switch(s=Xu(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),o=r;break;case"iframe":case"object":case"embed":Ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ei.length;o++)Ee(Ei[o],e);o=r;break;case"source":Ee("error",e),o=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),o=r;break;case"details":Ee("toggle",e),o=r;break;case"input":of(e,r),o=$u(e,r),Ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Me({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":af(e,r),o=Gu(e,r),Ee("invalid",e);break;default:o=r}Yu(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Ag(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Eg(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wi(e,l):typeof l=="number"&&Wi(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bi.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ee("scroll",e):l!=null&&wd(e,i,l,s))}switch(n){case"input":As(e),sf(e,r,!1);break;case"textarea":As(e),lf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+br(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Eo(e,!!r.multiple,i,!1):r.defaultValue!=null&&Eo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Yy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=zr(Zi.current),zr(bn.current),Ds(t)){if(r=t.stateNode,n=t.memoizedProps,r[gn]=t,(i=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:js(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&js(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=t,t.stateNode=r}return Ye(t),null;case 13:if(Te(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&kt!==null&&t.mode&1&&!(t.flags&128))my(),Qo(),t.flags|=98560,i=!1;else if(i=Ds(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[gn]=t}else Qo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),i=!1}else Zt!==null&&(Mc(Zt),Zt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Ue===0&&(Ue=3):tp())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Ko(),Sc(e,t),e===null&&Ki(t.stateNode.containerInfo),Ye(t),null;case 10:return _d(t.type._context),Ye(t),null;case 17:return ft(t.type)&&Ra(),Ye(t),null;case 19:if(Te(Re),i=t.memoizedState,i===null)return Ye(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)gi(i,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Da(e),s!==null){for(t.flags|=128,gi(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&je()>Xo&&(t.flags|=128,r=!0,gi(i,!1),t.lanes=4194304)}else{if(!r)if(e=Da(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Pe)return Ye(t),null}else 2*je()-i.renderingStartTime>Xo&&n!==1073741824&&(t.flags|=128,r=!0,gi(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=je(),t.sibling=null,n=Re.current,Ce(Re,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return ep(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ct&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function W1(e,t){switch(Ld(t),t.tag){case 1:return ft(t.type)&&Ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ko(),Te(pt),Te(Ze),Hd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wd(t),null;case 13:if(Te(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Qo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Re),null;case 4:return Ko(),null;case 10:return _d(t.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var zs=!1,Je=!1,H1=typeof WeakSet=="function"?WeakSet:Set,G=null;function So(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function kc(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var Xf=!1;function q1(e,t){if(ac=Ea,e=ty(),Nd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,p=e,f=null;t:for(;;){for(var d;p!==n||o!==0&&p.nodeType!==3||(a=s+o),p!==i||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(d=p.firstChild)!==null;)f=p,p=d;for(;;){if(p===e)break t;if(f===n&&++u===o&&(a=s),f===i&&++c===r&&(l=s),(d=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:e,selectionRange:n},Ea=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var m=w.memoizedProps,x=w.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:Gt(t.type,m),x);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(b){Oe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return w=Xf,Xf=!1,w}function Oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&kc(t,n,i)}o=o.next}while(o!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xy(e){var t=e.alternate;t!==null&&(e.alternate=null,Xy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[Xi],delete t[dc],delete t[T1],delete t[A1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jy(e){return e.tag===5||e.tag===3||e.tag===4}function Jf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pa));else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}var qe=null,Jt=!1;function Gn(e,t,n){for(n=n.child;n!==null;)Zy(e,t,n),n=n.sibling}function Zy(e,t,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Je||So(n,t);case 6:var r=qe,o=Jt;qe=null,Gn(e,t,n),qe=r,Jt=o,qe!==null&&(Jt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Jt?(e=qe,n=n.stateNode,e.nodeType===8?iu(e.parentNode,n):e.nodeType===1&&iu(e,n),Vi(e)):iu(qe,n.stateNode));break;case 4:r=qe,o=Jt,qe=n.stateNode.containerInfo,Jt=!0,Gn(e,t,n),qe=r,Jt=o;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&kc(n,t,s),o=o.next}while(o!==r)}Gn(e,t,n);break;case 1:if(!Je&&(So(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,t,a)}Gn(e,t,n);break;case 21:Gn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Gn(e,t,n),Je=r):Gn(e,t,n);break;default:Gn(e,t,n)}}function Zf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new H1),t.forEach(function(r){var o=Z1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function $t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,Jt=!1;break e;case 3:qe=a.stateNode.containerInfo,Jt=!0;break e;case 4:qe=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(qe===null)throw Error(_(160));Zy(i,s,o),qe=null,Jt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){Oe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ev(t,e),t=t.sibling}function ev(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),cn(e),r&4){try{Oi(3,e,e.return),dl(3,e)}catch(m){Oe(e,e.return,m)}try{Oi(5,e,e.return)}catch(m){Oe(e,e.return,m)}}break;case 1:$t(t,e),cn(e),r&512&&n!==null&&So(n,n.return);break;case 5:if($t(t,e),cn(e),r&512&&n!==null&&So(n,n.return),e.flags&32){var o=e.stateNode;try{Wi(o,"")}catch(m){Oe(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Cg(o,i),Xu(a,s);var u=Xu(a,i);for(s=0;s<l.length;s+=2){var c=l[s],p=l[s+1];c==="style"?Ag(o,p):c==="dangerouslySetInnerHTML"?Eg(o,p):c==="children"?Wi(o,p):wd(o,c,p,u)}switch(a){case"input":Vu(o,i);break;case"textarea":Sg(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var d=i.value;d!=null?Eo(o,!!i.multiple,d,!1):f!==!!i.multiple&&(i.defaultValue!=null?Eo(o,!!i.multiple,i.defaultValue,!0):Eo(o,!!i.multiple,i.multiple?[]:"",!1))}o[Xi]=i}catch(m){Oe(e,e.return,m)}}break;case 6:if($t(t,e),cn(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){Oe(e,e.return,m)}}break;case 3:if($t(t,e),cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vi(t.containerInfo)}catch(m){Oe(e,e.return,m)}break;case 4:$t(t,e),cn(e);break;case 13:$t(t,e),cn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Jd=je())),r&4&&Zf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(u=Je)||c,$t(t,e),Je=u):$t(t,e),cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(G=e,c=e.child;c!==null;){for(p=G=c;G!==null;){switch(f=G,d=f.child,f.tag){case 0:case 11:case 14:case 15:Oi(4,f,f.return);break;case 1:So(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(m){Oe(r,n,m)}}break;case 5:So(f,f.return);break;case 22:if(f.memoizedState!==null){tm(p);continue}}d!==null?(d.return=f,G=d):tm(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tg("display",s))}catch(m){Oe(e,e.return,m)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(m){Oe(e,e.return,m)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:$t(t,e),cn(e),r&4&&Zf(e);break;case 21:break;default:$t(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jy(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wi(o,""),r.flags&=-33);var i=Jf(e);Ac(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Jf(e);Tc(e,a,s);break;default:throw Error(_(161))}}catch(l){Oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $1(e,t,n){G=e,tv(e)}function tv(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var o=G,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||zs;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Je;a=zs;var u=Je;if(zs=s,(Je=l)&&!u)for(G=o;G!==null;)s=G,l=s.child,s.tag===22&&s.memoizedState!==null?nm(o):l!==null?(l.return=s,G=l):nm(o);for(;i!==null;)G=i,tv(i),i=i.sibling;G=o,zs=a,Je=u}em(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,G=i):em(e)}}function em(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Gt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&_f(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_f(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Vi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Je||t.flags&512&&Ec(t)}catch(f){Oe(t,t.return,f)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function tm(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function nm(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(l){Oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Oe(t,o,l)}}var i=t.return;try{Ec(t)}catch(l){Oe(t,i,l)}break;case 5:var s=t.return;try{Ec(t)}catch(l){Oe(t,s,l)}}}catch(l){Oe(t,t.return,l)}if(t===e){G=null;break}var a=t.sibling;if(a!==null){a.return=t.return,G=a;break}G=t.return}}var V1=Math.ceil,za=Wn.ReactCurrentDispatcher,Yd=Wn.ReactCurrentOwner,Ft=Wn.ReactCurrentBatchConfig,pe=0,He=null,_e=null,$e=0,Ct=0,ko=Tr(0),Ue=0,rs=null,Xr=0,pl=0,Xd=0,Li=null,ct=null,Jd=0,Xo=1/0,In=null,Ua=!1,Pc=null,vr=null,Us=!1,dr=null,Ba=0,ji=0,Rc=null,ua=-1,ca=0;function ot(){return pe&6?je():ua!==-1?ua:ua=je()}function wr(e){return e.mode&1?pe&2&&$e!==0?$e&-$e:R1.transition!==null?(ca===0&&(ca=zg()),ca):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Vg(e.type)),e):1}function tn(e,t,n,r){if(50<ji)throw ji=0,Rc=null,Error(_(185));fs(e,n,r),(!(pe&2)||e!==He)&&(e===He&&(!(pe&2)&&(pl|=n),Ue===4&&rr(e,$e)),mt(e,r),n===1&&pe===0&&!(t.mode&1)&&(Xo=je()+500,ll&&Ar()))}function mt(e,t){var n=e.callbackNode;Rb(e,t);var r=ka(e,e===He?$e:0);if(r===0)n!==null&&df(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&df(n),t===1)e.tag===0?P1(rm.bind(null,e)):dy(rm.bind(null,e)),k1(function(){!(pe&6)&&Ar()}),n=null;else{switch(Ug(r)){case 1:n=kd;break;case 4:n=Fg;break;case 16:n=Sa;break;case 536870912:n=_g;break;default:n=Sa}n=uv(n,nv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nv(e,t){if(ua=-1,ca=0,pe&6)throw Error(_(327));var n=e.callbackNode;if(Io()&&e.callbackNode!==n)return null;var r=ka(e,e===He?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wa(e,r);else{t=r;var o=pe;pe|=2;var i=ov();(He!==e||$e!==t)&&(In=null,Xo=je()+500,Vr(e,t));do try{K1();break}catch(a){rv(e,a)}while(!0);Fd(),za.current=i,pe=o,_e!==null?t=0:(He=null,$e=0,t=Ue)}if(t!==0){if(t===2&&(o=nc(e),o!==0&&(r=o,t=Ic(e,o))),t===1)throw n=rs,Vr(e,0),rr(e,r),mt(e,je()),n;if(t===6)rr(e,r);else{if(o=e.current.alternate,!(r&30)&&!Q1(o)&&(t=Wa(e,r),t===2&&(i=nc(e),i!==0&&(r=i,t=Ic(e,i))),t===1))throw n=rs,Vr(e,0),rr(e,r),mt(e,je()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:jr(e,ct,In);break;case 3:if(rr(e,r),(r&130023424)===r&&(t=Jd+500-je(),10<t)){if(ka(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ot(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=cc(jr.bind(null,e,ct,In),t);break}jr(e,ct,In);break;case 4:if(rr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-en(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V1(r/1960))-r,10<r){e.timeoutHandle=cc(jr.bind(null,e,ct,In),r);break}jr(e,ct,In);break;case 5:jr(e,ct,In);break;default:throw Error(_(329))}}}return mt(e,je()),e.callbackNode===n?nv.bind(null,e):null}function Ic(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=ct,ct=n,t!==null&&Mc(t)),e}function Mc(e){ct===null?ct=e:ct.push.apply(ct,e)}function Q1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t){for(t&=~Xd,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function rm(e){if(pe&6)throw Error(_(327));Io();var t=ka(e,0);if(!(t&1))return mt(e,je()),null;var n=Wa(e,t);if(e.tag!==0&&n===2){var r=nc(e);r!==0&&(t=r,n=Ic(e,r))}if(n===1)throw n=rs,Vr(e,0),rr(e,t),mt(e,je()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,ct,In),mt(e,je()),null}function Zd(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Xo=je()+500,ll&&Ar())}}function Jr(e){dr!==null&&dr.tag===0&&!(pe&6)&&Io();var t=pe;pe|=1;var n=Ft.transition,r=ye;try{if(Ft.transition=null,ye=1,e)return e()}finally{ye=r,Ft.transition=n,pe=t,!(pe&6)&&Ar()}}function ep(){Ct=ko.current,Te(ko)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S1(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ra();break;case 3:Ko(),Te(pt),Te(Ze),Hd();break;case 5:Wd(r);break;case 4:Ko();break;case 13:Te(Re);break;case 19:Te(Re);break;case 10:_d(r.type._context);break;case 22:case 23:ep()}n=n.return}if(He=e,_e=e=xr(e.current,null),$e=Ct=t,Ue=0,rs=null,Xd=pl=Xr=0,ct=Li=null,_r!==null){for(t=0;t<_r.length;t++)if(n=_r[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}_r=null}return e}function rv(e,t){do{var n=_e;try{if(Fd(),sa.current=_a,Fa){for(var r=Ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Fa=!1}if(Yr=0,We=ze=Ie=null,Ni=!1,es=0,Yd.current=null,n===null||n.return===null){Ue=1,rs=t,_e=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=$e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=qf(s);if(d!==null){d.flags&=-257,$f(d,s,a,i,t),d.mode&1&&Hf(i,u,t),t=d,l=u;var w=t.updateQueue;if(w===null){var m=new Set;m.add(l),t.updateQueue=m}else w.add(l);break e}else{if(!(t&1)){Hf(i,u,t),tp();break e}l=Error(_(426))}}else if(Pe&&a.mode&1){var x=qf(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),$f(x,s,a,i,t),jd(Yo(l,a));break e}}i=l=Yo(l,a),Ue!==4&&(Ue=2),Li===null?Li=[i]:Li.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Uy(i,l,t);Ff(i,h);break e;case 1:a=l;var g=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vr===null||!vr.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=By(i,a,t);Ff(i,b);break e}}i=i.return}while(i!==null)}sv(n)}catch(T){t=T,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function ov(){var e=za.current;return za.current=_a,e===null?_a:e}function tp(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(Xr&268435455)&&!(pl&268435455)||rr(He,$e)}function Wa(e,t){var n=pe;pe|=2;var r=ov();(He!==e||$e!==t)&&(In=null,Vr(e,t));do try{G1();break}catch(o){rv(e,o)}while(!0);if(Fd(),pe=n,za.current=r,_e!==null)throw Error(_(261));return He=null,$e=0,Ue}function G1(){for(;_e!==null;)iv(_e)}function K1(){for(;_e!==null&&!xb();)iv(_e)}function iv(e){var t=lv(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?sv(e):_e=t,Yd.current=null}function sv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=W1(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,_e=null;return}}else if(n=B1(n,t,Ct),n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Ue===0&&(Ue=5)}function jr(e,t,n){var r=ye,o=Ft.transition;try{Ft.transition=null,ye=1,Y1(e,t,n,r)}finally{Ft.transition=o,ye=r}return null}function Y1(e,t,n,r){do Io();while(dr!==null);if(pe&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ib(e,i),e===He&&(_e=He=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,uv(Sa,function(){return Io(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var s=ye;ye=1;var a=pe;pe|=4,Yd.current=null,q1(e,n),ev(n,e),g1(lc),Ea=!!ac,lc=ac=null,e.current=n,$1(n),bb(),pe=a,ye=s,Ft.transition=i}else e.current=n;if(Us&&(Us=!1,dr=e,Ba=o),i=e.pendingLanes,i===0&&(vr=null),kb(n.stateNode),mt(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ua)throw Ua=!1,e=Pc,Pc=null,e;return Ba&1&&e.tag!==0&&Io(),i=e.pendingLanes,i&1?e===Rc?ji++:(ji=0,Rc=e):ji=0,Ar(),null}function Io(){if(dr!==null){var e=Ug(Ba),t=Ft.transition,n=ye;try{if(Ft.transition=null,ye=16>e?16:e,dr===null)var r=!1;else{if(e=dr,dr=null,Ba=0,pe&6)throw Error(_(331));var o=pe;for(pe|=4,G=e.current;G!==null;){var i=G,s=i.child;if(G.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(G=u;G!==null;){var c=G;switch(c.tag){case 0:case 11:case 15:Oi(8,c,i)}var p=c.child;if(p!==null)p.return=c,G=p;else for(;G!==null;){c=G;var f=c.sibling,d=c.return;if(Xy(c),c===u){G=null;break}if(f!==null){f.return=d,G=f;break}G=d}}}var w=i.alternate;if(w!==null){var m=w.child;if(m!==null){w.child=null;do{var x=m.sibling;m.sibling=null,m=x}while(m!==null)}}G=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,G=s;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Oi(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,G=h;break e}G=i.return}}var g=e.current;for(G=g;G!==null;){s=G;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,G=y;else e:for(s=g;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dl(9,a)}}catch(T){Oe(a,a.return,T)}if(a===s){G=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,G=b;break e}G=a.return}}if(pe=o,Ar(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{ye=n,Ft.transition=t}}return!1}function om(e,t,n){t=Yo(n,t),t=Uy(e,t,1),e=yr(e,t,1),t=ot(),e!==null&&(fs(e,1,t),mt(e,t))}function Oe(e,t,n){if(e.tag===3)om(e,e,n);else for(;t!==null;){if(t.tag===3){om(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Yo(n,e),e=By(t,e,1),t=yr(t,e,1),e=ot(),t!==null&&(fs(t,1,e),mt(t,e));break}}t=t.return}}function X1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&n,He===e&&($e&n)===n&&(Ue===4||Ue===3&&($e&130023424)===$e&&500>je()-Jd?Vr(e,0):Xd|=n),mt(e,t)}function av(e,t){t===0&&(e.mode&1?(t=Is,Is<<=1,!(Is&130023424)&&(Is=4194304)):t=1);var n=ot();e=_n(e,t),e!==null&&(fs(e,t,n),mt(e,n))}function J1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),av(e,n)}function Z1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),av(e,n)}var lv;lv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pt.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,U1(e,t,n);dt=!!(e.flags&131072)}else dt=!1,Pe&&t.flags&1048576&&py(t,Na,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;la(e,t),e=t.pendingProps;var o=Vo(t,Ze.current);Ro(t,n),o=$d(null,t,r,e,o,n);var i=Vd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(r)?(i=!0,Ia(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ud(t),o.updater=cl,t.stateNode=o,o._reactInternals=t,yc(t,r,e,n),t=xc(null,t,r,!0,i,n)):(t.tag=0,Pe&&i&&Od(t),nt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(la(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=tC(r),e=Gt(r,e),o){case 0:t=wc(null,t,r,e,n);break e;case 1:t=Gf(null,t,r,e,n);break e;case 11:t=Vf(null,t,r,e,n);break e;case 14:t=Qf(null,t,r,Gt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gt(r,o),wc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gt(r,o),Gf(e,t,r,o,n);case 3:e:{if($y(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,vy(e,t),ja(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Yo(Error(_(423)),t),t=Kf(e,t,r,n,o);break e}else if(r!==o){o=Yo(Error(_(424)),t),t=Kf(e,t,r,n,o);break e}else for(kt=gr(t.stateNode.containerInfo.firstChild),Tt=t,Pe=!0,Zt=null,n=gy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qo(),r===o){t=zn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return wy(t),e===null&&mc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,uc(r,o)?s=null:i!==null&&uc(r,i)&&(t.flags|=32),qy(e,t),nt(e,t,s,n),t.child;case 6:return e===null&&mc(t),null;case 13:return Vy(e,t,n);case 4:return Bd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Go(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gt(r,o),Vf(e,t,r,o,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Ce(Oa,r._currentValue),r._currentValue=s,i!==null)if(nn(i.value,s)){if(i.children===o.children&&!pt.current){t=zn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=jn(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),hc(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hc(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}nt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ro(t,n),o=_t(o),r=r(o),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,o=Gt(r,t.pendingProps),o=Gt(r.type,o),Qf(e,t,r,o,n);case 15:return Wy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gt(r,o),la(e,t),t.tag=1,ft(r)?(e=!0,Ia(t)):e=!1,Ro(t,n),zy(t,r,o),yc(t,r,o,n),xc(null,t,r,!0,e,n);case 19:return Qy(e,t,n);case 22:return Hy(e,t,n)}throw Error(_(156,t.tag))};function uv(e,t){return Dg(e,t)}function eC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,r){return new eC(e,t,n,r)}function np(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tC(e){if(typeof e=="function")return np(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bd)return 11;if(e===Cd)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function da(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")np(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case mo:return Qr(n.children,o,i,t);case xd:s=8,o|=8;break;case Bu:return e=Dt(12,n,t,o|2),e.elementType=Bu,e.lanes=i,e;case Wu:return e=Dt(13,n,t,o),e.elementType=Wu,e.lanes=i,e;case Hu:return e=Dt(19,n,t,o),e.elementType=Hu,e.lanes=i,e;case wg:return fl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yg:s=10;break e;case vg:s=9;break e;case bd:s=11;break e;case Cd:s=14;break e;case er:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Dt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Qr(e,t,n,r){return e=Dt(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Dt(22,e,r,t),e.elementType=wg,e.lanes=n,e.stateNode={isHidden:!1},e}function fu(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function mu(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nC(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function rp(e,t,n,r,o,i,s,a,l){return e=new nC(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(i),e}function rC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cv(e){if(!e)return Cr;e=e._reactInternals;e:{if(ro(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ft(n))return cy(e,n,t)}return t}function dv(e,t,n,r,o,i,s,a,l){return e=rp(n,r,!0,e,o,i,s,a,l),e.context=cv(null),n=e.current,r=ot(),o=wr(n),i=jn(r,o),i.callback=t??null,yr(n,i,o),e.current.lanes=o,fs(e,o,r),mt(e,r),e}function ml(e,t,n,r){var o=t.current,i=ot(),s=wr(o);return n=cv(n),t.context===null?t.context=n:t.pendingContext=n,t=jn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yr(o,t,s),e!==null&&(tn(e,o,s,i),ia(e,o,s)),s}function Ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function im(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){im(e,t),(e=e.alternate)&&im(e,t)}function oC(){return null}var pv=typeof reportError=="function"?reportError:function(e){console.error(e)};function ip(e){this._internalRoot=e}hl.prototype.render=ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ml(e,t,null,null)};hl.prototype.unmount=ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jr(function(){ml(null,e,null,null)}),t[Fn]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&$g(e)}};function sp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sm(){}function iC(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ha(s);i.call(u)}}var s=dv(t,r,e,0,null,!1,!1,"",sm);return e._reactRootContainer=s,e[Fn]=s.current,Ki(e.nodeType===8?e.parentNode:e),Jr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ha(l);a.call(u)}}var l=rp(e,0,!1,null,null,!1,!1,"",sm);return e._reactRootContainer=l,e[Fn]=l.current,Ki(e.nodeType===8?e.parentNode:e),Jr(function(){ml(t,l,n,r)}),l}function yl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Ha(s);a.call(l)}}ml(t,s,e,o)}else s=iC(n,t,e,o,r);return Ha(s)}Bg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ki(t.pendingLanes);n!==0&&(Ed(t,n|1),mt(t,je()),!(pe&6)&&(Xo=je()+500,Ar()))}break;case 13:Jr(function(){var r=_n(e,1);if(r!==null){var o=ot();tn(r,e,1,o)}}),op(e,1)}};Td=function(e){if(e.tag===13){var t=_n(e,134217728);if(t!==null){var n=ot();tn(t,e,134217728,n)}op(e,134217728)}};Wg=function(e){if(e.tag===13){var t=wr(e),n=_n(e,t);if(n!==null){var r=ot();tn(n,e,t,r)}op(e,t)}};Hg=function(){return ye};qg=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};Zu=function(e,t,n){switch(t){case"input":if(Vu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=al(r);if(!o)throw Error(_(90));bg(r),Vu(r,o)}}}break;case"textarea":Sg(e,n);break;case"select":t=n.value,t!=null&&Eo(e,!!n.multiple,t,!1)}};Ig=Zd;Mg=Jr;var sC={usingClientEntryPoint:!1,Events:[hs,vo,al,Pg,Rg,Zd]},yi={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aC={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lg(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||oC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bs.isDisabled&&Bs.supportsFiber)try{rl=Bs.inject(aC),xn=Bs}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sC;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(t))throw Error(_(200));return rC(e,t,null,n)};Rt.createRoot=function(e,t){if(!sp(e))throw Error(_(299));var n=!1,r="",o=pv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=rp(e,1,!1,null,null,n,!1,r,o),e[Fn]=t.current,Ki(e.nodeType===8?e.parentNode:e),new ip(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Lg(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Jr(e)};Rt.hydrate=function(e,t,n){if(!gl(t))throw Error(_(200));return yl(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!sp(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=pv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=dv(t,null,e,1,n??null,o,!1,i,s),e[Fn]=t.current,Ki(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new hl(t)};Rt.render=function(e,t,n){if(!gl(t))throw Error(_(200));return yl(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!gl(e))throw Error(_(40));return e._reactRootContainer?(Jr(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Zd;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return yl(e,t,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fv)}catch(e){console.error(e)}}fv(),fg.exports=Rt;var oo=fg.exports;const mv=tl(oo);var hv,am=oo;hv=am.createRoot,am.hydrateRoot;const lC=1,uC=1e6;let hu=0;function cC(){return hu=(hu+1)%Number.MAX_SAFE_INTEGER,hu.toString()}const gu=new Map,lm=e=>{if(gu.has(e))return;const t=setTimeout(()=>{gu.delete(e),Di({type:"REMOVE_TOAST",toastId:e})},uC);gu.set(e,t)},dC=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,lC)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?lm(n):e.toasts.forEach(r=>{lm(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},pa=[];let fa={toasts:[]};function Di(e){fa=dC(fa,e),pa.forEach(t=>{t(fa)})}function pC({...e}){const t=cC(),n=o=>Di({type:"UPDATE_TOAST",toast:{...o,id:t}}),r=()=>Di({type:"DISMISS_TOAST",toastId:t});return Di({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:o=>{o||r()}}}),{id:t,dismiss:r,update:n}}function fC(){const[e,t]=v.useState(fa);return v.useEffect(()=>(pa.push(t),()=>{const n=pa.indexOf(t);n>-1&&pa.splice(n,1)}),[e]),{...e,toast:pC,dismiss:n=>Di({type:"DISMISS_TOAST",toastId:n})}}function ue(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function um(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function gv(...e){return t=>{let n=!1;const r=e.map(o=>{const i=um(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<r.length;o++){const i=r[o];typeof i=="function"?i():um(e[o],null)}}}}function Le(...e){return v.useCallback(gv(...e),e)}function ys(e,t=[]){let n=[];function r(i,s){const a=v.createContext(s),l=n.length;n=[...n,s];const u=p=>{var h;const{scope:f,children:d,...w}=p,m=((h=f==null?void 0:f[e])==null?void 0:h[l])||a,x=v.useMemo(()=>w,Object.values(w));return C.jsx(m.Provider,{value:x,children:d})};u.displayName=i+"Provider";function c(p,f){var m;const d=((m=f==null?void 0:f[e])==null?void 0:m[l])||a,w=v.useContext(d);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[u,c]}const o=()=>{const i=n.map(s=>v.createContext(s));return function(a){const l=(a==null?void 0:a[e])||i;return v.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,mC(o,...t)]}function mC(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const p=l(i)[`__scope${u}`];return{...a,...p}},{});return v.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function os(e){const t=gC(e),n=v.forwardRef((r,o)=>{const{children:i,...s}=r,a=v.Children.toArray(i),l=a.find(vC);if(l){const u=l.props.children,c=a.map(p=>p===l?v.Children.count(u)>1?v.Children.only(null):v.isValidElement(u)?u.props.children:null:p);return C.jsx(t,{...s,ref:o,children:v.isValidElement(u)?v.cloneElement(u,void 0,c):null})}return C.jsx(t,{...s,ref:o,children:i})});return n.displayName=`${e}.Slot`,n}var hC=os("Slot");function gC(e){const t=v.forwardRef((n,r)=>{const{children:o,...i}=n;if(v.isValidElement(o)){const s=xC(o),a=wC(i,o.props);return o.type!==v.Fragment&&(a.ref=r?gv(r,s):s),v.cloneElement(o,a)}return v.Children.count(o)>1?v.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var yv=Symbol("radix.slottable");function yC(e){const t=({children:n})=>C.jsx(C.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=yv,t}function vC(e){return v.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===yv}function wC(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{const l=i(...a);return o(...a),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function xC(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function vv(e){const t=e+"CollectionProvider",[n,r]=ys(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=m=>{const{scope:x,children:h}=m,g=B.useRef(null),y=B.useRef(new Map).current;return C.jsx(o,{scope:x,itemMap:y,collectionRef:g,children:h})};s.displayName=t;const a=e+"CollectionSlot",l=os(a),u=B.forwardRef((m,x)=>{const{scope:h,children:g}=m,y=i(a,h),b=Le(x,y.collectionRef);return C.jsx(l,{ref:b,children:g})});u.displayName=a;const c=e+"CollectionItemSlot",p="data-radix-collection-item",f=os(c),d=B.forwardRef((m,x)=>{const{scope:h,children:g,...y}=m,b=B.useRef(null),T=Le(x,b),k=i(c,h);return B.useEffect(()=>(k.itemMap.set(b,{ref:b,...y}),()=>void k.itemMap.delete(b))),C.jsx(f,{[p]:"",ref:T,children:g})});d.displayName=c;function w(m){const x=i(e+"CollectionConsumer",m);return B.useCallback(()=>{const g=x.collectionRef.current;if(!g)return[];const y=Array.from(g.querySelectorAll(`[${p}]`));return Array.from(x.itemMap.values()).sort((k,A)=>y.indexOf(k.ref.current)-y.indexOf(A.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:u,ItemSlot:d},w,r]}var bC=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],we=bC.reduce((e,t)=>{const n=os(`Primitive.${t}`),r=v.forwardRef((o,i)=>{const{asChild:s,...a}=o,l=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(l,{...a,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function wv(e,t){e&&oo.flushSync(()=>e.dispatchEvent(t))}function rn(e){const t=v.useRef(e);return v.useEffect(()=>{t.current=e}),v.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function CC(e,t=globalThis==null?void 0:globalThis.document){const n=rn(e);v.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var SC="DismissableLayer",Nc="dismissableLayer.update",kC="dismissableLayer.pointerDownOutside",EC="dismissableLayer.focusOutside",cm,xv=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),vl=v.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:s,onDismiss:a,...l}=e,u=v.useContext(xv),[c,p]=v.useState(null),f=(c==null?void 0:c.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,d]=v.useState({}),w=Le(t,A=>p(A)),m=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),h=m.indexOf(x),g=c?m.indexOf(c):-1,y=u.layersWithOutsidePointerEventsDisabled.size>0,b=g>=h,T=AC(A=>{const P=A.target,O=[...u.branches].some(j=>j.contains(P));!b||O||(o==null||o(A),s==null||s(A),A.defaultPrevented||a==null||a())},f),k=PC(A=>{const P=A.target;[...u.branches].some(j=>j.contains(P))||(i==null||i(A),s==null||s(A),A.defaultPrevented||a==null||a())},f);return CC(A=>{g===u.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},f),v.useEffect(()=>{if(c)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(cm=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(c)),u.layers.add(c),dm(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=cm)}},[c,f,n,u]),v.useEffect(()=>()=>{c&&(u.layers.delete(c),u.layersWithOutsidePointerEventsDisabled.delete(c),dm())},[c,u]),v.useEffect(()=>{const A=()=>d({});return document.addEventListener(Nc,A),()=>document.removeEventListener(Nc,A)},[]),C.jsx(we.div,{...l,ref:w,style:{pointerEvents:y?b?"auto":"none":void 0,...e.style},onFocusCapture:ue(e.onFocusCapture,k.onFocusCapture),onBlurCapture:ue(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:ue(e.onPointerDownCapture,T.onPointerDownCapture)})});vl.displayName=SC;var TC="DismissableLayerBranch",bv=v.forwardRef((e,t)=>{const n=v.useContext(xv),r=v.useRef(null),o=Le(t,r);return v.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),C.jsx(we.div,{...e,ref:o})});bv.displayName=TC;function AC(e,t=globalThis==null?void 0:globalThis.document){const n=rn(e),r=v.useRef(!1),o=v.useRef(()=>{});return v.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let l=function(){Cv(kC,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function PC(e,t=globalThis==null?void 0:globalThis.document){const n=rn(e),r=v.useRef(!1);return v.useEffect(()=>{const o=i=>{i.target&&!r.current&&Cv(EC,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function dm(){const e=new CustomEvent(Nc);document.dispatchEvent(e)}function Cv(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?wv(o,i):o.dispatchEvent(i)}var RC=vl,IC=bv,Qe=globalThis!=null&&globalThis.document?v.useLayoutEffect:()=>{},MC="Portal",ap=v.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[o,i]=v.useState(!1);Qe(()=>i(!0),[]);const s=n||o&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?mv.createPortal(C.jsx(we.div,{...r,ref:t}),s):null});ap.displayName=MC;function NC(e,t){return v.useReducer((n,r)=>t[n][r]??n,e)}var lp=e=>{const{present:t,children:n}=e,r=OC(t),o=typeof n=="function"?n({present:r.isPresent}):v.Children.only(n),i=Le(r.ref,LC(o));return typeof n=="function"||r.isPresent?v.cloneElement(o,{ref:i}):null};lp.displayName="Presence";function OC(e){const[t,n]=v.useState(),r=v.useRef(null),o=v.useRef(e),i=v.useRef("none"),s=e?"mounted":"unmounted",[a,l]=NC(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{const u=Ws(r.current);i.current=a==="mounted"?u:"none"},[a]),Qe(()=>{const u=r.current,c=o.current;if(c!==e){const f=i.current,d=Ws(u);e?l("MOUNT"):d==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&f!==d?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Qe(()=>{if(t){let u;const c=t.ownerDocument.defaultView??window,p=d=>{const m=Ws(r.current).includes(d.animationName);if(d.target===t&&m&&(l("ANIMATION_END"),!o.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",u=c.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},f=d=>{d.target===t&&(i.current=Ws(r.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{c.clearTimeout(u),t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:v.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Ws(e){return(e==null?void 0:e.animationName)||"none"}function LC(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var jC=gd[" useInsertionEffect ".trim().toString()]||Qe;function Oc({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,i,s]=DC({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:o;{const c=v.useRef(e!==void 0);v.useEffect(()=>{const p=c.current;p!==a&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=a},[a,r])}const u=v.useCallback(c=>{var p;if(a){const f=FC(c)?c(e):c;f!==e&&((p=s.current)==null||p.call(s,f))}else i(c)},[a,e,i,s]);return[l,u]}function DC({defaultProp:e,onChange:t}){const[n,r]=v.useState(e),o=v.useRef(n),i=v.useRef(t);return jC(()=>{i.current=t},[t]),v.useEffect(()=>{var s;o.current!==n&&((s=i.current)==null||s.call(i,n),o.current=n)},[n,o]),[n,r,i]}function FC(e){return typeof e=="function"}var Sv=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),_C="VisuallyHidden",wl=v.forwardRef((e,t)=>C.jsx(we.span,{...e,ref:t,style:{...Sv,...e.style}}));wl.displayName=_C;var zC=wl,up="ToastProvider",[cp,UC,BC]=vv("Toast"),[kv,xO]=ys("Toast",[BC]),[WC,xl]=kv(up),Ev=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:s}=e,[a,l]=v.useState(null),[u,c]=v.useState(0),p=v.useRef(!1),f=v.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${up}\`. Expected non-empty \`string\`.`),C.jsx(cp.Provider,{scope:t,children:C.jsx(WC,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:i,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:v.useCallback(()=>c(d=>d+1),[]),onToastRemove:v.useCallback(()=>c(d=>d-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:f,children:s})})};Ev.displayName=up;var Tv="ToastViewport",HC=["F8"],Lc="toast.viewportPause",jc="toast.viewportResume",Av=v.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=HC,label:o="Notifications ({hotkey})",...i}=e,s=xl(Tv,n),a=UC(n),l=v.useRef(null),u=v.useRef(null),c=v.useRef(null),p=v.useRef(null),f=Le(t,p,s.onViewportChange),d=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=s.toastCount>0;v.useEffect(()=>{const x=h=>{var y;r.length!==0&&r.every(b=>h[b]||h.code===b)&&((y=p.current)==null||y.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[r]),v.useEffect(()=>{const x=l.current,h=p.current;if(w&&x&&h){const g=()=>{if(!s.isClosePausedRef.current){const k=new CustomEvent(Lc);h.dispatchEvent(k),s.isClosePausedRef.current=!0}},y=()=>{if(s.isClosePausedRef.current){const k=new CustomEvent(jc);h.dispatchEvent(k),s.isClosePausedRef.current=!1}},b=k=>{!x.contains(k.relatedTarget)&&y()},T=()=>{x.contains(document.activeElement)||y()};return x.addEventListener("focusin",g),x.addEventListener("focusout",b),x.addEventListener("pointermove",g),x.addEventListener("pointerleave",T),window.addEventListener("blur",g),window.addEventListener("focus",y),()=>{x.removeEventListener("focusin",g),x.removeEventListener("focusout",b),x.removeEventListener("pointermove",g),x.removeEventListener("pointerleave",T),window.removeEventListener("blur",g),window.removeEventListener("focus",y)}}},[w,s.isClosePausedRef]);const m=v.useCallback(({tabbingDirection:x})=>{const g=a().map(y=>{const b=y.ref.current,T=[b,...nS(b)];return x==="forwards"?T:T.reverse()});return(x==="forwards"?g.reverse():g).flat()},[a]);return v.useEffect(()=>{const x=p.current;if(x){const h=g=>{var T,k,A;const y=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!y){const P=document.activeElement,O=g.shiftKey;if(g.target===x&&O){(T=u.current)==null||T.focus();return}const M=m({tabbingDirection:O?"backwards":"forwards"}),$=M.findIndex(F=>F===P);yu(M.slice($+1))?g.preventDefault():O?(k=u.current)==null||k.focus():(A=c.current)==null||A.focus()}};return x.addEventListener("keydown",h),()=>x.removeEventListener("keydown",h)}},[a,m]),C.jsxs(IC,{ref:l,role:"region","aria-label":o.replace("{hotkey}",d),tabIndex:-1,style:{pointerEvents:w?void 0:"none"},children:[w&&C.jsx(Dc,{ref:u,onFocusFromOutsideViewport:()=>{const x=m({tabbingDirection:"forwards"});yu(x)}}),C.jsx(cp.Slot,{scope:n,children:C.jsx(we.ol,{tabIndex:-1,...i,ref:f})}),w&&C.jsx(Dc,{ref:c,onFocusFromOutsideViewport:()=>{const x=m({tabbingDirection:"backwards"});yu(x)}})]})});Av.displayName=Tv;var Pv="ToastFocusProxy",Dc=v.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=xl(Pv,n);return C.jsx(wl,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const a=s.relatedTarget;!((u=i.viewport)!=null&&u.contains(a))&&r()}})});Dc.displayName=Pv;var vs="Toast",qC="toast.swipeStart",$C="toast.swipeMove",VC="toast.swipeCancel",QC="toast.swipeEnd",Rv=v.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:o,onOpenChange:i,...s}=e,[a,l]=Oc({prop:r,defaultProp:o??!0,onChange:i,caller:vs});return C.jsx(lp,{present:n||a,children:C.jsx(YC,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:rn(e.onPause),onResume:rn(e.onResume),onSwipeStart:ue(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ue(e.onSwipeMove,u=>{const{x:c,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${c}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:ue(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ue(e.onSwipeEnd,u=>{const{x:c,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${c}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),l(!1)})})})});Rv.displayName=vs;var[GC,KC]=kv(vs,{onClose(){}}),YC=v.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:o,open:i,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:c,onSwipeMove:p,onSwipeCancel:f,onSwipeEnd:d,...w}=e,m=xl(vs,n),[x,h]=v.useState(null),g=Le(t,F=>h(F)),y=v.useRef(null),b=v.useRef(null),T=o||m.duration,k=v.useRef(0),A=v.useRef(T),P=v.useRef(0),{onToastAdd:O,onToastRemove:j}=m,D=rn(()=>{var W;(x==null?void 0:x.contains(document.activeElement))&&((W=m.viewport)==null||W.focus()),s()}),M=v.useCallback(F=>{!F||F===1/0||(window.clearTimeout(P.current),k.current=new Date().getTime(),P.current=window.setTimeout(D,F))},[D]);v.useEffect(()=>{const F=m.viewport;if(F){const W=()=>{M(A.current),u==null||u()},q=()=>{const V=new Date().getTime()-k.current;A.current=A.current-V,window.clearTimeout(P.current),l==null||l()};return F.addEventListener(Lc,q),F.addEventListener(jc,W),()=>{F.removeEventListener(Lc,q),F.removeEventListener(jc,W)}}},[m.viewport,T,l,u,M]),v.useEffect(()=>{i&&!m.isClosePausedRef.current&&M(T)},[i,T,m.isClosePausedRef,M]),v.useEffect(()=>(O(),()=>j()),[O,j]);const $=v.useMemo(()=>x?Dv(x):null,[x]);return m.viewport?C.jsxs(C.Fragment,{children:[$&&C.jsx(XC,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:$}),C.jsx(GC,{scope:n,onClose:D,children:oo.createPortal(C.jsx(cp.ItemSlot,{scope:n,children:C.jsx(RC,{asChild:!0,onEscapeKeyDown:ue(a,()=>{m.isFocusedToastEscapeKeyDownRef.current||D(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:C.jsx(we.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":m.swipeDirection,...w,ref:g,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ue(e.onKeyDown,F=>{F.key==="Escape"&&(a==null||a(F.nativeEvent),F.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:ue(e.onPointerDown,F=>{F.button===0&&(y.current={x:F.clientX,y:F.clientY})}),onPointerMove:ue(e.onPointerMove,F=>{if(!y.current)return;const W=F.clientX-y.current.x,q=F.clientY-y.current.y,V=!!b.current,R=["left","right"].includes(m.swipeDirection),N=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,S=R?N(0,W):0,K=R?0:N(0,q),Q=F.pointerType==="touch"?10:2,E={x:S,y:K},Y={originalEvent:F,delta:E};V?(b.current=E,Hs($C,p,Y,{discrete:!1})):pm(E,m.swipeDirection,Q)?(b.current=E,Hs(qC,c,Y,{discrete:!1}),F.target.setPointerCapture(F.pointerId)):(Math.abs(W)>Q||Math.abs(q)>Q)&&(y.current=null)}),onPointerUp:ue(e.onPointerUp,F=>{const W=b.current,q=F.target;if(q.hasPointerCapture(F.pointerId)&&q.releasePointerCapture(F.pointerId),b.current=null,y.current=null,W){const V=F.currentTarget,R={originalEvent:F,delta:W};pm(W,m.swipeDirection,m.swipeThreshold)?Hs(QC,d,R,{discrete:!0}):Hs(VC,f,R,{discrete:!0}),V.addEventListener("click",N=>N.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),XC=e=>{const{__scopeToast:t,children:n,...r}=e,o=xl(vs,t),[i,s]=v.useState(!1),[a,l]=v.useState(!1);return eS(()=>s(!0)),v.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),a?null:C.jsx(ap,{asChild:!0,children:C.jsx(wl,{...r,children:i&&C.jsxs(C.Fragment,{children:[o.label," ",n]})})})},JC="ToastTitle",Iv=v.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return C.jsx(we.div,{...r,ref:t})});Iv.displayName=JC;var ZC="ToastDescription",Mv=v.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return C.jsx(we.div,{...r,ref:t})});Mv.displayName=ZC;var Nv="ToastAction",Ov=v.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?C.jsx(jv,{altText:n,asChild:!0,children:C.jsx(dp,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Nv}\`. Expected non-empty \`string\`.`),null)});Ov.displayName=Nv;var Lv="ToastClose",dp=v.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,o=KC(Lv,n);return C.jsx(jv,{asChild:!0,children:C.jsx(we.button,{type:"button",...r,ref:t,onClick:ue(e.onClick,o.onClose)})})});dp.displayName=Lv;var jv=v.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...o}=e;return C.jsx(we.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function Dv(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),tS(r)){const o=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";if(!o)if(i){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...Dv(r))}}),t}function Hs(e,t,n,{discrete:r}){const o=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?wv(o,i):o.dispatchEvent(i)}var pm=(e,t,n=0)=>{const r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return t==="left"||t==="right"?i&&r>n:!i&&o>n};function eS(e=()=>{}){const t=rn(e);Qe(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function tS(e){return e.nodeType===e.ELEMENT_NODE}function nS(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function yu(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var rS=Ev,Fv=Av,_v=Rv,zv=Iv,Uv=Mv,Bv=Ov,Wv=dp;function Hv(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Hv(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function qv(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Hv(e))&&(r&&(r+=" "),r+=t);return r}const fm=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,mm=qv,pp=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return mm(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,s=Object.keys(o).map(u=>{const c=n==null?void 0:n[u],p=i==null?void 0:i[u];if(c===null)return null;const f=fm(c)||fm(p);return o[u][f]}),a=n&&Object.entries(n).reduce((u,c)=>{let[p,f]=c;return f===void 0||(u[p]=f),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,c)=>{let{class:p,className:f,...d}=c;return Object.entries(d).every(w=>{let[m,x]=w;return Array.isArray(x)?x.includes({...i,...a}[m]):{...i,...a}[m]===x})?[...u,p,f]:u},[]);return mm(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$v=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a},l)=>v.createElement("svg",{ref:l,...iS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:$v("lucide",o),...a},[...s.map(([u,c])=>v.createElement(u,c)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=(e,t)=>{const n=v.forwardRef(({className:r,...o},i)=>v.createElement(sS,{ref:i,iconNode:t,className:$v(`lucide-${oS(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=yt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=yt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=yt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=yt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=yt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=yt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=yt("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=yt("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=yt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=yt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=yt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=yt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=yt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=yt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),mp="-",gS=e=>{const t=vS(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const a=s.split(mp);return a[0]===""&&a.length!==1&&a.shift(),Yv(a,t)||yS(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},Yv=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?Yv(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(mp);return(s=t.validators.find(({validator:a})=>a(i)))==null?void 0:s.classGroupId},hm=/^\[(.+)\]$/,yS=e=>{if(hm.test(e)){const t=hm.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},vS=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return xS(Object.entries(e.classGroups),n).forEach(([i,s])=>{Fc(s,r,i,t)}),r},Fc=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:gm(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(wS(o)){Fc(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,s])=>{Fc(s,gm(t,i),n,r)})})},gm=(e,t)=>{let n=e;return t.split(mp).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},wS=e=>e.isThemeGetter,xS=(e,t)=>t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([s,a])=>[t+s,a])):i);return[n,o]}):e,bS=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return o(i,s),s},set(i,s){n.has(i)?n.set(i,s):o(i,s)}}},Xv="!",CS=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length,s=a=>{const l=[];let u=0,c=0,p;for(let x=0;x<a.length;x++){let h=a[x];if(u===0){if(h===o&&(r||a.slice(x,x+i)===t)){l.push(a.slice(c,x)),c=x+i;continue}if(h==="/"){p=x;continue}}h==="["?u++:h==="]"&&u--}const f=l.length===0?a:a.substring(c),d=f.startsWith(Xv),w=d?f.substring(1):f,m=p&&p>c?p-c:void 0;return{modifiers:l,hasImportantModifier:d,baseClassName:w,maybePostfixModifierPosition:m}};return n?a=>n({className:a,parseClassName:s}):s},SS=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},kS=e=>({cache:bS(e.cacheSize),parseClassName:CS(e),...gS(e)}),ES=/\s+/,TS=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=[],s=e.trim().split(ES);let a="";for(let l=s.length-1;l>=0;l-=1){const u=s[l],{modifiers:c,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:d}=n(u);let w=!!d,m=r(w?f.substring(0,d):f);if(!m){if(!w){a=u+(a.length>0?" "+a:a);continue}if(m=r(f),!m){a=u+(a.length>0?" "+a:a);continue}w=!1}const x=SS(c).join(":"),h=p?x+Xv:x,g=h+m;if(i.includes(g))continue;i.push(g);const y=o(m,w);for(let b=0;b<y.length;++b){const T=y[b];i.push(h+T)}a=u+(a.length>0?" "+a:a)}return a};function AS(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Jv(t))&&(r&&(r+=" "),r+=n);return r}const Jv=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Jv(e[r]))&&(n&&(n+=" "),n+=t);return n};function PS(e,...t){let n,r,o,i=s;function s(l){const u=t.reduce((c,p)=>p(c),e());return n=kS(u),r=n.cache.get,o=n.cache.set,i=a,a(l)}function a(l){const u=r(l);if(u)return u;const c=TS(l,n);return o(l,c),c}return function(){return i(AS.apply(null,arguments))}}const ke=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Zv=/^\[(?:([a-z-]+):)?(.+)\]$/i,RS=/^\d+\/\d+$/,IS=new Set(["px","full","screen"]),MS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,NS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,OS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,LS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Pn=e=>Mo(e)||IS.has(e)||RS.test(e),Kn=e=>ri(e,"length",HS),Mo=e=>!!e&&!Number.isNaN(Number(e)),vu=e=>ri(e,"number",Mo),vi=e=>!!e&&Number.isInteger(Number(e)),DS=e=>e.endsWith("%")&&Mo(e.slice(0,-1)),te=e=>Zv.test(e),Yn=e=>MS.test(e),FS=new Set(["length","size","percentage"]),_S=e=>ri(e,FS,ew),zS=e=>ri(e,"position",ew),US=new Set(["image","url"]),BS=e=>ri(e,US,$S),WS=e=>ri(e,"",qS),wi=()=>!0,ri=(e,t,n)=>{const r=Zv.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},HS=e=>NS.test(e)&&!OS.test(e),ew=()=>!1,qS=e=>LS.test(e),$S=e=>jS.test(e),VS=()=>{const e=ke("colors"),t=ke("spacing"),n=ke("blur"),r=ke("brightness"),o=ke("borderColor"),i=ke("borderRadius"),s=ke("borderSpacing"),a=ke("borderWidth"),l=ke("contrast"),u=ke("grayscale"),c=ke("hueRotate"),p=ke("invert"),f=ke("gap"),d=ke("gradientColorStops"),w=ke("gradientColorStopPositions"),m=ke("inset"),x=ke("margin"),h=ke("opacity"),g=ke("padding"),y=ke("saturate"),b=ke("scale"),T=ke("sepia"),k=ke("skew"),A=ke("space"),P=ke("translate"),O=()=>["auto","contain","none"],j=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",te,t],M=()=>[te,t],$=()=>["",Pn,Kn],F=()=>["auto",Mo,te],W=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],R=()=>["start","end","center","between","around","evenly","stretch"],N=()=>["","0",te],S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[Mo,te];return{cacheSize:500,separator:":",theme:{colors:[wi],spacing:[Pn,Kn],blur:["none","",Yn,te],brightness:K(),borderColor:[e],borderRadius:["none","","full",Yn,te],borderSpacing:M(),borderWidth:$(),contrast:K(),grayscale:N(),hueRotate:K(),invert:N(),gap:M(),gradientColorStops:[e],gradientColorStopPositions:[DS,Kn],inset:D(),margin:D(),opacity:K(),padding:M(),saturate:K(),scale:K(),sepia:N(),skew:K(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",te]}],container:["container"],columns:[{columns:[Yn]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...W(),te]}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",vi,te]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",te]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",vi,te]}],"grid-cols":[{"grid-cols":[wi]}],"col-start-end":[{col:["auto",{span:["full",vi,te]},te]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[wi]}],"row-start-end":[{row:["auto",{span:[vi,te]},te]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",te]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...R()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...R(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...R(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",te,t]}],"min-w":[{"min-w":[te,t,"min","max","fit"]}],"max-w":[{"max-w":[te,t,"none","full","min","max","fit","prose",{screen:[Yn]},Yn]}],h:[{h:[te,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[te,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Yn,Kn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",vu]}],"font-family":[{font:[wi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",te]}],"line-clamp":[{"line-clamp":["none",Mo,vu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Pn,te]}],"list-image":[{"list-image":["none",te]}],"list-style-type":[{list:["none","disc","decimal",te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Pn,Kn]}],"underline-offset":[{"underline-offset":["auto",Pn,te]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...W(),zS]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_S]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},BS]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[d]}],"gradient-via":[{via:[d]}],"gradient-to":[{to:[d]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:q()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[Pn,te]}],"outline-w":[{outline:[Pn,Kn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[Pn,Kn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Yn,WS]}],"shadow-color":[{shadow:[wi]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Yn,te]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[y]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",te]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",te]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[vi,te]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",te]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Pn,Kn,vu]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},QS=PS(VS);function xe(...e){return QS(qv(e))}const GS=rS,tw=v.forwardRef(({className:e,...t},n)=>C.jsx(Fv,{ref:n,className:xe("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));tw.displayName=Fv.displayName;const KS=pp("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),nw=v.forwardRef(({className:e,variant:t,...n},r)=>C.jsx(_v,{ref:r,className:xe(KS({variant:t}),e),...n}));nw.displayName=_v.displayName;const YS=v.forwardRef(({className:e,...t},n)=>C.jsx(Bv,{ref:n,className:xe("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));YS.displayName=Bv.displayName;const rw=v.forwardRef(({className:e,...t},n)=>C.jsx(Wv,{ref:n,className:xe("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:C.jsx(Kv,{className:"h-4 w-4"})}));rw.displayName=Wv.displayName;const ow=v.forwardRef(({className:e,...t},n)=>C.jsx(zv,{ref:n,className:xe("text-sm font-semibold",e),...t}));ow.displayName=zv.displayName;const iw=v.forwardRef(({className:e,...t},n)=>C.jsx(Uv,{ref:n,className:xe("text-sm opacity-90",e),...t}));iw.displayName=Uv.displayName;function XS(){const{toasts:e}=fC();return C.jsxs(GS,{children:[e.map(function({id:t,title:n,description:r,action:o,...i}){return C.jsxs(nw,{...i,children:[C.jsxs("div",{className:"grid gap-1",children:[n&&C.jsx(ow,{children:n}),r&&C.jsx(iw,{children:r})]}),o,C.jsx(rw,{})]},t)}),C.jsx(tw,{})]})}var qa=["light","dark"],hp="(prefers-color-scheme: dark)",JS=typeof window>"u",gp=v.createContext(void 0),ZS={setTheme:e=>{},themes:[]},sw=()=>{var e;return(e=v.useContext(gp))!=null?e:ZS},ek=e=>v.useContext(gp)?e.children:v.createElement(nk,{...e}),tk=["light","dark"],nk=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:o="theme",themes:i=tk,defaultTheme:s=n?"system":"light",attribute:a="data-theme",value:l,children:u,nonce:c})=>{let[p,f]=v.useState(()=>ym(o,s)),[d,w]=v.useState(()=>ym(o)),m=l?Object.values(l):i,x=v.useCallback(b=>{let T=b;if(!T)return;b==="system"&&n&&(T=vm());let k=l?l[T]:T,A=t?ok():null,P=document.documentElement;if(a==="class"?(P.classList.remove(...m),k&&P.classList.add(k)):k?P.setAttribute(a,k):P.removeAttribute(a),r){let O=qa.includes(s)?s:null,j=qa.includes(T)?T:O;P.style.colorScheme=j}A==null||A()},[]),h=v.useCallback(b=>{let T=typeof b=="function"?b(b):b;f(T);try{localStorage.setItem(o,T)}catch{}},[e]),g=v.useCallback(b=>{let T=vm(b);w(T),p==="system"&&n&&!e&&x("system")},[p,e]);v.useEffect(()=>{let b=window.matchMedia(hp);return b.addListener(g),g(b),()=>b.removeListener(g)},[g]),v.useEffect(()=>{let b=T=>{if(T.key!==o)return;let k=T.newValue||s;h(k)};return window.addEventListener("storage",b),()=>window.removeEventListener("storage",b)},[h]),v.useEffect(()=>{x(e??p)},[e,p]);let y=v.useMemo(()=>({theme:p,setTheme:h,forcedTheme:e,resolvedTheme:p==="system"?d:p,themes:n?[...i,"system"]:i,systemTheme:n?d:void 0}),[p,h,e,d,n,i]);return v.createElement(gp.Provider,{value:y},v.createElement(rk,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:o,themes:i,defaultTheme:s,attribute:a,value:l,children:u,attrs:m,nonce:c}),u)},rk=v.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:i,value:s,attrs:a,nonce:l})=>{let u=i==="system",c=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=o?qa.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=(w,m=!1,x=!0)=>{let h=s?s[w]:w,g=m?w+"|| ''":`'${h}'`,y="";return o&&x&&!m&&qa.includes(w)&&(y+=`d.style.colorScheme = '${w}';`),n==="class"?m||h?y+=`c.add(${g})`:y+="null":h&&(y+=`d[s](n,${g})`),y},d=e?`!function(){${c}${f(e)}}()`:r?`!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${hp}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}${u?"":"else{"+f(i,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}else{${f(i,!1,!1)};}${p}}catch(t){}}();`;return v.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:d}})}),ym=(e,t)=>{if(JS)return;let n;try{n=localStorage.getItem(e)||void 0}catch{}return n||t},ok=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},vm=e=>(e||(e=window.matchMedia(hp)),e.matches?"dark":"light"),ik=e=>{switch(e){case"success":return lk;case"info":return ck;case"warning":return uk;case"error":return dk;default:return null}},sk=Array(12).fill(0),ak=({visible:e,className:t})=>B.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},B.createElement("div",{className:"sonner-spinner"},sk.map((n,r)=>B.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),lk=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),uk=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),ck=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),dk=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),pk=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},B.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),B.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),fk=()=>{let[e,t]=B.useState(document.hidden);return B.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},_c=1,mk=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:_c++,i=this.toasts.find(a=>a.id===o),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),i?this.toasts=this.toasts.map(a=>a.id===o?(this.publish({...a,...e,id:o,title:n}),{...a,...e,id:o,dismissible:s,title:n}):a):this.addToast({title:n,...r,dismissible:s,id:o}),o},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0,i,s=r.then(async l=>{if(i=["resolve",l],B.isValidElement(l))o=!1,this.create({id:n,type:"default",message:l});else if(gk(l)&&!l.ok){o=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,c=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:n,type:"error",message:u,description:c})}else if(t.success!==void 0){o=!1;let u=typeof t.success=="function"?await t.success(l):t.success,c=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"success",message:u,description:c})}}).catch(async l=>{if(i=["reject",l],t.error!==void 0){o=!1;let u=typeof t.error=="function"?await t.error(l):t.error,c=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"error",message:u,description:c})}}).finally(()=>{var l;o&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)}),a=()=>new Promise((l,u)=>s.then(()=>i[0]==="reject"?u(i[1]):l(i[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||_c++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},ut=new mk,hk=(e,t)=>{let n=(t==null?void 0:t.id)||_c++;return ut.addToast({title:e,...t,id:n}),n},gk=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",yk=hk,vk=()=>ut.toasts,wk=()=>ut.getActiveToasts();Object.assign(yk,{success:ut.success,info:ut.info,warning:ut.warning,error:ut.error,custom:ut.custom,message:ut.message,promise:ut.promise,dismiss:ut.dismiss,loading:ut.loading},{getHistory:vk,getToasts:wk});function xk(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}xk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function qs(e){return e.label!==void 0}var bk=3,Ck="32px",Sk="16px",wm=4e3,kk=356,Ek=14,Tk=20,Ak=200;function Vt(...e){return e.filter(Boolean).join(" ")}function Pk(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Rk=e=>{var t,n,r,o,i,s,a,l,u,c,p;let{invert:f,toast:d,unstyled:w,interacting:m,setHeights:x,visibleToasts:h,heights:g,index:y,toasts:b,expanded:T,removeToast:k,defaultRichColors:A,closeButton:P,style:O,cancelButtonStyle:j,actionButtonStyle:D,className:M="",descriptionClassName:$="",duration:F,position:W,gap:q,loadingIcon:V,expandByDefault:R,classNames:N,icons:S,closeButtonAriaLabel:K="Close toast",pauseWhenPageIsHidden:Q}=e,[E,Y]=B.useState(null),[de,re]=B.useState(null),[H,ie]=B.useState(!1),[ge,se]=B.useState(!1),[oe,ce]=B.useState(!1),[Be,at]=B.useState(!1),[an,Ut]=B.useState(!1),[ln,Mr]=B.useState(0),[Tn,ui]=B.useState(0),Nr=B.useRef(d.duration||F||wm),Ss=B.useRef(null),An=B.useRef(null),zl=y===0,Ul=y+1<=h,I=d.type,U=d.dismissible!==!1,J=d.className||"",ae=d.descriptionClassName||"",fe=B.useMemo(()=>g.findIndex(Z=>Z.toastId===d.id)||0,[g,d.id]),wt=B.useMemo(()=>{var Z;return(Z=d.closeButton)!=null?Z:P},[d.closeButton,P]),un=B.useMemo(()=>d.duration||F||wm,[d.duration,F]),xt=B.useRef(0),Mt=B.useRef(0),Hn=B.useRef(0),De=B.useRef(null),[qn,Bt]=W.split("-"),Kp=B.useMemo(()=>g.reduce((Z,ve,Ae)=>Ae>=fe?Z:Z+ve.height,0),[g,fe]),Yp=fk(),L0=d.invert||f,Bl=I==="loading";Mt.current=B.useMemo(()=>fe*q+Kp,[fe,Kp]),B.useEffect(()=>{Nr.current=un},[un]),B.useEffect(()=>{ie(!0)},[]),B.useEffect(()=>{let Z=An.current;if(Z){let ve=Z.getBoundingClientRect().height;return ui(ve),x(Ae=>[{toastId:d.id,height:ve,position:d.position},...Ae]),()=>x(Ae=>Ae.filter(Wt=>Wt.toastId!==d.id))}},[x,d.id]),B.useLayoutEffect(()=>{if(!H)return;let Z=An.current,ve=Z.style.height;Z.style.height="auto";let Ae=Z.getBoundingClientRect().height;Z.style.height=ve,ui(Ae),x(Wt=>Wt.find(Ht=>Ht.toastId===d.id)?Wt.map(Ht=>Ht.toastId===d.id?{...Ht,height:Ae}:Ht):[{toastId:d.id,height:Ae,position:d.position},...Wt])},[H,d.title,d.description,x,d.id]);let $n=B.useCallback(()=>{se(!0),Mr(Mt.current),x(Z=>Z.filter(ve=>ve.toastId!==d.id)),setTimeout(()=>{k(d)},Ak)},[d,k,x,Mt]);B.useEffect(()=>{if(d.promise&&I==="loading"||d.duration===1/0||d.type==="loading")return;let Z;return T||m||Q&&Yp?(()=>{if(Hn.current<xt.current){let ve=new Date().getTime()-xt.current;Nr.current=Nr.current-ve}Hn.current=new Date().getTime()})():Nr.current!==1/0&&(xt.current=new Date().getTime(),Z=setTimeout(()=>{var ve;(ve=d.onAutoClose)==null||ve.call(d,d),$n()},Nr.current)),()=>clearTimeout(Z)},[T,m,d,I,Q,Yp,$n]),B.useEffect(()=>{d.delete&&$n()},[$n,d.delete]);function j0(){var Z,ve,Ae;return S!=null&&S.loading?B.createElement("div",{className:Vt(N==null?void 0:N.loader,(Z=d==null?void 0:d.classNames)==null?void 0:Z.loader,"sonner-loader"),"data-visible":I==="loading"},S.loading):V?B.createElement("div",{className:Vt(N==null?void 0:N.loader,(ve=d==null?void 0:d.classNames)==null?void 0:ve.loader,"sonner-loader"),"data-visible":I==="loading"},V):B.createElement(ak,{className:Vt(N==null?void 0:N.loader,(Ae=d==null?void 0:d.classNames)==null?void 0:Ae.loader),visible:I==="loading"})}return B.createElement("li",{tabIndex:0,ref:An,className:Vt(M,J,N==null?void 0:N.toast,(t=d==null?void 0:d.classNames)==null?void 0:t.toast,N==null?void 0:N.default,N==null?void 0:N[I],(n=d==null?void 0:d.classNames)==null?void 0:n[I]),"data-sonner-toast":"","data-rich-colors":(r=d.richColors)!=null?r:A,"data-styled":!(d.jsx||d.unstyled||w),"data-mounted":H,"data-promise":!!d.promise,"data-swiped":an,"data-removed":ge,"data-visible":Ul,"data-y-position":qn,"data-x-position":Bt,"data-index":y,"data-front":zl,"data-swiping":oe,"data-dismissible":U,"data-type":I,"data-invert":L0,"data-swipe-out":Be,"data-swipe-direction":de,"data-expanded":!!(T||R&&H),style:{"--index":y,"--toasts-before":y,"--z-index":b.length-y,"--offset":`${ge?ln:Mt.current}px`,"--initial-height":R?"auto":`${Tn}px`,...O,...d.style},onDragEnd:()=>{ce(!1),Y(null),De.current=null},onPointerDown:Z=>{Bl||!U||(Ss.current=new Date,Mr(Mt.current),Z.target.setPointerCapture(Z.pointerId),Z.target.tagName!=="BUTTON"&&(ce(!0),De.current={x:Z.clientX,y:Z.clientY}))},onPointerUp:()=>{var Z,ve,Ae,Wt;if(Be||!U)return;De.current=null;let Ht=Number(((Z=An.current)==null?void 0:Z.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Vn=Number(((ve=An.current)==null?void 0:ve.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Or=new Date().getTime()-((Ae=Ss.current)==null?void 0:Ae.getTime()),qt=E==="x"?Ht:Vn,Qn=Math.abs(qt)/Or;if(Math.abs(qt)>=Tk||Qn>.11){Mr(Mt.current),(Wt=d.onDismiss)==null||Wt.call(d,d),re(E==="x"?Ht>0?"right":"left":Vn>0?"down":"up"),$n(),at(!0),Ut(!1);return}ce(!1),Y(null)},onPointerMove:Z=>{var ve,Ae,Wt,Ht;if(!De.current||!U||((ve=window.getSelection())==null?void 0:ve.toString().length)>0)return;let Vn=Z.clientY-De.current.y,Or=Z.clientX-De.current.x,qt=(Ae=e.swipeDirections)!=null?Ae:Pk(W);!E&&(Math.abs(Or)>1||Math.abs(Vn)>1)&&Y(Math.abs(Or)>Math.abs(Vn)?"x":"y");let Qn={x:0,y:0};E==="y"?(qt.includes("top")||qt.includes("bottom"))&&(qt.includes("top")&&Vn<0||qt.includes("bottom")&&Vn>0)&&(Qn.y=Vn):E==="x"&&(qt.includes("left")||qt.includes("right"))&&(qt.includes("left")&&Or<0||qt.includes("right")&&Or>0)&&(Qn.x=Or),(Math.abs(Qn.x)>0||Math.abs(Qn.y)>0)&&Ut(!0),(Wt=An.current)==null||Wt.style.setProperty("--swipe-amount-x",`${Qn.x}px`),(Ht=An.current)==null||Ht.style.setProperty("--swipe-amount-y",`${Qn.y}px`)}},wt&&!d.jsx?B.createElement("button",{"aria-label":K,"data-disabled":Bl,"data-close-button":!0,onClick:Bl||!U?()=>{}:()=>{var Z;$n(),(Z=d.onDismiss)==null||Z.call(d,d)},className:Vt(N==null?void 0:N.closeButton,(o=d==null?void 0:d.classNames)==null?void 0:o.closeButton)},(i=S==null?void 0:S.close)!=null?i:pk):null,d.jsx||v.isValidElement(d.title)?d.jsx?d.jsx:typeof d.title=="function"?d.title():d.title:B.createElement(B.Fragment,null,I||d.icon||d.promise?B.createElement("div",{"data-icon":"",className:Vt(N==null?void 0:N.icon,(s=d==null?void 0:d.classNames)==null?void 0:s.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||j0():null,d.type!=="loading"?d.icon||(S==null?void 0:S[I])||ik(I):null):null,B.createElement("div",{"data-content":"",className:Vt(N==null?void 0:N.content,(a=d==null?void 0:d.classNames)==null?void 0:a.content)},B.createElement("div",{"data-title":"",className:Vt(N==null?void 0:N.title,(l=d==null?void 0:d.classNames)==null?void 0:l.title)},typeof d.title=="function"?d.title():d.title),d.description?B.createElement("div",{"data-description":"",className:Vt($,ae,N==null?void 0:N.description,(u=d==null?void 0:d.classNames)==null?void 0:u.description)},typeof d.description=="function"?d.description():d.description):null),v.isValidElement(d.cancel)?d.cancel:d.cancel&&qs(d.cancel)?B.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||j,onClick:Z=>{var ve,Ae;qs(d.cancel)&&U&&((Ae=(ve=d.cancel).onClick)==null||Ae.call(ve,Z),$n())},className:Vt(N==null?void 0:N.cancelButton,(c=d==null?void 0:d.classNames)==null?void 0:c.cancelButton)},d.cancel.label):null,v.isValidElement(d.action)?d.action:d.action&&qs(d.action)?B.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||D,onClick:Z=>{var ve,Ae;qs(d.action)&&((Ae=(ve=d.action).onClick)==null||Ae.call(ve,Z),!Z.defaultPrevented&&$n())},className:Vt(N==null?void 0:N.actionButton,(p=d==null?void 0:d.classNames)==null?void 0:p.actionButton)},d.action.label):null))};function xm(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Ik(e,t){let n={};return[e,t].forEach((r,o)=>{let i=o===1,s=i?"--mobile-offset":"--offset",a=i?Sk:Ck;function l(u){["top","right","bottom","left"].forEach(c=>{n[`${s}-${c}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${s}-${u}`]=a:n[`${s}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):l(a)}),n}var Mk=v.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:o=["altKey","KeyT"],expand:i,closeButton:s,className:a,offset:l,mobileOffset:u,theme:c="light",richColors:p,duration:f,style:d,visibleToasts:w=bk,toastOptions:m,dir:x=xm(),gap:h=Ek,loadingIcon:g,icons:y,containerAriaLabel:b="Notifications",pauseWhenPageIsHidden:T}=e,[k,A]=B.useState([]),P=B.useMemo(()=>Array.from(new Set([r].concat(k.filter(Q=>Q.position).map(Q=>Q.position)))),[k,r]),[O,j]=B.useState([]),[D,M]=B.useState(!1),[$,F]=B.useState(!1),[W,q]=B.useState(c!=="system"?c:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),V=B.useRef(null),R=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),N=B.useRef(null),S=B.useRef(!1),K=B.useCallback(Q=>{A(E=>{var Y;return(Y=E.find(de=>de.id===Q.id))!=null&&Y.delete||ut.dismiss(Q.id),E.filter(({id:de})=>de!==Q.id)})},[]);return B.useEffect(()=>ut.subscribe(Q=>{if(Q.dismiss){A(E=>E.map(Y=>Y.id===Q.id?{...Y,delete:!0}:Y));return}setTimeout(()=>{mv.flushSync(()=>{A(E=>{let Y=E.findIndex(de=>de.id===Q.id);return Y!==-1?[...E.slice(0,Y),{...E[Y],...Q},...E.slice(Y+1)]:[Q,...E]})})})}),[]),B.useEffect(()=>{if(c!=="system"){q(c);return}if(c==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?q("dark"):q("light")),typeof window>"u")return;let Q=window.matchMedia("(prefers-color-scheme: dark)");try{Q.addEventListener("change",({matches:E})=>{q(E?"dark":"light")})}catch{Q.addListener(({matches:Y})=>{try{q(Y?"dark":"light")}catch(de){console.error(de)}})}},[c]),B.useEffect(()=>{k.length<=1&&M(!1)},[k]),B.useEffect(()=>{let Q=E=>{var Y,de;o.every(re=>E[re]||E.code===re)&&(M(!0),(Y=V.current)==null||Y.focus()),E.code==="Escape"&&(document.activeElement===V.current||(de=V.current)!=null&&de.contains(document.activeElement))&&M(!1)};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[o]),B.useEffect(()=>{if(V.current)return()=>{N.current&&(N.current.focus({preventScroll:!0}),N.current=null,S.current=!1)}},[V.current]),B.createElement("section",{ref:t,"aria-label":`${b} ${R}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},P.map((Q,E)=>{var Y;let[de,re]=Q.split("-");return k.length?B.createElement("ol",{key:Q,dir:x==="auto"?xm():x,tabIndex:-1,ref:V,className:a,"data-sonner-toaster":!0,"data-theme":W,"data-y-position":de,"data-lifted":D&&k.length>1&&!i,"data-x-position":re,style:{"--front-toast-height":`${((Y=O[0])==null?void 0:Y.height)||0}px`,"--width":`${kk}px`,"--gap":`${h}px`,...d,...Ik(l,u)},onBlur:H=>{S.current&&!H.currentTarget.contains(H.relatedTarget)&&(S.current=!1,N.current&&(N.current.focus({preventScroll:!0}),N.current=null))},onFocus:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||S.current||(S.current=!0,N.current=H.relatedTarget)},onMouseEnter:()=>M(!0),onMouseMove:()=>M(!0),onMouseLeave:()=>{$||M(!1)},onDragEnd:()=>M(!1),onPointerDown:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||F(!0)},onPointerUp:()=>F(!1)},k.filter(H=>!H.position&&E===0||H.position===Q).map((H,ie)=>{var ge,se;return B.createElement(Rk,{key:H.id,icons:y,index:ie,toast:H,defaultRichColors:p,duration:(ge=m==null?void 0:m.duration)!=null?ge:f,className:m==null?void 0:m.className,descriptionClassName:m==null?void 0:m.descriptionClassName,invert:n,visibleToasts:w,closeButton:(se=m==null?void 0:m.closeButton)!=null?se:s,interacting:$,position:Q,style:m==null?void 0:m.style,unstyled:m==null?void 0:m.unstyled,classNames:m==null?void 0:m.classNames,cancelButtonStyle:m==null?void 0:m.cancelButtonStyle,actionButtonStyle:m==null?void 0:m.actionButtonStyle,removeToast:K,toasts:k.filter(oe=>oe.position==H.position),heights:O.filter(oe=>oe.position==H.position),setHeights:j,expandByDefault:i,gap:h,loadingIcon:g,expanded:D,pauseWhenPageIsHidden:T,swipeDirections:e.swipeDirections})})):null}))});const Nk=({...e})=>{const{theme:t="system"}=sw();return C.jsx(Mk,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var Ok=gd[" useId ".trim().toString()]||(()=>{}),Lk=0;function yp(e){const[t,n]=v.useState(Ok());return Qe(()=>{n(r=>r??String(Lk++))},[e]),t?`radix-${t}`:""}const jk=["top","right","bottom","left"],Sr=Math.min,St=Math.max,$a=Math.round,$s=Math.floor,Cn=e=>({x:e,y:e}),Dk={left:"right",right:"left",bottom:"top",top:"bottom"},Fk={start:"end",end:"start"};function zc(e,t,n){return St(e,Sr(t,n))}function Un(e,t){return typeof e=="function"?e(t):e}function Bn(e){return e.split("-")[0]}function oi(e){return e.split("-")[1]}function vp(e){return e==="x"?"y":"x"}function wp(e){return e==="y"?"height":"width"}const _k=new Set(["top","bottom"]);function wn(e){return _k.has(Bn(e))?"y":"x"}function xp(e){return vp(wn(e))}function zk(e,t,n){n===void 0&&(n=!1);const r=oi(e),o=xp(e),i=wp(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=Va(s)),[s,Va(s)]}function Uk(e){const t=Va(e);return[Uc(e),t,Uc(t)]}function Uc(e){return e.replace(/start|end/g,t=>Fk[t])}const bm=["left","right"],Cm=["right","left"],Bk=["top","bottom"],Wk=["bottom","top"];function Hk(e,t,n){switch(e){case"top":case"bottom":return n?t?Cm:bm:t?bm:Cm;case"left":case"right":return t?Bk:Wk;default:return[]}}function qk(e,t,n,r){const o=oi(e);let i=Hk(Bn(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(Uc)))),i}function Va(e){return e.replace(/left|right|bottom|top/g,t=>Dk[t])}function $k(e){return{top:0,right:0,bottom:0,left:0,...e}}function aw(e){return typeof e!="number"?$k(e):{top:e,right:e,bottom:e,left:e}}function Qa(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Sm(e,t,n){let{reference:r,floating:o}=e;const i=wn(t),s=xp(t),a=wp(s),l=Bn(t),u=i==="y",c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,f=r[a]/2-o[a]/2;let d;switch(l){case"top":d={x:c,y:r.y-o.height};break;case"bottom":d={x:c,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:p};break;case"left":d={x:r.x-o.width,y:p};break;default:d={x:r.x,y:r.y}}switch(oi(t)){case"start":d[s]-=f*(n&&u?-1:1);break;case"end":d[s]+=f*(n&&u?-1:1);break}return d}const Vk=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:p}=Sm(u,r,l),f=r,d={},w=0;for(let m=0;m<a.length;m++){const{name:x,fn:h}=a[m],{x:g,y,data:b,reset:T}=await h({x:c,y:p,initialPlacement:r,placement:f,strategy:o,middlewareData:d,rects:u,platform:s,elements:{reference:e,floating:t}});c=g??c,p=y??p,d={...d,[x]:{...d[x],...b}},T&&w<=50&&(w++,typeof T=="object"&&(T.placement&&(f=T.placement),T.rects&&(u=T.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):T.rects),{x:c,y:p}=Sm(u,f,l)),m=-1)}return{x:c,y:p,placement:f,strategy:o,middlewareData:d}};async function is(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:p="floating",altBoundary:f=!1,padding:d=0}=Un(t,e),w=aw(d),x=a[f?p==="floating"?"reference":"floating":p],h=Qa(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:l})),g=p==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),b=await(i.isElement==null?void 0:i.isElement(y))?await(i.getScale==null?void 0:i.getScale(y))||{x:1,y:1}:{x:1,y:1},T=Qa(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:y,strategy:l}):g);return{top:(h.top-T.top+w.top)/b.y,bottom:(T.bottom-h.bottom+w.bottom)/b.y,left:(h.left-T.left+w.left)/b.x,right:(T.right-h.right+w.right)/b.x}}const Qk=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:u,padding:c=0}=Un(e,t)||{};if(u==null)return{};const p=aw(c),f={x:n,y:r},d=xp(o),w=wp(d),m=await s.getDimensions(u),x=d==="y",h=x?"top":"left",g=x?"bottom":"right",y=x?"clientHeight":"clientWidth",b=i.reference[w]+i.reference[d]-f[d]-i.floating[w],T=f[d]-i.reference[d],k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let A=k?k[y]:0;(!A||!await(s.isElement==null?void 0:s.isElement(k)))&&(A=a.floating[y]||i.floating[w]);const P=b/2-T/2,O=A/2-m[w]/2-1,j=Sr(p[h],O),D=Sr(p[g],O),M=j,$=A-m[w]-D,F=A/2-m[w]/2+P,W=zc(M,F,$),q=!l.arrow&&oi(o)!=null&&F!==W&&i.reference[w]/2-(F<M?j:D)-m[w]/2<0,V=q?F<M?F-M:F-$:0;return{[d]:f[d]+V,data:{[d]:W,centerOffset:F-W-V,...q&&{alignmentOffset:V}},reset:q}}}),Gk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:c=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:m=!0,...x}=Un(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const h=Bn(o),g=wn(a),y=Bn(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(u.floating)),T=f||(y||!m?[Va(a)]:Uk(a)),k=w!=="none";!f&&k&&T.push(...qk(a,m,w,b));const A=[a,...T],P=await is(t,x),O=[];let j=((r=i.flip)==null?void 0:r.overflows)||[];if(c&&O.push(P[h]),p){const F=zk(o,s,b);O.push(P[F[0]],P[F[1]])}if(j=[...j,{placement:o,overflows:O}],!O.every(F=>F<=0)){var D,M;const F=(((D=i.flip)==null?void 0:D.index)||0)+1,W=A[F];if(W&&(!(p==="alignment"?g!==wn(W):!1)||j.every(R=>R.overflows[0]>0&&wn(R.placement)===g)))return{data:{index:F,overflows:j},reset:{placement:W}};let q=(M=j.filter(V=>V.overflows[0]<=0).sort((V,R)=>V.overflows[1]-R.overflows[1])[0])==null?void 0:M.placement;if(!q)switch(d){case"bestFit":{var $;const V=($=j.filter(R=>{if(k){const N=wn(R.placement);return N===g||N==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(N=>N>0).reduce((N,S)=>N+S,0)]).sort((R,N)=>R[1]-N[1])[0])==null?void 0:$[0];V&&(q=V);break}case"initialPlacement":q=a;break}if(o!==q)return{reset:{placement:q}}}return{}}}};function km(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Em(e){return jk.some(t=>e[t]>=0)}const Kk=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Un(e,t);switch(r){case"referenceHidden":{const i=await is(t,{...o,elementContext:"reference"}),s=km(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Em(s)}}}case"escaped":{const i=await is(t,{...o,altBoundary:!0}),s=km(i,n.floating);return{data:{escapedOffsets:s,escaped:Em(s)}}}default:return{}}}}},lw=new Set(["left","top"]);async function Yk(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=Bn(n),a=oi(n),l=wn(n)==="y",u=lw.has(s)?-1:1,c=i&&l?-1:1,p=Un(t,e);let{mainAxis:f,crossAxis:d,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof w=="number"&&(d=a==="end"?w*-1:w),l?{x:d*c,y:f*u}:{x:f*u,y:d*c}}const Xk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:s,middlewareData:a}=t,l=await Yk(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:s}}}}},Jk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:x=>{let{x:h,y:g}=x;return{x:h,y:g}}},...l}=Un(e,t),u={x:n,y:r},c=await is(t,l),p=wn(Bn(o)),f=vp(p);let d=u[f],w=u[p];if(i){const x=f==="y"?"top":"left",h=f==="y"?"bottom":"right",g=d+c[x],y=d-c[h];d=zc(g,d,y)}if(s){const x=p==="y"?"top":"left",h=p==="y"?"bottom":"right",g=w+c[x],y=w-c[h];w=zc(g,w,y)}const m=a.fn({...t,[f]:d,[p]:w});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[f]:i,[p]:s}}}}}},Zk=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=Un(e,t),c={x:n,y:r},p=wn(o),f=vp(p);let d=c[f],w=c[p];const m=Un(a,t),x=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const y=f==="y"?"height":"width",b=i.reference[f]-i.floating[y]+x.mainAxis,T=i.reference[f]+i.reference[y]-x.mainAxis;d<b?d=b:d>T&&(d=T)}if(u){var h,g;const y=f==="y"?"width":"height",b=lw.has(Bn(o)),T=i.reference[p]-i.floating[y]+(b&&((h=s.offset)==null?void 0:h[p])||0)+(b?0:x.crossAxis),k=i.reference[p]+i.reference[y]+(b?0:((g=s.offset)==null?void 0:g[p])||0)-(b?x.crossAxis:0);w<T?w=T:w>k&&(w=k)}return{[f]:d,[p]:w}}}},eE=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:i,platform:s,elements:a}=t,{apply:l=()=>{},...u}=Un(e,t),c=await is(t,u),p=Bn(o),f=oi(o),d=wn(o)==="y",{width:w,height:m}=i.floating;let x,h;p==="top"||p==="bottom"?(x=p,h=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(h=p,x=f==="end"?"top":"bottom");const g=m-c.top-c.bottom,y=w-c.left-c.right,b=Sr(m-c[x],g),T=Sr(w-c[h],y),k=!t.middlewareData.shift;let A=b,P=T;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(P=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(A=g),k&&!f){const j=St(c.left,0),D=St(c.right,0),M=St(c.top,0),$=St(c.bottom,0);d?P=w-2*(j!==0||D!==0?j+D:St(c.left,c.right)):A=m-2*(M!==0||$!==0?M+$:St(c.top,c.bottom))}await l({...t,availableWidth:P,availableHeight:A});const O=await s.getDimensions(a.floating);return w!==O.width||m!==O.height?{reset:{rects:!0}}:{}}}};function bl(){return typeof window<"u"}function ii(e){return uw(e)?(e.nodeName||"").toLowerCase():"#document"}function At(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function En(e){var t;return(t=(uw(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function uw(e){return bl()?e instanceof Node||e instanceof At(e).Node:!1}function on(e){return bl()?e instanceof Element||e instanceof At(e).Element:!1}function Sn(e){return bl()?e instanceof HTMLElement||e instanceof At(e).HTMLElement:!1}function Tm(e){return!bl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof At(e).ShadowRoot}const tE=new Set(["inline","contents"]);function ws(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=sn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!tE.has(o)}const nE=new Set(["table","td","th"]);function rE(e){return nE.has(ii(e))}const oE=[":popover-open",":modal"];function Cl(e){return oE.some(t=>{try{return e.matches(t)}catch{return!1}})}const iE=["transform","translate","scale","rotate","perspective"],sE=["transform","translate","scale","rotate","perspective","filter"],aE=["paint","layout","strict","content"];function bp(e){const t=Cp(),n=on(e)?sn(e):e;return iE.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||sE.some(r=>(n.willChange||"").includes(r))||aE.some(r=>(n.contain||"").includes(r))}function lE(e){let t=kr(e);for(;Sn(t)&&!Jo(t);){if(bp(t))return t;if(Cl(t))return null;t=kr(t)}return null}function Cp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const uE=new Set(["html","body","#document"]);function Jo(e){return uE.has(ii(e))}function sn(e){return At(e).getComputedStyle(e)}function Sl(e){return on(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function kr(e){if(ii(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Tm(e)&&e.host||En(e);return Tm(t)?t.host:t}function cw(e){const t=kr(e);return Jo(t)?e.ownerDocument?e.ownerDocument.body:e.body:Sn(t)&&ws(t)?t:cw(t)}function ss(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=cw(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=At(o);if(i){const a=Bc(s);return t.concat(s,s.visualViewport||[],ws(o)?o:[],a&&n?ss(a):[])}return t.concat(o,ss(o,[],n))}function Bc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function dw(e){const t=sn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Sn(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=$a(n)!==i||$a(r)!==s;return a&&(n=i,r=s),{width:n,height:r,$:a}}function Sp(e){return on(e)?e:e.contextElement}function No(e){const t=Sp(e);if(!Sn(t))return Cn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=dw(t);let s=(i?$a(n.width):n.width)/r,a=(i?$a(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const cE=Cn(0);function pw(e){const t=At(e);return!Cp()||!t.visualViewport?cE:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function dE(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==At(e)?!1:t}function Zr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Sp(e);let s=Cn(1);t&&(r?on(r)&&(s=No(r)):s=No(e));const a=dE(i,n,r)?pw(i):Cn(0);let l=(o.left+a.x)/s.x,u=(o.top+a.y)/s.y,c=o.width/s.x,p=o.height/s.y;if(i){const f=At(i),d=r&&on(r)?At(r):r;let w=f,m=Bc(w);for(;m&&r&&d!==w;){const x=No(m),h=m.getBoundingClientRect(),g=sn(m),y=h.left+(m.clientLeft+parseFloat(g.paddingLeft))*x.x,b=h.top+(m.clientTop+parseFloat(g.paddingTop))*x.y;l*=x.x,u*=x.y,c*=x.x,p*=x.y,l+=y,u+=b,w=At(m),m=Bc(w)}}return Qa({width:c,height:p,x:l,y:u})}function kp(e,t){const n=Sl(e).scrollLeft;return t?t.left+n:Zr(En(e)).left+n}function fw(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(n?0:kp(e,r)),i=r.top+t.scrollTop;return{x:o,y:i}}function pE(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",s=En(r),a=t?Cl(t.floating):!1;if(r===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},u=Cn(1);const c=Cn(0),p=Sn(r);if((p||!p&&!i)&&((ii(r)!=="body"||ws(s))&&(l=Sl(r)),Sn(r))){const d=Zr(r);u=No(r),c.x=d.x+r.clientLeft,c.y=d.y+r.clientTop}const f=s&&!p&&!i?fw(s,l,!0):Cn(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+c.x+f.x,y:n.y*u.y-l.scrollTop*u.y+c.y+f.y}}function fE(e){return Array.from(e.getClientRects())}function mE(e){const t=En(e),n=Sl(e),r=e.ownerDocument.body,o=St(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=St(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+kp(e);const a=-n.scrollTop;return sn(r).direction==="rtl"&&(s+=St(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:a}}function hE(e,t){const n=At(e),r=En(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,a=0,l=0;if(o){i=o.width,s=o.height;const u=Cp();(!u||u&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:s,x:a,y:l}}const gE=new Set(["absolute","fixed"]);function yE(e,t){const n=Zr(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Sn(e)?No(e):Cn(1),s=e.clientWidth*i.x,a=e.clientHeight*i.y,l=o*i.x,u=r*i.y;return{width:s,height:a,x:l,y:u}}function Am(e,t,n){let r;if(t==="viewport")r=hE(e,n);else if(t==="document")r=mE(En(e));else if(on(t))r=yE(t,n);else{const o=pw(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return Qa(r)}function mw(e,t){const n=kr(e);return n===t||!on(n)||Jo(n)?!1:sn(n).position==="fixed"||mw(n,t)}function vE(e,t){const n=t.get(e);if(n)return n;let r=ss(e,[],!1).filter(a=>on(a)&&ii(a)!=="body"),o=null;const i=sn(e).position==="fixed";let s=i?kr(e):e;for(;on(s)&&!Jo(s);){const a=sn(s),l=bp(s);!l&&a.position==="fixed"&&(o=null),(i?!l&&!o:!l&&a.position==="static"&&!!o&&gE.has(o.position)||ws(s)&&!l&&mw(e,s))?r=r.filter(c=>c!==s):o=a,s=kr(s)}return t.set(e,r),r}function wE(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?Cl(t)?[]:vE(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((u,c)=>{const p=Am(t,c,o);return u.top=St(p.top,u.top),u.right=Sr(p.right,u.right),u.bottom=Sr(p.bottom,u.bottom),u.left=St(p.left,u.left),u},Am(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xE(e){const{width:t,height:n}=dw(e);return{width:t,height:n}}function bE(e,t,n){const r=Sn(t),o=En(t),i=n==="fixed",s=Zr(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const l=Cn(0);function u(){l.x=kp(o)}if(r||!r&&!i)if((ii(t)!=="body"||ws(o))&&(a=Sl(t)),r){const d=Zr(t,!0,i,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else o&&u();i&&!r&&o&&u();const c=o&&!r&&!i?fw(o,a):Cn(0),p=s.left+a.scrollLeft-l.x-c.x,f=s.top+a.scrollTop-l.y-c.y;return{x:p,y:f,width:s.width,height:s.height}}function wu(e){return sn(e).position==="static"}function Pm(e,t){if(!Sn(e)||sn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return En(e)===n&&(n=n.ownerDocument.body),n}function hw(e,t){const n=At(e);if(Cl(e))return n;if(!Sn(e)){let o=kr(e);for(;o&&!Jo(o);){if(on(o)&&!wu(o))return o;o=kr(o)}return n}let r=Pm(e,t);for(;r&&rE(r)&&wu(r);)r=Pm(r,t);return r&&Jo(r)&&wu(r)&&!bp(r)?n:r||lE(e)||n}const CE=async function(e){const t=this.getOffsetParent||hw,n=this.getDimensions,r=await n(e.floating);return{reference:bE(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function SE(e){return sn(e).direction==="rtl"}const kE={convertOffsetParentRelativeRectToViewportRelativeRect:pE,getDocumentElement:En,getClippingRect:wE,getOffsetParent:hw,getElementRects:CE,getClientRects:fE,getDimensions:xE,getScale:No,isElement:on,isRTL:SE};function gw(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function EE(e,t){let n=null,r;const o=En(e);function i(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();const u=e.getBoundingClientRect(),{left:c,top:p,width:f,height:d}=u;if(a||t(),!f||!d)return;const w=$s(p),m=$s(o.clientWidth-(c+f)),x=$s(o.clientHeight-(p+d)),h=$s(c),y={rootMargin:-w+"px "+-m+"px "+-x+"px "+-h+"px",threshold:St(0,Sr(1,l))||1};let b=!0;function T(k){const A=k[0].intersectionRatio;if(A!==l){if(!b)return s();A?s(!1,A):r=setTimeout(()=>{s(!1,1e-7)},1e3)}A===1&&!gw(u,e.getBoundingClientRect())&&s(),b=!1}try{n=new IntersectionObserver(T,{...y,root:o.ownerDocument})}catch{n=new IntersectionObserver(T,y)}n.observe(e)}return s(!0),i}function TE(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Sp(e),c=o||i?[...u?ss(u):[],...ss(t)]:[];c.forEach(h=>{o&&h.addEventListener("scroll",n,{passive:!0}),i&&h.addEventListener("resize",n)});const p=u&&a?EE(u,n):null;let f=-1,d=null;s&&(d=new ResizeObserver(h=>{let[g]=h;g&&g.target===u&&d&&(d.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var y;(y=d)==null||y.observe(t)})),n()}),u&&!l&&d.observe(u),d.observe(t));let w,m=l?Zr(e):null;l&&x();function x(){const h=Zr(e);m&&!gw(m,h)&&n(),m=h,w=requestAnimationFrame(x)}return n(),()=>{var h;c.forEach(g=>{o&&g.removeEventListener("scroll",n),i&&g.removeEventListener("resize",n)}),p==null||p(),(h=d)==null||h.disconnect(),d=null,l&&cancelAnimationFrame(w)}}const AE=Xk,PE=Jk,RE=Gk,IE=eE,ME=Kk,Rm=Qk,NE=Zk,OE=(e,t,n)=>{const r=new Map,o={platform:kE,...n},i={...o.platform,_c:r};return Vk(e,t,{...o,platform:i})};var LE=typeof document<"u",jE=function(){},ma=LE?v.useLayoutEffect:jE;function Ga(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Ga(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Ga(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function yw(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Im(e,t){const n=yw(e);return Math.round(t*n)/n}function xu(e){const t=v.useRef(e);return ma(()=>{t.current=e}),t}function DE(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[c,p]=v.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,d]=v.useState(r);Ga(f,r)||d(r);const[w,m]=v.useState(null),[x,h]=v.useState(null),g=v.useCallback(R=>{R!==k.current&&(k.current=R,m(R))},[]),y=v.useCallback(R=>{R!==A.current&&(A.current=R,h(R))},[]),b=i||w,T=s||x,k=v.useRef(null),A=v.useRef(null),P=v.useRef(c),O=l!=null,j=xu(l),D=xu(o),M=xu(u),$=v.useCallback(()=>{if(!k.current||!A.current)return;const R={placement:t,strategy:n,middleware:f};D.current&&(R.platform=D.current),OE(k.current,A.current,R).then(N=>{const S={...N,isPositioned:M.current!==!1};F.current&&!Ga(P.current,S)&&(P.current=S,oo.flushSync(()=>{p(S)}))})},[f,t,n,D,M]);ma(()=>{u===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,p(R=>({...R,isPositioned:!1})))},[u]);const F=v.useRef(!1);ma(()=>(F.current=!0,()=>{F.current=!1}),[]),ma(()=>{if(b&&(k.current=b),T&&(A.current=T),b&&T){if(j.current)return j.current(b,T,$);$()}},[b,T,$,j,O]);const W=v.useMemo(()=>({reference:k,floating:A,setReference:g,setFloating:y}),[g,y]),q=v.useMemo(()=>({reference:b,floating:T}),[b,T]),V=v.useMemo(()=>{const R={position:n,left:0,top:0};if(!q.floating)return R;const N=Im(q.floating,c.x),S=Im(q.floating,c.y);return a?{...R,transform:"translate("+N+"px, "+S+"px)",...yw(q.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:N,top:S}},[n,a,q.floating,c.x,c.y]);return v.useMemo(()=>({...c,update:$,refs:W,elements:q,floatingStyles:V}),[c,$,W,q,V])}const FE=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Rm({element:r.current,padding:o}).fn(n):{}:r?Rm({element:r,padding:o}).fn(n):{}}}},_E=(e,t)=>({...AE(e),options:[e,t]}),zE=(e,t)=>({...PE(e),options:[e,t]}),UE=(e,t)=>({...NE(e),options:[e,t]}),BE=(e,t)=>({...RE(e),options:[e,t]}),WE=(e,t)=>({...IE(e),options:[e,t]}),HE=(e,t)=>({...ME(e),options:[e,t]}),qE=(e,t)=>({...FE(e),options:[e,t]});var $E="Arrow",vw=v.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...i}=e;return C.jsx(we.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:C.jsx("polygon",{points:"0,0 30,0 15,10"})})});vw.displayName=$E;var VE=vw;function QE(e){const[t,n]=v.useState(void 0);return Qe(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,a;if("borderBoxSize"in i){const l=i.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,a=u.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Ep="Popper",[ww,kl]=ys(Ep),[GE,xw]=ww(Ep),bw=e=>{const{__scopePopper:t,children:n}=e,[r,o]=v.useState(null);return C.jsx(GE,{scope:t,anchor:r,onAnchorChange:o,children:n})};bw.displayName=Ep;var Cw="PopperAnchor",Sw=v.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=xw(Cw,n),s=v.useRef(null),a=Le(t,s);return v.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:C.jsx(we.div,{...o,ref:a})});Sw.displayName=Cw;var Tp="PopperContent",[KE,YE]=ww(Tp),kw=v.forwardRef((e,t)=>{var H,ie,ge,se,oe,ce;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:c=0,sticky:p="partial",hideWhenDetached:f=!1,updatePositionStrategy:d="optimized",onPlaced:w,...m}=e,x=xw(Tp,n),[h,g]=v.useState(null),y=Le(t,Be=>g(Be)),[b,T]=v.useState(null),k=QE(b),A=(k==null?void 0:k.width)??0,P=(k==null?void 0:k.height)??0,O=r+(i!=="center"?"-"+i:""),j=typeof c=="number"?c:{top:0,right:0,bottom:0,left:0,...c},D=Array.isArray(u)?u:[u],M=D.length>0,$={padding:j,boundary:D.filter(JE),altBoundary:M},{refs:F,floatingStyles:W,placement:q,isPositioned:V,middlewareData:R}=DE({strategy:"fixed",placement:O,whileElementsMounted:(...Be)=>TE(...Be,{animationFrame:d==="always"}),elements:{reference:x.anchor},middleware:[_E({mainAxis:o+P,alignmentAxis:s}),l&&zE({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?UE():void 0,...$}),l&&BE({...$}),WE({...$,apply:({elements:Be,rects:at,availableWidth:an,availableHeight:Ut})=>{const{width:ln,height:Mr}=at.reference,Tn=Be.floating.style;Tn.setProperty("--radix-popper-available-width",`${an}px`),Tn.setProperty("--radix-popper-available-height",`${Ut}px`),Tn.setProperty("--radix-popper-anchor-width",`${ln}px`),Tn.setProperty("--radix-popper-anchor-height",`${Mr}px`)}}),b&&qE({element:b,padding:a}),ZE({arrowWidth:A,arrowHeight:P}),f&&HE({strategy:"referenceHidden",...$})]}),[N,S]=Aw(q),K=rn(w);Qe(()=>{V&&(K==null||K())},[V,K]);const Q=(H=R.arrow)==null?void 0:H.x,E=(ie=R.arrow)==null?void 0:ie.y,Y=((ge=R.arrow)==null?void 0:ge.centerOffset)!==0,[de,re]=v.useState();return Qe(()=>{h&&re(window.getComputedStyle(h).zIndex)},[h]),C.jsx("div",{ref:F.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:V?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:de,"--radix-popper-transform-origin":[(se=R.transformOrigin)==null?void 0:se.x,(oe=R.transformOrigin)==null?void 0:oe.y].join(" "),...((ce=R.hide)==null?void 0:ce.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:C.jsx(KE,{scope:n,placedSide:N,onArrowChange:T,arrowX:Q,arrowY:E,shouldHideArrow:Y,children:C.jsx(we.div,{"data-side":N,"data-align":S,...m,ref:y,style:{...m.style,animation:V?void 0:"none"}})})})});kw.displayName=Tp;var Ew="PopperArrow",XE={top:"bottom",right:"left",bottom:"top",left:"right"},Tw=v.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,i=YE(Ew,r),s=XE[i.placedSide];return C.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:C.jsx(VE,{...o,ref:n,style:{...o.style,display:"block"}})})});Tw.displayName=Ew;function JE(e){return e!==null}var ZE=e=>({name:"transformOrigin",options:e,fn(t){var x,h,g;const{placement:n,rects:r,middlewareData:o}=t,s=((x=o.arrow)==null?void 0:x.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,c]=Aw(n),p={start:"0%",center:"50%",end:"100%"}[c],f=(((h=o.arrow)==null?void 0:h.x)??0)+a/2,d=(((g=o.arrow)==null?void 0:g.y)??0)+l/2;let w="",m="";return u==="bottom"?(w=s?p:`${f}px`,m=`${-l}px`):u==="top"?(w=s?p:`${f}px`,m=`${r.floating.height+l}px`):u==="right"?(w=`${-l}px`,m=s?p:`${d}px`):u==="left"&&(w=`${r.floating.width+l}px`,m=s?p:`${d}px`),{data:{x:w,y:m}}}});function Aw(e){const[t,n="center"]=e.split("-");return[t,n]}var eT=bw,Pw=Sw,Rw=kw,Iw=Tw,[El,bO]=ys("Tooltip",[kl]),Ap=kl(),Mw="TooltipProvider",tT=700,Mm="tooltip.open",[nT,Nw]=El(Mw),Ow=e=>{const{__scopeTooltip:t,delayDuration:n=tT,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:i}=e,s=v.useRef(!0),a=v.useRef(!1),l=v.useRef(0);return v.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),C.jsx(nT,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:v.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:v.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:v.useCallback(u=>{a.current=u},[]),disableHoverableContent:o,children:i})};Ow.displayName=Mw;var Lw="Tooltip",[CO,Tl]=El(Lw),Wc="TooltipTrigger",rT=v.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Tl(Wc,n),i=Nw(Wc,n),s=Ap(n),a=v.useRef(null),l=Le(t,a,o.onTriggerChange),u=v.useRef(!1),c=v.useRef(!1),p=v.useCallback(()=>u.current=!1,[]);return v.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),C.jsx(Pw,{asChild:!0,...s,children:C.jsx(we.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:l,onPointerMove:ue(e.onPointerMove,f=>{f.pointerType!=="touch"&&!c.current&&!i.isPointerInTransitRef.current&&(o.onTriggerEnter(),c.current=!0)}),onPointerLeave:ue(e.onPointerLeave,()=>{o.onTriggerLeave(),c.current=!1}),onPointerDown:ue(e.onPointerDown,()=>{o.open&&o.onClose(),u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:ue(e.onFocus,()=>{u.current||o.onOpen()}),onBlur:ue(e.onBlur,o.onClose),onClick:ue(e.onClick,o.onClose)})})});rT.displayName=Wc;var oT="TooltipPortal",[SO,iT]=El(oT,{forceMount:void 0}),Zo="TooltipContent",jw=v.forwardRef((e,t)=>{const n=iT(Zo,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,s=Tl(Zo,e.__scopeTooltip);return C.jsx(lp,{present:r||s.open,children:s.disableHoverableContent?C.jsx(Dw,{side:o,...i,ref:t}):C.jsx(sT,{side:o,...i,ref:t})})}),sT=v.forwardRef((e,t)=>{const n=Tl(Zo,e.__scopeTooltip),r=Nw(Zo,e.__scopeTooltip),o=v.useRef(null),i=Le(t,o),[s,a]=v.useState(null),{trigger:l,onClose:u}=n,c=o.current,{onPointerInTransitChange:p}=r,f=v.useCallback(()=>{a(null),p(!1)},[p]),d=v.useCallback((w,m)=>{const x=w.currentTarget,h={x:w.clientX,y:w.clientY},g=dT(h,x.getBoundingClientRect()),y=pT(h,g),b=fT(m.getBoundingClientRect()),T=hT([...y,...b]);a(T),p(!0)},[p]);return v.useEffect(()=>()=>f(),[f]),v.useEffect(()=>{if(l&&c){const w=x=>d(x,c),m=x=>d(x,l);return l.addEventListener("pointerleave",w),c.addEventListener("pointerleave",m),()=>{l.removeEventListener("pointerleave",w),c.removeEventListener("pointerleave",m)}}},[l,c,d,f]),v.useEffect(()=>{if(s){const w=m=>{const x=m.target,h={x:m.clientX,y:m.clientY},g=(l==null?void 0:l.contains(x))||(c==null?void 0:c.contains(x)),y=!mT(h,s);g?f():y&&(f(),u())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[l,c,s,u,f]),C.jsx(Dw,{...e,ref:i})}),[aT,lT]=El(Lw,{isInside:!1}),uT=yC("TooltipContent"),Dw=v.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:i,onPointerDownOutside:s,...a}=e,l=Tl(Zo,n),u=Ap(n),{onClose:c}=l;return v.useEffect(()=>(document.addEventListener(Mm,c),()=>document.removeEventListener(Mm,c)),[c]),v.useEffect(()=>{if(l.trigger){const p=f=>{const d=f.target;d!=null&&d.contains(l.trigger)&&c()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[l.trigger,c]),C.jsx(vl,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:c,children:C.jsxs(Rw,{"data-state":l.stateAttribute,...u,...a,ref:t,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[C.jsx(uT,{children:r}),C.jsx(aT,{scope:n,isInside:!0,children:C.jsx(zC,{id:l.contentId,role:"tooltip",children:o||r})})]})})});jw.displayName=Zo;var Fw="TooltipArrow",cT=v.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Ap(n);return lT(Fw,n).isInside?null:C.jsx(Iw,{...o,...r,ref:t})});cT.displayName=Fw;function dT(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function pT(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function fT(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function mT(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const a=t[i],l=t[s],u=a.x,c=a.y,p=l.x,f=l.y;c>r!=f>r&&n<(p-u)*(r-c)/(f-c)+u&&(o=!o)}return o}function hT(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),gT(t)}function gT(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const i=t[t.length-1],s=t[t.length-2];if((i.x-s.x)*(o.y-s.y)>=(i.y-s.y)*(o.x-s.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(o.y-s.y)>=(i.y-s.y)*(o.x-s.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var yT=Ow,_w=jw;const vT=yT,wT=v.forwardRef(({className:e,sideOffset:t=4,...n},r)=>C.jsx(_w,{ref:r,sideOffset:t,className:xe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));wT.displayName=_w.displayName;var Al=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Pl=typeof window>"u"||"Deno"in globalThis;function Kt(){}function xT(e,t){return typeof e=="function"?e(t):e}function bT(e){return typeof e=="number"&&e>=0&&e!==1/0}function CT(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Hc(e,t){return typeof e=="function"?e(t):e}function ST(e,t){return typeof e=="function"?e(t):e}function Nm(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:s,stale:a}=e;if(s){if(r){if(t.queryHash!==Pp(s,t.options))return!1}else if(!ls(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||o&&o!==t.state.fetchStatus||i&&!i(t))}function Om(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(as(t.options.mutationKey)!==as(i))return!1}else if(!ls(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function Pp(e,t){return((t==null?void 0:t.queryKeyHashFn)||as)(e)}function as(e){return JSON.stringify(e,(t,n)=>qc(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function ls(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>ls(e[n],t[n])):!1}function zw(e,t){if(e===t)return e;const n=Lm(e)&&Lm(t);if(n||qc(e)&&qc(t)){const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),s=i.length,a=n?[]:{},l=new Set(r);let u=0;for(let c=0;c<s;c++){const p=n?c:i[c];(!n&&l.has(p)||n)&&e[p]===void 0&&t[p]===void 0?(a[p]=void 0,u++):(a[p]=zw(e[p],t[p]),a[p]===e[p]&&e[p]!==void 0&&u++)}return o===s&&u===o?e:a}return t}function Lm(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function qc(e){if(!jm(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!jm(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function jm(e){return Object.prototype.toString.call(e)==="[object Object]"}function kT(e){return new Promise(t=>{setTimeout(t,e)})}function ET(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?zw(e,t):t}function TT(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function AT(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Rp=Symbol();function Uw(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Rp?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Ur,ir,Fo,Gh,PT=(Gh=class extends Al{constructor(){super();me(this,Ur);me(this,ir);me(this,Fo);ee(this,Fo,t=>{if(!Pl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){L(this,ir)||this.setEventListener(L(this,Fo))}onUnsubscribe(){var t;this.hasListeners()||((t=L(this,ir))==null||t.call(this),ee(this,ir,void 0))}setEventListener(t){var n;ee(this,Fo,t),(n=L(this,ir))==null||n.call(this),ee(this,ir,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){L(this,Ur)!==t&&(ee(this,Ur,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof L(this,Ur)=="boolean"?L(this,Ur):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Ur=new WeakMap,ir=new WeakMap,Fo=new WeakMap,Gh),Bw=new PT,_o,sr,zo,Kh,RT=(Kh=class extends Al{constructor(){super();me(this,_o,!0);me(this,sr);me(this,zo);ee(this,zo,t=>{if(!Pl&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){L(this,sr)||this.setEventListener(L(this,zo))}onUnsubscribe(){var t;this.hasListeners()||((t=L(this,sr))==null||t.call(this),ee(this,sr,void 0))}setEventListener(t){var n;ee(this,zo,t),(n=L(this,sr))==null||n.call(this),ee(this,sr,t(this.setOnline.bind(this)))}setOnline(t){L(this,_o)!==t&&(ee(this,_o,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return L(this,_o)}},_o=new WeakMap,sr=new WeakMap,zo=new WeakMap,Kh),Ka=new RT;function IT(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}function MT(e){return Math.min(1e3*2**e,3e4)}function Ww(e){return(e??"online")==="online"?Ka.isOnline():!0}var Hw=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function bu(e){return e instanceof Hw}function qw(e){let t=!1,n=0,r=!1,o;const i=IT(),s=m=>{var x;r||(f(new Hw(m)),(x=e.abort)==null||x.call(e))},a=()=>{t=!0},l=()=>{t=!1},u=()=>Bw.isFocused()&&(e.networkMode==="always"||Ka.isOnline())&&e.canRun(),c=()=>Ww(e.networkMode)&&e.canRun(),p=m=>{var x;r||(r=!0,(x=e.onSuccess)==null||x.call(e,m),o==null||o(),i.resolve(m))},f=m=>{var x;r||(r=!0,(x=e.onError)==null||x.call(e,m),o==null||o(),i.reject(m))},d=()=>new Promise(m=>{var x;o=h=>{(r||u())&&m(h)},(x=e.onPause)==null||x.call(e)}).then(()=>{var m;o=void 0,r||(m=e.onContinue)==null||m.call(e)}),w=()=>{if(r)return;let m;const x=n===0?e.initialPromise:void 0;try{m=x??e.fn()}catch(h){m=Promise.reject(h)}Promise.resolve(m).then(p).catch(h=>{var k;if(r)return;const g=e.retry??(Pl?0:3),y=e.retryDelay??MT,b=typeof y=="function"?y(n,h):y,T=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,h);if(t||!T){f(h);return}n++,(k=e.onFail)==null||k.call(e,n,h),kT(b).then(()=>u()?void 0:d()).then(()=>{t?f(h):w()})})};return{promise:i,cancel:s,continue:()=>(o==null||o(),i),cancelRetry:a,continueRetry:l,canStart:c,start:()=>(c()?w():d().then(w),i)}}var NT=e=>setTimeout(e,0);function OT(){let e=[],t=0,n=a=>{a()},r=a=>{a()},o=NT;const i=a=>{t?e.push(a):o(()=>{n(a)})},s=()=>{const a=e;e=[],a.length&&o(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;t++;try{l=a()}finally{t--,t||s()}return l},batchCalls:a=>(...l)=>{i(()=>{a(...l)})},schedule:i,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{o=a}}}var rt=OT(),Br,Yh,$w=(Yh=class{constructor(){me(this,Br)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),bT(this.gcTime)&&ee(this,Br,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Pl?1/0:5*60*1e3))}clearGcTimeout(){L(this,Br)&&(clearTimeout(L(this,Br)),ee(this,Br,void 0))}},Br=new WeakMap,Yh),Uo,Wr,Nt,Hr,Xe,cs,qr,Yt,Rn,Xh,LT=(Xh=class extends $w{constructor(t){super();me(this,Yt);me(this,Uo);me(this,Wr);me(this,Nt);me(this,Hr);me(this,Xe);me(this,cs);me(this,qr);ee(this,qr,!1),ee(this,cs,t.defaultOptions),this.setOptions(t.options),this.observers=[],ee(this,Hr,t.client),ee(this,Nt,L(this,Hr).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,ee(this,Uo,DT(this.options)),this.state=t.state??L(this,Uo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=L(this,Xe))==null?void 0:t.promise}setOptions(t){this.options={...L(this,cs),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&L(this,Nt).remove(this)}setData(t,n){const r=ET(this.state.data,t,this.options);return Ge(this,Yt,Rn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ge(this,Yt,Rn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=L(this,Xe))==null?void 0:r.promise;return(o=L(this,Xe))==null||o.cancel(t),n?n.then(Kt).catch(Kt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(L(this,Uo))}isActive(){return this.observers.some(t=>ST(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Rp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Hc(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!CT(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=L(this,Xe))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=L(this,Xe))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),L(this,Nt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(L(this,Xe)&&(L(this,qr)?L(this,Xe).cancel({revert:!0}):L(this,Xe).cancelRetry()),this.scheduleGc()),L(this,Nt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ge(this,Yt,Rn).call(this,{type:"invalidate"})}fetch(t,n){var u,c,p;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(L(this,Xe))return L(this,Xe).continueRetry(),L(this,Xe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const f=this.observers.find(d=>d.options.queryFn);f&&this.setOptions(f.options)}const r=new AbortController,o=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(ee(this,qr,!0),r.signal)})},i=()=>{const f=Uw(this.options,n),w=(()=>{const m={client:L(this,Hr),queryKey:this.queryKey,meta:this.meta};return o(m),m})();return ee(this,qr,!1),this.options.persister?this.options.persister(f,w,this):f(w)},a=(()=>{const f={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:L(this,Hr),state:this.state,fetchFn:i};return o(f),f})();(u=this.options.behavior)==null||u.onFetch(a,this),ee(this,Wr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=a.fetchOptions)==null?void 0:c.meta))&&Ge(this,Yt,Rn).call(this,{type:"fetch",meta:(p=a.fetchOptions)==null?void 0:p.meta});const l=f=>{var d,w,m,x;bu(f)&&f.silent||Ge(this,Yt,Rn).call(this,{type:"error",error:f}),bu(f)||((w=(d=L(this,Nt).config).onError)==null||w.call(d,f,this),(x=(m=L(this,Nt).config).onSettled)==null||x.call(m,this.state.data,f,this)),this.scheduleGc()};return ee(this,Xe,qw({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:f=>{var d,w,m,x;if(f===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(h){l(h);return}(w=(d=L(this,Nt).config).onSuccess)==null||w.call(d,f,this),(x=(m=L(this,Nt).config).onSettled)==null||x.call(m,f,this.state.error,this),this.scheduleGc()},onError:l,onFail:(f,d)=>{Ge(this,Yt,Rn).call(this,{type:"failed",failureCount:f,error:d})},onPause:()=>{Ge(this,Yt,Rn).call(this,{type:"pause"})},onContinue:()=>{Ge(this,Yt,Rn).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),L(this,Xe).start()}},Uo=new WeakMap,Wr=new WeakMap,Nt=new WeakMap,Hr=new WeakMap,Xe=new WeakMap,cs=new WeakMap,qr=new WeakMap,Yt=new WeakSet,Rn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...jT(r.data,this.options),fetchMeta:t.meta??null};case"success":return ee(this,Wr,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return bu(o)&&o.revert&&L(this,Wr)?{...L(this,Wr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),rt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),L(this,Nt).notify({query:this,type:"updated",action:t})})},Xh);function jT(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ww(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function DT(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var fn,Jh,FT=(Jh=class extends Al{constructor(t={}){super();me(this,fn);this.config=t,ee(this,fn,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??Pp(o,n);let s=this.get(i);return s||(s=new LT({client:t,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(s)),s}add(t){L(this,fn).has(t.queryHash)||(L(this,fn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=L(this,fn).get(t.queryHash);n&&(t.destroy(),n===t&&L(this,fn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){rt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return L(this,fn).get(t)}getAll(){return[...L(this,fn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Nm(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Nm(t,r)):n}notify(t){rt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){rt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){rt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},fn=new WeakMap,Jh),mn,tt,$r,hn,Jn,Zh,_T=(Zh=class extends $w{constructor(t){super();me(this,hn);me(this,mn);me(this,tt);me(this,$r);this.mutationId=t.mutationId,ee(this,tt,t.mutationCache),ee(this,mn,[]),this.state=t.state||zT(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){L(this,mn).includes(t)||(L(this,mn).push(t),this.clearGcTimeout(),L(this,tt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){ee(this,mn,L(this,mn).filter(n=>n!==t)),this.scheduleGc(),L(this,tt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){L(this,mn).length||(this.state.status==="pending"?this.scheduleGc():L(this,tt).remove(this))}continue(){var t;return((t=L(this,$r))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,s,a,l,u,c,p,f,d,w,m,x,h,g,y,b,T,k,A,P;const n=()=>{Ge(this,hn,Jn).call(this,{type:"continue"})};ee(this,$r,qw({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(O,j)=>{Ge(this,hn,Jn).call(this,{type:"failed",failureCount:O,error:j})},onPause:()=>{Ge(this,hn,Jn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>L(this,tt).canRun(this)}));const r=this.state.status==="pending",o=!L(this,$r).canStart();try{if(r)n();else{Ge(this,hn,Jn).call(this,{type:"pending",variables:t,isPaused:o}),await((s=(i=L(this,tt).config).onMutate)==null?void 0:s.call(i,t,this));const j=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));j!==this.state.context&&Ge(this,hn,Jn).call(this,{type:"pending",context:j,variables:t,isPaused:o})}const O=await L(this,$r).start();return await((c=(u=L(this,tt).config).onSuccess)==null?void 0:c.call(u,O,t,this.state.context,this)),await((f=(p=this.options).onSuccess)==null?void 0:f.call(p,O,t,this.state.context)),await((w=(d=L(this,tt).config).onSettled)==null?void 0:w.call(d,O,null,this.state.variables,this.state.context,this)),await((x=(m=this.options).onSettled)==null?void 0:x.call(m,O,null,t,this.state.context)),Ge(this,hn,Jn).call(this,{type:"success",data:O}),O}catch(O){try{throw await((g=(h=L(this,tt).config).onError)==null?void 0:g.call(h,O,t,this.state.context,this)),await((b=(y=this.options).onError)==null?void 0:b.call(y,O,t,this.state.context)),await((k=(T=L(this,tt).config).onSettled)==null?void 0:k.call(T,void 0,O,this.state.variables,this.state.context,this)),await((P=(A=this.options).onSettled)==null?void 0:P.call(A,void 0,O,t,this.state.context)),O}finally{Ge(this,hn,Jn).call(this,{type:"error",error:O})}}finally{L(this,tt).runNext(this)}}},mn=new WeakMap,tt=new WeakMap,$r=new WeakMap,hn=new WeakSet,Jn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),rt.batch(()=>{L(this,mn).forEach(r=>{r.onMutationUpdate(t)}),L(this,tt).notify({mutation:this,type:"updated",action:t})})},Zh);function zT(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Nn,Xt,ds,eg,UT=(eg=class extends Al{constructor(t={}){super();me(this,Nn);me(this,Xt);me(this,ds);this.config=t,ee(this,Nn,new Set),ee(this,Xt,new Map),ee(this,ds,0)}build(t,n,r){const o=new _T({mutationCache:this,mutationId:++ks(this,ds)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){L(this,Nn).add(t);const n=Vs(t);if(typeof n=="string"){const r=L(this,Xt).get(n);r?r.push(t):L(this,Xt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(L(this,Nn).delete(t)){const n=Vs(t);if(typeof n=="string"){const r=L(this,Xt).get(n);if(r)if(r.length>1){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}else r[0]===t&&L(this,Xt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Vs(t);if(typeof n=="string"){const r=L(this,Xt).get(n),o=r==null?void 0:r.find(i=>i.state.status==="pending");return!o||o===t}else return!0}runNext(t){var r;const n=Vs(t);if(typeof n=="string"){const o=(r=L(this,Xt).get(n))==null?void 0:r.find(i=>i!==t&&i.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){rt.batch(()=>{L(this,Nn).forEach(t=>{this.notify({type:"removed",mutation:t})}),L(this,Nn).clear(),L(this,Xt).clear()})}getAll(){return Array.from(L(this,Nn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Om(n,r))}findAll(t={}){return this.getAll().filter(n=>Om(t,n))}notify(t){rt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return rt.batch(()=>Promise.all(t.map(n=>n.continue().catch(Kt))))}},Nn=new WeakMap,Xt=new WeakMap,ds=new WeakMap,eg);function Vs(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Dm(e){return{onFetch:(t,n)=>{var c,p,f,d,w;const r=t.options,o=(f=(p=(c=t.fetchOptions)==null?void 0:c.meta)==null?void 0:p.fetchMore)==null?void 0:f.direction,i=((d=t.state.data)==null?void 0:d.pages)||[],s=((w=t.state.data)==null?void 0:w.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const u=async()=>{let m=!1;const x=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},h=Uw(t.options,t.fetchOptions),g=async(y,b,T)=>{if(m)return Promise.reject();if(b==null&&y.pages.length)return Promise.resolve(y);const A=(()=>{const D={client:t.client,queryKey:t.queryKey,pageParam:b,direction:T?"backward":"forward",meta:t.options.meta};return x(D),D})(),P=await h(A),{maxPages:O}=t.options,j=T?AT:TT;return{pages:j(y.pages,P,O),pageParams:j(y.pageParams,b,O)}};if(o&&i.length){const y=o==="backward",b=y?BT:Fm,T={pages:i,pageParams:s},k=b(r,T);a=await g(T,k,y)}else{const y=e??i.length;do{const b=l===0?s[0]??r.initialPageParam:Fm(r,a);if(l>0&&b==null)break;a=await g(a,b),l++}while(l<y)}return a};t.options.persister?t.fetchFn=()=>{var m,x;return(x=(m=t.options).persister)==null?void 0:x.call(m,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Fm(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function BT(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Ne,ar,lr,Bo,Wo,ur,Ho,qo,tg,WT=(tg=class{constructor(e={}){me(this,Ne);me(this,ar);me(this,lr);me(this,Bo);me(this,Wo);me(this,ur);me(this,Ho);me(this,qo);ee(this,Ne,e.queryCache||new FT),ee(this,ar,e.mutationCache||new UT),ee(this,lr,e.defaultOptions||{}),ee(this,Bo,new Map),ee(this,Wo,new Map),ee(this,ur,0)}mount(){ks(this,ur)._++,L(this,ur)===1&&(ee(this,Ho,Bw.subscribe(async e=>{e&&(await this.resumePausedMutations(),L(this,Ne).onFocus())})),ee(this,qo,Ka.subscribe(async e=>{e&&(await this.resumePausedMutations(),L(this,Ne).onOnline())})))}unmount(){var e,t;ks(this,ur)._--,L(this,ur)===0&&((e=L(this,Ho))==null||e.call(this),ee(this,Ho,void 0),(t=L(this,qo))==null||t.call(this),ee(this,qo,void 0))}isFetching(e){return L(this,Ne).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return L(this,ar).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=L(this,Ne).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=L(this,Ne).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Hc(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return L(this,Ne).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=L(this,Ne).get(r.queryHash),i=o==null?void 0:o.state.data,s=xT(t,i);if(s!==void 0)return L(this,Ne).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return rt.batch(()=>L(this,Ne).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=L(this,Ne).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=L(this,Ne);rt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=L(this,Ne);return rt.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=rt.batch(()=>L(this,Ne).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(Kt).catch(Kt)}invalidateQueries(e,t={}){return rt.batch(()=>(L(this,Ne).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=rt.batch(()=>L(this,Ne).findAll(e).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(Kt)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(Kt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=L(this,Ne).build(this,t);return n.isStaleByTime(Hc(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Kt).catch(Kt)}fetchInfiniteQuery(e){return e.behavior=Dm(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Kt).catch(Kt)}ensureInfiniteQueryData(e){return e.behavior=Dm(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ka.isOnline()?L(this,ar).resumePausedMutations():Promise.resolve()}getQueryCache(){return L(this,Ne)}getMutationCache(){return L(this,ar)}getDefaultOptions(){return L(this,lr)}setDefaultOptions(e){ee(this,lr,e)}setQueryDefaults(e,t){L(this,Bo).set(as(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...L(this,Bo).values()],n={};return t.forEach(r=>{ls(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){L(this,Wo).set(as(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...L(this,Wo).values()],n={};return t.forEach(r=>{ls(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...L(this,lr).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Pp(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Rp&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...L(this,lr).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){L(this,Ne).clear(),L(this,ar).clear()}},Ne=new WeakMap,ar=new WeakMap,lr=new WeakMap,Bo=new WeakMap,Wo=new WeakMap,ur=new WeakMap,Ho=new WeakMap,qo=new WeakMap,tg),HT=v.createContext(void 0),qT=({client:e,children:t})=>(v.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),C.jsx(HT.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ya.apply(this,arguments)}var pr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pr||(pr={}));const _m="popstate";function $T(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:l=""}=xs(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),$c("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof i=="string"?i:Vw(i))}function r(o,i){Ip(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return QT(t,n,r,e)}function gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ip(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VT(){return Math.random().toString(36).substr(2,8)}function zm(e,t){return{usr:e.state,key:e.key,idx:t}}function $c(e,t,n,r){return n===void 0&&(n=null),Ya({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xs(t):t,{state:n,key:t&&t.key||r||VT()})}function Vw(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function QT(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=pr.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Ya({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function p(){a=pr.Pop;let x=c(),h=x==null?null:x-u;u=x,l&&l({action:a,location:m.location,delta:h})}function f(x,h){a=pr.Push;let g=$c(m.location,x,h);n&&n(g,x),u=c()+1;let y=zm(g,u),b=m.createHref(g);try{s.pushState(y,"",b)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;o.location.assign(b)}i&&l&&l({action:a,location:m.location,delta:1})}function d(x,h){a=pr.Replace;let g=$c(m.location,x,h);n&&n(g,x),u=c();let y=zm(g,u),b=m.createHref(g);s.replaceState(y,"",b),i&&l&&l({action:a,location:m.location,delta:0})}function w(x){let h=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof x=="string"?x:Vw(x);return g=g.replace(/ $/,"%20"),gt(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let m={get action(){return a},get location(){return e(o,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(_m,p),l=x,()=>{o.removeEventListener(_m,p),l=null}},createHref(x){return t(o,x)},createURL:w,encodeLocation(x){let h=w(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:d,go(x){return s.go(x)}};return m}var Um;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Um||(Um={}));function GT(e,t,n){return n===void 0&&(n="/"),KT(e,t,n,!1)}function KT(e,t,n,r){let o=typeof t=="string"?xs(t):t,i=Kw(o.pathname||"/",n);if(i==null)return null;let s=Qw(e);YT(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=aA(i);a=iA(s[l],u,r)}return a}function Qw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(gt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Oo([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(gt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qw(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:rA(u,i.index),routesMeta:c})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Gw(i.path))o(i,s,l)}),t}function Gw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Gw(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function YT(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:oA(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XT=/^:[\w-]+$/,JT=3,ZT=2,eA=1,tA=10,nA=-2,Bm=e=>e==="*";function rA(e,t){let n=e.split("/"),r=n.length;return n.some(Bm)&&(r+=nA),t&&(r+=ZT),n.filter(o=>!Bm(o)).reduce((o,i)=>o+(XT.test(i)?JT:i===""?eA:tA),r)}function oA(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function iA(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",p=Wm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Wm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!p)return null;Object.assign(o,p.params),s.push({params:o,pathname:Oo([i,p.pathname]),pathnameBase:lA(Oo([i,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(i=Oo([i,p.pathnameBase]))}return s}function Wm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=sA(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,c,p)=>{let{paramName:f,isOptional:d}=c;if(f==="*"){let m=a[p]||"";s=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const w=a[p];return d&&!w?u[f]=void 0:u[f]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function sA(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ip(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function aA(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ip(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kw(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Oo=e=>e.join("/").replace(/\/\/+/g,"/"),lA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function uA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yw=["post","put","patch","delete"];new Set(Yw);const cA=["get",...Yw];new Set(cA);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(this,arguments)}const dA=v.createContext(null),pA=v.createContext(null),Xw=v.createContext(null),Rl=v.createContext(null),Il=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Jw=v.createContext(null);function Mp(){return v.useContext(Rl)!=null}function Zw(){return Mp()||gt(!1),v.useContext(Rl).location}function fA(e,t){return mA(e,t)}function mA(e,t,n,r){Mp()||gt(!1);let{navigator:o}=v.useContext(Xw),{matches:i}=v.useContext(Il),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Zw(),c;if(t){var p;let x=typeof t=="string"?xs(t):t;l==="/"||(p=x.pathname)!=null&&p.startsWith(l)||gt(!1),c=x}else c=u;let f=c.pathname||"/",d=f;if(l!=="/"){let x=l.replace(/^\//,"").split("/");d="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=GT(e,{pathname:d}),m=wA(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Oo([l,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Oo([l,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&m?v.createElement(Rl.Provider,{value:{location:Xa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:pr.Pop}},m):m}function hA(){let e=SA(),t=uA(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const gA=v.createElement(hA,null);class yA extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Il.Provider,{value:this.props.routeContext},v.createElement(Jw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vA(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(dA);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Il.Provider,{value:t},r)}function wA(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let c=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);c>=0||gt(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let p=s[c];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=c),p.route.id){let{loaderData:f,errors:d}=n,w=p.route.loader&&f[p.route.id]===void 0&&(!d||d[p.route.id]===void 0);if(p.route.lazy||w){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,p,f)=>{let d,w=!1,m=null,x=null;n&&(d=a&&p.route.id?a[p.route.id]:void 0,m=p.route.errorElement||gA,l&&(u<0&&f===0?(w=!0,x=null):u===f&&(w=!0,x=p.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,f+1)),g=()=>{let y;return d?y=m:w?y=x:p.route.Component?y=v.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=c,v.createElement(vA,{match:p,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?v.createElement(yA,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var Vc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vc||{});function xA(e){let t=v.useContext(pA);return t||gt(!1),t}function bA(e){let t=v.useContext(Il);return t||gt(!1),t}function CA(e){let t=bA(),n=t.matches[t.matches.length-1];return n.route.id||gt(!1),n.route.id}function SA(){var e;let t=v.useContext(Jw),n=xA(Vc.UseRouteError),r=CA(Vc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kA(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Qc(e){gt(!1)}function EA(e){let{basename:t="/",children:n=null,location:r,navigationType:o=pr.Pop,navigator:i,static:s=!1,future:a}=e;Mp()&&gt(!1);let l=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:l,navigator:i,static:s,future:Xa({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=xs(r));let{pathname:c="/",search:p="",hash:f="",state:d=null,key:w="default"}=r,m=v.useMemo(()=>{let x=Kw(c,l);return x==null?null:{location:{pathname:x,search:p,hash:f,state:d,key:w},navigationType:o}},[l,c,p,f,d,w,o]);return m==null?null:v.createElement(Xw.Provider,{value:u},v.createElement(Rl.Provider,{children:n,value:m}))}function TA(e){let{children:t,location:n}=e;return fA(Gc(t),n)}new Promise(()=>{});function Gc(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...t,o];if(r.type===v.Fragment){n.push.apply(n,Gc(r.props.children,i));return}r.type!==Qc&&gt(!1),!r.props.index||!r.props.children||gt(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Gc(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const AA="6";try{window.__reactRouterVersion=AA}catch{}const PA="startTransition",Hm=gd[PA];function RA(e){let{basename:t,children:n,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=$T({window:o,v5Compat:!0}));let s=i.current,[a,l]=v.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=v.useCallback(p=>{u&&Hm?Hm(()=>l(p)):l(p)},[l,u]);return v.useLayoutEffect(()=>s.listen(c),[s,c]),v.useEffect(()=>kA(r),[r]),v.createElement(EA,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var qm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qm||(qm={}));var $m;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($m||($m={}));function IA({children:e,...t}){return C.jsx(ek,{...t,children:e})}const MA=[{id:1,question:"What is Angular Framework?",answer:"Angular is a TypeScript-based open-source front-end platform that makes it easy to build web, mobile and desktop applications. The major features of this framework include declarative templates, dependency injection, end to end tooling which ease application development.",category:"Basics"},{id:2,question:"What is the difference between AngularJS and Angular?",answer:`Angular is a completely revamped component-based framework in which an application is a tree of individual components.

**Key Differences:**

**AngularJS:**
- Based on MVC architecture
- Uses JavaScript to build applications
- Uses controllers concept
- No support for mobile platforms
- Difficult to build SEO-friendly applications

**Angular:**
- Based on Service/Controller architecture  
- Uses TypeScript to build applications
- Uses component-based UI approach
- Fully supports mobile platforms
- Easier to build SEO-friendly applications`,category:"Basics"},{id:3,question:"What is TypeScript?",answer:"TypeScript is a strongly typed superset of JavaScript created by Microsoft that adds optional static typing and class-based object-oriented programming to the language. Angular is written in TypeScript.",category:"Basics"},{id:4,question:"Write a pictorial diagram of Angular architecture?",answer:`The main building blocks of an Angular application are:

1. **Modules** - NgModules collect related code into functional sets
2. **Components** - Define views with template, styles and logic
3. **Templates** - HTML with Angular markup
4. **Directives** - Transform the DOM
5. **Services** - Share data and logic across components
6. **Dependency Injection** - Provides services to components
7. **Routing** - Navigation between views`,category:"Architecture"},{id:5,question:"What are the key components of Angular?",answer:`Angular has the following key components:

1. **Component** - The basic building block of Angular apps, controls a patch of screen called a view
2. **Modules** - A module is a mechanism to group components, directives, pipes and services
3. **Templates** - Defines the view of a component
4. **Services** - Used for reusable data services to share between components
5. **Metadata** - Used to decorate a class so Angular knows what that class does`,category:"Architecture"},{id:6,question:"What are directives?",answer:`Directives are classes that add additional behavior to elements in your Angular applications. There are three kinds of directives:

1. **Components** - directives with a template
2. **Structural directives** - change the DOM layout by adding and removing DOM elements (e.g., *ngIf, *ngFor)
3. **Attribute directives** - change the appearance or behavior of an element (e.g., ngClass, ngStyle)`,category:"Directives"},{id:7,question:"What are components?",answer:`Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Components are a subset of directives, always associated with a template.

\`\`\`typescript
@Component({
  selector: 'app-root',
  template: '<h1>Hello Angular</h1>'
})
export class AppComponent {
  title = 'My App';
}
\`\`\``,category:"Components"},{id:8,question:"What are the differences between Component and Directive?",answer:`**Key Differences:**

**Component:**
- Used to create UI widgets
- Always has a template
- Only one component per DOM element
- Uses @Component decorator

**Directive:**
- Used to add behavior to existing DOM elements
- Never has a template
- Multiple directives per DOM element
- Uses @Directive decorator`,category:"Components"},{id:9,question:"What is a template?",answer:'A template is a HTML view where you display your data by binding controls to properties of an Angular component. Templates can include Angular-specific syntax like interpolation, property binding, event binding, and directives.\n\n```html\n<h1>{{title}}</h1>\n<button (click)="onClick()">Click me</button>\n```',category:"Templates"},{id:10,question:"What is a module?",answer:`Modules are logical boundaries in an application. An Angular app is divided into separate modules to separate the functionality of the application. Every Angular app has at least one module, the root module (AppModule).

\`\`\`typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
\`\`\``,category:"Modules"},{id:11,question:"What are lifecycle hooks available?",answer:`Angular component lifecycle hooks in order:

1. **ngOnChanges** - Called when input properties change
2. **ngOnInit** - Called once after the first ngOnChanges
3. **ngDoCheck** - Called during every change detection run
4. **ngAfterContentInit** - Called after content projection
5. **ngAfterContentChecked** - Called after projected content check
6. **ngAfterViewInit** - Called after view initialization
7. **ngAfterViewChecked** - Called after view check
8. **ngOnDestroy** - Called just before directive is destroyed`,category:"Lifecycle"},{id:12,question:"What is a data binding?",answer:'Data binding is a core concept in Angular that allows communication between a component and the DOM. There are four forms:\n\n1. **Interpolation** - `{{value}}`\n2. **Property Binding** - `[property]="value"`\n3. **Event Binding** - `(event)="handler()"`\n4. **Two-way Binding** - `[(ngModel)]="value"`',category:"Data Binding"},{id:13,question:"What is metadata?",answer:`Metadata is used to decorate a class so that it can configure the expected behavior of the class. Metadata is attached to TypeScript using decorators.

\`\`\`typescript
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // class logic
}
\`\`\`

Here @Component is a decorator and the object passed to it is metadata.`,category:"Basics"},{id:14,question:"What is Angular CLI?",answer:"Angular CLI (Command Line Interface) is a command-line tool that helps to create, develop, scaffold, and maintain Angular applications.\n\nCommon commands:\n- `ng new` - Create a new project\n- `ng serve` - Run development server\n- `ng generate` - Generate components, services, etc.\n- `ng build` - Build the application\n- `ng test` - Run unit tests",category:"CLI"},{id:15,question:"What is the difference between constructor and ngOnInit?",answer:`**Key Differences:**

**Constructor:**
- TypeScript feature
- Called when class is instantiated
- Used for dependency injection
- Called before ngOnInit
- Cannot access @Input values

**ngOnInit:**
- Angular lifecycle hook
- Called after Angular initializes component
- Used for initialization logic
- Called after constructor
- Can access @Input values`,category:"Lifecycle"},{id:16,question:"What is a service?",answer:`A service is a class with a focused purpose, typically to share data or logic across components. Services are decorated with @Injectable() to allow dependency injection.

\`\`\`typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return ['item1', 'item2'];
  }
}
\`\`\``,category:"Services"},{id:17,question:"What is dependency injection in Angular?",answer:`Dependency Injection (DI) is a design pattern where a class receives its dependencies from external sources rather than creating them itself. Angular's DI system provides declared dependencies to classes when instantiated.

\`\`\`typescript
constructor(private dataService: DataService) { }
\`\`\`

Benefits:
- Loose coupling
- Easier testing
- Code reusability`,category:"Dependency Injection"},{id:18,question:"How is Dependency Hierarchy formed?",answer:`Angular creates a hierarchical dependency injection system. Each component has its own injector that is a child of its parent component's injector.

1. **Root Injector** - Created when app bootstraps
2. **Module Injectors** - Created for lazy-loaded modules
3. **Component Injectors** - Created for each component

When a dependency is requested, Angular walks up the injector tree until it finds a provider.`,category:"Dependency Injection"},{id:19,question:"What is the purpose of async pipe?",answer:`The async pipe subscribes to an Observable or Promise and returns the latest value emitted. It automatically unsubscribes when the component is destroyed.

\`\`\`html
<div>{{ observable$ | async }}</div>
<div *ngIf="data$ | async as data">{{ data.name }}</div>
\`\`\`

Benefits:
- No manual subscription management
- Automatic cleanup
- Works with both Observables and Promises`,category:"Pipes"},{id:20,question:"What is the option to choose between inline and external template file?",answer:`You can choose between inline and external templates:

**Inline template:**
\`\`\`typescript
@Component({
  selector: 'app-root',
  template: '<h1>Hello</h1>'
})
\`\`\`

**External template:**
\`\`\`typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
\`\`\`

Use inline for small templates, external for larger ones.`,category:"Templates"},{id:21,question:"What is the purpose of *ngFor directive?",answer:'*ngFor is a structural directive used to iterate over a collection and render a template for each item.\n\n```html\n<li *ngFor="let item of items; let i = index; trackBy: trackByFn">\n  {{ i }}: {{ item.name }}\n</li>\n```\n\nExported values:\n- `index` - Position in iterable\n- `first`, `last` - Boolean flags\n- `even`, `odd` - Boolean flags',category:"Directives"},{id:22,question:"What is the purpose of *ngIf directive?",answer:`*ngIf is a structural directive that conditionally includes a template based on a truthy expression.

\`\`\`html
<div *ngIf="isVisible">Visible content</div>

<div *ngIf="user; else noUser">
  Hello {{ user.name }}
</div>
<ng-template #noUser>Please login</ng-template>
\`\`\``,category:"Directives"},{id:23,question:"What happens if you use script tag inside template?",answer:"Angular does not allow the `<script>` element in templates. If you include one, Angular will show a warning and ignore the script tag. This is a security feature to help prevent XSS (Cross-Site Scripting) attacks.\n\nThe warning message: `WARNING: sanitizing HTML stripped some content`",category:"Security"},{id:24,question:"What is interpolation?",answer:"Interpolation is a special syntax that Angular converts into property binding. It uses double curly braces `{{ }}` to display component data in the template.\n\n```html\n<h1>{{ title }}</h1>\n<p>{{ 1 + 1 }}</p>\n<p>{{ getFullName() }}</p>\n```\n\nInterpolation can contain expressions but not statements like assignments or control flow.",category:"Data Binding"},{id:25,question:"What are template expressions?",answer:"Template expressions produce a value and appear within double curly braces `{{ }}`. Angular executes the expression and converts it to a string.\n\nAllowed:\n- Property references: `{{ user.name }}`\n- Method calls: `{{ getName() }}`\n- Operators: `{{ a + b }}`\n- Pipes: `{{ date | date:'short' }}`\n\nNot allowed:\n- Assignments (`=`, `+=`)\n- `new` keyword\n- Chained expressions with `;`",category:"Templates"},{id:26,question:"What are template statements?",answer:'Template statements respond to events raised by binding targets like elements, components, or directives. They appear in quotes to the right of the `=` symbol in event bindings.\n\n```html\n<button (click)="deleteItem()">Delete</button>\n<input (keyup.enter)="addItem($event)">\n```\n\nTemplate statements can contain:\n- Simple assignments\n- Method calls\n- Chained statements with `;`',category:"Templates"},{id:27,question:"How do you categorize data binding types?",answer:'Data binding types by direction:\n\n**One-way from source to view:**\n- Interpolation: `{{ expression }}`\n- Property: `[target]="expression"`\n- Attribute: `[attr.name]="expression"`\n- Class: `[class.name]="expression"`\n- Style: `[style.name]="expression"`\n\n**One-way from view to source:**\n- Event: `(target)="statement"`\n\n**Two-way:**\n- Two-way: `[(target)]="expression"`',category:"Data Binding"},{id:28,question:"What are pipes?",answer:`Pipes transform displayed values in templates. They take data as input and transform it to a desired output.

\`\`\`html
{{ birthday | date:'fullDate' | uppercase }}
{{ price | currency:'USD' }}
{{ items | slice:0:10 }}
\`\`\`

Built-in pipes: DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, SlicePipe, AsyncPipe`,category:"Pipes"},{id:29,question:"What is a parameterized pipe?",answer:"A parameterized pipe accepts parameters to customize its output. Parameters are passed using colon `:` notation.\n\n```html\n{{ birthday | date:'fullDate' }}\n{{ amount | currency:'EUR':'symbol':'1.2-2' }}\n{{ value | slice:1:5 }}\n```\n\nMultiple parameters are separated by colons.",category:"Pipes"},{id:30,question:"How do you chain pipes?",answer:`You can chain pipes by using multiple pipe operators in sequence. The output of one pipe becomes the input of the next.

\`\`\`html
{{ birthday | date:'fullDate' | uppercase }}
{{ name | slice:0:10 | titlecase }}
\`\`\`

Pipes are applied left to right.`,category:"Pipes"},{id:31,question:"What is a custom pipe?",answer:`A custom pipe is a user-defined pipe created using @Pipe decorator.

\`\`\`typescript
@Pipe({ name: 'exponential' })
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
\`\`\`

Usage:
\`\`\`html
{{ 2 | exponential:10 }} <!-- Output: 1024 -->
\`\`\``,category:"Pipes"},{id:32,question:"Give an example of custom pipe?",answer:`Here's a custom pipe that filters an array:

\`\`\`typescript
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items || !value) return items;
    return items.filter(item => 
      item[field].toLowerCase().includes(value.toLowerCase())
    );
  }
}
\`\`\`

Usage:
\`\`\`html
<li *ngFor="let user of users | filter:'name':searchText">
  {{ user.name }}
</li>
\`\`\``,category:"Pipes"},{id:33,question:"What is the difference between pure and impure pipe?",answer:`**Key Differences:**

**Pure Pipe:**
- Called only when input changes
- Default behavior
- Better performance
- Uses reference checking

**Impure Pipe:**
- Called on every change detection
- Set \`pure: false\`
- Can impact performance
- Checks internal state`,category:"Pipes"},{id:34,question:"What is a bootstrapping module?",answer:`The bootstrapping module (typically AppModule) is the root module that Angular uses to launch the application. It's specified in \`main.ts\`.

\`\`\`typescript
// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
\`\`\`

The bootstrap array in @NgModule specifies the root component.`,category:"Modules"},{id:35,question:"What are observables?",answer:`Observables are a technique for event handling, asynchronous programming, and handling multiple values. They are part of RxJS library.

\`\`\`typescript
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});

observable.subscribe({
  next: (x) => console.log(x),
  complete: () => console.log('Done')
});
\`\`\``,category:"RxJS"},{id:36,question:"What is HttpClient and its benefits?",answer:`HttpClient is Angular's mechanism for communicating with a remote server over HTTP.

Benefits:
- Typed request and response objects
- Request and response interception
- Observable APIs
- Streamlined error handling
- Testability

\`\`\`typescript
constructor(private http: HttpClient) {}

getData() {
  return this.http.get<User[]>('/api/users');
}
\`\`\``,category:"HTTP"},{id:37,question:"Explain on how to use HttpClient with an example?",answer:`\`\`\`typescript
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(\`/api/users/\${user.id}\`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`/api/users/\${id}\`);
  }
}
\`\`\``,category:"HTTP"},{id:38,question:"How can you read full response?",answer:`By default, HttpClient returns the response body. To get the full response including headers and status, use the \`observe: 'response'\` option.

\`\`\`typescript
this.http.get<User>('/api/user', { observe: 'response' })
  .subscribe(response => {
    console.log(response.headers.get('Content-Type'));
    console.log(response.status);
    console.log(response.body);
  });
\`\`\``,category:"HTTP"},{id:39,question:"How do you perform Error handling?",answer:`Use RxJS operators like \`catchError\` for error handling:

\`\`\`typescript
import { catchError, throwError } from 'rxjs';

getData() {
  return this.http.get<Data>('/api/data').pipe(
    catchError(error => {
      if (error.status === 404) {
        return throwError(() => new Error('Not found'));
      }
      return throwError(() => new Error('Server error'));
    })
  );
}
\`\`\`

You can also use HTTP interceptors for global error handling.`,category:"HTTP"},{id:40,question:"What is RxJS?",answer:`RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. It's used extensively in Angular for:

- HTTP requests
- Event handling
- State management
- Async operations

Key concepts:
- **Observable** - Represents a stream of data
- **Observer** - Consumes observable notifications
- **Subscription** - Execution of an observable
- **Operators** - Transform, filter, combine streams
- **Subject** - Both observable and observer`,category:"RxJS"},{id:41,question:"What is subscribing?",answer:`Subscribing is how you execute an Observable and receive its values.

\`\`\`typescript
const observable = of(1, 2, 3);

const subscription = observable.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('Complete')
});

// Unsubscribe when done
subscription.unsubscribe();
\`\`\`

Always unsubscribe to prevent memory leaks, or use async pipe.`,category:"RxJS"},{id:42,question:"What is an observable?",answer:`An Observable is a function that creates an observer and attaches it to the source of data. It represents a stream of values over time.

\`\`\`typescript
const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  setTimeout(() => {
    subscriber.next('World');
    subscriber.complete();
  }, 1000);
});
\`\`\`

Observables are lazy - they don't execute until subscribed to.`,category:"RxJS"},{id:43,question:"What is an observer?",answer:"An observer is an object that defines callbacks to handle values delivered by an Observable.\n\n```typescript\nconst observer = {\n  next: (value) => console.log('Next:', value),\n  error: (err) => console.error('Error:', err),\n  complete: () => console.log('Complete')\n};\n\nobservable.subscribe(observer);\n```\n\nAn observer can have three callbacks: `next`, `error`, and `complete`.",category:"RxJS"},{id:44,question:"What is the difference between promise and observable?",answer:`**Key Differences:**

**Promise:**
- Emits single value
- Not lazy, executes immediately
- Not cancellable
- No operators
- Native to JavaScript

**Observable:**
- Emits multiple values over time
- Lazy, requires subscription
- Cancellable via unsubscribe
- Rich set of operators
- Provided by RxJS`,category:"RxJS"},{id:45,question:"What is multicasting?",answer:`Multicasting is the practice of broadcasting to multiple subscribers. By default, Observables are unicast (each subscription triggers a new execution).

\`\`\`typescript
import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe(x => console.log('A:', x));
subject.subscribe(x => console.log('B:', x));

subject.next(1); // Both A and B receive 1
subject.next(2); // Both A and B receive 2
\`\`\`

Subjects enable multicasting.`,category:"RxJS"},{id:46,question:"How do you perform error handling in observables?",answer:"Error handling in observables using RxJS operators:\n\n```typescript\nimport { catchError, retry, of } from 'rxjs';\n\nthis.http.get('/api/data').pipe(\n  retry(3), // Retry up to 3 times\n  catchError(error => {\n    console.error('Error:', error);\n    return of([]); // Return fallback value\n  })\n).subscribe(data => console.log(data));\n```\n\nOperators: `catchError`, `retry`, `retryWhen`, `throwError`",category:"RxJS"},{id:47,question:"What is the shorthand notation for subscribe method?",answer:`You can pass callbacks directly to subscribe instead of an observer object:

\`\`\`typescript
// Full observer object
observable.subscribe({
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('Done')
});

// Shorthand - just next callback
observable.subscribe(value => console.log(value));

// Shorthand with error
observable.subscribe({
  next: value => console.log(value),
  error: err => console.error(err)
});
\`\`\``,category:"RxJS"},{id:48,question:"What are the utility functions provided by RxJS?",answer:`RxJS provides utility functions for creating observables:

\`\`\`typescript
import { of, from, interval, timer, fromEvent } from 'rxjs';

// of - emit values
of(1, 2, 3).subscribe(x => console.log(x));

// from - convert array/promise/iterable
from([1, 2, 3]).subscribe(x => console.log(x));

// interval - emit every n ms
interval(1000).subscribe(x => console.log(x));

// fromEvent - from DOM events
fromEvent(button, 'click').subscribe(e => console.log(e));
\`\`\``,category:"RxJS"},{id:49,question:"What are observable creation functions?",answer:"RxJS provides functions to create observables:\n\n- `of()` - Emit provided values\n- `from()` - Convert array, promise, iterable\n- `interval()` - Emit sequential numbers at interval\n- `timer()` - Emit after delay\n- `fromEvent()` - From DOM events\n- `ajax()` - AJAX requests\n- `range()` - Emit range of numbers\n- `defer()` - Create lazily\n- `generate()` - Generate sequence",category:"RxJS"},{id:50,question:"What will happen if you do not supply handler for the observer?",answer:`If you don't supply a handler, the observable will still execute but those notifications will be ignored.

\`\`\`typescript
// Only handling next, error and complete are ignored
observable.subscribe(value => console.log(value));

// If an error occurs without error handler,
// it will be thrown as an exception
observable.subscribe({
  next: value => console.log(value)
  // No error handler - errors will throw
});
\`\`\`

Always provide an error handler in production code.`,category:"RxJS"},{id:51,question:"What are Angular elements?",answer:`Angular elements are Angular components packaged as custom elements (web components). They can be used in any HTML page, even outside Angular apps.

\`\`\`typescript
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [PopupComponent],
  entryComponents: [PopupComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const PopupElement = createCustomElement(PopupComponent, { injector });
    customElements.define('popup-element', PopupElement);
  }
}
\`\`\``,category:"Advanced"},{id:52,question:"What is the browser support of Angular Elements?",answer:`Angular Elements use Custom Elements API which is supported in:

- Chrome (native)
- Firefox (native)
- Safari (native)
- Edge Chromium (native)

For older browsers, you may need polyfills:

\`\`\`bash
npm install @webcomponents/custom-elements
\`\`\`

Add to polyfills.ts:
\`\`\`typescript
import '@webcomponents/custom-elements/custom-elements.min';
\`\`\``,category:"Advanced"},{id:53,question:"What are custom elements?",answer:`Custom elements are a web standard that allows you to create new HTML tags. Angular Elements exports Angular components as custom elements.

Benefits:
- Framework agnostic
- Reusable across projects
- Self-bootstrapping
- Works with any framework or vanilla JS

\`\`\`html
<!-- Can be used anywhere -->
<my-angular-element></my-angular-element>
\`\`\``,category:"Advanced"},{id:54,question:"Do I need to bootstrap custom elements?",answer:`No, custom elements are self-bootstrapping. They automatically start when added to the DOM.

The Angular component is instantiated when the custom element is:
- Parsed by the browser
- Dynamically created via JavaScript
- Added to the DOM via innerHTML

\`\`\`javascript
// Self-bootstraps when added
document.body.innerHTML = '<my-element></my-element>';

// Or
const el = document.createElement('my-element');
document.body.appendChild(el);
\`\`\``,category:"Advanced"},{id:55,question:"Explain how custom elements works internally?",answer:"When you create a custom element with Angular:\n\n1. **Registration** - `createCustomElement()` wraps component in CustomElementConstructor\n2. **Bridge** - Creates a bridge between custom element API and Angular\n3. **Lifecycle Mapping**:\n   - `connectedCallback` → component creation\n   - `disconnectedCallback` → component destruction\n   - `attributeChangedCallback` → input binding\n4. **Change Detection** - Integrates with Angular's change detection",category:"Advanced"},{id:56,question:"How to transfer components to custom elements?",answer:`Steps to convert Angular component to custom element:

\`\`\`typescript
import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';

@Component({
  selector: 'my-component',
  template: '<p>{{message}}</p>'
})
export class MyComponent {
  @Input() message: string;
}

// In module
constructor(injector: Injector) {
  const myElement = createCustomElement(MyComponent, { injector });
  customElements.define('my-element', myElement);
}
\`\`\``,category:"Advanced"},{id:57,question:"What are the mapping rules between Angular component and custom element?",answer:`**Mapping Rules:**

**Angular Component:**
- @Input() properties
- @Output() events
- Component selector
- Template
- ngOnInit
- ngOnDestroy

**Custom Element:**
- HTML attributes
- Custom events
- Element tag name
- Shadow DOM (optional)
- connectedCallback
- disconnectedCallback`,category:"Advanced"},{id:58,question:"How do you define typings for custom elements?",answer:`Define typings by extending HTMLElementTagNameMap:

\`\`\`typescript
// typings.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'my-element': MyElementAttributes;
  }
}

interface MyElementAttributes {
  message?: string;
  onMessageChange?: (event: CustomEvent<string>) => void;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': HTMLElement & { message: string };
  }
}
\`\`\``,category:"Advanced"},{id:59,question:"What are dynamic components?",answer:`Dynamic components are components loaded at runtime rather than defined in a template. Useful for:
- Modal dialogs
- Dynamic forms
- Plugin systems

\`\`\`typescript
@Component({ template: '<ng-container #container></ng-container>' })
export class HostComponent {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  loadComponent() {
    this.container.clear();
    const componentRef = this.container.createComponent(DynamicComponent);
    componentRef.instance.data = 'Hello';
  }
}
\`\`\``,category:"Advanced"},{id:60,question:"What are the various kinds of directives?",answer:`Angular has three types of directives:

1. **Components** - Directives with templates
\`\`\`typescript
@Component({ selector: 'app-hero', template: '...' })
\`\`\`

2. **Structural Directives** - Change DOM structure
\`\`\`html
<div *ngIf="show">Content</div>
<li *ngFor="let item of items">{{ item }}</li>
\`\`\`

3. **Attribute Directives** - Change appearance/behavior
\`\`\`html
<div [ngClass]="{'active': isActive}">
<p [ngStyle]="{'color': textColor}">
\`\`\``,category:"Directives"},{id:61,question:"How do you create directives using CLI?",answer:`Use Angular CLI to generate directives:

\`\`\`bash
# Generate a directive
ng generate directive highlight
# or shorthand
ng g d highlight

# In a specific folder
ng g d shared/directives/highlight

# With options
ng g d highlight --skip-tests --export
\`\`\`

This creates:
- \`highlight.directive.ts\`
- \`highlight.directive.spec.ts\` (unless --skip-tests)

And adds it to module declarations.`,category:"CLI"},{id:62,question:"Give an example for attribute directives?",answer:`Example of an attribute directive that changes background color:

\`\`\`typescript
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';
  @Input() defaultColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {}
}
\`\`\`

Usage: \`<p appHighlight="cyan">Hover me</p>\``,category:"Directives"},{id:63,question:"What is Angular Router?",answer:`Angular Router enables navigation between views. It interprets browser URL as instruction to navigate to a view.

\`\`\`typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
\`\`\``,category:"Routing"},{id:64,question:"What is the purpose of base href tag?",answer:'The `<base href>` tag tells the router how to compose navigation URLs. It\'s required for router to work correctly.\n\n```html\n<!-- index.html -->\n<head>\n  <base href="/">\n</head>\n```\n\nFor apps deployed in subdirectory:\n```html\n<base href="/my-app/">\n```\n\nOr set during build:\n```bash\nng build --base-href /my-app/\n```',category:"Routing"},{id:65,question:"What are the router imports?",answer:`Import RouterModule and Routes from @angular/router:

\`\`\`typescript
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Use forRoot in app module
    // RouterModule.forChild(routes) // Use forChild in feature modules
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
\`\`\``,category:"Routing"},{id:66,question:"What is router outlet?",answer:`Router outlet is a directive that marks where the router displays views. It acts as a placeholder.

\`\`\`html
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/about">About</a>
</nav>

<router-outlet></router-outlet>
<!-- Routed components render here -->
\`\`\`

You can have multiple named outlets:
\`\`\`html
<router-outlet></router-outlet>
<router-outlet name="sidebar"></router-outlet>
\`\`\``,category:"Routing"},{id:67,question:"What are router links?",answer:`RouterLink directive lets you link to routes. It's the router equivalent of href.

\`\`\`html
<!-- Static link -->
<a routerLink="/users">Users</a>

<!-- With parameters -->
<a [routerLink]="['/users', user.id]">{{ user.name }}</a>

<!-- With query params -->
<a [routerLink]="['/users']" [queryParams]="{page: 1}">Users</a>

<!-- Active styling -->
<a routerLink="/home" routerLinkActive="active">Home</a>
\`\`\``,category:"Routing"},{id:68,question:"What are active router links?",answer:`RouterLinkActive directive adds CSS class when link's route is active.

\`\`\`html
<a routerLink="/home" 
   routerLinkActive="active"
   [routerLinkActiveOptions]="{exact: true}">
  Home
</a>

<style>
.active {
  font-weight: bold;
  color: blue;
}
</style>
\`\`\`

\`exact: true\` means URL must match exactly, not just start with the path.`,category:"Routing"},{id:69,question:"What is router state?",answer:`Router state represents the state of the router as a tree of activated routes.

\`\`\`typescript
import { Router, ActivatedRoute } from '@angular/router';

constructor(
  private router: Router,
  private route: ActivatedRoute
) {
  // Current route info
  console.log(this.route.snapshot.params);
  console.log(this.route.snapshot.queryParams);
  
  // Router state tree
  console.log(this.router.routerState);
  console.log(this.router.url);
}
\`\`\``,category:"Routing"},{id:70,question:"What are router events?",answer:`Router emits navigation events you can subscribe to:

\`\`\`typescript
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

constructor(private router: Router) {
  router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
    }
    if (event instanceof NavigationEnd) {
      console.log('Navigation ended');
    }
  });
}
\`\`\`

Events: NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized, RouteConfigLoadStart, RouteConfigLoadEnd`,category:"Routing"},{id:71,question:"What is activated route?",answer:`ActivatedRoute provides access to information about the route associated with a component.

\`\`\`typescript
import { ActivatedRoute, ParamMap } from '@angular/router';

constructor(private route: ActivatedRoute) {
  // Snapshot (one-time)
  const id = this.route.snapshot.paramMap.get('id');
  
  // Observable (reactive)
  this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
  });
  
  // Query params
  this.route.queryParams.subscribe(params => {
    this.page = params['page'];
  });
}
\`\`\``,category:"Routing"},{id:72,question:"How do you define routes?",answer:`Define routes as an array of Route objects:

\`\`\`typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { 
    path: 'admin', 
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  { path: '**', component: NotFoundComponent } // Wildcard
];
\`\`\``,category:"Routing"},{id:73,question:"What is the purpose of Wildcard route?",answer:`Wildcard route (\`**\`) catches any URL that doesn't match defined routes. Used for 404 pages.

\`\`\`typescript
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Must be last!
  { path: '**', component: PageNotFoundComponent }
];
\`\`\`

Order matters - Angular uses first-match-wins strategy. Wildcard must be last.`,category:"Routing"},{id:74,question:"Do I need a Routing Module?",answer:`A separate routing module is recommended for:
- Clear separation of concerns
- Easier testing
- Feature module routing

\`\`\`typescript
// app-routing.module.ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// app.module.ts
@NgModule({
  imports: [AppRoutingModule]
})
export class AppModule {}
\`\`\`

For small apps, routes can be in AppModule directly.`,category:"Routing"},{id:75,question:"What is Angular Universal?",answer:`Angular Universal is server-side rendering (SSR) for Angular apps. Benefits:

- **SEO** - Search engines can crawl rendered content
- **Performance** - Faster initial load
- **Social media** - Proper previews when shared

\`\`\`bash
ng add @nguniversal/express-engine
ng build && ng run app:server
\`\`\`

The app renders on server first, then bootstraps client-side for interactivity.`,category:"Performance"},{id:76,question:"What are different types of compilation in Angular?",answer:`Angular has two compilation modes:

**1. JIT (Just-in-Time)**
- Compiles at runtime in browser
- Larger bundle size
- Slower startup
- Used in development

**2. AOT (Ahead-of-Time)**
- Compiles at build time
- Smaller bundle size
- Faster startup
- Better security
- Used in production

\`\`\`bash
# JIT (default in dev)
ng serve

# AOT (default in prod)
ng build --prod
\`\`\``,category:"Performance"},{id:77,question:"What is JIT?",answer:`JIT (Just-in-Time) compilation compiles the app in the browser at runtime.

Characteristics:
- Templates compiled in browser
- Compiler included in bundle
- Larger bundle size
- Slower initial rendering
- Better for development (faster rebuilds)

\`\`\`bash
ng serve # Uses JIT by default
ng build # JIT build
\`\`\`

The Angular compiler is shipped to the browser along with the application.`,category:"Performance"},{id:78,question:"What is AOT?",answer:`AOT (Ahead-of-Time) compilation compiles during build time.

Benefits:
- **Faster rendering** - Browser loads pre-compiled code
- **Smaller bundle** - No compiler in bundle
- **Security** - Templates checked at build time
- **Early error detection** - Template errors caught during build

\`\`\`bash
ng build --aot  # Explicit AOT
ng build --prod # AOT is default for prod
\`\`\`

AOT is the default for production builds since Angular 9.`,category:"Performance"},{id:79,question:"Why do we need compilation process?",answer:`Angular templates contain special syntax that browsers can't understand directly:

1. **Template parsing** - Angular syntax → JavaScript
2. **Component factories** - Create component instances
3. **Tree shaking** - Remove unused code
4. **Optimization** - Minification, bundling

Without compilation:
- Browser couldn't understand \`*ngIf\`, \`{{ }}\`, etc.
- Bindings wouldn't work
- Change detection wouldn't function`,category:"Performance"},{id:80,question:"What are the advantages of AOT?",answer:`AOT compilation advantages:

1. **Faster rendering** - Pre-compiled templates
2. **Fewer async requests** - Templates inlined
3. **Smaller bundle** - No compiler needed
4. **Template error detection** - Caught at build time
5. **Better security** - No eval() needed
6. **Improved code quality** - Static analysis

\`\`\`bash
# Production build uses AOT by default
ng build --configuration production
\`\`\``,category:"Performance"},{id:81,question:"What are the ways to control AOT compilation?",answer:`Control AOT with angular.json and tsconfig:

\`\`\`json
// angular.json
"build": {
  "options": {
    "aot": true,
    "buildOptimizer": true
  }
}
\`\`\`

\`\`\`json
// tsconfig.json
{
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true,
    "strictTemplates": true
  }
}
\`\`\`

CLI flags: \`ng build --aot\`, \`ng build --no-aot\``,category:"Performance"},{id:82,question:"What are the restrictions of metadata?",answer:`AOT compiler has metadata restrictions:

**Allowed:**
- Literals (strings, numbers, booleans)
- Arrays and objects
- Function calls (some)

**Not allowed:**
\`\`\`typescript
// ❌ Arrow functions in decorators
@Component({
  providers: [{ provide: MyService, useFactory: () => new MyService() }]
})

// ✅ Use named functions
export function myFactory() { return new MyService(); }
@Component({
  providers: [{ provide: MyService, useFactory: myFactory }]
})
\`\`\``,category:"Performance"},{id:83,question:"What are the three phases of AOT?",answer:`AOT compilation has three phases:

**1. Code Analysis**
- TypeScript compiler produces metadata
- Decorators are analyzed
- Type information extracted

**2. Code Generation**
- Interprets metadata
- Generates component factories
- Creates bindings

**3. Template Type Checking**
- Validates template expressions
- Checks binding types
- Reports errors at build time`,category:"Performance"},{id:84,question:"Can I use arrow functions in AOT?",answer:`Limited use of arrow functions in AOT:

\`\`\`typescript
// ❌ Not allowed in metadata (decorators)
@Component({
  providers: [{
    provide: MyService,
    useFactory: () => new MyService() // Error!
  }]
})

// ✅ Use exported function instead
export function createMyService() {
  return new MyService();
}

@Component({
  providers: [{
    provide: MyService,
    useFactory: createMyService
  }]
})
\`\`\`

Arrow functions work fine in component class methods.`,category:"Performance"},{id:85,question:"What is the purpose of metadata json files?",answer:`Metadata JSON files (\`.metadata.json\`) store decorator metadata for AOT:

- Generated alongside \`.d.ts\` files
- Used by AOT compiler
- Contains component/directive metadata
- Enables library AOT compilation

\`\`\`json
{
  "__symbolic": "module",
  "version": 4,
  "metadata": {
    "MyComponent": {
      "__symbolic": "class",
      "decorators": [...]
    }
  }
}
\`\`\`

When publishing libraries, include these files.`,category:"Performance"},{id:86,question:"Can I use any Angular class as entry component?",answer:`No, entry components must be:

1. **Bootstrapped components** - Listed in bootstrap array
2. **Routed components** - Referenced in route configuration
3. **Dynamically loaded** - Loaded via ViewContainerRef

\`\`\`typescript
@NgModule({
  bootstrap: [AppComponent],  // Entry component
  entryComponents: [
    DynamicDialogComponent    // For dynamic loading
  ]
})
\`\`\`

Note: Since Angular 9 (Ivy), entryComponents is mostly not needed.`,category:"Advanced"},{id:87,question:"What is Angular compiler?",answer:`Angular compiler (ngc) converts Angular decorators and templates into JavaScript:

\`\`\`bash
# Run compiler directly
node_modules/.bin/ngc

# Usually invoked via CLI
ng build
\`\`\`

It performs:
- Template compilation
- Metadata extraction
- TypeScript compilation
- Code generation

The Ivy compiler (default since Angular 9) generates more efficient code.`,category:"Advanced"},{id:88,question:"What is the role of ngModule metadata in compilation process?",answer:`NgModule metadata tells the compiler:

\`\`\`typescript
@NgModule({
  declarations: [  // What components/directives/pipes belong here
    MyComponent,
    MyDirective
  ],
  imports: [       // What other modules are needed
    CommonModule
  ],
  exports: [       // What to make available to importing modules
    MyComponent
  ],
  providers: [     // Services available to this module
    MyService
  ],
  bootstrap: [     // Root component for bootstrapping
    AppComponent
  ]
})
\`\`\``,category:"Modules"},{id:89,question:"How does Angular compiler work?",answer:`Angular compiler workflow:

1. **Parse** - Read TypeScript and HTML files
2. **Analyze** - Extract metadata from decorators
3. **Resolve** - Link components to templates
4. **Validate** - Check template expressions
5. **Generate** - Create JavaScript code
6. **Emit** - Output final bundle

\`\`\`
.ts files → TypeScript Compiler → .js files
           + Angular Compiler → component factories
\`\`\``,category:"Advanced"},{id:90,question:"How do you control compilation of Angular?",answer:`Control compilation via tsconfig.json:

\`\`\`json
{
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictTemplates": true,
    "strictInjectionParameters": true,
    "disableTypeScriptVersionCheck": false,
    "preserveWhitespaces": false,
    "enableIvy": true
  },
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

Strict mode enables more thorough checking.`,category:"Advanced"},{id:91,question:"What are the differences between ngOnInit and constructor?",answer:`**Key Differences:**

**Constructor:**
- TypeScript class feature
- Called first
- Dependency injection
- @Input not available
- Keep it simple

**ngOnInit:**
- Angular lifecycle hook
- Called after constructor
- Initialization logic
- @Input values available
- Complex initialization here`,category:"Lifecycle"},{id:92,question:"What is a zone in Angular?",answer:`Zone.js is a library that patches async APIs to trigger change detection. Angular uses it to know when to update the view.

\`\`\`typescript
// Zone.js patches these:
setTimeout(() => { /* Zone tracks this */ });
fetch('/api').then(() => { /* Zone tracks this */ });
element.addEventListener('click', () => { /* Zone tracks this */ });
\`\`\`

When async operations complete, Zone notifies Angular to run change detection.

You can run code outside Angular's zone for performance:
\`\`\`typescript
constructor(private ngZone: NgZone) {}

this.ngZone.runOutsideAngular(() => {
  // No change detection triggered
});
\`\`\``,category:"Change Detection"},{id:93,question:"What is the purpose of common module?",answer:`CommonModule provides common directives and pipes:

**Directives:**
- NgIf, NgFor, NgSwitch
- NgClass, NgStyle
- NgTemplateOutlet

**Pipes:**
- AsyncPipe, DatePipe
- DecimalPipe, CurrencyPipe
- JsonPipe, SlicePipe

\`\`\`typescript
@NgModule({
  imports: [CommonModule]  // For feature modules
})
\`\`\`

BrowserModule (for AppModule) includes CommonModule.`,category:"Modules"},{id:94,question:"What is the difference between BrowserModule and CommonModule?",answer:`**Key Differences:**

**BrowserModule:**
- Used in root AppModule only
- Includes CommonModule
- Has browser-specific providers
- Sets up app for browser

**CommonModule:**
- Used in feature modules
- Just directives and pipes
- No browser providers
- Portable to any platform`,category:"Modules"},{id:95,question:"What is ViewEncapsulation in Angular?",answer:`ViewEncapsulation defines how styles are scoped to components:

\`\`\`typescript
@Component({
  encapsulation: ViewEncapsulation.Emulated // Default
})
\`\`\`

**Types:**

1. **Emulated** (default) - Scoped styles via attribute selectors
2. **None** - Global styles, no encapsulation
3. **ShadowDom** - Native Shadow DOM encapsulation

\`\`\`typescript
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my',
  encapsulation: ViewEncapsulation.None
})
\`\`\``,category:"Components"},{id:96,question:"What are HTTP Interceptors?",answer:`HTTP Interceptors inspect and transform HTTP requests/responses.

\`\`\`typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token')
    });
    return next.handle(authReq);
  }
}

// Register in module
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
\`\`\`

Use cases: auth headers, logging, error handling, caching.`,category:"HTTP"},{id:97,question:"What are the applications of HTTP interceptors?",answer:`Common HTTP interceptor use cases:

1. **Authentication** - Add auth tokens to requests
2. **Logging** - Log requests and responses
3. **Error handling** - Global error handling
4. **Caching** - Cache responses
5. **Loading indicator** - Show/hide spinner
6. **Retry logic** - Retry failed requests
7. **Mock backend** - Return fake data for testing

\`\`\`typescript
// Loading interceptor example
intercept(req, next) {
  this.loader.show();
  return next.handle(req).pipe(
    finalize(() => this.loader.hide())
  );
}
\`\`\``,category:"HTTP"},{id:98,question:"Is multiple interceptors supported in Angular?",answer:`Yes, multiple interceptors are supported and executed in order:

\`\`\`typescript
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
\`\`\`

Execution order:
- Request: Auth → Logging → Error → Server
- Response: Server → Error → Logging → Auth

The \`multi: true\` is required for multiple providers.`,category:"HTTP"},{id:99,question:"How can I use interceptor for error handling?",answer:`Error handling interceptor:

\`\`\`typescript
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let message = 'An error occurred';
        
        if (error.status === 401) {
          message = 'Unauthorized';
        } else if (error.status === 404) {
          message = 'Not found';
        } else if (error.status === 500) {
          message = 'Server error';
        }
        
        this.snackBar.open(message, 'Close');
        return throwError(() => error);
      })
    );
  }
}
\`\`\``,category:"HTTP"},{id:100,question:"What is the purpose of ngSwitch directive?",answer:`NgSwitch displays one element from a set based on a switch expression:

\`\`\`html
<div [ngSwitch]="status">
  <p *ngSwitchCase="'active'">User is active</p>
  <p *ngSwitchCase="'inactive'">User is inactive</p>
  <p *ngSwitchCase="'pending'">User is pending</p>
  <p *ngSwitchDefault>Unknown status</p>
</div>
\`\`\`

Components:
- \`[ngSwitch]\` - The switch expression
- \`*ngSwitchCase\` - Match value
- \`*ngSwitchDefault\` - Default case`,category:"Directives"},{id:101,question:"Is it possible to use ngSwitch with ngFor?",answer:`Yes, you can combine ngSwitch with ngFor:

\`\`\`html
<ul>
  <li *ngFor="let item of items" [ngSwitch]="item.type">
    <span *ngSwitchCase="'text'">{{ item.content }}</span>
    <img *ngSwitchCase="'image'" [src]="item.url">
    <video *ngSwitchCase="'video'" [src]="item.url"></video>
    <span *ngSwitchDefault>Unknown type</span>
  </li>
</ul>
\`\`\`

The ngSwitch is on the same element as ngFor, or a child element.`,category:"Directives"},{id:102,question:"What is safe navigation operator?",answer:`The safe navigation operator (\`?.\`) guards against null/undefined values:

\`\`\`html
<!-- Without safe navigation -->
<p>{{ user && user.address && user.address.city }}</p>

<!-- With safe navigation -->
<p>{{ user?.address?.city }}</p>

<!-- In method calls -->
<p>{{ user?.getName?.() }}</p>

<!-- In arrays -->
<p>{{ items?.[0]?.name }}</p>
\`\`\`

If any part is null/undefined, the expression returns undefined instead of throwing an error.`,category:"Templates"},{id:103,question:"What is the purpose of NgModuleFactoryLoader?",answer:`NgModuleFactoryLoader was used to lazy load modules programmatically. It's deprecated in favor of dynamic imports.

\`\`\`typescript
// Old way (deprecated)
@Injectable()
export class LazyLoader {
  constructor(private loader: NgModuleFactoryLoader) {}
  
  load() {
    return this.loader.load('./lazy/lazy.module#LazyModule');
  }
}

// New way (recommended)
const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];
\`\`\``,category:"Modules"},{id:104,question:"What is the way to provide configuration inheritance?",answer:`Use forRoot/forChild pattern for configurable modules:

\`\`\`typescript
@NgModule({})
export class MyModule {
  static forRoot(config: MyConfig): ModuleWithProviders<MyModule> {
    return {
      ngModule: MyModule,
      providers: [
        { provide: MY_CONFIG, useValue: config },
        MyService
      ]
    };
  }
  
  static forChild(): ModuleWithProviders<MyModule> {
    return {
      ngModule: MyModule
    };
  }
}

// Usage
@NgModule({
  imports: [MyModule.forRoot({ apiUrl: '/api' })]
})
\`\`\``,category:"Modules"},{id:105,question:"What is a Lazy loading?",answer:`Lazy loading loads feature modules on demand, reducing initial bundle size.

\`\`\`typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
];
\`\`\`

Benefits:
- Faster initial load
- Smaller main bundle
- Load only when needed
- Better user experience

The admin module is loaded only when user navigates to /admin.`,category:"Performance"},{id:106,question:"What are workspace APIs?",answer:`Angular workspace APIs allow programmatic access to workspace configuration:

\`\`\`typescript
import { workspaces } from '@angular-devkit/core';

async function readWorkspace() {
  const host = workspaces.createWorkspaceHost(/* ... */);
  const { workspace } = await workspaces.readWorkspace('/', host);
  
  // Access projects
  workspace.projects.forEach((project, name) => {
    console.log(name, project.root);
  });
}
\`\`\`

Useful for building custom CLI tools and schematics.`,category:"CLI"},{id:107,question:"How do you update angular application?",answer:`Use ng update to update Angular:

\`\`\`bash
# Check what needs updating
ng update

# Update Angular core and CLI
ng update @angular/core @angular/cli

# Update specific package
ng update @angular/material

# Update all packages
ng update --all

# Force update
ng update @angular/core --force
\`\`\`

Always:
1. Commit current changes
2. Update incrementally (one major version at a time)
3. Check update.angular.io for migration guide`,category:"CLI"},{id:108,question:"What is Angular DevTools?",answer:`Angular DevTools is a browser extension for debugging Angular apps:

Features:
- Component tree visualization
- View component state and inputs
- Performance profiling
- Change detection analysis

Install from Chrome Web Store or Firefox Add-ons.

Usage:
1. Open browser DevTools
2. Go to "Angular" tab
3. Inspect components, profiler, etc.

Only works with Angular 9+ apps in development mode.`,category:"Tools"},{id:109,question:"What is subscribing?",answer:`Subscribing activates an Observable and receives its emissions:

\`\`\`typescript
const subscription = observable.subscribe({
  next: (value) => console.log('Value:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Complete')
});

// Shorthand for just next
observable.subscribe(value => console.log(value));

// Unsubscribe to prevent memory leaks
subscription.unsubscribe();
\`\`\`

Best practice: Use async pipe or unsubscribe in ngOnDestroy.`,category:"RxJS"},{id:110,question:"What is an AuthGuard in Angular?",answer:`AuthGuard protects routes from unauthorized access:

\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}

// Usage in routes
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
\`\`\``,category:"Routing"},{id:111,question:"What are the route guards in Angular?",answer:`**Route Guards:**

**CanActivate:**
- Control if route can be accessed

**CanActivateChild:**
- Control if child routes can be accessed

**CanDeactivate:**
- Control if user can leave route

**CanLoad:**
- Control if lazy module can be loaded

**Resolve:**
- Pre-fetch data before activation`,category:"Routing"},{id:112,question:"What is CanDeactivate guard?",answer:`CanDeactivate guard prevents navigation away from a route:

\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent): boolean | Observable<boolean> {
    if (component.hasUnsavedChanges()) {
      return confirm('You have unsaved changes. Leave anyway?');
    }
    return true;
  }
}

// Route config
{
  path: 'edit/:id',
  component: EditComponent,
  canDeactivate: [UnsavedChangesGuard]
}
\`\`\``,category:"Routing"},{id:113,question:"How do you pass data between sibling components?",answer:`Ways to share data between siblings:

**1. Through parent:**
\`\`\`typescript
// Parent binds both children
<child-a (dataChange)="data = $event"></child-a>
<child-b [data]="data"></child-b>
\`\`\`

**2. Shared service:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class DataService {
  private dataSubject = new BehaviorSubject<string>('');
  data$ = this.dataSubject.asObservable();
  setData(value: string) { this.dataSubject.next(value); }
}
\`\`\`

**3. State management (NgRx)**`,category:"Components"},{id:114,question:"What is the difference between @Input() and @Output()?",answer:`| @Input() | @Output() |
|---|---|
| Pass data into component | Emit events out of component |
| Property binding | Event binding |
| Parent → Child | Child → Parent |

\`\`\`typescript
@Component({
  selector: 'child',
  template: \`<button (click)="onClick()">{{ label }}</button>\`
})
export class ChildComponent {
  @Input() label: string;
  @Output() clicked = new EventEmitter<void>();
  
  onClick() {
    this.clicked.emit();
  }
}

// Parent template
<child [label]="'Click me'" (clicked)="handleClick()"></child>
\`\`\``,category:"Components"},{id:115,question:"What are the ways to trigger change detection manually?",answer:`Three ways to trigger change detection:

\`\`\`typescript
constructor(
  private cd: ChangeDetectorRef,
  private appRef: ApplicationRef,
  private ngZone: NgZone
) {}

// 1. ChangeDetectorRef - for current component
this.cd.detectChanges();  // Run CD immediately
this.cd.markForCheck();   // Mark for next CD cycle

// 2. ApplicationRef - for entire app
this.appRef.tick();

// 3. NgZone - run inside zone
this.ngZone.run(() => {
  // Updates will trigger CD
});
\`\`\``,category:"Change Detection"},{id:116,question:"What are the differences between OnPush and Default change detection?",answer:`**Key Differences:**

**Default Change Detection:**
- Checks on every CD cycle
- Less performant
- Automatic

**OnPush Change Detection:**
- Checks only when inputs change
- More performant
- Requires immutable data`,category:"Change Detection"},{id:117,question:"What are the lifecycle hooks for a component?",answer:`Component lifecycle hooks in order:

1. **constructor** - Class instantiation
2. **ngOnChanges** - Input property changes
3. **ngOnInit** - Component initialization
4. **ngDoCheck** - Custom change detection
5. **ngAfterContentInit** - After content projection
6. **ngAfterContentChecked** - After content check
7. **ngAfterViewInit** - After view initialization
8. **ngAfterViewChecked** - After view check
9. **ngOnDestroy** - Before destruction

Implement via interfaces: \`implements OnInit, OnDestroy\``,category:"Lifecycle"},{id:118,question:"What is a module in Angular?",answer:`A module is a container for a cohesive block of code:

\`\`\`typescript
@NgModule({
  declarations: [    // Components, directives, pipes
    AppComponent,
    HeaderComponent
  ],
  imports: [         // Other modules needed
    BrowserModule,
    HttpClientModule
  ],
  providers: [       // Services
    DataService
  ],
  exports: [         // What to share with other modules
    HeaderComponent
  ],
  bootstrap: [       // Root component (AppModule only)
    AppComponent
  ]
})
export class AppModule {}
\`\`\``,category:"Modules"},{id:119,question:"What is the purpose of the entryComponents array?",answer:`entryComponents was used to register components loaded dynamically:

\`\`\`typescript
@NgModule({
  declarations: [DialogComponent],
  entryComponents: [DialogComponent]  // For dynamic loading
})
export class AppModule {}
\`\`\`

**Note:** Since Angular 9 (Ivy), entryComponents is deprecated and no longer needed. Ivy compiles all components to be dynamically loadable.

With Ivy:
\`\`\`typescript
// Just declare it
@NgModule({
  declarations: [DialogComponent]
})
\`\`\``,category:"Modules"},{id:120,question:"What is the difference between declarations, imports, and exports in Angular module?",answer:`**Key Differences:**

**Declarations:**
- Components/directives/pipes belonging to this module

**Imports:**
- Other modules whose exports are needed here

**Exports:**
- Components/directives/pipes/modules to share`,category:"Modules"},{id:121,question:"What is feature module?",answer:`Feature modules organize code for specific application features:

\`\`\`typescript
// users.module.ts
@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {}
\`\`\`

Benefits:
- Code organization
- Lazy loading capability
- Encapsulation
- Reusability
- Team collaboration`,category:"Modules"},{id:122,question:"What is shared module?",answer:`Shared modules contain common components, directives, and pipes used across feature modules:

\`\`\`typescript
@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    HighlightDirective,
    TruncatePipe
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    LoadingSpinnerComponent,
    HighlightDirective,
    TruncatePipe
  ]
})
export class SharedModule {}

// Use in feature modules
@NgModule({
  imports: [SharedModule]
})
\`\`\``,category:"Modules"},{id:123,question:"What are core modules?",answer:`Core module contains singleton services and components used once:

\`\`\`typescript
@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
  providers: [AuthService, ApiService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded. Import only in AppModule.');
    }
  }
}
\`\`\`

Import only in AppModule to ensure singletons.`,category:"Modules"},{id:124,question:"How do you create a component?",answer:`Create components using Angular CLI:

\`\`\`bash
ng generate component my-component
# or shorthand
ng g c my-component
\`\`\`

Manually:
\`\`\`typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  title = 'Hello';
}
\`\`\`

Don't forget to add to module declarations!`,category:"Components"},{id:125,question:"How do you create a service?",answer:`Create services using Angular CLI:

\`\`\`bash
ng generate service my-service
# or shorthand
ng g s my-service
\`\`\`

Manually:
\`\`\`typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Singleton, available app-wide
})
export class MyService {
  getData() {
    return ['item1', 'item2'];
  }
}
\`\`\`

\`providedIn: 'root'\` makes it tree-shakeable and singleton.`,category:"Services"},{id:126,question:"What is a singleton service?",answer:`A singleton service has only one instance throughout the app:

\`\`\`typescript
// Method 1: providedIn (recommended)
@Injectable({ providedIn: 'root' })
export class SingletonService {}

// Method 2: In AppModule providers
@NgModule({
  providers: [SingletonService]
})
export class AppModule {}
\`\`\`

NOT singleton (new instance per component):
\`\`\`typescript
@Component({
  providers: [MyService]  // New instance for this component
})
\`\`\``,category:"Services"},{id:127,question:"What is the purpose of providedIn?",answer:`providedIn specifies where a service is provided:

\`\`\`typescript
// App-wide singleton (tree-shakeable)
@Injectable({ providedIn: 'root' })
export class AppService {}

// Platform-wide singleton
@Injectable({ providedIn: 'platform' })
export class PlatformService {}

// Module-scoped
@Injectable({ providedIn: FeatureModule })
export class FeatureService {}

// Any (new instance for each lazy module)
@Injectable({ providedIn: 'any' })
export class PerModuleService {}
\`\`\`

\`providedIn: 'root'\` is recommended for most services.`,category:"Dependency Injection"},{id:128,question:"What is a resolver in Angular?",answer:`Resolvers fetch data before route activation:

\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params['id']);
  }
}

// Route config
{
  path: 'user/:id',
  component: UserComponent,
  resolve: { user: UserResolver }
}

// Component
constructor(private route: ActivatedRoute) {
  this.user = this.route.snapshot.data['user'];
}
\`\`\``,category:"Routing"},{id:129,question:"What is HostBinding and HostListener?",answer:`HostBinding and HostListener interact with the host element:

\`\`\`typescript
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  // Bind to host properties
  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('class.active') isActive = false;
  @HostBinding('attr.aria-label') label = 'highlight';

  // Listen to host events
  @HostListener('mouseenter') onEnter() {
    this.bgColor = 'yellow';
    this.isActive = true;
  }

  @HostListener('mouseleave') onLeave() {
    this.bgColor = '';
    this.isActive = false;
  }
}
\`\`\``,category:"Directives"},{id:130,question:"What is the difference between ElementRef, TemplateRef, and ViewContainerRef?",answer:`| Type | Purpose |
|---|---|
| ElementRef | Reference to DOM element |
| TemplateRef | Reference to ng-template |
| ViewContainerRef | Container for dynamic views |

\`\`\`typescript
@Directive({ selector: '[appDynamic]' })
export class DynamicDirective {
  constructor(
    private elementRef: ElementRef,        // Access DOM
    private templateRef: TemplateRef<any>, // Access template
    private viewContainer: ViewContainerRef // Create views
  ) {
    // Create embedded view from template
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
\`\`\``,category:"Advanced"},{id:131,question:"What is Renderer2?",answer:`Renderer2 provides safe DOM manipulation that works across platforms:

\`\`\`typescript
constructor(private renderer: Renderer2, private el: ElementRef) {}

ngOnInit() {
  // Safe DOM manipulation
  this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  this.renderer.addClass(this.el.nativeElement, 'active');
  this.renderer.setAttribute(this.el.nativeElement, 'aria-label', 'text');
  
  // Create elements
  const div = this.renderer.createElement('div');
  const text = this.renderer.createText('Hello');
  this.renderer.appendChild(div, text);
}
\`\`\`

Prefer Renderer2 over direct DOM access for SSR compatibility.`,category:"Advanced"},{id:132,question:"What is ContentChild and ContentChildren?",answer:`ContentChild/ContentChildren query projected content:

\`\`\`typescript
@Component({
  selector: 'app-tabs',
  template: '<ng-content></ng-content>'
})
export class TabsComponent implements AfterContentInit {
  @ContentChild('header') header: ElementRef;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    console.log(this.header);
    this.tabs.forEach(tab => console.log(tab));
  }
}

// Usage
<app-tabs>
  <h1 #header>Title</h1>
  <app-tab>Tab 1</app-tab>
  <app-tab>Tab 2</app-tab>
</app-tabs>
\`\`\``,category:"Components"},{id:133,question:"What is ViewChild and ViewChildren?",answer:`ViewChild/ViewChildren query elements in the component's template:

\`\`\`typescript
@Component({
  template: \`
    <input #myInput>
    <app-child></app-child>
    <app-child></app-child>
  \`
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;
  @ViewChild(ChildComponent) child: ChildComponent;
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  ngAfterViewInit() {
    this.input.nativeElement.focus();
    this.child.doSomething();
    this.children.forEach(c => c.doSomething());
  }
}
\`\`\``,category:"Components"},{id:134,question:"What is the difference between @ViewChild and @ContentChild?",answer:`| @ViewChild | @ContentChild |
|---|---|
| Queries component's own template | Queries projected content |
| Available in ngAfterViewInit | Available in ngAfterContentInit |
| Elements defined in templateUrl | Elements between component tags |

\`\`\`typescript
// ViewChild - in component template
@Component({
  template: '<input #input>' // ViewChild targets this
})
export class MyComponent {
  @ViewChild('input') input: ElementRef;
}

// ContentChild - projected content
<my-component>
  <input #input>  <!-- ContentChild targets this -->
</my-component>
\`\`\``,category:"Components"},{id:135,question:"What is ng-content?",answer:`ng-content is used for content projection (transclusion):

\`\`\`typescript
// Card component
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="header"><ng-content select="[header]"></ng-content></div>
      <div class="body"><ng-content></ng-content></div>
      <div class="footer"><ng-content select="[footer]"></ng-content></div>
    </div>
  \`
})

// Usage
<app-card>
  <h1 header>Card Title</h1>
  <p>Card body content</p>
  <button footer>Action</button>
</app-card>
\`\`\``,category:"Components"},{id:136,question:"What is ng-template?",answer:`ng-template defines a template that isn't rendered by default:

\`\`\`html
<!-- Not rendered unless used -->
<ng-template #loading>
  <p>Loading...</p>
</ng-template>

<!-- Used with ngIf else -->
<div *ngIf="data; else loading">
  {{ data }}
</div>

<!-- Used with ngTemplateOutlet -->
<ng-container *ngTemplateOutlet="loading"></ng-container>

<!-- With context -->
<ng-template #item let-name="name" let-index="index">
  {{ index }}: {{ name }}
</ng-template>
\`\`\``,category:"Templates"},{id:137,question:"What is ng-container?",answer:`ng-container is a grouping element that doesn't render in DOM:

\`\`\`html
<!-- Without ng-container (adds extra div) -->
<div *ngIf="show">
  <span *ngFor="let item of items">{{ item }}</span>
</div>

<!-- With ng-container (no extra element) -->
<ng-container *ngIf="show">
  <span *ngFor="let item of items">{{ item }}</span>
</ng-container>

<!-- Multiple structural directives -->
<ng-container *ngFor="let item of items">
  <div *ngIf="item.visible">{{ item.name }}</div>
</ng-container>
\`\`\`

Useful when you need structural directives without wrapper elements.`,category:"Templates"},{id:138,question:"What is the purpose of ngTemplateOutlet directive?",answer:`ngTemplateOutlet renders a template dynamically:

\`\`\`html
<ng-template #defaultTemplate let-message="message">
  <p>Default: {{ message }}</p>
</ng-template>

<ng-template #customTemplate let-message="message">
  <strong>Custom: {{ message }}</strong>
</ng-template>

<!-- Render template with context -->
<ng-container 
  *ngTemplateOutlet="useCustom ? customTemplate : defaultTemplate; 
                     context: { message: 'Hello World' }">
</ng-container>
\`\`\`

Useful for customizable components accepting templates as inputs.`,category:"Templates"},{id:139,question:"What are template reference variables?",answer:`Template reference variables provide references to elements:

\`\`\`html
<!-- Reference to element -->
<input #nameInput>
<button (click)="greet(nameInput.value)">Greet</button>

<!-- Reference to directive -->
<form #myForm="ngForm">
  <input ngModel name="email" required>
  <button [disabled]="!myForm.valid">Submit</button>
</form>

<!-- Reference to component -->
<app-child #childComp></app-child>
<button (click)="childComp.doSomething()">Call Child Method</button>
\`\`\``,category:"Templates"},{id:140,question:"What is reactive form in Angular?",answer:`Reactive forms provide explicit, immutable form state:

\`\`\`typescript
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({ template: \`
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <input formControlName="name">
    <input formControlName="email">
    <button type="submit" [disabled]="form.invalid">Submit</button>
  </form>
\`})
export class MyComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
\`\`\``,category:"Forms"},{id:141,question:"What is template-driven form?",answer:`Template-driven forms use directives to create forms in template:

\`\`\`typescript
@Component({ template: \`
  <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
    <input name="name" ngModel required>
    <input name="email" ngModel required email>
    <button type="submit" [disabled]="myForm.invalid">Submit</button>
  </form>
\`})
export class MyComponent {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
\`\`\`

Requires FormsModule. Good for simple forms.`,category:"Forms"},{id:142,question:"What is the difference between reactive forms and template-driven forms?",answer:`**Key Differences:**

**Reactive Forms:**
- Module: ReactiveFormsModule
- Form model: Created in class
- Data flow: Synchronous
- Validation: In class
- Mutability: Immutable
- Testing: Easier
- Use case: Complex forms

**Template-driven Forms:**
- Module: FormsModule
- Form model: Created by directives
- Data flow: Asynchronous
- Validation: In template (directives)
- Mutability: Mutable
- Testing: Harder
- Use case: Simple forms`,category:"Forms"},{id:143,question:"What are form validators?",answer:`Validators check form control values:

\`\`\`typescript
import { Validators, AbstractControl } from '@angular/forms';

// Built-in validators
this.form = new FormGroup({
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]),
  email: new FormControl('', [Validators.required, Validators.email]),
  age: new FormControl('', [Validators.min(18), Validators.max(99)]),
  website: new FormControl('', Validators.pattern(/^https?:\\/\\/.+/))
});

// Custom validator
function noWhitespace(control: AbstractControl) {
  return control.value.trim() ? null : { whitespace: true };
}
\`\`\``,category:"Forms"},{id:144,question:"How do you create custom validators?",answer:`Create custom validators as functions:

\`\`\`typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Sync validator
function forbiddenName(name: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value === name;
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

// Async validator
function uniqueEmail(service: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return service.checkEmail(control.value).pipe(
      map(exists => exists ? { emailTaken: true } : null)
    );
  };
}

// Usage
email: new FormControl('', [Validators.required], [uniqueEmail(this.userService)])
\`\`\``,category:"Forms"},{id:145,question:"What is FormBuilder?",answer:`FormBuilder provides shorthand for creating form controls:

\`\`\`typescript
import { FormBuilder, Validators } from '@angular/forms';

@Component({ ... })
export class MyComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: ['']
      }),
      phones: this.fb.array([])
    });
  }
}
\`\`\`

Shorter syntax than using new FormGroup/FormControl directly.`,category:"Forms"},{id:146,question:"What is FormArray?",answer:`FormArray manages a dynamic list of form controls:

\`\`\`typescript
@Component({ template: \`
  <form [formGroup]="form">
    <div formArrayName="phones">
      <div *ngFor="let phone of phonesArray.controls; let i = index">
        <input [formControlName]="i">
        <button (click)="removePhone(i)">Remove</button>
      </div>
    </div>
    <button (click)="addPhone()">Add Phone</button>
  </form>
\`})
export class MyComponent {
  form = this.fb.group({
    phones: this.fb.array([''])
  });

  get phonesArray() { return this.form.get('phones') as FormArray; }
  
  addPhone() { this.phonesArray.push(this.fb.control('')); }
  removePhone(i: number) { this.phonesArray.removeAt(i); }
}
\`\`\``,category:"Forms"},{id:147,question:"What is the purpose of FormControlName directive?",answer:`FormControlName syncs a FormControl to a form input element:

\`\`\`html
<form [formGroup]="profileForm">
  <!-- Binds to form.controls['firstName'] -->
  <input formControlName="firstName">
  
  <!-- Nested group -->
  <div formGroupName="address">
    <input formControlName="street">
    <input formControlName="city">
  </div>
  
  <!-- Error display -->
  <div *ngIf="profileForm.get('firstName').errors?.required">
    First name is required
  </div>
</form>
\`\`\`

Must be used inside a formGroup.`,category:"Forms"},{id:148,question:"What are the validation states available in Angular forms?",answer:`Angular forms have these validation states:

\`\`\`typescript
const control = this.form.get('email');

// Validation status
control.valid;     // true if valid
control.invalid;   // true if invalid
control.pending;   // true if async validation in progress
control.disabled;  // true if disabled

// User interaction status
control.pristine;  // true if not modified
control.dirty;     // true if modified
control.touched;   // true if blurred
control.untouched; // true if not blurred

// Errors
control.errors;    // { required: true, email: true, ... }
control.hasError('required');  // true/false
\`\`\``,category:"Forms"},{id:149,question:"How do you reset a form?",answer:`Reset forms to initial state:

\`\`\`typescript
// Reset to empty
this.form.reset();

// Reset with values
this.form.reset({
  name: 'John',
  email: 'john@example.com'
});

// Reset specific control
this.form.get('name').reset();
this.form.get('name').reset('Default Name');

// Template-driven
<form #myForm="ngForm">
  <button (click)="myForm.resetForm()">Reset</button>
</form>
\`\`\`

Reset clears values and resets validation states (pristine, untouched).`,category:"Forms"},{id:150,question:"What is setValue and patchValue?",answer:`setValue and patchValue update form values:

\`\`\`typescript
this.form = this.fb.group({
  name: [''],
  email: [''],
  address: this.fb.group({
    city: [''],
    zip: ['']
  })
});

// setValue - must provide ALL controls
this.form.setValue({
  name: 'John',
  email: 'john@example.com',
  address: { city: 'NYC', zip: '10001' }
});

// patchValue - can provide partial values
this.form.patchValue({
  name: 'Jane'
  // Other fields unchanged
});
\`\`\`

setValue throws error if structure doesn't match.`,category:"Forms"},{id:151,question:"What is an Angular library?",answer:`An Angular library is a reusable Angular project that can be published and shared:

\`\`\`bash
# Create library
ng generate library my-lib

# Build library
ng build my-lib

# Publish to npm
cd dist/my-lib
npm publish
\`\`\`

Library structure:
- \`projects/my-lib/src/lib/\` - Library code
- \`projects/my-lib/src/public-api.ts\` - Public exports
- \`projects/my-lib/ng-package.json\` - Build config

Use ng-packagr for building.`,category:"Advanced"},{id:152,question:"How do you update library dependencies with ng update?",answer:`Update library dependencies:

\`\`\`bash
# Check for updates
ng update

# Update Angular packages
ng update @angular/core @angular/cli

# Update third-party library
ng update @angular/material

# With migration schematics
ng update @angular/core --migrate-only

# Force update (skip peer dependency check)
ng update @angular/core --force
\`\`\`

Libraries can provide update schematics for automatic migration.`,category:"CLI"},{id:153,question:"What is ngcc?",answer:`ngcc (Angular Compatibility Compiler) compiles pre-Ivy libraries to Ivy:

\`\`\`bash
# Run manually
node_modules/.bin/ngcc

# With options
ngcc --properties es2015 browser main
\`\`\`

ngcc:
- Converts ViewEngine libraries to Ivy
- Runs automatically during npm install
- Required for using non-Ivy libraries with Ivy apps

Note: Since Angular 12+, most libraries are Ivy-native, so ngcc usage decreases.`,category:"Advanced"},{id:154,question:"What is Angular Ivy?",answer:`Ivy is Angular's next-generation compilation and rendering pipeline (default since Angular 9):

Benefits:
- **Smaller bundles** - Better tree shaking
- **Faster compilation** - Incremental builds
- **Improved debugging** - Better error messages
- **Locality** - Components compiled independently
- **Dynamic loading** - Easier lazy loading

\`\`\`json
// angular.json (Ivy is default)
{
  "angularCompilerOptions": {
    "enableIvy": true
  }
}
\`\`\``,category:"Advanced"},{id:155,question:"What are the features of Ivy?",answer:`Key Ivy features:

1. **Locality** - Each component compiled independently
2. **Tree Shaking** - Unused code removed
3. **Incremental DOM** - Efficient updates
4. **No entryComponents** - All components dynamically loadable
5. **Better debugging** - Improved stack traces
6. **Faster rebuilds** - Only changed files recompiled
7. **Smaller bundles** - Up to 40% smaller
8. **Improved type checking** - Strict template checks

\`\`\`bash
# Enable strict mode for maximum benefits
ng new my-app --strict
\`\`\``,category:"Advanced"},{id:156,question:"How do you add web workers to Angular?",answer:`Add web workers using Angular CLI:

\`\`\`bash
ng generate web-worker my-worker
\`\`\`

Usage:
\`\`\`typescript
// app.component.ts
if (typeof Worker !== 'undefined') {
  const worker = new Worker(new URL('./my-worker.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log('From worker:', data);
  };
  worker.postMessage('Hello');
}

// my-worker.worker.ts
addEventListener('message', ({ data }) => {
  const result = heavyComputation(data);
  postMessage(result);
});
\`\`\``,category:"Performance"},{id:157,question:"What is Angular service worker?",answer:`Angular service worker enables PWA features:

\`\`\`bash
ng add @angular/pwa
\`\`\`

Features:
- **Offline support** - Cache resources
- **Push notifications** - Background messages
- **Background sync** - Defer actions until online
- **Automatic updates** - App version management

\`\`\`typescript
// Check for updates
constructor(private swUpdate: SwUpdate) {
  swUpdate.available.subscribe(event => {
    if (confirm('New version available. Update?')) {
      window.location.reload();
    }
  });
}
\`\`\``,category:"Performance"},{id:158,question:"How do you set up service worker in Angular app?",answer:`Setup Angular service worker:

\`\`\`bash
# Add PWA support
ng add @angular/pwa

# Build for production
ng build --configuration production
\`\`\`

Configure in ngsw-config.json:
\`\`\`json
{
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": ["/index.html", "/*.css", "/*.js"]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "resources": {
        "files": ["/assets/external-apps/react-app/dist/assets/**"]
      }
    }
  ]
}
\`\`\``,category:"Performance"},{id:159,question:"What is Angular schematic?",answer:`Schematics are code generators that transform projects:

\`\`\`bash
# Use existing schematics
ng generate component my-component
ng add @angular/material

# Create custom schematic
npm install -g @angular-devkit/schematics-cli
schematics blank --name=my-schematic
\`\`\`

Custom schematic:
\`\`\`typescript
export function mySchematic(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    tree.create('hello.txt', 'Hello World');
    return tree;
  };
}
\`\`\``,category:"CLI"},{id:160,question:"What are rule and tree in schematic?",answer:`In Angular schematics:

**Tree** - Virtual file system representing project files
\`\`\`typescript
tree.read('file.ts');           // Read file
tree.create('new.ts', content); // Create file
tree.overwrite('file.ts', content); // Overwrite
tree.delete('file.ts');         // Delete file
\`\`\`

**Rule** - Function that transforms Tree
\`\`\`typescript
export function myRule(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // Transform tree
    return tree;
  };
}

// Chain rules
return chain([
  rule1(),
  rule2()
]);
\`\`\``,category:"CLI"},{id:161,question:"What is schematics CLI?",answer:`Schematics CLI creates and runs schematics:

\`\`\`bash
# Install
npm install -g @angular-devkit/schematics-cli

# Create blank schematic
schematics blank --name=my-schematics

# Create schematic with sample
schematics schematic --name=my-schematics

# Run schematic
schematics ./my-schematics:my-schematic --dry-run

# Build and publish
cd my-schematics
npm run build
npm publish
\`\`\``,category:"CLI"},{id:162,question:"How do you test a schematic?",answer:`Test schematics using SchematicTestRunner:

\`\`\`typescript
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';

describe('my-schematic', () => {
  const runner = new SchematicTestRunner(
    'my-schematics',
    require.resolve('../collection.json')
  );

  it('should create files', async () => {
    const tree = await runner.runSchematicAsync(
      'my-schematic',
      { name: 'test' },
      Tree.empty()
    ).toPromise();

    expect(tree.files).toContain('/test.ts');
    expect(tree.readContent('/test.ts')).toContain('export class');
  });
});
\`\`\``,category:"Testing"},{id:163,question:"What is APP_INITIALIZER?",answer:`APP_INITIALIZER runs functions before app starts:

\`\`\`typescript
function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig().toPromise();
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    }
  ]
})
export class AppModule {}
\`\`\`

Use cases:
- Load configuration
- Initialize services
- Authenticate user
- Load translations`,category:"Advanced"},{id:164,question:"How do you do internationalization (i18n) in Angular?",answer:`Angular provides built-in i18n support:

\`\`\`bash
# Add localize package
ng add @angular/localize

# Extract messages
ng extract-i18n --output-path src/locale
\`\`\`

Mark text for translation:
\`\`\`html
<h1 i18n="@@welcomeHeader">Welcome</h1>
<p i18n="meaning|description@@id">Hello World</p>
\`\`\`

Build for locale:
\`\`\`bash
ng build --localize
ng build --configuration=fr
\`\`\`

Configure in angular.json for multiple locales.`,category:"Advanced"},{id:165,question:"What is Angular language service?",answer:`Angular Language Service provides IDE features:

- **Autocompletion** - Template and TypeScript
- **Error checking** - Real-time validation
- **Go to definition** - Navigate to components
- **Quick info** - Hover documentation
- **Diagnostic messages** - Template errors

Install in VS Code:
1. Search "Angular Language Service"
2. Install extension

Or for other editors, use:
\`\`\`bash
npm install @angular/language-service --save-dev
\`\`\``,category:"Tools"},{id:166,question:"What is property binding?",answer:`Property binding sets element properties from component:

\`\`\`html
<!-- Bind to element property -->
<img [src]="imageUrl">
<button [disabled]="isDisabled">Click</button>

<!-- Bind to directive input -->
<div [ngClass]="{'active': isActive}">

<!-- Bind to component input -->
<app-child [data]="parentData"></app-child>

<!-- Attribute binding (when no property exists) -->
<td [attr.colspan]="colSpan">Cell</td>

<!-- Class binding -->
<div [class.highlight]="isHighlighted">

<!-- Style binding -->
<p [style.color]="textColor">
\`\`\``,category:"Data Binding"},{id:167,question:"What is attribute binding?",answer:`Attribute binding sets HTML attributes (not properties):

\`\`\`html
<!-- Use when element doesn't have corresponding property -->
<td [attr.colspan]="colSpan">Cell</td>
<table [attr.role]="tableRole">

<!-- ARIA attributes -->
<button [attr.aria-label]="label">
<div [attr.aria-expanded]="isExpanded">

<!-- Data attributes -->
<div [attr.data-id]="itemId">

<!-- SVG attributes -->
<svg>
  <rect [attr.x]="xPos" [attr.y]="yPos"></rect>
</svg>
\`\`\`

Use \`[attr.name]\` syntax. Prefer property binding when possible.`,category:"Data Binding"},{id:168,question:"What is the difference between property binding and attribute binding?",answer:`**Key Differences:**

**Property Binding:**
- Sets DOM property
- Uses \`[property]\` syntax
- Type is preserved
- More common

**Attribute Binding:**
- Sets HTML attribute
- Uses \`[attr.name]\` syntax
- Always string
- Use when no property exists`,category:"Data Binding"},{id:169,question:"What is event binding?",answer:`Event binding listens to DOM events:

\`\`\`html
<!-- Basic event -->
<button (click)="onClick()">Click</button>

<!-- With $event -->
<input (input)="onInput($event)">

<!-- Keyboard events -->
<input (keyup.enter)="onEnter()">
<input (keydown.escape)="onEscape()">
<input (keyup.control.shift.a)="onShortcut()">

<!-- Multiple events -->
<div (mouseenter)="onEnter()" (mouseleave)="onLeave()">

<!-- Custom component events -->
<app-child (notify)="onNotify($event)"></app-child>
\`\`\``,category:"Data Binding"},{id:170,question:"What is two-way binding?",answer:`Two-way binding syncs data in both directions:

\`\`\`html
<!-- Using ngModel (requires FormsModule) -->
<input [(ngModel)]="name">

<!-- Equivalent to: -->
<input [ngModel]="name" (ngModelChange)="name = $event">

<!-- Custom two-way binding -->
<app-counter [(value)]="count"></app-counter>
\`\`\`

\`\`\`typescript
// Custom component with two-way binding
@Component({ selector: 'app-counter', ... })
export class CounterComponent {
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();
  
  increment() {
    this.valueChange.emit(this.value + 1);
  }
}
\`\`\``,category:"Data Binding"},{id:171,question:"What are structural directives?",answer:`Structural directives change DOM structure by adding/removing elements:

\`\`\`html
<!-- *ngIf -->
<div *ngIf="show">Visible</div>

<!-- *ngFor -->
<li *ngFor="let item of items">{{ item }}</li>

<!-- *ngSwitch -->
<div [ngSwitch]="status">
  <p *ngSwitchCase="'active'">Active</p>
  <p *ngSwitchDefault>Unknown</p>
</div>
\`\`\`

The \`*\` is syntactic sugar for ng-template:
\`\`\`html
<ng-template [ngIf]="show">
  <div>Visible</div>
</ng-template>
\`\`\``,category:"Directives"},{id:172,question:"What are attribute directives?",answer:`Attribute directives change appearance or behavior:

\`\`\`html
<!-- Built-in -->
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
<div [ngStyle]="{'color': color, 'font-size': size + 'px'}">

<!-- Custom directive -->
<p appHighlight>Highlighted text</p>
<p [appHighlight]="'yellow'">Yellow highlight</p>
\`\`\`

\`\`\`typescript
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @Input('appHighlight') color = 'lightblue';
  
  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  
  constructor(private el: ElementRef) {}
}
\`\`\``,category:"Directives"},{id:173,question:"What is trackBy in ngFor?",answer:`trackBy optimizes ngFor by tracking items by custom identity:

\`\`\`html
<li *ngFor="let item of items; trackBy: trackByFn">
  {{ item.name }}
</li>
\`\`\`

\`\`\`typescript
trackByFn(index: number, item: Item): number {
  return item.id; // Return unique identifier
}
\`\`\`

Without trackBy:
- Angular tracks by object reference
- Entire list re-rendered on change

With trackBy:
- Angular tracks by custom ID
- Only changed items re-rendered
- Better performance for large lists`,category:"Directives"},{id:174,question:"What is ngClass directive?",answer:`ngClass dynamically adds/removes CSS classes:

\`\`\`html
<!-- String -->
<div [ngClass]="'first second'">...</div>

<!-- Array -->
<div [ngClass]="['first', 'second']">...</div>

<!-- Object (recommended) -->
<div [ngClass]="{
  'active': isActive,
  'disabled': isDisabled,
  'highlight': isHighlighted
}">...</div>

<!-- With expressions -->
<div [ngClass]="getClasses()">...</div>

<!-- Component property -->
<div [ngClass]="classObject">...</div>
\`\`\``,category:"Directives"},{id:175,question:"What is ngStyle directive?",answer:`ngStyle dynamically sets inline styles:

\`\`\`html
<!-- Object syntax -->
<div [ngStyle]="{
  'color': textColor,
  'font-size': fontSize + 'px',
  'background-color': bgColor
}">...</div>

<!-- With expressions -->
<div [ngStyle]="getStyles()">...</div>

<!-- Conditional styles -->
<div [ngStyle]="{
  'font-weight': isImportant ? 'bold' : 'normal',
  'color': isError ? 'red' : 'black'
}">...</div>
\`\`\`

For single styles, use style binding:
\`\`\`html
<div [style.color]="textColor">...</div>
\`\`\``,category:"Directives"},{id:176,question:"What is the nullish coalescing operator in Angular?",answer:"Nullish coalescing (`??`) provides default for null/undefined:\n\n```html\n<!-- Template usage (Angular 12+) -->\n<p>{{ user?.name ?? 'Guest' }}</p>\n<p>{{ count ?? 0 }}</p>\n\n<!-- Difference from || -->\n{{ value || 'default' }}  <!-- Uses default for any falsy value -->\n{{ value ?? 'default' }}  <!-- Uses default only for null/undefined -->\n```\n\n```typescript\n// In TypeScript\nconst name = user?.name ?? 'Guest';\nconst count = response.count ?? 0; // 0 is valid, not replaced\n```\n\n`??` is safer than `||` when 0 or '' are valid values.",category:"Templates"},{id:177,question:"What is the non-null assertion operator?",answer:`Non-null assertion (\`!\`) tells TypeScript a value isn't null:

\`\`\`typescript
// TypeScript
interface User { name: string; }
let user: User | null = getUser();

// Without assertion - error
console.log(user.name); // Error: possibly null

// With assertion - OK
console.log(user!.name); // Tells TS "trust me, it's not null"

// In templates
<p>{{ user!.name }}</p>
\`\`\`

**Warning:** Use sparingly. Prefer proper null checks or safe navigation (\`?.\`).

\`\`\`html
<!-- Safer alternatives -->
<p *ngIf="user">{{ user.name }}</p>
<p>{{ user?.name }}</p>
\`\`\``,category:"Templates"},{id:178,question:"How do you perform testing in Angular?",answer:`Angular uses Jasmine and Karma for testing:

\`\`\`typescript
// Component test
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Run tests
ng test
\`\`\``,category:"Testing"},{id:179,question:"What is TestBed?",answer:`TestBed configures testing modules for Angular tests:

\`\`\`typescript
import { TestBed, ComponentFixture } from '@angular/core/testing';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [MyComponent],
    imports: [FormsModule, HttpClientTestingModule],
    providers: [
      { provide: DataService, useClass: MockDataService }
    ]
  }).compileComponents();
});

// Create component
const fixture = TestBed.createComponent(MyComponent);
const component = fixture.componentInstance;

// Access services
const service = TestBed.inject(DataService);
\`\`\``,category:"Testing"},{id:180,question:"What is ComponentFixture?",answer:`ComponentFixture provides access to component and its DOM:

\`\`\`typescript
const fixture: ComponentFixture<MyComponent> = TestBed.createComponent(MyComponent);

// Component instance
const component = fixture.componentInstance;

// DOM element
const element = fixture.nativeElement;
const debugElement = fixture.debugElement;

// Trigger change detection
fixture.detectChanges();

// Query DOM
const button = fixture.debugElement.query(By.css('button'));
const items = fixture.debugElement.queryAll(By.css('.item'));

// Simulate events
button.triggerEventHandler('click', null);
fixture.detectChanges();
\`\`\``,category:"Testing"},{id:181,question:"How do you test a component with @Input?",answer:`Test @Input by setting properties on component instance:

\`\`\`typescript
@Component({
  selector: 'app-user',
  template: '<h1>{{ user.name }}</h1>'
})
export class UserComponent {
  @Input() user: User;
}

// Test
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should display user name', () => {
    component.user = { name: 'John' };
    fixture.detectChanges();
    
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('John');
  });
});
\`\`\``,category:"Testing"},{id:182,question:"How do you test a component with @Output?",answer:`Test @Output by subscribing to the EventEmitter:

\`\`\`typescript
@Component({
  selector: 'app-button',
  template: '<button (click)="onClick()">Click</button>'
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<void>();
  onClick() { this.clicked.emit(); }
}

// Test
describe('ButtonComponent', () => {
  it('should emit clicked event', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    
    let emitted = false;
    component.clicked.subscribe(() => emitted = true);
    
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    
    expect(emitted).toBeTrue();
  });
});
\`\`\``,category:"Testing"},{id:183,question:"How do you test a service?",answer:`Test services by injecting them in tests:

\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}
  
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>('/api/data');
  }
}

// Test
describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch data', () => {
    service.getData().subscribe(data => {
      expect(data.length).toBe(2);
    });

    const req = httpMock.expectOne('/api/data');
    req.flush([{ id: 1 }, { id: 2 }]);
  });
});
\`\`\``,category:"Testing"},{id:184,question:"What is HttpTestingController?",answer:`HttpTestingController mocks HTTP requests in tests:

\`\`\`typescript
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

let httpMock: HttpTestingController;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  });
  httpMock = TestBed.inject(HttpTestingController);
});

afterEach(() => {
  httpMock.verify(); // Verify no pending requests
});

it('should make GET request', () => {
  service.getData().subscribe(data => expect(data).toEqual(mockData));
  
  const req = httpMock.expectOne('/api/data');
  expect(req.request.method).toBe('GET');
  req.flush(mockData); // Provide mock response
});
\`\`\``,category:"Testing"},{id:185,question:"What is e2e testing in Angular?",answer:`End-to-end testing tests the full application:

\`\`\`bash
# Using Cypress (recommended)
ng add @cypress/schematic
ng e2e

# Using Protractor (deprecated)
ng e2e
\`\`\`

Cypress example:
\`\`\`typescript
describe('My App', () => {
  it('should navigate to users page', () => {
    cy.visit('/');
    cy.get('a[href="/users"]').click();
    cy.url().should('include', '/users');
    cy.get('.user-list').should('exist');
  });

  it('should login', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('user@test.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
\`\`\``,category:"Testing"},{id:186,question:"What is animation in Angular?",answer:`Angular animations provide state-based animations:

\`\`\`typescript
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', animate('1s')),
      transition('closed => open', animate('0.5s'))
    ])
  ]
})
export class MyComponent {
  isOpen = true;
}
\`\`\`

\`\`\`html
<div [@openClose]="isOpen ? 'open' : 'closed'">Content</div>
\`\`\``,category:"Animations"},{id:187,question:"What are the steps to use animation module?",answer:`Steps to use Angular animations:

1. **Import BrowserAnimationsModule:**
\`\`\`typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule]
})
export class AppModule {}
\`\`\`

2. **Import animation functions:**
\`\`\`typescript
import { trigger, state, style, transition, animate } from '@angular/animations';
\`\`\`

3. **Add animations to component:**
\`\`\`typescript
@Component({
  animations: [trigger('myAnimation', [...])]
})
\`\`\`

4. **Use in template:**
\`\`\`html
<div [@myAnimation]="state">Content</div>
\`\`\``,category:"Animations"},{id:188,question:"What are state and transition in animations?",answer:`State defines style at a given state, transition defines animation between states:

\`\`\`typescript
trigger('fadeInOut', [
  // States
  state('visible', style({ opacity: 1 })),
  state('hidden', style({ opacity: 0 })),
  
  // Transitions
  transition('visible => hidden', animate('300ms ease-out')),
  transition('hidden => visible', animate('300ms ease-in')),
  
  // Bidirectional
  transition('visible <=> hidden', animate('300ms')),
  
  // Wildcard (any state)
  transition('* => visible', animate('300ms')),
  
  // Void (entering/leaving DOM)
  transition(':enter', [style({ opacity: 0 }), animate('300ms')]),
  transition(':leave', animate('300ms', style({ opacity: 0 })))
])
\`\`\``,category:"Animations"},{id:189,question:"What is trigger in animation?",answer:`Trigger is the animation name that binds to template:

\`\`\`typescript
@Component({
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class MyComponent {}
\`\`\`

Template binding:
\`\`\`html
<div *ngIf="show" @slideInOut>Animated content</div>
<!-- Or with explicit binding -->
<div [@slideInOut]="animationState">Content</div>
\`\`\``,category:"Animations"},{id:190,question:"What are animation callbacks?",answer:`Animation callbacks notify when animations start/complete:

\`\`\`html
<div 
  [@openClose]="isOpen ? 'open' : 'closed'"
  (@openClose.start)="onAnimationStart($event)"
  (@openClose.done)="onAnimationDone($event)">
  Animated content
</div>
\`\`\`

\`\`\`typescript
onAnimationStart(event: AnimationEvent) {
  console.log('Animation started');
  console.log('From:', event.fromState);
  console.log('To:', event.toState);
  console.log('Total time:', event.totalTime);
}

onAnimationDone(event: AnimationEvent) {
  console.log('Animation completed');
}
\`\`\``,category:"Animations"},{id:191,question:"What is query in animation?",answer:`Query selects child elements for animation:

\`\`\`typescript
trigger('listAnimation', [
  transition('* => *', [
    // Query all items
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      stagger('50ms', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true }),
    
    query(':leave', [
      stagger('50ms', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ], { optional: true })
  ])
])
\`\`\`

Query selectors: \`:enter\`, \`:leave\`, \`:animating\`, \`@triggerName\`, CSS selectors`,category:"Animations"},{id:192,question:"What is stagger in animation?",answer:`Stagger applies animation delay between multiple elements:

\`\`\`typescript
trigger('listStagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      stagger('100ms', [
        animate('300ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ], { optional: true })
  ])
])
\`\`\`

\`\`\`html
<ul [@listStagger]="items.length">
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
\`\`\`

Each item animates 100ms after the previous one.`,category:"Animations"},{id:193,question:"What is group in animation?",answer:`Group runs multiple animations in parallel:

\`\`\`typescript
trigger('flyInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    group([
      animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      animate('300ms ease-in', style({ opacity: 1 }))
    ])
  ]),
  transition(':leave', [
    group([
      animate('500ms ease-in', style({ transform: 'translateX(100%)' })),
      animate('300ms ease-out', style({ opacity: 0 }))
    ])
  ])
])
\`\`\`

Without group, animations run sequentially.`,category:"Animations"},{id:194,question:"What is sequence in animation?",answer:`Sequence runs animations one after another:

\`\`\`typescript
trigger('bounce', [
  transition(':enter', [
    sequence([
      style({ transform: 'scale(0)' }),
      animate('200ms', style({ transform: 'scale(1.2)' })),
      animate('100ms', style({ transform: 'scale(0.9)' })),
      animate('100ms', style({ transform: 'scale(1.1)' })),
      animate('100ms', style({ transform: 'scale(1)' }))
    ])
  ])
])
\`\`\`

Each step completes before the next starts. Total time is sum of all step durations.`,category:"Animations"},{id:195,question:"What is keyframes in animation?",answer:`Keyframes define animation at specific points:

\`\`\`typescript
trigger('pulse', [
  transition('* => *', [
    animate('1s', keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(1.1)', offset: 0.5 }),
      style({ transform: 'scale(1)', offset: 1 })
    ]))
  ])
])

trigger('slide', [
  transition(':enter', [
    animate('500ms', keyframes([
      style({ transform: 'translateX(-100%)', opacity: 0, offset: 0 }),
      style({ transform: 'translateX(15%)', opacity: 0.7, offset: 0.3 }),
      style({ transform: 'translateX(0)', opacity: 1, offset: 1 })
    ]))
  ])
])
\`\`\`

Offset is 0-1 representing percentage of animation duration.`,category:"Animations"},{id:196,question:"What is reusable animation?",answer:`Create reusable animations with animation() function:

\`\`\`typescript
// animations.ts
import { animation, style, animate, useAnimation } from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{ duration }}', style({ opacity: 1 }))
], { params: { duration: '300ms' } });

export const fadeOut = animation([
  animate('{{ duration }}', style({ opacity: 0 }))
], { params: { duration: '300ms' } });

// component.ts
import { fadeIn, fadeOut } from './animations';

@Component({
  animations: [
    trigger('fade', [
      transition(':enter', useAnimation(fadeIn, { params: { duration: '500ms' } })),
      transition(':leave', useAnimation(fadeOut))
    ])
  ]
})
\`\`\``,category:"Animations"},{id:197,question:"What is the purpose of AnimationBuilder?",answer:`AnimationBuilder creates animations programmatically:

\`\`\`typescript
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({ ... })
export class MyComponent {
  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  animate() {
    const animation = this.builder.build([
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ]);

    const player = animation.create(this.el.nativeElement);
    
    player.onStart(() => console.log('Started'));
    player.onDone(() => console.log('Done'));
    
    player.play();
    // player.pause();
    // player.reset();
  }
}
\`\`\``,category:"Animations"},{id:198,question:"What is the main NgModule for Angular routing?",answer:`RouterModule is the main module for routing:

\`\`\`typescript
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)  // For root module
    // RouterModule.forChild(routes)  // For feature modules
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
\`\`\`

- \`forRoot()\` - Configure router with routes, used once in AppModule
- \`forChild()\` - Configure additional routes in feature modules`,category:"Routing"},{id:199,question:"How do you pass parameters in the route?",answer:`Pass route parameters using path segments:

\`\`\`typescript
// Route config
const routes: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'product/:category/:id', component: ProductComponent }
];

// Navigate with params
this.router.navigate(['/user', userId]);
this.router.navigate(['/product', 'electronics', productId]);

// Template
<a [routerLink]="['/user', user.id]">{{ user.name }}</a>

// Read params in component
constructor(private route: ActivatedRoute) {
  // Snapshot
  const id = this.route.snapshot.paramMap.get('id');
  
  // Observable (for same component navigation)
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
  });
}
\`\`\``,category:"Routing"},{id:200,question:"What are query parameters?",answer:`Query parameters are optional URL parameters:

\`\`\`typescript
// Navigate with query params
this.router.navigate(['/products'], { 
  queryParams: { page: 1, sort: 'name' } 
});
// URL: /products?page=1&sort=name

// Template
<a [routerLink]="['/products']" 
   [queryParams]="{ page: 1, sort: 'name' }">
  Products
</a>

// Read query params
constructor(private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    this.page = params['page'];
    this.sort = params['sort'];
  });
  
  // Or snapshot
  const page = this.route.snapshot.queryParams['page'];
}
\`\`\``,category:"Routing"},{id:201,question:"What is the difference between route params and query params?",answer:`| Route Params | Query Params |
|---|---|
| Part of URL path | After ? in URL |
| Required | Optional |
| \`/user/123\` | \`/users?page=1\` |
| Define in route config | Not in route config |
| For resource identification | For filtering/sorting |

\`\`\`typescript
// Route params - required, identifies resource
{ path: 'user/:id', component: UserComponent }
// URL: /user/123

// Query params - optional, modifies view
// URL: /users?page=1&sort=name&filter=active

this.router.navigate(['/users'], {
  queryParams: { page: 1 },
  queryParamsHandling: 'merge' // preserve existing
});
\`\`\``,category:"Routing"},{id:202,question:"What is child routing?",answer:`Child routes create nested views:

\`\`\`typescript
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];
\`\`\`

Admin template:
\`\`\`html
<h1>Admin Panel</h1>
<nav>
  <a routerLink="dashboard">Dashboard</a>
  <a routerLink="users">Users</a>
</nav>
<router-outlet></router-outlet> <!-- Child views here -->
\`\`\``,category:"Routing"},{id:203,question:"What is programmatic navigation?",answer:`Navigate using Router service:

\`\`\`typescript
import { Router, ActivatedRoute } from '@angular/router';

constructor(private router: Router, private route: ActivatedRoute) {}

// Absolute navigation
this.router.navigate(['/users']);
this.router.navigate(['/users', userId]);
this.router.navigateByUrl('/users/123');

// Relative navigation
this.router.navigate(['details'], { relativeTo: this.route });
this.router.navigate(['../sibling'], { relativeTo: this.route });

// With options
this.router.navigate(['/login'], {
  queryParams: { returnUrl: this.router.url },
  queryParamsHandling: 'merge',
  skipLocationChange: true,
  replaceUrl: true
});
\`\`\``,category:"Routing"},{id:204,question:"What is optional route parameter?",answer:`Optional parameters use matrix notation or query params:

\`\`\`typescript
// Matrix notation (route params that are optional)
this.router.navigate(['/products', { page: 1, sort: 'name' }]);
// URL: /products;page=1;sort=name

// Read matrix params
this.route.paramMap.subscribe(params => {
  const page = params.get('page');
});

// Alternative: Query params for optional values
this.router.navigate(['/products'], {
  queryParams: { page: 1, sort: 'name' }
});
// URL: /products?page=1&sort=name
\`\`\`

Query params are more common for optional values.`,category:"Routing"},{id:205,question:"What is the purpose of pathMatch?",answer:`pathMatch specifies how to match route path:

\`\`\`typescript
const routes: Routes = [
  // 'full' - entire URL must match
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Only redirects for exact '' path
  
  // 'prefix' (default) - URL starts with path
  { path: 'admin', component: AdminComponent, pathMatch: 'prefix' },
  // Matches /admin, /admin/users, /admin/settings
  
  // Without pathMatch: 'full', empty path matches everything!
  { path: '', redirectTo: '/home' }  // Would redirect ALL routes!
];
\`\`\`

Always use \`pathMatch: 'full'\` with empty path redirects.`,category:"Routing"},{id:206,question:"What is the use of hash location strategy?",answer:`HashLocationStrategy uses URL hash for routing:

\`\`\`typescript
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})

// Or in RouterModule
RouterModule.forRoot(routes, { useHash: true })
\`\`\`

URLs with hash:
- \`http://example.com/#/users\`
- \`http://example.com/#/products/123\`

Benefits:
- Works without server configuration
- Good for static hosting (GitHub Pages)

Drawbacks:
- URLs look less clean
- SEO challenges`,category:"Routing"},{id:207,question:"What is the purpose of Router.events?",answer:`Router.events observable emits navigation lifecycle events:

\`\`\`typescript
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';

constructor(private router: Router) {
  // All events
  router.events.subscribe(event => console.log(event));
  
  // Specific events
  router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    console.log('Navigation completed:', event.url);
    // Analytics tracking
    this.analytics.pageView(event.urlAfterRedirects);
  });
}
\`\`\`

Events: NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, RoutesRecognized, GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd, NavigationEnd, NavigationCancel, NavigationError`,category:"Routing"},{id:208,question:"What is preloading strategy?",answer:`Preloading loads lazy modules in background after app loads:

\`\`\`typescript
import { PreloadAllModules, NoPreloading } from '@angular/router';

// Preload all lazy modules
RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})

// Custom preloading strategy
@Injectable({ providedIn: 'root' })
export class SelectivePreloadStrategy implements PreloadAllModules {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data?.['preload'] ? load() : of(null);
  }
}

// Route with preload flag
{ 
  path: 'admin', 
  loadChildren: () => import('./admin/admin.module'),
  data: { preload: true }
}
\`\`\``,category:"Performance"},{id:209,question:"What is InjectionToken?",answer:`InjectionToken creates unique DI tokens for non-class dependencies:

\`\`\`typescript
import { InjectionToken } from '@angular/core';

// Create token
export const API_URL = new InjectionToken<string>('API_URL');
export const CONFIG = new InjectionToken<AppConfig>('AppConfig');

// Provide value
@NgModule({
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' },
    { provide: CONFIG, useValue: { debug: true, version: '1.0' } }
  ]
})

// Inject
constructor(
  @Inject(API_URL) private apiUrl: string,
  @Inject(CONFIG) private config: AppConfig
) {}
\`\`\`

Use for: configuration, constants, interfaces, functions.`,category:"Dependency Injection"},{id:210,question:"What are the types of provider in Angular?",answer:`Angular providers specify how to create dependencies:

\`\`\`typescript
@NgModule({
  providers: [
    // Class provider (shorthand)
    MyService,
    
    // Class provider (explicit)
    { provide: MyService, useClass: MyService },
    
    // Alternative implementation
    { provide: MyService, useClass: BetterService },
    
    // Value provider
    { provide: API_URL, useValue: 'https://api.com' },
    
    // Factory provider
    { provide: MyService, useFactory: myServiceFactory, deps: [HttpClient] },
    
    // Existing provider (alias)
    { provide: OldService, useExisting: NewService },
    
    // Multi provider
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
\`\`\``,category:"Dependency Injection"},{id:211,question:"What is useClass provider?",answer:`useClass provides a class as dependency:

\`\`\`typescript
// Basic usage
{ provide: LoggerService, useClass: LoggerService }

// Shorthand (same class)
providers: [LoggerService]

// Substitute implementation
{ provide: LoggerService, useClass: BetterLoggerService }

// Environment-specific
{ 
  provide: LoggerService, 
  useClass: environment.production ? ProductionLogger : DebugLogger 
}
\`\`\`

Angular creates new instance of the class when injecting.`,category:"Dependency Injection"},{id:212,question:"What is useValue provider?",answer:`useValue provides a static value:

\`\`\`typescript
// String value
{ provide: API_URL, useValue: 'https://api.example.com' }

// Object value
{ provide: APP_CONFIG, useValue: { production: true, apiUrl: '...' } }

// Function value
{ provide: GREETING_FN, useValue: (name: string) => \`Hello, \${name}!\` }

// Existing object
const myConfig = { version: '1.0', debug: false };
{ provide: CONFIG, useValue: myConfig }
\`\`\`

Value is injected as-is, no instantiation.`,category:"Dependency Injection"},{id:213,question:"What is useFactory provider?",answer:`useFactory uses a function to create dependency:

\`\`\`typescript
// Simple factory
export function loggerFactory() {
  return new LoggerService();
}
{ provide: LoggerService, useFactory: loggerFactory }

// Factory with dependencies
export function apiServiceFactory(http: HttpClient, config: Config) {
  return new ApiService(http, config.apiUrl);
}
{ 
  provide: ApiService, 
  useFactory: apiServiceFactory, 
  deps: [HttpClient, CONFIG] 
}

// Conditional creation
export function storageFactory() {
  return typeof localStorage !== 'undefined' 
    ? new LocalStorageService() 
    : new MemoryStorageService();
}
\`\`\``,category:"Dependency Injection"},{id:214,question:"What is useExisting provider?",answer:`useExisting creates an alias to existing provider:

\`\`\`typescript
// Alias to another service
@Injectable({ providedIn: 'root' })
export class NewLoggerService { ... }

providers: [
  NewLoggerService,
  { provide: OldLoggerService, useExisting: NewLoggerService }
]

// Both inject same instance
constructor(
  private newLogger: NewLoggerService,
  private oldLogger: OldLoggerService  // Same instance as newLogger
) {}

// Interface implementation
{ provide: Logger, useExisting: ConsoleLoggerService }
\`\`\`

useExisting doesn't create new instance, just references existing one.`,category:"Dependency Injection"},{id:215,question:"What is @Optional decorator?",answer:`@Optional makes dependency injection optional:

\`\`\`typescript
import { Optional } from '@angular/core';

@Component({ ... })
export class MyComponent {
  constructor(
    @Optional() private logger: LoggerService
  ) {
    // logger may be undefined if not provided
    if (this.logger) {
      this.logger.log('Component created');
    }
  }
}

// With default value
constructor(@Optional() private logger?: LoggerService) {
  this.logger = logger || new DefaultLogger();
}
\`\`\`

Without @Optional, missing dependency throws error.`,category:"Dependency Injection"},{id:216,question:"What is @Self decorator?",answer:`@Self limits DI lookup to current injector only:

\`\`\`typescript
import { Self } from '@angular/core';

@Component({
  providers: [MyService]  // Must be provided here
})
export class MyComponent {
  constructor(
    @Self() private myService: MyService
  ) {}
}
\`\`\`

Without @Self:
- Angular walks up injector hierarchy
- May get parent's instance

With @Self:
- Only looks in current component's injector
- Throws error if not found locally

Combine with @Optional:
\`\`\`typescript
constructor(@Self() @Optional() private service: MyService) {}
\`\`\``,category:"Dependency Injection"},{id:217,question:"What is @SkipSelf decorator?",answer:`@SkipSelf skips current injector, starts lookup from parent:

\`\`\`typescript
import { SkipSelf } from '@angular/core';

@Component({
  providers: [MyService]  // This is skipped
})
export class ChildComponent {
  constructor(
    @SkipSelf() private myService: MyService  // Gets parent's instance
  ) {}
}

// Useful for ensuring singleton
@NgModule({ ... })
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded. Import only in AppModule.');
    }
  }
}
\`\`\``,category:"Dependency Injection"},{id:218,question:"What is @Host decorator?",answer:`@Host limits DI lookup to host component:

\`\`\`typescript
import { Host } from '@angular/core';

// In directive used on a component
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  constructor(
    @Host() private host: HostComponent
  ) {
    // Only looks in host component's injector
  }
}

// Usage
<app-host appHighlight></app-host>
\`\`\`

Scope:
- @Self - Current component only
- @Host - Current + host component
- @SkipSelf - Parent and above
- (none) - Entire injector tree`,category:"Dependency Injection"},{id:219,question:"What are forward references?",answer:`forwardRef references classes defined later in file:

\`\`\`typescript
import { forwardRef, Inject } from '@angular/core';

// Problem: MyService used before defined
@Component({
  providers: [MyService]  // Error: MyService not defined yet
})
export class MyComponent {
  constructor(private service: MyService) {}
}

@Injectable()
export class MyService {}

// Solution: Use forwardRef
@Component({
  providers: [{ provide: 'MyService', useClass: forwardRef(() => MyService) }]
})
export class MyComponent {
  constructor(@Inject(forwardRef(() => MyService)) private service: MyService) {}
}

@Injectable()
export class MyService {}
\`\`\``,category:"Dependency Injection"},{id:220,question:"What are the security principles in Angular?",answer:`Angular security principles:

1. **Sanitization** - Angular sanitizes values before inserting into DOM
2. **Trusted values** - Bypass sanitization carefully with DomSanitizer
3. **CSP** - Content Security Policy support
4. **No script tags** - Templates don't execute script tags
5. **Avoid direct DOM** - Use Angular APIs instead of innerHTML

\`\`\`typescript
// Angular automatically sanitizes
<div [innerHTML]="userContent"></div>  // Sanitized

// Trusted content (use carefully!)
constructor(private sanitizer: DomSanitizer) {}

trustedHtml = this.sanitizer.bypassSecurityTrustHtml(htmlContent);
trustedUrl = this.sanitizer.bypassSecurityTrustUrl(url);
\`\`\``,category:"Security"},{id:221,question:"What is DomSanitizer?",answer:`DomSanitizer sanitizes values for safe use in DOM:

\`\`\`typescript
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Component({ ... })
export class MyComponent {
  trustedHtml: SafeHtml;
  trustedUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Bypass sanitization (use carefully!)
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml('<script>alert(1)<\/script>');
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl('javascript:alert(1)');
    this.trustedResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://...');
    this.trustedStyle = this.sanitizer.bypassSecurityTrustStyle('background: url(...)');
  }
}
\`\`\`

**Warning:** Only bypass for trusted content!`,category:"Security"},{id:222,question:"What is XSS and how does Angular prevent it?",answer:`XSS (Cross-Site Scripting) injects malicious scripts. Angular prevents it:

1. **Auto-sanitization:**
\`\`\`html
<!-- User input is sanitized -->
<div>{{ userInput }}</div>
<div [innerHTML]="userHtml"></div>
\`\`\`

2. **No script execution:**
\`\`\`html
<!-- Script tags are ignored -->
<div [innerHTML]="'<script>alert(1)<\/script>'"></div>
<!-- Renders nothing -->
\`\`\`

3. **Encoding:**
\`\`\`typescript
// Special characters encoded
userInput = '<img onerror="alert(1)">';
// Rendered as text, not HTML
\`\`\`

Avoid bypassing security unless absolutely necessary.`,category:"Security"},{id:223,question:"What are Angular security contexts?",answer:`Angular has different security contexts for sanitization:

| Context | Description | Example |
|---|---|---|
| HTML | Interprets as HTML | innerHTML |
| Style | CSS styles | style binding |
| URL | URL for links | href, src |
| Resource URL | URLs loaded as code | script src, iframe src |

\`\`\`typescript
// Each context has specific sanitizer
bypassSecurityTrustHtml(value)      // HTML context
bypassSecurityTrustStyle(value)     // Style context  
bypassSecurityTrustUrl(value)       // URL context
bypassSecurityTrustResourceUrl(value) // Resource URL context
bypassSecurityTrustScript(value)    // Script context
\`\`\``,category:"Security"},{id:224,question:"What is CSRF attack?",answer:`CSRF (Cross-Site Request Forgery) tricks users into making unwanted requests. Angular HttpClient helps prevent it:

\`\`\`typescript
// Angular reads XSRF token from cookie and sends in header
@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',     // Cookie to read
      headerName: 'X-XSRF-TOKEN'    // Header to send
    })
  ]
})

// Server should:
// 1. Set XSRF-TOKEN cookie
// 2. Validate X-XSRF-TOKEN header matches
\`\`\`

Angular automatically includes XSRF token in mutating requests (POST, PUT, DELETE).`,category:"Security"},{id:225,question:"How do you configure title using Title service?",answer:`Title service sets the browser page title:

\`\`\`typescript
import { Title } from '@angular/platform-browser';

@Component({ ... })
export class MyComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('My Page Title');
  }
}

// With routing
const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'about', component: AboutComponent, title: 'About Us' }
];

// Dynamic title with resolver
@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.titleService.setTitle(title ? \`\${title} | My App\` : 'My App');
  }
}
\`\`\``,category:"Advanced"},{id:226,question:"What is Meta service?",answer:`Meta service manages HTML meta tags:

\`\`\`typescript
import { Meta } from '@angular/platform-browser';

@Component({ ... })
export class MyComponent {
  constructor(private meta: Meta) {
    // Add meta tags
    this.meta.addTag({ name: 'description', content: 'Page description' });
    this.meta.addTag({ name: 'keywords', content: 'angular, tutorial' });
    this.meta.addTag({ property: 'og:title', content: 'My Page' });
    
    // Update existing
    this.meta.updateTag({ name: 'description', content: 'Updated description' });
    
    // Remove
    this.meta.removeTag('name="keywords"');
    
    // Get tag
    const description = this.meta.getTag('name="description"');
  }
}
\`\`\`

Useful for SEO and social media sharing.`,category:"Advanced"},{id:227,question:"What is the purpose of ngDoCheck?",answer:`ngDoCheck runs during every change detection cycle:

\`\`\`typescript
import { DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';

@Component({ ... })
export class MyComponent implements DoCheck {
  @Input() data: any;
  private differ: KeyValueDiffer<string, any>;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create();
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.data);
    if (changes) {
      changes.forEachChangedItem(item => {
        console.log('Changed:', item.key, item.currentValue);
      });
    }
  }
}
\`\`\`

Use for custom change detection. Be careful - runs frequently!`,category:"Lifecycle"},{id:228,question:"What is ngAfterContentInit?",answer:`ngAfterContentInit is called after projected content is initialized:

\`\`\`typescript
import { AfterContentInit, ContentChild, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<ng-content></ng-content>'
})
export class ParentComponent implements AfterContentInit {
  @ContentChild('header') header: ElementRef;
  @ContentChildren(ChildComponent) children: QueryList<ChildComponent>;

  ngAfterContentInit() {
    // Projected content is now available
    console.log('Header:', this.header);
    console.log('Children count:', this.children.length);
  }
}

// Usage
<app-parent>
  <h1 #header>Title</h1>
  <app-child></app-child>
  <app-child></app-child>
</app-parent>
\`\`\``,category:"Lifecycle"},{id:229,question:"What is ngAfterViewInit?",answer:`ngAfterViewInit is called after component's view is initialized:

\`\`\`typescript
import { AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  template: \`
    <input #myInput>
    <app-child></app-child>
    <app-child></app-child>
  \`
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;
  @ViewChild(ChildComponent) firstChild: ChildComponent;
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  ngAfterViewInit() {
    // View elements are now available
    this.input.nativeElement.focus();
    console.log('First child:', this.firstChild);
    console.log('All children:', this.children.length);
  }
}
\`\`\``,category:"Lifecycle"},{id:230,question:"What is the difference between ngAfterContentInit and ngAfterViewInit?",answer:`| ngAfterContentInit | ngAfterViewInit |
|---|---|
| After projected content init | After view (template) init |
| Use @ContentChild/@ContentChildren | Use @ViewChild/@ViewChildren |
| Content between component tags | Content in component template |
| Called first | Called second |

\`\`\`typescript
@Component({
  template: '<div #viewElement><ng-content></ng-content></div>'
})
export class MyComponent {
  @ContentChild('contentElement') content;  // ngAfterContentInit
  @ViewChild('viewElement') view;           // ngAfterViewInit
}

<my-component>
  <span #contentElement>Projected</span>  <!-- ContentChild -->
</my-component>
\`\`\``,category:"Lifecycle"},{id:231,question:"What is ngOnChanges?",answer:`ngOnChanges is called when input properties change:

\`\`\`typescript
import { OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({ ... })
export class MyComponent implements OnChanges {
  @Input() name: string;
  @Input() data: Data;

  ngOnChanges(changes: SimpleChanges) {
    // Check specific input
    if (changes['name']) {
      console.log('Name changed');
      console.log('Previous:', changes['name'].previousValue);
      console.log('Current:', changes['name'].currentValue);
      console.log('First change:', changes['name'].firstChange);
    }

    // Check all changes
    for (const propName in changes) {
      console.log(\`\${propName} changed\`);
    }
  }
}
\`\`\`

Called before ngOnInit and on every input change.`,category:"Lifecycle"},{id:232,question:"What is ngOnDestroy?",answer:`ngOnDestroy is called before component is destroyed:

\`\`\`typescript
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({ ... })
export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private subscription: Subscription;

  ngOnInit() {
    // Pattern 1: takeUntil
    this.dataService.data$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.data = data);

    // Pattern 2: Store subscription
    this.subscription = this.otherService.data$.subscribe();
  }

  ngOnDestroy() {
    // Cleanup subscriptions
    this.destroy$.next();
    this.destroy$.complete();
    this.subscription?.unsubscribe();
    
    // Other cleanup
    clearInterval(this.timer);
  }
}
\`\`\``,category:"Lifecycle"},{id:233,question:"What are Subjects in RxJS?",answer:`Subject is both Observable and Observer:

\`\`\`typescript
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// Basic Subject - no initial value, no replay
const subject = new Subject<number>();
subject.subscribe(x => console.log('A:', x));
subject.next(1); // A: 1
subject.subscribe(x => console.log('B:', x));
subject.next(2); // A: 2, B: 2

// BehaviorSubject - has initial value, replays last
const behavior = new BehaviorSubject<number>(0);
behavior.subscribe(x => console.log(x)); // 0 immediately
behavior.getValue(); // Current value

// ReplaySubject - replays n values
const replay = new ReplaySubject<number>(2);

// AsyncSubject - emits only last value on complete
const async = new AsyncSubject<number>();
\`\`\``,category:"RxJS"},{id:234,question:"What is BehaviorSubject?",answer:`BehaviorSubject stores current value and emits to new subscribers:

\`\`\`typescript
import { BehaviorSubject } from 'rxjs';

// Service with BehaviorSubject
@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }

  getUser(): User | null {
    return this.userSubject.getValue();
  }
}

// Component
this.userService.user$.subscribe(user => {
  // Gets current value immediately
  this.user = user;
});
\`\`\`

Requires initial value. Good for state management.`,category:"RxJS"},{id:235,question:"What is ReplaySubject?",answer:`ReplaySubject replays specified number of emissions to new subscribers:

\`\`\`typescript
import { ReplaySubject } from 'rxjs';

// Replay last 3 values
const subject = new ReplaySubject<number>(3);

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

// New subscriber gets last 3 values: 2, 3, 4
subject.subscribe(x => console.log(x));

// With time window (replay last 2 values within 500ms)
const timedSubject = new ReplaySubject<number>(2, 500);

// Replay all values
const replayAll = new ReplaySubject<number>();
\`\`\`

Useful for caching or ensuring late subscribers get history.`,category:"RxJS"},{id:236,question:"What is AsyncSubject?",answer:`AsyncSubject emits only the last value when completed:

\`\`\`typescript
import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject<number>();

subject.subscribe(x => console.log('A:', x));

subject.next(1);
subject.next(2);
subject.next(3);
// No output yet

subject.subscribe(x => console.log('B:', x));

subject.complete();
// A: 3
// B: 3
\`\`\`

Useful when you only care about the final value, like HTTP responses.`,category:"RxJS"},{id:237,question:"What are the common RxJS operators?",answer:`Commonly used RxJS operators:

\`\`\`typescript
import { map, filter, tap, switchMap, mergeMap, catchError, debounceTime, distinctUntilChanged, take, takeUntil, combineLatest, forkJoin } from 'rxjs/operators';

// Transformation
map(x => x * 2)
mergeMap(id => this.http.get(\`/api/\${id}\`))
switchMap(term => this.search(term))  // Cancels previous

// Filtering
filter(x => x > 0)
distinctUntilChanged()
take(5)
takeUntil(this.destroy$)
debounceTime(300)

// Side effects
tap(x => console.log(x))

// Error handling
catchError(err => of([]))
retry(3)

// Combination
combineLatest([obs1$, obs2$])
forkJoin([http1$, http2$])  // Wait for all
\`\`\``,category:"RxJS"},{id:238,question:"What is the difference between switchMap and mergeMap?",answer:`| switchMap | mergeMap |
|---|---|
| Cancels previous inner observable | Keeps all inner observables |
| Latest only | All concurrent |
| Good for search | Good for parallel requests |

\`\`\`typescript
// switchMap - cancels previous HTTP when new search term
this.searchControl.valueChanges.pipe(
  debounceTime(300),
  switchMap(term => this.searchService.search(term))
).subscribe(results => this.results = results);

// mergeMap - all requests complete
this.ids$.pipe(
  mergeMap(id => this.http.get(\`/api/items/\${id}\`))
).subscribe(item => this.items.push(item));

// concatMap - sequential, one at a time
this.ids$.pipe(
  concatMap(id => this.http.get(\`/api/items/\${id}\`))
).subscribe();
\`\`\``,category:"RxJS"},{id:239,question:"What is combineLatest?",answer:`combineLatest emits when any source emits, combining latest values:

\`\`\`typescript
import { combineLatest } from 'rxjs';

const name$ = this.form.get('name').valueChanges;
const email$ = this.form.get('email').valueChanges;

combineLatest([name$, email$]).subscribe(([name, email]) => {
  console.log('Name:', name, 'Email:', email);
});

// With initial values (startWith)
combineLatest([
  name$.pipe(startWith('')),
  email$.pipe(startWith(''))
]).subscribe(([name, email]) => {
  // Emits immediately with initial values
});

// Object syntax
combineLatest({ name: name$, email: email$ }).subscribe(({ name, email }) => {
  console.log(name, email);
});
\`\`\`

Emits only after all sources have emitted at least once.`,category:"RxJS"},{id:240,question:"What is forkJoin?",answer:`forkJoin waits for all observables to complete, emits last values:

\`\`\`typescript
import { forkJoin } from 'rxjs';

// Wait for multiple HTTP requests
forkJoin({
  user: this.http.get('/api/user'),
  posts: this.http.get('/api/posts'),
  comments: this.http.get('/api/comments')
}).subscribe(({ user, posts, comments }) => {
  this.user = user;
  this.posts = posts;
  this.comments = comments;
});

// Array syntax
forkJoin([
  this.http.get('/api/user'),
  this.http.get('/api/settings')
]).subscribe(([user, settings]) => {
  // Both requests completed
});
\`\`\`

Like Promise.all() - if any fails, whole forkJoin fails.`,category:"RxJS"},{id:241,question:"What is the share operator?",answer:`share multicasts observable to multiple subscribers:

\`\`\`typescript
import { share, shareReplay } from 'rxjs/operators';

// Without share - HTTP called twice
const data$ = this.http.get('/api/data');
data$.subscribe();  // HTTP call
data$.subscribe();  // Another HTTP call

// With share - HTTP called once
const sharedData$ = this.http.get('/api/data').pipe(share());
sharedData$.subscribe();  // HTTP call
sharedData$.subscribe();  // Same result, no new call

// shareReplay - caches and replays to late subscribers
const cachedData$ = this.http.get('/api/data').pipe(
  shareReplay(1)  // Replay last 1 value
);
cachedData$.subscribe();  // HTTP call
// Later...
cachedData$.subscribe();  // Gets cached value
\`\`\``,category:"RxJS"},{id:242,question:"What is debounceTime operator?",answer:`debounceTime emits after specified quiet period:

\`\`\`typescript
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// Search with debounce
this.searchControl.valueChanges.pipe(
  debounceTime(300),           // Wait 300ms after typing stops
  distinctUntilChanged(),      // Only if value changed
  filter(term => term.length >= 3),  // Min 3 chars
  switchMap(term => this.searchService.search(term))
).subscribe(results => this.results = results);

// Resize event
fromEvent(window, 'resize').pipe(
  debounceTime(200)
).subscribe(() => this.onResize());
\`\`\`

Perfect for search inputs, form validation, resize handlers.`,category:"RxJS"},{id:243,question:"What is throttleTime operator?",answer:`throttleTime emits first value, then ignores for specified duration:

\`\`\`typescript
import { throttleTime } from 'rxjs/operators';

// Scroll events - emit max once per 200ms
fromEvent(window, 'scroll').pipe(
  throttleTime(200)
).subscribe(() => this.onScroll());

// Button clicks - prevent rapid clicking
fromEvent(button, 'click').pipe(
  throttleTime(1000)  // Ignore clicks for 1 second after first
).subscribe(() => this.submit());
\`\`\`

| debounceTime | throttleTime |
|---|---|
| Waits for quiet period | Emits immediately, then throttles |
| Good for search | Good for scroll/resize |
| Emits last value | Emits first value |`,category:"RxJS"},{id:244,question:"What is the takeUntil operator?",answer:`takeUntil completes observable when notifier emits:

\`\`\`typescript
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({ ... })
export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit() {
    // Automatically unsubscribes when component destroys
    this.dataService.data$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.data = data);

    this.otherService.updates$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(update => this.handleUpdate(update));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
\`\`\`

Best practice for managing subscriptions in components.`,category:"RxJS"},{id:245,question:"What is distinctUntilChanged operator?",answer:`distinctUntilChanged emits only when value is different from previous:

\`\`\`typescript
import { distinctUntilChanged } from 'rxjs/operators';

// Basic - compares by reference
of(1, 1, 2, 2, 3, 1).pipe(
  distinctUntilChanged()
).subscribe(x => console.log(x)); // 1, 2, 3, 1

// With comparison function
interface User { id: number; name: string; }

users$.pipe(
  distinctUntilChanged((prev, curr) => prev.id === curr.id)
).subscribe(user => console.log('New user:', user));

// With key selector
users$.pipe(
  distinctUntilChanged((prev, curr) => prev === curr, user => user.id)
).subscribe();
\`\`\`

Useful for preventing duplicate processing.`,category:"RxJS"},{id:246,question:"What is the finalize operator?",answer:`finalize executes callback on observable completion or error:

\`\`\`typescript
import { finalize } from 'rxjs/operators';

this.loading = true;

this.http.get('/api/data').pipe(
  finalize(() => {
    this.loading = false;  // Always runs
    console.log('Request completed or errored');
  })
).subscribe({
  next: data => this.data = data,
  error: err => this.error = err
});

// In interceptor for loading indicator
intercept(req, next) {
  this.loadingService.show();
  return next.handle(req).pipe(
    finalize(() => this.loadingService.hide())
  );
}
\`\`\`

Like try/finally - guaranteed cleanup.`,category:"RxJS"},{id:247,question:"What is startWith operator?",answer:`startWith emits specified values before source emissions:

\`\`\`typescript
import { startWith } from 'rxjs/operators';

// Provide initial value
this.searchResults$ = this.searchControl.valueChanges.pipe(
  startWith(''),
  switchMap(term => this.search(term))
);

// Multiple initial values
of(3, 4, 5).pipe(
  startWith(1, 2)
).subscribe(x => console.log(x)); // 1, 2, 3, 4, 5

// For combineLatest to emit immediately
combineLatest([
  this.name$.pipe(startWith('')),
  this.email$.pipe(startWith(''))
]).subscribe(([name, email]) => {
  // Emits immediately with initial values
});
\`\`\``,category:"RxJS"},{id:248,question:"What is pairwise operator?",answer:`pairwise emits current and previous values as pair:

\`\`\`typescript
import { pairwise, startWith } from 'rxjs/operators';

// Track value changes
this.valueControl.valueChanges.pipe(
  startWith(null),  // Need initial value for first pair
  pairwise()
).subscribe(([previous, current]) => {
  console.log('Changed from', previous, 'to', current);
});

// Route changes
this.router.events.pipe(
  filter(event => event instanceof NavigationEnd),
  pairwise()
).subscribe(([prev, curr]: [NavigationEnd, NavigationEnd]) => {
  console.log('Navigated from', prev.url, 'to', curr.url);
});
\`\`\`

Note: First emission is skipped (needs two values for a pair).`,category:"RxJS"},{id:249,question:"What are standalone components?",answer:`Standalone components don't require NgModule declarations (Angular 14+):

\`\`\`typescript
@Component({
  selector: 'app-my',
  standalone: true,
  imports: [CommonModule, RouterModule, MyOtherComponent],
  template: \`<div *ngIf="show"><app-other></app-other></div>\`
})
export class MyComponent {
  show = true;
}

// Bootstrap standalone component
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
\`\`\`

Benefits: Simpler architecture, better tree-shaking, easier lazy loading.`,category:"Advanced"},{id:250,question:"What are typed forms in Angular?",answer:`Typed forms provide type safety for reactive forms (Angular 14+):

\`\`\`typescript
// Strongly typed form
interface UserForm {
  name: FormControl<string>;
  email: FormControl<string>;
  age: FormControl<number | null>;
}

const form = new FormGroup<UserForm>({
  name: new FormControl('', { nonNullable: true }),
  email: new FormControl('', { nonNullable: true }),
  age: new FormControl<number | null>(null)
});

// Type-safe access
form.value.name;  // string
form.controls.email.value;  // string

// With FormBuilder
const form = this.fb.group({
  name: this.fb.nonNullable.control(''),
  email: ['', Validators.required]
});
\`\`\``,category:"Forms"},{id:251,question:"What is inject() function?",answer:`inject() provides dependencies without constructor injection (Angular 14+):

\`\`\`typescript
import { inject } from '@angular/core';

// In component
@Component({ ... })
export class MyComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
}

// In function (must be in injection context)
export function createUserService() {
  const http = inject(HttpClient);
  return new UserService(http);
}

// In route guard
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isLoggedIn() || router.createUrlTree(['/login']);
};
\`\`\`

Must be called in injection context (constructor, field initializer, factory).`,category:"Dependency Injection"},{id:252,question:"What is required input in Angular?",answer:`Required inputs must be provided by parent (Angular 16+):

\`\`\`typescript
@Component({
  selector: 'app-user',
  template: '<h1>{{ name }}</h1>'
})
export class UserComponent {
  @Input({ required: true }) name!: string;
  @Input() age?: number;  // Optional
}

// Usage - name is required
<app-user [name]="userName"></app-user>  // OK
<app-user></app-user>  // Compile error: name is required

// With transform
@Input({ required: true, transform: (v: string) => v.toUpperCase() })
name!: string;
\`\`\`

Compiler error if required input is not provided.`,category:"Components"},{id:253,question:"What are signals in Angular?",answer:`Signals are reactive primitives for state management (Angular 16+):

\`\`\`typescript
import { signal, computed, effect } from '@angular/core';

@Component({ ... })
export class MyComponent {
  // Writable signal
  count = signal(0);
  
  // Computed signal (derived)
  doubled = computed(() => this.count() * 2);
  
  // Effect (side effects)
  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }
  
  increment() {
    this.count.set(this.count() + 1);
    // Or
    this.count.update(c => c + 1);
  }
}

// Template
<p>Count: {{ count() }}</p>
<p>Doubled: {{ doubled() }}</p>
\`\`\``,category:"Advanced"},{id:254,question:"What is the difference between signals and observables?",answer:`| Signals | Observables |
|---|---|
| Synchronous | Can be async |
| Always have value | May not have value |
| Fine-grained updates | Stream-based |
| No subscription needed | Requires subscription |
| Simpler mental model | More powerful operators |

\`\`\`typescript
// Signal - synchronous, always has value
const count = signal(0);
const value = count();  // Immediate access

// Observable - async, may not have value
const count$ = new BehaviorSubject(0);
count$.subscribe(value => console.log(value));

// Convert between them
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

const signalFromObs = toSignal(observable$);
const obsFromSignal = toObservable(signal);
\`\`\``,category:"Advanced"},{id:255,question:"What is deferrable views?",answer:`Deferrable views lazy-load template parts (Angular 17+):

\`\`\`html
@defer {
  <large-component />
} @placeholder {
  <p>Loading...</p>
} @loading (minimum 500ms) {
  <spinner />
} @error {
  <p>Failed to load</p>
}

<!-- With triggers -->
@defer (on viewport) {
  <heavy-component />
}

@defer (on interaction) {
  <interactive-component />
}

@defer (on idle) {
  <analytics-widget />
}

@defer (on timer(5s)) {
  <delayed-content />
}

@defer (when condition) {
  <conditional-content />
}
\`\`\`

Improves initial load performance by deferring non-critical content.`,category:"Performance"},{id:256,question:"What is the new control flow in Angular?",answer:`Angular 17+ introduces built-in control flow syntax:

\`\`\`html
<!-- @if replaces *ngIf -->
@if (user) {
  <p>Hello {{ user.name }}</p>
} @else if (loading) {
  <spinner />
} @else {
  <p>Please log in</p>
}

<!-- @for replaces *ngFor -->
@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
} @empty {
  <li>No items found</li>
}

<!-- @switch replaces ngSwitch -->
@switch (status) {
  @case ('active') { <p>Active</p> }
  @case ('inactive') { <p>Inactive</p> }
  @default { <p>Unknown</p> }
}
\`\`\`

Benefits: Better performance, cleaner syntax, built into compiler.`,category:"Templates"},{id:257,question:"What is the image directive in Angular?",answer:`NgOptimizedImage directive optimizes images (Angular 14+):

\`\`\`typescript
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  template: \`
    <img ngSrc="/assets/external-apps/react-app/dist/assets/hero.jpg" 
         width="800" 
         height="600"
         priority
         placeholder="blur">
    
    <img ngSrc="user.jpg"
         [ngSrcset]="'100w, 200w, 400w'"
         sizes="(max-width: 600px) 100vw, 50vw"
         fill>
  \`
})
export class MyComponent {}
\`\`\`

Features:
- Lazy loading by default
- Automatic srcset
- LCP prioritization
- Placeholder support
- Warning for missing dimensions`,category:"Performance"},{id:258,question:"What is functional route guard?",answer:`Functional guards are simpler than class-based guards (Angular 14+):

\`\`\`typescript
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};

// Usage in routes
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard]
  }
];
\`\`\`

Simpler than creating injectable classes.`,category:"Routing"},{id:259,question:"What is provideRouter?",answer:`provideRouter configures routing without NgModule (Angular 14+):

\`\`\`typescript
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';

// In main.ts for standalone apps
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withDebugTracing(),
      withRouterConfig({ onSameUrlNavigation: 'reload' })
    )
  ]
});

// Route features
withPreloading(strategy)      // Preloading strategy
withDebugTracing()           // Console logging
withRouterConfig(options)    // Router configuration
withHashLocation()           // Hash-based routing
withInMemoryScrolling()      // Scroll position restoration
\`\`\``,category:"Routing"},{id:260,question:"What is provideHttpClient?",answer:`provideHttpClient configures HttpClient without NgModule (Angular 14+):

\`\`\`typescript
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor]),
      withFetch(),  // Use fetch API instead of XHR
      withJsonpSupport(),
      withXsrfConfiguration({ cookieName: 'TOKEN', headerName: 'X-TOKEN' })
    )
  ]
});

// Functional interceptor
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();
  const authReq = req.clone({
    headers: req.headers.set('Authorization', \`Bearer \${token}\`)
  });
  return next(authReq);
};
\`\`\``,category:"HTTP"},{id:261,question:"What is environment.ts used for?",answer:`environment.ts provides environment-specific configuration:

\`\`\`typescript
// src/environments/environment.ts (development)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  debug: true
};

// src/environments/environment.prod.ts (production)
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com',
  debug: false
};

// Usage in code
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.apiUrl;
}

// Build for production uses environment.prod.ts
ng build --configuration production
\`\`\``,category:"CLI"},{id:262,question:"What is the purpose of angular.json?",answer:`angular.json is the workspace configuration file:

\`\`\`json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "styles": ["src/styles.css"],
            "scripts": [],
            "assets": ["src/assets"]
          },
          "configurations": {
            "production": {
              "budgets": [...],
              "optimization": true
            }
          }
        },
        "serve": { ... },
        "test": { ... }
      }
    }
  }
}
\`\`\`

Configures: build options, serve settings, test config, file replacements, budgets.`,category:"CLI"},{id:263,question:"What are budgets in Angular?",answer:`Budgets set size limits for build output:

\`\`\`json
// angular.json
{
  "configurations": {
    "production": {
      "budgets": [
        {
          "type": "initial",
          "maximumWarning": "500kb",
          "maximumError": "1mb"
        },
        {
          "type": "anyComponentStyle",
          "maximumWarning": "4kb",
          "maximumError": "8kb"
        }
      ]
    }
  }
}
\`\`\`

Types:
- \`initial\` - Initial bundle
- \`anyComponentStyle\` - Any component style
- \`bundle\` - Specific bundle
- \`all\` - Total size
- \`any\` - Any file`,category:"Performance"},{id:264,question:"What is tree shaking?",answer:`Tree shaking removes unused code from bundles:

\`\`\`typescript
// Library exports many functions
export function usedFunction() { ... }   // Included
export function unusedFunction() { ... } // Removed

// App only imports what it needs
import { usedFunction } from './lib';
\`\`\`

Enable tree shaking:
- Use ES6 imports/exports
- Set \`"sideEffects": false\` in package.json
- Build with production mode
- Use \`providedIn: 'root'\` for services

\`\`\`json
// package.json
{
  "sideEffects": false,
  // or specify files with side effects
  "sideEffects": ["*.css", "./src/polyfills.ts"]
}
\`\`\``,category:"Performance"},{id:265,question:"What is code splitting?",answer:`Code splitting divides bundle into smaller chunks loaded on demand:

\`\`\`typescript
// Lazy loading routes (automatic code splitting)
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: 'reports',
    loadComponent: () => import('./reports/reports.component')
      .then(c => c.ReportsComponent)
  }
];

// Dynamic import in code
async loadChart() {
  const { ChartModule } = await import('./chart/chart.module');
  // Use ChartModule
}
\`\`\`

Benefits:
- Smaller initial bundle
- Faster initial load
- Load features when needed`,category:"Performance"},{id:266,question:"What is bundle analyzer?",answer:`Bundle analyzer visualizes bundle content:

\`\`\`bash
# Install
npm install webpack-bundle-analyzer --save-dev

# Generate stats
ng build --stats-json

# Analyze
npx webpack-bundle-analyzer dist/my-app/stats.json
\`\`\`

Alternative with source-map-explorer:
\`\`\`bash
npm install source-map-explorer --save-dev

ng build --source-map
npx source-map-explorer dist/my-app/main.*.js
\`\`\`

Helps identify:
- Large dependencies
- Duplicate code
- Unused imports
- Optimization opportunities`,category:"Performance"},{id:267,question:"What is differential loading?",answer:`Differential loading creates separate bundles for modern and legacy browsers:

\`\`\`html
<!-- Generated index.html -->
<script src="runtime-es2015.js" type="module"><\/script>
<script src="runtime-es5.js" nomodule><\/script>
<script src="main-es2015.js" type="module"><\/script>
<script src="main-es5.js" nomodule><\/script>
\`\`\`

Configure in tsconfig.json:
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2015"
  }
}
\`\`\`

- Modern browsers load ES2015+ bundles
- Legacy browsers load ES5 bundles
- Smaller bundles for modern browsers

Note: Default in Angular 8-11. Angular 12+ uses ES2017+ by default.`,category:"Performance"},{id:268,question:"How do you measure performance in Angular?",answer:`Tools and techniques for measuring Angular performance:

\`\`\`typescript
// 1. Angular DevTools profiler
// Install Angular DevTools browser extension
// Use Profiler tab to record change detection

// 2. Performance API
performance.mark('start');
// ... operation
performance.mark('end');
performance.measure('operation', 'start', 'end');

// 3. enableProdMode for accurate measurements
import { enableProdMode } from '@angular/core';
enableProdMode();

// 4. Chrome DevTools Performance tab
// Record and analyze rendering, scripting

// 5. Lighthouse audit
// Run in Chrome DevTools for comprehensive report

// 6. Web Vitals
import { onLCP, onFID, onCLS } from 'web-vitals';
onLCP(console.log);
onFID(console.log);
onCLS(console.log);
\`\`\``,category:"Performance"},{id:269,question:"What is enableProdMode?",answer:`enableProdMode disables development mode checks:

\`\`\`typescript
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
\`\`\`

Development mode:
- Runs change detection twice
- Provides detailed error messages
- Additional assertions

Production mode:
- Single change detection pass
- Optimized performance
- Smaller bundle

Always enable for production builds. Angular CLI does this automatically with \`ng build --configuration production\`.`,category:"Performance"},{id:270,question:"What is OnPush change detection strategy?",answer:`OnPush optimizes change detection by reducing checks:

\`\`\`typescript
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  @Input() data: Data;  // Must be immutable

  constructor(private cdr: ChangeDetectorRef) {}

  // Manual trigger if needed
  updateData() {
    this.cdr.markForCheck();
    // or
    this.cdr.detectChanges();
  }
}
\`\`\`

OnPush checks when:
- @Input reference changes (not mutations)
- Event from component/child
- Async pipe emits
- Manual markForCheck()

Requires immutable data patterns.`,category:"Change Detection"},{id:271,question:"How do you optimize template rendering?",answer:`Template optimization techniques:

\`\`\`html
<!-- 1. trackBy for ngFor -->
<li *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</li>

<!-- 2. Avoid function calls in templates -->
<!-- Bad -->
<div>{{ calculateTotal() }}</div>
<!-- Good - use pipe or computed property -->
<div>{{ total$ | async }}</div>

<!-- 3. Use ngIf over hidden -->
<!-- Bad - element in DOM -->
<div [hidden]="!show">Content</div>
<!-- Good - removed from DOM -->
<div *ngIf="show">Content</div>

<!-- 4. Lazy load heavy components -->
@defer (on viewport) {
  <heavy-chart />
}

<!-- 5. Virtual scrolling for long lists -->
<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
\`\`\``,category:"Performance"},{id:272,question:"What is virtual scrolling?",answer:`Virtual scrolling renders only visible items:

\`\`\`typescript
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  imports: [ScrollingModule],
  template: \`
    <cdk-virtual-scroll-viewport itemSize="50" class="viewport">
      <div *cdkVirtualFor="let item of items" class="item">
        {{ item.name }}
      </div>
    </cdk-virtual-scroll-viewport>
  \`,
  styles: [\`
    .viewport { height: 400px; }
    .item { height: 50px; }
  \`]
})
export class ListComponent {
  items = Array.from({ length: 10000 }, (_, i) => ({ name: \`Item \${i}\` }));
}
\`\`\`

Benefits:
- Renders only visible items (~10-20)
- Handles huge lists (10,000+)
- Smooth scrolling
- Low memory usage`,category:"Performance"},{id:273,question:"What is SSR hydration?",answer:`Hydration attaches client-side functionality to SSR HTML:

\`\`\`typescript
// Enable hydration (Angular 16+)
import { provideClientHydration } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration()
  ]
});
\`\`\`

Process:
1. Server renders HTML
2. Browser displays HTML immediately
3. Angular loads and hydrates (attaches event listeners)
4. App becomes interactive

Benefits:
- Faster First Contentful Paint
- Better SEO
- Preserves server-rendered state
- No content flicker`,category:"Performance"},{id:274,question:"What is server-side rendering (SSR)?",answer:`SSR renders Angular app on server:

\`\`\`bash
# Add SSR to existing project
ng add @angular/ssr

# Build and serve
npm run build
npm run serve:ssr:my-app
\`\`\`

\`\`\`typescript
// app.config.server.ts
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

export const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};
\`\`\`

Benefits:
- Better SEO - search engines see content
- Faster initial load - HTML rendered immediately
- Social sharing - meta tags work
- Low-power devices - less client processing`,category:"Performance"},{id:275,question:"What is prerendering (SSG)?",answer:`Prerendering generates static HTML at build time:

\`\`\`bash
# Configure in angular.json
{
  "prerender": {
    "options": {
      "routes": [
        "/",
        "/about",
        "/products"
      ]
    }
  }
}

# Or dynamically with routes file
{
  "routesFile": "routes.txt"
}

# Build with prerendering
ng build
\`\`\`

Difference from SSR:
- SSR: Renders on each request
- SSG: Renders once at build time

Best for:
- Static content
- Marketing pages
- Documentation
- Blogs`,category:"Performance"},{id:276,question:"What is NgRx?",answer:`NgRx is a state management library based on Redux:

\`\`\`typescript
// State
interface AppState { counter: number; }

// Actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

// Reducer
export const counterReducer = createReducer(
  0,
  on(increment, state => state + 1),
  on(decrement, state => state - 1)
);

// Selectors
export const selectCount = (state: AppState) => state.counter;

// Component
@Component({ ... })
export class CounterComponent {
  count$ = this.store.select(selectCount);
  
  constructor(private store: Store<AppState>) {}
  
  increment() { this.store.dispatch(increment()); }
}
\`\`\``,category:"State Management"},{id:277,question:"What are effects in NgRx?",answer:`Effects handle side effects like API calls:

\`\`\`typescript
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}

// Register
@NgModule({
  imports: [EffectsModule.forRoot([UserEffects])]
})
\`\`\`

Effects listen for actions and dispatch new actions.`,category:"State Management"},{id:278,question:"What is the Entity pattern in NgRx?",answer:`Entity pattern normalizes and manages collections:

\`\`\`typescript
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

interface User { id: number; name: string; }

interface UsersState extends EntityState<User> {
  loading: boolean;
}

const adapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialState: UsersState = adapter.getInitialState({
  loading: false
});

export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => 
    adapter.setAll(users, { ...state, loading: false })
  ),
  on(addUser, (state, { user }) => adapter.addOne(user, state)),
  on(updateUser, (state, { user }) => adapter.updateOne(user, state)),
  on(deleteUser, (state, { id }) => adapter.removeOne(id, state))
);

// Selectors
const { selectAll, selectEntities } = adapter.getSelectors();
\`\`\``,category:"State Management"},{id:279,question:"What is a component store?",answer:`ComponentStore provides local state management:

\`\`\`typescript
import { ComponentStore } from '@ngrx/component-store';

interface CounterState { count: number; }

@Injectable()
export class CounterStore extends ComponentStore<CounterState> {
  constructor() {
    super({ count: 0 });
  }

  // Selectors
  readonly count$ = this.select(state => state.count);
  readonly doubled$ = this.select(state => state.count * 2);

  // Updaters
  readonly increment = this.updater(state => ({ count: state.count + 1 }));
  readonly setCount = this.updater((state, count: number) => ({ count }));

  // Effects
  readonly loadCount = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      switchMap(() => this.api.getCount().pipe(
        tap(count => this.setCount(count))
      ))
    )
  );
}
\`\`\`

Scoped to component, simpler than global NgRx.`,category:"State Management"},{id:280,question:"What is dependency injection scope?",answer:`DI scope determines service lifetime and sharing:

\`\`\`typescript
// Application-wide singleton
@Injectable({ providedIn: 'root' })
export class AppService {}

// Module-scoped singleton
@Injectable({ providedIn: UserModule })
export class UserService {}

// Component-scoped (new instance per component)
@Component({
  providers: [LocalService]
})
export class MyComponent {}

// Lazy module singleton (Angular 9+)
@Injectable({ providedIn: 'any' })
export class LazyService {}  // New instance per lazy module

// Platform singleton (multiple apps)
@Injectable({ providedIn: 'platform' })
export class PlatformService {}
\`\`\`

Scope hierarchy: Platform → Root → Module → Component`,category:"Dependency Injection"},{id:281,question:"What is resolution modifier?",answer:`Resolution modifiers control how Angular resolves dependencies:

\`\`\`typescript
import { Optional, Self, SkipSelf, Host } from '@angular/core';

@Component({ ... })
export class MyComponent {
  constructor(
    // Optional - null if not found
    @Optional() logger?: LoggerService,
    
    // Self - only from own injector
    @Self() ownService: OwnService,
    
    // SkipSelf - skip own injector, start from parent
    @SkipSelf() parentService: ParentService,
    
    // Host - stop at host component
    @Host() hostService: HostService,
    
    // Combine modifiers
    @Optional() @Self() localService?: LocalService
  ) {}
}
\`\`\`

Without modifiers, Angular searches entire injector tree.`,category:"Dependency Injection"},{id:282,question:"What is the inject function vs constructor injection?",answer:`Two ways to inject dependencies:

\`\`\`typescript
// Constructor injection (traditional)
@Component({ ... })
export class MyComponent {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
}

// inject() function (Angular 14+)
@Component({ ... })
export class MyComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
}
\`\`\`

| Constructor | inject() |
|---|---|
| Works everywhere | Must be in injection context |
| More verbose | More concise |
| Better for testing mocks | Enables functional patterns |
| Required for some DI tokens | Works with optional (@Optional equivalent) |

\`\`\`typescript
// inject() with options
const logger = inject(LoggerService, { optional: true });
\`\`\``,category:"Dependency Injection"},{id:283,question:"What is host binding and when to use it?",answer:`Host binding binds to the host element's properties:

\`\`\`typescript
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  // Bind to host properties
  @HostBinding('class.active') isActive = false;
  @HostBinding('style.backgroundColor') bgColor = '';
  @HostBinding('attr.role') role = 'button';
  @HostBinding('disabled') isDisabled = false;
  
  // Listen to host events
  @HostListener('click') onClick() {
    this.isActive = !this.isActive;
  }
  
  @HostListener('mouseenter') onEnter() {
    this.bgColor = 'yellow';
  }
}
\`\`\`

Alternative using host metadata:
\`\`\`typescript
@Directive({
  selector: '[appHighlight]',
  host: {
    '[class.active]': 'isActive',
    '(click)': 'onClick()'
  }
})
\`\`\`

Use for directives that modify their host element.`,category:"Directives"}];function NA(){return MA}const Fi=v.forwardRef(({className:e,...t},n)=>C.jsx("div",{ref:n,className:xe("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));Fi.displayName="Card";const OA=v.forwardRef(({className:e,...t},n)=>C.jsx("div",{ref:n,className:xe("flex flex-col space-y-1.5 p-6",e),...t}));OA.displayName="CardHeader";const LA=v.forwardRef(({className:e,...t},n)=>C.jsx("h3",{ref:n,className:xe("text-2xl font-semibold leading-none tracking-tight",e),...t}));LA.displayName="CardTitle";const jA=v.forwardRef(({className:e,...t},n)=>C.jsx("p",{ref:n,className:xe("text-sm text-muted-foreground",e),...t}));jA.displayName="CardDescription";const ex=v.forwardRef(({className:e,...t},n)=>C.jsx("div",{ref:n,className:xe("p-6 pt-0",e),...t}));ex.displayName="CardContent";const DA=v.forwardRef(({className:e,...t},n)=>C.jsx("div",{ref:n,className:xe("flex items-center p-6 pt-0",e),...t}));DA.displayName="CardFooter";function FA(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const _A=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,zA=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,UA={};function Vm(e,t){return(UA.jsx?zA:_A).test(e)}const BA=/[ \t\n\f\r]/g;function WA(e){return typeof e=="object"?e.type==="text"?Qm(e.value):!1:Qm(e)}function Qm(e){return e.replace(BA,"")===""}class bs{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}bs.prototype.normal={};bs.prototype.property={};bs.prototype.space=void 0;function tx(e,t){const n={},r={};for(const o of e)Object.assign(n,o.property),Object.assign(r,o.normal);return new bs(n,r,t)}function Kc(e){return e.toLowerCase()}class vt{constructor(t,n){this.attribute=n,this.property=t}}vt.prototype.attribute="";vt.prototype.booleanish=!1;vt.prototype.boolean=!1;vt.prototype.commaOrSpaceSeparated=!1;vt.prototype.commaSeparated=!1;vt.prototype.defined=!1;vt.prototype.mustUseProperty=!1;vt.prototype.number=!1;vt.prototype.overloadedBoolean=!1;vt.prototype.property="";vt.prototype.spaceSeparated=!1;vt.prototype.space=void 0;let HA=0;const ne=io(),Fe=io(),Yc=io(),z=io(),be=io(),Lo=io(),bt=io();function io(){return 2**++HA}const Xc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ne,booleanish:Fe,commaOrSpaceSeparated:bt,commaSeparated:Lo,number:z,overloadedBoolean:Yc,spaceSeparated:be},Symbol.toStringTag,{value:"Module"})),Cu=Object.keys(Xc);class Np extends vt{constructor(t,n,r,o){let i=-1;if(super(t,n),Gm(this,"space",o),typeof r=="number")for(;++i<Cu.length;){const s=Cu[i];Gm(this,Cu[i],(r&Xc[s])===Xc[s])}}}Np.prototype.defined=!0;function Gm(e,t,n){n&&(e[t]=n)}function si(e){const t={},n={};for(const[r,o]of Object.entries(e.properties)){const i=new Np(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[Kc(r)]=r,n[Kc(i.attribute)]=r}return new bs(t,n,e.space)}const nx=si({properties:{ariaActiveDescendant:null,ariaAtomic:Fe,ariaAutoComplete:null,ariaBusy:Fe,ariaChecked:Fe,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:be,ariaCurrent:null,ariaDescribedBy:be,ariaDetails:null,ariaDisabled:Fe,ariaDropEffect:be,ariaErrorMessage:null,ariaExpanded:Fe,ariaFlowTo:be,ariaGrabbed:Fe,ariaHasPopup:null,ariaHidden:Fe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:be,ariaLevel:z,ariaLive:null,ariaModal:Fe,ariaMultiLine:Fe,ariaMultiSelectable:Fe,ariaOrientation:null,ariaOwns:be,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:Fe,ariaReadOnly:Fe,ariaRelevant:null,ariaRequired:Fe,ariaRoleDescription:be,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:Fe,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function rx(e,t){return t in e?e[t]:t}function ox(e,t){return rx(e,t.toLowerCase())}const qA=si({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Lo,acceptCharset:be,accessKey:be,action:null,allow:null,allowFullScreen:ne,allowPaymentRequest:ne,allowUserMedia:ne,alt:null,as:null,async:ne,autoCapitalize:null,autoComplete:be,autoFocus:ne,autoPlay:ne,blocking:be,capture:null,charSet:null,checked:ne,cite:null,className:be,cols:z,colSpan:null,content:null,contentEditable:Fe,controls:ne,controlsList:be,coords:z|Lo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ne,defer:ne,dir:null,dirName:null,disabled:ne,download:Yc,draggable:Fe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ne,formTarget:null,headers:be,height:z,hidden:Yc,high:z,href:null,hrefLang:null,htmlFor:be,httpEquiv:be,id:null,imageSizes:null,imageSrcSet:null,inert:ne,inputMode:null,integrity:null,is:null,isMap:ne,itemId:null,itemProp:be,itemRef:be,itemScope:ne,itemType:be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ne,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:ne,muted:ne,name:null,nonce:null,noModule:ne,noValidate:ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ne,optimum:z,pattern:null,ping:be,placeholder:null,playsInline:ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ne,referrerPolicy:null,rel:be,required:ne,reversed:ne,rows:z,rowSpan:z,sandbox:be,scope:null,scoped:ne,seamless:ne,selected:ne,shadowRootClonable:ne,shadowRootDelegatesFocus:ne,shadowRootMode:null,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:Fe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:ne,useMap:null,value:Fe,width:z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:be,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ne,declare:ne,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:ne,noHref:ne,noShade:ne,noWrap:ne,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:Fe,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ne,disableRemotePlayback:ne,prefix:null,property:null,results:z,security:null,unselectable:null},space:"html",transform:ox}),$A=si({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:bt,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:be,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Lo,g2:Lo,glyphName:Lo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:bt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:be,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:bt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:bt,rev:bt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:bt,requiredFeatures:bt,requiredFonts:bt,requiredFormats:bt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:bt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:bt,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:bt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:rx}),ix=si({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),sx=si({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ox}),ax=si({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),VA={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},QA=/[A-Z]/g,Km=/-[a-z]/g,GA=/^data[-\w.:]+$/i;function KA(e,t){const n=Kc(t);let r=t,o=vt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&GA.test(t)){if(t.charAt(4)==="-"){const i=t.slice(5).replace(Km,XA);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=t.slice(4);if(!Km.test(i)){let s=i.replace(QA,YA);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}o=Np}return new o(r,t)}function YA(e){return"-"+e.toLowerCase()}function XA(e){return e.charAt(1).toUpperCase()}const JA=tx([nx,qA,ix,sx,ax],"html"),Op=tx([nx,$A,ix,sx,ax],"svg");function ZA(e){return e.join(" ").trim()}var Lp={},Ym=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,eP=/\n/g,tP=/^\s*/,nP=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,rP=/^:\s*/,oP=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,iP=/^[;\s]*/,sP=/^\s+|\s+$/g,aP=`
`,Xm="/",Jm="*",Dr="",lP="comment",uP="declaration";function cP(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function o(w){var m=w.match(eP);m&&(n+=m.length);var x=w.lastIndexOf(aP);r=~x?w.length-x:r+w.length}function i(){var w={line:n,column:r};return function(m){return m.position=new s(w),u(),m}}function s(w){this.start=w,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(w){var m=new Error(t.source+":"+n+":"+r+": "+w);if(m.reason=w,m.filename=t.source,m.line=n,m.column=r,m.source=e,!t.silent)throw m}function l(w){var m=w.exec(e);if(m){var x=m[0];return o(x),e=e.slice(x.length),m}}function u(){l(tP)}function c(w){var m;for(w=w||[];m=p();)m!==!1&&w.push(m);return w}function p(){var w=i();if(!(Xm!=e.charAt(0)||Jm!=e.charAt(1))){for(var m=2;Dr!=e.charAt(m)&&(Jm!=e.charAt(m)||Xm!=e.charAt(m+1));)++m;if(m+=2,Dr===e.charAt(m-1))return a("End of comment missing");var x=e.slice(2,m-2);return r+=2,o(x),e=e.slice(m),r+=2,w({type:lP,comment:x})}}function f(){var w=i(),m=l(nP);if(m){if(p(),!l(rP))return a("property missing ':'");var x=l(oP),h=w({type:uP,property:Zm(m[0].replace(Ym,Dr)),value:x?Zm(x[0].replace(Ym,Dr)):Dr});return l(iP),h}}function d(){var w=[];c(w);for(var m;m=f();)m!==!1&&(w.push(m),c(w));return w}return u(),d()}function Zm(e){return e?e.replace(sP,Dr):Dr}var dP=cP,pP=wa&&wa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Lp,"__esModule",{value:!0});Lp.default=mP;const fP=pP(dP);function mP(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,fP.default)(e),o=typeof t=="function";return r.forEach(i=>{if(i.type!=="declaration")return;const{property:s,value:a}=i;o?t(s,a,i):a&&(n=n||{},n[s]=a)}),n}var Ml={};Object.defineProperty(Ml,"__esModule",{value:!0});Ml.camelCase=void 0;var hP=/^--[a-zA-Z0-9_-]+$/,gP=/-([a-z])/g,yP=/^[^-]+$/,vP=/^-(webkit|moz|ms|o|khtml)-/,wP=/^-(ms)-/,xP=function(e){return!e||yP.test(e)||hP.test(e)},bP=function(e,t){return t.toUpperCase()},eh=function(e,t){return"".concat(t,"-")},CP=function(e,t){return t===void 0&&(t={}),xP(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(wP,eh):e=e.replace(vP,eh),e.replace(gP,bP))};Ml.camelCase=CP;var SP=wa&&wa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},kP=SP(Lp),EP=Ml;function Jc(e,t){var n={};return!e||typeof e!="string"||(0,kP.default)(e,function(r,o){r&&o&&(n[(0,EP.camelCase)(r,t)]=o)}),n}Jc.default=Jc;var TP=Jc;const AP=tl(TP),lx=ux("end"),jp=ux("start");function ux(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function PP(e){const t=jp(e),n=lx(e);if(t&&n)return{start:t,end:n}}function _i(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?th(e.position):"start"in e||"end"in e?th(e):"line"in e||"column"in e?Zc(e):""}function Zc(e){return nh(e&&e.line)+":"+nh(e&&e.column)}function th(e){return Zc(e&&e.start)+"-"+Zc(e&&e.end)}function nh(e){return e&&typeof e=="number"?e:1}class et extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",i={},s=!1;if(n&&("line"in n&&"column"in n?i={place:n}:"start"in n&&"end"in n?i={place:n}:"type"in n?i={ancestors:[n],place:n.position}:i={...n}),typeof t=="string"?o=t:!i.cause&&t&&(s=!0,o=t.message,i.cause=t),!i.ruleId&&!i.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?i.ruleId=r:(i.source=r.slice(0,l),i.ruleId=r.slice(l+1))}if(!i.place&&i.ancestors&&i.ancestors){const l=i.ancestors[i.ancestors.length-1];l&&(i.place=l.position)}const a=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=a?a.line:void 0,this.name=_i(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=s&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}et.prototype.file="";et.prototype.name="";et.prototype.reason="";et.prototype.message="";et.prototype.stack="";et.prototype.column=void 0;et.prototype.line=void 0;et.prototype.ancestors=void 0;et.prototype.cause=void 0;et.prototype.fatal=void 0;et.prototype.place=void 0;et.prototype.ruleId=void 0;et.prototype.source=void 0;const Dp={}.hasOwnProperty,RP=new Map,IP=/[A-Z]/g,MP=new Set(["table","tbody","thead","tfoot","tr"]),NP=new Set(["td","th"]),cx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function OP(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=BP(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=UP(n,t.jsx,t.jsxs)}const o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Op:JA,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},i=dx(o,e,void 0);return i&&typeof i!="string"?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function dx(e,t,n){if(t.type==="element")return LP(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return jP(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return FP(e,t,n);if(t.type==="mdxjsEsm")return DP(e,t);if(t.type==="root")return _P(e,t,n);if(t.type==="text")return zP(e,t)}function LP(e,t,n){const r=e.schema;let o=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=Op,e.schema=o),e.ancestors.push(t);const i=fx(e,t.tagName,!1),s=WP(e,t);let a=_p(e,t);return MP.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!WA(l):!0})),px(e,s,i,t),Fp(s,a),e.ancestors.pop(),e.schema=r,e.create(t,i,s,n)}function jP(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}us(e,t.position)}function DP(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);us(e,t.position)}function FP(e,t,n){const r=e.schema;let o=r;t.name==="svg"&&r.space==="html"&&(o=Op,e.schema=o),e.ancestors.push(t);const i=t.name===null?e.Fragment:fx(e,t.name,!0),s=HP(e,t),a=_p(e,t);return px(e,s,i,t),Fp(s,a),e.ancestors.pop(),e.schema=r,e.create(t,i,s,n)}function _P(e,t,n){const r={};return Fp(r,_p(e,t)),e.create(t,e.Fragment,r,n)}function zP(e,t){return t.value}function px(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Fp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function UP(e,t,n){return r;function r(o,i,s,a){const u=Array.isArray(s.children)?n:t;return a?u(i,s,a):u(i,s)}}function BP(e,t){return n;function n(r,o,i,s){const a=Array.isArray(i.children),l=jp(r);return t(o,i,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function WP(e,t){const n={};let r,o;for(o in t.properties)if(o!=="children"&&Dp.call(t.properties,o)){const i=qP(e,o,t.properties[o]);if(i){const[s,a]=i;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&NP.has(t.tagName)?r=a:n[s]=a}}if(r){const i=n.style||(n.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function HP(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const i=r.data.estree.body[0];i.type;const s=i.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else us(e,t.position);else{const o=r.name;let i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,i=e.evaluater.evaluateExpression(a.expression)}else us(e,t.position);else i=r.value===null?!0:r.value;n[o]=i}return n}function _p(e,t){const n=[];let r=-1;const o=e.passKeys?new Map:RP;for(;++r<t.children.length;){const i=t.children[r];let s;if(e.passKeys){const l=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(l){const u=o.get(l)||0;s=l+"-"+u,o.set(l,u+1)}}const a=dx(e,i,s);a!==void 0&&n.push(a)}return n}function qP(e,t,n){const r=KA(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?FA(n):ZA(n)),r.property==="style"){let o=typeof n=="object"?n:$P(e,String(n));return e.stylePropertyNameCase==="css"&&(o=VP(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&r.space?VA[r.property]||r.property:r.attribute,n]}}function $P(e,t){try{return AP(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,o=new et("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=e.filePath||void 0,o.url=cx+"#cannot-parse-style-attribute",o}}function fx(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const o=t.split(".");let i=-1,s;for(;++i<o.length;){const a=Vm(o[i])?{type:"Identifier",name:o[i]}:{type:"Literal",value:o[i]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(i&&a.type==="Literal"),optional:!1}:a}r=s}else r=Vm(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const o=r.value;return Dp.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(r);us(e)}function us(e,t){const n=new et("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=cx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function VP(e){const t={};let n;for(n in e)Dp.call(e,n)&&(t[QP(n)]=e[n]);return t}function QP(e){let t=e.replace(IP,GP);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function GP(e){return"-"+e.toLowerCase()}const Su={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},KP={};function YP(e,t){const n=KP,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,o=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return mx(e,r,o)}function mx(e,t,n){if(XP(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return rh(e.children,t,n)}return Array.isArray(e)?rh(e,t,n):""}function rh(e,t,n){const r=[];let o=-1;for(;++o<e.length;)r[o]=mx(e[o],t,n);return r.join("")}function XP(e){return!!(e&&typeof e=="object")}const oh=document.createElement("i");function zp(e){const t="&"+e+";";oh.innerHTML=t;const n=oh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function kn(e,t,n,r){const o=e.length;let i=0,s;if(t<0?t=-t>o?0:o+t:t=t>o?o:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);i<r.length;)s=r.slice(i,i+1e4),s.unshift(t,0),e.splice(...s),i+=1e4,t+=1e4}function jt(e,t){return e.length>0?(kn(e,e.length,0,t),e):t}const ih={}.hasOwnProperty;function JP(e){const t={};let n=-1;for(;++n<e.length;)ZP(t,e[n]);return t}function ZP(e,t){let n;for(n in t){const o=(ih.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let s;if(i)for(s in i){ih.call(o,s)||(o[s]=[]);const a=i[s];eR(o[s],Array.isArray(a)?a:a?[a]:[])}}}function eR(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);kn(e,0,0,r)}function hx(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function jo(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const yn=Pr(/[A-Za-z]/),Et=Pr(/[\dA-Za-z]/),tR=Pr(/[#-'*+\--9=?A-Z^-~]/);function ed(e){return e!==null&&(e<32||e===127)}const td=Pr(/\d/),nR=Pr(/[\dA-Fa-f]/),rR=Pr(/[!-/:-@[-`{-~]/);function X(e){return e!==null&&e<-2}function ht(e){return e!==null&&(e<0||e===32)}function he(e){return e===-2||e===-1||e===32}const oR=Pr(new RegExp("\\p{P}|\\p{S}","u")),iR=Pr(/\s/);function Pr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ai(e){const t=[];let n=-1,r=0,o=0;for(;++n<e.length;){const i=e.charCodeAt(n);let s="";if(i===37&&Et(e.charCodeAt(n+1))&&Et(e.charCodeAt(n+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(s=String.fromCharCode(i));else if(i>55295&&i<57344){const a=e.charCodeAt(n+1);i<56320&&a>56319&&a<57344?(s=String.fromCharCode(i,a),o=1):s="�"}else s=String.fromCharCode(i);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+o+1,s=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}function Se(e,t,n,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return s;function s(l){return he(l)?(e.enter(n),a(l)):t(l)}function a(l){return he(l)&&i++<o?(e.consume(l),a):(e.exit(n),t(l))}}const sR={tokenize:aR};function aR(e){const t=e.attempt(this.parser.constructs.contentInitial,r,o);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Se(e,t,"linePrefix")}function o(a){return e.enter("paragraph"),i(a)}function i(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return X(a)?(e.consume(a),e.exit("chunkText"),i):(e.consume(a),s)}}const lR={tokenize:uR},sh={tokenize:cR};function uR(e){const t=this,n=[];let r=0,o,i,s;return a;function a(y){if(r<n.length){const b=n[r];return t.containerState=b[1],e.attempt(b[0].continuation,l,u)(y)}return u(y)}function l(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&g();const b=t.events.length;let T=b,k;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){k=t.events[T][1].end;break}h(r);let A=b;for(;A<t.events.length;)t.events[A][1].end={...k},A++;return kn(t.events,T+1,0,t.events.slice(b)),t.events.length=A,u(y)}return a(y)}function u(y){if(r===n.length){if(!o)return f(y);if(o.currentConstruct&&o.currentConstruct.concrete)return w(y);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(sh,c,p)(y)}function c(y){return o&&g(),h(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,w(y)}function f(y){return t.containerState={},e.attempt(sh,d,w)(y)}function d(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function w(y){if(y===null){o&&g(),h(0),e.consume(y);return}return o=o||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:i}),m(y)}function m(y){if(y===null){x(e.exit("chunkFlow"),!0),h(0),e.consume(y);return}return X(y)?(e.consume(y),x(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(y),m)}function x(y,b){const T=t.sliceStream(y);if(b&&T.push(null),y.previous=i,i&&(i.next=y),i=y,o.defineSkip(y.start),o.write(T),t.parser.lazy[y.start.line]){let k=o.events.length;for(;k--;)if(o.events[k][1].start.offset<s&&(!o.events[k][1].end||o.events[k][1].end.offset>s))return;const A=t.events.length;let P=A,O,j;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){if(O){j=t.events[P][1].end;break}O=!0}for(h(r),k=A;k<t.events.length;)t.events[k][1].end={...j},k++;kn(t.events,P+1,0,t.events.slice(A)),t.events.length=k}}function h(y){let b=n.length;for(;b-- >y;){const T=n[b];t.containerState=T[1],T[0].exit.call(t,e)}n.length=y}function g(){o.write([null]),i=void 0,o=void 0,t.containerState._closeFlow=void 0}}function cR(e,t,n){return Se(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ah(e){if(e===null||ht(e)||iR(e))return 1;if(oR(e))return 2}function Up(e,t,n){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}const nd={name:"attention",resolveAll:dR,tokenize:pR};function dR(e,t){let n=-1,r,o,i,s,a,l,u,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};lh(p,-l),lh(f,l),s={type:l>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},i={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},o={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=jt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=jt(u,[["enter",o,t],["enter",s,t],["exit",s,t],["enter",i,t]]),u=jt(u,Up(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=jt(u,[["exit",i,t],["enter",a,t],["exit",a,t],["exit",o,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,u=jt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,kn(e,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function pR(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=ah(r);let i;return s;function s(l){return i=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===i)return e.consume(l),a;const u=e.exit("attentionSequence"),c=ah(l),p=!c||c===2&&o||n.includes(l),f=!o||o===2&&c||n.includes(r);return u._open=!!(i===42?p:p&&(o||!f)),u._close=!!(i===42?f:f&&(c||!p)),t(l)}}function lh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const fR={name:"autolink",tokenize:mR};function mR(e,t,n){let r=0;return o;function o(d){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(d){return yn(d)?(e.consume(d),s):d===64?n(d):u(d)}function s(d){return d===43||d===45||d===46||Et(d)?(r=1,a(d)):u(d)}function a(d){return d===58?(e.consume(d),r=0,l):(d===43||d===45||d===46||Et(d))&&r++<32?(e.consume(d),a):(r=0,u(d))}function l(d){return d===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),t):d===null||d===32||d===60||ed(d)?n(d):(e.consume(d),l)}function u(d){return d===64?(e.consume(d),c):tR(d)?(e.consume(d),u):n(d)}function c(d){return Et(d)?p(d):n(d)}function p(d){return d===46?(e.consume(d),r=0,c):d===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),t):f(d)}function f(d){if((d===45||Et(d))&&r++<63){const w=d===45?f:p;return e.consume(d),w}return n(d)}}const Nl={partial:!0,tokenize:hR};function hR(e,t,n){return r;function r(i){return he(i)?Se(e,o,"linePrefix")(i):o(i)}function o(i){return i===null||X(i)?t(i):n(i)}}const gx={continuation:{tokenize:yR},exit:vR,name:"blockQuote",tokenize:gR};function gR(e,t,n){const r=this;return o;function o(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),i}return n(s)}function i(s){return he(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function yR(e,t,n){const r=this;return o;function o(s){return he(s)?Se(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):i(s)}function i(s){return e.attempt(gx,t,n)(s)}}function vR(e){e.exit("blockQuote")}const yx={name:"characterEscape",tokenize:wR};function wR(e,t,n){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return rR(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}const vx={name:"characterReference",tokenize:xR};function xR(e,t,n){const r=this;let o=0,i,s;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),l}function l(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),i=31,s=Et,c(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,s=nR,c):(e.enter("characterReferenceValue"),i=7,s=td,c(p))}function c(p){if(p===59&&o){const f=e.exit("characterReferenceValue");return s===Et&&!zp(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(p)&&o++<i?(e.consume(p),c):n(p)}}const uh={partial:!0,tokenize:CR},ch={concrete:!0,name:"codeFenced",tokenize:bR};function bR(e,t,n){const r=this,o={partial:!0,tokenize:T};let i=0,s=0,a;return l;function l(k){return u(k)}function u(k){const A=r.events[r.events.length-1];return i=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(k)}function c(k){return k===a?(s++,e.consume(k),c):s<3?n(k):(e.exit("codeFencedFenceSequence"),he(k)?Se(e,p,"whitespace")(k):p(k))}function p(k){return k===null||X(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(uh,m,b)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(k))}function f(k){return k===null||X(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(k)):he(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Se(e,d,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),f)}function d(k){return k===null||X(k)?p(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(k))}function w(k){return k===null||X(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(k)):k===96&&k===a?n(k):(e.consume(k),w)}function m(k){return e.attempt(o,b,x)(k)}function x(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),h}function h(k){return i>0&&he(k)?Se(e,g,"linePrefix",i+1)(k):g(k)}function g(k){return k===null||X(k)?e.check(uh,m,b)(k):(e.enter("codeFlowValue"),y(k))}function y(k){return k===null||X(k)?(e.exit("codeFlowValue"),g(k)):(e.consume(k),y)}function b(k){return e.exit("codeFenced"),t(k)}function T(k,A,P){let O=0;return j;function j(W){return k.enter("lineEnding"),k.consume(W),k.exit("lineEnding"),D}function D(W){return k.enter("codeFencedFence"),he(W)?Se(k,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(W):M(W)}function M(W){return W===a?(k.enter("codeFencedFenceSequence"),$(W)):P(W)}function $(W){return W===a?(O++,k.consume(W),$):O>=s?(k.exit("codeFencedFenceSequence"),he(W)?Se(k,F,"whitespace")(W):F(W)):P(W)}function F(W){return W===null||X(W)?(k.exit("codeFencedFence"),A(W)):P(W)}}}function CR(e,t,n){const r=this;return o;function o(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i)}function i(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const ku={name:"codeIndented",tokenize:kR},SR={partial:!0,tokenize:ER};function kR(e,t,n){const r=this;return o;function o(u){return e.enter("codeIndented"),Se(e,i,"linePrefix",5)(u)}function i(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):X(u)?e.attempt(SR,s,l)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||X(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function l(u){return e.exit("codeIndented"),t(u)}}function ER(e,t,n){const r=this;return o;function o(s){return r.parser.lazy[r.now().line]?n(s):X(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):Se(e,i,"linePrefix",5)(s)}function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):X(s)?o(s):n(s)}}const TR={name:"codeText",previous:PR,resolve:AR,tokenize:RR};function AR(e){let t=e.length-4,n=3,r,o;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)o===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(o=r):(r===t||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),t-=r-o-2,r=o+2),o=void 0);return e}function PR(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function RR(e,t,n){let r=0,o,i;return s;function s(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),l(p))}function l(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),l):p===96?(i=e.enter("codeTextSequence"),o=0,c(p)):X(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||X(p)?(e.exit("codeTextData"),l(p)):(e.consume(p),u)}function c(p){return p===96?(e.consume(p),o++,c):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(i.type="codeTextData",u(p))}}class IR{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const o=n||0;this.setCursor(Math.trunc(t));const i=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&xi(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),xi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),xi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);xi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);xi(this.left,n.reverse())}}}function xi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function wx(e){const t={};let n=-1,r,o,i,s,a,l,u;const c=new IR(e);for(;++n<c.length;){for(;n in t;)n=t[n];if(r=c.get(n),n&&r[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,i=0,i<l.length&&l[i][1].type==="lineEndingBlank"&&(i+=2),i<l.length&&l[i][1].type==="content"))for(;++i<l.length&&l[i][1].type!=="content";)l[i][1].type==="chunkText"&&(l[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,MR(c,n)),n=t[n],u=!0);else if(r[1]._container){for(i=n,o=void 0;i--;)if(s=c.get(i),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(o&&(c.get(o)[1].type="lineEndingBlank"),s[1].type="lineEnding",o=i);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;o&&(r[1].end={...c.get(o)[1].start},a=c.slice(o,n),a.unshift(r),c.splice(o,n-o+1,a))}}return kn(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function MR(e,t){const n=e.get(t)[1],r=e.get(t)[2];let o=t-1;const i=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],u={};let c,p,f=-1,d=n,w=0,m=0;const x=[m];for(;d;){for(;e.get(++o)[1]!==d;);i.push(o),d._tokenizer||(c=r.sliceStream(d),d.next||c.push(null),p&&s.defineSkip(d.start),d._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(c),d._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),p=d,d=d.next}for(d=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(m=f+1,x.push(m),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(s.events=[],d?(d._tokenizer=void 0,d.previous=void 0):x.pop(),f=x.length;f--;){const h=a.slice(x[f],x[f+1]),g=i.pop();l.push([g,g+h.length-1]),e.splice(g,2,h)}for(l.reverse(),f=-1;++f<l.length;)u[w+l[f][0]]=w+l[f][1],w+=l[f][1]-l[f][0]-1;return u}const NR={resolve:LR,tokenize:jR},OR={partial:!0,tokenize:DR};function LR(e){return wx(e),e}function jR(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),o(a)}function o(a){return a===null?i(a):X(a)?e.check(OR,s,i)(a):(e.consume(a),o)}function i(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function DR(e,t,n){const r=this;return o;function o(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),Se(e,i,"linePrefix")}function i(s){if(s===null||X(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function xx(e,t,n,r,o,i,s,a,l){const u=l||Number.POSITIVE_INFINITY;let c=0;return p;function p(h){return h===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(h),e.exit(i),f):h===null||h===32||h===41||ed(h)?n(h):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),m(h))}function f(h){return h===62?(e.enter(i),e.consume(h),e.exit(i),e.exit(o),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===62?(e.exit("chunkString"),e.exit(a),f(h)):h===null||h===60||X(h)?n(h):(e.consume(h),h===92?w:d)}function w(h){return h===60||h===62||h===92?(e.consume(h),d):d(h)}function m(h){return!c&&(h===null||h===41||ht(h))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(h)):c<u&&h===40?(e.consume(h),c++,m):h===41?(e.consume(h),c--,m):h===null||h===32||h===40||ed(h)?n(h):(e.consume(h),h===92?x:m)}function x(h){return h===40||h===41||h===92?(e.consume(h),m):m(h)}}function bx(e,t,n,r,o,i){const s=this;let a=0,l;return u;function u(d){return e.enter(r),e.enter(o),e.consume(d),e.exit(o),e.enter(i),c}function c(d){return a>999||d===null||d===91||d===93&&!l||d===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(d):d===93?(e.exit(i),e.enter(o),e.consume(d),e.exit(o),e.exit(r),t):X(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),p(d))}function p(d){return d===null||d===91||d===93||X(d)||a++>999?(e.exit("chunkString"),c(d)):(e.consume(d),l||(l=!he(d)),d===92?f:p)}function f(d){return d===91||d===92||d===93?(e.consume(d),a++,p):p(d)}}function Cx(e,t,n,r,o,i){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(o),e.consume(f),e.exit(o),s=f===40?41:f,l):n(f)}function l(f){return f===s?(e.enter(o),e.consume(f),e.exit(o),e.exit(r),t):(e.enter(i),u(f))}function u(f){return f===s?(e.exit(i),l(s)):f===null?n(f):X(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Se(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===s||f===null||X(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:c)}function p(f){return f===s||f===92?(e.consume(f),c):c(f)}}function zi(e,t){let n;return r;function r(o){return X(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):he(o)?Se(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}const FR={name:"definition",tokenize:zR},_R={partial:!0,tokenize:UR};function zR(e,t,n){const r=this;let o;return i;function i(d){return e.enter("definition"),s(d)}function s(d){return bx.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function a(d){return o=jo(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),l):n(d)}function l(d){return ht(d)?zi(e,u)(d):u(d)}function u(d){return xx(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function c(d){return e.attempt(_R,p,p)(d)}function p(d){return he(d)?Se(e,f,"whitespace")(d):f(d)}function f(d){return d===null||X(d)?(e.exit("definition"),r.parser.defined.push(o),t(d)):n(d)}}function UR(e,t,n){return r;function r(a){return ht(a)?zi(e,o)(a):n(a)}function o(a){return Cx(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function i(a){return he(a)?Se(e,s,"whitespace")(a):s(a)}function s(a){return a===null||X(a)?t(a):n(a)}}const BR={name:"hardBreakEscape",tokenize:WR};function WR(e,t,n){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),o}function o(i){return X(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}const HR={name:"headingAtx",resolve:qR,tokenize:$R};function qR(e,t){let n=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},kn(e,r,n-r+1,[["enter",o,t],["enter",i,t],["exit",i,t],["exit",o,t]])),e}function $R(e,t,n){let r=0;return o;function o(c){return e.enter("atxHeading"),i(c)}function i(c){return e.enter("atxHeadingSequence"),s(c)}function s(c){return c===35&&r++<6?(e.consume(c),s):c===null||ht(c)?(e.exit("atxHeadingSequence"),a(c)):n(c)}function a(c){return c===35?(e.enter("atxHeadingSequence"),l(c)):c===null||X(c)?(e.exit("atxHeading"),t(c)):he(c)?Se(e,a,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function l(c){return c===35?(e.consume(c),l):(e.exit("atxHeadingSequence"),a(c))}function u(c){return c===null||c===35||ht(c)?(e.exit("atxHeadingText"),a(c)):(e.consume(c),u)}}const VR=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],dh=["pre","script","style","textarea"],QR={concrete:!0,name:"htmlFlow",resolveTo:YR,tokenize:XR},GR={partial:!0,tokenize:ZR},KR={partial:!0,tokenize:JR};function YR(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function XR(e,t,n){const r=this;let o,i,s,a,l;return u;function u(E){return c(E)}function c(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),p}function p(E){return E===33?(e.consume(E),f):E===47?(e.consume(E),i=!0,m):E===63?(e.consume(E),o=3,r.interrupt?t:S):yn(E)?(e.consume(E),s=String.fromCharCode(E),x):n(E)}function f(E){return E===45?(e.consume(E),o=2,d):E===91?(e.consume(E),o=5,a=0,w):yn(E)?(e.consume(E),o=4,r.interrupt?t:S):n(E)}function d(E){return E===45?(e.consume(E),r.interrupt?t:S):n(E)}function w(E){const Y="CDATA[";return E===Y.charCodeAt(a++)?(e.consume(E),a===Y.length?r.interrupt?t:M:w):n(E)}function m(E){return yn(E)?(e.consume(E),s=String.fromCharCode(E),x):n(E)}function x(E){if(E===null||E===47||E===62||ht(E)){const Y=E===47,de=s.toLowerCase();return!Y&&!i&&dh.includes(de)?(o=1,r.interrupt?t(E):M(E)):VR.includes(s.toLowerCase())?(o=6,Y?(e.consume(E),h):r.interrupt?t(E):M(E)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(E):i?g(E):y(E))}return E===45||Et(E)?(e.consume(E),s+=String.fromCharCode(E),x):n(E)}function h(E){return E===62?(e.consume(E),r.interrupt?t:M):n(E)}function g(E){return he(E)?(e.consume(E),g):j(E)}function y(E){return E===47?(e.consume(E),j):E===58||E===95||yn(E)?(e.consume(E),b):he(E)?(e.consume(E),y):j(E)}function b(E){return E===45||E===46||E===58||E===95||Et(E)?(e.consume(E),b):T(E)}function T(E){return E===61?(e.consume(E),k):he(E)?(e.consume(E),T):y(E)}function k(E){return E===null||E===60||E===61||E===62||E===96?n(E):E===34||E===39?(e.consume(E),l=E,A):he(E)?(e.consume(E),k):P(E)}function A(E){return E===l?(e.consume(E),l=null,O):E===null||X(E)?n(E):(e.consume(E),A)}function P(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||ht(E)?T(E):(e.consume(E),P)}function O(E){return E===47||E===62||he(E)?y(E):n(E)}function j(E){return E===62?(e.consume(E),D):n(E)}function D(E){return E===null||X(E)?M(E):he(E)?(e.consume(E),D):n(E)}function M(E){return E===45&&o===2?(e.consume(E),q):E===60&&o===1?(e.consume(E),V):E===62&&o===4?(e.consume(E),K):E===63&&o===3?(e.consume(E),S):E===93&&o===5?(e.consume(E),N):X(E)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(GR,Q,$)(E)):E===null||X(E)?(e.exit("htmlFlowData"),$(E)):(e.consume(E),M)}function $(E){return e.check(KR,F,Q)(E)}function F(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),W}function W(E){return E===null||X(E)?$(E):(e.enter("htmlFlowData"),M(E))}function q(E){return E===45?(e.consume(E),S):M(E)}function V(E){return E===47?(e.consume(E),s="",R):M(E)}function R(E){if(E===62){const Y=s.toLowerCase();return dh.includes(Y)?(e.consume(E),K):M(E)}return yn(E)&&s.length<8?(e.consume(E),s+=String.fromCharCode(E),R):M(E)}function N(E){return E===93?(e.consume(E),S):M(E)}function S(E){return E===62?(e.consume(E),K):E===45&&o===2?(e.consume(E),S):M(E)}function K(E){return E===null||X(E)?(e.exit("htmlFlowData"),Q(E)):(e.consume(E),K)}function Q(E){return e.exit("htmlFlow"),t(E)}}function JR(e,t,n){const r=this;return o;function o(s){return X(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):n(s)}function i(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function ZR(e,t,n){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Nl,t,n)}}const eI={name:"htmlText",tokenize:tI};function tI(e,t,n){const r=this;let o,i,s;return a;function a(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),l}function l(S){return S===33?(e.consume(S),u):S===47?(e.consume(S),T):S===63?(e.consume(S),y):yn(S)?(e.consume(S),P):n(S)}function u(S){return S===45?(e.consume(S),c):S===91?(e.consume(S),i=0,w):yn(S)?(e.consume(S),g):n(S)}function c(S){return S===45?(e.consume(S),d):n(S)}function p(S){return S===null?n(S):S===45?(e.consume(S),f):X(S)?(s=p,V(S)):(e.consume(S),p)}function f(S){return S===45?(e.consume(S),d):p(S)}function d(S){return S===62?q(S):S===45?f(S):p(S)}function w(S){const K="CDATA[";return S===K.charCodeAt(i++)?(e.consume(S),i===K.length?m:w):n(S)}function m(S){return S===null?n(S):S===93?(e.consume(S),x):X(S)?(s=m,V(S)):(e.consume(S),m)}function x(S){return S===93?(e.consume(S),h):m(S)}function h(S){return S===62?q(S):S===93?(e.consume(S),h):m(S)}function g(S){return S===null||S===62?q(S):X(S)?(s=g,V(S)):(e.consume(S),g)}function y(S){return S===null?n(S):S===63?(e.consume(S),b):X(S)?(s=y,V(S)):(e.consume(S),y)}function b(S){return S===62?q(S):y(S)}function T(S){return yn(S)?(e.consume(S),k):n(S)}function k(S){return S===45||Et(S)?(e.consume(S),k):A(S)}function A(S){return X(S)?(s=A,V(S)):he(S)?(e.consume(S),A):q(S)}function P(S){return S===45||Et(S)?(e.consume(S),P):S===47||S===62||ht(S)?O(S):n(S)}function O(S){return S===47?(e.consume(S),q):S===58||S===95||yn(S)?(e.consume(S),j):X(S)?(s=O,V(S)):he(S)?(e.consume(S),O):q(S)}function j(S){return S===45||S===46||S===58||S===95||Et(S)?(e.consume(S),j):D(S)}function D(S){return S===61?(e.consume(S),M):X(S)?(s=D,V(S)):he(S)?(e.consume(S),D):O(S)}function M(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),o=S,$):X(S)?(s=M,V(S)):he(S)?(e.consume(S),M):(e.consume(S),F)}function $(S){return S===o?(e.consume(S),o=void 0,W):S===null?n(S):X(S)?(s=$,V(S)):(e.consume(S),$)}function F(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||ht(S)?O(S):(e.consume(S),F)}function W(S){return S===47||S===62||ht(S)?O(S):n(S)}function q(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function V(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),R}function R(S){return he(S)?Se(e,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):N(S)}function N(S){return e.enter("htmlTextData"),s(S)}}const Bp={name:"labelEnd",resolveAll:iI,resolveTo:sI,tokenize:aI},nI={tokenize:lI},rI={tokenize:uI},oI={tokenize:cI};function iI(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const o=r.type==="labelImage"?4:2;r.type="data",t+=o}}return e.length!==n.length&&kn(e,0,e.length,n),e}function sI(e,t){let n=e.length,r=0,o,i,s,a;for(;n--;)if(o=e[n][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(s=n);const l={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[i][1].start},end:{...e[s][1].end}},c={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,t],["enter",u,t]],a=jt(a,e.slice(i+1,i+r+3)),a=jt(a,[["enter",c,t]]),a=jt(a,Up(t.parser.constructs.insideSpan.null,e.slice(i+r+4,s-3),t)),a=jt(a,[["exit",c,t],e[s-2],e[s-1],["exit",u,t]]),a=jt(a,e.slice(s+1)),a=jt(a,[["exit",l,t]]),kn(e,i,e.length,a),e}function aI(e,t,n){const r=this;let o=r.events.length,i,s;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return a;function a(f){return i?i._inactive?p(f):(s=r.parser.defined.includes(jo(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),l):n(f)}function l(f){return f===40?e.attempt(nI,c,s?c:p)(f):f===91?e.attempt(rI,c,s?u:p)(f):s?c(f):p(f)}function u(f){return e.attempt(oI,c,p)(f)}function c(f){return t(f)}function p(f){return i._balanced=!0,n(f)}}function lI(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),o}function o(p){return ht(p)?zi(e,i)(p):i(p)}function i(p){return p===41?c(p):xx(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function s(p){return ht(p)?zi(e,l)(p):c(p)}function a(p){return n(p)}function l(p){return p===34||p===39||p===40?Cx(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):c(p)}function u(p){return ht(p)?zi(e,c)(p):c(p)}function c(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function uI(e,t,n){const r=this;return o;function o(a){return bx.call(r,e,i,s,"reference","referenceMarker","referenceString")(a)}function i(a){return r.parser.defined.includes(jo(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function cI(e,t,n){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}const dI={name:"labelStartImage",resolveAll:Bp.resolveAll,tokenize:pI};function pI(e,t,n){const r=this;return o;function o(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),i}function i(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const fI={name:"labelStartLink",resolveAll:Bp.resolveAll,tokenize:mI};function mI(e,t,n){const r=this;return o;function o(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),i}function i(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Eu={name:"lineEnding",tokenize:hI};function hI(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Se(e,t,"linePrefix")}}const ha={name:"thematicBreak",tokenize:gI};function gI(e,t,n){let r=0,o;return i;function i(u){return e.enter("thematicBreak"),s(u)}function s(u){return o=u,a(u)}function a(u){return u===o?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||X(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===o?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),he(u)?Se(e,a,"whitespace")(u):a(u))}}const lt={continuation:{tokenize:xI},exit:CI,name:"list",tokenize:wI},yI={partial:!0,tokenize:SI},vI={partial:!0,tokenize:bI};function wI(e,t,n){const r=this,o=r.events[r.events.length-1];let i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,s=0;return a;function a(d){const w=r.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||d===r.containerState.marker:td(d)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),d===42||d===45?e.check(ha,n,u)(d):u(d);if(!r.interrupt||d===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(d)}return n(d)}function l(d){return td(d)&&++s<10?(e.consume(d),l):(!r.interrupt||s<2)&&(r.containerState.marker?d===r.containerState.marker:d===41||d===46)?(e.exit("listItemValue"),u(d)):n(d)}function u(d){return e.enter("listItemMarker"),e.consume(d),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||d,e.check(Nl,r.interrupt?n:c,e.attempt(yI,f,p))}function c(d){return r.containerState.initialBlankLine=!0,i++,f(d)}function p(d){return he(d)?(e.enter("listItemPrefixWhitespace"),e.consume(d),e.exit("listItemPrefixWhitespace"),f):n(d)}function f(d){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(d)}}function xI(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Nl,o,i);function o(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Se(e,t,"listItemIndent",r.containerState.size+1)(a)}function i(a){return r.containerState.furtherBlankLines||!he(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(vI,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Se(e,e.attempt(lt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function bI(e,t,n){const r=this;return Se(e,o,"listItemIndent",r.containerState.size+1);function o(i){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(i):n(i)}}function CI(e){e.exit(this.containerState.type)}function SI(e,t,n){const r=this;return Se(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(i){const s=r.events[r.events.length-1];return!he(i)&&s&&s[1].type==="listItemPrefixWhitespace"?t(i):n(i)}}const ph={name:"setextUnderline",resolveTo:kI,tokenize:EI};function kI(e,t){let n=e.length,r,o,i;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(o=n)}else e[n][1].type==="content"&&e.splice(n,1),!i&&e[n][1].type==="definition"&&(i=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",s,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end={...e[i][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function EI(e,t,n){const r=this;let o;return i;function i(u){let c=r.events.length,p;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){p=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),o=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===o?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),he(u)?Se(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||X(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const TI={tokenize:AI};function AI(e){const t=this,n=e.attempt(Nl,r,e.attempt(this.parser.constructs.flowInitial,o,Se(e,e.attempt(this.parser.constructs.flow,o,e.attempt(NR,o)),"linePrefix")));return n;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const PI={resolveAll:kx()},RI=Sx("string"),II=Sx("text");function Sx(e){return{resolveAll:kx(e==="text"?MI:void 0),tokenize:t};function t(n){const r=this,o=this.parser.constructs[e],i=n.attempt(o,s,a);return s;function s(c){return u(c)?i(c):a(c)}function a(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),l}function l(c){return u(c)?(n.exit("data"),i(c)):(n.consume(c),l)}function u(c){if(c===null)return!0;const p=o[c];let f=-1;if(p)for(;++f<p.length;){const d=p[f];if(!d.previous||d.previous.call(r,r.previous))return!0}return!1}}}function kx(e){return t;function t(n,r){let o=-1,i;for(;++o<=n.length;)i===void 0?n[o]&&n[o][1].type==="data"&&(i=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==i+2&&(n[i][1].end=n[o-1][1].end,n.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(n,r):n}}function MI(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],o=t.sliceStream(r);let i=o.length,s=-1,a=0,l;for(;i--;){const u=o[i];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){i++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:i?s:r.start._bufferIndex+s,_index:r.start._index+i,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const NI={42:lt,43:lt,45:lt,48:lt,49:lt,50:lt,51:lt,52:lt,53:lt,54:lt,55:lt,56:lt,57:lt,62:gx},OI={91:FR},LI={[-2]:ku,[-1]:ku,32:ku},jI={35:HR,42:ha,45:[ph,ha],60:QR,61:ph,95:ha,96:ch,126:ch},DI={38:vx,92:yx},FI={[-5]:Eu,[-4]:Eu,[-3]:Eu,33:dI,38:vx,42:nd,60:[fR,eI],91:fI,92:[BR,yx],93:Bp,95:nd,96:TR},_I={null:[nd,PI]},zI={null:[42,95]},UI={null:[]},BI=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:zI,contentInitial:OI,disable:UI,document:NI,flow:jI,flowInitial:LI,insideSpan:_I,string:DI,text:FI},Symbol.toStringTag,{value:"Module"}));function WI(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const o={},i=[];let s=[],a=[];const l={attempt:A(T),check:A(k),consume:g,enter:y,exit:b,interrupt:A(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:m,events:[],now:w,parser:e,previous:null,sliceSerialize:f,sliceStream:d,write:p};let c=t.tokenize.call(u,l);return t.resolveAll&&i.push(t),u;function p(D){return s=jt(s,D),x(),s[s.length-1]!==null?[]:(P(t,0),u.events=Up(i,u.events,u),u.events)}function f(D,M){return qI(d(D),M)}function d(D){return HI(s,D)}function w(){const{_bufferIndex:D,_index:M,line:$,column:F,offset:W}=r;return{_bufferIndex:D,_index:M,line:$,column:F,offset:W}}function m(D){o[D.line]=D.column,j()}function x(){let D;for(;r._index<s.length;){const M=s[r._index];if(typeof M=="string")for(D=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===D&&r._bufferIndex<M.length;)h(M.charCodeAt(r._bufferIndex));else h(M)}}function h(D){c=c(D)}function g(D){X(D)?(r.line++,r.column=1,r.offset+=D===-3?2:1,j()):D!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=D}function y(D,M){const $=M||{};return $.type=D,$.start=w(),u.events.push(["enter",$,u]),a.push($),$}function b(D){const M=a.pop();return M.end=w(),u.events.push(["exit",M,u]),M}function T(D,M){P(D,M.from)}function k(D,M){M.restore()}function A(D,M){return $;function $(F,W,q){let V,R,N,S;return Array.isArray(F)?Q(F):"tokenize"in F?Q([F]):K(F);function K(re){return H;function H(ie){const ge=ie!==null&&re[ie],se=ie!==null&&re.null,oe=[...Array.isArray(ge)?ge:ge?[ge]:[],...Array.isArray(se)?se:se?[se]:[]];return Q(oe)(ie)}}function Q(re){return V=re,R=0,re.length===0?q:E(re[R])}function E(re){return H;function H(ie){return S=O(),N=re,re.partial||(u.currentConstruct=re),re.name&&u.parser.constructs.disable.null.includes(re.name)?de():re.tokenize.call(M?Object.assign(Object.create(u),M):u,l,Y,de)(ie)}}function Y(re){return D(N,S),W}function de(re){return S.restore(),++R<V.length?E(V[R]):q}}}function P(D,M){D.resolveAll&&!i.includes(D)&&i.push(D),D.resolve&&kn(u.events,M,u.events.length-M,D.resolve(u.events.slice(M),u)),D.resolveTo&&(u.events=D.resolveTo(u.events,u))}function O(){const D=w(),M=u.previous,$=u.currentConstruct,F=u.events.length,W=Array.from(a);return{from:F,restore:q};function q(){r=D,u.previous=M,u.currentConstruct=$,u.events.length=F,a=W,j()}}function j(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function HI(e,t){const n=t.start._index,r=t.start._bufferIndex,o=t.end._index,i=t.end._bufferIndex;let s;if(n===o)s=[e[n].slice(r,i)];else{if(s=e.slice(n,o),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}i>0&&s.push(e[o].slice(0,i))}return s}function qI(e,t){let n=-1;const r=[];let o;for(;++n<e.length;){const i=e[n];let s;if(typeof i=="string")s=i;else switch(i){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&o)continue;s=" ";break}default:s=String.fromCharCode(i)}o=i===-2,r.push(s)}return r.join("")}function $I(e){const r={constructs:JP([BI,...(e||{}).extensions||[]]),content:o(sR),defined:[],document:o(lR),flow:o(TI),lazy:{},string:o(RI),text:o(II)};return r;function o(i){return s;function s(a){return WI(r,i,a)}}}function VI(e){for(;!wx(e););return e}const fh=/[\0\t\n\r]/g;function QI(){let e=1,t="",n=!0,r;return o;function o(i,s,a){const l=[];let u,c,p,f,d;for(i=t+(typeof i=="string"?i.toString():new TextDecoder(s||void 0).decode(i)),p=0,t="",n&&(i.charCodeAt(0)===65279&&p++,n=void 0);p<i.length;){if(fh.lastIndex=p,u=fh.exec(i),f=u&&u.index!==void 0?u.index:i.length,d=i.charCodeAt(f),!u){t=i.slice(p);break}if(d===10&&p===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),p<f&&(l.push(i.slice(p,f)),e+=f-p),d){case 0:{l.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,l.push(-2);e++<c;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return a&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const GI=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function KI(e){return e.replace(GI,YI)}function YI(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const o=n.charCodeAt(1),i=o===120||o===88;return hx(n.slice(i?2:1),i?16:10)}return zp(n)||e}const Ex={}.hasOwnProperty;function XI(e,t,n){return typeof t!="string"&&(n=t,t=void 0),JI(n)(VI($I(n).document().write(QI()(e,t,!0))))}function JI(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Tn),autolinkProtocol:O,autolinkEmail:O,atxHeading:i(an),blockQuote:i(se),characterEscape:O,characterReference:O,codeFenced:i(oe),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:i(oe,s),codeText:i(ce,s),codeTextData:O,data:O,codeFlowValue:O,definition:i(Be),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:i(at),hardBreakEscape:i(Ut),hardBreakTrailing:i(Ut),htmlFlow:i(ln,s),htmlFlowData:O,htmlText:i(ln,s),htmlTextData:O,image:i(Mr),label:s,link:i(Tn),listItem:i(Nr),listItemValue:f,listOrdered:i(ui,p),listUnordered:i(ui),paragraph:i(Ss),reference:E,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:i(an),strong:i(An),thematicBreak:i(Ul)},exit:{atxHeading:l(),atxHeadingSequence:T,autolink:l(),autolinkEmail:ge,autolinkProtocol:ie,blockQuote:l(),characterEscapeValue:j,characterReferenceMarkerHexadecimal:de,characterReferenceMarkerNumeric:de,characterReferenceValue:re,characterReference:H,codeFenced:l(x),codeFencedFence:m,codeFencedFenceInfo:d,codeFencedFenceMeta:w,codeFlowValue:j,codeIndented:l(h),codeText:l(W),codeTextData:j,data:j,definition:l(),definitionDestinationString:b,definitionLabelString:g,definitionTitleString:y,emphasis:l(),hardBreakEscape:l(M),hardBreakTrailing:l(M),htmlFlow:l($),htmlFlowData:j,htmlText:l(F),htmlTextData:j,image:l(V),label:N,labelText:R,lineEnding:D,link:l(q),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Y,resourceDestinationString:S,resourceTitleString:K,resource:Q,setextHeading:l(P),setextHeadingLineSequence:A,setextHeadingText:k,strong:l(),thematicBreak:l()}};Tx(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(I){let U={type:"root",children:[]};const J={stack:[U],tokenStack:[],config:t,enter:a,exit:u,buffer:s,resume:c,data:n},ae=[];let fe=-1;for(;++fe<I.length;)if(I[fe][1].type==="listOrdered"||I[fe][1].type==="listUnordered")if(I[fe][0]==="enter")ae.push(fe);else{const wt=ae.pop();fe=o(I,wt,fe)}for(fe=-1;++fe<I.length;){const wt=t[I[fe][0]];Ex.call(wt,I[fe][1].type)&&wt[I[fe][1].type].call(Object.assign({sliceSerialize:I[fe][2].sliceSerialize},J),I[fe][1])}if(J.tokenStack.length>0){const wt=J.tokenStack[J.tokenStack.length-1];(wt[1]||mh).call(J,void 0,wt[0])}for(U.position={start:Xn(I.length>0?I[0][1].start:{line:1,column:1,offset:0}),end:Xn(I.length>0?I[I.length-2][1].end:{line:1,column:1,offset:0})},fe=-1;++fe<t.transforms.length;)U=t.transforms[fe](U)||U;return U}function o(I,U,J){let ae=U-1,fe=-1,wt=!1,un,xt,Mt,Hn;for(;++ae<=J;){const De=I[ae];switch(De[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{De[0]==="enter"?fe++:fe--,Hn=void 0;break}case"lineEndingBlank":{De[0]==="enter"&&(un&&!Hn&&!fe&&!Mt&&(Mt=ae),Hn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Hn=void 0}if(!fe&&De[0]==="enter"&&De[1].type==="listItemPrefix"||fe===-1&&De[0]==="exit"&&(De[1].type==="listUnordered"||De[1].type==="listOrdered")){if(un){let qn=ae;for(xt=void 0;qn--;){const Bt=I[qn];if(Bt[1].type==="lineEnding"||Bt[1].type==="lineEndingBlank"){if(Bt[0]==="exit")continue;xt&&(I[xt][1].type="lineEndingBlank",wt=!0),Bt[1].type="lineEnding",xt=qn}else if(!(Bt[1].type==="linePrefix"||Bt[1].type==="blockQuotePrefix"||Bt[1].type==="blockQuotePrefixWhitespace"||Bt[1].type==="blockQuoteMarker"||Bt[1].type==="listItemIndent"))break}Mt&&(!xt||Mt<xt)&&(un._spread=!0),un.end=Object.assign({},xt?I[xt][1].start:De[1].end),I.splice(xt||ae,0,["exit",un,De[2]]),ae++,J++}if(De[1].type==="listItemPrefix"){const qn={type:"listItem",_spread:!1,start:Object.assign({},De[1].start),end:void 0};un=qn,I.splice(ae,0,["enter",qn,De[2]]),ae++,J++,Mt=void 0,Hn=!0}}}return I[U][1]._spread=wt,J}function i(I,U){return J;function J(ae){a.call(this,I(ae),ae),U&&U.call(this,ae)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(I,U,J){this.stack[this.stack.length-1].children.push(I),this.stack.push(I),this.tokenStack.push([U,J||void 0]),I.position={start:Xn(U.start),end:void 0}}function l(I){return U;function U(J){I&&I.call(this,J),u.call(this,J)}}function u(I,U){const J=this.stack.pop(),ae=this.tokenStack.pop();if(ae)ae[0].type!==I.type&&(U?U.call(this,I,ae[0]):(ae[1]||mh).call(this,I,ae[0]));else throw new Error("Cannot close `"+I.type+"` ("+_i({start:I.start,end:I.end})+"): it’s not open");J.position.end=Xn(I.end)}function c(){return YP(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(I){if(this.data.expectingFirstListItemValue){const U=this.stack[this.stack.length-2];U.start=Number.parseInt(this.sliceSerialize(I),10),this.data.expectingFirstListItemValue=void 0}}function d(){const I=this.resume(),U=this.stack[this.stack.length-1];U.lang=I}function w(){const I=this.resume(),U=this.stack[this.stack.length-1];U.meta=I}function m(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const I=this.resume(),U=this.stack[this.stack.length-1];U.value=I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const I=this.resume(),U=this.stack[this.stack.length-1];U.value=I.replace(/(\r?\n|\r)$/g,"")}function g(I){const U=this.resume(),J=this.stack[this.stack.length-1];J.label=U,J.identifier=jo(this.sliceSerialize(I)).toLowerCase()}function y(){const I=this.resume(),U=this.stack[this.stack.length-1];U.title=I}function b(){const I=this.resume(),U=this.stack[this.stack.length-1];U.url=I}function T(I){const U=this.stack[this.stack.length-1];if(!U.depth){const J=this.sliceSerialize(I).length;U.depth=J}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function A(I){const U=this.stack[this.stack.length-1];U.depth=this.sliceSerialize(I).codePointAt(0)===61?1:2}function P(){this.data.setextHeadingSlurpLineEnding=void 0}function O(I){const J=this.stack[this.stack.length-1].children;let ae=J[J.length-1];(!ae||ae.type!=="text")&&(ae=zl(),ae.position={start:Xn(I.start),end:void 0},J.push(ae)),this.stack.push(ae)}function j(I){const U=this.stack.pop();U.value+=this.sliceSerialize(I),U.position.end=Xn(I.end)}function D(I){const U=this.stack[this.stack.length-1];if(this.data.atHardBreak){const J=U.children[U.children.length-1];J.position.end=Xn(I.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(U.type)&&(O.call(this,I),j.call(this,I))}function M(){this.data.atHardBreak=!0}function $(){const I=this.resume(),U=this.stack[this.stack.length-1];U.value=I}function F(){const I=this.resume(),U=this.stack[this.stack.length-1];U.value=I}function W(){const I=this.resume(),U=this.stack[this.stack.length-1];U.value=I}function q(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=U,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function V(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=U,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function R(I){const U=this.sliceSerialize(I),J=this.stack[this.stack.length-2];J.label=KI(U),J.identifier=jo(U).toLowerCase()}function N(){const I=this.stack[this.stack.length-1],U=this.resume(),J=this.stack[this.stack.length-1];if(this.data.inReference=!0,J.type==="link"){const ae=I.children;J.children=ae}else J.alt=U}function S(){const I=this.resume(),U=this.stack[this.stack.length-1];U.url=I}function K(){const I=this.resume(),U=this.stack[this.stack.length-1];U.title=I}function Q(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function Y(I){const U=this.resume(),J=this.stack[this.stack.length-1];J.label=U,J.identifier=jo(this.sliceSerialize(I)).toLowerCase(),this.data.referenceType="full"}function de(I){this.data.characterReferenceType=I.type}function re(I){const U=this.sliceSerialize(I),J=this.data.characterReferenceType;let ae;J?(ae=hx(U,J==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ae=zp(U);const fe=this.stack[this.stack.length-1];fe.value+=ae}function H(I){const U=this.stack.pop();U.position.end=Xn(I.end)}function ie(I){j.call(this,I);const U=this.stack[this.stack.length-1];U.url=this.sliceSerialize(I)}function ge(I){j.call(this,I);const U=this.stack[this.stack.length-1];U.url="mailto:"+this.sliceSerialize(I)}function se(){return{type:"blockquote",children:[]}}function oe(){return{type:"code",lang:null,meta:null,value:""}}function ce(){return{type:"inlineCode",value:""}}function Be(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function at(){return{type:"emphasis",children:[]}}function an(){return{type:"heading",depth:0,children:[]}}function Ut(){return{type:"break"}}function ln(){return{type:"html",value:""}}function Mr(){return{type:"image",title:null,url:"",alt:null}}function Tn(){return{type:"link",title:null,url:"",children:[]}}function ui(I){return{type:"list",ordered:I.type==="listOrdered",start:null,spread:I._spread,children:[]}}function Nr(I){return{type:"listItem",spread:I._spread,checked:null,children:[]}}function Ss(){return{type:"paragraph",children:[]}}function An(){return{type:"strong",children:[]}}function zl(){return{type:"text",value:""}}function Ul(){return{type:"thematicBreak"}}}function Xn(e){return{line:e.line,column:e.column,offset:e.offset}}function Tx(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Tx(e,r):ZI(e,r)}}function ZI(e,t){let n;for(n in t)if(Ex.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function mh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+_i({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+_i({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+_i({start:t.start,end:t.end})+") is still open")}function eM(e){const t=this;t.parser=n;function n(r){return XI(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function tM(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function nM(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function rM(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function oM(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function iM(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function sM(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=ai(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=i+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function aM(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function lM(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ax(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const o=e.all(t),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift({type:"text",value:"["});const s=o[o.length-1];return s&&s.type==="text"?s.value+=r:o.push({type:"text",value:r}),o}function uM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ax(e,t);const o={src:ai(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,i),e.applyData(t,i)}function cM(e,t){const n={src:ai(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function dM(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function pM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ax(e,t);const o={href:ai(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function fM(e,t){const n={href:ai(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function mM(e,t,n){const r=e.all(t),o=n?hM(n):Px(t),i={},s=[];if(typeof t.checked=="boolean"){const c=r[0];let p;c&&c.type==="element"&&c.tagName==="p"?p=c:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const c=r[a];(o||a!==0||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!o?s.push(...c.children):s.push(c)}const l=r[r.length-1];l&&(o||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:i,children:s};return e.patch(t,u),e.applyData(t,u)}function hM(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Px(n[r])}return t}function Px(e){const t=e.spread;return t??e.children.length>1}function gM(e,t){const n={},r=e.all(t);let o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<r.length;){const s=r[o];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)}function yM(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function vM(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function wM(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xM(e,t){const n=e.all(t),r=n.shift(),o=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),o.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=jp(t.children[1]),l=lx(t.children[t.children.length-1]);a&&l&&(s.position={start:a,end:l}),o.push(s)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,i),e.applyData(t,i)}function bM(e,t,n){const r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let l=-1;const u=[];for(;++l<a;){const p=t.children[l],f={},d=s?s[l]:void 0;d&&(f.align=d);let w={type:"element",tagName:i,properties:f,children:[]};p&&(w.children=e.all(p),e.patch(p,w),w=e.applyData(p,w)),u.push(w)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,c),e.applyData(t,c)}function CM(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const hh=9,gh=32;function SM(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),o=0;const i=[];for(;r;)i.push(yh(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return i.push(yh(t.slice(o),o>0,!1)),i.join("")}function yh(e,t,n){let r=0,o=e.length;if(t){let i=e.codePointAt(r);for(;i===hh||i===gh;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(o-1);for(;i===hh||i===gh;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function kM(e,t){const n={type:"text",value:SM(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function EM(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const TM={blockquote:tM,break:nM,code:rM,delete:oM,emphasis:iM,footnoteReference:sM,heading:aM,html:lM,imageReference:uM,image:cM,inlineCode:dM,linkReference:pM,link:fM,listItem:mM,list:gM,paragraph:yM,root:vM,strong:wM,table:xM,tableCell:CM,tableRow:bM,text:kM,thematicBreak:EM,toml:Qs,yaml:Qs,definition:Qs,footnoteDefinition:Qs};function Qs(){}const Rx=-1,Ol=0,Ui=1,Ja=2,Wp=3,Hp=4,qp=5,$p=6,Ix=7,Mx=8,vh=typeof self=="object"?self:globalThis,AM=(e,t)=>{const n=(o,i)=>(e.set(i,o),o),r=o=>{if(e.has(o))return e.get(o);const[i,s]=t[o];switch(i){case Ol:case Rx:return n(s,o);case Ui:{const a=n([],o);for(const l of s)a.push(r(l));return a}case Ja:{const a=n({},o);for(const[l,u]of s)a[r(l)]=r(u);return a}case Wp:return n(new Date(s),o);case Hp:{const{source:a,flags:l}=s;return n(new RegExp(a,l),o)}case qp:{const a=n(new Map,o);for(const[l,u]of s)a.set(r(l),r(u));return a}case $p:{const a=n(new Set,o);for(const l of s)a.add(r(l));return a}case Ix:{const{name:a,message:l}=s;return n(new vh[a](l),o)}case Mx:return n(BigInt(s),o);case"BigInt":return n(Object(BigInt(s)),o);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(new vh[i](s),o)};return r},wh=e=>AM(new Map,e)(0),ao="",{toString:PM}={},{keys:RM}=Object,bi=e=>{const t=typeof e;if(t!=="object"||!e)return[Ol,t];const n=PM.call(e).slice(8,-1);switch(n){case"Array":return[Ui,ao];case"Object":return[Ja,ao];case"Date":return[Wp,ao];case"RegExp":return[Hp,ao];case"Map":return[qp,ao];case"Set":return[$p,ao];case"DataView":return[Ui,n]}return n.includes("Array")?[Ui,n]:n.includes("Error")?[Ix,n]:[Ja,n]},Gs=([e,t])=>e===Ol&&(t==="function"||t==="symbol"),IM=(e,t,n,r)=>{const o=(s,a)=>{const l=r.push(s)-1;return n.set(a,l),l},i=s=>{if(n.has(s))return n.get(s);let[a,l]=bi(s);switch(a){case Ol:{let c=s;switch(l){case"bigint":a=Mx,c=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);c=null;break;case"undefined":return o([Rx],s)}return o([a,c],s)}case Ui:{if(l){let f=s;return l==="DataView"?f=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(s)),o([l,[...f]],s)}const c=[],p=o([a,c],s);for(const f of s)c.push(i(f));return p}case Ja:{if(l)switch(l){case"BigInt":return o([l,s.toString()],s);case"Boolean":case"Number":case"String":return o([l,s.valueOf()],s)}if(t&&"toJSON"in s)return i(s.toJSON());const c=[],p=o([a,c],s);for(const f of RM(s))(e||!Gs(bi(s[f])))&&c.push([i(f),i(s[f])]);return p}case Wp:return o([a,s.toISOString()],s);case Hp:{const{source:c,flags:p}=s;return o([a,{source:c,flags:p}],s)}case qp:{const c=[],p=o([a,c],s);for(const[f,d]of s)(e||!(Gs(bi(f))||Gs(bi(d))))&&c.push([i(f),i(d)]);return p}case $p:{const c=[],p=o([a,c],s);for(const f of s)(e||!Gs(bi(f)))&&c.push(i(f));return p}}const{message:u}=s;return o([a,{name:l,message:u}],s)};return i},xh=(e,{json:t,lossy:n}={})=>{const r=[];return IM(!(t||n),!!t,new Map,r)(e),r},Za=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?wh(xh(e,t)):structuredClone(e):(e,t)=>wh(xh(e,t));function MM(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function NM(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function OM(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||MM,r=e.options.footnoteBackLabel||NM,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const c=e.all(u),p=String(u.identifier).toUpperCase(),f=ai(p.toLowerCase());let d=0;const w=[],m=e.footnoteCounts.get(p);for(;m!==void 0&&++d<=m;){w.length>0&&w.push({type:"text",value:" "});let g=typeof n=="string"?n:n(l,d);typeof g=="string"&&(g={type:"text",value:g}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,d),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const x=c[c.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const g=x.children[x.children.length-1];g&&g.type==="text"?g.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...w)}else c.push(...w);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(c,!0)};e.patch(u,h),a.push(h)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...Za(s),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Nx=function(e){if(e==null)return FM;if(typeof e=="function")return Ll(e);if(typeof e=="object")return Array.isArray(e)?LM(e):jM(e);if(typeof e=="string")return DM(e);throw new Error("Expected function, string, or object as test")};function LM(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Nx(e[n]);return Ll(r);function r(...o){let i=-1;for(;++i<t.length;)if(t[i].apply(this,o))return!0;return!1}}function jM(e){const t=e;return Ll(n);function n(r){const o=r;let i;for(i in e)if(o[i]!==t[i])return!1;return!0}}function DM(e){return Ll(t);function t(n){return n&&n.type===e}}function Ll(e){return t;function t(n,r,o){return!!(_M(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function FM(){return!0}function _M(e){return e!==null&&typeof e=="object"&&"type"in e}const Ox=[],zM=!0,bh=!1,UM="skip";function BM(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;const i=Nx(o),s=r?-1:1;a(e,void 0,[])();function a(l,u,c){const p=l&&typeof l=="object"?l:{};if(typeof p.type=="string"){const d=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(d?"<"+d+">":""))+")"})}return f;function f(){let d=Ox,w,m,x;if((!t||i(l,u,c[c.length-1]||void 0))&&(d=WM(n(l,c)),d[0]===bh))return d;if("children"in l&&l.children){const h=l;if(h.children&&d[0]!==UM)for(m=(r?h.children.length:-1)+s,x=c.concat(h);m>-1&&m<h.children.length;){const g=h.children[m];if(w=a(g,m,x)(),w[0]===bh)return w;m=typeof w[1]=="number"?w[1]:m+s}}return d}}}function WM(e){return Array.isArray(e)?e:typeof e=="number"?[zM,e]:e==null?Ox:[e]}function Lx(e,t,n,r){let o,i,s;typeof t=="function"&&typeof n!="function"?(i=void 0,s=t,o=n):(i=t,s=n,o=r),BM(e,i,a,o);function a(l,u){const c=u[u.length-1],p=c?c.children.indexOf(l):void 0;return s(l,p,c)}}const rd={}.hasOwnProperty,HM={};function qM(e,t){const n=t||HM,r=new Map,o=new Map,i=new Map,s={...TM,...n.handlers},a={all:u,applyData:VM,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:s,one:l,options:n,patch:$M,wrap:GM};return Lx(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const p=c.type==="definition"?r:o,f=String(c.identifier).toUpperCase();p.has(f)||p.set(f,c)}}),a;function l(c,p){const f=c.type,d=a.handlers[f];if(rd.call(a.handlers,f)&&d)return d(a,c,p);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in c){const{children:m,...x}=c,h=Za(x);return h.children=a.all(c),h}return Za(c)}return(a.options.unknownHandler||QM)(a,c,p)}function u(c){const p=[];if("children"in c){const f=c.children;let d=-1;for(;++d<f.length;){const w=a.one(f[d],c);if(w){if(d&&f[d-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Ch(w.value)),!Array.isArray(w)&&w.type==="element")){const m=w.children[0];m&&m.type==="text"&&(m.value=Ch(m.value))}Array.isArray(w)?p.push(...w):p.push(w)}}}return p}}function $M(e,t){e.position&&(t.position=PP(e))}function VM(e,t){let n=t;if(e&&e.data){const r=e.data.hName,o=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&i&&Object.assign(n.properties,Za(i)),"children"in n&&n.children&&o!==null&&o!==void 0&&(n.children=o)}return n}function QM(e,t){const n=t.data||{},r="value"in t&&!(rd.call(n,"hProperties")||rd.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function GM(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Ch(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Sh(e,t){const n=qM(e,t),r=n.one(e,void 0),o=OM(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:`
`},o),i}function KM(e,t){return e&&"run"in e?async function(n,r){const o=Sh(n,{file:r,...t});await e.run(o,r)}:function(n,r){return Sh(n,{file:r,...e||t})}}function kh(e){if(e)throw e}var ga=Object.prototype.hasOwnProperty,jx=Object.prototype.toString,Eh=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Ah=function(t){return typeof Array.isArray=="function"?Array.isArray(t):jx.call(t)==="[object Array]"},Ph=function(t){if(!t||jx.call(t)!=="[object Object]")return!1;var n=ga.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ga.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var o;for(o in t);return typeof o>"u"||ga.call(t,o)},Rh=function(t,n){Eh&&n.name==="__proto__"?Eh(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Ih=function(t,n){if(n==="__proto__")if(ga.call(t,n)){if(Th)return Th(t,n).value}else return;return t[n]},YM=function e(){var t,n,r,o,i,s,a=arguments[0],l=1,u=arguments.length,c=!1;for(typeof a=="boolean"&&(c=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=Ih(a,n),o=Ih(t,n),a!==o&&(c&&o&&(Ph(o)||(i=Ah(o)))?(i?(i=!1,s=r&&Ah(r)?r:[]):s=r&&Ph(r)?r:{},Rh(a,{name:n,newValue:e(c,s,o)})):typeof o<"u"&&Rh(a,{name:n,newValue:o}));return a};const Tu=tl(YM);function od(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function XM(){const e=[],t={run:n,use:r};return t;function n(...o){let i=-1;const s=o.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...o);function a(l,...u){const c=e[++i];let p=-1;if(l){s(l);return}for(;++p<o.length;)(u[p]===null||u[p]===void 0)&&(u[p]=o[p]);o=u,c?JM(c,a)(...u):s(null,...u)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function JM(e,t){let n;return r;function r(...s){const a=e.length>s.length;let l;a&&s.push(o);try{l=e.apply(this,s)}catch(u){const c=u;if(a&&n)throw c;return o(c)}a||(l&&l.then&&typeof l.then=="function"?l.then(i,o):l instanceof Error?o(l):i(l))}function o(s,...a){n||(n=!0,t(s,...a))}function i(s){o(null,s)}}const pn={basename:ZM,dirname:eN,extname:tN,join:nN,sep:"/"};function ZM(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Cs(e);let n=0,r=-1,o=e.length,i;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(i){n=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(i){n=o+1;break}}else s<0&&(i=!0,s=o+1),a>-1&&(e.codePointAt(o)===t.codePointAt(a--)?a<0&&(r=o):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function eN(e){if(Cs(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function tN(e){Cs(e);let t=e.length,n=-1,r=0,o=-1,i=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?o<0?o=t:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||n<0||i===0||i===1&&o===n-1&&o===r+1?"":e.slice(o,n)}function nN(...e){let t=-1,n;for(;++t<e.length;)Cs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":rN(n)}function rN(e){Cs(e);const t=e.codePointAt(0)===47;let n=oN(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function oN(e,t){let n="",r=0,o=-1,i=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length>0){n="",r=0,o=s,i=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(o+1,s):n=e.slice(o+1,s),r=s-o-1;o=s,i=0}else a===46&&i>-1?i++:i=-1}return n}function Cs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const iN={cwd:sN};function sN(){return"/"}function id(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function aN(e){if(typeof e=="string")e=new URL(e);else if(!id(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return lN(e)}function lN(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}const Au=["history","path","basename","stem","extname","dirname"];class Dx{constructor(t){let n;t?id(t)?n={path:t}:typeof t=="string"||uN(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":iN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Au.length;){const i=Au[r];i in n&&n[i]!==void 0&&n[i]!==null&&(this[i]=i==="history"?[...n[i]]:n[i])}let o;for(o in n)Au.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?pn.basename(this.path):void 0}set basename(t){Ru(t,"basename"),Pu(t,"basename"),this.path=pn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?pn.dirname(this.path):void 0}set dirname(t){Mh(this.basename,"dirname"),this.path=pn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?pn.extname(this.path):void 0}set extname(t){if(Pu(t,"extname"),Mh(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=pn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){id(t)&&(t=aN(t)),Ru(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?pn.basename(this.path,this.extname):void 0}set stem(t){Ru(t,"stem"),Pu(t,"stem"),this.path=pn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const o=this.message(t,n,r);throw o.fatal=!0,o}info(t,n,r){const o=this.message(t,n,r);return o.fatal=void 0,o}message(t,n,r){const o=new et(t,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Pu(e,t){if(e&&e.includes(pn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+pn.sep+"`")}function Ru(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Mh(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function uN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const cN=function(e){const r=this.constructor.prototype,o=r[e],i=function(){return o.apply(i,arguments)};return Object.setPrototypeOf(i,r),i},dN={}.hasOwnProperty;class Vp extends cN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=XM()}copy(){const t=new Vp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Tu(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Nu("data",this.frozen),this.namespace[t]=n,this):dN.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Nu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const o=n.call(t,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ks(t),r=this.parser||this.Parser;return Iu("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Iu("process",this.parser||this.Parser),Mu("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(i,s){const a=Ks(t),l=r.parse(a);r.run(l,a,function(c,p,f){if(c||!p||!f)return u(c);const d=p,w=r.stringify(d,f);mN(w)?f.value=w:f.result=w,u(c,f)});function u(c,p){c||!p?s(c):i?i(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Iu("processSync",this.parser||this.Parser),Mu("processSync",this.compiler||this.Compiler),this.process(t,o),Oh("processSync","process",n),r;function o(i,s){n=!0,kh(i),r=s}}run(t,n,r){Nh(t),this.freeze();const o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?i(void 0,r):new Promise(i);function i(s,a){const l=Ks(n);o.run(t,l,u);function u(c,p,f){const d=p||t;c?a(c):s?s(d):r(void 0,d,f)}}}runSync(t,n){let r=!1,o;return this.run(t,n,i),Oh("runSync","run",r),o;function i(s,a){kh(s),o=a,r=!0}}stringify(t,n){this.freeze();const r=Ks(n),o=this.compiler||this.Compiler;return Mu("stringify",o),Nh(t),o(t,r)}use(t,...n){const r=this.attachers,o=this.namespace;if(Nu("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function i(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...p]=u;l(c,p)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(o.settings=Tu(!0,o.settings,u.settings))}function a(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const p=u[c];i(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,c){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...c]);else if(c.length>0){let[d,...w]=c;const m=r[f][1];od(m)&&od(d)&&(d=Tu(!0,m,d)),r[f]=[u,d,...w]}}}}const pN=new Vp().freeze();function Iu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Mu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Nu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Nh(e){if(!od(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Oh(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ks(e){return fN(e)?e:new Dx(e)}function fN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function mN(e){return typeof e=="string"||hN(e)}function hN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const gN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Lh=[],jh={allowDangerousHtml:!0},yN=/^(https?|ircs?|mailto|xmpp)$/i,vN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function wN(e){const t=xN(e),n=bN(e);return CN(t.runSync(t.parse(n),n),e)}function xN(e){const t=e.rehypePlugins||Lh,n=e.remarkPlugins||Lh,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...jh}:jh;return pN().use(eM).use(n).use(KM,r).use(t)}function bN(e){const t=e.children||"",n=new Dx;return typeof t=="string"&&(n.value=t),n}function CN(e,t){const n=t.allowedElements,r=t.allowElement,o=t.components,i=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||SN;for(const c of vN)Object.hasOwn(t,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+gN+c.id,void 0);return Lx(e,u),OP(e,{Fragment:C.Fragment,components:o,ignoreInvalidStyle:!0,jsx:C.jsx,jsxs:C.jsxs,passKeys:!0,passNode:!0});function u(c,p,f){if(c.type==="raw"&&f&&typeof p=="number")return s?f.children.splice(p,1):f.children[p]={type:"text",value:c.value},p;if(c.type==="element"){let d;for(d in Su)if(Object.hasOwn(Su,d)&&Object.hasOwn(c.properties,d)){const w=c.properties[d],m=Su[d];(m===null||m.includes(c.tagName))&&(c.properties[d]=l(String(w||""),d,c))}}if(c.type==="element"){let d=n?!n.includes(c.tagName):i?i.includes(c.tagName):!1;if(!d&&r&&typeof p=="number"&&(d=!r(c,p,f)),d&&f&&typeof p=="number")return a&&c.children?f.children.splice(p,1,...c.children):f.children.splice(p,1),p}}}function SN(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return t===-1||o!==-1&&t>o||n!==-1&&t>n||r!==-1&&t>r||yN.test(e.slice(0,t))?e:""}const kN="/assets/external-apps/react-app/dist/assets/architecture-DTC4zKcU.png",EN="/assets/external-apps/react-app/dist/assets/lifecycle-CDi_CVO6.png",TN="/assets/external-apps/react-app/dist/assets/injector_hierarchies-c7-hT_KY.png",AN="/assets/external-apps/react-app/dist/assets/hierarchy_diagram-CdJQ2oG5.png",PN="/assets/external-apps/react-app/dist/assets/element_injector_hieracrhy-DO7G4O37.png",RN="/assets/external-apps/react-app/dist/assets/customElement-C0ZuabPT.png",IN="/assets/external-apps/react-app/dist/assets/createElement-BarpgR0R.png",MN=({id:e,question:t,answer:n,isCompleted:r,onToggleComplete:o})=>{const[i,s]=v.useState(!1),a={"images/architecture.png":kN,"images/lifecycle.png":EN,"/images/injector%20hierarchies.png":TN,"images/hierarchy%20diagram.png":AN,"images/element%20injector%20hieracrhy.png":PN,"images/customElement.png":RN,"images/createElement.png":IN};return C.jsxs(Fi,{className:"overflow-hidden transition-all duration-300 hover:shadow-md border-border/50",children:[C.jsx("div",{className:"p-4 cursor-pointer select-none",onClick:()=>s(!i),children:C.jsxs("div",{className:"flex items-start gap-3",children:[C.jsx("button",{onClick:l=>{l.stopPropagation(),o(e)},className:xe("mt-1 flex-shrink-0 transition-colors",r?"text-success":"text-muted-foreground hover:text-primary"),children:C.jsx(Gv,{className:xe("w-5 h-5",r&&"fill-current")})}),C.jsx("div",{className:"flex-1 min-w-0",children:C.jsx("h3",{className:"text-lg font-semibold text-foreground mb-1 pr-8",children:t})}),C.jsx("button",{className:"flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors",children:i?C.jsx(Qv,{className:"w-5 h-5"}):C.jsx(fp,{className:"w-5 h-5"})})]})}),i&&C.jsx(ex,{className:"pt-0 pb-4 px-4 animate-in slide-in-from-top-2",children:C.jsx("div",{className:"pl-8 pr-0",children:C.jsx("div",{className:"prose prose-sm max-w-none dark:prose-invert",children:C.jsx(wN,{components:{img:({src:l,alt:u})=>{const c=l?a[l]||l:"";return C.jsx("img",{src:c,alt:u||"Angular diagram",className:"w-full max-w-2xl mx-auto my-6 rounded-lg border border-border shadow-sm"})},code:({node:l,className:u,children:c,...p})=>!u?C.jsx("code",{className:"bg-muted px-1.5 py-0.5 rounded text-sm",...p,children:c}):C.jsx("code",{className:u,...p,children:c}),pre:({children:l})=>C.jsx("pre",{className:"bg-muted p-4 rounded-lg overflow-x-auto border border-border",children:l}),table:({children:l})=>C.jsx("div",{className:"overflow-x-auto",children:C.jsx("table",{className:"min-w-full divide-y divide-border",children:l})})},children:n})})})})]})},Fx=v.forwardRef(({className:e,type:t,...n},r)=>C.jsx("input",{type:t,className:xe("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));Fx.displayName="Input";const NN=pp("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),or=v.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{const s=r?hC:"button";return C.jsx(s,{className:xe(NN({variant:t,size:n,className:e})),ref:i,...o})});or.displayName="Button";const ON=({value:e,onChange:t})=>C.jsxs("div",{className:"relative w-full",children:[C.jsx(fS,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"}),C.jsx(Fx,{type:"text",placeholder:"Search questions...",value:e,onChange:n=>t(n.target.value),className:"pl-10 pr-10 h-12 text-base"}),e&&C.jsx(or,{variant:"ghost",size:"sm",onClick:()=>t(""),className:"absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0",children:C.jsx(Kv,{className:"w-4 h-4"})})]});function Dh(e,[t,n]){return Math.min(n,Math.max(t,e))}var LN=v.createContext(void 0);function jN(e){const t=v.useContext(LN);return e||t||"ltr"}var Ou=0;function DN(){v.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Fh()),document.body.insertAdjacentElement("beforeend",e[1]??Fh()),Ou++,()=>{Ou===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Ou--}},[])}function Fh(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Lu="focusScope.autoFocusOnMount",ju="focusScope.autoFocusOnUnmount",_h={bubbles:!1,cancelable:!0},FN="FocusScope",_x=v.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=e,[a,l]=v.useState(null),u=rn(o),c=rn(i),p=v.useRef(null),f=Le(t,m=>l(m)),d=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;v.useEffect(()=>{if(r){let m=function(y){if(d.paused||!a)return;const b=y.target;a.contains(b)?p.current=b:Zn(p.current,{select:!0})},x=function(y){if(d.paused||!a)return;const b=y.relatedTarget;b!==null&&(a.contains(b)||Zn(p.current,{select:!0}))},h=function(y){if(document.activeElement===document.body)for(const T of y)T.removedNodes.length>0&&Zn(a)};document.addEventListener("focusin",m),document.addEventListener("focusout",x);const g=new MutationObserver(h);return a&&g.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",m),document.removeEventListener("focusout",x),g.disconnect()}}},[r,a,d.paused]),v.useEffect(()=>{if(a){Uh.add(d);const m=document.activeElement;if(!a.contains(m)){const h=new CustomEvent(Lu,_h);a.addEventListener(Lu,u),a.dispatchEvent(h),h.defaultPrevented||(_N(HN(zx(a)),{select:!0}),document.activeElement===m&&Zn(a))}return()=>{a.removeEventListener(Lu,u),setTimeout(()=>{const h=new CustomEvent(ju,_h);a.addEventListener(ju,c),a.dispatchEvent(h),h.defaultPrevented||Zn(m??document.body,{select:!0}),a.removeEventListener(ju,c),Uh.remove(d)},0)}}},[a,u,c,d]);const w=v.useCallback(m=>{if(!n&&!r||d.paused)return;const x=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,h=document.activeElement;if(x&&h){const g=m.currentTarget,[y,b]=zN(g);y&&b?!m.shiftKey&&h===b?(m.preventDefault(),n&&Zn(y,{select:!0})):m.shiftKey&&h===y&&(m.preventDefault(),n&&Zn(b,{select:!0})):h===g&&m.preventDefault()}},[n,r,d.paused]);return C.jsx(we.div,{tabIndex:-1,...s,ref:f,onKeyDown:w})});_x.displayName=FN;function _N(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Zn(r,{select:t}),document.activeElement!==n)return}function zN(e){const t=zx(e),n=zh(t,e),r=zh(t.reverse(),e);return[n,r]}function zx(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function zh(e,t){for(const n of e)if(!UN(n,{upTo:t}))return n}function UN(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function BN(e){return e instanceof HTMLInputElement&&"select"in e}function Zn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&BN(e)&&t&&e.select()}}var Uh=WN();function WN(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Bh(e,t),e.unshift(t)},remove(t){var n;e=Bh(e,t),(n=e[0])==null||n.resume()}}}function Bh(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function HN(e){return e.filter(t=>t.tagName!=="A")}function qN(e){const t=v.useRef({value:e,previous:e});return v.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var $N=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},lo=new WeakMap,Ys=new WeakMap,Xs={},Du=0,Ux=function(e){return e&&(e.host||Ux(e.parentNode))},VN=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ux(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},QN=function(e,t,n,r){var o=VN(t,Array.isArray(e)?e:[e]);Xs[n]||(Xs[n]=new WeakMap);var i=Xs[n],s=[],a=new Set,l=new Set(o),u=function(p){!p||a.has(p)||(a.add(p),u(p.parentNode))};o.forEach(u);var c=function(p){!p||l.has(p)||Array.prototype.forEach.call(p.children,function(f){if(a.has(f))c(f);else try{var d=f.getAttribute(r),w=d!==null&&d!=="false",m=(lo.get(f)||0)+1,x=(i.get(f)||0)+1;lo.set(f,m),i.set(f,x),s.push(f),m===1&&w&&Ys.set(f,!0),x===1&&f.setAttribute(n,"true"),w||f.setAttribute(r,"true")}catch(h){console.error("aria-hidden: cannot operate on ",f,h)}})};return c(t),a.clear(),Du++,function(){s.forEach(function(p){var f=lo.get(p)-1,d=i.get(p)-1;lo.set(p,f),i.set(p,d),f||(Ys.has(p)||p.removeAttribute(r),Ys.delete(p)),d||p.removeAttribute(n)}),Du--,Du||(lo=new WeakMap,lo=new WeakMap,Ys=new WeakMap,Xs={})}},GN=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=$N(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),QN(r,o,n,"aria-hidden")):function(){return null}},vn=function(){return vn=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vn.apply(this,arguments)};function Bx(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function KN(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ya="right-scroll-bar-position",va="width-before-scroll-bar",YN="with-scroll-bars-hidden",XN="--removed-body-scroll-bar-size";function Fu(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function JN(e,t){var n=v.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var ZN=typeof window<"u"?v.useLayoutEffect:v.useEffect,Wh=new WeakMap;function e2(e,t){var n=JN(null,function(r){return e.forEach(function(o){return Fu(o,r)})});return ZN(function(){var r=Wh.get(n);if(r){var o=new Set(r),i=new Set(e),s=n.current;o.forEach(function(a){i.has(a)||Fu(a,null)}),i.forEach(function(a){o.has(a)||Fu(a,s)})}Wh.set(n,e)},[e]),n}function t2(e){return e}function n2(e,t){t===void 0&&(t=t2);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(i),s=n}var l=function(){var c=s;s=[],c.forEach(i)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(c){s.push(c),u()},filter:function(c){return s=s.filter(c),n}}}};return o}function r2(e){e===void 0&&(e={});var t=n2(null);return t.options=vn({async:!0,ssr:!1},e),t}var Wx=function(e){var t=e.sideCar,n=Bx(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return v.createElement(r,vn({},n))};Wx.isSideCarExport=!0;function o2(e,t){return e.useMedium(t),Wx}var Hx=r2(),_u=function(){},jl=v.forwardRef(function(e,t){var n=v.useRef(null),r=v.useState({onScrollCapture:_u,onWheelCapture:_u,onTouchMoveCapture:_u}),o=r[0],i=r[1],s=e.forwardProps,a=e.children,l=e.className,u=e.removeScrollBar,c=e.enabled,p=e.shards,f=e.sideCar,d=e.noRelative,w=e.noIsolation,m=e.inert,x=e.allowPinchZoom,h=e.as,g=h===void 0?"div":h,y=e.gapMode,b=Bx(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=f,k=e2([n,t]),A=vn(vn({},b),o);return v.createElement(v.Fragment,null,c&&v.createElement(T,{sideCar:Hx,removeScrollBar:u,shards:p,noRelative:d,noIsolation:w,inert:m,setCallbacks:i,allowPinchZoom:!!x,lockRef:n,gapMode:y}),s?v.cloneElement(v.Children.only(a),vn(vn({},A),{ref:k})):v.createElement(g,vn({},A,{className:l,ref:k}),a))});jl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};jl.classNames={fullWidth:va,zeroRight:ya};var i2=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function s2(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=i2();return t&&e.setAttribute("nonce",t),e}function a2(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function l2(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var u2=function(){var e=0,t=null;return{add:function(n){e==0&&(t=s2())&&(a2(t,n),l2(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},c2=function(){var e=u2();return function(t,n){v.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},qx=function(){var e=c2(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},d2={left:0,top:0,right:0,gap:0},zu=function(e){return parseInt(e||"",10)||0},p2=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[zu(n),zu(r),zu(o)]},f2=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return d2;var t=p2(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},m2=qx(),Do="data-scroll-locked",h2=function(e,t,n,r){var o=e.left,i=e.top,s=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(YN,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(Do,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ya,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(va,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(ya," .").concat(ya,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(va," .").concat(va,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Do,`] {
    `).concat(XN,": ").concat(a,`px;
  }
`)},Hh=function(){var e=parseInt(document.body.getAttribute(Do)||"0",10);return isFinite(e)?e:0},g2=function(){v.useEffect(function(){return document.body.setAttribute(Do,(Hh()+1).toString()),function(){var e=Hh()-1;e<=0?document.body.removeAttribute(Do):document.body.setAttribute(Do,e.toString())}},[])},y2=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;g2();var i=v.useMemo(function(){return f2(o)},[o]);return v.createElement(m2,{styles:h2(i,!t,o,n?"":"!important")})},sd=!1;if(typeof window<"u")try{var Js=Object.defineProperty({},"passive",{get:function(){return sd=!0,!0}});window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{sd=!1}var uo=sd?{passive:!1}:!1,v2=function(e){return e.tagName==="TEXTAREA"},$x=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!v2(e)&&n[t]==="visible")},w2=function(e){return $x(e,"overflowY")},x2=function(e){return $x(e,"overflowX")},qh=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Vx(e,r);if(o){var i=Qx(e,r),s=i[1],a=i[2];if(s>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},b2=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},C2=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Vx=function(e,t){return e==="v"?w2(t):x2(t)},Qx=function(e,t){return e==="v"?b2(t):C2(t)},S2=function(e,t){return e==="h"&&t==="rtl"?-1:1},k2=function(e,t,n,r,o){var i=S2(e,window.getComputedStyle(t).direction),s=i*r,a=n.target,l=t.contains(a),u=!1,c=s>0,p=0,f=0;do{if(!a)break;var d=Qx(e,a),w=d[0],m=d[1],x=d[2],h=m-x-i*w;(w||h)&&Vx(e,a)&&(p+=h,f+=w);var g=a.parentNode;a=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(c&&(Math.abs(p)<1||!o)||!c&&(Math.abs(f)<1||!o))&&(u=!0),u},Zs=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},$h=function(e){return[e.deltaX,e.deltaY]},Vh=function(e){return e&&"current"in e?e.current:e},E2=function(e,t){return e[0]===t[0]&&e[1]===t[1]},T2=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},A2=0,co=[];function P2(e){var t=v.useRef([]),n=v.useRef([0,0]),r=v.useRef(),o=v.useState(A2++)[0],i=v.useState(qx)[0],s=v.useRef(e);v.useEffect(function(){s.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var m=KN([e.lockRef.current],(e.shards||[]).map(Vh),!0).filter(Boolean);return m.forEach(function(x){return x.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),m.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=v.useCallback(function(m,x){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!s.current.allowPinchZoom;var h=Zs(m),g=n.current,y="deltaX"in m?m.deltaX:g[0]-h[0],b="deltaY"in m?m.deltaY:g[1]-h[1],T,k=m.target,A=Math.abs(y)>Math.abs(b)?"h":"v";if("touches"in m&&A==="h"&&k.type==="range")return!1;var P=qh(A,k);if(!P)return!0;if(P?T=A:(T=A==="v"?"h":"v",P=qh(A,k)),!P)return!1;if(!r.current&&"changedTouches"in m&&(y||b)&&(r.current=T),!T)return!0;var O=r.current||T;return k2(O,x,m,O==="h"?y:b,!0)},[]),l=v.useCallback(function(m){var x=m;if(!(!co.length||co[co.length-1]!==i)){var h="deltaY"in x?$h(x):Zs(x),g=t.current.filter(function(T){return T.name===x.type&&(T.target===x.target||x.target===T.shadowParent)&&E2(T.delta,h)})[0];if(g&&g.should){x.cancelable&&x.preventDefault();return}if(!g){var y=(s.current.shards||[]).map(Vh).filter(Boolean).filter(function(T){return T.contains(x.target)}),b=y.length>0?a(x,y[0]):!s.current.noIsolation;b&&x.cancelable&&x.preventDefault()}}},[]),u=v.useCallback(function(m,x,h,g){var y={name:m,delta:x,target:h,should:g,shadowParent:R2(h)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(b){return b!==y})},1)},[]),c=v.useCallback(function(m){n.current=Zs(m),r.current=void 0},[]),p=v.useCallback(function(m){u(m.type,$h(m),m.target,a(m,e.lockRef.current))},[]),f=v.useCallback(function(m){u(m.type,Zs(m),m.target,a(m,e.lockRef.current))},[]);v.useEffect(function(){return co.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:f}),document.addEventListener("wheel",l,uo),document.addEventListener("touchmove",l,uo),document.addEventListener("touchstart",c,uo),function(){co=co.filter(function(m){return m!==i}),document.removeEventListener("wheel",l,uo),document.removeEventListener("touchmove",l,uo),document.removeEventListener("touchstart",c,uo)}},[]);var d=e.removeScrollBar,w=e.inert;return v.createElement(v.Fragment,null,w?v.createElement(i,{styles:T2(o)}):null,d?v.createElement(y2,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function R2(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const I2=o2(Hx,P2);var Gx=v.forwardRef(function(e,t){return v.createElement(jl,vn({},e,{ref:t,sideCar:I2}))});Gx.classNames=jl.classNames;var M2=[" ","Enter","ArrowUp","ArrowDown"],N2=[" ","Enter"],eo="Select",[Dl,Fl,O2]=vv(eo),[li,kO]=ys(eo,[O2,kl]),_l=kl(),[L2,Rr]=li(eo),[j2,D2]=li(eo),Kx=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:o,onOpenChange:i,value:s,defaultValue:a,onValueChange:l,dir:u,name:c,autoComplete:p,disabled:f,required:d,form:w}=e,m=_l(t),[x,h]=v.useState(null),[g,y]=v.useState(null),[b,T]=v.useState(!1),k=jN(u),[A,P]=Oc({prop:r,defaultProp:o??!1,onChange:i,caller:eo}),[O,j]=Oc({prop:s,defaultProp:a,onChange:l,caller:eo}),D=v.useRef(null),M=x?w||!!x.closest("form"):!0,[$,F]=v.useState(new Set),W=Array.from($).map(q=>q.props.value).join(";");return C.jsx(eT,{...m,children:C.jsxs(L2,{required:d,scope:t,trigger:x,onTriggerChange:h,valueNode:g,onValueNodeChange:y,valueNodeHasChildren:b,onValueNodeHasChildrenChange:T,contentId:yp(),value:O,onValueChange:j,open:A,onOpenChange:P,dir:k,triggerPointerDownPosRef:D,disabled:f,children:[C.jsx(Dl.Provider,{scope:t,children:C.jsx(j2,{scope:e.__scopeSelect,onNativeOptionAdd:v.useCallback(q=>{F(V=>new Set(V).add(q))},[]),onNativeOptionRemove:v.useCallback(q=>{F(V=>{const R=new Set(V);return R.delete(q),R})},[]),children:n})}),M?C.jsxs(w0,{"aria-hidden":!0,required:d,tabIndex:-1,name:c,autoComplete:p,value:O,onChange:q=>j(q.target.value),disabled:f,form:w,children:[O===void 0?C.jsx("option",{value:""}):null,Array.from($)]},W):null]})})};Kx.displayName=eo;var Yx="SelectTrigger",Xx=v.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...o}=e,i=_l(n),s=Rr(Yx,n),a=s.disabled||r,l=Le(t,s.onTriggerChange),u=Fl(n),c=v.useRef("touch"),[p,f,d]=b0(m=>{const x=u().filter(y=>!y.disabled),h=x.find(y=>y.value===s.value),g=C0(x,m,h);g!==void 0&&s.onValueChange(g.value)}),w=m=>{a||(s.onOpenChange(!0),d()),m&&(s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})};return C.jsx(Pw,{asChild:!0,...i,children:C.jsx(we.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":x0(s.value)?"":void 0,...o,ref:l,onClick:ue(o.onClick,m=>{m.currentTarget.focus(),c.current!=="mouse"&&w(m)}),onPointerDown:ue(o.onPointerDown,m=>{c.current=m.pointerType;const x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(w(m),m.preventDefault())}),onKeyDown:ue(o.onKeyDown,m=>{const x=p.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&f(m.key),!(x&&m.key===" ")&&M2.includes(m.key)&&(w(),m.preventDefault())})})})});Xx.displayName=Yx;var Jx="SelectValue",Zx=v.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:o,children:i,placeholder:s="",...a}=e,l=Rr(Jx,n),{onValueNodeHasChildrenChange:u}=l,c=i!==void 0,p=Le(t,l.onValueNodeChange);return Qe(()=>{u(c)},[u,c]),C.jsx(we.span,{...a,ref:p,style:{pointerEvents:"none"},children:x0(l.value)?C.jsx(C.Fragment,{children:s}):i})});Zx.displayName=Jx;var F2="SelectIcon",e0=v.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...o}=e;return C.jsx(we.span,{"aria-hidden":!0,...o,ref:t,children:r||"▼"})});e0.displayName=F2;var _2="SelectPortal",t0=e=>C.jsx(ap,{asChild:!0,...e});t0.displayName=_2;var to="SelectContent",n0=v.forwardRef((e,t)=>{const n=Rr(to,e.__scopeSelect),[r,o]=v.useState();if(Qe(()=>{o(new DocumentFragment)},[]),!n.open){const i=r;return i?oo.createPortal(C.jsx(r0,{scope:e.__scopeSelect,children:C.jsx(Dl.Slot,{scope:e.__scopeSelect,children:C.jsx("div",{children:e.children})})}),i):null}return C.jsx(o0,{...e,ref:t})});n0.displayName=to;var Qt=10,[r0,Ir]=li(to),z2="SelectContentImpl",U2=os("SelectContent.RemoveScroll"),o0=v.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:s,side:a,sideOffset:l,align:u,alignOffset:c,arrowPadding:p,collisionBoundary:f,collisionPadding:d,sticky:w,hideWhenDetached:m,avoidCollisions:x,...h}=e,g=Rr(to,n),[y,b]=v.useState(null),[T,k]=v.useState(null),A=Le(t,H=>b(H)),[P,O]=v.useState(null),[j,D]=v.useState(null),M=Fl(n),[$,F]=v.useState(!1),W=v.useRef(!1);v.useEffect(()=>{if(y)return GN(y)},[y]),DN();const q=v.useCallback(H=>{const[ie,...ge]=M().map(ce=>ce.ref.current),[se]=ge.slice(-1),oe=document.activeElement;for(const ce of H)if(ce===oe||(ce==null||ce.scrollIntoView({block:"nearest"}),ce===ie&&T&&(T.scrollTop=0),ce===se&&T&&(T.scrollTop=T.scrollHeight),ce==null||ce.focus(),document.activeElement!==oe))return},[M,T]),V=v.useCallback(()=>q([P,y]),[q,P,y]);v.useEffect(()=>{$&&V()},[$,V]);const{onOpenChange:R,triggerPointerDownPosRef:N}=g;v.useEffect(()=>{if(y){let H={x:0,y:0};const ie=se=>{var oe,ce;H={x:Math.abs(Math.round(se.pageX)-(((oe=N.current)==null?void 0:oe.x)??0)),y:Math.abs(Math.round(se.pageY)-(((ce=N.current)==null?void 0:ce.y)??0))}},ge=se=>{H.x<=10&&H.y<=10?se.preventDefault():y.contains(se.target)||R(!1),document.removeEventListener("pointermove",ie),N.current=null};return N.current!==null&&(document.addEventListener("pointermove",ie),document.addEventListener("pointerup",ge,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ie),document.removeEventListener("pointerup",ge,{capture:!0})}}},[y,R,N]),v.useEffect(()=>{const H=()=>R(!1);return window.addEventListener("blur",H),window.addEventListener("resize",H),()=>{window.removeEventListener("blur",H),window.removeEventListener("resize",H)}},[R]);const[S,K]=b0(H=>{const ie=M().filter(oe=>!oe.disabled),ge=ie.find(oe=>oe.ref.current===document.activeElement),se=C0(ie,H,ge);se&&setTimeout(()=>se.ref.current.focus())}),Q=v.useCallback((H,ie,ge)=>{const se=!W.current&&!ge;(g.value!==void 0&&g.value===ie||se)&&(O(H),se&&(W.current=!0))},[g.value]),E=v.useCallback(()=>y==null?void 0:y.focus(),[y]),Y=v.useCallback((H,ie,ge)=>{const se=!W.current&&!ge;(g.value!==void 0&&g.value===ie||se)&&D(H)},[g.value]),de=r==="popper"?ad:i0,re=de===ad?{side:a,sideOffset:l,align:u,alignOffset:c,arrowPadding:p,collisionBoundary:f,collisionPadding:d,sticky:w,hideWhenDetached:m,avoidCollisions:x}:{};return C.jsx(r0,{scope:n,content:y,viewport:T,onViewportChange:k,itemRefCallback:Q,selectedItem:P,onItemLeave:E,itemTextRefCallback:Y,focusSelectedItem:V,selectedItemText:j,position:r,isPositioned:$,searchRef:S,children:C.jsx(Gx,{as:U2,allowPinchZoom:!0,children:C.jsx(_x,{asChild:!0,trapped:g.open,onMountAutoFocus:H=>{H.preventDefault()},onUnmountAutoFocus:ue(o,H=>{var ie;(ie=g.trigger)==null||ie.focus({preventScroll:!0}),H.preventDefault()}),children:C.jsx(vl,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:H=>H.preventDefault(),onDismiss:()=>g.onOpenChange(!1),children:C.jsx(de,{role:"listbox",id:g.contentId,"data-state":g.open?"open":"closed",dir:g.dir,onContextMenu:H=>H.preventDefault(),...h,...re,onPlaced:()=>F(!0),ref:A,style:{display:"flex",flexDirection:"column",outline:"none",...h.style},onKeyDown:ue(h.onKeyDown,H=>{const ie=H.ctrlKey||H.altKey||H.metaKey;if(H.key==="Tab"&&H.preventDefault(),!ie&&H.key.length===1&&K(H.key),["ArrowUp","ArrowDown","Home","End"].includes(H.key)){let se=M().filter(oe=>!oe.disabled).map(oe=>oe.ref.current);if(["ArrowUp","End"].includes(H.key)&&(se=se.slice().reverse()),["ArrowUp","ArrowDown"].includes(H.key)){const oe=H.target,ce=se.indexOf(oe);se=se.slice(ce+1)}setTimeout(()=>q(se)),H.preventDefault()}})})})})})})});o0.displayName=z2;var B2="SelectItemAlignedPosition",i0=v.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...o}=e,i=Rr(to,n),s=Ir(to,n),[a,l]=v.useState(null),[u,c]=v.useState(null),p=Le(t,A=>c(A)),f=Fl(n),d=v.useRef(!1),w=v.useRef(!0),{viewport:m,selectedItem:x,selectedItemText:h,focusSelectedItem:g}=s,y=v.useCallback(()=>{if(i.trigger&&i.valueNode&&a&&u&&m&&x&&h){const A=i.trigger.getBoundingClientRect(),P=u.getBoundingClientRect(),O=i.valueNode.getBoundingClientRect(),j=h.getBoundingClientRect();if(i.dir!=="rtl"){const oe=j.left-P.left,ce=O.left-oe,Be=A.left-ce,at=A.width+Be,an=Math.max(at,P.width),Ut=window.innerWidth-Qt,ln=Dh(ce,[Qt,Math.max(Qt,Ut-an)]);a.style.minWidth=at+"px",a.style.left=ln+"px"}else{const oe=P.right-j.right,ce=window.innerWidth-O.right-oe,Be=window.innerWidth-A.right-ce,at=A.width+Be,an=Math.max(at,P.width),Ut=window.innerWidth-Qt,ln=Dh(ce,[Qt,Math.max(Qt,Ut-an)]);a.style.minWidth=at+"px",a.style.right=ln+"px"}const D=f(),M=window.innerHeight-Qt*2,$=m.scrollHeight,F=window.getComputedStyle(u),W=parseInt(F.borderTopWidth,10),q=parseInt(F.paddingTop,10),V=parseInt(F.borderBottomWidth,10),R=parseInt(F.paddingBottom,10),N=W+q+$+R+V,S=Math.min(x.offsetHeight*5,N),K=window.getComputedStyle(m),Q=parseInt(K.paddingTop,10),E=parseInt(K.paddingBottom,10),Y=A.top+A.height/2-Qt,de=M-Y,re=x.offsetHeight/2,H=x.offsetTop+re,ie=W+q+H,ge=N-ie;if(ie<=Y){const oe=D.length>0&&x===D[D.length-1].ref.current;a.style.bottom="0px";const ce=u.clientHeight-m.offsetTop-m.offsetHeight,Be=Math.max(de,re+(oe?E:0)+ce+V),at=ie+Be;a.style.height=at+"px"}else{const oe=D.length>0&&x===D[0].ref.current;a.style.top="0px";const Be=Math.max(Y,W+m.offsetTop+(oe?Q:0)+re)+ge;a.style.height=Be+"px",m.scrollTop=ie-Y+m.offsetTop}a.style.margin=`${Qt}px 0`,a.style.minHeight=S+"px",a.style.maxHeight=M+"px",r==null||r(),requestAnimationFrame(()=>d.current=!0)}},[f,i.trigger,i.valueNode,a,u,m,x,h,i.dir,r]);Qe(()=>y(),[y]);const[b,T]=v.useState();Qe(()=>{u&&T(window.getComputedStyle(u).zIndex)},[u]);const k=v.useCallback(A=>{A&&w.current===!0&&(y(),g==null||g(),w.current=!1)},[y,g]);return C.jsx(H2,{scope:n,contentWrapper:a,shouldExpandOnScrollRef:d,onScrollButtonChange:k,children:C.jsx("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:b},children:C.jsx(we.div,{...o,ref:p,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}})})})});i0.displayName=B2;var W2="SelectPopperPosition",ad=v.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:o=Qt,...i}=e,s=_l(n);return C.jsx(Rw,{...s,...i,ref:t,align:r,collisionPadding:o,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});ad.displayName=W2;var[H2,Qp]=li(to,{}),ld="SelectViewport",s0=v.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:r,...o}=e,i=Ir(ld,n),s=Qp(ld,n),a=Le(t,i.onViewportChange),l=v.useRef(0);return C.jsxs(C.Fragment,{children:[C.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),C.jsx(Dl.Slot,{scope:n,children:C.jsx(we.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:a,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:ue(o.onScroll,u=>{const c=u.currentTarget,{contentWrapper:p,shouldExpandOnScrollRef:f}=s;if(f!=null&&f.current&&p){const d=Math.abs(l.current-c.scrollTop);if(d>0){const w=window.innerHeight-Qt*2,m=parseFloat(p.style.minHeight),x=parseFloat(p.style.height),h=Math.max(m,x);if(h<w){const g=h+d,y=Math.min(w,g),b=g-y;p.style.height=y+"px",p.style.bottom==="0px"&&(c.scrollTop=b>0?b:0,p.style.justifyContent="flex-end")}}}l.current=c.scrollTop})})})]})});s0.displayName=ld;var a0="SelectGroup",[q2,$2]=li(a0),V2=v.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=yp();return C.jsx(q2,{scope:n,id:o,children:C.jsx(we.div,{role:"group","aria-labelledby":o,...r,ref:t})})});V2.displayName=a0;var l0="SelectLabel",u0=v.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=$2(l0,n);return C.jsx(we.div,{id:o.id,...r,ref:t})});u0.displayName=l0;var el="SelectItem",[Q2,c0]=li(el),d0=v.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:o=!1,textValue:i,...s}=e,a=Rr(el,n),l=Ir(el,n),u=a.value===r,[c,p]=v.useState(i??""),[f,d]=v.useState(!1),w=Le(t,g=>{var y;return(y=l.itemRefCallback)==null?void 0:y.call(l,g,r,o)}),m=yp(),x=v.useRef("touch"),h=()=>{o||(a.onValueChange(r),a.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return C.jsx(Q2,{scope:n,value:r,disabled:o,textId:m,isSelected:u,onItemTextChange:v.useCallback(g=>{p(y=>y||((g==null?void 0:g.textContent)??"").trim())},[]),children:C.jsx(Dl.ItemSlot,{scope:n,value:r,disabled:o,textValue:c,children:C.jsx(we.div,{role:"option","aria-labelledby":m,"data-highlighted":f?"":void 0,"aria-selected":u&&f,"data-state":u?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...s,ref:w,onFocus:ue(s.onFocus,()=>d(!0)),onBlur:ue(s.onBlur,()=>d(!1)),onClick:ue(s.onClick,()=>{x.current!=="mouse"&&h()}),onPointerUp:ue(s.onPointerUp,()=>{x.current==="mouse"&&h()}),onPointerDown:ue(s.onPointerDown,g=>{x.current=g.pointerType}),onPointerMove:ue(s.onPointerMove,g=>{var y;x.current=g.pointerType,o?(y=l.onItemLeave)==null||y.call(l):x.current==="mouse"&&g.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ue(s.onPointerLeave,g=>{var y;g.currentTarget===document.activeElement&&((y=l.onItemLeave)==null||y.call(l))}),onKeyDown:ue(s.onKeyDown,g=>{var b;((b=l.searchRef)==null?void 0:b.current)!==""&&g.key===" "||(N2.includes(g.key)&&h(),g.key===" "&&g.preventDefault())})})})})});d0.displayName=el;var Ti="SelectItemText",p0=v.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:o,...i}=e,s=Rr(Ti,n),a=Ir(Ti,n),l=c0(Ti,n),u=D2(Ti,n),[c,p]=v.useState(null),f=Le(t,h=>p(h),l.onItemTextChange,h=>{var g;return(g=a.itemTextRefCallback)==null?void 0:g.call(a,h,l.value,l.disabled)}),d=c==null?void 0:c.textContent,w=v.useMemo(()=>C.jsx("option",{value:l.value,disabled:l.disabled,children:d},l.value),[l.disabled,l.value,d]),{onNativeOptionAdd:m,onNativeOptionRemove:x}=u;return Qe(()=>(m(w),()=>x(w)),[m,x,w]),C.jsxs(C.Fragment,{children:[C.jsx(we.span,{id:l.textId,...i,ref:f}),l.isSelected&&s.valueNode&&!s.valueNodeHasChildren?oo.createPortal(i.children,s.valueNode):null]})});p0.displayName=Ti;var f0="SelectItemIndicator",m0=v.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return c0(f0,n).isSelected?C.jsx(we.span,{"aria-hidden":!0,...r,ref:t}):null});m0.displayName=f0;var ud="SelectScrollUpButton",h0=v.forwardRef((e,t)=>{const n=Ir(ud,e.__scopeSelect),r=Qp(ud,e.__scopeSelect),[o,i]=v.useState(!1),s=Le(t,r.onScrollButtonChange);return Qe(()=>{if(n.viewport&&n.isPositioned){let a=function(){const u=l.scrollTop>0;i(u)};const l=n.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[n.viewport,n.isPositioned]),o?C.jsx(y0,{...e,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop-l.offsetHeight)}}):null});h0.displayName=ud;var cd="SelectScrollDownButton",g0=v.forwardRef((e,t)=>{const n=Ir(cd,e.__scopeSelect),r=Qp(cd,e.__scopeSelect),[o,i]=v.useState(!1),s=Le(t,r.onScrollButtonChange);return Qe(()=>{if(n.viewport&&n.isPositioned){let a=function(){const u=l.scrollHeight-l.clientHeight,c=Math.ceil(l.scrollTop)<u;i(c)};const l=n.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[n.viewport,n.isPositioned]),o?C.jsx(y0,{...e,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop+l.offsetHeight)}}):null});g0.displayName=cd;var y0=v.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:r,...o}=e,i=Ir("SelectScrollButton",n),s=v.useRef(null),a=Fl(n),l=v.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return v.useEffect(()=>()=>l(),[l]),Qe(()=>{var c;const u=a().find(p=>p.ref.current===document.activeElement);(c=u==null?void 0:u.ref.current)==null||c.scrollIntoView({block:"nearest"})},[a]),C.jsx(we.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:ue(o.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:ue(o.onPointerMove,()=>{var u;(u=i.onItemLeave)==null||u.call(i),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:ue(o.onPointerLeave,()=>{l()})})}),G2="SelectSeparator",v0=v.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return C.jsx(we.div,{"aria-hidden":!0,...r,ref:t})});v0.displayName=G2;var dd="SelectArrow",K2=v.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=_l(n),i=Rr(dd,n),s=Ir(dd,n);return i.open&&s.position==="popper"?C.jsx(Iw,{...o,...r,ref:t}):null});K2.displayName=dd;var Y2="SelectBubbleInput",w0=v.forwardRef(({__scopeSelect:e,value:t,...n},r)=>{const o=v.useRef(null),i=Le(r,o),s=qN(t);return v.useEffect(()=>{const a=o.current;if(!a)return;const l=window.HTMLSelectElement.prototype,c=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==t&&c){const p=new Event("change",{bubbles:!0});c.call(a,t),a.dispatchEvent(p)}},[s,t]),C.jsx(we.select,{...n,style:{...Sv,...n.style},ref:i,defaultValue:t})});w0.displayName=Y2;function x0(e){return e===""||e===void 0}function b0(e){const t=rn(e),n=v.useRef(""),r=v.useRef(0),o=v.useCallback(s=>{const a=n.current+s;t(a),function l(u){n.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>l(""),1e3))}(a)},[t]),i=v.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return v.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,o,i]}function C0(e,t,n){const o=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let s=X2(e,Math.max(i,0));o.length===1&&(s=s.filter(u=>u!==n));const l=s.find(u=>u.textValue.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}function X2(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var J2=Kx,S0=Xx,Z2=Zx,eO=e0,tO=t0,k0=n0,nO=s0,E0=u0,T0=d0,rO=p0,oO=m0,A0=h0,P0=g0,R0=v0;const iO=J2,sO=Z2,I0=v.forwardRef(({className:e,children:t,...n},r)=>C.jsxs(S0,{ref:r,className:xe("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,C.jsx(eO,{asChild:!0,children:C.jsx(fp,{className:"h-4 w-4 opacity-50"})})]}));I0.displayName=S0.displayName;const M0=v.forwardRef(({className:e,...t},n)=>C.jsx(A0,{ref:n,className:xe("flex cursor-default items-center justify-center py-1",e),...t,children:C.jsx(Qv,{className:"h-4 w-4"})}));M0.displayName=A0.displayName;const N0=v.forwardRef(({className:e,...t},n)=>C.jsx(P0,{ref:n,className:xe("flex cursor-default items-center justify-center py-1",e),...t,children:C.jsx(fp,{className:"h-4 w-4"})}));N0.displayName=P0.displayName;const O0=v.forwardRef(({className:e,children:t,position:n="popper",...r},o)=>C.jsx(tO,{children:C.jsxs(k0,{ref:o,className:xe("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r,children:[C.jsx(M0,{}),C.jsx(nO,{className:xe("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),C.jsx(N0,{})]})}));O0.displayName=k0.displayName;const aO=v.forwardRef(({className:e,...t},n)=>C.jsx(E0,{ref:n,className:xe("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));aO.displayName=E0.displayName;const po=v.forwardRef(({className:e,children:t,...n},r)=>C.jsxs(T0,{ref:r,className:xe("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",e),...n,children:[C.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:C.jsx(oO,{children:C.jsx(aS,{className:"h-4 w-4"})})}),C.jsx(rO,{children:t})]}));po.displayName=T0.displayName;const lO=v.forwardRef(({className:e,...t},n)=>C.jsx(R0,{ref:n,className:xe("-mx-1 my-1 h-px bg-muted",e),...t}));lO.displayName=R0.displayName;const uO=({currentPage:e,totalPages:t,itemsPerPage:n,totalItems:r,onPageChange:o,onItemsPerPageChange:i})=>{const s=(e-1)*n+1,a=Math.min(e*n,r);return C.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 py-4",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-sm text-muted-foreground",children:"Show"}),C.jsxs(iO,{value:n.toString(),onValueChange:l=>i(Number(l)),children:[C.jsx(I0,{className:"w-20",children:C.jsx(sO,{})}),C.jsxs(O0,{children:[C.jsx(po,{value:"10",children:"10"}),C.jsx(po,{value:"15",children:"15"}),C.jsx(po,{value:"20",children:"20"}),C.jsx(po,{value:"30",children:"30"}),C.jsx(po,{value:"50",children:"50"})]})]}),C.jsx("span",{className:"text-sm text-muted-foreground",children:"per page"})]}),C.jsxs("div",{className:"text-sm text-muted-foreground",children:["Showing ",s," to ",a," of ",r," questions"]}),C.jsxs("div",{className:"flex items-center gap-1",children:[C.jsx(or,{variant:"outline",size:"sm",onClick:()=>o(1),disabled:e===1,className:"h-9 w-9 p-0",children:C.jsx(cS,{className:"w-4 h-4"})}),C.jsx(or,{variant:"outline",size:"sm",onClick:()=>o(e-1),disabled:e===1,className:"h-9 w-9 p-0",children:C.jsx(lS,{className:"w-4 h-4"})}),C.jsx("div",{className:"flex items-center gap-1 mx-2",children:Array.from({length:Math.min(5,t)},(l,u)=>{let c;return t<=5||e<=3?c=u+1:e>=t-2?c=t-4+u:c=e-2+u,C.jsx(or,{variant:e===c?"default":"outline",size:"sm",onClick:()=>o(c),className:"h-9 w-9 p-0",children:c},c)})}),C.jsx(or,{variant:"outline",size:"sm",onClick:()=>o(e+1),disabled:e===t,className:"h-9 w-9 p-0",children:C.jsx(uS,{className:"w-4 h-4"})}),C.jsx(or,{variant:"outline",size:"sm",onClick:()=>o(t),disabled:e===t,className:"h-9 w-9 p-0",children:C.jsx(dS,{className:"w-4 h-4"})})]})]})},cO=({totalQuestions:e,completedQuestions:t,filteredQuestions:n})=>{const r=e>0?Math.round(t/e*100):0;return C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[C.jsx(Fi,{className:"p-4",children:C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("div",{className:"p-3 bg-primary/10 rounded-lg",children:C.jsx(Vv,{className:"w-5 h-5 text-primary"})}),C.jsxs("div",{children:[C.jsx("p",{className:"text-sm text-muted-foreground",children:"Total Questions"}),C.jsx("p",{className:"text-2xl font-bold text-foreground",children:n})]})]})}),C.jsx(Fi,{className:"p-4",children:C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("div",{className:"p-3 bg-success/10 rounded-lg",children:C.jsx(Gv,{className:"w-5 h-5 text-success"})}),C.jsxs("div",{children:[C.jsx("p",{className:"text-sm text-muted-foreground",children:"Completed"}),C.jsx("p",{className:"text-2xl font-bold text-foreground",children:t})]})]})}),C.jsx(Fi,{className:"p-4",children:C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("div",{className:"p-3 bg-accent/10 rounded-lg",children:C.jsx(hS,{className:"w-5 h-5 text-accent"})}),C.jsxs("div",{children:[C.jsx("p",{className:"text-sm text-muted-foreground",children:"Progress"}),C.jsxs("p",{className:"text-2xl font-bold text-foreground",children:[r,"%"]})]})]})})]})},dO=pp("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function pO({className:e,variant:t,...n}){return C.jsx("div",{className:xe(dO({variant:t}),e),...n})}const Gp=[{id:"all",label:"All",keywords:[]},{id:"basics",label:"Basics",keywords:["angular","typescript","architecture","cli","bootstrap"]},{id:"components",label:"Components",keywords:["component","template","view","dynamic component"]},{id:"directives",label:"Directives",keywords:["directive","ngif","ngfor","ngswitch","attribute directive","structural"]},{id:"services",label:"Services & DI",keywords:["service","dependency injection","injector","provider","injectable"]},{id:"pipes",label:"Pipes",keywords:["pipe","pure","impure","async pipe"]},{id:"forms",label:"Forms",keywords:["form","reactive","template-driven","formcontrol","formgroup","validation","ngmodel"]},{id:"routing",label:"Routing",keywords:["router","route","navigation","guard","lazy load","outlet"]},{id:"http",label:"HTTP & API",keywords:["http","httpclient","interceptor","request","response"]},{id:"rxjs",label:"RxJS",keywords:["observable","rxjs","subject","subscribe","operator","promise"]},{id:"lifecycle",label:"Lifecycle",keywords:["lifecycle","hook","ngoninit","ngondestroy","ngonchanges","ngafterviewinit"]},{id:"modules",label:"Modules",keywords:["module","ngmodule","lazy","feature module","shared module"]},{id:"testing",label:"Testing",keywords:["test","jasmine","karma","spec","mock","testbed"]},{id:"performance",label:"Performance",keywords:["performance","change detection","onpush","trackby","optimization","aot","jit"]},{id:"security",label:"Security",keywords:["security","xss","csrf","sanitize","dom","trusted"]},{id:"advanced",label:"Advanced",keywords:["decorator","metadata","zone","platform","renderer","element ref","viewchild","contentchild"]}];function fO({selectedCategory:e,onCategoryChange:t,questionCounts:n}){return C.jsx("div",{className:"flex flex-wrap gap-2",children:Gp.map(r=>C.jsxs(pO,{variant:e===r.id?"default":"outline",className:xe("cursor-pointer transition-all hover:scale-105 px-3 py-1.5",e===r.id?"bg-primary text-primary-foreground":"hover:bg-primary/10"),onClick:()=>t(r.id),children:[r.label,C.jsxs("span",{className:"ml-1.5 text-xs opacity-70",children:["(",n[r.id]||0,")"]})]},r.id))})}function Qh(e){const t=e.toLowerCase();for(const n of Gp)if(n.id!=="all"&&n.keywords.some(r=>t.includes(r)))return n.id;return"basics"}function mO(){const{theme:e,setTheme:t}=sw();return C.jsxs(or,{variant:"outline",size:"icon",onClick:()=>t(e==="dark"?"light":"dark"),className:"rounded-full",children:[C.jsx(mS,{className:"h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),C.jsx(pS,{className:"absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),C.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}const hO=()=>{const[e,t]=v.useState([]),[n,r]=v.useState(""),[o,i]=v.useState(1),[s,a]=v.useState(15),[l,u]=v.useState(new Set),[c,p]=v.useState("all");v.useEffect(()=>{const b=NA();t(b);const T=localStorage.getItem("completedQuestions");T&&u(new Set(JSON.parse(T)))},[]);const f=v.useMemo(()=>{let b=e;if(c!=="all"&&(b=b.filter(T=>Qh(T.question)===c)),n.trim()){const T=n.toLowerCase();b=b.filter(k=>k.question.toLowerCase().includes(T)||k.answer.toLowerCase().includes(T))}return b},[e,n,c]),d=v.useMemo(()=>{const b={};return b.all=e.length,Gp.forEach(T=>{T.id!=="all"&&(b[T.id]=e.filter(k=>Qh(k.question)===T.id).length)}),b},[e]),w=Math.ceil(f.length/s),m=(o-1)*s,x=m+s,h=f.slice(m,x);v.useEffect(()=>{i(1)},[n,c]);const g=b=>{const T=new Set(l);T.has(b)?T.delete(b):T.add(b),u(T),localStorage.setItem("completedQuestions",JSON.stringify([...T]))},y=b=>{a(b),i(1)};return C.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-background via-background to-secondary/20",children:[C.jsx("header",{className:"border-b border-border/50 bg-card/80",children:C.jsxs("div",{className:"container mx-auto px-4 py-6",children:[C.jsxs("div",{className:"flex items-center justify-between mb-6",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("div",{className:"p-3 bg-gradient-to-br from-primary to-accent rounded-xl shadow-md",children:C.jsx(Vv,{className:"w-6 h-6 text-primary-foreground"})}),C.jsxs("div",{children:[C.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",children:"Angular Interview Questions"}),C.jsx("p",{className:"text-muted-foreground mt-1",children:"Master Angular with +200 comprehensive interview questions/Answers"})]})]}),C.jsx(mO,{})]}),C.jsx(ON,{value:n,onChange:r}),C.jsx("div",{className:"mt-4",children:C.jsx(fO,{selectedCategory:c,onCategoryChange:p,questionCounts:d})})]})}),C.jsxs("main",{className:"container mx-auto px-4 py-8",children:[C.jsx(cO,{totalQuestions:e.length,completedQuestions:l.size,filteredQuestions:f.length}),h.length===0?C.jsx("div",{className:"text-center py-12",children:C.jsx("p",{className:"text-muted-foreground text-lg",children:n?"No questions found matching your search.":"Loading questions..."})}):C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"space-y-3 mb-6",children:h.map(b=>C.jsx(MN,{id:b.id,question:b.question,answer:b.answer,isCompleted:l.has(b.id),onToggleComplete:g},b.id))}),C.jsx(uO,{currentPage:o,totalPages:w,itemsPerPage:s,totalItems:f.length,onPageChange:i,onItemsPerPageChange:y})]})]}),C.jsx("footer",{className:"border-t border-border/50 bg-card/50 mt-12",children:C.jsx("div",{className:"container mx-auto px-4 py-6 text-center text-sm text-muted-foreground",children:C.jsxs("p",{children:["Built for Angular developers • ",e.length," questions • Track your progress"]})})})]})},gO=()=>{const e=Zw();return v.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),C.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:C.jsxs("div",{className:"text-center",children:[C.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),C.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),C.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})},yO=new WT,vO=()=>C.jsx(qT,{client:yO,children:C.jsx(IA,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:C.jsxs(vT,{children:[C.jsx(XS,{}),C.jsx(Nk,{}),C.jsxs(RA,{children:[" ",C.jsxs(TA,{children:[C.jsx(Qc,{path:"/",element:C.jsx(hO,{})}),C.jsx(Qc,{path:"*",element:C.jsx(gO,{})})]})]})]})})});hv(document.getElementById("root")).render(C.jsx(vO,{}));
