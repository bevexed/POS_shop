import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//立即购买订单商品详情
export const info = (uid,g_sku_id) => ajax(BASE_URL + '/order/goods/buynow',{uid,g_sku_id});


/* 默认收货地址
 * @param  uid  用户id
 */
export const defaultAddress = (uid,address_id) => ajax(BASE_URL + '/order/address',{uid,address_id});

//提交订单
export const commitOrder = (uid,address_id,g_sku_infos,cart_ids,remark) => ajax(BASE_URL + '/order/submit',{uid,address_id,g_sku_infos,cart_ids,remark});


//购物车结算订单商品详情
export const infos = (uid,cart_infos) => ajax(BASE_URL + '/order/goods/buycart',{uid,cart_infos})

/*
* 加入会员 - 直接跳到选择支付方式页面
* @param uid 用户id
* */

export const member = (uid) => ajax(BASE_URL + '/order/add/member',{uid})

