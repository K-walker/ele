<template>
  <header>
    <div v-if ='type == 0' class="flex">
      <div class="goback-btn">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
      </div>
      <h1>{{title}}</h1>
    </div>
    <div v-if ='type == 1' class="flex item-center">
        <div class="position-bar flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="position-icon">
              <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
            </svg>
            <span>上海市人民政府</span>
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
  props: {
    type:Number,
    title:String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  display: inline-block;
  box-sizing:border-box;
  position: relative;
  color: #fff;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
  padding: 8px 10px 0 10px;
}
.goback-btn img {
  width: 10px;
}
.item-center {
  align-items:center;
}
header div {
  height: 25px;
  position: relative;
}
h1 {
  margin: 0;
  width: 100%;
  font-size: 13px;
  text-align: center;
  position: absolute;
}
.position-bar {
  width:60%;
  align-items: center;
}
.position-bar span {
   font-weight: 600;
   font-size: 13px;
   max-width:80%;
   margin-left:5px;
   margin-right:5px;
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
</style>
