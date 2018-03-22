<template>
	<div class="orderFooter">
		<div class="orderPrice">
			<h2>
				订单总额：￥<span>0</span>
			</h2>
		</div>
		<div class="orderSubmit">
			<span>提交订单</span>
		</div>
	</div>
</template>

<style lang="scss">

	.orderFooter{
		height: 0.5rem;
	    display: flex;
	    justify-content: space-between;
		.orderPrice{
			width: 2.25rem;
			h2{
				font-size: .14rem;
				text-align: center;
				line-height: .5rem;
			}
		}
		.orderSubmit{
			flex: 1;
			display: flex;
	 	    justify-content: center;
			background: #7ac278;
			span{
				color: #fff;
				font-size: .14rem;
				text-align: center;
				line-height: .5rem;
			}
		}
	}




</style>

