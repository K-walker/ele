<template>
    <div class="kk-index-list">
        <div class="kk-index-list-inner">
            <ul class="index-list-group" 
                v-for="item in data.cityList"
                :id="item.idx"
                :key="item.idx">
                <li class="index-item-header">{{item.idx}}</li>
                <li class="index-item-cell" 
                    v-for="city in item.cities"
                    :key="city.id">{{city.name}}</li>
            </ul>
        </div>
        <div class="index-list-nav">
            <div>
                <span v-for="letter in data.alphabet" 
                    @click="onFastPosition(letter)"
                    :key="letter"><a :href="'#'+letter">{{letter}}</a></span>
            </div>
        </div>
        <span class="index-nav-tip" 
            v-show="currentLetter">
            {{currentLetter}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'IndexList',
    props:['data'],
    data () {
        return {
            currentLetter:null,
            timeId:0
        }
    },
    mounted() {
        this.$nextTick(function () {
            
        })
    },
    methods : {
        onFastPosition (letter) {
            this.currentLetter = letter;
            clearTimeout(this.timeId);
            this.timeId = setTimeout(function () {
                this.currentLetter = null ;
            }.bind(this) , 1000)
        }
    }
}
</script>

<style scoped lang="scss">
.kk-index-list {
    position: relative;
    height: 100%;
    background-color:#fff;
    .kk-index-list-inner {
        height: 100%;
        overflow: auto;
        .index-list-group {
            li {
                padding-left: 10px;
            }
            .index-item-header {
                height: 20px;
                line-height: 20px;
                background-color:#f5f5f5;
            }
            .index-item-cell {
                height: 30px;
                line-height: 30px;
                border-bottom: 1px solid #ddd; /*no*/
            }
        }
    }
    .index-list-nav {
        width: 14px;
        height: 100%;
        right: 0;
        top: 0;
        display: table;
        position: absolute;
        div {
            display:table-cell;
            vertical-align: middle;
            span {
                display: block;
                line-height: 14px;
                text-align:center;
                color: #333;
            }
        }
    }
    .index-nav-tip {
        width: 40px;
        height: 45px;
        border-radius: 4px;
        background-color: rgba(0,0,0,.5);
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        position: absolute;
        left:0;
        right:0;
        margin: 0 auto;
        top: calc(50% - 22.5px);
    }
}

</style>
