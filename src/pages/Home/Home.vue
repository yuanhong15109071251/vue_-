<template>
  <div id="home">
    <div class="wrap">
      <div class="header">
        <span class="logo">网易严选</span>
        <div class="iptAndIcon">
          <span class="input">搜索商品</span>
          <i class="iconfont icon-sousuo"></i>
        </div>
        <button class="btn" @click="goTo('/login')">登录</button>
      </div>
      <div class="cateListNav">
        <div class="listNav">
          <div>
            <span class="on">推荐</span>
          </div>
          <div>
            <span>居家生活</span>
          </div>
          <div>
            <span>服饰鞋包</span>
          </div>
          <div>
            <span>没事就睡</span>
          </div>
          <div>
            <span>个护清洁</span>
          </div>
          <div>
            <span>母婴亲子</span>
          </div>
          <div>
            <span>运动旅行</span>
          </div>
          <div>
            <span>数码加点</span>
          </div>
          <div>
            <span>全球特色</span>
          </div>
        </div>
        <div class="select" @click="show=true">
          <i class="iconfont icon-xiala"></i>
        </div>
        <div class="mask" v-show="show"></div>
        <div class="moreCate" v-show="show">
          <div class="PS">
            <span class="pinDao">全部频道</span>
            <i class="iconfont icon-shang" @click="show=false"></i>
          </div>
          <div class="pinDaoList">
            <div class="item">
              <span>推荐</span>
            </div>
            <div>
              <span>居家生活</span>
            </div>
            <div>
              <span>服饰鞋包</span>
            </div>
            <div>
              <span>没事就睡</span>
            </div>
            <div>
              <span>个护清洁</span>
            </div>
            <div>
              <span>母婴亲子</span>
            </div>
            <div>
              <span>运动旅行</span>
            </div>
            <div>
              <span>数码加点</span>
            </div>
            <div>
              <span>全球特色</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/1.jpg" />
            </div>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="small">
      <div class="small2">
        <div>
          <i class="iconfont icon-tixing"></i>
          <span>网易自营品牌</span>
        </div>
        <div class="small3">
          <i class="iconfont icon-xingji"></i>
          <span>网易自营品牌</span>
        </div>
        <div>
          <i class="iconfont icon-jiancha"></i>
          <span>网易自营品牌</span>
        </div>
      </div>
    </div>
    <div class="last">
        <ul class="last1">
          <li>
             <span>真香</span>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""> 
          </li>
          <li>
             <span>真香</span>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""> 
          </li>
          <li>
             <span>真香</span>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""> 
          </li>
          <li>
             <span>真香</span>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""> 
          </li>
          <li>
             <span>真香</span>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""> 
          </li>
          <li>
             <span>真香</span>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""> 
          </li>
          <li>
             <span>真香</span>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""> 
          </li>
          <li>
             <span>真香</span>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""> 
          </li>
        </ul>
         
      
    </div>
    <a class="m-wapNewUserEntrance" href="/gift/newWapUserGift">
        <i class="u-icon u-icon-wapNewUserEntry"></i>
    </a>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import BScroll from "better-scroll";
export default {
  name: "Home",
  data() {
    return {
      show: false
    };
  },
  methods: {
    // isShow(){
    //   if(show=!show){

    //   }
    // },
    goTo(path) {
      this.$router.replace(path);
    }
  },

  mounted() {
    new BScroll(".cateListNav", {
      click: true,
      scrollX: true
      // 忽略竖直方向的滚动
      // scrollY: false,
      // eventPassthrough: "vertical"
    });
    new Swiper(".swiper-container", {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#home 
  background-color: #fff;
  .wrap
    width 100%
    // height 2.5rem
    .header
      display: flex;
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      background: #fff;
      padding: .21333rem .4rem
      .logo
        font-size .4rem
        width: 1.84rem;
        height: .53333rem;
        display: inline-block;
        margin-right: .26667rem;
        background-size: cover;
        background-position: center;
      .iptAndIcon
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        // border-radius: .10667rem;
        position relative
        width 70%
        .input
          position absolute
          left 1rem
          top .1rem
        i
          position absolute 
          left .5rem
          top .15rem
          font-size .4rem
      .btn
        width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: .10667rem;
        margin-left: .21333rem;
        font-size: .32rem;
    .cateListNav
      width 100%
      position relative
      flex-flow: row nowrap;
      flex-shrink: 0;
      background: #fff;
      .listNav
        display flex
        overflow hidden
        width 20rem
        span 
          display: inline-block;
          padding: 0 .21333rem;
          line-height: .8rem;
          font-size: .37333rem;
          color: #333;
          text-align: center;
          &.on
            border-bottom 0.1rem solid #f40
      .moreCate
        // display: none
        // visibility: hidden;
        // z-index: -1;  
        z-index: 3;
        position: relative;
        top -51px
        background: #fff;
        margin-top: -.01333rem;
        height 372px
        .PS  
          height: .8rem;
          line-height: .8rem;
          font-size: .37333rem;
          i 
            position absolute
            right 60px
            top  10px
            font-size: 0.5rem;

          .pinDao
            height: .8rem;
            line-height: .8rem;
            padding-left: .2rem;
            font-size: .37333rem;
        .pinDaoList
          // float left
          height 322px
          width 750px
          // white-space normal
          overflow hidden
          div
            width: 2rem;
            font-size 24px
            height: .74667rem;
            line-height: .74667rem;
            text-align: center;
            float: left;
            margin-bottom: .53333rem;
            margin-left: .4rem;
            background: #FAFAFA;
            border: 1px solid #CCC;
            border-radius: .05333rem;
      .mask
        position: fixed;
        z-index: 2;
        background: rgba(0,0,0,.5);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%; 
      .select
        z-index 2 
        height 33px
        width 160px
        background #fff
        display: flex;
        flex-grow: 0;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        position: absolute;
        top: 45px;
        right: 0;
        i 
          font-size 0.5rem
  .swiper-container
    width 100%
    height  4.93333rem;
    // height 370px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        position relative
        // top -564px
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width: 100%;
              height: auto;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774
  .small
    background: #fff;
    .small2
      width: 100%;
      height: .96rem;
      padding: 0 .4rem;
      display: flex;
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      zoom: 1;
      display flex
      div 
        font-size 24px
      .small3
        margin 0 80px
        // float left
        i
          font-size 24px
  .last
    font-size 10px
    .last1
      // background red
      width: 100%;
      height: 4.96rem;
      padding-bottom: .42667rem;
      float left 
      font-size 38px
      li
        margin 0 30px
        float left
        text-align center
        img    
          width 110px
          height 110px
  .m-wapNewUserEntrance
    position: fixed;
    right: 0;
    bottom: 3.2rem;
    display: block;
    z-index: 10;
    animation: .5s moveLeft;  
    .u-icon-wapNewUserEntry
      display: inline-block;
      vertical-align: middle;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 1.49333rem;
      height: 1.06667rem;

    
</style>