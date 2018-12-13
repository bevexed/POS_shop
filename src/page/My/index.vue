<template>
  <section>
    <header class="user" @click="$router.push('/setting')">
      <img :src="IMG_BASE_URL+homeData.avatars" alt="">
      <p><span>{{homeData.nick_name}}</span> <br>
        <!--<yd-icon size="20px" name="footmark"></yd-icon>-->
        {{homeData.is_actives === 1 ? '会员已激活':'会员未激活'}}
      </p>
      <span class="vip" v-if="homeData.is_actives === 0 ">会员激活</span>
      <span v-else>></span>
    </header>

    <section class="booking">
      <header>
        我的订单
        <span @click="$router.push({name:'myBooking',params:{type:'all'}})">全部订单 > </span>
      </header>
      <footer>
        <ul>
          <router-link tag="li" :to="{name:'myBooking',params:{type:0}}">
            <img src="../../assets/my/daifukuan@3x.png" alt="">
            <p>待付款 <span>{{homeData.obligation}}</span></p>
          </router-link>
          <router-link tag="li" :to="{name:'myBooking',params:{type:1}}">
            <img src="../../assets/my/daifahuo-2@3x.png" alt="">
            <p>待发货 <span>{{homeData.accountPaid}}</span></p>
          </router-link>
          <router-link tag="li" :to="{name:'myBooking',params:{type:2}}">
            <img src="../../assets/my/daishouhuo-2@3x.png" alt="">
            <p>待收货 <span>{{homeData.waitReceive}}</span></p>
          </router-link>
          <router-link tag="li" :to="{name:'myBooking',params:{type:3}}">
            <img src="../../assets/my/31daipingjia@3x.png" alt="">
            <p>待评价 <span>{{homeData.toEvaluate}}</span></p>
          </router-link>
          <router-link tag="li" :to="{name:'myBooking',params:{type:4}}">
            <img src="../../assets/my/tuikuan@3x.png" alt="">
            <p>退款 <span>{{homeData.refunded}}</span></p>
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
        <router-link tag="li" :to="{path:'vip'}">
          <img :class="{vip:homeData.is_actives === 0}" src="../../assets/my/huiyuanguanli@3x.png" alt="">
          <p>会员管理</p>
        </router-link>
        <router-link to="/trade">
          <img src="../../assets/my/jiaoyiguanli-2@3x.png" alt="">
          <p>交易管理</p>
        </router-link>
        <router-link to="/incomeManage">
          <img :class="{vip:homeData.is_actives === 0}" src="../../assets/my/shouyiguanli@3x.png" alt="">
          <p>收益管理</p>
        </router-link>
        <router-link to="/shoppingCar">
          <img src="../../assets/my/buy-car@3x.png" alt="">
          <p>购物车管理</p>
        </router-link>
        <router-link to="/mygoods">
          <img src="../../assets/my/123.svg" alt="">
          <p>我的商品</p>
        </router-link>
        <router-link :to="{path:'/planLink',query:{promotes:homeData.promotes}}">
          <img :class="{vip:homeData.is_actives === 0}" src="../../assets/my/tuiguang-@3x.png" alt="">
          <p>推广链接</p>
        </router-link>
        <router-link to="/useBook">
          <img src="../../assets/my/shiyongzhinan@3x.png" alt="">
          <p>使用指南</p>
        </router-link>
      </ul>
    </footer>
    <Alert/>
  </section>
</template>

<script>
  import Alert from '../../components/AlertVip'
  import {home} from "../../api/users";
  import {IMG_BASE_URL} from "../../api/BASE_URL";

  export default {
    name: "my",
    components:{
      Alert
    },
    data() {
      return {
        IMG_BASE_URL,
        homeData: {}
      }
    },
    methods: {
      async getHome() {
        let result = await home(localStorage.uid)
        if (result.code === 1) {
          this.homeData = result.data
          localStorage.is_actives = result.data.is_actives
        }
      },
    },
    mounted() {
      this.getHome()
    }
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
      flex: 1;
      margin-left: 10px;
      font-size: 18px;
      color: white;
    }

    > span {
      width: 20%;
      text-align: right;
      font-size: 18px;
      color: white;
      &.vip{
        position: absolute;
        right: 0;
        background: white;
        width: 82px;
        height: 35px;
        line-height: 35px;
        border-radius: 18px 0 0 18px;
        text-align: center;
        font-size: 14px;
        color: black;
      }
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

        li, a {
          width: 20%;
          text-align: center;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: column;
          cursor: pointer;

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

      li, a {
        display: flex;
        text-align: center;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        margin-top: 26px;
        width: 33%;
        cursor: pointer;

        img {
          width: 25px;
          &.vip{
            -webkit-filter: grayscale(100%);
          }
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
