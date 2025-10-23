import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, PieChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
echarts.use([BarChart, GridComponent, CanvasRenderer, PieChart]);
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-twelveclock',
  imports: [NgxEchartsDirective, ButtonComponent, ReactiveFormsModule],
  templateUrl: './twelveclock.component.html',
  styleUrl: './twelveclock.component.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class TwelveclockComponent implements OnInit {
  // clocks = ['4', '6', '8', '10', '12', '14', '16', '20'];

  clocks = [
    { value: '4' },
    { value: '6' },
    { value: '8' },
    { value: '10' },
    { value: '12' },
    { value: '14' },
    { value: '16' },
    { value: '20' },
  ];

  clockForm = new FormGroup({

    clockLevels: new FormControl(null, Validators.required),




  });




  @ViewChild(NgxEchartsDirective) myChart: any;

  chartOptions = {
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
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
          { value: 30, itemStyle: { color: 'white' } },
        ],
        label: {
          show: false, // Set to false if you want to hide the labels completely
          // ... other label configurations
        },
        labelLine: {
          show: false // Set to false to hide the label lines
        },
        itemStyle: {

          borderWidth: 2,
          borderColor: '#000000'
        }

      }
    ]

  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.chartOptions
  }

  constructor() {

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
  rewindClock() {
    const targetValue = "green";
    const newValueForFirstMatch = "white";

    let firstMatchFound = false;

    const originalArray = this.chartOptions.series[0].data

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

    const firstElement = modifiedArray.shift();

    // Add the stored first element to the end of the array
    modifiedArray.push(firstElement);

    this.chartOptions.series[0].data.splice(0, this.chartOptions.series[0].data.length, ...modifiedArray)
    this.myChart.setOption(this.chartOptions, true);
  }





  async clockUpdate(postData: any) {

    const clockLevels = postData.clockLevels.valueOf();



    const formData = {
      // char_id,

      clockLevels,

    }

    console.log(formData);
    // console.log(char_id);
    // console.log(user);


  }
}
