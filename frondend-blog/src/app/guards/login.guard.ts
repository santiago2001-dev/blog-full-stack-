import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
 constructor(
   private loginserv : LoginService,
  private router : Router
 ){
  
 }
  canActivate(): boolean {
    if(!this.loginserv.isLoggin()){
      console.log(this.loginserv.isLoggin())
      swal.fire({
        icon: 'error',
        title: 'debes iniciar sesion primero',
    })
    this.router.navigate(['/login'])
    return false
    }
    return true
  }
}
