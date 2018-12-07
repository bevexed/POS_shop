import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//确认订单商品详情
export const info = (uid,g_sku_id) => ajax(BASE_URL + '/order/goods',{uid,g_sku_id})
