<template>
  <div class="myOrder">
    <myOrderHeader></myOrderHeader> 
    <myOrderNav></myOrderNav> 
   
    
  </div>
</template>
<script>
  import myOrderHeader from './myOrderHeader.vue'
  import myOrderNav from './myOrderNav.vue'
  export default {

    components:{
      myOrderHeader,
      myOrderNav
    }
  }
</script>

<style lang="scss">
  .myOrder{
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #f1f1f1;
  }
</style>