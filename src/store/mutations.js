import {
  LOGIN
} from "./mutation-types";

export default {
  [LOGIN](state,{userInfo}){
    localStorage.uid = userInfo.uid
    state.userInfo = userInfo
  }
}
