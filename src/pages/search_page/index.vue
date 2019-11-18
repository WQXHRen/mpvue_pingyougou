<template>
  <div class="wrapper">
    <searchBar @confirm="toGoodsList" :keyword="keyword"/>
    <div class="history-search">
      <div class="title">
        <span class="title">历史搜索</span>
        <icon type="clear"
              size="18" @click="removeHistory">
        </icon>
      </div>
      <ul>
        <li v-for="item in historyList" :key="item" @click="toGoodsList(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import searchBar from '@/components/searchBar.vue'
export default {
  components: {
    searchBar
  },
  data () {
    return {
      historyList: [],
      keyword: ''
    }
  },
  onShow () {
    this.historyList = wx.getStorageSync('searchHistory') || []
  },
  methods: {
    // 根据关键字搜索商品
    toGoodsList (val) {
      let _historyList = this.historyList.filter(item => item !== val)
      _historyList.unshift(val)
      this.keyword = val
      wx.setStorageSync('searchHistory', _historyList)
      wx.navigateTo({ url: '/pages/goods_list/main?key=' + val })
    },
    // 清除搜索历史
    removeHistory () {
      this.historyList = []
      wx.removeStorageSync('searchHistory')
    }
  }
}
</script>

<style lang="less">
.search {
  background-color: #eee;
  padding: 30rpx 15rpx;
  display: flex;
  justify-content: space-between;
  font-size: 28rpx;
  position: relative;
  icon {
    position: absolute;
    top: 50rpx;
    left: 38rpx;
  }
  input {
    height: 60rpx;
    flex: 1;
    background-color: #fff;
    padding-left: 70rpx;
    box-sizing: border-box;
    border-radius: 4rpx;
  }
  button {
    width: 160rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 8rpx;
    font-size: 28rpx;
    border: 1rpx solid #bfbfbf;
    background-color: #eee;
    margin-left: 20rpx;
  }
}

.history-search {
  color: #333;
  font-size: 28rpx;
  padding: 30rpx 30rpx 30rpx 15rpx;
  .title {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30rpx;
    li {
      height: 64rpx;
      line-height: 64rpx;
      padding: 0 26rpx;
      background-color: #ddd;
      margin: 0 30rpx 16rpx 0;
    }
  }
}
</style>