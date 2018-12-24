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
      <div v-for="v in citySelectLists" @click="changeAddress(v.lat_lng,v.area_id,v.area)">{{v.area}}</div>
    </section>
    <section class="address" v-show="search_key">
      <div v-for="v in citySearchSelectList" @click="changeAddress(v.lat_lng,v.area_id,v.area)">{{v.area}}</div>
    </section>
  </div>
</template>

<script>
  import Headers from '../../components/Headers'

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
      changeAddress(lat_lng, area_id, area) {
        // localStorage.longitude_latitude = lat_lng
        localStorage.area_id = area_id
        localStorage.area = area
        this.$router.push({path: '/index'})
      },
      async getCitySelectList() {
        let result
        console.log(result)
        if (result.code === 1) {
          this.citySelectLists = result.data
        }
      },
      async getCitySearchSelectList(search_key) {
        let result
        if (result.code === 1) {
          if (!result.data) {
            this.$message({
              message: "暂不支持此地址",
              type: 'error',
              duration: 1000
            })
            return
          }
          this.citySearchSelectList = result.data
          console.log(result);
        }
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
    padding: 2%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  section.address div {
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
