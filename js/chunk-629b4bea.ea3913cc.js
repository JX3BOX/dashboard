(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-629b4bea"],{"07d3":function(t,e,r){"use strict";r("4f42")},"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,i="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,o,l,u){var h=r+t.length,f=o.length,m=c;return void 0!==l&&(l=n(l),m=s),i.call(u,m,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(h);case"<":s=l[i.slice(1,-1)];break;default:var c=+i;if(0===c)return n;if(c>f){var u=a(c/10);return 0===u?n:u<=f?void 0===o[u-1]?i.charAt(1):o[u-1]+i.charAt(1):n}s=o[c-1]}return void 0===s?"":s}))}},1856:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return l})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return o}));var n=r("2777"),a=r("41cb");function i(){return Object(n["a"])({method:"GET",url:"/api/my/namespaces"})}function s(t){return Object(n["e"])({method:"GET",url:"/api/namespace",params:{key:t}})}function c(t){return Object(a["b"])({proxy:!0}).post("/api/cms/namespace",t)}function o(t,e){return Object(a["b"])().put("/api/cms/namespace/".concat(t),e)}function l(t){return Object(a["b"])().get("/api/cms/namespace/".concat(t))}},"2b07":function(t,e,r){"use strict";r("5c32")},"4f42":function(t,e,r){},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),s=r("a691"),c=r("1d80"),o=r("8aa5"),l=r("0cb2"),u=r("14c3"),h=Math.max,f=Math.min,m=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var d=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=n.REPLACE_KEEPS_$0,b=d?"$":"$0";return[function(r,n){var a=c(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!d&&p||"string"===typeof n&&-1===n.indexOf(b)){var c=r(e,t,this,n);if(c.done)return c.value}var v=a(t),_=String(this),k="function"===typeof n;k||(n=String(n));var g=v.global;if(g){var y=v.unicode;v.lastIndex=0}var S=[];while(1){var w=u(v,_);if(null===w)break;if(S.push(w),!g)break;var $=String(w[0]);""===$&&(v.lastIndex=o(_,i(v.lastIndex),y))}for(var E="",x=0,C=0;C<S.length;C++){w=S[C];for(var j=String(w[0]),O=h(f(s(w.index),_.length),0),A=[],L=1;L<w.length;L++)A.push(m(w[L]));var R=w.groups;if(k){var T=[j].concat(A,O,_);void 0!==R&&T.push(R);var I=String(n.apply(void 0,T))}else I=l(j,_,O,A,R,n);O>=x&&(E+=_.slice(x,O)+I,x=O+j.length)}return E+_.slice(x)}]}))},"5c32":function(t,e,r){},"857a":function(t,e,r){var n=r("1d80"),a=/"/g;t.exports=function(t,e,r,i){var s=String(n(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(i).replace(a,"&quot;")+'"'),c+">"+s+"</"+e+">"}},"9911f":function(t,e,r){"use strict";var n=r("23e7"),a=r("857a"),i=r("af03");n({target:"String",proto:!0,forced:i("link")},{link:function(t){return a(this,"a","href",t)}})},a0fa:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-publish-header"},[r("el-page-header",{attrs:{content:t.name},on:{back:t.goBack}})],1)},a=[],i={name:"pubheader",props:["name"],data:function(){return{dialogVisible:!1,selectedCount:0,tableData:[]}},computed:{},methods:{goBack:function(){this.$root.$router.push("/")}},mounted:function(){},components:{}},s=i,c=(r("07d3"),r("2877")),o=Object(c["a"])(s,n,a,!1,null,null,null);e["a"]=o.exports},af03:function(t,e,r){var n=r("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},bd13:function(t,e,r){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.match(/\[object (.*?)\]/)[1].toLowerCase()}r.d(e,"a",(function(){return s}));var a=n;class i{constructor(t,e){if("string"!==a(t))throw new Error("[Sterilizer::init] params should be string");this._symbols={"`":"`","~":"~","!":"!","@":"@","#":"#",$:"\\$","%":"%","^":"\\^","&":"&","*":"\\*","-":"\\-",_:"_","=":"=","+":"+","(":"\\(",")":"\\)","[":"\\[","]":"\\]","{":"\\{","}":"\\}","|":"\\|","\\":"\\\\","/":"/","?":"\\?",":":":",";":";","'":"'",'"':'"',">":">","<":"<",",":",",".":"\\."},this.symbols=Object.keys(this._symbols),this.regs=Object.values(this._symbols),this.str=t,this._str=t,this._chain=e}toString(){return this._str}_detected(t){let e=a(t),r=["string","array","set"];if(!r.includes(e))throw new Error("[Sterilizer::remove] params should be string|array|set");return t}_sterilize(t){t=[...t].join("");let e=new RegExp(`[${t}]`,"gm");return this._str=this._str.replace(e,""),this._chain?this:this.toString()}kill(t){let e=null;if(void 0==t)e=new Set(this.regs);else{this._detected(t),e=new Set;let r=new Set(t);for(let t of r)this.symbols.includes(t)&&e.add(this._symbols[t])}return this._sterilize(e)}live(t){this._detected(t);let e=new Set(this.regs);for(let r of t)this.symbols.includes(r)&&e.delete(this._symbols[r]);return this._sterilize(e)}safe(){return this.kill(["&","<",">",'"',"'","+",":","/","?","=","#","%"])}removeHSC(){return this.kill(["&","<",">",'"',"'"])}removeURL(){return this.kill(["+",":","/","?","=","&","#","%"])}removeSpace(){return this._str=this._str.replace(/\s/gm,""),this._chain?this:this.toString()}remove(t,e){let r=new RegExp(""+t,"gm");return e=void 0!==e?e:"",this._str=this._str.replace(r,e),this._chain?this:this.toString()}removeHTMLtag(){return this._str=this._str.replace(/<[^>]+>/gm,""),this._chain?this:this.toString()}}function s(t,e=!1){return new i(t,e)}},e97b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-dashboard-publish-namespace m-publish-box"},[r("pubheader",{attrs:{name:t.name,localDraft:!1}},[t._t("header")],2),r("div",{staticClass:"m-publish-namespace-box"},[r("header",{staticClass:"m-publish-namespace-header"},[t._m(0),r("div",{staticClass:"u-count"},[r("span",{staticClass:"u-count-txt"},[t._v("当前可建铭牌数： "),r("b",[t._v(t._s(t.count))]),t._v(" 个")]),t._m(1),t._m(2)])]),r("el-form",{staticClass:"m-publish-namespace-form",attrs:{model:t.form}},[r("el-form-item",{attrs:{label:"关键词"}},[r("el-input",{attrs:{placeholder:"全局唯一关键词"},model:{value:t.form.key,callback:function(e){t.$set(t.form,"key",e)},expression:"form.key"}}),t.available?t._e():r("el-alert",{attrs:{title:"已有关键词，请重新输入",type:"error","show-icon":""}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{placeholder:"请输入关于铭牌的描述",maxlength:"30","show-word-limit":""},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),r("el-form-item",{attrs:{label:"链接"}},[r("el-input",{attrs:{placeholder:"请输入跳转地址"},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}},[r("template",{slot:"prepend"},[t._v("Https://")])],2)],1),r("el-form-item",{attrs:{label:""}},[r("el-button",{staticClass:"u-submit",attrs:{type:"primary",disabled:!t.count||!t.ready},on:{click:t.onSubmit}},[t._v("提交")])],1)],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"u-tip"},[t._v(' 铭牌是一个可以通过关键词快速访问的功能，例如定义铭牌 "某某气纯宏"，则可以在浏览器地址栏中通过快速输入 '),r("a",{attrs:{href:"https://剑网3.com/某某气纯宏",target:"_blank"}},[r("b",[t._v("剑网3.com/某某气纯宏")])]),t._v(" 访问你输入的链接 ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"u-btn-buy el-button el-button--primary el-button--mini",attrs:{href:"/vip/namespace?from=dashboard_namespace_create",target:"_blank"}},[r("span",{staticClass:"el-icon-shopping-cart-2"}),t._v("购买铭牌")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"u-skip",attrs:{href:"/vip/namespace/#discount?from=dashboard_namespace_create",target:"_blank"}},[r("span",{staticClass:"el-icon-connection"}),t._v("限时0.99元抢注10个铭牌")])}],i=(r("9911f"),r("caad"),r("2532"),r("5319"),r("ac1f"),r("b0c0"),r("bd13")),s=r("a0fa"),c=r("1856"),o=r("c9d2"),l={name:"namespace",props:[],data:function(){return{name:"剑三铭牌",form:{key:"",desc:"",link:""},count:0,available:!0}},computed:{data:function(){return{key:this.form.key,desc:this.form.desc,link:"https://"+this.form.link,source_type:"custom"}},ready:function(){return this.available&&this.form.link&&this.count}},methods:{checkKey:function(t){t&&t!=this.key_cache?(this.form.key=Object(i["a"])(this.form.key).kill(),this.form.key=Object(i["a"])(this.form.key).removeSpace(),this.checkAvailable()):this.available=!1},checkLink:function(t){if(t){var e=this.form.link;(e.includes("http://")||e.includes("https://"))&&(this.form.link=e.replace(/https?\:\/\//,""))}},checkAvailable:function(){var t=this;Object(c["c"])(this.form.key).then((function(e){e.data.data.namespace?t.available=!1:t.available=!0}))},onSubmit:function(){if(""==this.form.desc){var t=o["a"].getInfo();this.data.desc=t.name+"创建"}this.key_cache?Object(c["e"])(this.key_id,this.data).then((function(t){console.log(t)})):Object(c["a"])(this.data).then((function(t){console.log(t,"...")}))}},watch:{"form.key":function(t){this.checkKey(t)},"form.link":function(t){this.checkLink(t)}},created:function(){var t=this;o["a"].getAsset().then((function(e){t.count=e.namespace_card_count}))},mounted:function(){var t=this;this.$route.params.id&&Object(c["d"])(this.$route.params.id).then((function(e){var r=e.data.data,n=r.key,a=r.desc,i=r.link;t.key_cache=n,t.key_id=t.$route.params.id,t.form.key=n,t.form.desc=a,t.form.link=i}))},components:{pubheader:s["a"]}},u=l,h=(r("2b07"),r("2877")),f=Object(h["a"])(u,n,a,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-629b4bea.ea3913cc.js.map