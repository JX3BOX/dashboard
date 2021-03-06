import Vue from "vue";
import VueRouter from "vue-router";

const index = () => import("../views/index.vue");

const msg = () => import("../views/msg.vue");
// const feed = () => import("../views/feed.vue");
const fav = () => import("../views/fav.vue");

const order = () => import("../views/orders.vue");
const packet = () => import("../views/packet.vue");

const profile = () => import("../views/profile.vue");
const avatar = () => import("../views/avatar.vue");
const pwd = () => import("../views/pwd.vue");
const email = () => import("../views/email.vue");
const connect = () => import("../views/connect.vue");
const config = () => import("../views/config.vue");
const whitelist = () => import("../views/whitelist.vue");

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: index },

    { name: "msg", path: "/msg", component: msg },
    // { name: "feed", path: "/feed", component: feed },
    { name: "fav", path: "/fav/:subtype?", component: fav },

    { name: "orders", path: "/order", component: order },
    { name: "packet", path: "/packet", component: packet },

    { name: "profile", path: "/profile", component: profile },
    { name: "avatar", path: "/avatar", component: avatar },
    { name: "pwd", path: "/pwd", component: pwd },
    { name: "email", path: "/email", component: email },
    { name: "connect", path: "/connect", component: connect },
    { name: "config", path: "/config", component: config },
    { name: "whitelist", path: "/whitelist", component: whitelist },
];

const router = new VueRouter({
    routes,
});

export default router;
