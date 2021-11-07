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
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
          // rotate: 50, // slide做3d旋转时Y轴的旋转角度。默认50。
          // stretch: 0,
          // depth: 100,
          // modifier: 1,
          // slideShadows: true
          rotate: 30, // slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: 200, // 每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          depth: 60, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 2.5, // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: true // 开启slide阴影。默认 true。
        },
        autoplay: {
          // delay: 3000, // 自动切换的时间间隔，单位ms
          stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
          disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
          // reverseDirection: true, //开启反向自动轮播。
          // waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
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
  // width: 100%;
  // height: 400px;
  // padding-top: 50px;
  // padding-bottom: 50px;
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
//     .sideOne{
// width: 455px;
// height: 293px;
//     }
//     .sideTwo{
//       width: 578px;
// height: 373px;
//     }
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
