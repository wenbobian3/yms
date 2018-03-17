<template>
    <!-- <mt-search v-model="value">
    <mt-cell
        v-for="item in result"
        :title="item.title"
        :value="item.value"  placeholder="搜索">
    </mt-cell>
</mt-search> -->
<div>
  <mt-button icon="back" class="back" @click="show"></mt-button>
<mt-search cancel-text="取消"placeholder="搜索民宿名称"> </mt-search>
</div>


</template>
<script>
    export default {
        methods:{
            show(){
                this.$router.go(-1)
            }
        }
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
