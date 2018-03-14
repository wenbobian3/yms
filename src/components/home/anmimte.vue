<template>
<div class="no1">
    <transition appear   appear-class="custom-appear-class">
  <img src="/static/image/yms.png" alt="" class="yms1" transition="expand">
    </transition>
      </div>
</template>
<script>

  export default {
        mounted(){
       this.add()
    },
    methods:{
      add(){
        let that = this
        setTimeout(function(){
          that.$router.push('/home')
        },4000)
      }
    }
}

</script>



<style lang="scss">

#app {
  width:100%;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.no1{
  width:100%;
  height:100%; 
   overflow: hidden; 
}

.yms1{
  width:100%;
  height: 100%;
  transition: 4s;
  transform:scale(1.2);

}
.custom-appear-class{
  transform:scale(1);  

}
</style>
