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
      <span @click="getImg('reverse_identity')" v-show="!reverse_identity">请上传头像</span>
      <!--<img :src="reverse_identity_url" @click="getImg('reverse_identity')" alt="" v-else>-->
      <canvas id="canvas" width="164" height="164" @click="getImg('reverse_identity')" v-show="reverse_identity"></canvas>
    </div>
    <footer>
      <yd-button bgcolor="#ff6d48" color="#fff" size="large" type="primary" shape="circle" @click.native="doRealName">确定</yd-button>
    </footer>
  </section>

</template>

<script>
  import headers from '../../components/Headers'
  import {infoEdit} from "../../api/users";
  import EXIF from '../../../static/exif'
  // import VueCoreImageUpload  from 'vue-core-image-upload';

  export default {
    name: "InfoEdit",
    components: {
      headers,
      // VueCoreImageUpload,
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
        let that = this
        let file = e.target.files[0];
        console.log(file);

        this[e.target.name] = file;
        this[e.target.name + '_url'] = window.URL.createObjectURL(file);

        let canvas = document.querySelector('#canvas')
        console.log(canvas);
        let ctx = canvas.getContext('2d')
        let img = new Image()
        img.src = this[e.target.name + '_url']
        img.onload = () => {
          EXIF.getData(file, function () {
            let Orientation = EXIF.getAllTags(this).Orientation;
            console.log(Orientation);
            ctx.drawImage(img, 0, 0, 164, 164)
            if (Orientation === 6) {
              ctx.clearRect(0, 0, 164, 164)
              ctx.save()
              ctx.translate(82, 82)
              ctx.rotate(Math.PI / 2)
              ctx.drawImage(img, -82, -82, 164, 164)
              ctx.restore()
            }
            let imgData = canvas.toDataURL();
            let upImg = new Image()
            upImg.src = imgData
            console.log(upImg);
            that[e.target.name] = dataURLtoBlob(imgData);

          })


          function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);
            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {
              type: mime
            });
          }
        }
      },
      async doRealName() {
        if (!this.real_name) {
          this.$dialog.notify({
            mes: '请填写昵称',
            timeout: 3000,
          });
          return
        }
        const {reverse_identity} = this;
        if (!reverse_identity) {
          this.$dialog.notify({
            mes: '请选择图片',
            timeout: 3000,
          });
          return
        }
        let result = await infoEdit(localStorage.uid, reverse_identity, this.real_name);
        // let result = await axios.post(url, data)
        // result = result.data
        if (result.code === 1) {
          this.$dialog.toast({
            mes: result.message,
            timeout: 500,
            icon: 'success',
            callback: () => {
              window.location.assign(`?${Math.random()}/#/setting`)
            }
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

    > canvas, > span {
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
