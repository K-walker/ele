import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Order from '@/components/order/index'
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
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: Order
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
