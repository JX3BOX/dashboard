(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50ef81b1"],{"762a":function(t,e,n){},"818b":function(t){t.exports=JSON.parse('{"title":" &raquo; JX3BOX - 一站式剑网3资源工具站","keys":"jx3box,剑三魔盒,剑三宏,剑三插件,剑三辅助,副本攻略,副本解包,团队监控,捏脸数据,剑3数据库,成就百科,剑三成就,剑3,剑网3,剑三box,通识百科","desc":"JX3BOX - 剑三魔盒是一个以剑网3游戏为主的专业攻略资源站，这里干货满满，大神多多，为你的武侠江湖之路助力。剑三魔盒，玩家贴心的小助手。"}')},9199:function(t,e,n){"use strict";n("762a")},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=_;var h="suspendedStart",p="suspendedYield",f="executing",m="completed",v={},d={};d[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g($([])));y&&y!==r&&o.call(y,a)&&(d=y);var w=E.prototype=x.prototype=Object.create(d);k.prototype=w.constructor=E,E.constructor=k,E[c]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[s]=function(){return this},u.AsyncIterator=O,u.async=function(t,e,n,r){var o=new O(_(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=$,X.prototype={constructor:X,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function _(t,e,n,r){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new X(r||[]);return i._invoke=j(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function k(){}function E(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(n,r,i,a){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){c.value=t,i(c)}),a)}a(s.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function j(t,e,n){var r=h;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return I()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?m:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function X(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function $(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},e818:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));var r=n("2777"),o=n("4328"),i=n.n(o);function a(t,e){if(e)return Object(r["e"])({method:"GET",url:"/api/wiki/post",params:{type:t,source_id:e}})}function s(t){return Object(r["e"])({method:"POST",url:"/api/wiki/post",data:i.a.stringify({post:t})})}},ee8f:function(t,e,n){const r=n("65c2"),o=n("818b");t.exports={JX3BOX:r,SEO:o}},f3f0:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-publish-box"},[n("pubheader",{attrs:{name:"成就百科"}},[t._t("header")],2),n("el-form",{staticClass:"m-publish-post"},[n("div",{staticClass:"m-publish-source"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("选择成就 *")]),n("el-select",{staticClass:"u-source-id",attrs:{filterable:"",remote:"",disabled:!!t.post.id,placeholder:"输入成就名称/成就描述/称号/奖励物品并按『回车』进行搜索","remote-method":t.search_achievements_handle,loading:t.options.search_loading},model:{value:t.post.achievement_id,callback:function(e){t.$set(t.post,"achievement_id",e)},expression:"post.achievement_id"}},t._l(t.options.achievements,(function(e){return n("el-option",{key:e.ID,attrs:{label:e.Name,value:e.ID}},[n("div",{staticClass:"m-selector-item"},[n("img",{staticClass:"u-icon",attrs:{src:t.icon_url_filter(e.IconID),alt:e.Name}}),n("span",{staticClass:"u-name",domProps:{textContent:t._s(e.Name)}})])])})),1)],1),n("div",{staticClass:"m-publish-level"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("综合难度 *")]),n("el-rate",{staticClass:"u-level",model:{value:t.post.level,callback:function(e){t.$set(t.post,"level",e)},expression:"post.level"}})],1),n("div",{staticClass:"m-publish-remark"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("修订说明 *")]),n("el-input",{attrs:{maxlength:200,minlength:1,"show-word-limit":"",required:"",placeholder:"请简单描述一下本次修订的说明"},model:{value:t.post.remark,callback:function(e){t.$set(t.post,"remark",e)},expression:"post.remark"}})],1),n("div",{staticClass:"m-publish-content"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("攻略正文 *")]),n("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0,height:400},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),n("div",{staticClass:"m-publish-commit"},[n("el-divider",{attrs:{"content-position":"left"}}),n("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"success",disabled:t.processing},on:{click:t.toPublish}},[t._v("提交攻略 ")])],1)])],1)},o=[];n("d3b7");function i(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}n("96cf"),n("b0c0"),n("99af"),n("159b"),n("5319"),n("ac1f");var s=n("a0fa"),c=n("221a"),l=(n("2777"),n("ee8f")),u=n("e818"),h=n("c9d2"),p={name:"achievement",props:[],data:function(){return{options:{achievements:null,search_loading:!1},post:{id:"",content:"",achievement_id:"",level:0,remark:""}}},computed:{processing:function(){return this.$store.state.processing}},methods:{toPublish:function(){var t=this;this.post.achievement_id?this.post.content?this.post.level>=1&&this.post.level<=5?this.post.remark?(this.$store.commit("startProcess"),Object(u["a"])({type:"achievement",source_id:this.post.achievement_id,level:this.post.level,user_nickname:h["a"].getInfo().name,content:this.post.content,remark:this.post.remark}).then((function(e){e=e.data,200===e.code?(t.$message({message:"提交成功，请等待审核",type:"success"}),location.href=l["JX3BOX"].__Root+"dashboard/#/wiki"):t.$message({message:"".concat(e.message),type:"warning"})}))):this.$message({message:"请简单描述本次修订说明",type:"warning"}):this.$message({message:"请选择适合的综合难度",type:"warning"}):this.$message({message:"要编写攻略正文哦",type:"warning"}):this.$message({message:"请选择要修订攻略的成就",type:"warning"})},get_newest_post:function(t){return $http({method:"GET",url:"".concat(l["JX3BOX"].__helperUrl,"api/wiki/post"),headers:{Accept:"application/prs.helper.v2+json"},params:{type:"achievement",source_id:t,supply:0}})},icon_url_filter:function(t){return isNaN(parseInt(t))?"".concat(l["JX3BOX"].__imgPath,"image/common/nullicon.png"):"".concat(l["JX3BOX"].__iconPath,"icon/").concat(t,".png")},search_achievements_handle:function(t){var e=this;return a(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.options.search_loading=!0,n.next=3,e.search_achievements(t,10);case 3:r=n.sent,e.options.achievements=r.achievements,e.options.search_loading=!1;case 6:case"end":return n.stop()}}),n)})))()},search_achievements:function(t,e){return new Promise((function(n,r){$http({method:"GET",url:"".concat(l["JX3BOX"].__helperUrl,"api/achievement/search"),headers:{Accept:"application/prs.helper.v2+json"},params:{keyword:t,limit:e}}).then((function(t){t=t.data,n(200===t.code&&t.data)}),(function(){n(!1)}))}))}},mounted:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.search_achievements_handle("");case 2:n=t.$route.params.achievement_id,t.post.achievement_id=n?parseInt(n):null,document.getElementsByClassName("m-publish-title").forEach((function(t){t.remove()})),document.getElementsByClassName("el-button--plain").forEach((function(t){t.remove()}));case 6:case"end":return e.stop()}}),e)})))()},watch:{"post.achievement_id":{handler:function(){var t=this;this.post.achievement_id&&this.get_newest_post(this.post.achievement_id).then((function(e){var n=e.data;if(200===n.code){var r=n.data.post,o=n.data.source;if(r){t.post.achievement_id=parseInt(r.source_id),t.post.level=r.level||1,t.post.remark="";var i=r.content;i=i.replace(/(<p>)?\s*◆成就难度 [★]+\s*(<\/p>)?/gi,""),i=i.replace(/(<p>)?\s*◆花费时长 [★]+\s*(<\/p>)?/gi,""),i=i.replace(/(<p>)?\s*◆成就攻略\s*(<\/p>)?/gi,""),t.post.content=i}else t.post.achievement_id=t.post.achievement_id?parseInt(t.post.achievement_id):"",t.post.level=0,t.post.remark="",t.post.content="";if(o){var a=!1;for(var s in t.options.achievements=t.options.achievements||[],t.options.achievements)if(t.options.achievements[s].ID==o.ID){a=!0;break}a||t.options.achievements.push(o)}}}))}}},components:{pubheader:s["a"],Tinymce:c["a"]}},f=p,m=(n("9199"),n("2877")),v=Object(m["a"])(f,r,o,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-50ef81b1.f72840a2.js.map