<template>
    <div class="product_content">
      <img class="productImg" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1722901937,3578003945&fm=27&gp=0.jpg" alt="图片">
      <img class="backIcon" src="../../assets/back.png" alt="图片" @click="backClick">
      <div class="product_info">
        <p class="product_price">¥286</p>
        <p>POS机哈哈哈哈个人哦哈哈活哈哈哈哈哈哈哈哈哈哈哈 哈</p>
        <div>
          <span>运费：10元 </span>
          <span>已售：123 </span>
          <span>杭州市</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
       data(){
         return{

         }
       },
      methods:{
        backClick(){
          this.$router.back();
        }
      }
    }
</script>

<style scoped lang="less">
  .product_content {
    background: #fff!important;
    position: relative;
    .productImg {
      width: 100vw;
      height: 267px;
    }
    .backIcon {
      width: 20px;
      position: absolute;
      top: 33px;
      left: 11px;
    }
    .product_info {
      padding: 14px 19px;
      &>P {
        text-align: left;
      }
      .product_price {
        font-size: 20px;
        color: #FB1313;
        font-weight: bold;
        margin-bottom: 8px;
      }
    }
  }
</style>
