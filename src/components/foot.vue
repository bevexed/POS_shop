<template>
    <div>
      <div class="footDiv">
        <router-link to="/index">
          <img src="../assets/shouye.png" alt="">
          <p>首页</p>
        </router-link>
        <router-link to="/creditCard">
          <img src="../assets/xinyongCard.png" alt="">
          <p>信用卡</p>
        </router-link>
        <router-link to="/shoppingCar">
          <img src="../assets/gouwuche.png" alt="">
          <p>购物车</p>
        </router-link>
        <router-link to="/my">
          <img src="../assets/wode.png" alt="">
          <p>我的</p>
        </router-link>
      </div>
      <div class="empty"></div>
    </div>
</template>

<script>
    export default {
      data(){
          return{

          }
      }
    }
</script>

<style scoped lang="less">
  .footDiv {
    position: fixed;
    width: 100vw;
    height: 50px;
    background: #ff6d4b;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    &>a {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      img {
        width: 18px;
        margin-bottom: 5px;
      }
    }
  }
  .empty {
    height: 50px;
  }
</style>
