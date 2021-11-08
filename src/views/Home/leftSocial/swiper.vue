<template>
  <div class="carousolBox">
    <div class="prev" @click="clickPrev">prev</div>
    <div class="showArea">
      <ul class="carousolArea">
        <li v-for="item in mediaList" :key="item.id">
          <div v-if="item.id === acitveKey" class="imgArea activeImg">
            <img :src="item.imgUrl" alt="">
            <div class="circleBigBg" />
            <div class="circleBg" />
          </div>
          <div v-else class="imgArea" @click="changeActiveKey(item)">
            <img :src="item.imgUrl" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="next" @click="clickNext">next</div>
  </div>
</template>
<script>
import { mediaList } from '../data'
export default {
  data() {
    return {
      mediaList: mediaList,
      acitveKey: 3
    }
  },
  methods: {
    clickPrev() {
      this.mediaList.unshift(this.mediaList.pop())
      let dataTemp = this.acitveKey
      dataTemp--
      if (dataTemp < 1) {
        dataTemp = this.mediaList.length
      }
      this.acitveKey = dataTemp
    },
    clickNext() {
      this.mediaList.push(this.mediaList.shift())
      let dataTemp = this.acitveKey
      dataTemp++
      if (dataTemp > this.mediaList.length) {
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
  .prev {
    cursor: pointer;
  }
  .next {
    cursor: pointer;
  }
  .showArea {
    width: 329px;
    border: 1px solid red;
    // overflow:hidden;
  }
  .carousolArea {
    display: flex;
    align-items: center;
    .imgArea {
      width: 59px;
      height: 59px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .activeImg {
      padding: 6px;
      border: 1px dashed #33facf;
    }
  }
  .circleBg {
    position: relative;
    top: -40px;
    width: 95px;
    height: 24px;
    background: url(../../../assets/img/carousol/circle.png);
    flex-shrink: 0;
    background-position: center center;
  }
  .circleBigBg {
    position: relative;
    top: -25px;
    width: 106px;
    height: 27px;
    background: url(../../../assets/img/carousol/circle2.png);
    flex-shrink: 0;
    background-position: center center;
    transform: rotateY(360deg);
    transform-origin: 50% 0;
    // animation: trans 5s ease 0s infinite alternate forwards;
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

