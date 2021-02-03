import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from '../services/token.service';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    console.log('loggedIng :' + this.tokenService.loggedIn());
    if (!this.tokenService.loggedIn()){
      this.tokenService.remove();
      this.authService.changeStatus(false);
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

}
