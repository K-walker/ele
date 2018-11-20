<template>
  <div class="order-list">
    <template v-if="$route.name == 'order'">
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
    </template>
    <router-view v-else />
  </div>
</template>

<script>
import OrderItem from './OrderItem'
export default {
  name: 'Order',
  components: { OrderItem },
  data () {
    return {
      orderList: []
    }
  },
  created() {
    this.$store.commit('setFooterVisiable' , true)
  }
}
</script>

<style scoped>
.order-list {
	padding-bottom:10px;
}
</style>
