<template>
  <div class="newPerson">
   <newPersonHeader></newPersonHeader>
   <newPersonContent></newPersonContent>
     
  </div>
</template>
<script>
  import newPersonHeader from './newPersonHeader'
  import newPersonContent from './newPersonContent'
 
  export default {
    components:{
      newPersonHeader,
      newPersonContent,
    }
  }
</script>

<style>
  .newPerson{
    height: 100%;
    background: #f1f1f1;
  }
</style>
