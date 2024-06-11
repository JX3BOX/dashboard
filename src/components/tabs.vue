<template>
    <el-tabs class="m-dashboard-tabs" v-model="active" @tab-click="changeTab">
        <el-tab-pane v-for="item in tabs" :key="item.name" :name="item.name">
            <span slot="label"
                ><i :class="item.icon" class="u-tab-icon"></i> {{ item.label }}
                <span class="u-count" :class="count[countMap[item.name]] ? 'is-orange' : ''"
                    >({{ count[countMap[item.name]] || 0 }})</span
                >
            </span>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import { getMsgUnread } from "@/service/msg";
export default {
    name: "",
    props: {
        tabs: {
            type: Array,
            default: () => [],
        },
    },
    data: function () {
        return {
            active: "",
            countMap: {
                msg: "message",
                letter: "letter",
            },
            count: {},
        };
    },
    watch: {
        $route: function () {
            this.active = this.$route.name;
        },
    },
    computed: {},
    methods: {
        changeTab: function () {
            this.$router.push({ name: this.active });
        },
        loadCount() {
            getMsgUnread().then((res) => {
                const data = res.data?.data || {};
                this.count = data;
            });
        },
    },
    mounted: function () {
        this.active = this.$route.name;
        this.loadCount();
    },
    components: {},
};
</script>
