import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesService } from './roles.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private rolesService: RolesService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.rolesService.isLoggedIn()) {

      const userRole = this.rolesService.getRole();
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.router.navigate(['/main']);
        return false;
      }
      return true;
    }

    this.router.navigate(['/main']);
    return false;
  }

}
