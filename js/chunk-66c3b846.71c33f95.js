(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66c3b846"],{4200:function(t,a,r){"use strict";var e=r("8988"),i=r.n(e);i.a},"46e8":function(t,a,r){"use strict";r.d(a,"g",(function(){return n})),r.d(a,"c",(function(){return s})),r.d(a,"m",(function(){return c})),r.d(a,"o",(function(){return u})),r.d(a,"f",(function(){return o})),r.d(a,"l",(function(){return l})),r.d(a,"n",(function(){return d})),r.d(a,"i",(function(){return _})),r.d(a,"a",(function(){return b})),r.d(a,"b",(function(){return f})),r.d(a,"h",(function(){return h})),r.d(a,"k",(function(){return p})),r.d(a,"d",(function(){return g})),r.d(a,"e",(function(){return v})),r.d(a,"j",(function(){return q}));var e=r("2777"),i=r("64c7");function n(t){return e["a"].get(i["__server"]+"user/info",{params:{uid:t}})}function s(t){return e["a"].get(i["__server"]+"dashboard/nickname/check",{params:{name:t}})}function c(t){return e["a"].post(i["__server"]+"dashboard/nickname/update",{name:t})}function u(t){return e["a"].post(i["__server"]+"dashboard/profile/update",t)}function o(){return e["a"].get(i["__server"]+"user/profile").then((function(t){return t.data.data}))}function l(t){return e["a"].post(i["__server"]+"dashboard/avatar/update",t)}function d(t){return e["a"].post(i["__server"]+"dashboard/password/update",t)}function f(t){return e["a"].get(i["__server"]+"dashboard/email/check",{params:{uid:t}})}function b(t){return e["a"].get(i["__server"]+"account/has",{params:{user_login:t}})}function h(t){return e["a"].post(i["__server"]+"dashboard/email/bind",t)}function _(t){return e["a"].get(i["__server"]+"dashboard/email/verify",{params:{uid:t}})}function p(t){return e["a"].post(i["__server"]+"dashboard/oauth/unbind",t)}function g(t){return e["a"].post(i["__server"]+"dashboard/oauth/check",t)}function v(){return e["a"].get(i["__server"]+"dashboard/config")}function q(t){return e["a"].post(i["__server"]+"dashboard/config",t)}},8988:function(t,a,r){},fe82:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"m-dashboard m-dashboard-connect"},[r("el-card",{staticClass:"box-card"},[r("svg",{staticClass:"octicon octicon-mark-github v-align-middle",class:"u-github",attrs:{viewBox:"0 0 16 16","aria-hidden":"true","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})]),r("p",{staticClass:"u-status"},[t._v(t._s(t.github_status?t.github:"未绑定"))]),r("el-button",{staticClass:"u-button",attrs:{type:t.github_status?"danger":"primary"},on:{click:function(a){t.github_status?t.unbind("github"):t.bind("github")}}},[t._v(t._s(t.github_status?"解除绑定":"绑定"))])],1),r("el-card",{staticClass:"box-card"},[r("svg",{class:"u-qq",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[r("ellipse",{attrs:{transform:"rotate(-4.14 176.38 472.035) scale(1.00001)",fill:"#FA870A",cx:"176.4",cy:"472",rx:"89.4",ry:"39.5"}}),r("ellipse",{attrs:{transform:"rotate(-4.14 176.38 464.673) scale(1.00001)",fill:"#FFC305",cx:"176.4",cy:"464.7",rx:"89.4",ry:"39.5"}}),r("ellipse",{attrs:{transform:"rotate(-85.86 335.658 472.026) scale(1.00001)",fill:"#FA870A",cx:"335.7",cy:"472",rx:"39.5",ry:"89.4"}}),r("ellipse",{attrs:{transform:"rotate(-85.86 335.662 464.674) scale(1.00001)",fill:"#FFC305",cx:"335.7",cy:"464.7",rx:"39.5",ry:"89.4"}}),r("path",{attrs:{fill:"#373C41",d:"M473.9 326.4c-9.8-36.5-26.1-65.3-40.2-73.6-3.9-13.2-9.2-25.7-15.7-37.4 4.6-14 7.1-29.5 7.1-46.3C425.1 75.7 349.4 0 256 0S86.9 75.7 86.9 169.1c0 16.9 2.5 32.3 7.1 46.3-6.5 11.8-11.8 24.3-15.7 37.4-14.1 8.2-30.4 37.1-40.2 73.6-7.6 28.1-3.7 55.8.4 73.1 2.3 9.5 12.1 12.1 18.9 5.1 7.7-8 17.3-19.7 25.3-34.1 26.4 70.1 94.1 120 173.4 120s147-49.9 173.4-120c8 14.5 17.6 26.1 25.3 34.1 6.7 7.1 16.6 4.4 18.9-5.1 3.9-17.3 7.8-45 .2-73.1z"}}),r("path",{attrs:{fill:"#F3F3F3",d:"M342.2 197.4H169.8c-33 29.3-54.2 75-54.2 126.3 0 88.4 62.9 160 140.4 160 77.6 0 140.4-71.7 140.4-160 0-51.3-21.2-97-54.2-126.3z"}}),r("path",{attrs:{fill:"#FFC305",d:"M362.4 204.1c0-13.6-47.6-24.6-106.4-24.6s-106.4 11-106.4 24.6c0 7.4 14.2 14.1 36.7 18.6 4.3 15.9 33.9 37.5 69.7 37.5s65.4-21.6 69.7-37.5c22.5-4.5 36.7-11.2 36.7-18.6z"}}),r("ellipse",{attrs:{fill:"#FFF",cx:"297",cy:"128",rx:"30",ry:"44.1"}}),r("path",{attrs:{fill:"#373C41",d:"M288.3 142.9c-.5-2.1-.8-4.5-.8-7.1 0-10.6 5-18 9.6-18 4.5 0 9.6 7.4 9.6 18 0 2.6-.3 5-.8 7.1h7.6c.4-2.2.7-4.6.7-7.1 0-14.3-7.4-25.4-16.9-25.4s-16.9 11.2-16.9 25.4c0 2.5.2 4.9.7 7.1h7.2z"}}),r("ellipse",{attrs:{fill:"#FFF",cx:"215",cy:"128",rx:"30",ry:"44.1"}}),r("path",{attrs:{fill:"#373C41",d:"M215 106.3c-7.3 0-13.2 9.7-13.2 21.7s5.9 21.7 13.2 21.7c7.3 0 13.2-9.7 13.2-21.7s-5.9-21.7-13.2-21.7zm2.1 26.6c-2.9 0-5.3-3.3-5.3-7.4s2.4-7.4 5.3-7.4 5.3 3.3 5.3 7.4c0 4.1-2.4 7.4-5.3 7.4z"}}),r("path",{attrs:{fill:"#FF3C3C",d:"M438.6 250.2l-13.9-48.6c-89.8 98.7-245.1 98.7-334.9 0l-16.4 46.3c20.2 18.7 42.5 33.8 66.2 45.2v76.8l63.5 14.8v-70.2c81.8 16.5 169.8-4.9 235.5-64.3z"}})]),r("p",{staticClass:"u-status"},[t._v(t._s(t.qq_status?t.qq:"未绑定"))]),r("el-button",{staticClass:"u-button",attrs:{type:t.qq_status?"danger":"primary"},on:{click:function(a){t.qq_status?t.unbind("qq"):t.bind("qq")}}},[t._v(t._s(t.qq_status?"解除绑定":"绑定"))])],1),r("el-card",{staticClass:"box-card"},[r("svg",{class:"u-weibo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[r("path",{attrs:{d:"M403.51 247.992c12.189-23.721 13.499-45.899 3.546-63.137-10.316-17.868-31.605-28.033-59.944-28.622-20.81-.427-44.439 4.311-68.131 13.528 8.166-27.851 5.532-49.961-7.876-63.369-16.113-16.113-44.899-16.666-81.056-1.558-33.715 14.088-70.764 40.33-104.325 73.889C35.742 228.706 2.534 286.681.945 326.653A75.672 75.672 0 000 338.441c0 35.793 25.09 69.017 70.648 93.547 43.858 23.617 101.979 36.622 163.656 36.622s119.798-13.005 163.656-36.622c45.558-24.53 70.648-57.754 70.648-93.547.001-34.374-23.032-66.257-65.098-90.449z",fill:"#ea533b"}}),r("path",{attrs:{d:"M260.338 459.932c-61.677 0-119.798-13.005-163.656-36.622-45.558-24.53-70.648-57.754-70.648-93.547 0-3.863.318-7.825.945-11.787 1.589-39.973 34.797-97.947 84.78-147.93 33.227-33.226 69.87-59.27 103.314-73.458-7.854 1.823-16.218 4.566-25.023 8.245-33.715 14.088-70.764 40.33-104.325 73.889C35.742 228.707 2.534 286.682.945 326.654A75.65 75.65 0 000 338.441c0 35.793 25.09 69.017 70.648 93.547 43.858 23.617 101.979 36.622 163.656 36.622 48.616 0 95.016-8.086 133.969-23.074-32.921 9.405-69.744 14.396-107.935 14.396z",fill:"#d93c1c"}}),r("path",{attrs:{d:"M364.19 312.032c-2.568-29.565-22.081-55.61-54.944-73.338-31.681-17.091-72.302-24.49-114.382-20.835-42.079 3.656-80.818 17.949-109.076 40.247-29.314 23.131-44.045 52.151-41.476 81.715 2.569 29.565 22.082 55.61 54.946 73.338 26.389 14.236 58.976 21.748 93.447 21.747 6.913 0 13.905-.302 20.934-.913 42.079-3.654 80.817-17.948 109.075-40.246 29.315-23.131 44.044-52.151 41.476-81.715z",fill:"#fff"}}),r("path",{attrs:{d:"M230.36 425.319a241.87 241.87 0 01-20.934.913c-34.471.001-67.059-7.511-93.447-21.747-32.863-17.729-52.378-43.774-54.946-73.338-2.569-29.564 12.161-58.584 41.476-81.715 5.799-4.575 12.046-8.808 18.665-12.687-12.993 5.932-24.911 13.095-35.388 21.361-29.314 23.131-44.045 52.151-41.476 81.715 2.569 29.565 22.082 55.61 54.946 73.338 26.389 14.236 58.976 21.748 93.447 21.747 6.913 0 13.905-.302 20.934-.913 33.445-2.905 64.771-12.535 90.41-27.559-22.053 10.069-47.206 16.585-73.687 18.885z",fill:"#e5e5e5"}}),r("path",{attrs:{d:"M286.65 312.533c-9.507-39.544-55.55-62.508-102.638-51.189-47.088 11.32-77.661 52.703-68.156 92.249 4.682 19.473 18.156 35.492 37.943 45.105 12.283 5.967 26.102 9.003 40.355 9.003 8.042 0 16.221-.967 24.339-2.918 47.089-11.321 77.664-52.703 68.157-92.25z",fill:"#333"}}),r("circle",{attrs:{cx:"177.898",cy:"351.457",r:"30.373",fill:"#fff"}}),r("g",{attrs:{fill:"#ffa929"}},[r("path",{attrs:{d:"M373.152 117.153c-7.189 0-13.017 5.828-13.017 13.017 0 7.189 5.828 13.017 13.017 13.017 26.318 0 47.729 21.411 47.729 47.729 0 7.189 5.828 13.017 13.017 13.017s13.017-5.828 13.017-13.017c-.001-40.673-33.091-73.763-73.763-73.763z"}}),r("path",{attrs:{d:"M364.475 43.39c-3.261 0-6.564.108-9.817.322-9.564.629-16.808 8.893-16.18 18.458.629 9.564 8.9 16.804 18.458 16.18a115.6 115.6 0 017.539-.248c62.206 0 112.813 50.608 112.813 112.813 0 7.606-.759 15.204-2.257 22.581-1.396 6.875 1.691 14.209 7.576 18.025 5.99 3.884 14.111 3.587 19.829-.675 3.388-2.525 5.774-6.307 6.614-10.445a148.538 148.538 0 002.95-29.487c0-81.343-66.18-147.524-147.525-147.524z"}})]),r("circle",{attrs:{cx:"234.305",cy:"321.085",r:"17.356",fill:"#fff"}})]),r("p",{staticClass:"u-status"},[t._v(t._s(t.weibo_status?t.weibo:"未绑定"))]),r("el-button",{staticClass:"u-button",attrs:{type:t.weibo_status?"danger":"primary"},on:{click:function(a){t.weibo_status?t.unbind("weibo"):t.bind("weibo")}}},[t._v(t._s(t.weibo_status?"解除绑定":"绑定"))])],1)],1)},i=[],n=(r("99af"),r("ee8f")),s=r("64c7"),c={github:{client_id:"5fbf7a66cd7d3d0f5153",authorize_uri:"https://github.com/login/oauth/authorize",callback:"".concat(s["__server"],"oauth/github/callback")},qq:{client_id:"101870778",authorize_uri:"https://graph.qq.com/oauth2.0/authorize",callback:"".concat(s["__server"],"oauth/qq/callback")},weibo:{client_id:"4076650110",authorize_uri:"https://api.weibo.com/oauth2/authorize",callback:"".concat(s["__server"],"oauth/weibo/callback")}},u=c,o=r("46e8"),l={name:"connect",props:[],data:function(){return{uid:n["User"].getInfo().uid,github:"",qq:"",weibo:"",uuid:n["User"].getUUID()||"jx3box"}},computed:{github_status:function(){return!!this.github},qq_status:function(){return!!this.qq},weibo_status:function(){return!!this.weibo},github_url:function(){return"".concat(u.github.authorize_uri,"?client_id=").concat(u.github.client_id,"&redirect_uri=").concat(u.github.callback)},qq_url:function(){return"".concat(u.qq.authorize_uri,"?client_id=").concat(u.qq.client_id,"&redirect_uri=").concat(u.qq.callback,"&response_type=code&scope=get_user_info&state=").concat(this.uuid)},weibo_url:function(){return"".concat(u.weibo.authorize_uri,"?client_id=").concat(u.weibo.client_id,"&response_type=code&redirect_uri=").concat(u.weibo.callback)}},methods:{bind:function(t){location.href=this[t+"_url"]},unbind:function(t){var a=this;Object(o["k"])({uid:this.uid,type:t}).then((function(r){a[t]=null,a.$message({message:"解绑成功",type:"success"})}))}},mounted:function(){var t=this;this.uid=n["User"].getInfo().uid,Object(o["d"])({uid:this.uid}).then((function(a){t.github=a.data.data.github||"",t.qq=a.data.data.qq||"",t.weibo=a.data.data.weibo||""}))}},d=l,f=(r("4200"),r("2877")),b=Object(f["a"])(d,e,i,!1,null,null,null);a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-66c3b846.71c33f95.js.map