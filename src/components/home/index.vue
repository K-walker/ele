<template>
  <div class="home">
  	<!-- 快捷入口 -->
    <FastEntries />
    <!-- 推荐商品 -->
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
    <div class="filtermodal" v-show="filtermodal" @click="filtermodal = !filtermodal"></div>
    <div class="shoplist-title">推荐商家</div>
    <ShopFilter 
    	v-on:showfiltermodal="toggleFilterModal"
    	v-on:filtershop="filterShop"
    />
    <!-- 商家列表 -->
    <section class="shoplist">
    	<ShopItem/>
    	<ShopItem/>
    	<ShopItem/>
    	<ShopItem/>
    	<ShopItem/>
    	<ShopItem/>
    	<ShopItem/>
    	<ShopItem/>
    	<ShopItem/>
    	<ShopItem/>
    </section>
  </div>
</template>

<script>
import FastEntries from './FastEntries'
import ShopItem from './ShopItem'
import ShopFilter from './ShopFilter'
import F from '@/utils/Function' 
export default {
  name: 'Home',
  components: {FastEntries , ShopItem , ShopFilter},
  data () {
    return {
    	filtermodal:false ,
    	banners:[]
    }
  },
  mounted () {
  	this.$http.get('/api/banners').then( result => {
  		this.banners = result.data
  	})
  },
  methods: {
  	getImage (image_hash) {
  		return F.parseImage(image_hash , '?imageMogr/format/webp/thumbnail/568x/')
  	},
  	toggleFilterModal (isshow) {
  		this.filtermodal = isshow ;
  	},
  	// 筛选商家
  	filterShop (item) {
  		console.log(item.name);
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
.filtermodal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    background: rgba(0,0,0,.5);
}
.shoplist-title {
	display: -webkit-flex;
	display: -webkit-box;
	display: -ms-flex;
	display: flex;
	height: 30px;
	align-items:center;
	-webkit-justify-content:center;
	justify-content:center;
}
.shoplist-title:before {
	content: '';
	width: 15px;
	height: 1px;/*no*/
	background-color: #999;
	margin-right: 10px;
}
.shoplist-title:after {
	content: '';
	width: 15px;
	height: 1px;/*no*/
	background-color: #999;
	margin-left: 10px;
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
