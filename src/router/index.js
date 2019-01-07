import Vue from 'vue'
import Router from 'vue-router'
// users
import EditAddress from '../page/Address/editAddress'
import AddAddress from '../page/Address/addAddress'
import Setting from '../page/Setting'
import RealName from '../page/RealName'
import BankCard from '../page/BankCard'
import Vip from '../page/Vip/index'
// login
import Login from '../page/Login'
import Register from '../page/Register'
import ForgetPwd from '../page/ForgetPwd'
import ChangePassword from '../page/ChangePassword'

import IndexPage from '../page/Index'
import ChooseCity from '../page/ChooseCity'
import CreditCard from '../page/CreditCard'
import ShoppingCar from '../page/ShoppingCar'
import My from '../page/My/index'
import InfoEdit from '../page/InfoEdit'
import CardInfo from '../page/CardInfo'
import productDetail from '../page/ProductDetail/index'
import Booking from '../page/Booking'
import MyBooking from '../page/MyBooking'
import DeliveryAddress from '../page/Address/DeliveryAddress'
import BookingSearch from '../page/BookingSearch'
import BookingDetail from '../page/BookingDetail'
import MyGoods from '../page/MyGoods/index'
import ManageBankCard from '../page/ManageBankCard'


import IncomeManage from '../page/IncomeManage'
import IncomeSearch from '../page/IncomeSearch'
import IncomeSearchResult from '../page/IncomeSearchResult'
import PlanLink from '../page/PlanLink'
import UseBook from '../page/Guide'
import Trade from '../page/Trade'
import TradeSearch from '../page/TradeSearch'
import TradeSearchResult from '../page/TradeSearchResult'
import ActiveVip from '../page/ActiveVip'

import Scan from '../page/Scan'
import Withdraw from '../page/Withdraw'
import GoodEva from '../page/GoodEva'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/Scan',
      component: Scan
    },
    {
      path: '/login',
      component: Login,
      meta: {index: 0}
    },
    {
      path: '/register',
      component: Register,
      meta: {index: 1}
    },
    {
      path: '/forgetPwd',
      component: ForgetPwd,
      meta: {index: 1}
    },
    {
      path: '/index',
      component: IndexPage,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/creditCard',
      component: CreditCard,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/shoppingCar',
      component: ShoppingCar,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/my',
      component: My,
      meta: {index: 1, navShow: true}
    },
    {
      path: '/infoEdit',
      component: InfoEdit,
      meta: {index: 3, navShow: true}
    },
    {
      path: '/cardInfo',
      component: CardInfo,
      meta: {index: 2}
    },
    {
      path: '/productDetail/id/:id',
      component: productDetail,
      name: 'productDetail',
      meta: {index: 1}
    },
    {
      path: '/booking',
      component: Booking,
      meta: {index: 3}
    },
    {
      path: '/bookingDetail/id/:id',
      component: BookingDetail,
      name: 'BookingDetail',
      meta: {index: 2,}
    },
    {
      path: '/setting',
      component: Setting,
      meta: {index: 2,}
    },
    {
      path: '/changePassword',
      component: ChangePassword,
      meta: {index: 3,}
    },
    {
      path: '/myBooking/type/:type',
      component: MyBooking,
      name: 'myBooking',
      meta: {index: 2,}
    },
    {
      path: '/bankCard',
      component: BankCard,
      meta: {index: 4,}
    },
    {
      path: '/deliveryAddress',
      component: DeliveryAddress,
      meta: {index: 3}
    },
    {
      path: '/bookingSearch',
      component: BookingSearch,
      meta: {index: 3}
    },
    {
      path: '/editAddress/id/:id',
      component: EditAddress,
      name: 'editAddress',
      meta: {index: 3}
    },
    {
      path: '/addAddress',
      component: AddAddress,
      name: 'addAddress',
      meta: {index: 3}
    },
    {
      path: '/myGoods',
      component: MyGoods,
      meta: {index: 3}
    },
    {
      path: '/manageBankcard',
      component: ManageBankCard,
      meta: {index: 3}
    },
    {
      path: '/realName',
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
      component: IncomeManage,
      meta: {index: 2}
    },
    {
      path: '/incomeSearch',
      component: IncomeSearch,
      meta: {index: 3}
    },
    {
      path: '/incomeSearchResult',
      component: IncomeSearchResult,
      meta: {index: 3}
    },
    {
      path: '/planLink',
      component: PlanLink,
      meta: {index: 2}
    },
    {
      path: '/useBook',
      component: UseBook,
      meta: {index: 2}
    },
    {
      path: '/trade',
      component: Trade,
      meta: {index: 2}
    },
    {
      path: '/tradeSearch',
      component: TradeSearch,
      meta: {index: 2}
    },
    {
      path: '/tradeSearchResult',
      component: TradeSearchResult,
      name: 'TradeSearchResult',
      meta: {index: 2}
    },
    {
      path: '/activeVip',
      component: ActiveVip,
      name: 'ActiveVip',
      meta: {index: 3}
    },
    {
      path: '/chooseCity',
      component: ChooseCity,
      name: 'ChooseCity',
      meta: {index: 3}
    },
    {
      path: '/Withdraw',
      component: Withdraw,
      meta: {index: 4}
    },
    {
      path: '/GoodEva',
      component: GoodEva,
      meta: {index: 5}
    }
  ],
  //跳转页面scrollTop为0
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register' || to.path === '/forgetPwd' || to.path === '/index') { // 不需要登录权限的页面
    next()
  } else {
    if (localStorage.uid) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
