<template>
  <div class="praticeArea setMargin" @click="redirectDetail">
    <div class="commonHeadLine">融媒实践</div>
    <div class="praticeContent">
      <div class="imgArea">
        <img src="@/assets/img/pratice.jpg" alt="">
      </div>

      <div v-for="(item, index) in praticeList" :key="index" class="newInfo">
        <p class="newTitle">
          {{ item.title }}
        </p>
        <div class="splitLine" />
        <p class="newContent">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { praticeList } from '../data'
export default {
  name: 'Pratice',
  data() {
    return {
      praticeList: praticeList
    }
  },
  methods: {
    redirectDetail() {
      window.open('https://www.ecnu.edu.cn/info/1095/58504.htm', '_blank')
    }

  }
}
</script>
<style lang="scss" scoped>
.praticeArea {
  cursor: pointer;
  box-sizing: border-box;
  width: 680px;
  height: 244px;
  background: #223958;
  // background: url(../../../assets/bg.png);
  // background-position: -562px -810px;
  border-radius: 12px;

  .praticeContent {
    margin-top: 15px;
    padding: 0px 42px;
    display: flex;
    justify-content: space-between;
    .imgArea {
      width: 318px;
      height: 157px;
      border-radius: 16px;
      background: rgb(223, 193, 193);
      img{
        width: 318px;
        height: 157px;
        border-radius: 16px;

      }
    }
    .newInfo {
      margin-top: 22px;
      .newTitle {
        width: 147px;
        height: 47px;
        font-size: 21px;
        font-weight: 400;
        color: #ffffff;
        line-height: 25px;
        overflow:hidden;
      }
      .splitLine {
        width: 204px;
        height: 1px;
        border: 1px dashed #338afb;
        margin: 17px 0px;
      }
      .newContent {
        width: 224px;
        height: 38px;
        font-size: 17px;
        color: #658bbe;
        line-height: 21px;
        text-indent: 2em;
        overflow:hidden;
      }
    }
  }
}
.setMargin {
  padding-top: 12px;
}
</style>
