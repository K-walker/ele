<template>
	<mt-swipe :auto="0" :continuous="false">
		<mt-swipe-item v-for="item in swipeData" :key="item.group_type">
			<router-link v-for='entry in item.entries' :key='entry.id' to='/'>
				<div class="img-box">
					<img :src="getImage(entry.image_hash)" :alt="entry.name">
				</div>
				<span>{{entry.name}}</span>
			</router-link>	
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>

import F from '@/utils/Function'

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
	getImage:function (image_hash) {
		return F.parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/');
	}
  }
}
</script>

<style scoped>
.mint-swipe {
	height: 135px;
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
	font-size:11px;
	margin-top: 3px;
	color: #333;
}
.img-box {
	width: 35px;
	height: 35px;
	margin: 5px auto 0 auto;
}
.img-box img {
	width: 100%;
}
</style>
