<template>
  <section>
    <headers :title="'我的商品'" :isBack="true"></headers>
    <!--<yd-cell-group>-->
      <!--<yd-cell-item>-->
        <!--<span slot="left">手机号 <i>123123123123131</i></span>-->
      <!--</yd-cell-item>-->
    <!--</yd-cell-group>-->
    <p class="title" v-show="productArr.length>0">
      所使用商品列表
    </p>
    <footer v-show="productArr.length>0" v-for="(i,v) in productArr" :key="i">
      <img :src="IMG_BASE_URL + v.show_pic" alt="">
      <p>
        <span>{{v.good_name}}</span> <br>
        <span>{{v.sku_name}}</span>
      </p>
    </footer>
    <div class="div1">暂无使用商品记录...</div>
  </section>
</template>

<script>
  import headers from '../../components/Headers'
  import {product} from "../../api/mygood";
  import {IMG_BASE_URL} from "../../api/BASE_URL";

  export default {
    name: "PhoneNumber",
    components: {
      headers
    },
    data(){
      return{
        productArr:[],
        IMG_BASE_URL
      }
    },
    methods:{
      async getProduct(){
        let result = await product(localStorage.uid);
        this.productArr = result.data
      }
    },
    created(){
      this.getProduct();
    }
  }
</script>

<style scoped lang="less">
  p.title {
    font-size: 12px;
    color: #4d4d4d;
    padding: 6px 13px 13px;
  }

  footer {
    display: flex;
    background: white;
    padding: 13px;

    img {
      display: inline-block;
      width: 70px;
      height: 70px;
      background: #808080;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
  .div1 {
    padding: 10px;
  }
</style>
