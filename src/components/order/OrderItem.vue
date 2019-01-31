<template>
  	<router-link to='/order/detail/3032348101665859762' class="order-item">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
			<defs>
			<symbol viewBox="0 0 547 987" id="arrow-right">
				<path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></symbol><symbol viewBox="0 0 64 64" id="loading"><path fill="#999" fill-rule="evenodd" d="M60 36h-8c-2.203 0-4-1.797-4-4 0-2.208 1.797-4 4-4h8c2.203 0 4 1.792 4 4 0 2.203-1.797 4-4 4zM48.973 20.686a4 4 0 0 1-5.66 0 3.995 3.995 0 0 1 0-5.655l5.66-5.654a3.99 3.99 0 0 1 5.65 0 4 4 0 0 1 0 5.655l-5.65 5.656zM32 64a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4c2.203 0 4 1.797 4 4v8c0 2.203-1.797 4-4 4zm0-48c-2.212 0-4-1.792-4-4V4a3.999 3.999 0 1 1 8 0v8c0 2.208-1.797 4-4 4zM15.03 54.624a3.995 3.995 0 0 1-5.654 0 3.99 3.99 0 0 1 0-5.65l5.655-5.66a3.995 3.995 0 0 1 5.656 0 4.004 4.004 0 0 1 0 5.66l-5.655 5.65zm0-33.938L9.373 15.03a3.995 3.995 0 0 1 0-5.654 4 4 0 0 1 5.654 0l5.655 5.655a3.995 3.995 0 0 1 0 5.656 3.99 3.99 0 0 1-5.65 0zM16 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4c0-2.208 1.788-4 4-4h8a4 4 0 0 1 4 4zm32.973 11.314l5.65 5.66a3.99 3.99 0 0 1 0 5.65 3.992 3.992 0 0 1-5.65 0l-5.66-5.65a4 4 0 0 1 0-5.66 4 4 0 0 1 5.66 0z"></path>
			</symbol>
			</defs>
		</svg>

		<div class="order-body">
			<div class="shop-img">
				<img :src="getImage('6dd0869a39e5af30f7f9160d73e1b936jpeg')">
			</div>
			<div class="order-content">
				<div class="order-header">
					<div class="title">
						<router-link to='/shop/Efdf9543u5fdfd45'>
							<span>聚味小厨</span>
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
							</svg>
						</router-link>
						<span class="order-status">订单已送达</span>
					</div>
					<p class="datetime">20小时50分钟</p>
				</div>
				<div class="order-detail">
					<span class="detail">馒头等15件商品</span>
					<span class="price">$16.34</span>
				</div>
			</div>
		</div>
		<div class="order-bottom">
			<button>再来一单</button>
			<button class="alert">评价得金币</button>
		</div>
  	</router-link>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'OrderItem',
  data () {
    return {

    }
  },
  methods: {
    getImage (image_hash) {
      return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/')
    }
  }
}
</script>

<style scoped lang="scss">
  .flex {
    display: flex;
    display: -webkit-flex ;
    display: -webkit-box;
    display: -ms-flex;
  }
  .justify-content {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .order-item {
    display:block;
    margin-top:10px;
    padding: 5px 0 0 15px;
    color:#000;
    background-color:#fff;
    .order-body {
      @extend .flex ;
      .shop-img {
        width:28px;
        height:28px;
        -webkit-flex:none;
        -ms-flex:none;
        -webkit-box-flex:0;
        flex:none;
        padding-right:10px;
        img {
          width:100%;
          height:100%;
        }
      }
      .order-content {
        -webkit-box-flex:1;
        -webkit-flex:1;
        -ms-flex:1;
        flex:1;
        .order-header {
          padding-right:15px;
          padding-bottom:10px;
          .title {
            @extend .flex ;
            @extend .justify-content;
            align-items:center;
            a {
              @extend .flex;
              color:#000;
              align-items:center;
              span {
                font-size:14px;
              }
              svg {
                width:6px;
                height:8px; 
                padding-left:3px;
              }
            }
            .order-status {
              font-size:12px;
              text-align: right;
              color: #333;
              max-width: 120px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          p.datetime {
            color:#666;
            line-height:12px;
          }
        }
        .order-detail {
          @extend .flex;
          @extend .justify-content;
          font-size:11.5px;
          padding:15px 15px 15px 0;
          .detail {
            @extend .flex ;
            color:#666;
          }
          .price {
            font-weight:700;  
          }
        }
      }
    }
    .order-bottom {
      @extend .flex;
      -webkit-box-pack:end;
      -ms-box-pack:end;
      -webkit-justify-content:flex-end;
      justify-content:flex-end;
      padding-right:20px;
      padding-bottom:10px;
      button {
        background-color:transparent;
        border:1px solid #2395ff;
        padding:2px 8px;
        font-size:11px;
        color:#2395ff;
        border-radius:2px;
        margin-left:5px;
      }
      button.alert {
        border-color:#ff5339;
        color:#ff5339;
      }
    }
  }
</style>
