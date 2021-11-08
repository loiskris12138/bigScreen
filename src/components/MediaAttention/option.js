const  fontSet=(val)=> {
  const htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  console.log(Math.round((htmlWidth / 1920) * val));
  return Math.round((htmlWidth / 1920) * val);
}
export const settingOption = (title) => {
  return {

    title: {
      text: '关注报道',
      top: '40%',
      textAlign: 'center',
      left: '49%',
      textStyle: {
        fontSize: fontSet(20),
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
          show: true,
          // formatter:(params) => {
          //   console.log(params,'params')
          //   return `${params.percent}%{san|}`
          // },
          formatter: '{per|{d}%}{san|}',
          rich: {
            per: {
              width:  fontSet(55),
              height:  fontSet(55)
            }
          }
        },

        labelLine: {
          show: false
        },
        color: ['#f4b19c', '#338afb'],
        data: [
          { value: 1048, name: 'Search Engine', label: { backgroundColor: '#f4b19c', borderRadius: 25, color: '#fff' ,fontSize:fontSet(16)}},
          { value: 735, name: 'Direct', label: { backgroundColor: '#338afb', borderRadius: 25, color: '#fff',fontSize:fontSet(16)}}

        ]
      }
    ]

  }
}
