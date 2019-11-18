<template>
  <div>
    <searchBtn/>
     <!-- 主体部分 -->
    <div class="main" v-if="categories.length">
      <div class="left">
        <ul>
              <li :class="activeIndex===index?'active':''" v-for="(item, index) in categories" :key="index" @click="activeIndex=index">{{item.cat_name}}</li>
        </ul>
      </div>
      <div class="right">
        <img src="/static/images/titleimage.png"
             alt="">
        <ul>
          <li class="cate2"
              v-for="(cate2, index2) in categories[activeIndex].children"
              :key="index2">
            <p>/<span>{{cate2.cat_name}}</span>/</p>
            <ul>
              <li class="cate3"
                  v-for="(cate3, index3) in cate2.children"
                  :key="index3"
                  @click="toGoods_list(cate3.cat_name)" >
                <img :src="cate3.cat_icon"
                     alt="">
                <span>{{cate3.cat_name}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import searchBtn from '@/components/searchBtn.vue'
export default {
  components: {
    searchBtn
  },
  data () {
    return {
      categories: [],
      activeIndex: 0
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    toGoods_list (key) {
      wx.navigateTo({ url: '/pages/goods_list/main?key=' + key })
    },
    getCategories () {
      this.$request({
        url: '/api/public/v1/categories'
      }).then(res => {
        // console.log(res)
        this.categories = res
      })
    }
  }

}
</script>

<style lang="less">
.main {
  display: flex;
  position: absolute;
  top: 100rpx;
  bottom: 0;
  width: 100%;
  .left {
    width: 198rpx;
    height: 100%;
    overflow: scroll;
    li {
      height: 100rpx;
      line-height: 100rpx;
      text-align: center;
      background-color: #f4f4f4;
      border-bottom: 1rpx solid #eee;
      box-sizing: border-box;
      &.active {
        color: #eb4450;
        background-color: #fff;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 8rpx;
          height: 60rpx;
          background-color: #eb4450;
          left: 0;
          top: 20rpx;
        }
      }
    }
  }
}

.right {
  flex: 1;
  padding: 20rpx 16rpx;
  height: 100%;
  overflow: scroll;
  > img {
    width: 520rpx;
    height: 180rpx;
  }
  .cate2 {
    margin-bottom: 20rpx;
    p {
      color: #e0e0e0;
      height: 110rpx;
      line-height: 110rpx;
      text-align: center;
      span {
        color: #333;
        padding: 0 30rpx;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .cate3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33%;
    margin-top: 30rpx;
    > img {
      width: 120rpx;
      height: 120rpx;
    }
    span {
      font-size: 24rpx;
    }
  }
}
</style>