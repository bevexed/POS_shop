<template>
  <div class="head_content">
    <div class="head_top">
      <section class="header" @click="goBack" v-if="isBack">
        <img class="backImg" src="../assets/back.png" alt="">
      </section>
      <section v-if="!isPosition && !isBack"></section>
      <section class="positionDiv" @click="$goTo('chooseCity')" v-if="isPosition">
        <img class="positionImg" src="../assets/dingwei.png" alt="">
        <span class="positionSpan">{{city?city:'定位中...' }}</span>
      </section>
      <p v-if="title">{{title}}</p>
      <section class="right">
        <span v-if="isRegister" class="register_span" @click="goRegister">注册</span>
        <span v-if="isManage&&isMac" class="register_span" @click="manage">管理</span>
        <span v-if="isManage&&!isMac" class="register_span" @click="finish">完成</span>
        <span v-if="isKeep" class="register_span" @click="isKeep">保存</span>
        <span v-if="isSearch" @click="isSearch">
            <img src="../assets/fdj.svg" style="width: 20px" name="search" class="register_span" alt="">
        </span>
        <span v-if="isScan" class="scanP" @click="scanClick">
          <img src="../assets/scan.png" alt="图片">
          <span>扫码</span>
        </span>
        <span v-if="isSkir" class="scanP" @click="scanClick">
          <img src="../assets/scan.png" alt="">
        </span>
      </section>

    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {}
    },
    props: {
      isRegister: Boolean,
      title: String,
      isBack: Boolean,
      isManage: Boolean,
      isPosition: Boolean,
      isSearch: Function,
      isKeep: Function,
      isScan: Boolean,
      isSkir: Boolean,
      isMac: Boolean
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      goRegister() {
        this.$router.push('/register')
      },
      goBack() {
        this.$router.back();
      },
      manage() {
        this.$emit('Tab1', false);
      },
      finish() {
        this.$emit('Tab1', true)
      },
      scanClick() {
        this.$emit('scanResult')
      }
    }
  }
</script>

<style scoped lang="less">
  .head_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    color: #fff;
    background: #ff6d48;
    height: 60px;
    line-height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99 !important;

    section {
      position: relative;
      display: inline-block;
      height: 100%;
      width: 30%;
      line-height: 60px;
    }

    .header {
      text-align: left;
    }

    .right {
      text-align: right;
      margin-right: 10px;

      > span {
        display: inline-block;
        width: 100%;
      }
    }

    .register_span {
      display: inline-block;
      width: 100%;
      cursor: pointer;
    }

    & > p {
      font-size: 18px;
    }

    .backImg {
      width: 21px;
      position: relative;
      left: 10px;
      cursor: pointer;
    }

    .positionDiv {
      position: relative;
      left: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;

      .positionImg {
        width: 17px;
      }
    }

    .positionSpan {
      max-width: 100px;
      overflow: hidden;
      word-break: keep-all;
      text-overflow: ellipsis;
      margin-left: 10px;
      cursor: pointer;
    }

    .scanP {
      display: flex;
      align-items: center;
      position: absolute;
      right: 10px;
      cursor: pointer;

      & > img {
        width: 14px;
        margin-right: 4px;
      }
    }
  }

  .empty {
    width: 100vw;
    height: 60px;
  }
</style>
