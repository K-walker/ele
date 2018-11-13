<template>
  <div id="app">
  	<Header :type="type"/>
    <SearchBar/>
    <router-view/>
    <FooterMenu/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import FooterMenu from '@/components/FooterMenu'
import Header from '@/components/Header'

export default {
  name: 'App',
  data () {
  	return {
  		type: this.$route.name === 'Home' ? 1 : 0
  	}
  },
   // 监听路由变化
  watch: {
  	'$route': function (to) {
  		this.type = to.name != 'Home' ? 0 : 1 ;
  	}
  },
  components: {FooterMenu , Header , SearchBar}
}
</script>

<style>

</style>
