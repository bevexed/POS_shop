<template>
  <section style="min-height: 100vh">
    <headers :title="'确认订单'" :isBack="true"></headers>
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
          POS机哈哈哈哈哈哈哈哈哈
        </header>
        <p>
          系列：企业pos机
        </p>
        <p>
          通道类别：123
        </p>
        <div class="price">
          ￥286.<i>00</i> <span>x1</span>
        </div>
      </section>

      <section class="num">
        购买数量
        <div class="x">
          <yd-spinner width="90px" height="24px" max="99" unit="1" v-model="num"></yd-spinner>
        </div>
      </section>
      <section class="num">
        配送方式
        <p>
          快递：￥10.00
        </p>
      </section>
      <section class="num">
        买家留言
        <textarea name="" id="" cols="38" rows="1" placeholder="选填：填写内容已和卖家协商确认"></textarea>
      </section>
      <footer>
        共{{num}}件商品
        <span>
          小计：
          <i>￥286.<span>00</span></i>
        </span>
      </footer>
    </section>
    <footer class="bottom">
      <p>
        合计金额：<span>￥286.<i>00</i></span>
      </p>
      <a>提交订单</a>

    </footer>
  </section>
</template>

<script>
  import headers from '../../components/headers'

  export default {
    name: "booking",
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
        margin: 0 4px;
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
        margin-top: 10px;
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

    & > section.num {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      font-size: 14px;
      color: #4d4d4d;
      border-bottom: 1px solid #dddddd;
      padding: 8px 0;

      > div.x {
        border: 1px solid #a8a8a8;
        border-radius: 4px;
      }

      textarea {
        border: none;
      }

      textarea::placeholder {
        color: #c5c5ca;
        font-size: 14px;
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

  footer.bottom {
    position: absolute;
    bottom: 0;
    background: white;
    height: 50px;
    width: 100%;

    > p {
      position: absolute;
      bottom: 0;
      right: 134px;
      span {
        line-height: 36px;
        font-size: 18px;
        color: red;

        i {
          font-size: 14px;
        }
      }
    }

    a {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 44px;
      line-height: 44px;
      width: 126px;
      text-align: center;
      font-size: 18px;
      color: white;
      background: #ff6d4b;
      display: inline-block;
    }
  }
</style>
