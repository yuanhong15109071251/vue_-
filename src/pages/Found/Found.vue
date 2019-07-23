<template>
  <div id="discover">
     <DiscoverHeader/>
    <div class="cateListNavWrap">
      <div class="cateListNav">
        <ul class="listNav">
          <li v-for="(item,index) in found" :key="index" @click="headerNav(index)" :class="{on:index==current}">
            <span >{{item.tabName}}</span>
          </li>
          
        </ul>
      </div>
    </div>
    <div class="allList">
      <div class="wrap">
        <ul class="content">
          <li>
            <div class="firstList">
              <div class="info-name">
                <img
                  src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56"
                  alt
                />
                <span>用户名字</span>
              </div>
              <div class="title">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</div>
              <div class="img">
                <img
                  src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376"
                  alt
                />
              </div>
              <div class="views">
                <i class="iconfont icon-weibiaoti2fuzhi15"></i>
                <span>4027人看过</span>
              </div>
            </div>
          </li>
          <li >
            <div  class="m-tpls m-tpls-picker">
              <a href="javascript:;" class="u-flexbox">
              <div class="info">
                <div class="u-name">
                <span class="ava">
                  <img src="https://yanxuan.nosdn.127.net/8720248cc1f62d279f004b8a5124f811.jpg?imageView&amp;quality=65&amp;thumbnail=56y56" alt="" width="100%" height="100%">
                  </span>
                  <span>网易味央：小周</span>
                  </div><div class="title">一次吃遍8种坚果，零食之王要这样吃才对</div>
                  <div class="desc">鲜粹每日坚果</div>
                  <div class="u-rcount ">
                    <i class="iconfont icon-weibiaoti2fuzhi15"></i>
                    <span>7937人看过</span></div>
                    </div>
                    <div class="u-pic">
                      <img src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&amp;quality=65&amp;thumbnail=272y272" alt="" width="100%" height="100%">
                      </div>
                      </a>
                      </div>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import BScroll from "better-scroll";
import {reqFound} from '../../api'
import {mapState} from 'vuex'
export default {
  data(){
    return{
      style:1,
      foundList:[],
      foundList1:[],
      current:''
    }
  },
  computed:{
    ...mapState(['found'])
    
  },
  methods: {
      headerNav(index){
        console.log(111)
     this.current=index
   },

  },
 mounted() {
   this.$store.dispatch('getFound')
    
    // const result =await reqFound()
    // console.log('result',result.data.data.data)
    // // console.log(result.categoryGroupList)
    // this.foundList= result.data.data.data
    // this.foundList1= result.data.data.data1.topics
    // console.log('result',result.data.data.data1[0].topics)
    new BScroll(".cateListNav", {
      click: true,
      scrollX: true
      // 忽略竖直方向的滚动
      // scrollY: false,
      // eventPassthrough: "vertical"
    });
    //  new BScroll(".content", {
    //   click: true,
    //   // scrollX: true
    //   // 忽略竖直方向的滚动
    //   scrollY: true,
    //   // eventPassthrough: "vertical"
    // })
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #discover
    background: #f4f4f4;
    
    .cateListNavWrap   
      z-index 5
      position fixed 
      top 1rem
      left 0
      .cateListNav
        width 85%
        position relative
        flex-flow: row nowrap;
        flex-shrink: 0;
        background: #fff;
        .listNav
          display flex
          overflow hidden
          width 12rem
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

    .allList
      background: #f4f4f4;
      position relative
      top 2rem
      left 0
      .wrap
        // height 920px
        padding: 0.3rem 0 0.2rem 0;
        .content
          padding: .36rem .3rem;
          height 100%
          width: 100%;
          background: #fff ;
          margin: .2rem 0;
          box-sizing: border-box;
          li
            border-bottom 10px solid #f4f4f4;
            height 100%
            width 100%
            .firstList
              .info-name
                display flex
                font-size: .28rem;
                color: #333;
                line-height: .36rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: .24rem;
                img 
                  width: .56rem;
                  height: .56rem;
                  overflow: hidden;
                  border-radius: 50%;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  border: .01rem solid #d9d9d9;
                  margin-right: .12rem;
                  vertical-align middle
                span 
                  display: inline-block;
                  vertical-align: middle;  
                  font-size 24px
                  vertical-align middle
                  line-height: 42px;
              .title
                font-size: 35px;
                color: #333;
                line-height: .52rem;
                margin: -.08rem 0 .16rem 0;
                overflow: hidden;
                text-overflow: ellipsis;
                font-family: PingFangSC-Regular
              .img
                width: 100%;
                // height: 3.76rem;
                position: relative;
                margin-bottom: .2rem;
                overflow: hidden;
                border-radius: .08rem;
              .views
                color: #000;
                line-height: 0.32rem;
                margin-top: 0.18rem;
                font-size: 26px;
                font-weight: 700;
                margin-bottom: 17px;
                i 
                  font-size 27px
                  margin-right 10px
                  display inline-block
            .m-tpls-picker 
              position: relative;
              padding: .32rem .3rem;
              width: 100%;
              background: #fff;
              margin: .2rem 0;
              box-sizing: border-box;
              .u-flexbox
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .info
                  width: 4rem
                  .u-name
                    font-size: .28rem;
                    color: #333;
                    line-height: .36rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display flex
                    span 
                      font-size 28px
                      line-height 42px
                    .ava
                      width: .56rem;
                      height: .56rem;
                      overflow: hidden;
                      border-radius: 50%;
                      box-sizing: border-box;
                      border: .01rem solid #d9d9d9;
                      margin-right: .12rem;
                      img 
                       border-radius: 50%; 
                       height 40px
                       width  40px
                .u-pic
                  width: 2.72rem;
                  height: 2.72rem;
                  position: relative;
                  overflow: hidden;
                  border-radius: .08rem;
                  background: #f0f0f0;
              .title
                width: 100%;
                font-size 34px
                color: #333;
                line-height: .44rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                padding-top: .32rem;
                font-family: PingFangSC-Regular;
              .desc
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size 28px
                line-height: .4rem;
                padding-top: .08rem;
                color: #7f7f7f;
              .u-rcount
                font-size 28px
                color: #999;
                line-height: .32rem;
                margin-top: .18rem;
                i 
                  font-size 28px


          
                            
                
</style>