<template>
  <div class="findList">
    <findListHeder></findListHeder> 
    <div class="findListCCC">
      <findListContent></findListContent>
      <findListContent></findListContent>
      <findListContent></findListContent>
      <findListContent></findListContent>
    </div>
    
  </div>
</template>
<script>
  import findListHeder from './findListHeader.vue'
  import findListContent from './findListContent.vue'
  export default {

    components:{
      findListHeder,
      findListContent
    }
  }
</script>

<style lang="scss">
  .findList{
    display: flex;
    flex-direction: column;
    height: 100%;
    .findListCCC{
      flex: 1;
      overflow: auto;
    }
  }
</style>