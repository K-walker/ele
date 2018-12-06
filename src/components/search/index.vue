<template>
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
                <input type="search" @search="onSearch" placeholder="输入商家、商品名称" v-model="keywords">
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
                <ul>
                    <li v-for="recommend in search.recommends"
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
                    <li v-for="item in search.list"
                        @click="itemClick(item)"
                        :key="item.id">
                        <svg aria-hidden="true" class="icon-search"><use xlink:href="#search"></use></svg>
                        <div class="inner">
                            <p>{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
    name: 'Search',
    data () {
        return {
            showHot:true,
            keywords:'',
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
            search:{
                recommends:[
                    {
                        id:1,
                        image_hash:'29703a498f85bb456578a62211fe64fajpeg',
                        rst_id:'E16791356703169402584',
                        name:'上海市独家鸡公煲村夫烤鱼龙虾（七宝店）',
                        activities:[
                            {id:10,name:'减',style:{backgroundColor:'rgb(250, 112, 71)'}}
                        ],
                        rating:'4.6'
                    },
                    {
                        id:2,
                        image_hash:'752cab6365c235b3fad3fdc4636c2f8djpeg',
                        rst_id:'E16791356703169402584',
                        name:'香乡村大龙虾（七宝老街店）',
                        activities:[
                            {id:11,name:'减',style:{backgroundColor:'rgb(250, 112, 71)',marginRight:'5px'}},
                            {id:21,name:'蜂鸟',style:{backgroundColor:'rgb(35, 149, 255)'}}
                        ],
                        rating:'4.9'
                    },
                    {
                        id:3,
                        image_hash:'b00016eacb8c7c6eaa0759fab0fe3e83jpeg',
                        rst_id:'E16791356703169402584',
                        name:'东北烧烤龙虾',
                        activities:[
                            {id:31,name:'减',style:{backgroundColor:'rgb(250, 112, 71)'}}
                        ],
                        rating:'4.6'
                    },
                    {
                        id:4,
                        image_hash:'1426095bd32816d38f92eb8325384327jpeg',
                        rst_id:'E16791356703169402584',
                        name:'鸡公煲烤鱼龙虾（航新路）',
                        activities:[
                            {id:41,name:'减',style:{backgroundColor:'rgb(250, 112, 71)'}}
                        ],
                        rating:'4.4'
                    }
                ],
                list:[
                    {id:101,name:'龙虾',rst_id:'E16791356703169402584',},
                    {id:201,name:'龙虾尾',rst_id:'E16791356703169402584',},
                    {id:301,name:'龙虾先生',rst_id:'E16791356703169402584',},
                    {id:401,name:'龙虾风暴',rst_id:'E16791356703169402584',}
                ]
            }
        }
    },
    methods : {
        clickHot (hot) {
            this.keywords = hot.name ;
            this.showHot = false ;
        },
        onSearch () {
            if(this.keywords == '') {
                this.showHot = true ;
            } else {
                this.requestSearch();
            }
        },
        requestSearch () {
            if(this.keywords) {
                this.showHot = false ;
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
        }
    }
}
</style>