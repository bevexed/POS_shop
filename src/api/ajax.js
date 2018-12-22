import axios from 'axios'
import store from '../store'
import router from '../router'
import {Confirm, Alert, Toast, Notify, Loading} from 'vue-ydui/dist/lib.rem/dialog';

let config = {
  headers: {'Content-Type': 'multipart/form-data'}
};

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  const token = store.state.token;
  if (token) {
    config.headers.Authorization = token;
  }
  // 在发送请求之前做些什么
  Loading.open('很快加载好了');
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status === 200) {
    if (response.data.code === 2) {
      setTimeout(() => {
        router.replace('/login')
      }, 2000)
    }
    Loading.close();
  }

  return response;
}, function (error) {
  Loading.close();
  Notify({
    mes: error.message,
    timeout: 3000
  })
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default function ajax(url, data = {}, type = "POST") {
  return new Promise((resolve, reject) => {
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      let formdata = new FormData()
      for (let [key, value] of Object.entries(data)) {
        formdata.append(key, value)
      }
      promise = axios.post(url, formdata, config)
      // promise = axios.post(url, data)
      // promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
