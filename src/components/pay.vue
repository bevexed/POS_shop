<template>
    <div class="payContent" v-show="isShow">
      <div class="pay_box">
        <div class="pay_top">
          <img @click="$router.go(-1)" src="../assets/error.png" alt="">
          <span>确认付款</span>
        </div>
        <p class="totalMuch">￥{{price}}</p>
        <ul>
          <li @click="chooseWay(1)">
            <div>
              <img class="payIcon" src="../assets/alipay.png" alt="">
              <span>支付宝账户</span>
            </div>
            <img v-show="isCheck==1" src="../assets/gouxuan.png" alt="">
          </li>
          <li @click="chooseWay(2)">
            <div>
              <img class="payIcon" src="../assets/weixin.png" alt="">
              <span>微信账户</span>
            </div>
            <img v-show="isCheck==2" src="../assets/gouxuan.png" alt="">
          </li>
        </ul>
        <button @click="payClick()">立即付款</button>
      </div>
    </div>
</template>

<script>
  import {aliPay} from '../api/pay'
    export default {
      data(){
        return{
          isCheck:1
        }
      },
      props:{
        isShow:Boolean,
        price:String,
        orderNo:String
      },
      methods:{
        chooseWay(i){
          this.isCheck = i;
        },
        closeBox(){
          this.$emit('close',false);
        },
        async payMoney(uid,order_no){
          let res = await aliPay(uid,order_no);
          const div = document.createElement('div');
          div.innerHTML = res; // html code
          document.body.appendChild(div);
          document.forms.alipaysubmit.submit();
          console.log(res)
        },
        payClick(){
          if(this.isCheck === 1){
            this.payMoney(localStorage.uid,this.orderNo)
          }else{
            console.log('wechat')
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .payContent {
    width: 100vw;
    min-height: 100vh;
    background: rgba(0,0,0,.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    text-align: center;
    .pay_box {
      width: 100vw;
      height: 416px;
      background: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      .pay_top {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 52px;
        border-bottom: 1px solid rgba(232,233,235,1);
        &>img {
          width: 17px;
          position: absolute;
          left: 12px;
        }
        &>span {
          color: #313638;
          font-size: 18px;
        }
      }
      .totalMuch {
        color: #4D4D4D;
        font-size: 36px;
        margin: 18px 0 11px;
      }
      &>ul {
        li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          color: #4d4d4d;
          margin-left: 10px;
          height: 45px;
          border-bottom: 1px #e8e9eb solid;
          padding-right: 14px;
          &>div {
            display: flex;
            align-items: center;
            .payIcon {
              height: 22px;
              margin-right: 10px;
            }
          }
          &>img {
            width: 14px;
          }
        }
      }
      &>button {
        width: 355px;
        height: 40px;
        background: #ff6d4b;
        color: #fff;
        border-radius: 5px;
        font-size: 18px;
        position: absolute;
        left: 10px;
        bottom: 37px;
      }
    }
  }
</style>
