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
  data () {
  	return {
      title:'',
  		type: this.$route.name === 'msite' ? 1 : 0
  	}
  },
  mounted () {
    // this.$nextTick( () => {
    //   document.querySelector('#app').addEventListener('scroll' , (e) => {
    //       console.log(e.target.srcollTop)
    //   })
    // })
  },
  // 监听路由变化
  watch: {
  	'$route': function (to) {
      if(to.name === 'order')  { this.title = '订单' }
      if(to.name === 'profile')  { this.title = '我的'}
      this.type = to.name != 'msite' ? 0 : 1 ;
  	}
  },
  components: {FooterMenu , Header , SearchBar}
}
</script>

<style scoped>
  #app {
    max-width: 667px;/*no*/
    overflow: auto;
  }
</style>
