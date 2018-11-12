<template>
  <div id="app">
  	<Header :type="type"/>
    <router-view/>
    <FooterMenu/>
  </div>
</template>

<script>

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
  components: { FooterMenu , Header }
}
</script>

<style>

</style>
