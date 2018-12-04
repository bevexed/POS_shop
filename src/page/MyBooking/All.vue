<template>
  <section class="card">
    <header>
      <img src="" alt="">
      <p>
        POS哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好 <br>
        <span>系列：企业POS机</span>
      </p>
      <div>
        ￥286.00
        <p>x1</p>
      </div>
    </header>
    <section class="price">
      共一件商品 合计：<span>￥268.00</span>
    </section>
    <footer>
      <span>取消订单</span>
      <span>付款</span>
    </footer>
  </section>
</template>

<script>
  export default {
    name: "all"
  }
</script>

<style scoped lang="less">
  .card {
    width: 94%;
    background: white;
    border-radius: 10px;
    margin: 10px auto;
    padding: 14px;

    header {
      display: flex;
      justify-content: space-between;

      > img {
        display: block;
        width: 93px;
        height: 80px;
        background: #909090;
      }

      > p {
        width: 157px;
        font-size: 12px;
        color: #4d4d4d;

        > span {
          color: #909090;
        }
      }

      > div {
        text-align: end;
        color: red;

        p {
          color: #4d4d4d;
        }
      }
    }

    .price {
      margin-top: 10px;
      text-align: end;
      color: #7d7d7d;
      font-size: 13px;

      span {
        color: #25292a;
      }
    }

    footer {
      text-align: end;
      margin-top: 20px;
      span {
        display: inline-block;
        width: 81px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        border: 1px solid #979797;
        text-align: center;

        &:last-child {
          margin-left: 10px;
          border-color: #ff6d4b;
          color: #ff6d4b;
        }
      }
    }
  }
</style>
