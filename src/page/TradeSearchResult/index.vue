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
        mobile:''
      }
    }
  }
</script>

<style scoped>

</style>
