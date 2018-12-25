<template>
  <div>
    <Headers :is-back="true" :title="`查询`"></Headers>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">产品名称通道1</span>
        <span slot="right">500条</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">产品名称通道1</span>
        <span slot="right">500条</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">产品名称通道1</span>
        <span slot="right">500条</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">产品名称通道1</span>
        <span slot="right">500条</span>
      </yd-cell-item>
    </yd-cell-group>

  </div>
</template>

<script>
  import Headers from '../../components/Headers'
  import {queryTrade} from "../../api/members";
  export default {
    name: "TradeSearchResult",
    components: {
      Headers,

    },
    data() {
      return {
        count: '',
        begin_time: '2017-05-11',
        end_time: '2017-05-11',
        level: '2',
        mobile: ''
      }
    },
    methods: {
      async getQueryTrade(page) {
        let moment = require('moment')
        let {begin_time, end_time, sku_id, level, mobile} = JSON.parse(this.$route.params.form)
        begin_time = moment(begin_time, 'YYYY-MM-DD HH:mm:ss').valueOf();
        end_time = moment(end_time, 'YYYY-MM-DD HH:mm:ss').valueOf();
        let res = await queryTrade(localStorage.uid, page, begin_time, end_time, sku_id, level, mobile)
      },
    },
    mounted() {
      this.getQueryTrade(1)
    }
  }
</script>

<style scoped>

</style>
