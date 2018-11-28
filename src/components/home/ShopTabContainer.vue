<template>
  <div class="shop-tab-container" v-show="id == currentIndex">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ShopTabContainer',
  props:{
    id:{
      type:[String , Number],
      default:0
    }
  },
  data () {
    return {
      currentIndex:0
    }
  },
  created () {
    this.$parent.$on('tabitemclick' , index => {
        this.currentIndex = index; 
    })
  },
  methods : {
    
  }
}
</script>

<style scoped lang="css">
.shop-tab-container {
  height: 100%;
}
</style>
