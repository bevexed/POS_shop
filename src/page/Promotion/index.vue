<template>
  <div class="plan_content">
    <headers :title="title" :isBack="true" :isScan="true"></headers>
    <div class="plan_box">
      <p class="plan_title">推广码</p>
      <p class="plan_code">{{$route.query.promotes}}</p>
      <span>您的好友在注册时也可可以填写哦</span>
      <div class="dotSpan"></div>
      <img class="qrCode" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=847853172,894993951&fm=27&gp=0.jpg" alt="二维码图片">
      <button class="keepCode">保存二维码</button>
    </div>
  </div>
</template>

<script>
  import headers from '../../components/Headers'

  export default {
    data() {
      return {
        title: '推广链接'
      }
    },
    components: {
      headers
    }
  }
</script>

<style scoped lang="less">
  .plan_content {
    background: rgba(3, 3, 3, .4982) !important;
    min-height: 100vh;

    .plan_box {
      width: 272px;
      height: 355px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding: 21px 0;
      box-sizing: border-box;

      .plan_title {
        font-size: 18px;
        font-weight: bold;
      }

      .plan_code {
        color: #FF6D4B;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 2px;
        line-height: 30px;
        margin: 4px 0;
      }

      & > span {
        color: #909090;
        font-size: 10px;
      }

      .dotSpan {
        height: 1px;
        border-bottom: 1px #efeded dashed;
        margin: 7px 0 30px;
      }

      .qrCode {
        width: 125px;
        height: 125px;
        margin: 0 73px 30px;
      }

      .keepCode {
        width: 139px;
        height: 40px;
        background: #FF6D4B;
        border-radius: 21px;
        color: #fff;
      }
    }
  }
</style>
