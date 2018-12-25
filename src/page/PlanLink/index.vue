<template>
  <div class="plan_content">
    <headers :title="title" :isBack="true" :isScan="true" @scanResult="scanResult"></headers>
    <div class="plan_box">
      <p class="plan_title">推广码</p>
      <p class="plan_code">{{$route.query.promotes}}</p>
      <span>您的好友在注册时也可可以填写哦</span>
      <div class="dotSpan"></div>
      <VueQArt :config="config" :downloadButton="downloadButton"></VueQArt>
      <button class="keepCode" @click="saveCode">保存二维码</button>
    </div>
  </div>
</template>

<script>
  import VueQArt from 'vue-qart'
  import headers from '../../components/Headers'

  export default {
    data() {
      return {
        downloadButton: true,
        config: {
          value: 'http://192.168.1.24:8081',
          imagePath: require('../../assets/sousuo.png'),
          filter: 'color'
        },
        title: '推广链接'
      }
    },
    components: {
      headers,
      VueQArt
    },
    methods: {
      saveCode() {
        // const myCanvas = this.$refs.qart.children[0];
        // const myCanvas = this.$refs.qart
        const myCanvas = document.querySelector('canvas')
        const type = 'image/png';
        let image = myCanvas.toDataURL(type).replace(type, "image/octet-stream");

        // const download = document.createElement('a')
        // download.href = image
        // download.download = "img.png"
        // download.click()
        // window.location.href = image; // it will save locally

        this.saveFile(image,"img.png")
      },
      scanResult() {
        this.$router.push('/Scan');
      },
      /**
       * 在本地进行文件保存
       * @param  {String} data     要保存到本地的图片数据
       * @param  {String} filename 文件名
       */
      saveFile(data, filename) {
        const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href = data;
        save_link.download = filename;

        const event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        save_link.dispatchEvent(event);
      }
    }
  }
</script>

<style scoped lang="less">
  .plan_content {
    background: rgba(3, 3, 3, .4982) !important;
    min-height: 100vh;

    .plan_box {
      width: 272px;
      height: 410px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding: 21px 0;
      box-sizing: border-box;

      .plan_title {
        font-size: 18px;
        font-weight: bold;
      }

      .plan_code {
        color: #FF6D4B;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 2px;
        line-height: 30px;
        margin: 4px 0;
      }

      & > span {
        color: #909090;
        font-size: 10px;
      }

      .dotSpan {
        height: 1px;
        border-bottom: 1px #efeded dashed;
        margin: 7px 0 30px;
      }

      .qrCode {
        width: 125px;
        height: 125px;
        margin: 0 73px 30px;
      }

      .keepCode {
        width: 139px;
        height: 40px;
        background: #FF6D4B;
        border-radius: 21px;
        color: #fff;
      }
    }
  }
</style>
