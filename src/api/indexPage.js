import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 注册
* @param   mobile     用户账号      必传
* @param   password   用户密码      必传
* @param   code       短信验证码    必传
* @param   promote    邀请码        可选
* */
export const banner = () => ajax(BASE_URL + '/credit/banner', {}, 'GET')
