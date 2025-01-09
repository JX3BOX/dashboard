<template>
    <uc class="m-dashboard-frame m-dashboard-skin" icon="el-icon-magic-stick" title="魔盒藏品" :tab-list="tabList">
        <div class="m-cert-list">
            <el-empty v-if="!list.length" description="您还未获得过证书~"></el-empty>
            <el-row :gutter="32">
                <el-col v-for="(item, index) in list" :key="index" :xs="24" :sm="12" :md="8" :xl="6">
                    <a class="m-cert-item" target="_blank">
                        <div
                            class="u-img"
                            :style="{
                                backgroundImage: `url()`,
                            }"
                        ></div>
                        <div class="m-info">
                            <div class="u-title">{{ item.event_name }}</div>
                            <div class="u-tip">{{ item.event_wish }}</div>
                            <div class="u-tip">获得时间：{{ formatTime(item.created_at) }}</div>
                        </div>
                        <!-- 百强证书 -->
                        <img class="u-icon" src="../assets/img/cert/CI_icon.svg" alt="" />
                    </a>
                </el-col>
            </el-row>
        </div>
    </uc>
</template>

<script>
import uc from "@/components/uc.vue";
import { antiqueTab } from "@/assets/data/tabs.json";
import { getHolidayCard } from "@/service/treasure";

export default {
    name: "treasure",
    components: {
        uc,
    },
    props: [],
    data: function () {
        return {
            tabList: antiqueTab,
            list: [],
        };
    },
    computed: {},
    methods: {
        load() {
            this.getCertificateList();
        },
        getCertificateList() {
            getHolidayCard().then((res) => {
                console.log(res.data);
                this.list = res.data;
            });
        },
        formatTime(time) {
            let date = new Date(time);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
        },
    },
    mounted: function () {
        this.load();
    },
};
</script>
<style lang="less">
@import "../assets/css/certification.less";
</style>
