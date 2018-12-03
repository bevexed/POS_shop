<template>
    <div class="xinyongContent">
      <headers :title="title"></headers>
      <swiper class="wrap" :options="swiperOption">
        <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1159386606,974071300&fm=200&gp=0.jpg" alt="图片"></swiper-slide>
        <swiper-slide><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2213670986,2923778817&fm=27&gp=0.jpg" alt="图片"></swiper-slide>
        <swiper-slide><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3419264681,2642087292&fm=27&gp=0.jpg" alt="图片"></swiper-slide>
      </swiper>
      <div class="lineDiv"></div>

      <div class="tabDiv">
        <p :class="tabIndex==0?'pActive':''" @click="tabClick(0)">热卡推荐</p>
        <p :class="tabIndex==1?'pActive':''" @click="tabClick(1)">新卡推荐</p>
      </div>
      <div class="xinyongList">
        <router-link v-for="item in 4" to="/cardInfo">
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
  import headers from '../../components/headers'
    export default {
      data(){
        return{
          title:'信用卡',
          swiperOption:{
            loop:true,
            spaceBetween: 10,
            slidesPerView: "auto",
            centeredSlides:true
          },
          tabIndex:0
        }
      },
      components:{
        headers
      },
      methods:{
        tabClick(num){
          this.tabIndex = num;
        }
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
    img {
      width: 100%;
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
