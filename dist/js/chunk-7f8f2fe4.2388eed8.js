(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f8f2fe4"],{"1a3b":function(t,e){var n,r="function"===typeof setImmediate;n=r?function(t){setImmediate(t)}:function(t){setTimeout(t,0)},t.exports=n},"21b7":function(t,e,n){"use strict";var r=n("1a3b");t.exports=function(t,e,n){t&&r((function(){t.apply(n||null,e||[])}))}},"2b50":function(t,e,n){},"3eee":function(t,e,n){"use strict";n("2b50")},"3f31":function(t,e,n){"use strict";(function(e){var r=n("6c1b"),o=n("62cf"),i=e.document,c=l,a=d,u=[];function l(t,e,n,r){return t.addEventListener(e,n,r)}function s(t,e,n){return t.attachEvent("on"+e,p(t,e,n))}function d(t,e,n,r){return t.removeEventListener(e,n,r)}function f(t,e,n){var r=h(t,e,n);if(r)return t.detachEvent("on"+e,r)}function v(t,e,n){var c=-1===o.indexOf(e)?u():a();function a(){var t;return i.createEvent?(t=i.createEvent("Event"),t.initEvent(e,!0,!0)):i.createEventObject&&(t=i.createEventObject()),t}function u(){return new r(e,{detail:n})}t.dispatchEvent?t.dispatchEvent(c):t.fireEvent("on"+e,c)}function m(t,n,r){return function(n){var o=n||e.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(t,o)}}function p(t,e,n){var r=h(t,e,n)||m(t,e,n);return u.push({wrapper:r,element:t,type:e,fn:n}),r}function h(t,e,n){var r=g(t,e,n);if(r){var o=u[r].wrapper;return u.splice(r,1),o}}function g(t,e,n){var r,o;for(r=0;r<u.length;r++)if(o=u[r],o.element===t&&o.type===e&&o.fn===n)return r}e.addEventListener||(c=s,a=f),t.exports={add:c,remove:a,fabricate:v}}).call(this,n("c8ba"))},"612e":function(t,e,n){"use strict";(function(e){var r=n("f3f2"),o=n("3f31"),i=n("9fac"),c=document,a=c.documentElement;function u(t,e){var n,u,f,E,w,$,S,x,O,B,I,N=arguments.length;1===N&&!1===Array.isArray(t)&&(e=t,t=[]);var T,X=null,D=e||{};void 0===D.moves&&(D.moves=p),void 0===D.accepts&&(D.accepts=p),void 0===D.invalid&&(D.invalid=K),void 0===D.containers&&(D.containers=t||[]),void 0===D.isContainer&&(D.isContainer=m),void 0===D.copy&&(D.copy=!1),void 0===D.copySortSource&&(D.copySortSource=!1),void 0===D.revertOnSpill&&(D.revertOnSpill=!1),void 0===D.removeOnSpill&&(D.removeOnSpill=!1),void 0===D.direction&&(D.direction="vertical"),void 0===D.ignoreInputTextSelection&&(D.ignoreInputTextSelection=!0),void 0===D.mirrorContainer&&(D.mirrorContainer=c.body);var L=r({containers:D.containers,start:U,end:H,cancel:Z,remove:W,destroy:F,canMove:z,dragging:!1});return!0===D.removeOnSpill&&L.on("over",ot).on("out",it),_(),L;function Y(t){return-1!==L.containers.indexOf(t)||D.isContainer(t)}function _(t){var e=t?"remove":"add";l(a,e,"mousedown",M),l(a,e,"mouseup",G)}function j(t){var e=t?"remove":"add";l(a,e,"mousemove",R)}function P(t){var e=t?"remove":"add";o[e](a,"selectstart",A),o[e](a,"click",A)}function F(){_(!0),G({})}function A(t){T&&t.preventDefault()}function M(t){$=t.clientX,S=t.clientY;var e=1!==s(t)||t.metaKey||t.ctrlKey;if(!e){var n=t.target,r=q(n);r&&(T=r,j(),"mousedown"===t.type&&(y(n)?n.focus():t.preventDefault()))}}function R(t){if(T)if(0!==s(t)){if(!(void 0!==t.clientX&&Math.abs(t.clientX-$)<=(D.slideFactorX||0)&&void 0!==t.clientY&&Math.abs(t.clientY-S)<=(D.slideFactorY||0))){if(D.ignoreInputTextSelection){var e=C("clientX",t)||0,n=C("clientY",t)||0,r=c.elementFromPoint(e,n);if(y(r))return}var o=T;j(!0),P(),H(),J(o);var a=d(f);E=C("pageX",t)-a.left,w=C("pageY",t)-a.top,i.add(B||f,"gu-transit"),ct(),rt(t)}}else G({})}function q(t){if((!L.dragging||!n)&&!Y(t)){var e=t;while(b(t)&&!1===Y(b(t))){if(D.invalid(t,e))return;if(t=b(t),!t)return}var r=b(t);if(r&&!D.invalid(t,e)){var o=D.moves(t,r,e,k(t));if(o)return{item:t,source:r}}}}function z(t){return!!q(t)}function U(t){var e=q(t);e&&J(e)}function J(t){st(t.item,t.source)&&(B=t.item.cloneNode(!0),L.emit("cloned",B,t.item,"copy")),u=t.source,f=t.item,x=O=k(t.item),L.dragging=!0,L.emit("drag",f,u)}function K(){return!1}function H(){if(L.dragging){var t=B||f;Q(t,b(t))}}function V(){T=!1,j(!0),P(!0)}function G(t){if(V(),L.dragging){var e=B||f,r=C("clientX",t)||0,o=C("clientY",t)||0,i=v(n,r,o),c=nt(i,r,o);c&&(B&&D.copySortSource||!B||c!==u)?Q(e,c):D.removeOnSpill?W():Z()}}function Q(t,e){var n=b(t);B&&D.copySortSource&&e===u&&n.removeChild(f),et(e)?L.emit("cancel",t,u,u):L.emit("drop",t,e,u,O),tt()}function W(){if(L.dragging){var t=B||f,e=b(t);e&&e.removeChild(t),L.emit(B?"cancel":"remove",t,e,u),tt()}}function Z(t){if(L.dragging){var e=arguments.length>0?t:D.revertOnSpill,n=B||f,r=b(n),o=et(r);!1===o&&e&&(B?r&&r.removeChild(B):u.insertBefore(n,x)),o||e?L.emit("cancel",n,u,u):L.emit("drop",n,r,u,O),tt()}}function tt(){var t=B||f;V(),at(),t&&i.rm(t,"gu-transit"),I&&clearTimeout(I),L.dragging=!1,X&&L.emit("out",t,X,u),L.emit("dragend",t),u=f=B=x=O=I=X=null}function et(t,e){var r;return r=void 0!==e?e:n?O:k(B||f),t===u&&r===x}function nt(t,e,n){var r=t;while(r&&!o())r=b(r);return r;function o(){var o=Y(r);if(!1===o)return!1;var i=ut(r,t),c=lt(r,i,e,n),a=et(r,c);return!!a||D.accepts(f,r,u,c)}}function rt(t){if(n){t.preventDefault();var e=C("clientX",t)||0,r=C("clientY",t)||0,o=e-E,i=r-w;n.style.left=o+"px",n.style.top=i+"px";var c=B||f,a=v(n,e,r),l=nt(a,e,r),s=null!==l&&l!==X;(s||null===l)&&(y(),X=l,g());var d=b(c);if(l!==u||!B||D.copySortSource){var m,p=ut(l,a);if(null!==p)m=lt(l,p,e,r);else{if(!0!==D.revertOnSpill||B)return void(B&&d&&d.removeChild(c));m=x,l=u}(null===m&&s||m!==c&&m!==k(c))&&(O=m,l.insertBefore(c,m),L.emit("shadow",c,l,u))}else d&&d.removeChild(c)}function h(t){L.emit(t,c,X,u)}function g(){s&&h("over")}function y(){X&&h("out")}}function ot(t){i.rm(t,"gu-hide")}function it(t){L.dragging&&i.add(t,"gu-hide")}function ct(){if(!n){var t=f.getBoundingClientRect();n=f.cloneNode(!0),n.style.width=h(t)+"px",n.style.height=g(t)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),D.mirrorContainer.appendChild(n),l(a,"add","mousemove",rt),i.add(D.mirrorContainer,"gu-unselectable"),L.emit("cloned",n,f,"mirror")}}function at(){n&&(i.rm(D.mirrorContainer,"gu-unselectable"),l(a,"remove","mousemove",rt),b(n).removeChild(n),n=null)}function ut(t,e){var n=e;while(n!==t&&b(n)!==t)n=b(n);return n===a?null:n}function lt(t,e,n,r){var o="horizontal"===D.direction,i=e!==t?a():c();return i;function c(){var e,i,c,a=t.children.length;for(e=0;e<a;e++){if(i=t.children[e],c=i.getBoundingClientRect(),o&&c.left+c.width/2>n)return i;if(!o&&c.top+c.height/2>r)return i}return null}function a(){var t=e.getBoundingClientRect();return u(o?n>t.left+h(t)/2:r>t.top+g(t)/2)}function u(t){return t?k(e):e}}function st(t,e){return"boolean"===typeof D.copy?D.copy:D.copy(t,e)}}function l(t,n,r,i){var c={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},a={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},u={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};e.navigator.pointerEnabled?o[n](t,a[r],i):e.navigator.msPointerEnabled?o[n](t,u[r],i):(o[n](t,c[r],i),o[n](t,r,i))}function s(t){if(void 0!==t.touches)return t.touches.length;if(void 0!==t.which&&0!==t.which)return t.which;if(void 0!==t.buttons)return t.buttons;var e=t.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function d(t){var e=t.getBoundingClientRect();return{left:e.left+f("scrollLeft","pageXOffset"),top:e.top+f("scrollTop","pageYOffset")}}function f(t,n){return"undefined"!==typeof e[n]?e[n]:a.clientHeight?a[t]:c.body[t]}function v(t,e,n){t=t||{};var r,o=t.className||"";return t.className+=" gu-hide",r=c.elementFromPoint(e,n),t.className=o,r}function m(){return!1}function p(){return!0}function h(t){return t.width||t.right-t.left}function g(t){return t.height||t.bottom-t.top}function b(t){return t.parentNode===c?null:t.parentNode}function y(t){return"INPUT"===t.tagName||"TEXTAREA"===t.tagName||"SELECT"===t.tagName||E(t)}function E(t){return!!t&&("false"!==t.contentEditable&&("true"===t.contentEditable||E(b(t))))}function k(t){return t.nextElementSibling||e();function e(){var e=t;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e}}function w(t){return t.targetTouches&&t.targetTouches.length?t.targetTouches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t}function C(t,e){var n=w(e),r={pageX:"clientX",pageY:"clientY"};return t in r&&!(t in n)&&r[t]in n&&(t=r[t]),n[t]}t.exports=u}).call(this,n("c8ba"))},"62cf":function(t,e,n){"use strict";(function(e){var n=[],r="",o=/^on/;for(r in e)o.test(r)&&n.push(r.slice(2));t.exports=n}).call(this,n("c8ba"))},"6c1b":function(t,e,n){(function(e){var n=e.CustomEvent;function r(){try{var t=new n("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(e){}return!1}t.exports=r()?n:"undefined"!==typeof document&&"function"===typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,n("c8ba"))},"9fac":function(t,e,n){"use strict";var r={},o="(?:^|\\s)",i="(?:\\s|$)";function c(t){var e=r[t];return e?e.lastIndex=0:r[t]=e=new RegExp(o+t+i,"g"),e}function a(t,e){var n=t.className;n.length?c(e).test(n)||(t.className+=" "+e):t.className=e}function u(t,e){t.className=t.className.replace(c(e)," ").trim()}t.exports={add:a,rm:u}},e988:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:t.$attrs.doc.id,staticClass:"relative dragula-container cursor-pointer p-1",class:t.classe,style:t.stile,attrs:{type:"container",id:t.$attrs.doc.id}},[t._v(" "+t._s(t.$attrs.doc.blocks.length?null:t.$attrs.doc.element)+" "),t._l(t.$attrs.doc.blocks,(function(e){return["container"===e.type||"container"===e.tag||"blocks"===e.tag?n("BlockContainer",{key:e.id,attrs:{doc:e,level:parseInt(t.$attrs.level)+1}}):t._e(),"slider"===e.type?n("Slider",{attrs:{doc:e,level:parseInt(t.$attrs.level)+1},on:{selected:t.setFloating}}):t._e(),e&&"slider"!=e.type&&"container"!=e.type&&"iconify"!=e.tag&&"container"!=e.tag?n("BlockElement",{key:e.id,attrs:{element:e,level:parseInt(t.$attrs.level)+1},on:{selected:t.setFloating}}):t._e(),"iconify"===e.tag?n("IconifyIcon",{class:t.classeElement(e),attrs:{"data-element-tag":e.type+" "+e.element,block:e},on:{selected:t.setFloating}}):t._e()]})),n("div",{staticClass:"block-selector absolute inset-0",class:t.selector,attrs:{"data-block-tag":t.$attrs.doc.semantic||t.$attrs.doc.tag},on:{click:function(e){return t.setCurrent(t.$attrs.doc)},mouseenter:function(e){return t.float()},mouseleave:function(e){return t.nofloat()}}})],2)},o=[],i=n("5530"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("a15b"),n("07ac"),n("ac1f"),n("5319"),n("2f62")),a=n("56d7"),u=n("612e"),l=n.n(u),s=n("52cd"),d=n.n(s),f={name:"BlockContainer",data:function(){return{current:null,floatingID:null,block:null,elementLink:!1}},components:{BlockElement:function(){return n.e("chunk-2d0c9016").then(n.bind(null,"56fe"))},BlockLink:function(){return n.e("chunk-2d2102d9").then(n.bind(null,"b77e"))}},computed:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["editor"])),{},{classe:function(){this.block=this.$attrs.doc;var t=Object.values(this.$attrs.doc.css).join(" ");return t+=" z-"+this.$attrs.level,"document"===this.$attrs.doc.tag&&(t+=" p-2"),t=t.replace("modal",""),t},stile:function(){var t="";return this.block.image&&this.block.image.url&&(t+="background-image:url("+this.$imageURL(this.block.image)+");"),this.block.font&&(t+='font-family:"'.concat(this.block.font.replace("+"," "),'";')),t+this.$attrs.doc.style},selector:function(){var t="z-"+this.$attrs.level;return this.editor.current&&this.editor.current.id===this.$attrs.doc.id?"document"===this.$attrs.doc.tag?t+=" border-2 border-gray-600 ":t+=" border border-red-400":"document"===this.$attrs.doc.tag?t+=" border-2 border-transparent shadow ":t+=" border border-dashed border-transparent hover:border-red-400",t.replace("md:hidden","")}}),methods:{classeElement:function(t){var e=t.css.css.replace("hidden","");return e.replace("modal",""),e},component:function(t){return t?t.hasOwnProperty("level")?"h"+t.level:t.element:null},setCurrent:function(t){this.editor.current&&this.editor.current.id===t.id?this.$store.dispatch("setCurrent",null):this.$store.dispatch("setCurrent",t),this.editor.current&&this.editor.current.id===t.id&&this.$editorBus("floatingElement",t.id),this.editor.current&&!this.editor.current.image&&(this.editor.current.image={url:this.editor.current.image})},setFloating:function(t){console.log("element => ",t),this.floatingID=t.id;var e=document.querySelector(".block-floating");e.style.left=t.coords.x,e.style.top=t.coords.y},float:function(){this.floatingID=this.$attrs.doc.id},nofloat:function(){this.floatingID=null},floating:function(){return this.editor.current?this.editor.current.id==this.$attrs.doc.id?"opacity-100":(this.floatingID,this.$attrs.doc.id,"opacity-0"):"opacity-0"}},mounted:function(){var t=this;a["editorBus"].$on("linkBlock",(function(){t.elementLink=!t.elementLink}));var e=l()({isContainer:function(t){return t.classList.contains("dragula-container")},accepts:function(t,e,n,r){return e.id!==n.id&&"element"==t.getAttribute("type")},move:function(t,e,n,r){return"container"!==t.getAttribute("type")}});e.on("drop",(function(e,n,r,o){if(t.editor.current){var i=d.a.query(t.editor.document,'$..blocks[?(@.id=="'+n.id+'")]'),c=Object.assign({},t.editor.current);d.a.query(t.editor.document,'$..blocks[?(@.id=="'+r.id+'")]');return t.$removeNode(c.id),t.$store.dispatch("setCurrent",null),void i[0].blocks.push(c)}}))}},v=f,m=(n("3eee"),n("2877")),p=Object(m["a"])(v,r,o,!1,null,null,null);e["default"]=p.exports},f13f:function(t,e){t.exports=function(t,e){return Array.prototype.slice.call(t,e)}},f3f2:function(t,e,n){"use strict";var r=n("f13f"),o=n("21b7");t.exports=function(t,e){var n=e||{},i={};return void 0===t&&(t={}),t.on=function(e,n){return i[e]?i[e].push(n):i[e]=[n],t},t.once=function(e,n){return n._once=!0,t.on(e,n),t},t.off=function(e,n){var r=arguments.length;if(1===r)delete i[e];else if(0===r)i={};else{var o=i[e];if(!o)return t;o.splice(o.indexOf(n),1)}return t},t.emit=function(){var e=r(arguments);return t.emitterSnapshot(e.shift()).apply(this,e)},t.emitterSnapshot=function(e){var c=(i[e]||[]).slice(0);return function(){var i=r(arguments),a=this||t;if("error"===e&&!1!==n.throws&&!c.length)throw 1===i.length?i[0]:i;return c.forEach((function(r){n.async?o(r,i,a):r.apply(a,i),r._once&&t.off(e,r)})),t}},t}}}]);