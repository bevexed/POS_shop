import ajax from './ajax'
import {BASE_URL} from './BASE_URL'


/* 商品详情
* @params   id   商品id
*/
export const detail = (id) => ajax(BASE_URL + `/goods/detail/${id}`, {}, "GET")


/* 商品评论接口
* @params   id   商品id
*/
export const comment = (id) => ajax(BASE_URL + `/goods/comment`, {id}, "GET")


