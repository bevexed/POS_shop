<template>
  <div style="text-align: center;margin: 0 auto">
    <img style="display: block;margin: 100px auto;" src="../../assets/suc.svg" alt="">
    <i class="el-icon-success" style="color:#ff6d48;font-size: 20px;"> 支付成功</i> <br>
    <p style="padding-top: 20px" @click="to">{{time}}s或点击后跳转到首页</p>
  </div>

</template>

<script>
  export default {
    name: "paySuccess",
    data() {
      return {
        time: 5
      }
    },
    methods: {
      goTo() {
        let t = setInterval(() => {
          this.time--;
          if (this.time === 0) {
            clearInterval(t)
            window.location.assign('http://47.105.237.119/#/index')
          }
        }, 1000)
      },
      to() {
        clearInterval(t)
        window.location.assign('http://47.105.237.119/#/index')
      }
    },
    mounted() {
      this.goTo()
    }
  }
</script>

<style scoped>

</style>
