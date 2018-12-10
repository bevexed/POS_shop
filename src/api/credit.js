import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//获取bannner
export const banners = (uid) => ajax(BASE_URL + '/credit/banner', {uid: uid}, 'GET');


//获取信用卡列表
export const list = (type='hot') => ajax(BASE_URL + '/credit/list',{type},'GET');


//信用卡详情（富文本）
export const info = (id) => ajax(BASE_URL + '/credit/detail',{id},"GET");


//信用卡评论
export const dynamic = (id) =>ajax(BASE_URL + '/credit/comment',{id},'GET');
