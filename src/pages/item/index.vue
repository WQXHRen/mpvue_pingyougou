<template>
  <div>
    <div class="main">
      <!-- 轮播图 -->
      <swiper indicator-dots="true"
              duration="200"
              indicator-color="rgba(255,255,255,.3)"
              indicator-active-color="rgba(255,255,255)"
              circular>
        <block v-for="item in goods.pics"
               :key="item.pics_id">
          <swiper-item>
            <img :src="item.pics_big"
                 alt="" />
          </swiper-item>
        </block>
      </swiper>

      <div class="middleText">
        <div class="price">￥<span>{{goods.goods_price}}</span></div>
        <div class="goodsName">
          <div class="left">
            {{goods.goods_name}}
          </div>
          <div class="right">
            <div class="iconfont icon-fenxiang"></div>
            <div>分享</div>
            <button class="share"
                    open-type="share">分享</button>
          </div>
        </div>
        <div class="freight">快递:&nbsp;&nbsp;&nbsp;&nbsp;免运费</div>

      </div>

      <div class="salesBar">
        <div class="sale">促销<span>&nbsp;&nbsp;满300减30元</span></div>
        <div class="choose">已选<span>&nbsp;&nbsp;黑色/S/1件</span></div>
      </div>

      <div class="address">
        送至<span>&nbsp;&nbsp;广东省 广州市 海珠区 ></span>
      </div>

      <div class="tabs">
        <div :class="{active:activeIndex===index}"
             @click="activeIndex=index"
             v-for="(item,index) in tabList"
             :key="index">{{item}}</div>
      </div>
      <div class="details"
           v-show="!activeIndex"
           v-html="goods.goods_introduce"></div>
      <div class="spec"
           v-show="activeIndex">规格参数</div>
    </div>

    <div class="footer">
      <div class="left">

        <div class="kefu">
          <div class="iconfont icon-kefu"></div>
          <div>联系客服</div>
        </div>
        <button class="tokefu" open-type="contact" bindcontact="handleContact">客服</button>

        <div class="cart">
          <div class="iconfont icon-gouwuche2"></div>
          购物车
        </div>
      </div>
      <div class="right">
        <div class="cartJoin">

          加入购物车</div>
        <div class="pay">
          立即购买</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tabList: ['图文介绍', '规格参数'],
      activeIndex: 0,
      goods: {}
    }
  },
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  // 分享
  onShareAppMessage () {
    return {
      title: this.goods.goods_name
      // imageUrl: this.good,
    }
  },
  onLoad (option) {
    console.log(option.goods_id)
    this.getGoodsDetail(option.goods_id)
  },
  methods: {
    getGoodsDetail (id) {
      this.$request({
        url: '/api/public/v1/goods/detail?goods_id=' + id
      }).then(res => {
        console.log(res)
        this.goods = res
      })
    }
  }
}
</script>

<style lang="less">
page {
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
    margin: 20rpx 0;
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
      position: relative;
      .share {
        opacity: 0;
        position: absolute;
      }
    }
  }
  .freight {
    font-size: 28rpx;
    color: #999;
  }
}

.salesBar {
  padding-left: 16rpx;
  display: flex;
  height: 196rpx;
  margin: 20rpx 0;
  font-size: 32rpx;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: space-around;
  span {
    color: #999;
  }
  .sale {
    span {
      color: #eb4450;
    }
  }
}

.address {
  padding-left: 16rpx;
  height: 98rpx;
  line-height: 98rpx;
  font-size: 32rpx;
  background-color: #ffffff;
  span {
    color: #999;
  }
}

.tabs {
  display: flex;
  text-align: center;
  background-color: #ffffff;
  margin-top: 20rpx;
  padding: 0 10rpx;
  div {
    height: 90rpx;
    line-height: 90rpx;
    width: 366rpx;
  }
  .active {
    color: #eb4450;
    border-bottom: 10rpx solid #eb4450;
  }
}

.footer {
  height: 96rpx;
  width: 100%;
  text-align: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  .left {
    display: flex;
    font-size: 22rpx;
    justify-content: space-around;
    align-items: center;
    width: 325rpx;
  
      // position: relative;
      .tokefu {
        left: 20rpx;
        opacity: 0;
        z-index: 10;
        position: absolute;
      }
    
  }
  .right {
    // flex:1;
    line-height: 96rpx;
    color: #ffffff;
    display: flex;
    div {
      width: 210rpx;
      height: 96rpx;
      background-color: #ffb400;
    }
    .cartJoin {
      background-color: #ff2d4a;
    }
  }
}
</style>
