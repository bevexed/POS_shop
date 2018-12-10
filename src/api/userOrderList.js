import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//用户订单列表
export const orderList = (page,uid,status) => ajax(BASE_URL + '/orders/index',{page,uid,status},'GET')
