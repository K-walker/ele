<template>
  <div class="order-detail">
    <Header title="订单详情" />
    <div class="order-top">
      <div class="shop-logo">
        <img :src="getImage('6dd0869a39e5af30f7f9160d73e1b936jpeg')">
      </div>
      <h1>订单已送达</h1>
      <p>感谢你对饿了么的信任，期待再次光临</p>
      <div class="buttons">
        <button class="alert">评价得金币</button>
        <button class="primary">再来一单</button>
      </div>
    </div>
    <div class="claim-card">
      <router-link to='/'>
        <h5>食品安全理赔</h5>
        <p>如食用食品引发就医，可在线申请理赔</p>
      </router-link>
      <div class="sprite-icon sprite-arrow-right"></div>
    </div>
    <!-- 菜单 -->
    <div class="order-card">
      <div class="card-header">
        <router-link to='/'>
          <img :src="getImage('6dd0869a39e5af30f7f9160d73e1b936jpeg')">
          <span>聚味小厨</span>
        </router-link>
        <div class="sprite-icon sprite-arrow-right"></div>
      </div>
      <div class="card-list">
          <ul>
            <li v-for="item in orderList" :key="item.id">
              <div>
                  <p v-if="item.style" :style="item.style">{{item.style.name}}</p>
                  <p>{{item.name}}</p>
              </div>
              <span v-if="item.number">x{{item.number}}</span>
              <span :style="{color:item.color}">¥{{item.price}}</span>
            </li>
          </ul>
          <div class="final-price">
            <div class="call-shoper">
              <div class="sprite-icon sprite-tel"></div>
              <span>联系商家</span>
            </div>
            <div class="total-price">
              <span>实付</span>
              <span>¥16.52</span>
            </div>
          </div>
      </div>
    </div>
    <!-- 配送信息 -->
    <div class="detailcard-delivery">
      <div class="title">配送信息</div>
      <ul>
        <li>
          <span>送达时间:</span>
          尽快送达
        </li>
        <li>
          <span>送货地址:</span>
          <div class="address">
            <p>凯(先生)</p>
            <p>18301702474</p>
            <p>七宝中心幼儿园(佳宝分园)七宝镇佳宝四村12号302室</p>
          </div>
        </li>
        <li>
          <span>配送方式:</span>
          商家配送
        </li>
      </ul>
    </div>
    <!--订单信息-->
    <div class="order-info">
      <div class="title">订单信息</div>
      <ul>
        <li> <span>订单号:</span> 3032348101665859762 </li>
        <li> <span>支付方式:</span> 在线支付 </li>
        <li> <span>下单时间:</span> 2018-11-18 13:29 </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../Header'
import {setHeaderTitle , parseImage} from '@/utils/Function'
export default {
  name: 'OrderDetail',
  components : {Header},
  data () {
    return {
      orderList:[ 
        {id:1,name:'馒头',number:1 , price:1.5},
        {id:2,name:'青椒毛豆香干',number:1 , price:17},
        {id:3,name:'米饭',number:1 , price:2},
        {id:4,name:'微辣',number:1 , price:0},
        {id:5,name:'酸辣土豆丝', number:1 , price:15.88},
        {id:6,name:'饭盒费',number:1 , price:6.64},
        {id:7,name:'配送费',number:0 , price:2.5},
        {id:8,name:'在线支付立减优惠',number:0 , price:-23 , color:'#ff5339'},
        {id:9,name:'店铺红包',number:0 , price:-6 , color:'#ff5339' ,style: {
          name:'红',
          color:'#fff',
          backgroundColor:'rgb(255, 114, 57)'
        }}
      ]
    }
  },
  created () {
    setHeaderTitle(this , '订单详情')
  },
  methods: {
    getImage (image_hash) {
        return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!160x160r/gravity/Center/crop/160x160/')
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
.order-detail {
  padding:10px;
  .order-top {
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.05);
    background-color:#fff;
    .shop-logo {
      width:60px;
      height:60px;
      margin: 0 auto ;
      padding: 5px 0;
      img {
        width:100%;
        height:100%;
        display:block;
        border-radius:50%;
      }
    }
    h1 {
      font-size:15px;
      text-align:center;
      margin-top:1px;
    }
    h1:after {
      content:'';
      width:5px;
      height:5px;
      border:1px solid #000;
      display:inline-block;
      border-left-color:transparent;
      border-bottom-color:transparent;
      -webkit-transform:rotate(45deg);
      transform:rotate(45deg);
      vertical-align:middle;
    }
    p {
       font-size:10px;
       color:#999;
       text-align:center;
    }
    .buttons {
      @extend .flex ;
      -webkit-box-pack:center;
      justify-content:center;
      padding:10px 0 ;
      button {
        width:80px;
        height:26px;
        margin-right:10px;
        outline:0;
        font-size:11px;
        border-radius:2px;
        border:1px solid #ccc;
      }
      button.primary {
        background-color:#2395ff;
        border-color:#2395ff;
        color:#fff;
      }
      button.alert{
        background-color: #ff5339;
        border-color: #ff5339;
        color: #fff;
      }
    }
  }
  .claim-card {
    @extend .flex ;
    @extend .flex-center ;
    @extend .flex-space-between ;
    background-color:#fff;
    padding:15px 10px;
    margin-top:10px;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.05);
    a {
      color:#666;
      display:block;
      h5 {
        font-size:12px;
        margin-bottom:2px;
      }
    }
  }
  .order-card {
    margin-top:10px;
    background-color:#fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.05);
    padding:10px;
    .card-header {
      @extend .flex ;
      @extend .flex-center ;
      @extend .flex-space-between ;

      border-bottom:2px solid #dfdfdf;
      padding-bottom:10px;
      a {
        @extend .flex ;
        @extend .flex-center ;
        img {
          width:20px;
          height:20px;
        }
        span {
          margin-left:5px;
          color:#666;
          font-size:11px;
        }
      }
    }
    .card-list {
      ul {
        li {
          @extend .flex ;
          @extend .flex-center;
          height:30px;
          border-bottom:1px solid #ddd;
          padding:0 5px;
          color:#333;
          div {
            @extend .flex ;
            @extend .flex-center ;
            -webkit-box-flex:9;
            -webkit-flex:9;
            flex:9;
            p:first-child {
              padding:0 1px;
              border-radius:2px;
              box-sizing:border-box;
              margin-right:5px;
            }
          }
          span {
            -webkit-box-flex:2;
            -webkit-flex:2;
            flex:2;
            text-align:right;
          }
        }
      }
      .final-price {
        @extend .flex;
        @extend .flex-center;
        @extend .flex-space-between;
        padding:15px 5px 5px 5px;
        .call-shoper {
          @extend .flex;
          @extend .flex-center;
          span {
            color:#2395ff;
            margin-left:5px;
          }
        }
        .total-price {
          font-size:12px;
          span {
            padding-left:5px;
          }
        }
      }
      
    }
  }
  .order-info ,
  .detailcard-delivery {
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.05);
    background-color:#fff;
    margin-top:10px;
    padding:10px;
    .title {
      font-size:12px;
    }
    ul {
      padding:5px;
      li {  
        @extend .flex;
        padding-top:10px;
        color:#666;
        font-size:11px;
        span {
          min-width:50px;
        }
      }
    }
  }
}
</style>
