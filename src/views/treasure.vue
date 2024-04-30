<template>
    <uc class="m-dashboard-frame m-dashboard-skin" icon="el-icon-magic-stick" title="魔盒藏品" :tab-list="tabList">
        <div class="m-collection">
            <el-row :gutter="32">
                <el-col v-for="(item, index) in list" :key="index" :xs="24" :sm="12" :md="12" :xl="6">
                    <div class="m-collection-list" @click="goDetail(`/author/${item.user_id}/certificate/${item.id}`)">
                        <div
                            class="u-img"
                            :style="{
                                backgroundImage: `url(${getImgPath(item.team_certificate.rank_id)})`,
                            }"
                        ></div>
                        <div class="m-info">
                            <div class="u-title">{{ item.team_certificate.rank_name }}</div>
                            <div class="u-tip">团队长：{{ item.team_certificate.leader }}</div>
                            <div class="u-tip">服务器：{{ item.team_certificate.team_server }}</div>
                            <div class="u-tip">团队名称：{{ item.team_certificate.team_name }}</div>
                            <div class="u-tip">获得时间：{{ item.team_certificate.awardtime }}</div>
                        </div>
                        <img class="u-icon" src="../assets/img/cert/CI_icon.svg" alt="" />
                    </div>
                </el-col>
            </el-row>

            <el-pagination
                class="m-packet-pages"
                background
                @current-change="handleCurrentChange"
                :page-size="per"
                :hide-on-single-page="true"
                :current-page.sync="page"
                layout="total, prev, pager, next, jumper"
                :total="total"
            ></el-pagination>
        </div>
    </uc>
</template>

<script>
import uc from "@/components/uc.vue";
import { antiqueTab } from "@/assets/data/tabs.json";
import { teamCertificationRecordList } from "@/service/treasure";
import User from "@jx3box/jx3box-common/js/user";
import { __cdn } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "treasure",
    components: {
        uc,
    },
    props: [],
    data: function () {
        return {
            tabList: antiqueTab,

            page: 1,
            per: 12,
            total: 0,
            list: [],
        };
    },
    computed: {},
    methods: {
        load() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1920) {
                this.per = 10;
            }
            this.getCertificateList();
        },
        getCertificateList() {
            teamCertificationRecordList({
                index: this.page,
                pageSize: this.per,
            }).then((res) => {
                this.total = res.data.data.page.total;
                this.list = res.data.data.list;
            });
        },
        handleCurrentChange(current) {
            this.page = current;
            this.getCertificateList();
        },
        goDetail(url) {
            window.location.href = url;
        },
        getImgPath(code) {
            let imgUrl = "";
            imgUrl = `design/certification/CertCover_jdt${code < 10 ? "0" + code : code}.png`;
            return __cdn + imgUrl;
        },
    },
    mounted: function () {
        this.load();
    },
};
</script>
<style lang="less">
@import "../assets/css/treasure.less";
</style>
