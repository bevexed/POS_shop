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
    <yd-cell-item>
      <span slot="left">上传证件材料： </span>
    </yd-cell-item>
    <div class="upload">
      <input type="file" ref="front_identity" hidden name="front_identity" @change="getImgData($event)">
      <span @click="getImg('front_identity')" v-if="!front_identity_url">身份证正面</span>
      <img :src="front_identity_url" @click="getImg('front_identity')" alt="" v-else>
    </div>
    <div class="upload">
      <input type="file" ref="reverse_identity" hidden name="reverse_identity" @change="getImgData($event)">
      <span @click="getImg('reverse_identity')" v-if="!reverse_identity">身份证背面</span>
      <img :src="reverse_identity_url" @click="getImg('reverse_identity')" alt="" v-else>
    </div>
    <footer>
      <yd-button bgcolor="#ff6d48" color="#fff" size="large" type="primary" shape="circle" @click.native="doRealName">确定</yd-button>
    </footer>
  </section>

</template>

<script>
  import headers from '../../components/Headers'
  import {realName} from "../../api/users";

  export default {
    name: "RealName",
    components: {
      headers,
    },
    data() {
      return {
        front_identity: '',
        front_identity_url: '',
        reverse_identity: '',
        reverse_identity_url: '',
        imgUrl: '',
        real_name: '',
        idCard: ''
      }
    },
    created() {
    },
    methods: {
      getImg(name) {
        this.$refs[name].click()
      },
      getImgData(e) {
        console.log(e);
        console.log(e.target.files[0]);
        this[e.target.name] = e.target.files[0]
        this[e.target.name + '_url'] = window.URL.createObjectURL(e.target.files[0])
      },
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
        const {front_identity, reverse_identity} = this
        console.log(front_identity, reverse_identity);
        let result = await realName(localStorage.uid, this.real_name, this.idCard, front_identity, reverse_identity)
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

<style scoped lang="less">
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
    margin: 30px auto;
  }

  .upload {
    padding: 20px;

    > img, > span {
      display: block;
      width: 330px;
      height: 164px;
      text-align: center;
      line-height: 164px;
      background: white;
      border-radius: 6px;
    }
  }

</style>
