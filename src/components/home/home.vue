<template>
  <div>
      <header-component></header-component>
      <main>
      <cheap></cheap>
      <water></water>
      <liter></liter>
      <cheap></cheap>
      <cheap></cheap>
      <cheap></cheap>
      <story></story>
<activity></activity>
      
      </main>
      <footerComponent></footerComponent>
  </div>
</template>
<script>
    import headerComponent from '../better/headerComponent.vue'
    import cheap from '../better/cheap.vue'
    import water from '../better/water.vue'
    import liter from '../better/liter.vue'
    import footerComponent from '../better/footerComponent.vue'
    import story from '../better/story.vue'
    import activity from '../better/activity.vue'
    import vuex from 'vuex'
    import {mapGetters} from 'vuex'
    import axios from 'axios'
    
    export default {
      
          computed:{
            ...mapGetters([
                'getmzth',
                'getwydd',
                'getzsej',
                'getzz'
            ])
        },
       components:{
           headerComponent,
            cheap,
            footerComponent,
            story,
            activity,
            water,
            liter
       },
         methods:{
            add(){
                const that=this
                axios.get('/api/posts')
                 .then(function(res){
                    that.$store.commit('setCount',res.data[0].data.mzth)
                    that.$store.commit('setWy',res.data[0].data.wydd)
                    that.$store.commit('setzs',res.data[0].data.zsej)
                    that.$store.commit('setzz',res.data[0].data)
                    that.position = that.getmzth
                    
                    console.log(that.getzz)
                 })
            }
        },
        mounted(){
                 this.add()
        }

    }
</script>
<style>
main{
    flex: 1;
    overflow: auto;
    padding-bottom:0.5rem;
}

</style>


