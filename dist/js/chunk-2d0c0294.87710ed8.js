(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0294"],{4134:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col p-4 items-center"},[o("div",{staticClass:"relative w-full"},[o("input",{staticClass:"absolute top-0 left-0 right-0 bottom-0 opacity-0",attrs:{type:"file",accept:"*.json"},on:{change:function(e){t.loadTextFromFile(e),t.loading=!0}}}),o("button",{staticClass:"btn-blue w-full py-2 warning text-lg"},[t._v("Select File")])]),t._v(" or from URL "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.kitURL,expression:"kitURL"}],staticClass:"w-full my-2",attrs:{type:"text",placeholder:"Kit URL"},domProps:{value:t.kitURL},on:{input:function(e){e.target.composing||(t.kitURL=e.target.value)}}}),o("button",{staticClass:"btn-blue w-full my-2 py-2 text-lg",on:{click:function(e){return t.fetchURL()}}},[t._v("Import from URL")]),t.loading?o("m-icon",{staticClass:"animate-spin text-4xl",attrs:{icon:"bubble_chart"}}):t._e()],1)},s=[],a=(o("d3b7"),o("56d7")),n={name:"ImportFile",data:function(){return{loading:!1,kitURL:"http://localhost:8080/"}},methods:{fetchURL:function(){var t=this;if(this.kitURL)try{fetch(this.kitURL).then((function(t){return t.json()})).then((function(e){t.$store.dispatch("add_uikit",e),t.$store.dispatch("library",e),t.$dialogBus("closeDialog")}))}catch(e){console.log(e)}},loadTextFromFile:function(t){var e=this;this.loading=!0;var o=t.target.files[0],i=new FileReader;i.onload=function(t){e.loading=!0;var o=t.target.result;try{if(o=JSON.parse(o),"page"===e.$attrs.options.mode){if(!o.hasOwnProperty("json"))return void a["eventBus"].$emit("error","File selected is a block and not a valid page.");delete o.id,o.id=0,e.$store.dispatch("setPage",o),e.$store.dispatch("document",o.json.blocks),e.loading=!1}"kit"===e.$attrs.options.mode?(e.$store.dispatch("add_uikit",o),e.$store.dispatch("library",o)):e.$store.state.editor.current&&(o.hasOwnProperty("json")&&(o=o.json.blocks),e.$store.state.editor.current.blocks.push(o),e.$store.dispatch("setCurrent",o),e.loading=!1),e.loading=!1,e.$emit("close"),a["eventBus"].$emit("notification","File imported correctly")}catch(i){console.log(i),e.loading=!1,a["eventBus"].$emit("error","File not supported")}},i.readAsText(o)}}},l=n,r=o("2877"),c=Object(r["a"])(l,i,s,!1,null,null,null);e["default"]=c.exports}}]);