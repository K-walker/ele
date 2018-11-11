<template>
	<mt-swipe :auto="0" :continuous="false">
		<mt-swipe-item v-for="item in swipeData" :key="item.group_type">
			<router-link v-for='entry in item.entries' :key='entry.id' to='/'>
				<div class="img-box">
					<img :src="parseImage(entry.image_hash)" :alt="entry.name">
				</div>
				<span>{{entry.name}}</span>
			</router-link>	
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
export default {
  name: 'FastEntries',
  mounted () {
  	this.$http.get('/api/entries').then( result => {
  		this.swipeData = result.data ;
  	})
  },
  data () {
    return {
    	swipeData: []
    }
  },
  methods: {
  	parseImage: function (image_path) {
  		let url = 'https://fuss10.elemecdn.com/' 
  		let a = image_path.charAt(0, 1) 
  		let b = image_path.substring(1, 3)
  		let c = image_path.substring(3)
  		url = url + a + '/' + b + '/' + c ;
  		if(image_path.endsWith('jpeg')) {
  			url += '.jpeg';
  		} else {
  			url += '.png';
  		}
  		return url+'?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/' ;
  	}
  }
}
</script>

<style scoped>
.mint-swipe {
	height: 176px;
}
a {
	width: 20%;
	position: relative;
	float: left;
	text-decoration: none;
}
a span {
	display: block;
	text-align: center;
	font-size:12px;
	color: #333;
}
.img-box {
	width: 45px;
	height: 45px;
	margin: 10px auto 0 auto;
}
.img-box img {
	width: 100%;
}
</style>
