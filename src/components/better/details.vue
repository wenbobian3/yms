<template>
<div>
    
  <div class="details">
      <div class="details-left">
            <img src="../../../static/image/daohangback.png" alt="" @click="show">
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
  <div class="mainn">
 <div class="details-banner">
      <mt-swipe :show-indicators="false" @change="handleChange">
        <mt-swipe-item v-for="(l,index) in item.dImgUrl" :key="index">
      <img :src="`http://10.9.163.10:3000/uploads/${l}`" alt="">
        </mt-swipe-item>
        </mt-swipe>
     <div class="details-a">{{ind}}</div><div class="details-b">/ {{item.dImgUrl.length}}</div>
  </div>
  <div class="datails-wz">
      <h2>{{item.name}}</h2>
      <div class="datails-right">
      <div class="datails-dd ui-border">{{item.area}}</div>
      <div class="datails-fg ui-border">{{item.style}}</div>
      </div>
  </div>
  <div class="datails-fx">
      <h3 class="datails-fx-h3">{{item.title}}</h3>
      <h4 class="datails-fx-h4">{{item.describe}}</h4>

    <information :item="item"></information>
  </div>
  </div>
 
</div>
</template>
<script>
import information from './information.vue'
    import axios from 'axios'
    export default {
        props:['id'],
        data(){
            return {
                item:{},
                ind:1
            }
        },
        components:{
            information
        },
        methods:{
            show(){
                this.$router.go(-1)
            },
            add(){
                const that=this
                console.log(this.id)
                axios.get(`/api/position/items/${this.id}`)
                 .then(function(res){
                    // console.log(res.data.posts[0].data)
    console.log(res.data)
                    that.item = res.data 
                 })
            },
            handleChange(index){
                this.ind = index + 1
            }
        },
        mounted(){
            this.add()
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
            background: #f8f8f8;

            }
        img{
            width:100%;
            height: 100%;
                display: block;
                margin-left:0.15rem;
        }
    }
    .details-center{
        font-size:0.17rem;
        font-weight: 900;
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
            width:0.2rem;
            height:0.2rem;
            margin-right:0.2rem;
        }
        .details-right-right{
            width:0.2rem;
            height:0.2rem;
        }
    }

}
.mainn{
    flex: 1;
    overflow: auto;
    // flex-wrap: wrap;
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
            border-color:#8ac166;
            color:#80d762;
            font-size:0.13rem;
            text-align: center;
            line-height: 0.27rem;
            margin-right:0.1rem;
        }
         .datails-fg{
            width:0.45rem;
            height:0.28rem;
            border-color:#6dd4b6;
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
