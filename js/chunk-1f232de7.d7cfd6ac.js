(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f232de7"],{"069a":function(t,n,e){},1619:function(t,n,e){"use strict";e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return u}));var i=e("fb5f"),o=e("33a5"),l=e("65c2"),a=e("e4f1");e.d(n,"g",(function(){return a["b"]}));var s=e("85e4");function c(t){var n;return(null===(n=i["a"][t])||void 0===n?void 0:n.label)||"未知"}function r(t){var n=t||0;return l["__imgPath"]+"image/school/"+n+".png"}function u(t){var n=t||0;return n&&o[n]||"未知"}e.d(n,"b",(function(){return s["getThumbnail"]})),e.d(n,"a",(function(){return s["authorLink"]})),e.d(n,"c",(function(){return s["showAvatar"]}))},"33a5":function(t){t.exports=JSON.parse('{"0":"江湖","1":"天策","2":"万花","3":"纯阳","4":"七秀","5":"少林","6":"藏剑","7":"丐帮","8":"明教","9":"五毒","10":"唐门","18":"苍云","19":"长歌","20":"霸刀","21":"蓬莱","22":"凌雪","23":"衍天","24":"药宗","26":"刀宗","29":"万灵","38":"段氏"}')},"3e9c":function(t,n,e){"use strict";e.r(n);e("b0c0");var i=function(){var t=this,n=t._self._c;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-role-list"},[n("h2",{staticClass:"u-title"},[n("i",{staticClass:"el-icon-coordinate"}),t._v(" 我的角色 "),n("div",{staticClass:"u-op"},[n("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/role/bind"}},[n("i",{staticClass:"el-icon-connection"}),t._v(" 绑定角色 ")]),n("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/role/add"}},[n("i",{staticClass:"el-icon-plus"}),t._v(" 自定义角色 ")])],1)]),n("div",{staticClass:"m-role-list-filter"},[n("el-select",{attrs:{size:"small","popper-class":"m-school-pop"},model:{value:t.mount,callback:function(n){t.mount=n},expression:"mount"}},[n("el-option",{attrs:{label:"全部",value:""}}),t._l(t.school_id_map,(function(e,i){return n("el-option",{key:i,staticClass:"u-school",attrs:{value:i,label:e}},[n("img",{attrs:{width:"24",height:"24",src:t._f("showSchoolIcon")(i)}}),t._v(" "+t._s(e)+" ")])}))],2),n("el-input",{staticClass:"u-name",attrs:{placeholder:"请输入角色名称",size:"small"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}},[n("template",{slot:"prepend"},[n("i",{staticClass:"el-icon-search"}),t._v(" 查找 ")])],2)],1),t.data&&t.data.length?n("div",{staticClass:"m-team-rolelist"},[n("ul",{staticClass:"u-list"},t._l(t.data,(function(e,i){return n("li",{key:i,staticClass:"u-item"},[n("router-link",{staticClass:"u-pic u-avatar",attrs:{to:"/role/"+e.ID}},[n("img",{attrs:{src:t.showAvatar(e.mount,e.body_type),alt:""}}),e.custom?t._e():n("i",{staticClass:"u-status",attrs:{title:"已认证"}},[n("svg",{attrs:{height:"512",viewBox:"0 0 511.375 511.375",width:"512",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M511.375 255.688l-57.89-64.273 9.064-86.046-84.651-17.92-43.18-75.012-79.03 35.321-10.667 207.93 10.667 207.929 79.031 35.321 43.179-75.011 84.651-17.921-9.064-86.046z",fill:"#0ed678"}}),n("path",{attrs:{d:"M176.656 12.437l-43.179 75.012-84.651 17.921 9.064 86.045L0 255.688l57.89 64.272-9.064 86.046 84.651 17.921 43.18 75.011 79.031-35.321V47.758z",fill:"#04eb84"}}),n("g",[n("path",{attrs:{d:"M362.878 199.702l-22.381-19.977-84.809 95.016-10.667 23.613 10.667 21.439z",fill:"#f7f0eb"}}),n("path",{attrs:{d:"M166.56 233.095l-21.212 21.213 89.185 89.186 21.155-23.701v-45.052l-22.393 25.088z",fill:"#fffbf5"}})])])])]),n("span",{staticClass:"u-title"},[n("router-link",{staticClass:"u-rolename",attrs:{to:"/role/"+e.ID}},[t._v(t._s(e.name))]),n("span",{staticClass:"u-star",class:{on:e.priority},on:{click:function(n){return t.starRole(e)}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.priority?"取消置顶":"置顶",placement:"top"}},[e.priority?n("i",{staticClass:"el-icon-star-on"}):n("i",{staticClass:"el-icon-star-off"})])],1)],1),n("span",{staticClass:"u-meta"},[n("span",{staticClass:"u-server"},[n("em",[t._v("服务器")]),t._v(" "+t._s(e.server)+" ")]),n("span",{staticClass:"u-mount"},[n("em",[t._v("门派")]),n("img",{staticClass:"u-icon",attrs:{src:t._f("showSchoolIcon")(e.mount)}}),t._v(" "+t._s(t._f("showSchoolName")(e.mount))+" ")]),n("span",{staticClass:"u-note"},[n("em",[t._v("备注")]),t._v(" "+t._s(e.note)+" "),n("span",{staticClass:"u-addnote",on:{click:function(n){return t.addNote(e)}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"设置备注",placement:"top"}},[n("i",{staticClass:"el-icon-edit-outline"})])],1)])]),n("span",{staticClass:"u-time"},[t._v("绑定时间 : "+t._s(t._f("showTime")(e.created_at)))]),n("div",{staticClass:"u-op"},[e.custom?[n("router-link",{staticClass:"el-button u-btn u-delete el-button--default el-button--mini is-plain is-circle",attrs:{to:"/role/edit/"+e.ID}},[n("i",{staticClass:"el-icon-edit-outline"})]),n("el-button",{staticClass:"u-btn u-delete",attrs:{plain:"",size:"mini",circle:"",icon:"el-icon-delete"},on:{click:function(n){return t.delRole(e.ID,i)}}})]:n("el-button",{staticClass:"u-btn u-unbind",attrs:{plain:"",size:"mini",circle:"",icon:"el-icon-delete"},on:{click:function(n){return t.unbind(e.ID,i)}}})],2)],1)})),0)]):[n("el-alert",{staticClass:"m-archive-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}}),n("div",{staticClass:"m-role-null"},[n("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/role/bind"}},[n("i",{staticClass:"el-icon-connection"}),t._v(" 绑定角色 ")]),n("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/role/add"}},[n("i",{staticClass:"el-icon-plus"}),t._v(" 自定义角色 ")])],1)],n("el-dialog",{staticClass:"m-team-note-dialog",attrs:{title:"设置备注",visible:t.noteVisible,width:"30%"},on:{"update:visible":function(n){t.noteVisible=n}}},[n("div",[n("el-input",{attrs:{placeholder:"请输入内容",maxlength:20,"show-word-limit":!0},model:{value:t.note,callback:function(n){t.note=n},expression:"note"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(n){t.noteVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.confirmNote}},[t._v("确 定")])],1)])],2)},o=[],l=(e("14d9"),e("a434"),e("d3b7"),e("7585")),a=e("33a5"),s=e("65c2"),c=e("46d4"),r=e("1619"),u={name:"ListRole",props:[],filters:{showSchoolIcon:r["e"],showSchoolName:r["f"],showTime:r["g"]},data:function(){return{data:[],loading:!1,noteVisible:!1,currentItem:"",note:"",mount:"",name:"",xfmap:c,school_id_map:a}},computed:{params:function(){return{mount:this.mount,name:this.name}}},methods:{unbind:function(t,n){var e=this;this.$alert("在网站进行解绑游戏内需要小退方可生效","消息",{confirmButtonText:"确定解绑",callback:function(i){"confirm"==i&&Object(l["i"])(t).then((function(t){e.$notify({title:"解绑成功",message:"角色解绑成功",type:"success"}),e.data.splice(n,1)}))}})},loadData:function(){var t=this;this.loading=!0,Object(l["e"])(this.params).then((function(n){t.data=n.data.data.list||[]})).finally((function(){t.loading=!1}))},showAvatar:function(t,n){return Object(r["b"])(s["__cdn"]+"design/avatar/xisai/"+t+"-"+n+".png")},go:function(t){this.$router.push(t)},addNote:function(t){this.noteVisible=!0,this.currentItem=t},confirmNote:function(){var t=this;Object(l["g"])(this.currentItem.ID,this.note).then((function(n){t.noteVisible=!1,t.currentItem.note=t.note,t.note="",t.$notify({title:"成功",message:"备注设置成功",type:"success"})}))},delRole:function(t,n){var e=this;this.$alert("确定删除该角色吗？","消息",{confirmButtonText:"确定",callback:function(i){"confirm"==i&&Object(l["b"])(t).then((function(t){e.$notify({title:"删除成功",message:"角色删除成功",type:"success"}),e.data.splice(n,1)}))}})},starRole:function(t){var n=this;t.priority?Object(l["j"])(t.ID).then((function(e){t.priority=0,n.$notify({title:"取消星标成功",message:"角色取消星标成功",type:"success"})})):Object(l["h"])(t.ID).then((function(e){t.priority=Date.now(),n.$notify({title:"星标成功",message:"角色星标成功",type:"success"})}))}},created:function(){},watch:{params:{immediate:!0,handler:function(t){this.loadData()}}},components:{}},d=u,f=(e("fa03"),e("2877")),m=Object(f["a"])(d,i,o,!1,null,null,null);n["default"]=m.exports},"46d4":function(t){t.exports=JSON.parse('{"冰心诀":{"name":"冰心诀","id":10081,"force":5,"kungfuId":10,"school":4,"client":["all","std","origin"]},"云裳心经":{"name":"云裳心经","id":10080,"force":5,"kungfuId":9,"school":4,"client":["all","std","origin"]},"花间游":{"name":"花间游","id":10021,"force":2,"kungfuId":5,"school":2,"client":["all","std","origin"]},"离经易道":{"name":"离经易道","id":10028,"force":2,"kungfuId":7,"school":2,"client":["all","std","origin"]},"毒经":{"name":"毒经","id":10175,"force":6,"kungfuId":13,"school":9,"client":["all","std","origin"]},"补天诀":{"name":"补天诀","id":10176,"force":6,"kungfuId":14,"school":9,"client":["all","std","origin"]},"莫问":{"name":"莫问","id":10447,"force":22,"kungfuId":22,"school":19,"client":["all","std"]},"相知":{"name":"相知","id":10448,"force":22,"kungfuId":23,"school":19,"client":["all","std"]},"无方":{"name":"无方","id":10627,"force":212,"kungfuId":29,"school":24,"client":["all","std"]},"灵素":{"name":"灵素","id":10626,"force":212,"kungfuId":28,"school":24,"client":["all","std"]},"傲血战意":{"name":"傲血战意","id":10026,"force":3,"kungfuId":6,"school":1,"client":["all","std","origin"]},"铁牢律":{"name":"铁牢律","id":10062,"force":3,"kungfuId":8,"school":1,"client":["all","std","origin"]},"易筋经":{"name":"易筋经","id":10003,"force":1,"kungfuId":2,"school":5,"client":["all","std","origin"]},"洗髓经":{"name":"洗髓经","id":10002,"force":1,"kungfuId":1,"school":5,"client":["all","std","origin"]},"焚影圣诀":{"name":"焚影圣诀","id":10242,"force":10,"kungfuId":17,"school":8,"client":["all","std","origin"]},"明尊琉璃体":{"name":"明尊琉璃体","id":10243,"force":10,"kungfuId":18,"school":8,"client":["all","std","origin"]},"分山劲":{"name":"分山劲","id":10390,"force":21,"kungfuId":21,"school":18,"client":["all","std","origin"]},"铁骨衣":{"name":"铁骨衣","id":10389,"force":21,"kungfuId":20,"school":18,"client":["all","std","origin"]},"紫霞功":{"name":"紫霞功","id":10014,"force":4,"kungfuId":3,"school":3,"client":["all","std","origin"]},"太虚剑意":{"name":"太虚剑意","id":10015,"force":4,"kungfuId":4,"school":3,"client":["all","std","origin"]},"天罗诡道":{"name":"天罗诡道","id":10225,"force":7,"kungfuId":16,"school":10,"client":["all","std","origin"]},"惊羽诀":{"name":"惊羽诀","id":10224,"force":7,"kungfuId":15,"school":10,"client":["all","std","origin"]},"问水诀":{"name":"问水诀","id":10144,"force":8,"kungfuId":11,"school":6,"client":["all","std","origin"]},"山居剑意":{"name":"山居剑意","id":10145,"force":8,"kungfuId":11,"school":6,"client":["all","std","origin"]},"笑尘诀":{"name":"笑尘诀","id":10268,"force":9,"kungfuId":19,"school":7,"client":["all","std","origin"]},"北傲诀":{"name":"北傲诀","id":10464,"force":23,"kungfuId":24,"school":20,"client":["all","std"]},"凌海诀":{"name":"凌海诀","id":10533,"force":24,"kungfuId":25,"school":21,"client":["all","std"]},"隐龙诀":{"name":"隐龙诀","id":10585,"force":25,"kungfuId":26,"school":22,"client":["all","std"]},"太玄经":{"name":"太玄经","id":10615,"force":211,"kungfuId":27,"school":23,"client":["all","std"]},"孤锋诀":{"name":"孤锋诀","id":10698,"force":213,"kungfuId":30,"school":26,"client":["all","std"]},"山海心诀":{"name":"山海心诀","id":10756,"force":214,"kungfuId":32,"school":29,"client":["all","std"]},"周天功":{"name":"周天功","id":10786,"force":215,"kungfuId":33,"school":38,"client":["all","std"]},"通用":{"name":"通用","id":0,"force":0,"kungfuId":0,"school":0,"client":["all","std","origin"]}}')},7585:function(t,n,e){"use strict";e.d(n,"e",(function(){return o})),e.d(n,"i",(function(){return l})),e.d(n,"f",(function(){return a})),e.d(n,"g",(function(){return s})),e.d(n,"a",(function(){return c})),e.d(n,"k",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"b",(function(){return d})),e.d(n,"h",(function(){return f})),e.d(n,"j",(function(){return m})),e.d(n,"d",(function(){return p}));var i=e("41cb");function o(t){return Object(i["d"])().get("/api/team/my-game-roles",{params:t})}function l(t){return Object(i["d"])().get("/api/team/role-unbind/"+t)}function a(){return Object(i["d"])().get("/api/team/role-bind-token")}function s(t,n){return Object(i["d"])().put("/api/team/role-update-note/".concat(t),{note:n})}function c(t){return Object(i["d"])().post("/api/team/custom-role",t)}function r(t,n){return Object(i["d"])().put("/api/team/custom-role/".concat(t),n)}function u(t){return Object(i["d"])().get("/api/team/custom-role/".concat(t))}function d(t){return Object(i["d"])().delete("/api/team/custom-role/".concat(t))}function f(t){return Object(i["d"])().put("/api/team/role-priority/".concat(t,"/top"))}function m(t){return Object(i["d"])().put("/api/team/role-priority/".concat(t,"/untop"))}function p(t){return Object(i["d"])().get("/api/team/relation/role/".concat(t,"/teams"))}},fa03:function(t,n,e){"use strict";e("069a")},fb5f:function(t){t.exports=JSON.parse('{"a":{"1":{"label":"成男","value":"m2"},"2":{"label":"成女","value":"f2"},"5":{"label":"正太","value":"m1"},"6":{"label":"萝莉","value":"f1"}}}')}}]);
//# sourceMappingURL=chunk-1f232de7.d7cfd6ac.js.map