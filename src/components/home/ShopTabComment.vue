<template>
    <div class="comments">
        <div class="rating">
            <div class="total-rating">
                4.6
            </div>
            <div class="rating-block rating-rst">
                <p>商家评分</p>
                <div class="rating-img">
                    <div class="rating-gray">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
                    </div>
                    <div class="rating-actived">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=">
                    </div>
                </div>
            </div>
            <div class="rating-block">
                <p>味道</p>
                <span>4.5</span>
            </div>
            <div class="rating-block">
                <p>包装</p>
                <span>4.6</span>
            </div>
            <div class="rating-block">
                <p>配送</p>
                <span>4.6</span>
            </div>
        </div>
        <div class="comments-list">
            <div class="filter-tags">
                <span class="all">全部 1488</span>
                <span class="satisfied">满意 1365</span>
                <span class="unsatisfied">不满意 50</span>
                <span class="satisfied">有图 20</span>
                <span class="satisfied">味道好 76</span>
                <span class="unsatisfied">不好吃 28</span>
            </div>
            <ul>
                <li v-for="item in comments" :key="item.id">
                    <div class="avatar">
                        <img :src="getImage(item.avatar)">
                    </div>
                    <div class="main">
                        <div class="uname">
                            <span>{{item.username}}</span>
                            <span>{{item.rated_at}}</span>
                        </div>
                        <div class="content">{{item.rating_text}}</div>
                        <div v-if="item.reply" class="reply">
                            <p>商家回复:{{item.reply.content}}</p>
                        </div>
                        <div class="photos" v-if="item.rated_images">
                            <div class="photo-scroll">
                                <div class="photo-item" v-for="img in item.rated_images" :key="img">
                                    <img :src="getImage(img)">
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
    name: 'ShopTabComment',
    data () {
        return {
            comments:[
                {
                    id:1,
                    avatar:'a0a022815355d960c028588bbe722467jpeg',
                    rating_text:'味道还可以',
                    username:'L******q',
                    rated_at:'2018-12-03',
                    reply:{
                        content:'亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！',
                        created_at:'2018-12-02 10:44:02'
                    },
                    rated_images:['3d12fe7e8b1221e67bcf580bee00eb71jpeg']
                },
                {
                    id:2,
                    avatar:'a0a022815355d960c028588bbe722467jpeg',
                    rating_text:'味道还可以',
                    username:'L******q',
                    rated_at:'2018-12-03'
                },
                {
                    id:3,
                    avatar:'a0a022815355d960c028588bbe722467jpeg',
                    rating_text:'味道还可以',
                    username:'L******q',
                    rated_at:'2018-12-03',
                    reply:{
                        content:'亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！',
                        created_at:'2018-12-02 10:44:02'
                    },
                    rated_images:['3d12fe7e8b1221e67bcf580bee00eb71jpeg']
                },
                {
                    id:4,
                    avatar:'a0a022815355d960c028588bbe722467jpeg',
                    rating_text:'味道还可以',
                    username:'L******q',
                    rated_at:'2018-12-03',
                    reply:{
                        content:'亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！',
                        created_at:'2018-12-02 10:44:02'
                    },
                    rated_images:['3d12fe7e8b1221e67bcf580bee00eb71jpeg']
                },
            ]
        }
    },
    methods : {
        getImage (image_hash) {
            return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/')
        }
    }
}
</script>

<style scoped lang="scss">
.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.flex-align-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
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
.comments {
    background-color: #f5f5f5;
    .rating {
        @extend .flex;
        @extend .flex-align-center;
        @extend .flex-space-around;
        color:#666;
        margin-bottom:10px;
        background-color: #fff;
        .total-rating {
            width: 50px;
            text-align: center;;
            color: #ff6000;
            font-size: 30px;
        }
        .rating-block {
            margin: 15px 0;
            span {
                display: block;
                padding:2px 0;
                font-size:16px;
            }
        }
        .rating-block:last-child {
            width: 70px;
            border-left: 1px solid #ddd;
            text-align: center;
        }
        .rating-rst {
            .rating-img {
                position: relative;
                .rating-gray {
                    margin-top: 5px;
                }
                .rating-actived {
                    width: 90%;
                    top: 0;
                    left: 0;
                    position: absolute;
                    overflow: hidden;
                }
            }
        }
    }
    .comments-list {
        background-color: #fff;
        .filter-tags {
            padding: 5px 10px;
            span {
                display: inline-block;
                padding: 5px 8px;
                border-radius:2px;
                margin-right:5px;
                margin-bottom:5px;
            }
            span.all {
                color: #fff;
                background-color:#0097ff;
            }
            span.satisfied {
                color: #6d7885;
                background-color: #ebf5ff;
            }
            span.unsatisfied {
                color: #aaa;
                background-color: #f5f5f5;
            }
        }
        ul {
            li {
                @extend .flex;
                padding:10px;
                .avatar {
                    width:24px;
                    height:24px;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                .main {
                    -webkit-box-flex: 1;
                    flex: 1;
                    margin-left: 10px;
                    .uname {
                        @extend .flex;
                        @extend .flex-space-between;
                        margin-bottom:5px;
                    }
                    .content {
                        padding: 5px 0 ;
                        font-size: 12px;
                        margin-bottom: 5px;
                    }
                    .reply {
                        position: relative;
                        margin-bottom: 8px;
                        p {
                            background-color:#f3f3f3;
                            padding:7px;
                            color: #333;
                            font-size:10px;
                            border-radius:4px;
                        }
                    }
                    .reply::after {
                        content:'';
                        position: absolute;
                        display: inline-block;
                        border: 6px solid transparent;
                        border-bottom-color: #f3f3f3;
                        top: -12px;
                        left: 12px;
                    }
                    .photos {
                        padding-bottom:10px;
                        .photo-scroll {
                            .photo-item {
                                width: 80px;
                                height:80px;
                                img {
                                    width: 100%;
                                    height: 100%;
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
      