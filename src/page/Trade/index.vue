<template>
  <section>
    <headers :title="'交易管理'" :isBack="true"></headers>
    <nav>
      <ul>
        <li :class="{active:selected === 1}" @click="change(1)">一级会员(1)</li>
        <li :class="{active:selected === 2}" @click="change(2)">二级会员(2)</li>
        <li :class="{active:selected === 3}" @click="change(3)">三级会员(3)</li>
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
        <img v-if="is_actives === 1" src="../../assets/setting/ed@3x.png" alt="">
        <img v-else src="../../assets/setting/none@3x.png" alt="">
        <span>{{is_actives === 1? '已激活':'未激活'}}</span>
      </div>
    </section>
  </section>
</template>

<script>
  import headers from '../../components/Headers'

  export default {
    name: "Vip",
    components: {
      headers
    },
    data() {
      return {
        is_actives: localStorage.is_actives - 0,
        selected: 1
      }
    },
    methods: {
      change(i) {
        this.selected = i
      }
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
</style>
