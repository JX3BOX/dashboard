(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73a8410b","chunk-7dceaaa0"],{"0138":function(t,a,s){},"0521":function(t){t.exports=JSON.parse('{"c":{"4":"改名卡","5":"盒币充值","7":"1年VIP高级会员","8":"1年PRO专业会员","9":"高级会员升级专业会员","10":"0.99铭牌促销活动","11":"铭牌标准售卖","12":"1个月VIP高级会员","13":"3个月VIP高级会员","14":"1个月PRO专业会员","15":"3个月PRO专业会员"},"a":{"0":"待支付","1":"支付完成","2":"放弃支付","3":"订单过期放弃支付"},"b":{"alipay":"支付宝","wepay":"微信"}}')},1645:function(t){t.exports=JSON.parse('{"default":{"name":"default","style":"square","files":{"xs":{"w":48,"width":60,"file":"default-xs.gif"},"s":{"w":68,"width":84,"file":"default-s.gif"},"m":{"w":108,"width":136,"file":"default-m.png"},"l":{"w":180,"width":224,"file":"default-l.png"},"xl":{"w":240,"width":300,"file":"default-xl.png"}}},"flower_1":{"name":"flower_1","style":"circle","files":{"xs":{"w":48,"width":60,"file":"flower_1-xs.png"},"s":{"w":68,"width":84,"file":"flower_1-s.png"},"m":{"w":108,"width":136,"file":"flower_1-m.png"},"l":{"w":180,"width":224,"file":"flower_1-l.png"},"xl":{"w":240,"width":300,"file":"flower_1-xl.png"}}}}')},"1e4b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-dashboard m-dashboard-index"},[a("div",{staticClass:"m-basicinfo"},[a("Avatar",{staticClass:"u-avatar",attrs:{uid:t.uid,url:t.info.user_avatar,size:120,frame:t.info.user_avatar_frame}}),a("div",{staticClass:"u-info"},[a("h1",{staticClass:"u-name"},[a("span",{staticClass:"u-name-txt"},[t._v(t._s(t.info.display_name))]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改昵称",placement:"top"}},[a("a",{staticClass:"u-edit-name",attrs:{href:"/vip/rename?from=dashboard_index"}},[a("i",{staticClass:"el-icon-edit-outline"})])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"购买/续费会员服务",placement:"top"}},[a("span",{staticClass:"u-vip"},[t.isVIP||t.isPRO?[a("a",{staticClass:"i-icon-vip",class:{on:t.isVIP||t.isPRO},attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v(t._s(t.vipType))]),t.expire_date?a("span",{staticClass:"u-expire"},[t._v("(有效期至:"+t._s(t.expire_date)+")")]):t._e()]:a("a",{staticClass:"u-upgrade",attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v("升级账号类型")])],2)])],1),a("div",{staticClass:"u-identity"},[a("span",{staticClass:"u-uid"},[a("em",[t._v("UID")]),a("b",[t._v(t._s(t.uid))])]),t.isSuperAuthor?a("span",{staticClass:"u-superauth",attrs:{title:"签约作者"}},[a("img",{attrs:{src:t.super_author_icon,alt:"superAuthor"}})]):t._e(),a("span",{staticClass:"u-level"},[a("el-tooltip",{attrs:{content:"当前经验 ".concat(t.info.experience||0)}},[a("em",[t._v("Level")])]),a("b",[t._v("Lv."+t._s(t.level))])],1),a("span",{staticClass:"u-group"},[a("em",[t._v("Verify")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:~~t.info.verify_email?"邮箱已验证":"邮箱未验证",placement:"top"}},[a("a",{class:t.info.verify_email&&"done",attrs:{href:"/dashboard/email"}},[a("i",{staticClass:"el-icon-message"})])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:~~t.info.verify_phone?"手机已绑定":"手机未绑定",placement:"top"}},[a("a",{class:t.info.verify_phone&&"done",attrs:{href:"/dashboard/phone"}},[a("i",{staticClass:"el-icon-mobile-phone"})])])],1),t.group>60?a("span",{staticClass:"u-group"},[a("em",[t._v("Group")]),a("b",[t._v(t._s(t._f("showGroupName")(t.group)))])]):t._e()]),t.medals&&t.medals.length?a("div",{staticClass:"u-medals"},[a("medal",{attrs:{medals:t.medals,showIcon:t.showMedalIcon}})],1):t._e()])],1),a("div",{staticClass:"m-credit"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"u-coin"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"1盒币可用于兑换1通宝，通过评审团/用户打赏获取",placement:"top"}},[a("div",{staticClass:"u-credit-name"},[a("i",{staticClass:"el-icon-coin"}),t._v(" 盒币")])]),a("div",{staticClass:"u-credit-value"},[a("b",[t._v(t._s(t.asset.box_coin))])]),a("div",{staticClass:"u-credit-op"},[a("a",{staticClass:"el-button el-button--primary el-button--mini",attrs:{href:"/vip/boxcoin",target:"_blank"}},[t._v("充值")]),a("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/boxcoin"}},[t._v("兑换")])],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"u-dot"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"积分可用于兑换限量纪念品、激活码等，通过发布作品或参与站内活动获取",placement:"top"}},[a("div",{staticClass:"u-credit-name"},[a("i",{staticClass:"el-icon-sugar"}),t._v(" 积分")])]),a("div",{staticClass:"u-credit-value"},[a("b",[t._v(t._s(t.asset.points))])]),a("div",{staticClass:"u-credit-op"},[a("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/points"}},[t._v("记录")]),a("a",{staticClass:"el-button el-button--primary el-button--mini is-disabled",attrs:{href:"/vip/mall",target:"_blank"}},[t._v("兑换")])],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"u-packet"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"红包可直接提现至支付宝/微信钱包，通过特殊活动抽奖获取",placement:"top"}},[a("div",{staticClass:"u-credit-name"},[a("i",{staticClass:"el-icon-wallet"}),t._v(" 红包")])]),a("div",{staticClass:"u-credit-value"},[a("b",[t._v(t._s(t._f("formatCredit")(t.asset.red_packet)))])]),a("div",{staticClass:"u-credit-op"},[a("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/packet"}},[t._v("提现")])],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"u-gift"},[a("div",{staticClass:"u-credit-name"},[a("i",{staticClass:"el-icon-present"}),t._v(" 订单")]),a("div",{staticClass:"u-credit-value"},[a("b",[t._v(t._s(t.asset.gift||0))])]),a("div",{staticClass:"u-credit-op"},[a("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/order"}},[t._v("查看")])],1)])])],1)],1),a("div",{staticClass:"m-index-asset-logs"},[a("h2",{staticClass:"u-title"},[a("i",{staticClass:"el-icon-bell"}),t._v(" 资产动态 "),a("div",{staticClass:"u-dates"},[a("i",{staticClass:"el-icon-date"}),a("el-radio-group",{model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},t._l(t.dates,(function(s,e){return a("el-radio",{key:e,attrs:{label:s.value}},[t._v(t._s(s.label))])})),1)],1)]),t.asset_logs&&t.asset_logs.length?a("ul",{staticClass:"u-list"},t._l(t.asset_logs,(function(s,e){return a("li",{key:e,staticClass:"u-item"},[a("i",{class:t._f("showAssetIcon")(s.type)}),a("span",{staticClass:"u-type"},[t._v(t._s(t._f("showAssetType")(s.type)))]),a("span",{staticClass:"u-div"},[t._v("／")]),"boxcoin"==s.type?a("span",{staticClass:"u-boxcoin"},[a("span",{staticClass:"u-boxcoin-type"},[t._v(t._s(t._f("showBoxcoinType")(s.data.action_type)))]),a("b",{class:{isNegative:s.data.count<0}},[t._v(t._s(s.data.count))]),t._v(" , "),a("span",{staticClass:"u-boxcoin-remark"},[t._v(t._s(s.data.remark||"-"))]),s.data.post_type&&s.data.post_id?a("a",{staticClass:"u-link",attrs:{href:t.getPostLink(s)}},[a("i",{staticClass:"el-icon-link"}),t._v(" 查看详情 ")]):t._e()]):t._e(),"order"==s.type?a("span",{staticClass:"u-order"},[t._v(" 产品："+t._s(t._f("showProduct")(s.data.product_id))+"， 金额：¥ "),a("b",[t._v(t._s(t._f("showPrice")(s.data.total_fee)))]),t._v(" ， 状态："+t._s(t._f("showPayStatus")(s.data.pay_status))+" ")]):t._e(),"redpack"==s.type?a("span",{staticClass:"u-redpack"},[t._v(" 金额：¥ "),a("b",[t._v(t._s(t._f("showPrice")(s.data.money)))]),t._v(" ， 补充信息："+t._s(s.data.describe||"-")+" ")]):t._e()])})),0):a("div",{staticClass:"u-null"},[a("i",{staticClass:"el-icon-warning-outline"}),t._v(" 当前时间范围内无记录")])])])},i=[],n=(s("b680"),s("65c2")),r=s("c9d2"),o=s("85e4"),l=s("41cb"),c=s("5a0c"),u=s.n(c);function d(t){return Object(l["d"])().get("/api/user/"+t+"/medals")}function f(){return Object(l["b"])().get("/api/cms/user/my/info")}function p(t){return Object(l["e"])().get("/api/my/asserts/history",{params:{start:t||u()().format("YYYYMMDD"),end:u()().add(1,"day").format("YYYYMMDD")}})}s("b4ff");var m=s("e4f1"),v=s("c1fb"),_=s("31e8"),h=s("0521"),b=s("4208"),g=s("008d"),C={components:{avatar:b["default"],medal:g["a"]},name:"index",props:[],data:function(){return{uid:r["a"].getInfo().uid,group:r["a"].getInfo().group,info:{uid:8,name:"匿名",user_avatar:"https://img.jx3box.com/image/common/avatar.png",user_avatar_frame:"default",bio:"-",sign:0},asset:{expire_date:"2022-03-07T00:00:00+08:00",total_day:395,was_vip:0,pro_expire_date:"2022-03-07T00:00:00+08:00",pro_total_day:366,was_pro:0,box_coin:0,red_packet:0,points:0,gift:0},medals:[],asset_logs:[],asset_types:v,boxcoin_types:_,products:h["c"],pay_status:h["a"],pay_types:h["b"],date:u()().subtract(30,"days").format("YYYYMMDD")}},computed:{isVIP:function(){return r["a"]._isVIP(this.asset)||!1},isPRO:function(){return r["a"]._isPRO(this.asset)||!1},vipType:function(){return this.isPRO?"PRO":"PRE"},expire_date:function(){return this.isPRO?Object(m["a"])(this.asset.pro_expire_date):this.isVIP?Object(m["a"])(this.asset.expire_date):""},super_author_icon:function(){return n["__imgPath"]+"image/user/superauthor.svg"},dates:function(){return[{label:"今天",value:u()().format("YYYYMMDD")},{label:"7天",value:u()().subtract(7,"days").format("YYYYMMDD")},{label:"30天",value:u()().subtract(30,"days").format("YYYYMMDD")}]},isSuperAuthor:function(){var t;return!(null===(t=this.info)||void 0===t||!t.sign)},level:function(){var t;return r["a"].getLevel((null===(t=this.info)||void 0===t?void 0:t.experience)||0)}},methods:{loadUserInfo:function(){var t=this;f().then((function(a){a.data.data&&(t.info=a.data.data)}))},loadAsset:function(){var t=this;r["a"].getAsset().then((function(a){t.asset=a}))},loadMedals:function(){var t=this;this.uid&&d(this.uid).then((function(a){t.medals=a.data.data||[]}))},loadFrames:function(){var t=this;getFrames().then((function(a){a.data&&(t.frames=a.data||[])}))},loadAssetLogs:function(){var t=this;p(this.date).then((function(a){t.asset_logs=a.data.data.list||[]}))},init:function(){this.loadUserInfo(),this.loadAsset(),this.loadMedals(),this.loadAssetLogs()},getPostLink:function(t){return Object(o["getLink"])(t.data.post_type,t.data.post_id)},showMedalIcon:function(t){return n["__imgPath"]+"image/medals/user/"+t+".gif"}},filters:{groupicon:function(t){return n["__imgPath"]+"image/group/"+t+".svg"},showGroupName:function(t){return t?n["__userGroup"][t]:"游客"},formatCredit:function(t){return t?(t/100).toFixed(2):"0.00"},showAvatar:function(t){return t&&Object(o["getThumbnail"])(t,120,!0)||Object(o["getThumbnail"])(n["default_avatar"],120,!0)},showAssetType:function(t){return v[t]["label"]||t},showAssetIcon:function(t){return v[t]["icon"]||"el-icon-box"},showBoxcoinType:function(t){return _[t]||t},showProduct:function(t){return h["c"][t]},showPayStatus:function(t){return h["a"][t]},showPayType:function(t){return h["b"][t]},showPrice:function(t){return t?(t/100).toFixed(2):"0.00"}},mounted:function(){this.init()},watch:{date:function(){this.loadAssetLogs()}}},w=C,y=(s("d8b2"),s("2877")),x=Object(y["a"])(w,e,i,!1,null,null,null);a["default"]=x.exports},"2c50":function(t,a,s){"use strict";s("0138")},"31e8":function(t){t.exports=JSON.parse('{"1":"品鉴评分","2":"用户打赏","3":"盒币充值","4":"盒币退回","5":"系统奖励","-1":"撤销评分","-2":"盒币兑换"}')},4208:function(t,a,s){"use strict";s.r(a);s("b0c0");var e=function(){var t=this,a=t._self._c;return a("uc",{staticClass:"m-dashboard-avatar"},[a("div",{staticClass:"m-profile-avatar"},[a("div",{staticClass:"m-profile-avatar-primary"},[a("div",{staticClass:"u-avatar"},[a("img",{staticClass:"u-avatar u-avatar-l",attrs:{src:t._f("showAvatar")(t.avatar)}})]),a("el-upload",{staticClass:"u-upload",attrs:{drag:"",accept:"image/png, image/gif, image/jpeg","on-change":t.upload,action:"upload/avatar","auto-upload":!1}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或 "),a("em",[t._v("点击上传")]),a("br"),a("span",{staticClass:"u-tip"},[t._v("只能上传jpg/png/gif文件")])])]),a("p",{staticClass:"u-btng"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确认")]),a("el-button",{on:{click:t.reset}},[t._v("重置")])],1)],1),a("div",{staticClass:"m-profile-avatar-frame"},[a("h3",{staticClass:"u-title"},[t._v(" 自定义头像框 "),a("span",{staticClass:"u-limit",class:{on:t.isVIP}},[t._v(" ( "),a("i",{class:t.isVIP?"el-icon-unlock":"el-icon-lock"}),t._v("仅"),a("a",{attrs:{href:"/vip/premium?from=dashboard_avatar",target:"_blank"}},[t._v("高级/专业版")]),t._v("账户适用 ) ")])]),t.frames?a("div",{staticClass:"u-list"},[a("li",{staticClass:"u-item",class:{on:!t.frame},on:{click:function(a){return t.selectFrame("")}}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"无边框",placement:"top","open-delay":200}},[a("div",[a("img",{directives:[{name:"show",rawName:"v-show",value:!t.frame,expression:"!frame"}],staticClass:"u-pic",attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),a("i",{staticClass:"u-frame u-frame-none"})])])],1),t._l(t.frames,(function(s,e){return a("li",{key:e,staticClass:"u-item",class:{on:e==t.frame},on:{click:function(a){return t.selectFrame(s)}}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:s.desc,placement:"top","open-delay":300}},[a("div",{class:{"u-blocked":!s.status}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e==t.frame,expression:"name == frame"}],staticClass:"u-pic isCircle",attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),a("i",{staticClass:"u-frame"},[a("img",{attrs:{src:t.showFrame(s.name)}})])])])],1)}))],2):t._e(),a("div",{staticClass:"u-tip"},[a("i",{staticClass:"el-icon-warning-outline"}),t._v(" 「限定头像框」仅在指定时间段可选择激活。 ")])])])])},i=[],n=(s("99af"),s("b547")),r=s("46e8"),o=s("c9d2"),l=s("85e4"),c=s("1645"),u=s("65c2"),d={name:"avatar",props:[],data:function(){return{bak:"",avatar:"",frame:"",isVIP:!1,uid:o["a"].getInfo().uid,frames:c}},computed:{data:function(){return{user_avatar:this.avatar,user_avatar_frame:this.frame}}},methods:{upload:function(t,a){var s=this,e=new FormData,i=t.raw;e.append("avatar",i),Object(r["m"])(e).then((function(t){s.$message({message:"上传成功",type:"success"}),s.avatar=t.data.data[0]}))},reset:function(){this.avatar=this.bak},submit:function(){var t=this;this.isVIP||(this.frame&&this.$notify({title:"头像框未生效",message:"头像框仅高级/专业账号可用",type:"warning"}),this.frame=""),Object(r["j"])(this.data).then((function(a){o["a"].refresh("avatar",t.avatar),t.$message({message:"头像更新成功",type:"success"})}))},loadFrames:function(){var t=this;Object(r["d"])().then((function(a){t.frames=a.data}))},showFrame:function(t){return u["__imgPath"]+"avatar/images/".concat(t,"/").concat(t,".svg")},selectFrame:function(t){t?t.status&&(this.frame=t.name):this.frame=""},init:function(){var t=this;this.loadFrames(),o["a"].isVIP().then((function(a){t.isVIP=a})),this.avatar=this.bak=o["a"].getInfo().avatar_origin,Object(r["f"])(this.uid).then((function(a){t.frame=a.data.data.user_avatar_frame||""}))}},filters:{showAvatar:function(t){return Object(l["showAvatar"])(t,480,!1)},showSmallAvatar:function(t){return Object(l["showAvatar"])(t,136,!1)}},created:function(){this.init()},components:{uc:n["a"]}},f=d,p=(s("2c50"),s("2877")),m=Object(p["a"])(f,e,i,!1,null,null,null);a["default"]=m.exports},8090:function(t,a,s){},c1fb:function(t){t.exports=JSON.parse('{"points":{"label":"积分变动","icon":"el-icon-sugar"},"boxcoin":{"label":"盒币变动","icon":"el-icon-coin"},"redpack":{"label":"红包金额","icon":"el-icon-wallet"},"order":{"label":"订单信息","icon":"el-icon-present"}}')},d8b2:function(t,a,s){"use strict";s("8090")}}]);
//# sourceMappingURL=chunk-73a8410b.602d2752.js.map