(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cc6575b","chunk-56d3fff5"],{"0521":function(t){t.exports=JSON.parse('{"c":{"4":"改名卡","5":"盒币充值","7":"1年VIP高级会员","8":"1年PRO专业会员","9":"高级会员升级专业会员","10":"0.99铭牌促销活动","11":"铭牌标准售卖","12":"1个月VIP高级会员","13":"3个月VIP高级会员","14":"1个月PRO专业会员","15":"3个月PRO专业会员"},"a":{"0":"待支付","1":"支付完成","2":"放弃支付","3":"订单过期放弃支付"},"b":{"alipay":"支付宝","wepay":"微信"}}')},1148:function(t,a,s){"use strict";var e=s("da84"),i=s("5926"),n=s("577e"),r=s("1d80"),o=e.RangeError;t.exports=function(t){var a=n(r(this)),s="",e=i(t);if(e<0||e==1/0)throw o("Wrong number of repetitions");for(;e>0;(e>>>=1)&&(a+=a))1&e&&(s+=a);return s}},"1e4b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"m-dashboard m-dashboard-index"},[s("div",{staticClass:"m-basicinfo"},[s("Avatar",{staticClass:"u-avatar",attrs:{uid:t.uid,url:t.info.user_avatar,size:120,frame:t.info.user_avatar_frame}}),s("div",{staticClass:"u-info"},[s("h1",{staticClass:"u-name"},[s("span",{staticClass:"u-name-txt"},[t._v(t._s(t.info.display_name))]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改昵称",placement:"top"}},[s("a",{staticClass:"u-edit-name",attrs:{href:"/vip/rename?from=dashboard_index"}},[s("i",{staticClass:"el-icon-edit-outline"})])]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"购买/续费会员服务",placement:"top"}},[s("span",{staticClass:"u-vip"},[t.isVIP||t.isPRO?[s("a",{staticClass:"i-icon-vip",class:{on:t.isVIP||t.isPRO},attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v(t._s(t.vipType))]),t.expire_date?s("span",{staticClass:"u-expire"},[t._v("(有效期至:"+t._s(t.expire_date)+")")]):t._e()]:s("a",{staticClass:"u-upgrade",attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v("升级账号类型")])],2)])],1),s("div",{staticClass:"u-identity"},[s("span",{staticClass:"u-uid"},[s("em",[t._v("UID")]),s("b",[t._v(t._s(t.uid))])]),t.isSuperAuthor?s("span",{staticClass:"u-superauth",attrs:{title:"签约作者"}},[s("img",{attrs:{src:t.super_author_icon,alt:"superAuthor"}})]):t._e(),s("span",{staticClass:"u-level"},[s("el-tooltip",{attrs:{content:"当前经验 "+(t.info.experience||0)}},[s("em",[t._v("Level")])]),s("b",[t._v("Lv."+t._s(t.level))])],1),s("span",{staticClass:"u-group"},[s("em",[t._v("Verify")]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:~~t.info.verify_email?"✔️邮箱已验证":"邮箱未验证",placement:"top"}},[s("a",{attrs:{href:"/dashboard/#/email"}},[s("i",{staticClass:"el-icon-message"})])]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:~~t.info.verify_phone?"✔️手机已绑定":"手机未绑定",placement:"top"}},[s("a",{attrs:{href:"/dashboard/#/phone"}},[s("i",{staticClass:"el-icon-mobile-phone"})])])],1),t.group>60?s("span",{staticClass:"u-group"},[s("em",[t._v("Group")]),s("b",[t._v(t._s(t._f("showGroupName")(t.group)))])]):t._e()]),t.medals&&t.medals.length?s("div",{staticClass:"u-medals"},t._l(t.medals,(function(a,e){return s("span",{key:e,staticClass:"u-medal"},[s("img",{attrs:{src:t._f("showMedalIcon")(a.medal),title:t._f("showMedalDesc")(a)}})])})),0):t._e()])],1),s("div",{staticClass:"m-credit"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"u-dot"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"积分可用于兑换限量纪念品、激活码等，通过发布作品或参与站内活动获取",placement:"top"}},[s("div",{staticClass:"u-credit-name"},[s("i",{staticClass:"el-icon-sugar"}),t._v(" 积分")])]),s("div",{staticClass:"u-credit-value"},[s("b",[t._v(t._s(t.asset.points))])]),s("div",{staticClass:"u-credit-op"},[s("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/points"}},[t._v("兑换")])],1)],1)]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"u-coin"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"1盒币可用于兑换1通宝，通过评审团/用户打赏获取",placement:"top"}},[s("div",{staticClass:"u-credit-name"},[s("i",{staticClass:"el-icon-coin"}),t._v(" 盒币")])]),s("div",{staticClass:"u-credit-value"},[s("b",[t._v(t._s(t.asset.box_coin))])]),s("div",{staticClass:"u-credit-op"},[s("a",{staticClass:"el-button el-button--primary el-button--mini",attrs:{href:"/vip/boxcoin",target:"_blank"}},[t._v("充值")]),s("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/boxcoin"}},[t._v("兑换")])],1)],1)]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"u-packet"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"红包可直接提现至支付宝/微信钱包，通过特殊活动抽奖获取",placement:"top"}},[s("div",{staticClass:"u-credit-name"},[s("i",{staticClass:"el-icon-wallet"}),t._v(" 红包")])]),s("div",{staticClass:"u-credit-value"},[s("b",[t._v(t._s(t._f("formatCredit")(t.asset.red_packet)))])]),s("div",{staticClass:"u-credit-op"},[s("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/packet"}},[t._v("提现")])],1)],1)]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"u-gift"},[s("div",{staticClass:"u-credit-name"},[s("i",{staticClass:"el-icon-present"}),t._v(" 订单")]),s("div",{staticClass:"u-credit-value"},[s("b",[t._v(t._s(t.asset.gift||0))])]),s("div",{staticClass:"u-credit-op"},[s("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/order"}},[t._v("查看")])],1)])])],1)],1),s("div",{staticClass:"m-index-asset-logs"},[s("h2",{staticClass:"u-title"},[s("i",{staticClass:"el-icon-bell"}),t._v(" 资产动态 "),s("div",{staticClass:"u-dates"},[s("i",{staticClass:"el-icon-date"}),s("el-radio-group",{model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},t._l(t.dates,(function(a,e){return s("el-radio",{key:e,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1)],1)]),t.asset_logs&&t.asset_logs.length?s("ul",{staticClass:"u-list"},t._l(t.asset_logs,(function(a,e){return s("li",{key:e,staticClass:"u-item"},[s("i",{class:t._f("showAssetIcon")(a.type)}),s("span",{staticClass:"u-type"},[t._v(t._s(t._f("showAssetType")(a.type)))]),s("span",{staticClass:"u-div"},[t._v("／")]),"boxcoin"==a.type?s("span",{staticClass:"u-boxcoin"},[s("span",{staticClass:"u-boxcoin-type"},[t._v(t._s(t._f("showBoxcoinType")(a.data.action_type)))]),s("b",{class:{isNegative:a.data.count<0}},[t._v(t._s(a.data.count))]),t._v(" , "),s("span",{staticClass:"u-boxcoin-remark"},[t._v(t._s(a.data.remark||"-"))]),a.data.post_type&&a.data.post_id?s("a",{staticClass:"u-link",attrs:{href:t.getPostLink(a)}},[s("i",{staticClass:"el-icon-link"}),t._v(" 查看详情 ")]):t._e()]):t._e(),"order"==a.type?s("span",{staticClass:"u-order"},[t._v(" 产品："+t._s(t._f("showProduct")(a.data.product_id))+"， 金额：¥ "),s("b",[t._v(t._s(t._f("showPrice")(a.data.total_fee)))]),t._v(" ， 状态："+t._s(t._f("showPayStatus")(a.data.pay_status))+" ")]):t._e(),"redpack"==a.type?s("span",{staticClass:"u-redpack"},[t._v(" 金额：¥ "),s("b",[t._v(t._s(t._f("showPrice")(a.data.money)))]),t._v(" ， 补充信息："+t._s(a.data.describe||"-")+" ")]):t._e()])})),0):s("div",{staticClass:"u-null"},[s("i",{staticClass:"el-icon-warning-outline"}),t._v(" 当前时间范围内无记录")])])])},i=[],n=(s("b680"),s("65c2")),r=s("c9d2"),o=s("85e4"),c=s("41cb"),l=s("5a0c"),u=s.n(l);function d(t){return Object(c["d"])().get("/api/user/"+t+"/medals")}function f(){return Object(c["b"])().get("/api/cms/user/my/info")}function p(t){return Object(c["e"])().get("/api/my/asserts/history",{params:{start:t||u()().format("YYYYMMDD"),end:u()().add(1,"day").format("YYYYMMDD")}})}var v=s("b4ff"),m=s("e4f1"),_=s("c1fb"),h=s("31e8"),b=s("0521"),C=s("4208"),g={components:{avatar:C["default"]},name:"index",props:[],data:function(){return{uid:r["a"].getInfo().uid,group:r["a"].getInfo().group,info:{uid:8,name:"匿名",user_avatar:"https://img.jx3box.com/image/common/avatar.png",user_avatar_frame:"default",bio:"-",sign:0},asset:{expire_date:"2022-03-07T00:00:00+08:00",total_day:395,was_vip:0,pro_expire_date:"2022-03-07T00:00:00+08:00",pro_total_day:366,was_pro:0,box_coin:0,red_packet:0,points:0,gift:0},medals:[],asset_logs:[],asset_types:_,boxcoin_types:h,products:b["c"],pay_status:b["a"],pay_types:b["b"],date:u()().subtract(30,"days").format("YYYYMMDD")}},computed:{isVIP:function(){return r["a"]._isVIP(this.asset)||!1},isPRO:function(){return r["a"]._isPRO(this.asset)||!1},vipType:function(){return this.isPRO?"PRO":"PRE"},expire_date:function(){return this.isPRO?Object(m["a"])(this.asset.pro_expire_date):this.isVIP?Object(m["a"])(this.asset.expire_date):""},super_author_icon:function(){return n["__imgPath"]+"image/user/superauthor.svg"},dates:function(){return[{label:"今天",value:u()().format("YYYYMMDD")},{label:"7天",value:u()().subtract(7,"days").format("YYYYMMDD")},{label:"30天",value:u()().subtract(30,"days").format("YYYYMMDD")}]},isSuperAuthor:function(){var t;return!(null===(t=this.info)||void 0===t||!t.sign)},level:function(){var t;return r["a"].getLevel((null===(t=this.info)||void 0===t?void 0:t.experience)||0)}},methods:{loadUserInfo:function(){var t=this;f().then((function(a){a.data.data&&(t.info=a.data.data)}))},loadAsset:function(){var t=this;r["a"].getAsset().then((function(a){t.asset=a}))},loadMedals:function(){var t=this;this.uid&&d(this.uid).then((function(a){t.medals=a.data.data||[]}))},loadFrames:function(){var t=this;getFrames().then((function(a){a.data&&(t.frames=a.data||[])}))},loadAssetLogs:function(){var t=this;p(this.date).then((function(a){t.asset_logs=a.data.data.list||[]}))},init:function(){this.loadUserInfo(),this.loadAsset(),this.loadMedals(),this.loadAssetLogs()},getPostLink:function(t){return Object(o["getLink"])(t.data.post_type,t.data.post_id)}},filters:{groupicon:function(t){return n["__imgPath"]+"image/group/"+t+".svg"},showGroupName:function(t){return t?n["__userGroup"][t]:"游客"},formatCredit:function(t){return t?(t/100).toFixed(2):"0.00"},showMedalIcon:function(t){return n["__imgPath"]+"image/medals/user/"+t+".gif"},showMedalDesc:function(t){return t.medal_desc||v["a"][t.medal]||""},showAvatar:function(t){return t&&Object(o["getThumbnail"])(t,120,!0)||Object(o["getThumbnail"])(n["default_avatar"],120,!0)},showAssetType:function(t){return _[t]["label"]||t},showAssetIcon:function(t){return _[t]["icon"]||"el-icon-box"},showBoxcoinType:function(t){return h[t]||t},showProduct:function(t){return b["c"][t]},showPayStatus:function(t){return b["a"][t]},showPayType:function(t){return b["b"][t]},showPrice:function(t){return t?(t/100).toFixed(2):"0.00"}},mounted:function(){this.init()},watch:{date:function(){this.loadAssetLogs()}}},w=g,y=(s("3e0c"),s("2877")),k=Object(y["a"])(w,e,i,!1,null,null,null);a["default"]=k.exports},"31e8":function(t){t.exports=JSON.parse('{"1":"品鉴评分","2":"用户打赏","3":"盒币充值","4":"盒币退回","5":"系统奖励","-1":"撤销评分","-2":"盒币兑换"}')},"3e0c":function(t,a,s){"use strict";s("9fd6")},"408a":function(t,a,s){var e=s("e330");t.exports=e(1..valueOf)},4208:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("uc",{staticClass:"m-dashboard-avatar"},[s("div",{staticClass:"m-profile-avatar"},[s("div",{staticClass:"m-profile-avatar-primary"},[s("div",{staticClass:"u-avatar"},[s("img",{staticClass:"u-avatar u-avatar-l",attrs:{src:t._f("showAvatar")(t.avatar)}})]),s("el-upload",{staticClass:"u-upload",attrs:{drag:"",accept:"image/png, image/gif, image/jpeg","on-change":t.upload,action:"upload/avatar","auto-upload":!1}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或 "),s("em",[t._v("点击上传")]),s("br"),s("span",{staticClass:"u-tip"},[t._v("只能上传jpg/png/gif文件")])])]),s("p",{staticClass:"u-btng"},[s("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确认")]),s("el-button",{on:{click:t.reset}},[t._v("重置")])],1)],1),s("div",{staticClass:"m-profile-avatar-frame"},[s("h3",{staticClass:"u-title"},[t._v(" 自定义头像框 "),s("span",{staticClass:"u-limit",class:{on:t.isVIP}},[t._v(" ( "),s("i",{class:t.isVIP?"el-icon-unlock":"el-icon-lock"}),t._v("仅"),s("a",{attrs:{href:"/vip/premium?from=dashboard_avatar",target:"_blank"}},[t._v("高级/专业版")]),t._v("账户适用 ) ")])]),t.frames?s("div",{staticClass:"u-list"},[s("li",{staticClass:"u-item",class:{on:!t.frame},on:{click:function(a){return t.selectFrame("")}}},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"无边框",placement:"top","open-delay":200}},[s("div",[s("img",{directives:[{name:"show",rawName:"v-show",value:!t.frame,expression:"!frame"}],staticClass:"u-pic",attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),s("i",{staticClass:"u-frame u-frame-none"})])])],1),t._l(t.frames,(function(a,e){return s("li",{key:e,staticClass:"u-item",class:{on:e==t.frame},on:{click:function(s){return t.selectFrame(a)}}},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:a.desc,placement:"top","open-delay":300}},[s("div",{class:{"u-blocked":!a.status}},[s("img",{directives:[{name:"show",rawName:"v-show",value:e==t.frame,expression:"name == frame"}],staticClass:"u-pic",class:{isCircle:"circle"==a.style},attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),s("i",{staticClass:"u-frame"},[s("img",{attrs:{src:t.showFrame(a.name,a.files.s.file)}})])])])],1)}))],2):t._e(),s("div",{staticClass:"u-tip"},[s("i",{staticClass:"el-icon-warning-outline"}),t._v(" 「限定头像框」仅在指定时间段可选择激活。 ")])])])])},i=[],n=(s("99af"),s("b0c0"),s("b547")),r=s("46e8"),o=s("c9d2"),c=s("85e4"),l=s("1645"),u=s("65c2"),d={name:"avatar",props:[],data:function(){return{bak:"",avatar:"",frame:"",isVIP:!1,uid:o["a"].getInfo().uid,frames:l}},computed:{data:function(){return{user_avatar:this.avatar,user_avatar_frame:this.frame}}},methods:{upload:function(t,a){var s=this,e=new FormData,i=t.raw;e.append("avatar",i),Object(r["m"])(e).then((function(t){s.$message({message:"上传成功",type:"success"}),s.avatar=t.data.data[0]}))},reset:function(){this.avatar=this.bak},submit:function(){var t=this;this.isVIP||(this.frame&&this.$notify({title:"头像框未生效",message:"头像框仅高级/专业账号可用",type:"warning"}),this.frame=""),Object(r["j"])(this.data).then((function(a){o["a"].refresh("avatar",t.avatar),t.$message({message:"头像更新成功",type:"success"})}))},loadFrames:function(){var t=this;Object(r["d"])().then((function(a){t.frames=a.data}))},showFrame:function(t,a){return u["__imgPath"]+"avatar/images/".concat(t,"/").concat(a)},selectFrame:function(t){t?t.status&&(this.frame=t.name):this.frame=""},init:function(){var t=this;this.loadFrames(),o["a"].isVIP().then((function(a){t.isVIP=a})),this.avatar=this.bak=o["a"].getInfo().avatar_origin,Object(r["f"])(this.uid).then((function(a){t.frame=a.data.data.user_avatar_frame||""}))}},filters:{showAvatar:function(t){return Object(c["showAvatar"])(t,"l",!1)},showSmallAvatar:function(t){return Object(c["showAvatar"])(t,68,!1)}},created:function(){this.init()},components:{uc:n["a"]}},f=d,p=(s("bfad"),s("2877")),v=Object(p["a"])(f,e,i,!1,null,null,null);a["default"]=v.exports},"9fd6":function(t,a,s){},b680:function(t,a,s){"use strict";var e=s("23e7"),i=s("da84"),n=s("e330"),r=s("5926"),o=s("408a"),c=s("1148"),l=s("d039"),u=i.RangeError,d=i.String,f=Math.floor,p=n(c),v=n("".slice),m=n(1..toFixed),_=function(t,a,s){return 0===a?s:a%2===1?_(t,a-1,s*t):_(t*t,a/2,s)},h=function(t){var a=0,s=t;while(s>=4096)a+=12,s/=4096;while(s>=2)a+=1,s/=2;return a},b=function(t,a,s){var e=-1,i=s;while(++e<6)i+=a*t[e],t[e]=i%1e7,i=f(i/1e7)},C=function(t,a){var s=6,e=0;while(--s>=0)e+=t[s],t[s]=f(e/a),e=e%a*1e7},g=function(t){var a=6,s="";while(--a>=0)if(""!==s||0===a||0!==t[a]){var e=d(t[a]);s=""===s?e:s+p("0",7-e.length)+e}return s},w=l((function(){return"0.000"!==m(8e-5,3)||"1"!==m(.9,0)||"1.25"!==m(1.255,2)||"1000000000000000128"!==m(0xde0b6b3a7640080,0)}))||!l((function(){m({})}));e({target:"Number",proto:!0,forced:w},{toFixed:function(t){var a,s,e,i,n=o(this),c=r(t),l=[0,0,0,0,0,0],f="",m="0";if(c<0||c>20)throw u("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return d(n);if(n<0&&(f="-",n=-n),n>1e-21)if(a=h(n*_(2,69,1))-69,s=a<0?n*_(2,-a,1):n/_(2,a,1),s*=4503599627370496,a=52-a,a>0){b(l,0,s),e=c;while(e>=7)b(l,1e7,0),e-=7;b(l,_(10,e,1),0),e=a-1;while(e>=23)C(l,1<<23),e-=23;C(l,1<<e),b(l,1,1),C(l,2),m=g(l)}else b(l,0,s),b(l,1<<-a,0),m=g(l)+p("0",c);return c>0?(i=m.length,m=f+(i<=c?"0."+p("0",c-i)+m:v(m,0,i-c)+"."+v(m,i-c))):m=f+m,m}})},bfad:function(t,a,s){"use strict";s("d38b")},c1fb:function(t){t.exports=JSON.parse('{"points":{"label":"积分变动","icon":"el-icon-sugar"},"boxcoin":{"label":"盒币变动","icon":"el-icon-coin"},"redpack":{"label":"红包金额","icon":"el-icon-wallet"},"order":{"label":"订单信息","icon":"el-icon-present"}}')},d38b:function(t,a,s){}}]);
//# sourceMappingURL=chunk-5cc6575b.9ce9bf96.js.map