(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b88d6dd"],{"3ed1":function(t,e,a){},4200:function(t,e,a){"use strict";var n=a("8988"),i=a.n(n);i.a},"46e8":function(t,e,a){"use strict";a.d(e,"l",(function(){return u})),a.d(e,"e",(function(){return s})),a.d(e,"j",(function(){return l})),a.d(e,"k",(function(){return b})),a.d(e,"h",(function(){return v})),a.d(e,"a",(function(){return _})),a.d(e,"b",(function(){return f})),a.d(e,"g",(function(){return m})),a.d(e,"i",(function(){return w})),a.d(e,"c",(function(){return g})),a.d(e,"m",(function(){return h})),a.d(e,"d",(function(){return d})),a.d(e,"f",(function(){return p}));var n=a("bc3a"),i=a.n(n),c=a("64c7"),o=a("4fb6"),r=i.a.create({withCredentials:!0,baseURL:c["__server"]});function s(){return r.get("profile")}function u(t){return r.post("profile",t)}function l(t){return r.put("profile/avatar",t)}function h(t){return r.post("upload/avatar",t)}function d(){return i.a.get(c["__dataPath"]+"data/box/user_avatar_frame.json")}function p(t){return i.a.get(c["__server"]+"user/overview/".concat(t))}function b(t){return r.post("profile/password",t)}function f(){return r.get("profile/email/check")}function _(t){return r.get("profile/email/available",{params:{user_email:t}})}function m(t){return r.post("profile/email/bind",t)}function v(){return r.post("profile/email/verify")}function g(){return r.get("profile/oauth/check")}function w(t){return r.post("profile/oauth/unbind",t)}Object(o["e"])(r)},"64a3":function(t){t.exports=JSON.parse('{"github":{"id":"5fbf7a66cd7d3d0f5153","authorize_uri":"https://github.com/login/oauth/authorize","tokenURL":"https://github.com/login/oauth/access_token","resourceURL":"https://api.github.com/user","callback":"oauth/github/callback"},"qq":{"id":"101870778","authorize_uri":"https://graph.qq.com/oauth2.0/authorize","tokenURL":"https://graph.qq.com/oauth2.0/token","resourceURL":"https://graph.qq.com/oauth2.0/me","profileURL":"https://graph.qq.com/user/get_user_info","callback":"oauth/qq/callback"},"weibo":{"id":"4076650110","authorize_uri":"https://api.weibo.com/oauth2/authorize","tokenURL":"https://api.weibo.com/oauth2/access_token","resourceURL":"https://api.weibo.com/2/users/show.json","callback":"oauth/weibo/callback"},"wechat":{"id":"wx7804c72000d28202","authorize_uri":"https://open.weixin.qq.com/connect/qrconnect","tokenURL":"https://api.weixin.qq.com/sns/oauth2/access_token","resourceURL":"https://api.weixin.qq.com/sns/userinfo","callback":"oauth/wechat/callback"}}')},8988:function(t,e,a){},b547:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-dashboard-profile m-profile"},[t._m(0),a("tabs"),t._t("default")],2)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"u-title"},[a("i",{staticClass:"el-icon-user"}),t._v(" 我的资料")])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("el-tab-pane",{attrs:{name:"profile"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-user"}),t._v(" 基本资料")])]),a("el-tab-pane",{attrs:{name:"avatar"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-camera"}),t._v(" 修改头像")])]),a("el-tab-pane",{attrs:{name:"pwd"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-lock"}),t._v(" 修改密码")])]),a("el-tab-pane",{attrs:{name:"email"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-message"}),t._v(" 邮箱设置")])]),a("el-tab-pane",{attrs:{name:"connect"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-connection"}),t._v(" 绑定账号")])])],1)},o=[],r=(a("b0c0"),{name:"",props:[],data:function(){return{active:"profile"}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),s=r,u=a("2877"),l=Object(u["a"])(s,c,o,!1,null,null,null),h=l.exports,d={name:"uc",props:[],data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:h}},p=d,b=(a("bdd0"),Object(u["a"])(p,n,i,!1,null,null,null));e["a"]=b.exports},bdd0:function(t,e,a){"use strict";var n=a("3ed1"),i=a.n(n);i.a},fe82:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uc",{staticClass:"m-dashboard-connect"},[a("div",{staticClass:"m-profile-connect"},[a("el-alert",{staticClass:"u-tip",attrs:{title:"如需解绑则需要先绑定一个邮箱",type:"info","show-icon":""}}),a("div",{staticClass:"m-dashboard-connect-list"},t._l(t.oauth,(function(e,n){return a("el-card",{key:n,staticClass:"box-card"},[a("img",{class:"u-"+n,attrs:{"svg-inline":"",src:t._f("icon")(n)}}),a("p",{staticClass:"u-status"},[t._v(" "+t._s(t.checkStatus(n)?t.data[n]:"未绑定")+" ")]),a("el-button",{staticClass:"u-button",attrs:{type:t.checkStatus(n)?"danger":"primary"},on:{click:function(e){t.checkStatus(n)?t.unbind(n):t.bind(n)}}},[t._v(t._s(t.checkStatus(n)?"解除绑定":"绑定"))])],1)})),1)],1)])},i=[],c=a("b547"),o=a("64c7"),r=a("64a3");const s={github:`${r.github.authorize_uri}?client_id=${r.github.id}&redirect_uri=${o["__server"]}${r.github.callback}`,qq:`${r.qq.authorize_uri}?client_id=${r.qq.id}&redirect_uri=${o["__server"]}${r.qq.callback}&response_type=code&scope=get_user_info&state=jx3box`,weibo:`${r.weibo.authorize_uri}?client_id=${r.weibo.id}&response_type=code&redirect_uri=${o["__server"]}${r.weibo.callback}`,wechat:`${r.wechat.authorize_uri}?appid=${r.wechat.id}&redirect_uri=${o["__server"]}${r.wechat.callback}&response_type=code&scope=snsapi_login&state=jx3box#wechat_redirect`};var u=s,l=a("46e8"),h={name:"connect",props:[],data:function(){return{data:{github:"",github_id:"",qq:"",qq_id:"",weibo:"",weibo_id:"",wechat:"",wechat_id:""},oauth:r}},computed:{},methods:{checkStatus:function(t){return!!this.data[t+"_id"]},bind:function(t){location.href=u[t]},unbind:function(t){var e=this;Object(l["i"])({uid:this.uid,type:t}).then((function(t){e.$message({message:"解绑成功",type:"success"}),location.reload()}))}},filters:{icon:function(t){return o["__imgPath"]+"image/connect/"+t+".svg"}},mounted:function(){var t=this;Object(l["c"])().then((function(e){t.data=e.data.data}))},components:{uc:c["a"]}},d=h,p=(a("4200"),a("2877")),b=Object(p["a"])(d,n,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-4b88d6dd.2ed1d6b5.js.map