(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cf302a2"],{1101:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"n",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"o",(function(){return u})),n.d(e,"p",(function(){return d})),n.d(e,"i",(function(){return m})),n.d(e,"c",(function(){return p})),n.d(e,"m",(function(){return f})),n.d(e,"j",(function(){return h})),n.d(e,"l",(function(){return b})),n.d(e,"k",(function(){return g})),n.d(e,"b",(function(){return _})),n.d(e,"f",(function(){return v}));n("99af");var a=n("41cb");function o(t){return Object(a["e"])().get("/api/mall/ship-address",t)}function r(t){return Object(a["e"])().post("/api/mall/ship-address",t)}function i(t,e){return Object(a["e"])().put("/api/mall/ship-address/".concat(t),e)}function s(t){return Object(a["e"])().delete("/api/mall/ship-address/".concat(t))}function l(t){return Object(a["e"])().put("/api/mall/ship-address/default/".concat(t))}function c(t){return Object(a["e"])().get("/api/mall/my/orders",{params:t})}function u(t,e){return Object(a["e"])().put("/api/mall/my/orders/".concat(t,"/bind-address/").concat(e))}function d(t,e){return Object(a["e"])().put("/api/mall/my/orders/".concat(t,"/remark"),{remark:e})}function m(t){return Object(a["e"])().get("/api/mall/my/orders/".concat(t))}function p(t){return Object(a["e"])().put("/api/mall/my/orders/".concat(t,"/cancel"))}function f(t){return Object(a["e"])().post("/api/mall/my/orders/".concat(t,"/pay"))}function b(t){return Object(a["e"])().post("/api/mall/my/orders/".concat(t,"/received"))}function h(t){return Object(a["e"])().get("/api/mall/my/virtual_goods",{params:t})}function g(t){return Object(a["e"])().post("/api/mall/goods-rate",t)}function _(t,e){return Object(a["e"])().post("/api/mall/goods-rate/".concat(t,"/append-comments"),e)}function v(t){return Object(a["e"])().delete("/api/mall/goods-rate/".concat(t))}},2523:function(t,e,n){"use strict";n("4270")},"3c92":function(t,e,n){"use strict";n("68b3")},4270:function(t,e,n){},"46c1":function(t){t.exports=JSON.parse('{"d":[{"name":"frame","icon":"el-icon-camera","label":"头像框"},{"name":"theme","icon":"el-icon-orange","label":"主题风格"},{"name":"honor","icon":"el-icon-collection-tag","label":"称号"},{"name":"emotion","icon":"el-icon-picture-outline-round","label":"表情包"}],"c":[{"name":"profile","icon":"el-icon-user","label":"基本资料"},{"name":"avatar","icon":"el-icon-camera","label":"修改头像"},{"name":"pwd","icon":"el-icon-lock","label":"修改密码"},{"name":"email","icon":"el-icon-message","label":"邮箱设置"},{"name":"connect","icon":"el-icon-connection","label":"绑定账号"},{"name":"address","icon":"el-icon-map-location","label":"地址管理"}],"a":[{"name":"mall","icon":"el-icon-shopping-bag-1","label":"商城订单"},{"name":"orders","icon":"el-icon-shopping-bag-2","label":"系统订单"}],"b":[{"name":"msg","icon":"el-icon-message","label":"消息"},{"name":"letter","icon":"el-icon-chat-dot-square","label":"私信"}]}')},"68b3":function(t,e,n){},a890:function(t,e,n){"use strict";n("cd03")},b547:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-dashboard-profile m-profile"},[e("h2",{staticClass:"u-title"},[e("i",{class:t.icon}),t._v(" "+t._s(t.title)+" "),t._t("header")],2),e("tabs",{attrs:{tabs:t.tabList}}),t._t("default")],2)},o=[],r=(n("b0c0"),function(){var t=this,e=t._self._c;return e("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(n){return e("el-tab-pane",{key:n.name,attrs:{name:n.name}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"u-tab-icon",class:n.icon}),t._v(" "+t._s(n.label))])])})),1)}),i=[],s=(n("14d9"),{name:"",props:{tabs:{type:Array,default:function(){return[]}}},data:function(){return{active:""}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),l=s,c=n("2877"),u=Object(c["a"])(l,r,i,!1,null,null,null),d=u.exports,m=n("46c1"),p={name:"uc",props:{icon:{type:String,default:"el-icon-user"},title:{type:String,default:"我的资料"},tabList:{type:Array,default:function(){return m["c"]}}},data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:d}},f=p,b=(n("3c92"),Object(c["a"])(f,a,o,!1,null,null,null));e["a"]=b.exports},b8fd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("uc",{attrs:{icon:"el-icon-shopping-bag-1",title:"订单中心",tabList:t.tabList}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-page-record p-mall-orders"},[e("div",{staticClass:"m-content"},[e("el-table",{attrs:{data:t.list,size:"small"}},[e("el-table-column",{attrs:{prop:"order.created_at",label:"兑换时间",width:"180"}}),e("el-table-column",{attrs:{label:"兑换商品"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"m-line"},[t._v(" "+t._s(n.row.goods.title)+" ")])]}}])}),e("el-table-column",{attrs:{label:"订单号"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"m-line"},[t._v(" "+t._s(n.row.order.order_no)+" ")])]}}])}),e("el-table-column",{attrs:{prop:"order.goods_num",label:"数量",width:"80"}}),e("el-table-column",{attrs:{label:"订单状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.orderStatus[e.row.order.order_status])+" ")]}}])}),e("el-table-column",{attrs:{label:"付款状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.payStatus[e.row.order.pay_status])+" ")]}}])}),e("el-table-column",{attrs:{label:"是否为赠送",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.order.is_vitural_gift_order?"是":"否")+" ")]}}])}),e("el-table-column",{attrs:{label:"操作","min-width":"220"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"m-button"},[e("el-button",{attrs:{size:"small",icon:"el-icon-link"},on:{click:function(e){return t.showDetail(n.row)}}},[t._v(" 查看详情 ")]),t.showPay(n.row.order)?e("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-position"},on:{click:function(e){return t.toPay(n.row)}}},[t._v("点击支付")]):t._e(),3==n.row.order.order_status?[e("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-circle-check"},on:{click:function(e){return t.isReceipt(n.row.order.id)}}},[t._v("确认收货")])]:t._e(),e("el-popconfirm",{attrs:{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info",title:"确定取消吗？"},on:{confirm:function(e){return t.cancel(n.row.order.id)}}},[0==n.row.order.order_status?e("el-button",{attrs:{slot:"reference",size:"small",type:"info",plain:"",icon:"el-icon-circle-close"},slot:"reference"},[t._v("取消订单")]):t._e()],1),4==n.row.order.order_status?[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleShow("comment",n.row.order.id)}}},[t._v(" 评价商品 ")])]:t._e()],2)]}}])})],1)],1),e("div",{staticClass:"m-record-pages"},[e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next,jumper","page-size":t.pageSize,total:t.total,"current-page":t.pageIndex,"hide-on-single-page":!0},on:{"update:currentPage":function(e){t.pageIndex=e},"update:current-page":function(e){t.pageIndex=e}}})],1)]),e("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("GoodComment",{attrs:{order_id:t.order_id,type:t.type},on:{close:t.handleClose}})],1)],1)},o=[],r=(n("14d9"),n("d81d"),n("b547")),i=function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",staticClass:"m-goods-comment",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"商品评价",prop:"rate"}},[e("el-rate",{attrs:{max:3},model:{value:t.form.rate,callback:function(e){t.$set(t.form,"rate",e)},expression:"form.rate"}})],1),e("el-form-item",{attrs:{label:"物流评价",prop:"express_rate"}},[e("el-rate",{attrs:{max:3},model:{value:t.form.express_rate,callback:function(e){t.$set(t.form,"express_rate",e)},expression:"form.express_rate"}})],1),e("el-form-item",{attrs:{label:"评价内容",prop:"comment"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}})],1),e("el-form-item",{attrs:{label:"是否匿名",prop:"is_anonymous"}},[e("el-switch",{model:{value:t.form.is_anonymous,callback:function(e){t.$set(t.form,"is_anonymous",e)},expression:"form.is_anonymous"}})],1),e("div",{staticClass:"m-button"},[e("el-button",{on:{click:function(e){return t.close("form")}}},[t._v("取消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("确定")])],1)],1)},s=[],l=n("1101"),c={name:"goodComment",props:["order_id"],data:function(){return{form:{rate:3,express_rate:3,comment:"",is_anonymous:!0,order_id:this.order_id},rules:{comment:{required:!0,message:"请填写评价内容",trigger:"blur"}}}},methods:{close:function(t){this.$emit("close",t)},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){t&&Object(l["k"])(e.form).then((function(){e.$message({message:"评价成功",type:"success"}),e.close(e.order_id)}))}))}}},u=c,d=(n("2523"),n("2877")),m=Object(d["a"])(u,i,s,!1,null,null,null),p=m.exports,f=n("f03c"),b=n("46c1"),h={name:"mall",components:{uc:r["a"],GoodComment:p},data:function(){return{list:[],total:0,pageIndex:1,pageSize:10,loading:!1,payStatus:f["b"],orderStatus:f["a"],order_id:"",tabList:b["a"],dialogVisible:!1,type:""}},computed:{params:function(){var t={pageIndex:this.pageIndex,pageSize:this.pageSize};return t},params_pageIndex:function(){return this.$route.params.pageIndex},title:function(){var t={comment:"商品评价",append:"追加评价"};return t[this.type]||""}},watch:{params:{deep:!0,handler:function(){this.load()}},params_pageIndex:{immediate:!0,handler:function(t){t&&(this.pageIndex=t)}}},methods:{load:function(){var t=this;this.loading=!0,Object(l["h"])(this.params).then((function(e){t.list=e.data.data.list,t.total=e.data.data.page.total,t.loading=!1}))},showPay:function(t){var e=t.order_status,n=t.pay_status;return 1!=e&&2!=e&&7!=e&&0==n},showDetail:function(t){var e=t.order;this.$router.push({name:"order-detail",params:{id:e.id,pageIndex:this.pageIndex}})},cancel:function(t){var e=this;Object(l["c"])(t).then((function(){e.$message({message:"关闭订单成功",type:"success"}),e.list=e.list.map((function(e){return e.order.id==t&&(e.order.order_status=1),e}))}))},toPay:function(t){var e=this,n=t.order.id;Object(l["m"])(n).then((function(){e.$message({message:"付款成功",type:"success"}),e.list=e.list.map((function(t){return t.order.id==n&&(t.order.pay_status=1),t}))}))},isReceipt:function(t){var e=this;Object(l["l"])(t).then((function(){e.$message({message:"收货成功",type:"success"}),e.list=e.list.map((function(e){return e.order.id==t&&(e.order.order_status=4),e}))}))},handleShow:function(t,e){this.type=t,this.order_id=e,this.dialogVisible=!0},handleClose:function(t){this.dialogVisible=!1,this.order_id="",this.type="",t&&(this.list=this.list.map((function(e){return e.order.id==t&&(e.order.order_status=5),e})))}},mounted:function(){this.load()}},g=h,_=(n("a890"),Object(d["a"])(g,a,o,!1,null,null,null));e["default"]=_.exports},cd03:function(t,e,n){},f03c:function(t){t.exports=JSON.parse('{"b":{"0":"未支付","1":"已支付","2":"已退款"},"a":{"0":"未发货","1":"取消订单","2":"订单关闭","3":"已发货","4":"确认收货","5":"已评价","6":"退货退款","7":"等待退款","8":"已追评","9":"系统回复"}}')}}]);
//# sourceMappingURL=chunk-3cf302a2.07827a67.js.map