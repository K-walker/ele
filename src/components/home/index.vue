<template>
  <div class="home">
    <FastEntries />
    <div class="recommend">
    	<div class="discount">
	    	<div class="discount-item">
	    		<h3>品质套餐</h3>
	    		<div class="des">搭配齐全吃得好</div>
	    		<div class="tag" style="color:#af8260">立即抢购&gt;</div>
	    		<img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
	    	</div>
	    	<div class="discount-item limited">
	    		<h3>限量抢购</h3>
	    		<div class="des">超值美味9.9元起</div>
	    		<div class="tag"><span>1933人</span>正在抢&gt;</div>
	    		<img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
	    	</div>
	    </div>
	    <div class="banner">
	    	<mt-swipe :auto="3000">
				<mt-swipe-item v-for="item in banners" :key="item.id">
					<img :src="getImage(item.image_hash)">
				</mt-swipe-item>
			</mt-swipe>
	    </div>
    </div>
    <section>
    	<ShopItem/>
    	<ShopItem/>
    </section>
  </div>
</template>

<script>
import FastEntries from './FastEntries'
import ShopItem from './ShopItem'
import F from '@/utils/Function' 
export default {
  name: 'Home',
  components: {FastEntries , ShopItem},
  data () {
    return {
    	banners:[]
    }
  },
  mounted () {
  	this.$http.get('/api/banners').then( result => {
  		this.banners = result.data
  	})
  },
  methods: {
  	getImage: function (image_hash) {
  		return F.parseImage(image_hash , '?imageMogr/format/webp/thumbnail/568x/')
  	}
  }
}
</script>

<style scoped>
.recommend {
	padding: 0 10px;
}
.banner {
	height: 65px;
}
.banner img {
	width: 100%;
	height: 100%;
}
.discount {
	display: flex;
	display: -webkit-flex;
	display: -ms-flex;
	display: -webkit-box;
}
.discount .discount-item {
	padding: 10px 0 0 10px;
	height: 100px;
	position: relative;
	flex: 1;
	-webkit-flex: 1;
	-webkit-box-flex: 1;
	background: -webkit-gradient(linear,left bottom,left top,color-stop(5%,#f4f4f4),color-stop(95%,#fafafa));
    background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
}
.discount-item.limited {
	margin-left: 4px;
}
.discount-item.limited h3 {
	color: #e81919;
}
.discount .discount-item img {
	width: 80px;
	height: 54px;
	position: absolute;
	right: 0;
	bottom: 0;
}
.discount .discount-item h3 {
	margin-bottom: 5px;
	font-size: 13px;
}
.discount .discount-item .des {
	margin-bottom: 5px;
	font-size: 11px;
	color: #777;	
}
.discount .discount-item .tag {
	font-weight: 700;
	font-size: 11px;
	color: #333;
}
.discount .discount-item span {
	color: #e81919;
}
</style>
