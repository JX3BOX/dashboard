(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04e3a0fa"],{4211:function(t,i,s){"use strict";s("a55c")},"826f":function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"m-dashboard m-dashboard-work m-dashboard-whitelist"},[s("div",{staticClass:"m-dashboard-whitelist-cont"},[s("h2",{staticClass:"u-title"},[t._m(0),t.isDrag?s("span",{staticClass:"u-sort u-drag",on:{click:t.exitDrag}},[s("i",{staticClass:"el-icon-finished"}),t._v(" 退出排序 ")]):s("span",{staticClass:"u-sort",on:{click:function(i){t.isDrag=!0}}},[s("i",{staticClass:"el-icon-sort"}),t._v(" 开启排序 ")])]),t.isDrag?s("draggable",t._b({staticClass:"m-drag",attrs:{element:"div",list:t.list},on:{start:t.dragStart}},"draggable",{animation:150,scrollSensitivity:200},!1),[s("transition-group",{attrs:{type:"transition"}},t._l(t.list,(function(i){return s("div",{key:i.kith_id,staticClass:"u-item"},[s("div",{staticClass:"u-item-box"},[s("img",{attrs:{src:t._f("showAvatar")(i.kith_info.user_avatar)}}),s("div",{staticClass:"u-txt"},[t._v(t._s(i.remark||i.kith_info.display_name))])])])})),0)],1):s("div",{staticClass:"u-box"},t._l(t.list,(function(i,n){return s("div",{key:n,staticClass:"u-item"},[s("div",{staticClass:"u-item-box"},[s("img",{attrs:{src:t._f("showAvatar")(i.kith_info.user_avatar)}}),s("div",{staticClass:"u-item-txt"},[s("div",{staticClass:"u-item-name"},[s("span",[t._v(t._s(i.kith_info.display_name))]),s("span",[t._v("备注："+t._s(i.remark||"无"))])]),s("div",{staticClass:"u-item-btn"},[s("el-button",{attrs:{type:"warning"},on:{click:function(s){return t.delWhitelistBtn(i.kith_id)}}},[t._v("删除")]),s("el-button",{on:{click:function(s){return t.editWhitelistBtn(i.kith_id)}}},[t._v("编辑")])],1)])])])})),0)],1),s("div",{staticClass:"m-dashboard-whitelist-add"},[t._m(1),s("el-input",{staticClass:"u-input",attrs:{placeholder:"输入UID添加",disabled:t.isDrag,"suffix-icon":"el-icon-search"},on:{input:t.searchUid},model:{value:t.uid,callback:function(i){t.uid=i},expression:"uid"}}),t.hasUser?s("div",{staticClass:"u-box u-user"},[s("img",{attrs:{src:t._f("showAvatar")(t.userInfo.user_avatar),alt:"userInfo.display_name"}}),s("div",{staticClass:"u-txt"},[s("span",[t._v("UID："+t._s(t.userInfo.ID))]),s("span",[t._v(t._s(t.userInfo.display_name))])])]):s("div",{staticClass:"u-box"},[s("el-alert",{attrs:{title:"请输入UID",type:"info","show-icon":"",closable:!1}})],1),s("el-button",{attrs:{type:"success",disabled:!t.allowAppend},on:{click:function(i){return t.addWhitelistBtn(t.userInfo)}}},[t._v("添加亲友 ("+t._s(t.list.length)+" / "+t._s(t.hasNum)+")")])],1)])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("span",{staticClass:"i-title"},[s("i",{staticClass:"el-icon-ship"}),t._v(" 我的亲友 ")])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"u-title"},[s("i",{staticClass:"el-icon-news"}),t._v(" 添加亲友")])}],e=(s("a434"),s("41cb"));function r(){return Object(e["b"])().get("/api/cms/user/kith/my")}function c(t){return Object(e["b"])().get("/api/cms/user/".concat(t,"/info"))}function u(t){return Object(e["b"])().delete("/api/cms/user/kith/".concat(t))}function o(t){return Object(e["b"])().post("/api/cms/user/kith/".concat(t))}function l(t){return Object(e["b"])().put("/api/cms/user/kith",t)}function h(t,i){return Object(e["b"])().put("/api/cms/user/kith/".concat(t),i)}var d=s("c9d2"),f=s("b76a"),v=s.n(f),p=s("85e4"),_={name:"whitelist",props:[],data:function(){return{uid:"",list:{},userInfo:"",isvip:!1,ispro:!1,isDrag:!1,dragList:!1}},computed:{isVerify:function(){return""!=this.uid&&null!=this.userInfo},hasUser:function(){return this.userInfo},allowAppend:function(){var t=this.list.length;return 0==this.isDrag&&(t<5||(t<20?this.isvip:t<100&&this.ispro))},draglist:function(){return this.list},hasNum:function(){return this.ispro?100:this.isvip?20:5}},methods:{dragStart:function(){this.dragList=!0},exitDrag:function(){var t=this;if(this.isDrag=!1,1==this.dragList){for(var i=this.list,s=[],n=0;n<i.length;n++)i[n].level=i.length-n,s.push({level:i[n].level,kith_id:i[n].kith_id});l(s).then((function(){t.successTxt("调整排序成功!"),t.dragList=!1}))}},searchUid:function(){var t=this;this.uid&&c(this.uid).then((function(i){t.userInfo=i.data.data}))},addWhitelistBtn:function(t){var i=this,s={kith_id:t.ID,kith_info:{display_name:t.display_name,user_avatar:t.user_avatar},level:this.list.length};o(this.uid).then((function(t){i.successTxt("亲友添加成功!"),i.list.unshift(s)}))},delWhitelistBtn:function(t){var i=this,s=this.list;this.$confirm("是否继续删除该亲友?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){u(t).then((function(){i.successTxt("删除成功!");for(var n=0;n<s.length;n++)s[n].kith_id==t&&s.splice(n,1);i.list=s}))})).catch((function(){}))},editWhitelistBtn:function(t){var i=this;this.$prompt("请输入备注","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(s){h(t,{remark:s.value}).then((function(){i.successTxt("备注添加成功!");for(var n=0;n<i.list.length;n++)i.list[n].kith_id==t&&(i.list[n].remark=s.value)}))})).catch((function(){}))},successTxt:function(t){this.uid="",this.userInfo="",this.$notify({title:"成功",message:t,type:"success"})},getList:function(){var t=this;r().then((function(i){for(var s=i.data.data,n=s.length-1;n>0;n--)for(var a=s.length-1-n;a>0;a--)if(s[a].level>s[a-1].level){var e=s[a];s[a]=s[a-1],s[a-1]=e}t.list=s}))}},mounted:function(){var t=this;this.getList(),d["a"].getAsset().then((function(){d["a"].isVIP().then((function(i){t.isvip=i})),d["a"].isPRO().then((function(i){t.ispro=i}))}))},filters:{showAvatar:function(t){return Object(p["showAvatar"])(t,80)}},components:{draggable:v.a}},m=_,g=(s("4211"),s("2877")),b=Object(g["a"])(m,n,a,!1,null,"395b1918",null);i["default"]=b.exports},a55c:function(t,i,s){}}]);
//# sourceMappingURL=chunk-04e3a0fa.4d24c56e.js.map