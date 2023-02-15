import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
