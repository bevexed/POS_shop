import ajax from './ajax'
import {BASE_URL} from "./BASE_URL";

/*
* 发送短信获取验证码
* @param   mobile     用户账号      必传
* @param   type       模板类型      必传
* */

export const sendMsg = (mobile, type) => ajax(BASE_URL + '/sendSms', {mobile, type: 2})
