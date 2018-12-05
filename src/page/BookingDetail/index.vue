<template>
  <section>
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
        <p>></p>
      </footer>
    </section>
    <section class="detail">
      <img src="" alt="">
      <section>
        <header>
          POS机哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好
        </header>
        <p>
          系列：企业pos机
        </p>
        <div class="price">
          ￥286.<i>00</i> <span>x1</span>
        </div>
      </section>

      <footer>
        共{{num}}件商品
        <span>
          小计：
          <i>￥286.<span>00</span></i>
        </span>
      </footer>
    </section>
    <footer class="post-detail">
      <ul>
        <li>
          订单编号：12312321312321321312
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

  export default {
    name: "BookingDetail",
    components: {
      headers
    },
    data() {
      return {
        num: 1
      }
    }
  }
</script>

<style scoped lang="less">
  .address {
    background: #ffffff;
    padding: 10px;
    font-size: 14px;
    color: #4d4d4d;

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
    margin-top: 10px;
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
        margin-top: 15px;
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
    ul{
      li{
        font-size: 14px;
        color: #4d4d4d;
        padding: 9px 0;
      }
    }

  }
</style>
