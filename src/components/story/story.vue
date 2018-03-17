<template>
  <div class="story">
      <storyHeader></storyHeader>
      <storyContent class="storyContentFirst"></storyContent>
      <storyContent class="storyContentLast"></storyContent>
      <footerComponent></footerComponent>
  </div>
</template>

<style lang="scss">
  @import "../../frozenui/dist/css/basic.css";
  @import "../../frozenui/dist/css/frozen.css";

  .story{
    display: flex;
    flex-direction: column;
    height: 100%;
    .storyContentFirst{
      margin-top: 0.98rem;
    }
    .storyContentLast{
      margin-bottom: 0.51rem;
    }
  }
</style>

<script>
  import storyHeader from './storyHeader'
  import storyContent from './storyContent'
  import footerComponent from '../better/footerComponent'
  export default {
    components:{
      storyHeader,
      storyContent,
      footerComponent
    }
  }
</script>