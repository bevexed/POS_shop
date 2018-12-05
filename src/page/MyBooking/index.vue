<template>
  <section>
    <headers :title="selectComponent[selected].type" :is-search="isSearch" :is-back="true"/>
    <nav>
      <ul>
        <li v-for="(v,i) in selectComponent" @click="select(i)" :class="{active:selected === i}">{{v.type}}</li>
      </ul>
    </nav>
    <All
      v-for="(val,i) in allData"
      :key="i"
      :waitPay="val.state"
      :waitPost="val.state"
      :waitGet="val.state"
      :waitElva="val.state"
    />
  </section>
</template>

<script>
  import headers from '../../components/headers'

  import All from './All'

  export default {
    name: "myBooking",
    components: {
      headers,
      All
    },
    data() {
      return {
        isSearch: false,
        selected: 0,
        title: '我的订单',
        selectComponent: [
          {type: '全部'},
          {type: '待付款'},
          {type: '待发货'},
          {type: '待收货'},
          {type: '待评价'}
        ],
        allData:[
          {state:0},
          {state:1},
          {state:2},
          {state:3},
        ]
      }
    },
    methods: {
      select(i) {
        this.selected = i
      }
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
