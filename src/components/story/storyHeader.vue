<template>
	<div class="storyHeader">
		<h2>故 事</h2>
		<div class="storySort">
			<ul>
				<li>
					<span>默认</span>
				</li>
				<div class="storyBar"></div>
				<li>
					<span>
						综合排序
						<i>
							<img src="../../../static/image/search_more_img.png" alt="">
						</i>
					</span>
					<ul>
						<li class="ui-border-b">浏览 多-少</li>
						<li>浏览 少-多</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>


<style lang="scss">
	.storyHeader{
		position: fixed;
		width: 100%;
		height: 0.98rem;
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
		.storySort{
			ul{
				display: flex;
				justify-content: center;
				align-items:center; 
				position: relative;
				li{
					height: 0.5rem;
					font-size: 0.15rem;
					line-height: 0.5rem;
					background-color: #f1f1f1;
					width: 50%;
					text-align: center;
					border-bottom: 1px solid #dcdcdc;
					span{
						i{
							display: inline-block;
							width: 0.11rem;
							img{
								width: 100%;
								height: 100%;
								padding-top: 0.01rem;
							}
						}
					}
				}
				li:first-child{
					color: #7bb976;
				}
				li:last-child{
					position: relative;
					ul{
						position: absolute;
						left: -100%;
						width: 200%;
						display: flex;
						flex-direction: column;
						display: none;
						li{
							width: 100%;
							height: 0.4rem;
							color: #000;
							line-height: 0.4rem;
							background-color: #fff;
						}
					}
				}

				.storyBar{
					width: 1px;
					height: 0.3rem;
					background-color: #e0e0e0;
					position: absolute;
					z-index: 9;
				}
			}
		}

	}
</style>