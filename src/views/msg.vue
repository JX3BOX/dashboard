<template>
    <div class="m-dashboard m-dashboard-msg">
        <div class="m-dashboard-box">
            <div class="m-dashboard-box-header">
                <h4 class="u-title">消息列表</h4>
                <el-button class="u-read-all" type="primary" size="mini" @click="read(null)" :disabled="!unread_total">
                    <i class="el-icon el-icon-check"></i>
                    <span v-text="'全部设为已读'"></span>
                </el-button>
            </div>
            <ul class="m-dashboard-box-list" v-if="data.length">
                <li v-for="(item, i) in data" :key="i" :class="{on : item.read == 1}" v-show="item.deleted==0">
                    <div class="u-primary">
                        <span class="u-content" v-html="item.content">
                        </span>
                        <time class="u-time"
                            >{{ dateFormat(~~item.created) }}</time
                        >
                    </div>
                    <el-button-group class="u-action">
                        <el-button
                            type="primary"
                            size="mini"
                            icon="el-icon-check"
                            title="设为已读"
                            @click="read(item)"
                            :disabled="item.read == 1"
                        ></el-button>
                        <el-button
                            type="primary"
                            size="mini"
                            icon="el-icon-delete"
                            title="删除"
                            @click="del(item)"
                        ></el-button>
                    </el-button-group>
                </li>
            </ul>
            <el-alert
                v-else
                class="m-dashboard-box-null"
                title="没有找到相关条目"
                type="info"
                center
                show-icon
            >
            </el-alert>
            <el-pagination
                class="m-dashboard-box-pages"
                background
                :hide-on-single-page="true"
                @current-change="changePage"
                :current-page="page"
                layout="total, prev, pager, next, jumper"
                :total="total"
            >
            </el-pagination>
        </div>

    </div>
</template>

<script>
import { getMsgs, readMsg, removeMsg } from "../service/msg.js";
import dateFormat from '../utils/dateFormat'
export default {
    name: "msg",
    props: [],
    data: function() {
        return {
            data: [],
            unread_total: 0,
            total: 1,
            page: 1,
        };
    },
    methods: {
        changePage: function(i = 1) {
            this.page = i;
            getMsgs(i).then((res) => {
                this.unread_total = res.data.data.unread_count;
                this.total = res.data.data.total;
                this.data = res.data.data.messages;
            });
        },
        read(item){
            readMsg(item ? [item.ID] : null).then((res) => {
                if(res.data.code === 200) {
                    if(item) {
                        item.read = 1;
                    } else {
                        this.changePage(this.page);
                    }
                } else {
                    this.$notify.error({title: res.data.message});
                }
            });
        },
        del(item){
            removeMsg([item.ID]).then((res) => {
                if(res.data.code === 200) {
                    item.deleted = Math.round(new Date() / 1000);
                } else {
                    this.$notify.error({title: res.data.message});
                }
            });
        },
        dateFormat : function (val){
            return dateFormat(new Date(val*1000))
        }
    },
    mounted: function() {
        this.changePage();
    },
};
</script>

<style scoped lang="less">
@import "../assets/css/msg.less";
</style>