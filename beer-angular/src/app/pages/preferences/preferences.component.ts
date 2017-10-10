import { Component, OnInit } from '@angular/core';

import { PreferencesService } from '../../services/preferences.service';
import { Router } from '@angular/router';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  preferences: any[] = [];

  constructor(
    private ourService: PreferencesService,
    private beerService: BeerService,
    private ourRouter: Router
  ) { }

  ngOnInit() {
  }

  postTheStyle(style){
    this.preferences.push(style);
    console.log(this.preferences);
  }

  sendPreferences() {
    //send the user preferences
    this.ourService.postPreferences(this.preferences).subscribe(() => {
      this.ourRouter.navigate(['/dashboard']);
    });
  }

}
