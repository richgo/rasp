import { Injectable, Output } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
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
      }
}

@Injectable()
export class UserService {

  @Output() User : User; 

  private getFunction: string = 'https://raspdevfunctionapp.azurewebsites.net/api/RaspGetUserData?code=TRmnq7VhRozCE0engw8hZvXj9vDuuLrJK4npralZYEtRLRv0wsS/QQ==';  
  private saveFunction: string = 'https://raspdevfunctionapp.azurewebsites.net/api/RaspSaveUserData?code=xLKD3iu3f9pw/5s/ktfoeSXAWOe0lQovBkkChlADeOJf5wXBpglegg==';

  constructor(private http : Http){
  }

  public load(id: string): any {
    
       this.getUser(id).subscribe(groupings => this.User = this.mapUser(groupings, id), error =>  console.debug(<any>error));
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

    let grouping = this.User.groupings.filter(g => g.Gid === gid);

    if(grouping.length === 0){
      let grp = new Grouping(gid);
      grouping.push(grp);
    }
    return grouping[0];
  }

  public getCategory(cid: number, gid: number): Category {
  
    let grouping = this.getGrouping(gid);
    let category = grouping.categories.filter(g => g.Cid === cid);

    if(category.length === 0){
      let cat = new Category(cid);
      category.push(cat);
    }
   return category[0];
  }

  private mapUser(r:any, id:string): User {
    let user = <User>({ id: id, groupings: r });
    console.log('Parsed user:', user);
    return user;
  }  

    // to avoid breaking the rest of our app
    // I extract the id from the person url
    // private extractId(personData:any){
    //   let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
    //   return parseInt(extractedId);
    // }

    // private mapUser(response:Response): User{
    // // toPerson looks just like in the previous example
    //   return this.toUser(response.json());
    // }

}