(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77c6f44b"],{"3ed1":function(t,e,a){},4200:function(t,e,a){"use strict";a("8988")},"46e8":function(t,e,a){"use strict";a.d(e,"l",(function(){return s})),a.d(e,"e",(function(){return o})),a.d(e,"j",(function(){return r})),a.d(e,"k",(function(){return p})),a.d(e,"h",(function(){return m})),a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return b})),a.d(e,"g",(function(){return f})),a.d(e,"i",(function(){return v})),a.d(e,"c",(function(){return _})),a.d(e,"m",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"f",(function(){return h}));var n=a("2777"),c=a("41cb"),i=a("65c2");function o(){return Object(c["b"])().get("/api/cms/user/my/profile")}function s(t){return Object(c["b"])().put("/api/cms/user/my/profile",t)}function r(t){return Object(c["b"])().put("/api/cms/user/my/avatar",t)}function u(t){return Object(c["b"])().post("/api/cms/upload/avatar",t)}function l(){return n["f"].get(i["__imgPath"]+"data/user_avatar_frame.json")}function h(t){return Object(c["b"])().get("/api/cms/user/".concat(t,"/info"))}function p(t){return n["c"].post("profile/password",t)}function b(){return n["c"].get("profile/email/check")}function d(t){return n["c"].get("profile/email/available",{params:{user_email:t}})}function f(t){return n["c"].post("profile/email/bind",t)}function m(){return n["c"].post("profile/email/verify")}function _(){return n["c"].get("profile/oauth/check")}function v(t){return n["c"].post("profile/oauth/unbind",t)}},7834:function(t){t.exports=JSON.parse('{"github":{"id":"5fbf7a66cd7d3d0f5153","authorize_uri":"https://github.com/login/oauth/authorize","tokenURL":"https://github.com/login/oauth/access_token","resourceURL":"https://api.github.com/user","callback":"oauth/github/callback"},"qq":{"id":"101870778","authorize_uri":"https://graph.qq.com/oauth2.0/authorize","tokenURL":"https://graph.qq.com/oauth2.0/token","resourceURL":"https://graph.qq.com/oauth2.0/me","profileURL":"https://graph.qq.com/user/get_user_info","callback":"oauth/qq/callback"},"weibo":{"id":"4076650110","authorize_uri":"https://api.weibo.com/oauth2/authorize","tokenURL":"https://api.weibo.com/oauth2/access_token","resourceURL":"https://api.weibo.com/2/users/show.json","callback":"oauth/weibo/callback"},"wechat":{"id":"wx7804c72000d28202","authorize_uri":"https://open.weixin.qq.com/connect/qrconnect","tokenURL":"https://api.weixin.qq.com/sns/oauth2/access_token","resourceURL":"https://api.weixin.qq.com/sns/userinfo","callback":"oauth/wechat/callback"}}')},8988:function(t,e,a){},b547:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-dashboard-profile m-profile"},[t._m(0),a("tabs"),t._t("default")],2)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"u-title"},[a("i",{staticClass:"el-icon-user"}),t._v(" 我的资料")])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("el-tab-pane",{attrs:{name:"profile"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-user"}),t._v(" 基本资料")])]),a("el-tab-pane",{attrs:{name:"avatar"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-camera"}),t._v(" 修改头像")])]),a("el-tab-pane",{attrs:{name:"pwd"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-lock"}),t._v(" 修改密码")])]),a("el-tab-pane",{attrs:{name:"email"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-message"}),t._v(" 邮箱设置")])]),a("el-tab-pane",{attrs:{name:"connect"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-connection"}),t._v(" 绑定账号")])])],1)},o=[],s=(a("b0c0"),{name:"",props:[],data:function(){return{active:"profile"}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),r=s,u=a("2877"),l=Object(u["a"])(r,i,o,!1,null,null,null),h=l.exports,p={name:"uc",props:[],data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:h}},b=p,d=(a("bdd0"),Object(u["a"])(b,n,c,!1,null,null,null));e["a"]=d.exports},bdd0:function(t,e,a){"use strict";a("3ed1")},fe82:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uc",{staticClass:"m-dashboard-connect"},[a("div",{staticClass:"m-profile-connect"},[a("el-alert",{staticClass:"u-tip",attrs:{title:"如需解绑则需要先绑定一个邮箱",type:"info","show-icon":""}}),a("div",{staticClass:"m-dashboard-connect-list"},t._l(t.oauth,(function(e,n){return a("el-card",{key:n,staticClass:"box-card"},[a("img",{class:"u-"+n,attrs:{"svg-inline":"",src:t._f("icon")(n)}}),a("p",{staticClass:"u-status"},[t._v(" "+t._s(t.checkStatus(n)?t.data[n]:"未绑定")+" ")]),a("el-button",{staticClass:"u-button",attrs:{type:t.checkStatus(n)?"danger":"primary"},on:{click:function(e){t.checkStatus(n)?t.unbind(n):t.bind(n)}}},[t._v(t._s(t.checkStatus(n)?"解除绑定":"绑定"))])],1)})),1)],1)])},c=[],i=a("b547"),o=a("65c2"),s=a("7834");const r={github:`${s.github.authorize_uri}?client_id=${s.github.id}&redirect_uri=${o["__server"]}${s.github.callback}`,qq:`${s.qq.authorize_uri}?client_id=${s.qq.id}&redirect_uri=${o["__server"]}${s.qq.callback}&response_type=code&scope=get_user_info&state=jx3box`,weibo:`${s.weibo.authorize_uri}?client_id=${s.weibo.id}&response_type=code&redirect_uri=${o["__server"]}${s.weibo.callback}`,wechat:`${s.wechat.authorize_uri}?appid=${s.wechat.id}&redirect_uri=${o["__server"]}${s.wechat.callback}&response_type=code&scope=snsapi_login&state=jx3box#wechat_redirect`};var u=r,l=a("46e8"),h={name:"connect",props:[],data:function(){return{data:{github:"",github_id:"",qq:"",qq_id:"",weibo:"",weibo_id:"",wechat:"",wechat_id:""},oauth:s}},computed:{},methods:{checkStatus:function(t){return!!this.data[t+"_id"]},bind:function(t){location.href=u[t]},unbind:function(t){var e=this;Object(l["i"])({uid:this.uid,type:t}).then((function(t){e.$message({message:"解绑成功",type:"success"}),location.reload()}))}},filters:{icon:function(t){return o["__imgPath"]+"image/connect/"+t+".svg"}},mounted:function(){var t=this;Object(l["c"])().then((function(e){t.data=e.data.data}))},components:{uc:i["a"]}},p=h,b=(a("4200"),a("2877")),d=Object(b["a"])(p,n,c,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-77c6f44b.b143c96c.js.map