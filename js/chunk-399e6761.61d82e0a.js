(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399e6761"],{1101:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"k",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"j",(function(){return m})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return b}));n("99af");var r=n("41cb");function a(t){return Object(r["e"])().get("/mall/ship-address",t)}function o(t){return Object(r["e"])().post("/mall/ship-address",t)}function s(t,e){return Object(r["e"])().put("/mall/ship-address/".concat(t),e)}function c(t){return Object(r["e"])().delete("/mall/ship-address/".concat(t))}function i(t){return Object(r["e"])().put("/mall/ship-address/default/".concat(t))}function u(t){return Object(r["e"])().get("/mall/my/orders",{params:t})}function l(t,e){return Object(r["e"])().put("/mall/my/orders/".concat(t,"/bind-address/").concat(e))}function d(t,e){return Object(r["e"])().put("/mall/my/orders/".concat(t,"/remark"),{remark:e})}function p(t){return Object(r["e"])().get("/mall/my/orders/".concat(t))}function f(t){return Object(r["e"])().put("/mall/my/orders/".concat(t,"/cancel"))}function m(t){return Object(r["e"])().post("/mall/my/orders/".concat(t,"/pay"))}function b(t){return Object(r["e"])().post("/mall/my/orders/".concat(t,"/received"))}function h(t){return Object(r["e"])().get("/mall/my/virtual_goods",{params:t})}},"7cf3":function(t,e,n){},b8fd:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-page-record p-mall-orders"},[t._m(0),n("div",{staticClass:"m-content"},[n("el-table",{attrs:{data:t.list,size:"small"}},[n("el-table-column",{attrs:{prop:"order.created_at",label:"兑换时间",width:"180"}}),n("el-table-column",{attrs:{label:"兑换商品"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"m-line"},[t._v(" "+t._s(e.row.goods.title)+" ")])]}}])}),n("el-table-column",{attrs:{label:"订单号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"m-line"},[t._v(" "+t._s(e.row.order.order_no)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"order.goods_num",label:"数量",width:"80"}}),n("el-table-column",{attrs:{label:"订单状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.orderStatus[e.row.order.order_status])+" ")]}}])}),n("el-table-column",{attrs:{label:"付款状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.payStatus[e.row.order.pay_status])+" ")]}}])}),n("el-table-column",{attrs:{label:"操作","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"m-button"},[n("el-button",{attrs:{size:"small",icon:"el-icon-link"},on:{click:function(n){return t.showDetail(e.row)}}},[t._v("查看详情")]),t.showPay(e.row.order)?n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-position"},on:{click:function(n){return t.toPay(e.row)}}},[t._v("点击支付")]):t._e(),3==e.row.order.order_status?[e.row.goods.is_virtual?t._e():n("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-circle-check"},on:{click:function(n){return t.isReceipt(e.row.order.id)}}},[t._v("确认收货")])]:t._e(),n("el-popconfirm",{attrs:{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info",title:"确定取消吗？"},on:{confirm:function(n){return t.cancel(e.row.order.id)}}},[0==e.row.order.order_status?n("el-button",{attrs:{slot:"reference",size:"small",type:"info",plain:"",icon:"el-icon-circle-close"},slot:"reference"},[t._v("取消订单")]):t._e()],1)],2)]}}])})],1)],1),n("div",{staticClass:"m-record-pages"},[n("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next,jumper","page-size":t.pageSize,total:t.total,"current-page":t.pageIndex,"hide-on-single-page":!0},on:{"update:currentPage":function(e){t.pageIndex=e},"update:current-page":function(e){t.pageIndex=e}}})],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"u-title"},[n("span",{staticClass:"i-title"},[n("i",{staticClass:"el-icon-present"}),t._v(" 商城订单")])])}],o=(n("d81d"),n("1101")),s=n("f03c"),c={name:"record",data:function(){return{list:[],total:0,pageIndex:1,pageSize:10,payStatus:s["b"],orderStatus:s["a"],order_id:""}},computed:{params:function(){var t={pageIndex:this.pageIndex,pageSize:this.pageSize};return t},params_pageIndex:function(){return this.$route.params.pageIndex}},watch:{params:{deep:!0,handler:function(){this.load()}},params_pageIndex:{immediate:!0,handler:function(t){t&&(this.pageIndex=t)}}},methods:{load:function(){var t=this;Object(o["f"])(this.params).then((function(e){t.list=e.data.data.list,t.total=e.data.data.page.total}))},showPay:function(t){var e=t.order_status,n=t.pay_status;return 1!=e&&2!=e&&7!=e&&0==n},showDetail:function(t){var e=t.goods,n=t.order;if(e.is_virtual){var r=null;r="code"==e.sub_category?this.$router.resolve({name:"card",query:{tab:"virtual"}}):this.$router.resolve({name:"frame"}),r&&window.open(r.href,"_blank")}else this.$router.push({name:"order-detail",params:{id:n.id,pageIndex:this.pageIndex}})},cancel:function(t){var e=this;Object(o["b"])(t).then((function(){e.$message({message:"关闭订单成功",type:"success"}),e.list=e.list.map((function(e){return e.order.id==t&&(e.order.order_status=1),e}))}))},toPay:function(t){var e=this,n=t.order.id;Object(o["j"])(n).then((function(){e.$message({message:"付款成功",type:"success"}),e.list=e.list.map((function(t){return t.order.id==n&&(t.order.pay_status=1),t}))}))},isReceipt:function(t){var e=this;Object(o["i"])(t).then((function(){e.$message({message:"收货成功",type:"success"}),e.list=e.list.map((function(e){return e.order.id==t&&(e.order.order_status=4),e}))}))}},mounted:function(){this.load()}},i=c,u=(n("ce02"),n("2877")),l=Object(u["a"])(i,r,a,!1,null,null,null);e["default"]=l.exports},ce02:function(t,e,n){"use strict";n("7cf3")},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,o=n("1dde"),s=o("map");r({target:"Array",proto:!0,forced:!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},f03c:function(t){t.exports=JSON.parse('{"b":{"0":"未支付","1":"已支付","2":"已退款"},"a":{"0":"未发货","1":"已取消","2":"已关闭","3":"已发货","4":"已收货","5":"已评价","6":"已退货","7":"等待退款"}}')}}]);
//# sourceMappingURL=chunk-399e6761.61d82e0a.js.map