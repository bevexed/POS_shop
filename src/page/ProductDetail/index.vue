<template>
  <div class="product_content" @wheel="change()" @scroll="change()" @touchmove="change()">
    <headers v-show="!show" :title="`商品详情`" :is-back="!show"/>
    <banner :data="detailData.details_pic"/>
    <!--<img class="productImg" :src="`${IMG_BASE_URL}${detailData.show_pic}`" alt="图片">-->
    <img class="backIcon" src="../../assets/back.png" alt="图片" @click="backClick" v-if="show">
    <img class="shopCar" src="../../assets/gouwuche.png" alt="图片" @click="goCar">

    <div class="product_info">
      <p class="product_price">¥{{detailData.price}}</p>
      <p>{{detailData.name}}</p>
      <div class="price">
        <span>运费：{{detailData.courier_fees}}元 </span>
        <span>已售：{{detailData.sold_out}} </span>
        <span>{{detailData.vender}}</span>
      </div>
    </div>

    <div class="detail">
      <header>
        系列：<span>{{detailData.category === 1 ? '企业pos机': '个人pos机'}}</span>
      </header>
      <!--<span v-for="(v,i) in detailData.sku">{{v.trad_channel}}</span>-->
      <footer>
        通道类别：
        <select v-model="val" @change="selectVal">
          <option value="0">请选择</option>
          <option v-for="(v,i) in detailData.sku" :key="i" :value="v.id">{{v.trad_channel}}</option>
        </select>
      </footer>
    </div>

    <section class="evaluate">
      <header>
        宝贝评价（{{commentData.length}}）
        <span @click="$router.push({name:'Evaluate',params:{id:$route.params.id}})">查看全部</span>
      </header>
      <div v-for="(v,i) in commentData" v-if="i<3">
        <section>
          <img :src="IMG_BASE_URL+v.consumer.avatar" alt="">
          <span>{{v.consumer.nick_name}}</span>
          <time>{{v.create_time}}</time>
        </section>
        <footer>
          {{v.content}}
        </footer>
      </div>

    </section>

    <section class="real">
      宝贝图文详情
      <div class="deatail_shop_goods" v-html="detailData.details"></div>
    </section>
    <aside>
      <span @click="addShoppingCar(uid,val)">加入购物车</span>
      <span @click="buy">立即购买</span>
    </aside>
  </div>
</template>

<script>
  import {addShop, detail} from "../../api/cart";
  import {comment} from "../../api/goods";
  import {IMG_BASE_URL} from '../../api/BASE_URL'
  import headers from '../../components/Headers'
  import banner from './banner'

  export default {
    name: 'ProductDetail',
    data() {
      return {
        uid: localStorage.uid,
        detailData: {},
        IMG_BASE_URL,
        val: 0,
        commentData: '',
        show: true,
      }
    },
    components: {
      headers,
      banner
    },
    created() {
      this.getDetail(this.$route.params.id);
      this.getComment()
    },
    methods: {
      change() {
        let app = document.querySelector('#app');
        if (app.scrollTop > 30) {
          this.show = false
        } else {
          this.show = true
        }
      },
      backClick() {
        this.$router.go(-1);
      },
      goCar() {
        this.$router.push('/shoppingCar')
      },
      async getComment() {
        let res = await comment(this.$route.params.id);
        this.commentData = res.data
      },
      async addShoppingCar(uid, g_sku_id) {
        if (!this.val) {
          this.$dialog.toast({
            mes: '请选择通道类别',
            timeout: 3000
          });
          return
        }
        let res = await addShop(uid, g_sku_id);
        if (res.code === 1) {
          this.$dialog.toast({
            mes: '商品加入购物车成功',
            timeout: 3000,
          })
        } else {
          this.$dialog.toast({
            mes: res.message,
            timeout: 3000,
          })
        }
      },
      async getDetail(id) {
        let result = await detail(id);
        if (result.code === 1) {
          this.detailData = result.data
        } else {
          this.$dialog.toast({
            mes: result.message,
            timeout: 3000
          })
        }
      },
      selectVal() {

      },
      buy() {
        if (this.val) {
          this.$router.push({path: '/booking', query: {id: this.val}})
        } else {
          this.$dialog.toast({
            mes: '请选择通道类别',
            timeout: 3000
          })
        }
      }
    }
  }
</script>

<style>
  div.deatail_shop_goods p {
    text-align: center;
  }

  div.deatail_shop_goods img {
    width: 90%;
  }
</style>

<style scoped lang="less">
  .product_content {
    background: #fff !important;
    position: relative;

    .productImg {
      width: 100vw;
      height: 267px;
    }

    .backIcon {
      width: 20px;
      position: absolute;
      top: 20px;
      left: 11px;
    }

    .shopCar {
      z-index: 9999;
      width: 20px;
      position: fixed;
      top: 20px;
      right: 11px;
    }

    .product_info {
      padding: 14px 19px;

      & > P {
        text-align: left;
      }

      .product_price {
        font-size: 20px;
        color: #FB1313;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 7px;

        span {
          font-size: 13px;
          color: rgb(144, 144, 144);
        }
      }
    }
  }

  .detail {
    border-top: 10px solid rgb(245, 245, 245);
    border-bottom: 10px solid rgb(245, 245, 245);
    padding: 10px;
    color: #909090;
    font-size: 13px;

    header {
      span {
        font-size: 14px;
        color: #4d4d4d;
      }
    }

    footer {
      margin-top: 2px;

      span {
        margin-right: 5px;
      }

      select {
        border-radius: 5px;
        border: 1px #c3c3c3 solid;
        text-align: center;
        text-align-last: center;
        padding: 2px 25px 2px 12px;
        background: url("../../assets/s.png") right center / 16px no-repeat;

        option:hover {
          background: #EBCCD1;
        }

        &:focus {
          outline: none;
          border: 1px #c3c3c3 solid !important;
        }

      }

      select:focus {
        border: 2px #ddd solid;
        box-shadow: 0 0 15px 1px #DDDDDD;
      }

    }
  }

  .evaluate {
    padding: 10px;

    header {
      font-size: 13px;
      color: #4d4d4d;

      span {
        float: right;
        color: #ff6d4b;
        font-size: 13px;
      }
    }

    section {
      margin-top: 15px;
      display: flex;
      align-items: center;
      padding-bottom: 5px;

      img {
        margin-right: 10px;
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }

      time {
        flex: 1;
        text-align: right;
      }
    }

    footer {
      margin-top: 4px;
      line-height: 1.5;
      color: #4d4d4d;
      font-size: 13px;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 5px;
    }
  }

  .real {
    border-top: 10px solid rgb(245, 245, 245);
    padding: 10px;
    font-size: 15px;
    color: #4d4d4d;

    img {
      max-width: 375px !important;
    }
  }

  aside {
    width: 100vw;
    background: #fff;
    border-top: 1px #e8e9eb solid;
    padding: 5px 0;
    position: fixed;
    right: 9px;
    bottom: 0;
    text-align: center;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: flex-end;

    span, a {
      float: left;
      display: inline-block;
      width: 48%;
      height: 44px;
      line-height: 44px;
    }

    span:first-child {
      background: #fa9078;
      border-radius: 22px 0 0 22px;
    }

    span {
      background: #ff6d48;
      border-radius: 0 22px 22px 0;
    }
  }

</style>
