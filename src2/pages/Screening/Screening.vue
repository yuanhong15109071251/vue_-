<template>
  <div id="screening">
    <DiscoverHeader />
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371" alt="">
        </div>
        <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/2dde0ddaa2b9033730d282793a0cc04c.jpg?imageView&quality=75&thumbnail=670x371" alt="">
           </div>
        <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/2dde0ddaa2b9033730d282793a0cc04c.jpg?imageView&quality=75&thumbnail=670x371" alt="">
           </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
  
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#screening 
  .swiper-container 
    margin-top: 1.5rem;
    background-color: #fff;
    text-align: center;
    height: 5.6rem;
    margin-bottom: 0.26667rem;
    position relative
    
  

</style>