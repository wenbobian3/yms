<template>
	<div class="findContent">
		<div class="findContentTitle">
			<h2>北方印象</h2>
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
	       imgUrl: '../../../static/image/discover/4/7.png',
	       area:'青岛'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/8.png',
	       area:'济南'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/9.png',
	       area:'烟台'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/10.png',
	       area:'临沂'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/11.png',
	       area:'威海'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/12.png',
	       area:'日照'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/13.png',
	       area:'莱州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/14.png',
	       area:'大连'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/1.png',
	       area:'盘锦'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/2.png',
	       area:'保定'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/3.png',
	       area:'秦皇岛'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/4.png',
	       area:'廊坊'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/5.png',
	       area:'天津'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/6.png',
	       area:'哈尔滨'
	      },
	      {
	       imgUrl: '../../../static/image/discover/5/7.png',
	       area:'平遥'
	      }
	    ]
	}
  }
}


 


</script>
