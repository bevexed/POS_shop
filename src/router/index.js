import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/Login/login'
import register from '@/page/Login/register'
import forgetPwd from '@/page/Login/forgetPwd'
import indexPage from '@/page/Index/index'
import CreditCard from '@/page/CreditCard/index'
import shoppingCar from '@/page/ShoppingCar/index'
import my from '@/page/My/index'
import cardInfo from '@/page/CreditCard/cardinfo'
import productDetail from '@/page/ProductDetail/index'
import Booking from '@/page/Booking/index'
import MyBooking from '@/page/MyBooking/index'
import DeliveryAddress from '@/page/address/Delivery address'
import bookingSearch from '@/page/Booking/bookingSearch'
import BookingDetail from '@/page/BookingDetail/index'
import Setting from '@/page/Setting/index'
import ChangePassword from '@/page/ChangePassword/index'
import BankCard from '@/page/BankCard/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
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
      path: '/forgetpwd',
      component: forgetPwd,
      meta: {index: 1}
    },
    {
      path: '/index',
      component: indexPage,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/creditcard',
      component: CreditCard,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/shoppingcar',
      component: shoppingCar,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/My',
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
    },
    {
      path: '/booking',
      component: Booking,
      meta: {index: 1}
    },
    {
      path: '/bookingdetail',
      component: BookingDetail,
      meta: {index: 2,}
    },
    {
      path: '/setting',
      component: Setting,
      meta: {index: 2,}
    },
    {
      path: '/changepassword',
      component: ChangePassword,
      meta: {index: 2,}
    },
    {
      path: '/mybooking',
      component: MyBooking,
      meta: {index: 1,}
    },
    {
      path: '/bankcard',
      component: BankCard,
      meta: {index: 2,}
    },
    {
      path:'/DeliveryAddress',
      component:DeliveryAddress,
      meta: {index:2}
    },
    {
      path:'/bookingSearch',
      component:bookingSearch,
      meta:{index:3}
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
