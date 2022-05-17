import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from "../services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userLoggedIn: boolean = this.isUserLoggedIn();
    if (userLoggedIn) {
      return true;
    }

    return this.router.parseUrl('login');
  }

  isUserLoggedIn(): boolean {
    return this.tokenStorageService.getToken() !== null;
  }
}
