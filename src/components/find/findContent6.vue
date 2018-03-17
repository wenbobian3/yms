<template>
	<div class="findContent">
		<div class="findContentTitle">
			<h2>逐梦西部</h2>
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
	       imgUrl: '../../../static/image/discover/5/8.png',
	       area:'林芝'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/9.png',
	       area:'拉萨'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/10.png',
	       area:'西安'
	      }
	    ]
	}
  }
}


 


</script>
