<template>
  <div class="findMain">
      <findHeader></findHeader>  
      <findContent></findContent>
      <findContent2></findContent2>
      <findContent3></findContent3>
      <findContent4></findContent4>
      <findContent5></findContent5>
      <findContent6></findContent6>
      <findContent7></findContent7>
      <findContent8></findContent8>
      <footerComponent></footerComponent>
  </div>
</template>
<script>
  import findHeader from './findHeader'
  import findContent from './findContent'
  import findContent2 from './findContent2'
  import findContent3 from './findContent3'
  import findContent4 from './findContent4'
  import findContent5 from './findContent5'
  import findContent6 from './findContent6'
  import findContent7 from './findContent7'
  import findContent8 from './findContent8'
  import footerComponent from '../better/footerComponent'

  export default {
    components:{
      findHeader,
      findContent,
      findContent2,
      findContent3,
      findContent4,
      findContent5,
      findContent6,
      findContent7,
      findContent8,
      footerComponent
    }
      
  }
</script>

<style lang="scss">
  .findContent{
    border-bottom: 0.08rem solid #f1f1f1;
    padding-bottom: 0.15rem;
    .findContentTitle{
      height: 0.45rem;
      border-bottom: 0.005rem solid #98ad9c;
      display: flex;
      align-items: flex-end;
      h2{
        display: block;
        font-size: 0.16rem;
        height: 0.3rem;
        width: 0.9rem;
        text-align: center;
        line-height: 0.3rem;
        background: #7ac278;
        font-weight: 600;
        color: #fff;
      }
    }
    .findContentArea{
      ul{
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.15rem;
        li{
          width: 25%;
          height: 0.96rem;
          margin: 0;
          display: flex;
         
          margin-top: 0.16rem;
          a{
            color: #000;
            
            display: flex;
            flex-direction: column;  
            justify-content: center;
            align-items: center;
          }
          img{
            width: 0.76rem;
            height: 0.76rem;
          }
          span{
            font-size: 0.14rem;
            margin-top: 0.05rem;
            text-align: center;
          }
        }
      }
    }
    
  }

</style>
