(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Zp={exports:{}},bl={},Qp={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),Xg=Symbol.for("react.portal"),qg=Symbol.for("react.fragment"),Yg=Symbol.for("react.strict_mode"),jg=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Zg=Symbol.for("react.forward_ref"),Qg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),e0=Symbol.for("react.lazy"),qf=Symbol.iterator;function t0(t){return t===null||typeof t!="object"?null:(t=qf&&t[qf]||t["@@iterator"],typeof t=="function"?t:null)}var Jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},em=Object.assign,tm={};function Vo(t,e,n){this.props=t,this.context=e,this.refs=tm,this.updater=n||Jp}Vo.prototype.isReactComponent={};Vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nm(){}nm.prototype=Vo.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=tm,this.updater=n||Jp}var zh=Oh.prototype=new nm;zh.constructor=Oh;em(zh,Vo.prototype);zh.isPureReactComponent=!0;var Yf=Array.isArray,im=Object.prototype.hasOwnProperty,kh={current:null},rm={key:!0,ref:!0,__self:!0,__source:!0};function om(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)im.call(e,i)&&!rm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ks,type:t,key:o,ref:s,props:r,_owner:kh.current}}function n0(t,e){return{$$typeof:ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ks}function i0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jf=/\/+/g;function Zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i0(""+t.key):e.toString(36)}function Fa(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ks:case Xg:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Zl(s,0):i,Yf(r)?(n="",t!=null&&(n=t.replace(jf,"$&/")+"/"),Fa(r,e,n,"",function(c){return c})):r!=null&&(Vh(r)&&(r=n0(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(jf,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Yf(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Zl(o,a);s+=Fa(o,e,n,l,r)}else if(l=t0(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Zl(o,a++),s+=Fa(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ks(t,e,n){if(t==null)return t;var i=[],r=0;return Fa(t,i,"","",function(o){return e.call(n,o,r++)}),i}function r0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Ba={transition:null},o0={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:kh};function sm(){throw Error("act(...) is not supported in production builds of React.")}pt.Children={map:Ks,forEach:function(t,e,n){Ks(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ks(t,function(){e++}),e},toArray:function(t){return Ks(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pt.Component=Vo;pt.Fragment=qg;pt.Profiler=jg;pt.PureComponent=Oh;pt.StrictMode=Yg;pt.Suspense=Qg;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;pt.act=sm;pt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=em({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)im.call(e,l)&&!rm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ks,type:t.type,key:r,ref:o,props:i,_owner:s}};pt.createContext=function(t){return t={$$typeof:Kg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$g,_context:t},t.Consumer=t};pt.createElement=om;pt.createFactory=function(t){var e=om.bind(null,t);return e.type=t,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(t){return{$$typeof:Zg,render:t}};pt.isValidElement=Vh;pt.lazy=function(t){return{$$typeof:e0,_payload:{_status:-1,_result:t},_init:r0}};pt.memo=function(t,e){return{$$typeof:Jg,type:t,compare:e===void 0?null:e}};pt.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};pt.unstable_act=sm;pt.useCallback=function(t,e){return pn.current.useCallback(t,e)};pt.useContext=function(t){return pn.current.useContext(t)};pt.useDebugValue=function(){};pt.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};pt.useEffect=function(t,e){return pn.current.useEffect(t,e)};pt.useId=function(){return pn.current.useId()};pt.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};pt.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};pt.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};pt.useMemo=function(t,e){return pn.current.useMemo(t,e)};pt.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};pt.useRef=function(t){return pn.current.useRef(t)};pt.useState=function(t){return pn.current.useState(t)};pt.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};pt.useTransition=function(){return pn.current.useTransition()};pt.version="18.3.1";Qp.exports=pt;var am=Qp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=am,a0=Symbol.for("react.element"),l0=Symbol.for("react.fragment"),u0=Object.prototype.hasOwnProperty,c0=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h0={key:!0,ref:!0,__self:!0,__source:!0};function lm(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)u0.call(e,i)&&!h0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:a0,type:t,key:o,ref:s,props:r,_owner:c0.current}}bl.Fragment=l0;bl.jsx=lm;bl.jsxs=lm;Zp.exports=bl;var rc=Zp.exports,um={exports:{}},In={},cm={exports:{}},hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,X){var H=C.length;C.push(X);e:for(;0<H;){var D=H-1>>>1,K=C[D];if(0<r(K,X))C[D]=X,C[H]=K,H=D;else break e}}function n(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var X=C[0],H=C.pop();if(H!==X){C[0]=H;e:for(var D=0,K=C.length,z=K>>>1;D<z;){var P=2*(D+1)-1,b=C[P],V=P+1,ee=C[V];if(0>r(b,H))V<K&&0>r(ee,b)?(C[D]=ee,C[V]=H,D=V):(C[D]=b,C[P]=H,D=P);else if(V<K&&0>r(ee,H))C[D]=ee,C[V]=H,D=V;else break e}}return X}function r(C,X){var H=C.sortIndex-X.sortIndex;return H!==0?H:C.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],h=1,u=null,f=3,p=!1,v=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(C){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=C)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function x(C){if(g=!1,y(C),!v)if(n(l)!==null)v=!0,Q(T);else{var X=n(c);X!==null&&O(x,X.startTime-C)}}function T(C,X){v=!1,g&&(g=!1,d(I),I=-1),p=!0;var H=f;try{for(y(X),u=n(l);u!==null&&(!(u.expirationTime>X)||C&&!M());){var D=u.callback;if(typeof D=="function"){u.callback=null,f=u.priorityLevel;var K=D(u.expirationTime<=X);X=t.unstable_now(),typeof K=="function"?u.callback=K:u===n(l)&&i(l),y(X)}else i(l);u=n(l)}if(u!==null)var z=!0;else{var P=n(c);P!==null&&O(x,P.startTime-X),z=!1}return z}finally{u=null,f=H,p=!1}}var R=!1,A=null,I=-1,W=5,S=-1;function M(){return!(t.unstable_now()-S<W)}function F(){if(A!==null){var C=t.unstable_now();S=C;var X=!0;try{X=A(!0,C)}finally{X?U():(R=!1,A=null)}}else R=!1}var U;if(typeof _=="function")U=function(){_(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=F,U=function(){$.postMessage(null)}}else U=function(){m(F,0)};function Q(C){A=C,R||(R=!0,U())}function O(C,X){I=m(function(){C(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Q(T))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var H=f;f=X;try{return C()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,X){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var H=f;f=C;try{return X()}finally{f=H}},t.unstable_scheduleCallback=function(C,X,H){var D=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?D+H:D):H=D,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=H+K,C={id:h++,callback:X,priorityLevel:C,startTime:H,expirationTime:K,sortIndex:-1},H>D?(C.sortIndex=H,e(c,C),n(l)===null&&C===n(c)&&(g?(d(I),I=-1):g=!0,O(x,H-D))):(C.sortIndex=K,e(l,C),v||p||(v=!0,Q(T))),C},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(C){var X=f;return function(){var H=f;f=X;try{return C.apply(this,arguments)}finally{f=H}}}})(hm);cm.exports=hm;var f0=cm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=am,Ln=f0;function Ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fm=new Set,Ms={};function Hr(t,e){Ro(t,e),Ro(t+"Capture",e)}function Ro(t,e){for(Ms[t]=e,t=0;t<e.length;t++)fm.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=Object.prototype.hasOwnProperty,p0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$f={},Kf={};function m0(t){return oc.call(Kf,t)?!0:oc.call($f,t)?!1:p0.test(t)?Kf[t]=!0:($f[t]=!0,!1)}function v0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g0(t,e,n,i){if(e===null||typeof e>"u"||v0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hh,Gh);nn[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hh,Gh);nn[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hh,Gh);nn[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g0(e,n,r,i)&&(n=null),i||r===null?m0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zs=Symbol.for("react.element"),oo=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),Zf=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,Ql;function ls(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Jl=!1;function eu(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ls(t):""}function _0(t){switch(t.tag){case 5:return ls(t.type);case 16:return ls("Lazy");case 13:return ls("Suspense");case 19:return ls("SuspenseList");case 0:case 2:case 15:return t=eu(t.type,!1),t;case 11:return t=eu(t.type.render,!1),t;case 1:return t=eu(t.type,!0),t;default:return""}}function uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case so:return"Fragment";case oo:return"Portal";case sc:return"Profiler";case Xh:return"StrictMode";case ac:return"Suspense";case lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pm:return(t.displayName||"Context")+".Consumer";case dm:return(t._context.displayName||"Context")+".Provider";case qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yh:return e=t.displayName||null,e!==null?e:uc(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return uc(t(e))}catch{}}return null}function y0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uc(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x0(t){var e=vm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qs(t){t._valueTracker||(t._valueTracker=x0(t))}function gm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cc(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _m(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function hc(t,e){_m(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&fc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fc(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var us=Array.isArray;function yo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function dc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ee(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ed(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ee(92));if(us(n)){if(1<n.length)throw Error(Ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function ym(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function td(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Js,Sm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Js.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Es(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S0=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(t){S0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ds[e]=ds[t]})});function Mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ds.hasOwnProperty(t)&&ds[t]?(""+e).trim():e+"px"}function Em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M0=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mc(t,e){if(e){if(M0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ee(62))}}function vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gc=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _c=null,xo=null,So=null;function nd(t){if(t=Gs(t)){if(typeof _c!="function")throw Error(Ee(280));var e=t.stateNode;e&&(e=Ul(e),_c(t.stateNode,t.type,e))}}function wm(t){xo?So?So.push(t):So=[t]:xo=t}function Tm(){if(xo){var t=xo,e=So;if(So=xo=null,nd(t),e)for(t=0;t<e.length;t++)nd(e[t])}}function Am(t,e){return t(e)}function Cm(){}var tu=!1;function Rm(t,e,n){if(tu)return t(e,n);tu=!0;try{return Am(t,e,n)}finally{tu=!1,(xo!==null||So!==null)&&(Cm(),Tm())}}function ws(t,e){var n=t.stateNode;if(n===null)return null;var i=Ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ee(231,e,typeof n));return n}var yc=!1;if(Ri)try{var $o={};Object.defineProperty($o,"passive",{get:function(){yc=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{yc=!1}function E0(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ps=!1,nl=null,il=!1,xc=null,w0={onError:function(t){ps=!0,nl=t}};function T0(t,e,n,i,r,o,s,a,l){ps=!1,nl=null,E0.apply(w0,arguments)}function A0(t,e,n,i,r,o,s,a,l){if(T0.apply(this,arguments),ps){if(ps){var c=nl;ps=!1,nl=null}else throw Error(Ee(198));il||(il=!0,xc=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function id(t){if(Gr(t)!==t)throw Error(Ee(188))}function C0(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(Ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return id(r),t;if(o===i)return id(r),e;o=o.sibling}throw Error(Ee(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(Ee(189))}}if(n.alternate!==i)throw Error(Ee(190))}if(n.tag!==3)throw Error(Ee(188));return n.stateNode.current===n?t:e}function bm(t){return t=C0(t),t!==null?Lm(t):null}function Lm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lm(t);if(e!==null)return e;t=t.sibling}return null}var Im=Ln.unstable_scheduleCallback,rd=Ln.unstable_cancelCallback,R0=Ln.unstable_shouldYield,P0=Ln.unstable_requestPaint,Vt=Ln.unstable_now,b0=Ln.unstable_getCurrentPriorityLevel,$h=Ln.unstable_ImmediatePriority,Nm=Ln.unstable_UserBlockingPriority,rl=Ln.unstable_NormalPriority,L0=Ln.unstable_LowPriority,Dm=Ln.unstable_IdlePriority,Ll=null,ui=null;function I0(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:U0,N0=Math.log,D0=Math.LN2;function U0(t){return t>>>=0,t===0?32:31-(N0(t)/D0|0)|0}var ea=64,ta=4194304;function cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=cs(a):(o&=s,o!==0&&(i=cs(o)))}else s=n&~r,s!==0?i=cs(s):o!==0&&(i=cs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function F0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ti(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=F0(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Sc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Um(){var t=ea;return ea<<=1,!(ea&4194240)&&(ea=64),t}function nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function O0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Et=0;function Fm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bm,Zh,Om,zm,km,Mc=!1,na=[],$i=null,Ki=null,Zi=null,Ts=new Map,As=new Map,Wi=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function od(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Ts.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(e.pointerId)}}function Ko(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Gs(e),e!==null&&Zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function k0(t,e,n,i,r){switch(e){case"focusin":return $i=Ko($i,t,e,n,i,r),!0;case"dragenter":return Ki=Ko(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=Ko(Zi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ts.set(o,Ko(Ts.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,As.set(o,Ko(As.get(o)||null,t,e,n,i,r)),!0}return!1}function Vm(t){var e=Rr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Pm(n),e!==null){t.blockedOn=e,km(t.priority,function(){Om(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ec(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gc=i,n.target.dispatchEvent(i),gc=null}else return e=Gs(n),e!==null&&Zh(e),t.blockedOn=n,!1;e.shift()}return!0}function sd(t,e,n){Oa(t)&&n.delete(e)}function V0(){Mc=!1,$i!==null&&Oa($i)&&($i=null),Ki!==null&&Oa(Ki)&&(Ki=null),Zi!==null&&Oa(Zi)&&(Zi=null),Ts.forEach(sd),As.forEach(sd)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,V0)))}function Cs(t){function e(r){return Zo(r,t)}if(0<na.length){Zo(na[0],t);for(var n=1;n<na.length;n++){var i=na[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&Zo($i,t),Ki!==null&&Zo(Ki,t),Zi!==null&&Zo(Zi,t),Ts.forEach(e),As.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)Vm(n),n.blockedOn===null&&Wi.shift()}var Mo=Ni.ReactCurrentBatchConfig,sl=!0;function H0(t,e,n,i){var r=Et,o=Mo.transition;Mo.transition=null;try{Et=1,Qh(t,e,n,i)}finally{Et=r,Mo.transition=o}}function G0(t,e,n,i){var r=Et,o=Mo.transition;Mo.transition=null;try{Et=4,Qh(t,e,n,i)}finally{Et=r,Mo.transition=o}}function Qh(t,e,n,i){if(sl){var r=Ec(t,e,n,i);if(r===null)fu(t,e,i,al,n),od(t,i);else if(k0(r,t,e,n,i))i.stopPropagation();else if(od(t,i),e&4&&-1<z0.indexOf(t)){for(;r!==null;){var o=Gs(r);if(o!==null&&Bm(o),o=Ec(t,e,n,i),o===null&&fu(t,e,i,al,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else fu(t,e,i,null,n)}}var al=null;function Ec(t,e,n,i){if(al=null,t=jh(i),t=Rr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function Hm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case $h:return 1;case Nm:return 4;case rl:case L0:return 16;case Dm:return 536870912;default:return 16}default:return 16}}var Yi=null,Jh=null,za=null;function Gm(){if(za)return za;var t,e=Jh,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return za=r.slice(t,1<i?1-i:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function ad(){return!1}function Nn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ia:ad,this.isPropagationStopped=ad,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Nn(Ho),Hs=Ft({},Ho,{view:0,detail:0}),W0=Nn(Hs),iu,ru,Qo,Il=Ft({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(iu=t.screenX-Qo.screenX,ru=t.screenY-Qo.screenY):ru=iu=0,Qo=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),ld=Nn(Il),X0=Ft({},Il,{dataTransfer:0}),q0=Nn(X0),Y0=Ft({},Hs,{relatedTarget:0}),ou=Nn(Y0),j0=Ft({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=Nn(j0),K0=Ft({},Ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z0=Nn(K0),Q0=Ft({},Ho,{data:0}),ud=Nn(Q0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=t_[t])?!!e[t]:!1}function tf(){return n_}var i_=Ft({},Hs,{key:function(t){if(t.key){var e=J0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r_=Nn(i_),o_=Ft({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=Nn(o_),s_=Ft({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),a_=Nn(s_),l_=Ft({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=Nn(l_),c_=Ft({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=Nn(c_),f_=[9,13,27,32],nf=Ri&&"CompositionEvent"in window,ms=null;Ri&&"documentMode"in document&&(ms=document.documentMode);var d_=Ri&&"TextEvent"in window&&!ms,Wm=Ri&&(!nf||ms&&8<ms&&11>=ms),hd=" ",fd=!1;function Xm(t,e){switch(t){case"keyup":return f_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ao=!1;function p_(t,e){switch(t){case"compositionend":return qm(e);case"keypress":return e.which!==32?null:(fd=!0,hd);case"textInput":return t=e.data,t===hd&&fd?null:t;default:return null}}function m_(t,e){if(ao)return t==="compositionend"||!nf&&Xm(t,e)?(t=Gm(),za=Jh=Yi=null,ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wm&&e.locale!=="ko"?null:e.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v_[t.type]:e==="textarea"}function Ym(t,e,n,i){wm(i),e=ll(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var vs=null,Rs=null;function g_(t){rv(t,0)}function Nl(t){var e=co(t);if(gm(e))return t}function __(t,e){if(t==="change")return e}var jm=!1;if(Ri){var su;if(Ri){var au="oninput"in document;if(!au){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),au=typeof pd.oninput=="function"}su=au}else su=!1;jm=su&&(!document.documentMode||9<document.documentMode)}function md(){vs&&(vs.detachEvent("onpropertychange",$m),Rs=vs=null)}function $m(t){if(t.propertyName==="value"&&Nl(Rs)){var e=[];Ym(e,Rs,t,jh(t)),Rm(g_,e)}}function y_(t,e,n){t==="focusin"?(md(),vs=e,Rs=n,vs.attachEvent("onpropertychange",$m)):t==="focusout"&&md()}function x_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(Rs)}function S_(t,e){if(t==="click")return Nl(e)}function M_(t,e){if(t==="input"||t==="change")return Nl(e)}function E_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:E_;function Ps(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!oc.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gd(t,e){var n=vd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vd(n)}}function Km(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Km(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zm(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function w_(t){var e=Zm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Km(n.ownerDocument.documentElement,n)){if(i!==null&&rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=gd(n,o);var s=gd(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T_=Ri&&"documentMode"in document&&11>=document.documentMode,lo=null,wc=null,gs=null,Tc=!1;function _d(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tc||lo==null||lo!==tl(i)||(i=lo,"selectionStart"in i&&rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gs&&Ps(gs,i)||(gs=i,i=ll(wc,"onSelect"),0<i.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=lo)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var uo={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},lu={},Qm={};Ri&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function Dl(t){if(lu[t])return lu[t];if(!uo[t])return t;var e=uo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qm)return lu[t]=e[n];return t}var Jm=Dl("animationend"),ev=Dl("animationiteration"),tv=Dl("animationstart"),nv=Dl("transitionend"),iv=new Map,yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){iv.set(t,e),Hr(e,[t])}for(var uu=0;uu<yd.length;uu++){var cu=yd[uu],A_=cu.toLowerCase(),C_=cu[0].toUpperCase()+cu.slice(1);ur(A_,"on"+C_)}ur(Jm,"onAnimationEnd");ur(ev,"onAnimationIteration");ur(tv,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(nv,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(hs));function xd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A0(i,e,void 0,t),t.currentTarget=null}function rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;xd(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;xd(r,a,c),o=l}}}if(il)throw t=xc,il=!1,xc=null,t}function Rt(t,e){var n=e[bc];n===void 0&&(n=e[bc]=new Set);var i=t+"__bubble";n.has(i)||(ov(e,t,2,!1),n.add(i))}function hu(t,e,n){var i=0;e&&(i|=4),ov(n,t,i,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function bs(t){if(!t[oa]){t[oa]=!0,fm.forEach(function(n){n!=="selectionchange"&&(R_.has(n)||hu(n,!1,t),hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,hu("selectionchange",!1,e))}}function ov(t,e,n,i){switch(Hm(e)){case 1:var r=H0;break;case 4:r=G0;break;default:r=Qh}n=r.bind(null,e,n,t),r=void 0,!yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Rr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Rm(function(){var c=o,h=jh(n),u=[];e:{var f=iv.get(t);if(f!==void 0){var p=ef,v=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":p=r_;break;case"focusin":v="focus",p=ou;break;case"focusout":v="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=a_;break;case Jm:case ev:case tv:p=$0;break;case nv:p=u_;break;case"scroll":p=W0;break;case"wheel":p=h_;break;case"copy":case"cut":case"paste":p=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=cd}var g=(e&4)!==0,m=!g&&t==="scroll",d=g?f!==null?f+"Capture":null:f;g=[];for(var _=c,y;_!==null;){y=_;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,d!==null&&(x=ws(_,d),x!=null&&g.push(Ls(_,x,y)))),m)break;_=_.return}0<g.length&&(f=new p(f,v,null,n,h),u.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==gc&&(v=n.relatedTarget||n.fromElement)&&(Rr(v)||v[Pi]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Rr(v):null,v!==null&&(m=Gr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(g=ld,x="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(g=cd,x="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?f:co(p),y=v==null?f:co(v),f=new g(x,_+"leave",p,n,h),f.target=m,f.relatedTarget=y,x=null,Rr(h)===c&&(g=new g(d,_+"enter",v,n,h),g.target=y,g.relatedTarget=m,x=g),m=x,p&&v)t:{for(g=p,d=v,_=0,y=g;y;y=Wr(y))_++;for(y=0,x=d;x;x=Wr(x))y++;for(;0<_-y;)g=Wr(g),_--;for(;0<y-_;)d=Wr(d),y--;for(;_--;){if(g===d||d!==null&&g===d.alternate)break t;g=Wr(g),d=Wr(d)}g=null}else g=null;p!==null&&Sd(u,f,p,g,!1),v!==null&&m!==null&&Sd(u,m,v,g,!0)}}e:{if(f=c?co(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=__;else if(dd(f))if(jm)T=M_;else{T=x_;var R=y_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=S_);if(T&&(T=T(t,c))){Ym(u,T,n,h);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&fc(f,"number",f.value)}switch(R=c?co(c):window,t){case"focusin":(dd(R)||R.contentEditable==="true")&&(lo=R,wc=c,gs=null);break;case"focusout":gs=wc=lo=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,_d(u,n,h);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":_d(u,n,h)}var A;if(nf)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ao?Xm(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Wm&&n.locale!=="ko"&&(ao||I!=="onCompositionStart"?I==="onCompositionEnd"&&ao&&(A=Gm()):(Yi=h,Jh="value"in Yi?Yi.value:Yi.textContent,ao=!0)),R=ll(c,I),0<R.length&&(I=new ud(I,t,null,n,h),u.push({event:I,listeners:R}),A?I.data=A:(A=qm(n),A!==null&&(I.data=A)))),(A=d_?p_(t,n):m_(t,n))&&(c=ll(c,"onBeforeInput"),0<c.length&&(h=new ud("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:c}),h.data=A))}rv(u,e)})}function Ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ws(t,n),o!=null&&i.unshift(Ls(t,o,r)),o=ws(t,e),o!=null&&i.push(Ls(t,o,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sd(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ws(n,o),l!=null&&s.unshift(Ls(n,l,a))):r||(l=ws(n,o),l!=null&&s.push(Ls(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var P_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function Md(t){return(typeof t=="string"?t:""+t).replace(P_,`
`).replace(b_,"")}function sa(t,e,n){if(e=Md(e),Md(t)!==e&&n)throw Error(Ee(425))}function ul(){}var Ac=null,Cc=null;function Rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,L_=typeof clearTimeout=="function"?clearTimeout:void 0,Ed=typeof Promise=="function"?Promise:void 0,I_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ed<"u"?function(t){return Ed.resolve(null).then(t).catch(N_)}:Pc;function N_(t){setTimeout(function(){throw t})}function du(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Cs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Cs(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Go=Math.random().toString(36).slice(2),li="__reactFiber$"+Go,Is="__reactProps$"+Go,Pi="__reactContainer$"+Go,bc="__reactEvents$"+Go,D_="__reactListeners$"+Go,U_="__reactHandles$"+Go;function Rr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wd(t);t!==null;){if(n=t[li])return n;t=wd(t)}return e}t=n,n=t.parentNode}return null}function Gs(t){return t=t[li]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ee(33))}function Ul(t){return t[Is]||null}var Lc=[],ho=-1;function cr(t){return{current:t}}function bt(t){0>ho||(t.current=Lc[ho],Lc[ho]=null,ho--)}function Ct(t,e){ho++,Lc[ho]=t.current,t.current=e}var sr={},cn=cr(sr),xn=cr(!1),Ur=sr;function Po(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function cl(){bt(xn),bt(cn)}function Td(t,e,n){if(cn.current!==sr)throw Error(Ee(168));Ct(cn,e),Ct(xn,n)}function sv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ee(108,y0(t)||"Unknown",r));return Ft({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Ur=cn.current,Ct(cn,t),Ct(xn,xn.current),!0}function Ad(t,e,n){var i=t.stateNode;if(!i)throw Error(Ee(169));n?(t=sv(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,bt(xn),bt(cn),Ct(cn,t)):bt(xn),Ct(xn,n)}var Si=null,Fl=!1,pu=!1;function av(t){Si===null?Si=[t]:Si.push(t)}function F_(t){Fl=!0,av(t)}function hr(){if(!pu&&Si!==null){pu=!0;var t=0,e=Et;try{var n=Si;for(Et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,Fl=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),Im($h,hr),r}finally{Et=e,pu=!1}}return null}var fo=[],po=0,fl=null,dl=0,Un=[],Fn=0,Fr=null,Ei=1,wi="";function Mr(t,e){fo[po++]=dl,fo[po++]=fl,fl=t,dl=e}function lv(t,e,n){Un[Fn++]=Ei,Un[Fn++]=wi,Un[Fn++]=Fr,Fr=t;var i=Ei;t=wi;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var o=32-ti(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ei=1<<32-ti(e)+r|n<<r|i,wi=o+t}else Ei=1<<o|n<<r|i,wi=t}function of(t){t.return!==null&&(Mr(t,1),lv(t,1,0))}function sf(t){for(;t===fl;)fl=fo[--po],fo[po]=null,dl=fo[--po],fo[po]=null;for(;t===Fr;)Fr=Un[--Fn],Un[Fn]=null,wi=Un[--Fn],Un[Fn]=null,Ei=Un[--Fn],Un[Fn]=null}var bn=null,Pn=null,Lt=!1,Kn=null;function uv(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Pn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Pn=null,!0):!1;default:return!1}}function Ic(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(Lt){var e=Pn;if(e){var n=e;if(!Cd(t,e)){if(Ic(t))throw Error(Ee(418));e=Qi(n.nextSibling);var i=bn;e&&Cd(t,e)?uv(i,n):(t.flags=t.flags&-4097|2,Lt=!1,bn=t)}}else{if(Ic(t))throw Error(Ee(418));t.flags=t.flags&-4097|2,Lt=!1,bn=t}}}function Rd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function aa(t){if(t!==bn)return!1;if(!Lt)return Rd(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rc(t.type,t.memoizedProps)),e&&(e=Pn)){if(Ic(t))throw cv(),Error(Ee(418));for(;e;)uv(t,e),e=Qi(e.nextSibling)}if(Rd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=bn?Qi(t.stateNode.nextSibling):null;return!0}function cv(){for(var t=Pn;t;)t=Qi(t.nextSibling)}function bo(){Pn=bn=null,Lt=!1}function af(t){Kn===null?Kn=[t]:Kn.push(t)}var B_=Ni.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ee(309));var i=n.stateNode}if(!i)throw Error(Ee(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(Ee(284));if(!n._owner)throw Error(Ee(290,t))}return t}function la(t,e){throw t=Object.prototype.toString.call(e),Error(Ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pd(t){var e=t._init;return e(t._payload)}function hv(t){function e(d,_){if(t){var y=d.deletions;y===null?(d.deletions=[_],d.flags|=16):y.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=nr(d,_),d.index=0,d.sibling=null,d}function o(d,_,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<_?(d.flags|=2,_):y):(d.flags|=2,_)):(d.flags|=1048576,_)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,y,x){return _===null||_.tag!==6?(_=Su(y,d.mode,x),_.return=d,_):(_=r(_,y),_.return=d,_)}function l(d,_,y,x){var T=y.type;return T===so?h(d,_,y.props.children,x,y.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Hi&&Pd(T)===_.type)?(x=r(_,y.props),x.ref=Jo(d,_,y),x.return=d,x):(x=Ya(y.type,y.key,y.props,null,d.mode,x),x.ref=Jo(d,_,y),x.return=d,x)}function c(d,_,y,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Mu(y,d.mode,x),_.return=d,_):(_=r(_,y.children||[]),_.return=d,_)}function h(d,_,y,x,T){return _===null||_.tag!==7?(_=Dr(y,d.mode,x,T),_.return=d,_):(_=r(_,y),_.return=d,_)}function u(d,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Su(""+_,d.mode,y),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zs:return y=Ya(_.type,_.key,_.props,null,d.mode,y),y.ref=Jo(d,null,_),y.return=d,y;case oo:return _=Mu(_,d.mode,y),_.return=d,_;case Hi:var x=_._init;return u(d,x(_._payload),y)}if(us(_)||jo(_))return _=Dr(_,d.mode,y,null),_.return=d,_;la(d,_)}return null}function f(d,_,y,x){var T=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(d,_,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zs:return y.key===T?l(d,_,y,x):null;case oo:return y.key===T?c(d,_,y,x):null;case Hi:return T=y._init,f(d,_,T(y._payload),x)}if(us(y)||jo(y))return T!==null?null:h(d,_,y,x,null);la(d,y)}return null}function p(d,_,y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(y)||null,a(_,d,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zs:return d=d.get(x.key===null?y:x.key)||null,l(_,d,x,T);case oo:return d=d.get(x.key===null?y:x.key)||null,c(_,d,x,T);case Hi:var R=x._init;return p(d,_,y,R(x._payload),T)}if(us(x)||jo(x))return d=d.get(y)||null,h(_,d,x,T,null);la(_,x)}return null}function v(d,_,y,x){for(var T=null,R=null,A=_,I=_=0,W=null;A!==null&&I<y.length;I++){A.index>I?(W=A,A=null):W=A.sibling;var S=f(d,A,y[I],x);if(S===null){A===null&&(A=W);break}t&&A&&S.alternate===null&&e(d,A),_=o(S,_,I),R===null?T=S:R.sibling=S,R=S,A=W}if(I===y.length)return n(d,A),Lt&&Mr(d,I),T;if(A===null){for(;I<y.length;I++)A=u(d,y[I],x),A!==null&&(_=o(A,_,I),R===null?T=A:R.sibling=A,R=A);return Lt&&Mr(d,I),T}for(A=i(d,A);I<y.length;I++)W=p(A,d,I,y[I],x),W!==null&&(t&&W.alternate!==null&&A.delete(W.key===null?I:W.key),_=o(W,_,I),R===null?T=W:R.sibling=W,R=W);return t&&A.forEach(function(M){return e(d,M)}),Lt&&Mr(d,I),T}function g(d,_,y,x){var T=jo(y);if(typeof T!="function")throw Error(Ee(150));if(y=T.call(y),y==null)throw Error(Ee(151));for(var R=T=null,A=_,I=_=0,W=null,S=y.next();A!==null&&!S.done;I++,S=y.next()){A.index>I?(W=A,A=null):W=A.sibling;var M=f(d,A,S.value,x);if(M===null){A===null&&(A=W);break}t&&A&&M.alternate===null&&e(d,A),_=o(M,_,I),R===null?T=M:R.sibling=M,R=M,A=W}if(S.done)return n(d,A),Lt&&Mr(d,I),T;if(A===null){for(;!S.done;I++,S=y.next())S=u(d,S.value,x),S!==null&&(_=o(S,_,I),R===null?T=S:R.sibling=S,R=S);return Lt&&Mr(d,I),T}for(A=i(d,A);!S.done;I++,S=y.next())S=p(A,d,I,S.value,x),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?I:S.key),_=o(S,_,I),R===null?T=S:R.sibling=S,R=S);return t&&A.forEach(function(F){return e(d,F)}),Lt&&Mr(d,I),T}function m(d,_,y,x){if(typeof y=="object"&&y!==null&&y.type===so&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Zs:e:{for(var T=y.key,R=_;R!==null;){if(R.key===T){if(T=y.type,T===so){if(R.tag===7){n(d,R.sibling),_=r(R,y.props.children),_.return=d,d=_;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Hi&&Pd(T)===R.type){n(d,R.sibling),_=r(R,y.props),_.ref=Jo(d,R,y),_.return=d,d=_;break e}n(d,R);break}else e(d,R);R=R.sibling}y.type===so?(_=Dr(y.props.children,d.mode,x,y.key),_.return=d,d=_):(x=Ya(y.type,y.key,y.props,null,d.mode,x),x.ref=Jo(d,_,y),x.return=d,d=x)}return s(d);case oo:e:{for(R=y.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(d,_.sibling),_=r(_,y.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Mu(y,d.mode,x),_.return=d,d=_}return s(d);case Hi:return R=y._init,m(d,_,R(y._payload),x)}if(us(y))return v(d,_,y,x);if(jo(y))return g(d,_,y,x);la(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,y),_.return=d,d=_):(n(d,_),_=Su(y,d.mode,x),_.return=d,d=_),s(d)):n(d,_)}return m}var Lo=hv(!0),fv=hv(!1),pl=cr(null),ml=null,mo=null,lf=null;function uf(){lf=mo=ml=null}function cf(t){var e=pl.current;bt(pl),t._currentValue=e}function Dc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Eo(t,e){ml=t,lf=mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(lf!==t)if(t={context:t,memoizedValue:e,next:null},mo===null){if(ml===null)throw Error(Ee(308));mo=t,ml.dependencies={lanes:0,firstContext:t}}else mo=mo.next=t;return e}var Pr=null;function hf(t){Pr===null?Pr=[t]:Pr.push(t)}function dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,gt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}function bd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,i){var r=t.updateQueue;Gi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(o!==null){var u=r.baseState;s=0,h=c=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(f=e,p=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){u=v.call(p,u,f);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,f=typeof v=="function"?v.call(p,u,f):v,f==null)break e;u=Ft({},u,f);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=u):h=h.next=p,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Or|=s,t.lanes=s,t.memoizedState=u}}function Ld(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ee(191,r));r.call(i)}}}var Ws={},ci=cr(Ws),Ns=cr(Ws),Ds=cr(Ws);function br(t){if(t===Ws)throw Error(Ee(174));return t}function df(t,e){switch(Ct(Ds,e),Ct(Ns,t),Ct(ci,Ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pc(e,t)}bt(ci),Ct(ci,e)}function Io(){bt(ci),bt(Ns),bt(Ds)}function mv(t){br(Ds.current);var e=br(ci.current),n=pc(e,t.type);e!==n&&(Ct(Ns,t),Ct(ci,n))}function pf(t){Ns.current===t&&(bt(ci),bt(Ns))}var Dt=cr(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mu=[];function mf(){for(var t=0;t<mu.length;t++)mu[t]._workInProgressVersionPrimary=null;mu.length=0}var Ha=Ni.ReactCurrentDispatcher,vu=Ni.ReactCurrentBatchConfig,Br=0,Ut=null,qt=null,Qt=null,_l=!1,_s=!1,Us=0,O_=0;function rn(){throw Error(Ee(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function gf(t,e,n,i,r,o){if(Br=o,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ha.current=t===null||t.memoizedState===null?H_:G_,t=n(i,r),_s){o=0;do{if(_s=!1,Us=0,25<=o)throw Error(Ee(301));o+=1,Qt=qt=null,e.updateQueue=null,Ha.current=W_,t=n(i,r)}while(_s)}if(Ha.current=yl,e=qt!==null&&qt.next!==null,Br=0,Qt=qt=Ut=null,_l=!1,e)throw Error(Ee(300));return t}function _f(){var t=Us!==0;return Us=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Ut.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Hn(){if(qt===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var e=Qt===null?Ut.memoizedState:Qt.next;if(e!==null)Qt=e,qt=t;else{if(t===null)throw Error(Ee(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Qt===null?Ut.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function Fs(t,e){return typeof e=="function"?e(t):e}function gu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=qt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var h=c.lane;if((Br&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,s=i):l=l.next=u,Ut.lanes|=h,Or|=h}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,ii(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,Ut.lanes|=o,Or|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _u(t){var e=Hn(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ii(o,e.memoizedState)||(yn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function vv(){}function gv(t,e){var n=Ut,i=Hn(),r=e(),o=!ii(i.memoizedState,r);if(o&&(i.memoizedState=r,yn=!0),i=i.queue,yf(xv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,Bs(9,yv.bind(null,n,i,r,e),void 0,null),Jt===null)throw Error(Ee(349));Br&30||_v(n,e,r)}return r}function _v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,i){e.value=n,e.getSnapshot=i,Sv(e)&&Mv(t)}function xv(t,e,n){return n(function(){Sv(e)&&Mv(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function Mv(t){var e=bi(t,1);e!==null&&ni(e,t,1,-1)}function Id(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:t},e.queue=t,t=t.dispatch=V_.bind(null,Ut,t),[e.memoizedState,t]}function Bs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ev(){return Hn().memoizedState}function Ga(t,e,n,i){var r=oi();Ut.flags|=t,r.memoizedState=Bs(1|e,n,void 0,i===void 0?null:i)}function Bl(t,e,n,i){var r=Hn();i=i===void 0?null:i;var o=void 0;if(qt!==null){var s=qt.memoizedState;if(o=s.destroy,i!==null&&vf(i,s.deps)){r.memoizedState=Bs(e,n,o,i);return}}Ut.flags|=t,r.memoizedState=Bs(1|e,n,o,i)}function Nd(t,e){return Ga(8390656,8,t,e)}function yf(t,e){return Bl(2048,8,t,e)}function wv(t,e){return Bl(4,2,t,e)}function Tv(t,e){return Bl(4,4,t,e)}function Av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,Av.bind(null,e,t),n)}function xf(){}function Rv(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Pv(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function bv(t,e,n){return Br&21?(ii(n,e)||(n=Um(),Ut.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function z_(t,e){var n=Et;Et=n!==0&&4>n?n:4,t(!0);var i=vu.transition;vu.transition={};try{t(!1),e()}finally{Et=n,vu.transition=i}}function Lv(){return Hn().memoizedState}function k_(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Iv(t))Nv(e,n);else if(n=dv(t,e,n,i),n!==null){var r=dn();ni(n,t,i,r),Dv(n,e,i)}}function V_(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iv(t))Nv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,s)){var l=e.interleaved;l===null?(r.next=r,hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=dv(t,e,r,i),n!==null&&(r=dn(),ni(n,t,i,r),Dv(n,e,i))}}function Iv(t){var e=t.alternate;return t===Ut||e!==null&&e===Ut}function Nv(t,e){_s=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}var yl={readContext:Vn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},H_={readContext:Vn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Nd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ga(4194308,4,Av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ga(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ga(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=k_.bind(null,Ut,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:Id,useDebugValue:xf,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Id(!1),e=t[0];return t=z_.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ut,r=oi();if(Lt){if(n===void 0)throw Error(Ee(407));n=n()}else{if(n=e(),Jt===null)throw Error(Ee(349));Br&30||_v(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Nd(xv.bind(null,i,o,t),[t]),i.flags|=2048,Bs(9,yv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=oi(),e=Jt.identifierPrefix;if(Lt){var n=wi,i=Ei;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G_={readContext:Vn,useCallback:Rv,useContext:Vn,useEffect:yf,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Tv,useMemo:Pv,useReducer:gu,useRef:Ev,useState:function(){return gu(Fs)},useDebugValue:xf,useDeferredValue:function(t){var e=Hn();return bv(e,qt.memoizedState,t)},useTransition:function(){var t=gu(Fs)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:gv,useId:Lv,unstable_isNewReconciler:!1},W_={readContext:Vn,useCallback:Rv,useContext:Vn,useEffect:yf,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Tv,useMemo:Pv,useReducer:_u,useRef:Ev,useState:function(){return _u(Fs)},useDebugValue:xf,useDeferredValue:function(t){var e=Hn();return qt===null?e.memoizedState=t:bv(e,qt.memoizedState,t)},useTransition:function(){var t=_u(Fs)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:gv,useId:Lv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=tr(t),o=Ci(i,r);o.payload=e,n!=null&&(o.callback=n),e=Ji(t,o,r),e!==null&&(ni(e,t,r,i),Va(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=tr(t),o=Ci(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ji(t,o,r),e!==null&&(ni(e,t,r,i),Va(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=tr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(ni(e,t,i,n),Va(e,t,i))}};function Dd(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ps(n,i)||!Ps(r,o):!0}function Uv(t,e,n){var i=!1,r=sr,o=e.contextType;return typeof o=="object"&&o!==null?o=Vn(o):(r=Sn(e)?Ur:cn.current,i=e.contextTypes,o=(i=i!=null)?Po(t,r):sr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Ud(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Fc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ff(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Vn(o):(o=Sn(e)?Ur:cn.current,r.context=Po(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Uc(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function No(t,e){try{var n="",i=e;do n+=_0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function Fv(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,Yc=i),Bc(t,e)},n}function Bv(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bc(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bc(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Fd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new X_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oy.bind(null,t,e,n),e.then(t,t))}function Bd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Od(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var q_=Ni.ReactCurrentOwner,yn=!1;function fn(t,e,n,i){e.child=t===null?fv(e,null,n,i):Lo(e,t.child,n,i)}function zd(t,e,n,i,r){n=n.render;var o=e.ref;return Eo(e,r),i=gf(t,e,n,i,o,r),n=_f(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(Lt&&n&&of(e),e.flags|=1,fn(t,e,i,r),e.child)}function kd(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Rf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ov(t,e,o,i,r)):(t=Ya(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ps,n(s,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=nr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ps(o,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return Oc(t,e,n,i,r)}function zv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(go,Rn),Rn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ct(go,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ct(go,Rn),Rn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ct(go,Rn),Rn|=i;return fn(t,e,r,n),e.child}function kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Oc(t,e,n,i,r){var o=Sn(n)?Ur:cn.current;return o=Po(e,o),Eo(e,r),n=gf(t,e,n,i,o,r),i=_f(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(Lt&&i&&of(e),e.flags|=1,fn(t,e,n,r),e.child)}function Vd(t,e,n,i,r){if(Sn(n)){var o=!0;hl(e)}else o=!1;if(Eo(e,r),e.stateNode===null)Wa(t,e),Uv(e,n,i),Fc(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=Sn(n)?Ur:cn.current,c=Po(e,c));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ud(e,s,i,c),Gi=!1;var f=e.memoizedState;s.state=f,vl(e,i,s,r),l=e.memoizedState,a!==i||f!==l||xn.current||Gi?(typeof h=="function"&&(Uc(e,n,h,i),l=e.memoizedState),(a=Gi||Dd(e,n,a,i,f,l,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,pv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),s.props=c,u=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=Sn(n)?Ur:cn.current,l=Po(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==u||f!==l)&&Ud(e,s,i,l),Gi=!1,f=e.memoizedState,s.state=f,vl(e,i,s,r);var v=e.memoizedState;a!==u||f!==v||xn.current||Gi?(typeof p=="function"&&(Uc(e,n,p,i),v=e.memoizedState),(c=Gi||Dd(e,n,c,i,f,v,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return zc(t,e,n,i,o,r)}function zc(t,e,n,i,r,o){kv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Ad(e,n,!1),Li(t,e,o);i=e.stateNode,q_.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Lo(e,t.child,null,o),e.child=Lo(e,null,a,o)):fn(t,e,a,o),e.memoizedState=i.state,r&&Ad(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?Td(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Td(t,e.context,!1),df(t,e.containerInfo)}function Hd(t,e,n,i,r){return bo(),af(r),e.flags|=256,fn(t,e,n,i),e.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var i=e.pendingProps,r=Dt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ct(Dt,r&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Vl(s,i,0,null),t=Dr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Vc(n),e.memoizedState=kc,t):Sf(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Y_(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=nr(a,o):(o=Dr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Vc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=kc,i}return o=t.child,t=o.sibling,i=nr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sf(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ua(t,e,n,i){return i!==null&&af(i),Lo(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y_(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=yu(Error(Ee(422))),ua(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),o=Dr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Lo(e,t.child,null,s),e.child.memoizedState=Vc(s),e.memoizedState=kc,o);if(!(e.mode&1))return ua(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Ee(419)),i=yu(o,i,void 0),ua(t,e,s,i)}if(a=(s&t.childLanes)!==0,yn||a){if(i=Jt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,bi(t,r),ni(i,t,r,-1))}return Cf(),i=yu(Error(Ee(421))),ua(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sy.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Pn=Qi(r.nextSibling),bn=e,Lt=!0,Kn=null,t!==null&&(Un[Fn++]=Ei,Un[Fn++]=wi,Un[Fn++]=Fr,Ei=t.id,wi=t.overflow,Fr=e),e=Sf(e,i.children),e.flags|=4096,e)}function Gd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Dc(t.return,e,n)}function xu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Gv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(fn(t,e,i.children,n),i=Dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gd(t,n,e);else if(t.tag===19)Gd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ct(Dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xu(e,!0,n,null,o);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ee(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function j_(t,e,n){switch(e.tag){case 3:Vv(e),bo();break;case 5:mv(e);break;case 1:Sn(e.type)&&hl(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(Dt,Dt.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(Ct(Dt,Dt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);Ct(Dt,Dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(Dt,Dt.current),i)break;return null;case 22:case 23:return e.lanes=0,zv(t,e,n)}return Li(t,e,n)}var Wv,Hc,Xv,qv;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hc=function(){};Xv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(ci.current);var o=null;switch(n){case"input":r=cc(t,r),i=cc(t,i),o=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),o=[];break;case"textarea":r=dc(t,r),i=dc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}mc(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ms.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Rt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};qv=function(t,e,n,i){n!==i&&(e.flags|=4)};function es(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $_(t,e,n){var i=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Sn(e.type)&&cl(),on(e),null;case 3:return i=e.stateNode,Io(),bt(xn),bt(cn),mf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Kc(Kn),Kn=null))),Hc(t,e),on(e),null;case 5:pf(e);var r=br(Ds.current);if(n=e.type,t!==null&&e.stateNode!=null)Xv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ee(166));return on(e),null}if(t=br(ci.current),aa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[li]=e,i[Is]=o,t=(e.mode&1)!==0,n){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<hs.length;r++)Rt(hs[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":Qf(i,o),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Rt("invalid",i);break;case"textarea":ed(i,o),Rt("invalid",i)}mc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&sa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&sa(i.textContent,a,t),r=["children",""+a]):Ms.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Rt("scroll",i)}switch(n){case"input":Qs(i),Jf(i,o,!0);break;case"textarea":Qs(i),td(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[li]=e,t[Is]=i,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(s=vc(n,i),n){case"dialog":Rt("cancel",t),Rt("close",t),r=i;break;case"iframe":case"object":case"embed":Rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<hs.length;r++)Rt(hs[r],t);r=i;break;case"source":Rt("error",t),r=i;break;case"img":case"image":case"link":Rt("error",t),Rt("load",t),r=i;break;case"details":Rt("toggle",t),r=i;break;case"input":Qf(t,i),r=cc(t,i),Rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),Rt("invalid",t);break;case"textarea":ed(t,i),r=dc(t,i),Rt("invalid",t);break;default:r=i}mc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Em(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sm(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Es(t,l):typeof l=="number"&&Es(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ms.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Rt("scroll",t):l!=null&&Wh(t,o,l,s))}switch(n){case"input":Qs(t),Jf(t,i,!1);break;case"textarea":Qs(t),td(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?yo(t,!!i.multiple,o,!1):i.defaultValue!=null&&yo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)qv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ee(166));if(n=br(Ds.current),br(ci.current),aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(o=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:sa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return on(e),null;case 13:if(bt(Dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&Pn!==null&&e.mode&1&&!(e.flags&128))cv(),bo(),e.flags|=98560,o=!1;else if(o=aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Ee(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Ee(317));o[li]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),o=!1}else Kn!==null&&(Kc(Kn),Kn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Dt.current&1?Yt===0&&(Yt=3):Cf())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return Io(),Hc(t,e),t===null&&bs(e.stateNode.containerInfo),on(e),null;case 10:return cf(e.type._context),on(e),null;case 17:return Sn(e.type)&&cl(),on(e),null;case 19:if(bt(Dt),o=e.memoizedState,o===null)return on(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)es(o,!1);else{if(Yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=gl(t),s!==null){for(e.flags|=128,es(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ct(Dt,Dt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Vt()>Do&&(e.flags|=128,i=!0,es(o,!1),e.lanes=4194304)}else{if(!i)if(t=gl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),es(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Lt)return on(e),null}else 2*Vt()-o.renderingStartTime>Do&&n!==1073741824&&(e.flags|=128,i=!0,es(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Vt(),e.sibling=null,n=Dt.current,Ct(Dt,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return Af(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(Ee(156,e.tag))}function K_(t,e){switch(sf(e),e.tag){case 1:return Sn(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Io(),bt(xn),bt(cn),mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pf(e),null;case 13:if(bt(Dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ee(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(Dt),null;case 4:return Io(),null;case 10:return cf(e.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var ca=!1,ln=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function vo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Bt(t,e,i)}else n.current=null}function Gc(t,e,n){try{n()}catch(i){Bt(t,e,i)}}var Wd=!1;function Q_(t,e){if(Ac=sl,t=Zm(),rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,h=0,u=t,f=null;t:for(;;){for(var p;u!==n||r!==0&&u.nodeType!==3||(a=s+r),u!==o||i!==0&&u.nodeType!==3||(l=s+i),u.nodeType===3&&(s+=u.nodeValue.length),(p=u.firstChild)!==null;)f=u,u=p;for(;;){if(u===t)break t;if(f===n&&++c===r&&(a=s),f===o&&++h===i&&(l=s),(p=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cc={focusedElem:t,selectionRange:n},sl=!1,Ye=e;Ye!==null;)if(e=Ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ye=t;else for(;Ye!==null;){e=Ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,m=v.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?g:jn(e.type,g),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ee(163))}}catch(x){Bt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Ye=t;break}Ye=e.return}return v=Wd,Wd=!1,v}function ys(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Gc(e,n,o)}r=r.next}while(r!==i)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yv(t){var e=t.alternate;e!==null&&(t.alternate=null,Yv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Is],delete e[bc],delete e[D_],delete e[U_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function Xd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(Xc(t,e,n),t=t.sibling;t!==null;)Xc(t,e,n),t=t.sibling}function qc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}var en=null,$n=!1;function Di(t,e,n){for(n=n.child;n!==null;)$v(t,e,n),n=n.sibling}function $v(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:ln||vo(n,e);case 6:var i=en,r=$n;en=null,Di(t,e,n),en=i,$n=r,en!==null&&($n?(t=en,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&($n?(t=en,n=n.stateNode,t.nodeType===8?du(t.parentNode,n):t.nodeType===1&&du(t,n),Cs(t)):du(en,n.stateNode));break;case 4:i=en,r=$n,en=n.stateNode.containerInfo,$n=!0,Di(t,e,n),en=i,$n=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Gc(n,e,s),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!ln&&(vo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Bt(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,Di(t,e,n),ln=i):Di(t,e,n);break;default:Di(t,e,n)}}function qd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Z_),e.forEach(function(i){var r=ay.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,$n=!1;break e;case 3:en=a.stateNode.containerInfo,$n=!0;break e;case 4:en=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(en===null)throw Error(Ee(160));$v(o,s,r),en=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kv(e,t),e=e.sibling}function Kv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ri(t),i&4){try{ys(3,t,t.return),zl(3,t)}catch(g){Bt(t,t.return,g)}try{ys(5,t,t.return)}catch(g){Bt(t,t.return,g)}}break;case 1:Wn(e,t),ri(t),i&512&&n!==null&&vo(n,n.return);break;case 5:if(Wn(e,t),ri(t),i&512&&n!==null&&vo(n,n.return),t.flags&32){var r=t.stateNode;try{Es(r,"")}catch(g){Bt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_m(r,o),vc(a,s);var c=vc(a,o);for(s=0;s<l.length;s+=2){var h=l[s],u=l[s+1];h==="style"?Em(r,u):h==="dangerouslySetInnerHTML"?Sm(r,u):h==="children"?Es(r,u):Wh(r,h,u,c)}switch(a){case"input":hc(r,o);break;case"textarea":ym(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?yo(r,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?yo(r,!!o.multiple,o.defaultValue,!0):yo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Is]=o}catch(g){Bt(t,t.return,g)}}break;case 6:if(Wn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(Ee(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(g){Bt(t,t.return,g)}}break;case 3:if(Wn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Cs(e.containerInfo)}catch(g){Bt(t,t.return,g)}break;case 4:Wn(e,t),ri(t);break;case 13:Wn(e,t),ri(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(wf=Vt())),i&4&&qd(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||h,Wn(e,t),ln=c):Wn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ye=t,h=t.child;h!==null;){for(u=Ye=h;Ye!==null;){switch(f=Ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:ys(4,f,f.return);break;case 1:vo(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Bt(i,n,g)}}break;case 5:vo(f,f.return);break;case 22:if(f.memoizedState!==null){jd(u);continue}}p!==null?(p.return=f,Ye=p):jd(u)}h=h.sibling}e:for(h=null,u=t;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=u.stateNode,l=u.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mm("display",s))}catch(g){Bt(t,t.return,g)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(g){Bt(t,t.return,g)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Wn(e,t),ri(t),i&4&&qd(t);break;case 21:break;default:Wn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jv(n)){var i=n;break e}n=n.return}throw Error(Ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Es(r,""),i.flags&=-33);var o=Xd(t);qc(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Xd(t);Xc(t,a,s);break;default:throw Error(Ee(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function J_(t,e,n){Ye=t,Zv(t)}function Zv(t,e,n){for(var i=(t.mode&1)!==0;Ye!==null;){var r=Ye,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ca;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||ln;a=ca;var c=ln;if(ca=s,(ln=l)&&!c)for(Ye=r;Ye!==null;)s=Ye,l=s.child,s.tag===22&&s.memoizedState!==null?$d(r):l!==null?(l.return=s,Ye=l):$d(r);for(;o!==null;)Ye=o,Zv(o),o=o.sibling;Ye=r,ca=a,ln=c}Yd(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ye=o):Yd(t)}}function Yd(t){for(;Ye!==null;){var e=Ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ld(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ld(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&Cs(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ee(163))}ln||e.flags&512&&Wc(e)}catch(f){Bt(e,e.return,f)}}if(e===t){Ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ye=n;break}Ye=e.return}}function jd(t){for(;Ye!==null;){var e=Ye;if(e===t){Ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ye=n;break}Ye=e.return}}function $d(t){for(;Ye!==null;){var e=Ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(l){Bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Bt(e,r,l)}}var o=e.return;try{Wc(e)}catch(l){Bt(e,o,l)}break;case 5:var s=e.return;try{Wc(e)}catch(l){Bt(e,s,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){Ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ye=a;break}Ye=e.return}}var ey=Math.ceil,xl=Ni.ReactCurrentDispatcher,Mf=Ni.ReactCurrentOwner,kn=Ni.ReactCurrentBatchConfig,gt=0,Jt=null,Wt=null,tn=0,Rn=0,go=cr(0),Yt=0,Os=null,Or=0,kl=0,Ef=0,xs=null,gn=null,wf=0,Do=1/0,xi=null,Sl=!1,Yc=null,er=null,ha=!1,ji=null,Ml=0,Ss=0,jc=null,Xa=-1,qa=0;function dn(){return gt&6?Vt():Xa!==-1?Xa:Xa=Vt()}function tr(t){return t.mode&1?gt&2&&tn!==0?tn&-tn:B_.transition!==null?(qa===0&&(qa=Um()),qa):(t=Et,t!==0||(t=window.event,t=t===void 0?16:Hm(t.type)),t):1}function ni(t,e,n,i){if(50<Ss)throw Ss=0,jc=null,Error(Ee(185));Vs(t,n,i),(!(gt&2)||t!==Jt)&&(t===Jt&&(!(gt&2)&&(kl|=n),Yt===4&&Xi(t,tn)),Mn(t,i),n===1&&gt===0&&!(e.mode&1)&&(Do=Vt()+500,Fl&&hr()))}function Mn(t,e){var n=t.callbackNode;B0(t,e);var i=ol(t,t===Jt?tn:0);if(i===0)n!==null&&rd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&rd(n),e===1)t.tag===0?F_(Kd.bind(null,t)):av(Kd.bind(null,t)),I_(function(){!(gt&6)&&hr()}),n=null;else{switch(Fm(i)){case 1:n=$h;break;case 4:n=Nm;break;case 16:n=rl;break;case 536870912:n=Dm;break;default:n=rl}n=og(n,Qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qv(t,e){if(Xa=-1,qa=0,gt&6)throw Error(Ee(327));var n=t.callbackNode;if(wo()&&t.callbackNode!==n)return null;var i=ol(t,t===Jt?tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=El(t,i);else{e=i;var r=gt;gt|=2;var o=eg();(Jt!==t||tn!==e)&&(xi=null,Do=Vt()+500,Nr(t,e));do try{iy();break}catch(a){Jv(t,a)}while(!0);uf(),xl.current=o,gt=r,Wt!==null?e=0:(Jt=null,tn=0,e=Yt)}if(e!==0){if(e===2&&(r=Sc(t),r!==0&&(i=r,e=$c(t,r))),e===1)throw n=Os,Nr(t,0),Xi(t,i),Mn(t,Vt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ty(r)&&(e=El(t,i),e===2&&(o=Sc(t),o!==0&&(i=o,e=$c(t,o))),e===1))throw n=Os,Nr(t,0),Xi(t,i),Mn(t,Vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ee(345));case 2:Er(t,gn,xi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=wf+500-Vt(),10<e)){if(ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pc(Er.bind(null,t,gn,xi),e);break}Er(t,gn,xi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ti(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ey(i/1960))-i,10<i){t.timeoutHandle=Pc(Er.bind(null,t,gn,xi),i);break}Er(t,gn,xi);break;case 5:Er(t,gn,xi);break;default:throw Error(Ee(329))}}}return Mn(t,Vt()),t.callbackNode===n?Qv.bind(null,t):null}function $c(t,e){var n=xs;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=El(t,e),t!==2&&(e=gn,gn=n,e!==null&&Kc(e)),t}function Kc(t){gn===null?gn=t:gn.push.apply(gn,t)}function ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ii(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Ef,e&=~kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function Kd(t){if(gt&6)throw Error(Ee(327));wo();var e=ol(t,0);if(!(e&1))return Mn(t,Vt()),null;var n=El(t,e);if(t.tag!==0&&n===2){var i=Sc(t);i!==0&&(e=i,n=$c(t,i))}if(n===1)throw n=Os,Nr(t,0),Xi(t,e),Mn(t,Vt()),n;if(n===6)throw Error(Ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,gn,xi),Mn(t,Vt()),null}function Tf(t,e){var n=gt;gt|=1;try{return t(e)}finally{gt=n,gt===0&&(Do=Vt()+500,Fl&&hr())}}function zr(t){ji!==null&&ji.tag===0&&!(gt&6)&&wo();var e=gt;gt|=1;var n=kn.transition,i=Et;try{if(kn.transition=null,Et=1,t)return t()}finally{Et=i,kn.transition=n,gt=e,!(gt&6)&&hr()}}function Af(){Rn=go.current,bt(go)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L_(n)),Wt!==null)for(n=Wt.return;n!==null;){var i=n;switch(sf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cl();break;case 3:Io(),bt(xn),bt(cn),mf();break;case 5:pf(i);break;case 4:Io();break;case 13:bt(Dt);break;case 19:bt(Dt);break;case 10:cf(i.type._context);break;case 22:case 23:Af()}n=n.return}if(Jt=t,Wt=t=nr(t.current,null),tn=Rn=e,Yt=0,Os=null,Ef=kl=Or=0,gn=xs=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Pr=null}return t}function Jv(t,e){do{var n=Wt;try{if(uf(),Ha.current=yl,_l){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Br=0,Qt=qt=Ut=null,_s=!1,Us=0,Mf.current=null,n===null||n.return===null){Yt=1,Os=e,Wt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Bd(s);if(p!==null){p.flags&=-257,Od(p,s,a,o,e),p.mode&1&&Fd(o,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){Fd(o,c,e),Cf();break e}l=Error(Ee(426))}}else if(Lt&&a.mode&1){var m=Bd(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Od(m,s,a,o,e),af(No(l,a));break e}}o=l=No(l,a),Yt!==4&&(Yt=2),xs===null?xs=[o]:xs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Fv(o,l,e);bd(o,d);break e;case 1:a=l;var _=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(er===null||!er.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Bv(o,a,e);bd(o,x);break e}}o=o.return}while(o!==null)}ng(n)}catch(T){e=T,Wt===n&&n!==null&&(Wt=n=n.return);continue}break}while(!0)}function eg(){var t=xl.current;return xl.current=yl,t===null?yl:t}function Cf(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Jt===null||!(Or&268435455)&&!(kl&268435455)||Xi(Jt,tn)}function El(t,e){var n=gt;gt|=2;var i=eg();(Jt!==t||tn!==e)&&(xi=null,Nr(t,e));do try{ny();break}catch(r){Jv(t,r)}while(!0);if(uf(),gt=n,xl.current=i,Wt!==null)throw Error(Ee(261));return Jt=null,tn=0,Yt}function ny(){for(;Wt!==null;)tg(Wt)}function iy(){for(;Wt!==null&&!R0();)tg(Wt)}function tg(t){var e=rg(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?ng(t):Wt=e,Mf.current=null}function ng(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=K_(n,e),n!==null){n.flags&=32767,Wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Wt=null;return}}else if(n=$_(n,e,Rn),n!==null){Wt=n;return}if(e=e.sibling,e!==null){Wt=e;return}Wt=e=t}while(e!==null);Yt===0&&(Yt=5)}function Er(t,e,n){var i=Et,r=kn.transition;try{kn.transition=null,Et=1,ry(t,e,n,i)}finally{kn.transition=r,Et=i}return null}function ry(t,e,n,i){do wo();while(ji!==null);if(gt&6)throw Error(Ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ee(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(O0(t,o),t===Jt&&(Wt=Jt=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,og(rl,function(){return wo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kn.transition,kn.transition=null;var s=Et;Et=1;var a=gt;gt|=4,Mf.current=null,Q_(t,n),Kv(n,t),w_(Cc),sl=!!Ac,Cc=Ac=null,t.current=n,J_(n),P0(),gt=a,Et=s,kn.transition=o}else t.current=n;if(ha&&(ha=!1,ji=t,Ml=r),o=t.pendingLanes,o===0&&(er=null),I0(n.stateNode),Mn(t,Vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=Yc,Yc=null,t;return Ml&1&&t.tag!==0&&wo(),o=t.pendingLanes,o&1?t===jc?Ss++:(Ss=0,jc=t):Ss=0,hr(),null}function wo(){if(ji!==null){var t=Fm(Ml),e=kn.transition,n=Et;try{if(kn.transition=null,Et=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Ml=0,gt&6)throw Error(Ee(331));var r=gt;for(gt|=4,Ye=t.current;Ye!==null;){var o=Ye,s=o.child;if(Ye.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ye=c;Ye!==null;){var h=Ye;switch(h.tag){case 0:case 11:case 15:ys(8,h,o)}var u=h.child;if(u!==null)u.return=h,Ye=u;else for(;Ye!==null;){h=Ye;var f=h.sibling,p=h.return;if(Yv(h),h===c){Ye=null;break}if(f!==null){f.return=p,Ye=f;break}Ye=p}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Ye=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Ye=s;else e:for(;Ye!==null;){if(o=Ye,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ys(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,Ye=d;break e}Ye=o.return}}var _=t.current;for(Ye=_;Ye!==null;){s=Ye;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,Ye=y;else e:for(s=_;Ye!==null;){if(a=Ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zl(9,a)}}catch(T){Bt(a,a.return,T)}if(a===s){Ye=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Ye=x;break e}Ye=a.return}}if(gt=r,hr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Ll,t)}catch{}i=!0}return i}finally{Et=n,kn.transition=e}}return!1}function Zd(t,e,n){e=No(n,e),e=Fv(t,e,1),t=Ji(t,e,1),e=dn(),t!==null&&(Vs(t,1,e),Mn(t,e))}function Bt(t,e,n){if(t.tag===3)Zd(t,t,n);else for(;e!==null;){if(e.tag===3){Zd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=No(n,t),t=Bv(e,t,1),e=Ji(e,t,1),t=dn(),e!==null&&(Vs(e,1,t),Mn(e,t));break}}e=e.return}}function oy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Jt===t&&(tn&n)===n&&(Yt===4||Yt===3&&(tn&130023424)===tn&&500>Vt()-wf?Nr(t,0):Ef|=n),Mn(t,e)}function ig(t,e){e===0&&(t.mode&1?(e=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):e=1);var n=dn();t=bi(t,e),t!==null&&(Vs(t,e,n),Mn(t,n))}function sy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ig(t,n)}function ay(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ee(314))}i!==null&&i.delete(e),ig(t,n)}var rg;rg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,j_(t,e,n);yn=!!(t.flags&131072)}else yn=!1,Lt&&e.flags&1048576&&lv(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wa(t,e),t=e.pendingProps;var r=Po(e,cn.current);Eo(e,n),r=gf(null,e,i,t,r,n);var o=_f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(o=!0,hl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ff(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,Fc(e,i,t,n),e=zc(null,e,i,!0,o,n)):(e.tag=0,Lt&&o&&of(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uy(i),t=jn(i,t),r){case 0:e=Oc(null,e,i,t,n);break e;case 1:e=Vd(null,e,i,t,n);break e;case 11:e=zd(null,e,i,t,n);break e;case 14:e=kd(null,e,i,jn(i.type,t),n);break e}throw Error(Ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Oc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Vd(t,e,i,r,n);case 3:e:{if(Vv(e),t===null)throw Error(Ee(387));i=e.pendingProps,o=e.memoizedState,r=o.element,pv(t,e),vl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=No(Error(Ee(423)),e),e=Hd(t,e,i,n,r);break e}else if(i!==r){r=No(Error(Ee(424)),e),e=Hd(t,e,i,n,r);break e}else for(Pn=Qi(e.stateNode.containerInfo.firstChild),bn=e,Lt=!0,Kn=null,n=fv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),i===r){e=Li(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return mv(e),t===null&&Nc(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Rc(i,r)?s=null:o!==null&&Rc(i,o)&&(e.flags|=32),kv(t,e),fn(t,e,s,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return Hv(t,e,n);case 4:return df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Lo(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),zd(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Ct(pl,i._currentValue),i._currentValue=s,o!==null)if(ii(o.value,s)){if(o.children===r.children&&!xn.current){e=Li(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dc(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Ee(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Dc(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Eo(e,n),r=Vn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),kd(t,e,i,r,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Wa(t,e),e.tag=1,Sn(i)?(t=!0,hl(e)):t=!1,Eo(e,n),Uv(e,i,r),Fc(e,i,r,n),zc(null,e,i,!0,t,n);case 19:return Gv(t,e,n);case 22:return zv(t,e,n)}throw Error(Ee(156,e.tag))};function og(t,e){return Im(t,e)}function ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new ly(t,e,n,i)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uy(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qh)return 11;if(t===Yh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Rf(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case so:return Dr(n.children,r,o,e);case Xh:s=8,r|=8;break;case sc:return t=Bn(12,n,e,r|2),t.elementType=sc,t.lanes=o,t;case ac:return t=Bn(13,n,e,r),t.elementType=ac,t.lanes=o,t;case lc:return t=Bn(19,n,e,r),t.elementType=lc,t.lanes=o,t;case mm:return Vl(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dm:s=10;break e;case pm:s=9;break e;case qh:s=11;break e;case Yh:s=14;break e;case Hi:s=16,i=null;break e}throw Error(Ee(130,t==null?t:typeof t,""))}return e=Bn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Dr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Vl(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=mm,t.lanes=n,t.stateNode={isHidden:!1},t}function Su(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nu(0),this.expirationTimes=nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pf(t,e,n,i,r,o,s,a,l){return t=new cy(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Bn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(o),t}function hy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sg(t){if(!t)return sr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(Ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ee(171))}if(t.tag===1){var n=t.type;if(Sn(n))return sv(t,n,e)}return e}function ag(t,e,n,i,r,o,s,a,l){return t=Pf(n,i,!0,t,r,o,s,a,l),t.context=sg(null),n=t.current,i=dn(),r=tr(n),o=Ci(i,r),o.callback=e??null,Ji(n,o,r),t.current.lanes=r,Vs(t,r,i),Mn(t,i),t}function Hl(t,e,n,i){var r=e.current,o=dn(),s=tr(r);return n=sg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,s),t!==null&&(ni(t,r,s,o),Va(t,r,s)),s}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bf(t,e){Qd(t,e),(t=t.alternate)&&Qd(t,e)}function fy(){return null}var lg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}Gl.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ee(409));Hl(t,e,null,null)};Gl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){Hl(null,t,null,null)}),e[Pi]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=zm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&Vm(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jd(){}function dy(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=wl(s);o.call(c)}}var s=ag(e,i,t,0,null,!1,!1,"",Jd);return t._reactRootContainer=s,t[Pi]=s.current,bs(t.nodeType===8?t.parentNode:t),zr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=wl(l);a.call(c)}}var l=Pf(t,0,!1,null,null,!1,!1,"",Jd);return t._reactRootContainer=l,t[Pi]=l.current,bs(t.nodeType===8?t.parentNode:t),zr(function(){Hl(e,l,n,i)}),l}function Xl(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=wl(s);a.call(l)}}Hl(e,s,t,r)}else s=dy(n,e,t,r,i);return wl(s)}Bm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cs(e.pendingLanes);n!==0&&(Kh(e,n|1),Mn(e,Vt()),!(gt&6)&&(Do=Vt()+500,hr()))}break;case 13:zr(function(){var i=bi(t,1);if(i!==null){var r=dn();ni(i,t,1,r)}}),bf(t,1)}};Zh=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=dn();ni(e,t,134217728,n)}bf(t,134217728)}};Om=function(t){if(t.tag===13){var e=tr(t),n=bi(t,e);if(n!==null){var i=dn();ni(n,t,e,i)}bf(t,e)}};zm=function(){return Et};km=function(t,e){var n=Et;try{return Et=t,e()}finally{Et=n}};_c=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ul(i);if(!r)throw Error(Ee(90));gm(i),hc(i,r)}}}break;case"textarea":ym(t,n);break;case"select":e=n.value,e!=null&&yo(t,!!n.multiple,e,!1)}};Am=Tf;Cm=zr;var py={usingClientEntryPoint:!1,Events:[Gs,co,Ul,wm,Tm,Tf]},ts={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},my={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bm(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Ll=fa.inject(my),ui=fa}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(Ee(200));return hy(t,e,null,n)};In.createRoot=function(t,e){if(!If(t))throw Error(Ee(299));var n=!1,i="",r=lg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pf(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,bs(t.nodeType===8?t.parentNode:t),new Lf(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ee(188)):(t=Object.keys(t).join(","),Error(Ee(268,t)));return t=bm(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return zr(t)};In.hydrate=function(t,e,n){if(!Wl(e))throw Error(Ee(200));return Xl(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!If(t))throw Error(Ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=lg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ag(e,null,t,1,n??null,r,!1,o,s),t[Pi]=e.current,bs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};In.render=function(t,e,n){if(!Wl(e))throw Error(Ee(200));return Xl(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(Ee(40));return t._reactRootContainer?(zr(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};In.unstable_batchedUpdates=Tf;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wl(n))throw Error(Ee(200));if(t==null||t._reactInternals===void 0)throw Error(Ee(38));return Xl(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ug)}catch(t){console.error(t)}}ug(),um.exports=In;var vy=um.exports,cg,ep=vy;cg=ep.createRoot,ep.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="169",gy=0,tp=1,_y=2,hg=1,yy=2,yi=3,ar=0,En=1,Mi=2,ir=0,To=1,np=2,ip=3,rp=4,xy=5,Ar=100,Sy=101,My=102,Ey=103,wy=104,Ty=200,Ay=201,Cy=202,Ry=203,Zc=204,Qc=205,Py=206,by=207,Ly=208,Iy=209,Ny=210,Dy=211,Uy=212,Fy=213,By=214,Jc=0,eh=1,th=2,Uo=3,nh=4,ih=5,rh=6,oh=7,fg=0,Oy=1,zy=2,rr=0,ky=1,Vy=2,Hy=3,Gy=4,Wy=5,Xy=6,qy=7,dg=300,Fo=301,Bo=302,sh=303,ah=304,ql=306,lh=1e3,Lr=1001,uh=1002,On=1003,Yy=1004,da=1005,Qn=1006,Eu=1007,Ir=1008,Ii=1009,pg=1010,mg=1011,zs=1012,Df=1013,kr=1014,Ti=1015,Xs=1016,Uf=1017,Ff=1018,Oo=1020,vg=35902,gg=1021,_g=1022,ei=1023,yg=1024,xg=1025,Ao=1026,zo=1027,Sg=1028,Bf=1029,Mg=1030,Of=1031,zf=1033,ja=33776,$a=33777,Ka=33778,Za=33779,ch=35840,hh=35841,fh=35842,dh=35843,ph=36196,mh=37492,vh=37496,gh=37808,_h=37809,yh=37810,xh=37811,Sh=37812,Mh=37813,Eh=37814,wh=37815,Th=37816,Ah=37817,Ch=37818,Rh=37819,Ph=37820,bh=37821,Qa=36492,Lh=36494,Ih=36495,Eg=36283,Nh=36284,Dh=36285,Uh=36286,jy=3200,$y=3201,wg=0,Ky=1,qi="",si="srgb",fr="srgb-linear",kf="display-p3",Yl="display-p3-linear",Tl="linear",Pt="srgb",Al="rec709",Cl="p3",Xr=7680,op=519,Zy=512,Qy=513,Jy=514,Tg=515,ex=516,tx=517,nx=518,ix=519,sp=35044,ap="300 es",Ai=2e3,Rl=2001;class Wo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,Fh=180/Math.PI;function qs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function _n(t,e,n){return Math.max(e,Math.min(n,t))}function rx(t,e){return(t%e+e)%e}function Tu(t,e,n){return(1-n)*t+n*e}function ns(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,n=0){St.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,i,r,o,s,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=o,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],v=i[8],g=r[0],m=r[3],d=r[6],_=r[1],y=r[4],x=r[7],T=r[2],R=r[5],A=r[8];return o[0]=s*g+a*_+l*T,o[3]=s*m+a*y+l*R,o[6]=s*d+a*x+l*A,o[1]=c*g+h*_+u*T,o[4]=c*m+h*y+u*R,o[7]=c*d+h*x+u*A,o[2]=f*g+p*_+v*T,o[5]=f*m+p*y+v*R,o[8]=f*d+p*x+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*s*h-n*a*c-i*o*h+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*s-a*c,f=a*l-h*o,p=c*o-s*l,v=n*u+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(r*c-h*i)*g,e[2]=(a*i-r*s)*g,e[3]=f*g,e[4]=(h*n-r*l)*g,e[5]=(r*o-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(s*n-i*o)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Au=new ct;function Ag(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ox(){const t=Pl("canvas");return t.style.display="block",t}const lp={};function Ja(t){t in lp||(lp[t]=!0,console.warn(t))}function sx(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function ax(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lx(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const up=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cp=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[fr]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[si]:{transfer:Pt,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yl]:{transfer:Tl,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(cp),fromReference:t=>t.applyMatrix3(up)},[kf]:{transfer:Pt,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(cp),fromReference:t=>t.applyMatrix3(up).convertLinearToSRGB()}},ux=new Set([fr,Yl]),xt={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ux.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=is[e].toReference,r=is[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return is[t].primaries},getTransfer:function(t){return t===qi?Tl:is[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(is[e].luminanceCoefficients)}};function Co(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class cx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=Pl("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Co(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Co(n[i]/255)*255):n[i]=Co(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hx=0;class Cg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ru(r[s].image)):o.push(Ru(r[s]))}else o=Ru(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fx=0;class wn extends Wo{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=Lr,r=Lr,o=Qn,s=Ir,a=ei,l=Ii,c=wn.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=qs(),this.name="",this.source=new Cg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=dg;wn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,T=(d+1)/2,R=(h+f)/4,A=(u+g)/4,I=(v+m)/4;return y>x&&y>T?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=R/i,o=A/i):x>T?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=R/r,o=I/r):T<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),i=A/o,r=I/o),this.set(i,r,o,n),this}let _=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(u-g)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends Wo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends dx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rg extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class px extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=o[s+0],p=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=g;return}if(u!==g||l!==f||c!==p||h!==v){let m=1-a;const d=l*f+c*p+h*v+u*g,_=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const T=Math.sqrt(y),R=Math.atan2(T,d*_);m=Math.sin(m*R)/T,a=Math.sin(a*R)/T}const x=a*_;if(l=l*m+f*x,c=c*m+p*x,h=h*m+v*x,u=u*m+g*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=o[s],f=o[s+1],p=o[s+2],v=o[s+3];return e[n]=a*v+h*u+l*p-c*f,e[n+1]=l*v+h*f+c*u-a*p,e[n+2]=c*v+h*p+a*f-l*u,e[n+3]=h*v-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(o/2),f=l(i/2),p=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"YXZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"ZXY":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"ZYX":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"YZX":this._x=f*h*u+c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u-f*p*v;break;case"XZY":this._x=f*h*u-c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],h=n[6],u=n[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-i*c,this._z=o*h+s*c+i*l-r*a,this._w=s*h-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=s*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,n=0,i=0){ae.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),h=2*(a*n-o*r),u=2*(o*i-s*n);return this.x=n+l*c+s*u-a*h,this.y=i+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new ae,hp=new Ys;class js{constructor(e=new ae(1/0,1/0,1/0),n=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Xn):Xn.fromBufferAttribute(o,s),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),ma.subVectors(this.max,rs),Yr.subVectors(e.a,rs),jr.subVectors(e.b,rs),$r.subVectors(e.c,rs),Ui.subVectors(jr,Yr),Fi.subVectors($r,jr),pr.subVectors(Yr,$r);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-pr.z,pr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,pr.z,0,-pr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-pr.y,pr.x,0];return!bu(n,Yr,jr,$r,ma)||(n=[1,0,0,0,1,0,0,0,1],!bu(n,Yr,jr,$r,ma))?!1:(va.crossVectors(Ui,Fi),n=[va.x,va.y,va.z],bu(n,Yr,jr,$r,ma))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Xn=new ae,pa=new js,Yr=new ae,jr=new ae,$r=new ae,Ui=new ae,Fi=new ae,pr=new ae,rs=new ae,ma=new ae,va=new ae,mr=new ae;function bu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){mr.fromArray(t,o);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),h=i.dot(mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mx=new js,os=new ae,Lu=new ae;class Vf{constructor(e=new ae,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mx.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const n=os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Lu)),this.expandByPoint(os.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new ae,Iu=new ae,ga=new ae,Bi=new ae,Nu=new ae,_a=new ae,Du=new ae;class vx{constructor(e=new ae,n=new ae(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Iu.copy(e).add(n).multiplyScalar(.5),ga.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(Iu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ga),a=Bi.dot(this.direction),l=-Bi.dot(ga),c=Bi.lengthSq(),h=Math.abs(1-s*s);let u,f,p,v;if(h>0)if(u=s*l-a,f=s*a-l,v=o*h,u>=0)if(f>=-v)if(f<=v){const g=1/h;u*=g,f*=g,p=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),p=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Iu).addScaledVector(ga,f),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(o=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,o){Nu.subVectors(n,e),_a.subVectors(i,e),Du.crossVectors(Nu,_a);let s=this.direction.dot(Du),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(_a.crossVectors(Bi,_a));if(l<0)return null;const c=a*this.direction.dot(Nu.cross(Bi));if(c<0||l+c>s)return null;const h=-a*Bi.dot(Du);return h<0?null:this.at(h/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,i,r,o,s,a,l,c,h,u,f,p,v,g,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,h,u,f,p,v,g,m)}set(e,n,i,r,o,s,a,l,c,h,u,f,p,v,g,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),o=1/Kr.setFromMatrixColumn(e,1).length(),s=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const f=s*h,p=s*u,v=a*h,g=a*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=p+v*c,n[5]=f-g*c,n[9]=-a*l,n[2]=g-f*c,n[6]=v+p*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,v=c*h,g=c*u;n[0]=f+g*a,n[4]=v*a-p,n[8]=s*c,n[1]=s*u,n[5]=s*h,n[9]=-a,n[2]=p*a-v,n[6]=g+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,v=c*h,g=c*u;n[0]=f-g*a,n[4]=-s*u,n[8]=v+p*a,n[1]=p+v*a,n[5]=s*h,n[9]=g-f*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*h,p=s*u,v=a*h,g=a*u;n[0]=l*h,n[4]=v*c-p,n[8]=f*c+g,n[1]=l*u,n[5]=g*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,v=a*l,g=a*c;n[0]=l*h,n[4]=g-f*u,n[8]=v*u+p,n[1]=u,n[5]=s*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*u+v,n[10]=f-g*u}else if(e.order==="XZY"){const f=s*l,p=s*c,v=a*l,g=a*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=f*u+g,n[5]=s*h,n[9]=p*u-v,n[2]=v*u-p,n[6]=a*h,n[10]=g*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,_x)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Oi.crossVectors(i,Tn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Oi.crossVectors(i,Tn)),Oi.normalize(),ya.crossVectors(Tn,Oi),r[0]=Oi.x,r[4]=ya.x,r[8]=Tn.x,r[1]=Oi.y,r[5]=ya.y,r[9]=Tn.y,r[2]=Oi.z,r[6]=ya.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],v=i[2],g=i[6],m=i[10],d=i[14],_=i[3],y=i[7],x=i[11],T=i[15],R=r[0],A=r[4],I=r[8],W=r[12],S=r[1],M=r[5],F=r[9],U=r[13],Y=r[2],$=r[6],Q=r[10],O=r[14],C=r[3],X=r[7],H=r[11],D=r[15];return o[0]=s*R+a*S+l*Y+c*C,o[4]=s*A+a*M+l*$+c*X,o[8]=s*I+a*F+l*Q+c*H,o[12]=s*W+a*U+l*O+c*D,o[1]=h*R+u*S+f*Y+p*C,o[5]=h*A+u*M+f*$+p*X,o[9]=h*I+u*F+f*Q+p*H,o[13]=h*W+u*U+f*O+p*D,o[2]=v*R+g*S+m*Y+d*C,o[6]=v*A+g*M+m*$+d*X,o[10]=v*I+g*F+m*Q+d*H,o[14]=v*W+g*U+m*O+d*D,o[3]=_*R+y*S+x*Y+T*C,o[7]=_*A+y*M+x*$+T*X,o[11]=_*I+y*F+x*Q+T*H,o[15]=_*W+y*U+x*O+T*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],v=e[3],g=e[7],m=e[11],d=e[15];return v*(+o*l*u-r*c*u-o*a*f+i*c*f+r*a*p-i*l*p)+g*(+n*l*p-n*c*f+o*s*f-r*s*p+r*c*h-o*l*h)+m*(+n*c*u-n*a*p-o*s*u+i*s*p+o*a*h-i*c*h)+d*(-r*a*h-n*l*u+n*a*f+r*s*u-i*s*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],v=e[12],g=e[13],m=e[14],d=e[15],_=u*m*c-g*f*c+g*l*p-a*m*p-u*l*d+a*f*d,y=v*f*c-h*m*c-v*l*p+s*m*p+h*l*d-s*f*d,x=h*g*c-v*u*c+v*a*p-s*g*p-h*a*d+s*u*d,T=v*u*l-h*g*l-v*a*f+s*g*f+h*a*m-s*u*m,R=n*_+i*y+r*x+o*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=_*A,e[1]=(g*f*o-u*m*o-g*r*p+i*m*p+u*r*d-i*f*d)*A,e[2]=(a*m*o-g*l*o+g*r*c-i*m*c-a*r*d+i*l*d)*A,e[3]=(u*l*o-a*f*o-u*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=y*A,e[5]=(h*m*o-v*f*o+v*r*p-n*m*p-h*r*d+n*f*d)*A,e[6]=(v*l*o-s*m*o-v*r*c+n*m*c+s*r*d-n*l*d)*A,e[7]=(s*f*o-h*l*o+h*r*c-n*f*c-s*r*p+n*l*p)*A,e[8]=x*A,e[9]=(v*u*o-h*g*o-v*i*p+n*g*p+h*i*d-n*u*d)*A,e[10]=(s*g*o-v*a*o+v*i*c-n*g*c-s*i*d+n*a*d)*A,e[11]=(h*a*o-s*u*o-h*i*c+n*u*c+s*i*p-n*a*p)*A,e[12]=T*A,e[13]=(h*g*r-v*u*r+v*i*f-n*g*f-h*i*m+n*u*m)*A,e[14]=(v*a*r-s*g*r-v*i*l+n*g*l+s*i*m-n*a*m)*A,e[15]=(s*u*r-h*a*r+h*i*l-n*u*l-s*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,h=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,h=s+s,u=a+a,f=o*c,p=o*h,v=o*u,g=s*h,m=s*u,d=a*u,_=l*c,y=l*h,x=l*u,T=i.x,R=i.y,A=i.z;return r[0]=(1-(g+d))*T,r[1]=(p+x)*T,r[2]=(v-y)*T,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(f+d))*R,r[6]=(m+_)*R,r[7]=0,r[8]=(v+y)*A,r[9]=(m-_)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Kr.set(r[0],r[1],r[2]).length();const s=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/o,h=1/s,u=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,n.setFromRotationMatrix(qn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ai){const l=this.elements,c=2*o/(n-e),h=2*o/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===Ai)p=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Rl)p=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ai){const l=this.elements,c=1/(n-e),h=1/(i-r),u=1/(s-o),f=(n+e)*c,p=(i+r)*h;let v,g;if(a===Ai)v=(s+o)*u,g=-2*u;else if(a===Rl)v=o*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new ae,qn=new zt,gx=new ae(0,0,0),_x=new ae(1,1,1),Oi=new ae,ya=new ae,Tn=new ae,fp=new zt,dp=new Ys;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_n(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Pg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yx=0;const pp=new ae,Zr=new Ys,vi=new zt,xa=new ae,ss=new ae,xx=new ae,Sx=new Ys,mp=new ae(1,0,0),vp=new ae(0,1,0),gp=new ae(0,0,1),_p={type:"added"},Mx={type:"removed"},Qr={type:"childadded",child:null},Uu={type:"childremoved",child:null};class un extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new ae,n=new di,i=new Ys,r=new ae(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new ct}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(mp,e)}rotateY(e){return this.rotateOnAxis(vp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,n){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mp,e)}translateY(e){return this.translateOnAxis(vp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xa.copy(e):xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ss,xa,this.up):vi.lookAt(xa,ss,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(vi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mx),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),p=s(e.animations),v=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new ae(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new ae,gi=new ae,Fu=new ae,_i=new ae,Jr=new ae,eo=new ae,yp=new ae,Bu=new ae,Ou=new ae,zu=new ae,ku=new Ot,Vu=new Ot,Hu=new Ot;class Jn{constructor(e=new ae,n=new ae,i=new ae){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Yn.subVectors(r,n),gi.subVectors(i,n),Fu.subVectors(e,n);const s=Yn.dot(Yn),a=Yn.dot(gi),l=Yn.dot(Fu),c=gi.dot(gi),h=gi.dot(Fu),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,v=(s*h-a*l)*f;return o.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,_i.x),l.addScaledVector(s,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return ku.setScalar(0),Vu.setScalar(0),Hu.setScalar(0),ku.fromBufferAttribute(e,n),Vu.fromBufferAttribute(e,i),Hu.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ku,o.x),s.addScaledVector(Vu,o.y),s.addScaledVector(Hu,o.z),s}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),gi.subVectors(e,n),Yn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Yn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Jr.subVectors(r,i),eo.subVectors(o,i),Bu.subVectors(e,i);const l=Jr.dot(Bu),c=eo.dot(Bu);if(l<=0&&c<=0)return n.copy(i);Ou.subVectors(e,r);const h=Jr.dot(Ou),u=eo.dot(Ou);if(h>=0&&u<=h)return n.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(Jr,s);zu.subVectors(e,o);const p=Jr.dot(zu),v=eo.dot(zu);if(v>=0&&p<=v)return n.copy(o);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(eo,a);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return yp.subVectors(o,r),a=(u-h)/(u-h+(p-v)),n.copy(r).addScaledVector(yp,a);const d=1/(m+g+f);return s=g*d,a=f*d,n.copy(i).addScaledVector(Jr,s).addScaledVector(eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=xt.workingColorSpace){return this.r=e,this.g=n,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=xt.workingColorSpace){if(e=rx(e,1),n=_n(n,0,1),i=_n(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Gu(s,o,e+1/3),this.g=Gu(s,o,e),this.b=Gu(s,o,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,n=si){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=si){const i=bg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}copyLinearToSRGB(e){return this.r=Cu(e.r),this.g=Cu(e.g),this.b=Cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return xt.fromWorkingColorSpace(an.copy(this),e),Math.round(_n(an.r*255,0,255))*65536+Math.round(_n(an.g*255,0,255))*256+Math.round(_n(an.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(an.copy(this),n);const i=an.r,r=an.g,o=an.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const h=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case i:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-i)/u+2;break;case o:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=si){xt.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==si?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Sa);const i=Tu(zi.h,Sa.h,n),r=Tu(zi.s,Sa.s,n),o=Tu(zi.l,Sa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new yt;yt.NAMES=bg;let Ex=0;class $s extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=To,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Qc,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lg extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new ae,Ma=new St;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sp,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ma.fromBufferAttribute(this,n),Ma.applyMatrix3(e),this.setXY(n,Ma.x,Ma.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ns(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ns(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ns(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ns(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),o=vn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sp&&(e.usage=this.usage),e}}class Ig extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ng extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fi extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wx=0;const Dn=new zt,Wu=new un,to=new ae,An=new js,as=new js,Kt=new ae;class dr extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?Ng:Ig)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new fi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];An.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];as.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(An.min,as.min),An.expandByPoint(Kt),Kt.addVectors(An.max,as.max),An.expandByPoint(Kt)):(An.expandByPoint(as.min),An.expandByPoint(as.max))}An.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Kt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Kt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Kt.fromBufferAttribute(a,c),l&&(to.fromBufferAttribute(e,c),Kt.add(to)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new ae,l[I]=new ae;const c=new ae,h=new ae,u=new ae,f=new St,p=new St,v=new St,g=new ae,m=new ae;function d(I,W,S){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,W),u.fromBufferAttribute(i,S),f.fromBufferAttribute(o,I),p.fromBufferAttribute(o,W),v.fromBufferAttribute(o,S),h.sub(c),u.sub(c),p.sub(f),v.sub(f);const M=1/(p.x*v.y-v.x*p.y);isFinite(M)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(M),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(M),a[I].add(g),a[W].add(g),a[S].add(g),l[I].add(m),l[W].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,W=_.length;I<W;++I){const S=_[I],M=S.start,F=S.count;for(let U=M,Y=M+F;U<Y;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new ae,x=new ae,T=new ae,R=new ae;function A(I){T.fromBufferAttribute(r,I),R.copy(T);const W=a[I];y.copy(W),y.sub(T.multiplyScalar(T.dot(W))).normalize(),x.crossVectors(R,W);const M=x.dot(l[I])<0?-1:1;s.setXYZW(I,y.x,y.y,y.z,M)}for(let I=0,W=_.length;I<W;++I){const S=_[I],M=S.start,F=S.count;for(let U=M,Y=M+F;U<Y;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new ae,o=new ae,s=new ae,a=new ae,l=new ae,c=new ae,h=new ae,u=new ae;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),s.fromBufferAttribute(n,m),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let d=0;d<h;d++)f[v++]=c[p++]}return new hi(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const o=e.morphAttributes;for(const c in o){const h=[],u=o[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xp=new zt,vr=new vx,Ea=new Vf,Sp=new ae,wa=new ae,Ta=new ae,Aa=new ae,Xu=new ae,Ca=new ae,Mp=new ae,Ra=new ae;class zn extends un{constructor(e=new dr,n=new Lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ca.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Xu.fromBufferAttribute(u,e),s?Ca.addScaledVector(Xu,h):Ca.addScaledVector(Xu.sub(n),h))}n.add(Ca)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(o),vr.copy(e.ray).recast(e.near),!(Ea.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Ea,Sp)===null||vr.origin.distanceToSquared(Sp)>(e.far-e.near)**2))&&(xp.copy(o).invert(),vr.copy(e.ray).applyMatrix4(xp),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=s[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,T=y;x<T;x+=3){const R=a.getX(x),A=a.getX(x+1),I=a.getX(x+2);r=Pa(this,d,e,i,c,h,u,R,A,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Pa(this,s,e,i,c,h,u,_,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=s[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,T=y;x<T;x+=3){const R=x,A=x+1,I=x+2;r=Pa(this,d,e,i,c,h,u,R,A,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const _=m,y=m+1,x=m+2;r=Pa(this,s,e,i,c,h,u,_,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Tx(t,e,n,i,r,o,s,a){let l;if(e.side===En?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===ar,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ra);return c<n.near||c>n.far?null:{distance:c,point:Ra.clone(),object:t}}function Pa(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,wa),t.getVertexPosition(l,Ta),t.getVertexPosition(c,Aa);const h=Tx(t,e,n,i,wa,Ta,Aa,Mp);if(h){const u=new ae;Jn.getBarycoord(Mp,wa,Ta,Aa,u),r&&(h.uv=Jn.getInterpolatedAttribute(r,a,l,c,u,new St)),o&&(h.uv1=Jn.getInterpolatedAttribute(o,a,l,c,u,new St)),s&&(h.normal=Jn.getInterpolatedAttribute(s,a,l,c,u,new ae),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new ae,materialIndex:0};Jn.getNormal(wa,Ta,Aa,f.normal),h.face=f,h.barycoord=u}return h}class Xo extends dr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],h=[],u=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,s,o,0),v("z","y","x",1,-1,i,n,-e,s,o,1),v("x","z","y",1,1,e,i,n,r,s,2),v("x","z","y",1,-1,e,i,-n,r,s,3),v("x","y","z",1,-1,e,n,i,r,o,4),v("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(h,3)),this.setAttribute("uv",new fi(u,2));function v(g,m,d,_,y,x,T,R,A,I,W){const S=x/A,M=T/I,F=x/2,U=T/2,Y=R/2,$=A+1,Q=I+1;let O=0,C=0;const X=new ae;for(let H=0;H<Q;H++){const D=H*M-U;for(let K=0;K<$;K++){const z=K*S-F;X[g]=z*_,X[m]=D*y,X[d]=Y,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[d]=R>0?1:-1,h.push(X.x,X.y,X.z),u.push(K/A),u.push(1-H/I),O+=1}}for(let H=0;H<I;H++)for(let D=0;D<A;D++){const K=f+D+$*H,z=f+D+$*(H+1),P=f+(D+1)+$*(H+1),b=f+(D+1)+$*H;l.push(K,z,b),l.push(z,P,b),C+=6}a.addGroup(p,C,W),p+=C,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=ko(t[n]);for(const r in i)e[r]=i[r]}return e}function Ax(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Cx={clone:ko,merge:hn};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=Ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ug extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new ae,Ep=new St,wp=new St;class Zn extends Ug{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Ep,wp),n.subVectors(wp,Ep)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const no=-90,io=1;class bx extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(no,io,e,n);r.layers=this.layers,this.add(r);const o=new Zn(no,io,e,n);o.layers=this.layers,this.add(o);const s=new Zn(no,io,e,n);s.layers=this.layers,this.add(s);const a=new Zn(no,io,e,n);a.layers=this.layers,this.add(a);const l=new Zn(no,io,e,n);l.layers=this.layers,this.add(l);const c=new Zn(no,io,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(u,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Fg extends wn{constructor(e,n,i,r,o,s,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Fo,super(e,n,i,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lx extends Vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xo(5,5,5),o=new lr({name:"CubemapFromEquirect",uniforms:ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:ir});o.uniforms.tEquirect.value=n;const s=new zn(r,o),a=n.minFilter;return n.minFilter===Ir&&(n.minFilter=Qn),new bx(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const qu=new ae,Ix=new ae,Nx=new ct;class wr{constructor(e=new ae(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qu.subVectors(i,n).cross(Ix.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Nx.getNormalMatrix(e),r=this.coplanarPoint(qu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Vf,ba=new ae;class Hf{constructor(e=new wr,n=new wr,i=new wr,r=new wr,o=new wr,s=new wr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],d=r[12],_=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-o,f-c,m-p,x-d).normalize(),i[1].setComponents(l+o,f+c,m+p,x+d).normalize(),i[2].setComponents(l+s,f+h,m+v,x+_).normalize(),i[3].setComponents(l-s,f-h,m-v,x-_).normalize(),i[4].setComponents(l-a,f-u,m-g,x-y).normalize(),n===Ai)i[5].setComponents(l+a,f+u,m+g,x+y).normalize();else if(n===Rl)i[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bg(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Dx(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,a),u.length===0)t.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){const v=u[f],g=u[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){const g=u[p];t.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class jl extends dr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=n/l,p=[],v=[],g=[],m=[];for(let d=0;d<h;d++){const _=d*f-s;for(let y=0;y<c;y++){const x=y*u-o;v.push(x,-_,0),g.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const y=_+c*d,x=_+c*(d+1),T=_+1+c*(d+1),R=_+1+c*d;p.push(y,x,R),p.push(x,T,R)}this.setIndex(p),this.setAttribute("position",new fi(v,3)),this.setAttribute("normal",new fi(g,3)),this.setAttribute("uv",new fi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hS="gl_FragColor = linearToOutputTexel( gl_FragColor );",fS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ES=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,CS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,US=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$S=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Ux,alphahash_pars_fragment:Fx,alphamap_fragment:Bx,alphamap_pars_fragment:Ox,alphatest_fragment:zx,alphatest_pars_fragment:kx,aomap_fragment:Vx,aomap_pars_fragment:Hx,batching_pars_vertex:Gx,batching_vertex:Wx,begin_vertex:Xx,beginnormal_vertex:qx,bsdfs:Yx,iridescence_fragment:jx,bumpmap_pars_fragment:$x,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:Zx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:Jx,color_fragment:eS,color_pars_fragment:tS,color_pars_vertex:nS,color_vertex:iS,common:rS,cube_uv_reflection_fragment:oS,defaultnormal_vertex:sS,displacementmap_pars_vertex:aS,displacementmap_vertex:lS,emissivemap_fragment:uS,emissivemap_pars_fragment:cS,colorspace_fragment:hS,colorspace_pars_fragment:fS,envmap_fragment:dS,envmap_common_pars_fragment:pS,envmap_pars_fragment:mS,envmap_pars_vertex:vS,envmap_physical_pars_fragment:CS,envmap_vertex:gS,fog_vertex:_S,fog_pars_vertex:yS,fog_fragment:xS,fog_pars_fragment:SS,gradientmap_pars_fragment:MS,lightmap_pars_fragment:ES,lights_lambert_fragment:wS,lights_lambert_pars_fragment:TS,lights_pars_begin:AS,lights_toon_fragment:RS,lights_toon_pars_fragment:PS,lights_phong_fragment:bS,lights_phong_pars_fragment:LS,lights_physical_fragment:IS,lights_physical_pars_fragment:NS,lights_fragment_begin:DS,lights_fragment_maps:US,lights_fragment_end:FS,logdepthbuf_fragment:BS,logdepthbuf_pars_fragment:OS,logdepthbuf_pars_vertex:zS,logdepthbuf_vertex:kS,map_fragment:VS,map_pars_fragment:HS,map_particle_fragment:GS,map_particle_pars_fragment:WS,metalnessmap_fragment:XS,metalnessmap_pars_fragment:qS,morphinstance_vertex:YS,morphcolor_vertex:jS,morphnormal_vertex:$S,morphtarget_pars_vertex:KS,morphtarget_vertex:ZS,normal_fragment_begin:QS,normal_fragment_maps:JS,normal_pars_fragment:eM,normal_pars_vertex:tM,normal_vertex:nM,normalmap_pars_fragment:iM,clearcoat_normal_fragment_begin:rM,clearcoat_normal_fragment_maps:oM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:aM,opaque_fragment:lM,packing:uM,premultiplied_alpha_fragment:cM,project_vertex:hM,dithering_fragment:fM,dithering_pars_fragment:dM,roughnessmap_fragment:pM,roughnessmap_pars_fragment:mM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:gM,shadowmap_vertex:_M,shadowmask_pars_fragment:yM,skinbase_vertex:xM,skinning_pars_vertex:SM,skinning_vertex:MM,skinnormal_vertex:EM,specularmap_fragment:wM,specularmap_pars_fragment:TM,tonemapping_fragment:AM,tonemapping_pars_fragment:CM,transmission_fragment:RM,transmission_pars_fragment:PM,uv_pars_fragment:bM,uv_pars_vertex:LM,uv_vertex:IM,worldpos_vertex:NM,background_vert:DM,background_frag:UM,backgroundCube_vert:FM,backgroundCube_frag:BM,cube_vert:OM,cube_frag:zM,depth_vert:kM,depth_frag:VM,distanceRGBA_vert:HM,distanceRGBA_frag:GM,equirect_vert:WM,equirect_frag:XM,linedashed_vert:qM,linedashed_frag:YM,meshbasic_vert:jM,meshbasic_frag:$M,meshlambert_vert:KM,meshlambert_frag:ZM,meshmatcap_vert:QM,meshmatcap_frag:JM,meshnormal_vert:eE,meshnormal_frag:tE,meshphong_vert:nE,meshphong_frag:iE,meshphysical_vert:rE,meshphysical_frag:oE,meshtoon_vert:sE,meshtoon_frag:aE,points_vert:lE,points_frag:uE,shadow_vert:cE,shadow_frag:hE,sprite_vert:fE,sprite_frag:dE},He={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ai={basic:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new yt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:hn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:hn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new yt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:hn([He.points,He.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:hn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:hn([He.common,He.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:hn([He.sprite,He.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:hn([He.common,He.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:hn([He.lights,He.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ai.physical={uniforms:hn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const La={r:0,b:0,g:0},_r=new di,pE=new zt;function mE(t,e,n,i,r,o,s){const a=new yt(0);let l=o===!0?0:1,c,h,u=null,f=0,p=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function g(_){let y=!1;const x=v(_);x===null?d(a,l):x&&x.isColor&&(d(x,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const x=v(y);x&&(x.isCubeTexture||x.mapping===ql)?(h===void 0&&(h=new zn(new Xo(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:ko(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),_r.copy(y.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pE.makeRotationFromEuler(_r)),h.material.toneMapped=xt.getTransfer(x.colorSpace)!==Pt,(u!==x||f!==x.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zn(new jl(2,2),new lr({name:"BackgroundMaterial",uniforms:ko(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=xt.getTransfer(x.colorSpace)!==Pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,y){_.getRGB(La,Dg(t)),i.buffers.color.setClear(La.r,La.g,La.b,y,s)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:g,addToRenderList:m}}function vE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(S,M,F,U,Y){let $=!1;const Q=u(U,F,M);o!==Q&&(o=Q,c(o.object)),$=p(S,U,F,Y),$&&v(S,U,F,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,x(S,M,F,U),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function u(S,M,F){const U=F.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let $=Y[M.id];$===void 0&&($={},Y[M.id]=$);let Q=$[U];return Q===void 0&&(Q=f(l()),$[U]=Q),Q}function f(S){const M=[],F=[],U=[];for(let Y=0;Y<n;Y++)M[Y]=0,F[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:F,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,M,F,U){const Y=o.attributes,$=M.attributes;let Q=0;const O=F.getAttributes();for(const C in O)if(O[C].location>=0){const H=Y[C];let D=$[C];if(D===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(D=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(D=S.instanceColor)),H===void 0||H.attribute!==D||D&&H.data!==D.data)return!0;Q++}return o.attributesNum!==Q||o.index!==U}function v(S,M,F,U){const Y={},$=M.attributes;let Q=0;const O=F.getAttributes();for(const C in O)if(O[C].location>=0){let H=$[C];H===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(H=S.instanceColor));const D={};D.attribute=H,H&&H.data&&(D.data=H.data),Y[C]=D,Q++}o.attributes=Y,o.attributesNum=Q,o.index=U}function g(){const S=o.newAttributes;for(let M=0,F=S.length;M<F;M++)S[M]=0}function m(S){d(S,0)}function d(S,M){const F=o.newAttributes,U=o.enabledAttributes,Y=o.attributeDivisors;F[S]=1,U[S]===0&&(t.enableVertexAttribArray(S),U[S]=1),Y[S]!==M&&(t.vertexAttribDivisor(S,M),Y[S]=M)}function _(){const S=o.newAttributes,M=o.enabledAttributes;for(let F=0,U=M.length;F<U;F++)M[F]!==S[F]&&(t.disableVertexAttribArray(F),M[F]=0)}function y(S,M,F,U,Y,$,Q){Q===!0?t.vertexAttribIPointer(S,M,F,Y,$):t.vertexAttribPointer(S,M,F,U,Y,$)}function x(S,M,F,U){g();const Y=U.attributes,$=F.getAttributes(),Q=M.defaultAttributeValues;for(const O in $){const C=$[O];if(C.location>=0){let X=Y[O];if(X===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const H=X.normalized,D=X.itemSize,K=e.get(X);if(K===void 0)continue;const z=K.buffer,P=K.type,b=K.bytesPerElement,V=P===t.INT||P===t.UNSIGNED_INT||X.gpuType===Df;if(X.isInterleavedBufferAttribute){const ee=X.data,te=ee.stride,q=X.offset;if(ee.isInstancedInterleavedBuffer){for(let ie=0;ie<C.locationSize;ie++)d(C.location+ie,ee.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<C.locationSize;ie++)m(C.location+ie);t.bindBuffer(t.ARRAY_BUFFER,z);for(let ie=0;ie<C.locationSize;ie++)y(C.location+ie,D/C.locationSize,P,H,te*b,(q+D/C.locationSize*ie)*b,V)}else{if(X.isInstancedBufferAttribute){for(let ee=0;ee<C.locationSize;ee++)d(C.location+ee,X.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ee=0;ee<C.locationSize;ee++)m(C.location+ee);t.bindBuffer(t.ARRAY_BUFFER,z);for(let ee=0;ee<C.locationSize;ee++)y(C.location+ee,D/C.locationSize,P,H,D*b,D/C.locationSize*ee*b,V)}}else if(Q!==void 0){const H=Q[O];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(C.location,H);break;case 3:t.vertexAttrib3fv(C.location,H);break;case 4:t.vertexAttrib4fv(C.location,H);break;default:t.vertexAttrib1fv(C.location,H)}}}}_()}function T(){I();for(const S in i){const M=i[S];for(const F in M){const U=M[F];for(const Y in U)h(U[Y].object),delete U[Y];delete M[F]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const M=i[S.id];for(const F in M){const U=M[F];for(const Y in U)h(U[Y].object),delete U[Y];delete M[F]}delete i[S.id]}function A(S){for(const M in i){const F=i[M];if(F[S.id]===void 0)continue;const U=F[S.id];for(const Y in U)h(U[Y].object),delete U[Y];delete F[S.id]}}function I(){W(),s=!0,o!==r&&(o=r,c(o.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:W,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function gE(t,e,n){let i;function r(c){i=c}function o(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];n.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)s(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g];for(let g=0;g<f.length;g++)n.update(v,i,f[g])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _E(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ii&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ti&&!I)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:R}}function yE(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new wr,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){n=h(u,f,0)},this.setState=function(u,f,p){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=t.get(u);if(!r||v===null||v.length===0||o&&!m)o?h(null):c();else{const _=o?0:i,y=_*4;let x=d.clippingState||null;l.value=x,x=h(v,f,y,p);for(let T=0;T!==y;++T)x[T]=n[T];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const d=p+g*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==g;++y,x+=4)s.copy(u[y]).applyMatrix4(_,a),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function xE(t){let e=new WeakMap;function n(s,a){return a===sh?s.mapping=Fo:a===ah&&(s.mapping=Bo),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===sh||a===ah)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Lx(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Gf extends Ug{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const _o=4,Tp=[.125,.215,.35,.446,.526,.582],Cr=20,Yu=new Gf,Ap=new yt;let ju=null,$u=0,Ku=0,Zu=!1;const Tr=(1+Math.sqrt(5))/2,ro=1/Tr,Cp=[new ae(-Tr,ro,0),new ae(Tr,ro,0),new ae(-ro,0,Tr),new ae(ro,0,Tr),new ae(0,Tr,-ro),new ae(0,Tr,ro),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class Rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ju=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,$u,Ku),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fo||e.mapping===Bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Xs,format:ei,colorSpace:fr,depthBuffer:!1},r=Pp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SE(o)),this._blurMaterial=ME(o,e,n)}return r}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,Yu)}_sceneToCubeUV(e,n,i,r){const a=new Zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ap),h.toneMapping=rr,h.autoClear=!1;const p=new Lg({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),v=new zn(new Xo,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Ap),g=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;Ia(r,_*y,d>2?y:0,y,y),h.setRenderTarget(r),g&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fo||e.mapping===Bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new zn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ia(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Cp[(r-o-1)%Cp.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new zn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),g=o/v,m=isFinite(o)?1+Math.floor(h*g):Cr;m>Cr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);const d=[];let _=0;for(let A=0;A<Cr;++A){const I=A/g,W=Math.exp(-I*I/2);d.push(W),A===0?_+=W:A<m&&(_+=2*W)}for(let A=0;A<d.length;A++)d[A]=d[A]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const x=this._sizeLods[r],T=3*x*(r>y-_o?r-y+_o:0),R=4*(this._cubeSize-x);Ia(n,T,R,3*x,2*x),l.setRenderTarget(n),l.render(u,Yu)}}function SE(t){const e=[],n=[],i=[];let r=t;const o=t-_o+1+Tp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-_o?l=Tp[s-t+_o-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,g=3,m=2,d=1,_=new Float32Array(g*v*p),y=new Float32Array(m*v*p),x=new Float32Array(d*v*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,I=R>2?0:-1,W=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];_.set(W,g*v*R),y.set(f,m*v*R);const S=[R,R,R,R,R,R];x.set(S,d*v*R)}const T=new dr;T.setAttribute("position",new hi(_,g)),T.setAttribute("uv",new hi(y,m)),T.setAttribute("faceIndex",new hi(x,d)),e.push(T),r>_o&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pp(t,e,n){const i=new Vr(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ME(t,e,n){const i=new Float32Array(Cr),r=new ae(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function bp(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Lp(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sh||l===ah,h=l===Fo||l===Bo;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Rp(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new Rp(t)),u=c?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function wE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ja("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TE(t,e,n,i){const r={},o=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}f.removeEventListener("dispose",s),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=u.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,v=u.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let y=0,x=_.length;y<x;y+=3){const T=_[y+0],R=_[y+1],A=_[y+2];f.push(T,R,R,A,A,T)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const T=y+0,R=y+1,A=y+2;f.push(T,R,R,A,A,T)}}else return;const m=new(Ag(f)?Ng:Ig)(f,1);m.version=g;const d=o.get(u);d&&e.remove(d),o.set(u,m)}function h(u){const f=o.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function AE(t,e,n){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,p){t.drawElements(i,p,o,f*s),n.update(p,i,1)}function c(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,o,f*s,v),n.update(p,i,v))}function h(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];n.update(m,i,1)}function u(f,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/s,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,f,0,g,0,v);let d=0;for(let _=0;_<v;_++)d+=p[_];for(let _=0;_<g.length;_++)n.update(d,i,g[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function CE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RE(t,e,n){const i=new WeakMap,r=new Ot;function o(s,a,l){const c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*R*4*u),I=new Rg(A,T,R,u);I.type=Ti,I.needsUpdate=!0;const W=x*4;for(let M=0;M<u;M++){const F=d[M],U=_[M],Y=y[M],$=T*R*4*M;for(let Q=0;Q<F.count;Q++){const O=Q*W;v===!0&&(r.fromBufferAttribute(F,Q),A[$+O+0]=r.x,A[$+O+1]=r.y,A[$+O+2]=r.z,A[$+O+3]=0),g===!0&&(r.fromBufferAttribute(U,Q),A[$+O+4]=r.x,A[$+O+5]=r.y,A[$+O+6]=r.z,A[$+O+7]=0),m===!0&&(r.fromBufferAttribute(Y,Q),A[$+O+8]=r.x,A[$+O+9]=r.y,A[$+O+10]=r.z,A[$+O+11]=Y.itemSize===4?r.w:1)}}f={count:u,texture:I,size:new St(T,R)},i.set(a,f),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function PE(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class Og extends wn{constructor(e,n,i,r,o,s,a,l,c,h=Ao){if(h!==Ao&&h!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ao&&(i=kr),i===void 0&&h===zo&&(i=Oo),super(null,r,o,s,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zg=new wn,Ip=new Og(1,1),kg=new Rg,Vg=new px,Hg=new Fg,Np=[],Dp=[],Up=new Float32Array(16),Fp=new Float32Array(9),Bp=new Float32Array(4);function qo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Np[r];if(o===void 0&&(o=new Float32Array(r),Np[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $l(t,e){let n=Dp[e];n===void 0&&(n=new Int32Array(e),Dp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,i))return;Bp.set(i),t.uniformMatrix2fv(this.addr,!1,Bp),$t(n,i)}}function UE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,i))return;Fp.set(i),t.uniformMatrix3fv(this.addr,!1,Fp),$t(n,i)}}function FE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,i))return;Up.set(i),t.uniformMatrix4fv(this.addr,!1,Up),$t(n,i)}}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Ip.compareFunction=Tg,o=Ip):o=zg,n.setTexture2D(e||o,r)}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vg,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Hg,r)}function jE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kg,r)}function $E(t){switch(t){case 5126:return bE;case 35664:return LE;case 35665:return IE;case 35666:return NE;case 35674:return DE;case 35675:return UE;case 35676:return FE;case 5124:case 35670:return BE;case 35667:case 35671:return OE;case 35668:case 35672:return zE;case 35669:case 35673:return kE;case 5125:return VE;case 36294:return HE;case 36295:return GE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return XE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return jE}}function KE(t,e){t.uniform1fv(this.addr,e)}function ZE(t,e){const n=qo(e,this.size,2);t.uniform2fv(this.addr,n)}function QE(t,e){const n=qo(e,this.size,3);t.uniform3fv(this.addr,n)}function JE(t,e){const n=qo(e,this.size,4);t.uniform4fv(this.addr,n)}function ew(t,e){const n=qo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tw(t,e){const n=qo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nw(t,e){const n=qo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iw(t,e){t.uniform1iv(this.addr,e)}function rw(t,e){t.uniform2iv(this.addr,e)}function ow(t,e){t.uniform3iv(this.addr,e)}function sw(t,e){t.uniform4iv(this.addr,e)}function aw(t,e){t.uniform1uiv(this.addr,e)}function lw(t,e){t.uniform2uiv(this.addr,e)}function uw(t,e){t.uniform3uiv(this.addr,e)}function cw(t,e){t.uniform4uiv(this.addr,e)}function hw(t,e,n){const i=this.cache,r=e.length,o=$l(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||zg,o[s])}function fw(t,e,n){const i=this.cache,r=e.length,o=$l(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Vg,o[s])}function dw(t,e,n){const i=this.cache,r=e.length,o=$l(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Hg,o[s])}function pw(t,e,n){const i=this.cache,r=e.length,o=$l(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||kg,o[s])}function mw(t){switch(t){case 5126:return KE;case 35664:return ZE;case 35665:return QE;case 35666:return JE;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return ow;case 35669:case 35673:return sw;case 5125:return aw;case 36294:return lw;case 36295:return uw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return pw}}class vw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$E(n.type)}}class gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mw(n.type)}}class _w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Qu=/(\w+)(\])?(\[|\.)?/g;function Op(t,e){t.seq.push(e),t.map[e.id]=e}function yw(t,e,n){const i=t.name,r=i.length;for(Qu.lastIndex=0;;){const o=Qu.exec(i),s=Qu.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Op(n,c===void 0?new vw(a,t,e):new gw(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new _w(a),Op(n,u)),n=u}}}class el{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);yw(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function zp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xw=37297;let Sw=0;function Mw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function Ew(t){const e=xt.getPrimaries(xt.workingColorSpace),n=xt.getPrimaries(t);let i;switch(e===n?i="":e===Cl&&n===Al?i="LinearDisplayP3ToLinearSRGB":e===Al&&n===Cl&&(i="LinearSRGBToLinearDisplayP3"),t){case fr:case Yl:return[i,"LinearTransferOETF"];case si:case kf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Mw(t.getShaderSource(e),s)}else return r}function ww(t,e){const n=Ew(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Tw(t,e){let n;switch(e){case ky:n="Linear";break;case Vy:n="Reinhard";break;case Hy:n="Cineon";break;case Gy:n="ACESFilmic";break;case Xy:n="AgX";break;case qy:n="Neutral";break;case Wy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Na=new ae;function Aw(){xt.getLuminanceCoefficients(Na);const t=Na.x.toFixed(4),e=Na.y.toFixed(4),n=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Rw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Pw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function fs(t){return t!==""}function Vp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(t){return t.replace(bw,Iw)}const Lw=new Map;function Iw(t,e){let n=ut[e];if(n===void 0){const i=Lw.get(e);if(i!==void 0)n=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bh(n)}const Nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(t){return t.replace(Nw,Dw)}function Dw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Wp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Fw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Fo:case Bo:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Bo:e="ENVMAP_MODE_REFRACTION";break}return e}function Ow(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fg:e="ENVMAP_BLENDING_MULTIPLY";break;case Oy:e="ENVMAP_BLENDING_MIX";break;case zy:e="ENVMAP_BLENDING_ADD";break}return e}function zw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kw(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=Uw(n),c=Fw(n),h=Bw(n),u=Ow(n),f=zw(n),p=Cw(n),v=Rw(o),g=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fs).join(`
`),d.length>0&&(d+=`
`)):(m=[Wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),d=[Wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?ut.tonemapping_pars_fragment:"",n.toneMapping!==rr?Tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,ww("linearToOutputTexel",n.outputColorSpace),Aw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fs).join(`
`)),s=Bh(s),s=Vp(s,n),s=Hp(s,n),a=Bh(a),a=Vp(a,n),a=Hp(a,n),s=Gp(s),a=Gp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=_+m+s,x=_+d+a,T=zp(r,r.VERTEX_SHADER,y),R=zp(r,r.FRAGMENT_SHADER,x);r.attachShader(g,T),r.attachShader(g,R),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(M){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(T).trim(),Y=r.getShaderInfoLog(R).trim();let $=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,T,R);else{const O=kp(r,T,"vertex"),C=kp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+F+`
`+O+`
`+C)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||Y==="")&&(Q=!1);Q&&(M.diagnostics={runnable:$,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(T),r.deleteShader(R),I=new el(r,g),W=Pw(r,g)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let W;this.getAttributes=function(){return W===void 0&&A(this),W};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,xw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=R,this}let Vw=0;class Hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Gw(e),n.set(e,i)),i}}class Gw{constructor(e){this.id=Vw++,this.code=e,this.usedTimes=0}}function Ww(t,e,n,i,r,o,s){const a=new Pg,l=new Hw,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,M,F,U,Y){const $=U.fog,Q=Y.geometry,O=S.isMeshStandardMaterial?U.environment:null,C=(S.isMeshStandardMaterial?n:e).get(S.envMap||O),X=C&&C.mapping===ql?C.image.height:null,H=g[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const D=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,K=D!==void 0?D.length:0;let z=0;Q.morphAttributes.position!==void 0&&(z=1),Q.morphAttributes.normal!==void 0&&(z=2),Q.morphAttributes.color!==void 0&&(z=3);let P,b,V,ee;if(H){const vt=ai[H];P=vt.vertexShader,b=vt.fragmentShader}else P=S.vertexShader,b=S.fragmentShader,l.update(S),V=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);const te=t.getRenderTarget(),q=Y.isInstancedMesh===!0,ie=Y.isBatchedMesh===!0,he=!!S.map,we=!!S.matcap,N=!!C,Re=!!S.aoMap,oe=!!S.lightMap,ce=!!S.bumpMap,Ue=!!S.normalMap,ke=!!S.displacementMap,Ge=!!S.emissiveMap,L=!!S.metalnessMap,E=!!S.roughnessMap,J=S.anisotropy>0,se=S.clearcoat>0,fe=S.dispersion>0,re=S.iridescence>0,Ie=S.sheen>0,_e=S.transmission>0,be=J&&!!S.anisotropyMap,rt=se&&!!S.clearcoatMap,Me=se&&!!S.clearcoatNormalMap,We=se&&!!S.clearcoatRoughnessMap,Qe=re&&!!S.iridescenceMap,Ze=re&&!!S.iridescenceThicknessMap,ze=Ie&&!!S.sheenColorMap,st=Ie&&!!S.sheenRoughnessMap,tt=!!S.specularMap,dt=!!S.specularColorMap,j=!!S.specularIntensityMap,Fe=_e&&!!S.transmissionMap,ue=_e&&!!S.thicknessMap,pe=!!S.gradientMap,Pe=!!S.alphaMap,Ve=S.alphaTest>0,at=!!S.alphaHash,wt=!!S.extensions;let kt=rr;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(kt=t.toneMapping);const ft={shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:P,fragmentShader:b,defines:S.defines,customVertexShaderID:V,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:ie,batchingColor:ie&&Y._colorsTexture!==null,instancing:q,instancingColor:q&&Y.instanceColor!==null,instancingMorph:q&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:fr,alphaToCoverage:!!S.alphaToCoverage,map:he,matcap:we,envMap:N,envMapMode:N&&C.mapping,envMapCubeUVHeight:X,aoMap:Re,lightMap:oe,bumpMap:ce,normalMap:Ue,displacementMap:p&&ke,emissiveMap:Ge,normalMapObjectSpace:Ue&&S.normalMapType===Ky,normalMapTangentSpace:Ue&&S.normalMapType===wg,metalnessMap:L,roughnessMap:E,anisotropy:J,anisotropyMap:be,clearcoat:se,clearcoatMap:rt,clearcoatNormalMap:Me,clearcoatRoughnessMap:We,dispersion:fe,iridescence:re,iridescenceMap:Qe,iridescenceThicknessMap:Ze,sheen:Ie,sheenColorMap:ze,sheenRoughnessMap:st,specularMap:tt,specularColorMap:dt,specularIntensityMap:j,transmission:_e,transmissionMap:Fe,thicknessMap:ue,gradientMap:pe,opaque:S.transparent===!1&&S.blending===To&&S.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Ve,alphaHash:at,combine:S.combine,mapUv:he&&m(S.map.channel),aoMapUv:Re&&m(S.aoMap.channel),lightMapUv:oe&&m(S.lightMap.channel),bumpMapUv:ce&&m(S.bumpMap.channel),normalMapUv:Ue&&m(S.normalMap.channel),displacementMapUv:ke&&m(S.displacementMap.channel),emissiveMapUv:Ge&&m(S.emissiveMap.channel),metalnessMapUv:L&&m(S.metalnessMap.channel),roughnessMapUv:E&&m(S.roughnessMap.channel),anisotropyMapUv:be&&m(S.anisotropyMap.channel),clearcoatMapUv:rt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Me&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:st&&m(S.sheenRoughnessMap.channel),specularMapUv:tt&&m(S.specularMap.channel),specularColorMapUv:dt&&m(S.specularColorMap.channel),specularIntensityMapUv:j&&m(S.specularIntensityMap.channel),transmissionMapUv:Fe&&m(S.transmissionMap.channel),thicknessMapUv:ue&&m(S.thicknessMap.channel),alphaMapUv:Pe&&m(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ue||J),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Q.attributes.uv&&(he||Pe),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:z,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:kt,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mi,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:wt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&S.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function _(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)M.push(F),M.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),S.push(a.mask)}function T(S){const M=g[S.type];let F;if(M){const U=ai[M];F=Cx.clone(U.uniforms)}else F=S.uniforms;return F}function R(S,M){let F;for(let U=0,Y=h.length;U<Y;U++){const $=h[U];if($.cacheKey===M){F=$,++F.usedTimes;break}}return F===void 0&&(F=new kw(t,M,S,o),h.push(F)),F}function A(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function W(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:T,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:W}}function Xw(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function qw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qp(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(u,f,p,v,g,m){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},t[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=g,d.group=m),e++,d}function a(u,f,p,v,g,m){const d=s(u,f,p,v,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(u,f,p,v,g,m){const d=s(u,f,p,v,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(u,f){n.length>1&&n.sort(u||qw),i.length>1&&i.sort(f||Xp),r.length>1&&r.sort(f||Xp)}function h(){for(let u=e,f=t.length;u<f;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:h,sort:c}}function Yw(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new qp,t.set(i,[s])):r>=o.length?(s=new qp,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ae,color:new yt};break;case"SpotLight":n={position:new ae,direction:new ae,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ae,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ae,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return t[e.id]=n,n}}}function $w(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Kw=0;function Zw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Qw(t){const e=new jw,n=$w(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ae);const r=new ae,o=new zt,s=new zt;function a(c){let h=0,u=0,f=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let p=0,v=0,g=0,m=0,d=0,_=0,y=0,x=0,T=0,R=0,A=0;c.sort(Zw);for(let W=0,S=c.length;W<S;W++){const M=c[W],F=M.color,U=M.intensity,Y=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=F.r*U,u+=F.g*U,f+=F.b*U;else if(M.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(M.sh.coefficients[Q],U);A++}else if(M.isDirectionalLight){const Q=e.get(M);if(Q.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const O=M.shadow,C=n.get(M);C.shadowIntensity=O.intensity,C.shadowBias=O.bias,C.shadowNormalBias=O.normalBias,C.shadowRadius=O.radius,C.shadowMapSize=O.mapSize,i.directionalShadow[p]=C,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=M.shadow.matrix,_++}i.directional[p]=Q,p++}else if(M.isSpotLight){const Q=e.get(M);Q.position.setFromMatrixPosition(M.matrixWorld),Q.color.copy(F).multiplyScalar(U),Q.distance=Y,Q.coneCos=Math.cos(M.angle),Q.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),Q.decay=M.decay,i.spot[g]=Q;const O=M.shadow;if(M.map&&(i.spotLightMap[T]=M.map,T++,O.updateMatrices(M),M.castShadow&&R++),i.spotLightMatrix[g]=O.matrix,M.castShadow){const C=n.get(M);C.shadowIntensity=O.intensity,C.shadowBias=O.bias,C.shadowNormalBias=O.normalBias,C.shadowRadius=O.radius,C.shadowMapSize=O.mapSize,i.spotShadow[g]=C,i.spotShadowMap[g]=$,x++}g++}else if(M.isRectAreaLight){const Q=e.get(M);Q.color.copy(F).multiplyScalar(U),Q.halfWidth.set(M.width*.5,0,0),Q.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=Q,m++}else if(M.isPointLight){const Q=e.get(M);if(Q.color.copy(M.color).multiplyScalar(M.intensity),Q.distance=M.distance,Q.decay=M.decay,M.castShadow){const O=M.shadow,C=n.get(M);C.shadowIntensity=O.intensity,C.shadowBias=O.bias,C.shadowNormalBias=O.normalBias,C.shadowRadius=O.radius,C.shadowMapSize=O.mapSize,C.shadowCameraNear=O.camera.near,C.shadowCameraFar=O.camera.far,i.pointShadow[v]=C,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=M.shadow.matrix,y++}i.point[v]=Q,v++}else if(M.isHemisphereLight){const Q=e.get(M);Q.skyColor.copy(M.color).multiplyScalar(U),Q.groundColor.copy(M.groundColor).multiplyScalar(U),i.hemi[d]=Q,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==_||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==T||I.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,I.directionalLength=p,I.pointLength=v,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=_,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=T,I.numLightProbes=A,i.version=Kw++)}function l(c,h){let u=0,f=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const y=c[d];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),s.identity(),o.copy(y.matrixWorld),o.premultiply(m),s.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),v++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Yp(t){const e=new Qw(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function o(h){n.push(h)}function s(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Jw(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Yp(t),e.set(r,[a])):o>=s.length?(a=new Yp(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class e1 extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r1(t,e,n){let i=new Hf;const r=new St,o=new St,s=new Ot,a=new e1({depthPacking:$y}),l=new t1,c={},h=n.maxTextureSize,u={[ar]:En,[En]:ar,[Mi]:Mi},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:n1,fragmentShader:i1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new dr;v.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let d=this.type;this.render=function(R,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const W=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ir),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=d!==yi&&this.type===yi,Y=d===yi&&this.type!==yi;for(let $=0,Q=R.length;$<Q;$++){const O=R[$],C=O.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const X=C.getFrameExtents();if(r.multiply(X),o.copy(C.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/X.x),r.x=o.x*X.x,C.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/X.y),r.y=o.y*X.y,C.mapSize.y=o.y)),C.map===null||U===!0||Y===!0){const D=this.type!==yi?{minFilter:On,magFilter:On}:{};C.map!==null&&C.map.dispose(),C.map=new Vr(r.x,r.y,D),C.map.texture.name=O.name+".shadowMap",C.camera.updateProjectionMatrix()}t.setRenderTarget(C.map),t.clear();const H=C.getViewportCount();for(let D=0;D<H;D++){const K=C.getViewport(D);s.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),F.viewport(s),C.updateMatrices(O,D),i=C.getFrustum(),x(A,I,C.camera,O,this.type)}C.isPointLightShadow!==!0&&this.type===yi&&_(C,I),C.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(W,S,M)};function _(R,A){const I=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Vr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,I,f,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,I,p,g,null)}function y(R,A,I,W){let S=null;const M=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)S=M;else if(S=I.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=S.uuid,U=A.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let $=Y[U];$===void 0&&($=S.clone(),Y[U]=$,A.addEventListener("dispose",T)),S=$}if(S.visible=A.visible,S.wireframe=A.wireframe,W===yi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=t.properties.get(S);F.light=I}return S}function x(R,A,I,W,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===yi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const U=e.update(R),Y=R.material;if(Array.isArray(Y)){const $=U.groups;for(let Q=0,O=$.length;Q<O;Q++){const C=$[Q],X=Y[C.materialIndex];if(X&&X.visible){const H=y(R,X,W,S);R.onBeforeShadow(t,R,A,I,U,H,C),t.renderBufferDirect(I,null,U,H,R,C),R.onAfterShadow(t,R,A,I,U,H,C)}}}else if(Y.visible){const $=y(R,Y,W,S);R.onBeforeShadow(t,R,A,I,U,$,null),t.renderBufferDirect(I,null,U,$,R,null),R.onAfterShadow(t,R,A,I,U,$,null)}}const F=R.children;for(let U=0,Y=F.length;U<Y;U++)x(F[U],A,I,W,S)}function T(R){R.target.removeEventListener("dispose",T);for(const I in c){const W=c[I],S=R.target.uuid;S in W&&(W[S].dispose(),delete W[S])}}}const o1={[Jc]:eh,[th]:rh,[nh]:oh,[Uo]:ih,[eh]:Jc,[rh]:th,[oh]:nh,[ih]:Uo};function s1(t){function e(){let j=!1;const Fe=new Ot;let ue=null;const pe=new Ot(0,0,0,0);return{setMask:function(Pe){ue!==Pe&&!j&&(t.colorMask(Pe,Pe,Pe,Pe),ue=Pe)},setLocked:function(Pe){j=Pe},setClear:function(Pe,Ve,at,wt,kt){kt===!0&&(Pe*=wt,Ve*=wt,at*=wt),Fe.set(Pe,Ve,at,wt),pe.equals(Fe)===!1&&(t.clearColor(Pe,Ve,at,wt),pe.copy(Fe))},reset:function(){j=!1,ue=null,pe.set(-1,0,0,0)}}}function n(){let j=!1,Fe=!1,ue=null,pe=null,Pe=null;return{setReversed:function(Ve){Fe=Ve},setTest:function(Ve){Ve?V(t.DEPTH_TEST):ee(t.DEPTH_TEST)},setMask:function(Ve){ue!==Ve&&!j&&(t.depthMask(Ve),ue=Ve)},setFunc:function(Ve){if(Fe&&(Ve=o1[Ve]),pe!==Ve){switch(Ve){case Jc:t.depthFunc(t.NEVER);break;case eh:t.depthFunc(t.ALWAYS);break;case th:t.depthFunc(t.LESS);break;case Uo:t.depthFunc(t.LEQUAL);break;case nh:t.depthFunc(t.EQUAL);break;case ih:t.depthFunc(t.GEQUAL);break;case rh:t.depthFunc(t.GREATER);break;case oh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Ve}},setLocked:function(Ve){j=Ve},setClear:function(Ve){Pe!==Ve&&(t.clearDepth(Ve),Pe=Ve)},reset:function(){j=!1,ue=null,pe=null,Pe=null}}}function i(){let j=!1,Fe=null,ue=null,pe=null,Pe=null,Ve=null,at=null,wt=null,kt=null;return{setTest:function(ft){j||(ft?V(t.STENCIL_TEST):ee(t.STENCIL_TEST))},setMask:function(ft){Fe!==ft&&!j&&(t.stencilMask(ft),Fe=ft)},setFunc:function(ft,vt,le){(ue!==ft||pe!==vt||Pe!==le)&&(t.stencilFunc(ft,vt,le),ue=ft,pe=vt,Pe=le)},setOp:function(ft,vt,le){(Ve!==ft||at!==vt||wt!==le)&&(t.stencilOp(ft,vt,le),Ve=ft,at=vt,wt=le)},setLocked:function(ft){j=ft},setClear:function(ft){kt!==ft&&(t.clearStencil(ft),kt=ft)},reset:function(){j=!1,Fe=null,ue=null,pe=null,Pe=null,Ve=null,at=null,wt=null,kt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],p=null,v=!1,g=null,m=null,d=null,_=null,y=null,x=null,T=null,R=new yt(0,0,0),A=0,I=!1,W=null,S=null,M=null,F=null,U=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(O)[1]),$=Q>=1):O.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),$=Q>=2);let C=null,X={};const H=t.getParameter(t.SCISSOR_BOX),D=t.getParameter(t.VIEWPORT),K=new Ot().fromArray(H),z=new Ot().fromArray(D);function P(j,Fe,ue,pe){const Pe=new Uint8Array(4),Ve=t.createTexture();t.bindTexture(j,Ve),t.texParameteri(j,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(j,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<ue;at++)j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?t.texImage3D(Fe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(Fe+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return Ve}const b={};b[t.TEXTURE_2D]=P(t.TEXTURE_2D,t.TEXTURE_2D,1),b[t.TEXTURE_CUBE_MAP]=P(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),b[t.TEXTURE_2D_ARRAY]=P(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),b[t.TEXTURE_3D]=P(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),V(t.DEPTH_TEST),o.setFunc(Uo),oe(!1),ce(tp),V(t.CULL_FACE),N(ir);function V(j){c[j]!==!0&&(t.enable(j),c[j]=!0)}function ee(j){c[j]!==!1&&(t.disable(j),c[j]=!1)}function te(j,Fe){return h[j]!==Fe?(t.bindFramebuffer(j,Fe),h[j]=Fe,j===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Fe),j===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Fe),!0):!1}function q(j,Fe){let ue=f,pe=!1;if(j){ue=u.get(Fe),ue===void 0&&(ue=[],u.set(Fe,ue));const Pe=j.textures;if(ue.length!==Pe.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Ve=0,at=Pe.length;Ve<at;Ve++)ue[Ve]=t.COLOR_ATTACHMENT0+Ve;ue.length=Pe.length,pe=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,pe=!0);pe&&t.drawBuffers(ue)}function ie(j){return p!==j?(t.useProgram(j),p=j,!0):!1}const he={[Ar]:t.FUNC_ADD,[Sy]:t.FUNC_SUBTRACT,[My]:t.FUNC_REVERSE_SUBTRACT};he[Ey]=t.MIN,he[wy]=t.MAX;const we={[Ty]:t.ZERO,[Ay]:t.ONE,[Cy]:t.SRC_COLOR,[Zc]:t.SRC_ALPHA,[Ny]:t.SRC_ALPHA_SATURATE,[Ly]:t.DST_COLOR,[Py]:t.DST_ALPHA,[Ry]:t.ONE_MINUS_SRC_COLOR,[Qc]:t.ONE_MINUS_SRC_ALPHA,[Iy]:t.ONE_MINUS_DST_COLOR,[by]:t.ONE_MINUS_DST_ALPHA,[Dy]:t.CONSTANT_COLOR,[Uy]:t.ONE_MINUS_CONSTANT_COLOR,[Fy]:t.CONSTANT_ALPHA,[By]:t.ONE_MINUS_CONSTANT_ALPHA};function N(j,Fe,ue,pe,Pe,Ve,at,wt,kt,ft){if(j===ir){v===!0&&(ee(t.BLEND),v=!1);return}if(v===!1&&(V(t.BLEND),v=!0),j!==xy){if(j!==g||ft!==I){if((m!==Ar||y!==Ar)&&(t.blendEquation(t.FUNC_ADD),m=Ar,y=Ar),ft)switch(j){case To:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case np:t.blendFunc(t.ONE,t.ONE);break;case ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case To:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case np:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}d=null,_=null,x=null,T=null,R.set(0,0,0),A=0,g=j,I=ft}return}Pe=Pe||Fe,Ve=Ve||ue,at=at||pe,(Fe!==m||Pe!==y)&&(t.blendEquationSeparate(he[Fe],he[Pe]),m=Fe,y=Pe),(ue!==d||pe!==_||Ve!==x||at!==T)&&(t.blendFuncSeparate(we[ue],we[pe],we[Ve],we[at]),d=ue,_=pe,x=Ve,T=at),(wt.equals(R)===!1||kt!==A)&&(t.blendColor(wt.r,wt.g,wt.b,kt),R.copy(wt),A=kt),g=j,I=!1}function Re(j,Fe){j.side===Mi?ee(t.CULL_FACE):V(t.CULL_FACE);let ue=j.side===En;Fe&&(ue=!ue),oe(ue),j.blending===To&&j.transparent===!1?N(ir):N(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const pe=j.stencilWrite;s.setTest(pe),pe&&(s.setMask(j.stencilWriteMask),s.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),s.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ke(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?V(t.SAMPLE_ALPHA_TO_COVERAGE):ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function oe(j){W!==j&&(j?t.frontFace(t.CW):t.frontFace(t.CCW),W=j)}function ce(j){j!==gy?(V(t.CULL_FACE),j!==S&&(j===tp?t.cullFace(t.BACK):j===_y?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ee(t.CULL_FACE),S=j}function Ue(j){j!==M&&($&&t.lineWidth(j),M=j)}function ke(j,Fe,ue){j?(V(t.POLYGON_OFFSET_FILL),(F!==Fe||U!==ue)&&(t.polygonOffset(Fe,ue),F=Fe,U=ue)):ee(t.POLYGON_OFFSET_FILL)}function Ge(j){j?V(t.SCISSOR_TEST):ee(t.SCISSOR_TEST)}function L(j){j===void 0&&(j=t.TEXTURE0+Y-1),C!==j&&(t.activeTexture(j),C=j)}function E(j,Fe,ue){ue===void 0&&(C===null?ue=t.TEXTURE0+Y-1:ue=C);let pe=X[ue];pe===void 0&&(pe={type:void 0,texture:void 0},X[ue]=pe),(pe.type!==j||pe.texture!==Fe)&&(C!==ue&&(t.activeTexture(ue),C=ue),t.bindTexture(j,Fe||b[j]),pe.type=j,pe.texture=Fe)}function J(){const j=X[C];j!==void 0&&j.type!==void 0&&(t.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function rt(){try{t.texStorage2D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{t.texStorage3D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function We(){try{t.texImage2D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(){try{t.texImage3D.apply(t,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(j){K.equals(j)===!1&&(t.scissor(j.x,j.y,j.z,j.w),K.copy(j))}function ze(j){z.equals(j)===!1&&(t.viewport(j.x,j.y,j.z,j.w),z.copy(j))}function st(j,Fe){let ue=l.get(Fe);ue===void 0&&(ue=new WeakMap,l.set(Fe,ue));let pe=ue.get(j);pe===void 0&&(pe=t.getUniformBlockIndex(Fe,j.name),ue.set(j,pe))}function tt(j,Fe){const pe=l.get(Fe).get(j);a.get(Fe)!==pe&&(t.uniformBlockBinding(Fe,pe,j.__bindingPointIndex),a.set(Fe,pe))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},C=null,X={},h={},u=new WeakMap,f=[],p=null,v=!1,g=null,m=null,d=null,_=null,y=null,x=null,T=null,R=new yt(0,0,0),A=0,I=!1,W=null,S=null,M=null,F=null,U=null,K.set(0,0,t.canvas.width,t.canvas.height),z.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:V,disable:ee,bindFramebuffer:te,drawBuffers:q,useProgram:ie,setBlending:N,setMaterial:Re,setFlipSided:oe,setCullFace:ce,setLineWidth:Ue,setPolygonOffset:ke,setScissorTest:Ge,activeTexture:L,bindTexture:E,unbindTexture:J,compressedTexImage2D:se,compressedTexImage3D:fe,texImage2D:We,texImage3D:Qe,updateUBOMapping:st,uniformBlockBinding:tt,texStorage2D:rt,texStorage3D:Me,texSubImage2D:re,texSubImage3D:Ie,compressedTexSubImage2D:_e,compressedTexSubImage3D:be,scissor:Ze,viewport:ze,reset:dt}}function jp(t,e,n,i){const r=a1(i);switch(n){case gg:return t*e;case yg:return t*e;case xg:return t*e*2;case Sg:return t*e/r.components*r.byteLength;case Bf:return t*e/r.components*r.byteLength;case Mg:return t*e*2/r.components*r.byteLength;case Of:return t*e*2/r.components*r.byteLength;case _g:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case zf:return t*e*4/r.components*r.byteLength;case ja:case $a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:case dh:return Math.max(t,16)*Math.max(e,8)/4;case ch:case fh:return Math.max(t,8)*Math.max(e,8)/2;case ph:case mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qa:case Lh:case Ih:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Eg:case Nh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dh:case Uh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function a1(t){switch(t){case Ii:case pg:return{byteLength:1,components:1};case zs:case mg:case Xs:return{byteLength:2,components:1};case Uf:case Ff:return{byteLength:2,components:4};case kr:case Df:case Ti:return{byteLength:4,components:1};case vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function l1(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,E){return p?new OffscreenCanvas(L,E):Pl("canvas")}function g(L,E,J){let se=1;const fe=Ge(L);if((fe.width>J||fe.height>J)&&(se=J/Math.max(fe.width,fe.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(se*fe.width),Ie=Math.floor(se*fe.height);u===void 0&&(u=v(re,Ie));const _e=E?v(re,Ie):u;return _e.width=re,_e.height=Ie,_e.getContext("2d").drawImage(L,0,0,re,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+re+"x"+Ie+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==On&&L.minFilter!==Qn}function d(L){t.generateMipmap(L)}function _(L,E,J,se,fe=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=E;if(E===t.RED&&(J===t.FLOAT&&(re=t.R32F),J===t.HALF_FLOAT&&(re=t.R16F),J===t.UNSIGNED_BYTE&&(re=t.R8)),E===t.RED_INTEGER&&(J===t.UNSIGNED_BYTE&&(re=t.R8UI),J===t.UNSIGNED_SHORT&&(re=t.R16UI),J===t.UNSIGNED_INT&&(re=t.R32UI),J===t.BYTE&&(re=t.R8I),J===t.SHORT&&(re=t.R16I),J===t.INT&&(re=t.R32I)),E===t.RG&&(J===t.FLOAT&&(re=t.RG32F),J===t.HALF_FLOAT&&(re=t.RG16F),J===t.UNSIGNED_BYTE&&(re=t.RG8)),E===t.RG_INTEGER&&(J===t.UNSIGNED_BYTE&&(re=t.RG8UI),J===t.UNSIGNED_SHORT&&(re=t.RG16UI),J===t.UNSIGNED_INT&&(re=t.RG32UI),J===t.BYTE&&(re=t.RG8I),J===t.SHORT&&(re=t.RG16I),J===t.INT&&(re=t.RG32I)),E===t.RGB_INTEGER&&(J===t.UNSIGNED_BYTE&&(re=t.RGB8UI),J===t.UNSIGNED_SHORT&&(re=t.RGB16UI),J===t.UNSIGNED_INT&&(re=t.RGB32UI),J===t.BYTE&&(re=t.RGB8I),J===t.SHORT&&(re=t.RGB16I),J===t.INT&&(re=t.RGB32I)),E===t.RGBA_INTEGER&&(J===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),J===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),J===t.UNSIGNED_INT&&(re=t.RGBA32UI),J===t.BYTE&&(re=t.RGBA8I),J===t.SHORT&&(re=t.RGBA16I),J===t.INT&&(re=t.RGBA32I)),E===t.RGB&&J===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),E===t.RGBA){const Ie=fe?Tl:xt.getTransfer(se);J===t.FLOAT&&(re=t.RGBA32F),J===t.HALF_FLOAT&&(re=t.RGBA16F),J===t.UNSIGNED_BYTE&&(re=Ie===Pt?t.SRGB8_ALPHA8:t.RGBA8),J===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),J===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(L,E){let J;return L?E===null||E===kr||E===Oo?J=t.DEPTH24_STENCIL8:E===Ti?J=t.DEPTH32F_STENCIL8:E===zs&&(J=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===kr||E===Oo?J=t.DEPTH_COMPONENT24:E===Ti?J=t.DEPTH_COMPONENT32F:E===zs&&(J=t.DEPTH_COMPONENT16),J}function x(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==On&&L.minFilter!==Qn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function T(L){const E=L.target;E.removeEventListener("dispose",T),A(E),E.isVideoTexture&&h.delete(E)}function R(L){const E=L.target;E.removeEventListener("dispose",R),W(E)}function A(L){const E=i.get(L);if(E.__webglInit===void 0)return;const J=L.source,se=f.get(J);if(se){const fe=se[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(L),Object.keys(se).length===0&&f.delete(J)}i.remove(L)}function I(L){const E=i.get(L);t.deleteTexture(E.__webglTexture);const J=L.source,se=f.get(J);delete se[E.__cacheKey],s.memory.textures--}function W(L){const E=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let fe=0;fe<E.__webglFramebuffer[se].length;fe++)t.deleteFramebuffer(E.__webglFramebuffer[se][fe]);else t.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)t.deleteFramebuffer(E.__webglFramebuffer[se]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=L.textures;for(let se=0,fe=J.length;se<fe;se++){const re=i.get(J[se]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),i.remove(J[se])}i.remove(L)}let S=0;function M(){S=0}function F(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function U(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Y(L,E){const J=i.get(L);if(L.isVideoTexture&&Ue(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(J,L,E);return}}n.bindTexture(t.TEXTURE_2D,J.__webglTexture,t.TEXTURE0+E)}function $(L,E){const J=i.get(L);if(L.version>0&&J.__version!==L.version){z(J,L,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,J.__webglTexture,t.TEXTURE0+E)}function Q(L,E){const J=i.get(L);if(L.version>0&&J.__version!==L.version){z(J,L,E);return}n.bindTexture(t.TEXTURE_3D,J.__webglTexture,t.TEXTURE0+E)}function O(L,E){const J=i.get(L);if(L.version>0&&J.__version!==L.version){P(J,L,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture,t.TEXTURE0+E)}const C={[lh]:t.REPEAT,[Lr]:t.CLAMP_TO_EDGE,[uh]:t.MIRRORED_REPEAT},X={[On]:t.NEAREST,[Yy]:t.NEAREST_MIPMAP_NEAREST,[da]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[Eu]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR},H={[Zy]:t.NEVER,[ix]:t.ALWAYS,[Qy]:t.LESS,[Tg]:t.LEQUAL,[Jy]:t.EQUAL,[nx]:t.GEQUAL,[ex]:t.GREATER,[tx]:t.NOTEQUAL};function D(L,E){if(E.type===Ti&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Qn||E.magFilter===Eu||E.magFilter===da||E.magFilter===Ir||E.minFilter===Qn||E.minFilter===Eu||E.minFilter===da||E.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,C[E.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,C[E.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,C[E.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,X[E.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,X[E.minFilter]),E.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,H[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==da&&E.minFilter!==Ir||E.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function K(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));const se=E.source;let fe=f.get(se);fe===void 0&&(fe={},f.set(se,fe));const re=U(E);if(re!==L.__cacheKey){fe[re]===void 0&&(fe[re]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,J=!0),fe[re].usedTimes++;const Ie=fe[L.__cacheKey];Ie!==void 0&&(fe[L.__cacheKey].usedTimes--,Ie.usedTimes===0&&I(E)),L.__cacheKey=re,L.__webglTexture=fe[re].texture}return J}function z(L,E,J){let se=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=t.TEXTURE_3D);const fe=K(L,E),re=E.source;n.bindTexture(se,L.__webglTexture,t.TEXTURE0+J);const Ie=i.get(re);if(re.version!==Ie.__version||fe===!0){n.activeTexture(t.TEXTURE0+J);const _e=xt.getPrimaries(xt.workingColorSpace),be=E.colorSpace===qi?null:xt.getPrimaries(E.colorSpace),rt=E.colorSpace===qi||_e===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=g(E.image,!1,r.maxTextureSize);Me=ke(E,Me);const We=o.convert(E.format,E.colorSpace),Qe=o.convert(E.type);let Ze=_(E.internalFormat,We,Qe,E.colorSpace,E.isVideoTexture);D(se,E);let ze;const st=E.mipmaps,tt=E.isVideoTexture!==!0,dt=Ie.__version===void 0||fe===!0,j=re.dataReady,Fe=x(E,Me);if(E.isDepthTexture)Ze=y(E.format===zo,E.type),dt&&(tt?n.texStorage2D(t.TEXTURE_2D,1,Ze,Me.width,Me.height):n.texImage2D(t.TEXTURE_2D,0,Ze,Me.width,Me.height,0,We,Qe,null));else if(E.isDataTexture)if(st.length>0){tt&&dt&&n.texStorage2D(t.TEXTURE_2D,Fe,Ze,st[0].width,st[0].height);for(let ue=0,pe=st.length;ue<pe;ue++)ze=st[ue],tt?j&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,ze.width,ze.height,We,Qe,ze.data):n.texImage2D(t.TEXTURE_2D,ue,Ze,ze.width,ze.height,0,We,Qe,ze.data);E.generateMipmaps=!1}else tt?(dt&&n.texStorage2D(t.TEXTURE_2D,Fe,Ze,Me.width,Me.height),j&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me.width,Me.height,We,Qe,Me.data)):n.texImage2D(t.TEXTURE_2D,0,Ze,Me.width,Me.height,0,We,Qe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Ze,st[0].width,st[0].height,Me.depth);for(let ue=0,pe=st.length;ue<pe;ue++)if(ze=st[ue],E.format!==ei)if(We!==null)if(tt){if(j)if(E.layerUpdates.size>0){const Pe=jp(ze.width,ze.height,E.format,E.type);for(const Ve of E.layerUpdates){const at=ze.data.subarray(Ve*Pe/ze.data.BYTES_PER_ELEMENT,(Ve+1)*Pe/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,Ve,ze.width,ze.height,1,We,at,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Me.depth,We,ze.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,Ze,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?j&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Me.depth,We,Qe,ze.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,Ze,ze.width,ze.height,Me.depth,0,We,Qe,ze.data)}else{tt&&dt&&n.texStorage2D(t.TEXTURE_2D,Fe,Ze,st[0].width,st[0].height);for(let ue=0,pe=st.length;ue<pe;ue++)ze=st[ue],E.format!==ei?We!==null?tt?j&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,ze.width,ze.height,We,ze.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,Ze,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?j&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,ze.width,ze.height,We,Qe,ze.data):n.texImage2D(t.TEXTURE_2D,ue,Ze,ze.width,ze.height,0,We,Qe,ze.data)}else if(E.isDataArrayTexture)if(tt){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Ze,Me.width,Me.height,Me.depth),j)if(E.layerUpdates.size>0){const ue=jp(Me.width,Me.height,E.format,E.type);for(const pe of E.layerUpdates){const Pe=Me.data.subarray(pe*ue/Me.data.BYTES_PER_ELEMENT,(pe+1)*ue/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,We,Qe,Pe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,We,Qe,Me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ze,Me.width,Me.height,Me.depth,0,We,Qe,Me.data);else if(E.isData3DTexture)tt?(dt&&n.texStorage3D(t.TEXTURE_3D,Fe,Ze,Me.width,Me.height,Me.depth),j&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,We,Qe,Me.data)):n.texImage3D(t.TEXTURE_3D,0,Ze,Me.width,Me.height,Me.depth,0,We,Qe,Me.data);else if(E.isFramebufferTexture){if(dt)if(tt)n.texStorage2D(t.TEXTURE_2D,Fe,Ze,Me.width,Me.height);else{let ue=Me.width,pe=Me.height;for(let Pe=0;Pe<Fe;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,Ze,ue,pe,0,We,Qe,null),ue>>=1,pe>>=1}}else if(st.length>0){if(tt&&dt){const ue=Ge(st[0]);n.texStorage2D(t.TEXTURE_2D,Fe,Ze,ue.width,ue.height)}for(let ue=0,pe=st.length;ue<pe;ue++)ze=st[ue],tt?j&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,We,Qe,ze):n.texImage2D(t.TEXTURE_2D,ue,Ze,We,Qe,ze);E.generateMipmaps=!1}else if(tt){if(dt){const ue=Ge(Me);n.texStorage2D(t.TEXTURE_2D,Fe,Ze,ue.width,ue.height)}j&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Qe,Me)}else n.texImage2D(t.TEXTURE_2D,0,Ze,We,Qe,Me);m(E)&&d(se),Ie.__version=re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function P(L,E,J){if(E.image.length!==6)return;const se=K(L,E),fe=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+J);const re=i.get(fe);if(fe.version!==re.__version||se===!0){n.activeTexture(t.TEXTURE0+J);const Ie=xt.getPrimaries(xt.workingColorSpace),_e=E.colorSpace===qi?null:xt.getPrimaries(E.colorSpace),be=E.colorSpace===qi||Ie===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,We=[];for(let pe=0;pe<6;pe++)!rt&&!Me?We[pe]=g(E.image[pe],!0,r.maxCubemapSize):We[pe]=Me?E.image[pe].image:E.image[pe],We[pe]=ke(E,We[pe]);const Qe=We[0],Ze=o.convert(E.format,E.colorSpace),ze=o.convert(E.type),st=_(E.internalFormat,Ze,ze,E.colorSpace),tt=E.isVideoTexture!==!0,dt=re.__version===void 0||se===!0,j=fe.dataReady;let Fe=x(E,Qe);D(t.TEXTURE_CUBE_MAP,E);let ue;if(rt){tt&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,st,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){ue=We[pe].mipmaps;for(let Pe=0;Pe<ue.length;Pe++){const Ve=ue[Pe];E.format!==ei?Ze!==null?tt?j&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Ve.width,Ve.height,Ze,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,st,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Ve.width,Ve.height,Ze,ze,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,st,Ve.width,Ve.height,0,Ze,ze,Ve.data)}}}else{if(ue=E.mipmaps,tt&&dt){ue.length>0&&Fe++;const pe=Ge(We[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,st,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){tt?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,We[pe].width,We[pe].height,Ze,ze,We[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,We[pe].width,We[pe].height,0,Ze,ze,We[pe].data);for(let Pe=0;Pe<ue.length;Pe++){const at=ue[Pe].image[pe].image;tt?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,at.width,at.height,Ze,ze,at.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,st,at.width,at.height,0,Ze,ze,at.data)}}else{tt?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ze,ze,We[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Ze,ze,We[pe]);for(let Pe=0;Pe<ue.length;Pe++){const Ve=ue[Pe];tt?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,Ze,ze,Ve.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,st,Ze,ze,Ve.image[pe])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),re.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function b(L,E,J,se,fe,re){const Ie=o.convert(J.format,J.colorSpace),_e=o.convert(J.type),be=_(J.internalFormat,Ie,_e,J.colorSpace);if(!i.get(E).__hasExternalTextures){const Me=Math.max(1,E.width>>re),We=Math.max(1,E.height>>re);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,re,be,Me,We,E.depth,0,Ie,_e,null):n.texImage2D(fe,re,be,Me,We,0,Ie,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),ce(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,fe,i.get(J).__webglTexture,0,oe(E)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,fe,i.get(J).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(L,E,J){if(t.bindRenderbuffer(t.RENDERBUFFER,L),E.depthBuffer){const se=E.depthTexture,fe=se&&se.isDepthTexture?se.type:null,re=y(E.stencilBuffer,fe),Ie=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=oe(E);ce(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,re,E.width,E.height):J?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,L)}else{const se=E.textures;for(let fe=0;fe<se.length;fe++){const re=se[fe],Ie=o.convert(re.format,re.colorSpace),_e=o.convert(re.type),be=_(re.internalFormat,Ie,_e,re.colorSpace),rt=oe(E);J&&ce(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,rt,be,E.width,E.height):ce(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,rt,be,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,be,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ee(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const se=i.get(E.depthTexture).__webglTexture,fe=oe(E);if(E.depthTexture.format===Ao)ce(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(E.depthTexture.format===zo)ce(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function te(L){const E=i.get(L),J=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const se=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",fe)};se.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=se}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ee(E.__webglFramebuffer,L)}else if(J){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=t.createRenderbuffer(),V(E.__webglDepthbuffer[se],L,!1);else{const fe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,re)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),V(E.__webglDepthbuffer,L,!1);else{const se=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,fe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function q(L,E,J){const se=i.get(L);E!==void 0&&b(se.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),J!==void 0&&te(L)}function ie(L){const E=L.texture,J=i.get(L),se=i.get(E);L.addEventListener("dispose",R);const fe=L.textures,re=L.isWebGLCubeRenderTarget===!0,Ie=fe.length>1;if(Ie||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=E.version,s.memory.textures++),re){J.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[_e]=[];for(let be=0;be<E.mipmaps.length;be++)J.__webglFramebuffer[_e][be]=t.createFramebuffer()}else J.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)J.__webglFramebuffer[_e]=t.createFramebuffer()}else J.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let _e=0,be=fe.length;_e<be;_e++){const rt=i.get(fe[_e]);rt.__webglTexture===void 0&&(rt.__webglTexture=t.createTexture(),s.memory.textures++)}if(L.samples>0&&ce(L)===!1){J.__webglMultisampledFramebuffer=t.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){const be=fe[_e];J.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,J.__webglColorRenderbuffer[_e]);const rt=o.convert(be.format,be.colorSpace),Me=o.convert(be.type),We=_(be.internalFormat,rt,Me,be.colorSpace,L.isXRRenderTarget===!0),Qe=oe(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,We,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,J.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=t.createRenderbuffer(),V(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),D(t.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)b(J.__webglFramebuffer[_e][be],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be);else b(J.__webglFramebuffer[_e],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let _e=0,be=fe.length;_e<be;_e++){const rt=fe[_e],Me=i.get(rt);n.bindTexture(t.TEXTURE_2D,Me.__webglTexture),D(t.TEXTURE_2D,rt),b(J.__webglFramebuffer,L,rt,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),m(rt)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,se.__webglTexture),D(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)b(J.__webglFramebuffer[be],L,E,t.COLOR_ATTACHMENT0,_e,be);else b(J.__webglFramebuffer,L,E,t.COLOR_ATTACHMENT0,_e,0);m(E)&&d(_e),n.unbindTexture()}L.depthBuffer&&te(L)}function he(L){const E=L.textures;for(let J=0,se=E.length;J<se;J++){const fe=E[J];if(m(fe)){const re=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(fe).__webglTexture;n.bindTexture(re,Ie),d(re),n.unbindTexture()}}}const we=[],N=[];function Re(L){if(L.samples>0){if(ce(L)===!1){const E=L.textures,J=L.width,se=L.height;let fe=t.COLOR_BUFFER_BIT;const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(L),_e=E.length>1;if(_e)for(let be=0;be<E.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let be=0;be<E.length;be++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[be]);const rt=i.get(E[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,rt,0)}t.blitFramebuffer(0,0,J,se,0,0,J,se,fe,t.NEAREST),l===!0&&(we.length=0,N.length=0,we.push(t.COLOR_ATTACHMENT0+be),L.depthBuffer&&L.resolveDepthBuffer===!1&&(we.push(re),N.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let be=0;be<E.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[be]);const rt=i.get(E[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,rt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function oe(L){return Math.min(r.maxSamples,L.samples)}function ce(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(L){const E=s.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function ke(L,E){const J=L.colorSpace,se=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==fr&&J!==qi&&(xt.getTransfer(J)===Pt?(se!==ei||fe!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=O,this.rebindTextures=q,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=b,this.useMultisampledRTT=ce}function u1(t,e){function n(i,r=qi){let o;const s=xt.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===Uf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ff)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===pg)return t.BYTE;if(i===mg)return t.SHORT;if(i===zs)return t.UNSIGNED_SHORT;if(i===Df)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===Xs)return t.HALF_FLOAT;if(i===gg)return t.ALPHA;if(i===_g)return t.RGB;if(i===ei)return t.RGBA;if(i===yg)return t.LUMINANCE;if(i===xg)return t.LUMINANCE_ALPHA;if(i===Ao)return t.DEPTH_COMPONENT;if(i===zo)return t.DEPTH_STENCIL;if(i===Sg)return t.RED;if(i===Bf)return t.RED_INTEGER;if(i===Mg)return t.RG;if(i===Of)return t.RG_INTEGER;if(i===zf)return t.RGBA_INTEGER;if(i===ja||i===$a||i===Ka||i===Za)if(s===Pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$a)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ch||i===hh||i===fh||i===dh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ch)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ph||i===mh||i===vh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ph||i===mh)return s===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===vh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gh||i===_h||i===yh||i===xh||i===Sh||i===Mh||i===Eh||i===wh||i===Th||i===Ah||i===Ch||i===Rh||i===Ph||i===bh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===gh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_h)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Th)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ah)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ch)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ph)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bh)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qa||i===Lh||i===Ih)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Qa)return s===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ih)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eg||i===Nh||i===Dh||i===Uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Qa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Nh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class c1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Da extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new wn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new lr({vertexShader:f1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zn(new jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m1 extends Wo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,v=null;const g=new p1,m=n.getContextAttributes();let d=null,_=null;const y=[],x=[],T=new St;let R=null;const A=new Zn;A.layers.enable(1),A.viewport=new Ot;const I=new Zn;I.layers.enable(2),I.viewport=new Ot;const W=[A,I],S=new c1;S.layers.enable(1),S.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let b=y[P];return b===void 0&&(b=new Ju,y[P]=b),b.getTargetRaySpace()},this.getControllerGrip=function(P){let b=y[P];return b===void 0&&(b=new Ju,y[P]=b),b.getGripSpace()},this.getHand=function(P){let b=y[P];return b===void 0&&(b=new Ju,y[P]=b),b.getHandSpace()};function U(P){const b=x.indexOf(P.inputSource);if(b===-1)return;const V=y[b];V!==void 0&&(V.update(P.inputSource,P.frame,c||s),V.dispatchEvent({type:P.type,data:P.inputSource}))}function Y(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let P=0;P<y.length;P++){const b=x[P];b!==null&&(x[P]=null,y[P].disconnect(b))}M=null,F=null,g.reset(),e.setRenderTarget(d),p=null,f=null,u=null,r=null,_=null,z.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const b={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,b),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Vr(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let b=null,V=null,ee=null;m.depth&&(ee=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,b=m.stencil?zo:Ao,V=m.stencil?Oo:kr);const te={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:o};u=new XRWebGLBinding(r,n),f=u.createProjectionLayer(te),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Vr(f.textureWidth,f.textureHeight,{format:ei,type:Ii,depthTexture:new Og(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(P){for(let b=0;b<P.removed.length;b++){const V=P.removed[b],ee=x.indexOf(V);ee>=0&&(x[ee]=null,y[ee].disconnect(V))}for(let b=0;b<P.added.length;b++){const V=P.added[b];let ee=x.indexOf(V);if(ee===-1){for(let q=0;q<y.length;q++)if(q>=x.length){x.push(V),ee=q;break}else if(x[q]===null){x[q]=V,ee=q;break}if(ee===-1)break}const te=y[ee];te&&te.connect(V)}}const Q=new ae,O=new ae;function C(P,b,V){Q.setFromMatrixPosition(b.matrixWorld),O.setFromMatrixPosition(V.matrixWorld);const ee=Q.distanceTo(O),te=b.projectionMatrix.elements,q=V.projectionMatrix.elements,ie=te[14]/(te[10]-1),he=te[14]/(te[10]+1),we=(te[9]+1)/te[5],N=(te[9]-1)/te[5],Re=(te[8]-1)/te[0],oe=(q[8]+1)/q[0],ce=ie*Re,Ue=ie*oe,ke=ee/(-Re+oe),Ge=ke*-Re;if(b.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ge),P.translateZ(ke),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),te[10]===-1)P.projectionMatrix.copy(b.projectionMatrix),P.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{const L=ie+ke,E=he+ke,J=ce-Ge,se=Ue+(ee-Ge),fe=we*he/E*L,re=N*he/E*L;P.projectionMatrix.makePerspective(J,se,fe,re,L,E),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function X(P,b){b===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(b.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let b=P.near,V=P.far;g.texture!==null&&(g.depthNear>0&&(b=g.depthNear),g.depthFar>0&&(V=g.depthFar)),S.near=I.near=A.near=b,S.far=I.far=A.far=V,(M!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,F=S.far);const ee=P.parent,te=S.cameras;X(S,ee);for(let q=0;q<te.length;q++)X(te[q],ee);te.length===2?C(S,A,I):S.projectionMatrix.copy(A.projectionMatrix),H(P,S,ee)};function H(P,b,V){V===null?P.matrix.copy(b.matrixWorld):(P.matrix.copy(V.matrixWorld),P.matrix.invert(),P.matrix.multiply(b.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(b.projectionMatrix),P.projectionMatrixInverse.copy(b.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Fh*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(P){l=P,f!==null&&(f.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let D=null;function K(P,b){if(h=b.getViewerPose(c||s),v=b,h!==null){const V=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ee=!1;V.length!==S.cameras.length&&(S.cameras.length=0,ee=!0);for(let q=0;q<V.length;q++){const ie=V[q];let he=null;if(p!==null)he=p.getViewport(ie);else{const N=u.getViewSubImage(f,ie);he=N.viewport,q===0&&(e.setRenderTargetTextures(_,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(_))}let we=W[q];we===void 0&&(we=new Zn,we.layers.enable(q),we.viewport=new Ot,W[q]=we),we.matrix.fromArray(ie.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(ie.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(he.x,he.y,he.width,he.height),q===0&&(S.matrix.copy(we.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ee===!0&&S.cameras.push(we)}const te=r.enabledFeatures;if(te&&te.includes("depth-sensing")){const q=u.getDepthInformation(V[0]);q&&q.isValid&&q.texture&&g.init(e,q,r.renderState)}}for(let V=0;V<y.length;V++){const ee=x[V],te=y[V];ee!==null&&te!==void 0&&te.update(ee,b,c||s)}D&&D(P,b),b.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:b}),v=null}const z=new Bg;z.setAnimationLoop(K),this.setAnimationLoop=function(P){D=P},this.dispose=function(){}}}const yr=new di,v1=new zt;function g1(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Dg(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),u(m,d)):d.isMeshPhongMaterial?(o(m,d),h(m,d)):d.isMeshStandardMaterial?(o(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(o(m,d),v(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),g(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===En&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===En&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,yr.copy(x),yr.x*=-1,yr.y*=-1,yr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),m.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(yr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _1(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=r[_.id];x===void 0&&(v(_),x=h(_),r[_.id]=x,_.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(_,T);const R=e.render.frame;o[_.id]!==R&&(f(_),o[_.id]=R)}function h(_){const y=u();_.__bindingPointIndex=y;const x=t.createBuffer(),T=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,T,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=r[_.id],x=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let R=0,A=x.length;R<A;R++){const I=Array.isArray(x[R])?x[R]:[x[R]];for(let W=0,S=I.length;W<S;W++){const M=I[W];if(p(M,R,W,T)===!0){const F=M.__offset,U=Array.isArray(M.value)?M.value:[M.value];let Y=0;for(let $=0;$<U.length;$++){const Q=U[$],O=g(Q);typeof Q=="number"||typeof Q=="boolean"?(M.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,F+Y,M.__data)):Q.isMatrix3?(M.__data[0]=Q.elements[0],M.__data[1]=Q.elements[1],M.__data[2]=Q.elements[2],M.__data[3]=0,M.__data[4]=Q.elements[3],M.__data[5]=Q.elements[4],M.__data[6]=Q.elements[5],M.__data[7]=0,M.__data[8]=Q.elements[6],M.__data[9]=Q.elements[7],M.__data[10]=Q.elements[8],M.__data[11]=0):(Q.toArray(M.__data,Y),Y+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,x,T){const R=_.value,A=y+"_"+x;if(T[A]===void 0)return typeof R=="number"||typeof R=="boolean"?T[A]=R:T[A]=R.clone(),!0;{const I=T[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return T[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function v(_){const y=_.uniforms;let x=0;const T=16;for(let A=0,I=y.length;A<I;A++){const W=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=W.length;S<M;S++){const F=W[S],U=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,$=U.length;Y<$;Y++){const Q=U[Y],O=g(Q),C=x%T,X=C%O.boundary,H=C+X;x+=X,H!==0&&T-H<O.storage&&(x+=T-H),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=O.storage}}}const R=x%T;return R>0&&(x+=T-R),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:c,dispose:d}}class y1{constructor(e={}){const{canvas:n=ox(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=rr,this.toneMappingExposure=1;const y=this;let x=!1,T=0,R=0,A=null,I=-1,W=null;const S=new Ot,M=new Ot;let F=null;const U=new yt(0);let Y=0,$=n.width,Q=n.height,O=1,C=null,X=null;const H=new Ot(0,0,$,Q),D=new Ot(0,0,$,Q);let K=!1;const z=new Hf;let P=!1,b=!1;const V=new zt,ee=new zt,te=new ae,q=new Ot,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function we(){return A===null?O:1}let N=i;function Re(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ve,!1),N===null){const k="webgl2";if(N=Re(k,w),N===null)throw Re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,ce,Ue,ke,Ge,L,E,J,se,fe,re,Ie,_e,be,rt,Me,We,Qe,Ze,ze,st,tt,dt,j;function Fe(){oe=new wE(N),oe.init(),tt=new u1(N,oe),ce=new _E(N,oe,e,tt),Ue=new s1(N),ce.reverseDepthBuffer&&Ue.buffers.depth.setReversed(!0),ke=new CE(N),Ge=new Xw,L=new l1(N,oe,Ue,Ge,ce,tt,ke),E=new xE(y),J=new EE(y),se=new Dx(N),dt=new vE(N,se),fe=new TE(N,se,ke,dt),re=new PE(N,fe,se,ke),Ze=new RE(N,ce,L),Me=new yE(Ge),Ie=new Ww(y,E,J,oe,ce,dt,Me),_e=new g1(y,Ge),be=new Yw,rt=new Jw(oe),Qe=new mE(y,E,J,Ue,re,f,l),We=new r1(y,re,ce),j=new _1(N,ke,ce,Ue),ze=new gE(N,oe,ke),st=new AE(N,oe,ke),ke.programs=Ie.programs,y.capabilities=ce,y.extensions=oe,y.properties=Ge,y.renderLists=be,y.shadowMap=We,y.state=Ue,y.info=ke}Fe();const ue=new m1(y,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize($,Q,!1))},this.getSize=function(w){return w.set($,Q)},this.setSize=function(w,k,B=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,Q=k,n.width=Math.floor(w*O),n.height=Math.floor(k*O),B===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set($*O,Q*O).floor()},this.setDrawingBufferSize=function(w,k,B){$=w,Q=k,O=B,n.width=Math.floor(w*B),n.height=Math.floor(k*B),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,k,B,Z){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,k,B,Z),Ue.viewport(S.copy(H).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(D)},this.setScissor=function(w,k,B,Z){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,k,B,Z),Ue.scissor(M.copy(D).multiplyScalar(O).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(w){Ue.setScissorTest(K=w)},this.setOpaqueSort=function(w){C=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(w=!0,k=!0,B=!0){let Z=0;if(w){let G=!1;if(A!==null){const ye=A.texture.format;G=ye===zf||ye===Of||ye===Bf}if(G){const ye=A.texture.type,ge=ye===Ii||ye===kr||ye===zs||ye===Oo||ye===Uf||ye===Ff,Se=Qe.getClearColor(),me=Qe.getClearAlpha(),$e=Se.r,Ke=Se.g,Xe=Se.b;ge?(p[0]=$e,p[1]=Ke,p[2]=Xe,p[3]=me,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=$e,v[1]=Ke,v[2]=Xe,v[3]=me,N.clearBufferiv(N.COLOR,0,v))}else Z|=N.COLOR_BUFFER_BIT}k&&(Z|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ve,!1),be.dispose(),rt.dispose(),Ge.dispose(),E.dispose(),J.dispose(),re.dispose(),dt.dispose(),j.dispose(),Ie.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",de),ue.removeEventListener("sessionend",xe),ve.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=ke.autoReset,k=We.enabled,B=We.autoUpdate,Z=We.needsUpdate,G=We.type;Fe(),ke.autoReset=w,We.enabled=k,We.autoUpdate=B,We.needsUpdate=Z,We.type=G}function Ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const k=w.target;k.removeEventListener("dispose",at),wt(k)}function wt(w){kt(w),Ge.remove(w)}function kt(w){const k=Ge.get(w).programs;k!==void 0&&(k.forEach(function(B){Ie.releaseProgram(B)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,B,Z,G,ye){k===null&&(k=ie);const ge=G.isMesh&&G.matrixWorld.determinant()<0,Se=Le(w,k,B,Z,G);Ue.setMaterial(Z,ge);let me=B.index,$e=1;if(Z.wireframe===!0){if(me=fe.getWireframeAttribute(B),me===void 0)return;$e=2}const Ke=B.drawRange,Xe=B.attributes.position;let ht=Ke.start*$e,lt=(Ke.start+Ke.count)*$e;ye!==null&&(ht=Math.max(ht,ye.start*$e),lt=Math.min(lt,(ye.start+ye.count)*$e)),me!==null?(ht=Math.max(ht,0),lt=Math.min(lt,me.count)):Xe!=null&&(ht=Math.max(ht,0),lt=Math.min(lt,Xe.count));const nt=lt-ht;if(nt<0||nt===1/0)return;dt.setup(G,Z,Se,B,me);let It,Je=ze;if(me!==null&&(It=se.get(me),Je=st,Je.setIndex(It)),G.isMesh)Z.wireframe===!0?(Ue.setLineWidth(Z.wireframeLinewidth*we()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(G.isLine){let je=Z.linewidth;je===void 0&&(je=1),Ue.setLineWidth(je*we()),G.isLineSegments?Je.setMode(N.LINES):G.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else G.isPoints?Je.setMode(N.POINTS):G.isSprite&&Je.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Je.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Je.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const je=G._multiDrawStarts,_t=G._multiDrawCounts,ot=G._multiDrawCount,Mt=me?se.get(me).bytesPerElement:1,Xt=Ge.get(Z).currentProgram.getUniforms();for(let Nt=0;Nt<ot;Nt++)Xt.setValue(N,"_gl_DrawID",Nt),Je.render(je[Nt]/Mt,_t[Nt])}else if(G.isInstancedMesh)Je.renderInstances(ht,nt,G.count);else if(B.isInstancedBufferGeometry){const je=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_t=Math.min(B.instanceCount,je);Je.renderInstances(ht,nt,_t)}else Je.render(ht,nt)};function ft(w,k,B){w.transparent===!0&&w.side===Mi&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,Ae(w,k,B),w.side=ar,w.needsUpdate=!0,Ae(w,k,B),w.side=Mi):Ae(w,k,B)}this.compile=function(w,k,B=null){B===null&&(B=w),m=rt.get(B),m.init(k),_.push(m),B.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),w!==B&&w.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Z=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let ge=0;ge<ye.length;ge++){const Se=ye[ge];ft(Se,B,G),Z.add(Se)}else ft(ye,B,G),Z.add(ye)}),_.pop(),m=null,Z},this.compileAsync=function(w,k,B=null){const Z=this.compile(w,k,B);return new Promise(G=>{function ye(){if(Z.forEach(function(ge){Ge.get(ge).currentProgram.isReady()&&Z.delete(ge)}),Z.size===0){G(w);return}setTimeout(ye,10)}oe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let vt=null;function le(w){vt&&vt(w)}function de(){ve.stop()}function xe(){ve.start()}const ve=new Bg;ve.setAnimationLoop(le),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(w){vt=w,ue.setAnimationLoop(w),w===null?ve.stop():ve.start()},ue.addEventListener("sessionstart",de),ue.addEventListener("sessionend",xe),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,k,A),m=rt.get(w,_.length),m.init(k),_.push(m),ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),z.setFromProjectionMatrix(ee),b=this.localClippingEnabled,P=Me.init(this.clippingPlanes,b),g=be.get(w,d.length),g.init(),d.push(g),ue.enabled===!0&&ue.isPresenting===!0){const ye=y.xr.getDepthSensingMesh();ye!==null&&et(ye,k,-1/0,y.sortObjects)}et(w,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(C,X),he=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,he&&Qe.addToRenderList(g,w),this.info.render.frame++,P===!0&&Me.beginShadows();const B=m.state.shadowsArray;We.render(B,w,k),P===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,G=g.transmissive;if(m.setupLights(),k.isArrayCamera){const ye=k.cameras;if(G.length>0)for(let ge=0,Se=ye.length;ge<Se;ge++){const me=ye[ge];Ce(Z,G,w,me)}he&&Qe.render(w);for(let ge=0,Se=ye.length;ge<Se;ge++){const me=ye[ge];Oe(g,w,me,me.viewport)}}else G.length>0&&Ce(Z,G,w,k),he&&Qe.render(w),Oe(g,w,k);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,k),dt.resetDefaultState(),I=-1,W=null,_.pop(),_.length>0?(m=_[_.length-1],P===!0&&Me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function et(w,k,B,Z){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||z.intersectsSprite(w)){Z&&q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const ge=re.update(w),Se=w.material;Se.visible&&g.push(w,ge,Se,B,q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||z.intersectsObject(w))){const ge=re.update(w),Se=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),q.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),q.copy(ge.boundingSphere.center)),q.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(Se)){const me=ge.groups;for(let $e=0,Ke=me.length;$e<Ke;$e++){const Xe=me[$e],ht=Se[Xe.materialIndex];ht&&ht.visible&&g.push(w,ge,ht,B,q.z,Xe)}}else Se.visible&&g.push(w,ge,Se,B,q.z,null)}}const ye=w.children;for(let ge=0,Se=ye.length;ge<Se;ge++)et(ye[ge],k,B,Z)}function Oe(w,k,B,Z){const G=w.opaque,ye=w.transmissive,ge=w.transparent;m.setupLightsView(B),P===!0&&Me.setGlobalState(y.clippingPlanes,B),Z&&Ue.viewport(S.copy(Z)),G.length>0&&Ne(G,k,B),ye.length>0&&Ne(ye,k,B),ge.length>0&&Ne(ge,k,B),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Ce(w,k,B,Z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Vr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Xs:Ii,minFilter:Ir,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const ye=m.state.transmissionRenderTarget[Z.id],ge=Z.viewport||S;ye.setSize(ge.z,ge.w);const Se=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(U),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),he&&Qe.render(B);const me=y.toneMapping;y.toneMapping=rr;const $e=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),P===!0&&Me.setGlobalState(y.clippingPlanes,Z),Ne(w,B,Z),L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Xe=0,ht=k.length;Xe<ht;Xe++){const lt=k[Xe],nt=lt.object,It=lt.geometry,Je=lt.material,je=lt.group;if(Je.side===Mi&&nt.layers.test(Z.layers)){const _t=Je.side;Je.side=En,Je.needsUpdate=!0,ne(nt,B,Z,It,Je,je),Je.side=_t,Je.needsUpdate=!0,Ke=!0}}Ke===!0&&(L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye))}y.setRenderTarget(Se),y.setClearColor(U,Y),$e!==void 0&&(Z.viewport=$e),y.toneMapping=me}function Ne(w,k,B){const Z=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ye=w.length;G<ye;G++){const ge=w[G],Se=ge.object,me=ge.geometry,$e=Z===null?ge.material:Z,Ke=ge.group;Se.layers.test(B.layers)&&ne(Se,k,B,me,$e,Ke)}}function ne(w,k,B,Z,G,ye){w.onBeforeRender(y,k,B,Z,G,ye),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(y,k,B,Z,w,ye),G.transparent===!0&&G.side===Mi&&G.forceSinglePass===!1?(G.side=En,G.needsUpdate=!0,y.renderBufferDirect(B,k,Z,G,w,ye),G.side=ar,G.needsUpdate=!0,y.renderBufferDirect(B,k,Z,G,w,ye),G.side=Mi):y.renderBufferDirect(B,k,Z,G,w,ye),w.onAfterRender(y,k,B,Z,G,ye)}function Ae(w,k,B){k.isScene!==!0&&(k=ie);const Z=Ge.get(w),G=m.state.lights,ye=m.state.shadowsArray,ge=G.state.version,Se=Ie.getParameters(w,G.state,ye,k,B),me=Ie.getProgramCacheKey(Se);let $e=Z.programs;Z.environment=w.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(w.isMeshStandardMaterial?J:E).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",at),$e=new Map,Z.programs=$e);let Ke=$e.get(me);if(Ke!==void 0){if(Z.currentProgram===Ke&&Z.lightsStateVersion===ge)return qe(w,Se),Ke}else Se.uniforms=Ie.getUniforms(w),w.onBeforeCompile(Se,y),Ke=Ie.acquireProgram(Se,me),$e.set(me,Ke),Z.uniforms=Se.uniforms;const Xe=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),qe(w,Se),Z.needsLights=De(w),Z.lightsStateVersion=ge,Z.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Ke,Z.uniformsList=null,Ke}function Be(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=el.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function qe(w,k){const B=Ge.get(w);B.outputColorSpace=k.outputColorSpace,B.batching=k.batching,B.batchingColor=k.batchingColor,B.instancing=k.instancing,B.instancingColor=k.instancingColor,B.instancingMorph=k.instancingMorph,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function Le(w,k,B,Z,G){k.isScene!==!0&&(k=ie),L.resetTextureUnits();const ye=k.fog,ge=Z.isMeshStandardMaterial?k.environment:null,Se=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fr,me=(Z.isMeshStandardMaterial?J:E).get(Z.envMap||ge),$e=Z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ke=!!B.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!B.morphAttributes.position,ht=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color;let nt=rr;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(nt=y.toneMapping);const It=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=It!==void 0?It.length:0,je=Ge.get(Z),_t=m.state.lights;if(P===!0&&(b===!0||w!==W)){const Ht=w===W&&Z.id===I;Me.setState(Z,w,Ht)}let ot=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==_t.state.version||je.outputColorSpace!==Se||G.isBatchedMesh&&je.batching===!1||!G.isBatchedMesh&&je.batching===!0||G.isBatchedMesh&&je.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&je.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&je.instancing===!1||!G.isInstancedMesh&&je.instancing===!0||G.isSkinnedMesh&&je.skinning===!1||!G.isSkinnedMesh&&je.skinning===!0||G.isInstancedMesh&&je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&je.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&je.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&je.instancingMorph===!1&&G.morphTexture!==null||je.envMap!==me||Z.fog===!0&&je.fog!==ye||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Me.numPlanes||je.numIntersection!==Me.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==Ke||je.morphTargets!==Xe||je.morphNormals!==ht||je.morphColors!==lt||je.toneMapping!==nt||je.morphTargetsCount!==Je)&&(ot=!0):(ot=!0,je.__version=Z.version);let Mt=je.currentProgram;ot===!0&&(Mt=Ae(Z,k,G));let Xt=!1,Nt=!1,it=!1;const mt=Mt.getUniforms(),Tt=je.uniforms;if(Ue.useProgram(Mt.program)&&(Xt=!0,Nt=!0,it=!0),Z.id!==I&&(I=Z.id,Nt=!0),Xt||W!==w){ce.reverseDepthBuffer?(V.copy(w.projectionMatrix),ax(V),lx(V),mt.setValue(N,"projectionMatrix",V)):mt.setValue(N,"projectionMatrix",w.projectionMatrix),mt.setValue(N,"viewMatrix",w.matrixWorldInverse);const Ht=mt.map.cameraPosition;Ht!==void 0&&Ht.setValue(N,te.setFromMatrixPosition(w.matrixWorld)),ce.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,Nt=!0,it=!0)}if(G.isSkinnedMesh){mt.setOptional(N,G,"bindMatrix"),mt.setOptional(N,G,"bindMatrixInverse");const Ht=G.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),mt.setValue(N,"boneTexture",Ht.boneTexture,L))}G.isBatchedMesh&&(mt.setOptional(N,G,"batchingTexture"),mt.setValue(N,"batchingTexture",G._matricesTexture,L),mt.setOptional(N,G,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",G._indirectTexture,L),mt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",G._colorsTexture,L));const Gn=B.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Ze.update(G,B,Mt),(Nt||je.receiveShadow!==G.receiveShadow)&&(je.receiveShadow=G.receiveShadow,mt.setValue(N,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Tt.envMap.value=me,Tt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(Tt.envMapIntensity.value=k.environmentIntensity),Nt&&(mt.setValue(N,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&Te(Tt,it),ye&&Z.fog===!0&&_e.refreshFogUniforms(Tt,ye),_e.refreshMaterialUniforms(Tt,Z,O,Q,m.state.transmissionRenderTarget[w.id]),el.upload(N,Be(je),Tt,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(el.upload(N,Be(je),Tt,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(N,"center",G.center),mt.setValue(N,"modelViewMatrix",G.modelViewMatrix),mt.setValue(N,"normalMatrix",G.normalMatrix),mt.setValue(N,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ht=Z.uniformsGroups;for(let Yo=0,Kl=Ht.length;Yo<Kl;Yo++){const At=Ht[Yo];j.update(At,Mt),j.bind(At,Mt)}}return Mt}function Te(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function De(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,k,B){Ge.get(w.texture).__webglTexture=k,Ge.get(w.depthTexture).__webglTexture=B;const Z=Ge.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=B===void 0,Z.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const B=Ge.get(w);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,B=0){A=w,T=k,R=B;let Z=!0,G=null,ye=!1,ge=!1;if(w){const me=Ge.get(w);if(me.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1;else if(me.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(me.__hasExternalTextures)L.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(me.__boundDepthTexture!==Xe){if(Xe!==null&&Ge.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ge=!0);const Ke=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[k])?G=Ke[k][B]:G=Ke[k],ye=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?G=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?G=Ke[B]:G=Ke,S.copy(w.viewport),M.copy(w.scissor),F=w.scissorTest}else S.copy(H).multiplyScalar(O).floor(),M.copy(D).multiplyScalar(O).floor(),F=K;if(Ue.bindFramebuffer(N.FRAMEBUFFER,G)&&Z&&Ue.drawBuffers(w,G),Ue.viewport(S),Ue.scissor(M),Ue.setScissorTest(F),ye){const me=Ge.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,B)}else if(ge){const me=Ge.get(w.texture),$e=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.__webglTexture,B||0,$e)}I=-1},this.readRenderTargetPixels=function(w,k,B,Z,G,ye,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){Ue.bindFramebuffer(N.FRAMEBUFFER,Se);try{const me=w.texture,$e=me.format,Ke=me.type;if(!ce.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Z&&B>=0&&B<=w.height-G&&N.readPixels(k,B,Z,G,tt.convert($e),tt.convert(Ke),ye)}finally{const me=A!==null?Ge.get(A).__webglFramebuffer:null;Ue.bindFramebuffer(N.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(w,k,B,Z,G,ye,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){const me=w.texture,$e=me.format,Ke=me.type;if(!ce.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-Z&&B>=0&&B<=w.height-G){Ue.bindFramebuffer(N.FRAMEBUFFER,Se);const Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),N.readPixels(k,B,Z,G,tt.convert($e),tt.convert(Ke),0);const ht=A!==null?Ge.get(A).__webglFramebuffer:null;Ue.bindFramebuffer(N.FRAMEBUFFER,ht);const lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await sx(N,lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.deleteBuffer(Xe),N.deleteSync(lt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,B=0){w.isTexture!==!0&&(Ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-B),G=Math.floor(w.image.width*Z),ye=Math.floor(w.image.height*Z),ge=k!==null?k.x:0,Se=k!==null?k.y:0;L.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ge,Se,G,ye),Ue.unbindTexture()},this.copyTextureToTexture=function(w,k,B=null,Z=null,G=0){w.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],k=arguments[2],G=arguments[3]||0,B=null);let ye,ge,Se,me,$e,Ke;B!==null?(ye=B.max.x-B.min.x,ge=B.max.y-B.min.y,Se=B.min.x,me=B.min.y):(ye=w.image.width,ge=w.image.height,Se=0,me=0),Z!==null?($e=Z.x,Ke=Z.y):($e=0,Ke=0);const Xe=tt.convert(k.format),ht=tt.convert(k.type);L.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=N.getParameter(N.UNPACK_ROW_LENGTH),nt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),It=N.getParameter(N.UNPACK_SKIP_PIXELS),Je=N.getParameter(N.UNPACK_SKIP_ROWS),je=N.getParameter(N.UNPACK_SKIP_IMAGES),_t=w.isCompressedTexture?w.mipmaps[G]:w.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,me),w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,$e,Ke,ye,ge,Xe,ht,_t.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,$e,Ke,_t.width,_t.height,Xe,_t.data):N.texSubImage2D(N.TEXTURE_2D,G,$e,Ke,ye,ge,Xe,ht,_t),N.pixelStorei(N.UNPACK_ROW_LENGTH,lt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,It),N.pixelStorei(N.UNPACK_SKIP_ROWS,Je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,je),G===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(w,k,B=null,Z=null,G=0){w.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],k=arguments[3],G=arguments[4]||0);let ye,ge,Se,me,$e,Ke,Xe,ht,lt;const nt=w.isCompressedTexture?w.mipmaps[G]:w.image;B!==null?(ye=B.max.x-B.min.x,ge=B.max.y-B.min.y,Se=B.max.z-B.min.z,me=B.min.x,$e=B.min.y,Ke=B.min.z):(ye=nt.width,ge=nt.height,Se=nt.depth,me=0,$e=0,Ke=0),Z!==null?(Xe=Z.x,ht=Z.y,lt=Z.z):(Xe=0,ht=0,lt=0);const It=tt.convert(k.format),Je=tt.convert(k.type);let je;if(k.isData3DTexture)L.setTexture3D(k,0),je=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)L.setTexture2DArray(k,0),je=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const _t=N.getParameter(N.UNPACK_ROW_LENGTH),ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Mt=N.getParameter(N.UNPACK_SKIP_PIXELS),Xt=N.getParameter(N.UNPACK_SKIP_ROWS),Nt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,nt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,me),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke),w.isDataTexture||w.isData3DTexture?N.texSubImage3D(je,G,Xe,ht,lt,ye,ge,Se,It,Je,nt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(je,G,Xe,ht,lt,ye,ge,Se,It,nt.data):N.texSubImage3D(je,G,Xe,ht,lt,ye,ge,Se,It,Je,nt),N.pixelStorei(N.UNPACK_ROW_LENGTH,_t),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt),G===0&&k.generateMipmaps&&N.generateMipmap(je),Ue.unbindTexture()},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Ue.unbindTexture()},this.resetState=function(){T=0,R=0,A=null,Ue.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kf?"display-p3":"srgb",n.unpackColorSpace=xt.workingColorSpace===Yl?"display-p3":"srgb"}}class x1 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Xf extends dr{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const h=[],u=new ae,f=new ae,p=[],v=[],g=[],m=[];for(let d=0;d<=i;d++){const _=[],y=d/i;let x=0;d===0&&s===0?x=.5/n:d===i&&l===Math.PI&&(x=-.5/n);for(let T=0;T<=n;T++){const R=T/n;u.x=-e*Math.cos(r+R*o)*Math.sin(s+y*a),u.y=e*Math.cos(s+y*a),u.z=e*Math.sin(r+R*o)*Math.sin(s+y*a),v.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(R+x,1-y),_.push(c++)}h.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const y=h[d][_+1],x=h[d][_],T=h[d+1][_],R=h[d+1][_+1];(d!==0||s>0)&&p.push(y,x,R),(d!==i-1||l<Math.PI)&&p.push(x,T,R)}this.setIndex(p),this.setAttribute("position",new fi(v,3)),this.setAttribute("normal",new fi(g,3)),this.setAttribute("uv",new fi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ec extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wg,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gg extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const tc=new zt,$p=new ae,Kp=new ae;class S1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hf,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;$p.setFromMatrixPosition(e.matrixWorld),n.position.copy($p),Kp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Kp),n.updateMatrixWorld(),tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class M1 extends S1{constructor(){super(new Gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E1 extends Gg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new M1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class w1 extends Gg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);function Ua(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Wg={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function n(i,r,o){function s(c,h){if(!r[c]){if(!i[c]){var u=typeof Ua=="function"&&Ua;if(!h&&u)return u(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}var f=r[c]={exports:{}};i[c][0].call(f.exports,function(p){var v=i[c][1][p];return s(v||p)},f,f.exports,n,i,r,o)}return r[c].exports}for(var a=typeof Ua=="function"&&Ua,l=0;l<o.length;l++)s(o[l]);return s}({1:[function(n,i,r){i.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(n,i,r){i.exports={version:n("../package.json").version,AABB:n("./collision/AABB"),ArrayCollisionMatrix:n("./collision/ArrayCollisionMatrix"),Body:n("./objects/Body"),Box:n("./shapes/Box"),Broadphase:n("./collision/Broadphase"),Constraint:n("./constraints/Constraint"),ContactEquation:n("./equations/ContactEquation"),Narrowphase:n("./world/Narrowphase"),ConeTwistConstraint:n("./constraints/ConeTwistConstraint"),ContactMaterial:n("./material/ContactMaterial"),ConvexPolyhedron:n("./shapes/ConvexPolyhedron"),Cylinder:n("./shapes/Cylinder"),DistanceConstraint:n("./constraints/DistanceConstraint"),Equation:n("./equations/Equation"),EventTarget:n("./utils/EventTarget"),FrictionEquation:n("./equations/FrictionEquation"),GSSolver:n("./solver/GSSolver"),GridBroadphase:n("./collision/GridBroadphase"),Heightfield:n("./shapes/Heightfield"),HingeConstraint:n("./constraints/HingeConstraint"),LockConstraint:n("./constraints/LockConstraint"),Mat3:n("./math/Mat3"),Material:n("./material/Material"),NaiveBroadphase:n("./collision/NaiveBroadphase"),ObjectCollisionMatrix:n("./collision/ObjectCollisionMatrix"),Pool:n("./utils/Pool"),Particle:n("./shapes/Particle"),Plane:n("./shapes/Plane"),PointToPointConstraint:n("./constraints/PointToPointConstraint"),Quaternion:n("./math/Quaternion"),Ray:n("./collision/Ray"),RaycastVehicle:n("./objects/RaycastVehicle"),RaycastResult:n("./collision/RaycastResult"),RigidVehicle:n("./objects/RigidVehicle"),RotationalEquation:n("./equations/RotationalEquation"),RotationalMotorEquation:n("./equations/RotationalMotorEquation"),SAPBroadphase:n("./collision/SAPBroadphase"),SPHSystem:n("./objects/SPHSystem"),Shape:n("./shapes/Shape"),Solver:n("./solver/Solver"),Sphere:n("./shapes/Sphere"),SplitSolver:n("./solver/SplitSolver"),Spring:n("./objects/Spring"),Trimesh:n("./shapes/Trimesh"),Vec3:n("./math/Vec3"),Vec3Pool:n("./utils/Vec3Pool"),World:n("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(n,i,r){var o=n("../math/Vec3");n("../utils/Utils"),i.exports=s;function s(c){c=c||{},this.lowerBound=new o,c.lowerBound&&this.lowerBound.copy(c.lowerBound),this.upperBound=new o,c.upperBound&&this.upperBound.copy(c.upperBound)}var a=new o;s.prototype.setFromPoints=function(c,h,u,f){var p=this.lowerBound,v=this.upperBound,g=u;p.copy(c[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<c.length;m++){var d=c[m];g&&(g.vmult(d,a),d=a),d.x>v.x&&(v.x=d.x),d.x<p.x&&(p.x=d.x),d.y>v.y&&(v.y=d.y),d.y<p.y&&(p.y=d.y),d.z>v.z&&(v.z=d.z),d.z<p.z&&(p.z=d.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),f&&(p.x-=f,p.y-=f,p.z-=f,v.x+=f,v.y+=f,v.z+=f),this},s.prototype.copy=function(c){return this.lowerBound.copy(c.lowerBound),this.upperBound.copy(c.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(c){var h=c.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var u=c.upperBound.x;this.upperBound.x<u&&(this.upperBound.x=u);var h=c.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var u=c.upperBound.y;this.upperBound.y<u&&(this.upperBound.y=u);var h=c.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var u=c.upperBound.z;this.upperBound.z<u&&(this.upperBound.z=u)},s.prototype.overlaps=function(c){var h=this.lowerBound,u=this.upperBound,f=c.lowerBound,p=c.upperBound;return(f.x<=u.x&&u.x<=p.x||h.x<=p.x&&p.x<=u.x)&&(f.y<=u.y&&u.y<=p.y||h.y<=p.y&&p.y<=u.y)&&(f.z<=u.z&&u.z<=p.z||h.z<=p.z&&p.z<=u.z)},s.prototype.contains=function(c){var h=this.lowerBound,u=this.upperBound,f=c.lowerBound,p=c.upperBound;return h.x<=f.x&&u.x>=p.x&&h.y<=f.y&&u.y>=p.y&&h.z<=f.z&&u.z>=p.z},s.prototype.getCorners=function(c,h,u,f,p,v,g,m){var d=this.lowerBound,_=this.upperBound;c.copy(d),h.set(_.x,d.y,d.z),u.set(_.x,_.y,d.z),f.set(d.x,_.y,_.z),p.set(_.x,d.y,d.z),v.set(d.x,_.y,d.z),g.set(d.x,d.y,_.z),m.copy(_)};var l=[new o,new o,new o,new o,new o,new o,new o,new o];s.prototype.toLocalFrame=function(c,h){var u=l,f=u[0],p=u[1],v=u[2],g=u[3],m=u[4],d=u[5],_=u[6],y=u[7];this.getCorners(f,p,v,g,m,d,_,y);for(var x=0;x!==8;x++){var T=u[x];c.pointToLocal(T,T)}return h.setFromPoints(u)},s.prototype.toWorldFrame=function(c,h){var u=l,f=u[0],p=u[1],v=u[2],g=u[3],m=u[4],d=u[5],_=u[6],y=u[7];this.getCorners(f,p,v,g,m,d,_,y);for(var x=0;x!==8;x++){var T=u[x];c.pointToWorld(T,T)}return h.setFromPoints(u)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(n,i,r){i.exports=o;function o(){this.matrix=[]}o.prototype.get=function(s,a){if(s=s.index,a=a.index,a>s){var l=a;a=s,s=l}return this.matrix[(s*(s+1)>>1)+a-1]},o.prototype.set=function(s,a,l){if(s=s.index,a=a.index,a>s){var c=a;a=s,s=c}this.matrix[(s*(s+1)>>1)+a-1]=l?1:0},o.prototype.reset=function(){for(var s=0,a=this.matrix.length;s!==a;s++)this.matrix[s]=0},o.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(n,i,r){var o=n("../objects/Body"),s=n("../math/Vec3"),a=n("../math/Quaternion");n("../shapes/Shape"),n("../shapes/Plane"),i.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,d){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var c=o.STATIC|o.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&c||g.sleepState===o.SLEEPING)&&(m.type&c||m.sleepState===o.SLEEPING))},l.prototype.intersectionTest=function(g,m,d,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,d,_):this.doBoundingSphereBroadphase(g,m,d,_)};var h=new s;new s,new a,new s,l.prototype.doBoundingSphereBroadphase=function(g,m,d,_){var y=h;m.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+m.boundingRadius,2),T=y.norm2();T<x&&(d.push(g),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,d,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(d.push(g),_.push(m))};var u={keys:[]},f=[],p=[];l.prototype.makePairsUnique=function(g,m){for(var d=u,_=f,y=p,x=g.length,T=0;T!==x;T++)_[T]=g[T],y[T]=m[T];g.length=0,m.length=0;for(var T=0;T!==x;T++){var R=_[T].id,A=y[T].id,I=R<A?R+","+A:A+","+R;d[I]=T,d.keys.push(I)}for(var T=0;T!==d.keys.length;T++){var I=d.keys.pop(),W=d[I];g.push(_[W]),m.push(y[W]),delete d[I]}},l.prototype.setWorld=function(g){};var v=new s;l.boundingSphereCheck=function(g,m){var d=v;return g.position.vsub(m.position,d),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>d.norm2()},l.prototype.aabbQuery=function(g,m,d){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(n,i,r){i.exports=l;var o=n("./Broadphase"),s=n("../math/Vec3"),a=n("../shapes/Shape");function l(h,u,f,p,v){o.apply(this),this.nx=f||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new s(100,100,100),this.aabbMax=u||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new o,l.prototype.constructor=l;var c=new s;new s,l.prototype.collisionPairs=function(h,u,f){var p=h.numObjects(),v=h.bodies,ee=this.aabbMax,V=this.aabbMin,g=this.nx,m=this.ny,d=this.nz,_=m*d,y=d,x=1,T=ee.x,R=ee.y,A=ee.z,I=V.x,W=V.y,S=V.z,M=g/(T-I),F=m/(R-W),U=d/(A-S),Y=(T-I)/g,$=(R-W)/m,Q=(A-S)/d,O=Math.sqrt(Y*Y+$*$+Q*Q)*.5,C=a.types,X=C.SPHERE,H=C.PLANE;C.BOX,C.COMPOUND,C.CONVEXPOLYHEDRON;for(var D=this.bins,K=this.binLengths,z=this.bins.length,P=0;P!==z;P++)K[P]=0;var b=Math.ceil,V=Math.min,ee=Math.max;function te(Me,We,Qe,Ze,ze,st,tt){var dt=(Me-I)*M|0,j=(We-W)*F|0,Fe=(Qe-S)*U|0,ue=b((Ze-I)*M),pe=b((ze-W)*F),Pe=b((st-S)*U);dt<0?dt=0:dt>=g&&(dt=g-1),j<0?j=0:j>=m&&(j=m-1),Fe<0?Fe=0:Fe>=d&&(Fe=d-1),ue<0?ue=0:ue>=g&&(ue=g-1),pe<0?pe=0:pe>=m&&(pe=m-1),Pe<0?Pe=0:Pe>=d&&(Pe=d-1),dt*=_,j*=y,Fe*=x,ue*=_,pe*=y,Pe*=x;for(var Ve=dt;Ve<=ue;Ve+=_)for(var at=j;at<=pe;at+=y)for(var wt=Fe;wt<=Pe;wt+=x){var kt=Ve+at+wt;D[kt][K[kt]++]=tt}}for(var P=0;P!==p;P++){var q=v[P],ie=q.shape;switch(ie.type){case X:var he=q.position.x,we=q.position.y,N=q.position.z,Re=ie.radius;te(he-Re,we-Re,N-Re,he+Re,we+Re,N+Re,q);break;case H:ie.worldNormalNeedsUpdate&&ie.computeWorldNormal(q.quaternion);var oe=ie.worldNormal,ce=I+Y*.5-q.position.x,Ue=W+$*.5-q.position.y,ke=S+Q*.5-q.position.z,Ge=c;Ge.set(ce,Ue,ke);for(var L=0,E=0;L!==g;L++,E+=_,Ge.y=Ue,Ge.x+=Y)for(var J=0,se=0;J!==m;J++,se+=y,Ge.z=ke,Ge.y+=$)for(var fe=0,re=0;fe!==d;fe++,re+=x,Ge.z+=Q)if(Ge.dot(oe)<O){var Ie=E+se+re;D[Ie][K[Ie]++]=q}break;default:q.aabbNeedsUpdate&&q.computeAABB(),te(q.aabb.lowerBound.x,q.aabb.lowerBound.y,q.aabb.lowerBound.z,q.aabb.upperBound.x,q.aabb.upperBound.y,q.aabb.upperBound.z,q);break}}for(var P=0;P!==z;P++){var _e=K[P];if(_e>1)for(var be=D[P],L=0;L!==_e;L++)for(var q=be[L],J=0;J!==L;J++){var rt=be[J];this.needBroadphaseCollision(q,rt)&&this.intersectionTest(q,rt,u,f)}}this.makePairsUnique(u,f)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(n,i,r){i.exports=a;var o=n("./Broadphase"),s=n("./AABB");function a(){o.apply(this)}a.prototype=new o,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,c,h){var u=l.bodies,f=u.length,p,v,g,m;for(p=0;p!==f;p++)for(v=0;v!==p;v++)g=u[p],m=u[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,c,h)},new s,a.prototype.aabbQuery=function(l,c,h){h=h||[];for(var u=0;u<l.bodies.length;u++){var f=l.bodies[u];f.aabbNeedsUpdate&&f.computeAABB(),f.aabb.overlaps(c)&&h.push(f)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(n,i,r){i.exports=o;function o(){this.matrix={}}o.prototype.get=function(s,a){if(s=s.id,a=a.id,a>s){var l=a;a=s,s=l}return s+"-"+a in this.matrix},o.prototype.set=function(s,a,l){if(s=s.id,a=a.id,a>s){var c=a;a=s,s=c}l?this.matrix[s+"-"+a]=!0:delete this.matrix[s+"-"+a]},o.prototype.reset=function(){this.matrix={}},o.prototype.setNumObjects=function(s){}},{}],9:[function(n,i,r){i.exports=u;var o=n("../math/Vec3"),s=n("../math/Quaternion"),a=n("../math/Transform");n("../shapes/ConvexPolyhedron"),n("../shapes/Box");var l=n("../collision/RaycastResult"),c=n("../shapes/Shape"),h=n("../collision/AABB");function u(z,P){this.from=z?z.clone():new o,this.to=P?P.clone():new o,this._direction=new o,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=u.ANY,this.result=new l,this.hasHit=!1,this.callback=function(b){}}u.prototype.constructor=u,u.CLOSEST=1,u.ANY=2,u.ALL=4;var f=new h,p=[];u.prototype.intersectWorld=function(z,P){return this.mode=P.mode||u.ANY,this.result=P.result||new l,this.skipBackfaces=!!P.skipBackfaces,this.collisionFilterMask=typeof P.collisionFilterMask<"u"?P.collisionFilterMask:-1,this.collisionFilterGroup=typeof P.collisionFilterGroup<"u"?P.collisionFilterGroup:-1,P.from&&this.from.copy(P.from),P.to&&this.to.copy(P.to),this.callback=P.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(f),p.length=0,z.broadphase.aabbQuery(z,f,p),this.intersectBodies(p),this.hasHit};var v=new o,g=new o;u.pointInTriangle=m;function m(z,P,b,V){V.vsub(P,H),b.vsub(P,v),z.vsub(P,g);var ee=H.dot(H),te=H.dot(v),q=H.dot(g),ie=v.dot(v),he=v.dot(g),we,N;return(we=ie*q-te*he)>=0&&(N=ee*he-te*q)>=0&&we+N<ee*ie-te*te}var d=new o,_=new s;u.prototype.intersectBody=function(z,P){P&&(this.result=P,this._updateDirection());var b=this.checkCollisionResponse;if(!(b&&!z.collisionResponse)&&!(!(this.collisionFilterGroup&z.collisionFilterMask)||!(z.collisionFilterGroup&this.collisionFilterMask)))for(var V=d,ee=_,te=0,q=z.shapes.length;te<q;te++){var ie=z.shapes[te];if(!(b&&!ie.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[te],ee),z.quaternion.vmult(z.shapeOffsets[te],V),V.vadd(z.position,V),this.intersectShape(ie,ee,V,z),this.result._shouldStop))break}},u.prototype.intersectBodies=function(z,P){P&&(this.result=P,this._updateDirection());for(var b=0,V=z.length;!this.result._shouldStop&&b<V;b++)this.intersectBody(z[b])},u.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},u.prototype.intersectShape=function(z,P,b,V){var ee=this.from,te=K(ee,this._direction,b);if(!(te>z.boundingSphereRadius)){var q=this[z.type];q&&q.call(this,z,P,b,V)}},new o,new o;var y=new o,x=new o,T=new o,R=new o;new o,new l,u.prototype.intersectBox=function(z,P,b,V){return this.intersectConvex(z.convexPolyhedronRepresentation,P,b,V)},u.prototype[c.types.BOX]=u.prototype.intersectBox,u.prototype.intersectPlane=function(z,P,b,V){var ee=this.from,te=this.to,q=this._direction,ie=new o(0,0,1);P.vmult(ie,ie);var he=new o;ee.vsub(b,he);var we=he.dot(ie);te.vsub(b,he);var N=he.dot(ie);if(!(we*N>0)&&!(ee.distanceTo(te)<we)){var Re=ie.dot(q);if(!(Math.abs(Re)<this.precision)){var oe=new o,ce=new o,Ue=new o;ee.vsub(b,oe);var ke=-ie.dot(oe)/Re;q.scale(ke,ce),ee.vadd(ce,Ue),this.reportIntersection(ie,Ue,z,V,-1)}}},u.prototype[c.types.PLANE]=u.prototype.intersectPlane,u.prototype.getAABB=function(z){var P=this.to,b=this.from;z.lowerBound.x=Math.min(P.x,b.x),z.lowerBound.y=Math.min(P.y,b.y),z.lowerBound.z=Math.min(P.z,b.z),z.upperBound.x=Math.max(P.x,b.x),z.upperBound.y=Math.max(P.y,b.y),z.upperBound.z=Math.max(P.z,b.z)};var A={faceList:[0]};u.prototype.intersectHeightfield=function(z,P,b,V){z.data,z.elementSize;var ee=new o,te=new u(this.from,this.to);a.pointToLocalFrame(b,P,te.from,te.from),a.pointToLocalFrame(b,P,te.to,te.to);var q=[],ie=null,he=null,we=null,N=null,Re=z.getIndexOfPosition(te.from.x,te.from.y,q,!1);if(Re&&(ie=q[0],he=q[1],we=q[0],N=q[1]),Re=z.getIndexOfPosition(te.to.x,te.to.y,q,!1),Re&&((ie===null||q[0]<ie)&&(ie=q[0]),(we===null||q[0]>we)&&(we=q[0]),(he===null||q[1]<he)&&(he=q[1]),(N===null||q[1]>N)&&(N=q[1])),ie!==null){var oe=[];z.getRectMinMax(ie,he,we,N,oe),oe[0],oe[1];for(var ce=ie;ce<=we;ce++)for(var Ue=he;Ue<=N;Ue++){if(this.result._shouldStop||(z.getConvexTrianglePillar(ce,Ue,!1),a.pointToWorldFrame(b,P,z.pillarOffset,ee),this.intersectConvex(z.pillarConvex,P,ee,V,A),this.result._shouldStop))return;z.getConvexTrianglePillar(ce,Ue,!0),a.pointToWorldFrame(b,P,z.pillarOffset,ee),this.intersectConvex(z.pillarConvex,P,ee,V,A)}}},u.prototype[c.types.HEIGHTFIELD]=u.prototype.intersectHeightfield;var I=new o,W=new o;u.prototype.intersectSphere=function(z,P,b,V){var ee=this.from,te=this.to,q=z.radius,ie=Math.pow(te.x-ee.x,2)+Math.pow(te.y-ee.y,2)+Math.pow(te.z-ee.z,2),he=2*((te.x-ee.x)*(ee.x-b.x)+(te.y-ee.y)*(ee.y-b.y)+(te.z-ee.z)*(ee.z-b.z)),we=Math.pow(ee.x-b.x,2)+Math.pow(ee.y-b.y,2)+Math.pow(ee.z-b.z,2)-Math.pow(q,2),N=Math.pow(he,2)-4*ie*we,Re=I,oe=W;if(!(N<0))if(N===0)ee.lerp(te,N,Re),Re.vsub(b,oe),oe.normalize(),this.reportIntersection(oe,Re,z,V,-1);else{var ce=(-he-Math.sqrt(N))/(2*ie),Ue=(-he+Math.sqrt(N))/(2*ie);if(ce>=0&&ce<=1&&(ee.lerp(te,ce,Re),Re.vsub(b,oe),oe.normalize(),this.reportIntersection(oe,Re,z,V,-1)),this.result._shouldStop)return;Ue>=0&&Ue<=1&&(ee.lerp(te,Ue,Re),Re.vsub(b,oe),oe.normalize(),this.reportIntersection(oe,Re,z,V,-1))}},u.prototype[c.types.SPHERE]=u.prototype.intersectSphere;var S=new o;new o,new o;var M=new o;u.prototype.intersectConvex=function(P,b,V,ee,te){for(var q=S,ie=M,he=te&&te.faceList||null,we=P.faces,N=P.vertices,Re=P.faceNormals,oe=this._direction,ce=this.from,Ue=this.to,ke=ce.distanceTo(Ue),Ge=he?he.length:we.length,L=this.result,E=0;!L._shouldStop&&E<Ge;E++){var J=he?he[E]:E,se=we[J],fe=Re[J],re=b,Ie=V;ie.copy(N[se[0]]),re.vmult(ie,ie),ie.vadd(Ie,ie),ie.vsub(ce,ie),re.vmult(fe,q);var _e=oe.dot(q);if(!(Math.abs(_e)<this.precision)){var be=q.dot(ie)/_e;if(!(be<0)){oe.mult(be,y),y.vadd(ce,y),x.copy(N[se[0]]),re.vmult(x,x),Ie.vadd(x,x);for(var rt=1;!L._shouldStop&&rt<se.length-1;rt++){T.copy(N[se[rt]]),R.copy(N[se[rt+1]]),re.vmult(T,T),re.vmult(R,R),Ie.vadd(T,T),Ie.vadd(R,R);var Me=y.distanceTo(ce);!(m(y,x,T,R)||m(y,T,x,R))||Me>ke||this.reportIntersection(q,y,P,ee,J)}}}}},u.prototype[c.types.CONVEXPOLYHEDRON]=u.prototype.intersectConvex;var F=new o,U=new o,Y=new o,$=new o,Q=new o,O=new o;new h;var C=[],X=new a;u.prototype.intersectTrimesh=function(P,b,V,ee,te){var q=F,ie=C,he=X,we=M,N=U,Re=Y,oe=$,ce=O,Ue=Q;te&&te.faceList;var ke=P.indices;P.vertices,P.faceNormals;var Ge=this.from,L=this.to,E=this._direction;he.position.copy(V),he.quaternion.copy(b),a.vectorToLocalFrame(V,b,E,N),a.pointToLocalFrame(V,b,Ge,Re),a.pointToLocalFrame(V,b,L,oe);var J=Re.distanceSquared(oe);P.tree.rayQuery(this,he,ie);for(var se=0,fe=ie.length;!this.result._shouldStop&&se!==fe;se++){var re=ie[se];P.getNormal(re,q),P.getVertex(ke[re*3],x),x.vsub(Re,we);var Ie=N.dot(q),_e=q.dot(we)/Ie;if(!(_e<0)){N.scale(_e,y),y.vadd(Re,y),P.getVertex(ke[re*3+1],T),P.getVertex(ke[re*3+2],R);var be=y.distanceSquared(Re);!(m(y,T,x,R)||m(y,x,T,R))||be>J||(a.vectorToWorldFrame(b,q,Ue),a.pointToWorldFrame(V,b,y,ce),this.reportIntersection(Ue,ce,P,ee,re))}}ie.length=0},u.prototype[c.types.TRIMESH]=u.prototype.intersectTrimesh,u.prototype.reportIntersection=function(z,P,b,V,ee){var te=this.from,q=this.to,ie=te.distanceTo(P),he=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(he.hitFaceIndex=typeof ee<"u"?ee:-1,this.mode){case u.ALL:this.hasHit=!0,he.set(te,q,z,P,b,V,ie),he.hasHit=!0,this.callback(he);break;case u.CLOSEST:(ie<he.distance||!he.hasHit)&&(this.hasHit=!0,he.hasHit=!0,he.set(te,q,z,P,b,V,ie));break;case u.ANY:this.hasHit=!0,he.hasHit=!0,he.set(te,q,z,P,b,V,ie),he._shouldStop=!0;break}};var H=new o,D=new o;function K(z,P,b){b.vsub(z,H);var V=H.dot(P);P.mult(V,D),D.vadd(z,D);var ee=b.distanceTo(D);return ee}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(n,i,r){var o=n("../math/Vec3");i.exports=s;function s(){this.rayFromWorld=new o,this.rayToWorld=new o,this.hitNormalWorld=new o,this.hitPointWorld=new o,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(a,l,c,h,u,f,p){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(c),this.hitPointWorld.copy(h),this.shape=u,this.body=f,this.distance=p}},{"../math/Vec3":30}],11:[function(n,i,r){n("../shapes/Shape");var o=n("../collision/Broadphase");i.exports=s;function s(a){o.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(c){l.push(c.body)},this._removeBodyHandler=function(c){var h=l.indexOf(c.body);h!==-1&&l.splice(h,1)},a&&this.setWorld(a)}s.prototype=new o,s.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},s.insertionSortX=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.x<=h.aabb.lowerBound.x);u--)a[u+1]=a[u];a[u+1]=h}return a},s.insertionSortY=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.y<=h.aabb.lowerBound.y);u--)a[u+1]=a[u];a[u+1]=h}return a},s.insertionSortZ=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.z<=h.aabb.lowerBound.z);u--)a[u+1]=a[u];a[u+1]=h}return a},s.prototype.collisionPairs=function(a,l,c){var h=this.axisList,u=h.length,f=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==u;p++){var g=h[p];for(v=p+1;v<u;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,f))break;this.intersectionTest(g,m,l,c)}}}},s.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,c=a.length,h=0;h!==c;h++){var u=a[h];u.aabbNeedsUpdate&&u.computeAABB()}l===0?s.insertionSortX(a):l===1?s.insertionSortY(a):l===2&&s.insertionSortZ(a)},s.checkBounds=function(a,l,c){var h,u;c===0?(h=a.position.x,u=l.position.x):c===1?(h=a.position.y,u=l.position.y):c===2&&(h=a.position.z,u=l.position.z);var f=a.boundingRadius,p=l.boundingRadius,v=h+f,g=u-p;return g<v},s.prototype.autoDetectAxis=function(){for(var a=0,l=0,c=0,h=0,u=0,f=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var d=p[m],_=d.position.x;a+=_,l+=_*_;var y=d.position.y;c+=y,h+=y*y;var x=d.position.z;u+=x,f+=x*x}var T=l-a*a*g,R=h-c*c*g,A=f-u*u*g;T>R?T>A?this.axisIndex=0:this.axisIndex=2:R>A?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(a,l,c){c=c||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,u="x";h===1&&(u="y"),h===2&&(u="z");var f=this.axisList;l.lowerBound[u],l.upperBound[u];for(var p=0;p<f.length;p++){var v=f[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&c.push(v)}return c}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(n,i,r){i.exports=c,n("./Constraint");var o=n("./PointToPointConstraint"),s=n("../equations/ConeEquation"),a=n("../equations/RotationalEquation");n("../equations/ContactEquation");var l=n("../math/Vec3");function c(h,u,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6,v=f.pivotA?f.pivotA.clone():new l,g=f.pivotB?f.pivotB.clone():new l;this.axisA=f.axisA?f.axisA.clone():new l,this.axisB=f.axisB?f.axisB.clone():new l,o.call(this,h,v,u,g,p),this.collideConnected=!!f.collideConnected,this.angle=typeof f.angle<"u"?f.angle:0;var m=this.coneEquation=new s(h,u,f),d=this.twistEquation=new a(h,u,f);this.twistAngle=typeof f.twistAngle<"u"?f.twistAngle:0,m.maxForce=0,m.minForce=-p,d.maxForce=0,d.minForce=-p,this.equations.push(m,d)}c.prototype=new o,c.constructor=c,new l,new l,c.prototype.update=function(){var h=this.bodyA,u=this.bodyB,f=this.coneEquation,p=this.twistEquation;o.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,f.axisA),u.vectorToWorldFrame(this.axisB,f.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),u.vectorToWorldFrame(p.axisB,p.axisB),f.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(n,i,r){i.exports=s;var o=n("../utils/Utils");function s(a,l,c){c=o.defaults(c,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=s.idCounter++,this.collideConnected=c.collideConnected,c.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},s.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(n,i,r){i.exports=a;var o=n("./Constraint"),s=n("../equations/ContactEquation");function a(l,c,h,u){o.call(this,l,c),typeof h>"u"&&(h=l.position.distanceTo(c.position)),typeof u>"u"&&(u=1e6),this.distance=h;var f=this.distanceEquation=new s(l,c);this.equations.push(f),f.minForce=-u,f.maxForce=u}a.prototype=new o,a.prototype.update=function(){var l=this.bodyA,c=this.bodyB,h=this.distanceEquation,u=this.distance*.5,f=h.ni;c.position.vsub(l.position,f),f.normalize(),f.mult(u,h.ri),f.mult(-u,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(n,i,r){i.exports=c,n("./Constraint");var o=n("./PointToPointConstraint"),s=n("../equations/RotationalEquation"),a=n("../equations/RotationalMotorEquation");n("../equations/ContactEquation");var l=n("../math/Vec3");function c(f,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,d=v.pivotB?v.pivotB.clone():new l;o.call(this,f,m,p,d,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new s(f,p,v),T=this.rotationalEquation2=new s(f,p,v),R=this.motorEquation=new a(f,p,g);R.enabled=!1,this.equations.push(x,T,R)}c.prototype=new o,c.constructor=c,c.prototype.enableMotor=function(){this.motorEquation.enabled=!0},c.prototype.disableMotor=function(){this.motorEquation.enabled=!1},c.prototype.setMotorSpeed=function(f){this.motorEquation.targetVelocity=f},c.prototype.setMotorMaxForce=function(f){this.motorEquation.maxForce=f,this.motorEquation.minForce=-f};var h=new l,u=new l;c.prototype.update=function(){var f=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,d=h,_=u,y=this.axisA,x=this.axisB;o.prototype.update.call(this),f.quaternion.vmult(y,d),p.quaternion.vmult(x,_),d.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(f.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(n,i,r){i.exports=l,n("./Constraint");var o=n("./PointToPointConstraint"),s=n("../equations/RotationalEquation");n("../equations/RotationalMotorEquation"),n("../equations/ContactEquation");var a=n("../math/Vec3");function l(c,h,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6,p=new a,v=new a,g=new a;c.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),c.pointToLocalFrame(g,p),o.call(this,c,p,h,v,f);var m=this.rotationalEquation1=new s(c,h,u),d=this.rotationalEquation2=new s(c,h,u),_=this.rotationalEquation3=new s(c,h,u);this.equations.push(m,d,_)}l.prototype=new o,l.constructor=l,new a,new a,l.prototype.update=function(){var c=this.bodyA,h=this.bodyB;this.motorEquation;var u=this.rotationalEquation1,f=this.rotationalEquation2,p=this.rotationalEquation3;o.prototype.update.call(this),c.vectorToWorldFrame(a.UNIT_X,u.axisA),h.vectorToWorldFrame(a.UNIT_Y,u.axisB),c.vectorToWorldFrame(a.UNIT_Y,f.axisA),h.vectorToWorldFrame(a.UNIT_Z,f.axisB),c.vectorToWorldFrame(a.UNIT_Z,p.axisA),h.vectorToWorldFrame(a.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(n,i,r){i.exports=l;var o=n("./Constraint"),s=n("../equations/ContactEquation"),a=n("../math/Vec3");function l(c,h,u,f,p){o.call(this,c,u),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new a,this.pivotB=f?f.clone():new a;var v=this.equationX=new s(c,u),g=this.equationY=new s(c,u),m=this.equationZ=new s(c,u);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new o,l.prototype.update=function(){var c=this.bodyA,h=this.bodyB,u=this.equationX,f=this.equationY,p=this.equationZ;c.quaternion.vmult(this.pivotA,u.ri),h.quaternion.vmult(this.pivotB,u.rj),f.ri.copy(u.ri),f.rj.copy(u.rj),p.ri.copy(u.ri),p.rj.copy(u.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(n,i,r){i.exports=a;var o=n("../math/Vec3");n("../math/Mat3");var s=n("./Equation");function a(h,u,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6;s.call(this,h,u,-p,p),this.axisA=f.axisA?f.axisA.clone():new o(1,0,0),this.axisB=f.axisB?f.axisB.clone():new o(0,1,0),this.angle=typeof f.angle<"u"?f.angle:0}a.prototype=new s,a.prototype.constructor=a;var l=new o,c=new o;a.prototype.computeB=function(h){var u=this.a,f=this.b,p=this.axisA,v=this.axisB,g=l,m=c,d=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),d.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.angle)-p.dot(v),x=this.computeGW(),T=this.computeGiMf(),R=-y*u-x*f-h*T;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(n,i,r){i.exports=a;var o=n("./Equation"),s=n("../math/Vec3");n("../math/Mat3");function a(m,d,_){_=typeof _<"u"?_:1e6,o.call(this,m,d,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}a.prototype=new o,a.prototype.constructor=a;var l=new s,c=new s,h=new s;a.prototype.computeB=function(m){var d=this.a,_=this.b,y=this.bi,x=this.bj,T=this.ri,R=this.rj,A=l,I=c,W=y.velocity,S=y.angularVelocity;y.force,y.torque;var M=x.velocity,F=x.angularVelocity;x.force,x.torque;var U=h,Y=this.jacobianElementA,$=this.jacobianElementB,Q=this.ni;T.cross(Q,A),R.cross(Q,I),Q.negate(Y.spatial),A.negate(Y.rotational),$.spatial.copy(Q),$.rotational.copy(I),U.copy(x.position),U.vadd(R,U),U.vsub(y.position,U),U.vsub(T,U);var O=Q.dot(U),C=this.restitution+1,X=C*M.dot(Q)-C*W.dot(Q)+F.dot(I)-S.dot(A),H=this.computeGiMf(),D=-O*d-X*_-m*H;return D};var u=new s,f=new s,p=new s,v=new s,g=new s;a.prototype.getImpactVelocityAlongNormal=function(){var m=u,d=f,_=p,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,d),m.vsub(d,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(n,i,r){i.exports=a;var o=n("../math/JacobianElement"),s=n("../math/Vec3");function a(g,m,d,_){this.id=a.id++,this.minForce=typeof d>"u"?-1e6:d,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new o,this.jacobianElementB=new o,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,m,d){var _=m,y=g,x=d;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},a.prototype.computeB=function(g,m,d){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*m-x*d},a.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.position,x=_.position;return g.spatial.dot(y)+m.spatial.dot(x)};var l=new s;a.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.velocity,x=_.velocity,T=d.angularVelocity||l,R=_.angularVelocity||l;return g.multiplyVectors(y,T)+m.multiplyVectors(x,R)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.vlambda,x=_.vlambda,T=d.wlambda||l,R=_.wlambda||l;return g.multiplyVectors(y,T)+m.multiplyVectors(x,R)};var c=new s,h=new s,u=new s,f=new s;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.force,x=d.torque,T=_.force,R=_.torque,A=d.invMassSolve,I=_.invMassSolve;return d.invInertiaWorldSolve?d.invInertiaWorldSolve.vmult(x,u):u.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(R,f):f.set(0,0,0),y.mult(A,c),T.mult(I,h),g.multiplyVectors(c,u)+m.multiplyVectors(h,f)};var p=new s;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.invMassSolve,x=_.invMassSolve,T=d.invInertiaWorldSolve,R=_.invInertiaWorldSolve,A=y+x;return T&&(T.vmult(g.rotational,p),A+=p.dot(g.rotational)),R&&(R.vmult(m.rotational,p),A+=p.dot(m.rotational)),A};var v=new s;new s,new s,new s,new s,new s,a.prototype.addToWlambda=function(g){var m=this.jacobianElementA,d=this.jacobianElementB,_=this.bi,y=this.bj,x=v;m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),d.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(d.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(n,i,r){i.exports=a;var o=n("./Equation"),s=n("../math/Vec3");n("../math/Mat3");function a(h,u,f){o.call(this,h,u,-f,f),this.ri=new s,this.rj=new s,this.t=new s}a.prototype=new o,a.prototype.constructor=a;var l=new s,c=new s;a.prototype.computeB=function(h){this.a;var u=this.b;this.bi,this.bj;var f=this.ri,p=this.rj,v=l,g=c,m=this.t;f.cross(m,v),p.cross(m,g);var d=this.jacobianElementA,_=this.jacobianElementB;m.negate(d.spatial),v.negate(d.rotational),_.spatial.copy(m),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),T=-y*u-h*x;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(n,i,r){i.exports=a;var o=n("../math/Vec3");n("../math/Mat3");var s=n("./Equation");function a(h,u,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6;s.call(this,h,u,-p,p),this.axisA=f.axisA?f.axisA.clone():new o(1,0,0),this.axisB=f.axisB?f.axisB.clone():new o(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new s,a.prototype.constructor=a;var l=new o,c=new o;a.prototype.computeB=function(h){var u=this.a,f=this.b,p=this.axisA,v=this.axisB,g=l,m=c,d=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),d.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-p.dot(v),x=this.computeGW(),T=this.computeGiMf(),R=-y*u-x*f-h*T;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(n,i,r){i.exports=a;var o=n("../math/Vec3");n("../math/Mat3");var s=n("./Equation");function a(l,c,h){h=typeof h<"u"?h:1e6,s.call(this,l,c,-h,h),this.axisA=new o,this.axisB=new o,this.targetVelocity=0}a.prototype=new s,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var c=this.b;this.bi,this.bj;var h=this.axisA,u=this.axisB,f=this.jacobianElementA,p=this.jacobianElementB;f.rotational.copy(h),u.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*c-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(n,i,r){var o=n("../utils/Utils");i.exports=s;function s(a,l,c){c=o.defaults(c,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[a,l],this.friction=c.friction,this.restitution=c.restitution,this.contactEquationStiffness=c.contactEquationStiffness,this.contactEquationRelaxation=c.contactEquationRelaxation,this.frictionEquationStiffness=c.frictionEquationStiffness,this.frictionEquationRelaxation=c.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(n,i,r){i.exports=o;function o(s){var a="";s=s||{},typeof s=="string"?(a=s,s={}):typeof s=="object"&&(a=""),this.name=a,this.id=o.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}o.idCounter=0},{}],26:[function(n,i,r){i.exports=s;var o=n("./Vec3");function s(){this.spatial=new o,this.rotational=new o}s.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(n,i,r){i.exports=s;var o=n("./Vec3");function s(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},s.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},s.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},s.prototype.getTrace=function(l){var l=l||new o,c=this.elements;l.x=c[0],l.y=c[4],l.z=c[8]},s.prototype.vmult=function(a,l){l=l||new o;var c=this.elements,h=a.x,u=a.y,f=a.z;return l.x=c[0]*h+c[1]*u+c[2]*f,l.y=c[3]*h+c[4]*u+c[5]*f,l.z=c[6]*h+c[7]*u+c[8]*f,l},s.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},s.prototype.mmult=function(a,l){for(var c=l||new s,h=0;h<3;h++)for(var u=0;u<3;u++){for(var f=0,p=0;p<3;p++)f+=a.elements[h+p*3]*this.elements[p+u*3];c.elements[h+u*3]=f}return c},s.prototype.scale=function(a,l){l=l||new s;for(var c=this.elements,h=l.elements,u=0;u!==3;u++)h[3*u+0]=a.x*c[3*u+0],h[3*u+1]=a.y*c[3*u+1],h[3*u+2]=a.z*c[3*u+2];return l},s.prototype.solve=function(a,l){l=l||new o;for(var c=3,h=4,u=[],f=0;f<c*h;f++)u.push(0);var f,p;for(f=0;f<3;f++)for(p=0;p<3;p++)u[f+h*p]=this.elements[f+3*p];u[3+4*0]=a.x,u[3+4*1]=a.y,u[3+4*2]=a.z;var v=3,g=v,m,d=4,_;do{if(f=g-v,u[f+h*f]===0){for(p=f+1;p<g;p++)if(u[f+h*p]!==0){m=d;do _=d-m,u[_+h*f]+=u[_+h*p];while(--m);break}}if(u[f+h*f]!==0)for(p=f+1;p<g;p++){var y=u[f+h*p]/u[f+h*f];m=d;do _=d-m,u[_+h*p]=_<=f?0:u[_+h*p]-u[_+h*f]*y;while(--m)}}while(--v);if(l.z=u[2*h+3]/u[2*h+2],l.y=(u[1*h+3]-u[1*h+2]*l.z)/u[1*h+1],l.x=(u[0*h+3]-u[0*h+2]*l.z-u[0*h+1]*l.y)/u[0*h+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},s.prototype.e=function(a,l,c){if(c===void 0)return this.elements[l+3*a];this.elements[l+3*a]=c},s.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},s.prototype.toString=function(){for(var a="",l=",",c=0;c<9;c++)a+=this.elements[c]+l;return a},s.prototype.reverse=function(a){a=a||new s;for(var l=3,c=6,h=[],u=0;u<l*c;u++)h.push(0);var u,f;for(u=0;u<3;u++)for(f=0;f<3;f++)h[u+c*f]=this.elements[u+3*f];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,v=p,g,m=c,d;do{if(u=v-p,h[u+c*u]===0){for(f=u+1;f<v;f++)if(h[u+c*f]!==0){g=m;do d=m-g,h[d+c*u]+=h[d+c*f];while(--g);break}}if(h[u+c*u]!==0)for(f=u+1;f<v;f++){var _=h[u+c*f]/h[u+c*u];g=m;do d=m-g,h[d+c*f]=d<=u?0:h[d+c*f]-h[d+c*u]*_;while(--g)}}while(--p);u=2;do{f=u-1;do{var _=h[u+c*f]/h[u+c*u];g=c;do d=c-g,h[d+c*f]=h[d+c*f]-h[d+c*u]*_;while(--g)}while(f--)}while(--u);u=2;do{var _=1/h[u+c*u];g=c;do d=c-g,h[d+c*u]=h[d+c*u]*_;while(--g)}while(u--);u=2;do{f=2;do{if(d=h[l+f+c*u],isNaN(d)||d===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(u,f,d)}while(f--)}while(u--);return a},s.prototype.setRotationFromQuaternion=function(a){var l=a.x,c=a.y,h=a.z,u=a.w,f=l+l,p=c+c,v=h+h,g=l*f,m=l*p,d=l*v,_=c*p,y=c*v,x=h*v,T=u*f,R=u*p,A=u*v,I=this.elements;return I[3*0+0]=1-(_+x),I[3*0+1]=m-A,I[3*0+2]=d+R,I[3*1+0]=m+A,I[3*1+1]=1-(g+x),I[3*1+2]=y-T,I[3*2+0]=d-R,I[3*2+1]=y+T,I[3*2+2]=1-(g+_),this},s.prototype.transpose=function(a){a=a||new s;for(var l=a.elements,c=this.elements,h=0;h!==3;h++)for(var u=0;u!==3;u++)l[3*h+u]=c[3*u+h];return a}},{"./Vec3":30}],28:[function(n,i,r){i.exports=s;var o=n("./Vec3");function s(f,p,v,g){this.x=f!==void 0?f:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(f,p,v,g){this.x=f,this.y=p,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(f,p){var v=Math.sin(p*.5);this.x=f.x*v,this.y=f.y*v,this.z=f.z*v,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(f){f=f||new o,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(f.x=this.x,f.y=this.y,f.z=this.z):(f.x=this.x/v,f.y=this.y/v,f.z=this.z/v),[f,p]};var a=new o,l=new o;s.prototype.setFromVectors=function(f,p){if(f.isAntiparallelTo(p)){var v=a,g=l;f.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=f.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(f.norm(),2)*Math.pow(p.norm(),2))+f.dot(p),this.normalize()}};var c=new o,h=new o,u=new o;s.prototype.mult=function(f,p){p=p||new s;var v=this.w,g=c,m=h,d=u;return g.set(this.x,this.y,this.z),m.set(f.x,f.y,f.z),p.w=v*f.w-g.dot(m),g.cross(m,d),p.x=v*m.x+f.w*g.x+d.x,p.y=v*m.y+f.w*g.y+d.y,p.z=v*m.z+f.w*g.z+d.z,p},s.prototype.inverse=function(f){var p=this.x,v=this.y,g=this.z,m=this.w;f=f||new s,this.conjugate(f);var d=1/(p*p+v*v+g*g+m*m);return f.x*=d,f.y*=d,f.z*=d,f.w*=d,f},s.prototype.conjugate=function(f){return f=f||new s,f.x=-this.x,f.y=-this.y,f.z=-this.z,f.w=this.w,f},s.prototype.normalize=function(){var f=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(f=1/f,this.x*=f,this.y*=f,this.z*=f,this.w*=f)},s.prototype.normalizeFast=function(){var f=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=f,this.y*=f,this.z*=f,this.w*=f)},s.prototype.vmult=function(f,p){p=p||new o;var v=f.x,g=f.y,m=f.z,d=this.x,_=this.y,y=this.z,x=this.w,T=x*v+_*m-y*g,R=x*g+y*v-d*m,A=x*m+d*g-_*v,I=-d*v-_*g-y*m;return p.x=T*x+I*-d+R*-y-A*-_,p.y=R*x+I*-_+A*-d-T*-y,p.z=A*x+I*-y+T*-_-R*-d,p},s.prototype.copy=function(f){return this.x=f.x,this.y=f.y,this.z=f.z,this.w=f.w,this},s.prototype.toEuler=function(f,p){p=p||"YZX";var v,g,m,d=this.x,_=this.y,y=this.z,x=this.w;switch(p){case"YZX":var T=d*_+y*x;if(T>.499&&(v=2*Math.atan2(d,x),g=Math.PI/2,m=0),T<-.499&&(v=-2*Math.atan2(d,x),g=-Math.PI/2,m=0),isNaN(v)){var R=d*d,A=_*_,I=y*y;v=Math.atan2(2*_*x-2*d*y,1-2*A-2*I),g=Math.asin(2*T),m=Math.atan2(2*d*x-2*_*y,1-2*R-2*I)}break;default:throw new Error("Euler order "+p+" not supported yet.")}f.y=v,f.z=g,f.x=m},s.prototype.setFromEuler=function(f,p,v,g){g=g||"XYZ";var m=Math.cos(f/2),d=Math.cos(p/2),_=Math.cos(v/2),y=Math.sin(f/2),x=Math.sin(p/2),T=Math.sin(v/2);return g==="XYZ"?(this.x=y*d*_+m*x*T,this.y=m*x*_-y*d*T,this.z=m*d*T+y*x*_,this.w=m*d*_-y*x*T):g==="YXZ"?(this.x=y*d*_+m*x*T,this.y=m*x*_-y*d*T,this.z=m*d*T-y*x*_,this.w=m*d*_+y*x*T):g==="ZXY"?(this.x=y*d*_-m*x*T,this.y=m*x*_+y*d*T,this.z=m*d*T+y*x*_,this.w=m*d*_-y*x*T):g==="ZYX"?(this.x=y*d*_-m*x*T,this.y=m*x*_+y*d*T,this.z=m*d*T-y*x*_,this.w=m*d*_+y*x*T):g==="YZX"?(this.x=y*d*_+m*x*T,this.y=m*x*_+y*d*T,this.z=m*d*T-y*x*_,this.w=m*d*_-y*x*T):g==="XZY"&&(this.x=y*d*_-m*x*T,this.y=m*x*_-y*d*T,this.z=m*d*T+y*x*_,this.w=m*d*_+y*x*T),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(n,i,r){var o=n("./Vec3"),s=n("./Quaternion");i.exports=a;function a(c){c=c||{},this.position=new o,c.position&&this.position.copy(c.position),this.quaternion=new s,c.quaternion&&this.quaternion.copy(c.quaternion)}var l=new s;a.pointToLocalFrame=function(c,h,u,p){var p=p||new o;return u.vsub(c,p),h.conjugate(l),l.vmult(p,p),p},a.prototype.pointToLocal=function(c,h){return a.pointToLocalFrame(this.position,this.quaternion,c,h)},a.pointToWorldFrame=function(c,h,u,p){var p=p||new o;return h.vmult(u,p),p.vadd(c,p),p},a.prototype.pointToWorld=function(c,h){return a.pointToWorldFrame(this.position,this.quaternion,c,h)},a.prototype.vectorToWorldFrame=function(c,u){var u=u||new o;return this.quaternion.vmult(c,u),u},a.vectorToWorldFrame=function(c,h,u){return c.vmult(h,u),u},a.vectorToLocalFrame=function(c,h,u,p){var p=p||new o;return h.w*=-1,h.vmult(u,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(n,i,r){i.exports=s;var o=n("./Mat3");function s(h,u,f){this.x=h||0,this.y=u||0,this.z=f||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(h,u){var f=h.x,p=h.y,v=h.z,g=this.x,m=this.y,d=this.z;return u=u||new s,u.x=m*v-d*p,u.y=d*f-g*v,u.z=g*p-m*f,u},s.prototype.set=function(h,u,f){return this.x=h,this.y=u,this.z=f,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(h,u){if(u)u.x=h.x+this.x,u.y=h.y+this.y,u.z=h.z+this.z;else return new s(this.x+h.x,this.y+h.y,this.z+h.z)},s.prototype.vsub=function(h,u){if(u)u.x=this.x-h.x,u.y=this.y-h.y,u.z=this.z-h.z;else return new s(this.x-h.x,this.y-h.y,this.z-h.z)},s.prototype.crossmat=function(){return new o([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var h=this.x,u=this.y,f=this.z,p=Math.sqrt(h*h+u*u+f*f);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(h){h=h||new s;var u=this.x,f=this.y,p=this.z,v=Math.sqrt(u*u+f*f+p*p);return v>0?(v=1/v,h.x=u*v,h.y=f*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},s.prototype.norm=function(){var h=this.x,u=this.y,f=this.z;return Math.sqrt(h*h+u*u+f*f)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(h){var u=this.x,f=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-u)*(v-u)+(g-f)*(g-f)+(m-p)*(m-p))},s.prototype.distanceSquared=function(h){var u=this.x,f=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-u)*(v-u)+(g-f)*(g-f)+(m-p)*(m-p)},s.prototype.mult=function(h,u){u=u||new s;var f=this.x,p=this.y,v=this.z;return u.x=h*f,u.y=h*p,u.z=h*v,u},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(h){return h=h||new s,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var a=new s,l=new s;s.prototype.tangents=function(h,u){var f=this.norm();if(f>0){var p=a,v=1/f;p.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,u)}else h.set(1,0,0),u.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},s.prototype.lerp=function(h,u,f){var p=this.x,v=this.y,g=this.z;f.x=p+(h.x-p)*u,f.y=v+(h.y-v)*u,f.z=g+(h.z-g)*u},s.prototype.almostEquals=function(h,u){return u===void 0&&(u=1e-6),!(Math.abs(this.x-h.x)>u||Math.abs(this.y-h.y)>u||Math.abs(this.z-h.z)>u)},s.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var c=new s;s.prototype.isAntiparallelTo=function(h,u){return this.negate(c),c.almostEquals(h,u)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(n,i,r){i.exports=u;var o=n("../utils/EventTarget");n("../shapes/Shape");var s=n("../math/Vec3"),a=n("../math/Mat3"),l=n("../math/Quaternion");n("../material/Material");var c=n("../collision/AABB"),h=n("../shapes/Box");function u(M){M=M||{},o.apply(this),this.id=u.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof M.collisionFilterGroup=="number"?M.collisionFilterGroup:1,this.collisionFilterMask=typeof M.collisionFilterMask=="number"?M.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,M.position&&this.position.copy(M.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,M.velocity&&this.velocity.copy(M.velocity),this.initVelocity=new s,this.force=new s;var F=typeof M.mass=="number"?M.mass:0;this.mass=F,this.invMass=F>0?1/F:0,this.material=M.material||null,this.linearDamping=typeof M.linearDamping=="number"?M.linearDamping:.01,this.type=F<=0?u.STATIC:u.DYNAMIC,typeof M.type==typeof u.STATIC&&(this.type=M.type),this.allowSleep=typeof M.allowSleep<"u"?M.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof M.sleepSpeedLimit<"u"?M.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof M.sleepTimeLimit<"u"?M.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new l,M.quaternion&&this.quaternion.copy(M.quaternion),this.initQuaternion=new l,this.angularVelocity=new s,M.angularVelocity&&this.angularVelocity.copy(M.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof M.fixedRotation<"u"?M.fixedRotation:!1,this.angularDamping=typeof M.angularDamping<"u"?M.angularDamping:.01,this.aabb=new c,this.aabbNeedsUpdate=!0,this.wlambda=new s,M.shape&&this.addShape(M.shape),this.updateMassProperties()}u.prototype=new o,u.prototype.constructor=u,u.DYNAMIC=1,u.STATIC=2,u.KINEMATIC=4,u.AWAKE=0,u.SLEEPY=1,u.SLEEPING=2,u.idCounter=0,u.prototype.wakeUp=function(){var M=this.sleepState;this.sleepState=0,M===u.SLEEPING&&this.dispatchEvent({type:"wakeup"})},u.prototype.sleep=function(){this.sleepState=u.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},u.sleepyEvent={type:"sleepy"},u.sleepEvent={type:"sleep"},u.prototype.sleepTick=function(M){if(this.allowSleep){var F=this.sleepState,U=this.velocity.norm2()+this.angularVelocity.norm2(),Y=Math.pow(this.sleepSpeedLimit,2);F===u.AWAKE&&U<Y?(this.sleepState=u.SLEEPY,this.timeLastSleepy=M,this.dispatchEvent(u.sleepyEvent)):F===u.SLEEPY&&U>Y?this.wakeUp():F===u.SLEEPY&&M-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(u.sleepEvent))}},u.prototype.updateSolveMassProperties=function(){this.sleepState===u.SLEEPING||this.type===u.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},u.prototype.pointToLocalFrame=function(M,U){var U=U||new s;return M.vsub(this.position,U),this.quaternion.conjugate().vmult(U,U),U},u.prototype.vectorToLocalFrame=function(M,U){var U=U||new s;return this.quaternion.conjugate().vmult(M,U),U},u.prototype.pointToWorldFrame=function(M,U){var U=U||new s;return this.quaternion.vmult(M,U),U.vadd(this.position,U),U},u.prototype.vectorToWorldFrame=function(M,U){var U=U||new s;return this.quaternion.vmult(M,U),U};var f=new s,p=new l;u.prototype.addShape=function(M,F,U){var Y=new s,$=new l;return F&&Y.copy(F),U&&$.copy(U),this.shapes.push(M),this.shapeOffsets.push(Y),this.shapeOrientations.push($),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},u.prototype.updateBoundingRadius=function(){for(var M=this.shapes,F=this.shapeOffsets,U=M.length,Y=0,$=0;$!==U;$++){var Q=M[$];Q.updateBoundingSphereRadius();var O=F[$].norm(),C=Q.boundingSphereRadius;O+C>Y&&(Y=O+C)}this.boundingRadius=Y};var v=new c;u.prototype.computeAABB=function(){for(var M=this.shapes,F=this.shapeOffsets,U=this.shapeOrientations,Y=M.length,$=f,Q=p,O=this.quaternion,C=this.aabb,X=v,H=0;H!==Y;H++){var D=M[H];U[H].mult(O,Q),Q.vmult(F[H],$),$.vadd(this.position,$),D.calculateWorldAABB($,Q,X.lowerBound,X.upperBound),H===0?C.copy(X):C.extend(X)}this.aabbNeedsUpdate=!1};var g=new a,m=new a;new a,u.prototype.updateInertiaWorld=function(M){var F=this.invInertia;if(!(F.x===F.y&&F.y===F.z&&!M)){var U=g,Y=m;U.setRotationFromQuaternion(this.quaternion),U.transpose(Y),U.scale(F,U),U.mmult(Y,this.invInertiaWorld)}};var d=new s,_=new s;u.prototype.applyForce=function(M,F){if(this.type===u.DYNAMIC){var U=d;F.vsub(this.position,U);var Y=_;U.cross(M,Y),this.force.vadd(M,this.force),this.torque.vadd(Y,this.torque)}};var y=new s,x=new s;u.prototype.applyLocalForce=function(M,F){if(this.type===u.DYNAMIC){var U=y,Y=x;this.vectorToWorldFrame(M,U),this.pointToWorldFrame(F,Y),this.applyForce(U,Y)}};var T=new s,R=new s,A=new s;u.prototype.applyImpulse=function(M,F){if(this.type===u.DYNAMIC){var U=T;F.vsub(this.position,U);var Y=R;Y.copy(M),Y.mult(this.invMass,Y),this.velocity.vadd(Y,this.velocity);var $=A;U.cross(M,$),this.invInertiaWorld.vmult($,$),this.angularVelocity.vadd($,this.angularVelocity)}};var I=new s,W=new s;u.prototype.applyLocalImpulse=function(M,F){if(this.type===u.DYNAMIC){var U=I,Y=W;this.vectorToWorldFrame(M,U),this.pointToWorldFrame(F,Y),this.applyImpulse(U,Y)}};var S=new s;u.prototype.updateMassProperties=function(){var M=S;this.invMass=this.mass>0?1/this.mass:0;var F=this.inertia,U=this.fixedRotation;this.computeAABB(),M.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(M,this.mass,F),this.invInertia.set(F.x>0&&!U?1/F.x:0,F.y>0&&!U?1/F.y:0,F.z>0&&!U?1/F.z:0),this.updateInertiaWorld(!0)},u.prototype.getVelocityAtWorldPoint=function(M,F){var U=new s;return M.vsub(this.position,U),this.angularVelocity.cross(U,F),this.velocity.vadd(F,F),F}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(n,i,r){n("./Body");var o=n("../math/Vec3"),s=n("../math/Quaternion");n("../collision/RaycastResult");var a=n("../collision/Ray"),l=n("../objects/WheelInfo");i.exports=c;function c(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new o,new o,new o;var h=new o,u=new o,f=new o;new a,c.prototype.addWheel=function(O){O=O||{};var C=new l(O),X=this.wheelInfos.length;return this.wheelInfos.push(C),X},c.prototype.setSteeringValue=function(O,C){var X=this.wheelInfos[C];X.steering=O},new o,c.prototype.applyEngineForce=function(O,C){this.wheelInfos[C].engineForce=O},c.prototype.setBrake=function(O,C){this.wheelInfos[C].brake=O},c.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var C=this;this.preStepCallback=function(){C.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},c.prototype.getVehicleAxisWorld=function(O,C){C.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(C,C)},c.prototype.updateVehicle=function(O){for(var C=this.wheelInfos,X=C.length,H=this.chassisBody,D=0;D<X;D++)this.updateWheelTransform(D);this.currentVehicleSpeedKmHour=3.6*H.velocity.norm();var K=new o;this.getVehicleAxisWorld(this.indexForwardAxis,K),K.dot(H.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var D=0;D<X;D++)this.castRay(C[D]);this.updateSuspension(O);for(var z=new o,P=new o,D=0;D<X;D++){var b=C[D],V=b.suspensionForce;V>b.maxSuspensionForce&&(V=b.maxSuspensionForce),b.raycastResult.hitNormalWorld.scale(V*O,z),b.raycastResult.hitPointWorld.vsub(H.position,P),H.applyImpulse(z,b.raycastResult.hitPointWorld)}this.updateFriction(O);var ee=new o,te=new o,q=new o;for(D=0;D<X;D++){var b=C[D];H.getVelocityAtWorldPoint(b.chassisConnectionPointWorld,q);var ie=1;switch(this.indexUpAxis){case 1:ie=-1;break}if(b.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,te);var he=te.dot(b.raycastResult.hitNormalWorld);b.raycastResult.hitNormalWorld.scale(he,ee),te.vsub(ee,te);var we=te.dot(q);b.deltaRotation=ie*we*O/b.radius}(b.sliding||!b.isInContact)&&b.engineForce!==0&&b.useCustomSlidingRotationalSpeed&&(b.deltaRotation=(b.engineForce>0?1:-1)*b.customSlidingRotationalSpeed*O),Math.abs(b.brake)>Math.abs(b.engineForce)&&(b.deltaRotation=0),b.rotation+=b.deltaRotation,b.deltaRotation*=.99}},c.prototype.updateSuspension=function(O){for(var C=this.chassisBody,X=C.mass,H=this.wheelInfos,D=H.length,K=0;K<D;K++){var z=H[K];if(z.isInContact){var P,b=z.suspensionRestLength,V=z.suspensionLength,ee=b-V;P=z.suspensionStiffness*ee*z.clippedInvContactDotSuspension;var te=z.suspensionRelativeVelocity,q;te<0?q=z.dampingCompression:q=z.dampingRelaxation,P-=q*te,z.suspensionForce=P*X,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},c.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new o,v=new o;c.prototype.castRay=function(O){var C=p,X=v;this.updateWheelTransformWorld(O);var H=this.chassisBody,D=-1,K=O.suspensionRestLength+O.radius;O.directionWorld.scale(K,C);var z=O.chassisConnectionPointWorld;z.vadd(C,X);var P=O.raycastResult;P.reset();var b=H.collisionResponse;H.collisionResponse=!1,this.world.rayTest(z,X,P),H.collisionResponse=b;var V=P.body;if(O.raycastResult.groundObject=0,V){D=P.distance,O.raycastResult.hitNormalWorld=P.hitNormalWorld,O.isInContact=!0;var ee=P.distance;O.suspensionLength=ee-O.radius;var te=O.suspensionRestLength-O.maxSuspensionTravel,q=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<te&&(O.suspensionLength=te),O.suspensionLength>q&&(O.suspensionLength=q,O.raycastResult.reset());var ie=O.raycastResult.hitNormalWorld.dot(O.directionWorld),he=new o;H.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,he);var we=O.raycastResult.hitNormalWorld.dot(he);if(ie>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var N=-1/ie;O.suspensionRelativeVelocity=we*N,O.clippedInvContactDotSuspension=N}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return D},c.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var C=this.chassisBody;C.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),C.vectorToWorldFrame(O.directionLocal,O.directionWorld),C.vectorToWorldFrame(O.axleLocal,O.axleWorld)},c.prototype.updateWheelTransform=function(O){var C=h,X=u,H=f,D=this.wheelInfos[O];this.updateWheelTransformWorld(D),D.directionLocal.scale(-1,C),X.copy(D.axleLocal),C.cross(X,H),H.normalize(),X.normalize();var K=D.steering,z=new s;z.setFromAxisAngle(C,K);var P=new s;P.setFromAxisAngle(X,D.rotation);var b=D.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,b),b.mult(P,b),b.normalize();var V=D.worldTransform.position;V.copy(D.directionWorld),V.scale(D.suspensionLength,V),V.vadd(D.chassisConnectionPointWorld,V)};var g=[new o(1,0,0),new o(0,1,0),new o(0,0,1)];c.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new o,d=[],_=[],y=1;c.prototype.updateFriction=function(O){for(var C=m,X=this.wheelInfos,H=X.length,D=this.chassisBody,K=_,z=d,P=0;P<H;P++){var b=X[P],V=b.raycastResult.body;b.sideImpulse=0,b.forwardImpulse=0,K[P]||(K[P]=new o),z[P]||(z[P]=new o)}for(var P=0;P<H;P++){var b=X[P],V=b.raycastResult.body;if(V){var ee=z[P],te=this.getWheelTransformWorld(P);te.vectorToWorldFrame(g[this.indexRightAxis],ee);var q=b.raycastResult.hitNormalWorld,ie=ee.dot(q);q.scale(ie,C),ee.vsub(C,ee),ee.normalize(),q.cross(ee,K[P]),K[P].normalize(),b.sideImpulse=Q(D,b.raycastResult.hitPointWorld,V,b.raycastResult.hitPointWorld,ee),b.sideImpulse*=y}}var he=1,we=.5;this.sliding=!1;for(var P=0;P<H;P++){var b=X[P],V=b.raycastResult.body,N=0;if(b.slipInfo=1,V){var Re=0,oe=b.brake?b.brake:Re;N=A(D,V,b.raycastResult.hitPointWorld,K[P],oe),N+=b.engineForce*O;var ce=oe/N;b.slipInfo*=ce}if(b.forwardImpulse=0,b.skidInfo=1,V){b.skidInfo=1;var Ue=b.suspensionForce*O*b.frictionSlip,ke=Ue,Ge=Ue*ke;b.forwardImpulse=N;var L=b.forwardImpulse*we,E=b.sideImpulse*he,J=L*L+E*E;if(b.sliding=!1,J>Ge){this.sliding=!0,b.sliding=!0;var ce=Ue/Math.sqrt(J);b.skidInfo*=ce}}}if(this.sliding)for(var P=0;P<H;P++){var b=X[P];b.sideImpulse!==0&&b.skidInfo<1&&(b.forwardImpulse*=b.skidInfo,b.sideImpulse*=b.skidInfo)}for(var P=0;P<H;P++){var b=X[P],se=new o;if(se.copy(b.raycastResult.hitPointWorld),b.forwardImpulse!==0){var fe=new o;K[P].scale(b.forwardImpulse,fe),D.applyImpulse(fe,se)}if(b.sideImpulse!==0){var V=b.raycastResult.body,re=new o;re.copy(b.raycastResult.hitPointWorld);var Ie=new o;z[P].scale(b.sideImpulse,Ie),D.pointToLocalFrame(se,se),se["xyz"[this.indexUpAxis]]*=b.rollInfluence,D.pointToWorldFrame(se,se),D.applyImpulse(Ie,se),Ie.scale(-1,Ie),V.applyImpulse(Ie,re)}}};var x=new o,T=new o,R=new o;function A(O,C,X,H,D){var K=0,z=X,P=x,b=T,V=R;O.getVelocityAtWorldPoint(z,P),C.getVelocityAtWorldPoint(z,b),P.vsub(b,V);var ee=H.dot(V),te=F(O,X,H),q=F(C,X,H),ie=1,he=ie/(te+q);return K=-ee*he,D<K&&(K=D),K<-D&&(K=-D),K}var I=new o,W=new o,S=new o,M=new o;function F(O,C,X){var H=I,D=W,K=S,z=M;return C.vsub(O.position,H),H.cross(X,D),O.invInertiaWorld.vmult(D,z),z.cross(H,K),O.invMass+X.dot(K)}var U=new o,Y=new o,$=new o;function Q(O,C,X,H,D,ie){var z=D.norm2();if(z>1.1)return 0;var P=U,b=Y,V=$;O.getVelocityAtWorldPoint(C,P),X.getVelocityAtWorldPoint(H,b),P.vsub(b,V);var ee=D.dot(V),te=.2,q=1/(O.invMass+X.invMass),ie=-te*ee*q;return ie}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(n,i,r){var o=n("./Body"),s=n("../shapes/Sphere"),a=n("../shapes/Box"),l=n("../math/Vec3"),c=n("../constraints/HingeConstraint");i.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new l(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new a(new l(5,2,.5));this.chassisBody=new o(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new o(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof p.position<"u"?p.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var d=typeof p.axis<"u"?p.axis.clone():new l(0,1,0);this.wheelAxes.push(d);var _=new c(this.chassisBody,v,{pivotA:g,axisA:d,pivotB:l.ZERO,axisB:d,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),d=Math.sin(p),_=g.x,y=g.y;this.constraints[v].axisA.set(m*_-d*y,d*_+m*y,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var u=new l;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],d=m.torque;g.scale(p,u),m.vectorToWorldFrame(u,u),d.vadd(u,d)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var f=new l;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,f),m.dot(f)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(n,i,r){i.exports=s,n("../shapes/Shape");var o=n("../math/Vec3");n("../math/Quaternion"),n("../shapes/Particle"),n("../objects/Body"),n("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new o;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,d=v.id,_=this.smoothingRadius*this.smoothingRadius,y=a,x=0;x!==m;x++){var T=this.particles[x];T.position.vsub(v.position,y),d!==T.id&&y.norm2()<_&&g.push(T)}};var l=new o,c=new o,h=new o,u=new o,f=new o,p=new o;s.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,d=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var T=x.length,R=0,A=0;A!==T;A++){y.position.vsub(x[A].position,g);var I=g.norm(),W=this.w(I);R+=x[A].mass*W}this.densities[_]=R,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var S=c,M=h,F=u,U=f,Y=p,_=0;_!==v;_++){var $=this.particles[_];S.set(0,0,0),M.set(0,0,0);for(var Q,O,x=this.neighbors[_],T=x.length,A=0;A!==T;A++){var C=x[A];$.position.vsub(C.position,U);var X=U.norm();Q=-C.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+d)+this.pressures[A]/(this.densities[A]*this.densities[A]+d)),this.gradw(U,F),F.mult(Q,F),S.vadd(F,S),C.velocity.vsub($.velocity,Y),Y.mult(1/(1e-4+this.densities[_]*this.densities[A])*this.viscosity*C.mass,Y),O=this.nablaw(X),Y.mult(O,Y),M.vadd(Y,M)}M.mult($.mass,M),S.mult($.mass,S),$.force.vadd(M,$.force),$.force.vadd(S,$.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),d=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(d,9))*Math.pow(d*d-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(n,i,r){var o=n("../math/Vec3");i.exports=s;function s(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new o,this.localAnchorB=new o,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var a=new o,l=new o,c=new o,h=new o,u=new o,f=new o,p=new o,v=new o,g=new o,m=new o,d=new o;s.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,T=this.bodyA,R=this.bodyB,A=a,I=l,W=c,S=h,M=d,F=u,U=f,Y=p,$=v,Q=g,O=m;this.getWorldAnchorA(F),this.getWorldAnchorB(U),F.vsub(T.position,Y),U.vsub(R.position,$),U.vsub(F,A);var C=A.norm();I.copy(A),I.normalize(),R.velocity.vsub(T.velocity,W),R.angularVelocity.cross($,M),W.vadd(M,W),T.angularVelocity.cross(Y,M),W.vsub(M,W),I.mult(-_*(C-x)-y*W.dot(I),S),T.force.vsub(S,T.force),R.force.vadd(S,R.force),Y.cross(S,Q),$.cross(S,O),T.torque.vsub(Q,T.torque),R.torque.vadd(O,R.torque)}},{"../math/Vec3":30}],36:[function(n,i,r){var o=n("../math/Vec3"),s=n("../math/Transform"),a=n("../collision/RaycastResult"),l=n("../utils/Utils");i.exports=c;function c(f){f=l.defaults(f,{chassisConnectionPointLocal:new o,chassisConnectionPointWorld:new o,directionLocal:new o,directionWorld:new o,axleLocal:new o,axleWorld:new o,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=f.maxSuspensionTravel,this.customSlidingRotationalSpeed=f.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=f.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=f.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=f.chassisConnectionPointWorld.clone(),this.directionLocal=f.directionLocal.clone(),this.directionWorld=f.directionWorld.clone(),this.axleLocal=f.axleLocal.clone(),this.axleWorld=f.axleWorld.clone(),this.suspensionRestLength=f.suspensionRestLength,this.suspensionMaxLength=f.suspensionMaxLength,this.radius=f.radius,this.suspensionStiffness=f.suspensionStiffness,this.dampingCompression=f.dampingCompression,this.dampingRelaxation=f.dampingRelaxation,this.frictionSlip=f.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=f.rollInfluence,this.maxSuspensionForce=f.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=f.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new s,this.isInContact=!1}var u=new o,h=new o,u=new o;c.prototype.updateWheel=function(f){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(f.position,h),f.getVelocityAtWorldPoint(h,u);var g=p.hitNormalWorld.dot(u);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(n,i,r){i.exports=l;var o=n("./Shape"),s=n("../math/Vec3"),a=n("./ConvexPolyhedron");function l(u){o.call(this),this.type=o.types.BOX,this.halfExtents=u,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new o,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var u=this.halfExtents.x,f=this.halfExtents.y,p=this.halfExtents.z,v=s,g=[new v(-u,-f,-p),new v(u,-f,-p),new v(u,f,-p),new v(-u,f,-p),new v(-u,-f,p),new v(u,-f,p),new v(u,f,p),new v(-u,f,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var d=new a(g,m);this.convexPolyhedronRepresentation=d,d.material=this.material},l.prototype.calculateLocalInertia=function(u,f){return f=f||new s,l.calculateInertia(this.halfExtents,u,f),f},l.calculateInertia=function(u,f,p){var v=u;p.x=1/12*f*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*f*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*f*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(u,f){var p=u,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),f!==void 0)for(var g=0;g!==p.length;g++)f.vmult(p[g],p[g]);return p},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var c=new s;new s,l.prototype.forEachWorldCorner=function(u,f,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)c.set(g[m][0],g[m][1],g[m][2]),f.vmult(c,c),u.vadd(c,c),p(c.x,c.y,c.z)};var h=[new s,new s,new s,new s,new s,new s,new s,new s];l.prototype.calculateWorldAABB=function(u,f,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];f.vmult(m,m),u.vadd(m,m),v.copy(m),p.copy(m);for(var d=1;d<8;d++){var m=h[d];f.vmult(m,m),u.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<p.x&&(p.x=_),y<p.y&&(p.y=y),x<p.z&&(p.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(n,i,r){i.exports=l;var o=n("./Shape"),s=n("../math/Vec3");n("../math/Quaternion");var a=n("../math/Transform");function l(D,K,z){o.call(this),this.type=o.types.CONVEXPOLYHEDRON,this.vertices=D||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=K||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new o,l.prototype.constructor=l;var c=new s;l.prototype.computeEdges=function(){var D=this.faces,K=this.vertices;K.length;var z=this.uniqueEdges;z.length=0;for(var P=c,b=0;b!==D.length;b++)for(var V=D[b],ee=V.length,te=0;te!==ee;te++){var q=(te+1)%ee;K[V[te]].vsub(K[V[q]],P),P.normalize();for(var ie=!1,he=0;he!==z.length;he++)if(z[he].almostEquals(P)||z[he].almostEquals(P)){ie=!0;break}ie||z.push(P.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var D=0;D<this.faces.length;D++){for(var K=0;K<this.faces[D].length;K++)if(!this.vertices[this.faces[D][K]])throw new Error("Vertex "+this.faces[D][K]+" not found!");var z=this.faceNormals[D]||new s;this.getFaceNormal(D,z),z.negate(z),this.faceNormals[D]=z;var P=this.vertices[this.faces[D][0]];if(z.dot(P)<0){console.error(".faceNormals["+D+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var K=0;K<this.faces[D].length;K++)console.warn(".vertices["+this.faces[D][K]+"] = Vec3("+this.vertices[this.faces[D][K]].toString()+")")}}};var h=new s,u=new s;l.computeNormal=function(D,K,z,P){K.vsub(D,u),z.vsub(K,h),h.cross(u,P),P.isZero()||P.normalize()},l.prototype.getFaceNormal=function(D,K){var z=this.faces[D],P=this.vertices[z[0]],b=this.vertices[z[1]],V=this.vertices[z[2]];return l.computeNormal(P,b,V,K)};var f=new s;l.prototype.clipAgainstHull=function(D,K,z,P,b,V,ee,te,q){for(var ie=f,he=-1,we=-Number.MAX_VALUE,N=0;N<z.faces.length;N++){ie.copy(z.faceNormals[N]),b.vmult(ie,ie);var Re=ie.dot(V);Re>we&&(we=Re,he=N)}for(var oe=[],ce=z.faces[he],Ue=ce.length,ke=0;ke<Ue;ke++){var Ge=z.vertices[ce[ke]],L=new s;L.copy(Ge),b.vmult(L,L),P.vadd(L,L),oe.push(L)}he>=0&&this.clipFaceAgainstHull(V,D,K,oe,ee,te,q)};var p=new s,v=new s,g=new s,m=new s,d=new s,_=new s;l.prototype.findSeparatingAxis=function(D,K,z,P,b,V,ee,te){var q=p,ie=v,he=g,we=m,N=d,Re=_,oe=Number.MAX_VALUE,ce=this;if(ce.uniqueAxes)for(var ke=0;ke!==ce.uniqueAxes.length;ke++){z.vmult(ce.uniqueAxes[ke],q);var L=ce.testSepAxis(q,D,K,z,P,b);if(L===!1)return!1;L<oe&&(oe=L,V.copy(q))}else for(var Ue=ee?ee.length:ce.faces.length,ke=0;ke<Ue;ke++){var Ge=ee?ee[ke]:ke;q.copy(ce.faceNormals[Ge]),z.vmult(q,q);var L=ce.testSepAxis(q,D,K,z,P,b);if(L===!1)return!1;L<oe&&(oe=L,V.copy(q))}if(D.uniqueAxes)for(var ke=0;ke!==D.uniqueAxes.length;ke++){b.vmult(D.uniqueAxes[ke],ie);var L=ce.testSepAxis(ie,D,K,z,P,b);if(L===!1)return!1;L<oe&&(oe=L,V.copy(ie))}else for(var E=te?te.length:D.faces.length,ke=0;ke<E;ke++){var Ge=te?te[ke]:ke;ie.copy(D.faceNormals[Ge]),b.vmult(ie,ie);var L=ce.testSepAxis(ie,D,K,z,P,b);if(L===!1)return!1;L<oe&&(oe=L,V.copy(ie))}for(var J=0;J!==ce.uniqueEdges.length;J++){z.vmult(ce.uniqueEdges[J],we);for(var se=0;se!==D.uniqueEdges.length;se++)if(b.vmult(D.uniqueEdges[se],N),we.cross(N,Re),!Re.almostZero()){Re.normalize();var fe=ce.testSepAxis(Re,D,K,z,P,b);if(fe===!1)return!1;fe<oe&&(oe=fe,V.copy(Re))}}return P.vsub(K,he),he.dot(V)>0&&V.negate(V),!0};var y=[],x=[];l.prototype.testSepAxis=function(D,K,z,P,b,V){var ee=this;l.project(ee,D,z,P,y),l.project(K,D,b,V,x);var te=y[0],q=y[1],ie=x[0],he=x[1],we=te-he,N=ie-q,Re=we<N?we:N;return Re};var T=new s,R=new s;l.prototype.calculateLocalInertia=function(D,K){this.computeLocalAABB(T,R);var z=R.x-T.x,P=R.y-T.y,b=R.z-T.z;K.x=1/12*D*(2*P*2*P+2*b*2*b),K.y=1/12*D*(2*z*2*z+2*b*2*b),K.z=1/12*D*(2*P*2*P+2*z*2*z)},l.prototype.getPlaneConstantOfFace=function(D){var K=this.faces[D],z=this.faceNormals[D],P=this.vertices[K[0]],b=-z.dot(P);return b};var A=new s,I=new s,W=new s,S=new s,M=new s,F=new s,U=new s,Y=new s;l.prototype.clipFaceAgainstHull=function(D,K,z,P,b,V,ee){for(var te=A,q=I,ie=W,he=S,we=M,N=F,Re=U,oe=Y,ce=this,Ue=[],ke=P,Ge=Ue,L=-1,E=Number.MAX_VALUE,J=0;J<ce.faces.length;J++){te.copy(ce.faceNormals[J]),z.vmult(te,te);var se=te.dot(D);se<E&&(E=se,L=J)}if(!(L<0)){var fe=ce.faces[L];fe.connectedFaces=[];for(var re=0;re<ce.faces.length;re++)for(var Ie=0;Ie<ce.faces[re].length;Ie++)fe.indexOf(ce.faces[re][Ie])!==-1&&re!==L&&fe.connectedFaces.indexOf(re)===-1&&fe.connectedFaces.push(re);ke.length;for(var _e=fe.length,be=0;be<_e;be++){var rt=ce.vertices[fe[be]],Me=ce.vertices[fe[(be+1)%_e]];rt.vsub(Me,q),ie.copy(q),z.vmult(ie,ie),K.vadd(ie,ie),he.copy(this.faceNormals[L]),z.vmult(he,he),K.vadd(he,he),ie.cross(he,we),we.negate(we),N.copy(rt),z.vmult(N,N),K.vadd(N,N),-N.dot(we);var Ze;{var We=fe.connectedFaces[be];Re.copy(this.faceNormals[We]);var Qe=this.getPlaneConstantOfFace(We);oe.copy(Re),z.vmult(oe,oe);var Ze=Qe-oe.dot(K)}for(this.clipFaceAgainstPlane(ke,Ge,oe,Ze);ke.length;)ke.shift();for(;Ge.length;)ke.push(Ge.shift())}Re.copy(this.faceNormals[L]);var Qe=this.getPlaneConstantOfFace(L);oe.copy(Re),z.vmult(oe,oe);for(var Ze=Qe-oe.dot(K),re=0;re<ke.length;re++){var ze=oe.dot(ke[re])+Ze;if(ze<=b&&(console.log("clamped: depth="+ze+" to minDist="+(b+"")),ze=b),ze<=V){var st=ke[re];if(ze<=0){var tt={point:st,normal:oe,depth:ze};ee.push(tt)}}}}},l.prototype.clipFaceAgainstPlane=function(D,K,z,P){var b,V,ee=D.length;if(ee<2)return K;var te=D[D.length-1],q=D[0];b=z.dot(te)+P;for(var ie=0;ie<ee;ie++){if(q=D[ie],V=z.dot(q)+P,b<0)if(V<0){var he=new s;he.copy(q),K.push(he)}else{var he=new s;te.lerp(q,b/(b-V),he),K.push(he)}else if(V<0){var he=new s;te.lerp(q,b/(b-V),he),K.push(he),K.push(q)}te=q,b=V}return K},l.prototype.computeWorldVertices=function(D,K){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new s);for(var P=this.vertices,b=this.worldVertices,V=0;V!==z;V++)K.vmult(P[V],b[V]),D.vadd(b[V],b[V]);this.worldVerticesNeedsUpdate=!1},new s,l.prototype.computeLocalAABB=function(D,K){var z=this.vertices.length,P=this.vertices;D.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),K.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var b=0;b<z;b++){var V=P[b];V.x<D.x?D.x=V.x:V.x>K.x&&(K.x=V.x),V.y<D.y?D.y=V.y:V.y>K.y&&(K.y=V.y),V.z<D.z?D.z=V.z:V.z>K.z&&(K.z=V.z)}},l.prototype.computeWorldFaceNormals=function(D){for(var K=this.faceNormals.length;this.worldFaceNormals.length<K;)this.worldFaceNormals.push(new s);for(var z=this.faceNormals,P=this.worldFaceNormals,b=0;b!==K;b++)D.vmult(z[b],P[b]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var D=0,K=this.vertices,z=0,P=K.length;z!==P;z++){var b=K[z].norm2();b>D&&(D=b)}this.boundingSphereRadius=Math.sqrt(D)};var $=new s;l.prototype.calculateWorldAABB=function(D,K,z,P){for(var b=this.vertices.length,V=this.vertices,ee,te,q,ie,he,we,N=0;N<b;N++){$.copy(V[N]),K.vmult($,$),D.vadd($,$);var Re=$;Re.x<ee||ee===void 0?ee=Re.x:(Re.x>ie||ie===void 0)&&(ie=Re.x),Re.y<te||te===void 0?te=Re.y:(Re.y>he||he===void 0)&&(he=Re.y),Re.z<q||q===void 0?q=Re.z:(Re.z>we||we===void 0)&&(we=Re.z)}z.set(ee,te,q),P.set(ie,he,we)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(D){D=D||new s;for(var K=this.vertices.length,z=this.vertices,P=0;P<K;P++)D.vadd(z[P],D);return D.mult(1/K,D),D},l.prototype.transformAllPoints=function(D,K){var z=this.vertices.length,P=this.vertices;if(K){for(var b=0;b<z;b++){var V=P[b];K.vmult(V,V)}for(var b=0;b<this.faceNormals.length;b++){var V=this.faceNormals[b];K.vmult(V,V)}}if(D)for(var b=0;b<z;b++){var V=P[b];V.vadd(D,V)}};var Q=new s,O=new s,C=new s;l.prototype.pointIsInside=function(D){var K=this.vertices.length,z=this.vertices,P=this.faces,b=this.faceNormals,V=null,ee=this.faces.length,te=Q;this.getAveragePointLocal(te);for(var q=0;q<ee;q++){this.faces[q].length;var K=b[q],ie=z[P[q][0]],he=O;D.vsub(ie,he);var we=K.dot(he),N=C;te.vsub(ie,N);var Re=K.dot(N);if(we<0&&Re>0||we>0&&Re<0)return!1}return V?1:-1},new s;var X=new s,H=new s;l.project=function(D,K,z,P,b){var V=D.vertices.length,ee=X,te=0,q=0,ie=H,he=D.vertices;ie.setZero(),a.vectorToLocalFrame(z,P,K,ee),a.pointToLocalFrame(z,P,ie,ie);var we=ie.dot(ee);q=te=he[0].dot(ee);for(var N=1;N<V;N++){var Re=he[N].dot(ee);Re>te&&(te=Re),Re<q&&(q=Re)}if(q-=we,te-=we,q>te){var oe=q;q=te,te=oe}b[0]=te,b[1]=q}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(n,i,r){i.exports=l;var o=n("./Shape"),s=n("../math/Vec3");n("../math/Quaternion");var a=n("./ConvexPolyhedron");function l(c,h,u,f){var p=f,v=[],g=[],m=[],d=[],_=[],y=Math.cos,x=Math.sin;v.push(new s(h*y(0),h*x(0),-u*.5)),d.push(0),v.push(new s(c*y(0),c*x(0),u*.5)),_.push(1);for(var T=0;T<p;T++){var R=2*Math.PI/p*(T+1),A=2*Math.PI/p*(T+.5);T<p-1?(v.push(new s(h*y(R),h*x(R),-u*.5)),d.push(2*T+2),v.push(new s(c*y(R),c*x(R),u*.5)),_.push(2*T+3),m.push([2*T+2,2*T+3,2*T+1,2*T])):m.push([0,1,2*T+1,2*T]),(p%2===1||T<p/2)&&g.push(new s(y(A),x(A),0))}m.push(_),g.push(new s(0,0,1));for(var I=[],T=0;T<d.length;T++)I.push(d[d.length-T-1]);m.push(I),this.type=o.types.CONVEXPOLYHEDRON,a.call(this,v,m,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(n,i,r){var o=n("./Shape"),s=n("./ConvexPolyhedron"),a=n("../math/Vec3"),l=n("../utils/Utils");i.exports=c;function c(h,u){u=l.defaults(u,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=u.maxValue,this.minValue=u.minValue,this.elementSize=u.elementSize,u.minValue===null&&this.updateMinValue(),u.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,o.call(this),this.pillarConvex=new s,this.pillarOffset=new a,this.type=o.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}c.prototype=new o,c.prototype.update=function(){this._cachedPillars={}},c.prototype.updateMinValue=function(){for(var h=this.data,u=h[0][0],f=0;f!==h.length;f++)for(var p=0;p!==h[f].length;p++){var v=h[f][p];v<u&&(u=v)}this.minValue=u},c.prototype.updateMaxValue=function(){for(var h=this.data,u=h[0][0],f=0;f!==h.length;f++)for(var p=0;p!==h[f].length;p++){var v=h[f][p];v>u&&(u=v)}this.maxValue=u},c.prototype.setHeightValueAtIndex=function(h,u,f){var p=this.data;p[h][u]=f,this.clearCachedConvexTrianglePillar(h,u,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,u,!0),this.clearCachedConvexTrianglePillar(h-1,u,!1)),u>0&&(this.clearCachedConvexTrianglePillar(h,u-1,!0),this.clearCachedConvexTrianglePillar(h,u-1,!1)),u>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,u-1,!0)},c.prototype.getRectMinMax=function(h,u,f,p,v){v=v||[];for(var g=this.data,m=this.minValue,d=h;d<=f;d++)for(var _=u;_<=p;_++){var y=g[d][_];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},c.prototype.getIndexOfPosition=function(h,u,f,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),d=Math.floor(u/v);return f[0]=m,f[1]=d,p&&(m<0&&(m=0),d<0&&(d=0),m>=g.length-1&&(m=g.length-1),d>=g[0].length-1&&(d=g[0].length-1)),!(m<0||d<0||m>=g.length-1||d>=g[0].length-1)},c.prototype.getHeightAt=function(h,u,f){var p=[];this.getIndexOfPosition(h,u,p,f);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},c.prototype.getCacheConvexTrianglePillarKey=function(h,u,f){return h+"_"+u+"_"+(f?1:0)},c.prototype.getCachedConvexTrianglePillar=function(h,u,f){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,f)]},c.prototype.setCachedConvexTrianglePillar=function(h,u,f,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,f)]={convex:p,offset:v}},c.prototype.clearCachedConvexTrianglePillar=function(h,u,f){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,f)]},c.prototype.getConvexTrianglePillar=function(h,u,f){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,u,f);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new s,v=new a,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,d=p.faces;p.vertices.length=6;for(var _=0;_<6;_++)p.vertices[_]||(p.vertices[_]=new a);d.length=5;for(var _=0;_<5;_++)d[_]||(d[_]=[]);var y=p.vertices,x=(Math.min(g[h][u],g[h+1][u],g[h][u+1],g[h+1][u+1])-this.minValue)/2+this.minValue;f?(v.set((h+.75)*m,(u+.75)*m,x),y[0].set(.25*m,.25*m,g[h+1][u+1]-x),y[1].set(-.75*m,.25*m,g[h][u+1]-x),y[2].set(.25*m,-.75*m,g[h+1][u]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),d[0][0]=0,d[0][1]=1,d[0][2]=2,d[1][0]=5,d[1][1]=4,d[1][2]=3,d[2][0]=2,d[2][1]=5,d[2][2]=3,d[2][3]=0,d[3][0]=3,d[3][1]=4,d[3][2]=1,d[3][3]=0,d[4][0]=1,d[4][1]=4,d[4][2]=5,d[4][3]=2):(v.set((h+.25)*m,(u+.25)*m,x),y[0].set(-.25*m,-.25*m,g[h][u]-x),y[1].set(.75*m,-.25*m,g[h+1][u]-x),y[2].set(-.25*m,.75*m,g[h][u+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),d[0][0]=0,d[0][1]=1,d[0][2]=2,d[1][0]=5,d[1][1]=4,d[1][2]=3,d[2][0]=0,d[2][1]=2,d[2][2]=5,d[2][3]=3,d[3][0]=1,d[3][1]=0,d[3][2]=3,d[3][3]=4,d[4][0]=4,d[4][1]=5,d[4][2]=2,d[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,u,f,p,v)},c.prototype.calculateLocalInertia=function(h,u){return u=u||new a,u.set(0,0,0),u},c.prototype.volume=function(){return Number.MAX_VALUE},c.prototype.calculateWorldAABB=function(h,u,f,p){f.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},c.prototype.updateBoundingSphereRadius=function(){var h=this.data,u=this.elementSize;this.boundingSphereRadius=new a(h.length*u,h[0].length*u,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(n,i,r){i.exports=a;var o=n("./Shape"),s=n("../math/Vec3");function a(){o.call(this),this.type=o.types.PARTICLE}a.prototype=new o,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,c){return c=c||new s,c.set(0,0,0),c},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,c,h,u){h.copy(l),u.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(n,i,r){i.exports=a;var o=n("./Shape"),s=n("../math/Vec3");function a(){o.call(this),this.type=o.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new o,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(c){var h=this.worldNormal;h.set(0,0,1),c.vmult(h,h),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(c,h){return h=h||new s,h},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new s;a.prototype.calculateWorldAABB=function(c,h,u,f){l.set(0,0,1),h.vmult(l,l);var p=Number.MAX_VALUE;u.set(-p,-p,-p),f.set(p,p,p),l.x===1&&(f.x=c.x),l.y===1&&(f.y=c.y),l.z===1&&(f.z=c.z),l.x===-1&&(u.x=c.x),l.y===-1&&(u.y=c.y),l.z===-1&&(u.z=c.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(n,i,r){i.exports=o;var o=n("./Shape");n("../math/Vec3"),n("../math/Quaternion"),n("../material/Material");function o(){this.id=o.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}o.prototype.constructor=o,o.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},o.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},o.prototype.calculateLocalInertia=function(s,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},o.idCounter=0,o.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(n,i,r){i.exports=a;var o=n("./Shape"),s=n("../math/Vec3");function a(l){if(o.call(this),this.radius=l!==void 0?Number(l):1,this.type=o.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new o,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,c){c=c||new s;var h=2*l*this.radius*this.radius/5;return c.x=h,c.y=h,c.z=h,c},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,c,h,u){for(var f=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=l[g]-f,u[g]=l[g]+f}}},{"../math/Vec3":30,"./Shape":43}],45:[function(n,i,r){i.exports=h;var o=n("./Shape"),s=n("../math/Vec3");n("../math/Quaternion");var a=n("../math/Transform"),l=n("../collision/AABB"),c=n("../utils/Octree");function h(I,W){o.call(this),this.type=o.types.TRIMESH,this.vertices=new Float32Array(I),this.indices=new Int16Array(W),this.normals=new Float32Array(W.length),this.aabb=new l,this.edges=null,this.scale=new s(1,1,1),this.tree=new c,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new o,h.prototype.constructor=h;var u=new s;h.prototype.updateTree=function(){var I=this.tree;I.reset(),I.aabb.copy(this.aabb);var W=this.scale;I.aabb.lowerBound.x*=1/W.x,I.aabb.lowerBound.y*=1/W.y,I.aabb.lowerBound.z*=1/W.z,I.aabb.upperBound.x*=1/W.x,I.aabb.upperBound.y*=1/W.y,I.aabb.upperBound.z*=1/W.z;for(var S=new l,M=new s,F=new s,U=new s,Y=[M,F,U],$=0;$<this.indices.length/3;$++){var Q=$*3;this._getUnscaledVertex(this.indices[Q],M),this._getUnscaledVertex(this.indices[Q+1],F),this._getUnscaledVertex(this.indices[Q+2],U),S.setFromPoints(Y),I.insert(S,$)}I.removeEmptyNodes()};var f=new l;h.prototype.getTrianglesInAABB=function(I,W){f.copy(I);var S=this.scale,M=S.x,F=S.y,U=S.z,Y=f.lowerBound,$=f.upperBound;return Y.x/=M,Y.y/=F,Y.z/=U,$.x/=M,$.y/=F,$.z/=U,this.tree.aabbQuery(f,W)},h.prototype.setScale=function(I){var W=this.scale.x===this.scale.y===this.scale.z,S=I.x===I.y===I.z;W&&S||this.updateNormals(),this.scale.copy(I),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var I=u,W=this.normals,S=0;S<this.indices.length/3;S++){var M=S*3,F=this.indices[M],U=this.indices[M+1],Y=this.indices[M+2];this.getVertex(F,d),this.getVertex(U,_),this.getVertex(Y,y),h.computeNormal(_,d,y,I),W[M]=I.x,W[M+1]=I.y,W[M+2]=I.z}},h.prototype.updateEdges=function(){for(var I={},W=function(Q,O){var C=F<U?F+"_"+U:U+"_"+F;I[C]=!0},S=0;S<this.indices.length/3;S++){var M=S*3,F=this.indices[M],U=this.indices[M+1];this.indices[M+2],W(),W(),W()}var Y=Object.keys(I);this.edges=new Int16Array(Y.length*2);for(var S=0;S<Y.length;S++){var $=Y[S].split("_");this.edges[2*S]=parseInt($[0],10),this.edges[2*S+1]=parseInt($[1],10)}},h.prototype.getEdgeVertex=function(I,W,S){var M=this.edges[I*2+(W?1:0)];this.getVertex(M,S)};var p=new s,v=new s;h.prototype.getEdgeVector=function(I,W){var S=p,M=v;this.getEdgeVertex(I,0,S),this.getEdgeVertex(I,1,M),M.vsub(S,W)};var g=new s,m=new s;h.computeNormal=function(I,W,S,M){W.vsub(I,m),S.vsub(W,g),g.cross(m,M),M.isZero()||M.normalize()};var d=new s,_=new s,y=new s;h.prototype.getVertex=function(I,W){var S=this.scale;return this._getUnscaledVertex(I,W),W.x*=S.x,W.y*=S.y,W.z*=S.z,W},h.prototype._getUnscaledVertex=function(I,W){var S=I*3,M=this.vertices;return W.set(M[S],M[S+1],M[S+2])},h.prototype.getWorldVertex=function(I,W,S,M){return this.getVertex(I,M),a.pointToWorldFrame(W,S,M,M),M},h.prototype.getTriangleVertices=function(I,W,S,M){var F=I*3;this.getVertex(this.indices[F],W),this.getVertex(this.indices[F+1],S),this.getVertex(this.indices[F+2],M)},h.prototype.getNormal=function(I,W){var S=I*3;return W.set(this.normals[S],this.normals[S+1],this.normals[S+2])};var x=new l;h.prototype.calculateLocalInertia=function(I,W){this.computeLocalAABB(x);var S=x.upperBound.x-x.lowerBound.x,M=x.upperBound.y-x.lowerBound.y,F=x.upperBound.z-x.lowerBound.z;return W.set(1/12*I*(2*M*2*M+2*F*2*F),1/12*I*(2*S*2*S+2*F*2*F),1/12*I*(2*M*2*M+2*S*2*S))};var T=new s;h.prototype.computeLocalAABB=function(I){var W=I.lowerBound,S=I.upperBound,M=this.vertices.length;this.vertices;var F=T;this.getVertex(0,F),W.copy(F),S.copy(F);for(var U=0;U!==M;U++)this.getVertex(U,F),F.x<W.x?W.x=F.x:F.x>S.x&&(S.x=F.x),F.y<W.y?W.y=F.y:F.y>S.y&&(S.y=F.y),F.z<W.z?W.z=F.z:F.z>S.z&&(S.z=F.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var I=0,W=this.vertices,S=new s,M=0,F=W.length/3;M!==F;M++){this.getVertex(M,S);var U=S.norm2();U>I&&(I=U)}this.boundingSphereRadius=Math.sqrt(I)},new s;var R=new a,A=new l;h.prototype.calculateWorldAABB=function(I,W,S,M){var F=R,U=A;F.position=I,F.quaternion=W,this.aabb.toWorldFrame(F,U),S.copy(U.lowerBound),M.copy(U.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(I,W,S,M,F){I=I||1,W=W||.5,S=S||8,M=M||6,F=F||Math.PI*2;for(var U=[],Y=[],$=0;$<=S;$++)for(var Q=0;Q<=M;Q++){var O=Q/M*F,C=$/S*Math.PI*2,X=(I+W*Math.cos(C))*Math.cos(O),H=(I+W*Math.cos(C))*Math.sin(O),D=W*Math.sin(C);U.push(X,H,D)}for(var $=1;$<=S;$++)for(var Q=1;Q<=M;Q++){var K=(M+1)*$+Q-1,z=(M+1)*($-1)+Q-1,P=(M+1)*($-1)+Q,b=(M+1)*$+Q;Y.push(K,z,b),Y.push(z,P,b)}return new h(U,Y)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(n,i,r){i.exports=s,n("../math/Vec3"),n("../math/Quaternion");var o=n("./Solver");function s(){o.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new o;var a=[],l=[],c=[];s.prototype.solve=function(h,u){var f=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,d=u.bodies,_=d.length,y=h,x,T,R,A,I,W;if(m!==0)for(var S=0;S!==_;S++)d[S].updateSolveMassProperties();var M=l,F=c,U=a;M.length=m,F.length=m,U.length=m;for(var S=0;S!==m;S++){var Y=g[S];U[S]=0,F[S]=Y.computeB(y),M[S]=1/Y.computeC()}if(m!==0){for(var S=0;S!==_;S++){var $=d[S],Q=$.vlambda,O=$.wlambda;Q.set(0,0,0),O&&O.set(0,0,0)}for(f=0;f!==p;f++){A=0;for(var C=0;C!==m;C++){var Y=g[C];x=F[C],T=M[C],W=U[C],I=Y.computeGWlambda(),R=T*(x-I-Y.eps*W),W+R<Y.minForce?R=Y.minForce-W:W+R>Y.maxForce&&(R=Y.maxForce-W),U[C]+=R,A+=R>0?R:-R,Y.addToWlambda(R)}if(A*A<v)break}for(var S=0;S!==_;S++){var $=d[S],X=$.velocity,H=$.angularVelocity;X.vadd($.vlambda,X),H&&H.vadd($.wlambda,H)}}return f}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(n,i,r){i.exports=o;function o(){this.equations=[]}o.prototype.solve=function(s,a){return 0},o.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},o.prototype.removeEquation=function(s){var a=this.equations,l=a.indexOf(s);l!==-1&&a.splice(l,1)},o.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(n,i,r){i.exports=a,n("../math/Vec3"),n("../math/Quaternion");var o=n("./Solver"),s=n("../objects/Body");function a(d){for(o.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=d,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new o;var l=[],c=[],h={bodies:[]},u=s.STATIC;function f(d){for(var _=d.length,y=0;y!==_;y++){var x=d[y];if(!x.visited&&!(x.body.type&u))return x}return!1}var p=[];function v(d,_,y,x){for(p.push(d),d.visited=!0,_(d,y,x);p.length;)for(var T=p.pop(),R;R=f(T.children);)R.visited=!0,_(R,y,x),p.push(R)}function g(d,_,y){_.push(d.body);for(var x=d.eqs.length,T=0;T!==x;T++){var R=d.eqs[T];y.indexOf(R)===-1&&y.push(R)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(d,_){for(var y=l,x=this.nodePool,T=_.bodies,R=this.equations,A=R.length,I=T.length,W=this.subsolver;x.length<I;)x.push(this.createNode());y.length=I;for(var S=0;S<I;S++)y[S]=x[S];for(var S=0;S!==I;S++){var M=y[S];M.body=T[S],M.children.length=0,M.eqs.length=0,M.visited=!1}for(var F=0;F!==A;F++){var U=R[F],S=T.indexOf(U.bi),Y=T.indexOf(U.bj),$=y[S],Q=y[Y];$.children.push(Q),$.eqs.push(U),Q.children.push($),Q.eqs.push(U)}var O,C=0,X=c;W.tolerance=this.tolerance,W.iterations=this.iterations;for(var H=h;O=f(y);){X.length=0,H.bodies.length=0,v(O,g,H.bodies,X);var D=X.length;X=X.sort(m);for(var S=0;S!==D;S++)W.addEquation(X[S]);W.solve(d,H),W.removeAllEquations(),C++}return C};function m(d,_){return _.id-d.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(n,i,r){var o=function(){};i.exports=o,o.prototype={constructor:o,addEventListener:function(s,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[s]===void 0&&(l[s]=[]),l[s].indexOf(a)===-1&&l[s].push(a),this},hasEventListener:function(s,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[s]!==void 0&&l[s].indexOf(a)!==-1},removeEventListener:function(s,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[s]===void 0)return this;var c=l[s].indexOf(a);return c!==-1&&l[s].splice(c,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var a=this._listeners,l=a[s.type];if(l!==void 0){s.target=this;for(var c=0,h=l.length;c<h;c++)l[c].call(this,s)}return this}}},{}],50:[function(n,i,r){var o=n("../collision/AABB"),s=n("../math/Vec3");i.exports=l;function a(u){u=u||{},this.root=u.root||null,this.aabb=u.aabb?u.aabb.clone():new o,this.data=[],this.children=[]}function l(u,f){f=f||{},f.root=null,f.aabb=u,a.call(this,f),this.maxDepth=typeof f.maxDepth<"u"?f.maxDepth:8}l.prototype=new a,a.prototype.reset=function(u,f){this.children.length=this.data.length=0},a.prototype.insert=function(u,f,p){var v=this.data;if(p=p||0,!this.aabb.contains(u))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var d=0;d!==8;d++)if(g[d].insert(u,f,p+1))return!0;m&&(g.length=0)}return v.push(f),!0};var c=new s;a.prototype.subdivide=function(){var u=this.aabb,f=u.lowerBound,p=u.upperBound,v=this.children;v.push(new a({aabb:new o({lowerBound:new s(0,0,0)})}),new a({aabb:new o({lowerBound:new s(1,0,0)})}),new a({aabb:new o({lowerBound:new s(1,1,0)})}),new a({aabb:new o({lowerBound:new s(1,1,1)})}),new a({aabb:new o({lowerBound:new s(0,1,1)})}),new a({aabb:new o({lowerBound:new s(0,0,1)})}),new a({aabb:new o({lowerBound:new s(1,0,1)})}),new a({aabb:new o({lowerBound:new s(0,1,0)})})),p.vsub(f,c),c.scale(.5,c);for(var g=this.root||this,m=0;m!==8;m++){var d=v[m];d.root=g;var _=d.aabb.lowerBound;_.x*=c.x,_.y*=c.y,_.z*=c.z,_.vadd(f,_),_.vadd(c,d.aabb.upperBound)}},a.prototype.aabbQuery=function(u,f){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(u)&&Array.prototype.push.apply(f,v.data),Array.prototype.push.apply(p,v.children)}return f};var h=new o;a.prototype.rayQuery=function(u,f,p){return u.getAABB(h),h.toLocalFrame(f,h),this.aabbQuery(h,p),p},a.prototype.removeEmptyNodes=function(){for(var u=[this];u.length;){for(var f=u.pop(),p=f.children.length-1;p>=0;p--)f.children[p].data.length||f.children.splice(p,1);Array.prototype.push.apply(u,f.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(n,i,r){i.exports=o;function o(){this.objects=[],this.type=Object}o.prototype.release=function(){for(var s=arguments.length,a=0;a!==s;a++)this.objects.push(arguments[a])},o.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},o.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(n,i,r){i.exports=o;function o(){this.data={keys:[]}}o.prototype.get=function(s,a){if(s>a){var l=a;a=s,s=l}return this.data[s+"-"+a]},o.prototype.set=function(s,a,l){if(s>a){var c=a;a=s,s=c}var h=s+"-"+a;this.get(s,a)||this.data.keys.push(h),this.data[h]=l},o.prototype.reset=function(){for(var s=this.data,a=s.keys;a.length>0;){var l=a.pop();delete s[l]}}},{}],53:[function(n,i,r){function o(){}i.exports=o,o.defaults=function(s,a){s=s||{};for(var l in a)l in s||(s[l]=a[l]);return s}},{}],54:[function(n,i,r){i.exports=a;var o=n("../math/Vec3"),s=n("./Pool");function a(){s.call(this),this.type=o}a.prototype=new s,a.prototype.constructObject=function(){return new o}},{"../math/Vec3":30,"./Pool":51}],55:[function(n,i,r){i.exports=v;var o=n("../collision/AABB"),s=n("../shapes/Shape"),a=n("../collision/Ray"),l=n("../math/Vec3"),c=n("../math/Transform");n("../shapes/ConvexPolyhedron");var h=n("../math/Quaternion");n("../solver/Solver");var u=n("../utils/Vec3Pool"),f=n("../equations/ContactEquation"),p=n("../equations/FrictionEquation");function v(le){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new u,this.world=le,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(le,de,xe,ve,et,Oe){var Ce;this.contactPointPool.length?(Ce=this.contactPointPool.pop(),Ce.bi=le,Ce.bj=de):Ce=new f(le,de),Ce.enabled=le.collisionResponse&&de.collisionResponse&&xe.collisionResponse&&ve.collisionResponse;var Ne=this.currentContactMaterial;Ce.restitution=Ne.restitution,Ce.setSpookParams(Ne.contactEquationStiffness,Ne.contactEquationRelaxation,this.world.dt);var ne=xe.material||le.material,Ae=ve.material||de.material;return ne&&Ae&&ne.restitution>=0&&Ae.restitution>=0&&(Ce.restitution=ne.restitution*Ae.restitution),Ce.si=et||xe,Ce.sj=Oe||ve,Ce},v.prototype.createFrictionEquationsFromContact=function(le,de){var xe=le.bi,ve=le.bj,et=le.si,Oe=le.sj,Ce=this.world,Ne=this.currentContactMaterial,ne=Ne.friction,Ae=et.material||xe.material,Be=Oe.material||ve.material;if(Ae&&Be&&Ae.friction>=0&&Be.friction>=0&&(ne=Ae.friction*Be.friction),ne>0){var qe=ne*Ce.gravity.length(),Le=xe.invMass+ve.invMass;Le>0&&(Le=1/Le);var Te=this.frictionEquationPool,De=Te.length?Te.pop():new p(xe,ve,qe*Le),w=Te.length?Te.pop():new p(xe,ve,qe*Le);return De.bi=w.bi=xe,De.bj=w.bj=ve,De.minForce=w.minForce=-qe*Le,De.maxForce=w.maxForce=qe*Le,De.ri.copy(le.ri),De.rj.copy(le.rj),w.ri.copy(le.ri),w.rj.copy(le.rj),le.ni.tangents(De.t,w.t),De.setSpookParams(Ne.frictionEquationStiffness,Ne.frictionEquationRelaxation,Ce.dt),w.setSpookParams(Ne.frictionEquationStiffness,Ne.frictionEquationRelaxation,Ce.dt),De.enabled=w.enabled=le.enabled,de.push(De,w),!0}return!1};var g=new l,m=new l,d=new l;v.prototype.createFrictionFromAverage=function(le){var de=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(de,this.frictionResult)||le===1)){var xe=this.frictionResult[this.frictionResult.length-2],ve=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),d.setZero();var et=de.bi;de.bj;for(var Oe=0;Oe!==le;Oe++)de=this.result[this.result.length-1-Oe],de.bodyA!==et?(g.vadd(de.ni,g),m.vadd(de.ri,m),d.vadd(de.rj,d)):(g.vsub(de.ni,g),m.vadd(de.rj,m),d.vadd(de.ri,d));var Ce=1/le;m.scale(Ce,xe.ri),d.scale(Ce,xe.rj),ve.ri.copy(xe.ri),ve.rj.copy(xe.rj),g.normalize(),g.tangents(xe.t,ve.t)}};var _=new l,y=new l,x=new h,T=new h;v.prototype.getContacts=function(le,de,xe,ve,et,Oe,Ce){this.contactPointPool=et,this.frictionEquationPool=Ce,this.result=ve,this.frictionResult=Oe;for(var Ne=x,ne=T,Ae=_,Be=y,qe=0,Le=le.length;qe!==Le;qe++){var Te=le[qe],De=de[qe],w=null;Te.material&&De.material&&(w=xe.getContactMaterial(Te.material,De.material)||null);for(var k=0;k<Te.shapes.length;k++){Te.quaternion.mult(Te.shapeOrientations[k],Ne),Te.quaternion.vmult(Te.shapeOffsets[k],Ae),Ae.vadd(Te.position,Ae);for(var B=Te.shapes[k],Z=0;Z<De.shapes.length;Z++){De.quaternion.mult(De.shapeOrientations[Z],ne),De.quaternion.vmult(De.shapeOffsets[Z],Be),Be.vadd(De.position,Be);var G=De.shapes[Z];if(!(Ae.distanceTo(Be)>B.boundingSphereRadius+G.boundingSphereRadius)){var ye=null;B.material&&G.material&&(ye=xe.getContactMaterial(B.material,G.material)||null),this.currentContactMaterial=ye||w||xe.defaultContactMaterial;var ge=this[B.type|G.type];ge&&(B.type<G.type?ge.call(this,B,G,Ae,Be,Ne,ne,Te,De,B,G):ge.call(this,G,B,Be,Ae,ne,Ne,De,Te,B,G))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(le,de,xe,ve,et,Oe,Ce,Ne){le.convexPolyhedronRepresentation.material=le.material,de.convexPolyhedronRepresentation.material=de.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,de.convexPolyhedronRepresentation.collisionResponse=de.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,de.convexPolyhedronRepresentation,xe,ve,et,Oe,Ce,Ne,le,de)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(le,de,xe,ve,et,Oe,Ce,Ne){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,de,xe,ve,et,Oe,Ce,Ne,le,de)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(le,de,xe,ve,et,Oe,Ce,Ne){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexParticle(le.convexPolyhedronRepresentation,de,xe,ve,et,Oe,Ce,Ne,le,de)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=this.createContactEquation(Ce,Ne,le,de);ve.vsub(xe,ne.ni),ne.ni.normalize(),ne.ri.copy(ne.ni),ne.rj.copy(ne.ni),ne.ri.mult(le.radius,ne.ri),ne.rj.mult(-de.radius,ne.rj),ne.ri.vadd(xe,ne.ri),ne.ri.vsub(Ce.position,ne.ri),ne.rj.vadd(ve,ne.rj),ne.rj.vsub(Ne.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)};var R=new l,A=new l,I=new l;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=new l,Ae=R;Ae.set(0,0,1),et.vmult(Ae,Ae);for(var Be=0;Be<de.vertices.length/3;Be++){de.getVertex(Be,ne);var qe=new l;qe.copy(ne),c.pointToWorldFrame(ve,Oe,qe,ne);var Le=A;ne.vsub(xe,Le);var Te=Ae.dot(Le);if(Te<=0){var De=this.createContactEquation(Ce,Ne,le,de);De.ni.copy(Ae);var w=I;Ae.scale(Le.dot(Ae),w),ne.vsub(w,w),De.ri.copy(w),De.ri.vsub(Ce.position,De.ri),De.rj.copy(ne),De.rj.vsub(Ne.position,De.rj),this.result.push(De),this.createFrictionEquationsFromContact(De,this.frictionResult)}}};var W=new l,S=new l;new l;var M=new l,F=new l,U=new l,Y=new l,$=new l,Q=new l,O=new l,C=new l,X=new l,H=new l,D=new l,K=new o,z=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=U,Ae=Y,Be=$,qe=Q,Le=O,Te=C,De=K,w=F,k=S,B=z;c.pointToLocalFrame(ve,Oe,xe,Le);var Z=le.radius;De.lowerBound.set(Le.x-Z,Le.y-Z,Le.z-Z),De.upperBound.set(Le.x+Z,Le.y+Z,Le.z+Z),de.getTrianglesInAABB(De,B);for(var G=M,ye=le.radius*le.radius,ge=0;ge<B.length;ge++)for(var Se=0;Se<3;Se++)if(de.getVertex(de.indices[B[ge]*3+Se],G),G.vsub(Le,k),k.norm2()<=ye){w.copy(G),c.pointToWorldFrame(ve,Oe,w,G),G.vsub(xe,k);var me=this.createContactEquation(Ce,Ne,le,de);me.ni.copy(k),me.ni.normalize(),me.ri.copy(me.ni),me.ri.scale(le.radius,me.ri),me.ri.vadd(xe,me.ri),me.ri.vsub(Ce.position,me.ri),me.rj.copy(G),me.rj.vsub(Ne.position,me.rj),this.result.push(me),this.createFrictionEquationsFromContact(me,this.frictionResult)}for(var ge=0;ge<B.length;ge++)for(var Se=0;Se<3;Se++){de.getVertex(de.indices[B[ge]*3+Se],ne),de.getVertex(de.indices[B[ge]*3+(Se+1)%3],Ae),Ae.vsub(ne,Be),Le.vsub(Ae,Te);var $e=Te.dot(Be);Le.vsub(ne,Te);var Ke=Te.dot(Be);if(Ke>0&&$e<0){Le.vsub(ne,Te),qe.copy(Be),qe.normalize(),Ke=Te.dot(qe),qe.scale(Ke,Te),Te.vadd(ne,Te);var Xe=Te.distanceTo(Le);if(Xe<le.radius){var me=this.createContactEquation(Ce,Ne,le,de);Te.vsub(Le,me.ni),me.ni.normalize(),me.ni.scale(le.radius,me.ri),c.pointToWorldFrame(ve,Oe,Te,Te),Te.vsub(Ne.position,me.rj),c.vectorToWorldFrame(Oe,me.ni,me.ni),c.vectorToWorldFrame(Oe,me.ri,me.ri),this.result.push(me),this.createFrictionEquationsFromContact(me,this.frictionResult)}}}for(var ht=X,lt=H,nt=D,It=W,ge=0,Je=B.length;ge!==Je;ge++){de.getTriangleVertices(B[ge],ht,lt,nt),de.getNormal(B[ge],It),Le.vsub(ht,Te);var Xe=Te.dot(It);if(It.scale(Xe,Te),Le.vsub(Te,Te),Xe=Te.distanceTo(Le),a.pointInTriangle(Te,ht,lt,nt)&&Xe<le.radius){var me=this.createContactEquation(Ce,Ne,le,de);Te.vsub(Le,me.ni),me.ni.normalize(),me.ni.scale(le.radius,me.ri),c.pointToWorldFrame(ve,Oe,Te,Te),Te.vsub(Ne.position,me.rj),c.vectorToWorldFrame(Oe,me.ni,me.ni),c.vectorToWorldFrame(Oe,me.ri,me.ri),this.result.push(me),this.createFrictionEquationsFromContact(me,this.frictionResult)}}B.length=0};var P=new l,b=new l;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=this.createContactEquation(Ce,Ne,le,de);if(ne.ni.set(0,0,1),Oe.vmult(ne.ni,ne.ni),ne.ni.negate(ne.ni),ne.ni.normalize(),ne.ni.mult(le.radius,ne.ri),xe.vsub(ve,P),ne.ni.mult(ne.ni.dot(P),b),P.vsub(b,ne.rj),-P.dot(ne.ni)<=le.radius){var Ae=ne.ri,Be=ne.rj;Ae.vadd(xe,Ae),Ae.vsub(Ce.position,Ae),Be.vadd(ve,Be),Be.vsub(Ne.position,Be),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}};var V=new l,ee=new l,te=new l;function q(le,de,xe){for(var ve=null,et=le.length,Oe=0;Oe!==et;Oe++){var Ce=le[Oe],Ne=V;le[(Oe+1)%et].vsub(Ce,Ne);var ne=ee;Ne.cross(de,ne);var Ae=te;xe.vsub(Ce,Ae);var Be=ne.dot(Ae);if(ve===null||Be>0&&ve===!0||Be<=0&&ve===!1){ve===null&&(ve=Be>0);continue}else return!1}return!0}var ie=new l,he=new l,we=new l,N=new l,Re=[new l,new l,new l,new l,new l,new l],oe=new l,ce=new l,Ue=new l,ke=new l;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=this.v3pool,Ae=Re;xe.vsub(ve,ie),de.getSideNormals(Ae,Oe);for(var Be=le.radius,qe=!1,Le=ce,Te=Ue,De=ke,w=null,k=0,B=0,Z=0,G=null,ye=0,ge=Ae.length;ye!==ge&&qe===!1;ye++){var Se=he;Se.copy(Ae[ye]);var me=Se.norm();Se.normalize();var $e=ie.dot(Se);if($e<me+Be&&$e>0){var Ke=we,Xe=N;Ke.copy(Ae[(ye+1)%3]),Xe.copy(Ae[(ye+2)%3]);var ht=Ke.norm(),lt=Xe.norm();Ke.normalize(),Xe.normalize();var nt=ie.dot(Ke),It=ie.dot(Xe);if(nt<ht&&nt>-ht&&It<lt&&It>-lt){var Tt=Math.abs($e-me-Be);(G===null||Tt<G)&&(G=Tt,B=nt,Z=It,w=me,Le.copy(Se),Te.copy(Ke),De.copy(Xe),k++)}}}if(k){qe=!0;var it=this.createContactEquation(Ce,Ne,le,de);Le.mult(-Be,it.ri),it.ni.copy(Le),it.ni.negate(it.ni),Le.mult(w,Le),Te.mult(B,Te),Le.vadd(Te,Le),De.mult(Z,De),Le.vadd(De,it.rj),it.ri.vadd(xe,it.ri),it.ri.vsub(Ce.position,it.ri),it.rj.vadd(ve,it.rj),it.rj.vsub(Ne.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}for(var Je=ne.get(),je=oe,_t=0;_t!==2&&!qe;_t++)for(var ot=0;ot!==2&&!qe;ot++)for(var Mt=0;Mt!==2&&!qe;Mt++)if(Je.set(0,0,0),_t?Je.vadd(Ae[0],Je):Je.vsub(Ae[0],Je),ot?Je.vadd(Ae[1],Je):Je.vsub(Ae[1],Je),Mt?Je.vadd(Ae[2],Je):Je.vsub(Ae[2],Je),ve.vadd(Je,je),je.vsub(xe,je),je.norm2()<Be*Be){qe=!0;var it=this.createContactEquation(Ce,Ne,le,de);it.ri.copy(je),it.ri.normalize(),it.ni.copy(it.ri),it.ri.mult(Be,it.ri),it.rj.copy(Je),it.ri.vadd(xe,it.ri),it.ri.vsub(Ce.position,it.ri),it.rj.vadd(ve,it.rj),it.rj.vsub(Ne.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}ne.release(Je),Je=null;for(var Xt=ne.get(),Nt=ne.get(),it=ne.get(),mt=ne.get(),Tt=ne.get(),Gn=Ae.length,_t=0;_t!==Gn&&!qe;_t++)for(var ot=0;ot!==Gn&&!qe;ot++)if(_t%3!==ot%3){Ae[ot].cross(Ae[_t],Xt),Xt.normalize(),Ae[_t].vadd(Ae[ot],Nt),it.copy(xe),it.vsub(Nt,it),it.vsub(ve,it);var Ht=it.dot(Xt);Xt.mult(Ht,mt);for(var Mt=0;Mt===_t%3||Mt===ot%3;)Mt++;Tt.copy(xe),Tt.vsub(mt,Tt),Tt.vsub(Nt,Tt),Tt.vsub(ve,Tt);var Yo=Math.abs(Ht),Kl=Tt.norm();if(Yo<Ae[Mt].norm()&&Kl<Be){qe=!0;var At=this.createContactEquation(Ce,Ne,le,de);Nt.vadd(mt,At.rj),At.rj.copy(At.rj),Tt.negate(At.ni),At.ni.normalize(),At.ri.copy(At.rj),At.ri.vadd(ve,At.ri),At.ri.vsub(xe,At.ri),At.ri.normalize(),At.ri.mult(Be,At.ri),At.ri.vadd(xe,At.ri),At.ri.vsub(Ce.position,At.ri),At.rj.vadd(ve,At.rj),At.rj.vsub(Ne.position,At.rj),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}}ne.release(Xt,Nt,it,mt,Tt)};var Ge=new l,L=new l,E=new l,J=new l,se=new l,fe=new l,re=new l,Ie=new l,_e=new l,be=new l;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=this.v3pool;xe.vsub(ve,Ge);for(var Ae=de.faceNormals,Be=de.faces,qe=de.vertices,Le=le.radius,Te=0;Te!==qe.length;Te++){var De=qe[Te],w=se;Oe.vmult(De,w),ve.vadd(w,w);var k=J;if(w.vsub(xe,k),k.norm2()<Le*Le){Z=!0;var B=this.createContactEquation(Ce,Ne,le,de);B.ri.copy(k),B.ri.normalize(),B.ni.copy(B.ri),B.ri.mult(Le,B.ri),w.vsub(ve,B.rj),B.ri.vadd(xe,B.ri),B.ri.vsub(Ce.position,B.ri),B.rj.vadd(ve,B.rj),B.rj.vsub(Ne.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);return}}for(var Z=!1,Te=0,G=Be.length;Te!==G&&Z===!1;Te++){var ye=Ae[Te],ge=Be[Te],Se=fe;Oe.vmult(ye,Se);var me=re;Oe.vmult(qe[ge[0]],me),me.vadd(ve,me);var $e=Ie;Se.mult(-Le,$e),xe.vadd($e,$e);var Ke=_e;$e.vsub(me,Ke);var Xe=Ke.dot(Se),ht=be;if(xe.vsub(me,ht),Xe<0&&ht.dot(Se)>0){for(var lt=[],nt=0,It=ge.length;nt!==It;nt++){var Je=ne.get();Oe.vmult(qe[ge[nt]],Je),ve.vadd(Je,Je),lt.push(Je)}if(q(lt,Se,xe)){Z=!0;var B=this.createContactEquation(Ce,Ne,le,de);Se.mult(-Le,B.ri),Se.negate(B.ni);var je=ne.get();Se.mult(-Xe,je);var _t=ne.get();Se.mult(-Le,_t),xe.vsub(ve,B.rj),B.rj.vadd(_t,B.rj),B.rj.vadd(je,B.rj),B.rj.vadd(ve,B.rj),B.rj.vsub(Ne.position,B.rj),B.ri.vadd(xe,B.ri),B.ri.vsub(Ce.position,B.ri),ne.release(je),ne.release(_t),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(var nt=0,ot=lt.length;nt!==ot;nt++)ne.release(lt[nt]);return}else for(var nt=0;nt!==ge.length;nt++){var Mt=ne.get(),Xt=ne.get();Oe.vmult(qe[ge[(nt+1)%ge.length]],Mt),Oe.vmult(qe[ge[(nt+2)%ge.length]],Xt),ve.vadd(Mt,Mt),ve.vadd(Xt,Xt);var Nt=L;Xt.vsub(Mt,Nt);var it=E;Nt.unit(it);var mt=ne.get(),Tt=ne.get();xe.vsub(Mt,Tt);var Gn=Tt.dot(it);it.mult(Gn,mt),mt.vadd(Mt,mt);var Ht=ne.get();if(mt.vsub(xe,Ht),Gn>0&&Gn*Gn<Nt.norm2()&&Ht.norm2()<Le*Le){var B=this.createContactEquation(Ce,Ne,le,de);mt.vsub(ve,B.rj),mt.vsub(xe,B.ni),B.ni.normalize(),B.ni.mult(Le,B.ri),B.rj.vadd(ve,B.rj),B.rj.vsub(Ne.position,B.rj),B.ri.vadd(xe,B.ri),B.ri.vsub(Ce.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(var nt=0,ot=lt.length;nt!==ot;nt++)ne.release(lt[nt]);ne.release(Mt),ne.release(Xt),ne.release(mt),ne.release(Ht),ne.release(Tt);return}ne.release(Mt),ne.release(Xt),ne.release(mt),ne.release(Ht),ne.release(Tt)}for(var nt=0,ot=lt.length;nt!==ot;nt++)ne.release(lt[nt])}}},new l,new l,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(le,de,xe,ve,et,Oe,Ce,Ne){de.convexPolyhedronRepresentation.material=de.material,de.convexPolyhedronRepresentation.collisionResponse=de.collisionResponse,this.planeConvex(le,de.convexPolyhedronRepresentation,xe,ve,et,Oe,Ce,Ne)};var rt=new l,Me=new l,We=new l,Qe=new l;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=rt,Ae=Me;Ae.set(0,0,1),et.vmult(Ae,Ae);for(var Be=0,qe=We,Le=0;Le!==de.vertices.length;Le++){ne.copy(de.vertices[Le]),Oe.vmult(ne,ne),ve.vadd(ne,ne),ne.vsub(xe,qe);var Te=Ae.dot(qe);if(Te<=0){var De=this.createContactEquation(Ce,Ne,le,de),w=Qe;Ae.mult(Ae.dot(qe),w),ne.vsub(w,w),w.vsub(xe,De.ri),De.ni.copy(Ae),ne.vsub(ve,De.rj),De.ri.vadd(xe,De.ri),De.ri.vsub(Ce.position,De.ri),De.rj.vadd(ve,De.rj),De.rj.vsub(Ne.position,De.rj),this.result.push(De),Be++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(De,this.frictionResult)}}this.enableFrictionReduction&&Be&&this.createFrictionFromAverage(Be)};var Ze=new l,ze=new l;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(le,de,xe,ve,et,Oe,Ce,Ne,ne,Ae,Be,qe){var Le=Ze;if(!(xe.distanceTo(ve)>le.boundingSphereRadius+de.boundingSphereRadius)&&le.findSeparatingAxis(de,xe,et,ve,Oe,Le,Be,qe)){var Te=[],De=ze;le.clipAgainstHull(xe,et,de,ve,Oe,Le,-100,100,Te);for(var w=0,k=0;k!==Te.length;k++){var B=this.createContactEquation(Ce,Ne,le,de,ne,Ae),Z=B.ri,G=B.rj;Le.negate(B.ni),Te[k].normal.negate(De),De.mult(Te[k].depth,De),Te[k].point.vadd(De,Z),G.copy(Te[k].point),Z.vsub(xe,Z),G.vsub(ve,G),Z.vadd(xe,Z),Z.vsub(Ce.position,Z),G.vadd(ve,G),G.vsub(Ne.position,G),this.result.push(B),w++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(B,this.frictionResult)}this.enableFrictionReduction&&w&&this.createFrictionFromAverage(w)}};var st=new l,tt=new l,dt=new l;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=st;ne.set(0,0,1),Ce.quaternion.vmult(ne,ne);var Ae=tt;ve.vsub(Ce.position,Ae);var Be=ne.dot(Ae);if(Be<=0){var qe=this.createContactEquation(Ne,Ce,de,le);qe.ni.copy(ne),qe.ni.negate(qe.ni),qe.ri.set(0,0,0);var Le=dt;ne.mult(ne.dot(ve),Le),ve.vsub(Le,Le),qe.rj.copy(Le),this.result.push(qe),this.createFrictionEquationsFromContact(qe,this.frictionResult)}};var j=new l;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=j;ne.set(0,0,1),ve.vsub(xe,ne);var Ae=ne.norm2();if(Ae<=le.radius*le.radius){var Be=this.createContactEquation(Ne,Ce,de,le);ne.normalize(),Be.rj.copy(ne),Be.rj.mult(le.radius,Be.rj),Be.ni.copy(ne),Be.ni.negate(Be.ni),Be.ri.set(0,0,0),this.result.push(Be),this.createFrictionEquationsFromContact(Be,this.frictionResult)}};var Fe=new h,ue=new l;new l;var pe=new l,Pe=new l,Ve=new l;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=-1,Ae=pe,Be=Ve,qe=null,Le=ue;if(Le.copy(ve),Le.vsub(xe,Le),et.conjugate(Fe),Fe.vmult(Le,Le),le.pointIsInside(Le)){le.worldVerticesNeedsUpdate&&le.computeWorldVertices(xe,et),le.worldFaceNormalsNeedsUpdate&&le.computeWorldFaceNormals(et);for(var Te=0,De=le.faces.length;Te!==De;Te++){var w=[le.worldVertices[le.faces[Te][0]]],k=le.worldFaceNormals[Te];ve.vsub(w[0],Pe);var B=-k.dot(Pe);(qe===null||Math.abs(B)<Math.abs(qe))&&(qe=B,ne=Te,Ae.copy(k))}if(ne!==-1){var Z=this.createContactEquation(Ne,Ce,de,le);Ae.mult(qe,Be),Be.vadd(ve,Be),Be.vsub(xe,Be),Z.rj.copy(Be),Ae.negate(Z.ni),Z.ri.set(0,0,0);var G=Z.ri,ye=Z.rj;G.vadd(ve,G),G.vsub(Ne.position,G),ye.vadd(xe,ye),ye.vsub(Ce.position,ye),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(le,de,xe,ve,et,Oe,Ce,Ne){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexHeightfield(le.convexPolyhedronRepresentation,de,xe,ve,et,Oe,Ce,Ne)};var at=new l,wt=new l,kt=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=de.data,Ae=de.elementSize,Be=le.boundingSphereRadius,qe=wt,Le=kt,Te=at;c.pointToLocalFrame(ve,Oe,xe,Te);var De=Math.floor((Te.x-Be)/Ae)-1,w=Math.ceil((Te.x+Be)/Ae)+1,k=Math.floor((Te.y-Be)/Ae)-1,B=Math.ceil((Te.y+Be)/Ae)+1;if(!(w<0||B<0||De>ne.length||k>ne[0].length)){De<0&&(De=0),w<0&&(w=0),k<0&&(k=0),B<0&&(B=0),De>=ne.length&&(De=ne.length-1),w>=ne.length&&(w=ne.length-1),B>=ne[0].length&&(B=ne[0].length-1),k>=ne[0].length&&(k=ne[0].length-1);var Z=[];de.getRectMinMax(De,k,w,B,Z);var G=Z[0],ye=Z[1];if(!(Te.z-Be>ye||Te.z+Be<G))for(var ge=De;ge<w;ge++)for(var Se=k;Se<B;Se++)de.getConvexTrianglePillar(ge,Se,!1),c.pointToWorldFrame(ve,Oe,de.pillarOffset,qe),xe.distanceTo(qe)<de.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,de.pillarConvex,xe,qe,et,Oe,Ce,Ne,null,null,Le,null),de.getConvexTrianglePillar(ge,Se,!0),c.pointToWorldFrame(ve,Oe,de.pillarOffset,qe),xe.distanceTo(qe)<de.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,de.pillarConvex,xe,qe,et,Oe,Ce,Ne,null,null,Le,null)}};var ft=new l,vt=new l;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(le,de,xe,ve,et,Oe,Ce,Ne){var ne=de.data,Ae=le.radius,Be=de.elementSize,qe=vt,Le=ft;c.pointToLocalFrame(ve,Oe,xe,Le);var Te=Math.floor((Le.x-Ae)/Be)-1,De=Math.ceil((Le.x+Ae)/Be)+1,w=Math.floor((Le.y-Ae)/Be)-1,k=Math.ceil((Le.y+Ae)/Be)+1;if(!(De<0||k<0||Te>ne.length||k>ne[0].length)){Te<0&&(Te=0),De<0&&(De=0),w<0&&(w=0),k<0&&(k=0),Te>=ne.length&&(Te=ne.length-1),De>=ne.length&&(De=ne.length-1),k>=ne[0].length&&(k=ne[0].length-1),w>=ne[0].length&&(w=ne[0].length-1);var B=[];de.getRectMinMax(Te,w,De,k,B);var Z=B[0],G=B[1];if(!(Le.z-Ae>G||Le.z+Ae<Z))for(var ye=this.result,ge=Te;ge<De;ge++)for(var Se=w;Se<k;Se++){var me=ye.length;de.getConvexTrianglePillar(ge,Se,!1),c.pointToWorldFrame(ve,Oe,de.pillarOffset,qe),xe.distanceTo(qe)<de.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,de.pillarConvex,xe,qe,et,Oe,Ce,Ne),de.getConvexTrianglePillar(ge,Se,!0),c.pointToWorldFrame(ve,Oe,de.pillarOffset,qe),xe.distanceTo(qe)<de.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,de.pillarConvex,xe,qe,et,Oe,Ce,Ne);var $e=ye.length-me;if($e>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(n,i,r){i.exports=x;var o=n("../shapes/Shape"),s=n("../math/Vec3"),a=n("../math/Quaternion"),l=n("../solver/GSSolver");n("../utils/Vec3Pool"),n("../equations/ContactEquation"),n("../equations/FrictionEquation");var c=n("./Narrowphase"),h=n("../utils/EventTarget"),u=n("../collision/ArrayCollisionMatrix"),f=n("../material/Material"),p=n("../material/ContactMaterial"),v=n("../objects/Body"),g=n("../utils/TupleDictionary"),m=n("../collision/RaycastResult"),d=n("../collision/AABB"),_=n("../collision/Ray"),y=n("../collision/NaiveBroadphase");function x(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new c(this),this.collisionMatrix=new u,this.collisionMatrixPrevious=new u,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new f("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new h,new d;var T=new _;if(x.prototype.getContactMaterial=function(C,X){return this.contactMaterialTable.get(C.id,X.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var C=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=C,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(C){this.bodies.indexOf(C)===-1&&(C.index=this.bodies.length,this.bodies.push(C),C.world=this,C.initPosition.copy(C.position),C.initVelocity.copy(C.velocity),C.timeLastSleepy=this.time,C instanceof v&&(C.initAngularVelocity.copy(C.angularVelocity),C.initQuaternion.copy(C.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=C,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(C){this.constraints.push(C)},x.prototype.removeConstraint=function(C){var X=this.constraints.indexOf(C);X!==-1&&this.constraints.splice(X,1)},x.prototype.rayTest=function(C,X,H){H instanceof m?this.raycastClosest(C,X,{skipBackfaces:!0},H):this.raycastAll(C,X,{skipBackfaces:!0},H)},x.prototype.raycastAll=function(C,X,H,D){return H.mode=_.ALL,H.from=C,H.to=X,H.callback=D,T.intersectWorld(this,H)},x.prototype.raycastAny=function(C,X,H,D){return H.mode=_.ANY,H.from=C,H.to=X,H.result=D,T.intersectWorld(this,H)},x.prototype.raycastClosest=function(C,X,H,D){return H.mode=_.CLOSEST,H.from=C,H.to=X,H.result=D,T.intersectWorld(this,H)},x.prototype.remove=function(C){C.world=null;var X=this.bodies.length-1,H=this.bodies,D=H.indexOf(C);if(D!==-1){H.splice(D,1);for(var K=0;K!==H.length;K++)H[K].index=K;this.collisionMatrix.setNumObjects(X),this.removeBodyEvent.body=C,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(C){this.materials.push(C)},x.prototype.addContactMaterial=function(C){this.contactmaterials.push(C),this.contactMaterialTable.set(C.materials[0].id,C.materials[1].id,C)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var A=new s;x.prototype.step=function(C,X,H){if(H=H||10,X=X||0,X===0)this.internalStep(C),this.time+=C;else{var D=Math.floor((this.time+X)/C)-Math.floor(this.time/C);D=Math.min(D,H);for(var K=performance.now(),z=0;z!==D&&(this.internalStep(C),!(performance.now()-K>C*1e3));z++);this.time+=X;for(var P=this.time%C,b=P/C,V=A,ee=this.bodies,te=0;te!==ee.length;te++){var q=ee[te];q.type!==v.STATIC&&q.sleepState!==v.SLEEPING?(q.position.vsub(q.previousPosition,V),V.scale(b,V),q.position.vadd(V,q.interpolatedPosition)):(q.interpolatedPosition.copy(q.position),q.interpolatedQuaternion.copy(q.quaternion))}}};var I={type:"postStep"},W={type:"preStep"},S={type:"collide",body:null,contact:null},M=[],F=[],U=[],Y=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new a;var $=new a,Q=new a,O=new s;x.prototype.internalStep=function(C){this.dt=C;var X=this.contacts,H=U,D=Y,K=this.numObjects(),z=this.bodies,P=this.solver,b=this.gravity,V=this.doProfiling,ee=this.profile,te=v.DYNAMIC,q,ie=this.constraints,he=F;b.norm();var we=b.x,N=b.y,Re=b.z,oe=0;for(V&&(q=performance.now()),oe=0;oe!==K;oe++){var ce=z[oe];if(ce.type&te){var Ue=ce.force,ke=ce.mass;Ue.x+=ke*we,Ue.y+=ke*N,Ue.z+=ke*Re}}for(var oe=0,Ge=this.subsystems.length;oe!==Ge;oe++)this.subsystems[oe].update();V&&(q=performance.now()),H.length=0,D.length=0,this.broadphase.collisionPairs(this,H,D),V&&(ee.broadphase=performance.now()-q);var Ze=ie.length;for(oe=0;oe!==Ze;oe++){var L=ie[oe];if(!L.collideConnected)for(var E=H.length-1;E>=0;E-=1)(L.bodyA===H[E]&&L.bodyB===D[E]||L.bodyB===H[E]&&L.bodyA===D[E])&&(H.splice(E,1),D.splice(E,1))}this.collisionMatrixTick(),V&&(q=performance.now());var J=M,se=X.length;for(oe=0;oe!==se;oe++)J.push(X[oe]);X.length=0;var fe=this.frictionEquations.length;for(oe=0;oe!==fe;oe++)he.push(this.frictionEquations[oe]);this.frictionEquations.length=0,this.narrowphase.getContacts(H,D,this,X,J,this.frictionEquations,he),V&&(ee.narrowphase=performance.now()-q),V&&(q=performance.now());for(var oe=0;oe<this.frictionEquations.length;oe++)P.addEquation(this.frictionEquations[oe]);for(var re=X.length,Ie=0;Ie!==re;Ie++){var L=X[Ie],ce=L.bi,_e=L.bj;L.si,L.sj;var be;if(ce.material&&_e.material?be=this.getContactMaterial(ce.material,_e.material)||this.defaultContactMaterial:be=this.defaultContactMaterial,be.friction,ce.material&&_e.material&&(ce.material.friction>=0&&_e.material.friction>=0&&ce.material.friction*_e.material.friction,ce.material.restitution>=0&&_e.material.restitution>=0&&(L.restitution=ce.material.restitution*_e.material.restitution)),P.addEquation(L),ce.allowSleep&&ce.type===v.DYNAMIC&&ce.sleepState===v.SLEEPING&&_e.sleepState===v.AWAKE&&_e.type!==v.STATIC){var rt=_e.velocity.norm2()+_e.angularVelocity.norm2(),Me=Math.pow(_e.sleepSpeedLimit,2);rt>=Me*2&&(ce._wakeUpAfterNarrowphase=!0)}if(_e.allowSleep&&_e.type===v.DYNAMIC&&_e.sleepState===v.SLEEPING&&ce.sleepState===v.AWAKE&&ce.type!==v.STATIC){var We=ce.velocity.norm2()+ce.angularVelocity.norm2(),Qe=Math.pow(ce.sleepSpeedLimit,2);We>=Qe*2&&(_e._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ce,_e,!0),this.collisionMatrixPrevious.get(ce,_e)||(S.body=_e,S.contact=L,ce.dispatchEvent(S),S.body=ce,_e.dispatchEvent(S))}for(V&&(ee.makeContactConstraints=performance.now()-q,q=performance.now()),oe=0;oe!==K;oe++){var ce=z[oe];ce._wakeUpAfterNarrowphase&&(ce.wakeUp(),ce._wakeUpAfterNarrowphase=!1)}var Ze=ie.length;for(oe=0;oe!==Ze;oe++){var L=ie[oe];L.update();for(var E=0,ze=L.equations.length;E!==ze;E++){var st=L.equations[E];P.addEquation(st)}}P.solve(C,this),V&&(ee.solve=performance.now()-q),P.removeAllEquations();var tt=Math.pow;for(oe=0;oe!==K;oe++){var ce=z[oe];if(ce.type&te){var dt=tt(1-ce.linearDamping,C),j=ce.velocity;j.mult(dt,j);var Fe=ce.angularVelocity;if(Fe){var ue=tt(1-ce.angularDamping,C);Fe.mult(ue,Fe)}}}for(this.dispatchEvent(W),oe=0;oe!==K;oe++){var ce=z[oe];ce.preStep&&ce.preStep.call(ce)}V&&(q=performance.now());var pe=$,Pe=Q,Ve=this.stepnumber,at=v.DYNAMIC|v.KINEMATIC,wt=Ve%(this.quatNormalizeSkip+1)===0,kt=this.quatNormalizeFast,ft=C*.5;for(o.types.PLANE,o.types.CONVEXPOLYHEDRON,oe=0;oe!==K;oe++){var vt=z[oe],le=vt.force,de=vt.torque;if(vt.type&at&&vt.sleepState!==v.SLEEPING){var xe=vt.velocity,ve=vt.angularVelocity,et=vt.position,Oe=vt.quaternion,Ce=vt.invMass,Ne=vt.invInertiaWorld;xe.x+=le.x*Ce*C,xe.y+=le.y*Ce*C,xe.z+=le.z*Ce*C,vt.angularVelocity&&(Ne.vmult(de,O),O.mult(C,O),O.vadd(ve,ve)),et.x+=xe.x*C,et.y+=xe.y*C,et.z+=xe.z*C,vt.angularVelocity&&(pe.set(ve.x,ve.y,ve.z,0),pe.mult(Oe,Pe),Oe.x+=ft*Pe.x,Oe.y+=ft*Pe.y,Oe.z+=ft*Pe.z,Oe.w+=ft*Pe.w,wt&&(kt?Oe.normalizeFast():Oe.normalize())),vt.aabb&&(vt.aabbNeedsUpdate=!0),vt.updateInertiaWorld&&vt.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,V&&(ee.integrate=performance.now()-q),this.time+=C,this.stepnumber+=1,this.dispatchEvent(I),oe=0;oe!==K;oe++){var ce=z[oe],ne=ce.postStep;ne&&ne.call(ce)}if(this.allowSleep)for(oe=0;oe!==K;oe++)z[oe].sleepTick(this.time)},x.prototype.clearForces=function(){for(var C=this.bodies,X=C.length,H=0;H!==X;H++){var D=C[H];D.force,D.torque,D.force.set(0,0,0),D.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Wg);var Zt=Wg.exports;let Vi,Cn,xr,Sr,nc=0,ic=0;function T1(){const t=new x1,e=new Gf(-10,10,5,-5,.1,100);e.position.set(0,20,0),e.lookAt(0,0,0),t.background=new yt("black");const n=new w1(16777215,.5);t.add(n);const i=new E1(16777215,.5);i.position.set(0,10,10),t.add(i);const r=new y1;r.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(r.domElement),Vi=new Zt.World,Vi.gravity.set(0,0,0);const o=new Zt.Body({type:Zt.Body.STATIC,shape:new Zt.Plane});o.position.set(0,0,5),o.quaternion.setFromEuler(-Math.PI/2,0,0),Vi.addBody(o);const s=new Zt.Body({type:Zt.Body.STATIC,shape:new Zt.Plane});s.position.set(0,0,-5),s.quaternion.setFromEuler(Math.PI/2,0,0),Vi.addBody(s);const a=new Xf(.5,16,16),l=new ec({color:"white"}),c=new zn(a,l);t.add(c),Cn=new Zt.Body({mass:1,shape:new Zt.Sphere(.5),position:new Zt.Vec3(0,0,0)}),R(),Vi.addBody(Cn);const h=new Xo(1,.2,2),u=new ec({color:"blue"}),f=new zn(h,u);t.add(f),xr=new Zt.Body({mass:0,shape:new Zt.Box(new Zt.Vec3(.5,.1,1)),position:new Zt.Vec3(-8,0,0)}),Vi.addBody(xr);const p=new zn(h,u);p.material=new ec({color:"red"}),t.add(p),Sr=new Zt.Body({mass:0,shape:new Zt.Box(new Zt.Vec3(.5,.1,1)),position:new Zt.Vec3(8,0,0)}),Vi.addBody(Sr);let v=!1,g=!1,m=!1,d=!1;window.addEventListener("keydown",A=>{A.key==="w"&&(v=!0),A.key==="s"&&(g=!0),A.key==="ArrowUp"&&(m=!0),A.key==="ArrowDown"&&(d=!0)}),window.addEventListener("keyup",A=>{A.key==="w"&&(v=!1),A.key==="s"&&(g=!1),A.key==="ArrowUp"&&(m=!1),A.key==="ArrowDown"&&(d=!1)});function _(){v&&(xr.position.z+=.1),g&&(xr.position.z-=.1),m&&(Sr.position.z+=.1),d&&(Sr.position.z-=.1),xr.position.z=Math.max(-4,Math.min(4,xr.position.z)),Sr.position.z=Math.max(-4,Math.min(4,Sr.position.z))}const y=5;function x(){const A=Cn.velocity.norm();A>y&&Cn.velocity.scale(y/A,Cn.velocity)}function T(){Vi.step(1/60),c.position.copy(Cn.position),f.position.copy(xr.position),p.position.copy(Sr.position),_(),x(),(Cn.position.z>4.5||Cn.position.z<-4.5)&&(Cn.velocity.z*=-1),Cn.position.x<-9?(ic++,console.log(`Punto para la derecha! Puntaje - Izquierda: ${nc}, Derecha: ${ic}`),R()):Cn.position.x>9&&(nc++,console.log(`Punto para la izquierda! Puntaje - Izquierda: ${nc}, Derecha: ${ic}`),R()),r.render(t,e),requestAnimationFrame(T)}function R(){Cn.position.set(0,0,0);const A=3;Cn.velocity.set(A*(Math.random()>.5?1:-1),0,A*(Math.random()>.5?1:-1))}T()}const A1=()=>rc.jsx(rc.Fragment,{children:T1()});cg(document.getElementById("root")).render(rc.jsx(A1,{}));
