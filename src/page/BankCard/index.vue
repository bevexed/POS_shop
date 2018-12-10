<template>
  <section>
    <headers :title="'结算卡信息'" :isBack="true"></headers>
    <header>
      添加一张本人储蓄卡作为您的交易入账卡
    </header>
    <yd-cell-group>
      <!--<yd-cell-item>-->
      <!--<span slot="left">持卡人： </span>-->
      <!--<yd-input slot="right" required v-model="user" max="20" placeholder="请输入持卡人姓名"></yd-input>-->
      <!--</yd-cell-item>-->
      <yd-cell-item>
        <span slot="left">银行卡卡号： </span>
        <yd-input slot="right" required regex="bankcard" v-model="bank_card" placeholder="请输入银行卡号"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <!--<yd-icon slot="icon" name="phone" size=".45rem"></yd-icon>-->
        <span slot="left">手机号码： </span>
        <input type="text" v-model="mobile" slot="right" placeholder="请输入手机号码">

        <!-- ↓↓关键代码是这里↓↓ -->
        <yd-sendcode slot="right"
                     bgcolor="#ff6d48"
                     v-model="start"
                     @click.native="sendCode"
                     type="warning"
        ></yd-sendcode>
        <!-- ↑↑关键代码是这里↑↑ -->

      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">验证码： </span>
        <yd-input slot="right" required max="6" v-model="code" placeholder="请输入验证码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group style="margin-top: 20px">
      <yd-cell-item @click.native="doBankDel" v-if="id">
        <span slot="left" style="color: #ff0000">删除账户信息 </span>
      </yd-cell-item>
    </yd-cell-group>
    <footer>
      <yd-button bgcolor="#ff6d48" color="#fff" size="large" type="primary" shape="circle" @click.native="addBnakcard">确定</yd-button>
    </footer>
  </section>

</template>

<script>
  import headers from '../../components/headers'
  import {bankEdit, bankDel} from "../../api/users";
  import {sendMsg} from "../../api/sendMsg";

  export default {
    name: "banckCard",
    components: {
      headers
    },
    data() {
      return {
        start: false,
        type: 2,
        mobile: '',
        bank_card: '',
        is_default: 0,
        code: '',
        id: ''
      }
    },
    methods: {
      async sendCode() {
        let {mobile, type} = this
        let numberPattern = /^[0-9]{11}$/
        if (!mobile || !numberPattern.test(mobile)) {
          this.$dialog.notify({
            mes: '手机号格式不正确',
            timeout: 3000,
          });
          return
        }
        this.$dialog.loading.open('发送中...');
        let result = await sendMsg(mobile, type)
        if (result.code === 1) {
          this.start = true;
          this.$dialog.loading.close();
          this.$dialog.toast({
            mes: '已发送',
            icon: 'success',
            timeout: 1500
          });
        } else {
          this.$dialog.loading.close();
          this.$dialog.toast({
            mes: result.message,
            icon: 'error',
            timeout: 1500
          });
        }


      },

      async addBnakcard() {
        let {bank_card, mobile, is_default, code, id} = this
        let numberPattern = /^[0-9]{11}$/
        if (!mobile || !numberPattern.test(mobile)) {
          this.$dialog.notify({
            mes: '手机号格式不正确',
            timeout: 3000,
          });
          return
        }
        if (!bank_card) {
          this.$dialog.notify({
            mes: '请填写银行卡号',
            timeout: 3000,
          });
          return
        }
        if (!code) {
          this.$dialog.notify({
            mes: '请填写验证码',
            timeout: 3000,
          });
          return
        }

        let result = await bankEdit(localStorage.uid, bank_card, mobile, is_default, code, id)
        if (result.code === 1) {
          this.$dialog.toast({
            mes: '绑定成功',
            icon: 'success',
            timeout: 500,
            callback: () => {
              this.$router.replace('/managebankcard')
            }
          })

        } else {
          this.$dialog.toast({
            mes: result.message,
            icon: 'error',
            timeout: 1500
          });
        }
      },

      async doBankDel() {
        let result = await bankDel(localStorage.uid, this.id)
        if (result.code === 1) {
          this.$dialog.toast({
            mes: '删除成功',
            icon: 'success',
            timeout: 500,
            callback: () => {
              this.$router.replace('/managebankcard')
            }
          })
        } else {
          this.$dialog.toast({
            mes: result.message,
            icon: 'error',
            timeout: 1500
          });
        }
      }
    },
    mounted() {
      if (this.$route.query.id) {
        this.id = this.$route.query.id
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
