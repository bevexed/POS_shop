<template>
  <div class="head_content">
    <div class="head_top">
      <img class="backImg" v-if="isBack" @click="goBack" src="../assets/back.png" alt="">
      <img v-if="isPosition" class="positionImg" src="../assets/dingwei.png" alt=""><span class="positionSpan" v-if="isPosition">{{city?city:'定位中...' }}</span>
      <p v-if="title">{{title}}</p>
      <span v-if="isRegister" class="register_span" @click="goRegister">注册</span>
      <span v-if="isManage&&isMac" class="register_span" @click="manage">管理</span>
      <span v-if="isManage&&!isMac" class="register_span" @click="finish">完成</span>
      <span v-if="isKeep" class="register_span" @click="isKeep">保存</span>
      <yd-icon v-if="isSearch" size="20px" name="search" @click.native="isSearch" class="register_span"></yd-icon>
      <div v-if="isScan" class="scanP" @click="scanClick">
        <img src="../assets/scan.png" alt="图片">
        <span>扫码</span>
      </div>
      <div v-if="isSkir" class="scanP">
        <img src="../assets/scan.png" alt="">
      </div>
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
    computed:{
      ...mapState(['city'])
    },
    methods: {
      goRegister() {
        this.$router.push('/register')
      },
      goBack() {
        this.$router.back()
      },
      manage() {
        this.$emit('Tab1', false);
      },
      finish() {
        this.$emit('Tab1', true)
      },
      scanClick(){
        this.$emit('scanResult')
      }
    }
  }
</script>

<style scoped lang="less">
  .head_top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    color: #fff;
    background: #ff6d48;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99 !important;

    .register_span {
      position: absolute;
      right: 10px;
      cursor: pointer;
    }

    & > p {
      font-size: 18px;
    }

    .backImg {
      width: 21px;
      position: absolute;
      left: 10px;
      cursor: pointer;
    }

    .positionImg {
      width: 17px;
      position: absolute;
      left: 18px;
      cursor: pointer;
    }

    .positionSpan {
      width: 60px;
      position: absolute;
      left: 40px;
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
