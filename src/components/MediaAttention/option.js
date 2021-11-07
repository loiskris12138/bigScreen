export const settingOption = (title) => {
  return {

    title: {
      text: '关注报道',
      top: '40%',
      textAlign: 'center',
      left: '49%',
      textStyle: {
        fontSize: 20,
        // font-f÷amily: Microsoft YaHei;
        fontWeight: 400,
        color: '#3289FC'
        // lineHeight: /÷s38px;
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
          formatter: '{per|{d}%}{san|}',
          rich: {
            per: {
              color: '#fff',
              borderRadius: 25,
              width: 40,
              height: 40,
              backgroundColor: 'red'
            }
          }
        },

        labelLine: {
          show: false
        },
        color: ['#f4b19c', '#338afb'],
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' }

        ]
      }
    ]

  }
}
