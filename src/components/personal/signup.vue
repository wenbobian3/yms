<template>
    <div class="overlayer" @touchmove.prevent >
      <div class="signup">
        <div class="hlogo">
            <div class="logoall">
              <img class="plogo" src="../../../static/image/personal/sharedic.png" alt="">
              <p class="tlogo">逸 民 宿</p>
            </div>
            <div class="xxx" @click="dialogClose"><img src="../../../static/image/personal/daohangx.png" alt=""></div>
        </div>
        <div v-show="yc" >
          <ul class="signupmain" >
            <li class="phone">
              <img src="../../../static/image/personal/phone.png" alt="">
              <input type="text" placeholder="手机号" v-model="telephome">
            </li>
            <!-- <li class="lingpai">
              <img src="../../../static/image/personal/lingpai.png" alt="">
              <input type="text" placeholder="验证码">
              <p>获取验证码</p>
            </li> -->
            <li class="password">
               <img src="../../../static/image/personal/lookpass.png" alt="">
               <input type="password" placeholder="请输入密码（至少6位" v-model="password">
               <img class="yanjin" src="../../../static/image/personal/hide_password.png" alt="">
               <img class="yanjin" src="../../../static/image/personal/yanjin.png" alt="" style="display:none">
            </li>

          </ul>
            <input type="button" class="signupsubmit" value="注册" @click="build"/>
            <img class="nocheck" src="../../../static/image/personal/nocheck.png" alt=""/>
            <span class="ty">阅读并同意<a>《用户协议》</a>&nbsp;<a>《预订服务条款》</a></span>
          <p class="yyzh">已有账号？<a href="###" @click="inshow">直接登录</a></p>
         
      </div>
       <signin v-show="show"   @changestatus="xianshi"></signin>
      </div>
    </div>
</template>
<script>
  import signin from "./signin.vue"
  import axios from "axios"
  export default {
    data(){
      return {
        show:false,
        yc:true,
        telephome:'',
        password:'',
        haha:false
      }
    },
    components:{
      signin
    },
    methods:{
      dialogClose() {
        this.$emit("listenToConfig", false)
      },
      inshow(){
        this.yc = false,
        this.show = true
      },
      xianshi(){
        this.show = false,
        this.yc = true
        
      },
      build(){
        console.log(this.telephome)
        console.log(this.password)
        const that = this;
        axios({
          method: 'post',
          url:'/api/customer/signup',
          data: {
              phonenum: that.telephome,
              password: that.password
           }
        })
        .then((res) => {
            if(res){
              alert('注册成功，请登录')
            }
        })
      }

      
    }
  }
</script>

<style lang="scss">
  .overlayer{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:6.17rem;
    z-index:10;
    background :rgba(178,178,178,.5);
    .signup{
      background:#fff;
      width:3.1rem;
      height:4.4rem;
      border-radius:.04rem;
      position:fixed;
      top:.9rem;
      left:.12rem;
      z-index:11;
      padding:.15rem .2rem;
      .hlogo{
        position:relative;
        display:flex;
        justify-content:center;
        align-content :center;
        
        .logoall{
          display:flex;
          flex-direction : column;
          .plogo{
            width:.5rem;
            height:.5rem;
            align-self:center;
          }
          .tlogo{
            padding-top:.11rem;
            color:#363636;
          }
        }
        
        .xxx{
          width:.2rem;
          height:.2rem;
          position:absolute;
          top:.3rem;
          right:.18rem;
        }
      }
      .signupmain{
        padding-top:.2rem;
        li{
          display:flex;
          align-content:center;
          height:.47rem;
          font-size:.16rem;
          border:.01rem solid #e7e7e7;
          border-radius:.04rem;
          margin-bottom:.15rem;
          padding-left:.14rem;
          input{
            margin-left:.32rem;
            height:.28rem;
            align-self:center;
          }
        }
        .phone{
          height:.27rem;
          padding:.1rem 0 .1rem .12rem;
          img{
            height:.3rem;
            width:.3rem;
          }
        }
        .lingpai{
          display:flex;
          height:.39rem;
          padding:.04rem 0 .04rem .14rem;
          img{
            width:.26rem;
            height:.4rem;
          }
          input{
            width:1.3rem;
          }

          p{
            width:1rem;
            height:.34rem;
            padding-left:.16rem;
            font-size:.14rem;
            border-left:.01rem solid #eaeaea;
            align-self :center;
            line-height:.34rem;
            color:#0bb97e;
          }
          
        }
        .password{
          height:.31rem;
          padding:.08rem 0 .08rem .08rem;
          img{
            width:.33rem;
            height:.33rem;
          }
          input{
            width:65%;
          }
          
        }
      }
      .signupsubmit{
        width:100%;
        height:.4rem;
        margin-top:.1rem;
        margin-bottom:.15rem;
        background:#949597;
        color:#fff;
        font-size:.16rem;
        border-radius:.04rem;
      }
      .nocheck{
        width:.15rem;
        height:.15rem;
      }
      .ty{
        margin-left:.1rem;
        font-size:.14rem;
        a{
          color:#a0cb62;
        }
      }
      .yyzh{
        margin-top:.52rem;
        text-align:center;
        a{
          color:#4eba96;
        }
      }
    }
}
</style>