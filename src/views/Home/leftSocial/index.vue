<template>
  <div class="leftSocialArea">
    <div class="commonHeadLine">国内社交音频视频号</div>
    <div class="leftSocialContent">
      <div class="carouselArea">
        <swiper />
      </div>
      <div class="infoSumArea">
        <div v-for="(item, index) in infoSumList" :key="index" class="infoItem">
          <div class="infoItemImg">
            <img class="bgImg" :src="item.bgImgUrl" alt="">
            <img class="contentImg" :src="item.contentImgUrl" alt="">
          </div>
          <div class="infoContent">
            <p class="infoName">{{ item.name }}</p>
            <p class="infoCount" :style="{ color: item.color }">
              {{ item.count }}
            </p>
          </div>
        </div>
      </div>
      <div class="newsArea">
        <div v-for="(item, index) in newsList" :key="index" class="newItem">
          <a
            href="https://www.ecnu.edu.cn/info/1095/58504.htm"
            class="newshref"
          />
          <p class="info">
            <span class="count">{{ item.count }}</span>
            <span class="title">{{ item.title }}</span>
          </p>
          <span class="date">{{ item.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { newsList, infoSumList } from '../data'
import swiper from './swiper.vue'
export default {
  name: 'LeftSocial',
  components: {
    swiper
  },
  data() {
    return {
      newsList: newsList,
      infoSumList: infoSumList
    }
  }
}
</script>
<style lang="scss" scoped>
.leftSocialArea {
  width: 474px;
  height: 444px;
  background: #223958;
  margin-bottom: 20px;
  margin-right: 20px;

  border-radius: 12px;
  .leftSocialContent {
    padding: 0px 27px;
    box-sizing: border-box;
    .carouselArea {
      height: 128px;
      background: transparent;
    }
    .infoSumArea {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 27px;
      .infoItem {
        display: flex;
        align-items: center;

        .infoItemImg {
          width: 60px;
          height: 60px;
          position: relative;
          .bgImg {
            width: 60px;
            height: 60px;
          }
          .contentImg {
            position: absolute;
            width:22px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          &:nth-child(2){
             .contentImg{
               width:27px;
             }

          }
        }
        .infoContent {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          .infoName {
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 13px;
          }
          .infoCount {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
    .newsArea {
      .newshref {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .newItem {
        position: relative;

        width: 421px;
        height: 22px;
        box-sizing: border-box;
        padding: 0px 17px;
        background: #2f4a7b;
        border-radius: 10px;
        color: #6e96cc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 13px;
        font-size: 16px;
        cursor: pointer;
        &:hover {
          background: #3287fe;
          color: #fefefe;
        }
        .info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 263px;
          white-space: nowrap;
          .count {
            padding-right: 5px;
          }
          .title {
            flex: 1;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .date {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
