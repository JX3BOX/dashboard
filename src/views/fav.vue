<template>
    <div class="m-dashboard m-dashboard-work m-dashboard-fav">
        <el-input
            class="m-dashboard-work-search"
            placeholder="请输入内容"
            v-model="search"
            @change="searchPost"
        >
            <template slot="prepend">我的收藏</template>
            <el-button
                slot="append"
                icon="el-icon-search"
                @click="searchPost"
            ></el-button>
        </el-input>

        <div class="m-dashboard-box">
            <ul class="m-dashboard-box-list" v-if="data.length">
                <li v-for="(item, i) in data" :key="i">
                    <i class="u-icon">
                        <img
                            v-if="item.post.post_status == 'publish'"
                            svg-inline
                            src="../assets/img/works/repo.svg"
                        />
                        <img
                            v-else
                            svg-inline
                            src="../assets/img/works/draft.svg"
                        />
                    </i>
                    <a
                        class="u-title"
                        target="_blank"
                        :href="postLink(item.post.post_type, item.post.ID)"
                        >{{ item.post.post_title || "无标题" }}</a
                    >
                    <time class="u-time"
                        >发布于: {{ item.post.post_date | dateFormat}} | 最后更新: {{ item.post.post_modified | dateFormat}}</time
                    >
                    <el-button-group class="u-action">
                        <el-button
                            type="primary"
                            size="mini"
                            icon="el-icon-delete"
                            title="删除"
                            @click="del(item.post.ID)"
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
import { getFavs, delFav } from "../service/fav";
import { __v2, __Root } from "@jx3box/jx3box-common/js/jx3box";
import dateFormat from "../utils/dateFormat";

export default {
    name: "fav",
    props: [],
    data: function() {
        return {
            data: [],
            total: 1,
            page: 1,
            search: "",
        };
    },
    computed: {},
    methods: {
        changePage: function(i = 1) {
            getFavs({
                page: i,
            }).then((res) => {
                this.data = res.data.data.list;
                this.total = res.data.data.total;
            });
        },
        searchPost: function() {
            getFavs({
                title: this.search,
            }).then((res) => {
                this.data = res.data.data.list;
                this.total = res.data.data.total;
            });
        },
        del: function(id) {
            this.$alert("确定要取消收藏吗？", "确认信息", {
                confirmButtonText: "确定",
                callback: (action) => {
                    delFav(id)
                        .then(() => {
                            this.$message({
                                type: "success",
                                message: `取消收藏成功`,
                            });
                            location.reload();
                        })
                        .catch((err) => {
                            this.failCallback(err, this);
                        });
                },
            });
        },
        postLink: function(type, id) {
            return __Root + type + "/" + id;
        },
    },
    filters:{
        dateFormat : function (val){
            return dateFormat(new Date(val))
        }
    },
    mounted: function() {
        this.changePage();
    },
};
</script>

<style scoped lang="less">
@import "../assets/css/work.less";
</style>