<template>
  <div class="shopfood">
      <div class="shop-scroll">
        <div class="shop-list">
          <div class="menus" @scroll="onScroll($event)">
            <ul>
              <li v-for="menu in menus" :key="menu.id">
                <img v-if="menu.icon_url != ''" :src="getImage(menu.icon_url)">
                <span>{{menu.name}}</span>
              </li>
            </ul>
          </div>
          <div class="foods" @scroll="onScroll($event)">
            <ShopMenuItem 
            :menus="foods"
            v-on:menuitemclick="onMenuItemClick"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'ShopMenu',
  data () {
    return {
      menus:[],
      foods:[]
    }
  },
  components:{
      ShopMenuItem : () => import ('./ShopMenuItem')
  },
  created () {
    this.load();
  },
  methods: {
    load () {
      this.$http.get('/api/menus').then( result => {
        this.menus = result.data.menu ;
        let foods = [] ;
        this.menus.forEach( menu => {
          foods = foods.concat(menu.foods);
        });
        this.foods = foods ;
      })
    },
    onMenuItemClick (shopDetail) {
      this.$emit('menuitemclick' , shopDetail);
    },
    onScroll () {
      this.$emit('menuscroll');
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
.flex-space-between {
  -webkit-box-pack:justify;
  -webkit-justify-content:space-between;
  justify-content:space-between;
}
.shopfood {
  height:100%;
  background-color:#fff;
    .shop-scroll {
      height:100%;
      .shop-list {
        @extend .flex;
        height:100%;
        overflow:hidden;
        .menus {
          width:70px;
          height:100%;
          position:sticky;
          top:30px;
          z-index:888;
          overflow:auto;
          background-color:#f8f8f8;
          ul {
            li {
              @extend .flex;
              @extend .flex-center;
              padding:15px 5px;
              img {
                width:10px;
                height:10px;
                margin-right:5px;
              }
              span {
                font-size:10px;
                color:#666;
              }
            }
          }
        }
        .foods {
          width:calc(100% - 50px);
          height:100%;
          margin-left:5px;
          overflow:auto;
        }
      }
    }
  }
</style>
