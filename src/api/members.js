import ajax from './ajax'
import {BASE_URL} from './BASE_URL'


/*
* 会员列表接口
* @param   page     页数                                必传
* @param   uid      用户ID                              必传
* @param   level    等级（1：一级；2：二级；3：三级）       必传
* */
export const listsUser = (page, uid, level) => ajax(BASE_URL + '/members/listsUser', {page, uid, level}, "GET")
