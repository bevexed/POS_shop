<template>
  <div>
    <Headers :title="'评论'" :is-back="true"/>
    <label>
      <textarea placeholder="请输入评论信息" v-model="text" cols="30" rows="10"></textarea>
    </label>

    <div>
      <yd-button size="large" type="primary" shape="circle" color="#fff" bgcolor="rgba(255,109,75,1)" @click.native="addComment">提交</yd-button>
    </div>
  </div>
</template>

<script>
  import Headers from '../../components/Headers'
  import {add} from "../../api/users";

  export default {
    name: "GoodEva",
    components: {
      Headers,
    },
    data() {
      return {
        text: ''
      }
    },
    methods: {
      async addComment() {
        if (!this.text) {
          this.$dialog.notify({
            mes: '评论内容不能为空',
            type: res.code === 1 ? "success" : "error"
          });
          return false
        }
        let res = await add(localStorage.uid, 0, this.$route.query.id, this.text);
        this.$dialog.notify({
          mes: res.message,
          type: res.code === 1 ? "success" : "error"
        });
        if (res.code === 1) {
          this.$router.replace({path: "/myBooking/type/all"})
        }
      },
    }
  }
</script>

<style scoped>
  textarea {
    margin-top: 12px;
    border: none;
    width: 100%;
    padding: 2%;
  }

  div {
    width: 96%;
    margin: 0 auto;
  }
</style>
