(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fdab3d6"],{"04d1":function(t,i,e){var a=e("342f"),n=a.match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},"0fe0":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"m-dashboard m-dashboard-profile m-dashboard-work m-dashboard-whitelist m-whitelist"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-whitelist-primary"},[t._m(0),e("el-tabs",{on:{"tab-click":t.tabChange},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[e("el-tab-pane",{attrs:{label:"我的亲友",name:"whitelist"}}),e("el-tab-pane",{attrs:{label:"黑名单",name:"blacklist"}}),e("el-tab-pane",{attrs:{label:"我的关注",name:"myfollow"}}),e("el-tab-pane",{attrs:{label:"我的粉丝",name:"myfans"}})],1),"whitelist"!==t.active?e("el-input",{staticClass:"m-privacy-search",attrs:{placeholder:"请输入搜索内容"},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.handleChange.apply(null,arguments)}},model:{value:t.keyword,callback:function(i){t.keyword=i},expression:"keyword"}},[e("template",{slot:"prepend"},[t._v("关键词")]),e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.handleChange},slot:"append"})],2):t._e(),t.list&&t.list.length?e("div",{staticClass:"m-whitelist-list u-list"},t._l(t.list,(function(i,a){return e("div",{key:i.kith_id||i.id,staticClass:"u-item"},[e("a",{staticClass:"u-item-pic",attrs:{href:t._f("authorLink")(i.kith_id||i.user_id),target:"_blank"}},[e("img",{staticClass:"u-item-avatar",attrs:{src:t._f("showAvatar")((i.kith_info||i).user_avatar)}})]),e("a",{staticClass:"u-item-name",attrs:{href:t._f("authorLink")(i.kith_id||i.user_id),target:"_blank"}},[t._v(t._s((i.kith_info||i).display_name))]),"whitelist"===t.active?[i.status?e("span",{staticClass:"u-item-remark"},[t._v("备注："+t._s(i.remark||"无"))]):e("span",{staticClass:"u-item-remark"},[e("i",{staticClass:"el-icon-loading"}),t._v(" 等待确认中... ")])]:t._e(),e("div",{staticClass:"u-item-btns"},["whitelist"===t.active?[e("el-popconfirm",{attrs:{title:"确认删除亲友关系吗？"},on:{confirm:function(e){return t.remove(i.kith_id,a)}}},[e("el-button",{attrs:{slot:"reference",type:"warning",size:"mini",icon:"el-icon-delete"},slot:"reference"},[t._v("删除")])],1),e("el-button",{staticClass:"u-btn-edit",attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(e){return t.edit(i.kith_id,i)}}},[t._v("编辑")])]:[e("el-button",{staticClass:"u-btn-delete",attrs:{size:"mini",icon:"el-icon-delete"},on:{click:function(e){return t.removeOther(i)}}},[t._v("移除")])]],2)],2)})),0):t._e(),"whitelist"!==t.active?e("el-pagination",{attrs:{background:"","hide-on-single-page":"","current-page":t.pagination.pageIndex,total:t.pagination.total},on:{"current-change":t.currentChange}}):t._e()],1),"myfans"!==t.active?e("div",{staticClass:"m-whitelist-sidebar"},[e("div",{staticClass:"u-title"},[e("i",{staticClass:"el-icon-news"}),t._v(" "+t._s(t.sideTitle)+" ")]),e("el-input",{staticClass:"u-input",attrs:{placeholder:"输入UID添加","suffix-icon":"el-icon-search"},on:{change:t.search},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.search.apply(null,arguments)}},model:{value:t.uid,callback:function(i){t.uid=t._n(i)},expression:"uid"}}),t.userdata?e("div",{staticClass:"u-list"},[e("div",{staticClass:"u-item"},[e("img",{staticClass:"u-item-avatar",attrs:{src:t._f("showAvatar")(t.userdata.user_avatar),alt:t.userdata.display_name}}),e("div",{staticClass:"u-item-info"},[e("span",{staticClass:"u-item-uid"},[t._v("UID："+t._s(t.userdata.ID))]),e("b",{staticClass:"u-item-name"},[t._v(t._s(t.userdata.display_name))])]),t.isNewKith?t._e():e("i",{staticClass:"u-item-exist"},[t._v("已添加")])])]):t._e(),t.isNull?e("div",{staticClass:"u-null"},[e("el-alert",{attrs:{title:"无搜索结果",type:"info","show-icon":"",closable:!1}})],1):t._e(),e("el-button",{staticClass:"u-submit",attrs:{type:"success",disabled:"wihtelist"===t.active&&!t.allowAppend},on:{click:t.add}},[t._v(t._s(t.btnText))])],1):t._e()])},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("h2",{staticClass:"m-whitelist-title u-title"},[e("i",{staticClass:"el-icon-ship"}),t._v(" 隐私设置 ")])}],s=(e("caad"),e("2532"),e("d81d"),e("99af"),e("d3b7"),e("4e82"),e("a434"),e("41cb"));function r(){return Object(s["b"])().get("/api/cms/user/kith/my")}function o(t){return Object(s["b"])().get("/api/cms/user/".concat(t,"/info"))}function l(t){return Object(s["b"])().post("/api/cms/user/kith/".concat(t))}function c(t){return Object(s["b"])().delete("/api/cms/user/kith/".concat(t))}function u(t,i){return Object(s["b"])().put("/api/cms/user/kith/".concat(t),i)}function d(t){return Object(s["d"])().get("/api/my-userlist/deny",{params:t})}function f(t){return Object(s["d"])().get("/api/my-userlist/follow",{params:t})}function h(t){return Object(s["d"])().get("/api/my-userlist/follow-me",{params:t})}function p(t){return Object(s["d"])().post("/api/my-userlist/follow/".concat(t))}function m(t){return Object(s["d"])().delete("/api/my-userlist/follow/".concat(t))}function v(t){return Object(s["d"])().post("/api/my-userlist/deny/".concat(t))}function b(t){return Object(s["d"])().delete("/api/my-userlist/deny/".concat(t))}function y(t){return Object(s["d"])().delete("/api/my-userlist/follow-me/".concat(t))}var g=e("c9d2"),k=e("85e4"),_={name:"privacy",props:[],data:function(){return{list:[],loading:!1,uid:"",userdata:"",flag:!1,limit_map:{member:5,vip:20,pro:100},identity:"member",active:"whitelist",keyword:"",pagination:{pageIndex:1,pageSize:10,total:0}}},computed:{allowAppend:function(){return this.userdata&&this.total<this.limit&&this.isNewKith},isNewKith:function(){var t,i=null===(t=this.userdata)||void 0===t?void 0:t.ID;return!this.currentIdList.includes(i)},currentIdList:function(){return this.list.map((function(t){return t.kith_id}))},limit:function(){return this.limit_map[this.identity]||5},total:function(){var t;return null===(t=this.list)||void 0===t?void 0:t.length},isNull:function(){return this.uid&&!this.userdata&&this.flag},fns:function(){return{blacklist:d,myfollow:f,myfans:h}},removeFns:function(){return{blacklist:b,myfollow:m,myfans:y}},addFns:function(){return{blacklist:v,myfollow:p,whitelist:l}},btnText:function(){return{blacklist:"拉黑",myfollow:"关注",whitelist:"添加亲友 (".concat(this.total," / ").concat(this.limit,")")}[this.active]},sideTitle:function(){return{blacklist:"添加黑名单",myfollow:"添加关注",whitelist:"添加亲友"}[this.active]}},methods:{handleChange:function(){this.pagination.pageIndex=1,this.loadList()},tabChange:function(){this.keyword=this.$route.query.keyword||"",this.pagination.pageIndex=1,this.loadList()},currentChange:function(t){this.pagination.pageIndex=t,this.loadList()},search:function(t){var i=this;t&&!isNaN(t)&&(this.flag=!1,o(t).then((function(t){i.userdata=t.data.data})).finally((function(){i.flag=!0})))},add:function(){var t=this;this.addFns[this.active](this.userdata.ID).then((function(i){t.loadList()}))},addKith:function(){var t=this;this.allowAppend&&l(this.uid).then((function(){t.$notify({title:"成功",message:"添加成功",type:"success"}),t.list.push({kith_id:t.uid,level:0,status:0,kith_info:t.userdata})}))},follow:function(){var t=this;p(this.userdata.ID).then((function(){t.$notify({title:"成功",message:"关注成功",type:"success"}),t.loadList()}))},deny:function(){var t=this;v(this.userdata.ID).then((function(){t.$notify({title:"成功",message:"拉黑成功",type:"success"}),t.loadList()}))},loadList:function(){var t=this;if(this.loading=!0,this.$router.push({name:"privacy",query:{tab:this.active}}),"whitelist"===this.active)r().then((function(i){var e=i.data.data;e=e.sort((function(t,i){return i.level-t.level})),t.list=e})).finally((function(){t.loading=!1}));else{var i={pageIndex:this.pagination.pageIndex,pageSize:this.pagination.pageSize,display_name:this.keyword};this.fns[this.active](i).then((function(i){t.list=i.data.data.list||[],t.pagination.total=i.data.data.page.total})).finally((function(){t.loading=!1}))}},remove:function(t,i){var e=this;c(t).then((function(){e.$notify({title:"成功",message:"删除成功",type:"success"}),e.list.splice(i,1)}))},edit:function(t,i){var e=this;this.$prompt("请输入备注","设置",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(a){var n=a.value;u(t,{remark:n}).then((function(){e.$notify({title:"成功",message:"编辑成功",type:"success"}),i.remark=n}))}))},removeOther:function(t){var i=this,e={blacklist:"确认解除对该用户的屏蔽？",myfollow:"确认不再关注该用户？",myfans:"确认要移除粉丝？"};this.$confirm(e[this.active],"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var e="myfans"===i.active?t.user_id:t.bind_user_id;i.removeFns[i.active](e).then((function(){i.$notify({title:"成功",message:"操作成功",type:"success"}),i.loadList()}))})).finally((function(){}))}},mounted:function(){var t=this;this.active=this.$route.query.tab||"whitelist",this.loadList(),g["a"].getAsset().then((function(i){g["a"]._isPRO(i)?t.identity="pro":g["a"]._isVIP(i)?t.identity="vip":t.identity="member"}))},filters:{showAvatar:function(t){return Object(k["showAvatar"])(t,"m")},authorLink:k["authorLink"]}},w=_,C=(e("1bf9"),e("2877")),x=Object(C["a"])(w,a,n,!1,null,"5e838398",null);i["default"]=x.exports},"1bf9":function(t,i,e){"use strict";e("63d6")},"4e82":function(t,i,e){"use strict";var a=e("23e7"),n=e("e330"),s=e("59ed"),r=e("7b0b"),o=e("07fa"),l=e("083a"),c=e("577e"),u=e("d039"),d=e("addb"),f=e("a640"),h=e("04d1"),p=e("d998"),m=e("2d00"),v=e("512ce"),b=[],y=n(b.sort),g=n(b.push),k=u((function(){b.sort(void 0)})),_=u((function(){b.sort(null)})),w=f("sort"),C=!u((function(){if(m)return m<70;if(!(h&&h>3)){if(p)return!0;if(v)return v<603;var t,i,e,a,n="";for(t=65;t<76;t++){switch(i=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(a=0;a<47;a++)b.push({k:i+a,v:e})}for(b.sort((function(t,i){return i.v-t.v})),a=0;a<b.length;a++)i=b[a].k.charAt(0),n.charAt(n.length-1)!==i&&(n+=i);return"DGBEFHACIJK"!==n}})),x=k||!_||!w||!C,O=function(t){return function(i,e){return void 0===e?-1:void 0===i?1:void 0!==t?+t(i,e)||0:c(i)>c(e)?1:-1}};a({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&s(t);var i=r(this);if(C)return void 0===t?y(i):y(i,t);var e,a,n=[],c=o(i);for(a=0;a<c;a++)a in i&&g(n,i[a]);d(n,O(t)),e=n.length,a=0;while(a<e)i[a]=n[a++];while(a<c)l(i,a++);return i}})},"512ce":function(t,i,e){var a=e("342f"),n=a.match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},"63d6":function(t,i,e){},d81d:function(t,i,e){"use strict";var a=e("23e7"),n=e("b727").map,s=e("1dde"),r=s("map");a({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},d998:function(t,i,e){var a=e("342f");t.exports=/MSIE|Trident/.test(a)}}]);
//# sourceMappingURL=chunk-8fdab3d6.3c1a17d1.js.map