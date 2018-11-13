<template>
  <header class="hello">
    <div class="hello-inner">
    	<span>文字大小</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="css">
.hello {
	height:34px;
	background-color: #03a9f4;
	padding: 12px 12px 0 12px;
	box-sizing:border-box;
}
.hello-inner {
	background-color: green;
}
span {
	font-size: 14px;
}
</style>
