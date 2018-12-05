<template>
    <div>
      <headers :title="title" :isBack="true" :isKeep="true"></headers>
      <ul class="edit_ul">
        <li>
          <span>收货人</span>
          <input type="text" placeholder="请输入姓名">
        </li>
        <li>
          <span>手机号</span>
          <input type="text" placeholder="请输入手机号">
        </li>
        <li>
          <span>所在地区</span>
          <div>
            <input type="text" placeholder="请选择省市区" readonly>
            <img src="../../assets/next.png" alt="">
          </div>
        </li>
        <li>
          <input class="address_dir" type="text" placeholder="详细地址：如道路、门牌号、小区、单元室等等">
        </li>
      </ul>
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
  .edit_ul {
    background: #fff;
    border-bottom: 10px #f5f5f5 solid;
    li {
      height: 45px;
      border-bottom: 1px #e8e9eb solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 10px;
      input {
        border: none;
        height: 45px;
      }
      &>div {
        &>img {
          width: 7px;
        }
        &>input {
          text-indent: 10px;
        }
      }
      .address_dir {
        width: 100%;
      }
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
