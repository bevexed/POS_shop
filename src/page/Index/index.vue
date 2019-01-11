<template>
  <div class="index_content">
    <headers :title="title" :isPosition="true" :scanP="true"></headers>
    <swiper class="wrap" :options="swiperOption" ref="mySwiper" v-if="bannerImg.length>0">
      <swiper-slide v-for="(val,i) in bannerImg" :key="i"><div @click="val.url && $router.push({path:'/BannerLink',query:{url:val.url}})"><img :src="`${IMG_BASE_URL}${val.picture}`"></div></swiper-slide>
    </swiper>

    <div class="commidity_class">
      <p v-show="sold_type !== 1" @click="getGoodLists(1,1)">企业POS机</p>
      <p v-show="sold_type === 1" class="active">企业POS机</p>
      <p v-show="sold_type !== 2" @click="getGoodLists(2,1)">个人POS机</p>
      <p v-show="sold_type === 2" class="active">个人POS机</p>
    </div>
    <div class="commidity_step">
      <span v-show="sort_type !== 1" @click="getGoodLists(sold_type,1)">综合</span>
      <span v-show="sort_type === 1" class="Aspan">综合</span>
      <span v-show="sort_type !== 2" @click="getGoodLists(sold_type,2)">价格</span>
      <span v-show="sort_type === 2" class="Aspan">价格</span>
      <span v-show="sort_type !== 3" @click="getGoodLists(sold_type,3)">销量</span>
      <span v-show="sort_type === 3" class="Aspan">销量</span>
    </div>
    <ul class="commidity_ul">
      <li v-for="(v,i) in goodLists" :key="v.id">
        <router-link :to="{name:'productDetail',params:{id:v.id}}">
          <img :src="`${IMG_BASE_URL}${v.show_pic}`" alt="图片">
          <p class="cTitle ellipse">{{v.name}}</p>
          <div>
            <span>¥{{v.price}}元</span>
            <span>已售{{v.sold_out}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {IMG_BASE_URL} from "../../api/BASE_URL";
  import {banner, goodlists} from "../../api/home";
  import headers from '../../components/Headers'

  export default {
    name: "index",
    data() {
      return {
        IMG_BASE_URL,
        title: '首页',
        ad_code: localStorage.ad_code, // 邮编
        sold_type: 1,    // pos机类别 1:企业 2:个人 若不传，默认为1
        sort_type: 1,    // 筛选条件 1:综合 2:价格 3:销量 若不传，默认为1
        bannerImg: [],
        goodLists: [],
        swiperOption: {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loop: true,
          spaceBetween: 10,
          slidesPerView: "auto",
          centeredSlides: true,
          initialSlide: 1
        },
        tabBar: 0
      }
    },
    components: {
      headers
    },
    created() {
      this.getGoodLists(this.sold_type, this.sort_type)
      this.getBanner();
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      async getGoodLists(sold_type, sort_type) {
        this.sold_type = sold_type;
        this.sort_type = sort_type;
        let result = await goodlists(this.ad_code, sold_type, sort_type);
        // console.log(result);
        if (result.code === 1) {
          this.goodLists = result.data;
        }
      },
      async getBanner() {
        let result = await banner();
        if (result.code === 1) {
          this.bannerImg = result.data;
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
        }

      },
      tabBarClick(num) {
        this.tabBar = num;
      },
    }
  }
</script>

<style scoped lang="less">
  .index_content {
    background: #fff !important;

    .wrap {
      width: 100vw;
      height: 143px;
      margin: 5px auto 24px;
      z-index: 0;
      background: #fff;

      .swiper-slide {
        width: 335px !important;
      }

      img {
        width: 100%;
        height: 143px;
        border-radius: 10px;
      }
    }

    .commidity_class {
      width: 355px;
      height: 43px;
      margin: 0 auto;
      border-radius: 10px;
      border: 1px #FF6D4B solid;
      display: flex;
      overflow: hidden;

      & > p {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
      }

      & > p {
        color: #ff6D4B;
      }

      & > .active {
        color: #fff;
        background: #ff6D4B;
      }
    }

    .commidity_step {
      padding: 16px 63px 13px;
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #919191;

      .Aspan {
        color: #FF6D4B;
      }
    }

    .commidity_ul {
      background: #f5f5f5;
      padding: 12px 10px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      & > li {
        width: 172px;
        border-radius: 5px;
        background: #fff;
        overflow: hidden;
        margin-bottom: 9px;

        a {
          & > img {
            display: block;
            width: 100%;
            height: 130px;
          }

          .cTitle {
            height: 50px;
            text-align: left;
            padding: 7px;
          }

          & > div {
            display: flex;
            justify-content: space-between;
            padding: 0 7px 7px;

            & > span:nth-child(1) {
              color: #FB1313;
              font-size: 15px;
            }

            & > span:nth-child(2) {
              font-size: 12px;
              color: #919191;
            }
          }
        }
      }
    }
  }
</style>
