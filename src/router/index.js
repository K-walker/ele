import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import ShopDetail from '@/components/home/ShopDetail'
import Order from '@/components/order/index'
import Find from '@/components/find/index'
import OrderDetail from '@/components/order/OrderDetail'
import Profile from '@/components/profile/index'
import Login from '@/components/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'msite',
      component: Home
    },
    {
      path:'/shop/:id',
      name:'shop',
      component: ShopDetail
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children:[{
        path: 'detail/:id',
        name: 'OrderDetail' ,
        component: OrderDetail
      }]
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path:'/login',
      name:'login',
      component: Login
    }
  ]
})
