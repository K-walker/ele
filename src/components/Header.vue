<template>
  <header>
      <h1>header</h1>
      <span>返回</span>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  header {
    height: 2.8rem;
    line-height: 2.8rem;
    position: relative;
    font-size:0.8rem;
    color: #fff;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
  }
  h1 {
    margin: 0;
    width: 100%;
    text-align: center;
    position: absolute;
  }
  span {
    display: inline-block;
    padding: 0 10px;
    font-size: 0.85rem;
  }
</style>
