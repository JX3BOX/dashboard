(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3db0fb27"],{"2ede":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-dashboard m-dashboard-filter"},[t._m(0),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-content"},[e("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入敏感词 / 粘贴段落"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),t.textarea?[t.content?e("el-card",{attrs:{shadow:"never"}},[e("el-divider",{attrs:{"content-position":"left"}},[e("i",{staticClass:"el-icon-chat-line-round"}),t._v(" 显示内容")]),e("span",{domProps:{innerHTML:t._s(t.content)}})],1):t._e(),t.reason&&t.reason.length&&t.isSuperAuth?e("el-card",{attrs:{shadow:"never"}},[e("el-divider",{attrs:{"content-position":"left"}},[e("i",{staticClass:"el-icon-warning-outline"}),t._v(" 被屏蔽原因")]),e("div",{staticClass:"m-item"},t._l(t.reason,(function(n,a){return e("span",{key:a},[e("strong",[t._v(t._s(a+1)+" . ")]),e("span",{domProps:{innerHTML:t._s(n)}})])})),0)],1):e("span",[e("el-tag",{attrs:{type:"success"}},[t._v("可正常发布 "),e("i",{staticClass:"el-icon-success"})])],1)]:t._e()],2)])},s=[function(){var t=this,e=t._self._c;return e("h2",{staticClass:"u-title"},[e("i",{staticClass:"el-icon-odometer"}),t._v(" 敏感词测试")])}],i=(n("d3b7"),n("4de4"),n("8a7f")),r=n("2ef0"),o=n("c9d2"),c={name:"filter",props:[],data:function(){return{loading:!1,textarea:"",content:"",reason:[]}},computed:{isSuperAuth:function(){return o["a"].isSuperAuthor()}},methods:{filter:function(){var t=this;this.loading=!0,Object(i["b"])({text:this.textarea}).then((function(e){t.content=e.data.data.content||"",t.reason=e.data.data.reason.split(",").filter(Boolean)||[]})).finally((function(){t.loading=!1}))}},watch:{textarea:Object(r["debounce"])((function(t){t?this.filter():(this.content="",this.reason=[])}),500)}},u=c,l=(n("5419"),n("2877")),d=Object(l["a"])(u,a,s,!1,null,"dcf3264c",null);e["default"]=d.exports},5419:function(t,e,n){"use strict";n("5562")},5562:function(t,e,n){},"8a7f":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o}));var a=n("41cb");function s(t){return Object(a["b"])().post("/api/cms/contract-author/log",t)}function i(){return Object(a["b"])().get("/api/cms/contract-author/log/mine")}function r(t){return Object(a["b"])().get("/api/cms/user/is_super_author/"+t)}function o(t){return Object(a["b"])().post("/api/cms/system/seasun/filter",t)}}}]);
//# sourceMappingURL=chunk-3db0fb27.ddaa1d45.js.map