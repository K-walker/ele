<template>
	<section class="shoplist">
		<ShopListItem 
			v-for="item in shopList" 
			:key="item.id" 
			:shop="item">
		</ShopListItem>
	</section>
</template>

<script>
export default {
	name: 'ShopList',
	props:{
		position:{
			type:Object,
			default:function () {
				return {
					latitude:'',
					longitude:'',
				}
			}
		}
	},
	components:{
		ShopListItem : () => import ('./ShopListItem')
	},
	data () {
		return {
			shopList:[]
		}
	},
	mounted () {
		this.$http.get('/ele/shopping/restaurants' , {
			params:{
				latitude:this.position.latitude,
				longitude:this.position.longitude,
				offset:0,
				limit:8
			}
		}).then(result => {
			this.shopList = result.data ;
		}).catch( e => {
			console.log(e)
		})
	},
	methods : {
		
	}
}
</script>

<style scoped>

</style>
