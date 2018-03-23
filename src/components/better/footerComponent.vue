<template>
    <div class="footer-div">
        <div class="footer-jx">
            <!-- <transition name="slide-fade"> -->
                    <router-link to="/home" >
                <img :src="`${show1}`"  alt="" >
        </router-link>
            <!-- </transition> -->

              
            
        </div>
        <div class="footer-fx">
            <!-- <transition name="slide-fade"> -->
                  <router-link to="/find">
        <img :src="`${show2}`" alt=""  >
        </router-link>
            <!-- </transition> -->
        </div>

        <div class="footer-gs" @click="swit">
            <transition name="slide-fade">
                  <router-link to="/story">
          <img src="../../../static/image/main-gs1.png" alt=""  >
                <!-- <img src="../../../static/image/main-gs2.png" alt="" > -->
        </router-link>
            </transition>
        </div>

        <div class="footer-wd"  @click="swit">
            <transition  name="fade">
        <router-link to="/personal">
                <img src="../../../static/image/main-wd1.png" alt="" >
                <!-- <img src="../../../static/image/main-wd2.png" alt="" v-show="!show4" @click="sort4"> -->
        </router-link>
            </transition>

            
        </div>
    </div>
</template>
<script>
    
    export default {
          data(){
                return {
                    show1:"../../../static/image/main-jx2.png",
                    show2:'../../../static/image/main-fx1.png',
                    show3:true,
                    show4:true,
                    cont:0
                }
            },
        methods:{
            swit(){
                 if( this.$router.history.current.path === "/home"  ){
                     this.show1 = "../../../static/image/main-jx2.png"
                     this.show2 = "../../../static/image/main-fx1.png"
                 }
                    if( this.$router.history.current.path === "/find"  ){
                     this.show2 = "../../../static/image/main-fx2.png"
                     this.show1 = "../../../static/image/main-jx1.png"
                    //  console.log(this.$router.history.current.path == "/home")
                 }
                     console.log(this.$router.history.current.path)
                 
                //  if(this.$router.history.current.path != "/find"){
                //      this.show2 = "../../../static/image/main-fx2.png"
                //  }
                    // console.log(this.$router.history.current.path)

            }

        },
        mounted(){
            // console.log(1)
            swit()
        }
    }
</script>
<style lang="scss">
.footer-div{
    width:100%;
    height:0.5rem;
    background:#fff;
    border-top:0.01rem solid #ccc;
    position: fixed;
    bottom:0;
    display: flex;
    justify-content: space-around;
    div{
        width:20%;
        height:0.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9;
        img{
            display: block;
            width:0.26rem;
            height:0.44rem;
        z-index: 9;
            
            }
    }
}
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
