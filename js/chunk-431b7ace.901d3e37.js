(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-431b7ace"],{"0af0":function(t,e,s){},"3a16":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-publish-box"},[s("pubheader",{attrs:{name:"剑三小册",localDraft:!1}},[t._t("header")],2),s("el-form",{staticClass:"m-publish-collection",attrs:{"label-position":"left"}},[s("div",{staticClass:"m-publish-title"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),s("el-input",{attrs:{placeholder:"请输入剑三小册标题",maxlength:"20","show-word-limit":""},model:{value:t.collection.title,callback:function(e){t.$set(t.collection,"title",e)},expression:"collection.title"}})],1),s("el-row",{attrs:{gutter:30}},[s("el-col",{staticClass:"m-publish-image",attrs:{span:6}},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("封面图（选填）")]),s("post_banner",{attrs:{banner:t.collection.image}})],1),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"m-publish-public"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("可见性")]),s("el-radio",{attrs:{label:this.public.PUBLIC},model:{value:t.collection.public,callback:function(e){t.$set(t.collection,"public",e)},expression:"collection.public"}},[t._v("公开")]),s("el-radio",{attrs:{label:this.public.PRIVATE},model:{value:t.collection.public,callback:function(e){t.$set(t.collection,"public",e)},expression:"collection.public"}},[t._v("私有")])],1),s("div",{staticClass:"m-publish-tags"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("标签（选填）")]),s("ul",{staticClass:"m-list-style"},t._l(t.collection.tags,(function(e,i){return s("li",{key:i,staticClass:"m-tag"},[s("span",{domProps:{textContent:t._s(e)}}),s("i",{staticClass:"el-icon-close",on:{click:function(e){return t.collection.tags.splice(i,1)}}})])})),0),t.collection.tags.length<5?s("div",{staticClass:"m-tag-add"},[s("el-autocomplete",{staticClass:"u-tag-add-value",attrs:{placeholder:"请输入标签（最多为5个）","fetch-suggestions":t.tags_search},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}}),s("el-button",{staticClass:"u-tag-add",on:{click:function(){t.tag&&t.collection.tags.push(t.tag),t.tag=""}}},[s("i",{staticClass:"el-icon-plus"})])],1):t._e()],1)])],1),s("div",{staticClass:"m-publish-description"},[s("el-divider",{attrs:{"content-position":"left"},on:{click:function(e){t.show_description=!t.show_description}}},[t._v("描述（选填）")]),t.show_description?t._e():s("span",{staticClass:"u-show",on:{click:function(e){t.show_description=!0}}},[t._v("▼ 展开")]),t.show_description?s("span",{staticClass:"u-hide",on:{click:function(e){t.show_description=!1}}},[t._v("▲ 收起")]):t._e(),s("Tinymce",{directives:[{name:"show",rawName:"v-show",value:t.show_description,expression:"show_description"}],attrs:{attachmentEnable:!0,resourceEnable:!0,height:300},model:{value:t.collection.description,callback:function(e){t.$set(t.collection,"description",e)},expression:"collection.description"}})],1),s("div",{staticClass:"m-publish-posts"},[s("el-divider",{attrs:{"content-position":"left"}},[t._v("内容")]),s("div",{staticClass:"u-posts-add",on:{click:t.add_posts_item}},[s("i",{staticClass:"el-icon-plus"}),s("span",[t._v(" 添加文章")])]),t.collection.posts&&t.collection.posts.length?s("draggable",{staticClass:"m-list-style",attrs:{tag:"ul",list:t.collection.posts,handle:".u-move"}},t._l(t.collection.posts,(function(e,i){return s("li",{key:i,staticClass:"c-posts-item"},[s("i",{staticClass:"u-move el-icon-more"}),s("i",{staticClass:"u-delete el-icon-close",on:{click:function(e){return t.collection.posts.splice(i,1)}}}),s("el-row",{staticClass:"m-posts-item",attrs:{gutter:10}},[s("el-col",{attrs:{span:4}},[s("el-select",{staticClass:"u-item-key",attrs:{placeholder:"请选择文章类型"},on:{change:function(){t.search_handle(null,e),e.url=e.title=""}},model:{value:e.type,callback:function(s){t.$set(e,"type",s)},expression:"item.type"}},t._l(t.source_types,(function(t,e){return s("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1),s("el-col",{attrs:{span:8}},["custom"!==e.type?s("el-select",{staticClass:"u-item-value",attrs:{filterable:"",remote:"",placeholder:"通过输入文章标题进行搜索","remote-method":function(s){t.search_handle(s,e)}},on:{change:function(s){t.title_fill(s,e)}},model:{value:e.id,callback:function(s){t.$set(e,"id",s)},expression:"item.id"}},[t._l(e.posts,(function(e){return[e.id&&e.title?s("el-option",{key:e.id,attrs:{value:e.id,label:e.title}}):t._e()]}))],2):s("el-input",{staticClass:"u-item-value",attrs:{placeholder:"请输入URL链接"},model:{value:e.url,callback:function(s){t.$set(e,"url",s)},expression:"item.url"}})],1),e.url?s("el-col",{attrs:{span:12}},[s("el-input",{attrs:{placeholder:"请输入自定义标题"},model:{value:e.title,callback:function(s){t.$set(e,"title",s)},expression:"item.title"}})],1):t._e()],1)],1)})),0):s("div",{staticClass:"u-posts-items-empty"},[t._v("暂无文章信息，请进行文章添加")])],1),s("el-form-item",[s("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"success",loading:t.$store.state.processing},on:{click:t.submit}},[t._v("提交剑三小册 ")])],1)],1)],1)},a=[],l=(s("99af"),s("ac1f"),s("1276"),s("b85c")),n=s("221a");const o=Object.freeze({PRIVATE:0,PUBLIC:1,all(){return[this.PRIVATE,this.PUBLIC]}});var c=o,r=s("a0fa"),p=s("7825"),u=s("b76a"),d=s.n(u),h=s("6c2b"),m=s("2777"),f=s("ee8f");s("4328");function _(t,e){return Object(m["a"])({method:"GET",url:"".concat(f["JX3BOX"].__helperUrl,"api/posts/").concat(t),headers:{Accept:"application/prs.helper.v2+json"},params:e})}var b=s("64c7"),g=b.__Root,v=s("64c7"),y=v.__postType,C=v.__otherType,w=(s("4328"),s("2ef0"),{name:"item",props:[],data:function(){var t=Object.assign(y,C);return t["custom"]="自定义",delete t["cj"],{source_types:t,public:c,collection:{id:"",title:"",public:"",image:"",description:"",tags:[],posts:[]},tag:"",legal_tags:null,show_description:!1}},mounted:function(){var t=this;this.collection.posts.length||this.add_posts_item(),this.$route.params.collection_id&&Object(h["a"])(this.$route.params.collection_id).then((function(e){if(e=e.data,200===e.code){var s=e.data.collection;if(s){for(var i in s.posts){var a=s.posts[i];s.posts[i].posts="custom"===a.type?null:[{id:a.id,title:a.title}]}t.collection=s}else t.$message({message:"该剑三小册已被删除或无权限访问",type:"warning"})}}))},methods:{tags_search:function(t,e){var s=this;null===this.legal_tags?Object(h["b"])().then((function(i){i=i.data,s.legal_tags=200===i.code?i.data.tags:[],e(s.tags_filters(t))})):e(this.tags_filters(t))},tags_filters:function(t){var e,s=[],i=Object(l["a"])(this.legal_tags);try{for(i.s();!(e=i.n()).done;){var a=e.value;a.split(t).length>1&&s.push({value:a})}}catch(n){i.e(n)}finally{i.f()}return s},title_fill:function(t,e){var s=e.posts[t];e.title=s&&s.title?s.title:""},add_posts_item:function(){this.collection.posts.push({title:"",type:"",id:"",url:"",posts:null})},search_handle:function(t,e){null===t&&(e.id=t=""),_(e.type,{keyword:t}).then((function(t){t=t.data,200===t.code&&(e.posts=t.data.posts)}))},submit:function(){var t=this;this.$confirm("确定提交剑三小册信息？","提示",{type:"info"}).then((function(){var e=JSON.parse(JSON.stringify(t.collection));if(e.posts.length){for(var s in e.posts)delete e.posts[s].posts;e.posts=JSON.stringify(e.posts),t.$store.commit("startProcess"),Object(h["e"])(e).then((function(e){e=e.data,200===e.code?(t.$message({message:e.message,type:"success"}),location.href="".concat(g,"collection/#/view/").concat(e.data.collection.id)):t.$message({message:"".concat(e.message),type:"warning"})}))}else t.$message({message:"要添加剑三小册内文章哦",type:"warning"})}))}},components:{Tinymce:n["a"],draggable:d.a,pubheader:r["a"],post_banner:p["a"]}}),k=w,O=(s("cee3"),s("2877")),j=Object(O["a"])(k,i,a,!1,null,null,null);e["default"]=j.exports},"6c2b":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return o})),s.d(e,"c",(function(){return c})),s.d(e,"e",(function(){return r})),s.d(e,"d",(function(){return p}));s("99af");var i=s("2777"),a=s("ee8f"),l=s("4328");function n(){return Object(i["a"])({method:"GET",url:"".concat(a["JX3BOX"].__helperUrl,"api/post/collection/legal_tags"),headers:{Accept:"application/prs.helper.v2+json"}})}function o(t){return Object(i["a"])({method:"GET",url:"".concat(a["JX3BOX"].__helperUrl,"api/post/collection/").concat(t),headers:{Accept:"application/prs.helper.v2+json"}})}function c(t){return Object(i["a"])({method:"GET",url:"".concat(a["JX3BOX"].__helperUrl,"api/my/post/collections"),headers:{Accept:"application/prs.helper.v2+json"},params:t})}function r(t){return Object(i["a"])({method:"POST",url:"".concat(a["JX3BOX"].__helperUrl,"api/post/collection"),headers:{Accept:"application/prs.helper.v2+json"},data:l.stringify({action:t.id?"update":"create",collection:t})})}function p(t){return t?Object(i["a"])({method:"PUT",url:"".concat(a["JX3BOX"].__helperUrl,"api/post/collection/remove"),headers:{Accept:"application/prs.helper.v2+json"},data:l.stringify({id:t})}):null}},7825:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-publish-banner"},[s("el-alert",{staticClass:"u-tip",attrs:{title:"图片尺寸180*100像素，非必选，部分栏目不会展示海报，分享功能将使用该图作为预览图",type:"info","show-icon":""}}),s("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.url,"show-file-list":!1,"on-success":t.done,"on-error":t.fail,"with-credentials":"",accept:"image/jpg,image/jpeg,image/gif,image/png,image/bmp"}},[t.post_banner?s("img",{attrs:{src:t._f("showBanner")(t.post_banner)}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),s("el-button",{staticClass:"u-remove",attrs:{type:"info",size:"mini",icon:"el-icon-circle-close"},on:{click:t.clearBanner}},[t._v("移除海报")])],1)},a=[],l=(s("99af"),s("64c7")),n=s("85e4"),o=l["__server"]+"upload",c={name:"post_banner",props:["banner"],data:function(){return{post_banner:this.banner,url:o}},methods:{done:function(t,e){this.post_banner=t.data.list[0],this.$store.commit("editBanner",this.post_banner)},fail:function(t,e,s){try{var i=JSON.parse(t.message);this.$message.error("[".concat(i.code,"]").concat(i.msg))}catch(a){this.$message.error("网络请求异常")}},clearBanner:function(){this.post_banner="",this.$store.commit("editBanner",this.post_banner)}},filters:{showBanner:function(t){return Object(n["showMinibanner"])(t)}}},r=c,p=(s("c383"),s("2877")),u=Object(p["a"])(r,i,a,!1,null,null,null);e["a"]=u.exports},c383:function(t,e,s){"use strict";var i=s("c515"),a=s.n(i);a.a},c515:function(t,e,s){},cee3:function(t,e,s){"use strict";var i=s("0af0"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-431b7ace.901d3e37.js.map