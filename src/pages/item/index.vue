<template>
  <div>
    <div class="main">
      <!-- 轮播图 -->
      <swiper
        indicator-dots="true"
        duration="200"
        indicator-color="rgba(255,255,255,.3)"
        indicator-active-color="rgba(255,255,255)"
        circular
      >
        <block v-for="item in 5" :key="item">
          <swiper-item>
            <img
              src="https://img14.360buyimg.com/da/s1180x940_jfs/t1/53337/23/15891/81084/5dcc9949E2ac89f31/32be5a1abc0109db.jpg.webp"
              alt=""
            />
          </swiper-item>
        </block>
      </swiper>

      <div class="middleText">
        <div class="price">￥244</div>

        <div class="goodsName">
            <div class="left">
              挖到的味道哇大大大看得见阿规划局大V尬舞大V阿伟是的外观花大级别
            </div>
            <div class="right">
              <div class="iconfont">⭐</div>
              <div>收藏</div>
            </div>
        </div>
        <div class="freight">快递:&nbsp;&nbsp;&nbsp;&nbsp;免运费</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
page{
  background-color: #f4f4f4;
}
swiper {
  width: 100%;
  height: 720rpx;
  img {
    width: 100%;
    height: 720rpx;
  }
}
.middleText {
  background-color: white;
  padding: 34rpx 16rpx 20rpx;
  .price {
    // margin-top: 22rpx;
    font-size: 38rpx;
    color: #eb4450;
  }
  .goodsName {
    display: flex;
    margin:20rpx 0;
    .left {
      color: #333;
      box-sizing: border-box;
      padding-right: 78rpx;
      font-size: 32rpx;
      width: 607rpx;
      border-right: 1rpx solid #999;
      word-break: break-all;
    }
    .right {
      color: #999;
      font-size: 24rpx;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .freight{
      font-size: 28rpx;
      color: #999;
    }
}

</style>
