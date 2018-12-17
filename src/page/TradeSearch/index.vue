<template>
  <div>
    <Headers :is-back="true" :title="`查询`"></Headers>
    <yd-accordion>
      <yd-accordion-item title="下拉选择时间">
        <yd-cell-item arrow>
          <span slot="left">开始时间：</span>
          <yd-datetime type="date" v-model="form.begin_time" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">结束时间：</span>
          <yd-datetime type="date" v-model="form.end_time" slot="right"></yd-datetime>
        </yd-cell-item>
      </yd-accordion-item>

      <yd-accordion-item title="下拉选择产品型号和通道">
      </yd-accordion-item>

      <yd-accordion-item title="下拉选择会员级别">
        <yd-cell-group>
          <yd-cell-item type="radio">
            <span slot="left">一级会员</span>
            <input type="radio" name="level" slot="right" value="1"  v-model="form.level">
          </yd-cell-item>
          <yd-cell-item type="radio">
            <span slot="left">二级会员</span>
            <input type="radio" name="level" slot="right" value="2"  v-model="form.level">
          </yd-cell-item>
          <yd-cell-item type="radio">
            <span slot="left">三级会员</span>
            <input type="radio" name="level" slot="right" value="3"  v-model="form.level">
          </yd-cell-item>
        </yd-cell-group>
      </yd-accordion-item>
    </yd-accordion>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">会员查询：</span>
        <yd-input slot="right" required v-model="form.mobile" max="20" placeholder="请输入账户"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button size="small" bgcolor="#ff6d4b" color="#fff" style="float: right;margin-right: 20px" @click.native="$router.push({name:'TradeSearchResult',params:{form:JSON.stringify(form)}})"> &nbsp;&nbsp; 查询 &nbsp;&nbsp; </yd-button>
  </div>
</template>

<script>
  import Headers from '../../components/Headers'

  export default {
    name: "TradeSearch",
    components: {
      Headers,

    },
    data() {
      return {
        form:{
          begin_time: '2017-05-11',
          end_time: '2017-05-11',
          level: '2',
          mobile:''
        }
      }
    }
  }
</script>

<style scoped>

</style>
