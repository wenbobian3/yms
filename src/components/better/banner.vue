<template>
  <div class="banner">
      <mt-swipe :show-indicators="false">
  <mt-swipe-item class="item"> <img src="../../../static/image/banner1.png" alt=""></mt-swipe-item>
  <mt-swipe-item class="item"> <img src="../../../static/image/banner2.png" alt=""></mt-swipe-item>
  <mt-swipe-item class="item"> <img src="../../../static/image/banner3.png" alt=""></mt-swipe-item>
</mt-swipe>

     
  </div>
</template>

<script>

</script>
<style lang="scss">
.banner{
    width:100%;
    height:2.2rem;
    position: absolute;
    top:0;
    left:0;
    .item{
        float:left;
        text-align:center;
    }
    img{
        width:100%;
        height:100%;
    }
}
</style>
