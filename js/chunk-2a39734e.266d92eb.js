(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a39734e"],{"5b91":function(t,e,n){},"954e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-feedback-erase"},[e("div",{staticClass:"m-feedback-article"},[e("h1",{staticClass:"u-title"},[t._v("账号注销")]),e("div",{domProps:{innerHTML:t._s(t.sanitizedHTML(t.article))}})]),e("div",{staticClass:"u-tips"},[e("div",{staticClass:"u-checkbox"},[e("el-checkbox",{model:{value:t.agree,callback:function(e){t.agree=e},expression:"agree"}},[t._v("我已知晓并同意上述规则")])],1),e("div",{staticClass:"u-confirm"},[e("el-button",{attrs:{size:"small",type:"danger",disabled:!t.agree},on:{click:t.handleConfirm}},[t._v("确认注销")])],1)])])},c=[],i=(n("d3b7"),n("c0c4")),r=n.n(i),o=n("c9d2"),s=n("cc9a"),u=n("b4fa"),d={name:"FeedbackErase",data:function(){return{agree:!1,loading:!1,article:""}},mounted:function(){this.loadAlertInfo()},methods:{handleConfirm:function(){var t=this;this.$confirm("所有财富（例如盒币，红包，积分等将永远无法再使用，也不会退回），本账号绑定的邮箱手机等不可用于再次注册, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$prompt("请输入密码","确认密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"}).then((function(e){var n=e.value;Object(u["f"])(n).then((function(){t.$message({type:"success",message:"注销成功"}),o["a"].destroy(),location.href="/"})).catch((function(e){t.$message({type:"error",message:e.data.msg||"注销失败"})}))}))}))},loadAlertInfo:function(){var t=this;this.loading=!0,Object(s["a"])(43049).then((function(e){t.article=e})).finally((function(){t.loading=!1}))},sanitizedHTML:function(t){return r.a.sanitize(t)}}},f=d,l=(n("f85e"),n("2877")),b=Object(l["a"])(f,a,c,!1,null,"5438d235",null);e["default"]=b.exports},b4fa:function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return r})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return d}));var a=n("41cb");function c(t){return Object(a["d"])().post("/api/im-sure-leave-jx3box",{password:t})}function i(t){return Object(a["c"])().post("/api/miscfeedback",t)}function r(t){return Object(a["c"])().get("/api/miscfeedback",{params:t})}function o(t){return Object(a["c"])().get("/api/miscfeedback/my/list",{params:t})}function s(t){return Object(a["c"])().get("/api/miscfeedback/".concat(t))}function u(t,e){return Object(a["c"])().patch("/api/miscfeedback/".concat(t),e)}function d(){return Object(a["b"])().get("/api/cms/account/teammate").then((function(t){return t.data.data}))}},f85e:function(t,e,n){"use strict";n("5b91")}}]);
//# sourceMappingURL=chunk-2a39734e.266d92eb.js.map