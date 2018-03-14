<template>
  <div class="header">
    <header class="header-top">
    <search></search>
    </header>
    <banner></banner>    
  </div>
</template>
<script>
    import search from './search.vue'
    import banner from './banner.vue'
    export default {
        components:{
            search,
            banner

        }
    }
</script>

<style lang="scss">
.header{
    height:2.2rem
}
.header-top{
    width:100%;
    height:0.77rem;
    line-height: 0.77rem;
    position: relative;
    
}
</style>
