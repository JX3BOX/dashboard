import { $team } from "@jx3box/jx3box-common/js/https";

// 获取个人团队成绩证书列表
export const teamCertificationRecordList = function (data) {
    return $team().get("/api/team/team-certification-record/list", data);
};
