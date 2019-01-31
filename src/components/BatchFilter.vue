<template>
  <div class="batch-filter">
      <!--filter bar -->
      <div class="filter-header">
        <div 
            v-for="item in filterBar"
            :key="item.id"
            :class='["shop-filter-item", currentFilterTabId == item.id ? activeCls : ""]'
            @click="onFilterTabClick(item)">
          <span>{{item.name}}</span>
          <svg v-if="item.id == 0" viewBox="0 0 72 32" class="dropdown-icon">
            <path d="M36 32l36-32h-72z"></path>
          </svg>
        </div>
      </div>
      <!-- filter list -->
      <div class="filter-main" v-show="showFilterList">
        <!-- 综合排序列表 -->
        <div class="filter-sort" v-show="currentFilterTabId == 0">
          <ul>
            <li 
                v-for="sort in sortData" 
                :key="sort.id" 
                :class="[selectedSortId == sort.id ? 'selected':'']"
                @click="onSortSelect(sort)">
              <span>{{sort.name}}</span>
              <img  v-show="sort.id == selectedSortId" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=">
            </li>
          </ul>
        </div>
        <!-- 筛选列表 -->
        <div class="filter-sort" v-show="currentFilterTabId == 3">
          <div class="filter-group">
            <dl v-for="group in sortData" :key="group.group_type">
              <dt>{{group.group_name}}</dt>
              <dd>
                <div v-for="item in group.list" :key="item.id">
                  <img v-if="item.image_hash" :src="getImage(item.image_hash)">
                  <span>{{item.name}}</span>
                </div>
              </dd>
            </dl>
          </div> 
          <div class="filter-buttons">
            <span class="clear" @click="cancel">清空</span>
            <span class="confirm" @click="confirm">确定</span>
          </div>
        </div>
      </div>
      <div class="filter-mask" v-if="show" @click="closeSortModal"></div>
  </div>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'BatchFilter',
  data () {
    return {
      activeCls:'',
      showFilterList:false,
      show:false,
      currentFilterTabId:-1,
      selectedSortId:-1,
      filterBar:[
          {id:0,  name:'综合排序', filterList: [
          {id:1 , name:'综合排序'},
          {id:2 , name:'好评优先'},
          {id:3 , name:'销量最高'},
          {id:4 , name:'起送价最低'},
          {id:5 , name:'配送最快'},
          {id:6 , name:'配送费最低'},
          {id:7 , name:'人均从低到高'},
          {id:8 , name:'人均从高到低'}
        ]},
        {id:1, name:'距离最近'},
        {id:2, name:'品质联盟'},
        {id:3, name:'筛选' , filterList:[
          {
            group_type:1,
            group_name:'商家服务(可多选)',
            list:[
              {id:1 , name:'蜂鸟专送' , image_hash:'b9b45d2f6ff0dbeef3a78ef0e4e90abapng'},
              {id:2 , name:'品牌商家' , image_hash:'67c417ba499b9ef8240b8014a453bf30png'},
              {id:3 , name:'食安保' , image_hash:'2cd444d002a94325c5dff004fb3b9505png'},
              {id:4 , name:'新店' , image_hash:'c93ded991df780906f7471128a226104png'},
              {id:5 , name:'开发票' , image_hash:'3d45668ffc03151826f95b75249bea31png'}
            ]
          },
          {
            group_type:2,
            group_name:'优惠活动(单选)',
            list:[
              {id:1 , name:'新用户优惠'},
              {id:2 , name:'特价商品'},
              {id:3 , name:'下单立减'},
              {id:4 , name:'赠品优惠'},
              {id:5 , name:'下单返红包'},
              {id:6 , name:'进店领红包'}
            ]
          },
          {
            group_type:3,
            group_name:'人均消费',
            list:[
              {id:1 , name:'￥20以下'},
              {id:2 , name:'￥20-￥40'},
              {id:3 , name:'￥40-￥60'},
              {id:4 , name:'￥60-￥80'},
              {id:5 , name:'￥80-￥100'},
              {id:6 , name:'￥100以上'}
            ]
          }
        ]}
      ],
      sortData:[]
    }
  },
  methods:{
    getImage (image_hash) {
      return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/')
    },
    onFilterTabClick (barItem) {
      this.currentFilterTabId = barItem.id ;
      let showMore = barItem.filterList && barItem.filterList.length > 0 ;
      this.activeCls = showMore ? 'open' : 'active' ;
      showMore ?  this.showSortModal(barItem) :  this.filterShop(barItem) ;
    },
    // 显示
    showSortModal (bar) {
      this.sortData = bar.filterList;
      this.showFilterList = true ;
      this.show = true ;
    },
    // 隐藏
    closeSortModal () {
      this.showFilterList = false ;
      this.activeCls = 'active';
      this.show = false ;
    },
    // 过滤商家
    filterShop (bar) {
      this.selectedSortId = -1 ;
      this.showFilterList = false ;
      this.closeSortModal();
      this.$emit('filter' , bar);
    },
    // 综合排序item被选择
    onSortSelect(item) {
      this.selectedSortId = item.id ;
      this.closeSortModal();
      this.$emit('filter' , item);
    },
    cancel () {
      
    },
    confirm () {
      this.closeSortModal()
    }
  }
}
</script>

