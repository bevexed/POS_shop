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
      <div>
        <yd-icon name="compose" size="12px"></yd-icon>
        <input type="text" v-model="content" placeholder="写写你的看法">
      </div>
      <yd-button size="small" type="primary" shape="circle" style="padding: 0 25px" bgcolor="#ff6d48" color="#fff" @click.native="addComment">评论</yd-button>
    </footer>
  </div>
</template>

<script>
  import headers from '../../components/Headers'
  import {info, dynamic} from "../../api/credit"
  import {add} from "../../api/users";
  import {IMG_BASE_URL} from "../../api/BASE_URL"

  export default {
    data() {
      return {
        IMG_BASE_URL,
        title: '信用卡详情',
        content: '',
        content_info: '',
        dynamicUL: [],
        id: '', // 信用卡ID
      }
    },
    components: {
      headers
    },
    methods: {
      async addComment() {
        let res = await add(localStorage.uid, this.id, 0, this.content)
        this.$dialog.notify({
          mes: res.message,
          type: res.code === 1 ? "success" : "error"
        })
        if (res.code === 1) {
          this.$router.go(0)
        }
      },
      async getInfo(id) {
        let data = await info(id);
        if (data.code === 1) {
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
        if (data.code === 1) {
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
      this.id = this.$route.query.id
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

  footer {
    width: 100vw;
    position: fixed;
    bottom: 0;
    padding: 10px 0;
    box-shadow: black 3px 3px 20px;

    div {
      display: inline-block;
      padding: 0 20px;
      width: 70%;
      border-radius: 17px;
      background: #f3f3f3;
      margin-left: 3%;
      margin-right: 3%;
      height: 34px;
      line-height: 34px;

      input {
        border: none;
        width: 70%;
      }
    }
  }
</style>
