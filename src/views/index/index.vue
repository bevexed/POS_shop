<template>
    <div class="index_content">
      <headers :title="title" :isPosition="true"></headers>
      <swiper class="wrap" :options="swiperOption">
        <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1159386606,974071300&fm=200&gp=0.jpg"></swiper-slide>
        <swiper-slide><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2213670986,2923778817&fm=27&gp=0.jpg"></swiper-slide>
        <swiper-slide><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3419264681,2642087292&fm=27&gp=0.jpg"></swiper-slide>
      </swiper>

      <div class="commidity_class">
        <p>企业POS机</p>
        <p>个人POS机</p>
      </div>
      <div class="commidity_step">
        <span :class="tabBar==0?'Aspan':''" @click="tabBarClick(0)">综合</span>
        <span :class="tabBar==1?'Aspan':''" @click="tabBarClick(1)">价格</span>
        <span :class="tabBar==2?'Aspan':''" @click="tabBarClick(2)">销量</span>
      </div>
      <ul class="commidity_ul">
        <li v-for="item in 5">
          <router-link to="/productDetail">
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1722901937,3578003945&fm=27&gp=0.jpg" alt="图片">
            <p class="cTitle">POS机哈哈哈哈个人哦哈哈活 哈哈哈哈哈哈</p>
            <div>
              <span>¥268元</span>
              <span>已售123</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import headers from '../../components/headers'
    export default {
       name: "index",
       data(){
         return{
           title:'首页',
           swiperOption:{
             loop:true,
             spaceBetween: 10,
             slidesPerView: "auto",
             centeredSlides:true,
           },
           tabBar:0
         }
       },
      components:{
         headers
      },
      mounted(){
      },
      methods:{
         tabBarClick(num){
           this.tabBar = num;
         }
      }
    }
</script>

<style scoped lang="less">
  .index_content {
    background: #fff!important;
    .wrap {
      width: 100vw;
      height: 143px;
      margin: 5px auto 24px;
      z-index: 0;
      background: #fff;
      .swiper-slide {
        width: 335px!important;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius:10px;
      }
    }
    .commidity_class {
      width: 355px;
      height: 43px;
      margin: 0 auto;
      border-radius: 10px;
      border: 1px #FF6D4B solid;
      display: flex;
      &>p {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
      }
      &>p:nth-child(1) {
        background: #ff6D4B;
        color: #fff;
      }
      &>p:nth-child(2){
        color: #ff6D4B;
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
      &>li {
        width: 172px;
        border-radius:5px;
        background: #fff;
        overflow: hidden;
        margin-bottom: 9px;
        a {
          &>img {
            width: 100%;
            height: 130px;
          }
          .cTitle {
            text-align: left;
            padding: 7px;
          }
          &>div{
            display: flex;
            justify-content: space-between;
            padding: 0 7px 7px;
            &>span:nth-child(1){
              color: #FB1313;
              font-size: 15px;
            }
            &>span:nth-child(2){
              font-size: 12px;
              color: #919191;
            }
          }
        }
      }
    }
  }
</style>
