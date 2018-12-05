<template>
    <div>
      <headers :title="title" :isBack="true"></headers>
    </div>
</template>

<script>
  import headers from '../../components/headers'
    export default {
       data(){
         return{
           title:'编辑收货地址'
         }
       },
      components:{
        headers
      }
    }
</script>

<style scoped>

</style>
