const moment = require('moment');
import Vue from 'vue'
Vue.filter('Time',function (time) {
  return moment(time).format('YYYY年MM月DD日');
})
