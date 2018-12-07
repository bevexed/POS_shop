<template>
    <div class="xinyongContent">
      <headers :title="title"></headers>
      <swiper class="wrap" ref="mySwiper" :options="swiperOption" v-if="bannerArr.length>0">
        <swiper-slide v-for="(item,index) in bannerArr" :key="index"><a :href="item.url"><img :src="`${IMG_BASE_URL}${item.picture}`" alt="图片"></a></swiper-slide>
      </swiper>
      <div class="lineDiv"></div>

      <div class="tabDiv">
        <p :class="tabIndex==0?'pActive':''" @click="tabClick(0)">热卡推荐</p>
        <p :class="tabIndex==1?'pActive':''" @click="tabClick(1)">新卡推荐</p>
      </div>
      <div class="xinyongList">
        <router-link v-for="item in 4" to="/cardInfo" :key="item">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=371772476,1548437417&fm=27&gp=0.jpg" alt="图片">
          <div>
            <div>交通银行标准信用卡</div>
            <span>新用户5积分轻松购</span>
            <p>已有<span class="colorRed">198.3</span>万人申请</p>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
  import {IMG_BASE_URL} from "../../api/BASE_URL";
  import {banners} from '../../api/credit'
  import headers from '../../components/headers'
    export default {
      data(){
        return{
          IMG_BASE_URL,
          title:'信用卡',
          swiperOption:{
            loop:true,
            spaceBetween: 10,
            slidesPerView: "auto",
            centeredSlides:true,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            initialSlide:1
          },
          tabIndex:0,
          bannerArr:[]
        }
      },
      components:{
        headers
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      methods:{
        tabClick(num){
          this.tabIndex = num;
        },
        async bannerLoad(uid){
          let res = await banners(uid);
          console.log(res.data)
          this.bannerArr = res.data;
        }
      },
      mounted(){
        this.bannerLoad(localStorage.uid)
      }
    }
</script>

<style scoped lang="less">
  .xinyongContent {
    background: #fff!important;
  }
  .wrap {
    width: 100vw;
    height: 143px;
    margin: 11px auto 12px;
    z-index: 0;
    .swiper-slide {
      width: 335px!important;
    }
    a img {
      width: 335px;
      height: 100%;
      border-radius:10px;
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
    &>P {
      margin-right: 20px;
    }
    .pActive {
      color: #fb1313;
    }
  }
  .xinyongList>a {
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>img {
      width: 130px;
      height: 80px;
      border-radius:5px;
    }
    &>div {
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
      &>div {
        font-size: 15px;
        font-weight: bold;
      }
      .colorRed {
        color: #E9021C;
      }
    }
  }
</style>
