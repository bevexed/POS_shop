// const moment = require('moment');
import moment from 'moment/min/moment.min'
import Vue from 'vue'

Vue.filter('Time', function (time) {
  if (!time){
    return null
  }
  return moment(time * 1000).format('YYYY年MM月DD日');
})

Vue.filter('TimeDate', function (time) {
  if (!time){
    return null
  }
  return moment(time * 1000).format('YYYY年MM月DD日 HH时mm分ss秒');
})
