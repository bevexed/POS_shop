import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//立即购买订单商品详情
export const info = (uid,g_sku_id) => ajax(BASE_URL + '/order/goods/buynow',{uid,g_sku_id});


//默认收货地址
export const defaultAddress = (uid) => ajax(BASE_URL + '/order/address',{uid});

//提交订单
export const commitOrder = (uid,address_id,g_sku_infos,remark) => ajax(BASE_URL + '/order/submit',{uid,address_id,g_sku_infos,remark});


//购物车结算订单商品详情
export const infos = (uid,cart_infos) => ajax(BASE_URL + '/order/goods/buycart',{uid,cart_infos})

