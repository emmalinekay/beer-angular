import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myBeers: any[] = [];
  errorMessage: string;

  constructor(
    private beerList: BeerService,
  ) { }


  ngOnInit() {
    this.beerList.getMyBeers()
      .subscribe(
        (listOfBeers: any[]) => {
            this.myBeers = listOfBeers;
        },

        (errInfo) => {
            if (errInfo.status === 401) {
                this.errorMessage = 'You need to be logged in.';
            }
            else {
                this.errorMessage = 'Something went wrong. Try again later.';
            }
        }
      );

  }
  
  }
