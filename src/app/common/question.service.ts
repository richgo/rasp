import { Injectable, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
    
export class QuestionConfig {

}

@Injectable()
export class QuestionService {

  @Output() QuestionConfig : QuestionConfig; 

  private getFunction: string = 'insert contentful link here';  
 
  constructor(private http : Http){
  }

  public getQuestionConfig(id): Observable<QuestionConfig>{
    let questionconfig$ = 
                    this.http
                        .post('${this.getFunction}', { headers: this.getHeaders(), body: id });
                    //    .map(this.mapUsers);


      return questionconfig$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

//   private mapUsers(response:Response): User[]{
//    // The response of the API has a results
//    // property with the actual results
//    return response.json().results.map(this.toUser);
//   }

//   private toUser(r:any): User{
//     let user = <User>({ id: r.id, questionData: r.questionData });
//     console.log('Parsed user:', user);
//     return user;
//   }  

//     // to avoid breaking the rest of our app
//     // I extract the id from the person url
//     // private extractId(personData:any){
//     //   let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
//     //   return parseInt(extractedId);
//     // }

//     private mapUser(response:Response): User{
//     // toPerson looks just like in the previous example
//       return this.toUser(response.json());
//     }

}