<template>
  <div class="order">
    <Header title="订单"/>
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
    <FooterMenu/>
  </div>
</template>

<script>
import FooterMenu from '@/components/FooterMenu'
import Header from '@/components/Header'
import OrderItem from './OrderItem'
export default {
  name: 'Order',
  components: { Header , FooterMenu , OrderItem },
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
  height:calc(100% - 85px);
	padding-bottom:10px;
  overflow: auto;
}
</style>
