<template>
	<div class="orderContent">
		<div class="orderContentTitle">
			<span>汉唐香府</span>
		</div>
		<div class="orderContentHotel">
			<div class="orderContentHotel_c">
				<img src="../../../static/image/story/1.png" alt="">
				<p>
					<span>客房</span>
					<span>
						<i>￥680</i>
						<em>(平常)</em>
					</span>
				</p>
			</div>
		</div>
		<div class="orderContentTime">
			<div class="orderContentTime_t">
				<span>住宿时间</span>
			</div>
			<div class="orderContentTime_c">
				<p>
					<span>入住日期</span>
					<i>请选择</i>
				</p>
				<div class="shu"></div>
				<p>
					<span>离开日期</span>
					<i>请选择</i>
				</p>
			</div>
			<div class="orderContentTime_b">
				<span>您还未填写入住、离开时间</span>
			</div>
		</div>
		<div class="orderContentMsg">
			<h2>
				入住人信息
			</h2>
			<div class="orderAdd">
				<div class="orderHasMsg">
					<div class="orderHasMsg_c">
						<li>
							<span>
								嘻嘻嘻
							</span>
							<img src="../../../static/image/register_agree.png" alt="">
						</li>
						<p>
							<span>身份证</span>
							<i>32134687646234</i>
						</p>
						<p>
							<span>手机号</span>
							<i>13566666666</i>
						</p>
					</div>
				</div>
				<router-link to="/addPerson">
					<div class="orderAddMsg">
						<span>
							<img src="../../../static/image/yu_addpeo_img.png" alt="">
						</span>添加入住人
					</div>
				</router-link>
			</div>
		</div>

	</div>
	



</template>

<style lang="scss">
	.orderContent{
		background: #f1f1f1;
		.orderContentTitle{
			height: .4rem;
			background: #fff;
			margin-top: .05rem;
			margin-bottom: .02rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 0 .16rem;
			span{
				font-size: .15rem;
				color: #404040;
			}
		}
		.orderContentHotel{
			height: .88rem;
			background: #fff;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 0 .16rem;
			.orderContentHotel_c{
				height: .6rem;
				display: flex;
				align-items: center;
				img{
					width: 1rem;
					height: .6rem;
				}
				p{
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					font-size: .14rem;
					flex-direction: column;
					padding: .13rem;
					height: .34rem;
					width: 2rem;
					i{
						font-style: normal;
						color: #fc0000;
					}
					em{
						font-style: normal;
						margin-left: .05rem;
					}
				}
			}
		}
		.orderContentTime{
			height: 1.3rem;
			background: #fff;
			.orderContentTime_t{
				display: flex;
				justify-content: center;
				align-items: center;
				height: .38rem;
				background: #f1f1f1;
				font-size: .14rem;
				span{
					color: #a1a1a1;
				}
			}
			.orderContentTime_c{
				display: flex;
				border-bottom: #dddbde solid 0.01rem;
				position: relative;
				p{
					width: 50%;
					height: .3rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: .14rem;
					flex-direction: column;
					padding: .11rem .04rem;
					i{
						font-style: normal;
						color: #85cb8d;
					}
				}
				.shu{
					height: .28rem;
					width: .01rem;
					position: absolute;
					left: 50%;
					top: 0.1rem;
					background: #dcdcdc;
				}
			}
			.orderContentTime_b{
				height: .4rem;
				display: flex;
				justify-content: center;
				align-items: center;
				span{
					font-size: .14rem;
					color: #a1a1a1;
				}
			}
		}
		.orderContentMsg{
			display: flex;
			flex-direction: column;
			h2{
				font-size: .14rem;
				height: .48rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.orderAdd{
				font-size: .14rem;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				background: #fff;
				.orderAddMsg{
					color: #91e295;
					display: flex;
					justify-content: center;
					align-items: center;
					height: .4rem;
					width: 100%;
					span{
						display: flex;
						height: .1rem;
						width: .1rem;
						margin-right: .13rem;
						img{
							width: 100%;
							height: 100%;
						}
					}
				}
				.orderHasMsg{
					width: 100%;
					height: 1.03rem;
					font-size: .14rem;
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					flex-direction: column;
					.orderHasMsg_c{
						padding: 0.14rem .4rem .21rem .4rem; 
						display: flex;
						justify-content: space-between;
						flex-direction: column;
						height: .66rem;
						width: 3rem;
						li{
							display: flex;
							justify-content: space-between;
							align-items: center;
							font-size: .15rem;
							img{
								width: .2rem;
								height: .2rem;
							}
						}
						p{
							i{
								font-style: normal;
								margin-left: .05rem;
								letter-spacing: .01rem;
							}
						}
					}
				}
			}
		}
	}


</style>