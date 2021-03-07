const path = require("path");
const pkg = require("./package.json");
const { JX3BOX, SEO } = require("@jx3box/jx3box-common");
// const Setting = require("./setting.json");

module.exports = {
    devServer: {
        proxy: {
            "/api/vip": {
                target: "https://pay.jx3box.com",
                onProxyReq: function(request) {
                    request.setHeader("origin", "");
                },
            },
            "/api/my": {
                target: "https://helper.jx3box.com",
            },
            "api/messages": {
                target: "https://helper.jx3box.com",
            },
            "/api": {
                target: "https://next.jx3box.com",
                onProxyReq: function(request) {
                    request.setHeader("origin", "");
                },
            },
            // SERVER by iRuxu
            "/profile": {
                target: process.env["DEV_SERVER"] == "true" ? "http://localhost:5160" : "https://server.jx3box.com"
            },
            "/cms/my":{
                target: process.env["DEV_SERVER"] == "true" ? "http://localhost:5160" : "https://server.jx3box.com"
            },
            "/upload": {
                target: "https://server.jx3box.com",
            },
            "/server": {
                target: "https://server.jx3box.com",
            },
            "/post": {
                target: "https://server.jx3box.com",
            },
        },
        disableHostCheck: true,
    },

    //❤️ Multiple pages ~
    pages: {
        index: {
            title: "个人中心 - JX3BOX",
            entry: "src/driver/dashboard.js",
            template: "public/index.html",
            filename: "index.html",
        },
        publish: {
            title: "发布中心 - JX3BOX",
            entry: "src/driver/publish.js",
            template: "public/publish.html",
            filename: "publish/index.html",
        },
    },

    //❤️ define path for static files ~
    publicPath:
        //FOR Localhost => development
        (process.env.NODE_ENV === "development" && "/") ||
        //BY origin
        (process.env.STATIC_PATH === "origin" &&
            `${JX3BOX.__staticPath["origin"]}${pkg.name}/`) ||
        //BY github
        (process.env.STATIC_PATH === "github" &&
            `${JX3BOX.__staticPath["github"]}${pkg.name}/`) ||
        //BY jsdelivr
        (process.env.STATIC_PATH === "jsdelivr" &&
            `${JX3BOX.__staticPath["jsdelivr"]}${pkg.name}@gh-pages/`) ||
        //BY OSS=>CDN
        (process.env.STATIC_PATH === "mirror" &&
            `${JX3BOX.__staticPath["mirror"]}${pkg.name}/`) ||
        //BY relative path
        (process.env.STATIC_PATH === "repo" && `/${pkg.name}/`) ||
        //BY root path or bind a domain
        (process.env.STATIC_PATH == "root" && "/") ||
        //for lost
        "/",

    chainWebpack: (config) => {
        // 💘 html-webpack-plugin ~
        // Multiple pages disable the block below
        // config.plugin("html").tap(args => {
        //     args[0].meta = {                            //------设置SEO信息
        //         Keywords: Setting.keys,
        //         Description: Setting.desc
        //     };
        //     args[0].title = Setting.title + SEO.title;  //------自动添加标题后缀
        //     return args;
        // });

        //💝 in-line small imgs ~
        config.module
            .rule("images")
            .use("url-loader")
            .loader("url-loader")
            .tap((options) => Object.assign(options, { limit: 10240 }));

        //💝 in-line svg imgs ~
        config.module
            .rule("vue")
            .use("vue-svg-inline-loader")
            .loader("vue-svg-inline-loader");

        //💖 import common less var * mixin ~
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        var preload_styles = [];
        preload_styles.push(
            path.resolve(__dirname, "./node_modules/csslab/base.less"),
            path.resolve(
                __dirname,
                "./node_modules/@jx3box/jx3box-common/css/var.less"
            ),
            path.resolve(__dirname, "./src/assets/css/var.less")
        );
        function addStyleResource(rule) {
            rule.use("style-resource")
                .loader("style-resources-loader")
                .options({
                    patterns: preload_styles,
                });
        }
        types.forEach((type) =>
            addStyleResource(config.module.rule("less").oneOf(type))
        );
    },
};
