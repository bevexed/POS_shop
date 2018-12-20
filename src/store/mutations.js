import {
  LOGIN,
  REGISTER,
  CITY
} from "./mutation-types";

export default {
  [LOGIN](state, {userInfo}) {
    localStorage.uid = userInfo.uid
    localStorage.is_actives = userInfo.is_actives
    state.userInfo = userInfo
  },
  [REGISTER](state, {registered}) {
    state.registered = registered
  },
  [CITY](state, {city}) {
    state.city = city
  }
}
