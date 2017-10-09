import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '',               component: HomeComponent },
  { path: 'signup',         component: SignInComponent },
  { path: 'login',          component: SignInComponent },
  { path: 'preferences',    component: PreferencesComponent},
  { path: 'dashboard',      component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
