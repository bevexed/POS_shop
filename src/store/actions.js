import {Confirm, Alert, Toast, Notify, Loading} from 'vue-ydui/dist/lib.rem/dialog';
import {
  LOGIN,
  REGISTER,
} from "./mutation-types";

import {
  doRegister,
  doLogin
} from '../api/login'

import {
  home
} from "../api/users";

export default {
  async login({commit, state}, payload) {
    const result = await doLogin(payload);
    if (result.code === 1) {
      const res = await home(result.data.uid)
      let userInfo = {...result.data, ...res.data}
      commit(LOGIN, {userInfo})
    } else {
      Notify({
        mes: result.message,
        timeout: 3000
      })
    }

  },

  async register({commit, state}, payload) {
    let result = await doRegister(payload);
    console.log(result);
    if (result.code === 1) {
      let registered = true
      commit(REGISTER, {registered})
    } else {
      Notify({
        mes: result.message,
        timeout: 3000
      })
    }

  },
}
