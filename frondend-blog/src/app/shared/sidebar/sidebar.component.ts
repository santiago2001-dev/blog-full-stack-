import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems ?: any[];
  public token : String |any;
  tokenDes : String |any
  name :string |any
  ocultar : boolean |any

  constructor(
    private router : Router,
    private jwHelper : JwtHelperService,
    private sidebarser :SidebarService
  ) {
    this.menuItems = this.sidebarser.menu;
    this.getnameUser();
   }

  ngOnInit(): void {
  }
  logiout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }


  getnameUser(){
    this.token = localStorage.getItem('token');
    this.ocultar = true

    if(this.jwHelper.isTokenExpired(this.token) || !localStorage.getItem('token')){
      this.ocultar = false
}
}
}

