<template>
  <div id="login">
      <DiscoverHeader />
      <div class="login1" v-if="loginWay===1">
        <div class="login1Top" >
            <div class="img">
              <img src="Http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="mbS">
              <div class="phone" @click="loginWay=2">
                  <i class="iconfont icon-44"></i>
                  <span >手机号码登录</span>  
              </div>
              <div class="email" @click="loginWay=3 ">
                  <i class="iconfont icon-youxiang"></i>
                  <span>邮箱登录</span>  
              </div>
              <div class="kuai">
                <span>手机号码快捷注册</span>
                <i class="iconfont icon-arrow"></i>
              </div>
            </div>
        </div>
        <div class="login1Bottom" >
          <div class="weiXin">
            <i class="iconfont icon-weixin"></i>
            <span >微信</span>
          </div>
          <div class="QQ">
            <i class="iconfont icon-qq"></i>
            <span>QQ</span>
          </div>
          <div class="weiBo">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
<!-- 手机号登录 -->
      <div class="phoneLogin" v-else-if="loginWay===2">
        <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
        </div>
        <form class="input">
          <input type="text" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="{required: true,phone: true }"/>
          <span v-show="phone" @click="phone=''">x</span>
          <div  style="color: red; font-size:28px" v-show="errors.has('phone')">{{  errors.first('phone') }}</div>
          <hr>
          <br />
          <input type="text" placeholder="请输入短信验证码"  v-model="msg" name="msg" v-validate="'required|length:4'"/>
          <button>获取验证码</button>
          <div  style="color: red; font-size:28px" v-show="errors.has('msg')">{{  errors.first('msg') }}</div>
          <hr>
        </form>
        <div class="middle" >
          <dir class="question">
            <span>遇到问题？</span>
            <span class="span1">使用短信验证码登录</span>
          </dir>
          <div class="phone">
            <i class="iconfont icon-44"></i>
            <span @click="phoneLogin">登录</span>
          </div>
          <div class="email" @click="loginWay=1">
            <i class="iconfont icon-youxiang"></i>
            <span>其他方式登录</span>
          </div>
        </div>
        <div class="footer">
          <span>注册账号</span>
          <i class="iconfont icon-arrow"></i>
        </div>
      </div>
<!-- 邮箱登录 -->
      <div class="emailLogin" v-else>
           <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
        </div>
        <form class="input">
          <input type="text" placeholder="请输入邮箱"   v-model="email" v-validate="'required|email'" name="email"/>
           <i v-show="email" class="iconfont icon-chazishanchudaibiankuang" @click="email=''"></i>
            <div style="color: red;font-size:28px" v-show="errors.has('email')">{{  errors.first('email') }}</div>
          <hr>
          <br />
          <input  placeholder="请输入密码" type="password"  v-model="password" v-validate="'required|min:6'" name="pwd"/>
          <i v-show="password" class="iconfont icon-chazishanchudaibiankuang" @click="password=''"></i>
            <div style="color: red;font-size:28px" v-show="errors.has('pwd')">{{  errors.first('pwd') }}</div>
          <hr>
        </form>
        <div class="middle">
          <dir class="question">
            <span>遇到问题？</span>
            <span class="span1">忘记密码</span>
          </dir>
          <div class="phone" @click="emailLogin">
            <i class="iconfont icon-44"></i>
            <span>登录</span>
          </div>
          <div class="email"  @click="loginWay=1">
            <i class="iconfont icon-youxiang"></i>
            <span>其他方式登录</span>
          </div>
        </div>
        <div class="footer">
          <span>注册账号</span>
          <i class="iconfont icon-arrow"></i>
        </div>
        
      </div>
      <div class="phoneComponent"></div>
  </div>
