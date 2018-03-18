<template>
	<div class="storyHeader">
		<router-link to="/find" class="findBack">
			<img src="../../../../static/image/story/titleback.png" alt="" >
		</router-link>
		<h2>房源列表</h2>
		<div class="storySort">
			<ul>
				<li>
					<span>
						综合排序
						<i>
							<img src="../../../../static/image/lvbiao.png" alt="">
						</i>
					</span>
					<ul>
						<li>推荐排序</li>
						<li>价格 低-高</li>
						<li>价格 高-低</li>
						<li>距离 近-远</li>
						<li>距离 远-近</li>
					</ul>
				</li>
				<div class="storyBar"></div>
				<li>
					<span>
						标签
						<i>
							<img src="../../../../static/image/search_more_img.png" alt="">
						</i>
					</span>
					<ul>
						<li>文艺范</li>
						<li>田园风</li>
						<li>温暖系</li>
						<li>轻奢派</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>


<style lang="scss">
	.storyHeader{
		width: 100%;
		height: 0.98rem;
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
				li{
					position: relative;
					ul{
						position: absolute;
						width: 200%;
						display: flex;
						flex-direction: column;
						li{
							width: 100%;
							height: 0.4rem;
							color: #000;
							line-height: 0.4rem;
							background-color: #fff;
							text-align: left;
							padding-left: 0.5rem;
						}
					}
				}
				li:first-child{
					color: #7bb976;
					ul{
						display: none;
					}
				}
				li:last-child{
					ul{
						left: -100%;
						display: none;
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