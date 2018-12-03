import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'
import register from '@/views/login/register'
import forgetPwd from '@/views/login/forgetPwd'
import indexPage from '@/views/index/index'
import xinyongCard from '@/views/xinyongCard/index'
import shoppingCar from '@/views/shoppingCar/index'
import my from '@/views/my/index'
import cardInfo from '@/views/xinyongCard/cardInfo'
import productDetail from '@/views/index/productDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login,
      meta:{index:0}
    },
    {
      path: '/login',
      component: login,
      redirect:'login',
      meta:{index:0}
    },
    {
      path:'/register',
      component:register,
      meta:{index:1}
    },
    {
      path:'/forgetPwd',
      component:forgetPwd,
      meta:{index:1}
    },
    {
      path:'/indexPage',
      component:indexPage,
      meta:{index:1,navShow:true}
    },
    {
      path:'/xinyongCard',
      component:xinyongCard,
      meta:{index:1,navShow:true}
    },
    {
      path:'/shoppingCar',
      component:shoppingCar,
      meta:{index:1,navShow:true}
    },
    {
      path:'/my',
      component:my,
      meta:{index:1,navShow:true}
    },
    {
      path:'/cardInfo',
      component:cardInfo,
      meta:{index:2}
    },
    {
      path:'/productDetail',
      component:productDetail,
      meta:{index:2}
    }
  ],
  //跳转页面scrolltop为0
  scrollBehavior
    (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
