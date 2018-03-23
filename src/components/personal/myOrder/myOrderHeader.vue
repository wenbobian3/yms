<template>
	<div class="myOrderHeader">
		<router-link to="/find" class="findBack">
			<img src="../../../../static/image/story/titleback.png" alt="" >
		</router-link>
		<h2>我的订单</h2>
		
	</div>
</template>


<style lang="scss">
	.myOrderHeader{
		width: 100%;
		height: 0.48rem;
		position: relative;
		border-bottom: 1px solid #f1f1f1;
		.findBack{
			position: absolute;
			display: flex;
			width: 0.1rem;
			height: 0.2rem;
			left: 0.18rem;
			top: 0.12rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		h2{
			background-color: #fff;
			width: 100%;
			font-size: 0.19rem;
			font-weight: 500;
			display: block;
			height: 0.48rem;
			line-height: 0.48rem;
			text-align: center;
		}
		

	}
</style>