<template>
  <div class="bigScreen">
    <leftSocial /><pratice /><socialVideo /><ownProduct />
  </div>
</template>
<script>
import socialVideo from "./socialVideo/index.vue";
import leftSocial from "./leftSocial/index.vue";
import ownProduct from "./ownProduct/index.vue";
import pratice from "./practice";
export default {
  name: "Home",
  components: {
    socialVideo,
    leftSocial,
    ownProduct,
    pratice,
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
.right {
  display: flex;
  justify-content: left;
  // align-items: ce÷nter;
}
</style>
