<template>
    <uc class="m-auth">
        <div class="m-block">
            <div v-html="content"></div>
        </div>
    </uc>
</template>

<script>
import { getBreadcrumb } from "@jx3box/jx3box-common/js/api_misc";
import uc from "@/components/uc.vue";
export default {
    name: "auth",
    components: {
        uc,
    },
    data: function () {
        return {
            content: "",
        };
    },
    mounted() {
        getBreadcrumb("auth_ac").then((res) => {
            this.content = res;
        });
    },
    methods: {},
};
</script>

<style lang="less">
.m-auth {
    .m-block {
        background-color: #fafbfc;
        border: 1px solid @color-link;
        margin: 15px 15px 5px 15px;
        padding: 10px 10px 10px 30px;
        border-radius: 6px;
        position: relative;

        h3,
        h6 {
            .fz(13px,22px);
            color: #333;
            margin: 10px 0;
        }
        p {
            font-size: 12px;
            line-height: 26px;
            margin: 0;
        }
    }
}
</style>
