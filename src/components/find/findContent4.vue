<template>
	<div class="findContent">
		<div class="findContentTitle">
			<h2>华中雅集</h2>
		</div>
		<div class="findContentArea">
			<ul id  ="findContentArea">
				<li v-for="item in items">
					<router-link to="findList">	
						<img :src=item.imgUrl alt="">
						<span>{{ item.area }}</span>
					</router-link>
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
	       imgUrl: '../../../static/image/discover/4/1.png',
	       area:'长沙'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/2.png',
	       area:'张家界'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/3.png',
	       area:'黄冈'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/4.png',
	       area:'宜昌'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/5.png',
	       area:'平顶山'
	      },
	      {
	       imgUrl: '../../../static/image/discover/4/6.png',
	       area:'武汉'
	      }
	    ]
	}
  }
}


 


</script>
