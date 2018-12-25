<template>
  <div class="xinyongContent">
    <headers :title="title"></headers>
    <swiper class="wrap" ref="mySwiper" :options="swiperOption" v-if="bannerArr.length">
      <swiper-slide v-for="(item,index) in bannerArr" :key="index"><a :href="item.url"><img :src="`${IMG_BASE_URL}${item.picture}`" alt="图片"></a></swiper-slide>
    </swiper>
    <div class="lineDiv"></div>

    <div class="tabDiv">
      <p :class="tabIndex==0?'pActive':''" @click="tabClick(0)">热卡推荐</p>
      <p :class="tabIndex==1?'pActive':''" @click="tabClick(1)">新卡推荐</p>
    </div>
    <div class="xinyongList" v-show="tabIndex==0">
      <router-link v-for="(item,index) in list1" :to="{path:'/cardInfo',query:{id:item.id}}" :key="index">
        <img :src="`${IMG_BASE_URL}${item.picture}`" alt="图片">
        <div>
          <div>{{item.name}}</div>
          <span>{{item.blurb}}</span>
          <p>已有<span class="colorRed">{{item.apply_num}}</span>人申请</p>
        </div>
      </router-link>
    </div>
    <div class="xinyongList" v-show="tabIndex==1">
      <router-link v-for="(item,index) in list2" :to="{path:'/cardInfo',query:{id:item.id}}" :key="index">
        <img :src="`${IMG_BASE_URL}${item.picture}`" alt="图片">
        <div>
          <div>{{item.name}}</div>
          <span>{{item.blurb}}</span>
          <p>已有<span class="colorRed">{{item.apply_num}}</span>人申请</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {IMG_BASE_URL} from "../../api/BASE_URL";
  import {banners, list} from '../../api/credit'
  import headers from '../../components/Headers'

  export default {
    data() {
      return {
        IMG_BASE_URL,
        title: '信用卡',
        swiperOption: {
          loop: true,
          spaceBetween: 10,
          slidesPerView: "auto",
          centeredSlides: true,
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
          initialSlide: 1
        },
        tabIndex: 0,
        bannerArr: [],
        list1: [],
        list2: []
      }
    },
    components: {
      headers
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      tabClick(num) {
        this.tabIndex = num;
      },
      async bannerLoad(uid) {
        let res = await banners(uid);
        if (res.code === 1) {
          this.bannerArr = res.data;
        } else {
          this.$dialog.notify({
            mes: res.message,
            timeout: 3000
          })
        }
      },
      async creditList() {
        let data = await list();
        if (data.code === 1) {
          this.list1 = data.data;
        } else {
          this.$dialog.notify({
            mes: data.message,
            timeout: 3000
          })
        }
      },
      async newList(type) {
        let data = await list(type);
        if (data.code === 1) {
          this.list2 = data.data;
        } else {
          this.$dialog.notify({
            mes: data.message,
            timeout: 3000
          })
        }
      }
    },
    mounted() {
      this.bannerLoad(localStorage.uid);
      this.creditList();
      this.newList('new');
    }
  }
</script>

<style scoped lang="less">
  .xinyongContent {
    background: #fff !important;
  }

  .wrap {
    width: 100vw;
    height: 143px;
    margin: 11px auto 12px;
    z-index: 0;

    .swiper-slide {
      width: 335px !important;
    }

    a img {
      width: 335px;
      height: 100%;
      border-radius: 10px;
    }
  }

  .lineDiv {
    height: 10px;
    background: #f5f5f5;
  }

  .tabDiv {
    padding: 14px 20px 8px;
    font-size: 20px;
    display: flex;

    & > P {
      margin-right: 20px;
    }

    .pActive {
      color: #fb1313;
    }
  }

  .xinyongList > a {
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
      width: 130px;
      height: 80px;
      border-radius: 5px;
    }

    & > div {
      width: 205px;
      border-bottom: 1px #e8e9eb solid;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 9px 0 12px;
      align-items: flex-start;
      font-size: 13px;
      height: 101px;
      box-sizing: border-box;

      & > div {
        font-size: 15px;
        font-weight: bold;
      }

      .colorRed {
        color: #E9021C;
      }
    }
  }
</style>
