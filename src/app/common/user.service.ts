import { Injectable, Output } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class User {
    id: string;
    firstname: string;
    lastname: string;
    groupings: Grouping[];
}

export class Grouping {

    Gid: number;
    public categories: Category[];

      constructor(private gid : number){
        this.Gid = gid;
  }
}

export class Category {
    Cid: number;
    public questions: Question[];

      constructor(private cid : number){
        this.Cid = cid;
      }
}

export class Question {
    Qid: number
    score: number;

    constructor(private qid : number){
        this.Qid = qid;
        this.score = null;
      }
}

@Injectable()
export class UserService {

  @Output() User : User; 

  private getFunction: string = 'https://raspdevfunctionapp.azurewebsites.net/api/RaspGetUserData?code=TRmnq7VhRozCE0engw8hZvXj9vDuuLrJK4npralZYEtRLRv0wsS/QQ==';  
  private saveFunction: string = 'https://raspdevfunctionapp.azurewebsites.net/api/RaspSaveUserData?code=xLKD3iu3f9pw/5s/ktfoeSXAWOe0lQovBkkChlADeOJf5wXBpglegg==';

  constructor(private http : Http, private _cacheService : CacheService){
  }

  public load(id: string): any {
    
      console.log('getting user: ' + id);
       this.getUser(id).subscribe(groupings => {

         this.User = this.mapUser(groupings, id);
          console.log('caching user: ' + id);
         let result: boolean = this._cacheService.set('user', this.User);
         console.log('user cached ' + this.User.id);
        
      }, error =>  console.debug(<any>error));
  }

  public getUser(id: string): any {
  
    let bodyData = { id:  id };
    let user = this.http
      .post(this.getFunction, { headers: this.getHeaders(), body: bodyData})
      .map(res => res.json)
      .catch(this.handleError);  
   
     console.debug(user);
     return user;
  }

   public save(id: string): any {
    
       this.saveUser(id).subscribe(user => console.debug("saved"), error =>  console.debug(<any>error));
      let result: boolean = this._cacheService.set('user', this.User);
  }

  public saveUser(user): any {
    let user$ = this.http
      .post(this.saveFunction, { headers: this.getHeaders(), body: user})
       .map(res => res.json)
      .catch(this.handleError);

     console.debug(user);
  }

  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  public getGrouping(gid: number) : Grouping {
    console.debug(this.User);

    if( this.User === undefined){
         this.User = this._cacheService.get('user');
         console.debug('loading user from cache ' + this.User);
    }

    if(!Array.isArray(this.User.groupings)){
      this.User.groupings = [new Grouping(gid)];
    }

    let grouping = this.User.groupings.filter(g => g.Gid === gid);
    console.debug('gid ' + gid + ', grouping l ' + grouping.length);
    if(grouping.length === 0){
      let grp = new Grouping(gid);
      this.User.groupings.push(grp);
      return grp;
    }
    return grouping[0];
  }

  public getCategory(cid: number, gid: number): Category {
  
    let grouping = this.getGrouping(gid);

    if(!Array.isArray(grouping.categories)){
      grouping.categories = [new Category(cid)];
    }

    let category = grouping.categories.filter(g => g.Cid === cid);

    if(category.length === 0){
      let cat = new Category(cid);
      this.User.groupings.filter(g => g.Gid === gid)[0].categories.push(cat);
      return cat;
    }
   return category[0];
  }

  public getQuestions(cid: number, gid: number, configQuestions: any[]): Question[] {

    let category = this.getCategory(cid, gid);

       if(category.questions === undefined || !Array.isArray(category.questions)){
        category.questions =  new Array<Question>();
    }

    configQuestions.forEach(configQuestion => {

       let question = category.questions.filter(q => q.Qid === configQuestion.qid);

        if(question.length === 0){
          let ques = new Question(configQuestion.qid);
         
         this.User.groupings.filter(g => g.Gid === gid)[0]
                  .categories.filter(c => c.Cid == cid)[0]
                  .questions.push(ques);
             
        }      
    });

    return  this.User.groupings.filter(g => g.Gid === gid)[0]
                  .categories.filter(c => c.Cid == cid)[0]
                  .questions;
  }


  private mapUser(r:any, id:string): User {
    let user = <User>({ id: id, groupings: r });
    console.log('Parsed user:', user);
    return user;
  }  
}