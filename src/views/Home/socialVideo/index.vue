<template>
  <div class="socialVideoArea">
    <div class="commonHeadLine">国内社交音频视频号</div>
    <div class="socialVideoContent">
      <div class="leftChartArea">
        <div v-for="(item, index) in trendChartList" :key="index">
          <h3 class="subTitle">{{ item.name }}</h3>
          <trendEchart
            :setid="item.id"
            :xaxis="item.xAxis"
            :dataarray="item.data"
            :sdata="item.sdata"
          />
        </div>
      </div>
      <div class="rightArea">
        <h3 class="subTitle">国内外新媒体平台</h3>
        <mediaArea />
        <h3 class="subTitle">丽娃朋友圈</h3>
        <friendsCircle />
      </div>
    </div>
  </div>
</template>
<script>
import trendEchart from './trendEchart'
import friendsCircle from './friendsCircle.vue'
import mediaArea from './mediaArea.vue'
import { trendChartList } from '../data'
export default {
  name: 'SocialVideo',
  components: {
    trendEchart,
    friendsCircle,
    mediaArea
  },
  data() {
    return {
      trendChartList: trendChartList
    }
  },
  mounted() {},
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.socialVideoArea {
  width: 680px;
  height: 734px;
  background: #223958;

  border-radius: 12px;
  .subTitle {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 7px;
  }
  .socialVideoContent {
    padding: 0px 20px 17px 20px;
    display: flex;

    .leftChartArea {
      display: flex;
      flex-direction: column;
      margin-top: 27px;
    }
    .rightArea {
      margin-left: 31px;
      margin-top: 29px;
    }
  }
}
</style>
