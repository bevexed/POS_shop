<template>
  <section>
    <headers :title="'银行卡管理'" :isBack="true"></headers>
    <section class="card" :style="{background:line[i]}" v-for="(v,i) in card">
      <img class="logo" src="" alt="">
      <p>
        <span>中国光大银行</span>
        <span>储蓄卡</span>
        <span>*** *** *** 1234</span>
      </p>
      <img class="edit" src="../../assets/managebankcard/ceshi@3x.png" alt="">
    </section>
  </section>
</template>

<script>
  import headers from '../../components/headers'

  export default {
    name: "ManageBankCard",
    components: {
      headers
    },
    data() {
      return {
        card: [
          1, 2, 3
        ]
      }
    },
    computed: {
      line() {
        let arr = this.card.map(item => {
          let a = Math.random() * 250 + 100
          let background = `linear-gradient(270deg, hsla(${a - 10}, 91%, 69%, 1), hsla(${a}, 91%, 69%, 1))`
          return background
        })
        return arr
      }
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
</style>
