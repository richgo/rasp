import { Component, Optional, Output, ViewChild } from '@angular/core';
import { QuestionConfig } from './questionconfig';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from './common/auth.service';
import { UserService } from './common/user.service';

@Component({
  selector: 'rasp-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  isDarkTheme: boolean = false;
  lastDialogResult: string;
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  @ViewChild('sidenav') sideNav;

  constructor(public questionConfig: QuestionConfig, public router: Router, public http: Http,
              public authHttp: AuthHttp, private auth: AuthService, public userService: UserService) {

  }


  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

}
