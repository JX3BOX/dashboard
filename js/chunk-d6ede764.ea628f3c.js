(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6ede764"],{"3ed1":function(t,a,e){},4208:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("uc",{staticClass:"m-dashboard-avatar"},[e("div",{staticClass:"m-profile-avatar"},[e("div",{staticClass:"m-profile-avatar-primary"},[e("div",{staticClass:"u-avatar"},[e("img",{staticClass:"u-avatar u-avatar-l",attrs:{src:t._f("showAvatar")(t.avatar)}})]),e("el-upload",{staticClass:"u-upload",attrs:{drag:"",accept:"image/png, image/gif, image/jpeg","on-change":t.upload,action:"upload/avatar","auto-upload":!1}},[e("i",{staticClass:"el-icon-upload"}),e("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或 "),e("em",[t._v("点击上传")]),e("br"),e("span",{staticClass:"u-tip"},[t._v("只能上传jpg/png/gif文件")])])]),e("p",{staticClass:"u-btng"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确认")]),e("el-button",{on:{click:t.reset}},[t._v("重置")])],1)],1),e("div",{staticClass:"m-profile-avatar-frame"},[e("h3",{staticClass:"u-title"},[t._v(" 自定义头像框 "),e("span",{staticClass:"u-limit",class:{on:t.isVIP}},[t._v(" ( "),e("i",{class:t.isVIP?"el-icon-unlock":"el-icon-lock"}),t._v(" 仅高级/专业版账户适用 ) ")])]),t.frames?e("div",{staticClass:"u-list"},[e("li",{staticClass:"u-item",class:{on:!t.frame},on:{click:function(a){return t.selectFrame("")}}},[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"无边框",placement:"top","open-delay":200}},[e("div",[t.frame?t._e():e("img",{staticClass:"u-pic",attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),e("i",{staticClass:"u-frame u-frame-none"})])])],1),t._l(t.frames,(function(a,s){return e("li",{key:s,staticClass:"u-item",class:{on:s==t.frame},on:{click:function(e){return t.selectFrame(a)}}},[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:a.desc,placement:"top","open-delay":300}},[e("div",{class:{"u-blocked":!a.status}},[s==t.frame?e("img",{staticClass:"u-pic",class:{isCircle:"circle"==a.style},attrs:{src:t._f("showSmallAvatar")(t.avatar)}}):t._e(),e("i",{staticClass:"u-frame"},[e("img",{attrs:{src:t.showFrame(a.name,a.files.s.file)}})])])])],1)}))],2):t._e(),e("div",{staticClass:"u-tip"},[e("i",{staticClass:"el-icon-warning-outline"}),t._v(" 「限定头像框」仅在指定时间段可选择激活。")])])])])},n=[],i=(e("99af"),e("b0c0"),e("b547")),r=e("46e8"),c=e("c9d2"),l=e("85e4"),o=e("58c3"),u=e("1645"),f=e("64c7"),m={name:"avatar",props:[],data:function(){return{bak:"",avatar:"",frame:"",isVIP:!1,uid:c["a"].getInfo().uid,frames:u}},computed:{data:function(){return{user_avatar:this.avatar,user_avatar_frame:this.frame}}},methods:{upload:function(t,a){var e=this,s=new FormData,n=t.raw;s.append("file",n),Object(r["m"])(s).then((function(t){e.$message({message:"上传成功",type:"success"}),e.avatar=t.data.data.list[0]}))},reset:function(){this.avatar=this.bak},submit:function(){var t=this;this.isVIP||(this.frame=""),Object(r["j"])(this.data).then((function(a){c["a"].refresh("avatar",t.avatar),t.$message({message:"头像更新成功",type:"success"})}))},loadFrames:function(){var t=this;Object(r["d"])().then((function(a){t.frames=a.data}))},showFrame:function(t,a){return f["__imgPath"]+"image/avatar/".concat(t,"/").concat(a)},selectFrame:function(t){t?t.status&&(this.frame=t.name):this.frame=""},init:function(){var t=this;this.loadFrames(),Object(o["e"])().then((function(a){t.isVIP=a})),this.avatar=this.bak=c["a"].getInfo().avatar_origin,Object(r["f"])(this.uid).then((function(a){t.frame=a.data.data.avatar_frame||""}))}},filters:{showAvatar:function(t){return Object(l["showAvatar"])(t,"l")},showSmallAvatar:function(t){return Object(l["getThumbnail"])(t,68,!0)}},created:function(){this.init()},components:{uc:i["a"]}},d=m,p=(e("bfad"),e("2877")),v=Object(p["a"])(d,s,n,!1,null,null,null);a["default"]=v.exports},"46e8":function(t,a,e){"use strict";e.d(a,"l",(function(){return o})),e.d(a,"e",(function(){return l})),e.d(a,"j",(function(){return u})),e.d(a,"k",(function(){return p})),e.d(a,"h",(function(){return _})),e.d(a,"a",(function(){return b})),e.d(a,"b",(function(){return v})),e.d(a,"g",(function(){return h})),e.d(a,"i",(function(){return C})),e.d(a,"c",(function(){return g})),e.d(a,"m",(function(){return f})),e.d(a,"d",(function(){return m})),e.d(a,"f",(function(){return d}));var s=e("bc3a"),n=e.n(s),i=e("64c7"),r=e("4fb6"),c=n.a.create({withCredentials:!0,baseURL:i["__server"]});function l(){return c.get("profile")}function o(t){return c.post("profile",t)}function u(t){return c.put("profile/avatar",t)}function f(t){return c.post("upload/avatar",t)}function m(){return n.a.get(i["__imgPath"]+"data/user_avatar_frame.json")}function d(t){return n.a.get(i["__server"]+"user/overview/".concat(t))}function p(t){return c.post("profile/password",t)}function v(){return c.get("profile/email/check")}function b(t){return c.get("profile/email/available",{params:{user_email:t}})}function h(t){return c.post("profile/email/bind",t)}function _(){return c.post("profile/email/verify")}function g(){return c.get("profile/oauth/check")}function C(t){return c.post("profile/oauth/unbind",t)}Object(r["e"])(c)},b547:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"m-dashboard-profile m-profile"},[t._m(0),e("tabs"),t._t("default")],2)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",{staticClass:"u-title"},[e("i",{staticClass:"el-icon-user"}),t._v(" 我的资料")])}],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("el-tab-pane",{attrs:{name:"profile"}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-user"}),t._v(" 基本资料")])]),e("el-tab-pane",{attrs:{name:"avatar"}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-camera"}),t._v(" 修改头像")])]),e("el-tab-pane",{attrs:{name:"pwd"}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-lock"}),t._v(" 修改密码")])]),e("el-tab-pane",{attrs:{name:"email"}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-message"}),t._v(" 邮箱设置")])]),e("el-tab-pane",{attrs:{name:"connect"}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-connection"}),t._v(" 绑定账号")])])],1)},r=[],c=(e("b0c0"),{name:"",props:[],data:function(){return{active:"profile"}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),l=c,o=e("2877"),u=Object(o["a"])(l,i,r,!1,null,null,null),f=u.exports,m={name:"uc",props:[],data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:f}},d=m,p=(e("bdd0"),Object(o["a"])(d,s,n,!1,null,null,null));a["a"]=p.exports},bdd0:function(t,a,e){"use strict";var s=e("3ed1"),n=e.n(s);n.a},bfad:function(t,a,e){"use strict";var s=e("d38b"),n=e.n(s);n.a},d38b:function(t,a,e){}}]);
//# sourceMappingURL=chunk-d6ede764.ea628f3c.js.map