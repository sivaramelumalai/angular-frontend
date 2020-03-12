import { Component, ViewChild, OnInit } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-userchart',
  templateUrl: './userchart.component.html',
  styleUrls: ['./userchart.component.css']
})
export class UserchartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Debits",
          data: [10, 41, 35, 51, 49, 62, 69,78,10, 41, 35, 51, 49, 62, 69,78,10, 41, 35, 51, 49, 62, 69,78]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Day to day debit flow graph ",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "10.00",
          "11.00",
          "12.00",
          "13.00",
          "14.00",
          "15.00",
          "16.00",
          "10.00",
          "11.00",
          "12.00",
          "13.00",
          "14.00",
          "15.00",
          "16.00",
          "10.00",
          "11.00",
          "12.00",
          "13.00",
          "14.00",
          "15.00",
          "16.00",
          
        ]
      }
    };
  }
  OnInit(){
    
  }
}
