(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb529972"],{"3c92":function(t,e,a){"use strict";a("68b3")},"46c1":function(t){t.exports=JSON.parse('{"e":[{"name":"frame","icon":"el-icon-camera","label":"头像框"},{"name":"theme","icon":"el-icon-orange","label":"主题风格"},{"name":"honor","icon":"el-icon-collection-tag","label":"称号"},{"name":"emotion","icon":"el-icon-picture-outline-round","label":"表情包"}],"d":[{"name":"profile","icon":"el-icon-user","label":"基本资料"},{"name":"avatar","icon":"el-icon-camera","label":"修改头像"},{"name":"pwd","icon":"el-icon-lock","label":"修改密码"},{"name":"notice","icon":"el-icon-message","label":"通知中心"},{"name":"connect","icon":"el-icon-connection","label":"绑定账号"},{"name":"address","icon":"el-icon-map-location","label":"地址管理"}],"b":[{"name":"mall","icon":"el-icon-shopping-bag-1","label":"商城订单"},{"name":"orders","icon":"el-icon-shopping-bag-2","label":"系统订单"}],"c":[{"name":"msg","icon":"el-icon-message","label":"消息"},{"name":"letter","icon":"el-icon-chat-dot-square","label":"私信"}],"a":[{"name":"certification","icon":"el-icon-collection","label":"电子证书"}]}')},"4bdb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("uc",{staticClass:"m-dashboard-frame m-dashboard-skin",attrs:{icon:"el-icon-magic-stick",title:"魔盒藏品","tab-list":t.tabList}},[e("div",{staticClass:"m-cert-list"},[e("el-row",{attrs:{gutter:32}},t._l(t.list,(function(n,i){return e("el-col",{key:i,attrs:{xs:24,sm:12,md:8,xl:6}},[e("a",{staticClass:"m-cert-item",attrs:{href:t.getCertLink(n),target:"_blank"}},[e("div",{staticClass:"u-img",style:{backgroundImage:"url(".concat(t.getImgPath(n.team_certificate.rank_id),")")}}),e("div",{staticClass:"m-info"},[e("div",{staticClass:"u-title"},[t._v(t._s(n.team_certificate.rank_name))]),e("div",{staticClass:"u-tip"},[t._v("团队："+t._s(n.team_certificate.team_name))]),e("div",{staticClass:"u-tip"},[t._v("服务器："+t._s(n.team_certificate.team_server))]),e("div",{staticClass:"u-tip"},[t._v("团长："+t._s(n.team_certificate.leader))]),e("div",{staticClass:"u-tip"},[t._v("获得时间："+t._s(n.team_certificate.awardtime))])]),e("img",{staticClass:"u-icon",attrs:{src:a("8bc2"),alt:""}})])])})),1),e("el-pagination",{staticClass:"m-cert-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1)])},i=[],c=(a("99af"),a("b547")),s=a("46c1"),o=a("41cb");function l(t){return Object(o["e"])().get("/api/team/team-certification-record/list",{params:t})}a("c9d2");var r=a("65c2"),u={name:"treasure",components:{uc:c["a"]},props:[],data:function(){return{tabList:s["a"],page:1,per:12,total:0,list:[]}},computed:{},methods:{load:function(){var t=window.innerWidth;t<1920&&(this.per=10),this.getCertificateList()},getCertificateList:function(){var t=this;l({index:this.page,pageSize:this.per}).then((function(e){t.total=e.data.data.page.total,t.list=e.data.data.list}))},handleCurrentChange:function(t){this.page=t,this.getCertificateList()},goDetail:function(t){window.location.href=t},getImgPath:function(t){var e="";return e="design/certification/CertCover_jdt".concat(t<10?"0"+t:t,".png"),r["__cdn"]+e},getCertLink:function(t){return"/author/".concat(t.user_id,"/certificate/").concat(t.id)}},mounted:function(){this.load()}},m=u,d=(a("95ac2"),a("2877")),p=Object(d["a"])(m,n,i,!1,null,null,null);e["default"]=p.exports},"62a4":function(t,e,a){},"68b3":function(t,e,a){},"8bc2":function(t,e,a){t.exports=a.p+"img/CI_icon.b2567711.svg"},"95ac2":function(t,e,a){"use strict";a("62a4")},b547:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-dashboard-profile m-profile"},[e("h2",{staticClass:"u-title"},[e("i",{class:t.icon}),t._v(" "+t._s(t.title)+" "),t._t("header")],2),e("tabs",{attrs:{tabs:t.tabList}}),t._t("default")],2)},i=[],c=(a("b0c0"),function(){var t=this,e=t._self._c;return e("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(a){return e("el-tab-pane",{key:a.name,attrs:{name:a.name}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"u-tab-icon",class:a.icon}),t._v(" "+t._s(a.label))])])})),1)}),s=[],o=(a("14d9"),{name:"",props:{tabs:{type:Array,default:function(){return[]}}},data:function(){return{active:""}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),l=o,r=a("2877"),u=Object(r["a"])(l,c,s,!1,null,null,null),m=u.exports,d=a("46c1"),p={name:"uc",props:{icon:{type:String,default:"el-icon-user"},title:{type:String,default:"我的资料"},tabList:{type:Array,default:function(){return d["d"]}}},data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:m}},b=p,f=(a("3c92"),Object(r["a"])(b,n,i,!1,null,null,null));e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-bb529972.c3323088.js.map