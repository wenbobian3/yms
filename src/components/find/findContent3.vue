<template>
	<div class="findContent">
		<div class="findContentTitle">
			<h2>流连东南</h2>
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



<script>
	
export default {
  data: ()=>{
  	return {
  		title: [

  		],
	    items: [
	      {
	       imgUrl: '../../../static/image/discover/3/9.png',
	       area:'厦门'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/11.png',
	       area:'武夷山'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/10.png',
	       area:'深圳'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/12.png',
	       area:'广州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/13.png',
	       area:'惠州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/14.png',
	       area:'珠海'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/15.png',
	       area:'三亚'
	      }
	    ]
	}
  }
}


 


</script>
