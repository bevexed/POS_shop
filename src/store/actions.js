import {
  LOGIN
} from "./mutation-types";

export default {
  async login({commit, state}) {
    const userInfo = true;
    commit(LOGIN, {userInfo})
  },
}
