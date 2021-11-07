<template>
  <div class="important-media">
    <div class="title">
      <h3>重点媒体报导</h3>
      <pic-slider />
    </div>
  </div>
</template>

<script>
import PicSiider from "../PicSiider";
export default {
  components: {
    PicSiider,
  },
};
</script>

<style lang="scss" scoped>
.important-media {
  width: 1172px;
  height: 441px;
  background: #223958;
  border-radius: 12px;
  padding: 16px 28px;
  margin-top: 20px;
  .title {
    text-align: center;
    font-size: 20px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    color: #ffffff;
    line-height: 38px;
  }
}
</style>
