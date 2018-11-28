<template>
  <div class="shoptab">
      <div class="tabbar">
        <div 
           v-for="(tab , index) in tabs" :key="tab.id"
           :class="[index == activeIndex ? 'on':'']"
           @click="onTabClick(tab , index)">
          <span>{{tab.name}}</span>
        </div>
    </div>
    <div class="container">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopTab',
  data () {
    return {
       activeIndex:0 ,
       tabs:[
          {id:1,name:'点餐'},
          {id:2,name:'评价'},
          {id:3,name:'商家'}
       ]
    }
  },
  methods: {
    onTabClick (tab , index) {
      this.activeIndex = index ;
      this.$emit('tabitemclick' , index);
    }
  }
}
</script>

<style scoped lang="scss">
.flex {
  display:-webkit-box; 
  display:-webkit-flex;
  display:flex;
}
.flex-center {
  -webkit-box-align:center;
  -webkit-align-items:center;
  align-items:center;
}
.flex-space-between {
  -webkit-box-pack:justify;
  -webkit-justify-content:space-between;
  justify-content:space-between;
}
.shoptab {
  height:100%;
  .tabbar {
    @extend .flex;
    @extend .flex-center;
    position: sticky;
    top: 0px;
    z-index: 999;
    -webkit-justify-content:justify;
    -webkit-justify-content:space-around;
    justify-content:space-around;
    background-color:#fff;
    div {
      -webkit-box:1;
      -webkit-flex:1;
      flex:1;
      text-align:center;
      color:#666;
      font-size:12px;
      border-bottom:1px solid #ebebeb;
      span {
        height:30px;
        line-height:30px;
        display:inline-block;
        border-bottom:3px solid transparent;
      }
    }
    .on {
      span {
        border-bottom-color:rgb(35, 149, 255);
        color:#000;
      }
    }
  }
  .container {
    height:calc(100% - 33px);
  }
}

</style>
