<template>
  <div class="personalMain">
      <personalHeader1></personalHeader1>
      <personalSetting></personalSetting>
      <footerComponent></footerComponent>
  </div>
</template>
<script>
  import personalHeader1 from './personalHeader1'
  import footerComponent from '../better/footerComponent'
  import personalSetting from './personalSetting'
  export default {
    components:{
      personalHeader1,
      footerComponent,
      personalSetting
    }
  }
</script>
<style lang="scss">
 .personalMain{
  height:100%;
  background:#f1f1f1;
 }
</style>