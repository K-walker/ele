<template>
  <div class="home">
  	<div class="search">
  		<a class="search-inner">
  			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
  			<span>搜索饿了么商家、商品名称</span>
  		</a>
  	</div>
    <FastEntries />
    <div class="recommend">
    	<div class="discount">
	    	<div class="discount-item">
	    		<h3>品质套餐</h3>
	    		<div class="des">搭配齐全吃得好</div>
	    		<div class="tag" style="color:#af8260">立即抢购&gt;</div>
	    		<img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
	    	</div>
	    	<div class="discount-item">
	    		<h3>限量抢购</h3>
	    		<div class="des">超值美味9.9元起</div>
	    		<div class="tag"><span>1933人</span>正在抢&gt;</div>
	    		<img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
	    	</div>
	    </div>
	    <div class="banner">
	    	<mt-swipe :auto="0">
				<mt-swipe-item v-for="item in banners" :key="item.id">
					<img :src="getImage(item.image_hash)">
				</mt-swipe-item>
			</mt-swipe>
	    </div>
    </div>
    <section>
    	<ShopItem/>
    </section>
  </div>
</template>

<script>
import FastEntries from '@/components/FastEntries'
import ShopItem from '@/components/ShopItem'
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
.search {
	padding: 0px 15px 10px 15px;
	background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
	background-image: -webkit-linear-gradient(left,#0af,#0085ff);
	background-image: linear-gradient(90deg,#0af,#0085ff);
}
.search svg {
	width: 18px;
	height: 18px;
	display: inline-block;
	vertical-align: sub;
}
.search a {
	display: block;
	border-radius: 2px;
	line-height: 34px;
	background-color: #fff;
	border: 1px solid #ddd;
	text-align:center;
}
.search span {
	color: #999;
	font-size: 12px;
}
.recommend {
	padding: 0 10px 10px 10px;
}
.banner {
	height: 120px;
	margin-top: 10px;
}
.banner img {
	width: 100%;
}
.discount {
	display: flex;
	display: -webkit-flex;
	display: -ms-flex;
	display: -webkit-box;
}
.discount .discount-item {
	margin-top: 10px;
	margin-left: 10px;
	height: 120px;
	position: relative;
	flex: 1;
	-webkit-flex: 1;
	-webkit-box-flex: 1;
}
.discount .discount-item img {
	width: 60%;
	position: absolute;
	right: 0;
	bottom: 0;
}
.discount .discount-item h3 {
	margin-bottom: 5px;
}
.discount .discount-item .des {
	margin-bottom: 5px;
	font-size: 14px;
	color: #777;	
}
.discount .discount-item .tag {
	font-weight: 700;
	font-size: 14px;
	color: #333;
}
.discount .discount-item span {
	color: red;
}
</style>
