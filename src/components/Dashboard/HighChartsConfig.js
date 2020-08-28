export default function (data) {


  return ( {
    title: {
      text: ''
    },
  
  
    yAxis: {
      title: {
        text: 'Price'
      }
    },
  
    xAxis: 
     {
        type: 'datetime',
        accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
      }
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
  
    series: data,
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

  }
  )

}