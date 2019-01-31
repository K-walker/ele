<template>
	<div class="order">
		<Header title="订单"/>
		<div class="order-list" v-if="orderList.length > 0">
			<OrderItem v-for="order in orderList" :key="order.id" />
		</div>
		<NotData v-else :info="noDataInfo"/>
		<FooterMenu/>
	</div>
</template>
<script>
export default {
  	name: 'Order',
  	components: { 
    	Header : () => import ('@/components/Header') , 
	  	FooterMenu : () => import ('@/components/FooterMenu') ,
		OrderItem : () => import ('./OrderItem') ,
		NotData : () => import ('@/components/NotData'),
	},
  data () {
		return {
			orderList: [],
			noDataInfo:{
				img:'//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png',
				title:'登陆后查看外卖订单',
				text:'立即登陆',
				link:'/login',
			}
		}
  },
  created() {
    
  }
}
</script>

<style scoped>
.order-list {
    height:calc(100% - 85px);
    overflow: auto;
}
</style>
