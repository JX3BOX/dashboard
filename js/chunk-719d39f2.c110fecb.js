(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-719d39f2"],{4127:function(e,t,r){"use strict";var o=r("d233"),n=r("b313"),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,p=n["default"],f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:p,formatter:n.formatters[p],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},d=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e},m=function e(t,r,n,i,a,c,u,p,m,h,y,b,g){var v=t;if("function"===typeof u?v=u(r,v):v instanceof Date?v=h(v):"comma"===n&&s(v)&&(v=o.maybeMap(v,(function(e){return e instanceof Date?h(e):e})).join(",")),null===v){if(i)return c&&!b?c(r,f.encoder,g,"key"):r;v=""}if(d(v)||o.isBuffer(v)){if(c){var O=b?r:c(r,f.encoder,g,"key");return[y(O)+"="+y(c(v,f.encoder,g,"value"))]}return[y(r)+"="+y(String(v))]}var j,w=[];if("undefined"===typeof v)return w;if(s(u))j=u;else{var _=Object.keys(v);j=p?_.sort(p):_}for(var k=0;k<j.length;++k){var x=j[k],N=v[x];if(!a||null!==N){var E=s(v)?"function"===typeof n?n(r,x):r:r+(m?"."+x:"["+x+"]");l(w,e(N,E,n,i,a,c,u,p,m,h,y,b,g))}}return w},h=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n["default"];if("undefined"!==typeof e.format){if(!i.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],a=f.filter;return("function"===typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?f.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:f.encode,encoder:"function"===typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:a,formatter:o,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}};e.exports=function(e,t){var r,o,n=e,i=h(t);"function"===typeof i.filter?(o=i.filter,n=o("",n)):s(i.filter)&&(o=i.filter,r=o);var c,u=[];if("object"!==typeof n||null===n)return"";c=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var p=a[c];r||(r=Object.keys(n)),i.sort&&r.sort(i.sort);for(var f=0;f<r.length;++f){var d=r[f];i.skipNulls&&null===n[d]||l(u,m(n[d],d,p,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var y=u.join(i.delimiter),b=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),y.length>0?b+y:""}},4328:function(e,t,r){"use strict";var o=r("4127"),n=r("9e6a"),i=r("b313");e.exports={formats:i,parse:n,stringify:o}},4426:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-publish-box"},[r("pubheader",{attrs:{name:"物品百科",localDraft:!1}},[e._t("header")],2),r("h1",{staticClass:"m-publish-item-header"},[e._v("贡献攻略")]),r("el-form",{staticClass:"m-publish-item",attrs:{"label-position":"left","label-width":"80px"}},[r("el-form-item",{attrs:{label:"物品选择"}},[r("el-select",{staticClass:"u-item_id",attrs:{filterable:"",disabled:!!e.post.id,placeholder:"输入物品名称/物品描述并按『回车』进行搜索","filter-method":e.goto_search_items,loading:e.options.search_loading},model:{value:e.post.source_id,callback:function(t){e.$set(e.post,"source_id",t)},expression:"post.source_id"}},e._l(e.options.items,(function(t){return r("el-option",{key:t.id,attrs:{label:t.Name,value:t.id}},[r("div",{staticClass:"m-selector-item"},[r("img",{staticClass:"u-icon",attrs:{src:e.icon_url_filter(t.IconID),alt:t.Name}}),r("span",{staticClass:"u-name",domProps:{textContent:e._s(t.Name)}})])])})),1)],1),r("el-form-item",{attrs:{label:"综合难度"}},[r("el-rate",{staticClass:"u-level",model:{value:e.post.level,callback:function(t){e.$set(e.post,"level",t)},expression:"post.level"}})],1),r("el-form-item",{attrs:{label:"修订说明"}},[r("el-input",{attrs:{placeholder:"请简单描述一下本次修订的说明"},model:{value:e.post.remark,callback:function(t){e.$set(e.post,"remark",t)},expression:"post.remark"}})],1),r("el-form-item",{staticClass:"m-publish-item-content",attrs:{label:"攻略正文"}},[r("Tinymce",{attrs:{attachmentEnable:!0,resourceEnable:!0,height:400},model:{value:e.post.content,callback:function(t){e.$set(e.post,"content",t)},expression:"post.content"}}),r("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"success",disabled:e.processing},on:{click:e.toPublish}},[e._v("提交攻略 ")])],1)],1)],1)},n=[],i=(r("99af"),r("4160"),r("159b"),r("a0fa")),a=r("221a"),s=r("ee8f"),c=(r("b0c0"),r("2777")),l=r("ee8f"),u=l.User,p=r("4328");function f(e,t){return Object(c["a"])({method:"GET",url:"".concat(s["JX3BOX"].__helperUrl,"api/item/search"),headers:{Accept:"application/prs.helper.v2+json"},params:{keyword:e,limit:t}})}function d(e){return Object(c["a"])({method:"GET",url:"".concat(s["JX3BOX"].__helperUrl,"api/wiki/post"),headers:{Accept:"application/prs.helper.v2+json"},params:{type:"item",source_id:e}})}function m(e){return Object(c["a"])({method:"POST",url:"".concat(s["JX3BOX"].__helperUrl,"api/wiki/post"),headers:{Accept:"application/prs.helper.v2+json"},data:p.stringify({post:{type:"item",source_id:e.source_id,level:e.level,user_nickname:u.getInfo().name,content:e.content,remark:e.remark}})})}r("4328"),r("2ef0");var h={name:"item",props:[],data:function(){return{options:{items:null,search_loading:!1},post:{id:"",content:"",source_id:"",level:3,remark:""},extend:{feedEnable:!1,followEnable:!1,tencentEnable:!1,weiboEnable:!1,tuilanEnable:!1}}},computed:{processing:function(){return this.$store.state.processing}},methods:{toPublish:function(){var e=this;this.post.source_id?this.post.content?this.post.remark?(this.$store.commit("startProcess"),m(this.post).then((function(t){t=t.data,200===t.code?e.$message({message:"提交成功，请等待审核",type:"success",onClose:function(){e.$router.go(0)}}):e.$message({message:"".concat(t.message),type:"warning"})}))):this.$message({message:"请简单描述本次修订说明",type:"warning"}):this.$message({message:"要编写攻略正文哦",type:"warning"}):this.$message({message:"请选择要修订攻略的物品",type:"warning"})},icon_url_filter:function(e){return isNaN(parseInt(e))?"".concat(s["JX3BOX"].__imgPath,"image/common/nullicon.png"):"".concat(s["JX3BOX"].__iconPath,"icon/").concat(e,".png")},goto_search_items:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.options.search_loading=!0,f(t,10).then((function(t){t=t.data,e.options.items=200===t.code&&t.data.data,e.options.search_loading=!1,"function"===typeof r&&r()}),(function(){e.options.items=!1}))}},mounted:function(){var e=this;this.goto_search_items("",(function(){var t=e.$route.params.source_id;e.post.source_id=t||null})),document.getElementsByClassName("m-publish-title").forEach((function(e){e.remove()})),document.getElementsByClassName("el-button--plain").forEach((function(e){e.remove()}))},watch:{"post.source_id":{handler:function(){var e=this;this.post.source_id&&d(this.post.source_id).then((function(t){var r=t.data;r=200===r.code&&r.data;var o=r.post,n=r.source;if(o?(e.post.source_id=o.source_id,e.post.level=o.level||1,e.post.remark="",e.post.content=o.content):(e.post.source_id=e.post.source_id?e.post.source_id:"",e.post.level=3,e.post.remark="",e.post.content=""),n){var i=!1;for(var a in e.options.items=e.options.items||[],e.options.items)if(e.options.items[a].id==e.post.source_id){i=!0;break}i||e.options.items.push(n)}}))}}},components:{pubheader:i["a"],Tinymce:a["a"]}},y=h,b=(r("a4b8"),r("2877")),g=Object(b["a"])(y,o,n,!1,null,null,null);t["default"]=g.exports},"72b7":function(e,t,r){},"9e6a":function(e,t,r){"use strict";var o=r("d233"),n=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l="utf8=%26%2310003%3B",u="utf8=%E2%9C%93",p=function(e,t){var r,p={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,m=f.split(t.delimiter,d),h=-1,y=t.charset;if(t.charsetSentinel)for(r=0;r<m.length;++r)0===m[r].indexOf("utf8=")&&(m[r]===u?y="utf-8":m[r]===l&&(y="iso-8859-1"),h=r,r=m.length);for(r=0;r<m.length;++r)if(r!==h){var b,g,v=m[r],O=v.indexOf("]="),j=-1===O?v.indexOf("="):O+1;-1===j?(b=t.decoder(v,a.decoder,y,"key"),g=t.strictNullHandling?null:""):(b=t.decoder(v.slice(0,j),a.decoder,y,"key"),g=o.maybeMap(c(v.slice(j+1),t),(function(e){return t.decoder(e,a.decoder,y,"value")}))),g&&t.interpretNumericEntities&&"iso-8859-1"===y&&(g=s(g)),v.indexOf("[]=")>-1&&(g=i(g)?[g]:g),n.call(p,b)?p[b]=o.combine(p[b],g):p[b]=g}return p},f=function(e,t,r,o){for(var n=o?t:c(t,r),i=e.length-1;i>=0;--i){var a,s=e[i];if("[]"===s&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,u=parseInt(l,10);r.parseArrays||""!==l?!isNaN(u)&&s!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[],a[u]=n):a[l]=n:a={0:n}}n=a}return n},d=function(e,t,r,o){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,c=r.depth>0&&a.exec(i),l=c?i.slice(0,c.index):i,u=[];if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}var p=0;while(r.depth>0&&null!==(c=s.exec(i))&&p<r.depth){if(p+=1,!r.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+i.slice(c.index)+"]"),f(u,t,r,o)}},m=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?a.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:a.comma,decoder:"function"===typeof e.decoder?e.decoder:a.decoder,delimiter:"string"===typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}};e.exports=function(e,t){var r=m(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var n="string"===typeof e?p(e,r):e,i=r.plainObjects?Object.create(null):{},a=Object.keys(n),s=0;s<a.length;++s){var c=a[s],l=d(c,n[c],r,"string"===typeof e);i=o.merge(i,l,r)}return o.compact(i)}},a4b8:function(e,t,r){"use strict";var o=r("72b7"),n=r.n(o);n.a},b313:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g,i=r("d233"),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return String(e)}}},a)},d233:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var o=[],i=0;i<r.length;++i)"undefined"!==typeof r[i]&&o.push(r[i]);t.obj[t.prop]=o}}},s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!==typeof e[o]&&(r[o]=e[o]);return r},c=function e(t,r,i){if(!r)return t;if("object"!==typeof r){if(n(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var a=t;return n(t)&&!n(r)&&(a=s(t,i)),n(t)&&n(r)?(r.forEach((function(r,n){if(o.call(t,n)){var a=t[n];a&&"object"===typeof a&&r&&"object"===typeof r?t[n]=e(a,r,i):t.push(r)}else t[n]=r})),t):Object.keys(r).reduce((function(t,n){var a=r[n];return o.call(t,n)?t[n]=e(t[n],a,i):t[n]=a,t}),a)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},u=function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(n){return o}},p=function(e,t,r){if(0===e.length)return e;var o=e;if("symbol"===typeof e?o=Symbol.prototype.toString.call(e):"string"!==typeof e&&(o=String(e)),"iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var n="",a=0;a<o.length;++a){var s=o.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?n+=o.charAt(a):s<128?n+=i[s]:s<2048?n+=i[192|s>>6]+i[128|63&s]:s<55296||s>=57344?n+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&o.charCodeAt(a)),n+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s])}return n},f=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],s=Object.keys(i),c=0;c<s.length;++c){var l=s[c],u=i[l];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:l}),r.push(u))}return a(t),e},d=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},m=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},h=function(e,t){return[].concat(e,t)},y=function(e,t){if(n(e)){for(var r=[],o=0;o<e.length;o+=1)r.push(t(e[o]));return r}return t(e)};e.exports={arrayToObject:s,assign:l,combine:h,compact:f,decode:u,encode:p,isBuffer:m,isRegExp:d,maybeMap:y,merge:c}}}]);
//# sourceMappingURL=chunk-719d39f2.c110fecb.js.map