<template>
  <div>
    <headers :title="'新增收货地址'" :isBack="true" :isKeep="true"></headers>
    <ul class="edit_ul">
      <li>
        <span>收货人</span>
        <input type="name" placeholder="请输入姓名">
      </li>
      <li>
        <span>手机号</span>
        <input type="phone" placeholder="请输入手机号">
      </li>
      <!--{{selected}}-->
      <li class="address">
        <span>地址</span>
        <area-select v-model="selected" size="small" :level="2" :data="pcaa"></area-select>
      </li>
      <li>
        <input class="address_dir" type="address" placeholder="详细地址：如道路、门牌号、小区、单元室等等">
      </li>
    </ul>
    <div class="deleteAddress">
      删除收货地址
    </div>

  </div>
</template>

<script>
  import {pcaa} from 'area-data'; // v5 or higher
  import headers from '../../components/headers'
  import {addressEdit} from "../../api/users";

  export default {
    components: {
      headers
    },
    data() {
      return {
        pcaa,
        selected: '',
        show1: false,
        model1: '',
        uid: localStorage.uid,
        id: null,
        province_id: '',
        city_id: '',
        area_id: '',
        address: '',
        name: '',
        phone: ''
      }
    },
    computed: {},
    methods: {
      async addAddress() {
        let {uid, id, province_id, city_id, area_id, address, name, phone} = this
        let result = addressEdit(uid, id, province_id, city_id, area_id, address, name, phone)
      }
    }

  }
</script>
<style lang="less">
  .area-select-wrap{
    width: 90%;
    display: flex;
    height: 50px !important;
  }
  .area-select{
    display: inline-block;
    margin-top: 10px;
  }
  .area-selected-trigger{
    padding-top: 5px!important;
  }
</style>

<style scoped lang="less">
  .edit_ul {
    background: #fff;
    border-bottom: 10px #f5f5f5 solid;

    span {
      width: 16%;
      display: inline-block;
    }

    li {
      height: 45px;
      border-bottom: 1px #e8e9eb solid;
      align-items: center;
      margin: 0 10px;

      &.address {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
          width: 40px;
        }

        div {
          div {
            width: 30%;
          }
        }
      }

      input {
        margin-left: 10px;
        border: none;
        height: 45px;
      }

      & > div {
        & > img {
          width: 7px;
        }

        & > input {
          text-indent: 10px;
        }
      }

      .address_dir {
        width: 100%;
      }
    }
  }

  .deleteAddress {
    height: 42px;
    background: #fff;
    padding: 0 10px;
    line-height: 42px;
    color: #FB1313;
    font-family: myFont, sans-serif;
  }

  @font-face {
    font-family: 'myFont';
    src: url("/static/pingfangSC.ttf");
    font-weight: normal;
    font-style: normal;
  }
</style>
