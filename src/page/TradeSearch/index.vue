<template>
  <div>
    <Headers :is-back="true" :title="`查询`"></Headers>
    <yd-accordion>
      <yd-accordion-item :title="'下拉选择时间：' + form.begin_time + '--' + form.end_time">
        <yd-cell-item arrow>
          <span slot="left">开始时间：</span>
          <yd-datetime type="date" v-model="form.begin_time" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">结束时间：</span>
          <yd-datetime type="date" v-model="form.end_time" slot="right"></yd-datetime>
        </yd-cell-item>
      </yd-accordion-item>

      <yd-accordion-item :title="`下拉选择产品型号和通道：${goodType} - ${goodList} `">
        <yd-cell-item arrow type="label">
          <select slot="right" v-model="a" @change="getDropDown2(dropDownData[a-1]?dropDownData[a-1]['id']:'产品型号')">
            <option value="0">&nbsp; 产品型号</option>
            <option :value="v.id" v-for="(v,i) in dropDownData">&nbsp; {{v.name}}</option>
          </select>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
          <select slot="right" v-model="b">
            <option value="0">&nbsp; 产品通道</option>
            <option :value="v.id" v-for="(v,i) in dropDownData2">&nbsp; {{v.name}}</option>
          </select>
        </yd-cell-item>
      </yd-accordion-item>

      <yd-accordion-item title="下拉选择会员级别">
        <yd-cell-group>
          <yd-cell-item type="radio">
            <span slot="left">一级会员</span>
            <input type="radio" name="level" slot="right" value="1" v-model="form.level">
          </yd-cell-item>
          <yd-cell-item type="radio">
            <span slot="left">二级会员</span>
            <input type="radio" name="level" slot="right" value="2" v-model="form.level">
          </yd-cell-item>
          <yd-cell-item type="radio">
            <span slot="left">三级会员</span>
            <input type="radio" name="level" slot="right" value="3" v-model="form.level">
          </yd-cell-item>
        </yd-cell-group>
      </yd-accordion-item>
    </yd-accordion>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">会员查询：</span>
        <yd-input slot="right" required v-model="form.count" max="20" placeholder="请输入账户"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button size="small" bgcolor="#ff6d4b" color="#fff" style="float: right;margin-right: 20px" @click.native="$router.push({name:'TradeSearchResult',params:{form:JSON.stringify(form)}})"> &nbsp;&nbsp; 查询 &nbsp;&nbsp;</yd-button>
  </div>
</template>

<script>
  import Headers from '../../components/Headers'
  import {dropDown, dropDown_order_id} from "../../api/members";

  export default {
    name: "TradeSearch",
    components: {
      Headers,

    },
    computed: {
      goodType() {
        return this.dropDownData.filter(item => item.id === this.a).length? this.dropDownData.filter(item => item.id === this.a)[0].name: '产品型号'
      },
      goodList(){
        return this.dropDownData2.filter(item => item.id === this.b).length? this.dropDownData2.filter(item => item.id === this.b)[0].name: '产品通道'
      }
    },
    data() {
      return {
        form: {
          begin_time: '2017-05-11',
          end_time: '2017-05-11',
          level: '2',
          count: '',
        },
        a: 0, // 产品型号
        b: 0, // 产品通道
        dropDownData: [],    // 产品型号
        dropDownData2: []    // 产品通道
      }
    },
    methods: {
      async getDropDown() {
        let res = await dropDown(localStorage.uid)
        if (res.code === 1) {
          this.dropDownData = res.data
        }
      },
      async getDropDown2(order_id) {
        this.b = 0
        let res = await dropDown_order_id(localStorage.uid, order_id)
        if (res.code === 1) {
          this.dropDownData2 = res.data
        }
      }
    },
    mounted() {
      this.getDropDown()
    }
  }
</script>

<style scoped>

</style>
