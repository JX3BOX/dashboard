(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eadecafa"],{"615e":function(t,s,a){"use strict";a("b843")},"6d24":function(t,s,a){"use strict";a.r(s);a("b0c0");var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"m-credit m-tasks"},[t._m(0),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-tasks-list"},t._l(t.list,(function(a,i){return s("div",{key:i,staticClass:"u-item"},[s("img",{staticClass:"u-img",attrs:{src:a.task.task_icon||t.defaultTaskIcon,alt:a.task.action_type_desc}}),s("div",{staticClass:"u-box"},[s("div",{staticClass:"u-info"},[s("a",{staticClass:"u-title",attrs:{href:a.task.task_url,target:"_blank"}},[t._v(t._s(a.task.action_type_desc))]),s("span",{staticClass:"u-desc"},[t._v(" "+t._s(a.task.task_detail)+" ∕ "),t._l(a.attr,(function(a,i){return s("span",{key:i,staticClass:"u-attr"},[t._v(" "+t._s(t.attr_name[a.name])+" +"+t._s(a.count)+" ")])}))],2)]),s("div",{staticClass:"u-btn"},[s("el-button",{attrs:{size:"small",type:a.hasFinish?"success":"warning",disabled:a.hasFinish,icon:a.hasFinish?"el-icon-check":""},on:{click:function(s){return t.checkFinish(a.task.id)}}},[t._v(t._s(a.hasFinish?"已完成":"接受任务"))])],1)])])})),0)])},n=[function(){var t=this,s=t._self._c;return s("h2",{staticClass:"u-title"},[s("i",{staticClass:"el-icon-coffee-cup"}),t._v(" 任务中心")])}],e=(a("d3b7"),a("41cb"));function c(t){return Object(e["d"])().get("/api/personal/task",{params:t})}function l(t){return Object(e["d"])().get("/api/personal/task/".concat(t,"/check-status"))}var o=a("65c2"),u={name:"tasks",props:[],data:function(){return{loading:!1,list:[],attr_name:{experience:"经验",points:"积分"}}},computed:{defaultTaskIcon:function(){return o["__imgPath"]+"image/common/jx3box_black.svg"}},watch:{},methods:{loadTasks:function(){var t=this;this.loading=!0,c({is_limit_everyday:0,os_visible:1}).then((function(s){t.list=s.data.data.list})).finally((function(){t.loading=!1}))},checkFinish:function(t){var s=this;l(t).then((function(t){t.data.data.hasFinish?(s.$notify({title:"成功",message:"完成任务，获得奖励",type:"success"}),location.reload()):s.$notify({title:"提示",message:"您没有完成任务",type:"warning"})}))}},mounted:function(){this.loadTasks()}},r=u,d=(a("615e"),a("2877")),_=Object(d["a"])(r,i,n,!1,null,null,null);s["default"]=_.exports},b843:function(t,s,a){}}]);
//# sourceMappingURL=chunk-eadecafa.88282039.js.map