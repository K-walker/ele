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
            <ul>
              <li v-for="food in foods" :key="food.id">
                <div class="foodimg">
                  <img :src="getImage(food.image_path)">
                </div>
                <div class="foodinfo">
                  <p class="title"><span>{{food.name}}</span></p>
                  <p class="desc"><span>{{food.description}}</span></p>
                  <p class="sale">{{food.tips}}</p>
                  <div class="price">
                    <span>￥{{food.specfoods[0].price}}</span>
                    <span>
                      <svg style="fill: rgb(35, 149, 255);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
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
          ul {
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
                      fill:#ccc !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
