<template>
  <div class="storyDetails">
      <storyDetailsHeader></storyDetailsHeader>
      <storyDetailsContent></storyDetailsContent>
      <storyDetailsFotter></storyDetailsFotter>
  </div>
</template>
<script>
  import storyDetailsHeader from './storyDetailsHeader'
  import storyDetailsContent from './storyDetailsContent'
  import storyDetailsFotter from './storyDetailsFotter'
  export default {
    components:{
      storyDetailsHeader,
      storyDetailsContent,
      storyDetailsFotter
    }
  }
</script>



<style lang="scss">

  .storyDetails{
    height: 100%;
    display: flex;
    flex-direction: column;
    .storyDetailsContent{
      flex: 1;
      overflow: auto;
    }
  }


</style>