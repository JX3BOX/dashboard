<template>
    <div class="m-notice-email">
        <span class="u-address" v-if="address">{{ address }}</span>
        <template v-if="status == true">
            <template v-if="verified == true">
                <el-button type="primary" class="u-button" @click="changeEmail" icon="el-icon-edit">修改邮箱</el-button>
            </template>
            <template v-if="verified == false">
                <el-button type="warning" class="u-button" @click="verify" icon="el-icon-s-promotion"
                    >验证邮箱</el-button
                >
                <el-button type="primary" class="u-button" @click="changeEmail" icon="el-icon-edit">修改邮箱</el-button>
            </template>
        </template>
        <template v-if="status == false">
            <el-input
                class="u-text u-email"
                v-model="email"
                placeholder="邮箱地址"
                minlength="3"
                maxlength="50"
                @blur="checkEmail"
            >
                <template slot="prepend">
                    <i class="el-icon-message" style="font-size: 20px"></i>
                </template>
            </el-input>
            <el-button :type="ready ? 'primary' : ''" @click="bind"> {{ ready ? "确定" : "取消" }}</el-button>
        </template>
    </div>
</template>

<script>
import { validator } from "sterilizer";
import User from "@jx3box/jx3box-common/js/user";
import { sendVerifyEmail, sendBindEmail, checkEmailAvailable, checkEmailStatus } from "@/service/profile";

export default {
    name: "email",
    data: function () {
        return {
            status: null,
            uid: User.getInfo().uid,
            address: "",
            verified: null,

            email: "",
            email_validate: false,
            email_available: false,

            changeEmailMode: false,
        };
    },
    computed: {
        ready: function () {
            return this.email_validate && this.email_available;
        },
    },
    methods: {
        verify: function () {
            sendVerifyEmail(this.uid).then((res) => {
                this.$message({
                    message: "邮件已发送请查收",
                    type: "success",
                });
            });
        },
        checkEmail: function () {
            // 如果为空
            if (this.email == "") {
                this.email_validate = false;
                this.email_available = false;
                return;
            }

            // 校验格式
            let result = validator(this.email, {
                isEmail: true,
                len: [3, 50],
            });
            this.email_validate = result;
            if (!result) return this.$message.error("邮箱格式不正确或长度超出限制");

            // 邮箱是否可用
            checkEmailAvailable(this.email).then((res) => {
                this.email_available = res.data.data;
                if (this.email_available == false) this.$message.error("邮箱已被使用,请更换");
            });
        },
        bind: function () {
            if (!this.ready) {
                this.status = true;
                return;
            }

            sendBindEmail({
                uid: this.uid,
                email: this.email,
            }).then(() => {
                this.$alert("申请提交成功,请前往邮箱验证", "消息", {
                    confirmButtonText: "确定",
                });
                this.status = true;
                this.verified = false;
                this.address = this.email;
            });
        },
        changeEmail: function () {
            this.status = false;
            this.changeEmailMode = true;
        },
    },
    mounted: function () {
        this.uid = User.getInfo().uid;
        checkEmailStatus().then((res) => {
            if (res.data.data.email) {
                this.status = true;
                this.address = res.data.data.email;
                this.verified = !!parseInt(res.data.data.verified);
            } else {
                this.status = false;
            }
        });
    },
};
</script>
<style lang="less">
.m-notice-email {
    .flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>
