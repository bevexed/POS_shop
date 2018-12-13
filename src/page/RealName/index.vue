<template>
  <section>
    <headers :title="'实名认证'" :isBack="true"></headers>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">姓名： </span>
        <yd-input slot="right" required v-model="real_name" max="20" placeholder="请输入姓名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">身份证号： </span>
        <yd-input slot="right" required v-model="idCard" placeholder="请输入身份证号"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <footer>
      <yd-button bgcolor="#ff6d48" color="#fff" size="large" type="primary" shape="circle" @click.native="doRealName">确定</yd-button>
    </footer>
  </section>

</template>

<script>
  import headers from '../../components/Headers'
  import {realName} from "../../api/users";

  export default {
    name: "banckCard",
    components: {
      headers
    },
    data() {
      return {
        real_name: '',
        idCard: ''
      }
    },
    methods: {
      async doRealName() {
        if (!this.real_name) {
          this.$dialog.notify({
            mes: '请填写用户名',
            timeout: 3000,
          })
          return
        }
        if (!this.idCard) {
          this.$dialog.notify({
            mes: '请填写银行卡号',
            timeout: 3000,
          })
          return
        }
        let result = await realName(localStorage.uid, this.real_name, this.idCard)
        if (result.code === 1) {
          this.$dialog.toast({
            mes: result.message,
            timeout: 3000,
            icon: 'success'
          })
        } else {
          this.$dialog.notify({
            mes: result.message,
            timeout: 3000,
          })
        }
      }
    }
  }
</script>

<style scoped>
  header {
    font-size: 12px;
    color: #909090;
    padding: 10px 12px;
  }

  .yd-input input::placeholder {
    font-size: 12px !important;
    color: #c5c5ca !important;
  }

  footer {
    width: 90%;
    margin: 85px auto;
  }


</style>
