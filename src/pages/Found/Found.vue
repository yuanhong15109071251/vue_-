<template>
  <div id="discover" v-if="found1">
    <DiscoverHeader />
    <div class="cateListNavWrap">
      <div class="cateListNav">
        <ul class="listNav">
          <li
            v-for="(item,index) in found.data"
            :key="index"
            @click="headerNav(index)"
            :class="{on:index==current}"
          >
            <span>{{item.tabName}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="allList">
      <div class="wrap" v-for="(items,index) in found1" :key="index">
        <div class="content"  v-for="item in items.topics" :key="item.name">
          <div class="li"  v-if="item.style===1">
            <div class="firstList">
              <div class="info-name">
                <img :src="item.avatar" alt />
                <span>{{item.nickname}}</span>
              </div>
              <div class="title">{{item.title}}</div>
              <div class="img">
                <img
                  :src="item.picUrl"
                   width="100%"
                        height="100%"
                  alt
                />
              </div>
              <div class="views">
                <i class="iconfont icon-weibiaoti2fuzhi15"></i>
                <span>4027人看过</span>
              </div>
            </div>
          </div>
          <div class="li"  v-if="item.style===2 ">
            <div class="m-tpls m-tpls-picker">
              <a href="javascript:;" class="u-flexbox">
                <div class="info">
                  <div class="u-name">
                    <span class="ava">
                      <img
                        src="https://yanxuan.nosdn.127.net/8720248cc1f62d279f004b8a5124f811.jpg?imageView&amp;quality=65&amp;thumbnail=56y56"
                        alt
                        width="100%"
                        height="100%"
                      />
                    </span>
                    <span>{{item.nickname}}</span>
                  </div>
                  <div class="title">{{item.title}}</div>
                  <div class="desc">{{item.desc}}</div>
                  <div class="u-rcount">
                    <i class="iconfont icon-weibiaoti2fuzhi15"></i>
                    <span>7937人看过</span>
                  </div>
                </div>
                <div class="u-pic">
                  <img
                   :src="item.picUrl"
                    alt
                    width="100%"
                    height="100%"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { reqFound } from "../../api";
import { mapState } from "vuex";
export default {
  data() {
    return {
      foundList: [],
      foundList1: [],
      current: ""
    };
  },
  computed: {
    ...mapState(["found", "found1"])
  },
  methods: {
    headerNav(index) {
      console.log(111);
      this.current = index;
    }
  },
  mounted() {
    this.$store.dispatch("getFound");
    this.$store.dispatch("getFound1");
    // this.foundList = result.data
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
#discover {
  background: #f4f4f4;

  .cateListNavWrap {
    z-index: 5;
    position: fixed;
    top: 1rem;
    left: 0;

    .cateListNav {
      width: 85%;
      position: relative;
      flex-flow: row nowrap;
      flex-shrink: 0;
      background: #fff;

      .listNav {
        display: flex;
        overflow: hidden;
        width: 12rem;

        li {
          &.on {
            border-bottom: 0.1rem solid #f40;
          }
        }

        span {
          display: inline-block;
          padding: 0 0.21333rem;
          line-height: 0.8rem;
          font-size: 0.37333rem;
          color: #333;
          text-align: center;
          // &.on
          // border-bottom 0.1rem solid #f40
        }
      }

      .moreCate {
        // display: none
        // visibility: hidden;
        // z-index: -1;
        z-index: 3;
        position: absolute;
        top: 45px;
        background: #fff;
        margin-top: -46px;
        height: 372px;

        .PS {
          height: 0.8rem;
          line-height: 0.8rem;
          font-size: 0.37333rem;

          i {
            position: absolute;
            right: 60px;
            top: 10px;
            font-size: 0.5rem;
          }

          .pinDao {
            height: 0.8rem;
            line-height: 0.8rem;
            padding-left: 0.2rem;
            font-size: 0.37333rem;
          }
        }

        .pinDaoList {
          // float left
          height: 322px;
          width: 750px;
          // white-space normal
          overflow: hidden;

          div {
            width: 2rem;
            font-size: 24px;
            height: 0.74667rem;
            line-height: 0.74667rem;
            text-align: center;
            float: left;
            margin-bottom: 0.53333rem;
            margin-left: 0.4rem;
            background: #FAFAFA;
            border: 1px solid #CCC;
            border-radius: 0.05333rem;
          }
        }
      }
    }
  }

  .allList {
    background: #f4f4f4;
    position: relative;
    top: 2rem;
    left: 0;

    .wrap {
      // height 920px
      padding: 0.3rem 0 0.2rem 0;

      .content {
        padding: 0.36rem 0.3rem;
        height: 100%;
        width: 100%;
        background: #fff;
        margin: 0.2rem 0;
        box-sizing: border-box;

        .li{
          border-bottom: 10px solid #f4f4f4;
          height: 100%;
          width: 100%;

          .firstList {
            .info-name {
              display: flex;
              font-size: 0.28rem;
              color: #333;
              line-height: 0.36rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 0.24rem;

              img {
                width: 0.56rem;
                height: 0.56rem;
                overflow: hidden;
                border-radius: 50%;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                border: 0.01rem solid #d9d9d9;
                margin-right: 0.12rem;
                vertical-align: middle;
              }

              span {
                display: inline-block;
                vertical-align: middle;
                font-size: 24px;
                vertical-align: middle;
                line-height: 42px;
              }
            }

            .title {
              font-size: 35px;
              color: #333;
              line-height: 0.52rem;
              margin: -0.08rem 0 0.16rem 0;
              overflow: hidden;
              text-overflow: ellipsis;
              font-family: PingFangSC-Regular;
            }

            .img {
              width: 100%;
              // height: 3.76rem;
              position: relative;
              margin-bottom: 0.2rem;
              overflow: hidden;
              border-radius: 0.08rem;
            }

            .views {
              color: #000;
              line-height: 0.32rem;
              margin-top: 0.18rem;
              font-size: 26px;
              font-weight: 700;
              margin-bottom: 17px;

              i {
                font-size: 27px;
                margin-right: 10px;
                display: inline-block;
              }
            }
          }

          .m-tpls-picker {
            position: relative;
            padding: 0.32rem 0.3rem;
            width: 100%;
            background: #fff;
            margin: 0.2rem 0;
            box-sizing: border-box;

            .u-flexbox {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;

              .info {
                width: 4rem;

                .u-name {
                  font-size: 0.28rem;
                  color: #333;
                  line-height: 0.36rem;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: flex;

                  span {
                    font-size: 28px;
                    line-height: 42px;
                  }

                  .ava {
                    width: 0.56rem;
                    height: 0.56rem;
                    overflow: hidden;
                    border-radius: 50%;
                    box-sizing: border-box;
                    border: 0.01rem solid #d9d9d9;
                    margin-right: 0.12rem;

                    img {
                      border-radius: 50%;
                      height: 40px;
                      width: 40px;
                    }
                  }
                }
              }

              .u-pic {
                width: 2.72rem;
                height: 2.72rem;
                position: relative;
                overflow: hidden;
                border-radius: 0.08rem;
                background: #f0f0f0;
              }
            }

            .title {
              width: 100%;
              font-size: 34px;
              color: #333;
              line-height: 0.44rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              padding-top: 0.32rem;
              font-family: PingFangSC-Regular;
            }

            .desc {
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 28px;
              line-height: 0.4rem;
              padding-top: 0.08rem;
              color: #7f7f7f;
            }

            .u-rcount {
              font-size: 28px;
              color: #999;
              line-height: 0.32rem;
              margin-top: 0.18rem;

              i {
                font-size: 28px;
              }
            }
          }
        }
      }
    }
  }
}
</style>