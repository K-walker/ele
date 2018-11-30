<template>
  <ul>
    <li 
      v-for="food in foods"
      @click="onMenuItemClick(food)"
      :key="food.id">
      <div class="foodimg">
        <img :src="getImage(food.image_path)">
      </div>
      <div class="foodinfo">
        <p class="title"><span>{{food.name}}</span></p>
        <p class="desc"><span>{{food.description}}</span></p>
        <p class="sale">{{food.tips}}</p>
        <div class="price">
          <span>￥{{food.specfoods[0].price}}</span>
          <span @click.stop="addToCart(food)">
            <svg style="fill: rgb(35, 149, 255);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'ShopMenuItem',
  data () {
    return {
      foods:[]
    }
  },
  props:{
    menus:{
      type:Array,
      default:function () {
        return []
      }
    }
  },
  watch: {
    menus (value) {
      this.foods = value ;
    }
  },
  methods : {
    onMenuItemClick (food) {
      this.$emit('menuitemclick' , food);
    },
    // 添加进购物车
    addToCart () {
      
    },
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
        }
      }
    }
  }
}
</style>
