import ajax from './ajax'
import {BASE_URL} from "./BASE_URL";

//支付宝支付
export const alipay = (uid,order_no) => ajax(BASE_URL + '/pay/toAliPay',{uid,order_no})
