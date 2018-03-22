
<template>
	<div class="newPersonHeader">
		<ul>
			<router-link to="/addPerson" class="orderBack">
				<img src="../../../../../static/image/story/titleback.png" alt="" >
			</router-link>
			<h2>新建入住人</h2>
			<h3>确定</h3>
		</ul>
	</div>


</template>


<style lang="scss">
	.newPersonHeader{
		background: #fff;
		ul{
			display: flex;
			padding: 0 0.16rem;
			justify-content: space-between;
			align-items: center;
			height: 0.49rem;
			.orderBack{
				display: flex;
				width: 0.32rem;
				height: 0.19rem;
				img{
					width: 0.1rem;
					height: 0.2rem;
				}
			}
			h2{
				font-size: 0.18rem;
			}
			h3{
				height: 0.18rem;
				color: #81ae8f;
				font-size: .15rem;
			}
		}
		
	}
	

</style>



</template>



