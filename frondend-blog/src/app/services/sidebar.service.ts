import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }
  menu:any[]=[
    {
      
      submenu:[
        {titulo : 'autores',url : 'autor',icono : 'fa fa-users'},
        {titulo : 'Posts',url : 'dashboard',icono : 'fa-sharp fa-solid fa-comment'},
      ]
    }
  ]
}
