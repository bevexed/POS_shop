<template>
  <div>
    <headers :title="title" :isManage="true" :isMac="isMac" @Tab1="getBool"></headers>
    <ul class="shopList">
      <li v-for="(item,index) in items" :key="index" @click="$router.push({name:'productDetail',params:{id:item.g_id}})">
        <div class="circle_div" :class="item.isChecked?'checked':''" @click="select(index)"></div>
        <img class="shopImg" :src="IMG_BASE_URL + item.show_pic" alt="">
        <div class="shopContent">
          <p>{{item.name}}</p>
          <span>系列：{{item.trad_channel}}</span>
          <div>
            <span>¥{{item.price}}</span>
            <div>
              <yd-spinner min="1" unit="1" v-model="item.amount"></yd-spinner>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="empty"></div>
    <div class="shop_bottom">
      <div>
        <div v-show="!isChecked" class="circle_div" @click="chooseAll"></div>
        <div v-show="isChecked" class="circle_div checked" @click="cancelAll"></div>
        <span class="fontSm">全选</span>
      </div>
      <div v-show="isMac">
        <span class="fontSm colorI">不含运费</span>
        <p>
          <span>合计：</span>
          <span class="colorT">￥{{getTotal.totalPrice}}</span>
        </p>
        <button class="account" @click="account">结算</button>
      </div>
      <button class="delete" v-show="!isMac">删除</button>
    </div>
  </div>
</template>

<script>
  import headers from '../../components/Headers'
  import {shopList} from '../../api/cart'
  import {IMG_BASE_URL} from "../../api/BASE_URL";

  export default {
    data() {
      return {
        IMG_BASE_URL,
        title: '购物车',
        isChecked: false,
        items: [],
        totalPrice: '0.00',
        isMac: true
      }
    },
    components: {
      headers
    },
    computed: {
      getTotal() {
        let _choose = this.items.filter(function (val) {
          return val.isChecked;
        })
        let totalPrice = 0;
        for (let i = 0; i < _choose.length; i++) {
          totalPrice += _choose[i].amount * _choose[i].price
        }
        return {totalPrice: totalPrice.toFixed(2)}
      }
    },
    methods: {
      //  全选
      chooseAll() {
        this.isChecked = true;
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].isChecked = true;
        }
      },
      //  取消全选
      cancelAll() {
        this.isChecked = false;
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].isChecked = false;
        }
      },
      select(index) {
        this.items[index].isChecked = !this.items[index].isChecked;
        let select = true;
        for (let i = 0; i < this.items.length; i++) {
          select *= this.items[i].isChecked;
        }
        this.isChecked = select
      },
      //购物车数据列表
      async getShopList(uid) {
        let result = await shopList(uid);
        for (let i = 0; i < result.data.length; i++) {
          result.data[i].isChecked = false; //设置初始是否选中
        }
        this.items = result.data;
        if (result.code === 0) {
          this.$dialog.notify({
            mes: result.message,
            timeout: 1000
          })
        }
      },
      account() {
        let select = this.items.filter(val => {
          return val.isChecked === true;
        });
        let cart_infos, arr = [];
        for (let i = 0; i < select.length; i++) {
          arr.push({'cart_id': select[i].id, 'amount': select[i].amount})
          cart_infos = JSON.stringify(arr);
        }
        if (select.length !== 0) {
          this.$router.push({path: '/Booking', query: {cart_infos: cart_infos}})
        } else {
          this.$dialog.notify({
            mes: '至少选择一件宝贝',
            timeout: 1000
          })
        }
      },
      getBool(e) {
        this.isMac = e;
      }
    },
    mounted() {
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
    margin-right: 5px;
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
        margin: 0 5px 0 0;
        border-radius: 5px;
      }

      .shopContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 83px;
        flex: 1;

        & > P {
          font-size: 12px;
        }

        & > span {
          font-size: 12px;
          color: #909090;
        }

        & > div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          & > span {
            color: #FB1313;
            font-size: 13px;
          }

          & > div {
            width: 87px;
            height: 20px;

            & > span {
              width: 87px !important;
              height: 20px !important;
            }
          }
        }
      }
    }
  }

  .empty {
    height: 53px;
  }

  .shop_bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 50px;
    width: 100vw;
    left: 0;
    height: 53px;
    padding: 0 11px 0 19px;
    background: #E8E9EB;
    border-top: 1px #E8E9EB solid;

    & > div {
      display: flex;
      align-items: center;

      & > p {
        margin: 0 5px;
      }
    }

    .account {
      width: 116px;
      height: 44px;
      background: rgba(255, 109, 75, 1);
      border-radius: 20px;
      color: #fff;
    }

    .delete {
      width: 116px;
      height: 44px;
      border: 1px rgba(255, 109, 75, 1) solid;
      background: #fff;
      border-radius: 20px;
      color: rgba(255, 109, 75, 1);
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
<style lang="less">
  .shopList {
    .yd-spinner-square:after, .yd-spinner-square:before {
      content: "";
      position: absolute;
      z-index: 5;
      left: 0;
      width: 100%;
      height: 1px;
      background-image: none !important;
    }

    .yd-spinner-square > span:first-child:before {
      content: "";
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      width: 1px;
      height: 100%;
      background-image: none !important;
    }

    .yd-spinner-square > span:last-child:after {
      content: "";
      position: absolute;
      z-index: 5;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background-image: none !important;
    }
  }

</style>
