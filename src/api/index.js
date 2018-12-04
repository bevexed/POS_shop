import ajax from './ajax'

const BASE_URL = 'http://lzxprogrammer.com'

/*
* 注册
* @param   mobile     用户账号      必传
* @param   password   用户密码      必传
* @param   code       短信验证码    必传
* @param   promote    邀请码        可选
* */
export const doRegister = (mobile,password,code,promote) => ajax(BASE_URL + '/login/doRegister',{mobile,password,code,promote})
// export const doRegister = (mobile,password,code,promote) => ajax(`https://shop.zhihuimall.com.cn:443/zhihuishop/public/index.php/api/allbanner/bannerlist`,{mobile,password,code,promote})

/*
* 登录
* @param   mobile     用户账号      必传
* @param   password   用户密码      必传
* */
export const doLogin = (mobile,password) => ajax(BASE_URL + '/login/doLogin',{mobile,password})
