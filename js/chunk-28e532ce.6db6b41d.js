(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28e532ce"],{"46e8":function(t,a,e){"use strict";e.d(a,"l",(function(){return u})),e.d(a,"e",(function(){return o})),e.d(a,"j",(function(){return f})),e.d(a,"k",(function(){return m})),e.d(a,"h",(function(){return g})),e.d(a,"a",(function(){return p})),e.d(a,"b",(function(){return v})),e.d(a,"g",(function(){return h})),e.d(a,"i",(function(){return j})),e.d(a,"c",(function(){return O})),e.d(a,"m",(function(){return l})),e.d(a,"d",(function(){return d})),e.d(a,"f",(function(){return b}));var n=e("41cb"),r=e("bc3a"),i=e.n(r),c=e("65c2"),s=Object(n["a"])("server",{proxy:!1});function o(){return Object(n["b"])().get("/api/cms/user/my/profile")}function u(t){return Object(n["b"])().put("/api/cms/user/my/profile",t)}function f(t){return Object(n["b"])().put("/api/cms/user/my/avatar",t)}function l(t){return Object(n["b"])().post("/api/cms/upload/avatar",t)}function d(){var t=c["__imgPath"]+"avatar/index.json";return i.a.get(t)}function b(t){return Object(n["b"])().get("/api/cms/user/".concat(t,"/info"))}function m(t){return s.post("profile/password",t)}function v(){return s.get("profile/email/check")}function p(t){return s.get("profile/email/available",{params:{user_email:t}})}function h(t){return s.post("profile/email/bind",t)}function g(){return s.post("profile/email/verify")}function O(){return Object(n["b"])().get("/api/cms/account/oauth/status")}function j(t){return Object(n["b"])({popType:"alert"}).delete("/api/cms/account/oauth/unbind/".concat(t))}},5530:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));e("b64b"),e("a4d3"),e("4de4"),e("d3b7"),e("e439"),e("159b"),e("dbb4");var n=e("ade3");function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},"9be6":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("uc",{staticClass:"m-dashboard-frame m-dashboard-skin",attrs:{icon:"el-icon-brush",title:"主题装扮","tab-list":t.tabList},scopedSlots:t._u([{key:"header",fn:function(){return[e("a",{staticClass:"u-link el-button el-button--default el-button--mini is-round is-plain",attrs:{href:"/vip/mall?category=virtual",target:"_blank"}},[e("i",{staticClass:"el-icon-shopping-cart-2"}),t._v(" 前往获取装扮")])]},proxy:!0}])},[e("div",{staticClass:"m-frame"},[e("div",{staticClass:"m-frame-left"},[e("a",{staticClass:"u-btn el-button el-button--default el-button--mini is-plain",attrs:{href:"/dashboard/avatar",target:"_blank"}},[e("i",{staticClass:"el-icon-picture-outline-round"}),t._v(" 修改头像")]),e("div",{staticClass:"u-avatar-box"},[e("div",{staticClass:"u-avatar"},[e("img",{staticClass:"u-avatar-pic",attrs:{src:t.showAvatar(t.avatar)}}),t.frame?e("i",{staticClass:"u-avatar-frame"},[e("img",{attrs:{src:t.frameUrl(t.frame)}})]):t._e()])])]),e("div",{staticClass:"m-frame-right"},[e("div",{staticClass:"u-theme"},[e("div",{staticClass:"u-frame-list"},[e("div",{staticClass:"u-title"},[e("span",{staticClass:"u-name"},[e("i",{staticClass:"el-icon-collection-tag"}),t._v("头像框")]),e("a",{staticClass:"u-buy",attrs:{href:"/vip/mall?category=virtual&sub_category=avatar",target:"_blank"}},[e("i",{staticClass:"el-icon-shopping-cart-2"}),t._v(" 前往获取")])]),e("div",{staticClass:"u-frame-item"},t._l(t.frameList,(function(a,n){return e("div",{key:n,staticClass:"u-picbox",attrs:{title:"xxx"}},[e("el-tooltip",{attrs:{effect:"dark",placement:"top","open-delay":200}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.desc)),e("br"),t._v(t._s(a.postscript))]),e("div",{staticClass:"u-pic",class:t.setClass(a),on:{click:function(e){return t.setAvatar(a)}}},[a.name?e("el-image",{attrs:{src:t.frameUrl(a.name),fit:"contain"}}):e("div",{staticClass:"u-noFrame"})],1)])],1)})),0)])])])]),e("div",{staticClass:"m-btn"},[e("el-button",{attrs:{type:"primary"},on:{click:t.updateAvatarFrame}},[t._v("确认")]),e("el-button",{on:{click:t.reset}},[t._v("重置")])],1)])},r=[],i=e("5530"),c=(e("99af"),e("d81d"),e("b0c0"),e("7db0"),e("d3b7"),e("4de4"),e("159b"),e("b64b"),e("b547")),s=e("46c1"),o=e("c9d2"),u=e("85e4"),f=e("65c2"),l=e("46e8"),d=e("aa38"),b=(e("2ef0"),{name:"frame",props:[],data:function(){return{tabList:s["c"],uid:o["a"].getInfo().uid,frameList:[],framebak:"",framesBak:{},avatar:o["a"].getInfo().avatar_origin,frame:null,frames:{},avatars:[],decoration:null}},computed:{},methods:{reset:function(){this.frame=this.framebak,this.frames=this.framesBak,this.dataProcessing()},frameUrl:function(t){if(t)return f["__imgPath"]+"avatar/images/".concat(t,"/").concat(t,".svg")},showAvatar:function(t){return Object(u["showAvatar"])(t,600)},setClass:function(t){return t.decoration&&t.receive?"receive":t.isHave?t.using?"select":void 0:"noHave"},updateAvatarFrame:function(){var t=this;Object(d["f"])({user_avatar_frame:this.frame}).then((function(a){t.$message({message:"头像框更新成功",type:"success"});var e=t.frameList.map((function(t){return{val:t.name,using:t.using,type:"avatar"}}));Object(d["e"])(e)}))},receiveFrame:function(t){var a=this;Object(d["d"])(this.uid,t).then((function(t){a.$message({message:"领取成功",type:"success"}),a.loadDecoration()}))},setAvatar:function(t){if(t.decoration&&t.receive)this.receiveFrame(t.name);else if(t.isHave){var a=this.frameList,e=a.find((function(t){return 1==t.using}));e&&(e.using=0),1==t.using?t.using=0:t.using=1,this.frame=t.name}},load:function(){var t=this;Object(l["f"])(this.uid).then((function(a){t.frame=a.data.data.user_avatar_frame||"",t.framebak=a.data.data.user_avatar_frame||""})),Object(l["d"])().then((function(a){t.frames=a.data,t.framesBak=a.data,t.loadDecoration()}))},loadDecoration:function(){var t=this;Object(d["a"])().then((function(a){var e=a.data.data,n=["atcard","homebg","sidebar","calendar"],r=e.filter((function(t){return""!=t.type&&-1!=n.indexOf(t.type)}));t.decoration=t.formattingData(r,"val"),t.avatars=e.filter((function(t){return"avatar"==t.type})),t.dataProcessing()}))},formattingData:function(t,a){var e={};return t.forEach((function(t,n){e[t[a]]?e[t[a]].push(t):e[t[a]]=[t]})),e},decorationAather:function(t){var a,e=["atcard","homebg","sidebar","calendar"],n=null===(a=this.decoration[t])||void 0===a?void 0:a.filter((function(t){return""!=t.type&&-1!=e.indexOf(t.type)}));return(null===n||void 0===n?void 0:n.length)>=4},dataProcessing:function(){var t=this,a=this.avatars||[],e=this.frames,n=[{desc:"无边框",name:"",val:"",isHave:1,using:1}],r=[],c=[];Object.keys(e).forEach((function(s,o){var u=Object(i["a"])(Object(i["a"])({},e[s]),{isHave:0,using:0,receive:!1}),f=a.find((function(t){return t.val==s}));f?(u.using=f.using,u.isHave=1,u.using&&(n[0].using=0)):u.decoration&&(u.receive=t.decorationAather(u.name)),u.isHave?n.push(u):u.decoration?r.push(u):c.push(u)})),this.frameList=[].concat(n,r,c)}},mounted:function(){this.load()},components:{uc:c["a"]}}),m=b,v=(e("d733"),e("2877")),p=Object(v["a"])(m,n,r,!1,null,null,null);a["default"]=p.exports},a86f:function(t,a,e){},aa38:function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"e",(function(){return o})),e.d(a,"b",(function(){return u})),e.d(a,"c",(function(){return f})),e.d(a,"d",(function(){return l})),e.d(a,"f",(function(){return d}));e("99af");var n=e("41cb"),r=e("bc3a"),i=e.n(r),c=e("65c2");function s(t){return Object(n["b"])().get("/api/cms/user/decoration",{params:t})}function o(t){return Object(n["b"])().post("/api/cms/user/decoration",t)}function u(){var t=c["__imgPath"]+"decoration/index.json";return i.a.get(t)}function f(){return i.a.get("".concat(c["__dataPath"],"emotion/output/catalog.json"))}function l(t,a){return Object(n["b"])().post("/api/cms/user/decoration/check-suit/".concat(t,"/").concat(a,"/for/avatar"))}function d(t){return Object(n["b"])().put("/api/cms/user/my/avatar-frame",t)}},ade3:function(t,a,e){"use strict";function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.d(a,"a",(function(){return n}))},b64b:function(t,a,e){var n=e("23e7"),r=e("7b0b"),i=e("df75"),c=e("d039"),s=c((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(r(t))}})},d733:function(t,a,e){"use strict";e("a86f")},dbb4:function(t,a,e){var n=e("23e7"),r=e("83ab"),i=e("56ef"),c=e("fc6a"),s=e("06cf"),o=e("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var a,e,n=c(t),r=s.f,u=i(n),f={},l=0;while(u.length>l)e=r(n,a=u[l++]),void 0!==e&&o(f,a,e);return f}})},e439:function(t,a,e){var n=e("23e7"),r=e("d039"),i=e("fc6a"),c=e("06cf").f,s=e("83ab"),o=r((function(){c(1)})),u=!s||o;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,a){return c(i(t),a)}})}}]);
//# sourceMappingURL=chunk-28e532ce.6db6b41d.js.map