<template>
  <div class="order">
    <Header title="订单"/>
    <div class="order-list">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
    </div>
    <FooterMenu/>
  </div>
</template>
<script>
export default {
  name: 'Order',
  components: { 
    Header : () => import ('@/components/Header') , 
	  FooterMenu : () => import ('@/components/FooterMenu') ,
    OrderItem : () => import ('./OrderItem') },
  data () {
    return {
      orderList: []
    }
  },
  created() {
    
  }
}
</script>

<style scoped>
.order-list {
  height:calc(100% - 85px);
	padding-bottom:10px;
  overflow: auto;
}
</style>
