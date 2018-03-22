<template>
	<div class="addPersonContent">
		<router-link to="newPerson">
			<div class="orderAddMsg">
				<span>
					<img src="../../../../static/image/yu_addpeo_img.png" alt="">
				</span>添加入住人
			</div>
		</router-link>
		<div class="barbarbar"></div>
		<div class="orderHadMsg orderAddMsg">
			<p>
				<span>
					<img src="../../../../static/image/register_unpress.png" alt="">
				</span>
				嘻嘻嘻
			</p>
			<span>
				<img src="../../../../static/image/register_agree.png" alt="">
			</span>
		</div>


	</div>




</template>



<style lang="scss">
	.addPersonContent{
		padding: 0 .16rem;
		background: #FFF;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-top: .15rem;
		margin-bottom: .1rem;
		.barbarbar{
			height: .1rem;
			background: #f1f1f1;
			width: 200%;
			margin-left: -.2rem;
		}
		.orderAddMsg{
			color: #91e295;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: .4rem;
			width: 100%;
			
			font-size: .14rem;
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
		.orderHadMsg{
			display: flex;
			justify-content: space-between;
			color: #000;
			p{
				display: flex;
				align-items: center;

			}
			span{
				width: .2rem;
				height: .2rem;
			}
		}

	}
	


</style>