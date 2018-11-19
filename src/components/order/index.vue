<template>
  <div class="order-list">
   	<OrderItem/>
   	<OrderItem/>
   	<OrderItem/>
   	<OrderItem/>
   	<OrderItem/>
   	<OrderItem/>
   	<OrderItem/>
   	<OrderItem/>
   	<OrderItem/>
  </div>
</template>

<script>
import OrderItem from './OrderItem'
export default {
  name: 'Order',
  components: { OrderItem },
  data () {
    return { }
  }
}
</script>

<style scoped>
.order-list {
	padding-bottom:10px;
}
</style>
