<template>
  <section>
    <headers :title="'修改密码'" :isBack="true"></headers>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">旧密码：</span>
        <yd-input slot="right" v-model="old_pwd" required :debug="true" type="password" placeholder="请输入旧密码"></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">请输入新密码：</span>
        <yd-input slot="right" v-model="new_pwd" required type="password" placeholder="请输入新密码"></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">确认密码：</span>
        <yd-input slot="right" v-model="repeat_pwd" required type="password" placeholder="请再次输入新密码"></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">手机号码：</span>
        <input type="tel" slot="right" placeholder="请输入手机号码" max="11" required regex="phone" v-model="mobile">

        <!-- ↓↓关键代码是这里↓↓ -->
        <yd-sendcode slot="right"
                     v-model="start1"
                     @click.native="sendCode"
                     type="warning"
        ></yd-sendcode>
        <!-- ↑↑关键代码是这里↑↑ -->

      </yd-cell-item>


      <yd-cell-item>
        <span slot="left">请输入验证码：</span>
        <yd-input slot="right" v-model="code" required placeholder="请输入验证码"></yd-input>
      </yd-cell-item>


    </yd-cell-group>
    <div class="btn">
      <yd-button size="large" type="primary" bgcolor="#ff6d48" color="#fff" shape="circle" @click.native="changPass">修改密码</yd-button>
    </div>
  </section>
</template>

<script>
  import headers from '../../components/Headers'
  import {upPassWord} from "../../api/login";
  import {sendMsg} from "../../api/sendMsg";

  export default {
    name: "changePassword",
    components: {
      headers
    },
    data() {
      return {
        old_pwd: '',
        new_pwd: '',
        repeat_pwd: '',
        mobile: '',
        code: '',
        start1: false,
        type: ''
      }
    },
    methods: {
      async changPass() {
        let {mobile, code, old_pwd, new_pwd, repeat_pwd} = this
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
        if (new_pwd !== repeat_pwd) {
          this.$dialog.notify({
            mes: '两次密码不一致',
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

        let result = await upPassWord(mobile, code, old_pwd, new_pwd, repeat_pwd)
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
      async sendCode() {
        let {mobile, type} = this
        let numberPattern = /^[0-9]{11}$/
        if (!mobile || !numberPattern.test(mobile)) {
          this.$dialog.notify({
            mes: '手机号格式不正确',
            timeout: 3000,
          });
          return
        }
        this.$dialog.loading.open('发送中...');
        let result = await sendMsg(mobile, type)
        if (result.code === 1) {
          this.start1 = true;
          this.$dialog.loading.close();
          this.$dialog.toast({
            mes: '已发送',
            icon: 'success',
            timeout: 1500
          });
        }

      }
    }
  }
</script>

<style scoped lang="less">
  .yd-btn-warning {
    background: #ff6d48 !important;
  }

  span {
    font-size: 14px;
    color: #4d4d4d;
  }

  input::placeholder {
    color: #bfbfbf !important;
    font-size: 13px;
  }

  div.btn {
    width: 90%;
    margin: 100px auto;
  }

</style>
