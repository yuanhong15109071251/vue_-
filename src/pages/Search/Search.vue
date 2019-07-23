<template>
  <div id="search">
    <div class="iptAndIcon" >
      <input type="text"  placeholder="搜索商品" v-model="val" @keyup="change"/>
      <i class="iconfont icon-sousuo"></i>
      <span @click="$router.back()">取消</span>
    </div>
    <div class="search2" v-show="!val">
      <div class="hotSou" >
        <span>热门搜索</span>
        <ul v-if=" a.data" class="ulList">
          <li v-for="(item,index) in a.data.hotKeywordVOList" :key="index">  
            {{item.keyword}}
          </li>
        </ul>
      </div>
      <div class="navList" v-if="val">
        <ul >
          <li v-for="(item,index) in listData" :key="index" >{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {reqSearch,reqSearch1} from '../../api'
import {mapState} from 'vuex'

export default {
  data() {
    return {
         val:'',
         listData:[]
    };
  },

  computed: {
     ...mapState(['a'])
  },
  mounted(){
     this.$store.dispatch('getSearch')
    //  this.$store.dispatch('getSearch1')

  },

  methods: {
   async change(){
      const result = await reqSearch1(this.val)
            console.log(result.data)
          if (result.status === 200) {
            this.listData =result.data
            console.log('进来了')
          }
  },
 

    goTo() {
      console.log(111111);
      this.$router.back();
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#search 
  width: 100%;
  position: fixed;
  height: 100rem;
  z-index: 10;
  background: #fff;
  .iptAndIcon
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    height: 0.74667rem;
    font-size: 0.37333rem;
    background-color: #ededed;
    position: relative;
    width: 80%;
    margin-left: 10%;
    top: 20px;
    input
      background: #ededed;
      border: none;
      width: 75%;
      font-size 28px
    i
      position absolute 
      left .5rem
      top .15rem
      font-size .4rem
    span 
      background-color: #fafafa;
      /* float: right; */
      position: absolute;
      top: 0;
      right: 0px;
      height: 56px;
  .search2
    .hotSou
      height: 1.2rem;
      font-size: .37333rem;
      color: #999;
      // display: flex;
      align-items: center;
      span 
        height: 1.2rem;
        font-size: .37333rem;
        color: #999;
        display: flex;
        align-items: center;
      .ulList
        float left
        margin-right: -.4rem;
        margin-bottom: -.42667rem;
        zoom: 1;
        li
          float: left;
          padding: 0 .2rem;
          margin-right: .42667rem;
          margin-bottom: .42667rem;
          line-height: .61333rem;
          border: 1px solid #999;
          border-radius: 4px;
          color: #333;

</style>