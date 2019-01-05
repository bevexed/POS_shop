<template>
  <div>
    <headers :isBack="true" :title="title" :isSkir="true" @scanResult="scanResult"></headers>
    <div class="content_box" v-html="showVal"></div>
  </div>
</template>

<script>
  import headers from '../../components/Headers'
  import {usebook} from "../../api/usebook";

  export default {
    data() {
      return {
        title: '使用指南',
        showVal:''
      }
    },
    components: {
      headers
    },
    methods:{
      scanResult(){
        this.$router.push('/Scan');
      },
      async getUsebook(){
        let data = await usebook();
        this.showVal = data.data.content;
      }
    },
    created(){
      this.getUsebook();
    }
  }
</script>

<style scoped>
  .content_box{
    padding: 10px;
    overflow: hidden;
  }
  .content_box>>> img{ display:block; max-width: 100%}
</style>
