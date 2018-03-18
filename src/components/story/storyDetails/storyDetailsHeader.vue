<template>
	<div class="storyDetailsHeader">
		
		<ul>
				<router-link to="/story" class="storyBack">
					<img src="../../../../static/image/story/titleback.png" alt="" >
				</router-link>
				<h2>故事详情</h2>
				<img src="../../../../static/image/story/minsu_detail_share.png" alt="" class="storyShare">
		</ul>


	</div>


</template>


<style lang="scss">
	.storyDetailsHeader{
		border-bottom: 1px solid #e4e4e4;
		ul{
			display: flex;
			padding: 0 0.16rem;
			justify-content: space-between;
			align-items: center;
			height: 0.49rem;
			.storyBack{
				display: flex;
				width: 0.1rem;
				height: 0.19rem;
				img{
					width: 0.1rem;
					height: 0.2rem;
				}
			}
			h2{
				font-size: 0.18rem;
			}
			.storyShare{
				width: 0.18rem;
				height: 0.18rem;
				
			}
		}
	}
	

</style>