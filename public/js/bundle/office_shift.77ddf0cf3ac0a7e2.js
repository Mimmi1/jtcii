(self["webpackChunk"] = self["webpackChunk"] || []).push([["office_shift"],{

/***/ "./node_modules/@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.es.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.es.js ***!
  \********************************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=31)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(26)("wks"),o=n(28),r=n(3).Symbol,s="function"==typeof r;(t.exports=function(t){return i[t]||(i[t]=s&&r[t]||(s?r:o)("Symbol."+t))}).store=i},function(t,e){t.exports=function(t,e,n,i,o,r){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):i&&(c=i),c){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(t,e){return c.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:a,options:l}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(3),o=n(0),r=n(20),s=n(5),a=n(10),u=function(t,e,n){var l,c,d,f=t&u.F,h=t&u.G,p=t&u.S,v=t&u.P,y=t&u.B,m=t&u.W,b=h?o:o[e]||(o[e]={}),g=b.prototype,x=h?i:p?i[e]:(i[e]||{}).prototype;h&&(n=e);for(l in n)(c=!f&&x&&void 0!==x[l])&&a(b,l)||(d=c?x[l]:n[l],b[l]=h&&"function"!=typeof x[l]?n[l]:y&&c?r(d,i):m&&x[l]==d?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(d):v&&"function"==typeof d?r(Function.call,d):d,v&&((b.virtual||(b.virtual={}))[l]=d,t&u.R&&g&&!g[l]&&s(g,l,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var i=n(6),o=n(13);t.exports=n(8)?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(7),o=n(36),r=n(37),s=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(i(t),e=r(e,!0),i(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(12);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(15);t.exports=function(t){return Object(i(t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(39),o=n(29);t.exports=Object.keys||function(t){return i(t,o)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(26)("keys"),o=n(28);t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e,n){t.exports={default:n(33),__esModule:!0}},function(t,e,n){var i=n(35);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var i=n(12),o=n(3).document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},function(t,e,n){var i=n(23),o=n(15);t.exports=function(t){return i(o(t))}},function(t,e,n){var i=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(16),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},function(t,e,n){var i=n(0),o=n(3),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(27)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!0},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(6).f,o=n(10),r=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,r)&&i(t,r,{configurable:!0,value:e})}},function(t,e,n){"use strict";function i(t){g||n(46)}function o(t){O||n(45)}function r(t){N||n(70)}function s(t){G||n(44)}function a(t){at||n(32)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(19),l=n.n(u),c=n(47),d=n.n(c),f=n(66),h=n.n(f),p={name:"ClockPickerCanvas",props:{width:{type:Number,default:300},type:{type:String,default:"hours"},hoursIn:{type:Number,default:24},gisture:{type:Number,default:30},disabled:{type:Array,default:function(){return[]}},defaultValue:{type:String,default:null},activeColor:{type:String,default:"#a48bd1"},activeTextColor:{type:String,default:"white"},color:{type:String,default:"#757575"},disabledColor:{type:String,default:"#ddd"},font:{type:String,default:""}},data:function(){return{radius:null,ctx:null,anglesMap:{},anglesMapFactor:null,$canvas:null,value:null,lastEvent:{x:null,y:null,angle:null,radius:null,round:null},moveStart:!1,throttleDelay:100,scheduled:!1,alpha:.7}},computed:{pxRatio:function(){return"undefined"==typeof window?1:window.devicePixelRatio}},methods:{init:function(){this.getCanvasElement(),this.setDimensions(),this.setAnglesMap(),this.setTypography(),this.drawNumbers()},getCanvasElement:function(){this.$canvas=this.$refs.canvas,this.ctx=this.$canvas.getContext("2d")},setDimensions:function(){var t=this.gisture*this.pxRatio,e=this.width*this.pxRatio;return this.ctx.translate(e/2,e/2),this.radius=e/2-t/2,{x:e/2,y:e/2}},setTypography:function(){var t=14*this.pxRatio;this.ctx.font="normal normal 500 "+t+"px "+this.font,this.ctx.textAlign="center",this.ctx.textBaseline="middle"},setAnglesMap:function(){var t="hours"===this.type?12:60;this.anglesMapFactor=360/t;for(var e=0;e<t;e+=1){var n=this.anglesMapFactor*e-90;this.anglesMap[this.padNo(e)]={angle:this.roundAngle(n),round:Math.floor((n+90)/360)}}if("hours"===this.type&&24===this.hoursIn)for(var i=12;i<24;i+=1){var o=this.anglesMapFactor*i-90;this.anglesMap[this.padNo(i)]={angle:this.roundAngle(o),round:Math.floor((o+90)/360)}}},drawNumbers:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.pxRatio*this.width,i=[],o=[],r=[];h()(this.anglesMap).forEach(function(n){var s=t.gisture*t.pxRatio,a=t.anglesMap[n],u=a.angle,l=a.round,c=t.radius-l*s,d=c*Math.cos(u*(Math.PI/180)),f=c*Math.sin(u*(Math.PI/180));t.disabled.includes(n)?o.push([n,d,f]):e&&t.value===n?i.push(n,d,f):e||t.lastEvent.value!==n?r.push([n,d,f]):i.push(n,d,f)}),this.ctx.clearRect(-n/2,-n/2,n,n),this.drawCircle(0,0,3,this.activeColor),this.drawLine(i[1],i[2],this.activeColor),this.drawCircle(i[1],i[2],12,this.activeColor,this.alpha,!0),o.forEach(function(e){return t.drawDisabled.apply(t,d()(e))}),r.forEach(function(e){return t.drawNormalValue.apply(t,d()(e))}),this.drawValue.apply(this,i)},drawDisabled:function(t,e,n){var i=this.type,o=Number(t)%5==0;if("hours"===i||o)return this.ctx.fillStyle=this.disabledColor,void this.ctx.fillText(t,e,n);this.drawCircle(e,n,2,this.disabledColor)},drawValue:function(t,e,n){var i=this.shouldDrawNo(t);this.ctx.fillStyle=this.activeColor,i?(this.ctx.fillStyle=this.activeTextColor,this.ctx.fillText(t,e,n)):this.drawCircle(e,n,3,this.activeTextColor)},drawNormalValue:function(t,e,n){if(this.shouldDrawNo(t))return this.ctx.fillStyle=this.color,void this.ctx.fillText(t,e,n);this.drawCircle(e,n,2,this.activeColor,.3)},shouldDrawNo:function(t){var e=Number(t)%5==0;return"hours"===this.type||e},drawCircle:function(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=n*this.pxRatio,a=this.width*this.pxRatio;this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(t,e,s,0,2*Math.PI),this.ctx.closePath(),r&&(this.ctx.clip(),this.ctx.clearRect(-a/2,-a/2,a,a)),this.ctx.fillStyle=i,this.ctx.globalAlpha=o,this.ctx.fill(),this.ctx.restore(),this.ctx.globalAlpha=1},drawLine:function(t,e,n){this.ctx.save(),this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(t,e),this.ctx.closePath(),this.ctx.strokeStyle=n,this.ctx.globalAlpha=this.alpha,this.ctx.lineWidth=this.pxRatio,this.ctx.stroke(),this.ctx.restore(),this.ctx.globalAlpha=1},padNo:function(t){var e="00"+t;return e.slice(e.length-2)},roundAngle:function(t){var e=t<0?360+t:t;return e-360*Math.floor(e/360)},onPointChange:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.pxRatio*this.width;this.ctx.clearRect(-n/2,-n/2,n,n),this.calculateLastEvent(t),this.getSelectedNo(e),this.drawNumbers(e)},calculateLastEvent:function(t){var e=t.clientX,n=t.clientY,i=this.gisture*this.pxRatio,o=this.$canvas.getBoundingClientRect(),r=o.x+this.width/2,s=o.y+this.width/2,a=e-r,u=n-s,c=Math.atan(u/a),d=Math.abs(a/Math.cos(c))*this.pxRatio,f=Math.round((this.radius-d)/i),h=c*(180/Math.PI);return a<0?h+=180:u<0&&(h+=360),f<0?f=0:f>1&&(f=1),"hours"!==this.type&&(f=0),"hours"===this.type&&12===this.hoursIn&&(f=0),this.lastEvent=l()(this.lastEvent,{x:a,y:u,angle:h,radius:d,round:f}),this.lastEvent},getSelectedNo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.anglesMapFactor,i=this.lastEvent.angle%n>=n/2?1:0,o=Math.floor(this.lastEvent.angle/n),r=n*(o+i),s=h()(this.anglesMap).find(function(e){var n=t.anglesMap[e],i=n.angle,o=n.round;return i===(r>=360?r-360:r)&&o===t.lastEvent.round});if(e&&this.$emit("value-change",""),!this.disabled.includes(s)){if(e)return this.value=s,void this.$emit("set",this.value);this.$emit("value-change",s),this.lastEvent.value=s}},onMouseDown:function(){this.moveStart=!0},onMouseMove:function(t){var e=this;this.moveStart&&(this.scheduled||(this.scheduled=!0,setTimeout(function(){e.onPointChange(t,!1),e.scheduled=!1},this.throttleDelay)))},onMouseUp:function(t){this.moveStart=!1,this.onPointChange(t,!0)},onTouchStart:function(){this.moveStart=!0},onTouchMove:function(t){var e=this;this.moveStart&&(this.scheduled||(this.scheduled=!0,setTimeout(function(){var n=t.changedTouches;e.onPointChange(n[0],!1),e.scheduled=!1},this.throttleDelay)))},onTouchEnd:function(t){var e=t.changedTouches;this.onPointChange(e[0],!0),this.moveStart=!1}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.disabled.includes(t.defaultValue);t.value=e?"--":t.defaultValue,t.init()})}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock-picker__canvas"},[n("canvas",{ref:"canvas",style:{width:t.width+"px",height:t.width+"px"},attrs:{width:t.width*t.pxRatio,height:t.width*t.pxRatio},on:{mouseup:function(e){t.onMouseUp(e)},mousedown:function(e){t.onMouseDown(e)},touchstart:function(e){t.onTouchStart(e)},touchend:function(e){t.onTouchEnd(e)},mousemove:function(e){t.onMouseMove(e)},touchmove:function(e){t.onTouchMove(e)}}})])},y=[];v._withStripped=!0;var m={render:v,staticRenderFns:y},b=m,g=!1,x=n(2),_=i,k=x(p,b,!1,_,null,null);k.options.__file="src/components/ClockPickerCanvas.vue";var S=k.exports,C={name:"ClockPickerHours",props:{value:{type:String,default:"00"},disabledFrom:{type:String,default:null},disabledTo:{type:String,default:null},disabledMinsFrom:{type:String,default:null},disabledMinsTo:{type:String,default:null},activeColor:{type:String,default:"black"},activeTextColor:{type:String,default:"white"},color:{type:String,default:"#757575"},disabledColor:{type:String,default:"#ddd"},font:{type:String,default:""}},components:{ClockPickerCanvas:S},data:function(){return{}},computed:{disabledRange:function(){var t=this.disabledFrom,e=this.disabledTo,n=this.disabledMinsFrom,i=this.disabledMinsTo,o="00"===n?0:1,r="59"===i?0:1;return t===e?[]:t&&e?this.makeArray(Number(t)+o,Number(e)-r):t?this.makeArray(Number(t)+o,23):e&&e>0?this.makeArray(0,Number(e)-r):[]}},methods:{makeArray:function(t,e){for(var n=[],i=t;i<=e;i++){var o="00"+(i>23?0:i);n.push(o.slice(o.length-2))}return n},isDisabled:function(t){return this.disabledRange.includes(t)},itemClass:function(t){var e=Number(t);return 12===e?0:e>12?e-12:e},setValue:function(t){this.$emit("set",t)}}},w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock-picker__hours"},[n("clock-picker-canvas",{attrs:{width:280,disabled:t.disabledRange,"default-value":t.value,color:t.color,"disabled-color":t.disabledColor,"active-color":t.activeColor,"active-text-color":t.activeTextColor,font:t.font},on:{"value-change":function(e){t.$emit("set-temp-hours",e)},set:function(e){t.setValue(e)}}})],1)},T=[];w._withStripped=!0;var M={render:w,staticRenderFns:T},E=M,O=!1,F=n(2),P=o,j=F(C,E,!1,P,null,null);j.options.__file="src/components/ClockPickerHours.vue";var R=j.exports,A={name:"ClockPickerMinutes",props:{buttonClass:{type:String},value:{type:String},shouldDisableAll:{type:Boolean,default:!1},shouldDisableFrom:{type:Boolean,default:!1},disabledFrom:{type:String,default:null},disabledTo:{type:String,default:null},disabledHrFrom:{type:String,default:null},disabledHrTo:{type:String,default:null},activeColor:{type:String,default:"black"},activeTextColor:{type:String,default:"white"},color:{type:String,default:"#757575"},disabledColor:{type:String,default:"#ddd"},font:{type:String,default:""}},components:{ClockPickerCanvas:S},data:function(){return{}},computed:{minutes:function(){return this.makeArray(0,59)},disabledRange:function(){var t=this.disabledFrom,e=this.disabledTo,n=this.shouldDisableFrom,i=this.disabledHrFrom,o=this.disabledHrTo,r=i===o;return n&&t?this.makeArray(t,r?e:59):e?this.makeArray(0,e):[]}},methods:{makeArray:function(t,e){for(var n=[],i=t;i<=e;i++){var o="00"+i;n.push(o.slice(o.length-2))}return n},isDisabled:function(t){return this.disabledRange.includes(t)},isSmall:function(t){return Number(t)%5!=0},setValue:function(t){this.$emit("set",t)}}},D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock-picker__minutes"},[n("clock-picker-canvas",{attrs:{disabled:t.disabledRange,type:"mins",width:280,"default-value":t.value,color:t.color,"disabled-color":t.disabledColor,"active-color":t.activeColor,"active-text-color":t.activeTextColor,font:t.font},on:{"value-change":function(e){t.$emit("set-temp-mins",e)},set:function(e){t.setValue(e)}}})],1)},V=[];D._withStripped=!0;var H={render:D,staticRenderFns:V},$=H,N=!1,I=n(2),B=r,L=I(A,$,!1,B,null,null);L.options.__file="src/components/ClockPickerMinutes.vue";var U=L.exports,q={name:"ClockPickerDialog",props:{disabledFrom:{type:String,default:null},disabledTo:{type:String,default:null},initialValue:{type:String,default:"00:00"},cancelText:{type:String,default:null},doneText:{type:String,default:null},activeColor:{type:String,default:"black"},activeTextColor:{type:String,default:"white"},color:{type:String,default:"#757575"},disabledColor:{type:String,default:"#ddd"},closeOnOverlay:{type:Boolean,default:!1},font:{type:String,default:""}},components:{ClockPickerHours:R,ClockPickerMinutes:U},watch:{initialValue:function(){this.updateTime()}},data:function(){return{opened:!1,hours:this.initialValue.slice(0,2),minutes:this.initialValue.slice(3,5),isHoursSet:!1,isMinutesSet:!1,tempHours:"",tempMins:""}},computed:{disabledHoursFrom:function(){var t=this.disabledFrom;return t?t.slice(0,2):null},disabledMinutesFrom:function(){var t=this.disabledFrom;return t?t.slice(3,5):null},disabledHoursTo:function(){var t=this.disabledTo;return t?t.slice(0,2):null},disabledMinutesTo:function(){var t=this.disabledTo,e=this.isHoursSet,n=this.disabledHoursTo,i=this.hours;return!t||e&&i!==n?null:t.slice(3)},shouldDisableAllMinutes:function(){var t=this.isHoursSet,e=this.hours,n=this.disabledHoursTo,i=this.disabledHoursFrom;return t&&e<n&&e>i},shouldDisableFrom:function(){var t=this.isHoursSet,e=this.hours,n=this.disabledHoursFrom;return t&&e===n},isDoneDisabled:function(){var t=/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,e=this.hours+":"+this.minutes;return!t.test(e)}},methods:{open:function(){this.opened=!0},close:function(){this.opened=!1,this.isHoursSet=!1,this.isMinutesSet=!1},cancel:function(){this.$emit("cancel",this.hours+":"+this.minutes),this.hours=this.initialValue.slice(0,2),this.minutes=this.initialValue.slice(3)},setHours:function(t){this.hours=t,this.isHoursSet=!0},setMinutes:function(t){this.minutes=t,this.isMinutesSet=!0},done:function(){this.$emit("done",this.hours+":"+this.minutes)},updateTime:function(){this.hours=this.initialValue.slice(0,2),this.minutes=this.initialValue.slice(3,5)},onSetTempHours:function(t){this.tempHours=t},onSetTempMins:function(t){this.tempMins=t},onOverlayClick:function(){this.closeOnOverlay&&this.cancel()}},mounted:function(){this.updateTime()}},W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock-picker__dialog",class:{"clock-picker__dialog--active":t.opened}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.opened?n("div",{staticClass:"clock-picker__dialog-drop",on:{click:function(e){t.onOverlayClick()}}}):t._e()]),t._v(" "),n("transition",{attrs:{name:"scale",mode:"out-in"}},[t.opened?n("div",{staticClass:"clock-picker__dialog-body"},[n("div",{staticClass:"clock-picker__dialog-header",style:{backgroundColor:t.activeColor,color:t.activeTextColor,fontFamily:t.font}},[n("span",{on:{click:function(e){t.isHoursSet=!1}}},[t._v(t._s(t.tempHours||t.hours))]),t._v(" "),n("b",[t._v(":")]),t._v(" "),n("span",[t._v(t._s(t.tempMins||t.minutes))])]),t._v(" "),n("div",{staticClass:"clock-picker__dialog-content"},[n("transition",{attrs:{name:"scale",mode:"out-in"}},[t.isHoursSet?t._e():n("clock-picker-hours",{attrs:{"disabled-from":t.disabledHoursFrom,"disabled-to":t.disabledHoursTo,"disabled-mins-from":t.disabledMinutesFrom,"disabled-mins-to":t.disabledMinutesTo,value:t.hours,color:t.color,"disabled-color":t.disabledColor,"active-color":t.activeColor,"active-text-color":t.activeTextColor,font:t.font},on:{"set-temp-hours":function(e){t.onSetTempHours(e)},set:function(e){t.setHours(e)}}})],1),t._v(" "),n("transition",{attrs:{name:"scale",mode:"out-in"}},[t.isHoursSet?n("clock-picker-minutes",{attrs:{"should-disable-all":t.shouldDisableAllMinutes,"should-disable-from":t.shouldDisableFrom,"disabled-from":t.disabledMinutesFrom,"disabled-to":t.disabledMinutesTo,"disabled-hr-from":t.disabledHoursFrom,"disabled-hr-to":t.disabledHoursTo,value:t.minutes,color:t.color,"disabled-color":t.disabledColor,"active-color":t.activeColor,"active-text-color":t.activeTextColor,font:t.font},on:{"set-temp-mins":function(e){t.onSetTempMins(e)},set:function(e){t.setMinutes(e)}}}):t._e()],1)],1),t._v(" "),n("div",{staticClass:"clock-picker__dialog-actions"},[n("button",{staticClass:"clock-picker__dialog-action",style:{color:t.activeColor},attrs:{type:"button"},on:{click:t.cancel}},[t._v(t._s(t.cancelText))]),t._v(" "),n("button",{staticClass:"clock-picker__dialog-action",style:{color:t.isDoneDisabled?t.disabledColor:t.activeColor},attrs:{type:"button",disabled:t.isDoneDisabled},on:{click:t.done}},[t._v(t._s(t.doneText))])])]):t._e()])],1)},K=[];W._withStripped=!0;var X={render:W,staticRenderFns:K},z=X,G=!1,Y=n(2),J=s,Q=Y(q,z,!1,J,null,null);Q.options.__file="src/components/ClockPickerDialog.vue";var Z=Q.exports,tt=function(){var t=Math.random().toString(36).substring(2,9);return"clock_picker_input_"+(Date.now().toString(36)+t)},et={container:"clock-picker__input-container",focus:"clock-picker__input--focused",error:"clock-picker__input--error",value:"clock-picker__input--has-value",input:"clock-picker__input",label:"clock-picker__label"},nt={name:"VueClockPicker",props:{inputContainerClass:{type:String,default:et.container},inputClass:{type:String,default:et.input},inputFocusClass:{type:String,default:et.focus},inputErrorClass:{type:String,default:et.error},inputValueClass:{type:String,default:et.value},labelClass:{type:String,default:et.label},placeholder:{type:String,default:""},name:{type:String,default:"time_input"},label:{type:String,default:""},id:{type:String,default:null},required:{type:Boolean,default:!1},value:{type:String,default:""},disabledFrom:{type:String,default:""},disabledTo:{type:String,default:""},doneText:{type:String,default:"done"},cancelText:{type:String,default:"cancel"},activeColor:{type:String,default:"#a48bd1"},activeTextColor:{type:String,default:"white"},color:{type:String,default:"#757575"},disabledColor:{type:String,default:"#ddd"},closeOnEsc:{type:Boolean,default:!1},closeOnOverlay:{type:Boolean,default:!1},font:{type:String,default:"Roboto, arial, san-serif"}},components:{ClockPickerDialog:Z},data:function(){return{isFocused:!1,dialogOpen:!1,showError:!1,isTouched:!1,uuid:this.id||tt(),timeErrors:{}}},computed:{hasError:function(){return this.checkErrors()&&this.isTouched},hasValue:function(){return!!this.value}},methods:{open:function(){var t=this;this.emitEvent("beforeOpen"),this.$refs.dialog.open(),this.$nextTick(function(){t.emitEvent("open")})},close:function(){var t=this;this.emitEvent("beforeClose"),this.$refs.dialog.close(),this.$nextTick(function(){t.emitEvent("close"),t.isTouched=!0})},cancel:function(t){this.emitEvent("cancel",t),this.close()},onKeydown:function(t){"Escape"===t.key&&this.cancel()},handleDone:function(t){this.$emit("input",t),this.validate(),this.$emit("timeset",t),this.close()},emitEvent:function(t,e){this.$emit(t,e)},getValue:function(){return this.value},setValue:function(t){this.handleDone(t)},isValid:function(){return/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(this.value)},isDisabled:function(t){var e=parseInt(this.disabledFrom.slice(0,2),10),n=parseInt(this.disabledTo.slice(0,2),10),i=parseInt(this.disabledFrom.slice(3),10),o=parseInt(this.disabledTo.slice(3),10),r=parseInt(t.slice(0,2),10),s=parseInt(t.slice(3),10);return e===n&&e===r&&0===i&&59===o||e===n&&e===r&&s>=i&&s<=o||e<n&&r===e&&i<=s||e<n&&r===n&&o>=s||e<n&&r>e&&r<n||e>n},checkErrors:function(){var t=this.required&&!this.value,e=this.value&&!this.isValid(),n=this.value&&this.isDisabled(this.value);return this.timeErrors=l()(this.timeErrors,{required:t,notValid:e,disabled:n}),t||e||n},validate:function(){this.showError=this.checkErrors(),this.isTouched=!0}},mounted:function(){this.value&&this.validate(),this.closeOnEsc&&document.body.addEventListener("keydown",this.onKeydown)},destroy:function(){this.closeOnEsc&&document.body.removeEventListener("keydown",this.onKeydown)}},it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock-picker"},[n("div",{class:(i={},i[t.inputContainerClass]=!0,i[t.inputValueClass]=t.hasValue,i[t.inputErrorClass]=t.hasError&&t.isTouched,i[t.inputFocusClass]=t.isFocused,i)},[t.label?n("label",{class:t.labelClass,attrs:{for:t.uuid}},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("input",{ref:"input",class:t.inputClass,attrs:{type:"text",id:t.uuid,name:t.name,placeholder:t.placeholder,readonly:""},domProps:{value:t.value},on:{click:t.open}}),t._v(" "),t._t("error",[t._v(t._s(t.hasError&&t.isTouched?"Error":""))])],2),t._v(" "),n("clock-picker-dialog",{ref:"dialog",attrs:{"initial-value":t.hasError||!t.value?"--:--":t.value,"disabled-from":t.disabledFrom,"disabled-to":t.disabledTo,"done-text":t.doneText,"cancel-text":t.cancelText,color:t.color,"disabled-color":t.disabledColor,"active-color":t.activeColor,"active-text-color":t.activeTextColor,"close-on-overlay":t.closeOnOverlay,font:t.font},on:{cancel:function(e){t.cancel(e)},done:function(e){t.handleDone(e)}}})],1);var i},ot=[];it._withStripped=!0;var rt={render:it,staticRenderFns:ot},st=rt,at=!1,ut=n(2),lt=a,ct=ut(nt,st,!1,lt,null,null);ct.options.__file="src/components/ClockPicker.vue";e.default=ct.exports},function(t,e){},function(t,e,n){n(34),t.exports=n(0).Object.assign},function(t,e,n){var i=n(4);i(i.S+i.F,"Object",{assign:n(38)})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(8)&&!n(9)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(12);t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";var i=n(14),o=n(42),r=n(43),s=n(11),a=n(23),u=Object.assign;t.exports=!u||n(9)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=i})?function(t,e){for(var n=s(t),u=arguments.length,l=1,c=o.f,d=r.f;u>l;)for(var f,h=a(arguments[l++]),p=c?i(h).concat(c(h)):i(h),v=p.length,y=0;v>y;)d.call(h,f=p[y++])&&(n[f]=h[f]);return n}:u},function(t,e,n){var i=n(10),o=n(22),r=n(40)(!1),s=n(17)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,l=[];for(n in a)n!=s&&i(a,n)&&l.push(n);for(;e.length>u;)i(a,n=e[u++])&&(~r(l,n)||l.push(n));return l}},function(t,e,n){var i=n(22),o=n(25),r=n(41);t.exports=function(t){return function(e,n,s){var a,u=i(e),l=o(u.length),c=r(s,l);if(t&&n!=n){for(;l>c;)if((a=u[c++])!=a)return!0}else for(;l>c;c++)if((t||c in u)&&u[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var i=n(16),o=Math.max,r=Math.min;t.exports=function(t,e){return t=i(t),t<0?o(t+e,0):r(t,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";e.__esModule=!0;var i=n(48),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},function(t,e,n){t.exports={default:n(49),__esModule:!0}},function(t,e,n){n(50),n(59),t.exports=n(0).Array.from},function(t,e,n){"use strict";var i=n(51)(!0);n(52)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var i=n(16),o=n(15);t.exports=function(t){return function(e,n){var r,s,a=String(o(e)),u=i(n),l=a.length;return u<0||u>=l?t?"":void 0:(r=a.charCodeAt(u),r<55296||r>56319||u+1===l||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):r:t?a.slice(u,u+2):s-56320+(r-55296<<10)+65536)}}},function(t,e,n){"use strict";var i=n(27),o=n(4),r=n(53),s=n(5),a=n(18),u=n(54),l=n(30),c=n(58),d=n(1)("iterator"),f=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,p,v,y,m){u(n,e,p);var b,g,x,_=function(t){if(!f&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",S="values"==v,C=!1,w=t.prototype,T=w[d]||w["@@iterator"]||v&&w[v],M=T||_(v),E=v?S?_("entries"):M:void 0,O="Array"==e?w.entries||T:T;if(O&&(x=c(O.call(new t)))!==Object.prototype&&x.next&&(l(x,k,!0),i||"function"==typeof x[d]||s(x,d,h)),S&&T&&"values"!==T.name&&(C=!0,M=function(){return T.call(this)}),i&&!m||!f&&!C&&w[d]||s(w,d,M),a[e]=M,a[k]=h,v)if(b={values:S?M:_("values"),keys:y?M:_("keys"),entries:E},m)for(g in b)g in w||r(w,g,b[g]);else o(o.P+o.F*(f||C),e,b);return b}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";var i=n(55),o=n(13),r=n(30),s={};n(5)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:o(1,n)}),r(t,e+" Iterator")}},function(t,e,n){var i=n(7),o=n(56),r=n(29),s=n(17)("IE_PROTO"),a=function(){},u=function(){var t,e=n(21)("iframe"),i=r.length;for(e.style.display="none",n(57).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;i--;)delete u.prototype[r[i]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=i(t),n=new a,a.prototype=null,n[s]=t):n=u(),void 0===e?n:o(n,e)}},function(t,e,n){var i=n(6),o=n(7),r=n(14);t.exports=n(8)?Object.defineProperties:function(t,e){o(t);for(var n,s=r(e),a=s.length,u=0;a>u;)i.f(t,n=s[u++],e[n]);return t}},function(t,e,n){var i=n(3).document;t.exports=i&&i.documentElement},function(t,e,n){var i=n(10),o=n(11),r=n(17)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),i(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict";var i=n(20),o=n(4),r=n(11),s=n(60),a=n(61),u=n(25),l=n(62),c=n(63);o(o.S+o.F*!n(65)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,d,f=r(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,y=void 0!==v,m=0,b=c(f);if(y&&(v=i(v,p>2?arguments[2]:void 0,2)),void 0==b||h==Array&&a(b))for(e=u(f.length),n=new h(e);e>m;m++)l(n,m,y?v(f[m],m):f[m]);else for(d=b.call(f),n=new h;!(o=d.next()).done;m++)l(n,m,y?s(d,v,[o.value,m],!0):o.value);return n.length=m,n}})},function(t,e,n){var i=n(7);t.exports=function(t,e,n,o){try{return o?e(i(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&i(r.call(t)),e}}},function(t,e,n){var i=n(18),o=n(1)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||r[o]===t)}},function(t,e,n){"use strict";var i=n(6),o=n(13);t.exports=function(t,e,n){e in t?i.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var i=n(64),o=n(1)("iterator"),r=n(18);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||r[i(t)]}},function(t,e,n){var i=n(24),o=n(1)("toStringTag"),r="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),o))?n:r?i(e):"Object"==(a=i(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var i=n(1)("iterator"),o=!1;try{var r=[7][i]();r.return=function(){o=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r=[7],s=r[i]();s.next=function(){return{done:n=!0}},r[i]=function(){return s},t(r)}catch(t){}return n}},function(t,e,n){t.exports={default:n(67),__esModule:!0}},function(t,e,n){n(68),t.exports=n(0).Object.keys},function(t,e,n){var i=n(11),o=n(14);n(69)("keys",function(){return function(t){return o(i(t))}})},function(t,e,n){var i=n(4),o=n(0),r=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],s={};s[t]=e(n),i(i.S+i.F*r(function(){n(1)}),"Object",s)}},function(t,e){}])});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pencilpix_vue2_clock_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pencilpix/vue2-clock-picker */ "./node_modules/@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.es.js");
/* harmony import */ var _pencilpix_vue2_clock_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pencilpix_vue2_clock_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Office Shift"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      selectedIds: [],
      totalRows: "",
      search: "",
      limit: "10",
      office_shifts: [],
      companies: [],
      editmode: false,
      office_shift: {
        name: "",
        company_id: "",
        monday_in: "",
        monday_out: "",
        tuesday_in: "",
        tuesday_out: "",
        wednesday_in: "",
        wednesday_out: "",
        thursday_in: "",
        thursday_out: "",
        friday_in: "",
        friday_out: "",
        saturday_in: "",
        saturday_out: "",
        sunday_in: "",
        sunday_out: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Company"),
        field: "company_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  },
  components: {
    VueClockPicker: (_pencilpix_vue2_clock_picker__WEBPACK_IMPORTED_MODULE_0___default())
  },
  methods: {
    //---- update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Office_Shift(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Office_Shift(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this = this;
      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this.selectedIds.push(row.id);
      });
    },
    //---- Event Sort Change
    onSortChange: function onSortChange(params) {
      var field = "";
      if (params[0].field == "company_name") {
        field = "company_id";
      } else {
        field = params[0].field;
      }
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Office_Shift(this.serverParams.page);
    },
    //---- Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Office_Shift(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
        validated = _ref4.validated,
        _ref4$valid = _ref4.valid,
        valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Office_Shift
    Submit_Office_Shift: function Submit_Office_Shift() {
      var _this2 = this;
      this.$refs.Create_Office_Shift.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Office_Shift();
          } else {
            _this2.Update_Office_Shift();
          }
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------------------------------ Modal (create Office_Shift) -------------------------------\\
    New_Office_Shift: function New_Office_Shift() {
      this.reset_Form();
      this.Get_Data_Create();
      this.editmode = false;
      this.$bvModal.show("New_Office_Shift");
    },
    //------------------------------ Modal (Update Office_Shift) -------------------------------\\
    Edit_Office_Shift: function Edit_Office_Shift(office_shift) {
      this.Get_Office_Shift(this.serverParams.page);
      this.reset_Form();
      this.editmode = true;
      this.Get_Data_Edit(office_shift.id);
      this.office_shift = office_shift;
      this.$bvModal.show("New_Office_Shift");
    },
    //---------------------- Get_Data_Create  ------------------------------\\
    Get_Data_Create: function Get_Data_Create() {
      var _this3 = this;
      axios.get("/office_shift/create").then(function (response) {
        _this3.companies = response.data.companies;
      })["catch"](function (error) {});
    },
    //---------------------- Get_Data_Edit  ------------------------------\\
    Get_Data_Edit: function Get_Data_Edit(id) {
      var _this4 = this;
      axios.get("/office_shift/" + id + "/edit").then(function (response) {
        _this4.companies = response.data.companies;
      })["catch"](function (error) {});
    },
    Selected_Company: function Selected_Company(value) {
      if (value === null) {
        this.office_shift.company_id = "";
      }
    },
    //--------------------------Get ALL office_shift ---------------------------\\
    Get_Office_Shift: function Get_Office_Shift(page) {
      var _this5 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.get("office_shift?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this5.office_shifts = response.data.office_shifts;
        _this5.totalRows = response.data.totalRows;

        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this5.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        setTimeout(function () {
          _this5.isLoading = false;
        }, 500);
      });
    },
    //------------------------------- Create office_shift ------------------------\\
    Create_Office_Shift: function Create_Office_Shift() {
      var _this6 = this;
      this.SubmitProcessing = true;
      axios.post("office_shift", {
        name: this.office_shift.name,
        company_id: this.office_shift.company_id,
        monday_in: this.office_shift.monday_in,
        monday_out: this.office_shift.monday_out,
        tuesday_in: this.office_shift.tuesday_in,
        tuesday_out: this.office_shift.tuesday_out,
        wednesday_in: this.office_shift.wednesday_in,
        wednesday_out: this.office_shift.wednesday_out,
        thursday_in: this.office_shift.thursday_in,
        thursday_out: this.office_shift.thursday_out,
        friday_in: this.office_shift.friday_in,
        friday_out: this.office_shift.friday_out,
        saturday_in: this.office_shift.saturday_in,
        saturday_out: this.office_shift.saturday_out,
        sunday_in: this.office_shift.sunday_in,
        sunday_out: this.office_shift.sunday_out
      }).then(function (response) {
        _this6.SubmitProcessing = false;
        Fire.$emit("Event_Office_Shift");
        _this6.makeToast("success", _this6.$t("Created_in_successfully"), _this6.$t("Success"));
      })["catch"](function (error) {
        _this6.SubmitProcessing = false;
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    //------------------------------- Update office_shift ------------------------\\
    Update_Office_Shift: function Update_Office_Shift() {
      var _this7 = this;
      this.SubmitProcessing = true;
      axios.put("office_shift/" + this.office_shift.id, {
        name: this.office_shift.name,
        company_id: this.office_shift.company_id,
        monday_in: this.office_shift.monday_in,
        monday_out: this.office_shift.monday_out,
        tuesday_in: this.office_shift.tuesday_in,
        tuesday_out: this.office_shift.tuesday_out,
        wednesday_in: this.office_shift.wednesday_in,
        wednesday_out: this.office_shift.wednesday_out,
        thursday_in: this.office_shift.thursday_in,
        thursday_out: this.office_shift.thursday_out,
        friday_in: this.office_shift.friday_in,
        friday_out: this.office_shift.friday_out,
        saturday_in: this.office_shift.saturday_in,
        saturday_out: this.office_shift.saturday_out,
        sunday_in: this.office_shift.sunday_in,
        sunday_out: this.office_shift.sunday_out
      }).then(function (response) {
        _this7.SubmitProcessing = false;
        Fire.$emit("Event_Office_Shift");
        _this7.makeToast("success", _this7.$t("Updated_in_successfully"), _this7.$t("Success"));
      })["catch"](function (error) {
        _this7.SubmitProcessing = false;
        _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));
      });
    },
    //------------------------------- reset Form ------------------------\\
    reset_Form: function reset_Form() {
      this.office_shift = {
        id: "",
        name: "",
        company_id: "",
        monday_in: "",
        monday_out: "",
        tuesday_in: "",
        tuesday_out: "",
        wednesday_in: "",
        wednesday_out: "",
        thursday_in: "",
        thursday_out: "",
        friday_in: "",
        friday_out: "",
        saturday_in: "",
        saturday_out: "",
        sunday_in: "",
        sunday_out: ""
      };
    },
    //------------------------------- Delete office_shift ------------------------\\
    Remove_Office_Shift: function Remove_Office_Shift(id) {
      var _this8 = this;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("office_shift/" + id).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Delete_Office_Shift");
          })["catch"](function () {
            _this8.$swal(_this8.$t("Delete.Failed"), _this8.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete company by selection
    delete_by_selected: function delete_by_selected() {
      var _this9 = this;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
          axios.post("office_shift/delete/by_selection", {
            selectedIds: _this9.selectedIds
          }).then(function () {
            _this9.$swal(_this9.$t("Delete.Deleted"), _this9.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Delete_Office_Shift");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
            }, 500);
            _this9.$swal(_this9.$t("Delete.Failed"), _this9.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //----------------------------- Created function-------------------\\

  created: function created() {
    var _this10 = this;
    this.Get_Office_Shift(1);
    Fire.$on("Event_Office_Shift", function () {
      setTimeout(function () {
        _this10.Get_Office_Shift(_this10.serverParams.page);
        _this10.$bvModal.hide("New_Office_Shift");
      }, 500);
    });
    Fire.$on("Delete_Office_Shift", function () {
      setTimeout(function () {
        _this10.Get_Office_Shift(_this10.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./resources/src/views/app/pages/hrm/office_shift.vue":
/*!************************************************************!*\
  !*** ./resources/src/views/app/pages/hrm/office_shift.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _office_shift_vue_vue_type_template_id_bae022f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office_shift.vue?vue&type=template&id=bae022f0 */ "./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=template&id=bae022f0");
/* harmony import */ var _office_shift_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./office_shift.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _office_shift_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _office_shift_vue_vue_type_template_id_bae022f0__WEBPACK_IMPORTED_MODULE_0__.render,
  _office_shift_vue_vue_type_template_id_bae022f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/hrm/office_shift.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_office_shift_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./office_shift.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_office_shift_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=template&id=bae022f0":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=template&id=bae022f0 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_office_shift_vue_vue_type_template_id_bae022f0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_office_shift_vue_vue_type_template_id_bae022f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_office_shift_vue_vue_type_template_id_bae022f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./office_shift.vue?vue&type=template&id=bae022f0 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=template&id=bae022f0");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=template&id=bae022f0":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/office_shift.vue?vue&type=template&id=bae022f0 ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-content"},[_c('breadcumb',{attrs:{"page":_vm.$t('Office_Shift'),"folder":_vm.$t('hrm')}}),_vm._v(" "),(_vm.isLoading)?_c('div',{staticClass:"loading_page spinner spinner-primary mr-3"}):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('b-card',{staticClass:"wrapper"},[_c('vue-good-table',{attrs:{"mode":"remote","columns":_vm.columns,"totalRows":_vm.totalRows,"rows":_vm.office_shifts,"search-options":{
      enabled: true,
      placeholder: _vm.$t('Search_this_table'),  
    },"select-options":{ 
        enabled: true ,
        clearSelectionText: '',
      },"pagination-options":{
      enabled: true,
      mode: 'records',
      nextLabel: 'next',
      prevLabel: 'prev',
    },"styleClass":"table-hover tableOne vgt-table"},on:{"on-page-change":_vm.onPageChange,"on-per-page-change":_vm.onPerPageChange,"on-sort-change":_vm.onSortChange,"on-search":_vm.onSearch,"on-selected-rows-change":_vm.selectionChanged},scopedSlots:_vm._u([{key:"table-row",fn:function(props){return [(props.column.field == 'actions')?_c('span',[_c('a',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{"hover":true}}],staticClass:"cursor-pointer",attrs:{"title":"Edit"},on:{"click":function($event){return _vm.Edit_Office_Shift(props.row)}}},[_c('i',{staticClass:"i-Edit text-25 text-success"})]),_vm._v(" "),_c('a',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{"hover":true}}],staticClass:"cursor-pointer",attrs:{"title":"Delete"},on:{"click":function($event){return _vm.Remove_Office_Shift(props.row.id)}}},[_c('i',{staticClass:"i-Close-Window text-25 text-danger"})])]):_vm._e()]}}],null,false,2966703034)},[_c('div',{attrs:{"slot":"selected-row-actions"},slot:"selected-row-actions"},[_c('button',{staticClass:"btn btn-danger btn-sm",on:{"click":function($event){return _vm.delete_by_selected()}}},[_vm._v(_vm._s(_vm.$t('Del')))])]),_vm._v(" "),_c('div',{staticClass:"mt-2 mb-3",attrs:{"slot":"table-actions"},slot:"table-actions"},[_c('b-button',{staticClass:"btn-rounded",attrs:{"variant":"btn btn-primary btn-icon m-1"},on:{"click":function($event){return _vm.New_Office_Shift()}}},[_c('i',{staticClass:"i-Add"}),_vm._v("\n          "+_vm._s(_vm.$t('Add'))+"\n        ")])],1)])],1):_vm._e(),_vm._v(" "),_c('validation-observer',{ref:"Create_Office_Shift"},[_c('b-modal',{attrs:{"hide-footer":"","size":"lg","id":"New_Office_Shift","title":_vm.editmode?_vm.$t('Edit'):_vm.$t('Add')}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Office_Shift.apply(null, arguments)}}},[_c('b-row',[_c('b-col',{attrs:{"md":"6"}},[_c('validation-provider',{attrs:{"name":"Name","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Name') + ' ' + '*'}},[_c('b-form-input',{attrs:{"placeholder":_vm.$t('Enter_Shift_name'),"state":_vm.getValidationState(validationContext),"aria-describedby":"Name-feedback","label":"Name"},model:{value:(_vm.office_shift.name),callback:function ($$v) {_vm.$set(_vm.office_shift, "name", $$v)},expression:"office_shift.name"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Name-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6"}},[_c('validation-provider',{attrs:{"name":"Company","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
    var valid = ref.valid;
    var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('Company') + ' ' + '*'}},[_c('v-select',{staticClass:"required",class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"required":"","placeholder":_vm.$t('Choose_Company'),"reduce":function (label) { return label.value; },"options":_vm.companies.map(function (companies) { return ({label: companies.name, value: companies.id}); })},on:{"input":_vm.Selected_Company},model:{value:(_vm.office_shift.company_id),callback:function ($$v) {_vm.$set(_vm.office_shift, "company_id", $$v)},expression:"office_shift.company_id"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Monday_In')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('Monday_In'),"name":"monday_in","id":"monday_in"},model:{value:(_vm.office_shift.monday_in),callback:function ($$v) {_vm.$set(_vm.office_shift, "monday_in", $$v)},expression:"office_shift.monday_in"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Monday_Out')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('Monday_Out')},model:{value:(_vm.office_shift.monday_out),callback:function ($$v) {_vm.$set(_vm.office_shift, "monday_out", $$v)},expression:"office_shift.monday_out"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Tuesday_In')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('Tuesday_In')},model:{value:(_vm.office_shift.tuesday_in),callback:function ($$v) {_vm.$set(_vm.office_shift, "tuesday_in", $$v)},expression:"office_shift.tuesday_in"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('tuesday_out')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('tuesday_out')},model:{value:(_vm.office_shift.tuesday_out),callback:function ($$v) {_vm.$set(_vm.office_shift, "tuesday_out", $$v)},expression:"office_shift.tuesday_out"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('wednesday_in')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('wednesday_in')},model:{value:(_vm.office_shift.wednesday_in),callback:function ($$v) {_vm.$set(_vm.office_shift, "wednesday_in", $$v)},expression:"office_shift.wednesday_in"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('wednesday_out')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('wednesday_out')},model:{value:(_vm.office_shift.wednesday_out),callback:function ($$v) {_vm.$set(_vm.office_shift, "wednesday_out", $$v)},expression:"office_shift.wednesday_out"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('thursday_in')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('thursday_in')},model:{value:(_vm.office_shift.thursday_in),callback:function ($$v) {_vm.$set(_vm.office_shift, "thursday_in", $$v)},expression:"office_shift.thursday_in"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('thursday_out')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('thursday_out')},model:{value:(_vm.office_shift.thursday_out),callback:function ($$v) {_vm.$set(_vm.office_shift, "thursday_out", $$v)},expression:"office_shift.thursday_out"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('friday_in')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('friday_in')},model:{value:(_vm.office_shift.friday_in),callback:function ($$v) {_vm.$set(_vm.office_shift, "friday_in", $$v)},expression:"office_shift.friday_in"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('friday_out')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('friday_out')},model:{value:(_vm.office_shift.friday_out),callback:function ($$v) {_vm.$set(_vm.office_shift, "friday_out", $$v)},expression:"office_shift.friday_out"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('saturday_in')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('saturday_in')},model:{value:(_vm.office_shift.saturday_in),callback:function ($$v) {_vm.$set(_vm.office_shift, "saturday_in", $$v)},expression:"office_shift.saturday_in"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('saturday_out')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('saturday_out')},model:{value:(_vm.office_shift.saturday_out),callback:function ($$v) {_vm.$set(_vm.office_shift, "saturday_out", $$v)},expression:"office_shift.saturday_out"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('sunday_in')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('sunday_in')},model:{value:(_vm.office_shift.sunday_in),callback:function ($$v) {_vm.$set(_vm.office_shift, "sunday_in", $$v)},expression:"office_shift.sunday_in"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}},[_c('b-form-group',{attrs:{"label":_vm.$t('sunday_out')}},[_c('vue-clock-picker',{attrs:{"placeholder":_vm.$t('sunday_out')},model:{value:(_vm.office_shift.sunday_out),callback:function ($$v) {_vm.$set(_vm.office_shift, "sunday_out", $$v)},expression:"office_shift.sunday_out"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"mt-3",attrs:{"md":"12"}},[_c('b-button',{attrs:{"variant":"primary","type":"submit","disabled":_vm.SubmitProcessing}},[_c('i',{staticClass:"i-Yes me-2 font-weight-bold"}),_vm._v(" "+_vm._s(_vm.$t('submit')))]),_vm._v(" "),(_vm.SubmitProcessing)?_vm._m(0):_vm._e()],1)],1)],1)],1)],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typo__p"},[_c('div',{staticClass:"spinner sm spinner-primary mt-3"})])}]
render._withStripped = true


/***/ })

}]);