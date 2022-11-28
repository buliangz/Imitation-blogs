// 文章结构
function Echarts_1(){
    var getID_1=echarts.init(document.getElementById("my-echarts-1"));
    option = {
        tooltip: {
      
          trigger: 'axis',
          axisPointer: {}
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          height:'30%',
          // top:'10%',
          // margin:'5px',
          // padding:" 0px 1px",
          bottom: '5%',
          // borderRadius: '10px',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          type: 'category',
          show: false,
          data: ['Mon']
        },
        series: [
          {
            name: 'Java',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [1]
            
          },
          
          {
            name: 'Html \\ Css',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [3]
          },
          {
            name: 'JavaScript',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [2]
          },
          {
            name: 'Android',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [1]
          },
          {
            name: 'Liux',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [2]
          },
          {
            name: '其他',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [2]
          }
        ]
    };
    getID_1.setOption(option);
    window.addEventListener("resize", function() {
        getID_1.resize();
    });
}


// 文章倾向
function Echarts_2(){
    var getID_2=echarts.init(document.getElementById("essayEcharts"));
    option = {

      legend: {
        data: [ '文章内容倾向']
      },
      grid: {
        left: '1%',
        right: '1%',
        bottom: '2%',        
        containLabel: true
      },
      radar: {
        
        indicator: [
          { name: 'Html \\ Css', max: 5 },
          { name: 'Java', max: 5 },
          { name: 'Liux', max: 5 },
          { name: 'Android', max: 5 },
          { name: 'JavaScript', max: 5 },
          { name: '其他', max: 5 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
     
            {
              value: [3, 1, 2, 1, 2, 2],
              name: '文章内容倾向'
            }
          ]
        }
      ]
    };
    getID_2.setOption(option);
    window.addEventListener("resize", function() {
        getID_2.resize();
    });
}


// 访问
function Echarts_3(){
  var getID_3=echarts.init(document.getElementById("flowEcharts"));
 
  option = {
    title: {
      text: '访问数据'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['IP', 'PULL', '其他']
    },
    grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['11.22', '11.23', '11.24', '11.25', '11.26', '11.27', '11.28']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'IP',
        type: 'line',
        data: [ 0, 3 , 0, 0, 0, 0, 2],
      },
      {
        name: 'PULL',
        type: 'line',
        data: [0, 1, 0, 0, 0, 0, 0],
      },
      {
        name: '其他',
        type: 'line',
        data: [0, 1, 0, 0, 0, 0, 0],
      }
    ]
  };
  getID_3.setOption(option);
    window.addEventListener("resize", function() {
        getID_3.resize();
    });
}

  Echarts_1();
  Echarts_2();
  Echarts_3();

$(window).resize(function(){				         //  监控窗口宽度变化
  Echarts_1();
  Echarts_2();
  Echarts_3();
    
});