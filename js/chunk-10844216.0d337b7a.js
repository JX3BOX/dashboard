(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10844216"],{4791:function(t,a,e){},"4bdb":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("uc",{staticClass:"m-dashboard-frame m-dashboard-skin",attrs:{icon:"el-icon-magic-stick",title:"魔盒藏品","tab-list":t.tabList}},[a("div",{staticClass:"m-cert-list"},[a("el-row",{attrs:{gutter:32}},t._l(t.list,(function(i,c){return a("el-col",{key:c,attrs:{xs:24,sm:12,md:8,xl:6}},[a("a",{staticClass:"m-cert-item",class:{tt_item:i.team_certificate.sort_no>100},attrs:{href:t.getCertLink(i),target:"_blank"}},[i.team_certificate.sort_no>100?a("div",{staticClass:"u-img",style:{backgroundImage:"url(".concat(e("55b8"),")")}}):a("div",{staticClass:"u-img",style:{backgroundImage:"url(".concat(t.getImgPath(i.team_certificate.rank_id),")")}}),a("div",{staticClass:"m-info"},[a("div",{staticClass:"u-title"},[t._v(t._s(i.team_certificate.rank_name))]),a("div",{staticClass:"u-tip"},[t._v("团队："+t._s(i.team_certificate.team_name))]),a("div",{staticClass:"u-tip"},[t._v("服务器："+t._s(i.team_certificate.team_server))]),a("div",{staticClass:"u-tip"},[t._v("角色名："+t._s(i.role))]),a("div",{staticClass:"u-tip"},[t._v("获得时间："+t._s(i.team_certificate.awardtime))])]),i.team_certificate.sort_no>100?a("img",{staticClass:"u-icon",attrs:{src:t.showSchoolIcon(t.tianTuanCertificateCode[i.team_certificate.sort_no]),alt:""}}):a("img",{staticClass:"u-icon",attrs:{src:e("8bc2"),alt:""}})])])})),1),a("el-pagination",{staticClass:"m-cert-pages",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a}}})],1)])},c=[],n=(e("99af"),e("b547")),s=e("46c1"),r=e("41cb");function o(t){return Object(r["e"])().get("/api/team/team-certification-record/list",{params:t})}e("c9d2");var u=e("65c2"),l=e("6ba9"),d=e("85e4"),g={name:"treasure",components:{uc:n["a"]},props:[],data:function(){return{tabList:s["a"],page:1,per:12,total:0,list:[],tianTuanCertificateCode:l}},computed:{},methods:{showSchoolIcon:d["showSchoolIcon"],load:function(){var t=window.innerWidth;t<1920&&(this.per=10),this.getCertificateList()},getCertificateList:function(){var t=this;o({index:this.page,pageSize:this.per}).then((function(a){t.total=a.data.data.page.total,t.list=a.data.data.list}))},handleCurrentChange:function(t){this.page=t,this.getCertificateList()},goDetail:function(t){window.location.href=t},getImgPath:function(t){var a="";return a="design/certification/CertCover_jdt".concat(t<10?"0"+t:t,".png"),u["__cdn"]+a},getCertLink:function(t){return t.team_certificate.sort_no>100?"/author/".concat(t.user_id,"/groupCertificate/").concat(t.id):"/author/".concat(t.user_id,"/certificate/").concat(t.id)}},mounted:function(){this.load()}},p=g,f=(e("9b03"),e("2877")),m=Object(f["a"])(p,i,c,!1,null,null,null);a["default"]=m.exports},"55b8":function(t,a,e){t.exports=e.p+"img/tt.6351c163.png"},"6ba9":function(t){t.exports=JSON.parse('{"101":"天策","102":"万花","103":"纯阳","104":"七秀","105":"少林","106":"藏剑","107":"丐帮","108":"明教","109":"五毒","110":"唐门","118":"苍云","119":"长歌","120":"霸刀","121":"蓬莱","122":"凌雪","123":"衍天","124":"药宗","126":"刀宗","129":"万灵"}')},"8bc2":function(t,a,e){t.exports=e.p+"img/CI_icon.b2567711.svg"},"9b03":function(t,a,e){"use strict";e("4791")}}]);
//# sourceMappingURL=chunk-10844216.0d337b7a.js.map