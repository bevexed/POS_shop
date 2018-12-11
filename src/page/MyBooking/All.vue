<template>
  <section>
    <section class="card" v-for="(v,i) in data" :key="i">
      <header>
        <img src="" alt="">
        <p>
          POS哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好 <br>
          <span>通道：1234</span> <br>
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
      <!--待付款-->
      <footer v-if="v.status === 1">
        <span class="cancel>">取消订单</span>
        <span class="pay>">付款</span>
      </footer>
      <!--待发货-->
      <footer v-if="v.status === 2">
        <span class="del>">删除订单</span>
        <span class="elva">待发货</span>
      </footer>
      <!--待收货-->
      <footer v-if="v.status === 3">
        <span class="del>">删除订单</span>
        <span class="post>">查看物流</span>
        <span class="elva">确认发货</span>
      </footer>
      <!--待评价-->
      <footer v-if="v.status === 4">
        <span class="del>">删除订单</span>
        <span class="post>">查看物流</span>
        <span class="elva">评价</span>
      </footer>
      <!--带退款-->
      <footer v-if="v.status === 5">
        <span class="del>">删除订单</span>
        <span class="post>">查看物流</span>
        <span class="elva">评价</span>
      </footer>
    </section>
  </section>
</template>

<script>

  export default {
    name: "all",
    data() {
      return {}
    },
    props: ['data'],
    methods: {},
    created() {

    }
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
        margin-left: 10px;

        &.pay, &.elva {
          border-color: #ff6d4b;
          color: #ff6d4b;
        }
      }
    }
  }
</style>
