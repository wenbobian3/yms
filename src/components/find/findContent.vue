<template>
	<div class="findContent findContent1">
		<div class="findContentTitle">
          <h2>且下江南</h2>
        </div>
		<div class="findContentArea">
			<ul id  ="findContentArea">
				<router-link to="findList">	
					<li v-for="item in items">
						<img :src=item.imgUrl alt="">
						<span>{{ item.area }}</span>
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<style>
	.findContent1{
		margin-top: 0.48rem;
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
	       imgUrl: '../../../static/image/discover/1/1.png',
	       area:'杭州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/2.png',
	       area:'莫千山'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/3.png',
	       area:'桐庐'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/4.png',
	       area:'千岛湖'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/5.png',
	       area:'安吉'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/6.png',
	       area:'宁波'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/7.png',
	       area:'金华'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/8.png',
	       area:'松阳'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/9.png',
	       area:'新昌'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/10.png',
	       area:'舟山'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/11.png',
	       area:'衢州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/12.png',
	       area:'丽水'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/13.png',
	       area:'临安'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/14.png',
	       area:'乌镇'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/15.png',
	       area:'湖州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/1/16.png',
	       area:'温州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/1.png',
	       area:'苏州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/2.png',
	       area:'锦溪'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/3.png',
	       area:'黎里'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/4.png',
	       area:'黄山'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/5.png',
	       area:'婺源'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/6.png',
	       area:'徽州'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/7.png',
	       area:'景德镇'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/8.png',
	       area:'三清山'
	      },
	      {
	       imgUrl: '../../../static/image/discover/2/9.png',
	       area:'上海'
	      },
	    ]
	}
  }
}


 


</script>
