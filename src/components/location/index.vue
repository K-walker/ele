<template>
    <transition>
    <div class="location">
        <header>
            <div class="goback-btn" @click="goBack">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
            </div>
            <h1>{{title}}</h1>
        </header>
    
        <div v-show="mode == 0" class="container">
            <div class="input-bar">
                <div class="city-select" @click="selectCity">
                    <span>{{currentCity.name || '选择城市'}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2KCWC_0"><path fill="#333" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
                </div>
                <div class="address-input">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="index-HhHdo_0"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
                    <input type="text" v-model="query.keyword" placeholder="请输入地址" @input="onSearchCity">
                </div>
            </div>
        </div>
        <!-- 选择城市 -->
        <div v-show="mode == 1" class="container">
            <div class="input-bar city">
                <div class="city-search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="index-HhHdo_0"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
                    <input type="text" v-model="city" placeholder="输入城市名或者拼音" @input="onInputCity">
                </div>
            </div>
            <mt-index-list 
                v-show="resultList.length == 0">
                <mt-index-section 
                    v-for="item in cityData.cityList" 
                    :key="item.idx" 
                    :index="item.idx">
                    <mt-cell v-for="city in item.cities" @click="setLocation(city)"  :key="city.id" :title="city.name"></mt-cell>
                </mt-index-section>
            </mt-index-list>
        </div>
        <ul  class="result-list" v-show="resultList.length > 0">
            <li v-for="item in resultList" 
                @click="setCity(item)"
                :key="item.id" 
                :class="[mode == 0 ? 'search':'']">
                <p>{{item.name}}</p>
                <span v-if="item.address">{{item.address}}</span>
            </li>
        </ul>
    </div>
    </transition>
</template>
  
<script>
export default {
    name: 'Location',
    data () {
        return {
            mode:0,
            title:'选择收货地址',
            cityData:{
                alphabet:[],
                cityList:[]
            },
            currentCity:{
                name:null
            },
            allCities:[],
            resultList:[],
            city:'',
            query:{
                keyword:'',
                offset:0 ,
                limit:20
            }
        }
    },
    created () {
        this.$http.get('/ele/poi/city_list').then(result => {
            this.cityData = result.data;
            this.cityData.cityList.forEach( item => {
                this.allCities = this.allCities.concat(item.cities);
            })
        })
    },
    methods : {
        selectCity () {
            this.mode = 1 ;
            this.title = '选择城市';
            this.resultList = [] ;
        },
        // 本地检索城市
        onInputCity () {
            if(this.city == '') {
                this.resultList = [] ;
                return ;
            }
            clearTimeout(this.timeId);
            this.timeId = setTimeout(function () {
                this.resultList = this.allCities.filter( item => {
                    return item.pinyin.indexOf(this.city) != -1 || item.name.indexOf(this.city) != -1 ;
                })
            }.bind(this) , 150)
        },
        // 网络查询: 根据关键词，查询城市
        onSearchCity () {
            if(this.query.keyword == '') {
                this.resultList = [] ;
                return ;
            }
            clearTimeout(this.timeId);
            this.timeId = setTimeout(function () {
               this.requestSearch();
            }.bind(this) , 150)
        },
        requestSearch () {
            this.$http.get('/ele/poi/search_nearby' , {
                params:this.query
            }).then( result => {
                this.resultList = result.data;
            }).catch (e => {
                console.log(e);
            })
        },
        // 设置城市
        setCity (item) {
            if(!this.query.hasOwnProperty('latitude')) {
                this.$set(this.query , 'latitude' , '');
            }
            if(!this.query.hasOwnProperty('longitude')) {
                this.$set(this.query , 'longitude' , '');
            }
            this.currentCity = item;
            this.query.latitude = item.latitude ;
            this.query.longitude = item.longitude ;
            this.$store.commit('setLocation' , this.currentCity);
            this.goBack();
        },
        // 设置位置
        setLocation (item) {
            this.currentCity = item;
        },
        goBack () {
            if(this.mode == 1) {
                this.mode = 0 ;
                this.title = '选择收货地址';
                this.resultList = [] ;
            } else {
               this.$router.go(-1);
            }
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
.flex-content-center {
	-webkit-box-pack:center;
  	-webkit-justify-content:center;
  	justify-content:center;
}

.location {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f5f5f5;
    position: relative;
    header {
        height:38px;
        background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
        background-image: -webkit-linear-gradient(left,#0af,#0085ff);
        background-image: linear-gradient(90deg,#0af,#0085ff);
        position: relative;
        .goback-btn {
            width: 38px;
            height: 20px;
            position: absolute;
            text-align: center;
            top: 10px;
            img {
                width: 11px;
            }
        }
        h1 {
            line-height: 38px;
            color: #fff;
            text-align: center;
            font-size:14px;
        }
    }
    .container {
        height: calc(100% - 38px);
    }
    .input-bar {
        padding:6px 10px;
        @extend .flex;
        @extend .flex-center;
        background-color:#fff;
        .city-select {
            width:60px;
            @extend .flex;
            @extend .flex-center;
            span {
                width: 40px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow:ellipsis;
            }
            svg {
                width: 5px;
                height: 5px;
            }
        }
        .address-input {
            -webkit-box-flex: 1;
            flex: 1;
            @extend .flex;
            @extend .flex-center;
            background-color: #f2f2f2;
            padding:0 5px;
            svg {
                width:10px;
                height:10px;
            }
            input {
                -webkit-box-flex: 1;
                flex: 1;
                border: none;
                outline: none;
                background-color: #f2f2f2;
                padding: 5px;
            }
        }
        .city-search {
            @extend .flex;
            @extend .flex-center;
            border-radius: 20px;
            background-color:#fff;
            width:85%;
            padding:0 10px;
            svg {
                width: 12px;
                height: 12px;
            }
            input {
                -webkit-box-flex: 1;
                flex: 1;
                border: none;
                outline: none;
                padding: 5px;
            }
        }
    }
    .city {
        @extend .flex-content-center;
        background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
        background-image: -webkit-linear-gradient(left,#0af,#0085ff);
        background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    .result-list {
        background-color: #fff;
        overflow: auto;
        position: absolute;
        left: 0;
        width: 100%;
        top: 72px;
        bottom: 0;
        li {
            padding:10px;
            border-bottom:1px solid #ddd;
            font-size:10px;
        }
        li.search {
            padding: 5px 10px;
            p {
                font-weight: 700;
            }
            span {
                margin-top:3px;
                display: block;
                font-size:8px;
            }
        }
    }
}
</style>

<style lang="scss">
.location {
    .container {
        .mint-indexlist {
            height: calc(100% - 34px); 
        }
        .mint-indexlist-content {
            height: 100%;
        }
    }
}
</style>
  