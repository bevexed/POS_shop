<template>
  <div>
    <Headers :is-back="true" :title="`查询`"></Headers>
    <!--<yd-accordion>-->
    <!--<yd-accordion-item>-->
    <yd-cell-group>
      <yd-cell-item v-for="(v,i) in listData" :key="i">
        <span slot="left">{{v.sku_name}}</span>
        <span slot="right">{{v.total}}条</span>
      </yd-cell-item>
    </yd-cell-group>
    <!--</yd-accordion-item>-->
    <!--</yd-accordion>-->

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
        listData: []
      }
    },
    methods: {
      async getQueryTrade(page) {
        let moment = require('moment')
        let {begin_time, end_time, sku_id, level, mobile} = JSON.parse(this.$route.query.form);
        begin_time = moment(begin_time, 'YYYY-MM-DD HH:mm:ss').valueOf();
        end_time = moment(end_time, 'YYYY-MM-DD HH:mm:ss').valueOf();
        if (sku_id === 0) {
          sku_id = ''
        }

        if (level === 0) {
          level = ''
        }
        let res = await queryTrade(localStorage.uid, page, begin_time, end_time, sku_id, level, mobile);

        if (res.code === 1) {
          this.listData = res.data.list
          // this.listData = [{sku_name:1,total:2}]
        }
      },
    },
    mounted() {
      this.getQueryTrade(1)
    }
  }
</script>

<style scoped>

</style>
