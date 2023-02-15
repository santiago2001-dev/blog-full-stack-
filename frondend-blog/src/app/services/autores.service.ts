import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post,postadd } from '../models/post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { autorget } from '../models/autor';
@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  server  = environment.servidor
    constructor(
    private http : HttpClient
  ) { }

  getAutores():Observable<any>{
    let url = `${this.server}/autores`

    return this.http.get(url)
  }

  getAutoresbyId(id:any):Observable<any>{
    let url = `${this.server}/autores`

    return this.http.get(`${url}/${id}`)
  }
  addAutor(autor :autorget):Observable<any>{
    let url = `${this.server}/autores`

    return this.http.post(url,autor)
  }
 
}
