<template>
  <div id="home">
    <div class="wrap">
      <div class="header">
        <span class="logo">网易严选</span>
        <div class="iptAndIcon" @click="toSearch('/search')">
          <span class="input">搜索商品</span>
          <i class="iconfont icon-sousuo"></i>
        </div>
        <button class="btn" @click="goTo('/login')">登录</button>
      </div>
      <div class="cateListNav">
        <ul class="listNav">
          <li v-for="(item,index) in listArr" :key="index"   @click="lisOn(index)"  :class="{on:index==current}">
            <span >{{item.text}}</span>
          </li>
        </ul>
        <div class="select" @click="show=true">
          
          <i class="iconfont icon-xiala"></i>
        </div>
        <div class="mask" v-show="show" @click="show=false"></div>
        <div class="moreCate" v-show="show">
          <div class="PS">
            <span class="pinDao">全部频道</span>
            <i class="iconfont icon-shang" @click="show=false"></i>
          </div>
          <ul class="pinDaoList">
            <li v-for="(item,index) in listArr" :key="index">
            <span class="on" >{{item.text}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <ul class="food_container">
                <img src="./images/1.jpg" />
            </ul>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="small">
      <ul class="small2">
        <div >
          <i class="iconfont icon-tixing"></i>
          <span>网电子荧屏哦爱</span>
        </div>
        <div class="small3">
          <i class="iconfont icon-xingji"></i>
          <span>网易自营品牌</span>
        </div>
        <div>
          <i class="iconfont icon-jiancha"></i>
          <span>网易自营品牌</span>
        </div>
      </ul>
    </div>
    <div class="last">
        <ul class="last1">
          <li v-for="(item,index) in listArr" :key="index">
             <span>{{item.text}}</span>
            <img :src="item.picUrl" alt=""> 
          </li>
          
        </ul>
        <div class="last2">
          <div class="last2Title">-新人专享礼-</div>
          <div class="lastLF">
            <div class="lastLeft">
              <span>新人专享礼包</span>
              <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
            <div class="lastRight">
                <div class="lastRightTop">
                    <span>福利社</span>
                    <span>今日特价</span>
                </div>
                <div class="lastRightBottom">
                  <span>新人拼团</span>
                  <span>1元包邮</span>
            </div>
          </div>
          </div>
        </div>
        <div class="last3">
          <div class="last3Title">
            <span>品牌制造商直供</span>
            <span class="more">更多></span>
          </div>
          <ul class="last3Ul">
            <li>
              <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
            </li>
              <li>
              <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
            </li>
          </ul>
        </div>
    </div>
    <a class="m-wapNewUserEntrance" href="/gift/newWapUserGift">
        <i class="u-icon u-icon-wapNewUserEntry"></i>
    </a>
    <div class="homeFooter">
            <div class="homeFooter1">
              <div class="homeFooter2">
                <span>下载App</span>
                <span>电脑版</span>
              </div>
              <p>
                <span>网易公司版权所有 © 1997- </span>
                <span>2019</span>
                <span>食品经营许可证：JY13301080111719</span>
              </p>
            </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import BScroll from "better-scroll";
import {reqHome} from '../../api'
export default {
  name: "Home",
  data() {
    return {
      current:'',
      listArr:[],
      show: false
    };
  },
  methods: {
     lisOn(index){
      console.log(111)
        this.current=index
    },
    // isShow(){
    //   if(show=!show){

    //   }
    // },
    goTo(path) {
      this.$router.replace(path);
    },
    toSearch(path){
      this.$router.push(path);

    }
  },

 async mounted() {
   
   
    const result =await reqHome()
     console.log('result',result.data.data.kingKongModule.kingKongList[0].text)
     this.listArr=result.data.data.kingKongModule.kingKongList
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
  overflow hidden
  .wrap
    position fixed
    z-index 6
    // top 0
    // left 0
    width 100%
    // height 2.5rem
    .header
      position relative
      z-index 3
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
      // width 100%
      position relative
      flex-flow: row nowrap;
      flex-shrink: 0;
      background: #fff;
      .listNav
        display flex
        overflow hidden
        width 20rem
        li
         &.on
            border-bottom 0.1rem solid #f40
        span 
          display: inline-block;
          padding: 0 .21333rem;
          line-height: .8rem;
          font-size: .37333rem;
          color: #333;
          text-align: center;
          // &.on
          //   border-bottom 0.1rem solid #f40
      .moreCate
        // display: none
        // visibility: hidden;
        // z-index: -1;  
        z-index: 3;
        position: absolute;
        top 45px
        background: #fff;
        margin-top: -46px;
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
          li
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
    margin-top 183px
    width 100%
    height  4.93333rem;
    height 370px
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
    // float left  
    // font-size 10px
    .last1
      // background red
      width: 100%;
      height: 4.96rem;
      padding-bottom: .42667rem;
      float left 
      font-size 38px
      margin-left 30px
      li
        margin 0 19px
        width 100px
        height 210px
        font-size 25px
        float left
        text-align center
        img    
          width 110px
          height 110px
    .last2
      width 100%
      float left
      height 560px
      .last2Title
        height: 1.2rem;
        width: 100%;
        line-height: 1.2rem;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: .42667rem;
      .lastLF
        height 438px
        padding-left: .4rem;
        overflow: hidden;
        .lastLeft
          font-size: 45px;
          text-align: center;
          display: block;
          width: 4.57333rem;
          height: 5.78667rem;
          background: #F9E9CF;
          border-radius: .05333rem;
          margin-right: .05333rem;
          float: left;
          color: #333;
          img 
            height 258px
            width 258px
            margin 30px auto
        .lastRight
          float right
          width 343px
          height 438px
          background-image url(https://yanxuan.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=200x200&quality=75)
          .lastRightTop
            font-size: 45px
            background: #FBE2D3;
            border-radius: 4px;
            width: 4.57333rem;
            height: 2.86667rem;
            margin-bottom: .05333rem;
          .lastRightBottom
            height 215px
            width 343px
            font-size: 45px
            background: #FFECC2;
            // border-radius: 4px;
            // width: 4.57333rem;
            // height: 2.86667rem;
    .last3
      float left
      height 654px
      width 750px
      margin-bottom: .26667rem;
      .last3Title
        font-size 32px
        height 100px
        width: 100%;
        line-height: 100px;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;
        .more
          float right
          margin-right: 54px;
      .last3Ul
        float left
        width 100%
        height 554px
        position: relative;
        overflow: hidden;
        background: #fff;
        margin-bottom: .26667rem;
        padding: 0 .34667rem .34667rem .4rem;
        li  
          float left
          display block
          width 343px
          height 260px
          margin: 0 .05333rem .05333rem 0;


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
  .homeFooter
    height 300px
    float left
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
    .homeFooter1
      font-size 24px
      text-align: center;
      padding: .72rem .26667rem .37333rem;
      // width: 10rem;
      margin-right: auto;
      margin-left: auto;


    
</style>