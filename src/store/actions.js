import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import {
  LOGIN
} from "./mutation-types";

import {
  doRegister,
  doLogin
} from '../api/login'

export default {
  async login({commit, state},payload) {
    const result = await doLogin(payload);
    let userInfo = result.data
    if (result.code === 1){
      commit(LOGIN, {userInfo})
    }else {
      Notify({
        mes:result.message,
        timeout: 3000
      })
    }

  },

  async register({commit, state},payload) {
    let result = await doRegister(payload);
    console.log(result);
    if (result.code === 1){
      let userInfo = result.data
      commit(LOGIN, {userInfo})
    } else {
      Notify({
        mes:result.message,
        timeout: 3000
      })
    }

  },
}
