<template>
  <div style="max-height: 100vh;overflow-y: scroll">
    <section>
      <headers :title="'确认订单'" :isBack="true"></headers>
      <section class="address" v-if="addressObj!=''" @click="$router.push('/DeliveryAddress')">
        <header>
          收货人：{{addressObj.name}} <span>{{addressObj.phone}}</span>
        </header>
        <footer>
          <p>
            <yd-icon size="22px" name="location"></yd-icon>
            收货地址：{{addressObj.province}}{{addressObj.city}}{{addressObj.area}}{{addressObj.address}}
          </p>
          <span>></span>
        </footer>
      </section>
      <section class="address" v-else @click="$router.push('/addaddress')">添加收货地址</section>
      <div v-if="fenlei == 1">
        <section class="detail">
          <div>
            <img :src="`${IMG_BASE_URL}${shopInfo.show_pic}`" alt="商品图片">
            <section>
              <header>
                {{shopInfo.name}}
              </header>
              <p>
                系列：{{shopInfo.category==1?'企业pos机':'个人pos机'}}
              </p>
              <p>
                通道类别：{{shopInfo.trad_channel}}
              </p>
              <div class="price">
                ￥{{shopInfo.price}} <span>x{{num}}</span>
              </div>
            </section>
          </div>
          <section class="num">
            配送方式
            <p>
              快递：￥{{shopInfo.courier_fees}}
            </p>
          </section>
          <section class="num">
            买家留言
            <textarea name="" id="" cols="38" rows="1" placeholder="选填：填写内容已和卖家协商确认" v-model="remarkVal"></textarea>
          </section>
          <footer>
            共{{num}}件商品
            <span>
          小计：
          <i>￥{{((countPrice - 0)+(shopInfo.courier_fees-0)).toFixed(2)}}</i>
        </span>
          </footer>
        </section>
        <footer class="bottom">
          <p>
            合计金额：<span>￥{{(countPrice + parseInt(this.shopInfo.courier_fees)).toFixed(2)}}</span>
          </p>
          <a @click="commitTo">提交订单</a>
        </footer>
      </div>
      <!--购物车入口-->
      <div v-if="fenlei == 2" v-for="(item,index) in items" :key="index">
        <section class="detail">
          <div v-for="(v,i) in item.g_sku" :key="i">
            <img :src="`${IMG_BASE_URL}${item.show_pic}`" alt="商品图片">
            <section>
              <header>
                {{item.name}}
              </header>
              <p>
                系列：{{item.category==1?'企业pos机':'个人pos机'}}
              </p>
              <p>
                通道类别：{{v.trad_channel}}
              </p>
              <div class="price">
                ￥{{v.price}} <span>x{{v.amount}}</span>
              </div>
            </section>
          </div>
          <section class="num">
            配送方式
            <p>
              快递：￥{{courier_fees}}
            </p>
          </section>
          <section class="num">
            买家留言
            <textarea name="" cols="38" rows="1" placeholder="选填：填写内容已和卖家协商确认" v-model="remarkVal"></textarea>
          </section>
          <footer>
            共{{items.length}}件商品
            <span>
          小计：
          <i>￥{{item.total}}</i>
        </span>
          </footer>
        </section>

        <div class="empty"></div>
        <footer class="bottom">
          <p>
            合计金额：<span>￥{{(parseInt(courier_fees) + parseInt(countTotal)).toFixed(2)}}</span>
          </p>
          <a @click="commitO">提交订单</a>
        </footer>
      </div>
    </section>

    <pay :isShow="bol" @close="closeBox" :price="totalPuch" :orderNo="orderNo"></pay>
  </div>
</template>

