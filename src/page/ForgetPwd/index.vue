<template>
  <div>
    <headers :title="title" :isBack="true"></headers>
    <div class="forgetBox">
      <yd-cell-group>
        <yd-cell-item>
          <yd-input slot="right" regex="mobile" required v-model="mobile" max="11" placeholder="请输入手机号"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <yd-input slot="right" v-model="code" placeholder="请输入验证码"></yd-input>
          <span slot="right" class="circleSpan"></span>
          <div slot="right" class="getCodeSpan" @click="getCode(mobile,type)">{{timer === 60?'获取验证码': timer +'s后再试'}}</div>
        </yd-cell-item>
        <yd-cell-item>
          <yd-input slot="right" type="password" v-model="new_pwd" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <div class="btn">
        <yd-button size="large" type="primary" bgcolor="#ff6d48" color="#fff" shape="circle" @click.native="changPass">修改密码</yd-button>
      </div>
    </div>
  </div>
</template>

<script>
  import headers from '../../components/Headers'
  import {fgPassWord} from "../../api/login";
  import {sendMsg} from "../../api/sendMsg";

  export default {
    name: "forgetPwd",
    components: {
      headers
    },
    data() {
      return {
        title: '忘记密码',
        mobile: '', // 手机号
        new_pwd: '',
        code: '',
        type: 2,
        timer: 60,
        T: '',
      }
    },
    methods: {
      async changPass() {
        let {mobile, new_pwd, code} = this
        let numberPattern = /^[0-9]{11}$/
        if (!mobile || !numberPattern.test(mobile)) {
          this.$dialog.notify({
            mes: '手机号格式不正确',
            timeout: 3000,
          });
          return
        }
        if (!new_pwd || new_pwd.length < 6) {
          this.$dialog.notify({
            mes: '密码长度不能小于6位',
            timeout: 3000,
          });
          return
        }
        if (!code) {
          this.$dialog.notify({
            mes: '请输入验证码',
            timeout: 3000,
          });
          return
        }

        let result = await fgPassWord(mobile, new_pwd, code)
        if (result.code === 1) {
          this.$dialog.toast({
            mes: result.message,
            icon: 'success',
            timeout: 1000,
            callback: () => {
              this.$router.replace('/login')
            }
          })
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
        }

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
          this.T = setInterval(() => {
            this.timer--;
            if (this.timer === 0) {
              this.timer = 60
              clearInterval(this.T)
            }
          }, 1000)
        } else {
          this.$dialog.notify({
            mes: this.timer + 's后再试'
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .forgetBox {
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

    .yd-cell-item {
      background: #f5f5f5;
    }

    div.btn {
      width: 90%;
      margin: 100px auto;
    }
  }
</style>
