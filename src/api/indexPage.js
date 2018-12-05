import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 获取 banner
* */
export const banner = () => ajax(BASE_URL + '/credit/banner', {}, 'GET')
