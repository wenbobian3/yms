<template>
  <div class="cheap">
      <div class="cheap-wz">
        <h2 class="cheap-h2">每周特惠</h2>
        <div>
            <h3 class="cheap-h3">每周优惠民俗任君选</h3>
            <div class="cheap-span">
            <h4 class="cheap-span-a">1</h4><h4 class="cheap-span-b"> / 5</h4>
            </div>
        </div>
      </div>
    <hotel></hotel>
  </div>
</template>

<script>
import hotel from './hotel.vue'
    export default {
        components:{
            hotel
        }
    }

</script>


<style lang="scss">
.cheap{
    height:2.98rem;
    width:100%;
    .cheap-wz{
        height:0.58rem;
        width:100%;
        .cheap-h2{
            height:0.29rem;
            line-height:0.29rem;
            text-align: center;
            font-size:0.17rem;
        }
    }
    .cheap-h3{
        height:0.29rem;
        line-height:0.29rem;
        font-size:0.135rem;
        text-align:center;
        float:left;
        margin-left:34%;
        color:#5dc578;
    }
    .cheap-span{
        float:right;
        display: flex;
        margin-right:0.1rem;
        .cheap-span-a{
            margin-right:0.1rem;
                font-size:0.2rem;        
            }
            .cheap-span-b{
                color:#ccc;
                font-size:0.125rem;  
                margin-top:0.05rem;      
            }
    }
   
}
</style>
