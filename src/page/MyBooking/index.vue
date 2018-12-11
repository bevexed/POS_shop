<template>
  <section>
    <headers :title="selectComponent[selected].type" :is-search="isSearch" :is-back="true"/>
    <nav>
      <ul>
        <li v-for="(v,i) in selectComponent" @click="select(i)" :class="{active:selected === i}">{{v.type}}</li>
      </ul>
    </nav>
    <All
      :data="orderListData"
    />
  </section>
</template>

<script>
  import headers from '../../components/headers'
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
        page: 1,
        isSearch: false,
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
        if (i === 0) {
          this.$router.replace({name: 'myBooking', params: {type: 'all'}})
        } else {
          this.$router.replace({name: 'myBooking', params: {type: i-1}})
        }
        this.selected = i

        this.getOrderList()
      },
      async getOrderList() {
        let result = await orderList(this.page, localStorage.uid, this.$route.params.type)
        if (result.code === 1) {
          this.orderListData = result.data.items
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
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
</style>
