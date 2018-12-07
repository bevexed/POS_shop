import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 注册
* @param   mobile     用户账号      必传
* @param   password   用户密码      必传
* @param   code       短信验证码    必传
* @param   promote    邀请码        可选
* */
export const doRegister = ({mobile, password, code, promote}) => ajax(BASE_URL + '/login/doRegister', {mobile, password, code, promote})
// export const doRegister = (mobile,password,code,promote) => ajax(`https://shop.zhihuimall.com.cn:443/zhihuishop/public/index.php/api/allbanner/bannerlist`,{mobile,password,code,promote})

/*
* 登录
* @param   mobile     用户账号      必传
* @param   password   用户密码      必传
* */
export const doLogin = ({mobile, password}) => ajax(BASE_URL + '/login/doLogin', {mobile, password})

/*
* 忘记密码
* @param  mobile    手机号
* @param  new_pwd   新密码
* @param  code      短信验证码
* */
export const fgPassWord = (mobile, new_pwd, code) => ajax(BASE_URL + '/login/fgPassWord', {mobile, new_pwd, code})

/*
* 用户修改密码
* @param  mobile      手机号
* @param  code        短信验证码
* @param  old_pwd     手机号
* @param  new_pwd     新密码
* @param  repeat_pwd  短信验证码
* */
export const upPassWord = (mobile, code, old_pwd, new_pwd, repeat_pwd) => ajax(BASE_URL + '/login/upPassWord', {mobile, code, old_pwd, new_pwd, repeat_pwd})

