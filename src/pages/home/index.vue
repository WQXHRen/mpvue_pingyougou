<template>
  <div>
    <header>
      <div class="searchBar">
        <icon type="search" size="20"> </icon>
        <span class="search">搜索</span>
      </div>
    </header>

    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      circular
      indicator-color="rgba(255,255,255,.3)"
      indicator-active-color="rgba(255,255,255)"
    >
      <block v-for="item in 3" :key="item">
        <swiper-item>
          <image mode="aspectFill" src="/static/images/test.png"></image>
        </swiper-item>
      </block>
    </swiper>

    <!-- 分类 -->
    <div class="category">
      <img src="/static/images/category.png" alt="" />
      <img src="/static/images/second.png" alt="" />
      <img src="/static/images/supermarket.png" alt="" />
      <img src="/static/images/baby.png" alt="" />
    </div>

    <div class="floorBox">
      <img src="https://api.zbztb.cn/pyg/pic_floor01_title.png" alt="" />
      <div class="bottomBox">
        <img class="fristPic" src="https://api.zbztb.cn/pyg/pic_floor01_1@2x.png" alt="">
        <div class="right">
          <img
            v-for="item in 4" :key="item"
            src="https://api.zbztb.cn/pyg/pic_floor01_5@2x.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  }

}
</script>

<style lang="less">
img{
  vertical-align: top;
}
header {
  height: 100rpx;
  background-color: #eb4450;
  padding: 0 16rpx;
  display: flex;
  align-items: center;
  .searchBar {
    width: 100%;
    height: 60rpx;
    border-radius: 8rpx;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bbb;
    .search {
      margin-left: 16rpx;
    }
  }
}

swiper {
  image {
    width: 100%;
    height: 340rpx;
  }
}

.category {
  width: 100%;
  height: 194rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 128rpx;
    height: 140rpx;
  }
}

.floorBox {
  > img {
    width: 100%;
    height: 88rpx;
    }
    .bottomBox{
      display: flex;
      padding: 20rpx 17rpx 0;
      .fristPic{
        width: 232rpx;
        height: 386rpx;
      }
      .right{
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        >img{
          margin: 0 0 10rpx 10rpx;
          width: 232rpx;
          height: 188rpx;
        }
      }
  }
}
</style>
