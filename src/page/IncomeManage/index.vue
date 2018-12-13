<template>
  <div class="income_content">
    <headers :title="title" :isBack="true"></headers>
    <div class="income_top">
      <span>总资产（元）</span>
      <p>1234.09</p>
      <button>立即提现</button>
    </div>
    <div class="income_box">
      <div>
        <span>总收益（元）</span>
        <p>1234.09</p>
      </div>
      <div>
        <span>已提现金额（元）</span>
        <p>1234.09</p>
      </div>
    </div>

    <ul class="income_list">
      <li>
        <img src="http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg" alt="图片">
        <div>
          <p>
            <span>小妹去</span>
            <span>VIP1</span>
          </p>
          <span>总交易数据：1234</span>
          <span>昨天总交易量：234</span>
          <span>本月累计交易量：467</span>
        </div>
        <img class="iconTab" src="../../assets/jihuo.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import headers from '../../components/Headers'

  export default {
    name: "incomeManage",
    data() {
      return {
        title: '收益管理'
      }
    },
    components: {
      headers
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
      background: rgba(255, 206, 75, 1);
      border-radius: 22px;
      color: #fff;
      font-size: 18px;
    }
  }

  .income_box {
    width: 330px;
    height: 81px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 11px 0px rgba(156, 156, 156, 0.5);
    border-radius: 4px;
    margin: -41px auto 0;
    display: flex;
    align-items: center;

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
</style>
