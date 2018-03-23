<template>
	
	<div class="myOrderNav">
		<ul>
			<li class="active">全部</li>
			<li>待付款</li>
			<li>待出行</li>
			<li>已完成</li>
		</ul>
		<div class="orderContent">
			<div class="orderContentTitle">
				<span>汉唐香府</span>
			</div>
			<div class="orderContentHotel">
				<div class="orderContentHotel_c">
					<img src="../../../../static/image/story/1.png" alt="">
					<p>
						<span>客房</span>
						<span>
							<i>￥680</i>
							<em>(平常)</em>
						</span>
					</p>
				</div>
			</div>
		</div>


	</div>






</template>

<style lang="scss">
	.myOrderNav{
		background: #fff;
		display: flex;
		margin-bottom: .1rem;
		ul{
			display: flex;
			width: 100%;
			li{
				width: 25%;
				height: .43rem;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: .14rem;
			}
			.active{
				border-bottom: .02rem solid #97d45f;
			}
		}
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

	}
</style>