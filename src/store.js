import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token:null,
		loading:false,
		location:null,
		shoppingCart:[]
	},
	// mutations 中的函数必须是同步的函数
	mutations : {
		loading (state , loading) {
			state.loading = loading ;
		},
		setLocation (state , location) {
			state.location = location;
		},
		setToken (state , token) {
			state.token = token;
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
