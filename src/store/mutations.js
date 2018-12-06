import {
  LOGIN,
  REGISTER
} from "./mutation-types";

export default {
  [LOGIN](state, {userInfo}) {
    localStorage.uid = userInfo.uid
    state.userInfo = userInfo
  },
  [REGISTER](state, {registered}) {
    state.registered = registered
  }
}
