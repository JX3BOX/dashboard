(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a26c463","chunk-405e8cc8"],{"0521":function(t){t.exports=JSON.parse('{"c":{"4":"改名卡","5":"盒币充值","7":"1年VIP高级会员","8":"1年PRO专业会员","9":"高级会员升级专业会员","10":"0.99铭牌促销活动","11":"铭牌标准售卖","12":"1个月VIP高级会员","13":"3个月VIP高级会员","14":"1个月PRO专业会员","15":"3个月PRO专业会员","16":"金箔"},"a":{"0":"待支付","1":"支付完成","2":"放弃支付","3":"订单过期放弃支付"},"b":{"alipay":"支付宝","wepay":"微信"}}')},"0cd3":function(t){t.exports=JSON.parse('{"1":"充值","-2":"金箔消费","-3":"作品消费"}')},1645:function(t){t.exports=JSON.parse('{"default":{"name":"default","style":"square","files":{"xs":{"w":48,"width":60,"file":"default-xs.gif"},"s":{"w":68,"width":84,"file":"default-s.gif"},"m":{"w":108,"width":136,"file":"default-m.png"},"l":{"w":180,"width":224,"file":"default-l.png"},"xl":{"w":240,"width":300,"file":"default-xl.png"}}},"flower_1":{"name":"flower_1","style":"circle","files":{"xs":{"w":48,"width":60,"file":"flower_1-xs.png"},"s":{"w":68,"width":84,"file":"flower_1-s.png"},"m":{"w":108,"width":136,"file":"flower_1-m.png"},"l":{"w":180,"width":224,"file":"flower_1-l.png"},"xl":{"w":240,"width":300,"file":"flower_1-xl.png"}}}}')},"1e4b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"m-dashboard m-dashboard-index"},[s("div",{staticClass:"m-basicinfo"},[s("Avatar",{staticClass:"u-avatar",attrs:{uid:t.uid,url:t.info.user_avatar,size:120,frame:t.info.user_avatar_frame}}),s("div",{staticClass:"u-info"},[s("h1",{staticClass:"u-name"},[s("span",{staticClass:"u-name-txt"},[t._v(t._s(t.info.display_name))]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改昵称",placement:"top"}},[s("a",{staticClass:"u-edit-name",attrs:{href:"/vip/rename?from=dashboard_index"}},[s("i",{staticClass:"el-icon-edit-outline"})])]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"购买/续费会员服务",placement:"top"}},[s("span",{staticClass:"u-vip"},[t.isVIP||t.isPRO?[s("a",{staticClass:"i-icon-vip",class:{on:t.isVIP||t.isPRO},attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v(t._s(t.vipType))]),t.expire_date?s("span",{staticClass:"u-expire"},[t._v("(有效期至:"+t._s(t.expire_date)+")")]):t._e()]:s("a",{staticClass:"u-upgrade",attrs:{href:"/vip/premium?from=dashboard_index",target:"_blank"}},[t._v("升级账号类型")])],2)])],1),s("div",{staticClass:"u-identity"},[s("span",{staticClass:"u-uid"},[s("em",[t._v("UID")]),s("b",[t._v(t._s(t.uid))])]),t.isSuperAuthor?s("span",{staticClass:"u-superauth",attrs:{title:"签约作者"}},[s("img",{attrs:{src:t.super_author_icon,alt:"superAuthor"}})]):t._e(),s("span",{staticClass:"u-level"},[s("el-tooltip",{attrs:{content:"当前经验 "+(t.info.experience||0)}},[s("em",[t._v("Level")])]),s("b",[t._v("Lv."+t._s(t.level))])],1),s("span",{staticClass:"u-group"},[s("em",[t._v("Verify")]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:~~t.info.verify_email?"邮箱已验证":"邮箱未验证",placement:"top"}},[s("a",{class:t.info.verify_email&&"done",attrs:{href:"/dashboard/email"}},[s("i",{staticClass:"el-icon-message"})])]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:~~t.info.verify_phone?"手机已绑定":"手机未绑定",placement:"top"}},[s("a",{class:t.info.verify_phone&&"done",attrs:{href:"/dashboard/phone"}},[s("i",{staticClass:"el-icon-mobile-phone"})])])],1),t.group>60?s("span",{staticClass:"u-group"},[s("em",[t._v("Group")]),s("b",[t._v(t._s(t._f("showGroupName")(t.group)))])]):t._e()]),t.medals&&t.medals.length?s("div",{staticClass:"u-medals"},[s("medal",{attrs:{medals:t.medals,showIcon:t.showMedalIcon}})],1):t._e()])],1),s("div",{staticClass:"m-credit"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"u-coin"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"1盒币可用于兑换1通宝，通过评审团/用户打赏获取",placement:"top"}},[s("div",{staticClass:"u-credit-name"},[s("i",{staticClass:"el-icon-coin"}),t._v(" 盒币")])]),s("div",{staticClass:"u-credit-value"},[s("b",[t._v(t._s(t.asset.box_coin))])]),s("div",{staticClass:"u-credit-op"},[s("a",{staticClass:"el-button el-button--primary el-button--mini",attrs:{href:"/vip/boxcoin",target:"_blank"}},[t._v("充值")]),s("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/boxcoin"}},[t._v("兑换")])],1)],1)]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"u-cny"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"余额与人民币(单位分)为1:1，只能通过充值或玩家赠送获取",placement:"top"}},[s("div",{staticClass:"u-credit-name"},[s("i",{staticClass:"el-icon-wallet"}),t._v(" 金箔")])]),s("div",{staticClass:"u-credit-value"},[s("b",[t._v(t._s(t.asset.cny))])]),s("div",{staticClass:"u-credit-op"},[s("a",{staticClass:"el-button el-button--primary el-button--mini",attrs:{href:"/vip/cny",target:"_blank"}},[t._v("充值")]),s("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/cny"}},[t._v("兑现")])],1)],1)]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"u-dot"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"积分可用于兑换限量纪念品、激活码等，通过发布作品或参与站内活动获取",placement:"top"}},[s("div",{staticClass:"u-credit-name"},[s("i",{staticClass:"el-icon-sugar"}),t._v(" 银铛")])]),s("div",{staticClass:"u-credit-value"},[s("b",[t._v(t._s(t.asset.points))])]),s("div",{staticClass:"u-credit-op"},[s("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/points"}},[t._v("记录")]),s("a",{staticClass:"el-button el-button--primary el-button--mini",attrs:{href:"/vip/mall",target:"_blank"}},[t._v("兑换")])],1)],1)]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"u-packet"},[s("div",{staticClass:"u-credit-name"},[s("i",{staticClass:"el-icon-bank-card"}),t._v(" 卡密")]),t.asset.ext_info?s("div",{staticClass:"u-credit-value"},[s("b",[t._v(t._s(Number(t.asset.ext_info.keycode||0)+Number(t.asset.ext_info.sn||0)))])]):t._e(),s("div",{staticClass:"u-credit-op"},[s("router-link",{staticClass:"el-button el-button--primary el-button--mini",attrs:{to:"/card"}},[t._v("查看")])],1)])])],1)],1),s("div",{staticClass:"m-index-asset-logs"},[s("h2",{staticClass:"u-title"},[s("i",{staticClass:"el-icon-bell"}),t._v(" 资产动态 "),s("div",{staticClass:"u-dates"},[s("i",{staticClass:"el-icon-date"}),s("el-radio-group",{model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},t._l(t.dates,(function(a,e){return s("el-radio",{key:e,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1)],1)]),t.asset_logs&&t.asset_logs.length?s("ul",{staticClass:"u-list"},t._l(t.asset_logs,(function(a,e){return s("li",{key:e,staticClass:"u-item"},[s("i",{class:t._f("showAssetIcon")(a.type)}),s("span",{staticClass:"u-type"},[t._v(t._s(t._f("showAssetType")(a.type)))]),s("span",{staticClass:"u-div"},[t._v("／")]),"boxcoin"==a.type?s("span",{staticClass:"u-boxcoin"},[s("span",{staticClass:"u-boxcoin-type"},[t._v(t._s(t.showBoxcoinType(a.data)))]),s("b",{class:t.showBoxcoinCls(a.data)},[s("span",[t._v(t._s(t.showBoxcoinOp(a.data)))]),t._v(" "+t._s(t.countBoxCoin(a.data))+" ")]),t._v(" , "),s("span",{staticClass:"u-boxcoin-remark"},[t._v(t._s(a.data.remark||"-"))]),a.data.post_type&&a.data.post_id?s("a",{staticClass:"u-link",attrs:{href:t.getPostLink(a.data.post_type,a.data.post_id)}},[s("i",{staticClass:"el-icon-link"}),t._v("查看详情")]):t._e()]):t._e(),"order"==a.type?s("span",{staticClass:"u-order"},[t._v(" 产品："+t._s(t._f("showProduct")(a.data.product_id))+"， 金额：¥ "),s("b",[t._v(t._s(t._f("showPrice")(a.data.total_fee)))]),t._v(" ， 状态："+t._s(t._f("showPayStatus")(a.data.pay_status))+" ")]):t._e(),"redpack"==a.type?s("span",{staticClass:"u-redpack"},[t._v(" 金额：¥ "),s("b",[t._v(t._s(t._f("showPrice")(a.data.money)))]),t._v(" ， 补充信息："+t._s(a.data.describe||"-")+" ")]):t._e(),"cny"==a.type?s("span",{staticClass:"u-boxcoin"},[s("span",{staticClass:"u-boxcoin-type"},[t._v(t._s(t.showCNYType(a.data)))]),s("b",{class:t.showCNYCls(a.data)},[s("span",[t._v(t._s(t.showCNYOp(a.data)))]),t._v(" "+t._s(a.data.money)+" ")]),t._v(" , "),s("span",{staticClass:"u-boxcoin-remark"},[t._v(t._s(a.data.remark||"-"))]),a.data.link_article_type&&a.data.link_article_id?s("a",{staticClass:"u-link",attrs:{href:t.getPostLink(a.data.link_article_type,a.data.link_article_id)}},[s("i",{staticClass:"el-icon-link"}),t._v("查看详情")]):t._e()]):t._e()])})),0):s("div",{staticClass:"u-null"},[s("i",{staticClass:"el-icon-warning-outline"}),t._v(" 当前时间范围内无记录")])])])},i=[],n=(s("a4d3"),s("e01a"),s("b680"),s("65c2")),o=s("c9d2"),r=s("85e4"),l=s("8e44"),c=s("e4f1"),u=s("c1fb"),d=s("31e8"),p=s("0cd3"),f=s("0521"),_=s("c1df"),m=s.n(_),v=s("4208"),h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"m-medal"},t._l(t.medals,(function(a){return s("a",{key:a.id,staticClass:"u-medal",attrs:{href:t.medalLink(a),target:"_blank",title:a.medal_desc}},[s("img",{staticClass:"u-medal-img",attrs:{src:t.showIcon(a.medal)}})])})),0)},b=[],C={name:"author_medal",props:{medals:{type:Array,default:function(){return[]}},showIcon:{type:Function,default:function(){return!0}}},methods:{medalLink:function(t){var a=t.rank_id,s=t.medal_type,e=void 0===s?"rank":s;return Object(r["getMedalLink"])(a,e)}}},g=C,y=(s("f55b"),s("2877")),w=Object(y["a"])(g,h,b,!1,null,null,null),x=w.exports,k={components:{avatar:v["default"],medal:x},name:"index",props:[],data:function(){return{uid:o["a"].getInfo().uid,group:o["a"].getInfo().group,info:{uid:8,name:"匿名",user_avatar:"https://img.jx3box.com/image/common/avatar.png",user_avatar_frame:"default",bio:"-",sign:0},asset:{expire_date:"2022-03-07T00:00:00+08:00",total_day:395,was_vip:0,pro_expire_date:"2022-03-07T00:00:00+08:00",pro_total_day:366,was_pro:0,box_coin:0,red_packet:0,points:0,gift:0},medals:[],asset_logs:[],asset_types:u,boxcoin_types:d,products:f["c"],pay_status:f["a"],pay_types:f["b"],date:m()().subtract(7,"days").format("YYYYMMDD")}},computed:{isVIP:function(){return o["a"]._isVIP(this.asset)||!1},isPRO:function(){return o["a"]._isPRO(this.asset)||!1},vipType:function(){return this.isPRO?"PRO":"PRE"},expire_date:function(){return this.isPRO?Object(c["a"])(this.asset.pro_expire_date):this.isVIP?Object(c["a"])(this.asset.expire_date):""},super_author_icon:function(){return n["__imgPath"]+"image/user/superauthor.svg"},dates:function(){return[{label:"今天",value:m()().format("YYYYMMDD")},{label:"7天",value:m()().subtract(7,"days").format("YYYYMMDD")},{label:"30天",value:m()().subtract(30,"days").format("YYYYMMDD")}]},isSuperAuthor:function(){var t;return!(null===(t=this.info)||void 0===t||!t.sign)},level:function(){var t;return o["a"].getLevel((null===(t=this.info)||void 0===t?void 0:t.experience)||0)}},methods:{loadUserInfo:function(){var t=this;Object(l["b"])().then((function(a){a.data.data&&(t.info=a.data.data)}))},loadAsset:function(){var t=this;o["a"].getAsset().then((function(a){t.asset=a}))},loadMedals:function(){var t=this;this.uid&&Object(l["d"])(this.uid).then((function(a){t.medals=a.data.data||[]}))},loadFrames:function(){var t=this;getFrames().then((function(a){a.data&&(t.frames=a.data||[])}))},loadAssetLogs:function(){var t=this;Object(l["a"])(this.date).then((function(a){t.asset_logs=a.data.data.list||[]}))},init:function(){this.loadUserInfo(),this.loadAsset(),this.loadMedals(),this.loadAssetLogs()},getPostLink:function(t,a){return Object(r["getLink"])(t,a)},showMedalIcon:function(t){return n["__imgPath"]+"image/medals/user/"+t+".gif"},countBoxCoin:function(t){var a=t.count,s=t.ext_take_off_count,e=t.ext2_take_off_count,i=t.action_type;return(a+~~s+~~e)*(i/Math.abs(i))},showBoxcoinType:function(t){return 9==t.action_type?t.operate_user_id==this.uid?"作品付费":"作品收入":d[t.action_type]||t.action_type},showBoxcoinOp:function(t){var a=this.countBoxCoin(t);return 9==t.action_type?t.operate_user_id==this.uid?"-":"+":"-2"==t.action_type?"-":a>=0?"+":""},showBoxcoinCls:function(t){var a=this.countBoxCoin(t);return 9==t.action_type?t.operate_user_id==this.uid&&"isNegative":("-2"==t.action_type||a<0)&&"isNegative"},showCNYType:function(t){return"-2"==t.action_type?t.pay_user_id==this.uid?"金箔消费":"金箔收入":p[t.action_type]||t.description||t.action_type},showCNYOp:function(t){return"-2"==t.action_type||"-3"==t.action_type?t.pay_user_id==this.uid?"-":"+":t.money>=0?"+":""},showCNYCls:function(t){return"-2"==t.action_type?t.pay_user_id==this.uid&&"isNegative":t.money<0&&"isNegative"}},filters:{groupicon:function(t){return n["__imgPath"]+"image/group/"+t+".svg"},showGroupName:function(t){return t?n["__userGroup"][t]:"游客"},formatCredit:function(t){return t?(t/100).toFixed(2):"0.00"},showAvatar:function(t){return t&&Object(r["getThumbnail"])(t,120,!0)||Object(r["getThumbnail"])(n["default_avatar"],120,!0)},showAssetType:function(t){var a;return(null===(a=u[t])||void 0===a?void 0:a["label"])||t},showAssetIcon:function(t){var a;return(null===(a=u[t])||void 0===a?void 0:a["icon"])||"el-icon-box"},showProduct:function(t){return f["c"][t]},showPayStatus:function(t){return f["a"][t]},showPayType:function(t){return f["b"][t]},showPrice:function(t){return t?(t/100).toFixed(2):"0.00"}},mounted:function(){this.init()},watch:{date:function(){this.loadAssetLogs()}}},P=k,O=(s("3e0c"),Object(y["a"])(P,e,i,!1,null,null,null));a["default"]=O.exports},"31e8":function(t){t.exports=JSON.parse('{"1":"品鉴评分","2":"用户打赏","3":"盒币充值","4":"盒币退回","5":"系统奖励","6":"打赏退回","7":"系统冲正","9":"付费作品","-1":"撤销评分","-2":"盒币兑换","-7":"系统冲正","-8":"过期失效"}')},"3e0c":function(t,a,s){"use strict";s("9fd6")},4208:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("uc",{staticClass:"m-dashboard-avatar"},[s("div",{staticClass:"m-profile-avatar"},[s("div",{staticClass:"m-profile-avatar-primary"},[s("div",{staticClass:"u-avatar"},[s("img",{staticClass:"u-avatar u-avatar-l",attrs:{src:t._f("showAvatar")(t.avatar)}})]),s("el-upload",{staticClass:"u-upload",attrs:{drag:"",accept:"image/png, image/gif, image/jpeg","on-change":t.upload,action:"upload/avatar","auto-upload":!1}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或 "),s("em",[t._v("点击上传")]),s("br"),s("span",{staticClass:"u-tip"},[t._v("只能上传jpg/png/gif文件")])])]),s("p",{staticClass:"u-btng"},[s("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确认")]),s("el-button",{on:{click:t.reset}},[t._v("重置")])],1)],1),s("div",{staticClass:"m-profile-avatar-frame"},[s("h3",{staticClass:"u-title"},[t._v(" 自定义头像框 "),s("span",{staticClass:"u-limit",class:{on:t.isVIP}},[t._v(" ( "),s("i",{class:t.isVIP?"el-icon-unlock":"el-icon-lock"}),t._v("仅"),s("a",{attrs:{href:"/vip/premium?from=dashboard_avatar",target:"_blank"}},[t._v("高级/专业版")]),t._v("账户适用 ) ")])]),t.frames?s("div",{staticClass:"u-list"},[s("li",{staticClass:"u-item",class:{on:!t.frame},on:{click:function(a){return t.selectFrame("")}}},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"无边框",placement:"top","open-delay":200}},[s("div",[s("img",{directives:[{name:"show",rawName:"v-show",value:!t.frame,expression:"!frame"}],staticClass:"u-pic",attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),s("i",{staticClass:"u-frame u-frame-none"})])])],1),t._l(t.frames,(function(a,e){return s("li",{key:e,staticClass:"u-item",class:{on:e==t.frame},on:{click:function(s){return t.selectFrame(a)}}},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:a.desc,placement:"top","open-delay":300}},[s("div",{class:{"u-blocked":!a.status}},[s("img",{directives:[{name:"show",rawName:"v-show",value:e==t.frame,expression:"name == frame"}],staticClass:"u-pic isCircle",attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),s("i",{staticClass:"u-frame"},[s("img",{attrs:{src:t.showFrame(a.name)}})])])])],1)}))],2):t._e(),s("div",{staticClass:"u-tip"},[s("i",{staticClass:"el-icon-warning-outline"}),t._v(" 「限定头像框」仅在指定时间段可选择激活。 ")])])])])},i=[],n=(s("99af"),s("b0c0"),s("b547")),o=s("46e8"),r=s("c9d2"),l=s("85e4"),c=s("1645"),u=s("65c2"),d={name:"avatar",props:[],data:function(){return{bak:"",avatar:"",frame:"",isVIP:!1,uid:r["a"].getInfo().uid,frames:c}},computed:{data:function(){return{user_avatar:this.avatar,user_avatar_frame:this.frame}}},methods:{upload:function(t,a){var s=this,e=new FormData,i=t.raw;e.append("avatar",i),Object(o["m"])(e).then((function(t){s.$message({message:"上传成功",type:"success"}),s.avatar=t.data.data[0]}))},reset:function(){this.avatar=this.bak},submit:function(){var t=this;this.isVIP||(this.frame&&this.$notify({title:"头像框未生效",message:"头像框仅高级/专业账号可用",type:"warning"}),this.frame=""),Object(o["j"])(this.data).then((function(a){r["a"].refresh("avatar",t.avatar),t.$message({message:"头像更新成功",type:"success"})}))},loadFrames:function(){var t=this;Object(o["d"])().then((function(a){t.frames=a.data}))},showFrame:function(t){return u["__imgPath"]+"avatar/images/".concat(t,"/").concat(t,".svg")},selectFrame:function(t){t?t.status&&(this.frame=t.name):this.frame=""},init:function(){var t=this;this.loadFrames(),r["a"].isVIP().then((function(a){t.isVIP=a})),this.avatar=this.bak=r["a"].getInfo().avatar_origin,Object(o["f"])(this.uid).then((function(a){t.frame=a.data.data.user_avatar_frame||""}))}},filters:{showAvatar:function(t){return Object(l["showAvatar"])(t,480,!1)},showSmallAvatar:function(t){return Object(l["showAvatar"])(t,136,!1)}},created:function(){this.init()},components:{uc:n["a"]}},p=d,f=(s("bfad"),s("2877")),_=Object(f["a"])(p,e,i,!1,null,null,null);a["default"]=_.exports},"9fd6":function(t,a,s){},bfad:function(t,a,s){"use strict";s("d38b")},c1fb:function(t){t.exports=JSON.parse('{"points":{"label":"积分变动","icon":"el-icon-sugar"},"boxcoin":{"label":"盒币变动","icon":"el-icon-coin"},"redpack":{"label":"红包金额","icon":"el-icon-wallet"},"order":{"label":"订单信息","icon":"el-icon-present"},"cny":{"label":"金箔变动","icon":"el-icon-coin"}}')},cdee:function(t,a,s){},d38b:function(t,a,s){},f55b:function(t,a,s){"use strict";s("cdee")}}]);
//# sourceMappingURL=chunk-7a26c463.da70281a.js.map