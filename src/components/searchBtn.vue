<template>
  <header>
      <div class="searchBar" @click="toSearchPage">
        <icon type="search" size="20"> </icon>
        <span class="search">搜索</span>
      </div>
    </header>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toSearchPage () {
      wx.navigateTo({ url: 'url' })
    }
  }
}
</script>

<style lang='less' scoped>
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
</style>