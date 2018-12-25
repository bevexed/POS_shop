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
            <option :value="v.id" v-for="v in dropDownData">&nbsp; {{v.name}}</option>
          </select>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
          <select slot="right" v-model="form.sku_id">
            <option value="0">&nbsp; 产品通道</option>
            <option :value="v.id" v-for="v in dropDownData2">&nbsp; {{v.name}}</option>
          </select>
        </yd-cell-item>
      </yd-accordion-item>

      <yd-accordion-item :title="'下拉选择会员级别：'+level">
        <yd-cell-group>
          <yd-cell-item type="radio">
            <span slot="left">全选</span>
            <input type="radio" name="level" slot="right" value="0" v-model="form.level">
          </yd-cell-item>
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
        <yd-input slot="right" required v-model="form.mobile" max="20" placeholder="请输入账户 (手机号)"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button size="small" bgcolor="#ff6d4b" color="#fff" style="float: right;margin-right: 20px" @click.native="goTo(form)"> &nbsp;&nbsp; 查询 &nbsp;&nbsp;</yd-button>
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
        return this.dropDownData.filter(item => item.id === this.a).length ? this.dropDownData.filter(item => item.id === this.a)[0].name : '产品型号'
      },
      goodList() {
        return this.dropDownData2.filter(item => item.id === this.form.sku_id).length ? this.dropDownData2.filter(item => item.id === this.form.sku_id)[0].name : '产品通道'
      },
      level() {
        let arr = ['全选','一级会员','二级会员','三级会员']
        return arr[this.form.level]
      }
    },
    data() {
      return {
        form: {
          begin_time: '2017-05-11',
          end_time: '2017-05-11',
          level: 0,
          mobile: '',
          sku_id: 0, // 产品通道
        },
        a: 0, // 产品型号
        dropDownData: [],    // 产品型号
        dropDownData2: []    // 产品通道
      }
    },
    methods: {
      async getDropDown() {
        let res = await dropDown(localStorage.uid);
        if (res.code === 1) {
          this.dropDownData = res.data
        }
      },
      async getDropDown2(order_id) {
        this.form.sku_id = 0;
        let res = await dropDown_order_id(localStorage.uid, order_id);
        if (res.code === 1) {
          this.dropDownData2 = res.data
        }
      },
      goTo(form) {
        let moment = require("moment")
        let {begin_time, end_time, sku_id, level, mobile} = form
        begin_time = moment(begin_time, 'YYYY-MM-DD HH:mm:ss').valueOf();
        end_time = moment(end_time, 'YYYY-MM-DD HH:mm:ss').valueOf();
        if (mobile && mobile.length !== 11) {
          this.$dialog.notify({
            mes: '请检查手机号'
          })
        } else if (begin_time <= end_time) {
          this.$router.push({name: 'TradeSearchResult', params: {form: JSON.stringify(form)}})
        } else {
          this.$dialog.notify({
            mes: '请检查输入时间'
          })

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
