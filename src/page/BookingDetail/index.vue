<template>
  <section v-if="ordersDetailData">
    <headers :title="'订单详情'" :isBack="true"></headers>
    <section class="address">
      <header>
        收货人：哈哈哈哈 <span>12345678913</span>
      </header>
      <footer>
        <yd-icon size="22px" name="location"></yd-icon>
        <p>
          收货地址：浙江省杭州市西湖区1234号哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </p>
        <p></p>
      </footer>
    </section>
    <section class="detail" v-for="(v,i) in ordersDetailData.goods_sku">
      <img :src="IMG_BASE_URL+v.show_pic" alt="">
      <section>
        <header>
          {{v.goods_name}}
        </header>
        <p>
          系列：{{v.category}}
        </p>
        <p>
          通道类型：{{v.trad_channel}}
        </p>
        <div class="price">
          ￥{{v.price.split('.')[0]}}.<i>{{v.price.split('.')[1]}}</i> <span>x{{v.amount}}</span>
        </div>
      </section>
    </section>
    <section class="total_money">
      <footer>
        共{{1}}件商品
        <span>
          小计：
          <i>￥{{ordersDetailData.total_amount.split('.')[0]}}.<span>{{ordersDetailData.total_amount.split('.')[1]}}</span></i>
        </span>
      </footer>
    </section>
    <footer class="post-detail">
      <ul>
        <li>
          订单编号：{{ordersDetailData.no}}
        </li>
        <li>
          创建时间：2018-11-23 14:00:09
        </li>
        <li>
          付款时间：2018-11-23 14:00:09
        </li>
        <li>
          发货时间：2018-11-23 14:00:09
        </li>
        <li>
          成交时间：2018-11-23 14:00:09
        </li>


      </ul>
    </footer>
  </section>
</template>

<script>
  import headers from '../../components/headers'
  import {IMG_BASE_URL} from "../../api/BASE_URL";
  import {ordersDetail} from "../../api/orders";

  export default {
    name: "BookingDetail",
    components: {
      headers
    },
    data() {
      return {
        IMG_BASE_URL,
        ordersDetailData: ''
      }
    },
    methods: {
      async getOrdersDetail() {
        let result = await ordersDetail(this.$route.params.id, localStorage.uid)
        if (result.code === 1) {
          this.ordersDetailData = result.data
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
        }

      }
    },
    mounted() {
      this.getOrdersDetail()
    }
  }
</script>

<style scoped lang="less">
  .address {
    background: #ffffff;
    padding: 10px;
    font-size: 14px;
    color: #4d4d4d;
    margin-bottom: 10px;

    header {
      margin-left: 27px;

      span {
        float: right;
      }
    }

    footer {
      margin-top: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        margin: 0 6px;
      }
    }
  }

  .detail {
    background: white;
    padding: 10px;

    img {
      display: inline-block;
      width: 100px;
      height: 100px;
      background: #808080;
    }

    section {
      width: 65%;
      display: inline-block;
      vertical-align: top;
      margin-left: 10px;

      header {
        font-size: 14px;
        color: #4d4d4d;
      }

      p {
        font-size: 14px;
        color: #909090;
        margin-top: 4px;
      }

      .price {
        margin-top: 5px;
        font-size: 18px;
        color: #f60012;

        i {
          font-size: 14px;
        }

        span {
          float: right;
          font-size: 18px;
          color: #4d4d4d;
        }
      }

    }


  }

  .total_money {
    background: white;
    padding: 10px;

    footer {
      padding: 10px 0 0 0;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      > span {
        margin-left: 10px;

        i {
          color: red;
          font-size: 18px;

          span {
            font-size: 14px;
          }
        }
      }
    }
  }

  .post-detail {
    padding: 10px;
    background: white;
    margin-top: 6px;

    ul {
      li {
        font-size: 14px;
        color: #4d4d4d;
        padding: 9px 0;
      }
    }

  }
</style>
