<template>
    <div class="add">
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
          <img @click="editClick" src="../../assets/edit.png" alt="">
        </li>
      </ul>
      <button class="addBtn" @click="goADD">新增收货地址</button>
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
      },
      methods:{
        goADD(){
          this.$router.push('/addAddress')
        },
        editClick(){
          this.$router.push('/editAddress')
        }
      }
    }
</script>

<style scoped lang="less">
  .add {
    min-height: 100vh;
  }
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
  .addBtn {
    height: 44px;
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    color: #fff;
    background: #ff6d4b;
  }
</style>
