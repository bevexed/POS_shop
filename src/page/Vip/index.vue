<template>
  <section @wheel="loadingMore" @touchmove="loadingMore" id="vip">
    <headers :title="'会员列表'" :isBack="true"></headers>
    <nav>
      <ul>
        <li :class="{active:level === 1}" @click="doListsUser(1)">一级会员(1)</li>
        <li :class="{active:level === 2}" @click="doListsUser(2)">二级会员(2)</li>
        <li :class="{active:level === 3}" @click="doListsUser(3)">三级会员(3)</li>
      </ul>
    </nav>
    <section class="detail" v-for="(v,i) in listsUserDate">
      <img :src="v.avatar" alt="">
      <section>
        <p>{{v.nick_name}} <span>VIP1</span></p>
        <p>{{v.mobile}}</p>
        <p>注册时间：{{v.create_time | Time}}</p>
      </section>
      <div>
        <img v-if="v.is_active" src="../../assets/setting/ed@3x.png" alt="">
        <img v-else src="../../assets/setting/none@3x.png" alt="">
        <span>{{v.is_active === 1? '已激活':'未激活'}}</span>
      </div>
    </section>
    <div class="loading-more" @click="loadingMore">
      <p v-if="loadingState === true">下拉或点击加载更多</p>
      <p v-else-if="loadingState === 'loading'" class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
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
        level: 1,
        current_page: 1,
        loadingState: true,
        listsUserDate: [],
      }
    },
    methods: {
      async doListsUser(level) {
        this.level = level
        this.loadingState = true
        let result = await listsUser(1, localStorage.uid, level)
        if (result.code === 1) {
          this.listsUserDate = result.data.data
          this.current_page = result.data.current_page
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000
          })
        }
      },
      loadingMore: async function () {
        let screenHight = document.documentElement.clientHeight
        let scrollTop = document.querySelector('#app').scrollTop
        let documentHeight = document.querySelector('#vip').scrollHeight
        if (scrollTop + screenHight + 30 > documentHeight && this.loadingState === true) {
          this.loadingState = 'loading'
          this.current_page++
          let result = await listsUser(this.current_page, localStorage.uid, this.level)
          if (result.code === 1) {
            this.current_page = result.data.current_page
            this.listsUserDate = [...this.listsUserDate, ...result.data.data];
            if (result.data.data.length === 10) {
              this.loadingState = true
            } else {
              this.loadingState = false
            }
          } else {
            this.$dialog.notify({
              mes: result.message,
              timeout: 3000,
              callback: () => {
                this.loadingState = true
              }
            })
          }
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
    padding: 1rem 0;

    p {
      text-align: center;
    }

    .loading {
      width: 150px;
      height: 15px;
      margin: 0 auto;
      text-align: center;
    }

    .loading span {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 5px;
      background: #ff6d48;
      -webkit-animation: load 1.04s ease infinite;
    }

    .loading span:last-child {
      margin-right: 0px;
    }

    @-webkit-keyframes load {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .loading span:nth-child(1) {
      -webkit-animation-delay: 0.13s;
    }

    .loading span:nth-child(2) {
      -webkit-animation-delay: 0.26s;
    }

    .loading span:nth-child(3) {
      -webkit-animation-delay: 0.39s;
    }

    .loading span:nth-child(4) {
      -webkit-animation-delay: 0.52s;
    }

    .loading span:nth-child(5) {
      -webkit-animation-delay: 0.65s;
    }
  }
</style>
