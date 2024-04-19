<template>
    <div class="m-notice-wechat">
        <el-button type="warning" icon="el-icon-connection" @click="unbind" v-if="isWechatVerified">
            解绑公众号
        </el-button>
        <el-button type="primary" icon="el-icon-connection" @click="open" v-else> 绑定公众号 </el-button>
        <el-dialog
            title="绑定微信公众号"
            :visible.sync="visible"
            width="30%"
            custom-class="m-notice-wechat__dialog"
            :before-close="handleClose"
        >
            <div class="m-wechat-content" v-loading="loading">
                <el-image class="u-qr" v-if="ticket" :src="qrcodeValue" lazy>
                    <div slot="error" class="u-error">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
                <i class="u-tip">打开微信扫一扫，关注公众号接收通知告警</i>
                <div class="u-bind" v-show="success">
                    <el-icon class="u-bind-icon" color="#67C23A">
                        <SuccessFilled />
                    </el-icon>
                    <span class="u-bind-text">绑定成功</span>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getWechatQrcode, unbindWechat } from "@/service/profile";
import { getMyInfo } from "@/service/index";
import { SSE } from "@jx3box/jx3box-common/js/https";
import User from "@jx3box/jx3box-common/js/user";
import { __cms } from "@jx3box/jx3box-common/data/jx3box.json";
const base = `https://mp.weixin.qq.com/cgi-bin/showqrcode`;
export default {
    name: "wechat",
    data: function () {
        return {
            ticket: "",
            visible: false,
            sse: null,
            profile: null,
            success: false,
            loading: false,
        };
    },
    computed: {
        token() {
            return User.getToken();
        },
        url() {
            return __cms + "api/cms/wechat/mp/bind/result?token=" + this.token;
        },
        isWechatVerified() {
            return !!this.profile?.wechat_mp_openid;
        },
        qrcodeValue() {
            return `${base}?ticket=${encodeURIComponent(this.ticket)}`;
        },
    },
    mounted() {
        this.loadUser();
    },
    beforeUnmount() {
        if (this.sse) {
            this.sse.disconnect();
        }
    },
    methods: {
        loadUser() {
            getMyInfo().then((res) => {
                this.profile = res.data.data;
            });
        },
        open() {
            this.visible = true;
            this.loadQrcode();
        },
        handleClose() {
            this.visible = false;
        },
        loadQrcode() {
            this.loading = true;
            getWechatQrcode()
                .then((res) => {
                    this.ticket = res.data.data?.ticket;
                    if (!this.isWechatVerified && this.ticket) {
                        if (this.sse) {
                            this.sse.disconnect();
                        }
                        this.initSSE();
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        initSSE() {
            this.sse = new SSE(this.url);
            this.sse.connect();
            this.sse.on("open", (e) => {
                console.log("SSE Initialization");
            });
            this.sse.on("bind_wx_mp", this.onMessage);
            this.sse.on("error", (e) => {
                console.log("SSE Error", e);
            });
        },
        onMessage() {
            this.success = true;
            this.profile.wechat_mp_openid = true;
        },
        unbind() {
            this.$confirm("解绑后无法用微信接收魔盒通知消息，确定解绑吗？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                unbindWechat().then(() => {
                    this.$notify({
                        title: "解绑成功",
                        type: "success",
                        duration: 2000,
                    });
                    this.loadUser();
                });
            });
        },
    },
};
</script>
<style lang="less">
.m-notice-wechat {
    .flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.m-notice-wechat__dialog {
    .m-wechat-content {
        .flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .u-qr {
            .flex;
            align-items: center;
            justify-content: center;
            .size(180px);
            .el-image__inner {
                .full;
            }
        }
        .u-error {
            .fz(120px);
        }
    }
}
</style>
