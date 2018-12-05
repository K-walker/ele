<template>
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
</template>

<script>
import Header from '@/components/Header';
import { parseImage } from '@/utils/Function'
export default {
  name: 'Food',
  components:{Header},
  data () {
    return {
        show:false,
        // navTabs:[],
        // activeTabId:0,
        categories:[],
        mainMenuId:0,
        subMenuId:0,
        subMenus:[]
    }
  },
  created () {
      this.$http.get('/api/category').then( result => {
        this.categories = result.data ;
        this.mainMenuId = this.categories[1].id ;

        this.subMenus = this.categories[1].sub_categories;
        this.subMenuId = this.subMenus[0].id;
        
        // this.navTabs = this.categories[1].sub_categories;
        // this.activeTabId = this.navTabs[0].id;
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
.food {
    nav {
        @extend .flex;
        background-image:-webkit-linear-gradient(90deg,#0af,#0085ff);
        background-image:linear-gradient(90deg,#0af,#0085ff);
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
    .filter {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-color: rgba(0,0,0,.5);
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
