<template>
  <div class="cardInfo_content">
    <headers :title="title" :isBack="true"></headers>

    <div class="num">
      信用卡申请人数：<span>{{content_info.apply_num}}人</span>
    </div>
    <img :src="IMG_BASE_URL+content_info.picture" alt="">
    <p class="bank_name">
      {{content_info.name}}({{content_info.type}})
    </p>

    <h6>信用卡详情</h6>
    <i class="blurb">{{content_info.blurb}}</i>
    <div class="cardDiv" v-html="content_info.content"></div>

    <div class="customDynamic">
      <div>
        <p>用户评论（{{commentsData.length}}）</p>
        <!--<p>查看全部</p>-->
      </div>
      <div class="dynamic_list">
        <div v-for="(item,index) in commentsData" :key="index">
          <div>
            <img :src="IMG_BASE_URL+item.consumer.avatar" alt="图片">
            <p>{{item.consumer.nick_name}}</p>
          </div>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <div style="height: 70px"></div>
    <footer>
      <div class="back">
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
        commentsData: [],
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
        let res = await info(id);
        if (res.code === 1) {
          this.content_info = res.data;
        } else {
          this.$dialog.notify({
            mes: res.message,
            timeout: 1000
          })
        }
      },
      async dynamicList(id) {
        let res = await dynamic(id);
        if (res.code === 1) {
          this.commentsData = res.data;
        } else {
          this.$dialog.notify({
            mes: res.message,
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
    background: #fff;
    text-align: center;

    img {
      display: inline-block;
      width: 335px;
      height: 180px;
      border-radius: 10px;
    }

    p.bank_name {
      font-weight: bold;
      margin-top: 10px;
      margin-left: 20px;
      text-align: left;
      font-size: 15px;
      margin-bottom: 20px;
    }

    div.num {
      text-align: right;
      padding: 10px 20px;
      font-size: 12px;

      span {
        color: #FF6D4B;
      }
    }

    .cardDiv {
      text-align: left;
      padding: 20px;
    }

    i.blurb {
      font-size: 12px;
      display: block;
      text-align: right;
      padding: 10px 10px 0;
      color: red;
    }

    .customDynamic {
      padding: 10px 20px 20px;
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
    background: white;

    > div.back {
      text-align: left;
      display: inline-block;
      padding: 0 20px;
      width: 70%;
      border-radius: 17px;
      background: #f3f3f3;
      margin-left: 3%;
      margin-right: 3%;
      height: 34px;
      line-height: 34px;

      > input {
        border: none;
        width: 70%;
      }
    }
  }
</style>
