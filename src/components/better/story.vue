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
    import storys from './storys'
    import axios from 'axios'
    import vuex from 'vuex'
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                position:[]
            }
        },
        computed:{
            ...mapGetters([
                'getmzth',
                'getwydd',
                'getzsej',
                'getzz'
            ])
        },
        methods:{
            add(){
                const that=this
                axios.get('/api/position/qdzy')
                 .then(function(res){
                    console.log(res.data.posts[0].data)
                     
                    that.$store.commit('setCount',res.data.posts[0].data.mzth)
                    that.$store.commit('setWy',res.data.posts[0].data.wydd)
                    that.$store.commit('setzs',res.data.posts[0].data.zsej)
                    that.$store.commit('setzz',res.data.posts[0].data)
                    // console.log(that.getzz)
                    that.position = that.getmzth
                 })
            }
        },
        mounted(){
                 this.add()
        },
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
