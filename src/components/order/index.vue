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
