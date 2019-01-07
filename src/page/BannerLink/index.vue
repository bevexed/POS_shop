<template>
    <div>
      <Headers :title="title" :isBack="true"></Headers>
      <iframe id="show-iframe" :src="$route.query.url" frameborder="0"></iframe>
    </div>
</template>

<script>
  import Headers from '../../components/Headers'
    export default {
       data(){
         return{
           title:'信用妈妈'
         }
       },
       components:{
        Headers
       },
        mounted(){
          const oIframe = document.getElementById('show-iframe');
          const deviceWidth = document.documentElement.clientWidth;
          const deviceHeight = document.documentElement.clientHeight;
          oIframe.style.width = deviceWidth + 'px';
          oIframe.style.height = deviceHeight + 'px';
        }
    }
</script>

<style scoped>

</style>
