import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { routing } from './routes';
import { QuestionConfig } from './questionconfig';
import { Material2AppAppComponent, DialogContent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './components/radarchart/radarchart';
import { Footer } from './components/footer/footer';
import { SideNavComponent } from './components/sidenav/sidenav';
import 'chart.js'; 

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule,
    MaterialModule.forRoot(),
    routing,
  ],
  declarations: [Material2AppAppComponent, DialogContent, Footer, SideNavComponent, RadarChartComponent],
  entryComponents: [DialogContent],
  providers: [QuestionConfig],
  bootstrap: [Material2AppAppComponent],
})
export class MaterialAppModule { }
