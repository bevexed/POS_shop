<template>
    <div class="cardInfo_content">
      <headers :title="title" :isBack="true"></headers>
      <div class="cardDiv"></div>

      <div class="customDynamic">
        <div>
          <p>用户评论（8）</p>
          <p>查看全部</p>
        </div>
        <div class="dynamic_list">
          <div v-for="item in 3">
            <div>
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4248898548,559247520&fm=27&gp=0.jpg" alt="图片">
              <p>13546421451</p>
            </div>
            <p>好好哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈，嗯嗯嗯嗯额 哈哈啊哈哈哈哈哈</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/headers'
    export default {
      data(){
        return{
          title:'信用卡详情',
        }
      },
      components:{
        headers
      }
    }
</script>

<style scoped lang="less">
  .cardInfo_content{
    background: #fff!important;
    .cardDiv {
      padding: 10px;
    }
    .customDynamic {
      padding: 0 10px;
    }
    .customDynamic>div:nth-child(1){
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>p:nth-child(1){
        font-size: 15px;
      }
      &>p:nth-child(2){
        color: #FF6D4B;
        font-size: 13px;
        margin-right: 21px;
      }
    }
    .dynamic_list {
      &>div{
        margin-bottom: 7px;
        &>div {
          display: flex;
          align-items: center;
          &>img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            margin: 7px 10px 7px 0;
          }
          &>P {
            color: #909090;
          }
        }
        &>p {
          text-align: left;
          font-size: 13px;
        }
      }
    }
  }

</style>
