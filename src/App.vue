<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition :name="transitionName">
      <!--<navigation>-->
        <router-view></router-view>
      <!--</navigation>-->
    </transition>
    <!--<yd-backtop></yd-backtop>-->
    <footers v-show="$route.meta.navShow"></footers>
  </div>
</template>

<script>
  import footers from './components/Foot'

  export default {
    data() {
      return {
        transitionName: ''
      };
    },
    components: {
      footers
    },
    watch: {
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index) {
          //设置动画名称
          this.transitionName = 'slide-left';
        } else if (to.meta.index < from.meta.index) {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-mid'
        }
      },
    },
    mounted() {
      if (!localStorage.ad_code) {
        this.$getLocation()
      } else {
        this.$store.state.city = localStorage.city
      }
    },
    // created() {
    //   // bind event
    //   this.$navigation.on('forward', (to, from) => {
    //     // console.log('forward to', to, 'from ', from)
    //   })
    //   this.$navigation.on('back', (to, from) => {
    //     // console.log('back to', to, 'from ', from)
    //   })
    //   this.$navigation.on('replace', (to, from) => {
    //     // console.log('replace to', to, 'from ', from)
    //   })
    //   this.$navigation.on('refresh', (to, from) => {
    //     // console.log('refresh to', to, 'from ', from)
    //   })
    //   this.$navigation.on('reset', () => {
    //     // console.log('reset')
    //   })
    //   // and use [once, off] methods
    //   this.$navigation.once('forward', () => {
    //     // console.log('appear once')
    //   })
    //   const off = () => {
    //     // console.log('will not appear')
    //   }
    //   this.$navigation.on('forward', off)
    //   this.$navigation.off('forward', off)
    // }
  }
</script>

<style>
  .yd-notify {
    font-size: 18px;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #4d4d4d;
    font-size: 14px;
    font-family: myFont, sans-serif;
    height: 100vh;
    overflow-y: scroll;
  }

  @font-face {
    font-family: 'myFont';
    src: url("/static/pingfangSC.ttf");
    font-weight: normal;
    font-style: normal;
  }

  #app > div:nth-child(1) {
    background: #f5f5f5;
    min-height: 100vh;
    width: 100vw;
  }

  * {
    margin: 0;
    padding: 0;
  }

  img {
    content: normal !important;
  }

  ul, li {
    list-style-type: none
  }

  button {
    border: none;
    outline: none
  }

  input::-webkit-input-placeholder {
    color: #4d4d4d;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 200ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-mid-enter {
    opacity: 0;
  }

  .slide-mid-active {
    transition: opacity .3s;
  }

  input::placeholder {
    font-size: 12px;
    color: #c5c5ca;
  }

  .ellipse {
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
