<template>
  <div class="bigScreen">
    <div class="header">
      <span class="bigScreen-title">华东师范大学融媒体中心</span>
    </div>
    <div class="bigScreen-container">
      <div class="left-bigscreen">
        <div class="left-top"><leftSocial /><ownProduct /></div>
        <div class="left-bttom"><socialVideo /><pratice /></div>
      </div>
      <div class="center-bigscreen">
        <ul class="count-data">
          <li
            v-for="(item, index) in sumList"
            :key="index"
            class="discribe count-item"
          >
            <span class="num"
              ><countTo
                :start-val="0"
                :end-val="item.number"
                :duration="3000"
              />{{ item.unit }}</span
            >
            <span class="num-label">{{ item.name }}</span>
          </li>
        </ul>
        fsflsdjflsdfjlskfjlskfjlkdjfdjkefkjkjdksflkdsjfldsfjslkfjdlskfjklsdfjdlsfjdlsfjdlsjflsjfdsljflsj
      </div>
      <div class="right-bigscreen">
        <div class="right-top">
          <MediaAttention />
          <News />
        </div>
        <important-media />
      </div>
    </div>
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
import countTo from "vue-count-to";
import { sumList } from "./data";
import PicSlider from "@/components/PicSlider";
import Swiper from "./leftSocial/swiper.vue";
export default {
  name: "Home",
  components: {
    // PicSlider,
    socialVideo,
    leftSocial,
    ownProduct,
    pratice,
    News,
    MediaAttention,
    ImportantMedia,
    countTo,
    // Modal
    // Swiper
  },
  data() {
    return {
      sumList: sumList,
    };
  },
  computed: {},
  methods: {
    // popModal() {
    //   this.showModal = true;
    // },
  },
};
</script>
<style lang="scss" scoped>
.bigScreen {
  position: relative;
}
.header {
  width: 3759px;
  height: 100px;
  background: url("../../assets/img/header.png") center top no-repeat;
  .bigScreen-title {
    display: block;
    text-align: center;
    padding-top: 40px;
    font-family: PangMenZhengDao;
    font-size: 60px;
    font-weight: 400;
    color: #d5d4d4;
    line-height: 38px;
  }
}
.bigScreen-container {
  display: flex;
  justify-content: left;
  padding: 0 64px;
}
.left-bigscreen {
  flex: 0 0 auto;
  display: flex;
  justify-content: left;
}
.center-bigscreen {
  flex: 0 0 auto;
  flex-shrink: 0;
  width: 1357px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .count-data {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0 auto;
    .count-item {
      width: 210px;
      height: 110px;
      margin: 0 30px;
      background: url("../../assets/img/countbg.png") no-repeat;
      background-size: 100% auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      text-align: center;
      .num {
        font-size: 30px;
        font-family: YouSheBiaoTiHei;
        font-weight: 400;
        color: #f4b19c;
        line-height: 38px;
        padding-bottom: 24px;
      }
      .num-label {
        font-size: 24px;
        font-family: PangMenZhengDao;
        font-weight: 400;
        color: #ffffff;
        line-height: 38px;
      }
    }
  }
}
.left-top,
.left-bttom {
  display: flex;
  flex-direction: column;
}
.right-top {
  display: flex;
  justify-content: left;
}
</style>
