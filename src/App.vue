<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <footers v-show="$route.meta.navShow"></footers>
  </div>
</template>

<script>
  import footers from './components/foot'
  export default {
   data(){
     return{
       transitionName:''
     }
   },
   components:{
     footers
   },
   watch:{
     $route(to,from){
       //如果to索引大于from索引,判断为前进状态,反之则为后退状态
       if(to.meta.index > from.meta.index){
         //设置动画名称
         this.transitionName = 'slide-left';
       }else if(to.meta.index < from.meta.index){
         this.transitionName = 'slide-right';
       }else{
         this.transitionName= 'slide-mid'
       }
     }
   }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #4d4d4d;
  font-size: 14px;
  font-family: myFont,sans-serif;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
}
@font-face {
  font-family: 'myFont';
  src: url("/static/pingfangSC.ttf");
  font-weight: normal;
  font-style: normal;
}
#app>div:nth-child(1) {
  background: #f5f5f5;
  min-height: 100vh;
  width: 100vw;
}
* {
  margin: 0;
  padding: 0;
}
img { content: normal !important; }
ul,li{list-style-type: none}
button {border: none;outline: none}
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
</style>
