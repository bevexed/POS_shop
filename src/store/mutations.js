import {
  LOGIN
} from "./mutation-types";

export default {
  [LOGIN](state,{userInfo}){
    state.userInfo = userInfo
  }
}
