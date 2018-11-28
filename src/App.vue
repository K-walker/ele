<template>
  <div id="app">
  	<Header v-if="showHeader"/>
    <SearchBar v-if="showSearchBar"/>
    <router-view />
    <FooterMenu v-if="showFooter"/>
  </div>
</template>

<script>
import SearchBar from '@/components/search/SearchBar'
import FooterMenu from '@/components/FooterMenu'
import Header from '@/components/Header'
import {mapState , mapMutations} from 'vuex'
export default {
  name: 'App',
  components: {FooterMenu , Header , SearchBar},
  data () {
  	return {
      showHeader:true,
      footer:{
        msite:{
          type: 1,
          text:''
        },
        find:{
          type:0 ,
          text:'发现',
        },
        order:{
          type:0,
          text:'订单',
        },
        profile:{
          type:0,
          text:'我的'
        }
      }
  	}
  },
  created () {
    this.changeRoute(this.$route);
  },
  // 监听路由变化
  watch: {
  	'$route': function (to) {
      this.changeRoute(to)
  	}
  },
  computed : mapState({
    showFooter:'showFooterMenu',
    showSearchBar (state) {
      console.log(state.header.type)
      this.showHeader = state.header.type != 2 ;
      return state.header.type == 1 ;
    }
  }),
  methods : {
    ...mapMutations({
        setHeader: 'setHeader',
        setFooter:'setFooterVisiable'
    }),
    changeRoute (route) {
      // 底部Tab路由切换
      if(this.footer.hasOwnProperty(route.name)) {
        let menu = this.footer[route.name]
        this.setHeader({
          type: menu.type , 
          title: menu.text
        })
        this.setFooter(true)
      } else {
      // 其他路由
        this.setHeader({ type: 0 })
        this.setFooter(false)
      }
    }
  }
}
</script>

<style scoped>
  
</style>
