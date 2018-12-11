import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/* 用户订单列表
*  @param    page    页数
*  @param    uid     用户ID
*  @param    status  状态(all:全部;0:待付款;1:待发货;2:待收货;3:待评价;4:退款)
*/
export const orderList = (page, uid, status) => ajax(BASE_URL + '/orders/index', {page, uid, status}, 'GET')

/* 用户确认收货接口
*  @param    id      订单ID
*  @param    uid     用户ID
*/
export const orderConfirm = (id, uid) => ajax(BASE_URL + '/orders/orderConfirm', {id, uid})

/* 用户取消订单
*  @param    id      订单ID
*  @param    uid     用户ID
*/
export const ordersCancel = (id, uid) => ajax(BASE_URL + '/orders/ordersCancel', {id, uid})

/* 用户删除订单
*  @param    id      订单ID
*  @param    uid     用户ID
*/
export const ordersDel = (id, uid) => ajax(BASE_URL + '/orders/ordersDel', {id, uid})

/* 用户订单详情接口
*  @param    id      订单ID
*  @param    uid     用户ID
*/
export const ordersDetail = (id, uid) => ajax(BASE_URL + '/orders/ordersDetail', {id, uid})

/* 用户订单详情接口
*  @param    id      订单ID
*/
export const aliPay = (id) => ajax(BASE_URL + '/pay/aliPay', {id},"GET")

/*
* let res = await aliPay(this.$route.params.id)
        const div = document.createElement('div');
        div.innerHTML = res; // html code
        document.body.appendChild(div);
        document.forms.alipaysubmit.submit();
* */
