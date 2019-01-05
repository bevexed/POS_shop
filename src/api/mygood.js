//我的商品
import ajax from "./ajax";
import {BASE_URL} from "./BASE_URL";

export const product = (uid) => ajax(BASE_URL + '/users/product',{uid});
