import { $, axios } from "./axios";
import { __next, __Root } from "@jx3box/jx3box-common/js/jx3box.json";
const plugins = __next + "api/plugins/my-team-mon"   //TODO:
// const plugins = "/api/plugins/my-team-mon"
const feed = __next + "api/plugins/jx3dat/publish"  //TODO:
// const feed = "/api/plugins/jx3dat/publish"

function uploadHub(formdata, vm) {
    return axios
        .post(plugins, formdata, {
            withCredentials: true,
        })
        .catch((err) => {
            vm.failCallback(err, vm);
        });
}

function uploadData(formdata, vm) {
    return $.post("upload/data", formdata).catch((err) => {
        vm.failCallback(err, vm);
    });
}

function syncRedis(data,vm) {
    let redisData = transferForRedis(data);
    console.log('正在执行redis同步作业:',redisData)
    return axios
        .post(feed, redisData, {
            withCredentials: true,
        })
        .catch((err) => {
            vm.failCallback(err, vm);
        });
}

function transferForRedis(data) {
    let author = data.author;
    let pid = data.ID;

    let _ = {
        author: author,
        user_id: ~~data.post_author || 0,
        post_id: pid,
        post_status : data.post_status,
        data: {},
    };

    data.post_meta.data.forEach((item, i) => {
        _.data[item.name] = {
            author: author,
            key: item.name,

            name: item.desc,
            version: item.version || Date.now(),

            data_url: item.file,
            about: __Root + "jx3dat/?pid=" + pid,
            status : item.status
        };
    });

    return _;
}

export { uploadHub, uploadData, syncRedis };
