import { Injectable, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
    
export class User {
    id: string;
    questionData: {};
}

@Injectable()
export class UserService {

  @Output() User : User; 

  private getFunction: string = 'https://raspdevfunctionapp.azurewebsites.net/api/RaspGetUserData?code=TRmnq7VhRozCE0engw8hZvXj9vDuuLrJK4npralZYEtRLRv0wsS/QQ==';  
  private saveFunction: string = 'https://raspdevfunctionapp.azurewebsites.net/api/RaspSaveUserData?code=xLKD3iu3f9pw/5s/ktfoeSXAWOe0lQovBkkChlADeOJf5wXBpglegg==';

  constructor(private http : Http){
  }

  public load(id: string): Observable<User> {
    let user$ = this.http
      .post('${this.getFunction}', { headers: this.getHeaders(), body: { user: { id: id }} })
      .map(this.mapUsers);
    //  User = user$;
     console.debug(user$);
     return user$;
  }

  public save(user): void{
    let user$ = this.http
      .post('${this.saveFunction}', { headers: this.getHeaders(), body: user });  
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private mapUsers(response:Response): User{
   // The response of the API has a results
   // property with the actual results
   console.debug(response);
   return response.json().results.map(this.toUser);
  }

  private toUser(r:any): User{
    let user = <User>({ id: r.id, questionData: r.questionData });
    console.log('Parsed user:', user);
    return user;
  }  

    // to avoid breaking the rest of our app
    // I extract the id from the person url
    // private extractId(personData:any){
    //   let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
    //   return parseInt(extractedId);
    // }

    private mapUser(response:Response): User{
    // toPerson looks just like in the previous example
      return this.toUser(response.json());
    }

}