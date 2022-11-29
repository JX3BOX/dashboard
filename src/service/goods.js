import { $pay } from "@jx3box/jx3box-common/js/https";
// 获取地址列表
function getAddress(params) {
    return $pay().get(`/mall/ship-address`, params)
}
// 添加地址
function addAddress(data) {
    return $pay().post(`/mall/ship-address`, data)
}
// 更新地址
function updateAddress(id, data) {
    return $pay().put(`/mall/ship-address/${id}`, data)
}
// 删除地址
function delAddress(id) {
    return $pay().delete(`/mall/ship-address/${id}`)
}
// 设定默认地址
function defaultAddress(id) {
    return $pay().put(`/mall/ship-address/default/${id}`, )
}
// 获取我的订单
function getOrder(params) {
    return $pay().get(`/mall/my/orders`, { params })
}
// 更改订单的收货地址
function updateOrderAddress(orderId, addressId) {
    return $pay().put(`/mall/my/orders/${orderId}/bind-address/${addressId}`, )
}
// 修改订单备注
function updateOrderRemark(id, remark) {
    return $pay().put(`/mall/my/orders/${id}/remark`, { remark })
}
// 查看对应id的订单详情
function getOrderId(id) {
    return $pay().get(`/mall/my/orders/${id}`)
}
// 关闭订单
function closeOrder(id) {
    return $pay().put(`/mall/my/orders/${id}`, )
}
export {
    getAddress,
    addAddress,
    updateAddress,
    delAddress,
    defaultAddress,
    getOrder,
    updateOrderAddress,
    updateOrderRemark,
    getOrderId,
    closeOrder
};