<template>
	<div class="rst-info">
		<div class="rst-item delivery-info">
			<h3>配送信息</h3>
			<p>由商家配送提供配送，约{{rst.order_lead_time}}分钟送达，距离{{rst.distance}}m</p>
			<p>配送费￥{{rst.float_delivery_fee}}</p>
		</div>
	<div class="rst-item activities">
      	<h3>活动与服务</h3>
		<ul>
			<li v-for="item in [].concat(rst.activities , rst.supports)" :key="item.id">
			<span class="icon" :style="getStyle(item)">
				<span>{{item.icon_name}}</span>
			</span>
			<span>{{item.description}}</span>
			</li>
		</ul>
    </div>
    <div class="rst-item rst-introduce">
      <h3>商家信息</h3>
      <ul>
        <li>{{rst.description}}</li> 
        <li>
          <span>品类</span>
          <span>{{rst.flavors | getFlavorName}}</span>
        </li>
        <li>
          <span>商家电话</span>
          <span>{{rst.phone}}</span>
        </li>
        <li>
          <span>地址</span>
          <span>{{rst.address}}</span>
        </li>
        <li>
          <span>营业时间</span>
          <span>{{rst.opening_hours}}</span>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
import {parseImage , isEmpty} from '@/utils/Function'
export default {
	name: 'ShopTabRst',
	props:['rst'],
	data () {
		return {
			
		}
	},
	filters: {
		getFlavorName (flavors) {
			if(isEmpty(flavors)) return '暂无' ;
			let flavorNames =  flavors.map( item => {
				return item.name ;
			})
			return flavorNames.join(',');
		},
	},
	methods : {
		getImage (image_hash) {
			return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/')
		},
		getStyle (item) {
			return {
				borderColor:'#'+item.border,
				backgroundColor:'#'+item.icon_color,
				color:'#'+item.text_color,
			}
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
.rst-info {
  background-color: #f5f5f5;
  .rst-item {
    margin-bottom:10px;
    background-color:#fff;
    padding:2px 12px 10px 12px;
    h3 {
      height:32px;
      line-height: 32px;
    }
    p {
      line-height: 1.8;
      color:#666;
    }
  }
  .activities {
    ul {
      li {
        padding:4px 0px;
        span {
          color: #666;
        }
        span.icon {
          width:24px;
          height:14px;
          line-height: 14px;
          display:inline-block;
          border-radius: 1px;
          margin-right:3px;
          text-align: center;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .rst-photos {
   .photos-list {
    @extend .flex ;
    div {
      width:60px;
      height:60px;
      position: relative;
      margin-right:5px;
      img {
        width:100%;
        height: 100%;
      }
      span {
        width: 100%;
        position: absolute;
        bottom: 0;
        color: #fff;
        text-align: center;
        display: block;
        background-color: rgba(0, 0, 0, .5);
      }
    }
   }
  }
  .rst-introduce {
    ul {
      li {
        @extend .flex;
        @extend .flex-center;
        @extend .flex-space-between;
        color:#666;
        padding:10px 0;
        border-bottom:1px solid #ddd;
        font-size:11px;
        span:first-child {
          color: #000;
          font-weight: 700;
          min-width: 60px;
        }
      }
      li:first-child {
        padding-top:0px;
      }
    }
  }
}
</style>
