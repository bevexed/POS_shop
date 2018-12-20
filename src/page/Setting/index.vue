<template>
  <section class="setting">
    <headers :title="'我的设置'" :isBack="true"></headers>
    <header @click="$router.push('./InfoEdit')">
      <img :src="IMG_URL+homeData.avatars" alt="">
      <p>{{homeData.nick_name ? homeData.nick_name :homeData.mobiles}}</p>
    </header>
    <section class="item" @click="$router.push('/DeliveryAddress')">
      收货地址
      <span class="address">修改/添加</span>
    </section>
    <footer>
      <section class="item" @click="$router.push('/realname')">
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
      <section class="item" @click="$router.push('/managebankcard')">
        银行卡管理
        <span></span>
      </section>
      <section class="item">
        账号激活
        <span>
          <!--<img v-if="homeData.is_actives === 0" width="12" src="../../assets/setting/ed@3x.png" alt="">-->
          <!--<img v-else width="12" src="../../assets/setting/none@3x.png" alt="">-->
          {{homeData.is_actives === 1?'已激活':'未激活'}}
        </span>
      </section>
    </footer>
    <yd-button style="width: 90%;margin: 30px auto" bgcolor="#ff6d48" color="#fff" size="large" type="primary" shape="circle" @click.native="loginOut">退出</yd-button>

  </section>
</template>

<script>
  import headers from '../../components/Headers'
  import {IMG_URL} from "../../api/BASE_URL";
  import {home} from "../../api/users";

  export default {
    name: "setting",
    components: {
      headers
    },
    data() {
      return {
        IMG_URL,
        homeData: {}
      }
    },
    methods: {
      loginOut() {
        localStorage.uid = ''
        this.$dialog.toast({
          mes: '退出成功',
          timeout: 500,
          error: 'success',
          callback: () => {
            this.$router.replace('/login')
          }
        })
      },
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
      &:after {
        content: '>';
        position: absolute;
        font-size: 18px;
        right: 18px;
      }

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
