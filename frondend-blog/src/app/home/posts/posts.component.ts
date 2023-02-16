import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  listPost : post[] = []

  constructor(
    private router :Router,
    private postServ : PostService,
  ) { }

  ngOnInit(): void {
    this.getPost()
  }
  getPost(){
    this.postServ.getPost().subscribe(
      data=>{
        this.listPost = data
        console.log(data);
      },error=>{
        console.log(error);
      }
    )
    
  }
}
