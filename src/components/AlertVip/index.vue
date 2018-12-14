<template>
  <div class="zxadasdsada">
    <yd-button size="large" type="primary" @click.native="show = true">中间弹出</yd-button>

    <yd-popup v-model="show" position="center" width="90%" style="z-index: 999999999999999999999;overflow: visible">

      <div style="background:#fff;z-index: 99;padding: 17px;border-radius: 20px;padding-top: 79px">
        <p>
          仅限激活会员
        </p>
        <p style="margin-bottom: 34px">
          请点击激活
        </p>
        <p style="text-align: center;">
          <a @click="show = false">取消</a>
          <a>激活</a>
        </p>
      </div>
      <img src="./alert.svg" alt="">
    </yd-popup>
  </div>
</template>

<script>
  export default {
    name: "AlertVip",
    data() {
      return {
        show: false,
      }
    }
  }
</script>

<style lang="less">
  .yd-mask {
    z-index: 0 !important;
  }

</style>

<style scoped lang="less">
  img {
    width: 232px;
    height: 232px;
    position: fixed;
    top: -60%;
    left: 20%;
    z-index: 99999999999999999999999;
  }

  p {
    text-align: center;
    color: #4d4d4d;
    font-size: 18px;

    a {
      display: inline-block;
      width: 126px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border-radius: 5px;

      &:first-child {
        background: #f1f0f0;
      }

      &:last-child {
        margin-left: 30px;
        background: #ff6d4b;
      }
    }
  }
</style>
