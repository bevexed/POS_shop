<template>
  <div class="pop" v-show="show">
    <div style="background:#fff;z-index: 99;padding: 17px;border-radius: 20px;padding-top: 79px">
      <p>
        仅限激活会员
      </p>
      <p style="margin-bottom: 34px">
        请点击激活
      </p>
      <p style="text-align: center;">
        <a @click="$emit('hidden',false)">取消</a>
        <a>激活</a>
      </p>
    </div>
    <img src="./alert.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "AlertVip",
    props: ['show'],
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  .yd-mask {
    z-index: 0 !important;
  }

</style>

<style scoped lang="less">
  .pop{
    height: 200px;
    width: 90%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    margin: auto;
  }
  img {
    position: absolute;
    width: 232px;
    height: 232px;
    top: 60%;
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
