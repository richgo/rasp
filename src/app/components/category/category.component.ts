import { Component, OnInit, Output, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionConfig } from '../../questionconfig';
import { UserService, Category, Question } from '../../common/user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

@Injectable()
export class CategoryComponent implements OnInit {

  @Input() userService: UserService;

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
  cid: number;
  userCategory : Category;

  private sub: any;

  constructor(public questionConfig: QuestionConfig, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.gid = +params['gid']; // (+) converts string 'id' to a number
       this.cid = +params['cid']; // (+) converts string 'id' to a number

       let group = this.questionConfig
                        .getConfig()
                        .filter(x => x.gid == this.gid)[0];   

       let subgroup = group.categories
                          .filter(x => x.cid == this.cid)[0];
                            
        
        this.subgroupname = subgroup.name;
        this.questions = subgroup.questions;
        this.groupname = group.name;
        this.groupdescription = group.description;

        this.radarChartLabels = group.categories.map(obj => obj.name);
        this.radarChartData = [{ data: [ 1,3,4,3], label: this.groupname }, { data: [ 5,3,1,3], label: 'test' }];

        console.debug(this.userService);
       // this.userCategory = this.userService.getCategory(this.sid, this.gid);
    });
  }

}
