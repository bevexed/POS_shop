/*  个人中心
* */
import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
* 新增/编辑用户收获地址接口
* @param   uid          用户ID        必传
* @param   id           地址ID        修改时必传，新增是不必传
* @param   province_id	省ID          必传
* @param   city_id      市ID          必传
* @param   area_id	    区ID          必传
* @param   address	    用户详细地址    必传
* @param   name	        收货人姓名      必传
* @param   phone	      收货人联系方式   必传
* */
export const addressEdit = (uid, id, province_id, city_id, area_id, address, name, phone) => ajax(BASE_URL + '/users/addressEdit', {uid, id, province_id, city_id, area_id, address, name, phone})


