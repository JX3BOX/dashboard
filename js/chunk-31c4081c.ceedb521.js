(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31c4081c"],{"294a":function(t,a,n){"use strict";n("5d9a")},"3c65":function(t,a,n){"use strict";var e=n("23e7"),i=n("7b0b"),s=n("07fa"),o=n("3a34"),r=n("083a"),c=n("3511"),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},d=u||!l();e({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(t){var a=i(this),n=s(a),e=arguments.length;if(e){c(n+e);var u=n;while(u--){var l=u+e;u in a?a[l]=a[u]:r(a,l)}for(var d=0;d<e;d++)a[d]=arguments[d]}return o(a,n+e)}})},4039:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t._self._c;return a("uc",{staticClass:"m-dashboard-honor m-dashboard-skin",attrs:{icon:"el-icon-brush",title:"主题装扮","tab-list":t.tabList},scopedSlots:t._u([{key:"header",fn:function(){return[a("a",{staticClass:"u-link el-button el-button--default el-button--mini is-round is-plain",attrs:{href:"/vip/mall?category=virtual",target:"_blank"}},[a("i",{staticClass:"el-icon-shopping-cart-2"}),t._v(" 前往获取装扮")])]},proxy:!0}])},[a("div",{staticClass:"m-honor"},[a("div",{staticClass:"m-honor-left"},[a("div",{staticClass:"u-header-info"},[a("Avatar",{staticClass:"u-author-avatar",attrs:{uid:t.uid,url:t.avatar,size:t.avatarSize(),frame:t.avatar_frame}}),a("div",{staticClass:"u-author-info"},[a("span",{staticClass:"u-name"},[a("span",{on:{click:function(a){return t.copyData(t.data.display_name||"匿名")}}},[t._v(t._s(t.data.display_name||"匿名"))]),t._v(" "),a("span",{staticClass:"u-uid",on:{click:function(a){return t.copyData(t.data.ID||0)}}},[t._v("(UID : "+t._s(t.data.ID||0)+")")])]),a("div",{staticClass:"u-tips"},[a("el-tooltip",{attrs:{content:"当前经验 ".concat(t.data.experience||0),placement:"top"}},[a("span",{staticClass:"u-level",class:"lv-"+t.level,style:{backgroundColor:t.showLevelColor(t.level)}},[t._v("Lv."+t._s(t.level))])]),t.isPRO||t.isVIP?a("el-tooltip",{attrs:{content:t.vipTypeTitle,placement:"top"}},[a("span",{staticClass:"u-vip",attrs:{target:"_blank"}},[a("i",{staticClass:"u-icon vip"},[t._v(t._s(t.vipType))])])]):t._e(),t.isSuperAuthor?a("el-tooltip",{attrs:{content:"签约作者",placement:"top"}},[a("span",{staticClass:"u-superauthor"},[a("i",{staticClass:"u-icon superauthor"},[t._v("签约作者")])])]):t._e()],1),t.isSelect.isCustomize?t._e():a("div",{staticClass:"u-honor",style:{backgroundImage:"url(".concat(t.imgUrl(t.isSelect),")")}},[a("span",{style:{color:t.isSelect.color}},[t._v(t._s(t.isSelect.honor))])])])],1)]),a("div",{staticClass:"m-honor-right"},[a("div",{staticClass:"u-honor-list"},[a("div",{staticClass:"u-title"},[a("span",{staticClass:"u-name"},[a("i",{staticClass:"el-icon-collection-tag"}),t._v("称号")]),a("a",{staticClass:"u-buy",attrs:{href:"/vip/mall?category=virtual&sub_category=honor",target:"_blank"}},[a("i",{staticClass:"el-icon-shopping-cart-2"}),t._v(" 前往获取")])]),a("div",{staticClass:"u-honor-item"},t._l(t.list,(function(n,e){return a("div",{key:e,staticClass:"u-picbox"},[a("el-tooltip",{attrs:{effect:"dark",placement:"top","open-delay":200}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(n.honor))]),a("div",{staticClass:"u-pic",class:t.setClass(n),on:{click:function(a){return t.selectChange(n)}}},[n.isCustomize?a("div",{staticClass:"u-noHonor"}):a("el-image",{attrs:{src:t.imgUrl(n),fit:"contain"}})],1)])],1)})),0)])])]),a("div",{staticClass:"m-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确认")]),a("el-button",{on:{click:t.reset}},[t._v("重置")])],1)])},i=[],s=(n("99af"),n("d3b7"),n("159b"),n("b64b"),n("7db0"),n("ac1f"),n("466d"),n("a9e3"),n("5319"),n("14d9"),n("3c65"),n("b547")),o=n("46c1"),r=n("c9d2"),c=n("8e44"),u=n("65c2"),l=n("aa38"),d=n("2ef0"),f={name:"honor",props:[],data:function(){return{tabList:o["d"],isVIP:!1,info:{uid:r["a"].getInfo().uid,name:"匿名",user_avatar:"".concat(u["__imgPath"],"/image/common/avatar.png"),user_avatar_frame:"default",bio:"-",sign:0},list:[],listBak:[],isSelect:{},isSelectBak:{},honorList:{}}},computed:{uid:function(){return r["a"].getInfo().uid},data:function(){return this.info},avatar:function(){return this.data.user_avatar||""},avatar_frame:function(){return this.data.user_avatar_frame||""},isPRO:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.is_pro},isSuperAuthor:function(){var t;return!(null===(t=this.data)||void 0===t||!t.sign)},vipType:function(){return this.isPRO?"PRO":"PRE"},vipTypeTitle:function(){return this.isPRO?"专业版会员用户":"高级版会员用户"},level:function(){var t;return r["a"].getLevel((null===(t=this.data)||void 0===t?void 0:t.experience)||0)}},methods:{imgUrl:function(t){if(t&&!t.isCustomize&&t.val)return t.isImgIndex?u["__imgPath"]+"decoration/honor/".concat(t.val,"/").concat(t.val,"_").concat(t.imgIndex,".").concat(t.ext):u["__imgPath"]+"decoration/honor/".concat(t.val,"/").concat(t.val,".").concat(t.ext)},setClass:function(t){return t.isHave?t.using?"select":void 0:"noHave"},avatarSize:function(){var t=document.body.clientWidth||document.documentElement.clientWidth;return t>500?"m":"s"},loadUserInfo:function(){var t=this;Object(c["b"])().then((function(a){a.data.data&&(t.info=a.data.data)}))},loadHonor:function(){var t=this;Object(l["d"])().then((function(a){t.honorList=a.data,t.loadDecoration()}))},loadDecoration:function(){var t=this;Object(l["a"])({type:"honor"}).then((function(a){var n=a.data.data,e=t.honorList,i=[];Object.keys(e).forEach((function(t,a){var s=n.find((function(a){return a.val==t})),o=e[t],r=function(t){var a=o.prefix,n=o.prefix.match(/(?<=\{)(.+?)(?=\})/g),e=o.ranking,i=o.year||"";if(i+=n?t[n[0]]||"":a,e.length>0){t.imgIndex=0;for(var s=0;s<e.length;s++)if(void 0!=t.ranking&&Object(d["inRange"])(Number(t.ranking),e[s][0],e[s][1])){t.imgIndex=s;var r=e[s][2],c=r.match(/(?<=\{)(.+?)(?=\})/g);i+=c?r.replace(/\{(.+?)\}/g,t[c[0]]):r;break}}return i+o.suffix};if(s)s.honor=r(s),s.color=o.color,s.ext=o.ext,s.isHave=!0,s.isImgIndex=o.ranking.length>0,i.push(s);else{var c={color:o.color,ext:o.ext,honor:r(),extra:"尚未获取的称号框",using:0,type:"honor",val:t,isHave:!1,isImgIndex:o.ranking.length>0};i.push(c)}}));var s=i.find((function(t){return 1==t.using}));t.list=i||[];var o={type:"honor_customize",val:"不佩戴称号",honor:"取消佩戴称号",using:s?0:1,isHave:!0,isCustomize:!0};t.isSelect=s||o,t.list.unshift(o),t.isSelectBak=Object(d["cloneDeep"])(t.isSelect),t.listBak=Object(d["cloneDeep"])(t.list)}))},selectChange:function(t){if(t.isHave){var a=this.list,n=a.find((function(t){return 1==t.using}));n&&(n.using=0),t.using=1,this.isSelect=t}},reset:function(){this.$set(this,"list",Object(d["cloneDeep"])(this.listBak)),this.$set(this,"isSelect",Object(d["cloneDeep"])(this.isSelectBak))},showLevelColor:function(t){return u["__userLevelColor"][t]},submit:function(){var t=this;Object(l["f"])(this.list).then((function(a){t.$message({message:"称号更新成功",type:"success"})}))}},mounted:function(){this.loadUserInfo(),this.loadHonor()},components:{uc:s["a"]}},v=f,h=(n("294a"),n("2877")),p=Object(h["a"])(v,e,i,!1,null,null,null);a["default"]=p.exports},"466d":function(t,a,n){"use strict";var e=n("c65b"),i=n("d784"),s=n("825a"),o=n("7234"),r=n("50c4"),c=n("577e"),u=n("1d80"),l=n("dc4a"),d=n("8aa5"),f=n("14c3");i("match",(function(t,a,n){return[function(a){var n=u(this),i=o(a)?void 0:l(a,t);return i?e(i,a,n):new RegExp(a)[t](c(n))},function(t){var e=s(this),i=c(t),o=n(a,e,i);if(o.done)return o.value;if(!e.global)return f(e,i);var u=e.unicode;e.lastIndex=0;var l,v=[],h=0;while(null!==(l=f(e,i))){var p=c(l[0]);v[h]=p,""===p&&(e.lastIndex=d(i,r(e.lastIndex),u)),h++}return 0===h?null:v}]}))},"5d9a":function(t,a,n){},aa38:function(t,a,n){"use strict";n.d(a,"a",(function(){return r})),n.d(a,"f",(function(){return c})),n.d(a,"b",(function(){return u})),n.d(a,"c",(function(){return l})),n.d(a,"e",(function(){return d})),n.d(a,"g",(function(){return f})),n.d(a,"d",(function(){return v}));n("99af");var e=n("41cb"),i=n("bc3a"),s=n.n(i),o=n("65c2");function r(t){return Object(e["b"])().get("/api/cms/user/decoration",{params:t})}function c(t){return Object(e["b"])().post("/api/cms/user/decoration",t)}function u(){var t=o["__imgPath"]+"decoration/index.json";return s.a.get(t)}function l(){return s.a.get("".concat(o["__dataPath"],"emotion/output/catalog.json"))}function d(t,a){return Object(e["b"])().post("/api/cms/user/decoration/check-suit/".concat(t,"/").concat(a,"/for/avatar"))}function f(t){return Object(e["b"])().put("/api/cms/user/my/avatar-frame",t)}function v(){return s.a.get("".concat(o["__imgPath"],"decoration/honor.json"))}},b64b:function(t,a,n){var e=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),r=o((function(){s(1)}));e({target:"Object",stat:!0,forced:r},{keys:function(t){return s(i(t))}})}}]);
//# sourceMappingURL=chunk-31c4081c.ceedb521.js.map