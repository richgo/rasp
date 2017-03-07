import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SideNavComponent } from './components/sidenav/sidenav';

const ROUTES: Routes = [
  {
    path: 'dataentry',
    component: SideNavComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
