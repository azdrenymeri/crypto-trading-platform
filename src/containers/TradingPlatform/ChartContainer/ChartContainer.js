import React from 'react';
import Chart from 'react-apexcharts';

class ChartContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      options: {
        annotation:{
          position: 'front'
        },
        chart: {
          id: 'candlestick',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [{
        data: [
          [1538856000000, [6593.34, 6600, 6582.63, 6600]], 
          [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]
            // [[new Date('2020/10/22 16:30:00').getTime()], [108.25,115.00,106.30,113.66]],
          // [[new Date('2020/10/22 16:40:00').getTime()], [119.62,119.68,100.59,105.26]],
          // [[new Date('2020/10/22 16:50:00').getTime()], [124.91,129.80,123.00,128.24]],
          // [[new Date('2020/10/22 17:00:00').getTime()], [129.80,134.79,128.52,131.93]],
          // [[new Date('2020/10/22 17:10:00').getTime()], [127.27,130.95,125.15,128.71]],
          // [[new Date('2020/10/22 17:20:00').getTime()], [131.85,135.80,126.66,126.84]],
          // [[new Date('2020/10/22 17:30:00').getTime()], [139.94,140.25,130.66,131.05]],
          // [[new Date('2020/10/22 17:40:00').getTime()], [142.60,144.20,136.31,140.91]],
          // [[new Date('2020/10/22 17:50:00').getTime()], [130.57,135.43,120.68,134.09]],
          // [[new Date('2020/10/22 18:00:00').getTime()], [138.49,138.51,127.83,127.83]],
          // [[new Date('2020/10/22 18:10:00').getTime()], [133.86,142.50,132.15,139.88]],
          
        ]
      }]
    }
  }

  render(){
    return(<div>
      <Chart 
        options={this.state.options} 
        series={this.state.series} 
        type="candlestick"
        // height="100%"
        // width="100%"
         />
    </div>)
  }
}

export default ChartContainer;