import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    HomeComponent,
    PostDetailComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports :[
    HomeComponent,
    PostDetailComponent,
    PostsComponent
  ]
})
export class HomeModule { }
