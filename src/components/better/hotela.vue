<template>
  <div class="hotel">
      <div class="hotel-first">
 <div class="hotel-img">
         <mt-swipe :auto="0" :show-indicators="false">
  <mt-swipe-item  v-for="(v,index) in position"  :key="index" >
      <router-link to="/details">
      <img :src="`http://10.9.163.10:3000/uploads/${v.imgUrl}`" alt="">
 <div class="hotel-span-a">
          <h3>￥</h3><h3>{{v.price}}</h3><h4>起</h4>
      </div>
      <div class="hotel-span-b">
          <h3>{{v.name}}</h3>
          <div class="hotel-div">
           <h3 class="hotel-h3-a">{{v.area}}</h3> <h3 class="hotel-h3-b">{{v.style}}</h3>
          </div>
      </div>
      
      </router-link>
  </mt-swipe-item>

</mt-swipe>
      </div>
     
      </div>
     
  </div>
</template>

<script>
    
    import axios from 'axios'
    // import vuex from 'vuex'
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                position:[]
            }
        },
        computed:{
            ...mapGetters([
                'getmzth',
                'getwydd',
                'getzsej',
                'getzz'
            ])
        },
        methods:{
            add(){
                const that=this
                // axios.get('/api/posts')
                //  .then(function(res){
                    // that.$store.commit('setCount',res.data[0].data.mzth)
                    // that.$store.commit('setWy',res.data[0].data.wydd)
                    // that.$store.commit('setzs',res.data[0].data.zsej)
                    // that.$store.commit('setzz',res.data[0].data)
                    setTimeout(function(){
                    that.position = that.getwydd
                    },400)
              
                    
                    // console.log(this.mapState )
                //  })
            }
        },
        mounted(){
                 this.add()
        }
    }

</script> 

<style lang="scss">
.hotel{
    height:2.3rem;
    .hotel-first{
        width:99%;
    }
    .hotel-img{
        width:99%;
    height:2.3rem;
        // height:1.65rem;
        border:0.02rem solid rgb(180, 215, 231);
        img{
            height:1.65rem;
            width:99%;
        }
        // .mint-swipe{
        //     overflow: visible;
        //     .mint-swipe-items-wrap{
        //         overflow: visible;
        //         .mint-swipe-item{
        //             display: block;
        //         }
        //     }
        // }
    }
    .hotel-span-a{
        display: flex;
        height:0.3rem;
        h3{
            font-size:0.16rem;
            color:#ec6e00;
        }
        h4{
            font-size:0.16rem;
            color:#676767;
        }
    }
    .hotel-span-b{
        display:flex;
        height:0.3rem;
        justify-content:space-between;
        color:#6d6d6f;
        .hotel-div{
            display: flex;
            .hotel-h3-a{
                width:100%;
                height:0.2rem;
                border:0.01rem solid #9bac9c;
                color:#8fb48b;
                font-size:0.13rem;
                margin-right:0.1rem;
                text-align:center;
                line-height: 0.2rem;                
                
            }
            .hotel-h3-b{
                width:100%;
                height:0.2rem;
                font-size:0.13rem;
                text-align:center;
                line-height: 0.2rem;                
                border:0.01rem solid #14c1e1;
                color:#14c1e1;
                margin-right:0.1rem;
                
            }

        }
        h3{
            font-size:0.18rem;
        }
    }
}

</style>
