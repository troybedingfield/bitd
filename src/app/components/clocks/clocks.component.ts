import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, PieChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { Component, OnInit, ViewChild } from '@angular/core';
echarts.use([BarChart, GridComponent, CanvasRenderer, PieChart]);

@Component({
  selector: 'app-clocks',
  imports: [NgxEchartsDirective], // Add NgxEchartsDirective to imports
  providers: [provideEchartsCore({ echarts })],
  templateUrl: './clocks.component.html',
  styleUrl: './clocks.component.scss'
})
export class ClocksComponent implements OnInit {

  @ViewChild(NgxEchartsDirective) myChart: any;

  chartOptions = {

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
          { value: 60, itemStyle: { color: 'white' } },
          { value: 60, itemStyle: { color: 'white' } },
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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.chartOptions
  }

  constructor() {
    // this.chartOptions = {

    //   title: {
    //     // text: 'Referer of a Website',
    //     // subtext: 'Fake Data',
    //     // left: 'center'
    //   },
    //   tooltip: {
    //     // trigger: 'item'
    //   },
    //   legend: {
    //     // orient: 'vertical',
    //     // left: 'left'
    //   },
    //   series: [
    //     {
    //       // name: 'Access From',
    //       type: 'pie',
    //       radius: '50%',
    //       startAngle: 0,
    //       decal: {
    //         show: false
    //       },
    //       data: [
    //         { value: 60, itemStyle: { color: 'white' } },
    //         { value: 60, itemStyle: { color: 'white' } },
    //         { value: 60, itemStyle: { color: 'white' } },
    //         { value: 60, itemStyle: { color: 'white' } },
    //         { value: 60, itemStyle: { color: 'white' } },
    //         { value: 60, itemStyle: { color: 'white' } }
    //       ],
    //       label: {
    //         show: false, // Set to false if you want to hide the labels completely
    //         // ... other label configurations
    //       },
    //       labelLine: {
    //         show: false // Set to false to hide the label lines
    //       },
    //       color: [
    //         // '#ffffff',
    //         // '#91cc75',
    //         // '#91cc75',
    //         // '#91cc75',
    //         // '#91cc75',
    //         // '#91cc75',


    //       ]
    //       // emphasis: {
    //       //   itemStyle: {
    //       //     shadowBlur: 10,
    //       //     shadowOffsetX: 0,
    //       //     shadowColor: 'rgba(0, 0, 0, 0.5)'
    //       //   }
    //       // }
    //     }
    //   ]

    // };
  }

  advanceClock() {
    const targetValue = "white";
    const newValueForFirstMatch = "green";

    let firstMatchFound = false;

    const originalArray = this.chartOptions.series[0].data
    // console.log(this.chartOptions.series[0].data)
    // this.chartOptions.series[0].data.map((item: any, index: any) => {
    //   console.log(index, item.itemStyle.color)
    // })

    // const modifiedArray = originalArray.map((item: { value: string; }) => {
    //   if (item.value === targetValue && !firstMatchFound) {
    //     firstMatchFound = true; // Mark that the first match is found
    //     return { ...item, value: newValueForFirstMatch }; // Create a new object with the updated value
    //   }
    //   return { ...item }; // Return a new object for other items to avoid modifying the original
    // });
    const modifiedArray = this.chartOptions.series[0].data.map((item: any, index: any) => {
      console.log(item.itemStyle.color)
      if (item.itemStyle.color === targetValue && !firstMatchFound) {
        firstMatchFound = true; // Mark that the first match is found
        return { ...item, itemStyle: { color: newValueForFirstMatch } }; // Create a new object with the updated value
      }
      return { ...item }; // Return a new object for other items to avoid modifying the original
    });

    console.log(modifiedArray)
    console.log(this.chartOptions.series[0].data)
    // this.chartOptions.series[0].data = modifiedArray;
    this.chartOptions.series[0].data.splice(0, this.chartOptions.series[0].data.length, ...modifiedArray)
    this.myChart.setOption(this.chartOptions, true);
  }

}
