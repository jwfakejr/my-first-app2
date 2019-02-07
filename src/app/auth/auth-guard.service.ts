import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, Router, Route} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.isAuthenticated();
  }

  canLoad(route: Route): boolean {
    let url: string = route.path;
    console.log(this.authService.isAuthenticated());
    if( this.authService.isAuthenticated()) {
      return true;
    }
    console.log(route);
    this.router.navigateByUrl('/');
    return false;
  }
}
