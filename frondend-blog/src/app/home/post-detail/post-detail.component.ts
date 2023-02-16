import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  listPost : post[] = []
  Id  : String | null ;

  constructor(
    private router :Router,
    private aRouter : ActivatedRoute,
    private postServ : PostService,
  ) { 
    this.Id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getPost()
  }
  getPost(){
    this.postServ.getPostByid(this.Id).subscribe(

      data=>{
      
        this.listPost = data 
      
        console.log(this.listPost)
      },error=>{
        console.log(error);
      }
    )
    
  }


}
