<template>
  <div id="app">
  	<Header :type="type" :title="title"/>
    <SearchBar v-show="type == 1"/>
    <router-view/>
    <FooterMenu/>
  </div>
</template>

<script>
import SearchBar from '@/components/search/SearchBar'
import FooterMenu from '@/components/FooterMenu'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {FooterMenu , Header , SearchBar},
  data () {
  	return {
      title:'',
  		type: ''
  	}
  },
  created () {
    this.setHeader(this.$route);
  },
  // 监听路由变化
  watch: {
  	'$route': function (to) {
      this.setHeader(to);
  	}
  },
  methods : {
    setHeader (route) {
      if(route.name === 'order')    { this.title = '订单' }
      if(route.name === 'profile')  { this.title = '我的' }
      this.type = route.name != 'msite' ? 0 : 1 ;
    }
  }
}
</script>

<style scoped>
  
</style>
