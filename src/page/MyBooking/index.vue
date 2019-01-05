<template>
  <section @wheel="loadingMore" @touchmove="loadingMore" id="vip">
    <headers :title="selectComponent[selected].type" :is-back="true"/>
    <nav>
      <ul>
        <li v-for="(v,i) in selectComponent" @click="select(i)" :class="{active:selected === i}">{{v.type}}</li>
      </ul>
    </nav>
    <All
      :data="orderListData"
      style="margin-top: 60px"
    />
    <div class="loading-more" @click="loadingMore">
      <p v-if="loadingState === true">下拉或点击加载更多</p>
      <p v-else-if="loadingState === 'loading'" class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p v-else>没有更多了</p>
    </div>
  </section>
</template>

<script>
  import headers from '../../components/Headers'
  import All from './All'

  import {orderList} from '../../api/orders'

  export default {
    name: "myBooking",
    components: {
      headers,
      All
    },
    data() {
      return {
        loadingState: true,
        page: 1,
        selected: 0,
        title: '我的订单',
        orderListData: [],
        selectComponent: [
          {type: '全部'},
          {type: '待付款'},
          {type: '待发货'},
          {type: '待收货'},
          {type: '待评价'},
          {type: '退款'}
        ],
      }
    },
    computed: {},
    methods: {
      async select(i) {
        this.loadingState = true
        this.page = 1
        if (i === 0) {
          this.$router.replace({name: 'myBooking', params: {type: 'all'}})
        } else {
          this.$router.replace({name: 'myBooking', params: {type: i - 1}})
        }
        this.selected = i

        this.getOrderList()
      },
      async getOrderList() {
        let result = await orderList(this.page, localStorage.uid, this.$route.params.type)
        if (result.code === 1) {
          this.orderListData = result.data.items;
          // this.orderListData = result.data.items.filter(item => item.is_member_order===1);

        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
        }

      },
      async loadingMore() {
        let screenHight = document.documentElement.clientHeight
        let scrollTop = document.querySelector('#app').scrollTop
        let documentHeight = document.querySelector('#vip').scrollHeight
        if (scrollTop + screenHight + 30 > documentHeight && this.loadingState === true) {
          this.loadingState = 'loading'
          this.page++
          let result = await orderList(this.page, localStorage.uid, this.$route.params.type)
          if (result.code === 1) {
            this.orderListData = [...this.orderListData, ...result.data.items];
            if (result.data.items.length === 10) {
              this.loadingState = true
            } else {
              this.loadingState = false
            }
          } else {
            this.$dialog.notify({
              mes: result.message,
              timeout: 3000,
              callback: () => {
                this.loadingState = true
              }
            })
          }
        }
      }
    },
    mounted() {
      if (this.$route.params.type === 'all') {
        this.selected = 0
      } else {
        this.selected = this.$route.params.type - 0 + 1
      }

      this.getOrderList()
    }
  }
</script>

<style scoped lang="less">
  nav {
    width: 100%;
    position: fixed;
    background: white;

    ul {
      display: flex;
      justify-content: space-around;

      li {
        color: #4d4d4d;
        padding: 10px 0;

        &.active {
          border-bottom: 2px solid #ff6d4b;
          color: #ff6d4b;
        }
      }

    }
  }

  div.loading-more {
    padding: 1rem 0;

    p {
      text-align: center;
    }

    .loading {
      width: 150px;
      height: 15px;
      margin: 0 auto;
      text-align: center;
    }

    .loading span {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 5px;
      background: #ff6d48;
      -webkit-animation: load 1.04s ease infinite;
    }

    .loading span:last-child {
      margin-right: 0px;
    }

    @-webkit-keyframes load {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .loading span:nth-child(1) {
      -webkit-animation-delay: 0.13s;
    }

    .loading span:nth-child(2) {
      -webkit-animation-delay: 0.26s;
    }

    .loading span:nth-child(3) {
      -webkit-animation-delay: 0.39s;
    }

    .loading span:nth-child(4) {
      -webkit-animation-delay: 0.52s;
    }

    .loading span:nth-child(5) {
      -webkit-animation-delay: 0.65s;
    }
  }
</style>
