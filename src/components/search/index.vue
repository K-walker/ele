<template>
    <transition name='slide-fade'>
    <div class="search">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0" aria-hidden="true">
            <defs>
                <symbol viewBox="0 0 20 32" id="arrow"><path d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path></symbol>
                <symbol viewBox="0 0 12 12" id="search"><g fill="none" fill-rule="evenodd"><path fill="#F5F5F5" d="M-179-10h375v805h-375z"></path><path fill="#FFF" d="M-179 0h375v22h-375z"></path><text font-family="PingFangSC-Regular, PingFang SC" font-size="11" transform="translate(-179)"><tspan x="179.5" y="16" fill="#333">黄焖鸡</tspan> <tspan x="212.5" y="16" fill="#999">标准份</tspan></text><g><path fill="#FFF" d="M-179-11h375v44h-375z"></path><path fill="#F5F5F5" d="M-167-3h351a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-351a2 2 0 0 1-2-2V-1a2 2 0 0 1 2-2z"></path><path fill="#999" fill-rule="nonzero" d="M11.255 5.338C11.11 2.475 8.787.152 5.924.008A5.632 5.632 0 0 0 .008 5.926c.145 2.845 2.44 5.158 5.284 5.325a5.636 5.636 0 0 0 2.24-.319.507.507 0 1 0-.342-.954 4.622 4.622 0 0 1-1.839.261c-2.327-.137-4.211-2.036-4.33-4.365A4.618 4.618 0 0 1 5.871 1.02c2.344.119 4.251 2.026 4.37 4.37a4.602 4.602 0 0 1-1.275 3.434.62.62 0 0 0 .007.866l2.16 2.16a.507.507 0 1 0 .718-.716L9.956 9.238a5.615 5.615 0 0 0 1.3-3.9z"></path></g></g></symbol>
            </defs>
        </svg>
        <section>
            <svg aria-label="返回按钮" @click="goBack" class="icon-goback" role="button"><use xlink:href="#arrow"></use></svg>
            <form>
                <svg aria-hidden="true" class="icon-search"><use xlink:href="#search"></use></svg>
                <input type="search" @search="onSearch" placeholder="输入商家、商品名称" v-model="query.keywords">
            </form>
            <button @click="requestSearch">搜索</button>
        </section>
        <div class="content">
            <div class="hot" v-show="showHot">
                <h2>热门搜索</h2>
                <div>
                    <span 
                        v-for="hot in hots"
                        @click="clickHot(hot)" 
                        :key="hot.id">{{hot.name}}</span>
                </div>
            </div>
            <div class="main" v-show="!showHot">
                <ul v-if="searchData">
                    <li v-for="recommend in searchData.recommends"
                        @click="itemClick(recommend)"
                        :key="recommend.id">
                        <img :src="getImage(recommend.image_hash,'?imageMogr/format/webp/thumbnail/48x/')">
                        <div class="inner">
                            <p>
                                <span class="name">{{recommend.name}}</span>
                                <span class="tag" 
                                    v-for="act in recommend.activities"
                                    :style="act.style"
                                    :key="act.id">{{act.name}}</span>
                            </p>
                            <span class="rating">评价{{recommend.rating}}</span>
                        </div>
                    </li>
                    <li v-for="item in searchData.list"
                        @click="itemClick(item)"
                        :key="item.id">
                        <svg aria-hidden="true" class="icon-search"><use xlink:href="#search"></use></svg>
                        <div class="inner">
                            <p>{{item.name}}</p>
                        </div>
                    </li>
                </ul>
                <div class="no-result" v-else>
                    <img src="data:image/png;base64,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">
                    <div>
                        <p>附近没有搜索结果</p>
                        <p>换个关键词试试</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
    name: 'Search',
    data () {
        return {
            showHot:true,
            hots:[
                {id:1,name:'粥'},
                {id:2,name:'蛋糕'},
                {id:3,name:'夫妻肺片'},
                {id:4,name:'奶茶'},
                {id:5,name:'面'},
                {id:6,name:'龙虾'},
                {id:7,name:'麻辣烫'},
                {id:8,name:'汉堡'},
                {id:9,name:'炸鸡'},
                {id:10,name:'披萨'}
            ],
            searchData:null,
            query:{
                keywords:'',
                latitude:null,
                longitude:null
            }
        }
    },
    created () {
        if(this.$store.location) {
            this.query.latitude = this.$store.location.latitude;
            this.query.longitude = this.$store.location.longitude;
        }
    },
    methods : {
        clickHot (hot) {
            this.query.keywords = hot.name ;
            this.requestSearch();
        },
        onSearch () {
            if(this.query.keywords == '') {
                this.showHot = true ;
            } else {
                this.requestSearch();
            }
        },
        requestSearch () {
            if(this.query.keywords) {
                this.showHot = false ;
                this.$http.get('/ele/search' , {
                    params:this.query
                }).then( res => {
                    this.searchData = res.data ;
                })
            }
        },
        itemClick (item) {
            this.$router.push({ path: `shop/${item.rst_id}`});
        },
        goBack () {
            this.$router.go(-1);
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
.search {
    height: 100%;
    background-color:#fff;
    section {
        @extend .flex;
        @extend .flex-center;
        padding:5px 0;
        .icon-goback {
            width:30px;
            height:20px;
            padding:3px 3px 3px 0;
            fill:#999;
        }
        form {
            @extend .flex;
            @extend .flex-center;
            -webkit-box-flex: 1;
            flex: 1;
            margin-left:10px;
            border-radius:2px;
            background-color:#f8f8f8;
            .icon-search {
                width:10px;
                height:10px;
                padding-left: 5px;
                fill:#999;
            }
            input {
                width: 100%;
                outline: none;
                border: none;
                padding: 5px 10px;
                background-color: #f8f8f8;
            }
        }
        button {
            width: 60px;
            font-size:13px;
            font-weight: 700;
        }
    }
    .content {
        .hot {
            margin-top:10px;
            padding:0 10px 10px 10px;
            h2 {
                padding:5px 0 ;
                color: #666;
            }
            div {
                margin-top:10px;
                span {
                    color: #666;
                    font-size:12px;
                    display: inline-block;
                    padding:5px 8px;
                    margin-right:10px;
                    margin-bottom:10px;
                    border-radius:2px;
                    background-color:#f8f8f8;
                }
            }
        }
        .main {
            ul {
                li {
                    padding:0 10px;
                    @extend .flex;
                    @extend .flex-center;
                    img {
                        width:20px;
                        height:20px;
                        margin-right:15px;
                    }
                    .icon-search {
                        width:12px;
                        height:12px;
                        fill:#999;
                        padding:4px 4px 4px 0;
                        margin-right:5px;
                    }
                    .inner {
                        @extend .flex;
                        @extend .flex-center;
                        @extend .flex-space-between;
                        -webkit-box-flex: 1;
                        flex:1;
                        min-height:38px;
                        border-bottom:1px solid #ddd;/*no*/
                        p {
                            @extend .flex;
                            @extend .flex-center;
                            -webkit-box-flex: 1;
                            flex:1;
                            font-size:11px;
                            span {
                                color:#333;
                            }
                            span.name {
                                max-width:80%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: inline-block;
                                margin-right:5px;
                            }
                            span.tag {
                                color: #fff;
                                font-size:8px;
                                padding: 1px; /*no*/
                                text-align: center;
                                line-height: 1;
                                background-color: gray;
                                border-radius: 1px;/*no*/
                            }
                        }
                        .rating {
                            width:40px;
                            color:#999;
                            text-align: center;
                        }
                    }
                }
            }
            .no-result {
                @extend .flex;
                @extend .flex-center;
                -webkit-box-pack:center;
                -webkit-justify-content:center;
                justify-content:center;
                padding:10px 0;
                img {
                    width:100px;
                    height:70px;
                }
                div {
                    margin-left:10px;
                }
                p:first-child {
                    font-size:11px;
                    color: #000;
                    margin-bottom: 3px;
                }
                p {
                    color: #666;
                    font-size:8px;
                }
            }
        }
    }
}
</style>