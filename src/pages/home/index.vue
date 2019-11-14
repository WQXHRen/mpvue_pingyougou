<template>
  <div>
    <header>  
      <div class="searchBar">
        <icon
          type="search"
          size="20">
        </icon>
        <span class="search">搜索</span>
      </div>
    </header>

    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular indicator-color="rgba(255,255,255,.3)"  indicator-active-color="rgba(255,255,255)">
        <block v-for="item in 3" :key="item">
            <swiper-item>
                <image mode="aspectFill" src="/static/images/test.png"></image>
            </swiper-item>
        </block>
    </swiper>

    <!-- 分类 -->
    <div class="category">
      
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
  header {
    height: 100rpx;
    background-color: #eb4450;
    padding: 0 16rpx ;
    display: flex;
    align-items: center;
    .searchBar{
      width: 100%;
      height: 60rpx;
      border-radius: 8rpx;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #bbb;
      .search{
        margin-left: 16rpx;
      }
    }
  }

  swiper{
    image{
      width: 100%;
      height: 340rpx;
    }
  }
</style>