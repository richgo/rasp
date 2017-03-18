import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
import { DataentryComponent } from './components/dataentry/dataentry.component';
import { OverallComponent } from './components/overall/overall.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './common/auth.guard';

const appRoutes: Routes = [
 { path: 'login',  component: LoginComponent },
 { path: 'signup', component: SignupComponent },
 { path: '', redirectTo: '/dataentry/:gid', pathMatch: 'full' },
 { path: 'dataentry/:gid/:sid', component: DataentryComponent, canActivate: [AuthGuard] },
 { path: 'dataentry/:gid', component: DataentryComponent, canActivate: [AuthGuard] },
 { path: 'dataentry', component: DataentryComponent, canActivate: [AuthGuard]  },
 { path: 'overall', component: OverallComponent, canActivate: [AuthGuard] },
 { path: 'contact', component: ContactComponent },
 { path: 'help', component: HelpComponent },
 { path: 'app', component: AppComponent,
  children : [
  {
    path: '',
    redirectTo: '/dataentry/:gid/:sid',
    pathMatch: 'full'
  },
  {
    path: 'dataentry/:gid/:sid',
   component: DataentryComponent
  },
   {
    path: 'dataentry/:gid',
   component: DataentryComponent
  },
  {
    path: 'overall',
    component: OverallComponent
  }
]
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
