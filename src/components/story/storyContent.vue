<template>
	<div class="storyContent">
		<router-link to="/storyDetails">
			<ul>
				<li>
					<img src="../../../static/image/story/1.png" height="450" width="750" alt="">
				</li>
			</ul>
			<div class="article">
				<h2>
					我们只为你推荐那些能“看得见风景的美宿”
					<br>——专访“逸民宿APP”创始人李勇先生
				</h2>
				<p>
					张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展表示担忧，你怎么看？<br>
					李勇：我们一直在关注民宿业的发展。的确，从供、需两个方面来看，民宿都具备了一个新业态崛起的条件。<!-- 从一份统计数据看，2016年全国旅游项目的投资增速是全国固定资产投资增速的近4倍，而民宿的投资增速是旅游项目投资增速的2倍；从百度指数搜索量来看，民宿近一年来一直高居各旅游住宿形态（包括五星级酒店、商务酒店、青年旅社、客栈、农家院等）的榜首。足见民宿业喷薄而出、一骑绝尘的迅猛发展态势。 -->
				</p>
			</div>
			<div class="details">
				<span>详情</span>
			</div>
			<div class="storyBar">
				<img src="../../../static/image/story/bar.png" alt="">
			</div>
		</router-link>	
	</div>	
</template>



<style lang="scss">
	.storyContent{
		background-color: #fff;
		ul{
			li{
				height: 2.25rem;
				width: 100%;
				img{
					height: 100%;
					width: 100%;
				}
			}
		}
		.article{
			padding: 0.08rem 0.33rem 0 0.19rem;
			h2{
				color: #000;
				text-align: left;
				font-size: 0.16rem;
				line-height: 0.23rem;
				letter-spacing: 0.01rem;
			}
			p{
				text-align: left;
				font-size: 0.12rem;
				color: #919191;
				line-height: 0.21rem;
				letter-spacing: 0.021rem;
				margin-top: 0.06rem;
			}
		}
		.details{
			display: flex;
			justify-content: flex-end;
			span{
				color: #000;
				text-align: right;
				letter-spacing: 0.05rem;
				font-size: 0.14rem;
				line-height: 0.14rem;
				margin: 0.1rem 0.21rem 0.08rem 0;
			}
			
		}
		.storyBar{
			width: 100%;
			height: 0.2rem;
			img{
				width: 100%;
				height: 100%;
			}
			margin-bottom: 0.15rem;
		}
	}
</style>