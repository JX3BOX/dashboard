(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399e6761"],{1101:function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return n})),r.d(t,"h",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return d})),r.d(t,"f",(function(){return l})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return u})),r.d(t,"g",(function(){return m})),r.d(t,"b",(function(){return f}));r("99af");var a=r("41cb");function s(e){return Object(a["e"])().get("/mall/ship-address",e)}function n(e){return Object(a["e"])().post("/mall/ship-address",e)}function o(e,t){return Object(a["e"])().put("/mall/ship-address/".concat(e),t)}function i(e){return Object(a["e"])().delete("/mall/ship-address/".concat(e))}function d(e){return Object(a["e"])().put("/mall/ship-address/default/".concat(e))}function l(e){return Object(a["e"])().get("/mall/my/orders",{params:e})}function c(e,t){return Object(a["e"])().put("/mall/my/orders/".concat(e,"/bind-address/").concat(t))}function u(e,t){return Object(a["e"])().put("/mall/my/orders/".concat(e,"/remark"),{remark:t})}function m(e){return Object(a["e"])().get("/mall/my/orders/".concat(e))}function f(e){return Object(a["e"])().put("/mall/my/orders/".concat(e,"/cancel"))}},"7cf3":function(e,t,r){},b8fd:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-page-record"},[e._m(0),r("div",{staticClass:"m-content"},[r("el-table",{attrs:{data:e.list}},[r("el-table-column",{attrs:{prop:"order.created_at",label:"兑换时间",width:"180"}}),r("el-table-column",{attrs:{label:"兑换商品"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"m-line"},[e._v(" "+e._s(t.row.goods.title)+" ")])]}}])}),r("el-table-column",{attrs:{label:"订单号"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"m-line"},[e._v(" "+e._s(t.row.order.order_no)+" ")])]}}])}),r("el-table-column",{attrs:{prop:"order.goods_num",label:"数量",width:"80"}}),r("el-table-column",{attrs:{label:"订单状态",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.orderStatus[t.row.order.order_status])+" ")]}}])}),r("el-table-column",{attrs:{label:"付款状态",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.payStatus[t.row.order.pay_status])+" ")]}}])}),r("el-table-column",{attrs:{label:"操作","min-width":"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"m-button"},[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.showDetail(t.row.order.id)}}},[e._v("查看详情")]),0==t.row.order.order_status?[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.open(t.row.order.id,"address")}}},[e._v("修改地址")]),r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.open(t.row.order.id,"remark")}}},[e._v("添加备注")]),r("el-popconfirm",{attrs:{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info",title:"确定取消吗？"},on:{confirm:function(r){return e.cancel(t.row.order.id)}}},[r("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("取消订单")])],1)]:e._e(),3==t.row.order.order_status?[r("el-button",{attrs:{type:"text"},on:{click:e.isReceipt}},[e._v("确认收货")])]:e._e()],2)]}}])})],1)],1),r("div",{staticClass:"m-record-pages"},[r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next,jumper","page-size":e.pageSize,total:e.total,"current-page":e.pageIndex,"hide-on-single-page":!0},on:{"update:currentPage":function(t){e.pageIndex=t},"update:current-page":function(t){e.pageIndex=t}}})],1),r("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"30%","before-close":e.close,"custom-class":"m-edit-dialog"},on:{"update:visible":function(t){e.dialogVisible=t}}},["address"==e.mode?[r("el-form",{ref:"address_form",staticClass:"demo-form-inline",attrs:{model:e.address_form,rules:e.address_rules}},[r("el-form-item",{attrs:{label:"选择收货地址",prop:"address_id"}},[r("el-select",{model:{value:e.address_form.address_id,callback:function(t){e.$set(e.address_form,"address_id",t)},expression:"address_form.address_id"}},e._l(e.addressList,(function(e,t){return r("el-option",{key:t,attrs:{label:"【 "+e.contact_name+" "+e.contact_phone+" 】 "+e.province+e.city+e.area+e.address,value:e.id}})})),1)],1),r("el-form-item",[r("div",{staticClass:"m-button"},[r("el-button",{on:{click:e.close}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("address_form")}}},[e._v("确定")])],1)])],1)]:[r("el-form",{ref:"remark_form",staticClass:"demo-form-inline",attrs:{model:e.remark_form,rules:e.remark_rules}},[r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入备注"},model:{value:e.remark_form.remark,callback:function(t){e.$set(e.remark_form,"remark",t)},expression:"remark_form.remark"}})],1),r("el-form-item",[r("div",{staticClass:"m-button"},[r("el-button",{on:{click:e.close}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("remark_form")}}},[e._v("确定")])],1)])],1)]],2)],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{staticClass:"u-title"},[r("span",{staticClass:"i-title"},[r("i",{staticClass:"el-icon-document"}),e._v(" 商城订单")])])}],n=(r("d81d"),r("1101")),o=r("f03c"),i={name:"record",data:function(){return{list:[],total:0,pageIndex:1,pageSize:10,payStatus:o["b"],orderStatus:o["a"],dialogVisible:!1,mode:"",order_id:"",addressList:[],address_form:{address_id:""},address_rules:{address_id:[{required:!0,message:"请选择地址",trigger:"change"}]},remark_form:{remark:""},remark_rules:{remark:[{required:!0,message:"请输入备注",trigger:"blur"}]}}},computed:{params:function(){var e={pageIndex:this.pageIndex,pageSize:this.pageSize};return e},title:function(){return"address"==this.mode?"修改收货地址":"修改备注"}},watch:{params:{deep:!0,handler:function(){this.load()}}},methods:{load:function(){var e=this;Object(n["f"])(this.params).then((function(t){e.list=t.data.data.list,e.total=t.data.data.page.total}))},loadAddress:function(){var e=this;Object(n["e"])().then((function(t){e.addressList=t.data.data.list}))},showDetail:function(e){this.$router.push({name:"order-detail",params:{id:e}})},open:function(e,t){this.order_id=e,"address"==t&&this.loadAddress(),void 0!==this.$refs.address_form&&this.$refs.address_form.clearValidate(),void 0!==this.$refs.remark_form&&this.$refs.remark_form.clearValidate(),this.mode=t,this.dialogVisible=!0},close:function(){this.dialogVisible=!1},submit:function(e){var t=this;this.$refs[e].validate((function(e){e&&("address"==t.mode?Object(n["i"])(t.order_id,t.address_form.address_id).then((function(){t.$message({message:"修改地址成功",type:"success"}),t.close()})):Object(n["j"])(t.order_id,t.remark_form.remark).then((function(){t.$message({message:"修改备注成功",type:"success"}),t.close()})))}))},cancel:function(e){var t=this;Object(n["b"])(e).then((function(r){t.list=t.list.map((function(t){return t.order.id==e&&(t.order.order_status=1),t}))}))}},mounted:function(){this.load()}},d=i,l=(r("ce02"),r("2877")),c=Object(l["a"])(d,a,s,!1,null,null,null);t["default"]=c.exports},ce02:function(e,t,r){"use strict";r("7cf3")},d81d:function(e,t,r){"use strict";var a=r("23e7"),s=r("b727").map,n=r("1dde"),o=n("map");a({target:"Array",proto:!0,forced:!o},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},f03c:function(e){e.exports=JSON.parse('{"b":{"0":"未支付","1":"已支付","2":"已退款"},"a":{"0":"未发货","1":"用户取消","2":"已关闭","3":"已发货","4":"已收货","5":"已评价","6":"已退货"}}')}}]);
//# sourceMappingURL=chunk-399e6761.621b7160.js.map