<template>
    <div class="datails-fj">
          <h3 class="datails-fx-h3-2">房型房价</h3>
          <div  v-for="(l,index) in item.room" :key="item._id">
              <mt-swipe :show-indicators="false">
  <mt-swipe-item v-for="(v,inx) in l.houseImg" :key="inx">
          <img class="datails-fx-img" :src="`http://10.9.163.10:3000/uploads/${v}`" alt="">
  </mt-swipe-item>
</mt-swipe>
          <h4 class="datails-fx-h4">房型：{{l.houselayout}}</h4>
          <div class="datails-jg">
              <div class="best">
 <h3 class="datails-jg-zz">价格：</h3><h3 class="datails-jg-qq">￥{{l.usual}} </h3><div class="datails-jg-bb"> / 平常</div><div class="datails-jg-qo">￥{{l.original}}</div><div class="datails-jg-bb" style="text-decoration:line-through;"> / 原价</div>
              </div>
 <div class="best-a">
 <div class="datails-jg-qq">￥{{l.weekend}}</div><div class="datails-jg-bb"> / 周末</div>
      </div>       
      <div class="best-b">
          <div class="best-c">
    <div class="datails-jg-qq"  style="float:none">￥{{l.holiday}}</div><div class="datails-jg-bb"> / 节日</div>
          </div>
          <!-- <router-link to="order"> -->
<router-link to="/order"  :id="l._id">立即订购</router-link>
            <!-- <span @click="showto" :id="l._id">立即订购</span> -->
          </router-link>
      </div>
          </div>
          </div>

        <comment></comment>
        <mapcli></mapcli>
        <subscribe></subscribe>   

      </div>
</template>
<script>
    import comment from './comment.vue'
    import mapcli from './mapcli.vue'
    import subscribe from './subscribe.vue'
    export default {
        props:['item'],
                data(){
            return {
                items:[
                   { message: 'Foo' },
                     { message: 'Bar' },
                     { message: 'Bar' },
                     { message: 'Bar' }
                ]
            }
        },
        components:{
            comment,
            mapcli,
            subscribe
        },
        mounted(){
            console.log(this.item)
        },
        methods:{
            showto(){
                
                console.log(this.id)
            }
        }
    }
</script>
<style lang="scss">
@import "../../frozenui/dist/css/basic.css";
@import "../../frozenui/dist/css/frozen.css";
//  .datails-fg{
//             width:0.45rem;
//             height:0.28rem;
//             border:0.01rem solid #6dd4b6;
//             color:#73e2c2;
//             font-size:0.13rem;
//             text-align: center;
//             line-height: 0.28rem;
            
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
    .mint-swipe{
    width: 3.375rem;
    height: 2.24rem;
}
            
    
    .datails-fx-h3-2{
        margin-top:0.13rem;
        font-size:0.17rem;
    }
    .datails-fx-img{
        width:3.375rem;
        height:2.24rem;
    }
    .datails-fx-h4{
        font-size:0.16rem;
        font-weight: 900;
    }
    .datails-jg{
        width:3.375rem;        
        height:0.91rem;
        .best{
            width:100%;
            height:0.23rem;
            display: flex;
            flex-wrap: wrap;
            .datails-jg-zz{
        font-weight: 900;        
        font-size:0.16rem;
        // width:1.5rem;
            }
            .datails-jg-qq{
                font-size:0.16rem;
                color:#ff5427;
            }
            .datails-jg-bb{
                font-size:0.16rem;
                color:#ccc;
                // width:1.5rem;
                
            }
            .datails-jg-qo{
                font-size:0.16rem;
                color:#ccc;
                text-decoration:line-through;
                margin-left:0.3rem;
                
            }
        }
        .best-a{
            display: flex;
            margin-left:0.48rem;height:0.23rem;
            .datails-jg-qq{
                font-size:0.16rem;
                color:#ff5427;
            }
            .datails-jg-bb{
                font-size:0.16rem;
                color:#ccc;
                // width:1.5rem;
            }
            .datails-jg-qo{
                font-size:0.16rem;
                color:#ccc;
            }
        }
        .best-b{
            display: flex;
             margin-left:0.48rem;
             height:0.23rem;
             justify-content: space-between;
             .best-c{
                 display: flex;
             }
            .datails-jg-qq{
                font-size:0.16rem;
                color:#ff5427;
            }
            .datails-jg-bb{
                font-size:0.16rem;
                color:#ccc;
                // width:1.5rem;
            }
            .datails-jg-qo{
                font-size:0.16rem;
                color:#ccc;
            }
            span{
                display: inline-block;
                height:0.25rem;
                background:#fb6914;
                font-size:0.15rem;
                color:#fff;
                text-align: center;
                line-height:0.25rem;
                width:0.85rem;
                border-radius: 0.05rem;
            }
        }
    }
    
}


</style>
