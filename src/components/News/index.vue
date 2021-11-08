<template>
  <div class="news">
    <div class="up-block">
      <ul>
        <li v-for="(i, ind) in upList" :key="i.id">
          <a href="https://www.ecnu.edu.cn/info/1095/58504.htm">
            <div class="content">
              <img class="image" src="@/assets/img/newimg.jpg" alt="" />
              <div class="desc">
                <div class="desc-up">
                  <span class="title">{{ i.title }}</span>
                  <span class="read-times">阅读数{{ i.readingcount }}</span>
                </div>
                <p class="date">{{ i.date }}</p>
              </div>
            </div>
          </a>
          <div v-if="ind !== 2" class="line" />
        </li>
      </ul>
    </div>
    <div class="down-block">
      <ul>
        <li v-for="(i, ind) in downList" :key="i.id">
          <a href="https://www.ecnu.edu.cn/info/1095/58504.htm">
            <div class="content">
              <img class="image" src="@/assets/img/newimg.jpg" alt="" />
              <div class="desc">
                <div class="desc-up">
                  <span class="title">《800架无人机编队飞行在苍穹之下》</span>
                  <span class="read-times">阅读数118.9w</span>
                </div>
                <p class="date">2021年03月9日</p>
              </div>
            </div>
          </a>
          <div v-if="ind !== 2" class="line" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { upList, downList } from "./constant";
export default {
  data() {
    return {
      upList,
      downList,
    };
  },
};
</script>

<style lang="scss" scoped>
.news {
  width: 497px;
  height: 541px;
  background: #223958;
  border-radius: 12px;
  padding: 25px;
  .up-block {
    width: 451px;
    background: linear-gradient(to right, #244a6c, #223958);
    margin-bottom: 44px;
    height: 230px;
  }
  .down-block {
    width: 451px;
    height: 230px;
    background: linear-gradient(to right, #3a4760, #293d5a);
  }
  .image {
    width: 81px;
    height: 57px;
    display: block;
  }
  .title {
    font-size: 14px;
  }
  .read-times {
    font-size: 14px;
  }
  .date {
    font-size: 12px;
  }
  .content {
    height: 74px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    .desc {
      width: 320px;
      font-family: Microsoft YaHei;
      margin-left: 18px;
      font-weight: 400;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // align-items:;

      .desc-up {
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        // margin-bottom: 20px;÷
      }
      .date {
        font-size: 12px;
        // font-weight:÷ 400;
        color: #6e96cc;
        line-height: 20px;
        text-align: right;
      }
    }
  }
  .line {
    width: 410px;
    height: 1px;
    margin: 0 auto;
    background: #338afb;
    border-radius: 1px;
  }
}
</style>
