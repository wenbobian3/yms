<template>
  <div class="addPerson">
   <addPersonHeader></addPersonHeader>
   <addPersonContent></addPersonContent>
     
  </div>
</template>
<script>
  import addPersonHeader from './addPersonHeader'
  import addPersonContent from './addPersonContent'
 
  export default {
    components:{
      addPersonHeader,
      addPersonContent
    }
  }
</script>

<style>
  .addPerson{
    height: 100%;
    background: #f1f1f1;
  }
</style>
