(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-061d1450"],{"167c":function(t,e,i){},"46e8":function(t,e,i){"use strict";i.d(e,"m",(function(){return c})),i.d(e,"d",(function(){return o})),i.d(e,"k",(function(){return l})),i.d(e,"l",(function(){return h})),i.d(e,"h",(function(){return v})),i.d(e,"a",(function(){return f})),i.d(e,"g",(function(){return p})),i.d(e,"i",(function(){return _})),i.d(e,"b",(function(){return b})),i.d(e,"n",(function(){return u})),i.d(e,"c",(function(){return d})),i.d(e,"e",(function(){return m})),i.d(e,"f",(function(){return g})),i.d(e,"j",(function(){return w}));var n=i("41cb"),s=i("bc3a"),a=i.n(s),r=i("65c2");function o(){return Object(n["a"])().get("/api/cms/user/my/profile")}function c(t){return Object(n["a"])().put("/api/cms/user/my/profile",t)}function l(t){return Object(n["a"])().put("/api/cms/user/my/avatar",t)}function u(t){return Object(n["a"])().post("/api/cms/upload/avatar",t)}function d(){var t=r["__imgPath"]+"avatar/index.json";return a.a.get(t)}function m(t){return Object(n["a"])().get("/api/cms/user/".concat(t,"/info"),{params:{__no_cache:1}})}function h(t){return Object(n["a"])().put("/api/cms/user/account/email/reset-password",t,{app:"jx3box"})}function f(t){return Object(n["a"])().get("/api/cms/user/account/email/valid",{params:{email:t}})}function p(t){return Object(n["a"])().post("/api/cms/user/account/email/bind",t)}function v(t){return Object(n["a"])().put("/api/cms/user/account/email/verify",{code:t},{app:"jx3box"})}function b(){return Object(n["a"])().get("/api/cms/account/oauth/status")}function _(t){return Object(n["a"])({popType:"alert"}).delete("/api/cms/account/oauth/unbind/".concat(t))}function g(){return Object(n["a"])().get("/api/cms/wechat/mp/bind")}function w(){return Object(n["a"])().get("/api/cms/wechat/mp/unbind")}},"498a":function(t,e,i){"use strict";var n=i("23e7"),s=i("58a8").trim,a=i("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return s(this)}})},"7d0e":function(t,e,i){},9085:function(t,e,i){},"95a1":function(t,e,i){},9945:function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.match(/\[object (.*?)\]/)[1].toLowerCase()}Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(t){if("string"!==n(t))throw new Error("[Sterilizer::init] params should be string");this._symbols={"`":"`","~":"~","!":"!","@":"@","#":"#",$:"\\$","%":"%","^":"\\^","&":"&","*":"\\*","-":"\\-",_:"_","=":"=","+":"+","(":"\\(",")":"\\)","[":"\\[","]":"\\]","{":"\\{","}":"\\}","|":"\\|","\\":"\\\\","/":"/","?":"\\?",":":":",";":";","'":"'",'"':'"',">":">","<":"<",",":",",".":"\\."},this.symbols=Object.keys(this._symbols),this.regs=Object.values(this._symbols),this.str=t,this._str=t}toString(){return this._str}_detected(t){let e=n(t),i=["string","array","set"];if(!i.includes(e))throw new Error("[Sterilizer::remove] params should be string|array|set");return t}_sterilize(t){t=[...t].join("");let e=new RegExp(`[${t}]`,"gm");return this._str=this._str.replace(e,""),this}kill(t){let e=null;if(void 0==t)e=new Set(this.regs);else{this._detected(t),e=new Set;let i=new Set(t);for(let t of i)this.symbols.includes(t)&&e.add(this._symbols[t])}return this._sterilize(e)}live(t){this._detected(t);let e=new Set(this.regs);for(let i of t)this.symbols.includes(i)&&e.delete(this._symbols[i]);return this._sterilize(e)}safe(){return this.kill(["&","<",">",'"',"'","+",":","/","?","=","#","%"])}removeHSC(){return this.kill(["&","<",">",'"',"'"])}removeURL(){return this.kill(["+",":","/","?","=","&","#","%"])}removeSpace(){return this._str=this._str.replace(/\s/gm,""),this}remove(t,e){let i=new RegExp(""+t,"gm");return e=void 0!==e?e:"",this._str=this._str.replace(i,e),this}removeHTMLtag(){return this._str=this._str.replace(/<[^>]+>/gm,""),this}isDirty(t){return t?this.str.includes(t):this.symbols.some(t=>this.str.includes(t))}}function a(t){return new s(t)}class r{constructor(t,e){this.val=t,this.opt=e||{}}check(){try{if(1==this.opt.isOptional&&this.isOptional())return!0;for(let t in this.opt)if("isOptional"!=t&&!this[t](this.opt[t]))return!1;return!0}catch(t){console.error(t)}}isOptional(){let t=["",void 0,null];return!!t.includes(this.val)}is(t){if(!t instanceof RegExp)throw new Error("[Validator::is] param should be a RegExp");return t.test(this.val)}not(t){return!this.is(t)}len(t){let e=this.val.length;if("array"==n(t))return e>=t[0]&&e<=t[1];if("string"==n(t)||"number"==n(t))return e==t;throw new Error("[Validator::len] param should be array|string|number")}isIn(t){if("array"!=n(t))throw new Error("[Validator::isIn] param should be an array");return!!t.includes(this.val)}notIn(t){return!this.isIn(t)}isAlpha(t){return!t||/^[A-Z]+$/i.test(this.val)}isAlphanumeric(t){return!t||/^[A-Z0-9]+$/i.test(this.val)}isNumeric(t){return!t||/^[0-9]+$/.test(this.val)}isInt(t){return!t||/^(?:[-+]?(?:0|[1-9][0-9]*))$/.test(this.val)}isFloat(t){return!t||/^[-+]?[0-9]*\.?[0-9]+$/.test(this.val)}max(t){return this.val<=t}min(t){return this.val>=t}isChinese(t){return!t||/^[\u4e00-\u9fa5]+$/.test(this.val)}isIdentityCard(t){return!t||/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.val)}isMobilePhone(t){return!t||/^1[3456789]\d{9}$/.test(this.val)}isEmail(t){return!t||/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(this.val)}notEmpty(t){return!t||!/\s/gm.test(this.val)}}function o(t,e){const i=new r(t,e);return i.check()}e.Sterilizer=s,e.Validator=r,e.sterilizer=a,e.validator=o},"9a29":function(t,e,i){},ab43:function(t,e,i){"use strict";i.r(e);i("b0c0");var n=function(){var t=this,e=t._self._c;return e("uc",{staticClass:"m-dashboard-notice"},[e("div",{staticClass:"m-dashboard-content"},[e("el-alert",{staticClass:"u-tip",attrs:{title:"配置你的联系方式以接收魔盒通知",type:"warning","show-icon":""}}),e("div",{staticClass:"m-dashboard-content-list"},t._l(t.list,(function(i,n){return e("div",{key:n,staticClass:"m-item"},[e("span",{staticClass:"u-notice-item"},[e("img",{staticClass:"u-icon",attrs:{"svg-inline":"",src:t.icon(i.key)}}),e("span",{staticClass:"u-label"},[t._v(t._s(i.name))])]),e(i.component,{tag:"component"})],1)})),0)],1)])},s=[],a=i("b547"),r=i("65c2"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-notice-wechat u-notice-box"},[e("div",{staticClass:"u-notice-value"},[t.isWechatVerified?e("span",{staticClass:"u-value"},[t._v("******")]):t._e(),e("el-tag",{staticClass:"u-notice-status",attrs:{type:t.isWechatVerified?"success":"info",size:"small"}},[t._v(t._s(t.isWechatVerified?"已绑定":"未绑定"))])],1),t.isWechatVerified?e("el-button",{staticClass:"u-bind-button",attrs:{type:"danger",icon:"el-icon-connection",circle:t.isPhone},on:{click:t.unbind}},[t._v("解除绑定 ")]):e("el-button",{staticClass:"u-bind-button",attrs:{type:"primary",circle:t.isPhone,icon:"el-icon-connection"},on:{click:t.open}},[t._v("绑定公众号 ")]),e("el-dialog",{attrs:{title:"绑定微信公众号",visible:t.visible,width:"30%","custom-class":"m-notice-wechat__dialog","before-close":t.handleClose},on:{"update:visible":function(e){t.visible=e}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-wechat-content"},[t.ticket?e("el-image",{staticClass:"u-qr",attrs:{src:t.qrcodeValue,lazy:""}},[e("div",{staticClass:"u-error",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"})])]):t._e(),e("i",{staticClass:"u-tip"},[t._v("打开微信扫一扫，关注公众号接收通知告警")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.success,expression:"success"}],staticClass:"u-bind"},[e("i",{staticClass:"el-icon-success",staticStyle:{color:"#67c23a","margin-right":"5px"}}),e("span",{staticClass:"u-bind-text"},[t._v("绑定成功")])])],1)])],1)},c=[],l=(i("99af"),i("d3b7"),i("46e8")),u=i("8e44"),d=i("41cb"),m=i("c9d2"),h="https://mp.weixin.qq.com/cgi-bin/showqrcode",f={name:"wechat",data:function(){return{ticket:"",visible:!1,sse:null,profile:null,success:!1,loading:!1,isPhone:window.innerWidth<768}},computed:{token:function(){return m["a"].getToken()},url:function(){return r["__cms"]+"api/cms/wechat/mp/bind/result?token="+this.token},isWechatVerified:function(){var t;return!(null===(t=this.profile)||void 0===t||!t.wechat_mp_openid)},qrcodeValue:function(){return"".concat(h,"?ticket=").concat(encodeURIComponent(this.ticket))}},mounted:function(){this.loadUser()},methods:{loadUser:function(){var t=this;Object(u["b"])().then((function(e){t.profile=e.data.data}))},open:function(){this.visible=!0,this.loadQrcode()},handleClose:function(){this.visible=!1,this.sse&&this.sse.disconnect()},loadQrcode:function(){var t=this;this.loading=!0,Object(l["f"])().then((function(e){var i;t.ticket=null===(i=e.data.data)||void 0===i?void 0:i.ticket,!t.isWechatVerified&&t.ticket&&(t.sse&&t.sse.disconnect(),t.initSSE())})).finally((function(){t.loading=!1}))},initSSE:function(){this.sse=new d["e"](this.url),this.sse.connect(),this.sse.on("open",(function(t){console.log("SSE Initialization")})),this.sse.on("bind_wx_mp",this.onMessage),this.sse.on("error",(function(t){console.log("SSE Error",t)}))},onMessage:function(){var t=this;this.success=!0,this.profile.wechat_mp_openid=!0,setTimeout((function(){t.visible=!1}),4e3)},unbind:function(){var t=this;this.$confirm("解绑后无法用微信接收魔盒通知消息，确定解绑吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["j"])().then((function(){t.$notify({title:"解绑成功",type:"success",duration:2e3}),t.loadUser()}))}))}}},p=f,v=(i("ae0b"),i("2877")),b=Object(v["a"])(p,o,c,!1,null,null,null),_=b.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-notice-email u-notice-box"},[e("div",{staticClass:"u-notice-value"},[e("span",{staticClass:"u-address"},[t._v(t._s(t.blurAddress(t.currentEmail)))]),t.currentEmail?e("el-tag",{staticClass:"u-notice-status",attrs:{type:t.verified?"success":"warning",size:"small"}},[t._v(t._s(t.verified?"已验证":"未验证"))]):t._e()],1),e("el-button",{staticClass:"u-button",attrs:{type:"primary",circle:t.isPhone,icon:"el-icon-edit"},on:{click:function(e){t.visible=!0}}},[t._v(t._s(t.verified?"修改邮箱":"绑定邮箱"))]),e("email-dialog",{attrs:{email:t.currentEmail,verified:t.verified},on:{update:t.onUpdate},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1)},w=[],y=(i("ac1f"),i("5319"),i("9945")),C=(i("498a"),function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{visible:t.modelValue,"custom-class":"m-email-dialog",width:t.isPhone?"90%":"950px"},on:{close:t.close}},[e("div",{staticClass:"m-content"},[e("div",{staticClass:"m-pic"}),e("div",{staticClass:"m-info"},[e("div",{staticClass:"u-title"},[t._v("更新邮箱")]),e("div",{staticClass:"u-email"},[t._v(" 当前邮箱地址："),e("span",{staticClass:"u-value"},[t._v(t._s(t.email||"当前未绑定邮箱")),t.email?e("el-tag",{staticClass:"u-status",attrs:{type:t.verified?"success":"warning",size:"mini"}},[t._v(t._s(t.verified?"已验证":"未验证"))]):t._e()],1)]),e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"status-icon":""}},[e("el-form-item",{attrs:{prop:"email"}},[e("el-input",{attrs:{size:"large","prefix-icon":"el-icon-message",placeholder:"请输入邮箱",clearable:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email","string"===typeof e?e.trim():e)},expression:"form.email"}})],1),t.hasSendBindEmail?e("el-form-item",{staticClass:"u-code-input",attrs:{prop:"code"}},[e("el-input",{attrs:{size:"large","prefix-icon":"el-icon-lock",placeholder:"请输入验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code","string"===typeof e?e.trim():e)},expression:"form.code"}})],1):t._e()],1),t.hasSendBindEmail?e("el-alert",{staticClass:"u-alert",attrs:{title:"邮件发送成功",type:"success",description:"一封邮箱验证的邮件已发送至您的邮箱,请注意查收","show-icon":"",closable:!1}}):t._e(),e("div",{staticClass:"m-action"},[t.hasSendBindEmail?t._e():e("el-button",{attrs:{type:"primary",size:"large",disabled:!t.form.email,icon:"el-icon-position"},on:{click:t.bind}},[t._v(" 发送验证邮件")]),t.hasSendBindEmail?e("el-button",{attrs:{type:"primary",size:"large",disabled:!t.form.code,icon:"el-icon-position",loading:t.loading},on:{click:t.submit}},[t._v("确认")]):t._e()],1)],1)])])}),j=[],k=(i("d9e2"),{name:"email_dialog",props:{modelValue:{type:Boolean,default:!1},email:{type:String,default:""},verified:{type:Boolean,default:!1}},model:{prop:"modelValue",event:"update:modelValue"},data:function(){return{form:{email:"",code:""},rules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"},{validator:this.checkEmail,trigger:"blur"}]},loading:!1,hasSendBindEmail:!1,isPhone:window.innerWidth<768}},computed:{btnText:function(){return this.hasSendBindEmail?"确认":"发送验证邮件"}},methods:{close:function(){this.$emit("update:modelValue",!1),this.form.email="",this.form.code="",this.hasSendBindEmail=!1,this.$refs.form.resetFields()},checkEmail:function(t,e,i){e===this.email&&this.verified&&i(new Error("不可重复验证相同邮箱")),Object(l["a"])(e).then((function(t){var e;null!==(e=t.data.data)&&void 0!==e&&e.isExist?i(new Error("邮箱已被绑定")):i()}))},bind:function(){var t=this;this.$refs.form.validate((function(e){e&&Object(l["g"])({email:t.form.email}).then((function(e){t.hasSendBindEmail=!0}))}))},submit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.loading=!0,Object(l["h"])(t.form.code).then((function(e){t.$emit("update"),t.$message.success("邮箱绑定成功"),t.close(),t.loading=!1})))}))}}}),x=k,E=(i("b58a"),Object(v["a"])(x,C,j,!1,null,null,null)),O=E.exports,S={name:"email",components:{EmailDialog:O},data:function(){return{visible:!1,verified:!1,currentEmail:"",isPhone:window.innerWidth<768}},methods:{checkEmail:function(){var t=this;if(""==this.email)return this.email_validate=null,void(this.email_available=null);var e=Object(y["validator"])(this.email,{isEmail:!0,len:[3,50]});this.email_validate=e,e&&Object(l["a"])(this.email).then((function(e){var i;t.email_available=!(null!==(i=e.data.data)&&void 0!==i&&i.isExist)}))},bind:function(){var t=this;this.ready?Object(l["g"])({email:this.email}).then((function(e){t.$alert("申请提交成功,请前往邮箱验证","消息",{confirmButtonText:"确定"}),t.status=!0,t.verified=!1,t.address=t.email})):this.$message.error("邮箱地址不合法")},handleClose:function(){this.visible=!1},blurAddress:function(t){return t.replace(/(.{2}).*(.{0}@.*)/,"$1****$2")},load:function(){var t=this;Object(l["d"])().then((function(e){var i=e.data.data;t.currentEmail=null===i||void 0===i?void 0:i.user_email,t.verified=!(null===i||void 0===i||!i.verify_email)}))},onUpdate:function(){this.load()}},mounted:function(){this.load()}},$=S,z=(i("b0f2"),Object(v["a"])($,g,w,!1,null,null,null)),V=z.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-notice-phone u-notice-box"},[e("div",{staticClass:"u-notice-value"},[t.phone?e("span",{staticClass:"u-address"},[t._v(t._s(t.phoneStr(t.phone)))]):t._e(),e("el-tag",{staticClass:"u-notice-status",attrs:{type:t.phone?"success":"info",size:"small"}},[t._v(t._s(t.phone?"已绑定":"未绑定"))])],1),e("el-button",{staticClass:"u-button",attrs:{type:"primary",circle:t.isPhone,icon:"el-icon-edit"},on:{click:function(e){t.visible=!0}}},[t._v(t._s(t.phone?"修改手机":"绑定手机"))]),e("el-dialog",{attrs:{title:"绑定手机",visible:t.visible,width:"30%","custom-class":"m-notice-phone__dialog","before-close":t.handleClose},on:{"update:visible":function(e){t.visible=e}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-phone-content"},[e("el-image",{staticClass:"u-qr",attrs:{src:t.qrcodeValue,lazy:""}},[e("div",{staticClass:"u-error",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"})])]),e("i",{staticClass:"u-tip"},[t._v("打开微信扫一扫，"+t._s(t.phone?"修改":"绑定")+"手机号")])],1)])],1)},B=[],q={name:"phone",data:function(){return{visible:!1,phone:"",isPhone:window.innerWidth<768,qrcodeValue:"",loading:!1}},methods:{phoneStr:function(t){return t?t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"):""},onUpdate:function(){this.visible=!1},handleClose:function(){this.visible=!1}},mounted:function(){var t=this;Object(l["d"])().then((function(e){t.phone=e.data.data.user_phone}))}},W=q,A=(i("d0dc"),Object(v["a"])(W,P,B,!1,null,null,null)),I=A.exports,R={name:"notice",components:{uc:a["a"],wechat:_,email:V},data:function(){return{list:[{key:"email",name:"邮箱",component:V},{key:"wechat",name:"微信",component:_},{key:"phone",name:"手机",component:I}]}},methods:{icon:function(t){return r["__imgPath"]+"image/connect/"+t+".svg"}},mounted:function(){}},T=R,U=(i("b014"),Object(v["a"])(T,n,s,!1,null,null,null));e["default"]=U.exports},ae0b:function(t,e,i){"use strict";i("167c")},b014:function(t,e,i){"use strict";i("95a1")},b0f2:function(t,e,i){"use strict";i("9085")},b58a:function(t,e,i){"use strict";i("9a29")},c8d2:function(t,e,i){"use strict";var n=i("5e77").PROPER,s=i("d039"),a=i("5899"),r="​᠎";t.exports=function(t){return s((function(){return!!a[t]()||r[t]()!==r||n&&a[t].name!==t}))}},d0dc:function(t,e,i){"use strict";i("7d0e")}}]);
//# sourceMappingURL=chunk-061d1450.d0881b28.js.map