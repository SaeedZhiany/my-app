import React from 'react';
import './App.css';
import * as Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

const App: React.FC = () => {
  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        key={"gauge chart by HC"}
        options={{

          chart: {
            type: 'solidgauge'
          },

          title: null,

          pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
              // @ts-ignore
              // backgroundColor: '#EEE',
              innerRadius: '60%',
              outerRadius: '100%',
              shape: 'arc'
            }
          },

          tooltip: {
            enabled: false
          },

          // the value axis
          yAxis: {
            min: 0,
            max: 200,
            stops: [
              [0.1, '#55BF3B'], // green
              [0.5, '#DDDF0D'], // yellow
              [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
              y: -70,
              text: 'Speed'
            },
            labels: {
              y: 16
            }
          },

          credits: {
            enabled: false
          },

          series: [{
            name: 'Speed',
            data: [80],
            dataLabels: {
              format: `
              <div style="text-align:center">
                <span style="font-size:25px;color:black;">{y}</span><br/>
                <span style="font-size:12px;color:silver">km/h</span>
              </div>
              `,
            },
            tooltip: {
              valueSuffix: ' km/h'
            }
          }],

          plotOptions: {
            solidgauge: {
              dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
              }
            }
          }
        }}
      />
    </div>
  );
};

export default App;
