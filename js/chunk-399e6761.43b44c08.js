(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399e6761"],{1101:function(t,e,r){"use strict";r.d(e,"e",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"k",(function(){return s})),r.d(e,"d",(function(){return u})),r.d(e,"c",(function(){return c})),r.d(e,"f",(function(){return i})),r.d(e,"l",(function(){return l})),r.d(e,"m",(function(){return d})),r.d(e,"g",(function(){return p})),r.d(e,"b",(function(){return f})),r.d(e,"j",(function(){return m})),r.d(e,"h",(function(){return g})),r.d(e,"i",(function(){return b}));r("99af");var n=r("41cb");function a(t){return Object(n["e"])().get("/mall/ship-address",t)}function o(t){return Object(n["e"])().post("/mall/ship-address",t)}function s(t,e){return Object(n["e"])().put("/mall/ship-address/".concat(t),e)}function u(t){return Object(n["e"])().delete("/mall/ship-address/".concat(t))}function c(t){return Object(n["e"])().put("/mall/ship-address/default/".concat(t))}function i(t){return Object(n["e"])().get("/mall/my/orders",{params:t})}function l(t,e){return Object(n["e"])().put("/mall/my/orders/".concat(t,"/bind-address/").concat(e))}function d(t,e){return Object(n["e"])().put("/mall/my/orders/".concat(t,"/remark"),{remark:e})}function p(t){return Object(n["e"])().get("/mall/my/orders/".concat(t))}function f(t){return Object(n["e"])().put("/mall/my/orders/".concat(t,"/cancel"))}function m(t){return Object(n["e"])().post("/mall/my/orders/".concat(t,"/pay"))}function b(t){return Object(n["e"])().post("/mall/my/orders/".concat(t,"/received"))}function g(t){return Object(n["e"])().get("/mall/my/virtual_goods",{params:t})}},"7cf3":function(t,e,r){},b8fd:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-page-record"},[t._m(0),r("div",{staticClass:"m-content"},[r("el-table",{attrs:{data:t.list,size:"small"}},[r("el-table-column",{attrs:{prop:"order.created_at",label:"兑换时间",width:"180"}}),r("el-table-column",{attrs:{label:"兑换商品"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"m-line"},[t._v(" "+t._s(e.row.goods.title)+" ")])]}}])}),r("el-table-column",{attrs:{label:"订单号"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"m-line"},[t._v(" "+t._s(e.row.order.order_no)+" ")])]}}])}),r("el-table-column",{attrs:{prop:"order.goods_num",label:"数量",width:"80"}}),r("el-table-column",{attrs:{label:"订单状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.orderStatus[e.row.order.order_status])+" ")]}}])}),r("el-table-column",{attrs:{label:"付款状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.payStatus[e.row.order.pay_status])+" ")]}}])}),r("el-table-column",{attrs:{label:"操作","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"m-button"},[r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.showDetail(e.row)}}},[t._v("查看详情")]),t.showPay(e.row.order)?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.toPay(e.row)}}},[t._v(" 点击支付 ")]):t._e(),r("el-popconfirm",{attrs:{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info",title:"确定取消吗？"},on:{confirm:function(r){return t.cancel(e.row.order.id)}}},[0==e.row.order.order_status?r("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("取消订单")]):t._e()],1),3==e.row.order.order_status?[e.row.goods.is_virtual?t._e():r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.isReceipt(e.row.order.id)}}},[t._v("确认收货")])]:t._e()],2)]}}])})],1)],1),r("div",{staticClass:"m-record-pages"},[r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next,jumper","page-size":t.pageSize,total:t.total,"current-page":t.pageIndex,"hide-on-single-page":!0},on:{"update:currentPage":function(e){t.pageIndex=e},"update:current-page":function(e){t.pageIndex=e}}})],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"u-title"},[r("span",{staticClass:"i-title"},[r("i",{staticClass:"el-icon-document"}),t._v(" 商城订单")])])}],o=(r("d81d"),r("1101")),s=r("f03c"),u={name:"record",data:function(){return{list:[],total:0,pageIndex:1,pageSize:10,payStatus:s["b"],orderStatus:s["a"],order_id:""}},computed:{params:function(){var t={pageIndex:this.pageIndex,pageSize:this.pageSize};return t},params_pageIndex:function(){return this.$route.params.pageIndex}},watch:{params:{deep:!0,handler:function(){this.load()}},params_pageIndex:{immediate:!0,handler:function(t){t&&(this.pageIndex=t)}}},methods:{load:function(){var t=this;Object(o["f"])(this.params).then((function(e){t.list=e.data.data.list,t.total=e.data.data.page.total}))},showPay:function(t){var e=t.order_status,r=t.pay_status;return 1!=e&&2!=e&&7!=e&&0==r},showDetail:function(t){var e=t.goods,r=t.order;if(e.is_virtual){var n=null;"code"==e.sub_category&&(n=this.$router.resolve({name:"card",query:{tab:"virtual"}})),"skin"==e.sub_category&&(n=this.$router.resolve({name:"avatar"})),n&&window.open(n.href,"_blank")}else this.$router.push({name:"order-detail",params:{id:r.id,pageIndex:this.pageIndex}})},cancel:function(t){var e=this;Object(o["b"])(t).then((function(){e.$message({message:"关闭订单成功",type:"success"}),e.list=e.list.map((function(e){return e.order.id==t&&(e.order.order_status=1),e}))}))},toPay:function(t){var e=this,r=t.order.id;Object(o["j"])(r).then((function(){e.$message({message:"付款成功",type:"success"}),e.list=e.list.map((function(t){return t.order.id==r&&(t.order.pay_status=1),t}))}))},isReceipt:function(t){var e=this;Object(o["i"])(t).then((function(){e.$message({message:"收货成功",type:"success"}),e.list=e.list.map((function(e){return e.order.id==t&&(e.order.order_status=4),e}))}))}},mounted:function(){this.load()}},c=u,i=(r("ce02"),r("2877")),l=Object(i["a"])(c,n,a,!1,null,null,null);e["default"]=l.exports},ce02:function(t,e,r){"use strict";r("7cf3")},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),s=o("map");n({target:"Array",proto:!0,forced:!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},f03c:function(t){t.exports=JSON.parse('{"b":{"0":"未支付","1":"已支付","2":"已退款"},"a":{"0":"未发货","1":"已取消","2":"已关闭","3":"已发货","4":"已收货","5":"已评价","6":"已退货","7":"等待退款"}}')}}]);
//# sourceMappingURL=chunk-399e6761.43b44c08.js.map