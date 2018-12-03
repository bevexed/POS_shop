<template>
    <div>
      <headers :title="title" :isBack="true"></headers>
      <div class="forgetBox">
        <yd-cell-group>
          <yd-cell-item>
            <yd-input slot="right" regex="mobile" required v-model="input1" max="11" placeholder="请输入手机号"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <yd-input slot="right" v-model="input2" placeholder="请输入验证码"></yd-input>
            <span slot="right" class="circleSpan"></span>
            <div slot="right" class="getCodeSpan">获取验证码</div>
          </yd-cell-item>
          <yd-cell-item>
            <yd-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></yd-input>
          </yd-cell-item>
        </yd-cell-group>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/headers'
    export default {
        name: "forgetPwd",
      data(){
          return{
            title:'忘记密码'
          }
      },
      components:{
          headers
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
      background-image: linear-gradient(0deg,#E8E9EB 50%,transparent 0);
    }
    .yd-cell-item {
      background: #f5f5f5;
    }
  }
</style>
