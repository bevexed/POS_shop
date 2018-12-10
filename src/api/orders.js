import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/* 用户订单列表
*  @param    page    页数
*  @param    uid     用户ID
*  @param    status  状态(all:全部;0:待付款;1:待发货;2:待收货;3:待评价;4:退款)
*/
export const orderList = (page,uid,status) => ajax(BASE_URL + '/orders/index',{page,uid,status},'GET')
