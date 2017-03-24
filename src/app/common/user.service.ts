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
    gid: number;
    categories: Category[];
}

export class Category {
    sid: number;
    questions: Question[];
}

export class Question {
    qid: number
    score: number;
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

  public saveUser(user): any{
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

//   private mapUsers(response:Response): User{
//    // The response of the API has a results
//    // property with the actual results
//    console.debug(response);
//    return response.json().results.map(this.toUser);
//   }

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