(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8046cfac"],{1976:function(t,e,a){"use strict";a("cdb3")},"39a2":function(t,e,a){"use strict";a.r(e);a("9911");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-feedback-index"},[e("section",{staticClass:"m-feedback-box"},[e("el-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("el-tab-pane",{attrs:{label:"提交反馈",name:"submit",lazy:""}},[e("add")],1),e("el-tab-pane",{attrs:{label:"我的反馈",name:"myfeedback",lazy:""}},["myfeedback"===t.active?e("list"):t._e()],1),t.isTeammate?e("el-tab-pane",{attrs:{label:"待处理",name:"pending",lazy:""}},["pending"===t.active?e("pending",{attrs:{"only-me":t.onlyMe}}):t._e()],1):t._e()],1),t.isTeammate&&"pending"===t.active?e("el-checkbox",{staticClass:"u-only-check",model:{value:t.onlyMe,callback:function(e){t.onlyMe=e},expression:"onlyMe"}},[t._v("指派给我的")]):t._e()],1),e("aside",{staticClass:"m-feedback-aside"},[e("el-button",{staticClass:"u-btn",attrs:{size:"small",type:"warning",plain:""},on:{click:t.handleEraseClick}},[t._v("注销账号")]),e("div",{staticClass:"m-feedback-faq"},[t._m(0),t._l(t.faq.menus,(function(a){return e("div",{key:a.link,staticClass:"u-list"},[e("a",{staticClass:"u-item",attrs:{href:a.link}},[t._v(t._s(a.label))])])}))],2)],1)])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-title"},[e("i",{staticClass:"el-icon-question"}),t._v(" FAQ")])}],s=(a("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-add-feedback"},[e("div",{staticClass:"type-box"},[e("el-form",{attrs:{inline:""}},[e("el-form-item",{attrs:{label:"来源"}},[e("el-select",{attrs:{placeholder:"请选择问题来源",size:"small"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.types,(function(t,a){return e("el-option",{key:a,attrs:{value:a,label:t}})})),1)],1),e("el-form-item",{attrs:{label:"类别"}},[e("el-select",{attrs:{placeholder:"请选择问题类别",size:"small"},model:{value:t.form.subtype,callback:function(e){t.$set(t.form,"subtype",e)},expression:"form.subtype"}},t._l(t.subtypes,(function(t,a){return e("el-option",{key:a,attrs:{value:a,label:t}})})),1)],1)],1)],1),e("div",{staticClass:"m-content"},[e("el-input",{attrs:{type:"textarea",rows:10,placeholder:"输入反馈内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("div",{staticClass:"m-feedback-actions"},[e("div",{staticClass:"m-feedback-attachment"},[e("el-upload",{ref:"upload",staticClass:"u-upload avatar-uploader",attrs:{action:t.url,"list-type":"picture-card","on-remove":t.remove,"on-success":t.done,"on-error":t.fail,"on-exceed":t.exceed,"before-upload":t.beforeUpload,limit:t.max,title:"上传图片","with-credentials":"",accept:"image/jpg, image/jpeg, image/gif, image/png, image/bmp",size:"small",multiple:""}},[e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("div",{staticClass:"m-feedback-visible"},[e("span",{staticClass:"u-label"},[t._v("是否公开：")]),e("el-checkbox",{staticClass:"u-checkbox",attrs:{"true-label":1,"false-label":0},model:{value:t.form.public,callback:function(e){t.$set(t.form,"public",e)},expression:"form.public"}})],1),e("div",{staticClass:"m-feedback-btn"},[e("el-button",{staticClass:"u-submit",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:!t.canSubmit,loading:t.loading},on:{click:t.submit}},[t._v("提交")])],1)])])}),i=[],c=a("5530"),o=a("2909"),l=(a("a9e3"),a("99af"),a("4de4"),a("d3b7"),a("4437")),u=a("65c2"),f=a("b4fa"),d=u["__cms"],p=d+"api/cms/upload",b={name:"AddFeedback",props:{max:{type:Number,default:6}},data:function(){return{types:l["e"],subtypes:l["d"],form:{type:"",subtype:"",content:"",public:0},url:p,imgs:[],loading:!1}},computed:{canSubmit:function(){return this.form.type&&this.form.subtype&&this.form.content},client:function(){return this.$store.state.client},refer:function(){var t,e;return null!==(t=this.$route.query)&&void 0!==t&&t.refer?decodeURIComponent(null===(e=this.$route.query)||void 0===e?void 0:e.refer):""}},methods:{beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type||"image/bmp"===t.type;if(!e)return this.$message.error("上传图片只能是 JPG/PNG/GIF/BMP 格式!"),!1},done:function(t){this.imgs=[].concat(Object(o["a"])(this.imgs),[t.data[0]])},fail:function(t){try{var e=JSON.parse(t.message);this.$message.error("[".concat(e.code,"]").concat(e.msg))}catch(a){this.$message.error("网络请求异常")}},exceed:function(){this.$message.warning("上传的图片个数最多为".concat(this.max,"个"))},remove:function(t){this.imgs=this.imgs.filter((function(e){var a;return e!==(null===t||void 0===t||null===(a=t.response)||void 0===a?void 0:a.data[0])}))},submit:function(){var t=this;this.loading=!0;var e=Object(c["a"])(Object(c["a"])({},this.form),{},{images:this.imgs,client:this.client});this.refer&&(e.refer=this.refer),Object(f["a"])(e).then((function(e){t.$message.success("提交成功"),t.$refs.upload.clearFiles(),t.form=t.$options.data().form,t.imgs=[]})).finally((function(){t.loading=!1}))}}},m=b,g=(a("1976"),a("2877")),v=Object(g["a"])(m,s,i,!1,null,"78067f30",null),h=v.exports,y=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-feedback-list"},[e("el-table",{attrs:{data:t.data,"highlight-current-row":"",size:"small","row-class-name":"u-row"},on:{"row-click":t.viewFeedback}},[e("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",{staticClass:"u-status",style:{backgroundColor:t.statusColors[n.status]}},[t._v(t._s(t.statusMap[n.status]))])]}}])}),e("el-table-column",{attrs:{label:"客户端",prop:"client"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",{staticClass:"u-client",class:"i-client-"+n.client},[t._v(t._s(t.formatClient(n.client)))])]}}])}),e("el-table-column",{attrs:{label:"来源",prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.types[a.type])+" ")]}}])}),e("el-table-column",{attrs:{label:"类型",prop:"subtype"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.subtypes[a.subtype])+" ")]}}])}),e("el-table-column",{attrs:{label:"提交时间",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.formatTime(a.created_at))+" ")]}}])}),e("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("a",{attrs:{href:"/dashboard/feedback/".concat(n.id),target:"_blank"}},[t._v("查看")])]}}])})],1),e("el-pagination",{staticClass:"m-credit-pages m-packet-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.currentChange}})],1)},k=[],_=a("c7eb"),w=a("1da1"),O=a("c1df"),j=a.n(O),C={name:"FeedbackList",data:function(){return{data:[],loading:!1,page:1,per:10,total:0,types:l["e"],subtypes:l["d"],statusMap:l["c"],statusColors:l["b"]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(w["a"])(Object(_["a"])().mark((function e(){var a,n;return Object(_["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,a={pageIndex:t.page,pageSize:t.per},e.next=5,Object(f["c"])(a);case 5:n=e.sent,t.data=n.data.data.list||[],t.total=n.data.data.page.total,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},formatTime:function(t){return j()(t).format("YYYY-MM-DD HH:mm:ss")},formatClient:function(t){var e=t||"std";return"std"===e?"重制":"缘起"},handleView:function(t){this.$router.push({name:"feedback_single",params:{id:t.id}})},currentChange:function(t){this.page=t,this.getData()},viewFeedback:function(t){this.$router.push({name:"feedback_single",params:{id:t.id}})}}},x=C,S=(a("ae47"),Object(g["a"])(x,y,k,!1,null,"36dc3662",null)),P=S.exports,$=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-feedback-list"},[e("el-table",{attrs:{data:t.data,"highlight-current-row":"",size:"small","row-class-name":"u-row"},on:{"row-click":t.viewFeedback,"filter-change":t.filterChange}},[e("el-table-column",{attrs:{label:"状态",prop:"status","column-key":"status",filters:t.filterOptions.status,"filter-multiple":!1},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",{staticClass:"u-status",style:{backgroundColor:t.statusColors[n.status]}},[t._v(t._s(t.statusMap[n.status]))])]}}])}),e("el-table-column",{attrs:{label:"客户端",prop:"client","column-key":"client",filters:t.filterOptions.client,"filter-multiple":!1},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("span",{staticClass:"u-client",class:"i-client-"+n.client},[t._v(t._s(t.formatClient(n.client)))])]}}])}),e("el-table-column",{attrs:{label:"来源",prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.types[a.type])+" ")]}}])}),e("el-table-column",{attrs:{label:"类型",prop:"subtype"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.subtypes[a.subtype])+" ")]}}])}),e("el-table-column",{attrs:{label:"指派给"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[n.assign_user&&n.assign_user.length?e("div",{staticClass:"m-assign"},t._l(n.assign_user,(function(a){return e("a",{key:a.id,staticClass:"u-assign",attrs:{href:t.authorLink(a.id),target:"_blank"}},[e("img",{staticClass:"u-assign-avatar",attrs:{src:t.showAvatar(a.avatar)}}),e("span",{staticClass:"u-assign-name"},[t._v(t._s(a.display_name))])])})),0):t._e()]}}])}),e("el-table-column",{attrs:{label:"提交时间",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.formatTime(a.created_at))+" ")]}}])}),e("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleView(n)}}},[t._v("查看")])]}}])})],1),e("el-pagination",{staticClass:"m-credit-pages m-packet-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.currentChange}})],1)},D=[];function M(t){if(Array.isArray(t))return t}a("a4d3"),a("e01a"),a("d28b"),a("3ca3"),a("ddb0");function z(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,s,i,c=[],o=!0,l=!1;try{if(s=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;o=!1}else for(;!(o=(n=s.call(a)).done)&&(c.push(n.value),c.length!==e);o=!0);}catch(u){l=!0,r=u}finally{try{if(!o&&null!=a["return"]&&(i=a["return"](),Object(i)!==i))return}finally{if(l)throw r}}return c}}var F=a("06c5");a("d9e2");function q(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(t,e){return M(t)||z(t,e)||Object(F["a"])(t,e)||q()}a("159b"),a("4fad");var A=a("85e4"),I=a("c9d2"),E={name:"pendingList",props:{onlyMe:{type:Boolean,default:!0}},data:function(){return{data:[],loading:!1,page:1,per:10,total:0,filterOptions:l["a"],filters:{status:"",client:""},types:l["e"],subtypes:l["d"],statusMap:l["c"],statusColors:l["b"]}},mounted:function(){this.getData()},computed:{user:function(){return I["a"].getInfo()}},watch:{onlyMe:function(){this.page=1,this.getData()}},methods:{showAvatar:A["showAvatar"],authorLink:A["authorLink"],getData:function(){var t=this;return Object(w["a"])(Object(_["a"])().mark((function e(){var a,n;return Object(_["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,a=Object(c["a"])({pageIndex:t.page,pageSize:t.per},t.filters),t.onlyMe&&(a.assign=t.user.uid),e.next=6,Object(f["d"])(a);case 6:n=e.sent,t.data=n.data.data.list||[],t.total=n.data.data.page.total,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0);case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()},formatTime:function(t){return j()(t).format("YYYY-MM-DD HH:mm:ss")},formatClient:function(t){var e=t||"std";return"std"===e?"重制":"缘起"},handleView:function(t){this.$router.push({name:"feedback_single",params:{id:t.id}})},currentChange:function(t){this.page=t,this.getData()},viewFeedback:function(t){window.open("/feedback/"+t.id,"_blank")},filterChange:function(t){var e=this;Object.entries(t).forEach((function(t){var a=T(t,2),n=a[0],r=a[1];e.filters[n]=r.length?r[0]:""})),this.getData()}}},Y=E,N=(a("bddd"),Object(g["a"])(Y,$,D,!1,null,"c105bdba",null)),J=N.exports,L=a("cc9a"),H={name:"FeedbackIndex",components:{add:h,list:P,pending:J},data:function(){return{active:"submit",faq:{},onlyMe:!0}},computed:{isTeammate:function(){return this.$store.state.isTeammate}},watch:{"$route.query":{deep:!0,immediate:!0,handler:function(t){this.active=t.tab||"submit"}},active:function(t){this.$router.push({path:this.$route.path,query:{tab:t}})}},mounted:function(){this.getFAQ()},methods:{handleEraseClick:function(){this.$router.push({name:"feedback_erase"})},getFAQ:function(){var t=this;Object(L["c"])({names:["feedback_faq"]}).then((function(e){t.faq=e.feedback_faq}))}}},B=H,G=(a("42f5"),Object(g["a"])(B,n,r,!1,null,"5fc067c5",null));e["default"]=G.exports},"42f5":function(t,e,a){"use strict";a("a479")},4437:function(t){t.exports=JSON.parse('{"e":{"1":"魔盒官网","2":"魔盒移动（小程序/APP）","3":"魔盒助手（客户端）","4":"剑三游戏客户端","5":"剑三游戏插件","6":"其它"},"d":{"1":"Bug异常","2":"建议","3":"举报","4":"其它"},"c":{"0":"待处理","1":"已指派","2":"已处理","3":"已结束"},"b":{"0":"#0366d6","1":"#fba524","2":"#49c10f","3":"#909399"},"a":{"status":[{"text":"待处理","value":0},{"text":"已指派","value":1},{"text":"已处理","value":2},{"text":"已结束","value":3}],"client":[{"text":"重制","value":"std"},{"text":"缘起","value":"origin"}]}}')},"4fad":function(t,e,a){var n=a("23e7"),r=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})},"51eb":function(t,e,a){"use strict";var n=a("825a"),r=a("485a"),s=TypeError;t.exports=function(t){if(n(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw s("Incorrect hint");return r(this,t)}},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("14d9"),a("159b"),a("dbb4");var n=a("ade3");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"6f53":function(t,e,a){var n=a("83ab"),r=a("e330"),s=a("df75"),i=a("fc6a"),c=a("d1e7").f,o=r(c),l=r([].push),u=function(t){return function(e){var a,r=i(e),c=s(r),u=c.length,f=0,d=[];while(u>f)a=c[f++],n&&!o(r,a)||l(d,t?[a,r[a]]:r[a]);return d}};t.exports={entries:u(!0),values:u(!1)}},8172:function(t,e,a){var n=a("e065"),r=a("57b9");n("toPrimitive"),r()},8287:function(t,e,a){},a479:function(t,e,a){},ade3:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("53ca");a("8172"),a("efec"),a("a4d3"),a("e01a"),a("d3b7"),a("d9e2"),a("a9e3");function r(t,e){if("object"!==Object(n["a"])(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,e||"default");if("object"!==Object(n["a"])(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t){var e=r(t,"string");return"symbol"===Object(n["a"])(e)?e:String(e)}function i(t,e,a){return e=s(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},ae47:function(t,e,a){"use strict";a("8287")},b4fa:function(t,e,a){"use strict";a.d(e,"e",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return i})),a.d(e,"f",(function(){return l}));var n=a("41cb");function r(t){return Object(n["e"])().post("/api/im-sure-leave-jx3box",{password:t})}function s(t){return Object(n["d"])().post("/api/miscfeedback",t)}function i(t){return Object(n["d"])().get("/api/miscfeedback",{params:t})}function c(t){return Object(n["d"])().get("/api/miscfeedback/my/list",{params:t})}function o(t){return Object(n["d"])().get("/api/miscfeedback/".concat(t))}function l(t,e){return Object(n["d"])().patch("/api/miscfeedback/".concat(t),e)}},b562:function(t,e,a){},b64b:function(t,e,a){var n=a("23e7"),r=a("7b0b"),s=a("df75"),i=a("d039"),c=i((function(){s(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return s(r(t))}})},bddd:function(t,e,a){"use strict";a("b562")},cdb3:function(t,e,a){},dbb4:function(t,e,a){var n=a("23e7"),r=a("83ab"),s=a("56ef"),i=a("fc6a"),c=a("06cf"),o=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=i(t),r=c.f,l=s(n),u={},f=0;while(l.length>f)a=r(n,e=l[f++]),void 0!==a&&o(u,e,a);return u}})},e439:function(t,e,a){var n=a("23e7"),r=a("d039"),s=a("fc6a"),i=a("06cf").f,c=a("83ab"),o=!c||r((function(){i(1)}));n({target:"Object",stat:!0,forced:o,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},efec:function(t,e,a){var n=a("1a2d"),r=a("cb2d"),s=a("51eb"),i=a("b622"),c=i("toPrimitive"),o=Date.prototype;n(o,c)||r(o,c,s)}}]);
//# sourceMappingURL=chunk-8046cfac.ce175468.js.map