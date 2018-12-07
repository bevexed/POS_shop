import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//获取bannner
export const banners = (uid) => ajax(BASE_URL + '/credit/banner',{uid:uid},'GET')
