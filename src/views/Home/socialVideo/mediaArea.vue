<template>
  <div class="mediaArea">
    <div v-for="(item) in mediaList" :key="item.id" class="mediaItem" @click="changeActiveTab(item.id)">
      <img :src="item.imgUrl">
      <span v-if="item.name==='喜马拉雅'" class="smallFont">{{ item.name }}</span>
      <span v-else>{{ item.name }}</span>
    </div>
  </div>
</template>
<script>
import { mediaList } from '../data'

export default {
  data() {
    return {
      mediaList: mediaList
    }
  }, methods: {
    changeActiveTab(id) {
      this.$emit('getActiveTabItem', this.mediaList[id - 1])
    }
  }

}
</script>
<style lang="scss" scoped>
   .mediaArea {
      width: 245px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top:25px;
      margin-bottom:30px;
      .mediaItem {
        cursor: pointer;
        width: 113px;
        height: 43px;
        background: #304a7a;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        color: #ffffff;
        margin-bottom: 21px;
        img {
          margin-left:8px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }
        span{
          width:70px;
          flex-grow: 1;
          text-align: center;

        }
        .smallFont{font-size:16px;}
      }
    }
</style>
