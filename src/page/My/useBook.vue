<template>
  <div>
    <headers :isBack="true" :title="title" :isSkir="true"></headers>
  </div>
</template>

<script>
  import headers from '../../components/headers'

  export default {
    data() {
      return {
        title: '使用指南'
      }
    },
    components: {
      headers
    }
  }
</script>

<style scoped>

</style>
