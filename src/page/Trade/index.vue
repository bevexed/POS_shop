<template>
  <section>
    <headers :title="'交易管理'" :isBack="true" :is-search="search"></headers>
    <header class="header">
      <p>
          会数（条）
        <span>{{tradeData.total_volume}}</span>
      </p>
    </header>
    <nav>
      <ul>
        <li :class="{active:selected === 1}" @click="change(1)">昨天交易总数({{tradeData.yesterday_volume}})</li>
        <li :class="{active:selected === 2}" @click="change(2)">本月交易总数({{tradeData.this_month_volume}})</li>
        <li :class="{active:selected === 3}" @click="change(3)">近三个月交易总数({{tradeData.three_month_volume}})</li>
      </ul>
    </nav>
    <!--<section class="detail" v-for="i in 10">-->
      <!--<img src="" alt="">-->
      <!--<section>-->
        <!--<p>小妹去 <span>VIP1</span></p>-->
        <!--<p>123****1234</p>-->
        <!--<p>注册时间：2018-11-11</p>-->
      <!--</section>-->
      <!--<div>-->
        <!--<img v-if="is_actives === 1" src="../../assets/setting/ed@3x.png" alt="">-->
        <!--<img v-else src="../../assets/setting/none@3x.png" alt="">-->
        <!--<span>{{is_actives === 1? '已激活':'未激活'}}</span>-->
      <!--</div>-->
    <!--</section>-->
  </section>
</template>

<script>
  import headers from '../../components/Headers'
  import {trades} from "../../api/members";

  export default {
    name: "Vip",
    components: {
      headers
    },
    data() {
      return {
        is_actives: localStorage.is_actives - 0,
        selected: 1,
        tradeData:{}
      }
    },
    created(){
      this.getTrades()
    },
    methods: {
      search(){
        this.$router.push('/tradesearch')
      },
      async getTrades(){
        let res = await trades(localStorage.uid)
        if (res.code === 1){
          this.tradeData = res.data
        }else{
          this.$dialog.notify({
            mes:res.message,
            type:'error'
          })
        }
      },
      change(i) {
        this.selected = i
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    height: 150px;
    background: #ff6d4b;
    color: white;
    padding-top: 40px;
    text-align: center;
    font-size: 15px;

    span {
      display: block;
      font-size: 35px;
    }
  }

  nav {
    margin-bottom: 10px;

    ul {
      background: white;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;

      li {
        font-size: 14px;
        color: #4d4d4d;

        &.active {
          color: #ff6d4b;
        }
      }
    }
  }

  section.detail {
    margin-top: 1px;
    background: white;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      display: inline-block;
      width: 55px;
      height: 55px;
      border: 1px solid #979797;
      border-radius: 50%;
    }

    section {
      width: 60%;

      span {
        display: inline-block;
        width: 34px;
        height: 14px;
        line-height: 14px;
        font-size: 10px;
        background: #d72222;
        color: white;
        border-radius: 7px;
        text-align: center;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 16px;
      }
    }
  }
</style>
