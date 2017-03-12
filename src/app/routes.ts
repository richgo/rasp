import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
import { DataentryComponent } from './components/dataentry/dataentry.component';
import { OverallComponent } from './components/overall/overall.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
 {
  path: '',
  redirectTo: '/dataentry',
  pathMatch: 'full'
 },
   {
  path: 'dataentry',
  component: DataentryComponent
 },
  {
  path: 'overall',
  component: OverallComponent
 },
 {
  path: 'contact',
  component: ContactComponent
 },
  {
  path: 'help',
  component: HelpComponent
 },
 {
  path: 'app',
  component: AppComponent,
  children : [
  {
    path: '',
    redirectTo: '/dataentry',
    pathMatch: 'full'
  },
  {
    path: 'dataentry',
   component: DataentryComponent
  },
  {
    path: 'overall',
    component: OverallComponent
  }
]
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
