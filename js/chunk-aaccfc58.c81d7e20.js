(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aaccfc58"],{"3ed1":function(t,e,n){},4039:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uc",{staticClass:"m-dashboard-honor m-dashboard-skin",attrs:{icon:"el-icon-brush",title:"主题装扮","tab-list":t.tabList},scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{staticClass:"u-link el-button el-button--default el-button--mini is-round is-plain",attrs:{href:"/vip/mall?category=virtual",target:"_blank"}},[n("i",{staticClass:"el-icon-shopping-cart-2"}),t._v(" 前往获取装扮")])]},proxy:!0}])},[t._v(" 敬请期待。 ")])},o=[],c=n("b547"),l=n("46c1"),i={name:"honor",props:[],data:function(){return{tabList:l["c"]}},computed:{},methods:{},mounted:function(){},components:{uc:c["a"]}},s=i,r=n("2877"),u=Object(r["a"])(s,a,o,!1,null,null,null);e["default"]=u.exports},"46c1":function(t){t.exports=JSON.parse('{"c":[{"name":"frame","icon":"el-icon-camera","label":"头像框"},{"name":"theme","icon":"el-icon-orange","label":"主题风格"},{"name":"honor","icon":"el-icon-collection-tag","label":"称号"},{"name":"emotion","icon":"el-icon-picture-outline-round","label":"表情包"}],"b":[{"name":"profile","icon":"el-icon-user","label":"基本资料"},{"name":"avatar","icon":"el-icon-camera","label":"修改头像"},{"name":"pwd","icon":"el-icon-lock","label":"修改密码"},{"name":"email","icon":"el-icon-message","label":"邮箱设置"},{"name":"connect","icon":"el-icon-connection","label":"绑定账号"},{"name":"address","icon":"el-icon-map-location","label":"地址管理"}],"a":[{"name":"mall","icon":"el-icon-shopping-bag-1","label":"商城订单"},{"name":"orders","icon":"el-icon-shopping-bag-2","label":"系统订单"}]}')},b547:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-dashboard-profile m-profile"},[n("h2",{staticClass:"u-title"},[n("i",{class:t.icon}),t._v(" "+t._s(t.title)+" "),t._t("header")],2),n("tabs",{attrs:{tabs:t.tabList}}),t._t("default")],2)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(e){return n("el-tab-pane",{key:e.name,attrs:{name:e.name}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{class:e.icon}),t._v(" "+t._s(e.label))])])})),1)},l=[],i=(n("b0c0"),{name:"",props:{tabs:{type:Array,default:function(){return[]}}},data:function(){return{active:""}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),s=i,r=n("2877"),u=Object(r["a"])(s,c,l,!1,null,null,null),b=u.exports,m=n("46c1"),d={name:"uc",props:{icon:{type:String,default:"el-icon-user"},title:{type:String,default:"我的资料"},tabList:{type:Array,default:function(){return m["b"]}}},data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:b}},p=d,f=(n("bdd0"),Object(r["a"])(p,a,o,!1,null,null,null));e["a"]=f.exports},bdd0:function(t,e,n){"use strict";n("3ed1")}}]);
//# sourceMappingURL=chunk-aaccfc58.c81d7e20.js.map