import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { BeerDetailsComponent } from './pages/dashboard/beer-details/beer-details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { StylesComponent } from './pages/styles/styles.component';
import { AboutComponent } from './pages/about/about.component';
import { AddBeerComponent } from './pages/favorites/add-beer/add-beer.component';

const routes: Routes = [
  { path: '',                  component: HomeComponent },
  { path: 'signup',            component: SignInComponent },
  { path: 'login',             component: SignInComponent },
  { path: 'preferences',       component: PreferencesComponent},
  { path: 'dashboard',         component: DashboardComponent},
  { path: 'beers/:beerId',     component: BeerDetailsComponent },
  { path: 'favorites',         component: FavoritesComponent },
  { path: 'about',             component: AboutComponent},
  { path: 'styles',            component: StylesComponent},
  { path: 'yourbeers',         component: AddBeerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
