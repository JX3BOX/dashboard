(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b55a130"],{"04d1":function(t,a,e){var i=e("342f"),s=i.match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1]},1645:function(t){t.exports=JSON.parse('{"default":{"name":"default","style":"square","files":{"xs":{"w":48,"width":60,"file":"default-xs.gif"},"s":{"w":68,"width":84,"file":"default-s.gif"},"m":{"w":108,"width":136,"file":"default-m.png"},"l":{"w":180,"width":224,"file":"default-l.png"},"xl":{"w":240,"width":300,"file":"default-xl.png"}}},"flower_1":{"name":"flower_1","style":"circle","files":{"xs":{"w":48,"width":60,"file":"flower_1-xs.png"},"s":{"w":68,"width":84,"file":"flower_1-s.png"},"m":{"w":108,"width":136,"file":"flower_1-m.png"},"l":{"w":180,"width":224,"file":"flower_1-l.png"},"xl":{"w":240,"width":300,"file":"flower_1-xl.png"}}}}')},"25f0":function(t,a,e){"use strict";var i=e("5e77").PROPER,s=e("cb2d"),n=e("825a"),r=e("577e"),o=e("d039"),c=e("90d8"),l="toString",u=RegExp.prototype,f=u[l],d=o((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),v=i&&f.name!=l;(d||v)&&s(RegExp.prototype,l,(function(){var t=n(this),a=r(t.source),e=r(c(t));return"/"+a+"/"+e}),{unsafe:!0})},3119:function(t,a,e){t.exports=e.p+"img/no.610d67e7.png"},4208:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("uc",{staticClass:"m-dashboard-avatar"},[i("div",{staticClass:"m-profile-avatar"},[i("div",{staticClass:"m-profile-avatar-primary"},[i("el-upload",{staticClass:"u-upload",attrs:{drag:"",accept:"image/png, image/gif, image/jpeg","on-change":t.upload,action:"upload/avatar","auto-upload":!1}},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击上传，只能上传jpg/png/gif文件",placement:"top-start"}},[i("div",{staticClass:"u-avatar"},[i("img",{staticClass:"u-avatar u-avatar-l",attrs:{src:t._f("showAvatar")(t.avatar)}})])])],1),i("span",{staticClass:"u-tip"},[t._v("当前装扮")]),i("div",{staticClass:"u-select"},[i("div",{staticClass:"u-avatar"},[t.frame?i("img",{attrs:{src:t.showFrame(t.frame)}}):t._e()]),i("div",{staticClass:"u-decoration"},[t.decoration.length>0&&null!=t.decorationActivate&&"无主题"!==t.decoration[t.decorationActivate].val?i("img",{attrs:{src:t._f("showDecoration")(t.decoration[t.decorationActivate].list[0])}}):t._e()])]),i("p",{staticClass:"u-btng"},[i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确认")]),i("el-button",{on:{click:t.reset}},[t._v("重置")])],1)],1),i("div",{staticClass:"m-profile-avatar-frame"},[i("el-tabs",{attrs:{type:"card"},model:{value:t.tabActivate,callback:function(a){t.tabActivate=a},expression:"tabActivate"}},[i("el-tab-pane",{staticClass:"m-profile-tab",attrs:{label:"头像框",name:"0"}},[i("h3",{staticClass:"u-title"},[t._v(" 自定义头像框 "),i("span",{staticClass:"u-limit",class:{on:t.isVIP}},[t._v(" ( "),i("i",{class:t.isVIP?"el-icon-unlock":"el-icon-lock"}),t._v("仅"),i("a",{attrs:{href:"/vip/premium?from=dashboard_avatar",target:"_blank"}},[t._v("高级/专业版")]),t._v("账户适用 ) ")])]),t.frames?i("div",{staticClass:"u-list"},[i("li",{staticClass:"u-item",class:{on:!t.frame},on:{click:function(a){return t.selectFrame("")}}},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"无边框",placement:"top","open-delay":200}},[i("div",[i("img",{directives:[{name:"show",rawName:"v-show",value:!t.frame,expression:"!frame"}],staticClass:"u-pic",attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),i("i",{staticClass:"u-frame u-frame-none"})])])],1),t._l(t.frames,(function(a,e){return i("li",{key:e,staticClass:"u-item",class:{on:e==t.frame},on:{click:function(e){return t.selectFrame(a)}}},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:a.desc,placement:"top","open-delay":300}},[i("div",{class:{"u-blocked":!a.status}},[i("img",{directives:[{name:"show",rawName:"v-show",value:e==t.frame,expression:"name == frame"}],staticClass:"u-pic isCircle",attrs:{src:t._f("showSmallAvatar")(t.avatar)}}),i("i",{staticClass:"u-frame"},[i("img",{attrs:{src:t.showFrame(a.name)}})])])])],1)}))],2):t._e(),i("div",{staticClass:"u-tip"},[i("i",{staticClass:"el-icon-warning-outline"}),t._v(" 「限定头像框」仅在指定时间段可选择激活。 ")])]),i("el-tab-pane",{staticClass:"m-profile-tab",attrs:{label:"主题装扮",name:"1"}},[i("div",{staticClass:"u-decoration-tip"},[t._v("(仅展示已拥有装扮，同主题部分可分别激活)")]),0==t.decoration.length?i("el-tag",{staticClass:"u-empty",attrs:{type:"info"}},[t._v("暂无装扮")]):t._e(),i("div",{staticClass:"u-decoration-box"},t._l(t.decoration,(function(a,s){return i("div",{key:a.val,staticClass:"u-decoration-list"},[i("div",{staticClass:"u-title"},[t._v(" "+t._s(t.decorationJson[a.val]?t.decorationJson[a.val].desc:"取消主题")+"   "),i("el-checkbox",{on:{change:function(a){return t.selectAllChange(a,s)}},model:{value:t.selectAll[s],callback:function(a){t.$set(t.selectAll,s,a)},expression:"selectAll[i]"}},[t._v(t._s(0==s?"选中":"全选"))])],1),i("div",{staticClass:"u-decoration-item"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0===a.list.length,expression:"item.list.length===0"}],staticClass:"u-picbox",class:t.selectAll[s]?"select":"",on:{click:function(a){return t.selectAllChange(!0,s)}}},[i("img",{staticClass:"u-pic",attrs:{src:e("3119")}}),i("div",{staticClass:"u-decoration-name"},[t._v(" 取消主题")])]),t._l(a.list,(function(a,e){return i("div",{key:"c"+e,staticClass:"u-picbox",class:a.using?"select":"",attrs:{title:t._f("showDecorationName")(a.type)},on:{click:function(i){return t.decorationStatus(a,e,s)}}},[i("img",{staticClass:"u-pic",attrs:{src:t._f("showDecoration")(a)}}),i("div",{staticClass:"u-decoration-name"},[t._v(" "+t._s(t._f("showDecorationName")(a.type)))])])}))],2)])})),0)],1)],1)],1)])])},s=[],n=e("ade3"),r=(e("d3b7"),e("25f0"),e("b0c0"),e("e9c4"),e("159b"),e("b64b"),e("7db0"),e("4e82"),e("4de4"),e("99af"),e("b547")),o=e("46e8"),c=e("41cb"),l=e("bc3a"),u=e.n(l),f=e("65c2");function d(t){return Object(c["b"])().get("/api/cms/user/decoration",{params:t})}function v(t){return Object(c["b"])().post("/api/cms/user/decoration",t)}function m(){var t=f["__imgPath"]+"decoration/index.json";return u.a.get(t)}var h=e("c9d2"),p=e("85e4"),g=e("1645"),b={name:"avatar",props:[],data:function(){return{bak:"",avatar:"",frame:"",isVIP:!1,uid:h["a"].getInfo().uid,frames:g,tabActivate:"0",decorationJson:{},decoration:[],decorationActivate:null,originalActivateName:null,selectAll:[],noDecoration:!1}},computed:{data:function(){return{user_avatar:this.avatar,user_avatar_frame:this.frame}}},methods:{upload:function(t,a){var e=this,i=new FormData,s=t.raw;i.append("avatar",s),Object(o["m"])(i).then((function(t){e.$message({message:"上传成功",type:"success"}),e.avatar=t.data.data[0]}))},reset:function(){this.avatar=this.bak},submit:function(){var t=this;this.decorationSubmit(),this.isVIP||(this.frame&&this.$notify({title:"头像框未生效",message:"头像框仅高级/专业账号可用",type:"warning"}),this.frame=""),Object(o["j"])(this.data).then((function(a){h["a"].refresh("avatar",t.avatar),t.$message({message:"头像更新成功",type:"success"})}))},decorationSubmit:function(){var t=this,a=this.decorationActivate,e=a?this.decoration[a].val:"",i=this.getActivate(),s={val:e,type:i.toString()};v(s).then((function(a){var s={name:e,type:i};e||(s.name=!1),localStorage.setItem("decoration_all",JSON.stringify(s)),sessionStorage.removeItem("decoration_me"+t.uid),sessionStorage.removeItem("decoration_sidebar"),sessionStorage.removeItem("decoration_calendar"),sessionStorage.removeItem("decoration_atcard"),t.$message({message:"主题更新成功",type:"success"})}))},formattingData:function(t,a){for(var e=this,i={"无主题":[]},s=[],r=this,o=[{name:"homebanner",text:"资料卡",sort:1},{name:"atcard",text:"艾特卡",sort:2},{name:"homebg",text:"主页背景",sort:3},{name:"sidebar",text:"侧边栏",sort:4},{name:"calendar",text:"日历",sort:5}],c=function(s){var n=t[s],r=o.find((function(t){return t.name==n.type}));r&&(n.sort=r.sort,i[n[a]]?i[n[a]].push(n):i[n[a]]=[n],n.using&&(e.originalActivateName=n[a]))},l=0;l<t.length;l++)c(l);var u=function(t){return function(a,e){return a[t]-e[t]}};return Object.keys(i).forEach((function(t,e){var o;if(0!==e){var c={type:"homebanner",using:0,val:t,sort:1};t==r.originalActivateName&&(r.decorationActivate=e,c.using=1),i[t].find((function(t){return"homebanner"==t.type}))||i[t].push(c)}s.push((o={},Object(n["a"])(o,a,t),Object(n["a"])(o,"list",i[t].sort(u("sort"))),o))})),s},loadFrames:function(){var t=this;Object(o["d"])().then((function(a){t.frames=a.data})),m().then((function(a){sessionStorage.setItem("decoration_json",JSON.stringify(a.data)),t.decorationJson=a.data,d().then((function(a){var e=a.data.data.filter((function(t){return""!=t.type}));t.decoration=t.formattingData(e,"val"),t.selectAllInit()}))}))},showFrame:function(t){return f["__imgPath"]+"avatar/images/".concat(t,"/").concat(t,".svg")},selectFrame:function(t){t?t.status&&(this.frame=t.name):this.frame=""},init:function(){var t=this;this.loadFrames(),h["a"].isVIP().then((function(a){t.isVIP=a})),this.avatar=this.bak=h["a"].getInfo().avatar_origin,Object(o["f"])(this.uid).then((function(a){t.frame=a.data.data.user_avatar_frame||""}))},decorationStatus:function(t,a,e){if("homebanner"!=t.type||1!=t.using)if(1==t.using?t.using=0:t.using=1,e!=this.decorationActivate){for(var i=this.decoration[this.decorationActivate]?this.decoration[this.decorationActivate].list:[],s=0;s<i.length;s++)i[s].using=0;this.selectAll[this.decorationActivate]=!1,this.decorationActivate=e;var n=this.decoration[e].list.find((function(t){return"homebanner"==t.type}));n.using=1}else{for(var r=this.decoration[e].list,o=!1,c=!0,l=0;l<r.length;l++)r[l].using?o=!0:c=!1;this.decorationActivate=o?e:null,this.selectAll[e]=c}},getActivate:function(){for(var t=this.decorationActivate,a=[],e=t?this.decoration[t].list:[],i=0;i<e.length;i++)e[i].using&&a.push(e[i].type);return a},selectAllInit:function(){var t=this.decorationActivate;if(null!=t){for(var a=!0,e=this.decoration[t].list,i=0;i<e.length;i++)e[i].using||(a=!1);this.selectAll[t]=a}else this.selectAll[0]=!0},selectAllChange:function(t,a){this.decorationActivate=t?a:null;for(var e=[],i=0;i<this.selectAll.length;i++)i!=a?e.push(!1):e.push(t);for(var s=this.decoration,n=0;n<s.length;n++)for(var r=s[n].list,o=0;o<r.length;o++)r[o].using=n===a&&t?1:0;this.$set(this,"decoration",s),this.selectAll=e}},filters:{showAvatar:function(t){return Object(p["showAvatar"])(t,480,!1)},showSmallAvatar:function(t){return Object(p["showAvatar"])(t,136,!1)},showDecoration:function(t){return f["__imgPath"]+"decoration/images/".concat(t.val,"/").concat(t.type,"_preview.png")},showDecorationName:function(t){var a=[{name:"homebanner",text:"资料卡"},{name:"atcard",text:"艾特卡"},{name:"homebg",text:"主页背景"},{name:"sidebar",text:"侧边栏"},{name:"calendar",text:"日历"}],e=a.find((function(a){return a.name==t}));return e?e.text:"无"}},created:function(){this.init()},components:{uc:r["a"]}},w=b,_=(e("bfad"),e("2877")),A=Object(_["a"])(w,i,s,!1,null,null,null);a["default"]=A.exports},"4e82":function(t,a,e){"use strict";var i=e("23e7"),s=e("e330"),n=e("59ed"),r=e("7b0b"),o=e("07fa"),c=e("083a"),l=e("577e"),u=e("d039"),f=e("addb"),d=e("a640"),v=e("04d1"),m=e("d998"),h=e("2d00"),p=e("512ce"),g=[],b=s(g.sort),w=s(g.push),_=u((function(){g.sort(void 0)})),A=u((function(){g.sort(null)})),C=d("sort"),x=!u((function(){if(h)return h<70;if(!(v&&v>3)){if(m)return!0;if(p)return p<603;var t,a,e,i,s="";for(t=65;t<76;t++){switch(a=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(i=0;i<47;i++)g.push({k:a+i,v:e})}for(g.sort((function(t,a){return a.v-t.v})),i=0;i<g.length;i++)a=g[i].k.charAt(0),s.charAt(s.length-1)!==a&&(s+=a);return"DGBEFHACIJK"!==s}})),y=_||!A||!C||!x,k=function(t){return function(a,e){return void 0===e?-1:void 0===a?1:void 0!==t?+t(a,e)||0:l(a)>l(e)?1:-1}};i({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&n(t);var a=r(this);if(x)return void 0===t?b(a):b(a,t);var e,i,s=[],l=o(a);for(i=0;i<l;i++)i in a&&w(s,a[i]);f(s,k(t)),e=s.length,i=0;while(i<e)a[i]=s[i++];while(i<l)c(a,i++);return a}})},"512ce":function(t,a,e){var i=e("342f"),s=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1]},"90d8":function(t,a,e){var i=e("c65b"),s=e("1a2d"),n=e("3a9b"),r=e("ad6d"),o=RegExp.prototype;t.exports=function(t){var a=t.flags;return void 0!==a||"flags"in o||s(t,"flags")||!n(o,t)?a:i(r,t)}},ade3:function(t,a,e){"use strict";function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.d(a,"a",(function(){return i}))},b64b:function(t,a,e){var i=e("23e7"),s=e("7b0b"),n=e("df75"),r=e("d039"),o=r((function(){n(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return n(s(t))}})},bfad:function(t,a,e){"use strict";e("d38b")},d38b:function(t,a,e){},d998:function(t,a,e){var i=e("342f");t.exports=/MSIE|Trident/.test(i)}}]);
//# sourceMappingURL=chunk-9b55a130.9336aa14.js.map