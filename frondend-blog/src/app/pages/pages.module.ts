import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AutorComponent } from './autor/autor.component';
import { AddAutorComponent } from './add-autor/add-autor.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent,
    AutorComponent,
    AddAutorComponent,
    PagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
