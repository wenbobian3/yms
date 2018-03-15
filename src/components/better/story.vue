<template>
  <div class="story-boss">
      <div class="story-ms">
          <div class="story-gs">民宿故事</div>
          <div class="story-zj">走进他们的曾经，打开一扇扇心门</div>
      </div>
<storys></storys>
<storys></storys>
      
  </div>
</template>
<script>
    import storys from './storys.vue'
    export default {
        components:{
            storys
        }
    }
</script>
<style  lang="scss">

 .story-boss{
     width:100%;
   .story-ms{
        height:0.625rem;
        text-align: center;
        .story-gs{
            height:0.3rem;
            width:0.87rem;
            border:0.01rem solid #ccc;
            text-align: center;
            line-height: 0.3rem;
            font-size:0.165rem;
            margin-left:auto;
            margin-right:auto;
            margin-top:0.1rem;
            margin-bottom:0.1rem;
        }
        .story-zj{
            font-size:0.165rem;          
            color:#95f490;  
        }

    }
   
           

 }
   
</style>
