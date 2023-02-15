import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login,registro } from '../models/login';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  server  = environment.servidor
  public token : String |any;
  tokenDes : String |any
  constructor(
    private http : HttpClient,
    private jwHelper : JwtHelperService

  ) { }

  login(credenciales : login):Observable<any>{
    let url = `${this.server}/login`
     return this.http.post(url,credenciales)
     
   }

   isLoggin():boolean{
    this.token = localStorage.getItem('token');
  
    if(this.jwHelper.isTokenExpired(this.token) || !localStorage.getItem('token')){
      return false
  
    }
    return true
  
  } 
  
  isPermis():string{
    this.token = localStorage.getItem('token');
    this.tokenDes = decode(this.token);
 
    return this.tokenDes
  }
}
