<template>
  <div class="discover">
      <svg xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          style="position:absolute;width:0;height:0">
          <defs>
              <symbol viewBox="-4 3 30 30" id="alarm"><g id="alarm_页面"><g id="alarm_发现页_新增天天特价_确认" transform="translate(-31 -1587)"><g id="alarm_商品" transform="translate(-2 1556)"><g id="alarm_Page-1"><path d="M10 29.9c-7.2 0-13-5.8-13-13 0-2 .4-3.9 1.3-5.7C.5 6.7 5 3.9 10 3.9c7.2 0 13 5.8 13 13s-5.8 13-13 13zM.1 12.1C-.7 13.6-1 15.2-1 16.9c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11c-4.3 0-8.1 2.3-9.9 6.2z" class="st0" transform="translate(34 32)"></path><path d="M-1 12.1c-1.8-.9-3-2.7-3-4.8C-4 4.4-1.6 2 1.3 2c2 0 3.8 1.1 4.7 2.8l-1.8 1C3.7 4.7 2.5 4 1.3 4-.5 4-2 5.5-2 7.3c0 1.3.7 2.4 1.8 3l-.8 1.8zM21 11.8l-1-1.7c1-.6 1.6-1.7 1.6-2.8 0-1.8-1.5-3.3-3.3-3.3-1.3 0-2.5.8-3.1 2l-1.8-.8c.8-2 2.8-3.3 4.9-3.3 2.9 0 5.3 2.4 5.3 5.3-.1 2-1 3.7-2.6 4.6zM14.3 20.2h-4.2c-.6 0-1-.4-1-1v-8.1c0-.6.4-1 1-1s1 .4 1 1v7.1h3.2c.6 0 1 .4 1 1s-.4 1-1 1zM-1.2 32c-.2 0-.5-.1-.7-.3-.4-.4-.4-1-.1-1.4l4-4.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4 4.5c-.2.3-.4.4-.7.4zM21.5 32c-.3 0-.5-.1-.7-.3l-4-4.5c-.4-.4-.3-1 .1-1.4.4-.4 1-.3 1.4.1l4 4.5c.4.4.3 1-.1 1.4-.2.1-.4.2-.7.2z" class="st0" transform="translate(34 32)"></path></g></g></g></g></symbol>
          </defs>
        </svg>
  	<Header title="发现"/>
  	<div class="main">
        <div class="banner">
          <img :src="getImage('941253ca6a440ced6fa22044a96e6721jpeg' , '')">
        </div>
        <section class="parts">
          <div class="left">
            <div>
              <p>金币商城</p>
              <p class="tips">0元好物在这里</p>
            </div>
            <img :src="getImage('8389c9aea0e856149083d84af3444b78jpeg' , '?imageMogr/format/webp/')">
          </div>
          <div class="right">
            <div class="top">
              <div class="wrapper">
                <p>推荐有礼</p>
                <p class="tips">10元现金拿不停</p>
              </div>
              <img :src="getImage('5727232274c3c1934861abb86ba32b7bjpeg' , '?imageMogr/format/webp/')">
            </div>
            <div class="bottom">
              <div  class="wrapper">
                <p>周边优惠</p>
                <p class="tips">领取口碑好券</p>
              </div>
              <img :src="getImage('5102351e989d4171479ba0d7b5c06053jpeg' , '?imageMogr/format/webp/')">
            </div>
          </div>
        </section>

        <section class="no-mb">
          <div class="activity-header">
            <span class="line left"></span>
            <svg class="activity-icon"><use xlink:href="#alarm"></use></svg>
            限时好礼
            <span class="line right"></span>
            <p>金币换豪礼</p>
          </div>
          <div class="activity-list">
              <div class="activity-item" 
                  v-for="item in activities"
                  :key="item.id">
                  <img :src="getImage(item.image_hash , '?imageMogr/format/webp/')">
                  <div class="desc">
                    <p>{{item.title}}</p>
                    <div class="price">
                      <span>{{item.gold}}</span>
                      <span>￥{{item.price}}</span>
                    </div>
                  </div>
                  <span class="tag">{{item.tag}}</span>
              </div>
          </div>
        </section>
        <div class="more">
          <span>查看更多</span>
        </div>
    </div>
  	<FooterMenu/>
  </div>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'Find',
  components: { 
    Header : () => import ('@/components/Header') , 
	  FooterMenu : () => import ('@/components/FooterMenu') ,
  },
  data () {
    return {
      activities:[
        {id:1,tag:'限时优惠',title:'3元饿了么红包',gold:'90金币',price:'3',image_hash:'c6689cc6ef54261bbd98b94deeff2546jpeg'},
        {id:2,tag:'特价换购',title:'扫地机器人',gold:'9金币',price:'00',image_hash:'5785c1ca7ceca079926933ca418c9eb7jpeg'},
        {id:3,tag:'特价换购',title:'电动按摩理疗仪',gold:'9金币',price:'239',image_hash:'eb5605a11eae79849240113271dd1b94jpeg'}
      ]
    }
  },
  methods : {
    getImage (image_hash , imageMogr) {
      return parseImage(image_hash , imageMogr);
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
.flex-space-around {
	-webkit-box-pack:justify;
	-webkit-justify-content:space-around;
	justify-content:space-around;
}
.discover {
	#alarm {
		.st0{fill:#f94843}
		.st1{fill:none;stroke:#f94843;stroke-width:2}
	}
  .main {
		.banner {
			width: 100%;
			min-height:86px;
			img {
				width: 100%;
			}
		}
    section {
      	margin-bottom:10px;
      	background-color: #fff;
		&.no-mb {
			margin-bottom: 0; /*no*/
		}
    }
    .parts {
		@extend .flex;
		height:120px;
		padding-bottom:10px;
		.left {
			width: 50%;
			@extend .flex;
			padding:15px 0 0 15px;
			div {
				p {
					font-size:12px;
					font-weight:500;
					color:rgb(255, 153, 0);
				}
				p.tips {
					font-size: 10px;
					color: #999;
					margin-top: 5px;
				}
			}
			img {
				width: 56px;
				height: 56px;
				-webkit-align-self: flex-end;
				align-self: flex-end;
			}
		}
		.right {
			width: 50%;
			padding:15px 15px 0 15px;
			p {
				font-size:12px;
				font-weight:500;
			}
			p.tips {
				font-size: 10px;
				margin-top: 5px;
			}
			.top {
				@extend .flex;
				@extend .flex-space-between;
				height:50%;
				p {
					color:rgb(27, 169, 225);
				}
				p.tips {
					color: #999;
				}
			}
			.bottom {
				@extend .flex;
				@extend .flex-center;
				@extend .flex-space-between;
				height:50%;
				p {
					color:rgb(237, 102, 96);
				}
				p.tips {
					color: #999;
				}
			}
			img {
				width:36px;
				height:36px;
			}
		}
    }
	.more {
		text-align: center;
		font-size:11px;
		color:#666;
		padding: 8px 10px 5px 10px;
		span::after {
			content:'';
			width:6px;
			height:6px;
			border:1px solid #ddd;
			border-left-color:transparent;
			border-bottom-color:transparent;
			transform:rotate(45deg);
			display: inline-block;
			margin-left:5px;
		}
    }
    .activity-header {
      text-align: center;
      padding: 15px 0 0;
      font-size:14px;
      font-weight:700;
      .line {
        width: 15px;
        height:0.5px;
        background-color:#000;
        display: inline-block;
        position: relative;
        bottom:5px;
      }
      .line::after {
        content:'';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #000;
        display: inline-block;
        position: absolute;
        top: -1.5px;
      }
      .line.left {
        margin-right: 3px;
      }
      .line.right {
        margin-left: 3px;
      }
      .line.left::after {
        right: -2px;
      }
      .line.right::after {
        left: -2px;
      }
      svg {
        width:14px;
        height:14px;
        position: relative;
        top: 1px;
      }
      p {
        color: #666;
        font-size: 8px;
        font-weight: normal;
      }
    }
    .activity-list {
      @extend .flex;
      padding:15px 0 5px 0;
      .activity-item {
        width:calc(100% / 3);
        position: relative;
        img {
          width:96px;
          min-height:96px;
        }
        .tag {
          left: 10px;
          top: 0px;
          position: absolute;
          background-color: #000;
          color: #fff;
          padding: 0 1px;
        }
        .desc {
          padding: 5px 10px;
          p {
            color:#333;
            overflow: hidden;
            text-overflow:ellipsis;
            font-size:10px;
          }
          div {
            margin-top:3px;
            span:first-child {
              color:#ff5339;
            }
            span:last-child {
              color:#aaa;
              text-decoration: line-through;
              font-size:8px;
            }
          }
        }
      }
    }
  }
}
</style>
