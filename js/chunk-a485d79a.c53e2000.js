(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a485d79a"],{1101:function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"a",(function(){return n})),a.d(e,"n",(function(){return o})),a.d(e,"e",(function(){return i})),a.d(e,"d",(function(){return c})),a.d(e,"h",(function(){return d})),a.d(e,"o",(function(){return l})),a.d(e,"p",(function(){return u})),a.d(e,"i",(function(){return m})),a.d(e,"c",(function(){return p})),a.d(e,"m",(function(){return f})),a.d(e,"j",(function(){return b})),a.d(e,"l",(function(){return _})),a.d(e,"k",(function(){return h})),a.d(e,"b",(function(){return v})),a.d(e,"f",(function(){return g}));a("99af");var r=a("41cb");function s(t){return Object(r["d"])().get("/api/mall/ship-address",t)}function n(t){return Object(r["d"])().post("/api/mall/ship-address",t)}function o(t,e){return Object(r["d"])().put("/api/mall/ship-address/".concat(t),e)}function i(t){return Object(r["d"])().delete("/api/mall/ship-address/".concat(t))}function c(t){return Object(r["d"])().put("/api/mall/ship-address/default/".concat(t))}function d(t){return Object(r["d"])().get("/api/mall/my/orders",{params:t})}function l(t,e){return Object(r["d"])().put("/api/mall/my/orders/".concat(t,"/bind-address/").concat(e))}function u(t,e){return Object(r["d"])().put("/api/mall/my/orders/".concat(t,"/remark"),{remark:e})}function m(t){return Object(r["d"])().get("/api/mall/my/orders/".concat(t))}function p(t){return Object(r["d"])().put("/api/mall/my/orders/".concat(t,"/cancel"))}function f(t){return Object(r["d"])().post("/api/mall/my/orders/".concat(t,"/pay"))}function _(t){return Object(r["d"])().post("/api/mall/my/orders/".concat(t,"/received"))}function b(t){return Object(r["d"])().get("/api/mall/my/virtual_goods",{params:t})}function h(t){return Object(r["d"])().post("/api/mall/goods-rate",t)}function v(t,e){return Object(r["d"])().post("/api/mall/goods-rate/".concat(t,"/append-comments"),e)}function g(t){return Object(r["d"])().delete("/api/mall/goods-rate/".concat(t))}},"3c92":function(t,e,a){"use strict";a("68b3")},"46c1":function(t){t.exports=JSON.parse('{"d":[{"name":"frame","icon":"el-icon-camera","label":"头像框"},{"name":"theme","icon":"el-icon-orange","label":"主题风格"},{"name":"honor","icon":"el-icon-collection-tag","label":"称号"},{"name":"emotion","icon":"el-icon-picture-outline-round","label":"表情包"}],"c":[{"name":"profile","icon":"el-icon-user","label":"基本资料"},{"name":"avatar","icon":"el-icon-camera","label":"修改头像"},{"name":"pwd","icon":"el-icon-lock","label":"修改密码"},{"name":"notice","icon":"el-icon-message","label":"通知中心"},{"name":"connect","icon":"el-icon-connection","label":"绑定账号"},{"name":"address","icon":"el-icon-map-location","label":"地址管理"}],"a":[{"name":"mall","icon":"el-icon-shopping-bag-1","label":"商城订单"},{"name":"orders","icon":"el-icon-shopping-bag-2","label":"系统订单"}],"b":[{"name":"msg","icon":"el-icon-message","label":"消息"},{"name":"letter","icon":"el-icon-chat-dot-square","label":"私信"}]}')},"61fa":function(t,e,a){"use strict";a("9c72")},"68b3":function(t,e,a){},"9c72":function(t,e,a){},b547:function(t,e,a){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-dashboard-profile m-profile"},[e("h2",{staticClass:"u-title"},[e("i",{class:t.icon}),t._v(" "+t._s(t.title)+" "),t._t("header")],2),e("tabs",{attrs:{tabs:t.tabList}}),t._t("default")],2)},s=[],n=(a("b0c0"),function(){var t=this,e=t._self._c;return e("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(a){return e("el-tab-pane",{key:a.name,attrs:{name:a.name}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"u-tab-icon",class:a.icon}),t._v(" "+t._s(a.label))])])})),1)}),o=[],i=(a("14d9"),{name:"",props:{tabs:{type:Array,default:function(){return[]}}},data:function(){return{active:""}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),c=i,d=a("2877"),l=Object(d["a"])(c,n,o,!1,null,null,null),u=l.exports,m=a("46c1"),p={name:"uc",props:{icon:{type:String,default:"el-icon-user"},title:{type:String,default:"我的资料"},tabList:{type:Array,default:function(){return m["c"]}}},data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:u}},f=p,_=(a("3c92"),Object(d["a"])(f,r,s,!1,null,null,null));e["a"]=_.exports},ed5e:function(t,e,a){"use strict";a.r(e);a("99af");var r=function(){var t=this,e=t._self._c;return e("uc",{attrs:{icon:"el-icon-shopping-bag-1",title:"订单中心",tabList:t.tabList}},[e("div",{staticClass:"m-mall-detail"},[e("div",{staticClass:"m-breadcrumb"},[e("span",{staticClass:"u-back",on:{click:t.goBack}},[e("i",{staticClass:"el-icon-arrow-left"}),t._v(" 返回")])]),t.goods?e("div",{staticClass:"m-content"},[t.goods.is_virtual?t._e():e("div",{staticClass:"m-address el-card"},[e("span",[t._v("收件人："+t._s(t.address.actual_contact))]),e("span",[t._v("联系电话："+t._s(t.address.actual_phone))]),e("span",[t._v("收货地址： "+t._s(t.address.actual_address))])]),t.goods?e("div",{staticClass:"m-order el-card"},[e("div",{staticClass:"m-img"},[t.goods.goods_images?e("img",{attrs:{src:t.goods.goods_images[0]}}):t._e(),t.goods.is_virtual?e("span",{staticClass:"u-link",on:{click:function(e){return t.openVirtual(t.goods)}}},[t._v("点击查看")]):t._e()]),e("el-descriptions",{staticClass:"m-descriptions",attrs:{title:t.goods.title,direction:"vertical",column:3,border:""}},[e("el-descriptions-item",{attrs:{label:"下单时间"}},[t._v(t._s(t.order.created_at))]),e("el-descriptions-item",{attrs:{label:"订单编号",span:2}},[t._v(t._s(t.order.order_no))]),e("el-descriptions-item",{attrs:{label:"购买数量"}},[t._v(t._s(t.order.goods_num))]),e("el-descriptions-item",{attrs:{label:"邮费"}},[t._v(" "+t._s(t.goods.postage?t.goods.postage/100+"元":"包邮")+" ")]),e("el-descriptions-item",{attrs:{label:"支付状态"}},[t._v(t._s(t.payStatus[t.order.pay_status]))]),e("el-descriptions-item",{attrs:{label:"订单状态"}},[t._v(" "+t._s(t.orderStatus[t.order.order_status])+" ")]),e("el-descriptions-item",{attrs:{label:"购买消耗"}},[e("div",{staticClass:"u-box"},[t.order.goods_price_cny?e("span",[t._v(" 金箔："),e("b",[t._v(t._s(t.order.goods_price_cny*t.order.goods_num))])]):t._e(),t.order.goods_price_boxcoin?e("span",[t._v(" 盒币："),e("b",[t._v(t._s(t.order.goods_price_boxcoin*t.order.goods_num))])]):t._e(),t.order.goods_price_point?e("span",[t._v(" 银铛："),e("b",[t._v(t._s(t.order.goods_price_point*t.order.goods_num))])]):t._e()])]),e("el-descriptions-item",{attrs:{label:"是否为赠送"}},[t._v(t._s(t.order.is_vitural_gift_order?"是":"否"))]),e("el-descriptions-item",{attrs:{label:"备注"}},[t._v(t._s(t.order.remark||"-"))]),t.rate.comment?e("el-descriptions-item",{attrs:{label:"评价",span:3}},[e("div",{staticClass:"m-comment"},[e("div",{staticClass:"m-text"},[e("span",{staticClass:"u-comment"},[t._v(t._s(t.rate.comment))]),t.rate.add_comment?e("span",{staticClass:"u-add_comment"},[t._v("追加评价："+t._s(t.rate.add_comment))]):t._e(),t.append?e("el-input",{staticClass:"u-textarea",model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[e("template",{slot:"append"},[e("span",{staticStyle:{cursor:"pointer"},on:{click:t.appendComment}},[t._v("确定")])])],2):t._e()],1),e("div",{staticClass:"u-button"},[5==t.order.order_status?e("el-button",{attrs:{type:"text"},on:{click:function(e){t.append=!t.append}}},[t._v(" 追加评论 ")]):t._e(),e("el-popconfirm",{attrs:{title:"确认删除评价吗？",width:200},on:{confirm:function(e){return t.delComment(t.rate.id)}}},[e("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("删除")])],1)],1)])]):t._e()],1)],1):t._e(),e("div",{staticClass:"m-button"},[0==t.data.order.order_status?[e("el-button",{on:{click:function(e){return t.cancel(t.data.order.id)}}},[t._v("取消订单")]),e("el-button",{on:{click:function(e){return t.open(t.data.order.id,"address")}}},[t._v("修改地址")]),e("el-button",{on:{click:function(e){return t.open(t.data.order.id,"remark")}}},[t._v("添加备注")])]:t._e(),3==t.data.order.order_status?e("el-button",{on:{click:function(e){return t.toConfirm(t.data.order.id)}}},[t._v(" 确认收货 ")]):t._e(),t.showPay(t.data.order)?e("el-button",{on:{click:function(e){return t.toPay(t.data)}}},[t._v("点击付款")]):t._e()],2)]):t._e(),e("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"30%","before-close":t.close,"custom-class":"m-edit-dialog"},on:{"update:visible":function(e){t.dialogVisible=e}}},["address"==t.mode?[e("el-form",{ref:"address_form",staticClass:"demo-form-inline",attrs:{model:t.address_form,rules:t.address_rules}},[e("el-form-item",{attrs:{label:"选择收货地址",prop:"address_id"}},[e("el-select",{model:{value:t.address_form.address_id,callback:function(e){t.$set(t.address_form,"address_id",e)},expression:"address_form.address_id"}},t._l(t.addressList,(function(t,a){return e("el-option",{key:a,attrs:{label:"【 ".concat(t.contact_name," ").concat(t.contact_phone," 】 ").concat(t.province).concat(t.city).concat(t.area).concat(t.address),value:t.id}})})),1)],1),e("el-form-item",[e("div",{staticClass:"m-button"},[e("el-button",{on:{click:t.close}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit("address_form")}}},[t._v("确定")])],1)])],1)]:[e("el-form",{ref:"remark_form",staticClass:"demo-form-inline",attrs:{model:t.remark_form,rules:t.remark_rules}},[e("el-form-item",{attrs:{label:"备注",prop:"remark"}},[e("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入备注"},model:{value:t.remark_form.remark,callback:function(e){t.$set(t.remark_form,"remark",e)},expression:"remark_form.remark"}})],1),e("el-form-item",[e("div",{staticClass:"m-button"},[e("el-button",{on:{click:t.close}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit("remark_form")}}},[t._v("确定")])],1)])],1)]],2)],1)])},s=[],n=(a("14d9"),a("d81d"),a("4de4"),a("d3b7"),a("1101")),o=a("f03c"),i=a("b547"),c=a("46c1"),d={name:"orderDetail",components:{uc:i["a"]},data:function(){return{data:{},mode:"",dialogVisible:!1,addressList:[],address_form:{address_id:""},address_rules:{address_id:[{required:!0,message:"请选择地址",trigger:"change"}]},remark_form:{remark:""},remark_rules:{remark:[{required:!0,message:"请输入备注",trigger:"blur"}]},content:"",append:!1,tabList:c["a"]}},computed:{id:function(){return this.$route.params.id},pageIndex:function(){return this.$route.params.pageIndex},address:function(){return this.data.shipAddress||{}},order:function(){return this.data.order},goods:function(){return this.data.goods},rate:function(){return this.data.rate},payStatus:function(){return o["b"]},orderStatus:function(){return o["a"]},title:function(){return"address"==this.mode?"修改收货地址":"修改备注"}},methods:{load:function(){var t=this;Object(n["i"])(this.id).then((function(e){t.data=e.data.data}))},loadAddress:function(){var t=this;Object(n["g"])().then((function(e){t.addressList=e.data.data.list}))},closeButton:function(t){return!!t&&(1!=t.order_status&&2!=t.order_status&&7!=t.order_status)},showPay:function(t){if(t){var e=t.order_status,a=t.pay_status;return 1!=e&&2!=e&&7!=e&&0==a}return!1},toConfirm:function(t){var e=this;Object(n["l"])(t).then((function(){e.$message({message:"收货成功",type:"success"}),e.data.order.order_status=4}))},goBack:function(){this.$router.push({name:"mall",params:{pageIndex:this.pageIndex}})},open:function(t,e){this.order_id=t,"address"==e&&this.loadAddress(),void 0!==this.$refs.address_form&&this.$refs.address_form.clearValidate(),void 0!==this.$refs.remark_form&&this.$refs.remark_form.clearValidate(),this.mode=e,this.dialogVisible=!0},close:function(){this.dialogVisible=!1},cancel:function(t){var e=this;Object(n["c"])(t).then((function(a){e.$message({message:"关闭订单成功",type:"success"}),e.list=e.list.map((function(e){return e.order.id==t&&(e.order.order_status=1),e}))}))},toPay:function(t){var e=this,a=t.order.id;Object(n["m"])(a).then((function(){e.$message({message:"支付成功",type:"success"}),e.list=e.list.map((function(t){return t.order.id==a&&(t.order.pay_status=1),t}))}))},submit:function(t){var e=this;this.$refs[t].validate((function(t){t&&("address"==e.mode?Object(n["o"])(e.order_id,e.address_form.address_id).then((function(){e.$message({message:"修改地址成功",type:"success"});var t=e.addressList.filter((function(t){return t.id==e.address_form.address_id}))[0];if(t){var a=t.province,r=t.city,s=t.area,n=t.address,o=t.contact_name,i=t.contact_phone,c=a+" "+r+" "+s+" "+n;e.data.shipAddress.actual_address=c,e.data.shipAddress.actual_contact=o,e.data.shipAddress.actual_phone=i}e.close()})):Object(n["p"])(e.order_id,e.remark_form.remark).then((function(){e.$message({message:"修改备注成功",type:"success"}),e.data.order.remark=e.remark_form.remark,e.close()})))}))},openVirtual:function(t){var e=t.sub_category,a=null,r={code:this.$router.resolve({name:"card",query:{tab:"virtual"}}),emotion:this.$router.resolve({name:"emotion"}),skin:this.$router.resolve({name:"theme"}),avatar:this.$router.resolve({name:"frame"}),honor:this.$router.resolve({name:"honor"})};a=r[e],a&&window.open(a.href,"_blank")},appendComment:function(){var t=this;this.content&&Object(n["b"])(this.rate.id,{content:this.content}).then((function(e){t.$message({message:"追评成功",type:"success"}),t.data.rate.add_comment=t.content,t.data.order.order_status=8,t.append=!1}))},delComment:function(t){var e=this;Object(n["f"])(t).then((function(t){e.$message({message:"删除评价成功",type:"success"}),e.data.rate.comment=""}))}},mounted:function(){this.id&&this.load()}},l=d,u=(a("61fa"),a("2877")),m=Object(u["a"])(l,r,s,!1,null,null,null);e["default"]=m.exports},f03c:function(t){t.exports=JSON.parse('{"b":{"0":"未支付","1":"已支付","2":"已退款"},"a":{"0":"未发货","1":"取消订单","2":"订单关闭","3":"已发货","4":"确认收货","5":"已评价","6":"退货退款","7":"等待退款","8":"已追评","9":"系统回复"}}')}}]);
//# sourceMappingURL=chunk-a485d79a.c53e2000.js.map