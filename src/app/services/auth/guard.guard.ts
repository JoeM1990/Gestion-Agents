import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(public auth:AuthService, public router:Router){}

  canActivate(){
    if(this.auth.checkLogin()){
      return true;
    }
      this.router.navigate(['/login']);

      alert('Connectez vous');

    return false;
    
  }
  
}
