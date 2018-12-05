<template>
  <section>
    <headers :title="'修改密码'" :isBack="true"></headers>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">旧密码：</span>
        <yd-input slot="right" v-model="oldPassword" required :debug="true" type="password" placeholder="请输入旧密码"></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">请输入新密码：</span>
        <yd-input slot="right" v-model="newPass" required type="password"  placeholder="请输入新密码"></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">确认密码：</span>
        <yd-input slot="right" v-model="surePass" required type="password"  placeholder="请再次输入新密码"></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">手机号码：</span>
        <input type="tel" slot="right" placeholder="请输入手机号码" max="11" required :regex="phone" v-model="phone">

        <!-- ↓↓关键代码是这里↓↓ -->
        <yd-sendcode slot="right"
                     v-model="start1"
                     @click.native="sendCode1"
                     type="warning"
        ></yd-sendcode>
        <!-- ↑↑关键代码是这里↑↑ -->

      </yd-cell-item>


      <yd-cell-item>
        <span slot="left">请输入验证码：</span>
        <yd-input slot="right" v-model="code" required placeholder="请输入验证码"></yd-input>
      </yd-cell-item>


    </yd-cell-group>
  </section>
</template>

<script>
  import headers from '../../components/headers'

  export default {
    name: "changePassword",
    components: {
      headers
    },
    data() {
      return {
        oldPassword: '',
        newPass: '',
        surePass: '',
        phone: '',
        code: '',
        start1: false
      }
    },
    methods: {
      sendCode1() {
        this.$dialog.loading.open('发送中...');
        setTimeout(() => {

          this.start1 = true;
          this.$dialog.loading.close();

          this.$dialog.toast({
            mes: '已发送',
            icon: 'success',
            timeout: 1500
          });

        }, 1000);
      }
    }
  }
</script>

<style scoped lang="less">
  .yd-btn-warning {
    background: #ff6d48 !important;
  }
  span{
    font-size: 14px;
    color: #4d4d4d;
  }
  input::placeholder{
    color: #bfbfbf !important;
    font-size: 13px;
  }

</style>
