import {
  LOGIN
} from "./mutation-types";

import {
  doRegister,
  doLogin
} from '../api/login'

export default {
  async login({commit, state},payload) {
    console.log(payload);
    const result = await doLogin(payload);
    if (result.code ===1){
      commit(LOGIN, {userInfo})
    }

  },

  async register({commit, state},payload) {
    console.log(payload);
    let result = await doRegister(payload);
    let userInfo = result.data
    commit(LOGIN, {userInfo})
  },
}
