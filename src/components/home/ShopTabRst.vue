<template>
	<div class="rst-info">
		<div class="rst-item delivery-info">
			<h3>配送信息</h3>
      <p>由商家配送提供配送，约28分钟送达，距离2.0km</p>
      <p>配送费￥2.8</p>
		</div>
		<div class="rst-item activities">
      <h3>活动与服务</h3>
      <ul>
        <li v-for="act in activities" :key="act.id">
          <span class="icon" :style="act.icon">
              <span>{{act.icon.name}}</span>
          </span>
          <span>{{act.name}}</span>
        </li>
      </ul>
    </div>
    <div class="rst-item rst-photos">
      <h3>商家实景</h3>
      <div class="photos-list">
        <div>
          <img :src="getImage('d7672cb0b1051cb911d45654ef0bce0cjpeg')">
          <span>门面(1张)</span>
        </div>
        <div>
          <img :src="getImage('22d3615306e7d4bc20da283cefd540fejpeg')">
          <span>大堂(1张)</span>
        </div>
      </div>
    </div>
    <div class="rst-item rst-introduce">
      <h3>商家信息</h3>
      <ul>
        <li>本店已川湘菜，本帮菜徽菜为主</li>
        <li>
          <span>品类</span>
          <span>川湘菜, 东北菜</span>
        </li>
        <li>
          <span>商家电话</span>
          <span>13818574756</span>
        </li>
        <li>
          <span>地址</span>
          <span>上海市闵行区新虹街道沪青平公路473-7号（临）</span>
        </li>
        <li>
          <span>营业时间</span>
          <span>09:00-21:10</span>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'ShopTabRst',
  data () {
    return {
      activities:[
        {id:1,name:'满30减24，满58减28，满88减32，满138减42',icon:{
          name:'满减',
          backgroundColor:'rgb(240, 115, 115)'
        }},
        {id:2,name:'【双12】热销5折',icon:{
          name:'折扣',
          backgroundColor:'rgb(240, 115, 115)'
        }},
        {id:3,name:'新用户下单立减16元(不与其它活动同享)',icon:{
          name:'首单',
          backgroundColor:'rgb(112, 188, 70)'
        }},
        {id:4,name:'本店新用户立减1元',icon:{
          name:'新客',
          backgroundColor:'rgb(0, 183, 98)'
        }},
        {id:5,name:'超值换购',icon:{
          name:'特价',
          backgroundColor:'rgb(241, 136, 79)'
        }},
        {id:6,name:'单品折扣',icon:{
          name:'折扣',
          backgroundColor:'rgb(240, 115, 115)'
        }},
        {
          id:'7',name:'该商户食品安全已由国泰产险承担，食品安全有保障',icon:{
            name:'保',
            backgroundColor:'rgb(153, 153, 153)',
            border:'1px solid rgb(153, 153, 153)'
          }
        }
      ]
    }
  },
  methods : {
    getImage (image_hash) {
      return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/')
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
