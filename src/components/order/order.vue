<template>


  <div class="order">
    <orderHeader></orderHeader>
    <orderContent></orderContent>
    <orderFooter></orderFooter>
  </div>
 
    





</template>



<script>

  import orderHeader from './orderHeader.vue'
  import orderContent from './orderContent.vue'
  import orderFooter from './orderFooter.vue'

  export default {

    components:{
      orderHeader,
      orderContent,
      orderFooter
    }

  }
</script>

<style lang="scss">
  .order{
    height: 100%;
    display: flex;
    flex-direction: column;
    .orderContent{
      flex: 1;
      overflow: auto;
    }
  }




</style>


