(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b69b067"],{1148:function(t,a,e){"use strict";var i=e("a691"),r=e("1d80");t.exports="".repeat||function(t){var a=String(r(this)),e="",s=i(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(a+=a))1&s&&(e+=a);return e}},"1e4b":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"m-dashboard m-dashboard-index"},[e("div",{staticClass:"m-basicinfo"},[e("i",{staticClass:"u-avatar"},[e("img",{staticClass:"u-avatar-pic",class:{isCircle:t.isCircle},attrs:{src:t._f("showAvatar")(t.info.avatar)}}),t.frameName?e("i",{staticClass:"u-avatar-frame"},[e("img",{attrs:{src:t.frameUrl}})]):t._e()]),e("div",{staticClass:"u-info"},[e("h1",{staticClass:"u-name"},[e("span",{staticClass:"u-name-txt"},[t._v(t._s(t.info.name))]),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改昵称",placement:"top"}},[e("a",{staticClass:"u-edit-name",attrs:{href:"/vip/rename?from=dashboard_index"}},[e("i",{staticClass:"el-icon-edit-outline"})])]),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"购买/续费会员服务",placement:"top"}},[e("span",{staticClass:"u-vip"},[t.isVIP||t.isPRO?[e("a",{staticClass:"i-icon-vip",class:{on:t.isVIP||t.isPRO},attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v(t._s(t.vipType))]),t.expire_date?e("span",{staticClass:"u-expire"},[t._v("(有效期至:"+t._s(t.expire_date)+")")]):t._e()]:e("a",{staticClass:"u-upgrade",attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v("升级账号类型")])],2)])],1),e("div",{staticClass:"u-identity"},[e("span",{staticClass:"u-uid"},[e("em",[t._v("UID")]),e("b",[t._v(t._s(t.info.uid))])]),e("span",{staticClass:"u-group"},[e("em",[t._v("Group")]),e("b",[t._v(t._s(t._f("showGroupName")(t.info.group)))])])]),t.medals&&t.medals.length?e("div",{staticClass:"u-medals"},t._l(t.medals,(function(a,i){return e("span",{key:i,staticClass:"u-medal"},[e("img",{attrs:{src:t._f("showTeamMedal")(a.medal),title:t.medal_map[a.medal]}})])})),0):t._e()])]),e("div",{staticClass:"m-credit"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("div",{staticClass:"u-dot"},[e("div",{staticClass:"u-credit-name"},[e("i",{staticClass:"el-icon-sugar"}),t._v(" 积分 ")]),e("div",{staticClass:"u-credit-value"},[e("b",[t._v(t._s(t.asset.points))])]),e("div",{staticClass:"u-credit-op"},[e("a",{staticClass:"el-button el-button--primary el-button--mini is-disabled",attrs:{href:""}},[t._v("兑换")])])])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"u-coin"},[e("div",{staticClass:"u-credit-name"},[e("i",{staticClass:"el-icon-coin"}),t._v(" 盒币 ")]),e("div",{staticClass:"u-credit-value"},[e("b",[t._v(t._s(t._f("formatCredit")(t.asset.box_coin)))])]),e("div",{staticClass:"u-credit-op"},[e("a",{staticClass:"el-button el-button--primary el-button--mini is-disabled",attrs:{href:""}},[t._v("充值")]),e("a",{staticClass:"el-button el-button--primary el-button--mini is-disabled",attrs:{href:""}},[t._v("提现")])])])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"u-packet"},[e("div",{staticClass:"u-credit-name"},[e("i",{staticClass:"el-icon-bank-card"}),t._v(" 红包 ")]),e("div",{staticClass:"u-credit-value"},[e("b",[t._v(t._s(t._f("formatCredit")(t.asset.red_packet)))])]),e("div",{staticClass:"u-credit-op"},[e("a",{staticClass:"el-button el-button--primary el-button--mini",attrs:{href:"/vip/credit#/packet"}},[t._v("提现")])])])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"u-gift"},[e("div",{staticClass:"u-credit-name"},[e("i",{staticClass:"el-icon-present"}),t._v(" 订单 ")]),e("div",{staticClass:"u-credit-value"},[e("b",[t._v(t._s(t.asset.gift||0))])]),e("div",{staticClass:"u-credit-op"},[e("a",{staticClass:"el-button el-button--primary el-button--mini is-disabled",attrs:{href:""}},[t._v("查看")])])])])],1)],1)])},r=[],s=(e("99af"),e("b680"),e("64c7")),n=e("c9d2"),o=e("85e4"),c=(e("fb92"),e("4fb6")),u=e("bc3a"),l=e.n(u);function f(t){return c["a"].get("/api/user/"+t+"/medals")}function d(t){return l.a.get(s["__server"]+"user/info",{params:{uid:t}})}var m=e("46e8"),p=e("b4ff"),v=e("58c3"),_=e("e4f1"),h=e("1645"),b={name:"index",props:[],data:function(){return{uid:n["a"].getInfo().uid,info:{uid:8,name:"匿名",avatar:"https://img.jx3box.com/image/common/avatar.png",avatar_frame:"default",group:0,exp:0,status:0,verify_email:0,verify_phone:0,bio:"-",server:"蝶恋花",created_at:"2019-08-28T01:03:51.000Z"},asset:{expire_date:"2022-03-07T00:00:00+08:00",total_day:395,was_vip:0,pro_expire_date:"2022-03-07T00:00:00+08:00",pro_total_day:366,was_pro:0,box_coin:0,red_packet:0,points:0,gift:0},medals:[],medal_map:p["a"],frames:h}},computed:{isVIP:function(){return Object(v["d"])(this.asset)||!1},isPRO:function(){return Object(v["c"])(this.asset)||!1},vipType:function(){return this.isPRO?"PRO":"PRE"},expire_date:function(){return this.isPRO?Object(_["a"])(this.asset.pro_expire_date):this.isVIP?Object(_["a"])(this.asset.expire_date):""},frameName:function(){return this.info.avatar_frame&&this.frames[this.info.avatar_frame]?this.info.avatar_frame:""},frameUrl:function(){if(this.frameName){var t=this.frames[this.frameName].files.m.file;return s["__imgPath"]+"image/avatar/".concat(this.frameName,"/").concat(t)}return""},isCircle:function(){return this.frameName&&"circle"==this.frames[this.frameName].style}},methods:{loadUserInfo:function(){var t=this;d(this.uid).then((function(a){t.info=a.data.data}))},loadAsset:function(){var t=this;Object(v["b"])().then((function(a){t.asset=a}))},loadMedals:function(){var t=this;this.uid&&f(this.uid).then((function(a){t.medals=a.data.data||[]}))},loadFrames:function(){var t=this;Object(m["d"])().then((function(a){a.data&&(t.frames=a.data||[])}))}},filters:{groupicon:function(t){return s["__imgPath"]+"image/group/"+t+".svg"},showGroupName:function(t){return t?s["__userGroup"][t]:"游客"},formatCredit:function(t){return t?(t/100).toFixed(2):"0.00"},showTeamMedal:function(t){return s["__imgPath"]+"image/medals/team/"+t+"-20.gif"},showAvatar:function(t){return t&&Object(o["getThumbnail"])(t,120,!0)||Object(o["getThumbnail"])(s["default_avatar"],120,!0)}},mounted:function(){this.loadUserInfo(),this.loadAsset(),this.loadMedals(),this.loadFrames()}},g=b,C=(e("3e0c"),e("2877")),x=Object(C["a"])(g,i,r,!1,null,null,null);a["default"]=x.exports},"3e0c":function(t,a,e){"use strict";var i=e("9fd6"),r=e.n(i);r.a},"408a":function(t,a,e){var i=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"46e8":function(t,a,e){"use strict";e.d(a,"l",(function(){return u})),e.d(a,"e",(function(){return c})),e.d(a,"j",(function(){return l})),e.d(a,"k",(function(){return p})),e.d(a,"h",(function(){return b})),e.d(a,"a",(function(){return _})),e.d(a,"b",(function(){return v})),e.d(a,"g",(function(){return h})),e.d(a,"i",(function(){return C})),e.d(a,"c",(function(){return g})),e.d(a,"m",(function(){return f})),e.d(a,"d",(function(){return d})),e.d(a,"f",(function(){return m}));var i=e("bc3a"),r=e.n(i),s=e("64c7"),n=e("4fb6"),o=r.a.create({withCredentials:!0,baseURL:s["__server"]});function c(){return o.get("profile")}function u(t){return o.post("profile",t)}function l(t){return o.put("profile/avatar",t)}function f(t){return o.post("upload/avatar",t)}function d(){return r.a.get(s["__imgPath"]+"data/user_avatar_frame.json")}function m(t){return r.a.get(s["__server"]+"user/overview/".concat(t))}function p(t){return o.post("profile/password",t)}function v(){return o.get("profile/email/check")}function _(t){return o.get("profile/email/available",{params:{user_email:t}})}function h(t){return o.post("profile/email/bind",t)}function b(){return o.post("profile/email/verify")}function g(){return o.get("profile/oauth/check")}function C(t){return o.post("profile/oauth/unbind",t)}Object(n["e"])(o)},"9fd6":function(t,a,e){},b680:function(t,a,e){"use strict";var i=e("23e7"),r=e("a691"),s=e("408a"),n=e("1148"),o=e("d039"),c=1..toFixed,u=Math.floor,l=function(t,a,e){return 0===a?e:a%2===1?l(t,a-1,e*t):l(t*t,a/2,e)},f=function(t){var a=0,e=t;while(e>=4096)a+=12,e/=4096;while(e>=2)a+=1,e/=2;return a},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));i({target:"Number",proto:!0,forced:d},{toFixed:function(t){var a,e,i,o,c=s(this),d=r(t),m=[0,0,0,0,0,0],p="",v="0",_=function(t,a){var e=-1,i=a;while(++e<6)i+=t*m[e],m[e]=i%1e7,i=u(i/1e7)},h=function(t){var a=6,e=0;while(--a>=0)e+=m[a],m[a]=u(e/t),e=e%t*1e7},b=function(){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==m[t]){var e=String(m[t]);a=""===a?e:a+n.call("0",7-e.length)+e}return a};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(a=f(c*l(2,69,1))-69,e=a<0?c*l(2,-a,1):c/l(2,a,1),e*=4503599627370496,a=52-a,a>0){_(0,e),i=d;while(i>=7)_(1e7,0),i-=7;_(l(10,i,1),0),i=a-1;while(i>=23)h(1<<23),i-=23;h(1<<i),_(1,1),h(2),v=b()}else _(0,e),_(1<<-a,0),v=b()+n.call("0",d);return d>0?(o=v.length,v=p+(o<=d?"0."+n.call("0",d-o)+v:v.slice(0,o-d)+"."+v.slice(o-d))):v=p+v,v}})},fb92:function(t,a,e){"use strict";e("99af");function i(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=t.getFullYear(),s=t.getMonth()+1,n=t.getDate(),o=e?"".concat(i).concat(a).concat(r(s)).concat(a).concat(r(n)):"".concat(i).concat(a).concat(s).concat(a).concat(n);return o}function r(t){return t<10?"0"+t:t}a["a"]=i}}]);
//# sourceMappingURL=chunk-0b69b067.d15d12ff.js.map