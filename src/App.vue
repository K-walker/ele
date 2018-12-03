<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import {mapState , mapMutations} from 'vuex'
export default {
  name: 'App',
  data () {
  	return {
   
  	}
  },
  created () {
    // this.changeRoute(this.$route);
  },
  // 监听路由变化
  // watch: {
  // 	'$route': function (to) {
  //     this.changeRoute(to)
  // 	}
  // },
  // computed : mapState({
  //   showFooter:'showFooterMenu',
  //   showSearchBar (state) {
  //     console.log(state.header.type)
  //     this.showHeader = state.header.type != 2 ;
  //     return state.header.type == 1 ;
  //   }
  // }),
  methods : {
    // ...mapMutations({
    //     setHeader: 'setHeader',
    //     setFooter:'setFooterVisiable'
    // }),
    // changeRoute (route) {
    //   // 底部Tab路由切换
    //   if(this.footer.hasOwnProperty(route.name)) {
    //     let menu = this.footer[route.name]
    //     this.setHeader({
    //       type: menu.type , 
    //       title: menu.text
    //     })
    //     this.setFooter(true)
    //   } else {
    //   // 其他路由
    //     this.setHeader({ type: 0 })
    //     this.setFooter(false)
    //   }
    // }
  }
}
</script>

<style scoped>
  
</style>
