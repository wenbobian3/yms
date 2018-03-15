<template>
  <div class="hotel">
      <div class="hotel-first">
 <div class="hotel-img">
         <mt-swipe :auto="0" :show-indicators="false">
  <mt-swipe-item>
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521085329981&di=ffa8251cd53fba5b4348df3c449e568f&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170115%2F4370041484410678.jpg" alt="">
 <div class="hotel-span-a">
          <h3>￥</h3><h3>530</h3><h4>起</h4>
      </div>
      <div class="hotel-span-b">
          <h3>春秋舍</h3>
          <div class="hotel-div">
           <h3 class="hotel-h3-a">西安</h3> <h3 class="hotel-h3-b">文艺社</h3>
          </div>
      </div>

  </mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
  <mt-swipe-item>4</mt-swipe-item>
  <mt-swipe-item>5</mt-swipe-item>
</mt-swipe>
      </div>
     
      </div>
     
  </div>
</template>
<style lang="scss">
.hotel{
    height:2.3rem;
    .hotel-first{
        width:2.84rem;
    }
    .hotel-img{
        width:2.84rem;
    height:2.3rem;
        // height:1.65rem;
        border:0.02rem solid rgb(180, 215, 231);
        img{
            height:1.65rem;
            width:2.84rem;
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
                width:0.32rem;
                height:0.2rem;
                border:0.01rem solid #9bac9c;
                color:#8fb48b;
                font-size:0.13rem;
                margin-right:0.1rem;
                text-align:center;
                line-height: 0.2rem;                
                
            }
            .hotel-h3-b{
                width:0.46rem;
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
