<template>

	<div class="newPersonContent">
		<div class="newTitle">
			为了保证入住安全，请填写真实信息，关于您的任何信息我们都不会泄露出去的。
		</div>
		<div class="newWrite">
			<ul>
				<li>
					<p>
						<span>真实姓名：</span>
						<i>请输入证件上的真实姓名</i>
					</p>
				</li>
				<li>
					<p>
						<span>证件号码：</span>
						<i>请输入证件号码</i>
					</p>
				</li>
				<li>
					<p>
						<span>手机号码：</span>
						<i>请输入手机号码</i>
					</p>
				</li>
			</ul>
		</div>
	</div>


</template>

<style lang="scss">
	.newPersonContent{

		display: flex;
		flex-direction: column;
		.newTitle{
			font-size: .11rem;
			padding: .12rem .2rem;
			line-height: .16rem;
		}
		.newWrite{
			background: #fff;
			display: flex;
			flex-direction: column;
			padding: 0 .1rem;
			ul{
				li{
					font-size: .15rem;
					border-bottom: solid 1px #f1f1f1;
					p{
						padding: .15rem .1rem;
						i{
							font-style: normal;
							color: #cfcfcf;
						}
					}
				}
				li:last-of-type{
					border: none;
				}
			}
		}
	}
</style>

