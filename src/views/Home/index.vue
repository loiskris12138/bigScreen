<template>
  <div class="bigScreen">
    <!-- <leftSocial /><pratice /><socialVideo /><ownProduct /> -->
    <div class="right-bigscreen">
      <MediaAttention />
      <News />
    </div>
    <important-media />
  </div>
</template>
<script>
import socialVideo from "./socialVideo/index.vue";
import leftSocial from "./leftSocial/index.vue";
import ownProduct from "./ownProduct/index.vue";
import pratice from "./practice";
import News from "@/components/News";
import MediaAttention from "@/components/MediaAttention";
import ImportantMedia from "@/components/ImportantMedia";
export default {
  name: "Home",
  components: {
    socialVideo,
    leftSocial,
    ownProduct,
    pratice,
    News,
    MediaAttention,
    ImportantMedia,
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.bigScreen {
  background: red;
  width: 100px;
  height: 100px;
}
.right-bigscreen {
  display: flex;
  justify-content: left;
  // align-items: ce÷nter;
}
</style>
