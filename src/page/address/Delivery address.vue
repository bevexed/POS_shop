<template>
    <div>
      <headers :title="title" :isBack="true"></headers>
      <ul class="address_list">
        <li>
          <div>
            <p>
              <span>哈哈</span>
              <span>12345678901</span>
            </p>
            <p>浙江省杭州市西湖区1234号哈哈哈哈哈哦哈</p>
          </div>
          <img src="../../assets/edit.png" alt="">
        </li>
      </ul>
    </div>
</template>

<script>
  import headers from '../../components/headers'
    export default {
       data(){
         return{
           title:'我的收货地址'
         }
       },
      components:{
         headers
      }
    }
</script>

<style scoped lang="less">
  .address_list {
    padding: 0 14px;
    background: #fff;
    li {
      height: 62px;
      border-bottom: 1px #e8e9eb solid;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &>img {
        width: 20px;
      }
      &>div>p>span {
        margin-right: 20px;
      }
    }
  }
</style>
