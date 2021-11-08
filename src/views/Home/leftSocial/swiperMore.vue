<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="sideOne">
        <img
          src="@/assets/img/test/banner(1).png"
          alt=""
        ></swiper-slide>
      <swiper-slide class="sideTwo"><img
        src="@/assets/img/test/banner(2).png"
        alt=""
      ></swiper-slide>
      <swiper-slide><img
        src="@/assets/img/test/banner(3).png"
        alt=""
      ></swiper-slide>
      <swiper-slide><img
        src="@/assets/img/test/banner(4).png"
        alt=""
      ></swiper-slide>
      <swiper-slide><img
        src="@/assets/img/test/banner(5).png"
        alt=""
      ></swiper-slide>
      <swiper-slide><img
        src="@/assets/img/test/banner(7).png"
        alt=""
      ></swiper-slide>
      <swiper-slide class="sideOne">
        <img
          src="@/assets/img/test/banner(1).png"
          alt=""
        ></swiper-slide>
      <swiper-slide><img
        src="@/assets/img/test/banner(3).png"
        alt=""
      ></swiper-slide>
      <swiper-slide><img
        src="@/assets/img/test/banner(5).png"
        alt=""
      ></swiper-slide>

      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    swiper,
    swiperSlide },
  data() {
    return {
      swiperOption: {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '9',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true
        },

        // autoplay: {
        //   // delay: 3000, // 自动切换的时间间隔，单位ms
        //   stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
        //   disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
        //   // reverseDirection: true, //开启反向自动轮播。
        //   // waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        // },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.example-3d {
  margin:0 auto;
  width: 1357px;
  height: 7680px;
}

.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 812px;
    height: 522px;
    border-radius: 9px;
    text-align: center;
    font-weight: bold;
    background-color: #2c8dfb;
    background-position: center;
    background-size: cover;
    color: white;
    img {
      width:100%;
    }
  }

  // .swiper-pagination {
  //   /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
  //     background-color: $white;
  //   }
  // }
}
</style>
