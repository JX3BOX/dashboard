(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f0c78c5"],{"00b4":function(t,e,a){"use strict";a("ac1f");var n=a("23e7"),r=a("c65b"),s=a("e330"),i=a("1626"),o=a("861d"),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=TypeError,u=s(/./.test);n({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=this.exec;if(!i(e))return u(this,t);var a=r(e,this,t);if(null!==a&&!o(a))throw new l("RegExp exec method returned something other than an Object or null");return!!a}})},"056b":function(t,e,a){},"39a2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-feedback-index"},[a("section",{staticClass:"m-feedback-box"},[a("el-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("el-tab-pane",{attrs:{label:"提交反馈",name:"submit",lazy:""}},[a("add")],1),a("el-tab-pane",{attrs:{label:"我的反馈",name:"myfeedback",lazy:""}},["myfeedback"===t.active?a("list"):t._e()],1),a("el-tab-pane",{attrs:{label:"待处理",name:"pending",lazy:""}},["pending"===t.active?a("pending"):t._e()],1)],1)],1),a("aside",{staticClass:"m-feedback-aside"},[a("el-button",{staticClass:"u-btn",attrs:{size:"small",type:"warning",plain:""},on:{click:t.handleEraseClick}},[t._v("注销账号")]),a("div",{staticClass:"m-feedback-faq"},[t._m(0),t._l(t.faq.menus,(function(e){return a("div",{key:e.link,staticClass:"u-list"},[a("a",{staticClass:"u-item",attrs:{href:e.link}},[t._v(t._s(e.label))])])}))],2)],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"u-title"},[a("i",{staticClass:"el-icon-question"}),t._v(" FAQ")])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-add-feedback"},[a("div",{staticClass:"type-box"},[a("div",{staticClass:"type-box-item"},[a("span",{staticClass:"u-label"},[t._v("来源：")]),a("el-select",{attrs:{placeholder:"请选择问题来源",size:"small"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.types,(function(t,e){return a("el-option",{key:e,attrs:{value:e,label:t}})})),1)],1),a("div",{staticClass:"type-box-item"},[a("span",{staticClass:"u-label"},[t._v("类别：")]),a("el-select",{attrs:{placeholder:"请选择问题类别",size:"small"},model:{value:t.form.subtype,callback:function(e){t.$set(t.form,"subtype",e)},expression:"form.subtype"}},t._l(t.subtypes,(function(t,e){return a("el-option",{key:e,attrs:{value:e,label:t}})})),1)],1)]),a("div",{staticClass:"m-content"},[a("el-input",{attrs:{type:"textarea",rows:10,placeholder:"输入反馈内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),a("div",{staticClass:"m-feedback-actions"},[a("div",{staticClass:"m-feedback-attachment"},[a("el-upload",{ref:"upload",staticClass:"u-upload avatar-uploader",attrs:{action:t.url,"list-type":"picture-card","on-remove":t.remove,"on-success":t.done,"on-error":t.fail,"on-exceed":t.exceed,"before-upload":t.beforeUpload,limit:t.max,title:"上传图片","with-credentials":"",accept:"image/jpg, image/jpeg, image/gif, image/png, image/bmp",size:"small",multiple:""}},[a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("div",{staticClass:"m-feedback-visible"},[a("span",{staticClass:"u-label"},[t._v("是否公开：")]),a("el-checkbox",{staticClass:"u-checkbox",attrs:{"true-label":1,"false-label":0},model:{value:t.form.public,callback:function(e){t.$set(t.form,"public",e)},expression:"form.public"}})],1),a("div",{staticClass:"m-feedback-btn"},[a("el-button",{staticClass:"u-submit",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:!t.canSubmit,loading:t.loading},on:{click:t.submit}},[t._v("提交")])],1)])])},i=[],o=a("5530");function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function l(t){if(Array.isArray(t))return c(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function u(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("fb6a"),a("b0c0"),a("ac1f"),a("00b4");function d(t,e){if(t){if("string"===typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}a("d9e2");function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return l(t)||u(t)||d(t)||p()}a("a9e3"),a("99af"),a("4de4");var b=a("4437"),m=a("65c2"),g=a("b4fa"),v=m["__cms"],h=v+"api/cms/upload",y={name:"AddFeedback",props:{max:{type:Number,default:6}},data:function(){return{types:b["d"],subtypes:b["c"],form:{type:"",subtype:"",content:"",public:0},url:h,imgs:[],loading:!1}},computed:{canSubmit:function(){return this.form.type&&this.form.subtype&&this.form.content},client:function(){return this.$store.state.client},refer:function(){var t,e;return null!==(t=this.$route.query)&&void 0!==t&&t.refer?decodeURIComponent(null===(e=this.$route.query)||void 0===e?void 0:e.refer):""}},methods:{beforeUpload:function(t){console.log(t);var e="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type||"image/bmp"===t.type;if(!e)return this.$message.error("上传图片只能是 JPG/PNG/GIF/BMP 格式!"),!1},done:function(t){console.log(t),this.imgs=[].concat(f(this.imgs),[t.data[0]])},fail:function(t){try{var e=JSON.parse(t.message);this.$message.error("[".concat(e.code,"]").concat(e.msg))}catch(a){this.$message.error("网络请求异常")}},exceed:function(){this.$message.warning("上传的图片个数最多为".concat(this.max,"个"))},remove:function(t){this.imgs=this.imgs.filter((function(e){var a;return e!==(null===t||void 0===t||null===(a=t.response)||void 0===a?void 0:a.data[0])}))},submit:function(){var t=this;this.loading=!0;var e=Object(o["a"])(Object(o["a"])({},this.form),{},{images:this.imgs,client:this.client});this.refer&&(e.refer=this.refer),Object(g["a"])(e).then((function(e){t.$message.success("提交成功"),t.$refs.upload.clearFiles(),t.form=t.$options.data().form,t.imgs=[]})).finally((function(){t.loading=!1}))}}},k=y,_=(a("c5ff"),a("2877")),w=Object(_["a"])(k,s,i,!1,null,"027b4590",null),C=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-feedback-list"},[a("el-table",{attrs:{data:t.data,"highlight-current-row":"",size:"small","row-class-name":"u-row"},on:{"row-click":t.viewFeedback}},[a("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{staticClass:"u-status",style:{backgroundColor:t.statusColors[n.status]}},[t._v(t._s(t.statusMap[n.status]))])]}}])}),a("el-table-column",{attrs:{label:"客户端",prop:"client"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{staticClass:"u-client",class:"i-client-"+n.client},[t._v(t._s(t.formatClient(n.client)))])]}}])}),a("el-table-column",{attrs:{label:"来源",prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.types[a.type])+" ")]}}])}),a("el-table-column",{attrs:{label:"类型",prop:"subtype"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.subtypes[a.subtype])+" ")]}}])}),a("el-table-column",{attrs:{label:"提交时间",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.formatTime(a.created_at))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleView(n)}}},[t._v("查看")])]}}])})],1),a("el-pagination",{staticClass:"m-credit-pages m-packet-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.currentChange}})],1)},O=[],j=a("c7eb"),$=a("1da1"),S=a("c1df"),D=a.n(S),P={name:"FeedbackList",data:function(){return{data:[],loading:!1,page:1,per:10,total:0,types:b["d"],subtypes:b["c"],statusMap:b["b"],statusColors:b["a"]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object($["a"])(Object(j["a"])().mark((function e(){var a,n;return Object(j["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,a={pageIndex:t.page,pageSize:t.per},e.next=5,Object(g["c"])(a);case 5:n=e.sent,t.data=n.data.data.list||[],t.total=n.data.data.page.total,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},formatTime:function(t){return D()(t).format("YYYY-MM-DD HH:mm:ss")},formatClient:function(t){var e=t||"std";return"std"===e?"重制":"缘起"},handleView:function(t){this.$router.push({name:"feedback_single",params:{id:t.id}})},currentChange:function(t){this.page=t,this.getData()},viewFeedback:function(t){this.$router.push({name:"feedback_single",params:{id:t.id}})}}},z=P,A=(a("d167"),Object(_["a"])(z,x,O,!1,null,"a6a4f2d8",null)),E=A.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-feedback-list"},[a("el-table",{attrs:{data:t.data,"highlight-current-row":"",size:"small","row-class-name":"u-row"},on:{"row-click":t.viewFeedback}},[a("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{staticClass:"u-status",style:{backgroundColor:t.statusColors[n.status]}},[t._v(t._s(t.statusMap[n.status]))])]}}])}),a("el-table-column",{attrs:{label:"客户端",prop:"client"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{staticClass:"u-client",class:"i-client-"+n.client},[t._v(t._s(t.formatClient(n.client)))])]}}])}),a("el-table-column",{attrs:{label:"来源",prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.types[a.type])+" ")]}}])}),a("el-table-column",{attrs:{label:"类型",prop:"subtype"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.subtypes[a.subtype])+" ")]}}])}),a("el-table-column",{attrs:{label:"提交时间",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.formatTime(a.created_at))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleView(n)}}},[t._v("查看")])]}}])})],1),a("el-pagination",{staticClass:"m-credit-pages m-packet-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.currentChange}})],1)},q=[],M=a("c9d2"),I={name:"FeedbackList",data:function(){return{data:[],loading:!1,page:1,per:10,total:0,types:b["d"],subtypes:b["c"],statusMap:b["b"],statusColors:b["a"]}},mounted:function(){this.getData()},computed:{user:function(){return M["a"].getInfo()}},methods:{getData:function(){var t=this;return Object($["a"])(Object(j["a"])().mark((function e(){var a,n;return Object(j["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,a={pageIndex:t.page,pageSize:t.per,user_id:t.user.uid},e.next=5,Object(g["d"])(a);case 5:n=e.sent,t.data=n.data.data.list||[],t.total=n.data.data.page.total,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},formatTime:function(t){return D()(t).format("YYYY-MM-DD HH:mm:ss")},formatClient:function(t){var e=t||"std";return"std"===e?"重制":"缘起"},handleView:function(t){this.$router.push({name:"feedback_single",params:{id:t.id}})},currentChange:function(t){this.page=t,this.getData()},viewFeedback:function(t){this.$router.push({name:"feedback_single",params:{id:t.id}})}}},T=I,Y=(a("62d3"),Object(_["a"])(T,F,q,!1,null,"45b7e0ce",null)),N=Y.exports,H=a("cc9a"),J={name:"FeedbackIndex",components:{add:C,list:E,pending:N},data:function(){return{active:"submit",faq:{}}},computed:{isTeammate:function(){return this.$store.state.isTeammate}},watch:{"$route.query":{deep:!0,immediate:!0,handler:function(t){this.active=t.tab||"submit"}},active:function(t){this.$router.push({path:this.$route.path,query:{tab:t}})}},mounted:function(){this.getFAQ()},methods:{handleEraseClick:function(){this.$router.push({name:"feedback_erase"})},getFAQ:function(){var t=this;Object(H["c"])({names:["feedback_faq"]}).then((function(e){t.faq=e.feedback_faq}))}}},U=J,V=(a("4e4a"),Object(_["a"])(U,n,r,!1,null,"3ca2f8eb",null));e["default"]=V.exports},4919:function(t,e,a){},"4e4a":function(t,e,a){"use strict";a("056b")},"540b":function(t,e,a){},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("159b"),a("dbb4");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"62d3":function(t,e,a){"use strict";a("540b")},a630:function(t,e,a){var n=a("23e7"),r=a("4df4"),s=a("1c7e"),i=!s((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:r})},c5ff:function(t,e,a){"use strict";a("4919")},d167:function(t,e,a){"use strict";a("d4ba")},d4ba:function(t,e,a){},dbb4:function(t,e,a){var n=a("23e7"),r=a("83ab"),s=a("56ef"),i=a("fc6a"),o=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=i(t),r=o.f,l=s(n),u={},d=0;while(l.length>d)a=r(n,e=l[d++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var n=a("23e7"),r=a("d039"),s=a("fc6a"),i=a("06cf").f,o=a("83ab"),c=r((function(){i(1)})),l=!o||c;n({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})}}]);
//# sourceMappingURL=chunk-4f0c78c5.a3d4a3e8.js.map