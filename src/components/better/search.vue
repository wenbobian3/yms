<template>
<div id="inp">
  <div :class="searchFixed == true ? 'isFixed' : 'ys-input' " >
       <router-link to="/search">
       <div class="ys-span">
               <img class="ys-img" src="../../../static/image/sousuo.png" alt="">
           <h2 class="h2-a">搜索目的地/民宿名称</h2>
       </div>
       </router-link>
   </div>
</div>
 
</template>
<script>
    export default {
        data(){
            return {
                searchFixed: true
            }
        },
        mounted(){
            window.addEventListener('scroll',this.handScroll)
        },
        methods:{
            handScroll(){
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if( scrollTop >0 && scrollTop< 161){
                    this.searchFixed = true
                }else{
                    this.searchFixed = false
                }
            }
        }
    }
</script>
<style lang="scss">
.isFixed{
    position:fixed;
    background-color:#Fff;
    top:0.2rem;
    left:0;
    right:0;
    z-index:999;
        width:3.16rem;
    height: 0.36rem;
    background: #fff;
    border-radius: 0.1rem;
    margin:auto;
  }
.h2-a{
    color:#ccc;
}
.ys-input{
    width:3.16rem;
    height: 0.36rem;
    background: #fff;
    border-radius: 0.1rem;
    position: absolute;
    left:0;
    top: 0;
    bottom:0;
    right:0;
    margin:auto;
    z-index: 9;

}
.ys-span{
    text-align: center;
    height:0.37rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .ys-img{
            width:0.16rem;
            height:0.16rem;
            padding-right:0.1rem;
 
    }
    h2{
        font-size: 0.1rem;
    }
}
    
</style>
