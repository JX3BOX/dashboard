(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee2fccce"],{4208:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"m-dashboard m-dashboard-avatar"},[r("div",{staticClass:"u-preview"},[r("img",{staticClass:"u-avatar u-avatar-l",attrs:{src:t.avatar}})]),r("el-upload",{staticClass:"u-upload",attrs:{drag:"",action:t.upload_url,"with-credentials":"","on-success":t.success,"on-error":t.fail,accept:"image/png,image/gif,image/jpeg"}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或"),r("em",[t._v("点击上传")]),r("br"),r("span",{staticClass:"u-tip"},[t._v("只能上传jpg/png/gif文件")])])]),r("p",{staticClass:"u-btng"},[r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确认")]),r("el-button",{on:{click:t.reset}},[t._v("重置")])],1)],1)},s=[],n=r("ee8f"),u=r("46e8"),i=n["JX3BOX"].__server,o={name:"avatar",props:[],data:function(){return{avatar:"",bak:"",upload_url:i+"upload/avatar",path:""}},computed:{},methods:{success:function(t){this.$message({message:"上传成功",type:"success"}),this.avatar=n["Utils"].showAvatar(t.data.list[0],"l"),this.path=t.data.list[0]},fail:function(t){this.$message.error("上传失败,网络异常或非法请求")},reset:function(){this.avatar=this.bak},submit:function(){var t=this;Object(u["j"])({path:this.path}).then((function(a){a.data.code?t.$message({message:a.data.msg,type:"error"}):(n["User"].refresh("avatar",t.path),t.$message({message:"头像更新成功",type:"success"}))}))}},mounted:function(){this.avatar=n["Utils"].showAvatar(n["User"].getInfo().avatar_origin,"l"),this.bak=this.avatar}},c=o,d=(r("bfad"),r("2877")),f=Object(d["a"])(c,e,s,!1,null,null,null);a["default"]=f.exports},"46e8":function(t,a,r){"use strict";r.d(a,"l",(function(){return u})),r.d(a,"e",(function(){return n})),r.d(a,"j",(function(){return i})),r.d(a,"k",(function(){return o})),r.d(a,"g",(function(){return l})),r.d(a,"a",(function(){return d})),r.d(a,"b",(function(){return c})),r.d(a,"f",(function(){return f})),r.d(a,"i",(function(){return h})),r.d(a,"c",(function(){return p})),r.d(a,"d",(function(){return v})),r.d(a,"h",(function(){return _}));var e=r("2777"),s=r("64c7");function n(){return e["a"].get(s["__server"]+"dashboard/profile")}function u(t){return e["a"].post(s["__server"]+"dashboard/profile",t)}function i(t){return e["a"].post(s["__server"]+"dashboard/avatar/update",t)}function o(t){return e["a"].post(s["__server"]+"dashboard/password/update",t)}function c(){return e["a"].get(s["__server"]+"dashboard/email/check")}function d(t){return e["a"].get(s["__server"]+"account/email/check",{params:{user_email:t}})}function f(t){return e["a"].post(s["__server"]+"dashboard/email/bind",t)}function l(){return e["a"].post(s["__server"]+"dashboard/email/verify")}function p(){return e["a"].get(s["__server"]+"dashboard/oauth/check")}function h(t){return e["a"].post(s["__server"]+"dashboard/oauth/unbind",t)}function v(){return e["a"].get(s["__server"]+"dashboard/config")}function _(t){return e["a"].post(s["__server"]+"dashboard/config",t)}},bfad:function(t,a,r){"use strict";var e=r("d38b"),s=r.n(e);s.a},d38b:function(t,a,r){}}]);
//# sourceMappingURL=chunk-ee2fccce.e2678d43.js.map