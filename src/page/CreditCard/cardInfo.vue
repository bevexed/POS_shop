<template>
  <div class="cardInfo_content">
    <headers :title="title" :isBack="true"></headers>
    <div class="cardDiv" v-html="content_info"></div>

    <div class="customDynamic">
      <div>
        <p>用户评论（{{dynamicUL.length}}）</p>
        <!--<p>查看全部</p>-->
      </div>
      <div class="dynamic_list">
        <div v-for="(item,index) in dynamicUL" :key="index">
          <div>
            <img :src="IMG_BASE_URL+item.consumer.avatar" alt="图片">
            <p>{{item.consumer.nick_name}}</p>
          </div>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <footer>

    </footer>
  </div>
</template>

<script>
  import headers from '../../components/headers'
  import {info, dynamic} from "../../api/credit"
  import {IMG_BASE_URL} from "../../api/BASE_URL"

  export default {
    data() {
      return {
        IMG_BASE_URL,
        title: '信用卡详情',
        content_info: '',
        dynamicUL: []
      }
    },
    components: {
      headers
    },
    methods: {
      async getInfo(id) {
        let data = await info(id);
        if (data.code == 1) {
          this.content_info = data.data.content;
        } else {
          this.$dialog.notify({
            mes: data.message,
            timeout: 1000
          })
        }
      },
      async dynamicList(id) {
        let data = await dynamic(id);
        if (data.code == 1) {
          this.dynamicUL = data.data;
        } else {
          this.$dialog.notify({
            mes: data.message,
            timeout: 1000
          })
        }
      }
    },
    created() {
      let id = this.$route.query.id
      this.getInfo(id);
      this.dynamicList(id);
    }
  }
</script>

<style scoped lang="less">
  .cardInfo_content {
    background: #fff !important;

    .cardDiv {
      padding: 10px;
    }

    .customDynamic {
      padding: 0 10px;
    }

    .customDynamic > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > p:nth-child(1) {
        font-size: 15px;
      }

      & > p:nth-child(2) {
        color: #FF6D4B;
        font-size: 13px;
        margin-right: 21px;
      }
    }

    .dynamic_list {
      & > div {
        margin-bottom: 7px;

        & > div {
          display: flex;
          align-items: center;

          & > img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            margin: 7px 10px 7px 0;
          }

          & > P {
            color: #909090;
          }
        }

        & > p {
          text-align: left;
          font-size: 13px;
        }
      }
    }
  }

</style>
