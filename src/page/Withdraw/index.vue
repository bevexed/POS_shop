<template>
    <div>
      <headers :isBack="true" :title="title"></headers>
      <div class="content_box">
        <div class="content_top">
          <p>到账银行卡</p>
          <div @click="chooseBank">
            <p>{{`${bankLists.bank_name}(${bank_card_num})`}}</p>
            <span>当天24小时前到账</span>
          </div>
        </div>

        <div class="content_bottom">
          <p>提现金额</p>
          <div>
            <span>￥</span>
            <span>{{$route.query.much}}</span>
          </div>
          <button @click="withdrawClick">提现</button>
        </div>

      </div>

      <div class="withdraw_box" v-show="isShowing">
        <div class="withdraw_content">
          <p>选择到账银行卡</p>
          <ul>
            <li v-for="(item,index) in bankList" @click="chooseWithdraw(item.bank_card.substring(item.bank_card.length - 4))">
              <yd-radio-group v-model="radio1" :callback="getVal">
                <yd-radio :val="(item.id)">{{`${item.bank_name}(${item.bank_card.substring(item.bank_card.length - 4)})`}}</yd-radio>
              </yd-radio-group>
            </li>
          </ul>
        </div>
        <div class="withdraw_else" @click="openAlert"></div>
      </div>
    </div>
</template>

<script>
  import headers from '../../components/Headers';
  import {bank,withdrawMoney} from '../../api/members'
  export default {
    name: "index",
    data(){
      return{
        title:'提现',
        isShowing:false,
        bankLists:[],
        bankList:[],
        radio1:0,
        bank_card_num:''
      }
    },
    components:{
      headers,
    },
    methods:{
      //更改银行卡
      chooseBank(){
        this.isShowing = true;
      },
      //获取列表
      async getList(){
        let result = await bank(localStorage.uid);
        this.bankList = result.data;
        let arr = [];
        for(var i = 0; i < result.data.length;i ++){
          if(result.data[i].is_default == 1){
            arr.push(result.data[i]);
          }
        }
        this.radio1 = arr[0].id;
        arr[0].bank_card = arr[0].bank_card.substring(arr[0].bank_card.length - 4);
        this.bankLists = arr[0];
        this.bank_card_num = arr[0].bank_card
      },
      //选择银行卡
      chooseWithdraw(e){
        this.isShowing = false;
        this.bank_card_num= e;
      },
      openAlert(){
        this.isShowing = false;
      },
    // 提现
      async withdrawClick(){
        let result = await withdrawMoney(localStorage.uid,this.radio1);
        if(result.code == 1){
          this.$router.back();
        }else {
          this.$dialog.notify({
            res: result.message,
            type: 'error'
          })
        }
      }
    },
    created(){
      this.getList();
    }
  }
</script>

<style scoped lang="less">
  .content_box {
    background: #fff;
    margin: 20px 25px;
    .content_top {
      display: flex;
      background: #fbfbfb;
      padding: 10px 20px;
      >div{
        margin-left: 20px;
        >p {
          color: #687aa0;
        }
        >span {
          color: #b4b4b4;
        }
      }
    }
    .content_bottom {
      padding: 10px 20px;
      >div {
        height: 50px;
        border-bottom: 1px #b4b4b4 solid;
        line-height: 50px;
        font-size: 30px;
        font-weight: bold;
      }
      >button {
        height: 45px;
        background: #ff6d4b;
        color: #fff;
        width: 286px;
        margin-top: 10px;
      }
    }
  }

  .withdraw_box {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    left: 0;
    top: 0;
    .withdraw_else {
      width: 100vw;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .withdraw_content {
      width: 100vw;
      padding: 10px 0 20px;
      background: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 5px 5px 0 0;
      >p {
        padding-left: 20px;
        font-size: 18px;
        border-bottom: 1px #b4b4b4 solid;
        line-height: 40px;
      }
      ul {
        padding: 0 0 0 20px;
        li {
          height: 45px;
          border-bottom: 1px #b4b4b4 solid;
          display: flex;
          justify-content: space-between;
          padding: 0 20px 0 0;
          align-items: center;
        }
      }
    }
  }
</style>
