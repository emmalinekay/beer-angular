import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  myFavs: any = [];
  errorMessage: string;

  constructor(
    private beerService: BeerService,
    private ourRouter: Router
  ) { }

  ngOnInit() {
    this.beerService.getMyFavorites()
        .subscribe(
          (listOfFavs: any[]) => {
             listOfFavs.forEach((firstFav) => {
               firstFav.forEach((oneFav) => {
                 //  return oneFav;
                 this.myFavs.push(oneFav);
                 console.log(this.myFavs);

               });
            });

              // this.myFavs = listOfFavs;
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

  deleteClick() {
        // call the API for deletion
        this.beerService.deleteBeer(this.myFavs._id)
          .subscribe(
            () => {
                this.ourRouter.navigate(['/dashboard']);
            }
          );
    }

}
