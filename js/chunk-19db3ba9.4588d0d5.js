(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19db3ba9"],{"1b4a":function(t){t.exports=JSON.parse('{"1":"玩法心得","2":"江湖回忆","3":"同人影音","4":"交流讨论","5":"反馈建议","6":"公告资讯"}')},3111:function(t,e,n){"use strict";n("873c")},"873c":function(t,e,n){},ea06:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-dashboard-publish-bbs"},[t.loaded?n("boilerplate",{attrs:{name:t.name,type:t.type,post:t.post,meta:t.meta,extend:t.extend,infoEnable:!0,contentEnable:!0,markdownEnable:!1,excerptEnable:!0,tagEnable:!1,notifyEnable:!0,bannerEnable:!0,collectionEnable:!0},on:{publish:t.toPublish,draft:t.toDraft}},[[n("el-form-item",{attrs:{label:"原创"}},[n("el-switch",{attrs:{"active-color":"#13ce66"},model:{value:t.post.original,callback:function(e){t.$set(t.post,"original",e)},expression:"post.original"}})],1),n("el-form-item",{attrs:{label:"版本"}},[n("el-radio-group",{model:{value:t.post.client,callback:function(e){t.$set(t.post,"client",e)},expression:"post.client"}},[n("el-radio",{attrs:{label:"std"}},[t._v("正式服")]),n("el-radio",{attrs:{label:"origin"}},[t._v("怀旧服")])],1)],1),n("el-form-item",{attrs:{label:"类型"}},[n("el-radio-group",{model:{value:t.post.post_subtype,callback:function(e){t.$set(t.post,"post_subtype",e)},expression:"post.post_subtype"}},t._l(t.options.types,(function(e,o){return n("el-radio",{directives:[{name:"show",rawName:"v-show",value:t.canSee(o),expression:"canSee(key)"}],key:o,attrs:{label:o,border:""}},[t._v(t._s(e))])})),1)],1)]],2):t._e()],1)},s=[],a=n("c202"),i=(n("65c2"),n("1b4a")),l=n("c9d2"),r={name:"bbs",props:[],data:function(){return{type:"bbs",name:"茶馆",loaded:!1,options:{types:i},meta:{},post:{ID:"",post_subtype:"1",post_title:"",post_content:"",post_meta:{},post_excerpt:"",post_mode:"tinymce",post_banner:"",post_status:"",post_collection:"",original:0,client:"std"},extend:{feedEnable:!1,followEnable:!1,tencentEnable:!1,weiboEnable:!1,tuilanEnable:!1},isAdmin:l["a"].isAdmin()}},computed:{},methods:{init:function(){return this.doLoad(this).then((function(t){}))},toPublish:function(){this.doPublish(this.build(),this)},toDraft:function(){this.doDraft(this.build(),this)},build:function(){var t=this.$store.state;return t},canSee:function(t){return"6"!=t||this.isAdmin}},filters:{},mounted:function(){var t=this;this.init().then((function(){console.log("Init Post:",t.post)}))},components:{boilerplate:a["a"]}},c=r,p=(n("3111"),n("2877")),b=Object(p["a"])(c,o,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-19db3ba9.4588d0d5.js.map