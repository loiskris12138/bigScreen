<template>
  <div>
    <div class="carousolBox">
      <div class="prevBtn" @click="clickPrev" />
      <div class="showArea">
        <ul class="carousolArea">
          <li v-for="item in swiperList" :key="item.id">
            <div v-if="item.id === acitveKey" class="activeImg">
              <img :src="item.imgUrl" alt="">
              <div class="circleBigBg" />
              <div class="circleBg" />
              <div class="currentTitle">{{ item.name }}</div>
            </div>
            <div
              v-else-if="item.id === prevImgId || item.id === nextImgId"
              class="closeImg"
              @click="changeActiveKey(item)"
            >
              <img :src="item.imgUrl" alt="">
            </div>
            <div
              v-else-if="item.id === prev2ImgId || item.id === next2ImgId"
              class="intervalImg"
              @click="changeActiveKey(item)"
            >
              <img :src="item.imgUrl" alt="">
            </div>
            <div v-else @click="changeActiveKey(item)">
              <img :src="item.imgUrl" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="nextBtn" @click="clickNext" />
    </div>
  </div>
</template>
<script>
import { swiperList } from '../data'
export default {
  data() {
    return {
      swiperList: swiperList,
      acitveKey: 3
    }
  },
  computed: {
    prevImgId() {
      let dataTemp = this.acitveKey
      dataTemp--
      if (dataTemp < 1) {
        dataTemp = this.swiperList.length
      }
      return dataTemp
    },
    nextImgId() {
      let dataTemp = this.acitveKey
      dataTemp++
      if (dataTemp > this.swiperList.length) {
        dataTemp = 1
      }
      return dataTemp
    },
    prev2ImgId() {
      let dataTemp = this.acitveKey
      dataTemp--
      if (dataTemp < 1) {
        dataTemp = this.swiperList.length
      }
      dataTemp--
      if (dataTemp < 1) {
        dataTemp = this.swiperList.length
      }
      return dataTemp
    },
    next2ImgId() {
      let dataTemp = this.acitveKey
      dataTemp++
      if (dataTemp > this.swiperList.length) {
        dataTemp = 1
      }
      dataTemp++
      if (dataTemp > this.swiperList.length) {
        dataTemp = 1
      }
      return dataTemp
    }
  },
  watch: {
    acitveKey(val) {
      this.$emit('getActiveItem', this.swiperList[val - 1])
    }
  },
  methods: {
    clickPrev() {
      this.swiperList.unshift(this.swiperList.pop())
      let dataTemp = this.acitveKey
      dataTemp--
      if (dataTemp < 1) {
        dataTemp = this.swiperList.length
      }
      this.acitveKey = dataTemp
    },
    clickNext() {
      this.swiperList.push(this.swiperList.shift())
      let dataTemp = this.acitveKey
      dataTemp++
      if (dataTemp > this.swiperList.length) {
        dataTemp = 1
      }
      this.acitveKey = dataTemp
    },
    changeActiveKey(item) {
      this.acitveKey = item.id
    }
  }
}
</script>
<style lang="scss" scoped>
.carousolBox {
  display: flex;
  align-items: center;
  .prevBtn {
    cursor: pointer;
    background: url(~@/assets/img/leftSocial/prev.png) no-repeat;
    background-size: 100% auto;
    width: 23px;
    height: 13px;
  }
  .nextBtn {
    cursor: pointer;
    background: url(~@/assets/img/leftSocial/next.png) no-repeat;
    background-size: 100% auto;
    width: 23px;
    height: 13px;
  }
  .showArea {
    width: 327px;
    overflow: hidden;
  }
  .carousolArea {
    display: flex;
    align-items: center;
    .closeImg {
      img {
        border-radius: 50%;
        width: 44px;
        height: 44px;
      }
      margin: 0px 14px 0px 17px;
    }
    .intervalImg {
      img {
        border-radius: 50%;
        width: 36px;
        height: 36px;
      }
    }
    .activeImg {
      position: relative;
      width: 105px;
      height: 130px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 50%;
        width: 71px;
        height: 71px;
        padding: 6px;
        border: 1px dashed #33facf;
      }
    }
  }
  .circleBg {
    position: absolute;
    bottom: 20px;
    width: 95px;
    height: 24px;
    background: url(~@/assets/img/carousol/circle.png) no-repeat;
    background-size: 100% auto;
    flex-shrink: 0;
    background-position: center center;
  }
  .circleBigBg {
    position: absolute;
    bottom: 30px;
    width: 106px;
    height: 27px;
    background: url(~@/assets/img/carousol/circle2.png) no-repeat;
    background-size: 100% auto;
    flex-shrink: 0;
    background-position: center center;
    // transform: rotateY(360deg);
    // transform-origin: 50% 0;
    // animation: trans 5s ease 0s infinite alternate forwards;
  }
  .currentTitle {
    font-family: PingFang-SC-Bold;
    font-size: 20px;
    position: absolute;
    bottom: -0px;
    // color:#fff;
  }
}
@keyframes trans {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
}
</style>

