<template>
  <div id="search">
     <div class="header">
        <i class="iconfont icon-sousuo" ></i>
        <input type="text" placeholder="请输入搜索内容">
        <span @click="back">取消</span>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    // back(){
    //   this.$router.back(-1)
    // }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 #search
  width: 100%;
  position: fixed;
  height: 100rem;
  z-index: 10;
  background: gray
  .header
    background #fff
 
</style>