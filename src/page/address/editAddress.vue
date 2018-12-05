<template>
    <div>
      <headers :title="title" :isBack="true" :isKeep="true"></headers>

      <div class="editBox">
        <input type="text" placeholder="请输入姓名">
        <input type="text" placeholder="请输入联系方式">
        <input type="text" placeholder="请输入收货地址">
      </div>
      <div class="deleteAddress">
        删除收货地址
      </div>
    </div>
</template>

<script>
  import headers from '../../components/headers'
    export default {
       data(){
         return{
           title:'编辑收货地址'
         }
       },
      components:{
        headers
      }
    }
</script>

<style scoped lang="less">
  .editBox {
    padding: 17px 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    border-bottom: 10px #f5f5f5 solid;
    input {
      border: none;
      height: 44px;
    }
    input:nth-child(2){
      border-bottom: 1px #e8e9eb solid;
    }
  }
  .deleteAddress {
    height: 42px;
    background: #fff;
    padding: 0 10px;
    line-height: 42px;
    color: #FB1313;
    font-family: myFont,sans-serif;
  }
  @font-face {
    font-family: 'myFont';
    src: url("/static/pingfangSC.ttf");
    font-weight: normal;
    font-style: normal;
  }
</style>
