/*  个人中心
* */
import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 个人中心登陆用户相关信息
* @param   uid          用户ID        必传
* */
export const home = (uid) => ajax(BASE_URL + '/users/home', {uid})

/*
* 用户修改头像和昵称 NEW
* @param   uid          用户ID        必传
* @param   avatar       用户头像       必传
* @param   nick_name    用户名称       必传
* */
export const infoEdit = (uid, avatar, nick_name) => ajax(BASE_URL + '/users/infoEdit', {uid, avatar, nick_name})

/*
* 用户实名认证
* @param   uid              用户ID        必传
* @param   real_name        真实姓名       必传
* @param   idCard           身份证号       必传
* @param   front_identity   身份证正面     必传
* @param   reverse_identity 身份证背面     必传
* */
export const realName = (uid, real_name, idCard, front_identity, reverse_identity) => ajax(BASE_URL + '/users/realName', {uid, real_name, idCard, front_identity, reverse_identity})

/*
* 用户新增/修改银行卡信息
* @param   uid          用户ID             必传
* @param   bank_card    银行卡号            必传
* @param   mobile       银行卡绑定卡号       必传
* @param   is_default   是否默认            必传
* @param   code         短信验证码          必传
* @param   id           银行卡ID(编辑时必传，增加时不传)       必传
* */
export const bankEdit = (uid, bank_card, mobile, is_default, code, id) => ajax(BASE_URL + '/users/bankEdit', {uid, bank_card, mobile, is_default, code, id})

/*
* 用户绑定银行卡信息
* @param   uid          用户ID             必传
* */
export const listsBank = (uid) => ajax(BASE_URL + '/users/listsBank', {uid})

/*
* 用户删除银行卡接口
* @param   uid     用户ID     必传
* @param   id      银行卡ID   必传
* */
export const bankDel = (uid, id) => ajax(BASE_URL + '/users/bankDel', {uid, id})

/*
* 新增/编辑用户收获地址接口
* @param   uid          用户ID        必传
* @param   id           地址ID        修改时必传，新增是不必传
* @param   province_id	省ID          必传
* @param   city_id      市ID          必传
* @param   area_id	    区ID          必传
* @param   Address	    用户详细地址    必传
* @param   name	        收货人姓名      必传
* @param   phone	      收货人联系方式   必传
* @param   is_default	  设置默认地址（1:默认地址）   必传
* */
export const addressEdit = (uid, id, address, name, phone, province_id, city_id, area_id, is_default) => ajax(BASE_URL + '/users/addressEdit', {uid, id, address, name, phone, province_id, city_id, area_id, is_default})

/*
* 获取用户收货地址
* @param   uid          用户ID        必传
* */
export const address = (uid) => ajax(BASE_URL + '/users/address', {uid})

/*
* 删除用户收货地址
* @param   uid          用户ID        必传
* @param   id           地址ID        必传
* */
export const addressDel = (uid, id) => ajax(BASE_URL + '/users/addressDel', {uid, id})

/*
* 用户添加评论
* @param   uid            用户ID          必传
* @param   credit_id      信用卡ID        必传
* @param   g_id           商品ID          必传
* @param   content        评论内容         必传
* */
export const add = (uid, credit_id, g_ids, content) => ajax(BASE_URL + '/comment/add', {uid, credit_id, g_ids, content})


