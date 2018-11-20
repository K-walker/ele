<template>
  <div id="app">
  	<Header/>
    <SearchBar v-show="type == 1"/>
    <router-view />
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
      type:0
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
      let type , title ;
      if(route.name === 'find')     { title = '发现' }
      if(route.name === 'order')    { title = '订单' }
      if(route.name === 'profile')  { title = '我的' }
      type = route.name != 'msite' ? 0 : 1 ;
      this.$store.commit('setHeader' , {type, title})
      this.type = type ;
    }
  }
}
</script>

<style scoped>
  
</style>
