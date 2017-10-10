import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PreferencesService } from '../services/preferences.service';

import { environment } from '../../environments/environment';

@Injectable()
export class BeerService {

  baseUrl: string = environment.apiUrl;

  constructor(
    private ourHttp: HttpClient
  ) { }

  getMyBeers() {
        return this.ourHttp.get(
            this.baseUrl + '/api/beers',
            { withCredentials: true }
        );
    }

    getBeerDetails(beerId: string) {
        return this.ourHttp.get(
            this.baseUrl + '/api/beers/' + beerId
          );
}

    postFav(favorites){
      return this.ourHttp.post(
        this.baseUrl + '/api/favorites', {favorites},
        { withCredentials: true }
      );
}

    getMyFavorites() {
      return this.ourHttp.get(
          this.baseUrl + '/api/favorites',
          { withCredentials: true }
      );
    }
}
