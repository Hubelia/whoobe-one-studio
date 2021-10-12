(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37ab9bc2"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"517d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pages?i("div",{staticClass:"relative"},[i("div",{staticClass:"ml-16 py-2 mb-2 w-screen flex items-center"},[i("m-icon",{attrs:{icon:"add",css:"icon-button cursor-pointer text-2xl border",title:"Create a new page"},on:{click:function(e){return t.$editorBus("createPage")}}}),i("m-icon",{attrs:{icon:"download",css:"border icon-button cursor-pointer text-2xl",title:"Import Pages"},on:{click:function(e){return t.importDB()}}}),i("m-icon",{attrs:{icon:"health_and_safety",css:"border icon-button cursor-pointer text-2xl",title:"Backup Pages"},on:{click:function(e){return t.$saveDB()}}}),i("label",[t._v("Category")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"capitalize bg-white rounded",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.category=e.target.multiple?i:i[0]}}},t._l(t.categories,(function(e){return i("option",{domProps:{value:e}},[t._v(t._s(e))])})),0),i("label",[t._v("Search")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{keydown:function(e){return t.searchPages(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),i("div",{staticClass:"absolute right-0 mr-12 flex items-center"},[t._v(" "+t._s(t.skip+1)+" - "+t._s(t.limit+t.skip<t.total?t.limit+t.skip:t.total)+" of "+t._s(t.total))])],1),i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"absolute inset-0 min-h-screen my-12 pb-64 flex flex-row flex-wrap px-6 items-center justify-center cursor-pointer overflow-y-auto"},[t._l(t.pages,(function(e,s){return[i("div",{key:s+t.skip,staticClass:"relative shadow mx-6 my-4 rounded border-t-8 border-gray-500",attrs:{title:e},on:{click:function(i){t.openPage(e),t.$dialogBus("closeDialog"),t.$router.push("editor")}}},[i("div",{staticClass:"flex flex-col items-center justify-center w-80 h-80",attrs:{title:e.name}},[e.image?i("img",{staticClass:"w-full",class:t.getImageInfo(e.image),attrs:{src:t.imagePage(e)}}):t._e()]),i("div",{staticClass:"w-full absolute bottom-0 p-1 bg-gray-200 text-black mt-1"},[t._v(t._s(e.name))])])]}))],2)]),t.filter?t._e():i("div",{staticClass:"absolute left-0 top-0 w-20 h-screen flex flex-col items-start justify-center"},[i("m-icon",{staticClass:"text-6xl",attrs:{icon:"chevron_left"},on:{click:function(e){t.skip>0&&(t.skip=t.skip-t.limit)}}})],1),t.filter?t._e():i("div",{staticClass:"absolute right-0 top-0 w-20 h-screen flex flex-col items-end justify-center"},[i("m-icon",{staticClass:"text-6xl",attrs:{icon:"chevron_right"},on:{click:function(e){t.skip+t.limit<t.total&&(t.skip=t.skip+t.limit)}}})],1)],1):t._e()},a=[],n=(i("b0c0"),i("ac1f"),i("841c"),i("4de4"),i("56d7")),o={name:"PagesGallery",data:function(){return{limit:10,skip:0,search:"",dataset:null,pages:null,total:0,preview:null,currentImage:null,category:"",filter:!1}},computed:{categories:function(){return["","Lead","Landing page","Subscribe page","Header","Footer","Hero","Homepage","Shop","Feature"]}},watch:{category:function(t){var e=this;this.skip=0,this.$getPages(this.category.toLowerCase(),this.limit,this.skip).then((function(t){e.pages=t}))},skip:function(t){var e=this;this.$getPages(this.category.toLowerCase(),this.limit,this.skip).then((function(t){e.pages=t}))}},methods:{getImageInfo:function(t){var e=this.$imageInfo(t),i=e.naturalWidth/e.naturalHeight;return i<1?"object-cover object-top h-60":i>2?"h-20 object-contain":"h-80 object-contain"},imagePage:function(t){return t.image?t.image:"no-image.png"},openPage:function(t){if(this.$attrs.options.mode){if(!this.$store.state.editor.current)return void this.$eventBus("notification","You need to select a block in order to import a new one","error");var e=t.json.blocks;this.$store.state.editor.current.blocks.push(e)}else this.$store.dispatch("setPage",t),this.$store.dispatch("document",t.json.blocks);this.$store.state.desktop.tabs.push({label:t.name,object:t,type:"editor"})},getPages:function(){var t=this;this.$getPages(this.category,this.limit,this.skip).then((function(e){t.pages=e}))},searchPages:function(t){var e=this;13===t.keyCode&&(this.search?this.$searchPages(this.search).then((function(t){e.pages=t,e.total=e.pages.length,e.filter=!0})):(this.skip=0,this.filter=!1,this.getPages()))},importDB:function(){var t=window.confirm("Importing will be overwrite the current database. Continue?");t&&n["dialogBus"].$emit("importDatabase","common/ImportDatabase.vue")}},mounted:function(){var t=this;this.$dbCount().then((function(e){t.total=e})),this.category=this.categories[0],this.$getPages(this.category,this.limit,this.skip).then((function(e){t.pages=e}))}},r=o,c=i("2877"),l=Object(c["a"])(r,s,a,!1,null,null,null);e["default"]=l.exports},"841c":function(t,e,i){"use strict";var s=i("d784"),a=i("825a"),n=i("1d80"),o=i("129f"),r=i("577e"),c=i("dc4a"),l=i("14c3");s("search",(function(t,e,i){return[function(e){var i=n(this),s=void 0==e?void 0:c(e,t);return s?s.call(e,i):new RegExp(e)[t](r(i))},function(t){var s=a(this),n=r(t),c=i(e,s,n);if(c.done)return c.value;var u=s.lastIndex;o(u,0)||(s.lastIndex=0);var h=l(s,n);return o(s.lastIndex,u)||(s.lastIndex=u),null===h?-1:h.index}]}))}}]);