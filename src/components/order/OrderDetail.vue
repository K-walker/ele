<template>
  <div class="order-detaill">
    orderdetail
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'OrderDetail',
  data () {
    return {

    }
  },
  created () {
    this.setHeader({
      type:0,
      title:'订单详情'
    });
    this.showFooter(false);
  },
  methods: {
    ...mapMutations([
        'setHeader'
    ]),
    ...mapMutations({
      showFooter:'setFooterVisiable'
    })
  }
}
</script>

<style scoped lang="css">

</style>
