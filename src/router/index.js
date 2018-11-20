import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import ShopDetail from '@/components/home/ShopDetail'
import Order from '@/components/order/index'
import OrderDetail from '@/components/order/OrderDetail'
import Profile from '@/components/profile/index'

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
      component: Home,
      children:[{
        path:'shopdetail',
        name:'/shopdetail',
        component: ShopDetail
      }]
    },
    {
      path: '/find',
      name: 'find',
      component: Order
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children:[{
        path: 'detail',
        name: 'OrderDetail' ,
        component: OrderDetail
      }]
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
