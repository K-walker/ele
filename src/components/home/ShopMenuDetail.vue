<template>
  <transition name="sidein">
    <div class="menu-detail">
      <div class="menu-photo">
        <img :src="getImage('1496f860e46fa1ba096495df4655456cjpeg')">
        <span class="close-btn" @click="closePage">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" class="foodpanel-closeIcon_3a1DT"><defs><path id="a" d="M13.132 12l6.47-6.47a.75.75 0 0 0-1.061-1.06l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06L11.01 12l-.072.071.071.071-6.47 6.47a.75.75 0 0 0 1.061 1.06l6.47-6.47 6.47 6.47a.75.75 0 0 0 1.06-1.06l-6.47-6.47.072-.07-.071-.072z"></path></defs> <g fill="none" fill-rule="evenodd"><use fill="#fff" fill-rule="nonzero" xlink:href="#a"></use> <path d="M0 0h24v24H0z"></path></g></svg>
        </span>
      </div>
      <div class="menu-info">
        <h2>{{shopInfo.name}}</h2>
        <p>
          <span>月售{{shopInfo.month_sales}}份</span>
          <span>好评率100%</span>
        </p>
        <div class="price">
          <span>${{shopInfo.specfoods[0].price}}</span>
          <span @click.stop="add">
            <svg style="fill: rgb(35, 149, 255);"><use xlink:href="#cart-minus"></use></svg>
          </span>
        </div>
        <div class="desc">河粉250克,牛肉50克</div>
      </div>
    </div>
  </transition>
</template>

<script>
import {parseImage} from '@/utils/Function'
export default {
  name: 'ShopMenuDetail',
  data () {
    return {
      shopInfo:this.data
    }
  },
  props:{
    data:{
      type:Object,
      default:function () {
        return {}
      }
    }
  }, 
  methods : {
      getImage (image_hash) {
        return parseImage(image_hash , '?imageMogr/format/webp/thumbnail/!375x375r/gravity/Center/crop/375x375/')
      },
      closePage () {
        this.$emit('closepage');
      },
      add () {
        console.log('add')
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
.menu-detail {
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index:999;
  background-color:#fff;
  .menu-photo {
    width:100%;
    height:50%;
    position: relative;
    img {
      width:100%;
      height:100%;
    }
    .close-btn {
      @extend .flex;
      @extend .flex-center;
      -webkit-justify-content:center;
      justify-content:center;
      width:20px;
      height:20px;
      right:10px;
      top:10px;
      position:absolute;
      border-radius:50%;
      background-color:rgba(0,0,0,.2);
      z-index:10;
      svg {
        width:16px;
        height:16px;
      }
    }
  }
  .menu-info {
    padding:10px;
    h2 {
      margin-bottom:5px;
    }
    .price {
      @extend .flex;
      @extend .flex-center;
      @extend .flex-space-between;
      margin:3px 0;
      span {
        font-size:14px;
        color:rgb(255, 83, 57);
        @extend .flex;
        @extend .flex-center;
        svg {
          width:16px;
          height:16px;
        }
      }
    }
    .desc {
      margin-top:10px;
    }
  }
}
.sidein-enter-active , 
.sidein-leave-active {
  transition: top .3s ease;
}
.sidein-enter , .sidein-leave-to {
  top:100%;
}

</style>
