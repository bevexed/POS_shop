<template>
  <article>
    <Headers title="会员激活"
             :is-back="true"/>

    <section class="card">
      <h6>永久会员</h6>
      <main>999元</main>
    </section>
    <p>会员3大特权</p>

    <ul>
      <li>
        <img src="../../assets/vip/12@3x.png" alt=""> <span>高级会员管理功能</span>
      </li>
      <li>
        <img src="../../assets/vip/2@3x.png" alt=""> <span>立刻赚收益</span>
      </li>
      <li>
        <img src="../../assets/vip/3@3x.png" alt=""> <span>高级交易管理功能</span>
      </li>
    </ul>
    <a @click="addMember">加入会员</a>
    <Pay :isShow="bol" @close="closeBox" :price="totalPuch" :orderNo="orderNo"/>
  </article>
</template>

<script>
  import Headers from '../../components/Headers'
  import Pay from '../../components/pay'
  import {member} from "../../api/order";

  export default {
    name: "ActiveVip",
    components: {
      Headers,
      Pay
    },
    data() {
      return {
        bol: false,
        totalPuch: '',
        orderNo: ''
      }
    },
    methods: {
      closeBox(e) {
        this.bol = e;
      },
      // 激活会员
      async addMember() {
        let res = await member(localStorage.uid)
        if (res.code === 1) {
          // mes: res.message,
          this.bol = true
          this.totalPuch = 999
          this.orderNo = res.out_trade_no
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .card {
    margin: 17px auto;
    width: 296px;
    height: 157px;
    background: url("../../assets/vip/activevip@3x.png") no-repeat;
    background-size: 296px 157px;

    h6 {
      padding: 17px 0 0 26px;
      font-size: 14px;
      color: white;
      font-weight: normal;
    }

    main {
      margin-top: 33px;
      text-align: center;
      color: white;
      font-size: 25px;
    }
  }

  p {
    margin: 23px auto;
    text-align: center;
    line-height: 21px;
    font-size: 13px;
    color: white;
    width: 210px;
    height: 21px;
    background: linear-gradient(270deg, #fc6b49, #fd947b);
    border-radius: 11px;
  }

  ul {
    width: 296px;
    margin: 25px auto;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      img {
        width: 63px;
        height: 63px;
      }

      span {
        margin-left: 20px;
        font-size: 14px;
        color: #4d4d4d;
      }
    }
  }

  a {
    display: block;
    text-align: center;
    color: white;
    font-size: 18px;
    margin: 60px auto;
    width: 342px;
    height: 44px;
    line-height: 44px;
    border-radius: 5px;
    background: #ff6d48;
    box-shadow: #ff9077 0 0 9px 0;
  }
</style>
