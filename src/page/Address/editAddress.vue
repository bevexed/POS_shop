<template>
  <div>
    <headers :title="'编辑收货地址'" :isBack="true" :isKeep="addAddress"></headers>
    <ul class="edit_ul">
      <li>
        <span>收货人</span>
        <input type="text" v-model="name" placeholder="请输入姓名">
      </li>
      <li>
        <span>手机号</span>
        <input type="number" v-model="phone" placeholder="请输入手机号">
      </li>
      <!--{{selected}}-->
      <li class="address" v-if="pcaa">
        <span>地址</span>
        <area-select v-model="selected" size="small" :level="2" :data="pcaa"></area-select>
      </li>
      <li>
        <input class="address_dir" type="text" v-model="address" placeholder="详细地址：如道路、门牌号、小区、单元室等等">
      </li>
    </ul>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">设置默认地址</span>
        <yd-switch slot="right" v-model="is_default"></yd-switch>
      </yd-cell-item>
      <yd-cell-item>
        <div class="deleteAddress" slot="left" @click="delAddress">
          删除收货地址
        </div>
      </yd-cell-item>
    </yd-cell-group>


  </div>
</template>

<script>
  import {pcaa} from 'area-data'; // v5 or higher
  import headers from '../../components/Headers'
  import {addressEdit, addressDel} from "../../api/users";

  export default {
    components: {
      headers
    },
    data() {
      return {
        is_default: false,
        selected: [],
        uid: localStorage.uid,
        id: '',
        address: '',
        name: '',
        phone: ''
      }
    },
    computed: {
      pcaa() {
        return pcaa
      }
    },
    methods: {
      async delAddress() {
        let result = await addressDel(this.uid, this.$route.params.id)
        if (result.code === 1) {
          this.$dialog.toast({
            mes: '删除地址成功',
            timeout: 500,
            icon: 'success',
            callback: () => {
              this.$router.replace('/DeliveryAddress')
            }
          });
        } else {
          this.$dialog.toast({
            mes: result.message,
            timeout: 1000,
            icon: 'error',
          });
        }
      },
      async addAddress() {
        let isDefault = this.is_default ? 1 : 0
        this.id = this.$route.params.id
        let {uid, id, selected, address, name, phone} = this
        let result = await addressEdit(uid, id, address, name, phone, ...selected, isDefault)
        if (!name) {
          this.$dialog.notify({
            mes: '请输入姓名',
            timeout: 3000
          })
          return
        }
        if (!phone || !/^[0-9]{11}$/.test(phone)) {
          this.$dialog.notify({
            mes: '请检查手机号',
            timeout: 3000
          })
          return
        }
        if (result.code === 1) {
          this.$dialog.toast({
            mes: '编辑地址成功',
            timeout: 1000,
            icon: 'success',
            callback: () => {
              this.$router.replace('/DeliveryAddress')
            }
          });
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
        }
      }
    },
    mounted() {

    }

  }
</script>
<style lang="less">
  .area-select-wrap {
    width: 90%;
    display: flex;
    height: 50px !important;
  }

  .area-select {
    display: inline-block;
    margin-top: 10px;
  }

  .area-selected-trigger {
    padding-top: 5px !important;
  }

  .yd-cell {
    z-index: 0;
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

      &:last-child {
        border: none;
      }

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
