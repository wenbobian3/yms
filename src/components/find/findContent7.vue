<template>
	<div class="findContent">
		<div class="findContentTitle">
			<h2>帝都记忆</h2>
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
	       imgUrl: '../../../static/image/discover/5/11.png',
	       area:'密云'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/12.png',
	       area:'延庆'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/13.png',
	       area:'房山'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/14.png',
	       area:'昌平'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/15.png',
	       area:'怀柔'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/16.png',
	       area:'通州'
	      }
	    ]
	}
  }
}


 


</script>
