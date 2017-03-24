import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { routing } from './routes';
import { QuestionConfig } from './questionconfig';
import { UserService } from './common/user.service';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './components/radarchart/radarchart';
import { Footer } from './components/footer/footer';
import { SideNavComponent } from './components/sidenav/sidenav';
import { KeytouseComponent } from './components/keytouse/keytouse.component';
import { CategoryComponent } from './components/category/category.component';
import { OverallComponent } from './components/overall/overall.component';

import { AuthService } from './common/auth.service';
import { AuthGuard } from './common/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { GroupingComponent } from './components/grouping/grouping.component';

import 'chart.js'; 

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule,
    MaterialModule.forRoot(),
    routing,
  ],
  declarations: [ AppComponent, 
                  LoginComponent,
                  SignupComponent,                   
                  Footer, 
                  SideNavComponent, 
                  RadarChartComponent, 
                  KeytouseComponent, 
                  CategoryComponent, 
                  OverallComponent,
                  GroupingComponent,
                  HomeComponent],
  entryComponents: [],
  providers: [QuestionConfig, UserService, AuthService, AuthGuard,  
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]    
  }],
  bootstrap: [AppComponent],
})
export class MaterialAppModule { }
