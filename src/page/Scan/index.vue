<template>
  <div class="scan">
    <headers :isBack="true" :title="title"></headers>
    <div id="bcid">
      <div style="height:40%"></div>
      <p class="tip">...载入中...</p>
    </div>
    <footer>
      <button @click="cancelClick">取消扫描</button>
    </footer>
  </div>
</template>

<script>
  import headers from '../../components/Headers';

  let index = null;

  export default {
    name: 'Scan',
    data() {
      return {
        codeUrl: '',
        title: '扫一扫'
      }
    },
    components: {
      headers
    },
    methods: {
      //创建扫描控件
      startRecognize() {
        let that = this;
        if (!window.plus) return;
        index = new plus.barcode.Barcode('bcid');
        index.onmarked = onmarked;

        function onmarked(type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR';
              break;
            case plus.barcode.EAN13:
              type = 'EAN13';
              break;
            case plus.barcode.EAN8:
              type = 'EAN8';
              break;
            default:
              type = '其它' + type;
              break;
          }
          result = result.replace(/\n/g, '');
          that.codeUrl = result;
          window.location.href = result;
          that.closeScan();
        }
      },
      //开始扫描
      startScan() {
        if (!window.plus) return;
        this.startRecognize();
        index.start();
      },
      //关闭扫描
      cancelScan() {
        if (!window.plus) return;
        index.cancel();
      },
      //关闭条码识别控件
      closeScan() {
        if (!window.plus) return;
        index.close();
      },
      closeAll(){
        this.closeScan();
        this.cancelScan();
      },
      cancelClick(){
        this.$router.back();
      }
    },
    mounted() {
      this.startScan();
    },
    destroyed(){
      this.cancelScan();
      this.closeAll();
    }
  }
</script>
<style lang="less">
  .scan {
    height: 100%;

    #bcid {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 3rem;
      text-align: center;
      color: #fff;
      background: #ccc;
    }

    footer {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3rem;
      line-height: 3rem;
      z-index: 2;
      button {
        width: 100vw;
        background: #FF6D4B;
        color: #fff;
        height: 3rem;
      }
    }
  }
</style>
