<template>
  <div>
    <div class="login_head">
      <headers :isBack="true"></headers>
      <img class="logoPng" src="http://img1.imgtn.bdimg.com/it/u=413360152,2993093907&fm=11&gp=0.jpg" alt="">
      <p>logo</p>
      <p class="loginSkr">注册</p>
    </div>
    <div class="register_box">
      <yd-cell-group>
        <yd-cell-item>
          <yd-input regex="mobile" slot="right" required v-model="mobile" max="11" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <yd-input slot="right" v-model="code" placeholder="请输入验证码"></yd-input>
          <span slot="right" class="circleSpan"></span>
          <div slot="right" class="getCodeSpan" @click="getCode(mobile,type)">{{timer === 60?'获取验证码': timer +'s后再试'}}</div>
        </yd-cell-item>
        <yd-cell-item>
          <yd-input slot="right" v-model="promote" placeholder="请输入邀请码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>

      <yd-button class="loginBtn" size="large" type="primary" shape="circle" @click.native="doRegister">注册</yd-button>
    </div>
  </div>
</template>

<script>
  import {sendMsg} from '../../api/sendMsg'
  import {mapActions, mapState} from 'vuex'
  import headers from '../../components/Headers'

  export default {
    data() {
      return {
        mobile: '',
        password: '',
        code: '',
        promote: '',
        type: '',
        timer: 60,
        T: '',
      }
    },
    components: {
      headers
    },
    watch: {
      registered(last, old) {
        this.$router.push('/login')
      }
    },
    computed: {
      ...mapState(['registered'])
    },
    methods: {
      ...mapActions(['register']),
      // 注册
      async doRegister() {
        let {mobile, password, code, promote} = this
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
        if (password.length < 6) {
          this.$dialog.notify({
            mes: '密码不能小于6位',
            timeout: 3000,
          });
          return
        }
        if (!code) {
          this.$dialog.notify({
            mes: '请输入验证码',
            timeout: 3000
          })
          return
        }

        this.register({mobile, password, code, promote})
      },
      async getCode(mobile, type) {
        let numberPattern = /^[0-9]{11}$/
        if (!mobile || !numberPattern.test(mobile)) {
          this.$dialog.notify({
            mes: '手机号格式不正确',
            timeout: 3000,
          });
          return
        }
        if (this.timer === 60) {
          let result = await sendMsg(mobile, type)
          if (result.code === 1) {
            this.$dialog.notify({
              mes: result.message,
              timeout: 3000
            })
          } else {
            this.$dialog.notify({
              mes: result.message,
              timeout: 3000
            })
            return
          }
          console.log(result);
          this.T = setInterval(() => {
            this.timer--;
            if (this.timer === 0) {
              this.timer = 60
              this.T = null
            }
          }, 1000)
        } else {
          this.$dialog.notify({
            mes: this.timer + 's后再试'
          })
        }
      }
    },

    async mounted() {

    }
  }
</script>

<style scoped lang="less">
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

  .register_box {
    width: 308px;
    height: 350px;
    border-radius: 16px;
    box-shadow: 0px 4px 7px 0px rgba(181, 181, 181, 0.5);
    background: #fff;
    margin: -116px auto;
    padding: 26px 34px;
    box-sizing: border-box;

    .circleSpan {
      display: inline-block;
      width: 1px;
      height: 24px;
      background: #b5b5b5;
      margin-right: 14px;
    }

    .getCodeSpan {
      white-space: nowrap;
    }

    .yd-cell-item:not(:last-child):after {
      margin-left: 0;
      background-image: linear-gradient(0deg, #E8E9EB 50%, transparent 0);
    }

    .loginBtn {
      background: #ff6d48;
      font-size: 18px;
      margin: 36px auto;
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
  }
</style>
