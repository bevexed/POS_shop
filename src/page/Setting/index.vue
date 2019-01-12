<template>
  <section class="setting">
    <headers :title="'我的设置'" :isBack="true"></headers>
    <header @click="$router.push('./InfoEdit')">
      <img id="img" :src="IMG_BASE_URL+homeData.avatars" alt="" v-if="homeData.avatars" @load="rotates($event)">
      <p>{{homeData.nick_name ? homeData.nick_name :homeData.mobiles}}</p>
    </header>
    <section class="item" @click="$router.push('/deliveryAddress')">
      收货地址
      <span class="address">修改/添加</span>
    </section>
    <footer>
      <section class="item" @click="homeData.id_numbers? '': $router.push('/realName')">
        实名认证
        <span>{{homeData.id_numbers? '已认证' : '未实名'}}</span>
      </section>
      <section class="item">
        手机号
        <i style="float: right"> {{homeData.mobiles}}</i>
      </section>
      <!--<section class="item">-->
      <!--结算信息-->
      <!--<span></span>-->
      <!--</section>-->
      <section class="item" @click="$router.push('/changePassword')">
        修改密码
        <span></span>
      </section>
      <section class="item" @click="$router.push('/manageBankcard')">
        银行卡管理
        <span></span>
      </section>
      <section class="item">
        会员激活
        <span @click="goVip(homeData.is_actives)">
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
  import {IMG_BASE_URL, IMG_URL} from "../../api/BASE_URL";
  import {home} from "../../api/users";
  import EXIF from '../../../static/exif'

  export default {
    name: "Setting",
    components: {
      headers
    },
    data() {
      return {
        IMG_URL,
        IMG_BASE_URL,
        homeData: {},
        rotate: 0,
      }
    },
    computed: {},
    methods: {
      rotates(e) {
        console.log(e.target);
        let a = document.querySelector("#img")
        EXIF.getData(e.target, function () {
          let Orientation = EXIF.getAllTags(this).Orientation;
          console.log(Orientation);
          if (Orientation === 6) {
            this.rotate = 90
          } else {
            this.rotate = 0
          }
        })
      },
      goVip(vip_status) {
        if (vip_status === 1)
          this.$dialog.notify({
            mes: '您已激活会员',
            timeout: 3000
          });
        else
          this.$router.push('/activeVip')
      },

      loginOut() {
        localStorage.uid = '';
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
        let result = await home(localStorage.uid);
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
      min-height: 50px;
      background: white;
      padding: 10px 15px;
      display: flex;
      align-items: center;

      &:after {
        content: '>';
        position: absolute;
        font-size: 18px;
        right: 18px;
      }

      > img {
        display: inline-block;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      > p {
        /*margin: -15px 0 0 15px;*/
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
