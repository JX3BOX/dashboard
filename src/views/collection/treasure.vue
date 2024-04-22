<template>
    <uc class="m-dashboard-frame m-dashboard-skin" icon="el-icon-magic-stick" title="魔盒藏品" :tab-list="tabList">
        <div class="m-collection">
            <el-row :gutter="10">
                <el-col v-for="(item, index) in Array(8)" :key="index" :xs="24" :sm="12" :md="8" :xl="8">
                    <div class="m-collection-list">
                        <div
                            class="u-img"
                            :style="{
                                backgroundImage: `url(${getImgPath(index + 1, 'bg')})`,
                            }"
                        ></div>
                        <div class="m-info">
                            <div class="u-title">第{{ index + 1 }}界证书</div>
                            <div class="u-time">获得时间：2019-10-10</div>
                            <button class="u-btn el-button el-button--primary">查看证书</button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </uc>
</template>

<script>
import uc from "@/components/uc.vue";
import { antiqueTab } from "@/assets/data/tabs.json";
import { teamCertificationRecordList } from "@/service/treasure";
import User from "@jx3box/jx3box-common/js/user";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import CI from "./json/collection.json";
export default {
    name: "collection",
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
        load() {
            teamCertificationRecordList().then((res) => {
                console.log(res);
            });
        },
        getImgPath(code, type) {
            let imgUrl = "";
            if (type == "bg") {
                imgUrl = `/${CI[code].bgImg}/background.png`;
            }
            return __imgPath + CI.imgBefore + imgUrl;
        },
    },
    mounted: function () {
        this.load();
    },
};
</script>
<style lang="less">
@import "../../assets/css/collection.less";
</style>
