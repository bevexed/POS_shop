/*  个人中心
* */
import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 新增/编辑用户收获地址接口
* @param   uid          用户ID        必传
* @param   id           地址ID        修改时必传，新增是不必传
* @param   province_id	省ID          必传
* @param   city_id      市ID          可选
* @param   area_id	    区ID          可选
* @param   address	    用户详细地址    可选
* @param   name	        收货人姓名      可选
* @param   phone	      收货人联系方式   可选
* */
export const doRegister = ({mobile, password, code, promote}) => ajax(BASE_URL + '/users/addressEdit', {mobile, password, code, promote})


