<template>
	<mt-swipe :auto="0" :continuous="false">
		<mt-swipe-item v-for="item in swipeData" :key="item.group_type">
			<router-link v-for='entry in item.entries' :key='entry.id' to='/msite/food'>
				<div class="img-box">
					<img :src="getImage(entry.image_hash)" :alt="entry.name">
				</div>
				<span>{{entry.name}}</span>
			</router-link>	
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>

import {parseImage} from '@/utils/Function'

export default {
	name: 'FastEntries',
	props:{
		position:{
			type:Object,
			default:function () {
				return {
					latitude:'',
					longitude:''
				}
			}
		}
	},
	data () {
		return {
			swipeData: []
		}
	},
	mounted () {
		this.$http.get('/ele/shopping/entries').then( result => {
			this.swipeData = this.formatData(result.data) ;
		})
	},
	methods: {
		formatData (list) {
			let groups = [] ;
			list.forEach( item => {
				let res = groups.find( group => item.group_type == group.group_type);
				if(!res) {
					res = {
						group_type:item.group_type,
						group_name:item.group_name,
						entries:[]
					}
					groups.push(res)
				}
				res.entries.push({
					id:item.id,
					image_hash:item.image_hash,
					name:item.name,
					link:item.link
				})
			})
			return groups ;
		},
		getImage (image_hash) {
			return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/');
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
	font-size:9px;
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
