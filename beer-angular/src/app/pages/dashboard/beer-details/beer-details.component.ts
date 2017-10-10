import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeerService } from '../../../services/beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerInfo: any = {};
  favorites: any[] = [];

  constructor(
    private ourActivated: ActivatedRoute,
    private ourRouter: Router,
    private ourBeer: BeerService,
  ) { }

  ngOnInit() {
    this.ourActivated.params.subscribe((myParams) => {
      console.log(myParams.beerId);
                              // { path: 'beer'/:beerId'
        this.ourBeer.getBeerDetails(myParams.beerId)
          .subscribe(
            (theBeerFromApi) => {
                this.beerInfo = theBeerFromApi;
            }
          );
    });
  }

  postFavorite(beerInfo){
    this.favorites.push(beerInfo);
    this.ourBeer.postFav(this.favorites).subscribe()
  }

}
