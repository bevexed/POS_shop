<template>
  <section>
    <headers :title="'手机号'" :isBack="true"></headers>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">手机号 <i>123123123123131</i></span>
      </yd-cell-item>
    </yd-cell-group>
    <p class="title">
      所使用产品列表
    </p>
    <footer>
      <img src="" alt="">
      <p>
        <span>产品名称</span> <br>
        <span>产品系列</span>
      </p>
    </footer>
  </section>
</template>

<script>
  import headers from '../../components/headers'

  export default {
    name: "PhoneNumber",
    components: {
      headers
    },
  }
</script>

<style scoped lang="less">
  p.title{
    font-size: 12px;
    color: #4d4d4d;
    padding: 6px 13px 13px;
  }
  footer{
    display: flex;
    background: white;
    padding: 13px;
    img {
      display: inline-block;
      width: 70px;
      height: 70px;
      background: #808080;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
</style>
