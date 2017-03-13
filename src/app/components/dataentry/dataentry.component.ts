import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionConfig } from '../../questionconfig';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {

  @Output() radarChartLabels:string[] = []; 
  @Output() radarChartData:any = [
    {data: [], label: ''}
  ];

  scores = [1,2,3,4,5];
  subgroupname: string;
  groupname: string;
  groupdescription: string;
  questions: any;
  gid: number;
  sid: number;

  private sub: any;

  constructor(public questionConfig: QuestionConfig, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.gid = +params['gid']; // (+) converts string 'id' to a number
       this.sid = +params['sid']; // (+) converts string 'id' to a number
      //  if(Number.isNaN(this.sid)){
       let group = this.questionConfig
                        .getConfig()
                        .filter(x => x.gid == this.gid)[0];   

       let subgroup = group.subgrouping
                          .filter(x => x.sid == this.sid)[0];
                            
        this.subgroupname = subgroup.name;
        this.questions = subgroup.questions;
        this.groupname = group.name;
        this.groupdescription = group.description;

        this.radarChartLabels = group.subgrouping.map(obj => obj.name);
        this.radarChartData = [{ data: [ 1,3,4,3], label: this.groupname }];
     //  }
    });
  }

}
