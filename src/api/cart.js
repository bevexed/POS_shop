import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 获取 列表
* */
export const shopList = (uid) => ajax(BASE_URL + '/cart/list', {uid: uid})

/*
* 添加购物车
* */
export const addShop = (uid, g_sku_id) => ajax(BASE_URL + '/cart/add', {uid: uid, g_sku_id: g_sku_id})


/*
* 获取商品详情
* @param id 商品ID
* */
export const detail = (id) => ajax(BASE_URL + `/goods/detail`, {id}, "GET")

/*
* 获取商品详情
* @param uid  用户ID
* @param cart_ids  购物车id
* */
export const destroy = (uid,cart_ids) => ajax(BASE_URL + `/cart/destroy`, {uid,cart_ids})
