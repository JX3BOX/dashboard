(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb49a1d4"],{"04d1":function(t,n,i){var e=i("342f"),o=e.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"1f07":function(t,n,i){},2613:function(t,n,i){"use strict";i("1f07")},"3f95":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("uc",{staticClass:"m-dashboard-emotion m-dashboard-skin",attrs:{icon:"el-icon-brush",title:"主题装扮",tabList:t.tabList},scopedSlots:t._u([{key:"header",fn:function(){return[i("a",{staticClass:"u-link el-button el-button--default el-button--mini is-round is-plain",attrs:{href:"/vip/mall/virtual",target:"_blank"}},[i("is",{staticClass:"el-icon-shopping-cart-2"}),t._v(" 前往获取装扮")],1)]},proxy:!0}])},[i("div",{staticClass:"u-tips"},[i("i",{staticClass:"el-icon-warning-outline"}),t._v("自定义表情包最多只能同时激活三个。 ")]),i("div",{staticClass:"u-list"},t._l(t.emotions,(function(n){return i("div",{key:n.group_id,staticClass:"u-item",class:{"is-using":t.isUsing(n.group_name),disabled:t.isDisabled(n.group_name),hidden:t.isHidden(n.group_name)},on:{click:function(i){return i.stopPropagation(),t.handleEmotionClick(n)}}},[i("img",{staticClass:"u-img",attrs:{src:t.imgSrc(n.group_name),alt:n.group_name}}),i("div",{staticClass:"u-title"},[t._v(t._s(n.group_name))])])})),0),i("div",{staticClass:"u-actions"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check",loading:t.loading},on:{click:t.handleSave}},[t._v("保存")])],1)])},o=[],a=(i("d81d"),i("4de4"),i("d3b7"),i("4e82"),i("caad"),i("2532"),i("e9c4"),i("7db0"),i("b547")),r=i("aa38"),s=i("65c2"),c=i("46c1"),u={name:"emotion",props:[],data:function(){return{tabList:c["c"],emotionList:[],emotions:[],active:[],loading:!1}},computed:{},methods:{loadDecoration:function(){var t=this;Object(r["a"])({type:"emotion"}).then((function(n){t.emotionList=n.data.data,t.active=t.emotionList.filter((function(t){return t.using})).map((function(t){return t.val}));var i=t.emotionList.map((function(t){return t.val}));t.emotions.sort((function(t,n){var e=i.includes(t.group_name),o=i.includes(n.group_name);return e&&!o?-1:!e&&o?1:0}))}))},getEmotion:function(){var t=this;try{var n=JSON.parse(sessionStorage.getItem("jx3_emotion"));if(n)return void(this.emotions=n);Object(r["c"])().then((function(n){t.emotions=n.data,sessionStorage.setItem("jx3_emotion",JSON.stringify(n.data))}))}catch(i){console.log(i),this.emotions=[]}finally{this.loadDecoration()}},imgSrc:function(t){var n,i=this.emotions.find((function(n){return n.group_name===t})),e=null===(n=i.items)||void 0===n?void 0:n[0];return s["__imgPath"]+"emotion/output/"+(null===e||void 0===e?void 0:e.filename)},isUsing:function(t){return this.active.includes(t)||"默认"===t},isDisabled:function(t){return!this.emotionList.map((function(t){return t.val})).includes(t)&&"默认"!==t},isHidden:function(t){return"默认"===t},handleEmotionClick:function(t){this.isDisabled(t.group_name)||(this.active.length>=3&&!this.isUsing(t.group_name)?this.$message.error("最多只能选择三个表情包"):this.isUsing(t.group_name)?this.active=this.active.filter((function(n){return n!==t.group_name})):this.active.push(t.group_name))},handleSave:function(){var t=this;this.loading=!0;var n=this.emotionList.map((function(n){return{type:"emotion",val:n.val,using:t.active.includes(n.val)}}));Object(r["d"])(n).then((function(n){t.$message.success("保存成功"),t.loading=!1}))}},mounted:function(){this.getEmotion()},components:{uc:a["a"]}},d=u,l=(i("2613"),i("2877")),f=Object(l["a"])(d,e,o,!1,null,null,null);n["default"]=f.exports},"4e82":function(t,n,i){"use strict";var e=i("23e7"),o=i("e330"),a=i("59ed"),r=i("7b0b"),s=i("07fa"),c=i("083a"),u=i("577e"),d=i("d039"),l=i("addb"),f=i("a640"),m=i("04d1"),p=i("d998"),v=i("2d00"),h=i("512ce"),g=[],b=o(g.sort),_=o(g.push),k=d((function(){g.sort(void 0)})),C=d((function(){g.sort(null)})),y=f("sort"),S=!d((function(){if(v)return v<70;if(!(m&&m>3)){if(p)return!0;if(h)return h<603;var t,n,i,e,o="";for(t=65;t<76;t++){switch(n=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(e=0;e<47;e++)g.push({k:n+e,v:i})}for(g.sort((function(t,n){return n.v-t.v})),e=0;e<g.length;e++)n=g[e].k.charAt(0),o.charAt(o.length-1)!==n&&(o+=n);return"DGBEFHACIJK"!==o}})),j=k||!C||!y||!S,w=function(t){return function(n,i){return void 0===i?-1:void 0===n?1:void 0!==t?+t(n,i)||0:u(n)>u(i)?1:-1}};e({target:"Array",proto:!0,forced:j},{sort:function(t){void 0!==t&&a(t);var n=r(this);if(S)return void 0===t?b(n):b(n,t);var i,e,o=[],u=s(n);for(e=0;e<u;e++)e in n&&_(o,n[e]);l(o,w(t)),i=o.length,e=0;while(e<i)n[e]=o[e++];while(e<u)c(n,e++);return n}})},"512ce":function(t,n,i){var e=i("342f"),o=e.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},aa38:function(t,n,i){"use strict";i.d(n,"a",(function(){return s})),i.d(n,"d",(function(){return c})),i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return d}));var e=i("41cb"),o=i("bc3a"),a=i.n(o),r=i("65c2");function s(t){return Object(e["b"])().get("/api/cms/user/decoration",{params:t})}function c(t){return Object(e["b"])().post("/api/cms/user/decoration",t)}function u(){var t=r["__imgPath"]+"decoration/index.json";return a.a.get(t)}function d(){return a.a.get("".concat(r["__dataPath"],"emotion/output/catalog.json"))}},d81d:function(t,n,i){"use strict";var e=i("23e7"),o=i("b727").map,a=i("1dde"),r=a("map");e({target:"Array",proto:!0,forced:!r},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},d998:function(t,n,i){var e=i("342f");t.exports=/MSIE|Trident/.test(e)}}]);
//# sourceMappingURL=chunk-fb49a1d4.175ea291.js.map