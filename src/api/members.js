import ajax from './ajax'
import {BASE_URL} from './BASE_URL'


/*
* 会员列表接口
* @param   page     页数                                必传
* @param   uid      用户ID                              必传
* @param   level    等级（1：一级；2：二级；3：三级）       必传
* */
export const listsUser = (page, uid, level) => ajax(BASE_URL + '/members/listsUser', {page, uid, level}, "GET")

/*
* 订单交易查询信息接口
* @param   uid             用户ID                              必传
* @param   page            页数                                必传
* @param   begin_time      筛选条件 开始时间                     必传
* @param   end_time        筛选条件 结束时间                     必传
* @param   sku_id          筛选条件 商品通道ID                   必传
* @param   level           等级（1：一级；2：二级；3：三级）       必传
* @param   mobile          电话号                               必传
* */
export const queryTrade = (uid, page, begin_time, end_time, sku_id, level, mobile) => ajax(BASE_URL + '/members/queryTrade', {uid, page, begin_time, end_time, sku_id, level, mobile}, "GET")

/*
* 会员列表接口
* @param   uid      用户ID         必传
* */
export const trades = (uid) => ajax(BASE_URL + '/members/trades', {uid}, "GET")

/*
* 用户收益信息接口
* @param   uid      用户ID         必传
* */
export const earnings = (uid) => ajax(BASE_URL + '/members/earnings', {uid}, "GET")
