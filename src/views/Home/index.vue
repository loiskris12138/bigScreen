<template>
  <div class="bigScreen"><circleSwiper /><leftSocial /><pratice /><socialVideo /><ownProduct /></div>
</template>
<script>
import socialVideo from './socialVideo/index.vue'
import leftSocial from './leftSocial/index.vue'
import ownProduct from './ownProduct/index.vue'
import circleSwiper from './leftSocial/circleSwiper.vue'
import pratice from './practice'
export default {
  name: 'Home',
  components: {
    socialVideo,
    leftSocial,
    ownProduct,
    circleSwiper,
    pratice
  },
  computed: {}
}
</script>
<style lang="scss" scoped>

</style>
