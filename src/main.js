// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './filter'
import './util'
import navigation from 'vue-navigation/dist/vue-navigation.esm'
Vue.use(navigation,{router,store});


import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.px.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mui from 'vue-awesome-mui'

import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage';

Vue.use(VueAreaLinkage);
Vue.use(Mui);



Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

Vue.use(YDUI);
import {Icons} from 'vue-ydui/dist/lib.px/icons';
Vue.component(Icons.name, Icons);
import 'vue-ydui/dist/ydui.base.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
