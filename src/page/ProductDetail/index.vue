<template>
  <div class="product_content">
    <img class="productImg" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1722901937,3578003945&fm=27&gp=0.jpg" alt="图片">
    <img class="backIcon" src="../../assets/back.png" alt="图片" @click="backClick">
    <div class="product_info">
      <p class="product_price">¥286</p>
      <p>POS机哈哈哈哈个人哦哈哈活哈哈哈哈哈哈哈哈哈哈哈 哈</p>
      <div class="price">
        <span>运费：10元 </span>
        <span>已售：123 </span>
        <span>杭州市</span>
      </div>
    </div>

    <div class="detail">
      <header>
        系列：<span>企业pos机</span>
      </header>
      <footer>
        通道类别：
      </footer>
    </div>

    <section class="evaluate">
      <header>
        宝贝评价（1）
        <span>查看全部</span>
      </header>
      <section>
        <img src="" alt="">
        <span>123*9</span>
      </section>
      <footer>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </footer>
    </section>

    <section class="real">
      宝贝图文详情
    </section>

    <aside>
      <span>加入购物车</span>
      <span>立即购买</span>
    </aside>
  </div>
</template>

<script>
  export default {
    name: 'productDetail',
    data() {
      return {}
    },
    methods: {
      backClick() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped lang="less">
  .product_content {
    background: #fff !important;
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

      & > P {
        text-align: left;
      }

      .product_price {
        font-size: 20px;
        color: #FB1313;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 7px;

        span {
          font-size: 13px;
          color: rgb(144, 144, 144);
        }
      }
    }
  }

  .detail {
    border-top: 10px solid rgb(245, 245, 245);
    border-bottom: 10px solid rgb(245, 245, 245);
    padding: 10px;
    color: #909090;
    font-size: 13px;

    header {
      span {
        font-size: 14px;
        color: #4d4d4d;
      }
    }

    footer {
      margin-top: 2px;
    }
  }

  .evaluate {
    padding: 10px;

    header {
      font-size: 13px;
      color: #4d4d4d;

      span {
        float: right;
        color: #ff6d4b;
        font-size: 13px;
      }
    }

    section {
      margin-top: 15px;
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #808080;
      }
    }

    footer {
      margin-top: 4px;
      line-height: 1.5;
      color: #4d4d4d;
      font-size: 13px;
    }
  }

  .real {
    border-top: 10px solid rgb(245, 245, 245);
    padding: 10px;
    font-size: 15px;
    color: #4d4d4d;
  }

  aside {
    position: absolute;
    right: 9px;
    bottom: 13px;
    text-align: center;
    color: #fff;
    font-size: 18px;

    span {
      float: left;
      display: inline-block;
      width: 128px;
      height: 44px;
      line-height: 44px;
    }

    span:first-child {
      background: #fa9078;
      border-radius: 22px 0 0 22px;
    }

    span:last-child {
      background: #ff6d48;
      border-radius: 0 22px 22px 0;
    }
  }

</style>
