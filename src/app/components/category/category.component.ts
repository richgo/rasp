import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionConfig } from '../../questionconfig';
import { UserService, Category, Question } from '../../common/user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  @Output() radarChartLabels:string[] = []; 
  @Output() radarChartData:any = [
    {data: [], label: ''}
  ];

  scores = [1,2,3,4,5];
  subgroupname: string;
  groupname: string;
  groupdescription: string;
  configQuestions: any;
  gid: number;
  cid: number;
  questions : Question[];
  @ViewChild('sidenav') sideNav;

  private sub: any;

  constructor(public questionConfig: QuestionConfig, private route: ActivatedRoute, public userService: UserService) {

   } 

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.gid = +params['gid']; // (+) converts string 'id' to a number
       this.cid = +params['cid']; // (+) converts string 'id' to a number

       let group = this.questionConfig
                        .getConfig()
                        .filter(x => x.gid == this.gid)[0];   

       let categories = group.categories
                          .filter(x => x.cid == this.cid)[0];
                            
        
        this.subgroupname = categories.name;
        this.configQuestions = categories.questions;
        this.groupname = group.name;
        this.groupdescription = group.description;

        this.radarChartLabels = group.categories.map(obj => obj.name);
        this.radarChartData = [{ data: [ 1,3,4,3], label: this.groupname }, { data: [ 5,3,1,3], label: 'test' }];

        console.debug(this.userService);
        this.questions = this.userService.getQuestions(this.cid, this.gid, categories.questions);
        this.sideNav.open();
    });
  }

  private save(){
    console.debug(this.questions);
  }

}
