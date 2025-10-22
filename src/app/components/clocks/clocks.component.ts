import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, PieChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { Component } from '@angular/core';
echarts.use([BarChart, GridComponent, CanvasRenderer, PieChart]);

@Component({
  selector: 'app-clocks',
  imports: [NgxEchartsDirective], // Add NgxEchartsDirective to imports
  providers: [provideEchartsCore({ echarts })],
  templateUrl: './clocks.component.html',
  styleUrl: './clocks.component.scss'
})
export class ClocksComponent {

  chartOptions: any;

  constructor() {
    this.chartOptions = {

      title: {
        // text: 'Referer of a Website',
        // subtext: 'Fake Data',
        // left: 'center'
      },
      tooltip: {
        // trigger: 'item'
      },
      legend: {
        // orient: 'vertical',
        // left: 'left'
      },
      series: [
        {
          // name: 'Access From',
          type: 'pie',
          radius: '50%',
          startAngle: 0,
          decal: {
            show: false
          },
          data: [
            { value: 60, itemStyle: { color: 'green' } },
            { value: 60, itemStyle: { color: 'green' } },
            { value: 60, itemStyle: { color: 'white' } },
            { value: 60, itemStyle: { color: 'white' } },
            { value: 60, itemStyle: { color: 'white' } },
            { value: 60, itemStyle: { color: 'white' } }
          ],
          label: {
            show: false, // Set to false if you want to hide the labels completely
            // ... other label configurations
          },
          labelLine: {
            show: false // Set to false to hide the label lines
          },
          color: [
            // '#ffffff',
            // '#91cc75',
            // '#91cc75',
            // '#91cc75',
            // '#91cc75',
            // '#91cc75',


          ]
          // emphasis: {
          //   itemStyle: {
          //     shadowBlur: 10,
          //     shadowOffsetX: 0,
          //     shadowColor: 'rgba(0, 0, 0, 0.5)'
          //   }
          // }
        }
      ]

    };
  }

}
