<template>
  <div class="chart-wrapper">
    <ECharts ref="chart" :option="option" />
  </div>
</template>

<script>
import { createComponent } from "echarts-for-vue";
import * as echarts from "echarts";
import { settingOption } from "./option";
export default {
  components: {
    ECharts: createComponent({ echarts }),
  },
  data: () => ({
    option: settingOption("关注媒体"),
  }),
  created() {},
  mounted() {
    console.log(this.$refs.chart);
  },
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
  flex: 1;
  flex-shrink: 1;
  width: 180px;
  height: 180px;
}
</style>
