import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { contentHeaders } from '../../common/headers';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public http: Http, private auth: AuthService) {
    auth.authenticated();
  }

  ngOnInit() {
  }

  //  login(event, username, password) {
  //      this.lock.show();
  //   // event.preventDefault();
  //   // let body = JSON.stringify({ username, password });
  //   // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
  //   //   .subscribe(
  //   //     response => {
  //   //       localStorage.setItem('id_token', response.json().id_token);
  //   //       this.router.navigate(['home']);
  //   //     },
  //   //     error => {
  //   //       alert(error.text());
  //   //       console.log(error.text());
  //   //     }
  //   //   );
  // }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}
