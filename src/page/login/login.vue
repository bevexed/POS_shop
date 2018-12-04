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
          <yd-input regex="mobile" slot="right" required v-model="input1" max="20" placeholder="请输入账户"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <yd-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>

      <yd-button class="loginBtn" size="large" type="primary" shape="circle" @click.native="login">登录</yd-button>
      <router-link to="/forgetPwd" class="fpwd">忘记密码？</router-link>
    </div>
  </div>
</template>

<script>
  import headers from '../../components/headers'
    export default {
      data(){
        return {
          input1: '',
          input2: '',
          isTrue:true
        }
      },
      components:{
        headers
      },
      methods:{
        login(){
          this.$router.push('/indexPage')
        }
      }
    }
</script>
<style scoped lang="less">
  @width:100%;
  .login_head {
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
    box-shadow:0px 4px 7px 0px rgba(181,181,181,0.5);
    background: #fff;
    margin: -116px auto;
    padding: 26px 34px;
    box-sizing: border-box;
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
      font-family: myFont,sans-serif;
      box-shadow:0px 4px 11px 0px rgba(254,48,0,0.5);
    }
    .loginBtn:active{
      background: rgba(254,48,0,0.5);
    }
    .fpwd {
      margin-top: 42px;
      font-size: 15px;
    }
  }
</style>
