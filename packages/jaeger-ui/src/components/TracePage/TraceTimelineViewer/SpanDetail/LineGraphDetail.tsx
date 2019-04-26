import moment from 'moment-timezone';
import React from 'react';
import Highcharts from 'highcharts';

type LineGraphDetailProps = {
  title: string;
  metrics: string;
  hostIP: string;
  chart: string;
}

declare let window: any;

export class LineGraphDetail extends React.Component<LineGraphDetailProps> {
  
  componentDidMount() {
    const { metrics, title, hostIP, chart } = this.props;
    this.highChartsRender(metrics, title, hostIP, chart);
  }

  highChartsRender = (metrics, title, hostIP, chart) => {
    window.moment = moment || {};
    Highcharts.setOptions({
      time: {
        timezone: 'Asia/Ho_Chi_Minh'
      }
    });
    Highcharts.chart(chart, {
      chart: {
          zoomType: 'x'
      },
      title: {
          text: `${title.toUpperCase()} usage`
      },
      subtitle: {
        text: `on host ${hostIP}`
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: {
        title: {
            text: 'Percent (%)'
        },
        min: 0,
      //   max: 100
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                  },
                  stops: [
                      [0, '#2f7ed8'],
                      [1, '#a6c96a']
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          }
      },

      series: [{
          type: 'area',
          name: `${title.toUpperCase()} usage`,
          data: metrics.map(items => items.map(item => parseFloat(item) < 100 ? parseFloat(item) : item * 1000))
      }],
      credits: {
        enabled: false
      }
    });
  }

  render() {
    const { chart } = this.props;
    return (
      <div
      id={chart}
      />
    );
  }
}