<script>
  import headers from '../../components/Headers'
  import pay from '../../components/pay'
  import {commitOrder, defaultAddress, info, infos} from '../../api/order'
  import {IMG_BASE_URL} from "../../api/BASE_URL";

  export default {
    name: "booking",
    components: {
      headers, pay
    },
    data() {
      return {
        num: 1,
        shopInfo: {},
        IMG_BASE_URL,
        addressObj: {},
        remarkVal: "",
        fenlei: 0,
        items: [],
        courier_fees: 0,
        bol: false,
        totalPuch: '',
        orderNo: ''
      }
    },
    computed: {
      countPrice() {
        return this.num * this.shopInfo.price
      },
      countTotal() {
        let price = 0;
        for (let i = 0; i < this.items.length; i++) {
          for (let j = 0; j < this.items[i].g_sku.length; j++) {
            price += this.items[i].g_sku[j].amount * this.items[i].g_sku[j].price
          }
        }
        return price
      }
    },
    methods: {
      async getInfo(uid, g_id) {
        let res = await info(uid, g_id);
        this.shopInfo = res.data;
        this.fenlei = 1;
      },
      async getInfos(uid, cart_infos) {
        let data = await infos(uid, cart_infos);
        this.fenlei = 2;
        this.items = data.data;
        this.courier_fees = data.courier_fees;
      },
      async getDefalutAddress() {
        let res = await defaultAddress(localStorage.uid,this.$route.query.aid);
        this.addressObj = res.data;
      },
      async commit(uid, address_id, g_sku_infos, remark) {
        let cart_ids = ''
        if (this.$route.query.cart_infos) {
          cart_ids = JSON.stringify(JSON.parse(this.$route.query.cart_infos).map(item => {
            return {'cart_id': item.cart_id}
          }))
        }
        let result = await commitOrder(uid, address_id, g_sku_infos, cart_ids, remark)
        if (result.code === 1) {
          this.bol = true;
          this.orderNo = result.out_trade_no;
        }
      },
      commitTo() {
        let g_sku_infos = JSON.stringify([{'g_id': this.shopInfo.g_id, 'g_sku_id': this.shopInfo.g_sku_id, 'amount': this.num}]);
        if (this.addressObj.id === undefined) {
          this.$dialog.notify({
            mes: '请填写收货地址',
            timeout: 3000
          })
        }
        ;
        this.totalPuch = (this.countPrice + parseInt(this.shopInfo.courier_fees)).toFixed(2)
        this.commit(localStorage.uid, this.addressObj.id, g_sku_infos, this.remarkVal)
      },
      commitO() {
        let arr = [];
        for (let i = 0; i < this.items.length; i++) {
          for (let j = 0; j < this.items[i].g_sku.length; j++) {
            arr.push({'g_id': this.items[i].g_id, 'g_sku_id': this.items[i].g_sku[j].g_sku_id, 'amount': this.items[i].g_sku[j].amount})
          }
        }
        let g_sku_infos = JSON.stringify(arr)
        if (this.addressObj.id === undefined) {
          this.$dialog.notify({
            mes: '请填写收货地址',
            timeout: 3000
          })
        }
        ;
        this.totalPuch = (parseInt(this.courier_fees) + parseInt(this.countTotal)).toFixed(2);
        this.commit(localStorage.uid, this.addressObj.id, g_sku_infos, this.remarkVal)
      },
      closeBox(e) {
        this.bol = e;
      }
    },
    created() {
      if (this.$route.query.id) {
        this.getInfo(localStorage.uid, this.$route.query.id);
      } else {
        this.getInfos(localStorage.uid, this.$route.query.cart_infos)
      }
      this.getDefalutAddress();
    }
  }
</script>

<style scoped lang="less">
  .address {
    background: #ffffff;
    padding: 10px;
    font-size: 14px;
    color: #4d4d4d;

    header {
      /*margin-left: 27px;*/

      span {
        float: right;
      }
    }

    footer {
      margin-top: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        margin: 0 4px;
      }

      span {
        align-self: flex-end;
      }
    }
  }

  .detail {
    margin-top: 10px;
    background: white;
    padding: 10px;

    img {
      display: inline-block;
      width: 100px;
      height: 100px;
      /*background: #808080;*/
    }

    section {
      width: 65%;
      display: inline-block;
      vertical-align: top;
      margin-left: 10px;

      header {
        font-size: 14px;
        color: #4d4d4d;
      }

      p {
        font-size: 14px;
        color: #909090;
        margin-top: 4px;
      }

      .price {
        margin-top: 10px;
        font-size: 18px;
        color: #f60012;

        i {
          font-size: 14px;
        }

        span {
          float: right;
          font-size: 18px;
          color: #4d4d4d;
        }
      }

    }

    & > section.num {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      font-size: 14px;
      color: #4d4d4d;
      border-bottom: 1px solid #dddddd;
      padding: 8px 0;

      > div.x {
        border: 1px solid #a8a8a8;
        border-radius: 4px;
      }

      textarea {
        border: none;
      }

      textarea::placeholder {
        color: #c5c5ca;
        font-size: 14px;
      }
    }

    footer {
      padding: 10px 0 0 0;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      > span {
        margin-left: 10px;

        i {
          color: red;
          font-size: 18px;

          span {
            font-size: 14px;
          }
        }
      }
    }
  }

  .empty {
    height: 50px;
  }

  footer.bottom {
    position: fixed;
    bottom: 0;
    background: white;
    height: 50px;
    width: 100vw;
    left: 0;
    z-index: 10;

    > p {
      position: absolute;
      bottom: 0;
      right: 134px;

      span {
        line-height: 36px;
        font-size: 18px;
        color: red;

        i {
          font-size: 14px;
        }
      }
    }

    a {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 44px;
      line-height: 44px;
      width: 126px;
      text-align: center;
      font-size: 18px;
      color: white;
      background: #ff6d4b;
      display: inline-block;
    }
  }
</style>
