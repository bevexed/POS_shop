<template>
  <section>
    <headers :title="'银行卡管理'" :isBack="true"></headers>
    <section class="card" :style="{background:line[i]}" v-for="(v,i) in listsBankData" :key="v.id"
             @click="$router.push({path:'/bankcard',query:{id:v.id}})">
      <img class="logo" :src="v.bank_logo" alt="">
      <p>
        <span>{{v.bank_name}}</span>
        <span>储蓄卡</span>
        <span>{{v.bank_card}}</span>
      </p>
      <img class="edit" src="../../assets/managebankcard/ceshi@3x.png" alt="">
    </section>
    <footer @click="$router.push('/bankcard')">
      添加银行卡
    </footer>
  </section>
</template>

<script>
  import headers from '../../components/Headers'
  import {listsBank} from "../../api/users";

  export default {
    name: "ManageBankCard",
    components: {
      headers
    },
    data() {
      return {
        listsBankData:[]
      }
    },
    computed: {
      line() {
        let arr = this.listsBankData.map(item => {
          // let a = Math.random() * 250 + 100
          let a = 250
          // let background = `linear-gradient(270deg, hsla(${a - 10}, 91%, 69%, 1), hsla(${a}, 91%, 69%, 1))`
          let background = `linear-gradient(270deg, hsla(${a - 10}, 91%, 69%, 1), hsla(${a}, 91%, 69%, 1))`
          return background
        })
        return arr
      }
    },
    methods:{
      async getListsBank(){
        let result = await listsBank(localStorage.uid)
        if (result.code === 1){
          this.listsBankData = result.data
        }
      }
    },
    mounted(){
      this.getListsBank()
    }
  }
</script>

<style scoped lang="less">
  section.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 355px;
    border-radius: 5px;
    margin: 10px auto;
    padding: 20px;

    &.guangda {
      background: linear-gradient(270deg, hsla(210, 91%, 69%, 1), hsla(210, 91%, 69%, 1));
    }

    > img.logo {
      display: inline-block;
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
    }

    p {
      width: 70%;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60px;

      span {
        color: white;
        font-size: 12px;
      }
    }

    .edit {
      width: 21px;
      height: 21px;
      /*filter: invert(0%);*/
    }
  }

  footer {
    position: fixed;
    background: #ff6d4B;
    bottom: 0;
    width: 100vw;
    height: 44px;
    line-height: 44px;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
</style>
