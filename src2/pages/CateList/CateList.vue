<template>
  <div id="cateList">
    <div data-v-3bf6d6bb class="header">
      <div data-v-3bf6d6bb class="iptAndIcon" @click="toSearch('/search')">
        <span data-v-3bf6d6bb class="input">搜索商品</span>
        <i data-v-3bf6d6bb class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="wrap">
      <div class="leftList">
        <ul class="leftUl">
          <li v-for="(item,index) in cateList" :key="index"  @click="current=index"  :class="{on:index==current}">{{item.name}}</li>
        </ul>
      </div>
      <div class="rightList">
        <div class="rightHeaderWrap">
          <div class="rightHeaderWrap2">
            <div class="rightHeader" v-if="cateList[current]">
              <img :src="cateList[current].bannerUrl" alt="">
            </div>
            <div class="rightWrap">
              <ul class="rightUl" v-if="cateList[current]">
                <li v-for="(item,index) in cateList[current].subCateList" :key="index">
                  <div class="liItem">
                    <div class="imgDiv">
                      <img :src="item.wapBannerUrl" alt="">
                    </div>
                    <span>{{item.name}}</span>
                  </div>
                </li>
            
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import {reqCateList} from '../../api'
export default {
  data(){
    return{
      current:0,
      cateList:[]
    }
  },
  methods:{
    lisOn(index){
      console.log(111)
        this.current=index
    },
      toSearch(path){
        this.$router.push(path);
              }
  },
 async mounted(){
   const result = await reqCateList()
   console.log('result',result.data.data)
    this.cateList=result.data.data
    new BScroll('.rightHeaderWrap',{
      // click: true,
      // scrollX: true
      // 忽略竖直方向的滚动
      scrollY: true,
      // eventPassthrough: "vertical"
    })
      this.scroll=new BScroll('.leftList',{
      click: true,
      // scrollX: true
      // 忽略竖直方向的滚动
      scrollY: true,
      // stopPropagation:true,
      // eventPassthrough: "vertical"
    })
      // this.scroll.on('scrollEnd',({x,y})=>{
      //   console.log(x,y);
      // })
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#cateList
  position: relative;
  height: 100%;
  // overflow: hidden;
  .header
    position fixed
    width: 90%;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    background: #fff;
    padding: .21333rem .4rem
    border-bottom 1px solid red
    .iptAndIcon
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      height: .74667rem;
      font-size: .37333rem;
      background-color: #ededed;
      // border-radius: .10667rem;
      position relative
      width 100%
      .input
        position absolute
        left 1rem
        top .1rem
      i
        position absolute 
        left .5rem
        top .15rem
        font-size .4rem
  .wrap
    height: 1148px;
    margin-top 80px
    .leftList
      float: left;
      width: 2.16rem;
      height: 99%;
      .leftUl
        width 100%
        font-size 28px
        padding:5px 0 0 0;
        height 100%
        li
          text-align center
          width: 100%;
          height: .66667rem;
          border: none
          margin-top: .53333rem;
          &.on
            color #f40
            border-left 10px solid #f40
    .rightList
      margin-left: 2.16rem;
      padding: .4rem .4rem .28rem;
      height: 1072px;
      overflow: hidden;
      .rightHeaderWrap
        width 528px 
        height 0
        .rightHeaderWrap2
          width 528px 
          height 10px
          .rightHeader
            position: relative;
            width: 100%;
            height: 2.56rem;
            display: table;
            margin-bottom: .42667rem;
            background: center no-repeat #eee;
            background-size: cover;
            border-radius: 4px;
            img 
              width: 100%;
              height: 2.56rem;
          .rightWrap
            width 528px
            height 648px
            .rightUl
              width 528px
              height 648px
              li
                display: inline-block;
                margin-right: .45333rem;
                font-size: 0;
                width: 142px
                vertical-align: top;
                .liItem
                  width 144px
                  height 216px
                  .imgDiv 
                    width: 1.92rem;
                    height: 1.92rem;
                    img 
                      display: block;
                      width: 100%;
                      background: #fff;
                      height: 100%;
                      border-radius 50%
                  span 
                    height: .96rem;
                    font-size: .32rem;
                    color: #333;
                    text-align: center;
                    line-height: .48rem;
                    display: block;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;



  
</style>