<template>
	<transition name="slide-fade">
  <div class="shop-detail">
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden"><defs><symbol viewBox="0 0 44 44" id="cart-add"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></symbol><symbol viewBox="0 0 44 44" id="cart-minus"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></symbol><symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" id="cart-remove"><defs><path id="cart-remove_a" d="M0 15h13V0H0z"></path></defs><g fill="none" fill-rule="evenodd" transform="translate(1)"><path fill="#979797" d="M7.05 15h-5.5c-.303 0-.55-.26-.55-.583V5.091c0-.322.246-.583.55-.583.304 0 .55.26.55.583v8.743h4.95c1.032 0 2-.426 2.728-1.2A4.18 4.18 0 0 0 10.9 9.735l-.03-7.15c0-.323.245-.585.548-.586h.003c.302 0 .548.26.55.58L12 9.732a5.374 5.374 0 0 1-1.442 3.724C9.622 14.451 8.376 15 7.05 15z"></path><path fill="#979797" d="M12.458 3H.542C.242 3 0 2.776 0 2.5S.243 2 .542 2h11.916c.3 0 .542.224.542.5s-.243.5-.542.5"></path><mask id="cart-remove_b" fill="#fff"><use xlink:href="#cart-remove_a"></use></mask><path fill="#979797" d="M5 2h3V1H5v1zm3.464 1H4.536C4.24 3 4 2.776 4 2.5v-2c0-.276.24-.5.536-.5h3.928C8.76 0 9 .224 9 .5v2c0 .276-.24.5-.536.5z" mask="url(#cart-remove_b)"></path></g></symbol><symbol viewBox="0 0 14 16" id="cart"><path fill="#FFF" fill-rule="evenodd" d="M12.364 2.998H2.088L1.816.687a.455.455 0 0 0-.478-.431L.431.303A.454.454 0 0 0 0 .78l1.256 10.893c.006.293.011 1.325.933 1.325h9.546a.455.455 0 0 0 .455-.454v-.881a.454.454 0 0 0-.455-.455H3.05l-.11-.937h8.606c.998 0 1.889-.724 1.989-1.616l.455-4.04c.1-.893-.628-1.617-1.626-1.617zm-.45 4.245c-.075.669-.317 1.212-1.066 1.212H2.727L2.3 4.812h8.821c.749 0 1.065.543.99 1.212l-.197 1.219zM2.416 15.79a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9.092 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></symbol><symbol viewBox="0 0 7 5" id="vip-icon"><defs><linearGradient id="vip-icon_a" x1="50%" x2="50%" y1="100%" y2="-8.227%"><stop offset="0%" stop-color="#FFE571"></stop><stop offset="100%" stop-color="#FFFAE4"></stop></linearGradient></defs><path fill="url(#vip-icon_a)" fill-rule="evenodd" d="M6.262 3.002L4.5 1 2.737 3.002 1.154 2.1a.1.1 0 0 0-.148.101l.544 3.714a.1.1 0 0 0 .1.086h5.7a.1.1 0 0 0 .099-.085L7.994 2.2a.1.1 0 0 0-.148-.101l-1.584.903z" transform="translate(-1 -1)"></path></symbol><symbol viewBox="0 0 13 13" id="icon-warn"><g fill="none" fill-rule="evenodd"><circle cx="6.5" cy="6.5" r="6.5" fill="#FF5339"></circle><path fill="#FFF" d="M6 3h1v5H6zM6 9h1v1H6z"></path></g></symbol></defs></svg>
   	<ShopDetailHeader ref="header" :rst="rstInfo"/>
   	<ShopTab>
		<ShopTabContainer id="0">	
			<ShopDetailRecommend ref="recommend" />
			<ShopMenu 
				:menuData="menuData"
				v-on:menuitemclick="onMenuItemClick"
				v-on:menuscroll="onScroll"/>
		</ShopTabContainer>

		<ShopTabContainer id="1">
			<ShopTabComment/>
		</ShopTabContainer>
		
		<ShopTabContainer id="2">
			<ShopTabRst :rst="rstInfo"/>  
		</ShopTabContainer>
   	</ShopTab>
	<ShopMenuDetail 
		:data="foodDetail"
		v-if="showFoodDetail"
		v-on:closepage="showFoodDetail = false" />
	</div>
</transition>
</template>

<script>
export default {
	name: 'ShopDetail',
	components: {
		ShopDetailHeader : () =>  import ('./ShopDetailHeader').then( component => {
			component.default._Ctor = {} ;
			if(!component.default.attached) {
				component.default.backupMounted = component.default.mounted ;
			}
			component.default.mounted = function () {
				this.$parent.top += this.$el.clientHeight;
				if(component.default.backupMounted) {
					component.default.backupMounted.call(this);
				}
			}
			component.default.attached = true ;
			return component ;
		}) ,
		ShopDetailRecommend : () =>  import ('./ShopDetailRecommend').then( component => {
			component.default._Ctor = {} ;
			if(!component.default.attached) {
				component.default.backupMounted = component.default.mounted ;
			}
			component.default.mounted = function () {
				this.$parent.top += this.$el.clientHeight;
				if(component.default.backupMounted) {
					component.default.backupMounted.call(this);
				}
			}
			component.default.attached = true ;
			return component ;
		}) ,
		ShopMenu : () => import ('./ShopMenu') ,
		ShopTab : () => import ('./ShopTab') ,
		ShopTabContainer : () =>  import ('./ShopTabContainer') ,
		ShopMenuDetail : () =>  import ('./ShopMenuDetail') ,
		ShopTabRst : () =>  import ('./ShopTabRst') ,
		ShopTabComment : () =>  import ('./ShopTabComment') ,
	},
	data () {
		return {
			top:0,
			menuData:{
				menus:[],
				foods:[]
			},
			rstInfo:{
				name:'',
				address:'',
				description:'',
				opening_hours:'',
				activities:[],
				supports:[],
				flavors:[],
				image_path:'',
				rating:0,
				distance:0,
				phone:'',
				recent_order_num:0,
				order_lead_time:0,
			},
			foodDetail:{
				image_path:'',
				name:'',
				month_sales:0,
				price:0,
				description:'',
				satisfy_rate:0,
				tips:''
			},
			showFoodDetail:false
		}
	},
	mounted () {
		this.loadData(this.$route.params.id);
	},
	methods: {
		loadData (id) {
			this.$http.get(`/ele/shopping/detail/${id}`).then( result => {
				this.menuData = result.data.menu ;
				this.rstInfo  = result.data.rst ;
			}).catch( e => {
				console.log(e)
			})
		},
		onMenuItemClick (shopInfo) {
			this.foodDetail = shopInfo;
			this.showFoodDetail = true ;
		},
		onScroll () {
			if(this.$el.scrollTop < this.top) {
				this.scrollTopBySmooth(this.$el , this.top)
			}
		},
		scrollTopBySmooth (el , distance) {
			var timeId = 0 ;
			clearInterval(timeId);
			timeId = setInterval(function () {
				var top = el.scrollTop + distance / 16 ; 
				if(top > distance) {
					top = distance ;
					clearInterval(timeId)
				}
				el.scrollTop = top ;
			} , 1000 / 24)
		},
  }
}
</script>

<style scoped lang="css">
.shop-detail {
	background-color:#fff;
	height: 100%;
	overflow: auto;
}
</style>
