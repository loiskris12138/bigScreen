<template>
  <div class="chart-wrapper">
    <ECharts
      ref="chart"
      :style="{ width: fontSet(340) + 'px' }"
      :option="option"
    />
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
    // console.log(this.$refs.chart);
  },
  methods: {
    fontSet(val) {
      const htmlWidth =
        document.documentElement.clientWidth || document.body.clientWidth;
      console.log(Math.round((htmlWidth / 1920) * val));
      return Math.round((htmlWidth / 1920) * val);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
  flex: 1;
  flex-shrink: 1;
  width: 200px;
  height: 200px;
}
</style>