</template>
<script>
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { setTimeout } from 'timers';
export default {
  
  data(){
    return{
      loginWay:1,// 1初始页面，2手机号，3邮箱
      phone:'',//手机号
      msg:'',//验证码
      password: '',
      email:'',
    }
  },
  methods:{

    async phoneLogin(){
        if(this.phone===''&&this.msg===''){
          this.phone = null
          this.msg = null
        }else if(this.msg===''){
          this.msg = null
        }else if( this.phone===''){
          this.phone = null
        }else if(this.phone !=='' && this.msg!==''){
          setTimeout(()=>{
            this.$router.push('/home')
          })
        }

        const {phone,msg} = this
        let names = ['phone','msg']
        const success = await this.$validator.validateAll(names)
        if(success){
          console.log('phoneLogin')
        }

      },
        async emailLogin(){
        if(this.email===''&&this.password===''){
          this.email = null
          this.password = null
        }else if(this.email===''){
          this.email = null
        }else if(this.password===''){
          this.password = null
        }
        const {email,password} = this
        let names = ['email','pwd']
        const success = await this.$validator.validateAll(names)
        if(success){
          console.log('emailLogin')
        }
      },
    
  },
  mounted(){
     this.$validator.extend('phone', {
        validate: value => {
          return  /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)
        },
        getMessage: field => '请输入正确手机号'
      })
      this.$validator.localize('zh_CN', {
        messages: zh_CN.messages,
        attributes: {
          phone: '手机号',
          msg: '验证码',
          pwd: '密码',
          email:'邮箱',
        }
      })
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #login
    background gary 
    overflow hidden
    .login1
      .login1Top
        .img
          width 10rem
          margin-left 3rem
          padding-top: 2.13333rem;
          padding-bottom: 2.13333rem;
          img 
            width: 3.57333rem;
            height: 1.2rem;
        .mbS
          padding: 0 .53333rem;
          margin-bottom: 2.73333rem;  
          text-align center
          line-height 100%
          .phone
            margin-bottom: .42667rem;
            background #b4282d
            color #FFF
            border-radius 10px
            i 
              font-family: "iconfont" !important;
              font-size: 50px;
              font-style: norma
              vertical-align middle
            span 
              font-size 29px
              vertical-align middle
              padding-left 20px
          .email
            margin-bottom: .42667rem;
            background #b4282d
            color #FFF
            border-radius 10px
            i 
              font-family: "iconfont" !important;
              font-size: 50px;
              font-style: norma
              margin-left 10px
              vertical-align middle
            span 
              padding-left: 20px;
              font-size 29px
              vertical-align middle
          .kuai
            color: #333;
            font-size: .37333rem;
            text-align: center;
            width: 100%;
            .icon-arrow
              font-size 25px
              font-weight bold
      .login1Bottom
        position absolute
        width: 100%;
        left: 0;
        bottom: 4.06667rem;
        height: .53333rem;
        text-align: center;
        .iconfont
          font-size 30px
        .weiXin 
          height: .53333rem;
          border-right: 1px solid #979797;
          display: inline-block;
          text-align: center;
          padding: 0 .53333rem;
          font-size 30px
        .QQ
          font-size 30px
          height: .53333rem;
          border-right: 1px solid #979797;
          display: inline-block;
          text-align: center;
          padding: 0 .53333rem;
        .weiBo
          height: .53333rem;
          border-right: 1px solid #979797;
          display: inline-block;
          text-align: center;
          padding: 0 .53333rem;
          font-size 30px
    .phoneLogin
      margin-top 2rem
      .logo
        margin-top: .74667rem;
        margin-bottom: 0;
        margin-left 3.3rem
        img   
          width: 2.56rem;
          height: .85333rem;
      .input
        padding: 0 0.555556rem;
        padding-top: 1.6rem;
        button 
          width: 2.3rem;
          height: 0.9rem;
          text-align: center;
          color: #333;
          font-size: 30px;
          background: #fff;
          line-height: 0.75rem;
          border: 1px solid #7F7F7F;
          border-radius: 20px;
          margin-left 10px
        input 
          width: 6.27rem;
          height: 0.9rem;
          font-size: 0.4rem;
          line-height: 0.6rem;
          margin: 0.39rem 0;
          padding-left: 0;
          -webkit-tap-highlight-color: transparent;
          letter-spacing: normal;
          background: none;
          outline: none;
          border: none;
      .middle
        text-align: center;
        background #fff
        .question
          font-size 28px
          color #333
          .span1
            margin-left 270px
      .phone
          margin-bottom: .42667rem;
          background #b4282d
          color #FFF
          border-radius 10px
          i 
            font-family: "iconfont" !important;
            font-size: 50px;
            font-style: norma
            vertical-align middle
          span 

            font-size 29px
            vertical-align middle
            padding-left 20px
        .email
          margin-bottom: .42667rem;
          background #b4282d
          color #FFF
          border-radius 10px
          i 
            font-family: "iconfont" !important;
            font-size: 50px;
            font-style: norma
            margin-left 10px
            vertical-align middle
          span 
            padding-left: 20px;
            font-size 29px
            vertical-align middle
        .footer
          color: #333;
          font-size: .37333rem;
          text-align: center;
          width: 100%;
          .icon-arrow
            font-size 25px
            font-weight bold

    .emailLogin
      margin-top 2rem
      .logo
        margin-top: .74667rem;
        margin-bottom: 0;
        margin-left 3.3rem
        img   
          width: 2.56rem;
          height: .85333rem;
      .input
        padding: 0 0.555556rem;
        padding-top: 1.6rem;
        button 
          width: 2.3rem;
          height: 0.9rem;
          text-align: center;
          color: #333;
          font-size: 30px;
          background: #fff;
          line-height: 0.75rem;
          border: 1px solid #7F7F7F;
          border-radius: 20px;
          margin-left 10px
        input 
          width: 6.27rem;
          height: 0.9rem;
          font-size: 0.4rem;
          line-height: 0.6rem;
          margin: 0.39rem 0;
          padding-left: 0;
          -webkit-tap-highlight-color: transparent;
          letter-spacing: normal;
          background: none;
          outline: none;
          border: none;
      .middle
        text-align: center;
        background #fff
        .question
          font-size 28px
          color #333
          .span1
            margin-left 270px
      .phone
          margin-bottom: .42667rem;
          background #b4282d
          color #FFF
          border-radius 10px
          
          i 
            font-family: "iconfont" !important;
            font-size: 50px;
            font-style: norma
            vertical-align middle
          span 

            font-size 29px
            vertical-align middle
            padding-left 20px
        .email
          margin-bottom: .42667rem;
          background #b4282d
          color #FFF
          border-radius 10px
          i 
            font-family: "iconfont" !important;
            font-size: 50px;
            font-style: norma
            margin-left 10px
            vertical-align middle
          span 
            padding-left: 20px;
            font-size 29px
            vertical-align middle
        .footer
          color: #333;
          font-size: .37333rem;
          text-align: center;
          width: 100%;
          .icon-arrow
            font-size 25px
            font-weight bold

    .phoneComponent
      background red


</style>