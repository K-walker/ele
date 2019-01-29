<template>
	<section 
		class="shop-item" 
		@click="itemClick">
		<div class="shop-info">
			<div class="shop-logo">
				<img :src="getImage(shop.image_path)">
			</div>
			<div class="shop-main">
				<section>
					<h3>
						<span>{{shop.name}}</span>
					</h3>
				</section>
				<section class="shop-ration-wrap">
					<div class="shop-rating-inner">
						<div class="shop-rating">
							<div class="rating-gray">
								<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
							</div>
							<div class="rating-actived">
								<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=">
							</div>
						</div>
						<span>{{shop.rating}}</span>
						<span>月售{{shop.recent_order_num}}单</span>
					</div>
					<div class="delivery-mode">
						<span>蜂鸟专送</span>
					</div>
				</section>
				<section class="shop-line">
					<div class="shop-money">
						<span>￥{{shop.float_minimum_order_amount}}起送</span>
						<span>配送费￥{{shop.float_delivery_fee}}</span>
					</div>	
					<div class="shop-timed">
						<span>{{shop.distance}}m</span>
						<span>{{shop.order_lead_time}}分钟</span>
					</div>	
				</section>
			</div>
		</div>
		<div class="shop-activities-wrap">
			<div class="shop-tags">
				<span 
					v-for="(tag , index) in shop.support_tags"
					:style="{borderColor:tag.border , color:tag.color}"
					:key="index">{{tag.text}}</span>
			</div>
			<div class="shop-activities" v-if="activities.length">
				<ul>
					<li v-for="(activity , index) in activities"
						v-show="index < 2 || showActivitiesList"
						:key="index">
						<span :style="{color:activity.icon_color}">{{activity.icon_name}}</span>
						<span>{{activity.description}}</span>
					</li>
				</ul>

				<div class="shop-activities-btn" 
					v-if="activities.length"
					@click.stop="showActivitiesList = !showActivitiesList">
					<span>{{activities.length}}个活动</span>
					<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { parseImage } from '@/utils/Function'
export default {
	name: 'ShopList',
	props:{
		shop:{
			type:Object,
			default:function () {
				return {}
			}
		}
	},
	data () {
		return {
			activities:[],
			showActivitiesList:false
		}
	},
	created () {
		this.activities = [].concat(this.shop.activities || [] , this.shop.supports || []);
	},
	methods : {
		itemClick () {
			let id = this.shop.id ;
			this.$router.push({name:'shop',params:{id}});
		},
		getImage (image_path) {
			return parseImage(image_path , '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/');
		}
	}
}
</script>

<style scoped>
.shop-item .shop-info ,
.shop-rating-inner ,
.shop-activities ,
.shop-money ,
.shop-timed ,
.shop-activities ul li ,
.shop-item .shop-main h3 ,
.shop-item section {
	display: -webkit-flex;
	display: -ms-flex;
	display: -webkit-box;
	display: flex;
}
.shop-activities ul ,
.shop-item .shop-main {
	-webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.shop-item .shop-main h3 span,
.shop-activities ul li span:last-child ,
.shop-money span:last-child {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.shop-ration-wrap {
	-webkit-justify-content:space-between;
	justify-content:space-between;
}
.delivery-mode span {
	color: #fff;
	font-size: 8px;
	display: block;
	transform:scale(.8);
	background-image: -webkit-linear-gradient(45deg,#0085ff,#0af);
    background-image: linear-gradient(45deg,#0085ff,#0af);
}
.shop-line {
	-webkit-justify-content:space-between;
	justify-content:space-between;
}
.shop-money span+span {
	max-width: 120px;	
}
.shop-money span {
	font-size: 8px;
}
.shop-timed span+span:before ,
.shop-money span+span:before {
	margin: 0 2px;
	color: #ddd;
    content:"|";
}
.shop-item {
	padding: 10px;
	border-bottom: 1px solid #eee;/*no*/
}
.shop-item .shop-logo {
	width: 48px;
	height: 48px;
	flex:none;
	-webkit-flex:none;
	-ms-flex:none;
	-webkit-box-flex:none;
}
.shop-item .shop-logo img {
	width: 100%;
	height: 100%;
}
.shop-item .shop-main {
	margin-left: 5px;
	overflow: hidden;
}
.shop-main section {
	color: #666;
	margin-bottom: 5px;
}
.shop-main section:last-child {
	margin-bottom: 0px;
}
.shop-item .shop-main h3 {
	font-size: 12px;
	overflow: hidden;
	color: #000;
}
.shop-rating {
	position: relative;
}
.shop-rating-inner span {
	padding: 0 2px;
}
.shop-rating .rating-actived {
	width: 90%;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
}

.shop-activities-wrap {
	padding-left: 53px;
	margin-top: 10px;
}

.shop-tags span {
	border:1px solid rgb(221, 221, 221);/*no*/
	border-radius: 2px;
	padding: 1px 2px;/*no*/
	color: rgb(102, 102, 102);
	margin-right: 5px;
}

.shop-activities {
	margin-top: 10px;
}
.shop-activities ul {
	overflow: hidden;
}
.shop-activities ul li {
	padding: 1px 0;/*no*/
}
.shop-activities ul li span:first-child {
	padding: 1px;/*no*/
	border-radius: 2px;
	width: 10px;
	height: 10px;
	line-height: 10px;
	font-size: 8px;
	background-color: green;
	color: #fff;
	text-align: center;
	margin-right: 5px;
	align-items:center;
}
.shop-activities-btn,
.shop-activities ul li span:last-child {
	font-size: 8px;
	color: #666;
}
.shop-activities-btn img {
	width: 6px;
	vertical-align: middle;
}
</style>
