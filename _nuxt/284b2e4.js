(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{250:function(t,e,r){var content=r(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("798620de",content,!0,{sourceMap:!1})},251:function(t,e,r){var content=r(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("6759f5ab",content,!0,{sourceMap:!1})},252:function(t,e,r){"use strict";r(250)},253:function(t,e,r){var n=r(41)(!1);n.push([t.i,"ul.tips{list-style-position:inside;list-style-image:url(https://web.poecdn.com/image/list/t1.png)!important}.tips{transform:translateZ(0)}.open-enter-active,.open-leave-active,.tips{transition:max-height .5s}",""]),t.exports=n},254:function(t,e,r){"use strict";r(251)},255:function(t,e,r){var n=r(41)(!1);n.push([t.i,'em{font-style:normal;color:#cec59f;color:rgba(206,197,159,var(--text-opacity))}.boss,em{font-family:Fontin,Georgia,Cambria,"Times New Roman",Times,serif;font-weight:700;--text-opacity:1}.boss{color:#dd6b20;color:rgba(221,107,32,var(--text-opacity))}.quest{font-family:Fontin,Georgia,Cambria,"Times New Roman",Times,serif;color:#4ae63a;font-weight:700}.tp,.wp{letter-spacing:-.025em;color:#bee3f8;color:rgba(190,227,248,var(--text-opacity));opacity:.75;font-size:.875rem}.tp,.wp,strong{--text-opacity:1}strong{font-family:Fontin,Georgia,Cambria,"Times New Roman",Times,serif;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-shadow:1px 1px 1px #000}li img{display:inline-block;width:1.25rem;height:1.25rem;margin-right:1px}.hide-optional span.optional{display:none}',""]),t.exports=n},256:function(t,e,r){"use strict";r.r(e);r(26),r(20),r(21),r(39),r(40);var n=r(15),o=(r(70),r(71),r(92),r(34));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:{act:{type:String,default:""},content:{type:Object,default:function(){return{}}}},data:function(){return{height:0,isOpen:!0}},mounted:function(){this.height=this.$refs.tips.clientHeight,this.$refs.tips.style.maxHeight="".concat(this.height,"px"),this.$refs.tips.style.overflow="hidden"},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({hideTips:function(t){return t.hideTips}})),watch:{isOpen:function(t){this.$refs.tips.style.maxHeight=t?"".concat(this.height,"px"):"0px"},hideTips:function(t){this.isOpen=t}}},f=l,h=(r(252),r(24));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={components:{Accordion:Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-black-85 border-black px-4 py-2 text-gray-300 opacity-75"},[r("h3",{staticClass:"w-full cursor-pointer text-yellow-poe-light text-xl font-semibold inline-flex justify-between",on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("\n\t\tTips\n\t\t"),t.isOpen?r("span",{staticClass:"font-serif leading-none text-3xl"},[t._v("-")]):r("span",{staticClass:"font-serif leading-none text-3xl"},[t._v("+")])]),t._v(" "),r("transition",{attrs:{name:"open"}},[r("ul",{ref:"tips",staticClass:"tips text-sm mt-2"},t._l(t.content.tips,(function(e,n){return r("li",{key:t.act+"-tip-"+n},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])})),0)])],1)}),[],!1,null,null,null).exports},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({progress:{get:function(){return this.$store.state.progress},set:function(t){this.$store.dispatch("addProgress",t)}}},Object(o.c)({data:function(t){return t.data},isNewLeague:function(t){return t.newLeague},moveToAct:function(t){return t.moveToAct}})),watch:{moveToAct:function(t){this.moveTo(t)}},methods:{moveTo:function(t){this.$refs[t][0].scrollIntoView({behavior:"smooth"})},nextAct:function(t,e,r){if(t-1===e&&this.progress.includes("".concat(r,"-step-").concat(e))){var n="act_".concat(parseInt(r.split("_").reverse()[0])+1);"act_11"!==n&&this.moveTo(n)}}}},v=m,y=(r(254),Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),t._l(t.data,(function(content,e){return r("div",{key:e,staticClass:"bg-poe-y py-4 px-2 lg:px-6"},["act_0"!==e?r("h2",{ref:e,refInFor:!0,staticClass:"text-4xl text-white font-serif text-center text-shadow-black",attrs:{id:e}},[t._v("\n\t\t\t--== "+t._s(e.replace("_"," "))+" ==--\n\t\t")]):r("h2",{staticClass:"text-4xl text-white font-serif text-center text-shadow-black"},[t._v("\n\t\t\t--== General ==--\n\t\t")]),t._v(" "),content&&content.tips&&content.tips.length?r("Accordion",{attrs:{act:e,content:content}}):t._e(),t._v(" "),r("ul",{staticClass:"ml-6 mt-4"},t._l(content.steps,(function(n,o){return r("li",{key:e+"-step-"+o,staticClass:"mb-2 list-decimal",class:{"hide-optional":!t.isNewLeague}},[r("label",{staticClass:"custom-checkbox flex items-center",attrs:{for:e+"-step-"+o}},[r("div",{staticClass:" bg-gray-900 hidden lg:flex border border-black-85 shadow w-4 h-4 justify-center items-center mr-0 lg:mr-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.progress,expression:"progress"}],staticClass:"hidden",attrs:{id:e+"-step-"+o,type:"checkbox"},domProps:{value:e+"-step-"+o,checked:Array.isArray(t.progress)?t._i(t.progress,e+"-step-"+o)>-1:t.progress},on:{change:[function(r){var n=t.progress,c=r.target,l=!!c.checked;if(Array.isArray(n)){var f=e+"-step-"+o,h=t._i(n,f);c.checked?h<0&&(t.progress=n.concat([f])):h>-1&&(t.progress=n.slice(0,h).concat(n.slice(h+1)))}else t.progress=l},function(r){return t.nextAct(content.steps.length,o,e)}]}}),t._v(" "),r("svg",{staticClass:"hidden w-4 h-4 text-gray-300 pointer-events-none",attrs:{viewBox:"0 0 172 172"}},[r("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"none","stroke-width":"none","stroke-miterlimit":"10","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[r("path",{attrs:{d:"M0 172V0h172v172z"}}),r("path",{attrs:{d:"M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z",fill:"currentColor","stroke-width":"1"}})])])]),t._v(" "),r("div",{class:{"opacity-25 line-through":t.progress.includes(e+"-step-"+o)},domProps:{innerHTML:t._s(t.$md.render(n))}})])])})),0)],1)}))],2)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-poe-y py-4 px-6 "},[r("h1",{staticClass:"text-5xl text-white font-serif text-center text-shadow-black"},[r("span",{staticClass:"text-yellow-600"},[t._v("\n\t\t\t\tPOE\n\t\t\t")]),t._v("\n\t\t\tleveling\n\t\t")]),t._v(" "),r("p",{staticClass:"text-center font-serif"},[t._v("\n\t\t\tLeveling guide based off "),r("a",{staticClass:"text-gray-300",attrs:{target:"_BLANK",href:"https://www.twitch.tv/zizaran"}},[t._v("Zizaran's")]),t._v(" league start "),r("a",{staticClass:"text-gray-300",attrs:{target:"_BLANK",href:"https://www.youtube.com/watch?v=qRZdW1S38no"}},[t._v("video")]),t._v(" "),r("br"),r("span",{staticClass:"text-xs"},[t._v("by the creator of "),r("a",{staticClass:"text-gray-300",attrs:{target:"_BLANK",href:"https://poe.house"}},[t._v("POE.house")])])])])}],!1,null,null,null));e.default=y.exports}}]);