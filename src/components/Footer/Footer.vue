<template>
<div id="footerNav">
  <div class="footerNav">
     <a href="javascript:;" :class="{on:$route.path==='/home'}" @click="goTo('/home')">
       <i class="iconfont icon-home"></i>
       <span>首页</span>
     </a>
      <a href="javascript:;" :class="{on:$route.path==='/cateList'}"  @click="goTo('/cateList')">
       <i class="iconfont icon-leimupinleifenleileibie2"></i>
       <span>分类</span>
     </a>
      <a href="javascript:;" :class="{on:$route.path==='/discover/found'}"   @click="goTo('/discover/found')">
       <i class="iconfont icon-weibiaoti2fuzhi15"></i>
       <span>识物</span>
     </a>
      <a href="javascript:;" :class="{on:$route.path==='/shoppingCart'}"  @click="goTo('/shoppingCart')">
       <i class="iconfont icon-qicheqianlian-"></i>
       <span >购物车</span>
     </a>
      <a href="javascript:;" :class="{on:$route.path==='/login'}"  @click="goTo('/login')">
       <i class="iconfont icon-geren"></i>
       <span>个人</span>
     </a>
  </div>
</div>
</template>
<script>
export default {
  name:'Footer',
  data(){
    return {
      
    }
  },
  methods:{
    goTo(path){
       this.$router.replace(path)
    }

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footerNav
    background #ffffff
    position: fixed;
    z-index: 5;
    left: 0;
    bottom: 0;
    width: 100%;
    .footerNav
      display: flex;
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      justify-content: space-around;
      position: relative;
      z-index: 6;
      height 1.30667rem;
      left: 0;
      bottom: 0;
      width: 100%;
      a
        position: relative;
        text-align: center;
        &.on
         color #f40
        span 
          display: block;
          margin-bottom: 0.333rem;
          font-size: 0.32rem;
          line-height: 1;
        i 
          font-size: 0.4rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: .53333rem 6.53333rem;
          margin-bottom -.3rem
          width: .53333rem;
          height: .53333rem;
          background-position: 0 -2.66667rem;
            
</style>