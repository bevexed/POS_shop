<template>
  <section class="setting">
    <headers :title="'我的设置'" :isBack="true"></headers>
    <header>
      <img :src="homeData.avatars" alt="">
      <p>{{homeData.nick_name}}</p>
    </header>
    <section class="item" @click="$router.push('/DeliveryAddress')">
      收货地址
      <span class="address">修改/添加</span>
    </section>
    <footer>
      <section class="item">
        实名认证
        <span>{{homeData.id_numbers? '已认证' : '未实名'}}</span>
      </section>
      <section class="item">
        手机号
        <span>{{homeData.mobiles}}</span>
      </section>
      <section class="item">
        结算信息
        <span></span>
      </section>
      <section class="item" @click="$router.push('/changepassword')">
        修改密码
        <span></span>
      </section>
      <section class="item">
        银行卡管理
        <span></span>
      </section>
      <section class="item">
        账号激活
        <span>
          <img v-if="homeData.is_actives" width="12" src="../../assets/setting/ed@3x.png" alt="">
          <img v-else width="12" src="../../assets/setting/none@3x.png" alt="">
          {{homeData.is_actives === 1?'已激活':'未激活'}}
        </span>
      </section>
    </footer>
  </section>
</template>

<script>
  import headers from '../../components/headers'
  import {home} from "../../api/users";

  export default {
    name: "setting",
    components: {
      headers
    },
    data() {
      return {
        homeData: {}
      }
    },
    methods: {
      async getHome() {
        let result = await home(localStorage.uid)
        if (result.code === 1) {
          this.homeData = result.data

        }
      },
    },
    mounted() {
      this.getHome()
    }
  }
</script>

<style scoped lang="less">
  .setting {
    > header {
      background: white;
      padding: 10px 15px;
      display: flex;
      align-items: center;

      > img {
        display: inline-block;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: #808080;
      }

      > p {
        margin: -15px 0 0 15px;
      }

    }

    section.item {
      background: white;
      padding: 15px;
      border-top: 1px solid #e8e9eb;

      &:first-child {
        border: none;
      }

      span {
        float: right;
        font-size: 14px;

        &.address {
          color: #c5c5ca;
        }

        &:after {
          content: '>';
          color: black;
          font-size: 18px;
          margin-left: 10px;
        }
      }
    }

    > footer {
      margin-top: 15px;
    }
  }
</style>
