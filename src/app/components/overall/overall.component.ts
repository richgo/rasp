import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionConfig } from '../../questionconfig';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent implements OnInit {

  @Output() radarChartLabels:string[] = []; 
  @Output() radarChartData:any = [
    {data: [], label: ''}
  ];

  scores = [1,2,3,4,5];
  groupname: string;
  groupdescription: string;
  questions: any;
  gid: number;

  private sub: any;

  constructor(public questionConfig: QuestionConfig, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let group = this.questionConfig
                        .getConfig();   

        this.groupname = group[0].name;
        this.groupdescription = group[0].description;

        this.radarChartLabels = group[0].categories.map(obj => obj.name);
        this.radarChartData = [{ data: [ 1,3,4,3], label: this.groupname }, { data: [ 5,3,1,3], label: 'test' }];
     //  }
    });
  }

}
