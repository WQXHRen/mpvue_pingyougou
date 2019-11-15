<template>
  <header>
      <div class="searchBar">
        <icon type="search" size="20"> </icon>
        <span class="search">搜索</span>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang='less'>
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