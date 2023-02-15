import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { postadd } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  server  = environment.servidor

  constructor(
    private http : HttpClient
  ) { }
  getPost():Observable<any>{
    let url = `${this.server}/post`
    return this.http.get(url);
  }
  getPostByid(id:any):Observable<any>{
    let url = `${this.server}/post`
    return this.http.get(`${url}/${id}`);
  }
  addPost(post:postadd):Observable<any>{
    let url = `${this.server}/post`
     return this.http.post(url,post);
  }
  updatePost(post:postadd,id:any):Observable<any>{
    let url = `${this.server}/post`

    return this.http.put(`${url}/${id}`,post);
  }

  deltePost(id:any):Observable<any>{
    let url = `${this.server}/post`

    return this.http.delete(`${url}/${id}`);
  }
}
