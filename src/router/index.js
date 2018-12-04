import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/Login/login'
import register from '@/page/Login/register'
import forgetPwd from '@/page/Login/forgetPwd'
import indexPage from '@/page/Index/index'
import CreditCard from '@/page/CreditCard/index'
import shoppingCar from '@/page/ShoppingCar/index'
import my from '@/page/my/index'
import cardInfo from '@/page/CreditCard/cardinfo'
import productDetail from '@/page/ProductDetail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: indexPage,
      meta: {index: 0}
    },
    {
      path: '/Login',
      component: login,
      meta: {index: 0}
    },
    {
      path: '/register',
      component: register,
      meta: {index: 1}
    },
    {
      path: '/forgetPwd',
      component: forgetPwd,
      meta: {index: 1}
    },
    {
      path: '/indexPage',
      component: indexPage,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/CreditCard',
      component: CreditCard,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/shoppingCar',
      component: shoppingCar,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/my',
      component: my,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/cardInfo',
      component: cardInfo,
      meta: {index: 2}
    },
    {
      path: '/productdetail',
      component: productDetail,
      meta: {index: 2}
    }
  ],
  //跳转页面scrolltop为0
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
})
