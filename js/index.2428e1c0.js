(function(e){function t(t){for(var a,c,r=t[0],i=t[1],l=t[2],u=0,h=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={index:0},s={index:0},o=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aadb8":"3879fe90","chunk-60002ce7":"1643c7a3","chunk-10798414":"664077d9","chunk-1a429705":"390ab0aa","chunk-2232ecb1":"d97f0c00","chunk-31b32ff6":"4acd548a","chunk-325d6e39":"955fca4a","chunk-32748160":"8728b8a6","chunk-54a4dcf8":"5f5af415","chunk-63574f58":"3788602c","chunk-a9699270":"44fe72d0","chunk-ae2735b2":"6184c811","chunk-b685d95c":"639287b1","chunk-e07dfcfe":"a0a48d80","chunk-ee2fccce":"722f8a1c","chunk-c9c543e4":"9aba02a4"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-10798414":1,"chunk-1a429705":1,"chunk-2232ecb1":1,"chunk-31b32ff6":1,"chunk-325d6e39":1,"chunk-32748160":1,"chunk-54a4dcf8":1,"chunk-63574f58":1,"chunk-a9699270":1,"chunk-ae2735b2":1,"chunk-b685d95c":1,"chunk-e07dfcfe":1,"chunk-ee2fccce":1,"chunk-c9c543e4":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0aadb8":"31d6cfe0","chunk-60002ce7":"31d6cfe0","chunk-10798414":"4c0ba07e","chunk-1a429705":"e7a4e272","chunk-2232ecb1":"0dcc417e","chunk-31b32ff6":"0cdd3149","chunk-325d6e39":"06cbec32","chunk-32748160":"f26c3515","chunk-54a4dcf8":"84aec649","chunk-63574f58":"e694d63e","chunk-a9699270":"8e4ebed3","chunk-ae2735b2":"bb827b9f","chunk-b685d95c":"15b77237","chunk-e07dfcfe":"07d73199","chunk-ee2fccce":"a0dfd63d","chunk-c9c543e4":"aef0bd89"}[e]+".css",s=i.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return t()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){l=h[r],u=l.getAttribute("data-href");if(u===a||u===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],d.parentNode.removeChild(d),n(o)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){c[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=r(e);var h=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",h.name="ChunkLoadError",h.type=a,h.request=c,n[1](h)}s[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://oss.jx3box.com/static/dashboard/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("7ea5")},"0f89":function(e,t,n){"use strict";var a=n("29c8"),c=n.n(a);c.a},"216c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"m-nav"},[e._m(0),n("h5",{staticClass:"u-title"},[e._v("写作台")]),n("div",{staticClass:"m-nav-group"},[n("a",{class:e.isActive("work"),attrs:{href:"/dashboard/#/work"}},[n("i",{staticClass:"el-icon-collection"}),n("span",[e._v("我的作品")])]),n("a",{class:e.isActive("wiki"),attrs:{href:"/dashboard/#/wiki"}},[n("i",{staticClass:"el-icon-collection"}),n("span",[e._v("百科贡献")])]),n("a",{class:e.isActive("bb"),attrs:{href:"/dashboard/#/bb"}},[n("i",{staticClass:"el-icon-collection"}),n("span",[e._v("词条贡献")])]),n("a",{class:e.isActive("other"),attrs:{href:"/dashboard/#/other"}},[n("i",{staticClass:"el-icon-collection"}),n("span",[e._v("其它")])])]),n("h5",{staticClass:"u-title"},[e._v("仓库")]),n("div",{staticClass:"m-nav-group"},[n("a",{class:e.isActive("msg"),attrs:{href:"/dashboard/#/msg"}},[n("i",{staticClass:"el-icon-bell"}),n("span",[e._v("我的消息")])]),n("a",{staticClass:"u-fav",class:e.isActive("fav"),attrs:{href:"/dashboard/#/fav"}},[n("i",{staticClass:"el-icon-star-off"}),n("span",[e._v("我的收藏")])]),n("a",{staticClass:"disabled",class:e.isActive("feed"),attrs:{href:"/dashboard/#/feed"}},[n("i",{staticClass:"el-icon-view"}),n("span",[e._v("我的订阅")])]),n("a",{staticClass:"disabled",class:e.isActive("collection"),attrs:{href:"/dashboard/#/collection"}},[n("i",{staticClass:"el-icon-folder"}),n("span",[e._v("我的文集")])])]),n("h5",{staticClass:"u-title"},[e._v("账号中心")]),n("div",{staticClass:"m-nav-group"},[n("a",{class:e.isActive("profile"),attrs:{href:"/dashboard/#/profile"}},[n("i",{staticClass:"el-icon-user"}),n("span",[e._v("资料设置")])]),e._m(1),n("a",{class:e.isActive("config"),attrs:{href:"/dashboard/#/config"}},[n("i",{staticClass:"el-icon-setting"}),n("span",[e._v("通知设置")])]),n("a",{attrs:{href:e.feedback,target:"_blank"}},[n("i",{staticClass:"el-icon-phone-outline"}),n("span",[e._v("需要帮助")])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"m-nav-publish el-button el-button--primary",attrs:{href:"/dashboard/publish"}},[n("i",{staticClass:"el-icon-edit-outline"}),n("span",[e._v("发布中心")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"/vip/credit",target:"_blank"}},[n("i",{staticClass:"el-icon-coin"}),n("span",[e._v("积分中心")])])}],s=(n("b0c0"),n("ee8f")),o=s.JX3BOX,r={name:"Nav",data:function(){return{feedback:o.feedback}},computed:{},methods:{isActive:function(e){return this.$route.name==e?"on":""}},mounted:function(){}},i=r,l=(n("c4da"),n("2877")),u=Object(l["a"])(i,a,c,!1,null,null,null);t["a"]=u.exports},2250:function(e,t,n){"use strict";var a=n("d1b8"),c=n.n(a);c.a},"29c8":function(e,t,n){},"7ea5":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=n("5c96"),s=n.n(c),o=n("6a69"),r=(n("6b30"),n("c5b4"),n("b9d3")),i=(n("d3b7"),n("8c4f")),l=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-a9699270")]).then(n.bind(null,"1e4b"))},u=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-31b32ff6")]).then(n.bind(null,"6e42"))},h=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-1a429705")]).then(n.bind(null,"ce7af"))},d=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-b685d95c")]).then(n.bind(null,"b7e7"))},f=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-2232ecb1")]).then(n.bind(null,"6ecd"))},p=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-10798414")]).then(n.bind(null,"33de"))},b=function(){return n.e("chunk-c9c543e4").then(n.bind(null,"da61"))},m=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-325d6e39")]).then(n.bind(null,"d51a"))},v=function(){return n.e("chunk-2d0aadb8").then(n.bind(null,"1399"))},k=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-e07dfcfe")]).then(n.bind(null,"b3b1"))},g=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-ee2fccce")]).then(n.bind(null,"4208"))},w=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-ae2735b2")]).then(n.bind(null,"7cb6"))},_=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-54a4dcf8")]).then(n.bind(null,"b622a"))},C=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-32748160")]).then(n.bind(null,"fe82"))},y=function(){return Promise.all([n.e("chunk-60002ce7"),n.e("chunk-63574f58")]).then(n.bind(null,"f121"))};a["default"].use(i["a"]);var x=[{name:"index",path:"/",component:l},{name:"work",path:"/work/:type?",component:u},{name:"wiki",path:"/wiki",component:h},{name:"bb",path:"/bb",component:f},{name:"other",path:"/other",component:d},{name:"msg",path:"/msg",component:p},{name:"feed",path:"/feed",component:b},{name:"fav",path:"/fav",component:m},{name:"collection",path:"/collection",component:v},{name:"profile",path:"/profile",component:k},{name:"avatar",path:"/avatar",component:g},{name:"pwd",path:"/pwd",component:w},{name:"email",path:"/email",component:_},{name:"connect",path:"/connect",component:C},{name:"config",path:"/config",component:y}],P=new i["a"]({routes:x}),M=P,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Breadcrumb",{attrs:{name:"个人中心",slug:"dashboard",root:"/dashboard"}},[n("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 341.333 341.333","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[n("path",{attrs:{d:"M128 128h85.333v85.333H128zM0 0h85.333v85.333H0zM128 256h85.333v85.333H128zM0 128h85.333v85.333H0zM0 256h85.333v85.333H0zM256 0h85.333v85.333H256zM128 0h85.333v85.333H128zM256 128h85.333v85.333H256zM256 256h85.333v85.333H256z"}})]),n("Info")],1),n("LeftSidebar",[n("Nav")],1),n("Main",{staticClass:"m-dashboard-container",class:{"m-dashboard-person":e.isProfile},attrs:{withoutRight:!0}},[n("tabs",{directives:[{name:"show",rawName:"v-show",value:e.isProfile,expression:"isProfile"}]}),n("router-view")],1)],1)},j=[],A=(n("caad"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":e.changeTab},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("el-tab-pane",{attrs:{name:"profile"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{staticClass:"el-icon-user"}),e._v(" 基本资料")])]),n("el-tab-pane",{attrs:{name:"avatar"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{staticClass:"el-icon-camera"}),e._v(" 修改头像")])]),n("el-tab-pane",{attrs:{name:"pwd"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{staticClass:"el-icon-lock"}),e._v(" 修改密码")])]),n("el-tab-pane",{attrs:{name:"email"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("svg",{staticClass:"octicon octicon-mail",class:"u-mail",attrs:{viewBox:"0 0 14 16",width:"14",height:"16","aria-hidden":"true","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"}})]),e._v(" 邮箱设置")])]),n("el-tab-pane",{attrs:{name:"connect"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{staticClass:"el-icon-connection"}),e._v(" 绑定账号")])])],1)}),z=[],E={name:"",props:[],data:function(){return{active:"profile"}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}},L=E,$=n("2877"),H=Object($["a"])(L,A,z,!1,null,null,null),S=H.exports,T=n("8f33"),B=n("216c"),N=n("9671"),I=["profile","avatar","email","pwd","connect"],J={name:"dashboard",props:[],data:function(){return{}},computed:{isProfile:function(){return I.includes(this.$route.name)}},methods:{},created:function(){Object(N["a"])()},components:{Info:T["a"],Nav:B["a"],tabs:S}},V=J,X=(n("2250"),Object($["a"])(V,O,j,!1,null,null,null)),U=X.exports;a["default"].config.productionTip=!1,a["default"].use(s.a),a["default"].use(o["a"]),a["default"].prototype.failCallback=r["a"],new a["default"]({router:M,render:function(e){return e(U)}}).$mount("#app")},"8f33":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-info"},[n("div",{staticClass:"u-stat"}),n("div",{staticClass:"u-home"},[n("a",{staticClass:"el-button el-button--default is-plain",attrs:{href:e.home}},[n("svg",{class:"u-home-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M256 152.96L79.894 288.469v181.549h141.507V336.973h75.175v133.045h135.531V288.469z"}}),n("path",{attrs:{d:"M439.482 183.132V90.307h-74.166v35.77L256 41.982 0 238.919l35.339 45.936L256 115.062l220.662 169.794L512 238.92z"}})]),e._v("个人主页")])])])},c=[],s=n("ee8f"),o=(s.JX3BOX,s.User),r=s.Utils,i={name:"Info",props:[],data:function(){return{uid:o.getInfo().uid}},computed:{home:function(){return r.authorLink(this.uid)}},methods:{},mounted:function(){}},l=i,u=(n("0f89"),n("2877")),h=Object(u["a"])(l,a,c,!1,null,null,null);t["a"]=h.exports},9345:function(e,t,n){},9671:function(e,t,n){"use strict";var a=n("c9d2"),c=n.n(a);n("64c7");t["a"]=function(){"www.jx3box.com"==location.hostname&&(c.a.isLogin()||(c.a.destroy(),c.a.toLogin()))}},b9d3:function(e,t,n){"use strict";n("99af");function a(e,t){t&&(void 0!=t.processing&&(t.processing=!1),e.response&&e.response.data&&e.response.data.code?t.$message.error("[".concat(e.response.data.code,"] ").concat(e.response.data.msg)):t.$message.error("网络请求异常")),console.log(e)}t["a"]=a},c4da:function(e,t,n){"use strict";var a=n("9345"),c=n.n(a);c.a},d1b8:function(e,t,n){}});
//# sourceMappingURL=index.2428e1c0.js.map