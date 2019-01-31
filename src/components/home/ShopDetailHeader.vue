<template>
   <div class="shopheader">
    <div class="shopbg" @click="goback()">
      <div></div>
      <i class="goback"></i>
    </div>
    <div class="shopinfo">
      <div class="logo">
        <img :src="getImage(rst.image_path)">
      </div>
      <div class="info">
        <h2>
          <span>{{rst.name}}</span>
          <i></i>
        </h2>
        <div class="sale">
          <span>评价{{rst.rating}}</span>
          <span>月售{{rst.recent_order_num}}</span>
          <span>蜂鸟专送约{{rst.order_lead_time}}分钟</span>
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
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
	name: 'ShopDetailHeader',
	props:['rst'],
	data () {
		return {
			
		}
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
</style>
