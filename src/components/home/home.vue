<template>
  <div>
      <header-component></header-component>
      <main>
      <cheap></cheap>
      <cheap></cheap>
      <cheap></cheap>
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
    import footerComponent from '../better/footerComponent.vue'
    import story from '../better/story.vue'
    import activity from '../better/activity.vue'
    
    export default {
       components:{
           headerComponent,
            cheap,
            footerComponent,
            story,
            activity
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