<style scoped lang="scss">
.flex {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flex;
  display: flex;
}
.batch-filter {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  z-index:999;
  top: 41px;
  background-color: #fff;

  .filter-header {
    @extend .flex ;
    align-items:center;
    -webkit-justify-content:space-around;
    justify-content:space-around;
    border-bottom: 1px solid #ddd;/*no*/
    background-color:#fff;
    position: relative;
    z-index: 2;
    .shop-filter-item.open {
      .dropdown-icon {
          fill: #3190e8;
      }
      span {
          color: #3190e8;
      }
    }
    .shop-filter-item.active {
      span {
          color: #333;
          font-weight:700;
       }
    }
    .shop-filter-item {
      @extend .flex ;
      height: 30px;
      align-items:center;
      position: relative;

      span {
        color: #666;
        font-size: 11px;
      }
      .dropdown-icon {
        width: 5px;
        margin-left: 3px;
        fill:#333;
      } 
    }
  }
  
  .filter-main {
    background-color:#fff;
    position: relative;
    z-index: 2;
    .filter-sort {
      ul {
        padding-top:5px;
        padding-bottom:5px;
        li {
           @extend .flex ;
           align-items:center;
           -webkit-justify-content:space-between;
           justify-content:space-between;
           padding: 10px 15px;
           span {
              font-size:8px;
              color:#666;
           }
           img {
              width: 12px;
              height: 12px;
           }
        }
        li.selected {
          span {color:#3190e8}
        }
      }
      .filter-group {
        padding:0 10px;
        color:#333;
        dl {
          margin:0;
          padding:1em 0 ;/*no*/
          dt {
            margin-bottom:5px;
            color:#666;
          }
          dd {
            margin: 0; 
            @extend .flex ;
            flex-wrap: wrap;
            div {
              @extend .flex;
              align-items:center;
              justify-content:center;
              flex: 0 0 31%;
              height: 28px;
              font-size:10px;
              margin: 2px 1%;
              img {
                width:10px;
                margin-right:3px;
              }
            }
            div.selected {
              background-color:#edf5ff;
              font-weight:700;
            }
          }
        }
      }
      .filter-buttons {
        @extend .flex ;
        align-items:center;
        border-top:1px solid #ededed;/*no*/
        -webkit-justify-content:space-around;
        justify-content:space-around;
        span {
          flex:1;
          -webkit-flex:1;
          -ms-flex:1;
          -webkit-box-flex:1;
          line-height:32px;
          font-size:11px;
          text-align:center;
        }
        span.clear {
          color:#ddd;
        }
        span.confirm {
          color:#fff;
          background-color:#00d762;
        }
      }
    }
  }

  .filter-mask {
      position: fixed;
      width: 100%;
      top: 42px;
      left: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.5);
  }
}

</style>
