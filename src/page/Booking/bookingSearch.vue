<template>
    <div>
      <div class="header_up">
        <div>
          <input class="searchInput" type="search" placeholder="搜索全部订单">
          <img src="../../assets/sousuo.png" alt="">
        </div>
        <span>取消</span>
      </div>
      <div class="search_record">
        <p>
          <span>搜索历史</span>
          <span>清除</span>
        </p>
        <div>
          <p v-for="item in 6">企业pos机</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
       data(){
         return{
           value1:''
         }
       },
    }
</script>

<style scoped lang="less">
 .header_up {
   height: 60px;
   background: #ff6d4b;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 12px;
   .searchInput {
     width:309px;
     height:30px;
     background:rgba(255,255,255,1);
     border-radius:15px;
     border: none;
     padding-left: 35px;
   }
   &>div{
     position: relative;
     &>img {
       width: 17px;
       height: 17px;
       position: absolute;
       left: 13px;
       top: 8px;
     }
   }
   &>span {
     color: #fff;
   }
 }
  .search_record {
    padding: 16px 12px;
    background: rgba(253,253,253,1);
    &>p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    &>div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      &>p {
        width:110px;
        height:32px;
        background:rgba(243,243,243,1);
        border-radius:5px;
        font-size: 15px;
        text-align: center;
        line-height: 32px;
        margin-bottom: 10px;
      }
    }
  }
</style>
