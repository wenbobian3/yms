<template>
	<div class="orderHeader">
		<router-link to="/find" class="findBack">
			<img src="../../../static/image/story/titleback.png" alt="" >
		</router-link>
		<h2>预定</h2>
		
	</div>
</template>


<style lang="scss">
	.orderHeader{
		width: 100%;
		height: 0.49rem;
		position: relative;
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