import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';


@Injectable()
export class PreferencesService {

  baseUrl: string = environment.apiUrl;

  constructor(
    private ourHttp: HttpClient,
    private ourRouter: Router
  ) { }


  //POST /api/preferences
  postPreferences(preferences){
    console.log(preferences);
    this.ourHttp.post(
      this.baseUrl + '/api/preferences', {preferences},
      { withCredentials: true }
    ).subscribe()
  }

}
