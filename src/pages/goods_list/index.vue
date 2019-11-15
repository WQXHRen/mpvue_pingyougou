<template>
  <div>
    <header>
      <icon type="search" size="16"> </icon>
      <input type="text" v-model="key" />
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

    <ul class="goodsList">
      <li class="goodsItem" v-for="item in goodsList" :key="item.goods_id">
        <!-- <div class="img"></div> -->
        <img class="img" :src="item.goods_small_logo" alt="图片到火星去了">
        <div class="right">
          <p class="goodsName">{{item.goods_name}}</p>
          <p class="price">￥<span>{{item.goods_price}}</span>.00</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: '',
      filterText: ['综合', '销量', '价格'],
      activeIndex: 0,
      goodsList: []
    }
  },
  onLoad (option) {
    // console.log(option)
    this.key = option.key
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      this.$request({
        url: '/api/public/v1/goods/search',
        data: {
          query: this.key,
          pagesize: 10,
          pagenum: 1
        }
      }).then(res => {
        // console.log(res)
        this.goodsList = [...this.goodsList, ...res.goods]
      })
    }
  }
}
</script>

<style lang="less">
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
</style>
