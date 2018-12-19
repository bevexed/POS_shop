<template>
  <div>
    <div class="login_head">
      <headers :isRegister="isTrue"></headers>
      <img class="logoPng" src="http://img1.imgtn.bdimg.com/it/u=2635567029,1174386628&fm=11&gp=0.jpg" alt="">
      <p>logo</p>
      <p class="loginSkr">登录</p>
    </div>
    <div class="login_box">
      <yd-cell-group>
        <yd-cell-item>
          <yd-input regex="mobile" slot="right" required v-model="mobile" max="20" placeholder="请输入账户"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <yd-button class="loginBtn" size="large" type="primary" shape="circle" @click.native="toLogin({mobile,password})">登录</yd-button>
      <router-link to="/forgetPwd" class="fpwd">忘记密码？</router-link>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import headers from '../../components/Headers'

  export default {
    data() {
      return {
        mobile: '',
        password: '',
        isTrue: true
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    watch: {
      userInfo(last, old) {
        this.$router.replace('/index')
      },
    },
    components: {
      headers
    },
    methods: {
      ...mapActions(['login']),
      async toLogin(user) {
        let {mobile, password} = this
        let numberPattern = /^[0-9]{11}$/
        if (!mobile || !numberPattern.test(mobile)) {
          this.$dialog.notify({
            mes: '手机号格式不正确',
            timeout: 3000,
          });
          return
        }
        if (!password) {
          this.$dialog.notify({
            mes: '密码不能为空',
            timeout: 3000,
          });
          return
        }
        if (password.length < 8) {
          this.$dialog.notify({
            mes: '密码不能小于8位',
            timeout: 3000,
          });
          return
        }
        this.login(user)
      }
    },
    mounted() {
    }
  }
</script>
<style scoped lang="less">
  @width: 100%;
  .login_head {
    text-align: center;
    height: 334px;
    background: #ff6d48;
    color: #fff;

    .logoPng {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-bottom: 6px;
    }

    .loginSkr {
      font-size: 20px;
      margin-top: 17px;
    }
  }

  .login_box {
    width: 308px;
    height: 300px;
    border-radius: 16px;
    box-shadow: 0px 4px 7px 0px rgba(181, 181, 181, 0.5);
    background: #fff;
    margin: -116px auto;
    padding: 26px 34px;
    box-sizing: border-box;
    text-align: center;

    .yd-cell-item {
      color: #4d4d4d;
    }

    .yd-cell-item input {
      height: 44px;
    }

    .yd-cell-item:not(:last-child):after {
      margin-left: 0;
      background: #E8E9EB;
    }

    .loginBtn {
      background: #ff6d48;
      font-size: 18px;
      margin: 38px auto;
      font-weight: 400;
      width: 184px;
      height: 40px;
      border-radius: 22px;
      font-family: myFont, sans-serif;
      box-shadow: 0px 4px 11px 0px rgba(254, 48, 0, 0.5);
    }

    .loginBtn:active {
      background: rgba(254, 48, 0, 0.5);
    }

    .fpwd {
      margin-top: 42px;
      font-size: 15px;

    }
  }
</style>
