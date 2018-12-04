<template>
  <section>
    <headers :title="'确认订单'" :isBack="true"></headers>
    <section class="address">
      <header>
        收货人：哈哈哈哈 <span>12345678913</span>
      </header>
      <footer>
        <yd-icon name="location"></yd-icon>
        收货地址：浙江省杭州市西湖区1234号哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </footer>
    </section>

  </section>
</template>

<script>
  import headers from '../../components/headers'

  export default {
    name: "booking",
    components: {
      headers
    }
  }
</script>

<style scoped>
.address{
  font-size: 14px;
  color: #4d4d4d;

}
</style>
