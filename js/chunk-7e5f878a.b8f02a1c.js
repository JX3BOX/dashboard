(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e5f878a"],{4426:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-publish-box"},[s("pubheader",{attrs:{name:"物品百科"}},[t._t("header")],2),s("el-form",{staticClass:"m-publish-post"},[s("div",{staticClass:"m-publish-source"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("选择物品 *")]),s("el-select",{staticClass:"u-source-id",attrs:{filterable:"",remote:"",disabled:!!t.post.id,placeholder:"输入物品名称/物品描述并按『回车』进行搜索","remote-method":t.goto_search_items,loading:t.options.search_loading},model:{value:t.post.source_id,callback:function(e){t.$set(t.post,"source_id",e)},expression:"post.source_id"}},t._l(t.options.items,(function(e){return s("el-option",{key:e.id,attrs:{label:e.Name,value:e.id}},[s("div",{staticClass:"m-selector-item"},[s("img",{staticClass:"u-icon",attrs:{src:t.icon_url_filter(e.IconID),alt:e.Name}}),s("span",{staticClass:"u-name",domProps:{textContent:t._s(e.Name)}})])])})),1)],1),s("div",{staticClass:"m-publish-level"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("综合难度 *")]),s("el-rate",{staticClass:"u-level",model:{value:t.post.level,callback:function(e){t.$set(t.post,"level",e)},expression:"post.level"}})],1),s("div",{staticClass:"m-publish-remark"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("修订说明 *")]),s("el-input",{attrs:{placeholder:"请简单描述一下本次修订的说明"},model:{value:t.post.remark,callback:function(e){t.$set(t.post,"remark",e)},expression:"post.remark"}})],1),s("div",{staticClass:"m-publish-content"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("攻略正文 *")]),s("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0,height:400},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),s("div",{staticClass:"m-publish-commit"},[s("el-divider",{attrs:{"content-position":"left"}}),s("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"success",disabled:t.processing},on:{click:t.toPublish}},[t._v("提交攻略 ")])],1)])],1)},i=[],n=(s("b0c0"),s("99af"),s("159b"),s("a0fa")),a=s("221a"),r=s("ee8f"),c=s("b78a"),l=s("e818"),u=s("c9d2"),p={name:"item",props:[],data:function(){return{options:{items:null,search_loading:!1},post:{id:"",content:"",source_id:"",level:0,remark:""}}},computed:{processing:function(){return this.$store.state.processing}},methods:{toPublish:function(){var t=this;this.post.source_id?this.post.content?this.post.level>=1&&this.post.level<=5?this.post.remark?(this.$store.commit("startProcess"),Object(l["a"])({type:"item",source_id:this.post.source_id,level:this.post.level,user_nickname:u["a"].getInfo().name,content:this.post.content,remark:this.post.remark}).then((function(e){e=e.data,200===e.code?(t.$message({message:"提交成功，请等待审核",type:"success"}),location.href=r["JX3BOX"].__Root+"dashboard/#/wiki"):t.$message({message:"".concat(e.message),type:"warning"})}))):this.$message({message:"请简单描述本次修订说明",type:"warning"}):this.$message({message:"请选择适合的综合难度",type:"warning"}):this.$message({message:"要编写攻略正文哦",type:"warning"}):this.$message({message:"请选择要修订攻略的物品",type:"warning"})},icon_url_filter:function(t){return isNaN(parseInt(t))?"".concat(r["JX3BOX"].__imgPath,"image/common/nullicon.png"):"".concat(r["JX3BOX"].__iconPath,"icon/").concat(t,".png")},goto_search_items:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.options.search_loading=!0,Object(c["b"])(e,10).then((function(e){e=e.data,t.options.items=200===e.code&&e.data.data,t.options.search_loading=!1,"function"===typeof s&&s()}),(function(){t.options.items=!1}))}},mounted:function(){var t=this;this.goto_search_items("",(function(){var e=t.$route.params.source_id;t.post.source_id=e||null})),document.getElementsByClassName("m-publish-title").forEach((function(t){t.remove()})),document.getElementsByClassName("el-button--plain").forEach((function(t){t.remove()}))},watch:{"post.source_id":{handler:function(){var t=this;this.post.source_id&&Object(c["a"])(this.post.source_id).then((function(e){var s=e.data;if(200===s.code){var o=s.data.post,i=s.data.source;if(o?(t.post.source_id=o.source_id,t.post.level=o.level||1,t.post.remark="",t.post.content=o.content):(t.post.source_id=t.post.source_id?t.post.source_id:"",t.post.level=0,t.post.remark="",t.post.content=""),i){var n=!1;for(var a in t.options.items=t.options.items||[],t.options.items)if(t.options.items[a].id==i.id){n=!0;break}n||t.options.items.push(i)}}}))}}},components:{pubheader:n["a"],Tinymce:a["a"]}},d=p,m=(s("a4b8"),s("2877")),h=Object(m["a"])(d,o,i,!1,null,null,null);e["default"]=h.exports},"72b7":function(t,e,s){},"818b":function(t){t.exports=JSON.parse('{"title":" &raquo; JX3BOX - 一站式剑网3资源工具站","keys":"jx3box,剑三魔盒,剑三宏,剑三插件,剑三辅助,副本攻略,副本解包,团队监控,捏脸数据,剑3数据库,成就百科,剑三成就,剑3,剑网3,剑三box,通识百科","desc":"JX3BOX - 剑三魔盒是一个以剑网3游戏为主的专业攻略资源站，这里干货满满，大神多多，为你的武侠江湖之路助力。剑三魔盒，玩家贴心的小助手。"}')},a4b8:function(t,e,s){"use strict";s("72b7")},b78a:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"a",(function(){return n}));var o=s("2777");function i(t,e,s){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n={keyword:t,limit:e,fields:s};return null!==i&&(n.is_equip=i?1:0),Object(o["e"])({method:"GET",url:"/api/item/search",params:n})}function n(t){return Object(o["e"])({method:"GET",url:"/api/wiki/post",params:{type:"item",source_id:t,supply:0}})}},e818:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return r}));var o=s("2777"),i=s("4328"),n=s.n(i);function a(t,e){if(e)return Object(o["e"])({method:"GET",url:"/api/wiki/post",params:{type:t,source_id:e}})}function r(t){return Object(o["e"])({method:"POST",url:"/api/wiki/post",data:n.a.stringify({post:t})})}},ee8f:function(t,e,s){const o=s("65c2"),i=s("818b");t.exports={JX3BOX:o,SEO:i}}}]);
//# sourceMappingURL=chunk-7e5f878a.b8f02a1c.js.map