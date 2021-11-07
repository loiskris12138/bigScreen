<template>
  <div class="news">
    <div class="up-block">
      <ul>
        <li v-for="i in [1, 2, 3]" :key="i">
          <div class="content">
            <img src="@/assets/img/newimg.jpg" alt="" />
            <div class="desc">
              <div class="desc-up">
                <span class="title">《800架无人机编队飞行在苍穹之下》</span>
                <span class="read-times">阅读数118.9w</span>
              </div>
              <p class="date">2021年03月9日</p>
            </div>
          </div>
          <div class="line" v-if="i !== 3"></div>
        </li>
      </ul>
    </div>
    <div class="down-block">
      <ul>
        <li v-for="i in [1, 2, 3]" :key="i">
          <div class="content">
            <img src="@/assets/img/newimg.jpg" alt="" />
            <div class="desc">
              <div class="desc-up">
                <span class="title">《800架无人机编队飞行在苍穹之下》</span>
                <span class="read-times">阅读数118.9w</span>
              </div>
              <p class="date">2021年03月9日</p>
            </div>
          </div>
          <div class="line" v-if="i !== 3"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.news {
  width: 497px;
  // height: 541px;÷
  background: #223958;
  border-radius: 12px;
  padding: 25px;
  .up-block {
    width: 451px;
    background: linear-gradient(to right, #244a6c, #223958);
    margin-bottom: 44px;
  }
  .down-block {
    width: 451px;
    background: linear-gradient(to right, #3a4760, #293d5a);
  }
  .content {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
    .desc {
      font-family: Microsoft YaHei;
      margin-left: 18px;
      font-weight: 400;
      .desc-up {
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        margin-bottom: 28px;
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
