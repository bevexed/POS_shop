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
import DeliveryAddress from '@/page/address/Deliveryaddress'
import bookingSearch from '@/page/Booking/bookingSearch'
import BookingDetail from '@/page/BookingDetail/index'
import Setting from '@/page/Setting/index'
import ChangePassword from '@/page/ChangePassword/index'
import BankCard from '@/page/BankCard/index'
import editAddress from '@/page/address/editAddress'
import addAddress from '@/page/address/addAddress'
import PhoneNumber from '@/page/PhoneNumber/index'
import ManageBankCard from '@/page/ManageBankCard/index'
import RealName from '@/page/RealName/index'
import Vip from '@/page/Vip/index'
import incomeManage from '@/page/my/incomeManage'
import planLink from '@/page/plan/planLink'
import useBook from '@/page/my/useBook'
import trade from '@/page/my/trade'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
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
      path:'/DeliveryAddress',
      component:DeliveryAddress,
      meta: {index:2}
    },
    {
      path:'/bookingSearch',
      component:bookingSearch,
      meta:{index:3}
    },
    {
      path: '/editAddress/id/:id',
      component: editAddress,
      name: 'editAddress',
      meta: {index: 3}
    },
    {
      path: '/addAddress',
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
