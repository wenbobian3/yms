<template>
	<div class="personalSetting">
		
        <div class="bg1">
	       <div class="yqhy">
	        <img class="hy" src="../../../static/image/personal/yijianfankui.png" height="50" width="50"  alt="">
	         <span class="yq">邀请好友</span>
	         <span class="gdjb">各得20枚金币</span>
	         <img class="rightback" src="../../../static/image/personal/rightback.png" alt="">
	       </div>
	       <div class="bborder"></div>
	       <div class="msrzzx">
	        <img class="mszx" src="../../../static/image/personal/kefudianhua.png"  alt="">
	         <span>民宿入住咨询</span>
	         <img class="rightback" src="../../../static/image/personal/rightback.png" alt="">
	       </div>
	       <div class="bborder"></div>
	       <div class="tgrzzx">
	        <img class="tgzx" src="../../../static/image/personal/minsuzixun.png" alt="">
	         <span>团购民宿咨询</span>
	         <img class="rightback" src="../../../static/image/personal/rightback.png" alt="">
	       </div>
        </div>
        <div class="setting">
	        <img class="sz" src="../../../static/image/personal/shezhi1.png"   alt="">
	         <span>设置</span>
	         <img class="rightback" src="../../../static/image/personal/rightback.png" alt="">
	    </div>
       
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	.personalSetting{
		.bborder{
		      width:90%;
		      height:1px;
		      margin-left:5%;
		      text-align:center;
		      background:#dfdfdf;
	    }
   		 .bg1{
		      background:#f1f1f1;
		      padding-bottom:.1rem;
		      .yqhy{
			        height:.49rem;
			        font-size:.14rem;
			       
			        display:flex;
			        align-items: center ;
			        padding-left:.17rem;
			        padding-right:.15rem;
			      
			        background:#fff;
			        .hy{
			          height:.21rem;
			          width:.21rem;
			         
			        }
			        .yq{
			          padding:.17rem;
			          width:62%;
			           color:#ff6914;
			        }
					.gdjb{
			          padding:.17rem;
					   color:#9d9d9d;
						width:38%;
					}
			        .rightback{
			          width:.08rem;
			          height:.13rem;
			        }
		      }
		      .msrzzx{
			        height:.49rem;
			        font-size:.14rem;
			        color:#9d9d9d;
			        display:flex;
			        align-items: center ;
			        padding-left:.17rem;
			        padding-right:.15rem;
			      
			        background:#fff;
			        .mszx{
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
			 .tgrzzx{
			        height:.49rem;
			        font-size:.14rem;
			        color:#9d9d9d;
			        display:flex;
			        align-items: center ;
			        padding-left:.17rem;
			        padding-right:.15rem;
			      
			        background:#fff;
			        .tgzx{
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
   		 .setting{
			        height:.49rem;
			        font-size:.14rem;
			        color:#9d9d9d;
			        display:flex;
			        align-items: center ;
			        padding-left:.17rem;
			        padding-right:.15rem;
			      
			        background:#fff;
			        .sz{
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
</style>