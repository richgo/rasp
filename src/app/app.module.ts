import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { routing } from './routes';
import { QuestionConfig } from './questionconfig';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './components/radarchart/radarchart';
import { Footer } from './components/footer/footer';
import { SideNavComponent } from './components/sidenav/sidenav';
import { HelpComponent } from './components/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataentryComponent } from './components/dataentry/dataentry.component';
import { OverallComponent } from './components/overall/overall.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './common/auth.service';
import { AuthGuard } from './common/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import 'chart.js'; 

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
                  HelpComponent, 
                  ContactComponent, 
                  DataentryComponent, 
                  OverallComponent],
  entryComponents: [],
  providers: [QuestionConfig, AuthService, AuthGuard, ...AUTH_PROVIDERS],
  bootstrap: [AppComponent],
})
export class MaterialAppModule { }
