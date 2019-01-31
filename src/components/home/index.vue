<template>
	<div class="home">
		<div style="background-color:#fff">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0" aria-hidden="true">
				<defs>
					<symbol viewBox="0 0 138 128" id="cart_red"><g fill="none" fill-rule="evenodd"><path fill="#000" fill-opacity=".54" d="M27.148 92.856a4.016 4.016 0 0 0 3.836 2.811h49.947c14.88 0 27.63-10.598 30.291-25.18l6.712-36.772c.448-2.455-1.446-4.715-3.951-4.715H41.699a4.008 4.008 0 0 0-4.016 4c0 2.209 1.798 4 4.016 4h67.472l-5.852 32.057c-1.966 10.777-11.39 18.61-22.388 18.61H34.46l-8.884-61.933a3.989 3.989 0 0 0-.465-1.377l-6.694-12a4.025 4.025 0 0 0-5.46-1.553 3.991 3.991 0 0 0-1.56 5.439l6.332 11.354 9.266 64.6c.033.227.084.447.152.66zm2.497 17.478c0-3.683 2.996-6.667 6.694-6.667 3.697 0 6.693 2.984 6.693 6.667 0 3.682-2.996 6.666-6.693 6.666-3.698 0-6.694-2.984-6.694-6.666zm56.225 0c0-3.683 2.996-6.667 6.694-6.667 3.697 0 6.693 2.984 6.693 6.667 0 3.682-2.996 6.666-6.693 6.666-3.698 0-6.694-2.984-6.694-6.666z"></path><path fill="#FF5339" d="M136 18c0 8.836-7.164 16-16 16s-16-7.164-16-16 7.164-16 16-16 16 7.164 16 16"></path></g></symbol>
					<symbol viewBox="0 0 128 128" id="cart"><path fill="#000" fill-opacity=".54" fill-rule="evenodd" d="M26.846 93.189A4.002 4.002 0 0 0 30.666 96h49.747c14.822 0 27.521-10.599 30.17-25.18l6.686-36.774a4 4 0 0 0-3.936-4.715H41.34a4 4 0 1 0 0 8h67.202l-5.828 32.058C100.754 80.166 91.368 88 80.413 88H34.13l-8.848-61.935a4 4 0 0 0-.463-1.377l-6.667-12a4 4 0 1 0-6.993 3.885l6.308 11.354 9.229 64.602c.032.228.083.448.151.66zm2.487 17.478A6.666 6.666 0 0 1 36 104a6.666 6.666 0 0 1 6.667 6.667A6.666 6.666 0 0 1 36 117.333a6.666 6.666 0 0 1-6.667-6.666zm56 0A6.666 6.666 0 0 1 92 104a6.666 6.666 0 0 1 6.667 6.667A6.666 6.666 0 0 1 92 117.333a6.666 6.666 0 0 1-6.667-6.666z"></path></symbol>
				</defs>
			</svg>
			<Header :mode="1" :address="address" v-on:setposition="setLocaltion"/>
			<SearchBar/>
			<div v-if="poi">
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
				<div class="shoplist-title">推荐商家</div>
				<BatchFilter v-on:filter="filterShop"/>
				<!-- 商家列表 -->
				<ShopList :position="poi"></ShopList>
				<!-- 购物车 -->
				<div class="shop-cart">
					<svg><use :xlink:href="carts.length > 0 ? '#cart_red':'#cart'"></use></svg>
				</div>
			</div>
			<NotData v-else :info="noDataInfo"/>
			<FooterMenu />
		</div>
	</div>
</template>

<script>
import { parseImage } from '@/utils/Function' 
export default {
	name: 'Home',
	components: {
		Header : () => import('@/components/Header') ,
		SearchBar : () => import ('@/components/search/SearchBar') ,
		FastEntries : () => import ('./FastEntries') ,
		BatchFilter : () => import ('@/components/BatchFilter'),
		ShopList : () => import ('./ShopList') ,  
		FooterMenu : () => import ('@/components/FooterMenu'),
		NotData : () => import ('@/components/NotData'),
	},
	data () { 
		return {
			address:'正在定位...',
			poi:null,
			carts:[],
			banners:[],
			noDataInfo:{
				img:'https://fuss10.elemecdn.com/2/67/64f199059800f254c47e16495442bgif.gif',
				title:'输入地址后才能订餐哦！',
				text:'手动选择地址',
				link:'/location'
			}
		}  
	},
	created () {
		if(this.$store.state.location){
			this.poi = this.$store.state.location ;
			this.address = this.poi.name;
			this.carts = this.$store.state.shoppingCart;
			this.loadData();
		}
	},
	mounted () {
		// this.getLocation();
	},
	methods: {
		getLocation () {

			// this.$http.get('/ele/location' , {
			// 	latitude:'121.35504', 
			// 	longitude:'31.19111'
			// }).then(result => {
			// 	this.$store.commit( 'setLocation' , result.data)
			// }).catch(() => {
			// 	this.$store.commit( 'setLocation' , {
			// 		name:'未能获取地址'
			// 	})
			// })

			// if (navigator.geolocation) {
			// 	navigator.geolocation.getCurrentPosition( position => {
			// 		获取当前地址
			// 		this.$store.commit('setLocation' , {
			// 			latitude : position.coords.latitude,
			// 			longitude: position.coords.longitude,
			// 		})
			// 	})
			// } else {
			// 	console.log('not get position')
			// }
		},
		loadData () {
			this.$http.get('/ele/shopping/banners').then( result => {
				this.banners = result.data
			})
		},
		getImage (image_hash) {
			return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/568x/')
		},
		// 筛选商家
		filterShop (item) {
			console.log(item.name);
		},
		setLocaltion () {
			this.$router.push('/location')
		}
	}
}
</script>

<style scoped lang="scss">
.flex {
  display:-webkit-box; 
  display:-webkit-flex;
  display:flex;
}
.flex-center {
  -webkit-box-align:center;
  -webkit-align-items:center;
  align-items:center;
}
.home {
	background-color: #fff;
	height:100%;
}
.recommend {
	padding: 0 10px;
}
.banner {
	height: 65px;
	margin-top:5px;
}
.banner img {
	width: 100%;
	height: 100%;
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
.shop-cart {
  @extend .flex;
  @extend .flex-center;
  -webkit-box-pack:center;
  -webkit-justify-content:center;
  justify-content:center;
  width:26px;
  height:26px;
  border-radius: 50%;
  position: fixed;
  right: 10px;
  bottom: 80px;
  background-color: #fff;
  z-index:1000;
  border: 1px solid #ddd;/*no*/
  svg {
    width:14px;
    height:14px;
  }
}	
</style>
