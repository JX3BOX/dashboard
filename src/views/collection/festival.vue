<template>
    <uc class="m-dashboard-frame m-dashboard-skin" icon="el-icon-magic-stick" title="魔盒藏品" :tab-list="tabList">
    </uc>
</template>

<script>
import uc from "@/components/uc.vue";
import { antiqueTab } from "@/assets/data/tabs.json";
import User from "@jx3box/jx3box-common/js/user";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "festival",
    components: {
        uc,
    },
    props: [],
    data: function () {
        return {
            tabList: antiqueTab,
        };
    },
    computed: {},
    methods: {
        load() {},
    },
    mounted: function () {
        this.load();
    },
};
</script>
<style lang="less">
@import "../../assets/css/collection.less";
</style>
