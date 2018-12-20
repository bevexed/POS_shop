import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 获取 banner
* */
export const banner = () => ajax(BASE_URL + '/home/banner', {}, 'GET')

/*
* 获取 商品列表
* @param    ad_code     城市邮编
* @param    sold_type   pos机类别 1:企业 2:个人 若不传，默认为1
* @param    sort_type   筛选条件 1:综合 2:价格 3:销量 若不传，默认为1
* */
export const goodlists = (ad_code = 110100, sold_type, sort_type) => ajax(BASE_URL + '/home/goodlists', {ad_code, sold_type, sort_type}, "GET")
