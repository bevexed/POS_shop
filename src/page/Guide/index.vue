<template>
  <div>
    <headers :isBack="true" :title="title" :isSkir="true" @scanResult="scanResult"></headers>
  </div>
</template>

<script>
  import headers from '../../components/Headers'

  export default {
    data() {
      return {
        title: '使用指南'
      }
    },
    components: {
      headers
    },
    methods:{
      scanResult(){
        this.$router.push('/Scan');
      }
    }
  }
</script>

<style scoped>

</style>
