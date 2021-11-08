<template>
  <div>
    <carousel-3d :autopaly="true" :perspective="0" :display="9" :loop="false" :animation-speed="2000" :width="setWidth" :height="setHeight" :space="setSpace" inverse-scaling="200" :clickable="false">
      <slide v-for="(slide, i) in carouselList" :key="i" :index="i">
        <img :src="slide.imgUrl" alt="" class="imgStyle">
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: 9,
      carouselList: [{
        imgUrl: require('@/assets/img/centerCarousel/center(1).jpg')
      }, {
        imgUrl: require('@/assets/img/centerCarousel/center(2).jpg')
      }, {
        imgUrl: require('@/assets/img/centerCarousel/center(3).jpg')
      }, {
        imgUrl: require('@/assets/img/centerCarousel/center(4).jpg')
      }, {
        imgUrl: require('@/assets/img/centerCarousel/center(5).jpg')
      }, {
        imgUrl: require('@/assets/img/centerCarousel/center(6).jpg')
      }, {
        imgUrl: require('@/assets/img/centerCarousel/center(7).jpg')
      }, {
        imgUrl: require('@/assets/img/centerCarousel/center(8).jpg')
      }, {
        imgUrl: require('@/assets/img/centerCarousel/center(9).jpg')
      }]
    }
  },
  computed: {
    setWidth() {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
      return Math.round(htmlWidth / 1920 * 811)
    },
    setHeight() {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
      return Math.round(htmlWidth / 1920 * 500)
    },
    setSpace() {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
      return Math.round(htmlWidth / 1920 * 160)
    }
  }

}
</script>
<style lang="scss" scoped>
.imgStyle{
    height:100%;
}
</style>
