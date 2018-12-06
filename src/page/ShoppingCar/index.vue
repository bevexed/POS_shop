<template>
    <div>
      <headers :title="title" :isManage="true"></headers>
      <ul class="shopList">
        <li v-for="(item,index) in items" :key="index">
          <div class="circle_div" :class="item.isChecked?'checked':''" @click="select(index)"></div>
          <img class="shopImg" src="http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg" alt="">
          <div class="shopContent">
            <p>POS机哈哈哈哈个人哦哈哈活哈哈 哈哈哈哈</p>
            <span>系列：企业pos机</span>
            <div>
              <span>¥{{item.shopPrice}}</span>
              <div>
                <yd-spinner min="1" unit="1" v-model="item.spinner"></yd-spinner>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="shop_bottom">
        <div v-show="!isChecked" class="circle_div" @click="chooseAll"></div>
        <div v-show="isChecked" class="circle_div checked" @click="cancelAll"></div>
        <span class="fontSm">全选</span>
        <span class="fontSm colorI">不含运费</span>
        <p>
          <span>合计：</span>
          <span class="colorT">￥{{getTotal.totalPrice}}</span>
        </p>
        <button class="account">结算</button>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/headers'
  import {shopList} from '../../api/shoppingCar'
    export default {
      data(){
        return{
          title:'购物车',
          isChecked:false,
          items:[{name:1,isChecked:false,spinner:1,shopPrice:'10.35'},{name:2,isChecked:false,spinner:2,shopPrice:'20.00'},{name:3,isChecked:false,spinner:3,shopPrice:'30.00'}],
          itemd:[],
          totalPrice:'0.00',
        }
      },
      components:{
        headers
      },
      computed:{
        getTotal(){
          var _choose = this.items.filter(function (val) {
            return val.isChecked;
          })
          var totalPrice = 0;
          for (var i =0;i < _choose.length;i ++){
            totalPrice += _choose[i].spinner * _choose[i].shopPrice
          }
          return {totalPrice:totalPrice.toFixed(2)}
        }
      },
      methods:{
      //  全选
        chooseAll(){
          this.isChecked = true;
          for (var i =0;i < this.items.length;i ++){
            this.items[i].isChecked = true;
          }
        },
      //  取消全选
        cancelAll(){
          this.isChecked = false;
          for (var i =0;i < this.items.length;i ++){
            this.items[i].isChecked = false;
          }
        },
        select(index){
          this.items[index].isChecked = !this.items[index].isChecked;
          let select = true;
          for (var i =0;i < this.items.length;i ++){
            select *= this.items[i].isChecked;
          }
          if(select==true){
            this.isChecked = true;
          }else{
            this.isChecked = false;
          }
        },
        async getShopList(uid){
          let result = await shopList(uid)
          if(result.code===0){
            this.$dialog.notify({
              mes:result.message,
              timeout:3000
            })
          }
        }
      },
      mounted(){
        this.getShopList(localStorage.uid)
      }
    }
</script>

<style scoped lang="less">
  .circle_div {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px #979797 solid;
    cursor: pointer;
  }
  .checked {
    background-image: url("../../assets/circleChecked.png");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    border: 1px transparent solid;
  }
  .shopList {
    padding: 12px 10px;
    li {
      width: 355px;
      height: 109px;
      background: #fff;
      border-radius: 10px;
      padding: 12px 10px 14px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .shopImg {
        width: 100px;
        height: 83px;
        margin: 0 5px;
        border-radius: 5px;
      }
      .shopContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 83px;
        &>P {
          font-size: 12px;
        }
        &>span {
          font-size: 12px;
          color: #909090;
        }
        &>div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &>span {
            color: #FB1313;
            font-size: 13px;
          }
          &>div {
            width: 87px;
            height: 20px;
            &>span {
              width: 87px!important;
              height: 20px!important;
            }
          }
        }
      }
    }
  }
  .shop_bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom:50px;
    width: 100vw;
    left: 0;
    height: 53px;
    padding: 0 11px 0 19px;
    background: #E8E9EB;
    border-top: 1px #E8E9EB solid;
    .account {
      width:116px;
      height:44px;
      background:rgba(255,109,75,1);
      border-radius:20px;
      color: #fff;
    }
  }
  .fontSm {
    font-size: 12px;
  }
  .colorI {
    color: #909090;
  }
  .colorT {
    color: #FB1313;
  }

</style>
