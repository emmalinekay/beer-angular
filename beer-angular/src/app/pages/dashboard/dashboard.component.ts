import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private beerList: BeerService,
  ) { }


  ngOnInit() {
    
  }

}
