(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5127b7"],{"643b":function(e,m,a){"use strict";a.r(m);var d=function(){var e=this,m=e.$createElement,a=e._self._c||m;return a("div",{staticClass:"m-publish-fb"},[e.loaded?a("boilerplate",{attrs:{name:e.name,type:e.type,post:e.post,meta:e.meta,extend:e.extend,infoEnable:!0,contentEnable:!0,markdownEnable:!1,excerptEnable:!1,tagEnable:!1,notifyEnable:!0,bannerEnable:!0},on:{publish:e.toPublish,draft:e.toDraft}},[e.ready&&!e.loading?[a("el-form-item",{attrs:{label:"原创"}},[a("el-switch",{attrs:{"active-color":"#13ce66"},model:{value:e.post.original,callback:function(m){e.$set(e.post,"original",m)},expression:"post.original"}})],1),e.zlp_list?a("el-form-item",{attrs:{label:"资料片"}},e._l(e.zlp_list,(function(m,d){return a("el-radio",{key:d,attrs:{label:m,border:""},on:{change:function(a){return e.optionChange(m)}},model:{value:e.post.post_meta.fb_zlp,callback:function(m){e.$set(e.post.post_meta,"fb_zlp",m)},expression:"post.post_meta.fb_zlp"}},[e._v(e._s(m))])})),1):e._e(),e.fb_list?a("el-form-item",{attrs:{label:"副本名称"}},e._l(e.fb_list,(function(m,d){return a("el-radio",{key:d,staticClass:"u-fb-thumbnail",attrs:{label:d},on:{change:function(m){return e.changeSubtype(d)}},model:{value:e.post.post_meta.fb_name,callback:function(m){e.$set(e.post.post_meta,"fb_name",m)},expression:"post.post_meta.fb_name"}},[a("img",{attrs:{src:e._f("thumbnail")(m.icon,m.icon),alt:d}}),a("span",[e._v(e._s(d))])])})),1):e._e(),e.boss_list?a("el-form-item",{attrs:{label:"首领名称"}},[a("el-checkbox-group",{model:{value:e.post.post_meta.fb_boss,callback:function(m){e.$set(e.post.post_meta,"fb_boss",m)},expression:"post.post_meta.fb_boss"}},e._l(e.boss_list,(function(m,d){return a("el-checkbox-button",{key:d,attrs:{label:m}},[e._v(e._s(m))])})),1)],1):e._e(),e.level_list?a("el-form-item",{attrs:{label:"难度模式"}},[a("el-checkbox-group",{model:{value:e.post.post_meta.fb_level,callback:function(m){e.$set(e.post.post_meta,"fb_level",m)},expression:"post.post_meta.fb_level"}},e._l(e.level_list,(function(e){return a("el-checkbox",{key:e.mode+e.map_id,attrs:{label:e.mode}})})),1)],1):e._e()]:e._e()],2):e._e()],1)},i=[],_=(a("d81d"),a("b64b"),a("c202")),o=a("64c7"),n=a("ffe2"),p=a("2ef0"),s=a.n(p),t=a("7c7e"),l="奉天证道",b="达摩洞",v={fb_zlp:l,fb_name:b,fb_boss:[],fb_level:[]},g={name:"fb",props:[],data:function(){return{type:"fb",name:"副本攻略",loading:!0,loaded:!1,options:{map:n},meta:{},post:{ID:"",post_subtype:b,post_title:"",post_content:"",post_meta:v,post_excerpt:"",post_mode:"tinymce",post_banner:"",post_status:"",original:0},extend:{feedEnable:!1,followEnable:!1,tencentEnable:!1,weiboEnable:!1,tuilanEnable:!1}}},computed:{ready:function(){return Object.keys(this.options.map).length},zlp_list:function(){return Object.keys(this.options.map)},fb_list:function(){var e=this.options.map[this.post.post_meta.fb_zlp]||this.options.map[l];return s.a.get(e,"dungeon")},boss_list:function(){return s.a.get(this.fb_list[this.post.post_meta.fb_name],"boss")},level_list:function(){return s.a.get(this.fb_list[this.post.post_meta.fb_name],"maps")}},methods:{toPublish:function(){this.doPublish(this.$store.state,this)},toDraft:function(){this.doDraft(this.$store.state,this)},init:function(){return this.doLoad(this)},optionChange:function(e){var m=Object.keys(this.options.map[e]["dungeon"])[0];this.post.post_meta.fb_name=m,this.post.post_meta.fb_boss=[],this.post.post_meta.fb_level=[]},changeSubtype:function(e){this.$store.commit("changeSubtype",e),this.post.post_meta.fb_boss=[],this.post.post_meta.fb_level=[]}},mounted:function(){var e=this;this.init().then((function(){Object(t["a"])(e.post.post_meta)&&(e.post.post_meta=v),e.loading=!1,console.log("Init Post:",e.post)}))},filters:{thumbnail:function(e){return o["__imgPath"]+e+"?v="+Date.now()}},components:{boilerplate:_["a"]}},c=g,u=(a("9315"),a("2877")),f=Object(u["a"])(c,d,i,!1,null,null,null);m["default"]=f.exports},"7c7e":function(e,m,a){"use strict";a("b64b"),a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}m["a"]=function(e){return!e||(!(!Array.isArray(e)||e.length)||"object"==d(e)&&!Object.keys(e).length)}},9315:function(e,m,a){"use strict";var d=a("df32"),i=a.n(d);i.a},b64b:function(e,m,a){var d=a("23e7"),i=a("7b0b"),_=a("df75"),o=a("d039"),n=o((function(){_(1)}));d({target:"Object",stat:!0,forced:n},{keys:function(e){return _(i(e))}})},d81d:function(e,m,a){"use strict";var d=a("23e7"),i=a("b727").map,_=a("1dde"),o=a("ae40"),n=_("map"),p=o("map");d({target:"Array",proto:!0,forced:!n||!p},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},df32:function(e,m,a){},ffe2:function(e){e.exports=JSON.parse('{"奉天证道":{"name":"奉天证道","level":"110","dungeon":{"达摩洞":{"name":"达摩洞","maps":[{"map_id":"482","mode":"10人普通"},{"map_id":"483","mode":"25人普通"},{"map_id":"484","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/482.png","boss":["余晖","宓桃","武雪散","猿飞","哑头陀","岳琳、岳琅"]},"剑冢惊变":{"name":"剑冢惊变","maps":[{"map_id":"468","mode":"5人普通"},{"map_id":"469","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/468.png","boss":["陈骇","雾影千斩","陈徽"]},"梦入集真岛":{"name":"梦入集真岛","maps":[{"map_id":"476","mode":"5人普通"},{"map_id":"481","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/476.png","boss":["秽鬼","观勒和尚","天空"]},"梧桐山庄":{"name":"梧桐山庄","maps":[{"map_id":"477","mode":"5人普通"},{"map_id":"478","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/477.png","boss":["雀卿","阮梅","罗刀"]},"罗汉门":{"name":"罗汉门","maps":[{"map_id":"479","mode":"5人普通"},{"map_id":"480","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/479.png","boss":["宓果","刘细","郝大雪"]},"月落三星":{"name":"月落三星","maps":[{"map_id":"489","mode":"5人普通"},{"map_id":"490","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/489.png","boss":["苏凤楼","韩敬青","藤原夕夏"]}}},"世外蓬莱":{"name":"世外蓬莱","level":"100","dungeon":{"范阳夜变":{"devide_level":"100","devide_name":"世外蓬莱","name":"范阳夜变","maps":[{"map_id":"452","mode":"10人普通"},{"map_id":"453","mode":"25人普通"},{"map_id":"454","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/fanyangyebian.png","boss":["周贽","厌夜","迟驻","白某","安小逢"]},"敖龙岛":{"devide_level":"100","devide_name":"世外蓬莱","name":"敖龙岛","maps":[{"map_id":"426","mode":"10人普通"},{"map_id":"427","mode":"25人普通"},{"map_id":"428","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/aolongdao.png","boss":["铁黎","陈徽","藤原武裔","源思弦","驺吾","方有崖"]},"玄鹤别院":{"devide_level":"100","devide_name":"世外蓬莱","name":"玄鹤别院","maps":[{"map_id":"431","mode":"5人普通"},{"map_id":"432","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/xuanhebieyuan.jpg","boss":["秦高相","慧枯","江潮"]},"冰火岛·荒血路":{"devide_level":"100","devide_name":"世外蓬莱","name":"冰火岛·荒血路","maps":[{"map_id":"341","mode":"10人普通"},{"map_id":"354","mode":"25人英雄"},{"map_id":"360","mode":"25人挑战"},{"map_id":"361","mode":"试炼秘境"}],"icon":"image/fb_map_thumbnail/341.jpg","boss":["康疑","铂尔","罗纳真","没藏呼月与拓跋思羽","拿云"]},"冰火岛·青莲狱":{"devide_level":"100","devide_name":"世外蓬莱","name":"冰火岛·青莲狱","maps":[{"map_id":"347","mode":"10人普通"},{"map_id":"348","mode":"25人英雄"},{"map_id":"349","mode":"25人挑战"},{"map_id":"350","mode":"试炼秘境"}],"icon":"image/fb_map_thumbnail/347.jpg","boss":["伊玛目"]},"尘归海·巨冥湾":{"devide_level":"100","devide_name":"世外蓬莱","name":"尘归海·巨冥湾","maps":[{"map_id":"364","mode":"10人普通"},{"map_id":"365","mode":"25人英雄"},{"map_id":"366","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/364.jpg","boss":["孙楚珊","虎翼突袭","邢不僵","鬼首","无面鬼","晏厄、晏灾"]},"尘归海·饕餮洞":{"devide_level":"100","devide_name":"世外蓬莱","name":"尘归海·饕餮洞","maps":[{"map_id":"368","mode":"10人普通"},{"map_id":"369","mode":"25人英雄"},{"map_id":"370","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/368.jpg","boss":["黄穆"]},"泥兰洞天":{"devide_level":"100","devide_name":"世外蓬莱","name":"泥兰洞天","maps":[{"map_id":"337","mode":"5人普通"},{"map_id":"356","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/337.jpg","boss":["康成辩","源明信","康杖石"]},"大衍盘丝洞":{"devide_level":"100","devide_name":"世外蓬莱","name":"大衍盘丝洞","maps":[{"map_id":"339","mode":"5人普通"},{"map_id":"355","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/339.jpg","boss":["连玉良","文闰一","尹无咎"]},"镜泊湖":{"devide_level":"100","devide_name":"世外蓬莱","name":"镜泊湖","maps":[{"map_id":"340","mode":"5人普通"},{"map_id":"357","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/340.jpg","boss":["寒鸦三女","翁幼之","端木珩"]},"九辩馆":{"devide_level":"100","devide_name":"世外蓬莱","name":"九辩馆","maps":[{"map_id":"342","mode":"5人普通"},{"map_id":"359","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/342.jpg","boss":["杀末邪","月笼草","蒹葭"]},"迷渊岛":{"devide_level":"100","devide_name":"世外蓬莱","name":"迷渊岛","maps":[{"map_id":"343","mode":"5人英雄"},{"map_id":"358","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/343.jpg","boss":["姜仇封","魏宗明","宫傲"]},"周天屿":{"devide_level":"100","devide_name":"世外蓬莱","name":"周天屿","maps":[{"map_id":"406","mode":"5人英雄"},{"map_id":"407","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/406.jpg","boss":["曹庆司","白沫","悉达罗摩"]}}},"剑胆琴心":{"name":"剑胆琴心","level":"95","dungeon":{"狼牙堡·狼神殿":{"devide_level":"95","devide_name":"剑胆琴心","name":"狼牙堡·狼神殿","maps":[{"map_id":"299","mode":"10人普通"},{"map_id":"301","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/299.jpg","boss":["靳空明","乌索","史思明"]},"狼牙堡·战兽山":{"devide_level":"95","devide_name":"剑胆琴心","name":"狼牙堡·战兽山","maps":[{"map_id":"283","mode":"10人普通"},{"map_id":"286","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/283.jpg","boss":["报九枫","无支祁","也漠河","乌灵风","唐书雁"]},"狼牙堡·燕然峰":{"devide_level":"95","devide_name":"剑胆琴心","name":"狼牙堡·燕然峰","maps":[{"map_id":"284","mode":"10人普通"},{"map_id":"287","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/284.jpg","boss":["司晴","李令霞","石斑"]},"狼牙堡·辉天堑":{"devide_level":"95","devide_name":"剑胆琴心","name":"狼牙堡·辉天堑","maps":[{"map_id":"298","mode":"10人普通"},{"map_id":"300","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/298.jpg","boss":["乌夜啼","月华","铁狱机关室","百慕玲与庄愈华","月泉淮"]},"银雾湖":{"devide_level":"95","devide_name":"剑胆琴心","name":"银雾湖","maps":[{"map_id":"285","mode":"5人英雄"},{"map_id":"290","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/285.jpg","boss":["哈桑","银鼍龙王","容夏与纳罗"]},"稻香秘事":{"devide_level":"95","devide_name":"剑胆琴心","name":"稻香秘事","maps":[{"map_id":"291","mode":"5人普通"},{"map_id":"292","mode":"5人英雄"},{"map_id":"295","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/291.jpg","boss":["董虎","董龙","无名"]},"风雷刀谷·锻刀厅":{"devide_level":"95","devide_name":"剑胆琴心","name":"风雷刀谷·锻刀厅","maps":[{"map_id":"263","mode":"10人普通"},{"map_id":"271","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/263.jpg","boss":["史朝英","柳愚","柳哲","柳时清","解语"]},"风雷刀谷·千雷殿":{"devide_level":"95","devide_name":"剑胆琴心","name":"风雷刀谷·千雷殿","maps":[{"map_id":"264","mode":"10人普通"},{"map_id":"270","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/264.jpg","boss":["伊玛目","柳秀岳","柳鸾旗"]},"刀轮海厅":{"devide_level":"95","devide_name":"剑胆琴心","name":"刀轮海厅","maps":[{"map_id":"262","mode":"5人英雄"},{"map_id":"275","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/262.jpg","boss":["赵淮、令狐伤与八重妙法村正","柳雪乾与韩梨","柳贯角之影"]},"上阳宫·观风殿":{"devide_level":"95","devide_name":"剑胆琴心","name":"上阳宫·观风殿","maps":[{"map_id":"240","mode":"10人普通"},{"map_id":"248","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/240.jpg","boss":["沈眠风","柳绯君","月华","曹炎烈","独孤先生"]},"上阳宫·双曜亭":{"devide_level":"95","devide_name":"剑胆琴心","name":"上阳宫·双曜亭","maps":[{"map_id":"241","mode":"10人普通"},{"map_id":"249","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/241.jpg","boss":["黑齿元佑","哥舒翰","安庆绪"]},"夕颜阁":{"devide_level":"95","devide_name":"剑胆琴心","name":"夕颜阁","maps":[{"map_id":"256","mode":"5人普通"},{"map_id":"257","mode":"5人英雄"},{"map_id":"260","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/256.jpg","boss":["柳夕的心魔","柳哲","柳浮云"]},"永王行宫·仙侣庭园":{"devide_level":"95","devide_name":"剑胆琴心","name":"永王行宫·仙侣庭园","maps":[{"map_id":"220","mode":"10人普通"},{"map_id":"231","mode":"25人英雄"},{"map_id":"234","mode":"10人挑战"},{"map_id":"236","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/220.jpg","boss":["屈焰阳","森九岚","李玚","仲虚念","李璘与苏十三娘"]},"永王行宫·花月别院":{"devide_level":"95","devide_name":"剑胆琴心","name":"永王行宫·花月别院","maps":[{"map_id":"221","mode":"10人普通"},{"map_id":"230","mode":"25人英雄"},{"map_id":"235","mode":"10人挑战"},{"map_id":"237","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/221.jpg","boss":["韩非池","莫雨","李白"]},"天泣林":{"devide_level":"95","devide_name":"剑胆琴心","name":"天泣林","maps":[{"map_id":"203","mode":"5人普通"},{"map_id":"224","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/203.jpg","boss":["看舞","崖剑","高力士"]},"阴山圣泉":{"devide_level":"95","devide_name":"剑胆琴心","name":"阴山圣泉","maps":[{"map_id":"204","mode":"5人普通"},{"map_id":"227","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/204.jpg","boss":["秦秀","莫蕾","植尸将"]},"梵空禅院":{"devide_level":"95","devide_name":"剑胆琴心","name":"梵空禅院","maps":[{"map_id":"209","mode":"5人普通"},{"map_id":"228","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/209.jpg","boss":["悟影","双雄剑意","幻影剑圣"]},"引仙水榭":{"devide_level":"95","devide_name":"剑胆琴心","name":"引仙水榭","maps":[{"map_id":"218","mode":"5人普通"},{"map_id":"229","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/218.jpg","boss":["平花秀夜","剑姬阵","李倓与李复"]},"微山书院":{"devide_level":"95","devide_name":"剑胆琴心","name":"微山书院","maps":[{"map_id":"219","mode":"5人普通"},{"map_id":"225","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/219.jpg","boss":["凤息颜","赵宫商","月侍弓"]},"白帝水宫":{"devide_level":"95","devide_name":"剑胆琴心","name":"白帝水宫","maps":[{"map_id":"242","mode":"5人英雄"},{"map_id":"244","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/242.jpg","boss":["慕容绿珠","宫天蝉","雨卓承"]}}},"安史之乱":{"name":"安史之乱","level":"90","dungeon":{"战宝军械库":{"devide_level":"90","devide_name":"安史之乱","name":"战宝军械库","maps":[{"map_id":"160","mode":"10人普通"},{"map_id":"171","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/160.jpg","boss":["闻人彦范","岳承志","卓力格图","澹台枯火","萧沙、韦柔丝"]},"大明宫":{"devide_level":"90","devide_name":"安史之乱","name":"大明宫","maps":[{"map_id":"164","mode":"10人普通"},{"map_id":"165","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/164.jpg","boss":["何莘涯","耶律燕、独孤问俗","六道傀儡","剑圣","无名","伊玛目","安禄山"]},"血战天策":{"devide_level":"90","devide_name":"安史之乱","name":"血战天策","maps":[{"map_id":"175","mode":"10人普通"},{"map_id":"176","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/175.jpg","boss":["席庶云","关卡：固守天策府","曹炎烈","关卡：保护青骓牧场","沙叱博","阿史那从礼","黑齿元佑","苏曼莎","令狐伤"]},"风雪稻香村":{"devide_level":"90","devide_name":"安史之乱","name":"风雪稻香村","maps":[{"map_id":"177","mode":"10人普通"},{"map_id":"178","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/177.jpg","boss":["地字一号","史朝义","黑鹰","无名"]},"秦皇陵":{"devide_level":"90","devide_name":"安史之乱","name":"秦皇陵","maps":[{"map_id":"182","mode":"10人普通"},{"map_id":"183","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/182.jpg","boss":["王翦","石麒麟","探雪","令狐伤","安禄山"]},"太原之战·夜守孤城":{"devide_level":"90","devide_name":"安史之乱","name":"太原之战·夜守孤城","maps":[{"map_id":"191","mode":"10人普通"},{"map_id":"198","mode":"25人英雄"},{"map_id":"205","mode":"25人挑战"},{"map_id":"211","mode":"10人挑战"}],"icon":"image/fb_map_thumbnail/191.jpg","boss":["田布戈","朝曦门防御战","火龙摧城"]},"太原之战·逐虎驱狼":{"devide_level":"90","devide_name":"安史之乱","name":"太原之战·逐虎驱狼","maps":[{"map_id":"192","mode":"10人普通"},{"map_id":"199","mode":"25人英雄"},{"map_id":"206","mode":"25人挑战"},{"map_id":"212","mode":"10人挑战"}],"icon":"image/fb_map_thumbnail/192.jpg","boss":["靺鞨三骑将","安雨","白陶","史思明"]},"一线天":{"devide_level":"90","devide_name":"安史之乱","name":"一线天","maps":[{"map_id":"157","mode":"5人英雄"},{"map_id":"167","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/157.jpg","boss":["苏清","宁毅","列缺、霹雳"]},"华清宫":{"devide_level":"90","devide_name":"安史之乱","name":"华清宫","maps":[{"map_id":"161","mode":"5人普通"},{"map_id":"162","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/161.jpg","boss":["尹素颜","阿依努尔","葛尔东赞"]},"华清宫回忆录":{"devide_level":"90","devide_name":"安史之乱","name":"华清宫回忆录","maps":[{"map_id":"163","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/163.jpg","boss":["英怀珠","高力士","安禄山"]},"流离岛":{"devide_level":"90","devide_name":"安史之乱","name":"流离岛","maps":[{"map_id":"169","mode":"5人普通"},{"map_id":"170","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/169.jpg","boss":["詹素","第五雍容","詹毅"]},"直城门":{"devide_level":"90","devide_name":"安史之乱","name":"直城门","maps":[{"map_id":"179","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/179.jpg","boss":["牛介平","安守忠","阿史那承庆","恶狼"]},"墨家秘殿":{"devide_level":"90","devide_name":"安史之乱","name":"墨家秘殿","maps":[{"map_id":"184","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/184.jpg","boss":["踏霆车","兵俑阵","白起"]},"春明门":{"devide_level":"90","devide_name":"安史之乱","name":"春明门","maps":[{"map_id":"187","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/187.jpg","boss":["崔乾佑","安守忠","严庄"]},"雁门关之役":{"devide_level":"90","devide_name":"安史之乱","name":"雁门关之役","maps":[{"map_id":"195","mode":"5人英雄"},{"map_id":"196","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/195.jpg","boss":["中田海","拓跋离","独孤问俗"]},"璨翠海厅":{"devide_level":"90","devide_name":"安史之乱","name":"璨翠海厅","maps":[{"map_id":"200","mode":"5人英雄"},{"map_id":"222","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/200.jpg","boss":["宇文画","饕餮厅关卡","血仆·宫溟"]}}},"巴蜀风云":{"name":"巴蜀风云","level":"80","dungeon":{"荻花圣殿":{"devide_level":"80","devide_name":"巴蜀风云","name":"荻花圣殿","maps":[{"map_id":"68","mode":"10人普通"},{"map_id":"69","mode":"10人英雄"},{"map_id":"70","mode":"25人普通"},{"map_id":"72","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/68.jpg","boss":["牡丹","塔洛马蒂、姬无双","慕容追风","蛮熊之力","贪狼之牙","飞猿之影","卫栖梧、阿里曼执法长老","阿萨辛","卓婉清","沙利亚"]},"龙渊泽":{"devide_level":"80","devide_name":"巴蜀风云","name":"龙渊泽","maps":[{"map_id":"109","mode":"10人普通"},{"map_id":"117","mode":"25人英雄"},{"map_id":"118","mode":"25人普通"},{"map_id":"119","mode":"10人英雄"}],"icon":"image/fb_map_thumbnail/109.jpg","boss":["慕容野狐、殷青丝","里赤梅、苏贝德哈"]},"荻花洞窟":{"devide_level":"80","devide_name":"巴蜀风云","name":"荻花洞窟","maps":[{"map_id":"120","mode":"10人普通"},{"map_id":"130","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/120.jpg","boss":["四头蛇迪多拉"]},"神剑冢":{"devide_level":"80","devide_name":"巴蜀风云","name":"神剑冢","maps":[{"map_id":"126","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/126.jpg","boss":["叶英"]},"持国天王回忆录":{"devide_level":"80","devide_name":"巴蜀风云","name":"持国天王回忆录","maps":[{"map_id":"131","mode":"10人普通"},{"map_id":"148","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/131.jpg","boss":["提多罗吒","萧沙"]},"烛龙殿":{"devide_level":"80","devide_name":"巴蜀风云","name":"烛龙殿","maps":[{"map_id":"133","mode":"25人英雄"},{"map_id":"134","mode":"10人普通"}],"icon":"image/fb_map_thumbnail/133.jpg","boss":["胡鞑、武逸青","陆寻","南之雷神","醉蛛老人","索笛尔","千秋子","乌蒙贵"]},"会战唐门":{"devide_level":"80","devide_name":"巴蜀风云","name":"会战唐门","maps":[{"map_id":"136","mode":"10人普通"},{"map_id":"138","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/136.jpg","boss":["狼牙军阵","汪莽"]},"南诏皇宫":{"devide_level":"80","devide_name":"巴蜀风云","name":"南诏皇宫","maps":[{"map_id":"140","mode":"10人普通"},{"map_id":"155","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/140.jpg","boss":["枯荣大师","段宗公、泰崇傣、阁逻鸿","萧沙","摩提耶罗","陈和尚、康雪烛、柳公子、阁逻凤","李倓"]},"仙踪林":{"devide_level":"80","devide_name":"巴蜀风云","name":"仙踪林","maps":[{"map_id":"71","mode":"5人普通"},{"map_id":"111","mode":"5人英雄"},{"map_id":"116","mode":"20级5人普通"}],"icon":"image/fb_map_thumbnail/71.jpg","boss":["塔纳刀王","水云","苏髓"]},"毒神殿":{"devide_level":"80","devide_name":"巴蜀风云","name":"毒神殿","maps":[{"map_id":"75","mode":"5人普通"},{"map_id":"112","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/75.jpg","boss":["塔丹茂伯","鲍穆侠","乌灵风"]},"法王窟":{"devide_level":"80","devide_name":"巴蜀风云","name":"法王窟","maps":[{"map_id":"106","mode":"5人普通"},{"map_id":"115","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/106.jpg","boss":["胡鞑","武逸青","智慧"]},"无量宫":{"devide_level":"80","devide_name":"巴蜀风云","name":"无量宫","maps":[{"map_id":"107","mode":"5人普通"},{"map_id":"114","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/107.jpg","boss":["桃叶仙","濯尘","多多"]},"寂灭厅":{"devide_level":"80","devide_name":"巴蜀风云","name":"寂灭厅","maps":[{"map_id":"110","mode":"5人普通"},{"map_id":"113","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/110.jpg","boss":["藏·剑邪鸠","剑心","摩提耶罗"]},"唐门密室":{"devide_level":"80","devide_name":"巴蜀风云","name":"唐门密室","maps":[{"map_id":"123","mode":"5人普通"},{"map_id":"125","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/123.jpg","boss":["柳惊涛","机关骰子","汉唐","密室机关"]},"光明顶秘道":{"devide_level":"80","devide_name":"巴蜀风云","name":"光明顶秘道","maps":[{"map_id":"141","mode":"5人英雄"},{"map_id":"142","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/141.jpg","boss":["问寒松","辛然、吴颖莲","薛山","西域狮王"]}}},"风起稻香":{"name":"风起稻香","level":"70","dungeon":{"战宝迦兰":{"devide_level":"70","devide_name":"风起稻香","name":"战宝迦兰","maps":[{"map_id":"32","mode":"10人普通"},{"map_id":"46","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/32.jpg","boss":["王海银","朱癸","平等","掌火","镇恶","餐风、饮火、吞云","千手观音"]},"持国天王殿":{"devide_level":"70","devide_name":"风起稻香","name":"持国天王殿","maps":[{"map_id":"60","mode":"10人普通"},{"map_id":"65","mode":"25人普通"},{"map_id":"66","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/60.jpg","boss":["提多罗吒"]},"宫中神武遗迹":{"devide_level":"70","devide_name":"风起稻香","name":"宫中神武遗迹","maps":[{"map_id":"61","mode":"10人普通"},{"map_id":"63","mode":"25人英雄"},{"map_id":"64","mode":"25人普通"}],"icon":"image/fb_map_thumbnail/61.jpg","boss":["谢云流"]},"荻花宫后山":{"devide_level":"70","devide_name":"风起稻香","name":"荻花宫后山","maps":[{"map_id":"67","mode":"10人普通"},{"map_id":"73","mode":"10人英雄"}],"icon":"image/fb_map_thumbnail/67.jpg","boss":["水烟","罗索斯","提坦德亚罗","牡丹"]},"灵霄峡":{"devide_level":"70","devide_name":"风起稻香","name":"灵霄峡","maps":[{"map_id":"14","mode":"5人普通"},{"map_id":"45","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/14.jpg","boss":["虎啸","射云","华鹤炎","神策暗刺卫"]},"天工坊":{"devide_level":"70","devide_name":"风起稻香","name":"天工坊","maps":[{"map_id":"17","mode":"5人普通"},{"map_id":"37","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/17.jpg","boss":["方季常","平三指","震天甲士","华铁颅"]},"无盐岛":{"devide_level":"70","devide_name":"风起稻香","name":"无盐岛","maps":[{"map_id":"18","mode":"5人普通"},{"map_id":"41","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/18.jpg","boss":["罗翼","常万山","杜姬欣","温纱儿"]},"空雾峰":{"devide_level":"70","devide_name":"风起稻香","name":"空雾峰","maps":[{"map_id":"19","mode":"5人普通"},{"map_id":"43","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/19.jpg","boss":["冯度","王彦直","鬼影小次郎","鲁飞"]},"天地三才阵":{"devide_level":"70","devide_name":"风起稻香","name":"天地三才阵","maps":[{"map_id":"20","mode":"5人普通"},{"map_id":"36","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/20.jpg","boss":["人熊","邓文峰","商仲永","李千水"]},"荻花宫前山":{"devide_level":"70","devide_name":"风起稻香","name":"荻花宫前山","maps":[{"map_id":"26","mode":"5人普通"},{"map_id":"40","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/26.jpg","boss":["阿里曼监察使","阿里曼入教主祭司","卫栖梧","沙利亚","阿斯玛"]},"日轮山城":{"devide_level":"70","devide_name":"风起稻香","name":"日轮山城","maps":[{"map_id":"28","mode":"5人普通"},{"map_id":"44","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/28.jpg","boss":["上衫勇刀","雾影奈叶、猿飞菖蒲","源明雅","八歧大蛇","吉汰"]},"天子峰":{"devide_level":"70","devide_name":"风起稻香","name":"天子峰","maps":[{"map_id":"33","mode":"5人普通"},{"map_id":"42","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/33.jpg","boss":["柳随风","孙敬萧","李尧","玄悲","陌香","方宇谦"]},"风雨稻香村":{"devide_level":"70","devide_name":"风起稻香","name":"风雨稻香村","maps":[{"map_id":"34","mode":"5人普通"},{"map_id":"47","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/34.jpg","boss":["殷不为","肖童","刘大海","秦雷","狼牙夜暮刺客"]},"剑冢":{"devide_level":"70","devide_name":"风起稻香","name":"剑冢","maps":[{"map_id":"51","mode":"5人普通"},{"map_id":"62","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/51.jpg","boss":["叶芳致","叶无心","叶琦菲","夜啸"]}}}}')}}]);
//# sourceMappingURL=chunk-2c5127b7.85b822da.js.map