<template>
  <div class="shop-detail">
    商品详情
  </div>
</template>

<script>
export default {
  name: 'ShopDetail',
  data () {
    return {

    }
  },
  created () {
  	 this.$store.commit('setHeader' , {type:3});
  }
}
</script>

<style scoped lang="css">

</style>
