<template>
  <div>
    <searchBar/>
    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      circular
      indicator-color="rgba(255,255,255,.3)"
      indicator-active-color="rgba(255,255,255)"
    >
      <block v-for="item in bennerList" :key="item.goods_id">
        <swiper-item>
          <image mode="aspectFill" :src="item.image_src"></image>
        </swiper-item>
      </block>
    </swiper>

    <!-- 分类 -->
    <div class="category">
      <img
        v-for="item in categoryList"
        :key="item.name"
        :src="item.image_src"
        alt=""
      />
    </div>

    <div class="floorBox" v-for="(item, index) in floorList" :key="index">
      <img :src="item.floor_title.image_src" alt="" />
      <div class="bottomBox">
        <img class="fristPic" :src="item.product_list[0].image_src" alt="" />
        <div class="right">
          <block v-for="(pic, index2) in item.product_list" :key="index2">
          <img v-if="index2" :src="pic.image_src" alt="" />
          </block>
        </div>
      </div>
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
      bennerList: [],
      categoryList: [],
      floorList: []
    }
  },
  created () {
    this.getBenner()
    this.getCategory()
    this.getFloorData()
  },
  methods: {
    // 轮播图
    getBenner () {
      this.$axios({
        url: '/api/public/v1/home/swiperdata'
      }).then(res => {
        // console.log(res)
        this.bennerList = res
      })
    },
    // 获取分类
    getCategory () {
      this.$axios({
        url: '/api/public/v1/home/catitems'
      }).then(res => {
        // console.log(res)
        this.categoryList = res
      })
    },
    // 获取楼层区数据
    getFloorData () {
      this.$axios({
        url: '/api/public/v1/home/floordata'
      }).then(res => {
        // console.log(res)
        this.floorList = res
      })
    }
  }
}
</script>

<style lang="less">
img {
  vertical-align: top;
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
  margin-bottom: 40rpx;
  > img {
    width: 100%;
    height: 88rpx;
  }
  .bottomBox {
    display: flex;
    padding: 10rpx 17rpx 0;
    .fristPic {
      width: 232rpx;
      height: 386rpx;
    }
    .right {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      > img {
        margin: 0 0 10rpx 10rpx;
        width: 232rpx;
        height: 188rpx;
      }
    }
  }
}
</style>
