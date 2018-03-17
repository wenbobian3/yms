<template>
	<div class="findContent">
		<div class="findContentTitle">
			<h2>西南忘返</h2>
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
	       imgUrl: '../../../static/image/discover/2/10.png',
	       area:'丽江'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/11.png',
	       area:'大理'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/12.png',
	       area:'昆明'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/13.png',
	       area:'西双版纳'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/1.png',
	       area:'红河'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/2.png',
	       area:'腾冲'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/3.png',
	       area:'泸沽湖'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/4.png',
	       area:'玉溪'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/5.png',
	       area:'成都'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/6.png',
	       area:'广安'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/7.png',
	       area:'桂林'
	      },
	      {
	       imgUrl: '../../../static/image/discover/3/8.png',
	       area:'北海'
	      }
	    ]
	}
  }
}


 


</script>
