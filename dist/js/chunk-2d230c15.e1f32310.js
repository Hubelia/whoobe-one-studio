(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230c15"],{ee43:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.element?i("div",{key:e.element.id,ref:"alp"+e.element.id,staticClass:"p-2 flex flex-col"},[i("strong",[e._v("Alpine Directive")]),i("label",[e._v(e._s(e.element.id))]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.directive,expression:"directive"}],staticClass:"w-full mb-2",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.directive=t.target.multiple?i:i[0]}}},e._l(e.directives,(function(t){return i("option",{domProps:{value:t}},[e._v(e._s(t))])})),0),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newDirective,expression:"newDirective"}],staticClass:"w-full mb-2",attrs:{type:"text"},domProps:{value:e.newDirective},on:{keydown:function(t){return e.addDirective(t)},input:function(t){t.target.composing||(e.newDirective=t.target.value)}}}),i("strong",[e._v("Current directives")]),e._v(" "+e._s(e.element.alpine)+" "),e.element.data.alpine?i("div",{staticClass:"flex flex-wrap"},[e._l(Object.keys(e.element.data.alpine),(function(t){return[e.element.data.alpine[t]?i("span",{staticClass:"chip bg-purple-400 px-1 flex items-center m-1 rounded-full cursor-pointer",attrs:{title:e.element.data.alpine[t]}},[e._v(e._s(t)+" "),i("m-icon",{staticClass:"text-xs text-black ml-1 bg-white rounded-full h-4 w-4 flex items-center justify-center",attrs:{icon:"close"},on:{click:function(i){return e.removeDirective(t)}}})],1):e._e()]}))],2):e._e()]):e._e()},l=[],r={name:"BlockAlpine",data:function(){return{element:null,directive:"",newDirective:"",directives:["x-data","x-init","x-show","x-bind","x-bind:class","x-on","x-on:click","x-text","x-html","x-model","x-for","x-transition","x-effect","x-ignore","x-ref","x-cloak","x-if"]}},mounted:function(){this.element=this.$store.state.editor.current},methods:{addDirective:function(e){console.log(e.keyCode),13===e.keyCode&&(this.element.data.alpine||(this.element.data.alpine={}),this.element.data["alpine"][this.directive]=this.newDirective,this.directive="",this.newDirective="")},removeDirective:function(e){delete this.element.data.alpine[e],this.$store.dispatch("setCurrent",this.element)}}},a=r,s=i("2877"),c=Object(s["a"])(a,n,l,!1,null,null,null);t["default"]=c.exports}}]);