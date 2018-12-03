<template>
  <header>
    <div v-if ='mode == 0' class="header-wrapper header-fixed">
      <div class="goback-btn" @click="goBack">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
      </div>
      <h1>{{title}}</h1>
    </div>

    <div v-if ='mode == 1' class="header-wrapper">
        <div class="position-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="position-icon">
              <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
            </svg>
            <span>{{address}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="position-arrow">
              <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
            </svg>
        </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props:{
    address:{
      type:String,
      default:'正在定位...'
    },
    title:{
      type:String,
      default:''
    },
    mode:{
      type:Number,
      default:0
    }
  },
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
header {
  position:relative;
  height:38px;
  .header-fixed {
    height:38px;
    position: fixed;
    left: 0;
    top: 0;
  }
  .header-wrapper {
    width: 100%;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    display:flex;
    align-items:center;
    .goback-btn {
      width:38px;
      height:38px;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .goback-btn img {
      width: 11px;
    }
    h1 {
      max-width:50%;
      height:38px;
      line-height:38px;
      position:absolute;
      left:0;
      right:0;
      margin:0 auto;
      text-align:center;
      color:#fff;
    }
    .position-bar {
      display:flex;
      height:28px;
      margin-top:10px;
      align-items:center;
      padding:0 10px;
      span {
        max-width:80%;
        margin:0 5px;
        font-size:14px;
        color:#fff;
        font-weight:700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
      .position-icon {
        width: 10px;
      }
      .position-arrow {
        width: 6px;
      }
    }
  }
}
</style>
