<template>
  <div class="map ui-border-b">
      <div class="map-position">民宿位置</div>
      <div class="map-supper">
           <as></as>
      </div>
      <div class="map-number">
        从当前位置到目的地的距离是：909.22千米。
      </div>
  </div>
</template>
<script>
  import as from './as.vue'
  export default {
    components:{
      as
    }
  }
</script>

<style lang="scss">
.map{
  height:2.735rem;
}
.map-supper{
  width:3.38rem;
  height:1.99rem;
}
.map-position{
  text-align: center;
  font-size:0.165rem;
  font-weight: 900;
  color:#000;
}
</style>






