<template>
  <yd-slider autoplay="3000">
    <yd-slider-item v-for="(value,i) in data" :key="i">
      <!--<a href="http://www.ydcss.com">-->
      <img :src="IMG_BASE_URL+value">
      <!--</a>-->
    </yd-slider-item>
  </yd-slider>
</template>

<script>
  import {IMG_BASE_URL} from "../../api/BASE_URL";

  export default {
    props: {
      data: {
        type: Array
      }
    },
    data() {
      return {
        IMG_BASE_URL
      }
    }
  };
</script>
