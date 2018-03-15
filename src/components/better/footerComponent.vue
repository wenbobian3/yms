<template>
    <div class="footer-div">
        <div class="footer-jx">
        <router-link to="/home">
          <img src="../../../static/image/main-jx1.png" alt="" v-show="show1" @click="sort1">
                <img src="../../../static/image/main-jx2.png" alt="" v-show="!show1" @click="sort1">
        </router-link>
              
            
        </div>
        <div class="footer-fx">
        <router-link to="/find">
        <img src="../../../static/image/main-fx1.png" alt=""  v-show="show2" @click="sort2">
                <img src="../../../static/image/main-fx2.png" alt=""  v-show="!show2" @click="sort2">
        </router-link>
                    
                
            
        </div>
        <div class="footer-gs">
        <router-link to="/story">
          <img src="../../../static/image/main-gs1.png" alt="" v-show="show3" @click="sort3">
                <img src="../../../static/image/main-gs2.png" alt="" v-show="!show3" @click="sort3">
        </router-link>
                    
              
            
        </div>
        <div class="footer-wd">
        <router-link to="/personal">
        
                <img src="../../../static/image/main-wd1.png" alt="" v-show="show4" @click="sort4">
                <img src="../../../static/image/main-wd2.png" alt="" v-show="!show4" @click="sort4">
        </router-link>
            
        </div>
    </div>
</template>
<script>
    
    export default {
          data(){
                return {
                    show1:false,
                    show2:true,
                    show3:true,
                    show4:true,
                    cont:0
                }
            },
        methods:{
            sort1(event){
                //  if(  )
                this.cont++
                console.log(this.cont)                
                this.show1 = !this.show1
                this.show2 = !this.show2
                this.show3 = this.show3
                this.show4 = this.show4

            },
             sort2(){
                this.show2 = !this.show2
                this.show1 = !this.show1
                this.show3 = this.show3
                this.show4 = this.show4

            },
             sort3(){
                this.show3 = !this.show3
                this.show1 = !this.show1
                this.show2 = !this.show2
                this.show4 = !this.show4

            },
             sort4(){
                this.show4 = !this.show4
                this.show1 = !this.show1
                this.show2 = !this.show2
                this.show3 = !this.show3

            }

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
        img{
            display: block;
            width:0.26rem;
            height:0.44rem;
            }
    }
}
</style>
