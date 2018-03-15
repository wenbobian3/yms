<template>
	<div class="findContent findContent8">
		<div class="findContentTitle">
			<h2>民宿标签</h2>
		</div>
		<div class="findContentArea">
			<ul id  ="findContentArea">
				<li v-for="item in items">
					<img :src=item.imgUrl alt="">
					<span>{{ item.area }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
	.findContent8{
		margin-bottom: 0.51rem;
	}

</style>
<script>
	
export default {
  data: ()=>{
  	return {
  		title: [

  		],
	    items: [
	      {
	       imgUrl: '../../../static/image/discover/5/a1.png',
	       area:'厦门'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/a2.png',
	       area:'武夷山'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/a3.png',
	       area:'深圳'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/a4.png',
	       area:'广州'
	      }
	    ]
	}
  }
}


 


</script>
