<template>
<div>
   <div class="header">
      <i class="iconfont icon-home" @click="goTo('/home')"></i>
      <div class="headerCenter">
        <div v-if="this.$route.path !=='/login'">
          <span class="active">
          <router-link to="/discover/found" replace >发现</router-link>
          </span>
          <span>
            <router-link to="/discover/screening" replace >甄选家</router-link>
          </span>
        </div>
        <div v-else>
            <span>
            <router-link to="/login" replace >网易严选</router-link>
          </span>
        </div>
      </div>
      <div class="headerRight">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-qicheqianlian-"></i>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name:'DiscoverHeader',
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  background #fff
  z-index 5
  position fixed
  top 0
  left 0
  width 100%
  display flex
  justify-content space-around
  height: 1rem;
  // background yellow 
  font-size 38px
  align-items: center;
  .headerCenter
    height 50px
    line-height 50px
    span 
      margin-left 10px
      font-size 40px
      &.active
        color red
      r 
        text-decoration: none;
  i 
    font-size 50px
</style>