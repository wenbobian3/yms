<template>
  <div class="comment">
      <div class="comment-center">
          <div class="comment-left">用户评论</div>
          <div class="comment-right ui-arrowlink">查看全部</div>
      </div>
      <div class="comment-supper ui-border-b" v-for="item in items">
          <div class="comment-name">
          <div class="comment-img">
              <img src="../../../static/image/name.png" alt="">
          </div>
          <div class="comment-show">
          <div class="comment-h2">skystar</div>
          <div class="comment-time">2017-11-12 09:52:39</div>
          </div>
          </div>
              <div class="comment-pl">
          <p>感觉很不错的样子，去西安一定要去体验一下。</p>
      </div>
      </div>
  
  </div>

</template>
<script>
    
    export default {
        data(){
            return {
                items: [
                    {
                         seccess:'123'
                    },
                    {
                        seccess:'123'

                    }
                       
                ]
            }
        }
    }
</script>
<style lang="scss">
    .comment{
        height:2.91rem;
        width:3.37rem;

        .comment-center{
            height:0.75rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .comment-left{
                font-size:0.175rem;
                font-weight: 900;
                color:#000;
            }
            .comment-right{
                font-size:0.12rem;
                color:#73c13a;
                padding:0.3rem;
                ::before{
                    right:0;
                }
            }
        }
        .comment-supper{
            border-color: #cacaca;
            height:0.85rem;
            margin-top:0.2rem;
        }
        .comment-name{
            height:0.5rem;
            display: flex;
            .comment-img{
                width:0.35rem;
                height:0.35rem;
                img{
                    width:100%;
                    height:100%;
                border-radius: 50%;
                    
                }
            }
            .comment-show{
                margin-left:0.125rem;
                .comment-h2{
                    font-size:0.15rem;
                }
                .comment-time{
                    font-size:0.15rem;
                    color:#929292;
                }
            }
        }
                    .comment-pl{
                font-size:0.15rem
            }
    }
</style>
