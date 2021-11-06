<template>
  <div :id="setid" class="trendEchartArea" />
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'TrendEchart',
  props: {
    setid: {
      type: String,
      required: true
    },
    xaxis: {
      type: Array,
      required: true
    },
    dataarray: {
      type: Array,
      required: true
    },
    sdata: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    this.initChart()
  },
  destroyed() {
    this.myChart && this.myChart.dispose()
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(document.getElementById(this.setid))
      const option = {
        color: ['#5B51C8', '#F4B19C'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },

        grid: {
          top: '15',
          left: '0',
          right: '10',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xaxis,

            axisLine: {
              show: true,
              lineStyle: {
                color: '#A1A1A1'
              }
            },
            axisTick: {
              show: false

            },
            axisLabel: {
              margin: 13,
              fontSize: 18,
              color: '#A1A1A1',
              interval: 0// 展示所有标签
            }
          }
        ],
        yAxis: [
          {
            type: 'value',

            axisLine: {
              show: true,
              lineStyle: {
                color: '#A1A1A1'
              }
            },
            axisTick: {
              show: false

            },
            axisLabel: {
              margin: 9,
              fontSize: 18,
              color: '#A1A1A1'
            },
            splitLine: {
              lineStyle: {
                color: '#D0D0D0',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#5B51C8'
                },
                {
                  offset: 1,
                  color: '#338AF8'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: this.dataarray
          },
          {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#F4B19C'
                },
                {
                  offset: 1,
                  color: '#CAC0A0'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: this.sdata
          }

        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    }

  }

}
</script>
<style lang="scss" scoped>
.trendEchartArea {
  width: 348px;
  height: 186px;
}
</style>
