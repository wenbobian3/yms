<template>
<div>
  <mt-button icon="back" class="back" @click="show"></mt-button>
<mt-search cancel-text="取消"placeholder="搜索民宿名称"  :value="sear" v-on:input="search">
        <mt-cell
        v-for="(item,index) in result"
        :title="item.name"
        :value="item.area"  placeholder="搜索" :key="index">
    </mt-cell>
     </mt-search>
</div>


</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                result:[],
                sear:''
            }
        },
        methods:{
            show(){
                this.$router.go(-1)
            },
            search(){
                const that = this
                 axios({
                      method: 'post',
                        url: '/api/position/qdsearch',
                        data: {
                            keyword: this.sear
                        }
                 })
                 .then(function(res){
                     console.log(res)
                     that.result = res.data
                     
                 })
            }
        },
        
    }
</script>
<style>

.mint-searchbar{
    background-color:#fff;
}
.mint-searchbar-core{
    background:#F8F8FF;
}
.mint-searchbar-cancel{
    font-size:0;
}
.mint-searchbar-inner .mintui-search{
    margin-left:0.5rem;
    font-size:0.2rem;
    margin-right:0.2rem;
}
.sear-ch{
    display: flex;
}
.back{
    position: absolute;
    top:0.08rem;
    left:0.05rem;
    z-index: 99999;
    background: #fff;
}
</style>
