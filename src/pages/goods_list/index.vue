<template>
  <div>
    <div class="top" :style="{position:isFixed?'fixed':'static'}">
    <header>
      <icon type="search" size="16"> </icon>
      <input type="text" v-model="key" confirm-type="search"  @confirm="searchHandle"/>
    </header>
    <div class="filter">
      <div
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
        v-for="(item, index) in filterText"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    </div>

    <ul class="goodsList" :style="{marginTop:isFixed?'220rpx':''}">
      <li class="goodsItem" v-for="item in goodsList" :key="item.goods_id" @click="toItem(item.goods_id)">
        <img class="img" :src="item.goods_small_logo" alt="图片到火星去了">
        <div class="right">
          <p class="goodsName">{{item.goods_name}}</p>
          <p class="price">￥<span>{{item.goods_price}}</span>.00</p>
        </div>
      </li>
    </ul>
    <p class="bottomText" v-show="isLastPage">暂无更多数据...</p>
  </div>
</template>

<script>
const PAGESIZE = 10
export default {
  data () {
    return {
      key: '',
      filterText: ['综合', '销量', '价格'],
      activeIndex: 0,
      goodsList: [],
      isLastPage: false,
      isFixed: false
    }
  },
  // 下拉加载
  onReachBottom () {
    if (this.isLastPage) {
      return
    }
    this.pageNum++
    this.getGoodsList()
  },
  onPageScroll () {
    this.isFixed = true
  },
  // 上拉刷新
  onPullDownRefresh () {
    this.isFixed = false
    this.isLastPage = false
    this.reLoad()
    wx.stopPullDownRefresh()
  },
  onLoad (option) {
    // console.log(option)
    this.key = option.key
    this.pageNum = 1
    this.isRequest = false
    this.isLastPage = false
    this.goodsList = []
    this.getGoodsList()
  },
  methods: {
    toItem (id) {
      wx.navigateTo({ url: '/pages/item/main?goods_id=' + id })
    },
    searchHandle (e) {
      this.key = e.target.value
      this.reLoad()
    },
    // 重新加载
    reLoad () {
      this.pageNum = 1
      this.goodsList = []
      this.isLastPage = false
      this.isRequest = false
      this.getGoodsList()
    },
    getGoodsList () {
      if (this.isQuest || this.isLastPage) {
        return
      }
      this.isRequest = true
      this.$request({
        url: '/api/public/v1/goods/search',
        data: {
          query: this.key,
          pagesize: PAGESIZE,
          pagenum: this.pageNum
        }
      }).then(res => {
        // console.log(res)
        this.goodsList = [...this.goodsList, ...res.goods]

        if (this.goodsList.length === res.total) {
          this.isLastPage = true
        }
        this.isQuest = false
      })
    }
  }
}
</script>

<style lang="less">

.top{
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
}

header {
  height: 120rpx;
  width: 100%;
  background-color: #eeeeee;
  padding: 30rpx 16rpx;
  box-sizing: border-box;
  position: relative;
  icon {
    position: absolute;
    top: 46rpx;
    left: 46rpx;
  }
  input {
    font-size: 26rpx;
    border-radius: 8rpx;
    padding-left: 80rpx;
    width: 100%;
    height: 60rpx;
    background-color: #ffffff;
  }
}

.filter {
  height: 100rpx;
  line-height: 100rpx;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-around;
  .active {
    color: #eb4450;
  }
}
.goodsList {
  // margin-top: 220rpx;
  
  .goodsItem {
    height: 260rpx;
    display: flex;
    padding: 30rpx 0;
    margin-left: 20rpx;
    box-sizing: border-box;
    border-bottom: 1px solid #dddddd;
    .img {
      width: 200rpx;
      height: 200rpx;
      // background-color: pink;
    }
  }
  .right {
    margin-left: 26rpx;
    height: 200rpx;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .goodsName {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      color: #eb4450;
      font-size: 20rpx;
      span{
        font-size: 34rpx;
      }
    }
  }
}
.bottomText{
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  color: rgb(136, 136, 136);
}
</style>
