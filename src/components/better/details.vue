<template>
<div>
  <div class="details">
      <div class="details-left">
          <img src="../../../static/image/daohangback.png" alt="">
      </div>
      <div class="details-center">
          民宿详情
      </div>
      <div class="details-right">
          <div class="details-right-left">
              <img src="../../../static/image/minsu_detail_share.png" alt="">
          </div>
          <div class="details-right-right">
              <img src="../../../static/image/minsu_detail_shou.png" alt="">
          </div>
      </div>
  </div>
  <div class="details-banner">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item>
      <img src="../../../static/image/my1.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
      <img src="../../../static/image/my2.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
      <img src="../../../static/image/my3.png" alt="">            
        </mt-swipe-item>
                <mt-swipe-item>
      <img src="../../../static/image/my4.png" alt="">            
        </mt-swipe-item>
        </mt-swipe>
     <div class="details-a">1</div><div class="details-b">/4</div>
  </div>
  <div class="datails-wz">
      <h2>春秋舍</h2>
      <div class="datails-right">
      <div class="datails-dd">西安</div>
      <div class="datails-fg">文艺范</div>
      </div>

  </div>
  <div class="datails-fx">
      <h3 class="datails-fx-h3">体验旧建筑改造的民宿</h3>
      <h4 class="datails-fx-h4">酒店是由废弃车间及苏联旧建筑酒店酒店是由废弃车间及苏联旧建筑酒店酒店是由废弃车间及苏联旧建筑酒店酒店是由废弃车间及苏联旧建筑酒店酒店是由废弃车间及苏联旧建筑酒店是由废弃车间及苏联旧建筑酒店是由废弃车间及苏联旧建筑酒店是由废弃车间及苏联旧建筑酒店是由废弃车间及苏联旧建筑酒店是由废弃车间及苏联旧建筑</h4>

    <information></information>
  </div>
</div>
</template>
<script>
import information from './information.vue'
    export default {
        components:{
            information
        }
    }
</script>
<style lang="scss">
.details{
    height:0.45rem;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .details-left{
                    width:0.27rem;
            height:0.27rem;
        img{
            width:100%;
            height: 100%;
                display: block;
                margin-left:0.15rem;
        }
    }
    .details-center{
        font-size:0.255rem;
    }
    .details-right{
        width:0.695rem;
        height:0.25rem;
        display: flex;
            margin-right:0.15rem;
        
        img{
            display: block;
            width:100%;
            height:100%;
        }
        .details-right-left{
            width:0.23rem;
            height:0.23rem;
            margin-right:0.2rem;
        }
        .details-right-right{
            width:0.23rem;
            height:0.23rem;
        }
    }

}
.details-banner{
    height:2.47rem;
    width:100%;
    position: relative;
    img{
       width:100%;
       height:100%; 
    }
    .details-a{
        position: absolute;
        right:0.5rem;
        bottom:0.23rem;
        font-size:0.26rem;
        color:#fff;
    }
    .details-b{
        position: absolute;
        right:0.22rem;
        bottom:0.2rem;
        font-size:0.23rem;
        color:orangered;
    }
}
.datails-wz{
    height:0.5rem;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.025rem solid #ededed;
    h2{
        font-size:0.16rem;
        margin-left:0.11rem;
    }
    .datails-right{
        width:0.9rem;
        display: flex;
        margin-right:0.04rem;
        .datails-dd{
            width:0.3rem;
            height:0.27rem;
            border:0.01rem solid #8ac166;
            color:#80d762;
            font-size:0.13rem;
            text-align: center;
            line-height: 0.27rem;
            margin-right:0.1rem;
        }
         .datails-fg{
            width:0.45rem;
            height:0.28rem;
            border:0.01rem solid #6dd4b6;
            color:#73e2c2;
            font-size:0.13rem;
            text-align: center;
            line-height: 0.28rem;
         }
       
    }
    
}

            
.datails-fx{
        margin-left:0.2rem;
    
    .datails-fx-h3{
        height:0.49rem;
        font-size:0.19rem;
        line-height:0.49rem;
        text-align:center;
    }
    .datails-fx-h4{
        width:3.3rem;
        font-size:0.14rem;
        line-height:0.25rem;
        text-indent: 0.1rem;
         overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
    }
}
</style>
