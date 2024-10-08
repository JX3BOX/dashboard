<template>
    <uc class="m-dashboard-connect">
        <div class="m-profile-connect">
            <el-alert
                class="u-tip"
                title="通过第三方账号快速登录，如需解绑则需要先绑定一个邮箱"
                type="warning"
                show-icon
            >
            </el-alert>
            <div class="m-dashboard-content-list">
                <div class="m-item" v-for="(item, type) in oauth" :key="type">
                    <span class="u-profile-item">
                        <img :class="'u-' + type" svg-inline :src="icon(type)" />
                        <span class="u-status">
                            {{ checkStatus(type) ? getNickname(type) : "未绑定" }}
                        </span>
                    </span>
                    <el-button
                        class="u-button"
                        :type="!checkStatus(type) ? 'primary' : 'danger'"
                        @click="!checkStatus(type) ? bind(type) : unbind(type)"
                    >
                        {{ !checkStatus(type) ? "绑定" : "解除绑定" }}
                    </el-button>
                </div>
            </div>
        </div>
    </uc>
</template>

<script>
import uc from "@/components/uc.vue";
import links from "@jx3box/jx3box-common/js/connect";
import oauth from "@jx3box/jx3box-common/data/oauth.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { unbindOAuth, checkOAuth } from "@/service/profile";
const client = location.host.includes("origin") ? "origin" : "std";
export default {
    name: "connect",
    props: [],
    data: function () {
        return {
            data: {
                github_name: "",
                github_id: "",

                weibo_name: "",
                weibo_id: "",

                qq_name: "",
                qq_unionid: "",

                wechat_name: "",
                wechat_unionid: "",
            },
            oauth,
        };
    },
    computed: {},
    methods: {
        checkStatus: function (type) {
            if (type == "qq" || type == "wechat") {
                return !!this.data[type + "_unionid"];
            }
            return !!this.data[type + "_id"];
        },
        getNickname: function (type) {
            return this.data[type + "_name"] || "未知";
        },
        bind: function (type) {
            location.href = links[type].replace("state=login", `state=bind_${client}`);
        },
        unbind: function (type) {
            this.$confirm("确定要解绑吗？", "解绑", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    unbindOAuth(type).then((res) => {
                        this.$message({
                            message: "解绑成功",
                            type: "success",
                        });
                        location.reload();
                    });
                })
                .catch(() => {});
        },
        icon: function (type) {
            return __imgPath + "image/connect/" + type + ".svg";
        },
    },
    mounted: function () {
        checkOAuth().then((res) => {
            this.data = res.data.data;
        });
    },
    components: {
        uc,
    },
};
</script>

<style lang="less">
@import "../assets/css/profile/connect.less";
</style>
