

export default  {
  colors: [ 'var(--color-main-darker)', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',   
           '#FF9655', '#FFF263', '#6AF9C4'],
  chart: {
      backgroundColor: '#3486dd00'
  },
  title: {
      style: {
          color: '#000',
          font: 'bold 1rem "Fira Sans", sans-serif'
      }
  },
  xAxis: {
    tickWidth: 0,
    lineWidth: 0,
    plotLines: [{
      width: 0
    }],

    gridLineWidth: 0
  },
  yAxis: {
    plotLines: [{
      width: 0
    }],
    gridLineWidth: 0
  },
  credits: {
    enabled: false
  },
  subtitle: {
      style: {
          color: '#666666',
          font: 'bold .9rem "Fira Sans", sans-serif'
      }
  },
  legend: {
      enabled: false 
  }
};