import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  myFavs: any[] = [];
  errorMessage: string;

  constructor(
    private beerService: BeerService,
    private ourRouter: Router
  ) { }

  ngOnInit() {
    this.beerService.getMyFavorites()
        .subscribe(
          (listOfFavs: any[]) => {
              this.myFavs = listOfFavs;
          },

          (errInfo) => {
              if (errInfo.status === 401) {
                  this.errorMessage = 'You need to be logged in.';
              }
              else {
                  this.errorMessage = 'Something went wrong. Try again later.';
              }
          }
        ); // .subscribe()
  }


}
