import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthApiService } from './services/auth-api.service';
import { LoginGuardService } from './auths/login-guard.service';
import { PreferencesService } from './services/preferences.service';
import { BeerService } from './services/beer.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { BeerDetailsComponent } from './pages/dashboard/beer-details/beer-details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PreferencesComponent,
    DashboardComponent,
    HomeComponent,
    BeerDetailsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthApiService,
    LoginGuardService,
    PreferencesService,
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
