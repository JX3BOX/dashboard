(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62eb4d28"],{"3ed1":function(e,t,n){},"46c1":function(e){e.exports=JSON.parse('{"c":[{"name":"frame","icon":"el-icon-camera","label":"头像框"},{"name":"theme","icon":"el-icon-orange","label":"主题风格"},{"name":"emotion","icon":"el-icon-picture-outline-round","label":"表情包"},{"name":"honor","icon":"el-icon-collection-tag","label":"称号"}],"b":[{"name":"profile","icon":"el-icon-user","label":"基本资料"},{"name":"avatar","icon":"el-icon-camera","label":"修改头像"},{"name":"pwd","icon":"el-icon-lock","label":"修改密码"},{"name":"email","icon":"el-icon-message","label":"邮箱设置"},{"name":"connect","icon":"el-icon-connection","label":"绑定账号"},{"name":"address","icon":"el-icon-map-location","label":"地址管理"}],"a":[{"name":"mall","icon":"el-icon-shopping-bag-1","label":"商城订单"},{"name":"orders","icon":"el-icon-shopping-bag-2","label":"系统订单"}]}')},"9be6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uc",{staticClass:"m-dashboard-frame m-dashboard-skin",attrs:{icon:"el-icon-brush",title:"主题装扮","tab-list":e.tabList},scopedSlots:e._u([{key:"header",fn:function(){return[n("a",{staticClass:"u-link el-button el-button--default el-button--mini is-round is-plain",attrs:{href:"/vip/mall/virtual",target:"_blank"}},[n("i",{staticClass:"el-icon-shopping-cart-2"}),e._v(" 前往获取装扮")])]},proxy:!0}])},[e._v(" 敬请期待新版本。 ")])},l=[],o=n("b547"),i=n("46c1"),c={name:"frame",props:[],data:function(){return{tabList:i["c"]}},computed:{},methods:{},mounted:function(){},components:{uc:o["a"]}},s=c,r=n("2877"),u=Object(r["a"])(s,a,l,!1,null,null,null);t["default"]=u.exports},b547:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-dashboard-profile m-profile"},[n("h2",{staticClass:"u-title"},[n("i",{class:e.icon}),e._v(" "+e._s(e.title)+" "),e._t("header")],2),n("tabs",{attrs:{tabs:e.tabList}}),e._t("default")],2)},l=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":e.changeTab},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,(function(t){return n("el-tab-pane",{key:t.name,attrs:{name:t.name}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{class:t.icon}),e._v(" "+e._s(t.label))])])})),1)},i=[],c=(n("b0c0"),{name:"",props:{tabs:{type:Array,default:function(){return[]}}},data:function(){return{active:""}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),s=c,r=n("2877"),u=Object(r["a"])(s,o,i,!1,null,null,null),b=u.exports,m=n("46c1"),d={name:"uc",props:{icon:{type:String,default:"el-icon-user"},title:{type:String,default:"我的资料"},tabList:{type:Array,default:function(){return m["b"]}}},data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:b}},p=d,f=(n("bdd0"),Object(r["a"])(p,a,l,!1,null,null,null));t["a"]=f.exports},bdd0:function(e,t,n){"use strict";n("3ed1")}}]);
//# sourceMappingURL=chunk-62eb4d28.b208afbc.js.map