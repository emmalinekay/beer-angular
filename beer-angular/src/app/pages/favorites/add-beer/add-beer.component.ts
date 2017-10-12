import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { BeerInfo } from '../../../interfaces/beer-info';
import { BeerService } from '../../../services/beer.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {

  newBeer: BeerInfo = {
    beerName: '',
    beerImage: '',
    beerLocation: '',
    beerStyle: '',
    beerIbu: 0,
    beerAbv: 0,
    beerDescription: '',
  };

  errorMessage: string;

  @Output() newBeerNotifier = new EventEmitter();

  constructor(
    private ourBeer: BeerService,
    private ourRouter: Router
  ) { }

  ngOnInit() {
  }

  saveNewBeer() {
      // send "this.newBeer" to the backend for saving
      this.ourBeer.postBeer(this.newBeer)
        .subscribe(
          // SUCCESS! (1st argument of "subscribe()")
          (fullBeerDetails: any) => {
              console.log('New beer success', fullBeerDetails);

              // notify the parent about the new beer through the output
              this.newBeerNotifier.emit(fullBeerDetails);

              this.errorMessage = '';
              this.newBeer = {
                beerName: '',
                beerImage: '',
                beerLocation: '',
                beerStyle: '',
                beerIbu: 0,
                beerAbv: 0,
                beerDescription: '',
              };

              this.ourRouter.navigate(['/beers', fullBeerDetails._id]);
          },

          // ERROR! (2nd argument of "subscribe()")
          (errorInfo) => {
              console.log('New beer error', errorInfo);

              if (errorInfo.status === 400) {
                  this.errorMessage = 'Validation error.';
              }
              else {
                  this.errorMessage = 'Unknown error. Try again later.'
              }
          }

        ); // .subscribe()
  } // saveNewPhone()

}
