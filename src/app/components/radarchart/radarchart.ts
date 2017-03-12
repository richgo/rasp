import { Component } from '@angular/core';
 
@Component({
  selector: 'radar-chart',
  templateUrl: './radarchart.html'
})
export class RadarChartComponent {
  // Radar
  public radarChartLabels:string[] = ['Business buy-in', 'Knowing what is to be shared', 'Political Backing', 'Agreeing where best practice lies'];
 
  public radarChartData:any = [
    {data: [2, 3, 5, 3, 5], label: 'Alignment of Ambition'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}