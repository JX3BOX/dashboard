(function(e){function n(n){for(var t,a,r=n[0],s=n[1],i=n[2],h=0,f=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&f.push(u[a][0]),u[a]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);d&&d(n);while(f.length)f.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,n=0;n<o.length;n++){for(var c=o[n],t=!0,a=1;a<c.length;a++){var r=c[a];0!==u[r]&&(t=!1)}t&&(o.splice(n--,1),e=s(s.s=c[0]))}return e}var t={},a={index:0},u={index:0},o=[];function r(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-19b0439c":"66ec3c81","chunk-1ecfef41":"3459019e","chunk-1ed61999":"859f4e21","chunk-231c721e":"38127c8a","chunk-263938f7":"56526482","chunk-2d216214":"da9313a8","chunk-2a39734e":"eebf981f","chunk-3c23a5aa":"eef494d0","chunk-36eba120":"f7232a84","chunk-47c2a392":"86926556","chunk-3a0d1c25":"081e0e4a","chunk-43e45d1a":"d2a3cc59","chunk-4c566f21":"e9575e12","chunk-502e88a6":"eb14a8f3","chunk-561dab6a":"7d46786a","chunk-57e1f300":"fcbc9082","chunk-5b502ff8":"497ca275","chunk-5dbcfb7a":"805c5895","chunk-6137d34c":"36fba260","chunk-646363a7":"b4c0a9eb","chunk-6b125c7e":"0fa43b76","chunk-106c225c":"4a5c172c","chunk-35742a98":"5daa818c","chunk-5a045c8c":"8c52680e","chunk-736a354d":"69b165a7","chunk-75413c9c":"eec89f1e","chunk-92461cf8":"b0c7c560","chunk-a3c539ce":"3d69ebc4","chunk-db5bb51e":"e2a9a912","chunk-e6cd4ee8":"9cb582d6","chunk-f2820636":"0412b59c","chunk-6c3c8762":"a0f2a7b1","chunk-724cbf56":"c9078109","chunk-7b0e1dbf":"1960deec","chunk-a485d79a":"c04898c0","chunk-c302ceca":"aa59163b","chunk-eadecafa":"88282039"}[e]+".js"}function s(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.e=function(e){var n=[],c={"chunk-19b0439c":1,"chunk-1ecfef41":1,"chunk-1ed61999":1,"chunk-231c721e":1,"chunk-263938f7":1,"chunk-2a39734e":1,"chunk-3c23a5aa":1,"chunk-36eba120":1,"chunk-47c2a392":1,"chunk-3a0d1c25":1,"chunk-43e45d1a":1,"chunk-4c566f21":1,"chunk-502e88a6":1,"chunk-561dab6a":1,"chunk-57e1f300":1,"chunk-5b502ff8":1,"chunk-5dbcfb7a":1,"chunk-6137d34c":1,"chunk-646363a7":1,"chunk-6b125c7e":1,"chunk-106c225c":1,"chunk-35742a98":1,"chunk-5a045c8c":1,"chunk-736a354d":1,"chunk-75413c9c":1,"chunk-92461cf8":1,"chunk-a3c539ce":1,"chunk-db5bb51e":1,"chunk-e6cd4ee8":1,"chunk-f2820636":1,"chunk-6c3c8762":1,"chunk-724cbf56":1,"chunk-7b0e1dbf":1,"chunk-a485d79a":1,"chunk-c302ceca":1,"chunk-eadecafa":1};a[e]?n.push(a[e]):0!==a[e]&&c[e]&&n.push(a[e]=new Promise((function(n,c){for(var t="css/"+({}[e]||e)+"."+{"chunk-19b0439c":"03a551c9","chunk-1ecfef41":"a02d81ef","chunk-1ed61999":"ae5fc5c7","chunk-231c721e":"999f724a","chunk-263938f7":"4b370131","chunk-2d216214":"31d6cfe0","chunk-2a39734e":"181545fe","chunk-3c23a5aa":"268c6e79","chunk-36eba120":"52129120","chunk-47c2a392":"d90ac10c","chunk-3a0d1c25":"1984e7c5","chunk-43e45d1a":"80823869","chunk-4c566f21":"b72703c7","chunk-502e88a6":"2d0e6cba","chunk-561dab6a":"0ffae7d3","chunk-57e1f300":"5f0c20bc","chunk-5b502ff8":"9b1a6b05","chunk-5dbcfb7a":"0caabdf0","chunk-6137d34c":"9b1a6b05","chunk-646363a7":"72ad67ed","chunk-6b125c7e":"ce2a9c28","chunk-106c225c":"3f570387","chunk-35742a98":"41e34023","chunk-5a045c8c":"df96141c","chunk-736a354d":"9c26d1d3","chunk-75413c9c":"685bf5ce","chunk-92461cf8":"f37c501a","chunk-a3c539ce":"3c81ab07","chunk-db5bb51e":"c3c61c72","chunk-e6cd4ee8":"1fbdeb87","chunk-f2820636":"05c22b39","chunk-6c3c8762":"510af41d","chunk-724cbf56":"d8e8d018","chunk-7b0e1dbf":"08d9dc27","chunk-a485d79a":"9efc80b0","chunk-c302ceca":"cc01edb6","chunk-eadecafa":"3f07197c"}[e]+".css",u=s.p+t,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var i=o[r],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===t||h===u))return n()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){i=f[r],h=i.getAttribute("data-href");if(h===t||h===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var t=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete a[e],d.parentNode.removeChild(d),c(o)},d.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(d)})).then((function(){a[e]=0})));var t=u[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,c){t=u[e]=[n,c]}));n.push(t[2]=o);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,s.nc&&h.setAttribute("nonce",s.nc),h.src=r(e);var f=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(d);var c=u[e];if(0!==c){if(c){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",f.name="ChunkLoadError",f.type=t,f.request=a,c[1](f)}u[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},s.m=e,s.c=t,s.d=function(e,n,c){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)s.d(c,t,function(n){return e[n]}.bind(null,t));return c},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="https://cdn.jx3box.com/static/dashboard/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var d=h;o.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("7ea5")},2433:function(e,n,c){},3131:function(e,n,c){"use strict";c("f92e")},4435:function(e,n,c){"use strict";c("2433")},4678:function(e,n,c){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"64030","./ms-my.js":"64030","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var n=u(e);return c(n)}function u(e){if(!c.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=u,e.exports=a,a.id="4678"},"7cb7":function(e,n,c){var t={"./bilibili.svg":"175f","./douyu.svg":"b119","./github.svg":"bffd","./huya.svg":"046a","./msg.svg":"aa9d","./weibo.svg":"50b5"};function a(e){var n=u(e);return c(n)}function u(e){if(!c.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=u,e.exports=a,a.id="7cb7"},"7ea5":function(e,n,c){"use strict";c.r(n);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("2b0e"),a=c("4eb5"),u=c.n(a),o=c("5c96"),r=c.n(o),s=(c("0fae"),c("16e5")),i=c("6a69"),h=(c("6b30"),c("c5b4"),c("d3b7"),c("3ca3"),c("ddb0"),c("caad"),c("2532"),c("ac1f"),c("5319"),c("8c4f")),f=h["a"].prototype.push;h["a"].prototype.push=function(e){return f.call(this,e).catch((function(e){return e}))};var d=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-75413c9c")]).then(c.bind(null,"1e4b"))},l=function(){return c.e("chunk-57e1f300").then(c.bind(null,"33de"))},b=function(){return Promise.all([c.e("chunk-2d216214"),c.e("chunk-3c23a5aa"),c.e("chunk-47c2a392")]).then(c.bind(null,"b54a"))},m=function(){return c.e("chunk-c302ceca").then(c.bind(null,"d51a"))},p=function(){return c.e("chunk-7b0e1dbf").then(c.bind(null,"9df5"))},k=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-106c225c")]).then(c.bind(null,"9be6"))},j=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-5a045c8c")]).then(c.bind(null,"a83c"))},v=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-e6cd4ee8")]).then(c.bind(null,"3f95"))},g=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-35742a98")]).then(c.bind(null,"4039"))},y=function(){return c.e("chunk-1ed61999").then(c.bind(null,"ff9a"))},w=function(){return c.e("chunk-502e88a6").then(c.bind(null,"88bc"))},_=function(){return c.e("chunk-6137d34c").then(c.bind(null,"e963"))},x=function(){return c.e("chunk-646363a7").then(c.bind(null,"f516"))},z=function(){return c.e("chunk-5b502ff8").then(c.bind(null,"31dd"))},O=function(){return c.e("chunk-eadecafa").then(c.bind(null,"6d24"))},P=function(){return c.e("chunk-4c566f21").then(c.bind(null,"337f"))},M=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-db5bb51e")]).then(c.bind(null,"b3b1"))},C=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-a3c539ce")]).then(c.bind(null,"4208"))},L=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-736a354d")]).then(c.bind(null,"7cb6"))},T=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-92461cf8")]).then(c.bind(null,"ab43"))},E=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-f2820636")]).then(c.bind(null,"fe82"))},N=function(){return c.e("chunk-724cbf56").then(c.bind(null,"f121"))},S=function(){return c.e("chunk-231c721e").then(c.bind(null,"0fe0"))},D=function(){return c.e("chunk-19b0439c").then(c.bind(null,"e097"))},I=function(){return c.e("chunk-263938f7").then(c.bind(null,"c6bd"))},Y=function(){return c.e("chunk-1ecfef41").then(c.bind(null,"7984"))},A=function(){return c.e("chunk-3a0d1c25").then(c.bind(null,"b8fd"))},B=function(){return c.e("chunk-a485d79a").then(c.bind(null,"ed5e"))},H=function(){return c.e("chunk-561dab6a").then(c.bind(null,"2ede"))},U=function(){return c.e("chunk-5dbcfb7a").then(c.bind(null,"8435"))},$=function(){return c.e("chunk-6c3c8762").then(c.bind(null,"b286"))};t["default"].use(h["a"]);var q=[{name:"index",path:"/",component:d},{name:"msg",path:"/msg",component:l},{name:"letter",path:"/letter",component:b},{name:"fav",path:"/fav/:subtype?",component:m},{name:"purchases",path:"/purchases",component:p},{name:"frame",path:"/frame",component:k},{name:"theme",path:"/theme",component:j},{name:"emotion",path:"/emotion",component:v},{name:"honor",path:"/honor",component:g},{name:"mall",path:"/mall",component:A},{name:"orders",path:"/orders",component:y},{name:"packet",path:"/packet",component:w},{name:"boxcoin",path:"/boxcoin",component:_},{name:"cny",path:"/cny",component:z},{name:"points",path:"/points",component:x},{name:"tasks",path:"/tasks",component:O},{name:"card",path:"/card",component:P},{name:"profile",path:"/profile",component:M},{name:"avatar",path:"/avatar",component:C},{name:"pwd",path:"/pwd",component:L},{name:"notice",path:"/notice",component:T},{name:"connect",path:"/connect",component:E},{name:"config",path:"/config",component:N},{name:"cooperation",path:"/cooperation",component:D},{name:"privacy",path:"/privacy",component:S},{name:"filter",path:"/filter",component:H},{name:"address",path:"/address",component:Y},{name:"order-detail",path:"/mall-detail/:id",component:B},{name:"feedback",path:"/feedback",component:I,redirect:{name:"feedback_index"},children:[{name:"feedback_index",path:"/feedback",component:function(){return c.e("chunk-43e45d1a").then(c.bind(null,"39a2"))}},{name:"feedback_erase",path:"/feedback/erase",component:function(){return Promise.all([c.e("chunk-2d216214"),c.e("chunk-2a39734e")]).then(c.bind(null,"954e"))}},{name:"feedback_single",path:"/feedback/:id",component:function(){return Promise.all([c.e("chunk-2d216214"),c.e("chunk-3c23a5aa"),c.e("chunk-36eba120")]).then(c.bind(null,"b8d3"))}}]},{name:"invitation_creators",path:"/callback/invitation/creators",component:U},{name:"invitation_kith",path:"/callback/invitation/kith",component:$}],F=new h["a"]({routes:q,mode:"history",base:"/dashboard"});F.beforeEach((function(e,n,c){e.fullPath.includes("/#")&&c(e.fullPath.replace("/#","")),c()}));var J=F,V=c("2f62"),K=c("8e44");t["default"].use(V["a"]);var R={state:{userdata:"",client:location.href.includes("origin")?"origin":"std",isTeammate:!1},mutations:{setIsTeammate:function(e,n){e.isTeammate=n}},getters:{},actions:{getIsTeammate:function(e){var n=e.commit;Object(K["e"])().then((function(e){n("setIsTeammate",e.data.data)})).catch((function(e){console.log(e)}))}},modules:{}},G=new V["a"].Store(R),Q=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("Header"),n("Breadcrumb",{attrs:{name:"个人中心",slug:"dashboard",root:"/dashboard",crumbEnable:!0}},[n("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 341.3 341.3","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[n("path",{attrs:{d:"M136.6 137.2h67.1v67.1h-67.1zM36 36.5h67.1v67.1H36zM136.6 237.8h67.1v67.1h-67.1zM36 137.2h67.1v67.1H36zM36 237.8h67.1v67.1H36zM237.2 36.5h67.1v67.1h-67.1zM136.6 36.5h67.1v67.1h-67.1zM237.2 137.2h67.1v67.1h-67.1zM237.2 237.8h67.1v67.1h-67.1z"}})]),n("Info")],1),n("LeftSidebar",[n("Nav")],1),n("Main",{staticClass:"m-dashboard-container",attrs:{withoutRight:!0}},[n("router-view")],1)],1)},W=[],X=function(){var e=this,n=e._self._c;return n("div",{staticClass:"m-info"},[n("div",{staticClass:"u-stat"}),n("div",{staticClass:"u-home"},[n("a",{staticClass:"el-button el-button--default is-plain",attrs:{href:e.home}},[n("svg",{class:"u-home-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M256 152.96L79.894 288.469v181.549h141.507V336.973h75.175v133.045h135.531V288.469z"}}),n("path",{attrs:{d:"M439.482 183.132V90.307h-74.166v35.77L256 41.982 0 238.919l35.339 45.936L256 115.062l220.662 169.794L512 238.92z"}})]),e._v("个人主页")])])])},Z=[],ee=c("85e4"),ne=c("c9d2"),ce={name:"Info",props:[],data:function(){return{uid:ne["a"].getInfo().uid}},computed:{home:function(){return Object(ee["authorLink"])(this.uid)}},methods:{},mounted:function(){}},te=ce,ae=(c("b760"),c("2877")),ue=Object(ae["a"])(te,X,Z,!1,null,null,null),oe=ue.exports,re=(c("b0c0"),function(){var e=this,n=e._self._c;return n("nav",{staticClass:"m-nav"},[e._m(0),e._l(e.navList,(function(c){return n("div",{key:c.group_name},[n("h5",{staticClass:"u-title"},[e._v(e._s(c.group_name))]),n("div",{staticClass:"m-nav-group"},e._l(c.children,(function(c){return n("router-link",{key:c.path,class:e.isProfile(c.path)||e.isTheme(c.path)||e.isMall(c.path)||e.isMsg(c.path),attrs:{to:c.path}},[n("i",{class:c.icon}),n("span",[e._v(e._s(c.name))])])})),1)])}))],2)}),se=[function(){var e=this,n=e._self._c;return n("a",{staticClass:"m-nav-publish el-button el-button--primary",attrs:{href:"/publish",target:"_blank"}},[n("span",[e._v("前往创作中心")])])}],ie=c("65c2"),he=(c("2ca0"),function(e){return"/dashboard/"+e}),fe=c("c243"),de=["profile","avatar","pwd","connect","email","address"],le=["theme","frame","emotion","honor"],be=["mall","orders"],me=["msg","letter"],pe={name:"Nav",data:function(){return{feedback:ie["feedback"],navList:fe}},computed:{},methods:{catg_url:function(e){return he("#/".concat(e))},isProfile:function(e){return"/profile"===e&&de.includes(this.$route.name)?"on":""},isTheme:function(e){return"/frame"===e&&le.includes(this.$route.name)?"on":""},isMall:function(e){return"/mall"===e&&be.includes(this.$route.name)?"on":""},isMsg:function(e){return"/msg"===e&&me.includes(this.$route.name)?"on":""}},mounted:function(){}},ke=pe,je=(c("3131"),Object(ae["a"])(ke,re,se,!1,null,null,null)),ve=je.exports,ge=function(){"www.jx3box.com"!=location.hostname&&"origin.jx3box.com"!=location.hostname||ne["a"].isLogin()||(ne["a"].destroy(),ne["a"].toLogin())},ye={name:"dashboard",props:[],data:function(){return{}},methods:{},created:function(){ge()},components:{Info:oe,Nav:ve}},we=ye,_e=(c("4435"),Object(ae["a"])(we,Q,W,!1,null,null,null)),xe=_e.exports;t["default"].config.productionTip=!1,t["default"].use(u.a),t["default"].use(r.a),s["a"].install(t["default"]),t["default"].use(i["a"]),new t["default"]({router:J,store:G,render:function(e){return e(xe)}}).$mount("#app")},"8e44":function(e,n,c){"use strict";c.d(n,"d",(function(){return o})),c.d(n,"a",(function(){return s})),c.d(n,"b",(function(){return r})),c.d(n,"e",(function(){return i})),c.d(n,"c",(function(){return h})),c.d(n,"f",(function(){return f}));var t=c("41cb"),a=c("c1df"),u=c.n(a);function o(e){return Object(t["b"])({mute:!0}).get("/api/cms/user/medal/"+e)}function r(){return Object(t["b"])().get("/api/cms/user/my/info",{params:{__no_cache:1}})}function s(e){return Object(t["d"])().get("/api/my/assets/history",{params:{start:e||u()().format("YYYYMMDD"),end:u()().add(1,"day").format("YYYYMMDD")}})}function i(){return Object(t["b"])().get("/api/cms/account/teammate/check")}function h(){return Object(t["b"])().get("/api/cms/account/teammate")}function f(e){return Object(t["b"])().post("/api/cms/upload",e)}},b760:function(e,n,c){"use strict";c("b812")},b812:function(e,n,c){},c243:function(e){e.exports=JSON.parse('[{"group_name":"我的仓库","children":[{"path":"/msg","name":"我的消息","icon":"el-icon-bell"},{"path":"/fav","name":"收藏订阅","icon":"el-icon-star-off"},{"path":"/purchases","name":"付费资源","icon":"el-icon-shopping-cart-2"},{"path":"/frame","name":"主题装扮","icon":"el-icon-brush"}]},{"group_name":"权益中心","children":[{"path":"/boxcoin","name":"我的盒币","icon":"el-icon-coin"},{"path":"/cny","name":"我的金箔","icon":"el-icon-wallet"},{"path":"/points","name":"我的银铛","icon":"el-icon-sugar"},{"path":"/card","name":"我的卡密","icon":"el-icon-bank-card"}]},{"group_name":"账号中心","children":[{"path":"/profile","name":"资料设置","icon":"el-icon-user"},{"path":"/privacy","name":"隐私设置","icon":"el-icon-ship"},{"path":"/config","name":"全局设置","icon":"el-icon-setting"},{"path":"/cooperation","name":"签约作者","icon":"el-icon-reading"}]},{"group_name":"服务中心","children":[{"path":"/mall","name":"订单中心","icon":"el-icon-shopping-bag-1"},{"path":"/tasks","name":"任务中心","icon":"el-icon-coffee-cup"},{"path":"/feedback","name":"反馈中心","icon":"el-icon-phone-outline"}]}]')},f92e:function(e,n,c){}});
//# sourceMappingURL=index.11c12682.js.map