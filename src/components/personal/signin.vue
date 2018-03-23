<template>
	<div>
          <ul class="signupmain">
            <li class="phone">
              <img src="../../../static/image/personal/phone.png" alt="">
              <input type="text" placeholder="手机号" v-model="telephone">
            </li>
            <li class="password">
               <img src="../../../static/image/personal/lookpass.png" alt="">
               <input type="password" placeholder="密码" class="shuru" v-model="password">
              <span class="wjmm">忘记密码？</span>
            </li>
          </ul>
            <input type="button" class="signinsubmit" value="登录" @click="showtime"/>
            <div  class="xqgg">
	            <span>先去逛逛</span>
	            <img  src="../../../static/image/personal/rightback.png"/>
        	</div>
            <div class="qtfsdl">
            	<div class="border"></div>
            	<p>其他方式登录</p>
            	<div class="border"></div>
            </div>
        	<ul class="lj">
            	<li><img src="../../../static/image/personal/loadqq.png" height="100" width="100" alt=""></li>
            	<li><img src="../../../static/image/personal/loadweixin.png" height="100" width="100" alt=""></li>
            	<li><img src="../../../static/image/personal/login_third_weibo.png" height="100" width="100" alt=""></li>
        	</ul>
            
            
          <p class="wzc">未注册？<a href="###" @click="xs">立即注册</a></p>
      </div>
</template>

<script>
	import axios from 'axios'

export default{
	data(){
		return{
			telephone:'',
			password:''
		}
	},
	methods:{
        xs: function() {
	      　this.$emit('changestatus')     
		},
		showtime(){
			const that = this;
			// console.log(that.telephone,that.password)
			axios({
				method: 'post',
          		url:'/api/customer/login',
				data: {
					username: that.telephone,
					password: that.password
				}
        })
        .then((res) => {
			console.log(res.data.data.success)
            if(res.data.data.success){
			// console.log(res)
			alert('登录成功')
			this.$router.push('/personal')
			window.location.reload()
            }else{
				alert('密码错误')
			}
        })
		}
	},

}
 
</script>

<style lang="scss">
	.password{
		height:.31rem;
		.wjmm{
			font-size:.14rem;
			width:.95rem;
			height:.31rem;
			line-height:.31rem;
		}
	}
	.signinsubmit{
		width:100%;
        height:.4rem;
        margin-top:.1rem;
        margin-bottom:.15rem;
        background:#00d386;
        color:#fff;
        font-size:.16rem;
        border-radius:.04rem;
	}
	.xqgg{
		display:flex;
      	align-items:center;

      	justify-content: flex-end;

		img{
			width:.07rem;
			height:.08rem;
			line-height:100%;
		}
	}
	.qtfsdl{
		margin-top:.15rem;
		margin-bottom:.14rem;
		display:flex;
		justify-content: space-between;
		align-items:center;
		.border{
			height:.01rem;
			width:.9rem;
			background:#b2b2b2;

		}
	}
	.lj{
		display:flex;
		justify-content:center;
		align-items:center;
		li{
			padding:0 .21rem;
			img{
				width:.48rem;
				height:.48rem;
			}
		}
		
	}
	.wzc{
		margin-top:.2rem;
		text-align:center;
		a{
			color:#4eba96;
		}
	}
	
</style>