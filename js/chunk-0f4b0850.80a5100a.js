(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f4b0850"],{"3ed1":function(t,e,s){},"46e8":function(t,e,s){"use strict";s.d(e,"l",(function(){return l})),s.d(e,"e",(function(){return i})),s.d(e,"j",(function(){return n})),s.d(e,"k",(function(){return f})),s.d(e,"h",(function(){return b})),s.d(e,"a",(function(){return d})),s.d(e,"b",(function(){return m})),s.d(e,"g",(function(){return p})),s.d(e,"i",(function(){return v})),s.d(e,"c",(function(){return h})),s.d(e,"m",(function(){return o})),s.d(e,"d",(function(){return c})),s.d(e,"f",(function(){return u}));var r=s("2777"),a=s("65c2");function i(){return r["f"].get("profile")}function l(t){return r["d"].post("profile",t)}function n(t){return r["d"].put("profile/avatar",t)}function o(t){return r["d"].post("upload/avatar",t)}function c(){return r["g"].get(a["__imgPath"]+"data/user_avatar_frame.json")}function u(t){return r["f"].get("user/overview/".concat(t))}function f(t){return r["d"].post("profile/password",t)}function m(){return r["d"].get("profile/email/check")}function d(t){return r["d"].get("profile/email/available",{params:{user_email:t}})}function p(t){return r["d"].post("profile/email/bind",t)}function b(){return r["d"].post("profile/email/verify")}function h(){return r["d"].get("profile/oauth/check")}function v(t){return r["d"].post("profile/oauth/unbind",t)}},5928:function(t,e,s){},9756:function(t){t.exports=JSON.parse('["蝶恋花","龙争虎斗","长安城","幽月轮","斗转星移","剑胆琴心","乾坤一掷","唯我独尊","梦江南","绝代天骄","天鹅坪","破阵子","飞龙在天","青梅煮酒","执子之手","奉天证道","共結來緣","傲血戰意","巔峰再起","江海雲夢"]')},b3b1:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("uc",[s("el-form",{ref:"form",staticClass:"m-profile-basic",attrs:{"label-width":"100px","label-position":t.position}},[s("el-form-item",{staticClass:"u-name",attrs:{label:"昵称"}},[s("div",{staticClass:"u-value"},[t._v(" "+t._s(t.nickname)+" "),s("a",{staticClass:"u-edit el-button el-button--primary el-button--mini",attrs:{href:"/vip/rename?from=dashboard_profile",target:"_blank"}},[s("i",{staticClass:"el-icon-edit"}),t._v(" 修改昵称")])])]),s("el-form-item",{staticClass:"u-name",attrs:{label:"服务器"}},[s("el-select",{staticClass:"u-server",attrs:{filterable:"",placeholder:"请输入服务器"},model:{value:t.form.jx3_server,callback:function(e){t.$set(t.form,"jx3_server",e)},expression:"form.jx3_server"}},t._l(t.servers,(function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})})),1),s("span",{staticClass:"u-server-tip"},[s("i",{staticClass:"el-icon-question"}),t._v(" 部分应用将使用此服务器作为默认服务器")])],1),s("el-form-item",{staticClass:"u-name"},[s("div",{attrs:{slot:"label"},slot:"label"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"此项不会被公开,仅用于赛事联系或其它确认",placement:"left"}},[s("div",[s("i",{staticClass:"el-icon-lock"}),t._v(" QQ")])])],1),s("el-input",{attrs:{placeholder:"请输入QQ号码"},model:{value:t.form.qq_number,callback:function(e){t.$set(t.form,"qq_number",e)},expression:"form.qq_number"}})],1),s("el-form-item",{staticClass:"u-birthday"},[s("div",{attrs:{slot:"label"},slot:"label"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"此项不会被公开,仅用于礼品发放",placement:"left"}},[s("div",[s("i",{staticClass:"el-icon-lock"}),t._v(" 生日")])])],1),s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1),s("el-form-item",{staticClass:"u-phone"},[s("div",{attrs:{slot:"label"},slot:"label"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"此项不会被公开,仅用于礼品发放",placement:"left"}},[s("div",[s("i",{staticClass:"el-icon-lock"}),t._v(" 联系电话")])])],1),s("el-input",{attrs:{placeholder:"请输入收货电话"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),s("el-form-item",{staticClass:"u-address"},[s("div",{attrs:{slot:"label"},slot:"label"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"此项不会被公开,仅用于礼品发放",placement:"left"}},[s("div",[s("i",{staticClass:"el-icon-lock"}),t._v(" 联系地址")])])],1),s("el-input",{attrs:{placeholder:"请输入收货地址",type:"textarea"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),s("el-form-item",{staticClass:"u-tuilan",attrs:{label:"推栏"}},[s("el-input",{attrs:{placeholder:"请输入推栏ID"},model:{value:t.form.tuilan_id,callback:function(e){t.$set(t.form,"tuilan_id",e)},expression:"form.tuilan_id"}})],1),s("el-form-item",{staticClass:"u-name",attrs:{label:"签名"}},[s("el-input",{attrs:{type:"textarea",rows:4,maxlength:"80",placeholder:"签名内容","show-word-limit":""},model:{value:t.form.user_bio,callback:function(e){t.$set(t.form,"user_bio",e)},expression:"form.user_bio"}})],1),s("el-form-item",{staticClass:"u-tv",attrs:{label:"直播间"}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"u-tv-type"},[s("el-select",{attrs:{placeholder:"请选择平台"},model:{value:t.form.tv_type,callback:function(e){t.$set(t.form,"tv_type",e)},expression:"form.tv_type"}},t._l(t.tvmap,(function(t,e){return s("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1)]),s("el-col",{attrs:{span:20}},[s("div",{staticClass:"u-tv-id",staticStyle:{"margin-left":"10px"}},[s("el-input",{attrs:{placeholder:"请输入直播间房间号"},model:{value:t.form.tv_id,callback:function(e){t.$set(t.form,"tv_id",e)},expression:"form.tv_id"}})],1)])],1)],1),s("el-form-item",{staticClass:"u-btns",attrs:{label:""}},[s("el-button",{staticClass:"u-submit",attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)},a=[],i=(s("b0c0"),s("b547")),l=s("c9d2"),n=s("46e8"),o=(s("bd13"),s("9756")),c=s("dcfd"),u={name:"profile",props:[],data:function(){return{nickname:l["a"].getInfo().name,servers:o,form:{jx3_server:"",user_bio:"",qq_number:"",phone:"",address:"",tv_id:"",tv_type:"",tuilan_id:"",birthday:""},position:window.innerWidth<768?"top":"left",tvmap:c}},computed:{},methods:{submit:function(){var t=this;Object(n["l"])(this.form).then((function(e){t.$message({message:"资料修改成功",type:"success"})}))},getProfile:function(){var t=this;Object(n["e"])().then((function(e){t.form=e.data.data}))}},mounted:function(){this.getProfile()},components:{uc:i["a"]}},f=u,m=(s("bfc8"),s("2877")),d=Object(m["a"])(f,r,a,!1,null,null,null);e["default"]=d.exports},b547:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-dashboard-profile m-profile"},[t._m(0),s("tabs"),t._t("default")],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"u-title"},[s("i",{staticClass:"el-icon-user"}),t._v(" 我的资料")])}],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("el-tab-pane",{attrs:{name:"profile"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-user"}),t._v(" 基本资料")])]),s("el-tab-pane",{attrs:{name:"avatar"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-camera"}),t._v(" 修改头像")])]),s("el-tab-pane",{attrs:{name:"pwd"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-lock"}),t._v(" 修改密码")])]),s("el-tab-pane",{attrs:{name:"email"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-message"}),t._v(" 邮箱设置")])]),s("el-tab-pane",{attrs:{name:"connect"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-connection"}),t._v(" 绑定账号")])])],1)},l=[],n=(s("b0c0"),{name:"",props:[],data:function(){return{active:"profile"}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),o=n,c=s("2877"),u=Object(c["a"])(o,i,l,!1,null,null,null),f=u.exports,m={name:"uc",props:[],data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:f}},d=m,p=(s("bdd0"),Object(c["a"])(d,r,a,!1,null,null,null));e["a"]=p.exports},bd13:function(t,e,s){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.match(/\[object (.*?)\]/)[1].toLowerCase()}s.d(e,"a",(function(){return l}));var a=r;class i{constructor(t,e){if("string"!==a(t))throw new Error("[Sterilizer::init] params should be string");this._symbols={"`":"`","~":"~","!":"!","@":"@","#":"#",$:"\\$","%":"%","^":"\\^","&":"&","*":"\\*","-":"\\-",_:"_","=":"=","+":"+","(":"\\(",")":"\\)","[":"\\[","]":"\\]","{":"\\{","}":"\\}","|":"\\|","\\":"\\\\","/":"/","?":"\\?",":":":",";":";","'":"'",'"':'"',">":">","<":"<",",":",",".":"\\."},this.symbols=Object.keys(this._symbols),this.regs=Object.values(this._symbols),this.str=t,this._str=t,this._chain=e}toString(){return this._str}_detected(t){let e=a(t),s=["string","array","set"];if(!s.includes(e))throw new Error("[Sterilizer::remove] params should be string|array|set");return t}_sterilize(t){t=[...t].join("");let e=new RegExp(`[${t}]`,"gm");return this._str=this._str.replace(e,""),this._chain?this:this.toString()}kill(t){let e=null;if(void 0==t)e=new Set(this.regs);else{this._detected(t),e=new Set;let s=new Set(t);for(let t of s)this.symbols.includes(t)&&e.add(this._symbols[t])}return this._sterilize(e)}live(t){this._detected(t);let e=new Set(this.regs);for(let s of t)this.symbols.includes(s)&&e.delete(this._symbols[s]);return this._sterilize(e)}safe(){return this.kill(["&","<",">",'"',"'","+",":","/","?","=","#","%"])}removeHSC(){return this.kill(["&","<",">",'"',"'"])}removeURL(){return this.kill(["+",":","/","?","=","&","#","%"])}removeSpace(){return this._str=this._str.replace(/\s/gm,""),this._chain?this:this.toString()}remove(t,e){let s=new RegExp(""+t,"gm");return e=void 0!==e?e:"",this._str=this._str.replace(s,e),this._chain?this:this.toString()}removeHTMLtag(){return this._str=this._str.replace(/<[^>]+>/gm,""),this._chain?this:this.toString()}}function l(t,e=!1){return new i(t,e)}},bdd0:function(t,e,s){"use strict";s("3ed1")},bfc8:function(t,e,s){"use strict";s("5928")},dcfd:function(t){t.exports=JSON.parse('{"douyu":"斗鱼","bilibili":"B站","huya":"虎牙"}')}}]);
//# sourceMappingURL=chunk-0f4b0850.80a5100a.js.map