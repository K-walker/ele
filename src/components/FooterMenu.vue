<template>
	<footer>
		<div class="footer-menu">
			<router-link class="menu-item" to="/">
				<i></i>
				<span>首页</span>
			</router-link>
			<router-link class="menu-item" to="/order">
				<i></i>
				<span>订单</span>
			</router-link>
			<router-link class="menu-item" to="/me">
				<i></i>
				<span>我的</span>
			</router-link>
		</div>
	</footer>
</template>

<script>

export default {
  name: 'FooterMenu',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
footer {
	height: 30px;
}
.footer-menu {
	position: fixed;
	z-index: 999;
	left: 0;
	right: 0;
	bottom: 0px;
	display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items:center;
    background-color: #fff;
    border-top: 1px solid #ddd;
}
.footer-menu .menu-item {
	display: block;
	-webkit-flex:1;
	-webkit-box-flex:1;
	flex:1;
	color: #000;
	text-align: center;
	text-decoration: none;
}
.footer-menu .menu-item i {
	display: block;
	height: 15px;
}
</style>
