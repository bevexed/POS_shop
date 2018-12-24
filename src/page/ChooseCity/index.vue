<template>
  <div @keydown.enter="getCitySearchSelectList(search_key)" style="background: #eeeeee">
    <Headers :is-back="true" :title="'地址'"/>
    <form action="#" onsubmit="return false;" class="index_head" style="background: #ffffff">
      <yd-icon name="search"></yd-icon>
      <yd-input
        style="margin-left: 10px"
        type="search"
        placeholder="请输入城市名"
        prefix-icon="el-icon-search"
        v-model="search_key"
        @input="getCitySearchSelectList(search_key)"
      >
      </yd-input>
      <span class="button" @click="getCitySearchSelectList(search_key)" v-show="!search_key">搜索</span>
      <span class="button" @click="search_key = ''" v-show="search_key">取消</span>

    </form>
    <section class="address">
      <div @click="reset">
        重新定位
      </div>
    </section>
    <section class="address" v-show="!search_key">
      <div v-for="v in citySelectLists" @click="changeAddress(v.ad_code,v.name)">{{v.name}}</div>
    </section>
    <section class="address" v-show="search_key">
      <div v-for="v in citySearchSelectList" @click="changeAddress(v.ad_code,v.name)">{{v.name}}</div>
    </section>
  </div>
</template>

<script>
  import Headers from '../../components/Headers'
  import {position} from "../../api/home";

  export default {
    name: "selectAddress",
    components: {
      Headers
    },
    data() {
      return {
        search_key: '',
        citySelectLists: '',
        citySearchSelectList: '',
      }
    },
    methods: {
      reset() {
        localStorage.removeItem('ad_code')
        this.$router.push('/index')
        history.go(0)
      },
      back() {
        history.go(-1)
      },
      changeAddress(ad_code, city) {
        localStorage.ad_code = ad_code
        localStorage.city = city
        this.$store.state.city = city
        this.$router.push({path: '/index'})
      },
      async getCitySelectList() {
        let result = await position()
        if (result.code === 1) {
          this.citySelectLists = result.data
        }
      },
      async getCitySearchSelectList(search_key) {
        this.citySearchSelectList = this.citySelectLists.filter(item => item.name.indexOf(search_key) > -1)
      }
    },
    mounted() {
      //路由拦截。。。
      // if (!localStorage.longitude_latitude) {
      //     location.assign('./index.html')
      // }

      setTimeout(() => {
        this.getCitySelectList()
      })

    },
  }
</script>

<style scoped>
  .index_head {
    width: 100%;
    height: 56px;
    display: flex;
    padding: 3%;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  section.address {
    font-size: 12px;
    padding: 2%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  section.address div {
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
    margin-top: 10px;
    margin-left: 10px;
    width: 30%;
    text-align: center;
    background: #ffffff;
    height: 40px;
    line-height: 40px;
  }

  .button {
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    background: #fdb122;
    color: white;
  }
</style>
