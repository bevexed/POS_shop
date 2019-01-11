<template>
  <section>
    <section class="card" v-for="(v,i) in data" :key="i">
      <header v-for="(value,index) in v.goods_sku" :key="value.goods_id" @click="goToDetail(v,value)">
        <!--<img src="../../assets/vip/831E3766A296D552A66A12405D6111F2.png" alt="" v-if="v.is_member_order === 1">-->
        <img :src="IMG_BASE_URL + value.show_pic" alt="" @click.stop="goTo(v,value)">
        <p>
          {{value.goods_name}} <br>
          <span v-if="v.is_member_order !== 1">通道：{{value.trad_channel}}</span> <br>
          <span v-if="v.is_member_order !== 1">系列：{{value.category}}</span>
        </p>
        <div>
          ￥{{value.price}}
          <p>x{{value.amount}}</p>
        </div>
      </header>
      <section class="price">
        共一件商品 合计：<span>￥{{v.total_amount}}</span>
      </section>


      <!--已取消-->
      <footer v-if="v.closed === 1">
        <span class="pay>">已取消</span>
      </footer>
      <!--待付款-->
      <footer v-if="v.status === 0 && v.closed === 0">
        <span class="cancel" @click="doOrdersCancel(v.id)">取消订单</span>
        <span class="pay" @click="$router.push({name:'BookingDetail',params:{id:v.id}})" v-if="v.is_member_order !== 1">付款</span>
        <span class="pay" @click="toPay(v.total_amount,v.no)" v-else>付款</span>
      </footer>
      <!--待发货-->
      <footer v-if="v.status === 1">
        <span class="del" @click="doOrdersDel(v.id)">删除订单</span>
        <span class="elva" @click="doOrderRefund(v.id)">申请退款</span>
      </footer>
      <!--待收货-->
      <footer v-if="v.status === 2">
        <span class="del" @click="doOrdersDel(v.id)">删除订单</span>
        <!--<span class="post>">查看物流</span>-->
        <span class="elva" @click="doOrderRefund(v.id)">申请退款</span>
        <span class="elva" @click="doOrderConfirm(v.id)">确认收货</span>
      </footer>
      <!--待评价-->
      <footer v-if="v.status === 3">
        <span class="del" @click="doOrdersDel(v.id)">删除订单</span>
        <!--<span class="post" v-if="v.is_member_order !== 1">查看物流</span>-->
        <span class="elva" v-if="v.is_member_order !== 1" @click="$router.push({path:'/GoodEva',query:{id:v.id}})">评价</span>
      </footer>
      <!--带退款-->
      <footer v-if="v.status === 4||v.status === 5">
        <span class="del" @click="doOrdersDel(v.id)">删除订单</span>
        <!--<span class="post">查看物流</span>-->
        <span class="elva" @click="$router.push({path:'/GoodEva',query:{id:v.id}})">评价</span>
      </footer>
    </section>

    <pay :isShow="show" @close="closeBox" :price="price" :orderNo="no"></pay>
  </section>
</template>

<script>
  import pay from '../../components/pay'
  import {IMG_BASE_URL} from "../../api/BASE_URL";
  import {orderConfirm, orderRefund, ordersCancel, ordersDel} from "../../api/orders";

  export default {
    name: "all",
    data() {
      return {
        IMG_BASE_URL,
        price: '',
        no: '',
        show: false
      }
    },
    components: {
      pay
    },
    props: ['data'],
    methods: {
      toPay(price, no) {
        this.price = price;
        this.no = no;
        this.show = true
      },
      goToDetail(v, value) {
        if (v.is_member_order === 1) {
          return false
        } else {
          this.$router.push({name: 'BookingDetail', params: {id: v.id}})
        }
      },
      goTo(v, value) {
        if (v.is_member_order === 1) {
          return false
        } else {
          this.$router.push({name: 'productDetail', params: {id: value.goods_id}})
        }
      },
      // 确认收货
      async doOrderConfirm(id) {
        let result = await orderConfirm(id, localStorage.uid);
        if (result.code === 1) {
          this.$dialog.toast({
            mes: result.message,
            timeout: 500,
            callback: () => {
              this.$router.go(0)
            }
          })
        } else {
          this.$dialog.toast({
            mes: result.message,
            timeout: 1500,
          })
        }
      },
      // 取消订单
      async doOrdersCancel(id) {
        let result = await ordersCancel(id, localStorage.uid);
        if (result.code === 1) {
          this.$dialog.toast({
            mes: result.message,
            timeout: 500,
            callback: () => {
              this.$router.go(0)
            }
          })
        } else {
          this.$dialog.toast({
            mes: result.message,
            timeout: 1500,
          })
        }
      },
      // 删除订单
      async doOrdersDel(id) {
        let result = await ordersDel(id, localStorage.uid);
        if (result.code === 1) {
          this.$dialog.toast({
            mes: result.message,
            timeout: 500,
            callback: () => {
              this.$router.go(0)
            }
          })
        } else {
          this.$dialog.toast({
            mes: result.message,
            timeout: 1500,
          })
        }
      },

      // 用户退款
      async doOrderRefund(id) {
        let result = await orderRefund(id, localStorage.uid);
        if (result.code === 1) {
          this.$dialog.toast({
            mes: result.message,
            timeout: 500,
            callback: () => {
              this.$router.go(0)
            }
          })
        } else {
          this.$dialog.toast({
            mes: result.message,
            timeout: 1500,
          })
        }
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="less">
  .card {
    width: 94%;
    background: white;
    border-radius: 10px;
    margin: 10px auto;
    padding: 14px;

    header {
      display: flex;
      margin-bottom: 10px;
      justify-content: space-between;

      > img {
        display: block;
        width: 93px;
        height: 80px;
        background: #909090;
      }

      > p {
        width: 157px;
        font-size: 12px;
        color: #4d4d4d;

        > span {
          color: #909090;
        }
      }

      > div {
        text-align: end;
        color: red;

        p {
          color: #4d4d4d;
        }
      }
    }

    .price {
      margin-top: 10px;
      text-align: end;
      color: #7d7d7d;
      font-size: 13px;

      span {
        color: #25292a;
      }
    }

    footer {
      text-align: end;
      margin-top: 20px;

      span {
        display: inline-block;
        width: 81px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        border: 1px solid #979797;
        text-align: center;
        margin-left: 10px;

        &.pay, &.elva {
          border-color: #ff6d4b;
          color: #ff6d4b;
        }
      }
    }
  }
</style>
