import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//使用指南
export const usebook = () => ajax(BASE_URL + '/guide',{},'GET');


