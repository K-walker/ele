<template>
  <div id="app">
    <router-view></router-view>
    <div class="global-loading" v-if="isLoading">
      <div class="loading-icon"></div>
    </div>
  </div>
</template>

<script>
import { mapState , mapMutations } from 'vuex'
export default {
  name: 'App',
  data () {
  	return {
      
  	}
  },
  computed : mapState({
    isLoading:  state => state.loading
  }),
  methods : {
    ...mapMutations([
      'loading'
    ])
  }
}
</script>

<style scoped lang="scss">
.global-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
  -webkit-transform: scale(.2);
  transform: scale(.2);
  .loading-icon {
    width: 200px;
    height: 200px;
    background:url(https://fuss10.elemecdn.com/c/7f/f26d800336750924f6a4b37f52d74png.png) no-repeat;
    background-size: auto 100%;
    -webkit-transform-origin : 0 0;
    transform-origin : 0 0;
    -webkit-animation: Gump 3s steps(43) infinite normal;
    animation: Gump 3s steps(43) infinite normal;
  }
}
@-webkit-keyframes Gump{
  from { background-position: 0 0;}
  to { background-position:-8592px 0}
}
@keyframes Gump{
  from { background-position: 0 0;}
  to { background-position:-8592px 0}
}

</style>
