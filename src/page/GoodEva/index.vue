<template>
  <div>
    <Headers :title="'评论'" :is-back="true"/>
    <section class="detail" v-for="(v,i) in ordersDetailData.goods_sku">
      <img :src="IMG_BASE_URL+v.show_pic" alt="" @click="$router.push({name:'productDetail',params:{id:v.goods_id}})">
      <section>
        <header>
          {{v.goods_name}}
        </header>
        <p>
          系列：{{v.category}}
        </p>
        <p>
          通道类型：{{v.trad_channel}}
        </p>
        <div class="price">
          ￥{{v.price.split('.')[0]}}.<i>{{v.price.split('.')[1]}}</i> <span>x{{v.amount}}</span>
        </div>
      </section>
    </section>
    <label>
      <textarea placeholder="请输入评论信息" v-model="text" cols="30" rows="10"></textarea>
    </label>

    <div class="button">
      <yd-button size="large" type="primary" shape="circle" color="#fff" bgcolor="rgba(255,109,75,1)" @click.native="addComment">提交</yd-button>
    </div>
  </div>
</template>

<script>
  import Headers from '../../components/Headers'
  import {IMG_BASE_URL} from "../../api/BASE_URL";
  import {ordersDetail} from "../../api/orders";
  import {add} from "../../api/users";

  export default {
    name: "GoodEva",
    components: {
      Headers,
    },
    data() {
      return {
        text: '',
        IMG_BASE_URL,
        ordersDetailData: '',
        totalPuch: '',
        orderNo: ''
      }
    },
    methods: {
      async addComment() {
        if (!this.text) {
          this.$dialog.notify({
            mes: '评论内容不能为空',
            type: "error"
          });
          return false
        }
        let id = this.ordersDetailData.goods_sku.map(item => item.goods_id)
        console.log(id);
        let res = await add(localStorage.uid, 0, id, this.text);
        this.$dialog.notify({
          mes: res.message,
          type: res.code === 1 ? "success" : "error"
        });
        if (res.code === 1) {
          this.$router.replace({path: "/myBooking/type/all"})
        }
      },
      async getOrdersDetail() {
        let result = await ordersDetail(this.$route.query.id, localStorage.uid)
        if (result.code === 1) {
          this.ordersDetailData = result.data
          this.totalPuch = result.data.total_amount
          this.totalNo = result.data.no
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
        }

      }
    },
    mounted() {
      this.getOrdersDetail()
    }
  }
</script>

<style scoped lang="scss">
  textarea {
    margin: 12px auto;
    border: 1px solid #eee;
    width: 100%;
    padding: 2%;
    background: white;
  }

  div.button {
    width: 96%;
    margin: 0 auto;
  }

  .address {
    background: #ffffff;
    padding: 10px;
    font-size: 14px;
    color: #4d4d4d;
    margin-bottom: 10px;

    header {
      margin-left: 27px;

      span {
        float: right;
      }
    }

    footer {
      margin-top: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        margin: 0 6px;
      }
    }
  }

  .detail {
    background: #fcfcfc;
    padding: 10px;

    img {
      display: inline-block;
      width: 100px;
      height: 100px;
      background: #808080;
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
        margin-top: 5px;
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


  }

  .total_money {
    background: white;
    padding: 10px;

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

  .post-detail {
    padding: 10px;
    background: white;
    margin-top: 6px;

    ul {
      li {
        font-size: 14px;
        color: #4d4d4d;
        padding: 9px 0;
      }
    }

  }
</style>
