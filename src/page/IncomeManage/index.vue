<template>
  <div class="income_content" v-if="earningsData">
    <headers :title="title" :isBack="true" :isSearch="goTo"></headers>
    <div class="income_top">
      <span>总资产（元）</span>
      <p>{{earningsData.account.total}}</p>
      <button v-if="earningsData.account.total<100" class="buttonT">立即提现</button>
      <button v-else class="buttonO" @click="withdraw(earningsData.account.total)">立即提现</button>
      <span>满100元可提现</span>
    </div>
    <div class="income_box">
      <div>
        <span>总收益（元）</span>
        <p>{{earningsData.total_volume}}</p>
      </div>
      <div>
        <span>已提现金额（元）</span>
        <p>{{earningsData.account.withdraw}}</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>昨天交易总数({{earningsData.yesterday_volume -0}})</li>
        <li>本月交易总数({{earningsData.this_month_volume -0}})</li>
        <li>近三个月交易总数({{earningsData.three_month_volume -0}})</li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import headers from '../../components/Headers'
  import {earnings,bank} from "../../api/members";

  export default {
    name: "incomeManage",
    data() {
      return {
        selected: 1,
        title: '收益管理',
        earningsData: '',
        list:''
      }
    },
    components: {
      headers,
    },
    created() {
      this.getEarnings();
      this.getBank();
    },
    methods: {
      goTo() {
        this.$router.push('/incomeSearch')
      },
      change(i) {
        this.selected = i
      },
      async getEarnings() {
        let res = await earnings(localStorage.uid)
        if (res.code === 1) {
          this.earningsData = res.data
        } else {
          this.$dialog.notify({
            res: res.message,
            type: 'error'
          })
        }
      },
      async getBank(){
        let result = await bank(localStorage.uid);
        this.list = result.data;
      },
      withdraw(e){
        if(this.list.length>0){
          this.$router.push({path:'/Withdraw',query:{much:e}});
        }else{
          this.$router.push('/ManageBankCard')
        }
      }
    }

  }
</script>

<style scoped lang="less">
  .income_content {
    background: #fff !important;
  }

  .income_top {
    background: #FF6D4B;
    height: 234px;
    color: #fff;
    padding: 10px 0 68px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > span {
      font-size: 15px;
    }

    & > p {
      font-size: 35px;
      font-weight: bold;
    }

    & > button {
      width: 160px;
      height: 44px;
      border-radius: 22px;
      font-size: 18px;
      color: #fff;
    }
    .buttonO {
      background: rgba(255, 206, 75, 1);
    }
    .buttonT {
      background: gray;
    }
  }

  .income_box {
    width: 330px;
    height: 81px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 11px 0px rgba(156, 156, 156, 0.5);
    border-radius: 4px;
    margin: -41px auto 0;
    display: flex;
    align-items: center;
    z-index: 999;

    & > div {
      width: 50%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      & > p {
        color: #FF6D4B;
        font-size: 20px;
      }
    }

    & > div:nth-child(1) {
      border-right: 1px solid rgba(232, 233, 235, 1);
    }
  }

  .income_list {
    padding-top: 20px;

    li {
      padding: 5px 15px;
      display: flex;
      align-items: center;
      position: relative;
      border-bottom: 1px solid rgba(232, 233, 235, 1);

      & > img:nth-child(1) {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        margin-right: 15px;
      }

      & > div {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > P {
          display: flex;
          align-items: center;

          & > span:nth-child(1) {
            font-size: 14px;
            margin-right: 4px;
          }

          & > span:nth-child(2) {
            width: 30px;
            height: 13px;
            background: rgba(215, 34, 34, 1);
            border-radius: 7px;
            color: #fff;
            font-size: 10px;
            text-align: center;
            line-height: 13px;
          }
        }
      }

      .iconTab {
        width: 16px;
        height: 22px;
        position: absolute;
        right: 24px;
      }
    }
  }

  nav {
    margin-bottom: 10px;

    ul {
      margin-top: 20px;
      background: white;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      border-bottom: 4px solid #e1e1e1;

      li {
        font-size: 12px;
        color: #4d4d4d;

        &.active {
          color: #ff6d4b;
        }
      }
    }
  }
</style>
