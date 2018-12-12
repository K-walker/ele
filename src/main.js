// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe , SwipeItem , IndexList, IndexSection , Cell } from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/css/common.css'
import Axios from 'axios' 

import store from './store'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);

Vue.config.productionTip = false ;
Vue.prototype.$http = Axios ;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
