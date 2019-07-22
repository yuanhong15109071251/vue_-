<template>
  <div id="search">
    <div  class="iptAndIcon">
      <input type="text" placeholder="搜索商品">
      <i class="iconfont icon-sousuo"></i>
      <span @click="$router.back()">取消</span>
    </div>
    <div>
      <div>
        <h3>热门搜索</h3>
      </div>
      <div class="navList">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goTo() {
      console.log(111111);
      this.$router.back();
    }
  }
};
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
  

</style>