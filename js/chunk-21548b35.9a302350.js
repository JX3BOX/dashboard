(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21548b35"],{"1e4b":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"m-dashboard m-dashboard-index"},[r("div",{staticClass:"m-basicinfo"},[r("i",{staticClass:"u-avatar"},[r("i",{staticClass:"u-avatar-avt"},[r("img",{staticClass:"u-avatar-avt-pic",attrs:{src:t.avatar}})])]),r("h1",{staticClass:"u-name"},[t._v(t._s(t.name))]),r("div",{staticClass:"u-uid"},[r("em",[t._v("UID")]),r("b",[t._v(t._s(t.uid))])]),r("div",{staticClass:"u-join"},[t._v("加入于"+t._s(t.join))]),r("div",{staticClass:"u-bio"},[t._v(t._s(t.bio))])])])},e=[],i=(r("a15b"),r("b0c0"),r("ee8f")),o=r("46e8"),u=r("fb92"),s={name:"index",props:[],data:function(){return{avatar:"",name:"",uid:"",group:0,join:"",bio:""}},computed:{},methods:{},filters:{groupicon:function(t){return i["JX3BOX"].__ossMirror+"image/group/"+t+".svg"}},mounted:function(){var t=this;this.avatar=i["Utils"].showAvatar(i["User"].getInfo().avatar_origin,"l");var n=i["User"].getInfo();this.name=n.name,this.uid=n.uid,this.bio=n.bio,this.group=n.group,this.uid&&Object(o["g"])(this.uid).then((function(n){t.join=Object(u["a"])(new Date(n.data.data.created_at))}))}},c=s,d=(r("3e0c"),r("2877")),f=Object(d["a"])(c,a,e,!1,null,null,null);n["default"]=f.exports},"3e0c":function(t,n,r){"use strict";var a=r("9fd6"),e=r.n(a);e.a},"46e8":function(t,n,r){"use strict";r.d(n,"g",(function(){return i})),r.d(n,"c",(function(){return o})),r.d(n,"m",(function(){return u})),r.d(n,"o",(function(){return s})),r.d(n,"f",(function(){return c})),r.d(n,"l",(function(){return d})),r.d(n,"n",(function(){return f})),r.d(n,"i",(function(){return b})),r.d(n,"a",(function(){return _})),r.d(n,"b",(function(){return v})),r.d(n,"h",(function(){return h})),r.d(n,"k",(function(){return p})),r.d(n,"d",(function(){return l})),r.d(n,"e",(function(){return g})),r.d(n,"j",(function(){return m}));var a=r("2777"),e=r("64c7");function i(t){return a["a"].get(e["__server"]+"user/info",{params:{uid:t}})}function o(t){return a["a"].get(e["__server"]+"dashboard/nickname/check",{params:{name:t}})}function u(t){return a["a"].post(e["__server"]+"dashboard/nickname/update",{name:t})}function s(t){return a["a"].post(e["__server"]+"dashboard/profile/update",t)}function c(){return a["a"].get(e["__server"]+"user/profile").then((function(t){return t.data.data}))}function d(t){return a["a"].post(e["__server"]+"dashboard/avatar/update",t)}function f(t){return a["a"].post(e["__server"]+"dashboard/password/update",t)}function v(t){return a["a"].get(e["__server"]+"dashboard/email/check",{params:{uid:t}})}function _(t){return a["a"].get(e["__server"]+"account/has",{params:{user_login:t}})}function h(t){return a["a"].post(e["__server"]+"dashboard/email/bind",t)}function b(t){return a["a"].get(e["__server"]+"dashboard/email/verify",{params:{uid:t}})}function p(t){return a["a"].post(e["__server"]+"dashboard/oauth/unbind",t)}function l(t){return a["a"].post(e["__server"]+"dashboard/oauth/check",t)}function g(){return a["a"].get(e["__server"]+"dashboard/config")}function m(t){return a["a"].post(e["__server"]+"dashboard/config",t)}},"9fd6":function(t,n,r){},a15b:function(t,n,r){"use strict";var a=r("23e7"),e=r("44ad"),i=r("fc6a"),o=r("a640"),u=[].join,s=e!=Object,c=o("join",",");a({target:"Array",proto:!0,forced:s||!c},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},fb92:function(t,n,r){"use strict";r("99af");function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),u=r?"".concat(a).concat(n).concat(e(i)).concat(n).concat(e(o)):"".concat(a).concat(n).concat(i).concat(n).concat(o);return u}function e(t){return t<10?"0"+t:t}n["a"]=a}}]);
//# sourceMappingURL=chunk-21548b35.9a302350.js.map