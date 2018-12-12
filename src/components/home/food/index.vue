<template>
<transition name='slide-fade'>
  <div class="food">
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        style="position:absolute;width:0;height:0">
        <defs>
            <symbol viewBox="0 0 26 26" id="drop-down">
                <path fill="#FFF" d="M13.086 17.627L3.219 7.76a1.131 1.131 0 0 0-1.6 1.6l10.667 10.667a1.131 1.131 0 0 0 1.6 0L24.553 9.36a1.131 1.131 0 0 0-1.6-1.6l-9.867 9.867z"></path>
            </symbol>
        </defs>
    </svg>
    <Header title="美食"/>
    <nav>
        <ul>
            <li v-for="submenu in subMenus"
                :class="[subMenuId == submenu.id ? 'on':'']"
                :key="submenu.id">{{submenu.name}}</li>
        </ul>
        <div @click="show = !show">
            <svg><use xlink:href="#drop-down"></use></svg>
        </div>
    </nav>
    <section class="food-main">
        <div class="setmeal">
            <h2>
                <span>省心套餐</span>
                <span>更多&gt;</span>
            </h2>
            <div class="meals">
                <div v-for="meal in meals"
                    :key="meal.id"
                    class="meal-item">
                    <img :src="getImage(meal.image_hash , '?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/')">
                    <div class="describe">
                        <p>{{meal.name}}</p>
                        <p>{{meal.rate_text}}</p>
                        <div class="price">
                            <span>￥{{meal.price}}</span>
                            <span>{{meal.discount}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BatchFilter v-on:filter="foodFilter"/>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
    </section>
    <div class="filter" v-if="show" @click="show = !show">
        <div class="title">
            <h3>请选择分类</h3>
            <button @click.stop="show = false"></button>
        </div>
        <div class="scroll">
            <div class="menu main-menu">
                <ul>
                    <li v-for="category in categories" 
                        v-if="category.id"
                        :class="[mainMenuId == category.id ? 'on':'']"
                        @click.stop="setSubMenus(category)"
                        :key="category.id"> 
                        <span>{{category.name}}</span> 
                        <span>{{category.count}}</span> 
                    </li>
                </ul>
            </div>
            <div class="menu sub-menu">
                <ul>
                    <li v-for="submenu in subMenus"
                        :class="[subMenuId == submenu.id ? 'on':'']"
                        @click="onSubMenuClick(submenu)"
                        :key="submenu.id"> 
                        <div> 
                            <img :src="getImage(submenu.image_url , '?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/')"/>
                            <span>{{submenu.name}}</span>
                        </div> 
                        <span class="count">{{submenu.count}}</span> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</transition>
</template>

<script>
import { parseImage } from '@/utils/Function'
export default {
  name: 'Food',
  components:{
      Header : () => import ('@/components/Header') , 
      BatchFilter : () => import ('@/components/BatchFilter'), 
      ShopItem : () => import ('../ShopItem')
  },
  data () {
    return {
        show:false,
        categories:[],
        mainMenuId:0,
        subMenuId:0,
        meals:[
            {id:1,name:'香辣鸡腿堡',image_hash:'08bc40a8fc1e8bfd2166647240fc56cajpeg',price:'15',discount:'满36减19',rate_text:'218人好评'},
            {id:2,name:'网红尖椒肉片蒸卤面',image_hash:'2e53136b0afea28abff6eca312c5fed4jpeg',price:'23.8',discount:'满25减12',rate_text:'18人好评'},
            {id:3,name:'特色锅贴2两（10只）',image_hash:'baef08a25becff597ab430ba2c90c820jpeg',price:'19',discount:'满25减20',rate_text:'62人好评'}
        ],
        subMenus:[]
    }
  },
  created () {
      this.$http.get('/api/category').then( result => {
        this.categories = result.data ;
        this.mainMenuId = this.categories[1].id ;

        this.subMenus = this.categories[1].sub_categories;
        this.subMenuId = this.subMenus[0].id;
      })
  },
  methods : {
    setSubMenus (category) {
        this.mainMenuId = category.id ;
        this.subMenus = category.sub_categories;
        this.subMenuId = this.subMenus[0].id;
    },
    onSubMenuClick (submenu) {
        this.subMenuId = submenu.id;
    },
    foodFilter (item) {
        console.log(item);
    },
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
.food {
    height: 100%;
    nav {
        @extend .flex;
        background-image:-webkit-linear-gradient(90deg,#0af,#0085ff);
        background-image:linear-gradient(90deg,#0af,#0085ff);
        position: relative;
        z-index:2;
        ul {
            overflow-x:auto;
            -webkit-box-flex:1;
            padding-left:10px;
            padding-bottom:3px;
            flex:1;
            white-space: nowrap;
            li {
               height:16px;
               padding-top:3px;
               display: inline-block;
               border-bottom:1.2px solid transparent;
               margin-right:15px;
               color:#fff;
               opacity:.7;
            }
            li.on {
                opacity:1;
                border-bottom-color:#fff;
            }
        }
        div {
            width:30px;
            @extend .flex;
            @extend .flex-center;
            -webkit-box-pack: center;
            justify-content: center;
            text-align: center;
            margin-bottom:3px;
            svg {
                width:10px;
                height:10px;
            }
        }
    }
    .food-main {
        background-color: #fff;
        height: calc(100% - 60px);
        overflow: auto;
        position: relative;
        z-index:1;
        .setmeal {
            padding: 0px 0px 5px 10px;
            background-color: #fff;
            h2 {
                @extend .flex;
                @extend .flex-center;
                padding: 5px 10px 0px 0px ;
                font-size:12px;
                span:first-child {
                    -webkit-box-flex: 1;
                    flex:1;
                }
                span:last-child {
                    font-size:9px;
                    color: #666;
                }
            }
            .meals {
                width:100%;
                @extend .flex;
                padding-top:10px;
                padding-bottom:5px;
                box-sizing: border-box;
                .meal-item {
                    width:calc(100% / 3);
                    padding-right:10px;
                    box-sizing: border-box;
                    img {
                        width:100%;
                    }
                    .describe {
                        margin-top:5px;
                        p {
                            color:#999;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            margin-top:2px;
                        }
                        p:first-child {
                            font-size:11px;
                            font-weight:700;
                            color:#000;
                            margin-top:0;
                        }
                        .price {
                            margin-top:3px;
                            span {
                                border:1px solid #e8470b;/*no*/
                                color:#e8470b;
                                font-size:8px;
                                box-sizing:border-box;
                            }
                            span:first-child {
                                border:none;
                                font-weight:700;
                                color:#000;
                                font-size:11px;
                            }
                        }
                    }
                }
            }
        }
        .batch-filter {
            top:-1px; /*no*/
        }
    }
    .filter {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-color: rgba(0,0,0,.5);
        z-index:999;
        .title {
            @extend .flex ;
            @extend .flex-center ;
            padding:5px;
            background-color:#f5f5f5;
            h3 {
                -webkit-box-flex:1;
                flex:1;
                color:#333;
                font-size:8px;
            }
            button {
                width:24px;
                height:24px;
                border: none;
                background-color: transparent;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAlFJREFUaAXtmEFOwkAUhmld6GW8AgsXegNNxGWBBZ7HBMqWhTvixrh1SYI3MfEASv1/0kcKKS3TeTMm5jVpBsr0n/f9M29mmF7PLnPAHDAHzAFzwBwwB8wBc8AcMAfMAXPAHPj3DiRahNPp9DpN036SJC9Zlq00dKF5Cb3boijW4/F4qaGpAkxYBPPGgBDgD+7BcDh89glwNpvd4P0lYC9K3YfRaLTw0eS7qa/AVgQ9KzoI8Az3Is/zO3nmWh7C8n1o7tpw1avWVwHmMGbPirAPdB0stAvcKkNaBZg5i4AGvtDHYGHkI4bzqxjqU6rksATAYczhzB6WZzSBZrTldAvsk+j5lqrADKYLdCxYxqcO7AodEzYY8KnQsWGDArdBI8+/UGe3zm6DwWyMkhOUWs5St3oFGdLVBo7lNIC/Ue9c6mJiCw7LtoIDs5E6aD6vXgCehOxZaSsKMBtrgo4FyzhUNh4UaruYs+Uw3qsKWK7Tn3sPA36JAiyzMTh2OStMMMF77y1ap5TBgQUWYNt/PRIUe1Y+x4QOCtwAOwGw995bDHMpg01aTbAyG9dNZGVOt+69XSCrdYMAnwIrQcSGVgd2gf0LaFXgLrCxodWAfWBjQqsAl6eLq5qlx3m7eCyncSJ6hZOVdzGna6myLGFm5VHq4TrrDEsInozULVmbzea+K2T1PRVgwK6rogi4E6xo1EFD80N+9ylVhjQDQA4PAM6D+KXWgdt8Pu+zZwmL4Zyj5F9Iu8wBc8AcMAfMAXPAHDAHzAFzwBwwB8wBc8AcaHbgF/TfvAgAPh+ZAAAAAElFTkSuQmCC);
                background-position: 0px 0px;
                background-size: 100%;    
                background-repeat:no-repeat;
                outline: none;
            }
        }
        .scroll {
            @extend .flex;
            height: 60%;
            background-color: #fff;
            .menu {
                height: 100%;
                overflow: auto;
                padding-right:10px;
                ul {
                    li {
                        @extend .flex ;
                        @extend .flex-center;
                        @extend .flex-space-between;
                        height:36px;
                        font-size:10px;
                        span {
                            display: inline-block;
                            position: relative;
                        }
                    }
                }
            }
            .main-menu {
                width: 40%;
                background-color: #fcfcfc;
                li {
                    span {
                        opacity: .7;
                    }
                    span:first-child {
                        padding-left:15px;
                    }
                    span:first-child::before {
                        content:'';
                        width:2px;
                        height:100%;
                        background-color:#fcfcfc;
                        display: inline-block;
                        position: absolute;
                        left:0;
                    }
                    span:last-child {
                        color:#666;
                        font-size:8px;
                    }
                }
                li.on {
                    span:first-child::before {
                        background-color:#0080f8;
                    }
                }
            }
            .sub-menu {
                width: 60%;
                padding-left:10px;
                background-color: #fff;
                ul {
                    li {
                        div {
                            @extend .flex;
                            @extend .flex-center;
                            img {
                                width:28px;
                                height:28px;
                                margin-right:10px;
                            }
                        }
                        span {
                            opacity: .7;
                        }
                    }
                    li.on {
                        color:#0080f8;
                        opacity: 1;
                        div {
                            font-weight:700;
                        }
                        span {
                            opacity: 1;
                        }
                        span.count {
                            color:#fff;
                            border-radius: 10px;
                            padding:0 3px;
                            background-color:#0080f8;
                        }
                    }
                }
                
            }
        }
    }
}
</style>
