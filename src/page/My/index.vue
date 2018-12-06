<template>
  <section>
    <header class="user">
      <img src="" alt="">
      <p><span>HAHAHAHAHAHAHA</span> <br>
        <yd-icon size="20px" name="footmark"></yd-icon>
      </p>
      <span>></span>
    </header>

    <section class="booking">
      <header>
        我的订单
        <span @click="$router.push({name:'myBooking',params:{type:0}})">全部订单 > </span>
      </header>
      <footer>
        <ul>
          <router-link tag="li" :to="{name:'myBooking',params:{type:1}}">
            <img src="../../assets/my/daifukuan@3x.png" alt="">
            <p>待付款 <span>1</span></p>
          </router-link>
          <router-link tag="li" :to="{name:'myBooking',params:{type:2}}">
            <img src="../../assets/my/daifahuo-2@3x.png" alt="">
            <p>待发货 <span>1</span></p>
          </router-link>
          <router-link tag="li" :to="{name:'myBooking',params:{type:3}}">
            <img src="../../assets/my/daishouhuo-2@3x.png" alt="">
            <p>待收货 <span>1</span></p>
          </router-link>
          <router-link tag="li" :to="{name:'myBooking',params:{type:4}}">
            <img src="../../assets/my/31daipingjia@3x.png" alt="">
            <p>待评价 <span>1</span></p>
          </router-link>
          <router-link tag="li" :to="{name:'myBooking',params:{type:0}}">
            <img src="../../assets/my/tuikuan@3x.png" alt="">
            <p>退款 <span>1</span></p>
          </router-link>
        </ul>
      </footer>

    </section>
    <footer class="set">
      <ul>
        <router-link to="/setting" tag="li">
          <img src="../../assets/my/shezhi@3x.png" alt="">
          <p>我的设置</p>
        </router-link>
        <router-link :to="{name:'myBooking',params:{type:0}}" tag="li">
          <img src="../../assets/my/dingdanguanli@3x.png" alt="">
          <p>订单管理</p>
        </router-link>
        <li>
          <img src="../../assets/my/huiyuanguanli@3x.png" alt="">
          <p>会员管理</p>
        </li>
        <li>
          <img src="../../assets/my/jiaoyiguanli-2@3x.png" alt="">
          <p>交易管理</p>
        </li>
        <li>
          <img src="../../assets/my/shouyiguanli@3x.png" alt="">
          <p>收益管理</p>
        </li>
        <li>
          <img src="../../assets/my/buy-car@3x.png" alt="">
          <p>购物车管理</p>
        </li>
        <li>
          <img src="../../assets/my/tuiguang-@3x.png" alt="">
          <p>推广链接</p>
        </li>
        <li>
          <img src="../../assets/my/shiyongzhinan@3x.png" alt="">
          <p>使用指南</p>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
  export default {
    name: "my"
  }
</script>

<style scoped lang="less">
  header.user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FF6D4B;
    padding: 60px 30px 30px;

    > img {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: white;
    }

    > p {
      margin-left: 10px;
      font-size: 18px;
      color: white;
    }

    > span {
      width: 20%;
      text-align: right;
      font-size: 18px;
      color: white;
    }
  }

  .booking {
    width: 96%;
    background: white;
    border-radius: 10px;
    margin: 10px auto;

    header {
      padding: 15px 5px;
      border-bottom: 1px solid #dfdfdf;
      color: #4d4d4d;

      > span {
        font-size: 13px;
        color: #909090;
        float: right;
      }
    }

    footer {
      padding: 20px 0;

      ul {
        display: flex;

        li {
          width: 20%;
          text-align: center;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: column;

          img {
            width: 20px;
          }

          p {
            margin-top: 10px;
            font-size: 13px;
            color: #3c3c3c;

            span {
              color: #f60012;
            }
          }
        }
      }
    }
  }

  footer.set {
    width: 96%;
    border-radius: 10px;
    background: white;
    padding: 15px 0;
    margin: 0 auto 50px;

    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      li {
        display: flex;
        text-align: center;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        margin-top: 26px;
        width: 33%;

        img {
          width: 25px;
        }

        p {
          margin: 14px 0;
          font-size: 13px;
          color: #4d4d4d;
        }
      }
    }

  }
</style>
