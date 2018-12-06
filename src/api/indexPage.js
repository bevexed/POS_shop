import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 获取 banner
* */
export const banner = () => ajax(BASE_URL + '/home/banner', {}, 'GET')

/*
* 获取 商品列表
* */
export const goodlists = () => ajax(BASE_URL + '/home/goodlists', {})
