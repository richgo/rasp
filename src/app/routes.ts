import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
import { CategoryComponent } from './components/category/category.component';
import { GroupingComponent } from './components/grouping/grouping.component';
import { HomeComponent } from './components/home/home.component';
import { OverallComponent } from './components/overall/overall.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './common/auth.guard';

const appRoutes: Routes = [
 { path: 'login',  component: LoginComponent },
 { path: 'signup', component: SignupComponent },
 { path: '', redirectTo: '/category/:gid', pathMatch: 'full' },
 { path: 'category/:gid/:sid', component: CategoryComponent, canActivate: [AuthGuard] },
 { path: 'grouping/:gid', component: GroupingComponent, canActivate: [AuthGuard] },
 { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
 { path: 'overall', component: OverallComponent, canActivate: [AuthGuard] },
 { path: 'contact', component: ContactComponent },
 { path: 'help', component: HelpComponent },
 { path: 'app', component: AppComponent,
  children : [
  {
    path: '',
    redirectTo: '/grouping/:gid',
    pathMatch: 'full'
  },
  {
    path: 'category/:gid/:sid',
   component: CategoryComponent
  },
   {
    path: 'grouping/:gid',
   component: GroupingComponent
  },
  {
    path: 'overall',
    component: OverallComponent
  }
]
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
