<template>
  <div class="modal">
    <div :class="['san', { 'app-san': title !== '官网' }]" />
    <div class="iframe-wrapper">
      <div class="modal-top">
        <div class="title">{{ title }}</div>
        <div class="close" @click="close">
          <img src="@/assets/img/X.png">
        </div>
      </div>
      <iframe v-if="title === '官网'" :src="url" class="iframe" frameborder="0" />
      <img v-else class="iframe" src="@/assets/img/phonePic1.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      require: true,
      default: 'https://www.ecnu.edu.cn/index.htm'
    },
    title: {
      type: String,
      require: true,
      default: '官网'
    }
  },
  methods: {
    close() {
      this.$emit('handleClose')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  background-color: #223958;
  border: 3px solid #62aefe;
  border-radius: 20px;
  position: relative;
}
.website-modal {
  width: 1040px;
  height: 612px;

  //   background: url("../../assets/img/modalbg.png");
  //   background-size: contain;
}
.san {
  width: 40px;
  height: 40px;
  background-color: #223958;
  border-left: 3px solid #62aefe;
  border-top: 3px solid #62aefe;
  transform: rotate(-45deg);
  position: absolute;
  top: 80%;
  left: -2%;
  z-index: 1;
}
.app-san {
  left: -5%;
}
.iframe-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 0 0 20px 20px;
  position: relative;
  z-index: 1;

  overflow: hidden;
  .modal-top {
    background-color: #223958;
    width: 100%;
    height: 60px;
    border-radius: 20px 20px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      padding: 20px;
      font-family: PangMenZhengDao;
      font-size: 24px;
      color: rgb(255, 255, 255);
      line-height: 0.833;
    }
    .close {
      margin: 20px;
      cursor: pointer;
    }
  }
}
.iframe {
  display: block;
  width: 100%;
  height: 92%;
}
</style>
