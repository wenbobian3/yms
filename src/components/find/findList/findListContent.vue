<template>
	<div class="findListContent">
		<div class="findListContent_c">
			<img src="../../../../static/image/discover/6/images/1.png" height="450" width="750" alt="">
			<div class="findListContentDescribe">
				<h2>原乡芦茨</h2>
				<p>
					<span>杭州</span>
					<span>田园风</span>
				</p>
			</div>
		</div>
		
	</div>
</template>



<style lang="scss">
	
	.findListContent{
		height: 2.75rem;
		.findListContent_c{
			display: flex;
			flex-direction: column;
			img{
				width: 100%;
				height: 2.25rem;
			}
			.findListContentDescribe{
				background: #fff;
				height: 0.5rem;
				padding: 0 .11rem;
				display: flex;
				justify-content: space-between;
				align-items:center;
				h2{
					height: .13rem;
					font-size: 0.13rem;
				}
				p{
					display: flex;
					span{
						display: inline-block;
						font-size: .13rem;
						height: .2rem;
						padding: 0 0.02rem;
						border: 0.01rem solid #7abb85;
						line-height: .2rem;
						margin-right: 0.05rem;
					}
					span:nth-of-type(2){
						border-color: #01c7ac;
					}
				}
		}
		}

	
	}


</style>