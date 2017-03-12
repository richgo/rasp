import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { routing } from './routes';
import { QuestionConfig } from './questionconfig';
import { AppComponent, DialogContent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './components/radarchart/radarchart';
import { Footer } from './components/footer/footer';
import { SideNavComponent } from './components/sidenav/sidenav';
import { HelpComponent } from './components/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataentryComponent } from './components/dataentry/dataentry.component';
import { OverallComponent } from './components/overall/overall.component';
import 'chart.js'; 

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule,
    MaterialModule.forRoot(),
    routing,
  ],
  declarations: [ AppComponent, 
                  DialogContent, 
                  Footer, 
                  SideNavComponent, 
                  RadarChartComponent, 
                  HelpComponent, 
                  ContactComponent, 
                  DataentryComponent, 
                  OverallComponent],
  entryComponents: [DialogContent],
  providers: [QuestionConfig],
  bootstrap: [AppComponent],
})
export class MaterialAppModule { }
