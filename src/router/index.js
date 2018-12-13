import Vue from 'vue'
import Router from 'vue-router'
// users
import editAddress from '../page/Address/editAddress'
import addAddress from '../page/Address/addAddress'
import Setting from '../page/Setting/index'
import RealName from '../page/RealName/index'
import BankCard from '../page/BankCard/index'
import Vip from '../page/Vip/index'
// login
import login from '../page/Login/login'
import register from '../page/Register/register'
import forgetPwd from '../page/ForgetPwd'
import ChangePassword from '../page/ChangePassword/index'

import indexPage from '../page/Index/index'
import CreditCard from '../page/CreditCard/index'
import shoppingCar from '../page/ShoppingCar/index'
import my from '../page/My/index'
import cardInfo from '../page/CardInfo'
import productDetail from '../page/ProductDetail/index'
import Booking from '../page/Booking/index'
import MyBooking from '../page/MyBooking/index'
import DeliveryAddress from '../page/Address/Deliveryaddress'
import bookingSearch from '../page/BookingSearch'
import BookingDetail from '../page/BookingDetail/index'
import PhoneNumber from '../page/PhoneNumber/index'
import ManageBankCard from '../page/ManageBankCard/index'


import incomeManage from '../page/my/incomeManage'
import planLink from '../page/Promotion'
import useBook from '../page/my/useBook'
import trade from '../page/my/trade'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
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
      path: '/productdetail/id/:id',
      component: productDetail,
      name:'productDetail',
      meta: {index: 1}
    },
    {
      path: '/booking',
      component: Booking,
      meta: {index: 3}
    },
    {
      path: '/bookingdetail/id/:id',
      component: BookingDetail,
      name:'BookingDetail',
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
      path: '/mybooking/type/:type',
      component: MyBooking,
      name:'myBooking',
      meta: {index: 2,}
    },
    {
      path: '/bankcard',
      component: BankCard,
      meta: {index: 2,}
    },
    {
      path:'/Deliveryaddress',
      component:DeliveryAddress,
      meta: {index:2}
    },
    {
      path:'/bookingsearch',
      component:bookingSearch,
      meta:{index:3}
    },
    {
      path: '/editaddress/id/:id',
      component: editAddress,
      name: 'editAddress',
      meta: {index: 3}
    },
    {
      path: '/addaddress',
      component: addAddress,
      name:'addAddress',
      meta: {index: 3}
    },
    {
      path: '/phonenumber',
      component: PhoneNumber,
      meta: {index: 3}
    },
    {
      path: '/managebankcard',
      component: ManageBankCard,
      meta: {index: 3}
    },
    {
      path: '/realname',
      component: RealName,
      meta: {index: 3}
    },
    {
      path: '/vip',
      component: Vip,
      meta: {index: 3}
    },
    {
      path: '/incomeManage',
      component: incomeManage,
      meta: {index: 2}
    },
    {
      path: '/planLink',
      component: planLink,
      meta: {index: 2}
    },
    {
      path: '/useBook',
      component: useBook,
      meta: {index: 2}
    },
    {
      path: '/trade',
      component: trade,
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

router.beforeEach((to, from, next) => {
  // console.log(!localStorage.uid);
  if (!localStorage.uid) {
    if (to.path === '/login' || to.path === '/register' || to.path === '/forgetPwd') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
