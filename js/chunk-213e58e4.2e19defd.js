(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-213e58e4"],{"0a57":function(t,n,i){},"46e8":function(t,n,i){"use strict";i.d(n,"o",(function(){return r})),i.d(n,"e",(function(){return u})),i.d(n,"m",(function(){return s})),i.d(n,"n",(function(){return l})),i.d(n,"j",(function(){return f})),i.d(n,"a",(function(){return m})),i.d(n,"h",(function(){return b})),i.d(n,"k",(function(){return _})),i.d(n,"b",(function(){return g})),i.d(n,"p",(function(){return h})),i.d(n,"d",(function(){return d})),i.d(n,"f",(function(){return p})),i.d(n,"g",(function(){return w})),i.d(n,"l",(function(){return q})),i.d(n,"i",(function(){return v})),i.d(n,"q",(function(){return y})),i.d(n,"c",(function(){return k}));var e=i("41cb"),a=i("bc3a"),c=i.n(a),o=i("65c2");function u(){return Object(e["a"])().get("/api/cms/user/my/profile")}function r(t){return Object(e["a"])().put("/api/cms/user/my/profile",t)}function s(t){return Object(e["a"])().put("/api/cms/user/my/avatar",t)}function h(t){return Object(e["a"])().post("/api/cms/upload/avatar",t)}function d(){var t=o["__imgPath"]+"avatar/index.json";return c.a.get(t)}function p(t){return Object(e["a"])().get("/api/cms/user/".concat(t,"/info"),{params:{__no_cache:1}})}function l(t){return Object(e["a"])().put("/api/cms/user/my/password",t)}function m(t){return Object(e["a"])().get("/api/cms/user/account/email/valid",{params:{email:t}})}function b(t){return Object(e["a"])().post("/api/cms/user/account/email/bind",t)}function f(t){return Object(e["a"])().put("/api/cms/user/account/email/verify",{code:t},{app:"jx3box"})}function g(){return Object(e["a"])().get("/api/cms/account/oauth/status")}function _(t){return Object(e["a"])({popType:"alert"}).delete("/api/cms/account/oauth/unbind/".concat(t))}function w(){return Object(e["a"])().get("/api/cms/wechat/mp/bind")}function q(){return Object(e["a"])().get("/api/cms/wechat/mp/unbind")}function v(t){return Object(e["a"])().post("/api/cms/account/oauth/phone/bind",t,{app:"jx3box"})}function y(t){return Object(e["a"])().put("/api/cms/account/oauth/phone/verify",t,{app:"jx3box"})}function k(t){return Object(e["a"])().get("/api/cms/account/oauth/phone/check",{params:t})}},"76d7":function(t,n,i){"use strict";i("0a57")},7834:function(t){t.exports=JSON.parse('{"github":{"id":"5fbf7a66cd7d3d0f5153","authorize_uri":"https://github.com/login/oauth/authorize","tokenURL":"https://github.com/login/oauth/access_token","resourceURL":"https://api.github.com/user","callback":"oauth/github/callback"},"qq":{"id":"101870778","authorize_uri":"https://graph.qq.com/oauth2.0/authorize","tokenURL":"https://graph.qq.com/oauth2.0/token","resourceURL":"https://graph.qq.com/oauth2.0/me","profileURL":"https://graph.qq.com/user/get_user_info","callback":"oauth/qq/callback"},"weibo":{"id":"4076650110","authorize_uri":"https://api.weibo.com/oauth2/authorize","tokenURL":"https://api.weibo.com/oauth2/access_token","resourceURL":"https://api.weibo.com/2/users/show.json","callback":"oauth/weibo/callback"},"wechat":{"id":"wx7804c72000d28202","authorize_uri":"https://open.weixin.qq.com/connect/qrconnect","tokenURL":"https://api.weixin.qq.com/sns/oauth2/access_token","resourceURL":"https://api.weixin.qq.com/sns/userinfo","callback":"oauth/wechat/callback"}}')},bd41:function(t,n,i){t.exports=i.p+"img/loginqrcode.af2b3174.jpg"},fe82:function(t,n,i){"use strict";i.r(n);i("b0c0");var e=function(){var t=this,n=t._self._c;return n("uc",{staticClass:"m-dashboard-connect"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-profile-connect"},[n("el-alert",{staticClass:"u-tip",attrs:{title:"通过第三方账号快速登录，如需解绑则需要先绑定一个邮箱",type:"warning","show-icon":""}}),n("div",{staticClass:"m-dashboard-content-list"},t._l(t.oauth,(function(i){return n("div",{key:i,staticClass:"m-item"},[n("span",{staticClass:"u-profile-item"},[n("img",{class:"u-"+i,attrs:{"svg-inline":"",src:t.icon(i)}}),n("span",{staticClass:"u-status"},[t._v(" "+t._s(t.types[i].name)+" ")])]),t.checkStatus(t.types[i].idKey)?n("el-button",{attrs:{size:"large",type:"danger"},on:{click:function(n){return t.unbind(t.types[i].uuid)}}},[n("span",{staticClass:"u-status"},[t._v(" 解除绑定 ")])]):n("a",{staticClass:"el-button el-button--primary el-button--large",attrs:{href:t.getAuthUrl(t.types[i].uuid)}},[n("span",{staticClass:"u-status"},[t._v(" 立即绑定 ")])])],1)})),0)],1),n("el-dialog",{attrs:{visible:t.showMiniProgram,title:"绑定微信小程序",width:t.isPhone?"95%":"400px","custom-class":"m-qrcode-dialog","show-close":!1},on:{"update:visible":function(n){t.showMiniProgram=n}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("el-button",{attrs:{type:"primary"},on:{click:t.ihadBind}},[t._v("我已绑定")])]},proxy:!0}])},[n("div",{staticClass:"m-qr-content"},[n("img",{staticClass:"u-login-qrcode",attrs:{src:i("bd41"),alt:""}}),n("i",{staticClass:"u-tip"},[t._v("打开微信扫一扫，绑定小程序")]),n("small",{staticClass:"u-tip-small"},[t._v("绑定之后需要重新登陆方可生效")])])])],1)},a=[],c=(i("99af"),i("caad"),i("d3b7"),i("ac1f"),i("2532"),i("5319"),i("b547")),o=i("65c2"),u=i("7834");const r={github:`${u.github.authorize_uri}?client_id=${u.github.id}&redirect_uri=${o["__server"]}${u.github.callback}&state=login`,qq:`${u.qq.authorize_uri}?client_id=${u.qq.id}&redirect_uri=${o["__server"]}${u.qq.callback}&response_type=code&scope=get_user_info&state=login`,weibo:`${u.weibo.authorize_uri}?client_id=${u.weibo.id}&response_type=code&redirect_uri=${o["__server"]}${u.weibo.callback}&state=login`,wechat:`${u.wechat.authorize_uri}?appid=${u.wechat.id}&redirect_uri=${o["__server"]}${u.wechat.callback}&response_type=code&scope=snsapi_login&state=login#wechat_redirect`};var s=r,h=i("46e8"),d=i("41cb");function p(t,n){return Object(d["a"])().delete("/api/cms/user/union/".concat(t,"/unbind"),{params:n})}var l=location.href.includes("origin")?"origin":"std",m=o["__cms"],b={github:{icon:"github",name:"Github",uuid:"github",idKey:"github_id"},qq:{icon:"qq",name:"QQ",uuid:"qqsite",idKey:"qq_openid"},weibo:{icon:"weibo",name:"微博",uuid:"weibosite",idKey:"weibo_id"},wechat:{icon:"wechat",name:"微信",uuid:"wesite",idKey:"wechat_openid"},wechat_miniprogram:{icon:"app",name:"微信小程序",uuid:"wechat_miniprogram",idKey:"wechat_miniprogram_openid"}},f={name:"connect",props:[],data:function(){return{data:{github_name:"",github_id:"",weibo_name:"",weibo_id:"",qq_name:"",qq_unionid:"",wechat_name:"",wechat_unionid:"",wechat_miniprogram_openid:"",user_email:""},oauth:["github","qq","weibo","wechat","wechat_miniprogram"],types:b,showMiniProgram:!1,isPhone:window.innerWidth<768,loading:!1}},computed:{},methods:{checkStatus:function(t){return this.data[t]},getNickname:function(t){return this.data[t+"_name"]||"已绑定"},bind:function(t){"wechat_miniprogram"!=t?location.href=s[t].replace("state=login","state=bind_".concat(l)):this.showMiniProgram=!0},unbind:function(t){var n=this;if(this.data.user_email){"wechat"==t&&this.unbindWechat(t);var i=b[t].name;this.$confirm("确定要解绑【".concat(i,"】吗？"),"解绑",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(h["k"])(t).then((function(t){n.$message({message:"解绑成功",type:"success"}),n.loadAuth()}))})).catch((function(){}))}else this.$alert("当前账号未验证邮箱，无法解除绑定","提示",{confirmButtonText:"确定",type:"warning"}).catch((function(){}))},icon:function(t){return o["__cdn"]+"design/user/"+b[t]["icon"]+".png"},loadAuth:function(){var t=this;this.loading=!0,Object(h["b"])().then((function(n){t.data=n.data.data})).finally((function(){t.loading=!1}))},ihadBind:function(){this.showMiniProgram=!1,this.loadAuth()},getAuthUrl:function(t){return m+"api/cms/user/union/".concat(t,"/bind?client=").concat(l)},unbindWechat:function(t){var n=this;this.$confirm("如果取消则无法再通过微信扫一扫登录","确定取消绑定吗？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){p(t).then((function(t){n.$message({message:"解绑成功",type:"success"}),n.loadAuth()}))})).catch((function(){}))}},mounted:function(){this.loadAuth()},components:{uc:c["a"]}},g=f,_=(i("76d7"),i("2877")),w=Object(_["a"])(g,e,a,!1,null,null,null);n["default"]=w.exports}}]);
//# sourceMappingURL=chunk-213e58e4.2e19defd.js.map