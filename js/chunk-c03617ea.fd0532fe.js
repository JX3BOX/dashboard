(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c03617ea"],{"309b":function(e,t,l){},"81d5":function(e,t,l){"use strict";var a=l("7b0b"),o=l("23cb"),n=l("07fa");e.exports=function(e){var t=a(this),l=n(t),c=arguments.length,i=o(c>1?arguments[1]:void 0,l),s=c>2?arguments[2]:void 0,r=void 0===s?l:o(s,l);while(r>i)t[i++]=e;return t}},"9ff7":function(e,t,l){"use strict";l("309b")},cb29:function(e,t,l){"use strict";var a=l("23e7"),o=l("81d5"),n=l("44d2");a({target:"Array",proto:!0},{fill:o}),n("fill")},f121:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-dashboard m-dashboard-config"},[e._m(0),t("el-form",{staticClass:"m-config-form",attrs:{"label-position":"left","label-width":"120px"}},[t("el-form-item",{attrs:{label:"编辑器模式"}},[t("el-radio-group",{attrs:{size:"small"},model:{value:e.conf.editor_mode,callback:function(t){e.$set(e.conf,"editor_mode",t)},expression:"conf.editor_mode"}},[t("el-radio-button",{attrs:{label:"tinymce"}},[e._v("可视化")]),t("el-radio-button",{attrs:{label:"markdown"}},[e._v("Markdown")])],1)],1),t("el-form-item",{attrs:{label:"评论默认排序"}},[t("el-radio-group",{attrs:{size:"small"},model:{value:e.conf.cmt_order,callback:function(t){e.$set(e.conf,"cmt_order",t)},expression:"conf.cmt_order"}},[t("el-radio-button",{attrs:{label:"DESC"}},[e._v("最新靠前")]),t("el-radio-button",{attrs:{label:"ASC"}},[e._v("最早靠前")])],1)],1),t("el-form-item",{attrs:{label:"接受赠礼"}},[t("el-switch",{attrs:{"active-color":"#13ce66","active-text":"开启","active-value":1,"inactive-value":0},model:{value:e.conf.allow_cny,callback:function(t){e.$set(e.conf,"allow_cny",t)},expression:"conf.allow_cny"}})],1),t("el-form-item",{attrs:{label:"接受虚拟礼物"}},[t("el-switch",{attrs:{"active-color":"#13ce66","active-text":"开启","active-value":1,"inactive-value":0},model:{value:e.conf.allow_gift_of_mall_virtual_goods,callback:function(t){e.$set(e.conf,"allow_gift_of_mall_virtual_goods",t)},expression:"conf.allow_gift_of_mall_virtual_goods"}})],1),t("el-form-item",{attrs:{label:"订阅通知"}},[t("el-switch",{attrs:{"active-color":"#13ce66","active-text":"开启","active-value":1,"inactive-value":0},model:{value:e.conf.feed_message,callback:function(t){e.$set(e.conf,"feed_message",t)},expression:"conf.feed_message"}})],1),t("el-form-item",{attrs:{label:"日历链接"}},[t("el-input",{attrs:{placeholder:"输入日历链接"},model:{value:e.conf.fav_link,callback:function(t){e.$set(e.conf,"fav_link",t)},expression:"conf.fav_link"}})],1),t("el-form-item",{attrs:{label:"客户端偏好"}},[t("el-select",{model:{value:e.conf.default_client,callback:function(t){e.$set(e.conf,"default_client",t)},expression:"conf.default_client"}},[t("el-option",{attrs:{label:"正式服（旗舰版/无界）",value:"std"}}),t("el-option",{attrs:{label:"怀旧服（缘起）",value:"origin"}})],1)],1),t("el-form-item",{attrs:{label:"关注要求"}},[t("el-select",{model:{value:e.conf.rss_need_level,callback:function(t){e.$set(e.conf,"rss_need_level",t)},expression:"conf.rss_need_level"}},e._l(e.levelMap,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{staticClass:"u-btns",attrs:{label:""}},[t("el-button",{staticClass:"u-publish",attrs:{type:"primary"},on:{click:e.submit}},[e._v("保存")])],1)],1)],1)},o=[function(){var e=this,t=e._self._c;return t("h2",{staticClass:"u-title"},[t("i",{staticClass:"el-icon-setting"}),e._v(" 全局设置")])}],n=(l("cb29"),l("d81d"),l("a573"),l("41cb"));function c(){return Object(n["a"])().get("/api/cms/user/conf")}function i(e){return Object(n["a"])().put("/api/cms/user/conf",e)}var s={name:"config",props:[],data:function(){return{conf:{cmt_email:0,cmt_order:"DESC",editor_mode:"tinymce",allow_cny:1,allow_gift_of_mall_virtual_goods:1,feed_message:1,fav_link:"",default_client:"",rss_need_level:1},levelMap:new Array(8).fill(0).map((function(e,t){return{label:"等级".concat(t+1),value:t+1}}))}},computed:{},methods:{loadData:function(){var e=this;c().then((function(t){var l;e.conf=null===t||void 0===t||null===(l=t.data)||void 0===l?void 0:l.data}))},submit:function(){var e=this;i(this.conf).then((function(t){e.$message({message:"设置更新成功",type:"success"})}))}},mounted:function(){this.loadData()},components:{}},r=s,f=(l("9ff7"),l("2877")),u=Object(f["a"])(r,a,o,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-c03617ea.fd0532fe.js.map