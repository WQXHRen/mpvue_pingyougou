<template>
   <header>
      <icon class="searchIcon" type="search" size="16"> </icon>
      <input type="text" v-model="key" confirm-type="search" @confirm="searchHandle"/>
      <icon class="clearBtn" type="clear" size="16" @click="clearKeyword" v-show="key"> </icon>
    </header>
</template>

<script>
export default {
  props: ['keyword'],
  data () {
    return {
      key: this.keyword
    }
  },
  methods: {
    // 给父组件传参
    searchHandle () {
      this.$emit('confirm', this.key)
    },
    clearKeyword () {
      this.key = ''
    }

  },
  watch: {
    keyword (val) {
      this.key = val
    }
  }
}
</script>

<style lang="less" scoped>
  header {
  height: 120rpx;
  width: 100%;
  background-color: #eeeeee;
  padding: 30rpx 16rpx;
  box-sizing: border-box;
  position: relative;
  .searchIcon {
    position: absolute;
    top: 46rpx;
    left: 46rpx;
  }
  input {
    font-size: 26rpx;
    border-radius: 8rpx;
    padding-left: 80rpx;
    width: 88%;
    height: 60rpx;
    background-color: #ffffff;
  }
  .clearBtn{
     position: absolute;
      top: 46rpx;
     right: 40rpx;
     z-index: 99;
  }
}
</style>