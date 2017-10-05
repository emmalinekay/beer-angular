import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';

import { AuthApiService } from '../services/auth-api.service';

@Injectable()
export class LoginGuardService {

  constructor(
    private routerThang: Router,
    private authThang: AuthApiService
  ) { }


  canActivate() {
      return this.authThang.getLoginStatus()
        .map(
          (loggedInInfo: any) => {
              if (loggedInInfo.isLoggedIn) {
                  return true;
              }
              else {
                  this.routerThang.navigate(['/login']);
                  return false;
              }
          }
        );
  }
}
