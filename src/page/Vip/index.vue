<template>
  <section @wheel="loadingMore" @touchmove="loadingMore">
    <headers :title="'会员列表'" :isBack="true"></headers>
    <nav>
      <ul>
        <li :class="{active:level === 1}" @click="doListsUser(1)">一级会员(1)</li>
        <li :class="{active:level === 2}" @click="doListsUser(2)">二级会员(2)</li>
        <li :class="{active:level === 3}" @click="doListsUser(3)">三级会员(3)</li>
      </ul>
    </nav>
    <section class="detail" v-for="i in 10">
      <img src="" alt="">
      <section>
        <p>小妹去 <span>VIP1</span></p>
        <p>123****1234</p>
        <p>注册时间：2018-11-11</p>
      </section>
      <div>
        <img v-if="jihuo" src="../../assets/setting/ed@3x.png" alt="">
        <img v-else src="../../assets/setting/none@3x.png" alt="">
        <span>{{jihuo === 1? '已激活':'未激活'}}</span>
      </div>
    </section>
    <div class="loading-more">
      <p v-if="loading">下拉或点击加载更多</p>
      <p v-else-if="loading === 'loading'"></p>
      <p v-else>没有更多了</p>
    </div>
  </section>
</template>

<script>
  import headers from '../../components/headers'
  import {listsUser} from "../../api/users";

  export default {
    name: "Vip",
    components: {
      headers
    },
    data() {
      return {
        jihuo: 1,
        level: 1,
        page: 1,
        loading: true,
        listsUserDate: [],
      }
    },
    methods: {
      async doListsUser(level) {
        this.level = level
        let result = await listsUser(this.page, localStorage.uid, level)
        if (result.code === 1) {

        } else {

        }
      },
      async loadingMore() {
        if (document.querySelector('#app').clientHeight + document.querySelector('#app').scrollTop > document.querySelector('#app').clientHeight) {

        }
      }
    },
    mounted() {
      this.doListsUser(1)
    }
  }
</script>

<style scoped lang="less">
  nav {
    margin-bottom: 10px;

    ul {
      background: white;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;

      li {
        font-size: 14px;
        color: #4d4d4d;

        &.active {
          color: #ff6d4b;
        }
      }
    }
  }

  section.detail {
    margin-top: 1px;
    background: white;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      display: inline-block;
      width: 55px;
      height: 55px;
      border: 1px solid #979797;
      border-radius: 50%;
    }

    section {
      width: 60%;

      span {
        display: inline-block;
        width: 34px;
        height: 14px;
        line-height: 14px;
        font-size: 10px;
        background: #d72222;
        color: white;
        border-radius: 7px;
        text-align: center;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 16px;
      }
    }
  }

  div.loading-more {
      p{
        padding: 1rem 0;
        text-align: center;
      }
  }
</style>
