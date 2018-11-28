<template>
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
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'ShopDetailRecommend',
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
    }
  },
  methods: {
    getImage (image_hash) {
      return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/240x/')
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
</style>
