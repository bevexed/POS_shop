<template>
  <section>
    <headers :title="'结算卡信息'" :isBack="true"></headers>
    <header>
      添加一张本人储蓄卡作为您的交易入账卡
    </header>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">持卡人： </span>
        <yd-input slot="right" required v-model="user" max="20" placeholder="请输入持卡人姓名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">银行卡卡号： </span>
        <yd-input slot="right" required regex="bankcard" v-model="bankcard" placeholder="请输入银行卡号"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <footer>
      <yd-button bgcolor="#ff6d48" color="white" size="large" type="primary" shape="circle">确定</yd-button>
    </footer>
  </section>

</template>

<script>
  import headers from '../../components/headers'

  export default {
    name: "banckCard",
    components: {
      headers
    },
    data() {
      return {
        user: '',
        bankcard: ''
      }
    }
  }
</script>

<style scoped>
  header {
    font-size: 12px;
    color: #909090;
    padding: 10px 12px;
  }

  .yd-input input::placeholder {
    font-size: 12px !important;
    color: #c5c5ca !important;
  }

  footer {
    width: 90%;
    margin: 85px auto;
  }


</style>
