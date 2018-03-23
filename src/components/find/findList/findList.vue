<template>
  <div class="findList">
    <findListHeder></findListHeder> 
    <div class="findListCCC"  
    v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="4">
      <findListContent  v-for="(item,i) in list" :key="i"></findListContent>
    </div>
    
  </div>
</template>
<script>
  import findListHeder from './findListHeader.vue'
  import findListContent from './findListContent.vue'
  export default {
    data(){
      return{
        list:[
          {message:'123'},
          {message:'123'},
          {message:'123'},
          {message:'123'}

        ]
      }
    },
    methods:{
      loadMore() {
      this.loading = true;
      this.handleClose()
      // this.$indicator.open('Loading...'); 
      const that = this;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];        
        for (let i = 1; i <= 4; i++) {
          this.list.push(last + i);
        }
        that.handle()
        this.loading = false;
        
        
      }, 1500);
    },
        handleClose:function(){ 
      this.$indicator.open('Loading...'); 
      },
      handle:function(){ 
      this.$indicator.close()
      },

    },
    // mounted(){
    //   this.handleClose()
    // },

    components:{
      findListHeder,
      findListContent
    }
  }
</script>

<style lang="scss">
  .findList{
    display: flex;
    flex-direction: column;
    height: 100%;
    .findListCCC{
      flex: 1;
      overflow: auto;
    }
  }
</style>