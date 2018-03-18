<template>
	<div class="storyDetailsDFooter">
		<ul>
			<li>
				<img src="../../../../static/image/story/design_ic_visibility.png" alt="">
				<span class="storyWatch">(3859)</span>
			</li>
			<li>
				<img src="../../../../static/image/story/pl_dianzan.png" alt="">
				<span class="storyZan">(653)</span>
			</li>
			<li>
				<img src="../../../../static/image/story/pl_shoucang.png" alt="">
				<span class="storyXin">(522)</span>
			</li>
			<li>
				<p>查看民宿</p>
			</li>
		</ul>


	</div>
</template>


<style lang="scss">
	.storyDetailsDFooter{
		border-top: 1px solid #f1f1f1;
		height: 0.44rem;
		padding: 0 0.16rem;
		ul{
			height: 0.44rem;
			display: flex;
			justify-content: space-between;
			li{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				img{
					width: 0.22rem;
					height: 0.22rem;
				}
				span{
					font-size: 0.07rem;
				}
				p{
					display: inline-block;
					font-size: 0.17rem;
					width: 1.2rem;
					height: 0.32rem;
					border: 0.01rem solid #f9771f;
					line-height: 0.32rem;
					text-align: center;
					border-radius: 5%;
					color: #f9771f;
				}
				.storyWatch{
					color: #627eae;
				}
				.storyZan{
					color: #ffa396;
				}
				.storyXin{
					color: #7cac6e;
				}
			}
		}
	}
</style>