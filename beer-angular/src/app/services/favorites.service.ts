import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable()
export class FavoritesService {

  baseUrl: string = environment.apiUrl;

  constructor(
    private ourHttp: HttpClient,
    private ourRouter: Router
  ) { }



  }
