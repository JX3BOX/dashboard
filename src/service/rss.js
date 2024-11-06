import { $next } from "@jx3box/jx3box-common/js/https";

// 获取订阅author_id的用户列表
export function getAuthorRssList(author_id, params) {
    return $next().get(`/api/next2/rss/user-list/author/${author_id}`, {
        params
    })
}

// 移除订阅我的用户
export function removeRssUser(user_id) {
    return $next().delete(`/api/next2/rss/my-subscribers/${user_id}`)
}

// 新增订阅
export function addRssUser(user_id,data) {
    return $next().post(`/api/next2/rss/subscriber/author/${user_id}`, data)
}
