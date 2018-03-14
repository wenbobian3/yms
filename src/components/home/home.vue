<template>
  <div>
      <header-component></header-component>
      <cheap></cheap>
  </div>
</template>
<script>
    import headerComponent from '../better/headerComponent.vue'
    import cheap from '../better/cheap.vue'
    
    export default {
       components:{
           headerComponent,
            cheap
           
       }
    }
</script>

