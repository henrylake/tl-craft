!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s=e();for(var i in s)("object"==typeof exports?exports:t)[i]=s[i]}}(window,function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=5)}([function(t,e){t.exports.get=function(t){return{log_scene(){console.log("Scene within API",t)},turn_on(e){switch(e){case"streetlamps":t.setState("streetlamps",!0),t.streetlamps.all("turnOn");break;case"windmills":t.setState("windmills",!0),t.windmills.all("turnOn")}},turn_off(e){switch(e){case"streetlamps":t.setState("streetlamps",!1),t.streetlamps.all("turnOff");break;case"windmills":t.setState("windmills",!1),t.windmills.all("turnOff")}},generate_energy(e){let s=0;switch(e){case"windmills":t.windmills.windmills.forEach(e=>{s+=e.createEnergy(t.wind)})}return s},is_battery_empty:()=>t.battery.isEmpty,is_battery_full:()=>t.battery.isFull,charge_battery(e){t.battery.charge(e),t.batteryLabel.setValue(t.battery.energyValue)},use_battery(e){t.battery.use(e),t.batteryLabel.setValue(t.battery.energyValue)},get_energy:()=>t.battery.energy,get_wind:()=>t.wind,get_light:()=>t.light,get_time:()=>t.worldTime,get_dark:()=>t.worldTime<=t.dawn||t.worldTime>=t.dusk}}},function(t,e){t.exports.get=function(t){return{streetlamps:e=>"on"==e?t.onStates.streetlamps:!t.onStates.streetlamps,getRecordState:()=>t.recordState,stateWhile(e,s,i,r,n,a=!1){"on"==s?s=!0:"off"==s&&(s=!1);for(let o=0;o<t.recordState.length;o++){let l=t.recordState[o],h=l[i],c=l[e],u=!1;switch(r){case"less":u=h<n;break;case"less equal":u=h<=n;break;case"greater":u=h>n;break;case"greater equal":u=h>=n;break;case"between equal":u=h<=n&&h>=a;break;case"between":u=h<n&&h>a}if(u&&c!=s)return!1}return!0},getRecordsAtWorldState(e,s){let i=[];for(let r=0;r<t.recordState.length;r++){let n=t.recordState[r];n[e]==s&&i.push(n)}return i}}}},function(t,e,s){(function(t,s){var i=200,r="__lodash_hash_undefined__",n=9007199254740991,a="[object Arguments]",o="[object Boolean]",l="[object Date]",h="[object Function]",c="[object GeneratorFunction]",u="[object Map]",p="[object Number]",d="[object Object]",y="[object RegExp]",g="[object Set]",f="[object String]",m="[object Symbol]",_="[object ArrayBuffer]",b="[object DataView]",w="[object Float32Array]",v="[object Float64Array]",S="[object Int8Array]",k="[object Int16Array]",x="[object Int32Array]",C="[object Uint8Array]",$="[object Uint8ClampedArray]",j="[object Uint16Array]",O="[object Uint32Array]",T=/\w*$/,L=/^\[object .+?Constructor\]$/,A=/^(?:0|[1-9]\d*)$/,P={};P[a]=P["[object Array]"]=P[_]=P[b]=P[o]=P[l]=P[w]=P[v]=P[S]=P[k]=P[x]=P[u]=P[p]=P[d]=P[y]=P[g]=P[f]=P[m]=P[C]=P[$]=P[j]=P[O]=!0,P["[object Error]"]=P[h]=P["[object WeakMap]"]=!1;var E="object"==typeof t&&t&&t.Object===Object&&t,V="object"==typeof self&&self&&self.Object===Object&&self,D=E||V||Function("return this")(),F="object"==typeof e&&e&&!e.nodeType&&e,M=F&&"object"==typeof s&&s&&!s.nodeType&&s,W=M&&M.exports===F;function R(t,e){return t.set(e[0],e[1]),t}function I(t,e){return t.add(e),t}function G(t,e,s,i){var r=-1,n=t?t.length:0;for(i&&n&&(s=t[++r]);++r<n;)s=e(s,t[r],r,t);return s}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function N(t){var e=-1,s=Array(t.size);return t.forEach(function(t,i){s[++e]=[i,t]}),s}function B(t,e){return function(s){return t(e(s))}}function U(t){var e=-1,s=Array(t.size);return t.forEach(function(t){s[++e]=t}),s}var X=Array.prototype,H=Function.prototype,Y=Object.prototype,z=D["__core-js_shared__"],J=function(){var t=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Z=H.toString,q=Y.hasOwnProperty,Q=Y.toString,tt=RegExp("^"+Z.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=W?D.Buffer:void 0,st=D.Symbol,it=D.Uint8Array,rt=B(Object.getPrototypeOf,Object),nt=Object.create,at=Y.propertyIsEnumerable,ot=X.splice,lt=Object.getOwnPropertySymbols,ht=et?et.isBuffer:void 0,ct=B(Object.keys,Object),ut=Ft(D,"DataView"),pt=Ft(D,"Map"),dt=Ft(D,"Promise"),yt=Ft(D,"Set"),gt=Ft(D,"WeakMap"),ft=Ft(Object,"create"),mt=Gt(ut),_t=Gt(pt),bt=Gt(dt),wt=Gt(yt),vt=Gt(gt),St=st?st.prototype:void 0,kt=St?St.valueOf:void 0;function xt(t){var e=-1,s=t?t.length:0;for(this.clear();++e<s;){var i=t[e];this.set(i[0],i[1])}}function Ct(t){var e=-1,s=t?t.length:0;for(this.clear();++e<s;){var i=t[e];this.set(i[0],i[1])}}function $t(t){var e=-1,s=t?t.length:0;for(this.clear();++e<s;){var i=t[e];this.set(i[0],i[1])}}function jt(t){this.__data__=new Ct(t)}function Ot(t,e){var s=Nt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&q.call(t,"callee")&&(!at.call(t,"callee")||Q.call(t)==a)}(t)?function(t,e){for(var s=-1,i=Array(t);++s<t;)i[s]=e(s);return i}(t.length,String):[],i=s.length,r=!!i;for(var n in t)!e&&!q.call(t,n)||r&&("length"==n||Rt(n,i))||s.push(n);return s}function Tt(t,e,s){var i=t[e];q.call(t,e)&&Kt(i,s)&&(void 0!==s||e in t)||(t[e]=s)}function Lt(t,e){for(var s=t.length;s--;)if(Kt(t[s][0],e))return s;return-1}function At(t,e,s,i,r,n,L){var A;if(i&&(A=n?i(t,r,n,L):i(t)),void 0!==A)return A;if(!Ht(t))return t;var E=Nt(t);if(E){if(A=function(t){var e=t.length,s=t.constructor(e);e&&"string"==typeof t[0]&&q.call(t,"index")&&(s.index=t.index,s.input=t.input);return s}(t),!e)return function(t,e){var s=-1,i=t.length;e||(e=Array(i));for(;++s<i;)e[s]=t[s];return e}(t,A)}else{var V=Wt(t),D=V==h||V==c;if(Ut(t))return function(t,e){if(e)return t.slice();var s=new t.constructor(t.length);return t.copy(s),s}(t,e);if(V==d||V==a||D&&!n){if(K(t))return n?t:{};if(A=function(t){return"function"!=typeof t.constructor||It(t)?{}:function(t){return Ht(t)?nt(t):{}}(rt(t))}(D?{}:t),!e)return function(t,e){return Vt(t,Mt(t),e)}(t,function(t,e){return t&&Vt(e,Yt(e),t)}(A,t))}else{if(!P[V])return n?t:{};A=function(t,e,s,i){var r=t.constructor;switch(e){case _:return Et(t);case o:case l:return new r(+t);case b:return function(t,e){var s=e?Et(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}(t,i);case w:case v:case S:case k:case x:case C:case $:case j:case O:return function(t,e){var s=e?Et(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}(t,i);case u:return function(t,e,s){return G(e?s(N(t),!0):N(t),R,new t.constructor)}(t,i,s);case p:case f:return new r(t);case y:return function(t){var e=new t.constructor(t.source,T.exec(t));return e.lastIndex=t.lastIndex,e}(t);case g:return function(t,e,s){return G(e?s(U(t),!0):U(t),I,new t.constructor)}(t,i,s);case m:return function(t){return kt?Object(kt.call(t)):{}}(t)}}(t,V,At,e)}}L||(L=new jt);var F=L.get(t);if(F)return F;if(L.set(t,A),!E)var M=s?function(t){return function(t,e,s){var i=e(t);return Nt(t)?i:function(t,e){for(var s=-1,i=e.length,r=t.length;++s<i;)t[r+s]=e[s];return t}(i,s(t))}(t,Yt,Mt)}(t):Yt(t);return function(t,e){for(var s=-1,i=t?t.length:0;++s<i&&!1!==e(t[s],s,t););}(M||t,function(r,n){M&&(r=t[n=r]),Tt(A,n,At(r,e,s,i,n,t,L))}),A}function Pt(t){return!(!Ht(t)||function(t){return!!J&&J in t}(t))&&(Xt(t)||K(t)?tt:L).test(Gt(t))}function Et(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Vt(t,e,s,i){s||(s={});for(var r=-1,n=e.length;++r<n;){var a=e[r],o=i?i(s[a],t[a],a,s,t):void 0;Tt(s,a,void 0===o?t[a]:o)}return s}function Dt(t,e){var s=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?s["string"==typeof e?"string":"hash"]:s.map}function Ft(t,e){var s=function(t,e){return null==t?void 0:t[e]}(t,e);return Pt(s)?s:void 0}xt.prototype.clear=function(){this.__data__=ft?ft(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(ft){var s=e[t];return s===r?void 0:s}return q.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return ft?void 0!==e[t]:q.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=ft&&void 0===e?r:e,this},Ct.prototype.clear=function(){this.__data__=[]},Ct.prototype.delete=function(t){var e=this.__data__,s=Lt(e,t);return!(s<0||(s==e.length-1?e.pop():ot.call(e,s,1),0))},Ct.prototype.get=function(t){var e=this.__data__,s=Lt(e,t);return s<0?void 0:e[s][1]},Ct.prototype.has=function(t){return Lt(this.__data__,t)>-1},Ct.prototype.set=function(t,e){var s=this.__data__,i=Lt(s,t);return i<0?s.push([t,e]):s[i][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new xt,map:new(pt||Ct),string:new xt}},$t.prototype.delete=function(t){return Dt(this,t).delete(t)},$t.prototype.get=function(t){return Dt(this,t).get(t)},$t.prototype.has=function(t){return Dt(this,t).has(t)},$t.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},jt.prototype.clear=function(){this.__data__=new Ct},jt.prototype.delete=function(t){return this.__data__.delete(t)},jt.prototype.get=function(t){return this.__data__.get(t)},jt.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.set=function(t,e){var s=this.__data__;if(s instanceof Ct){var r=s.__data__;if(!pt||r.length<i-1)return r.push([t,e]),this;s=this.__data__=new $t(r)}return s.set(t,e),this};var Mt=lt?B(lt,Object):function(){return[]},Wt=function(t){return Q.call(t)};function Rt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||A.test(t))&&t>-1&&t%1==0&&t<e}function It(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Y)}function Gt(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Kt(t,e){return t===e||t!=t&&e!=e}(ut&&Wt(new ut(new ArrayBuffer(1)))!=b||pt&&Wt(new pt)!=u||dt&&"[object Promise]"!=Wt(dt.resolve())||yt&&Wt(new yt)!=g||gt&&"[object WeakMap]"!=Wt(new gt))&&(Wt=function(t){var e=Q.call(t),s=e==d?t.constructor:void 0,i=s?Gt(s):void 0;if(i)switch(i){case mt:return b;case _t:return u;case bt:return"[object Promise]";case wt:return g;case vt:return"[object WeakMap]"}return e});var Nt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Xt(t)}var Ut=ht||function(){return!1};function Xt(t){var e=Ht(t)?Q.call(t):"";return e==h||e==c}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Yt(t){return Bt(t)?Ot(t):function(t){if(!It(t))return ct(t);var e=[];for(var s in Object(t))q.call(t,s)&&"constructor"!=s&&e.push(s);return e}(t)}s.exports=function(t){return At(t,!0,!0)}}).call(this,s(3),s(4)(t))},function(t,e){var s;s=function(){return this}();try{s=s||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(s=window)}t.exports=s},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,s){"use strict";s.r(e);const i="smart_cities_";class r{constructor(t){this.scene=t;const e=this.scene.assetRoot;this.assets={birds:{type:"spritesheet",path:`${e}${i}birds.png`,frameHeight:15,frameWidth:13},blue_player:{type:"spritesheet",path:`${e}${i}blue_player.png`,frameHeight:45,frameWidth:20},pink_player:{type:"spritesheet",path:`${e}${i}pink_player.png`,frameHeight:45,frameWidth:20},orange_cyclist:{type:"spritesheet",path:`${e}${i}orange_cyclist.png`,frameHeight:55,frameWidth:50},green_cyclist:{type:"spritesheet",path:`${e}${i}green_cyclist.png`,frameHeight:55,frameWidth:50},cloud_large:{type:"image",path:`${e}${i}cloud_large.png`},cloud_small:{type:"image",path:`${e}${i}cloud_small.png`},door_blue:{type:"image",path:`${e}${i}door_blue.png`},door_pink:{type:"image",path:`${e}${i}door_pink.png`},fridge_on:{type:"image",path:`${e}${i}fridge_on.png`},hills:{type:"image",path:`${e}${i}hills.png`},house:{type:"image",path:`${e}${i}house.png`},pavement:{type:"image",path:`${e}${i}pavement.png`},porch_light_on:{type:"image",path:`${e}${i}porch_light_on.png`},porch_light_off:{type:"image",path:`${e}${i}porch_light_off.png`},road:{type:"image",path:`${e}${i}road.png`},solar_panel:{type:"image",path:`${e}${i}solar_panel.png`},solar_panel_on:{type:"image",path:`${e}${i}solar_panel_on.png`},streetlamp_on:{type:"image",path:`${e}${i}streetlamp_on.png`},streetlamp_off:{type:"image",path:`${e}${i}streetlamp_off.png`},streetlamp_modern_on:{type:"image",path:`${e}${i}streetlamp_modern_on.png`},streetlamp_modern_off:{type:"image",path:`${e}${i}streetlamp_modern_off.png`},windmill_tower:{type:"image",path:`${e}${i}windmill_tower.png`},windmill_turbine:{type:"image",path:`${e}${i}windmill_turbine.png`},window:{type:"image",path:`${e}${i}window.png`},window_lights:{type:"image",path:`${e}${i}window_lights.png`},window_small:{type:"image",path:`${e}${i}window_small.png`},window_small_lights:{type:"image",path:`${e}${i}window_small_lights.png`},failure_sound:{type:"sound",ogg:`${e}tl_failure_kenny_musicJingles_jingles_PIZZI11.ogg`,mp3:`${e}tl_failure_kenny_musicJingles_jingles_PIZZI11.mp3`},success_sound:{type:"sound",ogg:`${e}tl_success_kenny_musicJingles_jingles_STEEL10.ogg`,mp3:`${e}tl_success_kenny_musicJingles_jingles_STEEL10.mp3`}},this.assetPacks={allAssets:["birds","blue_player","pink_player","orange_cyclist","green_cyclist","cloud_large","cloud_small","door_blue","door_pink","fridge_on","hills","house","pavement","porch_light_on","porch_light_off","road","solar_panel","solar_panel_on","streetlamp_on","streetlamp_off","streetlamp_modern_on","streetlamp_modern_off","windmill_tower","windmill_turbine","window","window_lights","window_small","window_small_lights","success_sound","failure_sound"]}}loadPacks(t){t.forEach(t=>{this.loadPack(t)})}loadPack(t){let e=this.assetPacks[t];this.loadAssets(e)}loadAssets(t){t.forEach(t=>{let e=this.assets[t];this.loadAsset(t,e)})}loadAsset(t,e){switch(e.type){case"image":this.scene.load.image(t,e.path);break;case"spritesheet":this.scene.load.spritesheet(t,e.path,{frameWidth:e.frameWidth,frameHeight:e.frameHeight});break;case"sound":this.scene.load.audio(t,[e.ogg,e.mp3]);break;default:throw`Asset ${t} needs config.type set in configuration.`}}}let n=window.Phaser;const a=(t,e,s)=>"-1"!=s?`${t} ${e}${s}`:`${t} ${e}`;class o extends n.GameObjects.Text{constructor(t,e,s,i,r,n,o){super(t,e,s,a(i,r,o),n),this.state=i,this.value=r,this.ending=o}setValue(t){this.value=t,this.updateValueText()}increment(t){this.setValue(this.value+t)}updateValueText(){this.setText(a(this.state,this.value,this.ending))}removeText(){this.setVisible(!1)}}var l=s(0),h=s.n(l),c=s(1),u=s.n(c);class p{constructor(t,e,s,i,r,n,a){this.scene=t,this.key=e,this.x=s,this.y=i,this.offset=r,this.onState=n,this.conversionRate=a,this.energy=void 0}get isOn(){return this.onState}turnOn(){this.onState=!0}turnOff(){this.onState=!1}createEnergy(t){return this.energy=t*this.conversionRate,this.energy}}class d extends p{constructor(t,e,s,i,r,n){super(t,e,s,i,r,n,.003),this.turbine=this.createTurbine(),this.sprite=this.setupSprite()}createTurbine(){let t=this.scene.add.image(this.x,this.y,"windmill_turbine").setOrigin(this.offset.x,this.offset.y);return t.rotation+=50*Math.random(),t}rotateTurbines(t){let e=.003*t;this.onState&&(this.turbine.rotation+=e)}setupSprite(){let t=this.scene.add.group(),e=this.scene.add.image(this.x,this.y,"windmill_tower").setOrigin(this.offset.x,this.offset.y);return t.add(e),t.add(this.turbine),t}}class y extends p{constructor(t,e,s,i,r,n){super(t,e,s,i,r,n,.004),this.onKey="solar_panel_on",this.offKey="solar_panel",this.sprite=this.setupSprite()}setupSprite(){let t=this.onState?this.onKey:this.offKey;return this.scene.add.image(this.x,this.y,t).setOrigin(this.offset.x,this.offset.y)}turnOn(){this.onState=!0,this.update()}turnOff(){this.onState=!1,this.update()}update(){this.onState?this.sprite.setTexture(this.onKey):this.sprite.setTexture(this.offKey)}}class g{constructor(t,e,s,i,r,n,a,o,l){this.scene=t,this.key=e,this.x=s,this.y=i,this.offset=r,this.onState=o,this.energyConsumption=l,this.energy=void 0,this.onKey=n,this.offKey=a,this.sprite=this.setupSprite()}setupSprite(){let t=this.onState?this.onKey:this.offKey;return this.scene.add.image(this.x,this.y,t).setOrigin(this.offset.x,this.offset.y)}update(){this.onState?this.sprite.setTexture(this.onKey):this.sprite.setTexture(this.offKey)}get isOn(){return this.onState}get consumptionRate(){return this.energyConsumption}turnOn(){this.onState=!0,this.update()}turnOff(){this.onState=!1,this.update()}getProximity(t,e){let s=t.x,i=e.x;return Math.abs(s-i)}getNearestDistance(t){let e=400;return t.forEach(t=>{if("cyclist"!=t.type){let s=this.getProximity(this.sprite,t.sprite);s<e&&(e=s)}}),e}getNearestPlayer(t){let e=400,s=void 0;return t.forEach(t=>{if("cyclist"!=t.type){let i=this.getProximity(this.sprite,t.sprite);i<e&&(e=i,s=t.sprite)}}),s}getEnergyConsumed(){return this.onState?this.energyConsumption:0}useEnergy(t){return t>this.energyConsumption?this.energyConsumption:(this.onState=!1,0)}}class f extends g{constructor(t,e,s,i,r,n,a,o){super(t,e,s,i,r,n,a,o,12)}}class m extends g{constructor(t,e,s,i,r,n,a,o){super(t,e,s,i,r,n,a,o,2)}}class _ extends g{constructor(t,e,s,i,r,n,a,o){super(t,e,s,i,r,n,a,o,4)}setupSprite(){let t=this.onKey[0],e=this.onKey[1],s=this.scene.add.group(),i=this.scene.add.image(this.x,this.y,t).setOrigin(this.offset.x,this.offset.y),r=this.scene.add.image(this.x+15,this.y+40,e).setOrigin(this.offset.x,this.offset.y);return s.add(i),s.add(r),this.onState?s.setVisible(!0):s.setVisible(!1),s}update(){this.onState?this.sprite.setVisible(!0):this.sprite.setVisible(!1)}}class b{constructor(t){this.key="Sensor",this.scene=t,this.dawn=8,this.dusk=19,this.darkLums=16,this.lightLums=10}get wind(){return this.scene.wind}get light(){return this.scene.light}get time(){return this.scene.worldTime}get isWindy(){return this.scene.wind>=10}get isFlat(){return this.scene.wind<10}get isLight(){return this.scene.light>=this.lightLums}get isDark(){return this.scene.light<=this.darkLums}get isEvening(){return this.scene.time>=this.dusk}get isDaytime(){return this.scene.time>=this.dusk&&this.scene.time<=this.dawn}}class w{constructor(t){this.key="Battery",this.maxCapacity=400,this.filling=!1,this.using=!1,this.energy=t}get energyValue(){return this.energy}get isFilling(){return this.filling}get isUsing(){return this.using}get isFull(){return this.energy>=this.maxCapacity}get isEmpty(){return 0==this.energy}charge(t){this.isFull||(this.energy+=t)}use(t){this.isEmpty||(this.energy-=t)}}var v=s(2);let S=window.Phaser;class k extends S.Scene{constructor(){super({key:"CityScene"}),this.API=h.a.get(this),this.verificationAPI=u.a.get(this),this.camera=void 0,this.fullyLight=10,this.getDark=16,this.hoursProgress=0,this.width=400,this.height=400,this.street=void 0,this.windmills=void 0,this.streetlamps=void 0,this.battery=void 0,this.light=void 0,this.wind=void 0,this.worldTime=void 0,this.lightLabel=void 0,this.windLabel=void 0,this.timeLabel=void 0,this.energyConsumedLabel=void 0,this.recordState=[],this.cursors=void 0,this.status="running",this.studentCodeRunning=!1,this.completed=void 0,this.bot_direction=void 0,this.players=[]}init(t){this.initConfig={timeStates:{timeScale:t.timeStates.timeScale,startTime:t.timeStates.startTime,endTime:t.timeStates.endTime},weatherStates:{wind:t.weatherStates.wind,light:t.weatherStates.light},sceneSetup:{pink_player:t.sceneSetup.pink_player,blue_player:t.sceneSetup.blue_player,orange_cyclist:t.sceneSetup.orange_cyclist,green_cyclist:t.sceneSetup.green_cyclist,windmills:t.sceneSetup.windmills,streetlamps:t.sceneSetup.streetlamps,solar_panels:t.sceneSetup.solar_panels},battery:{charge:t.battery.charge,batteryLabel:t.battery.batteryLabel,energyConsumedLabel:t.battery.energyConsumedLabel},onStates:{windmills:t.onStates.windmills,streetlamps:t.onStates.streetlamps,porch_lights:t.onStates.porch_lights,window_lights:t.onStates.window_lights,solar_panels:t.onStates.solar_panels},player:t.player,studentCode:t.studentCode,onComplete:t.onComplete,verificationFunction:t.verificationFunction},this.assetRoot=t.assetRoot||"assets/",this.onStates=t.onStates,this.startTime=t.timeStates.startTime,this.endTime=t.timeStates.endTime,this.timeScale=t.timeStates.timeScale,this.sceneSetup=t.sceneSetup,this.light=t.weatherStates.light,this.wind=t.weatherStates.wind,this.worldTime=t.timeStates.startTime;let e=t.battery.charge||20;this.battery=new w(e),this.batteryLabel=t.battery.batteryLabel,this.energyConsumedLabel=t.battery.energyConsumedLabel,this.energyConsumed=0,this.studentCode=t.studentCode,this.onComplete=t.onComplete,this.verificationFunction=t.verificationFunction,this.directions=[-1,1],this.bot_direction=this.directions[Math.floor(Math.random()*this.directions.length)],this.pink_player={key:"pink_player",x:Math.floor(300*Math.random())+50,y:295,initDirection:this.bot_direction,type:"pink_player"==t.player?"player":"bot",active:t.sceneSetup.pink_player},this.blue_player={key:"blue_player",x:Math.floor(300*Math.random())+50,y:300,initDirection:this.bot_direction,type:"blue_player"==t.player?"player":"bot",active:t.sceneSetup.blue_player},this.orange_cyclist={key:"orange_cyclist",x:Math.floor(300*Math.random())+50,y:340,direction:1,type:"cyclist",velocity:100,active:t.sceneSetup.orange_cyclist},this.green_cyclist={key:"green_cyclist",x:Math.floor(300*Math.random())+50,y:360,direction:-1,type:"cyclist",velocity:140,active:t.sceneSetup.green_cyclist}}preload(){this.assetLoader=new r(this),this.assetLoader.loadPack("allAssets")}create(){this.camera=this.cameras.add(0,0,400,400),this.hills=this.add.image(0,250,"hills").setOrigin(0,1),this.windmills=!!this.sceneSetup.windmills&&this.createWindmills(),this.birds=this.createBirds(),this.street=this.createStreet(),this.houses=this.createHouses(),this.setupPlayers([this.pink_player,this.blue_player]),this.streetlamps=!!this.sceneSetup.streetlamps&&this.createStreetlamps(),this.setupPlayers([this.orange_cyclist,this.green_cyclist]),this.lightLabel=!!this.light&&this.createStateLabel(16,375,"Light (lx):",this.light),this.windLabel=!!this.wind&&this.createStateLabel(16,355,"Wind (kn):",this.wind),this.batteryLabel=!!this.batteryLabel&&this.createStateLabel(200,355,"Battery (W):",this.battery.energyValue),this.energyConsumedLabel=!!this.energyConsumedLabel&&this.createStateLabel(200,375,"Energy Consumed (kWh):",this.energyConsumed),this.timeLabel=this.createStateLabel(310,16,"Time:","--","big"),this.cursors=this.input.keyboard.createCursorKeys(),this.sensor=new b(this),this.failureSound=this.sound.add("failure_sound"),this.successSound=this.sound.add("success_sound"),this.events.once("onSuccess",()=>{this.successSound.play(),this.successfullAttempt()},this),this.events.once("onFailure",()=>{this.failureSound.play(),this.failedAttempt()},this),[this.pink_player,this.blue_player,this.orange_cyclist,this.green_cyclist].forEach(t=>{t.active&&this.players.push(t)})}setupPlayers(t){t.forEach(t=>{t.active&&("cyclist"==t.type?t.sprite=this.createCyclist(t):t.sprite=this.createPlayer(t))})}createStreet(){let t=this.physics.add.staticGroup();return t.create(0,350,"pavement").setOrigin(0,1),t.create(0,400,"road").setOrigin(0,1),t}createHouses(){let t=this.add.group(),e=[];for(let s=0;s<3;s++){let i={};i.bricks=t.create(50+100*s,300,"house").setOrigin(0,1),this.sceneSetup.solar_panel&&(i.solar_panel=new y(this,"solar_panel",120+100*s,195,{x:0,y:1},this.onStates.solar_panels)),i.window=t.create(65+100*s,245,"window").setOrigin(0,1),i.window_small=t.create(80+100*s,285,"window_small").setOrigin(0,1),i.window_lights=new _(this,"window_lights",65+100*s,245,{x:0,y:1},["window_lights","window_small_lights"],null,this.onStates.window_lights),i.door=t.create(115+100*s,300,"door_pink").setOrigin(0,1),i.porch_light=new m(this,"porch_light",108+100*s,254,{x:.5,y:.5},"porch_light_on","porch_light_off",this.onStates.porch_lights),e.push(i)}return{houses:e,housesGroup:t}}createStreetlamps(){let t={streetlamps:[]};t.group=this.add.group();let e=5,s=350;for(let i=0;i<3;i++){let r=new f(this,"streetlamp",e+150*i,s,{x:0,y:1},"streetlamp_modern_on","streetlamp_modern_off",this.onStates.streetlamps);t.streetlamps.push(r),t.group.add(r.sprite)}return t.all=((e,s=[])=>{t.streetlamps.forEach(t=>{s!=[]?t[e](...s):t[e]()})}),t}createWindmills(){let t={windmills:[]},e=[{x:50,y:85},{x:120,y:110},{x:205,y:80},{x:250,y:90}],s=30,i=-36,r={x:.476,y:.365};for(let n=0;n<4;n++){let a=new d(this,"windmill",e[n].x+s,e[n].y+i,r,this.onStates.windmills);t.windmills.push(a)}return t.all=((e,s=[])=>{t.windmills.forEach(t=>{s!=[]?t[e](...s):t[e]()})}),t}createBirds(){const t=this.physics.add.group({key:"birds",repeat:Math.floor(4*Math.random()),setXY:{x:100,y:75,stepX:10*Math.random()+10,stepY:10*Math.random()+10}});return this.anims.create({key:"bird_fly",frames:this.anims.generateFrameNumbers("birds",{start:0,end:9}),frameRate:10,repeat:-1}),t}createCyclist(t){let e=this.physics.add.sprite(t.x,t.y,t.key);return e.body.gravity.y=0,this.anims.create({key:`${t.key}_ride`,frames:this.anims.generateFrameNumbers(t.key,{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:`${t.key}_celebrate`,frames:this.anims.generateFrameNumbers(t.key,{frames:[4,5,4,5]}),frameRate:10,repeat:2}),this.anims.create({key:`${t.key}_slump`,frames:this.anims.generateFrameNumbers(t.key,{frames:[0,6,7]}),frameRate:10}),e}createPlayer(t){let e=this.physics.add.sprite(t.x,t.y,t.key);return e.body.gravity.y=0,this.anims.create({key:`${t.key}_left`,frames:this.anims.generateFrameNumbers(t.key,{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:`${t.key}_turn`,frames:[{key:t.key,frame:4}],frameRate:20}),this.anims.create({key:`${t.key}_right`,frames:this.anims.generateFrameNumbers(t.key,{start:5,end:8}),frameRate:10,repeat:-1}),this.anims.create({key:`${t.key}_celebrate`,frames:this.anims.generateFrameNumbers(t.key,{start:9,end:13}),frameRate:10,repeat:2}),e.on(S.Animations.Events.ANIMATION_COMPLETE_KEY+`${t.key}_celebrate`,function(){this.scene.pause()},this),this.anims.create({key:`${t.key}_slump`,frames:this.anims.generateFrameNumbers(t.key,{start:13,end:15}),frameRate:10}),e.on(S.Animations.Events.ANIMATION_COMPLETE_KEY+`${t.key}_slump`,function(){this.scene.pause()},this),e}createStateLabel(t,e,s,i,r="small",n=-1){const a=new o(this,t,e,s,i,"big"==r?{fontSize:"18px",fill:"#fff"}:{fontSize:"13px",fill:"#fff"},n);return this.add.existing(a),a}drawClock(t){this.timeLabel.setValue(`${t}`)}updateLight(){this.worldTime<this.fullyLight&&(this.light+=10),this.worldTime>=this.getDark&&(this.light-=10),this.lightLabel&&this.lightLabel.setValue(this.light)}updateWind(){this.worldTime<this.fullyLight&&(this.wind+=.5),this.worldTime>=this.getDark&&(this.wind-=.5),this.windLabel&&this.windLabel.setValue(this.wind)}changeWorldShade(t){var e=S.Display.Color.ValueToColor("#0F2F3A"),s=S.Display.Color.ValueToColor("#38C1FF"),i="#38C1FF",r=new S.Display.Color(150,150,150),n=new S.Display.Color(255,255,255),a=n;t<this.fullyLight&&(i=S.Display.Color.Interpolate.ColorWithColor(e,s,this.fullyLight,t),a=S.Display.Color.Interpolate.ColorWithColor(r,n,this.fullyLight,t)),t>this.getDark&&(i=S.Display.Color.Interpolate.ColorWithColor(s,e,24-this.getDark,t-this.getDark),a=S.Display.Color.Interpolate.ColorWithColor(n,r,24-this.getDark,t-this.getDark)),this.houses.housesGroup.setTint(S.Display.Color.GetColor(a.r,a.g,a.b)),this.street.setTint(S.Display.Color.GetColor(a.r,a.g,a.b)),this.hills.setTint(S.Display.Color.GetColor(a.r,a.g,a.b)),this.players.forEach(t=>{this.tintPlayer(t.sprite,a)});for(let t=0;t<3;t++){let e=this.houses.houses[t];e.porch_light.isOn?e.porch_light.sprite.setTint(S.Display.Color.GetColor(255,255,255)):e.porch_light.sprite.setTint(S.Display.Color.GetColor(a.r,a.g,a.b))}!this.onStates.streetlamps&&this.streetlamps?this.streetlamps.group.setTint(S.Display.Color.GetColor(a.r,a.g,a.b)):this.streetlamps&&this.onStates.streetlamps&&this.streetlamps.group.setTint(S.Display.Color.GetColor(255,255,255)),this.camera.setBackgroundColor(i)}tintPlayer(t,e){this.isUnderOnStreetlamp(t)?t.setTint(S.Display.Color.GetColor(210,210,210)):t.setTint(S.Display.Color.GetColor(e.r,e.g,e.b))}isUnderOnStreetlamp(t){return!(!(t.x>=5&&t.x<=95||t.x>=155&&t.x<=245||t.x>=310&&t.x<=400)||!this.onStates.streetlamps)}setState(t,e){this.onStates[t]=e}isUpdateWorldTime(t){let e=60*(this.endTime-this.startTime)*t.getOverallProgress();return this.hoursProgress=Math.round(e/60),this.worldTime<this.startTime+this.hoursProgress}updateEnergyValues(){let t=[];this.houses.houses.forEach(e=>{t.push(e.porch_light),t.push(e.window_lights)}),this.streetlamps&&this.streetlamps.streetlamps.forEach(e=>{t.push(e)});let e=0;t.forEach(t=>{e+=t.getEnergyConsumed()}),this.energyConsumed=e,this.energyConsumedLabel&&this.energyConsumedLabel.setValue(this.energyConsumed),this.battery.use(e),this.batteryLabel&&this.batteryLabel.setValue(this.battery.energyValue)}tick(){this.studentCode(this.API),this.updateLight(),this.updateWind(),this.updateEnergyValues(),this.drawClock(this.worldTime);let t={worldTime:this.worldTime,light:this.light,streetlamps:this.onStates.streetlamps,lights:this.onStates.lights};this.recordState.push(t),this.worldTime=this.startTime+this.hoursProgress,this.worldTime==this.endTime&&this.endAttempt()}cursorAnimations(t){this.cursors.left.isDown?(t.sprite.setVelocityX(-80),t.sprite.anims.play(`${t.key}_left`,!0)):this.cursors.right.isDown?(t.sprite.setVelocityX(80),t.sprite.anims.play(`${t.key}_right`,!0)):(t.sprite.setVelocityX(0),t.sprite.anims.play(`${t.key}_turn`)),this.cursors.up.isDown&&t.sprite.body.touching.down&&t.sprite.setVelocityY(-330)}startAttempt(){console.log("Starting..."),this.timerEvent=this.time.addEvent({delay:5e3,timeScale:this.timeScale}),this.studentCodeRunning=!0}resetAttempt(){console.log("Resetting..."),this.worldTime,this.resetValues(),this.scene.restart(this.initConfig),this.timerEvent=this.time.addEvent({delay:5e3,timeScale:this.timeScale}),this.status="running",this.studentCodeRunning=!0}resetValues(){this.onStates=v(this.initConfig.onStates),this.worldTime=this.startTime,this.recordState=[],this.hoursProgress=0}endAttempt(){console.log("Ending..."),this.studentCodeRunning=!1,this.status="ended";let t=this.verificationFunction(this.verificationAPI);if(this.completed=!0,t instanceof Array)for(let e=0;e<t.length;e++)0==t[e]&&(this.completed=!1);else this.completed=t;this.onComplete(t),this.timeLabel.setValue("--")}successfullAttempt(){this.players.forEach(t=>{t.sprite.setVelocityX(0),t.sprite.anims.play(`${t.key}_celebrate`,!0)}),this.stopBirdsAnimation(),this.resetValues()}failedAttempt(){this.players.forEach(t=>{t.sprite.setVelocityX(0),t.sprite.anims.play(`${t.key}_slump`,!0)}),this.stopBirdsAnimation(),this.resetValues()}botAnimation(t){t.sprite.setVelocityX(50*this.bot_direction),(t.sprite.x<=0||t.sprite.x>=400)&&(this.bot_direction=-1*this.bot_direction),t.sprite.x<=0?t.sprite.x=10:t.sprite.x>=400&&(t.sprite.x=390),-1==this.bot_direction?t.sprite.anims.play(`${t.key}_left`,!0):t.sprite.anims.play(`${t.key}_right`,!0)}animateCyclist(t){t.sprite.setVelocityX(t.velocity*t.direction),t.sprite.x<=0?t.sprite.x=395:t.sprite.x>=this.width&&(t.sprite.x=0),t.sprite.anims.play(`${t.key}_ride`,!0)}animateBirds(){this.birds.setVelocityX(20),this.birds.children.iterate(t=>{t.x>=400&&(t.x=0)}),this.birds.playAnimation("bird_fly",!0)}stopBirdsAnimation(){this.birds.setVelocityX(0),this.birds.children.iterate(t=>{t.anims.stop()})}turnPorchLightsOn(){for(let t=0;t<3;t++)this.houses.houses[t].porch_light.getNearestDistance(this.players)<=15?this.houses.houses[t].porch_light.turnOn():this.houses.houses[t].porch_light.turnOff()}update(){this.studentCodeRunning&&this.isUpdateWorldTime(this.timerEvent)&&this.tick(),"running"==this.status?(this.changeWorldShade(this.worldTime),this.windmills&&this.windmills.all("rotateTurbines",[this.wind]),this.animateBirds(),this.players.forEach(t=>{"bot"==t.type?this.botAnimation(t):"player"==t.type?this.cursorAnimations(t):"cyclist"==t.type&&this.animateCyclist(t)})):this.completed?this.events.emit("onSuccess"):this.events.emit("onFailure")}}class x{constructor(t){this.Phaser=t.Phaser||Phaser,t.debug&&void 0!=t.Phaser&&console.log("Using local Phaser");const e={type:this.Phaser.AUTO,physics:{default:"arcade",arcade:{gravity:{y:0}}}};this.sceneConfig=t.sceneConfig;const s=Object.assign({},e,t.gameConfig);this.game=new this.Phaser.Game(s),this.game.scene.add("CityScene",k,!0)}startGame(){return this.game.scene.start("CityScene",this.sceneConfig),this.game.scene.keys}getScene(){return this.game.scene.keys.CityScene}}window.GameController=x;e.default=x}])});