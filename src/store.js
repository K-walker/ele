import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header: {
     	type:0,
     	title:''
    },
    showFooterMenu:true
  },
  // mutations 中的函数必须是同步的函数
  mutations : {
	setHeader (state , {type , title}) {
    if(void 0 != type) {
      state.header.type = type
    }
	 	state.header.title = title ;
	},
	setFooterVisiable (state , isShow) {
		state.showFooterMenu = isShow ;
	}	
  },
  // actions中可以包含同步或异步,必须通过提交mutation来改变state状态
  // 通过 store.dispatch('testMehtod') 出发actions
  actions : {
  	// 参考代码
  	testMehtod ({commit}) {
		commit('mutationMethod')  		
  	}
  }
})
