import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 获取 列表
* */
export const shopList = (uid) => ajax(BASE_URL + '/cart/list', {uid:uid})

//添加购物车
export const addShop = (uid,g_sku_id) => ajax(BASE_URL + '/cart/add',{uid:uid,g_sku_id:g_sku_id})
