<template>
  <div class="bigScreen">
    <swiper />
    <!-- <leftSocial /><pratice /><socialVideo /><ownProduct /> -->
    <!-- <div class="right-bigscreen">
      <MediaAttention />
      <News />
    </div> -->
    <!-- <important-media /> -->
  </div>
</template>
<script>
// import socialVideo from './socialVideo/index.vue'
// import leftSocial from './leftSocial/index.vue'
// import ownProduct from './ownProduct/index.vue'
// import pratice from './practice'
// import circleSwiper from '../Home/leftSocial/circleSwiper.vue'
// import News from '@/components/News'
// import MediaAttention from '@/components/MediaAttention'
// import ImportantMedia from '@/components/ImportantMedia'
import swiper from '../Home/leftSocial/swiper.vue'
export default {
  name: 'Home',
  components: {
    swiper
    // circleSwiper
    // socialVideo,
    // leftSocial,
    // ownProduct,
    // pratice,
    // News,
    // MediaAttention,
    // ImportantMedia
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
.bigScreen {

}
.right-bigscreen {
  display: flex;
  justify-content: left;
  // align-items: ce÷nter;
}
</style>
