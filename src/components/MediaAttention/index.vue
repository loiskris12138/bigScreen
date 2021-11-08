<template>
  <div class="media-attention">
    <div class="commonHeadLine">媒体关注</div>

    <div class="content">
      <div class="charts">
        <pie-chart />
        <div class="legend">
          <li class="local media"><span class="circle" /> 本地媒体</li>
          <li class="cctv media"><span class="circle" /> 央视媒体</li>
        </div>
        <pie-chart />
      </div>
      <div class="center-tags">
        <ul class="left">
          <li v-for="i in rightTag" :key="i" class="tag">
            <span>{{ i }}</span>
          </li>
        </ul>
        <ul class="right">
          <li v-for="i in rightTag" :key="i" class="tag">
            <span>{{ i }}</span>
          </li>
        </ul>
      </div>
      <div class="bottom-news-brand">
        <li><img class="image" src="@/assets/img/news4.png" alt="" /></li>
        <li><img class="image" src="@/assets/img/news3.png" alt="" /></li>
        <li>
          <img
            class="image image-center"
            src="@/assets/img/renmin.png"
            alt=""
          />
        </li>
        <li><img class="image" src="@/assets/img/news1.png" alt="" /></li>
        <li><img class="image" src="@/assets/img/news2.png" alt="" /></li>
      </div>
    </div>
  </div>
</template>

<script>
// import Title from '@/components/common/Title.vue'
import PieChart from "./PieChart.vue";
import { leftTag, rightTag } from "./constant";
export default {
  components: {
    // Title,
    PieChart,
  },
  data: () => {
    return {
      leftTag,
      rightTag,
    };
  },

  created: () => {},
};
</script>

<style lang="scss" scoped>
.media-attention {
  width: 770px;
  height: 541px;
  background: #223958;
  border-radius: 12px;
  padding: 20px;
  margin-right: 20px;
  .image {
    width: 88px;
    height: 88px;
    display: block;
  }
  .image-center {
    width: 124px;
    height: 115px;
    // display: block;
  }
  .title {
    width: 300px;
    height: 50px;
    background-color: gold;
  }
  .charts {
    display: flex;
    justify-content: left;
    align-items: center;
    .legend {
      margin-left: 15px;
      .media {
        display: flex;
        justify-content: left;
        align-items: center;
        .circle {
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
      .local {
        color: #338afb;
        margin-bottom: 23px;
        .circle {
          background-color: #338afb;
        }
      }
      .cctv {
        color: #f4b19c;
        .circle {
          background-color: #f4b19c;
        }
      }
    }
  }
  .center-tags {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-size: 12px;
    .left,
    .right {
      width: 250px;
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
    }
    .left {
      .tag {
        span {
          background-color: #338afb;
        }
      }
    }
    .tag {
      min-width: 120px;
      margin-bottom: 17px;
    }
    .tag span {
      display: inline-block;
      //   max-width: 86px;
      padding: 2px 20px 2px 4px;

      background-color: #f4b19c;
      border-radius: 9px;
    }
  }
  .bottom-news-brand {
    background: url("../../assets/img/mediabg.png") center center no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
