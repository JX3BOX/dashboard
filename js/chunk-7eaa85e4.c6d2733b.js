(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eaa85e4"],{"1c41":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-publish-jx3dat"},[t.loaded?s("boilerplate",{attrs:{name:t.name,type:t.type,post:t.post,meta:t.meta,extend:t.extend,infoEnable:!0,contentEnable:!0,markdownEnable:!1,excerptEnable:!0,tagEnable:!1,notifyEnable:!0,bannerEnable:!0,collectionEnable:!0,publish_text:"发布为公开",draft_text:"发布为私有"},on:{publish:t.toPublish,draft:t.toDraft}},[[s("el-form-item",{attrs:{label:"原创"}},[s("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",t._n(e))},expression:"post.original"}})],1),s("el-form-item",{attrs:{label:"语言"}},[s("el-radio-group",{model:{value:t.post.post_meta.lang,callback:function(e){t.$set(t.post.post_meta,"lang",e)},expression:"post.post_meta.lang"}},[s("el-radio",{attrs:{label:"cn"}},[t._v("简体中文")]),s("el-radio",{attrs:{label:"tr"}},[t._v("繁體中文")])],1)],1),s("el-form-item",{attrs:{label:"版本"}},[s("el-radio-group",{model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}},[s("el-radio",{attrs:{label:"std"}},[t._v("正式服")]),s("el-radio",{attrs:{label:"origin"}},[t._v("怀旧服")]),s("el-radio",{attrs:{label:"all"}},[t._v("全部")])],1)],1),s("el-form-item",{staticClass:"m-jx3dat-subtypes",attrs:{label:"类型"}},t._l(t.options.type_map,(function(e,a){return s("el-radio",{key:a,attrs:{label:a,border:"",disabled:t.id&&t.post.post_subtype!=a},on:{change:function(e){return t.changeSubtype(t.post.post_meta.type)}},model:{value:t.post.post_meta.type,callback:function(e){t.$set(t.post.post_meta,"type",e)},expression:"post.post_meta.type"}},[t._v(t._s(e))])})),1),1==t.post.post_meta.type?s("el-form-item",{attrs:{label:"标签"}},[s("el-checkbox-group",{model:{value:t.post.post_meta.tag,callback:function(e){t.$set(t.post.post_meta,"tag",e)},expression:"post.post_meta.tag"}},t._l(t.options.tag_list,(function(t){return s("el-checkbox",{key:t,attrs:{label:t}})})),1)],1):t._e(),1==t.post.post_meta.type?[s("el-divider",{attrs:{"content-position":"left"}},[t._v("数据")]),s("div",{staticClass:"m-data-box"},[s("div",{staticClass:"m-data-header"},[s("el-button",{staticClass:"m-data-addbutton",attrs:{icon:"el-icon-circle-plus-outline",type:"primary"},on:{click:t.addDBM}},[t._v("添加数据")]),s("a",{staticClass:"m-data-help el-button el-button--success is-plain el-button--small",attrs:{href:"https://www.jx3box.com/tool/13912",target:"_blank"}},[s("i",{staticClass:"el-icon-info"}),t._v(" 点击查看发布帮助 ")])],1),s("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":t.delDBM},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},t._l(t.post.post_meta.data,(function(e,a){return s("el-tab-pane",{key:a,attrs:{name:a+1+""}},[s("span",{staticClass:"m-data-tab-label",attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-box"}),t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"m-data-item"},[s("h5",{staticClass:"u-title"},[t._v("订阅名")]),s("div",{staticClass:"u-group"},[s("div",{staticClass:"u-subblock"},[s("el-input",{attrs:{minlength:1,maxlength:10,"show-word-limit":"",disabled:0==a,placeholder:0==a?"默认版":"版本名称"},on:{change:function(s){return t.checkDataName(e)}},model:{value:e.name,callback:function(s){t.$set(e,"name",s)},expression:"item.name"}},[s("template",{slot:"prepend"},[s("b",{staticClass:"u-feed"},[t._v(" "+t._s(t.user.name)+t._s("默认版"==e.name?"":"#"+e.name)+" ")])])],2)],1),s("div",{staticClass:"u-subblock u-status-wrapper"},[s("el-switch",{attrs:{"active-color":"#49C10F","inactive-color":"#ff4949"},model:{value:e.status,callback:function(s){t.$set(e,"status",s)},expression:"item.status"}}),s("el-tooltip",{attrs:{effect:"dark",content:"设置不公开后,仍然可以通过订阅名下载,仅不做展示",placement:"top"}},[s("span",{staticClass:"u-status"},[t._v(" "+t._s(e.status?"公开":"私有")+" ")])])],1)])]),s("div",{staticClass:"m-data-item"},[s("h5",{staticClass:"u-title"},[t._v("数据标题")]),s("el-input",{attrs:{placeholder:"数据描述",maxlength:"50","show-word-limit":""},model:{value:e.desc,callback:function(s){t.$set(e,"desc",s)},expression:"item.desc"}})],1),s("div",{staticClass:"m-data-item m-data-jx3dat"},[s("h5",{staticClass:"u-title"},[t._v("数据文件")]),s("div",{staticClass:"u-warning"},[s("i",{staticClass:"el-icon-warning-outline"}),t._v(" 当前数据文件将作为 "),s("b",[t._v(t._s(e.name))]),t._v("的文件上传，上传完后如若重新修改版本名称则需要重新上传对应文件 ")]),s("input",{staticClass:"u-data-input",attrs:{type:"file",id:"jx3dat_"+a},on:{change:function(s){return t.uploadDBM(e,a)}}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-s-promotion",plain:"",size:"small"},on:{click:function(e){return t.selectDBM(a)}}},[t._v("上传数据文件")]),s("span",{staticClass:"u-data-remark"},[t._v(t._s(e.origin_name))]),e.file?s("el-input",{staticClass:"u-fileurl",class:{isUploaded:e.isUploaded},attrs:{placeholder:"数据地址",disabled:!0,value:e.file},on:{change:function(s){return t.aniDBM(e)}}},[s("template",{slot:"prepend"},[s("span",{staticClass:"u-status"},[t._v("当前文件地址")])]),s("template",{slot:"append"},[s("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.file,expression:"item.file",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"u-copy"},[s("i",{staticClass:"el-icon-document-copy"}),s("span",[t._v("点击复制")])])])],2):t._e()],1)])})),1)],1),s("div",{staticClass:"m-data-more"},[s("div",{staticClass:"u-more",on:{click:t.toggleMoreFeed}},[s("i",{class:t.moreFeedsVisible?"el-icon-arrow-up":"el-icon-arrow-down"}),s("span",[t._v("其它订阅号")])]),s("el-row",{directives:[{name:"show",rawName:"v-show",value:t.moreFeedsVisible,expression:"moreFeedsVisible"}],staticClass:"u-tr"},[s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{placeholder:"(非必填)"},model:{value:t.post.post_meta.github,callback:function(e){t.$set(t.post.post_meta,"github",e)},expression:"post.post_meta.github"}},[s("template",{slot:"prepend"},[t._v("Github订阅号")]),s("template",{slot:"append"},[t._v("@github")])],2)],1)],1),s("el-row",{directives:[{name:"show",rawName:"v-show",value:t.moreFeedsVisible,expression:"moreFeedsVisible"}],staticClass:"u-tr"},[s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{placeholder:"(非必填)"},model:{value:t.post.post_meta.gitee,callback:function(e){t.$set(t.post.post_meta,"gitee",e)},expression:"post.post_meta.gitee"}},[s("template",{slot:"prepend"},[t._v("Gitee订阅号")]),s("template",{slot:"append"},[t._v("@gitee")])],2)],1)],1),s("el-row",{directives:[{name:"show",rawName:"v-show",value:t.moreFeedsVisible,expression:"moreFeedsVisible"}],staticClass:"u-tr"},[s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{placeholder:"(非必填)"},model:{value:t.post.post_meta.aliyun,callback:function(e){t.$set(t.post.post_meta,"aliyun",e)},expression:"post.post_meta.aliyun"}},[s("template",{slot:"prepend"},[t._v("Aliyun订阅号")]),s("template",{slot:"append"},[t._v("@aliyun")])],2)],1)],1)],1)]:s("el-form-item",{staticClass:"m-jx3dat-other",attrs:{label:"数据"}},[s("input",{staticClass:"u-data-input",attrs:{type:"file",id:"otherdata"},on:{change:t.uploadDat}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-s-promotion",plain:"",size:"medium"},on:{click:t.selectDat}},[t._v("上传数据文件")]),s("span",{staticClass:"u-data-remark"},[t._v(t._s(t.post.post_meta.origin_name))]),t.post.post_meta.down?s("el-input",{staticClass:"u-fileurl",attrs:{placeholder:"数据地址",disabled:!0,value:t.post.post_meta.down}},[s("template",{slot:"prepend"},[s("span",{staticClass:"u-status"},[t._v("当前文件地址")])]),s("template",{slot:"append"},[s("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.post.post_meta.down||"",expression:"post.post_meta.down || ''",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"u-copy"},[s("i",{staticClass:"el-icon-document-copy"}),s("span",[t._v("点击复制")])])])],2):t._e()],1)]],2):t._e()],1)},o=[],i=(s("d3b7"),s("25f0"),s("b0c0"),s("a434"),s("2ef0")),n=s.n(i),l=s("bd13"),r=s("c9d2"),c=s("7c7e"),p=s("f8c2"),u=s("c202"),d=(s("159b"),s("2777")),m=s("41cb"),h=s("65c2");function f(t){return d["c"].post("/server/jx3dat/",t)}function b(t,e){return d["c"].put("/server/jx3dat/".concat(t),e)}function _(){return d["c"].get("/server/jx3dat/feed/has")}function v(t,e){return d["c"].post("/upload/data",t)}function g(t){return Object(m["e"])().post("/api/plugins/my-team-mon/v2",t)}function y(t){var e=x(t);return console.log("正在执行redis同步作业:",e),Object(m["e"])().post("/api/plugins/jx3dat/publish",e)}function x(t){var e=t.author,s=t.ID,a={author:e,user_id:~~t.post_author||0,post_id:s,post_status:t.post_status,data:{},lang:t.post_meta.lang,original:!!t.original};return t.post_meta.data.forEach((function(t,o){a.data[t.name]={author:e,key:t.name,data_url:t.file,about:h["__Root"]+"jx3dat/"+s,name:t.desc,version:t.version||Date.now(),status:!!t.status}})),a}var w={type:"1",lang:"cn",data:[{name:"默认版",desc:"",status:!0,file:"",version:"",origin_name:"",upload_status:!1}],tag:[],github:"",gitee:"",aliyun:"",down:"",origin_name:""},C={name:"jx3dat",props:[],data:function(){return{type:"jx3dat",name:"插件数据",loaded:!1,options:{type_map:p["b"],tag_list:p["a"]},meta:{},post:{ID:"",post_subtype:"1",post_title:"",post_content:"",post_meta:w,post_excerpt:"",post_mode:"tinymce",post_status:"",post_banner:"",post_collection:"",original:0,client:"std"},extend:{feedEnable:!1,followEnable:!1,tencentEnable:!1,weiboEnable:!1,tuilanEnable:!1},user:{},tempname:"",moreFeedsVisible:!1,activeIndex:"1",isVIP:!1,hasFeed:!1}},computed:{totalVersions:function(){return this.post.post_meta.data.length+1},id:function(){return this.$route.params.id},hasOneFeed:function(){return this.id&&this.hasFeed}},methods:{init:function(){var t=this;return this.doLoad(this).then((function(){Object(c["a"])(t.post.post_meta)&&(t.post.post_meta=n.a.cloneDeep(w))})).then((function(){t.id||_().then((function(e){t.hasFeed=!!e.data.data,t.hasFeed&&(t.post.post_subtype="2",t.post.post_meta.type="2")}))}))},toPublish:function(){this.postData()},toDraft:function(){this.postData()},postData:function(){var t=this;this.id?b(this.id,this.build()).then((function(e){t.syncData(e)})).catch((function(e){t.$store.commit("endProcess")})):f(this.build()).then((function(e){t.syncData(e)})).catch((function(e){t.$store.commit("endProcess")}))},syncData:function(t){var e=this;1==this.post.post_subtype?y(t.data.data,this).then((function(s){e.finish(t.data.msg,t.data.data.ID,e.type)})):this.finish(t.data.msg,t.data.data.ID,this.type)},finish:function(t,e,s){this.$message({message:t,type:"success"}),setTimeout((function(){location.href="/"+s+"/"+e}),500)},build:function(){var t=this.$store.state;return t.post.meta_1=t.post.post_meta.tag.toString(),t.post.meta_4=t.post.post_meta.lang,t},checkDataName:function(t){var e=Object(l["a"])(t.name).removeSpace().kill().toString();this.$set(t,"name",e)},selectDBM:function(t){var e=document.getElementById("jx3dat_"+t);e.dispatchEvent(new MouseEvent("click"))},uploadDBM:function(t,e){var s=this,a=document.getElementById("jx3dat_"+e),o=a.files[0];if(o){t.origin_name=o.name;var i=new FormData;i.append("jx3dat",o),i.append("version",t.name),g(i).then((function(e){e&&(t.file=e.data.download_url,s.$message({message:"数据上传成功",type:"success"}),t.version=Date.now(),t.upload_status=!0)}))}else this.$alert("请先选择文件","提醒",{confirmButtonText:"确定"})},addDBM:function(){if(this.post.post_meta.data.length>=3&&!this.isVIP)this.$alert('默认只能设置3个版本，<a href="/vip/premium?from=jx3dat_feed" target="_blank">开通高级版账号</a>无限制',"消息",{dangerouslyUseHTMLString:!0});else{this.post.post_meta.data.push({name:"版本"+this.totalVersions,desc:"",status:!0,file:""});var t=this.post.post_meta.data.length+1+"";this.activeMacroIndex=t}},delDBM:function(t){var e=this;1!=t?this.post.post_meta.data.length<2?this.$alert("✘ 必须保留默认数据","消息",{confirmButtonText:"确定"}):this.$alert("确定删除这个数据吗，删除后无法找回","消息",{confirmButtonText:"确定",callback:function(s){if("confirm"==s){var a=~~t-1;e.post.post_meta.data.splice(a,1),e.activeIndex=a+""}}}):this.$alert("✘ 必须保留默认数据","消息",{confirmButtonText:"确定"})},changeSubtype:function(t){this.$store.commit("changeSubtype",t)},selectDat:function(){var t=document.getElementById("otherdata");t.dispatchEvent(new MouseEvent("click"))},uploadDat:function(t){var e=this,s=document.getElementById("otherdata"),a=s.files[0];if(a){this.post.post_meta.origin_name=a.name;var o=new FormData;o.append("file",a),v(o,this).then((function(t){e.post.post_meta.down=t.data.data.list[0],e.$message({message:t.data.msg,type:"success"}),e.tempname=a.name}))}else this.$alert("请先选择文件","提醒",{confirmButtonText:"确定"})},aniDBM:function(t){t.isUploaded=!0,setTimeout((function(){t.isUploaded=!1}),2e3)},toggleMoreFeed:function(){this.moreFeedsVisible=!this.moreFeedsVisible},onCopy:function(t){this.$notify({title:"复制成功",message:"复制成功",type:"success"})},onError:function(){this.$notify.error({title:"复制失败",message:"复制失败"})}},created:function(){var t=this;this.user=r["a"].getInfo(),r["a"].isVIP().then((function(e){t.isVIP=e}))},mounted:function(){this.init()},watch:{id:function(){this.init()}},filters:{},components:{boilerplate:u["a"]}},k=C,E=(s("6353"),s("2877")),D=Object(E["a"])(k,a,o,!1,null,null,null);e["default"]=D.exports},"25f0":function(t,e,s){"use strict";var a=s("6eeb"),o=s("825a"),i=s("d039"),n=s("ad6d"),l="toString",r=RegExp.prototype,c=r[l],p=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=l;(p||u)&&a(RegExp.prototype,l,(function(){var t=o(this),e=String(t.source),s=t.flags,a=String(void 0===s&&t instanceof RegExp&&!("flags"in r)?n.call(t):s);return"/"+e+"/"+a}),{unsafe:!0})},6353:function(t,e,s){"use strict";s("910f")},"7c7e":function(t,e,s){"use strict";s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}s("b64b"),e["a"]=function(t){return!t||(!(!Array.isArray(t)||t.length)||"object"==a(t)&&!Object.keys(t).length)}},"910f":function(t,e,s){},b64b:function(t,e,s){var a=s("23e7"),o=s("7b0b"),i=s("df75"),n=s("d039"),l=n((function(){i(1)}));a({target:"Object",stat:!0,forced:l},{keys:function(t){return i(o(t))}})},bd13:function(t,e,s){"use strict";function a(t){var e=Object.prototype.toString.call(t);return e.match(/\[object (.*?)\]/)[1].toLowerCase()}s.d(e,"a",(function(){return n}));var o=a;class i{constructor(t){if("string"!==o(t))throw new Error("[Sterilizer::init] params should be string");this._symbols={"`":"`","~":"~","!":"!","@":"@","#":"#",$:"\\$","%":"%","^":"\\^","&":"&","*":"\\*","-":"\\-",_:"_","=":"=","+":"+","(":"\\(",")":"\\)","[":"\\[","]":"\\]","{":"\\{","}":"\\}","|":"\\|","\\":"\\\\","/":"/","?":"\\?",":":":",";":";","'":"'",'"':'"',">":">","<":"<",",":",",".":"\\."},this.symbols=Object.keys(this._symbols),this.regs=Object.values(this._symbols),this.str=t,this._str=t}toString(){return this._str}_detected(t){let e=o(t),s=["string","array","set"];if(!s.includes(e))throw new Error("[Sterilizer::remove] params should be string|array|set");return t}_sterilize(t){t=[...t].join("");let e=new RegExp(`[${t}]`,"gm");return this._str=this._str.replace(e,""),this}kill(t){let e=null;if(void 0==t)e=new Set(this.regs);else{this._detected(t),e=new Set;let s=new Set(t);for(let t of s)this.symbols.includes(t)&&e.add(this._symbols[t])}return this._sterilize(e)}live(t){this._detected(t);let e=new Set(this.regs);for(let s of t)this.symbols.includes(s)&&e.delete(this._symbols[s]);return this._sterilize(e)}safe(){return this.kill(["&","<",">",'"',"'","+",":","/","?","=","#","%"])}removeHSC(){return this.kill(["&","<",">",'"',"'"])}removeURL(){return this.kill(["+",":","/","?","=","&","#","%"])}removeSpace(){return this._str=this._str.replace(/\s/gm,""),this}remove(t,e){let s=new RegExp(""+t,"gm");return e=void 0!==e?e:"",this._str=this._str.replace(s,e),this}removeHTMLtag(){return this._str=this._str.replace(/<[^>]+>/gm,""),this}isDirty(t){return t?this.str.includes(t):this.symbols.some(t=>this.str.includes(t))}}function n(t){return new i(t)}},f8c2:function(t){t.exports=JSON.parse('{"b":{"1":"团队监控数据","2":"目标监控数据","3":"团队面板buff数据","4":"团队面板UI皮肤","5":"其它插件数据"},"a":["PVE","PVP","抓马","宠物","奇遇","浪客行","体服","其它"]}')}}]);
//# sourceMappingURL=chunk-7eaa85e4.c6d2733b.js.map