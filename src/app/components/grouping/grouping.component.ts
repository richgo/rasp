import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionConfig } from '../../questionconfig';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.css']
})
export class GroupingComponent implements OnInit {

  @Output() radarChartLabels:string[] = []; 
  @Output() radarChartData:any = [
    {data: [], label: ''}
  ];

  scores = [1,2,3,4,5];
  groupname: string;
  groupdescription: string;
  questions: any;
  gid: number;
  @ViewChild('start') sideNav;

  private sub: any;

  constructor(public questionConfig: QuestionConfig, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.gid = +params['gid']; // (+) converts string 'id' to a number
      //  if(Number.isNaN(this.sid)){
       let group = this.questionConfig
                        .getConfig()
                        .filter(x => x.gid == this.gid)[0];   

           this.groupname = group.name;
        this.groupdescription = group.description;

        this.radarChartLabels = group.categories.map(obj => obj.name);
        this.radarChartData = [{ data: [ 1,3,4,3], label: this.groupname }, { data: [ 5,3,1,3], label: 'test' }];
     //  }
        this.sideNav.open();
    });
  }

}
