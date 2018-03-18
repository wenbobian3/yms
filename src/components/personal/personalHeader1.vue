<template>
  <div class="perHeader">
    <div class="xinfeng">
      <img  src="../../../static/image/personal/xinfeng.png" alt="">
    </div>
     <div class="tx">
       <img class="txtp" src="../../../static/image/personal/def_touxiang.png"  alt="">
       <img class="txbj" src="../../../static/image/personal/qianbibi.png" alt="">
     </div>
     <div class="sign">
        <a href="###">登录</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;<a href="###">注册</a>
     </div>
     <ul class="scjb">
       <li class="sc">我的收藏</li>
       <div class="rborder"></div>
       <li class="jb">我的金币</li>
     </ul>
     <div class="bborder"></div>
     <div class="bg">
       <div class="qhmsz">
        <img class="qh" src="../../../static/image/personal/fangdong_setting_icon.png" alt="">
         <span>切换成民宿主</span>
         <img class="rightback" src="../../../static/image/personal/rightback.png" alt="">
       </div>

         <div class="wddd" style="display:none">
          <img class="dd" src="../../../static/image/personal/dingdan.png"  alt="">
           <span>我的订单</span>
           <img class="rightback" src="../../../static/image/personal/rightback.png" alt="">
         </div>

      </div>
  </div>
  
</template>
<script>
 
</script>

<style lang="scss">
  .perHeader{
    display:flex;
    flex-direction:column;
    height:3.1rem;
    width:100%;
    background:url(../../../static/image/personal/mybackground.png) no-repeat center top;
    background-size: 100% 84%;
    .xinfeng{
      padding-right:.22rem;
      height:.58rem;
      display:flex;
      flex-direction:column;
      align-items: flex-end ;
      justify-content: flex-end;
      flex:none;
      img{
        display:inline-block;
        height:.16rem;
        width:.22rem;

      }
    }
    .tx{
      
      display:flex;
      flex-direction:row;
      align-items: flex-end ;
      justify-content: center;
      padding-top:.2rem;
      flex:none;
      .txtp{
        width:.94rem;
        height:.94rem;
        margin-right:-.08rem;
      }
      .txbj{
        height:.22rem;
        width:.22rem;
       
      }
    }
    .sign{
      font-size:.16rem;
      color:#949494;
      padding-top:.14rem;
      display:flex;
      justify-content: center;
      flex:none;
    }
    .scjb{
      font-size:.16rem;
      color:#969696;
      display:flex;
      flex:none;
      align-items: center ;
      height:.21rem;
      padding-top:.14rem;
      padding-bottom:.13rem;
      padding-left:.4rem;
      li:first-child{
        background:url(../../../static/image/personal/shoucang.png) no-repeat left center;
        background-size:.22rem .2rem;
        padding-left:.35rem;
        padding-right:.48rem;
      }
      li:last-child{
        background:url(../../../static/image/personal/mygoldgold.png) no-repeat left center;
        background-size:.22rem .2rem;
        margin-left:.42rem;
        padding-left:.35rem;
      }
      .rborder{
        width:.01rem;
        height:.21rem;
        background:#979797;
      }
    }
    .bborder{
      width:90%;
      height:1px;
      margin-left:5%;
      text-align:center;
      background:#dfdfdf;
    }
    .bg{
      height:.49rem;
      background:#f1f1f1;
      padding-bottom:.1rem;
      .qhmsz{
        height:.49rem;
        font-size:.14rem;
        color:#9d9d9d;
        display:flex;
        align-items: center ;
        padding-left:.17rem;
        padding-right:.15rem;
      
        background:#fff;
        .qh{
          height:.21rem;
          width:.21rem;
        }
        span{
          padding:.17rem;
          width:100%;
        }
        .rightback{
          width:.08rem;
          height:.13rem;
        }
      }
      .wddd{
            height:.49rem;
            font-size:.14rem;
            color:#9d9d9d;
            display:flex;
            align-items: center ;
            padding-left:.17rem;
            padding-right:.15rem;
          
            background:#fff;
            .dd{
              height:.21rem;
              width:.21rem;
            }
            span{
              padding:.17rem;
              width:100%;
            }
            .rightback{
              width:.08rem;
              height:.13rem;
            }
          }
    }
  }
  

</style>