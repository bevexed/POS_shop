<template>
  <div class="add">
    <headers :title="title" :isBack="true"></headers>
    <ul class="address_list">
      <router-link tag="li" :to="{name:'editAddress',params:{id:v.id}}" v-for="(v,i) in addressDate" :key="v.id">
        <div>
          <p>
            <span>{{v.name}}</span>
            <span>{{v.phone}}</span>
            <span v-if="v.is_default === 1" style="float:right;color: #ff6d48;margin: 0">当前默认地址</span>
          </p>
          <p>{{v.address}}</p>
        </div>
        <img @click="$router.push('/editAddress')" src="../../assets/edit.png" alt="">
      </router-link>
    </ul>
    <div style="height: 44px"></div>
    <button class="addBtn" @click="$router.push('/addAddress')">新增收货地址</button>
  </div>
</template>

<script>
  import headers from '../../components/Headers'
  import {address} from "../../api/users";

  export default {
    data() {
      return {
        title: '我的收货地址',
        addressDate: []
      }
    },
    components: {
      headers
    },
    methods: {
      async getAddress() {
        let result = await address(localStorage.uid)
        if (result.code === 1) {
          this.addressDate = result.data
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
        }
      }
    },
    mounted() {
      this.getAddress()
    }
  }
</script>

<style scoped lang="less">
  .add {
    min-height: 100vh;
  }

  .address_list {
    padding: 0 14px;
    background: #fff;

    li {
      padding: 10px 0;
      min-height: 62px;
      border-bottom: 1px #e8e9eb solid;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:last-child {
        border: none;
      }

      > img {
        width: 20px;
      }

      p{
        width: 300px;
        word-break: break-all;
      }

      > div > p > span {
        margin-right: 20px;
      }
    }
  }

  .addBtn {
    height: 44px;
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    color: #fff;
    background: #ff6d4b;
  }
</style>
