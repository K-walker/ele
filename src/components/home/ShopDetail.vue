<template>
  <div class="shop-detail">
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden"><defs><symbol viewBox="0 0 44 44" id="cart-add"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></symbol><symbol viewBox="0 0 44 44" id="cart-minus"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></symbol><symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" id="cart-remove"><defs><path id="cart-remove_a" d="M0 15h13V0H0z"></path></defs><g fill="none" fill-rule="evenodd" transform="translate(1)"><path fill="#979797" d="M7.05 15h-5.5c-.303 0-.55-.26-.55-.583V5.091c0-.322.246-.583.55-.583.304 0 .55.26.55.583v8.743h4.95c1.032 0 2-.426 2.728-1.2A4.18 4.18 0 0 0 10.9 9.735l-.03-7.15c0-.323.245-.585.548-.586h.003c.302 0 .548.26.55.58L12 9.732a5.374 5.374 0 0 1-1.442 3.724C9.622 14.451 8.376 15 7.05 15z"></path><path fill="#979797" d="M12.458 3H.542C.242 3 0 2.776 0 2.5S.243 2 .542 2h11.916c.3 0 .542.224.542.5s-.243.5-.542.5"></path><mask id="cart-remove_b" fill="#fff"><use xlink:href="#cart-remove_a"></use></mask><path fill="#979797" d="M5 2h3V1H5v1zm3.464 1H4.536C4.24 3 4 2.776 4 2.5v-2c0-.276.24-.5.536-.5h3.928C8.76 0 9 .224 9 .5v2c0 .276-.24.5-.536.5z" mask="url(#cart-remove_b)"></path></g></symbol><symbol viewBox="0 0 14 16" id="cart"><path fill="#FFF" fill-rule="evenodd" d="M12.364 2.998H2.088L1.816.687a.455.455 0 0 0-.478-.431L.431.303A.454.454 0 0 0 0 .78l1.256 10.893c.006.293.011 1.325.933 1.325h9.546a.455.455 0 0 0 .455-.454v-.881a.454.454 0 0 0-.455-.455H3.05l-.11-.937h8.606c.998 0 1.889-.724 1.989-1.616l.455-4.04c.1-.893-.628-1.617-1.626-1.617zm-.45 4.245c-.075.669-.317 1.212-1.066 1.212H2.727L2.3 4.812h8.821c.749 0 1.065.543.99 1.212l-.197 1.219zM2.416 15.79a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9.092 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></symbol><symbol viewBox="0 0 7 5" id="vip-icon"><defs><linearGradient id="vip-icon_a" x1="50%" x2="50%" y1="100%" y2="-8.227%"><stop offset="0%" stop-color="#FFE571"></stop><stop offset="100%" stop-color="#FFFAE4"></stop></linearGradient></defs><path fill="url(#vip-icon_a)" fill-rule="evenodd" d="M6.262 3.002L4.5 1 2.737 3.002 1.154 2.1a.1.1 0 0 0-.148.101l.544 3.714a.1.1 0 0 0 .1.086h5.7a.1.1 0 0 0 .099-.085L7.994 2.2a.1.1 0 0 0-.148-.101l-1.584.903z" transform="translate(-1 -1)"></path></symbol><symbol viewBox="0 0 13 13" id="icon-warn"><g fill="none" fill-rule="evenodd"><circle cx="6.5" cy="6.5" r="6.5" fill="#FF5339"></circle><path fill="#FFF" d="M6 3h1v5H6zM6 9h1v1H6z"></path></g></symbol></defs></svg>
    <div class="shopheader">
		<div class="shopbg" @click="goback()">
			<div></div>
			<i class="goback"></i>
		</div>
		<div class="shopinfo">
			<div class="logo">
				<img :src="getImage('ae691454a076858d4ae62bd35ddca298jpeg')">
			</div>
			<div class="info">
				<h2>
					<span>锡缘无锡小笼馆(七宝老街店)</span>
					<i></i>
				</h2>
				<div class="sale">
					<span>评价4.8</span>
					<span>月售569</span>
					<span>蜂鸟专送约22分钟</span>
				</div>
				<div class="activites">
					<div class="left">
						<span>蜂鸟</span>
						<span>超值换购</span>
					</div>
					<div class="right">
						<span>5个优惠</span>
						<i></i>
					</div>
				</div>
				<p class="notice">公告:亲爱的新老顾客你们好，感谢你们一直以来对本店的支持！由于平台的服务费再次提高，近期本店部分商品价格会做出相应的调整，希望各位新老顾客给予理解！</p>
			</div>	
		</div>
    </div>
    <div class="shoptab">
    	<div class="on"><span>点餐</span></div>
    	<div><span>评价</span></div>
    	<div><span>商家</span></div>
    </div>
    <div class="recommend">
		<h2>商家推荐</h2>
		<div class="recommend-list">
			<ul>
				<li v-for="item in recommendList" :key="item.id">
					<div class="icon">
						<img :src="getImage(item.image_hash)">
					</div>
					<p class="name">{{item.name}}</p>
					<p>{{item.sale}}</p>
					<div class="price">
						<span>${{item.price}}</span>
						<span class="add-btn">
							<svg style="fill: rgb(35, 149, 255);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
    <div class="shopfood">
    	<div class="shop-scroll">
	    	<div class="shop-list">
	    		<div class="menus">
					<ul>
						<li v-for="menu in menus" :key="menu.id">
							<img v-if="menu.icon_url != ''" :src="getImage(menu.icon_url)">
							<span>{{menu.name}}</span>
						</li>
					</ul>
	    		</div>
	    		<div class="foods">
	    			<ul>
	    				<li v-for="food in foods" :key="food.id">
	    					<div class="foodimg">
	    						<img :src="getImage(food.image_path)">
	    					</div>
	    					<div class="foodinfo">
	    						<p class="title"><span>{{food.name}}</span></p>
	    						<p class="desc"><span>{{food.description}}</span></p>
	    						<p class="sale">{{food.tips}}</p>
	    						<div class="price">
	    							<span>￥{{food.specfoods[0].price}}</span>
	    							<span>
	    								<svg style="fill: rgb(35, 149, 255);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
	    							</span>
	    						</div>
	    					</div>
	    				</li>
	    			</ul>
	    		</div>
	    	</div>
    	</div>
    </div>
  </div>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'ShopDetail',
  data () {
    return {
		recommendList:[
			{id:1,name:'鸭血汤',sale:'月销55好评率100%',price:'13.22',image_hash:'7cec6c3bfe0f79495e67067dde424c04jpeg'},
			{id:2,name:'包心鱼丸汤',sale:'月销55好评率100%',price:'14.8',image_hash:'cefd34dd79f5e5f4b43f24b46b3aa747jpeg'},
			{id:3,name:'油豆粉丝汤',sale:'月销55好评率100%',price:'6.37',image_hash:'af8980e65530d7ee7952849876430d7cjpeg'},
			{id:4,name:'自制特色酸梅汤',sale:'月销55好评率100%',price:'5.1',image_hash:'e52feed11c7908633e749c27bc7524cejpeg'},
			{id:5,name:'半笼芥菜小笼包+半笼笋丁小笼包',sale:'月销55好评率100%',price:'35.8',image_hash:'fe3a8c69a644be89f48134ce4c2a1139jpeg'},
			{id:6,name:'上海小笼包',sale:'月销55好评率100%',price:'34.8',image_hash:'6d685dce797370f8d1b7f0215c723027jpeg'},
		],
		menus:[],
		foods:[]
    }
  },
  created () {
  	 this.$store.commit('setHeader' , {type:2});
  	 this.$http.get('/api/menus').then( result => {
  	 	this.menus = result.data.menu ;
		let foods = [] ;
  	 	this.menus.forEach( menu => {
			foods = foods.concat(menu.foods);
  	 	});
  	 	this.foods = foods ;
  	 })
  },
  methods: {
  	getImage (image_hash) {
  		return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/240x/')
  	},
  	goback () {
  		this.$router.go(-1);
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
.flex-space-between {
  -webkit-box-pack:justify;
  -webkit-justify-content:space-between;
  justify-content:space-between;
}
.shop-detail {
	background-color:#fff;
	.shopheader {
		padding-bottom:10px;
		.shopbg {
			height:80px;
			position:relative;
			div {
				height:100%;
				background-image:url('https://fuss10.elemecdn.com/a/e6/91454a076858d4ae62bd35ddca298jpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/');
				background-size:cover;
			}
			div:before {
				content:'';
				position:absolute;
				left:0;
				right:0;
				top:0;
				bottom:0;
				background-color:rgba(119,103,137,.43);
			}
			i.goback {
				width:7px;
				height:7px;
				border:2px solid #fff;
				border-right-color:transparent;
				border-bottom-color:transparent;
				-webkit-transform:rotate(-45deg);
				-ms-transform:rotate(-45deg);
				transform:rotate(-45deg);
				position:absolute;
				top:6px;
				left:12px;
			}
		}
		.shopinfo {
			@extend .flex ;
			@extend .flex-center;
			position:relative;
			.logo {
				position:absolute;
				width:60px;
				height:60px;
				margin: -50px auto 0 auto;
				left:0;
				right:0;
				top:0;
				img {
					width:100%;
					height:100%;
					border-radius:4px;
				}
			}
			.info {
				width:100%;
				-webkit-box:1;
				-webkit-flex:1;
				flex:1;
				padding-top:20px;
				h2 {
					@extend .flex;
					@extend .flex-center;
					-webkit-box-pack:justify;
					-webkit-justify-content:center;
					justify-content:center;
					font-size:16px;
					text-align:center;
					span {
						width:65%;
						overflow:hidden;
						white-space:nowrap;
						text-overflow:ellipsis;
					}
					i {
						width:5px;
						display:inline-block;
						position:relative;
						left:5px;
						border:5px solid rgba(0,0,0,.67);
						border-top-color:transparent;
						border-right-color:transparent;
						border-bottom-color:transparent;
					}
				}
				.sale {
					@extend .flex;
					-webkit-box-pack:justify;
					-webkit-justify-content:center;
					justify-content:center;
					margin-top:2px;
					span {
						color:#666;
						margin-right:5px;
					}
				}
				.activites {
					@extend .flex;
					@extend .flex-space-between;
					margin:8px 30px 0 30px;
					color:#666;
					.left {
						span {
							color:#000;
						}
						span:first-child {
							background-color:rgb(241, 136, 79);
							color:#fff;
							padding:0px 2px;
						}
					}
					.right {
						@extend .flex;
						@extend .flex-center;
						i {
							height:3px;
							position:relative;
							top:3px;
							left:4px;
							border:3px solid rgba(0,0,0,.67);
							border-left-color:transparent;
							border-right-color:transparent;
							border-bottom-color:transparent;
						}
					}
				}
				p.notice {
					width:80%;
					margin:10px 30px 0 30px;
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis;
					color:#666;
				}
			}
		}
	}
	.shoptab {
		@extend .flex;
		@extend .flex-center;
	    position: sticky;
	    top: 0px;
	    z-index: 999;
		-webkit-justify-content:justify;
		-webkit-justify-content:space-around;
		justify-content:space-around;
		background-color:#fff;
		div {
			-webkit-box:1;
			-webkit-flex:1;
			flex:1;
			text-align:center;
			color:#666;
			font-size:12px;
			border-bottom:1px solid #ebebeb;
			span {
				height:30px;
				line-height:30px;
				display:inline-block;
				border-bottom:3px solid transparent;
			}
		}
		.on {
			span {
				border-bottom-color:rgb(35, 149, 255);
				color:#000;
			}
		}
	}
	.recommend {
		padding:0 10px;
		h2 {
			padding:5px 0;
		}
		.recommend-list {
			overflow-x:auto;
			padding-bottom:10px;
			ul {
				width:600px;
				@extend .flex;
				li:last-child {
					padding-right:0;
				}
				li {
					-webkit-box:2;
					-webkit-flex:2;
					flex:2;
					padding-right:10px;
					.icon {
						width:90px;
						height:90px;
					}
					img {
						width:100%;
						height:100%;
						border-radius:4px;
					}
					p {
						color:#666;
						font-size:8px;
					}
					.name {
						width:90px;
						white-space:nowrap;
						overflow:hidden;
						text-overflow:ellipsis;
						color:#000;
						font-size:10px;
						margin-bottom:2px;
					}
					.price {
						@extend .flex;
						@extend .flex-center;
						@extend .flex-space-between;
						margin-top:3px;
						font-size:13px;
						span {
							color:rgb(255, 83, 57);
						}
						.add-btn {
							@extend .flex;
							@extend .flex-center;
							svg {
								width:16px;
								height:16px;
							}
						}
					}
				}
			}
		}
	}
	.shopfood {
		.shop-scroll {
			.shop-list {
				@extend .flex;
				.menus {
					width:70px;
					background-color:red;
					position:sticky;
					top:30px;
					z-index:888;
					overflow:auto;
					ul {
						li {
							@extend .flex;
							@extend .flex-center;
							padding:15px 5px;
							img {
								width:10px;
								height:10px;
								margin-right:5px;
							}
							span {
								font-size:10px;
								color:#666;
							}
						}
					}
				}
				.foods {
					width:calc(100% - 50px);
					margin-left:10px;
					ul {
						li {
							@extend .flex;
							padding:10px 0;
							.foodimg {
								width:65px;
								height:65px;
								img {
									width:100%;
									height:100%;
									border-radius:4px;
								}
							}
							.foodinfo {
								flex:1;
								width:120px;
								padding:0 10px;
								position:relative;
								p {
									@extend .flex;
									color:#666;
									span {
										white-space:nowrap;
										overflow:hidden;
										text-overflow:ellipsis;
									}
								}
								.title {
									color:#000;
									font-weight:600;
									font-size:14px;
								}
								.price {
									left:10px;
									right:10px;
									position:absolute;
									bottom:0;
									overflow:hidden;
									span:first-child {
										font-size:13px;
										float:left;
										color:rgb(255, 83, 57);
									}
									span {
										float:right;
										@extend .flex;
										@extend .flex-center;
										svg {
											width:16px;
											height:16px;
											fill:#ccc !important;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
	}
}
</style>
