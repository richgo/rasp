import { Component, Input  } from '@angular/core';

@Component({
  selector: 'radar-chart',
  templateUrl: './radarchart.html',
    styleUrls: ['./radarchart.css']
})
export class RadarChartComponent {
  @Input() radarChartLabels: string[];
  @Input() radarChartData: {};
  // Radar
  // public radarChartLabels:string[] = [];
 
  // public radarChartData:any = [
  //   {data: [], label: ''}
  // ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}