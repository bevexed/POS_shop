<template>
  <section>
    <headers :title="'头像昵称'" :isBack="true"></headers>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">昵称： </span>
        <yd-input slot="right" required v-model="real_name" max="20" placeholder="请输入昵称"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-item>
      <span slot="left">上传头像： </span>
    </yd-cell-item>
    <div class="upload">
      <input type="file" ref="reverse_identity" id="img" hidden name="reverse_identity" accept="image/*" formenctype="multipart/form-data" @change="getImgData($event)">
      <span @click="getImg('reverse_identity')" v-if="!reverse_identity">请上传头像</span>
      <img :src="reverse_identity_url" @click="getImg('reverse_identity')" alt="" v-else>
    </div>
    <footer>
      <yd-button bgcolor="#ff6d48" color="#fff" size="large" type="primary" shape="circle" @click.native="doRealName">确定</yd-button>
    </footer>
  </section>

</template>

<script>
  import axios from 'axios'
  import headers from '../../components/Headers'
  import {infoEdit} from "../../api/users";

  export default {
    name: "InfoEdit",
    components: {
      headers,
    },
    data() {
      return {
        reverse_identity: '',
        reverse_identity_url: '',
        imgUrl: '',
        real_name: '',
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
        this[e.target.name] = e.target.files[0]
        console.log(this[e.target.name]);
        this[e.target.name + '_url'] = window.URL.createObjectURL(e.target.files[0])
      },
      async doRealName() {
        if (!this.real_name) {
          this.$dialog.notify({
            mes: '请填写昵称',
            timeout: 3000,
          })
          return
        }
        const {reverse_identity} = this
        console.log(reverse_identity);
        // let url = 'http://lzxprogrammer.com/users/infoEdit'
        // let data = new FormData()
        // data.append('uid',localStorage.uid)
        // data.append('avatar',reverse_identity)
        // data.append('nick_name',this.real_name)
        let result = await infoEdit(localStorage.uid,reverse_identity, this.real_name)
        // let result = await axios.post(url, data)
        // result = result.data
        console.log(result);
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
      margin: 0 auto;
      display: block;
      width: 164px;
      height: 164px;
      text-align: center;
      line-height: 164px;
      background: white;
      border-radius: 50%;
    }
  }

</style>
