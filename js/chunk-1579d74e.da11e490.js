(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1579d74e"],{"1f07":function(t,n,i){},2613:function(t,n,i){"use strict";i("1f07")},"3f95":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("uc",{staticClass:"m-dashboard-frame m-dashboard-emotion",attrs:{icon:"el-icon-brush",title:"主题装扮","tab-list":t.tabList}},[i("div",{staticClass:"u-tips"},[i("i",{staticClass:"el-icon-warning-outline"}),t._v("自定义表情包最多只能同时激活三个，"),i("a",{attrs:{href:"/vip/mall/#/list",target:"_blank"}},[t._v("前往购买表情包")]),t._v("。")]),i("div",{staticClass:"u-list"},t._l(t.emotions,(function(n){return i("div",{key:n.group_id,staticClass:"u-item",class:{"is-using":t.isUsing(n.group_name),disabled:t.isDisabled(n.group_name),hidden:t.isHidden(n.group_name)},on:{click:function(i){return i.stopPropagation(),t.handleEmotionClick(n)}}},[i("img",{staticClass:"u-img",attrs:{src:t.imgSrc(n.group_name),alt:n.group_name}}),i("div",{staticClass:"u-title"},[t._v(t._s(n.group_name))])])})),0),i("div",{staticClass:"u-actions"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check",loading:t.loading},on:{click:t.handleSave}},[t._v("保存")])],1)])},o=[],a=(i("d81d"),i("4de4"),i("d3b7"),i("e9c4"),i("7db0"),i("caad"),i("2532"),i("a15b"),i("b547")),s=i("aa38"),r=i("65c2"),c=i("fb42"),u={name:"emotion",props:[],data:function(){return{tabList:c["a"],emotionList:[],emotions:[],active:[],loading:!1}},computed:{},methods:{loadDecoration:function(){var t=this;Object(s["a"])({type:"emotion"}).then((function(n){t.emotionList=n.data.data,t.active=t.emotionList.filter((function(t){return t.using})).map((function(t){return t.val}))}))},getEmotion:function(){var t=this;try{var n=JSON.parse(sessionStorage.getItem("jx3_emotion"));if(n)return void(this.emotions=n);Object(s["c"])().then((function(n){t.emotions=n.data,sessionStorage.setItem("jx3_emotion",JSON.stringify(n.data))}))}catch(i){console.log(i),this.emotions=[]}},imgSrc:function(t){var n,i=this.emotions.find((function(n){return n.group_name===t})),e=null===(n=i.items)||void 0===n?void 0:n[0];return r["__imgPath"]+"emotion/output/"+(null===e||void 0===e?void 0:e.filename)},isUsing:function(t){return this.active.includes(t)||"默认"===t},isDisabled:function(t){return!this.emotionList.map((function(t){return t.val})).includes(t)&&"默认"!==t},isHidden:function(t){return"默认"===t},handleEmotionClick:function(t){this.isDisabled(t.group_name)||(this.active.length>=3&&!this.isUsing(t.group_name)?this.$message.error("最多只能选择三个表情包"):this.isUsing(t.group_name)?this.active=this.active.filter((function(n){return n!==t.group_name})):this.active.push(t.group_name))},handleSave:function(){var t=this;this.loading=!0;var n=this.active.join(",");Object(s["d"])({type:"emotion",val:n}).then((function(n){t.$message.success("保存成功"),t.loading=!1}))}},mounted:function(){this.loadDecoration(),this.getEmotion()},components:{uc:a["a"]}},l=u,d=(i("2613"),i("2877")),m=Object(d["a"])(l,e,o,!1,null,null,null);n["default"]=m.exports},a15b:function(t,n,i){"use strict";var e=i("23e7"),o=i("e330"),a=i("44ad"),s=i("fc6a"),r=i("a640"),c=o([].join),u=a!=Object,l=r("join",",");e({target:"Array",proto:!0,forced:u||!l},{join:function(t){return c(s(this),void 0===t?",":t)}})},aa38:function(t,n,i){"use strict";i.d(n,"a",(function(){return r})),i.d(n,"d",(function(){return c})),i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return l}));var e=i("41cb"),o=i("bc3a"),a=i.n(o),s=i("65c2");function r(t){return Object(e["b"])().get("/api/cms/user/decoration",{params:t})}function c(t){return Object(e["b"])().post("/api/cms/user/decoration",t)}function u(){var t=s["__imgPath"]+"decoration/index.json";return a.a.get(t)}function l(){return a.a.get("".concat(s["__dataPath"],"emotion/output/catalog.json"))}},d81d:function(t,n,i){"use strict";var e=i("23e7"),o=i("b727").map,a=i("1dde"),s=a("map");e({target:"Array",proto:!0,forced:!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},fb42:function(t){t.exports=JSON.parse('{"a":[{"name":"frame","icon":"el-icon-camera","label":"头像框"},{"name":"theme","icon":"el-icon-orange","label":"主题风格"},{"name":"emotion","icon":"el-icon-picture-outline-round","label":"表情包"},{"name":"honor","icon":"el-icon-collection-tag","label":"称号"}]}')}}]);
//# sourceMappingURL=chunk-1579d74e.da11e490.js.map