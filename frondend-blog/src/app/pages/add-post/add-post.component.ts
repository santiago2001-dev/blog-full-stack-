import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { postadd } from 'src/app/models/post';
import { autorget } from 'src/app/models/autor';
import swal from 'sweetalert2';
import { PostService } from 'src/app/services/post.service';
import { AutoresService } from 'src/app/services/autores.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
listAutors : autorget[] = []
postForm : FormGroup
Titulo = 'crear post'
Id  : String | null ;
  constructor(
    private autroserv : AutoresService,
    private postServ  : PostService,
    private fb : FormBuilder,
    private router : Router,
    private aRouter : ActivatedRoute
    
  ) { 
    this.postForm =  this.fb.group({
      titulo:['',Validators.required],
      contenido:['',Validators.required],
      imagen:['',Validators.required],
      autor: ['',Validators.required]

    })
    this.Id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getAutor();
    this.getValues();
  }


    addPost(){
      if(this.postForm.invalid){
         swal.fire({
          icon: 'error',
          title: 'los campos son obligatorios',
        
        })
      }else{
        const post :postadd = {
          titulo : this.postForm.get('titulo')?.value,
          contenido : this.postForm.get('contenido')?.value,
          imagen : this.postForm.get('imagen')?.value,
          autor : this.postForm.get('autor')?.value,
          
        }
        if(this.Id !==null){
          this.postServ.updatePost(post,this.Id).subscribe(
            data=>{
              swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario agregado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.navigate(['/dashboard']);
    
    
            },error=>{
              swal.fire({
                icon: 'error',
                title: error.error,
              
              })
            }
          
          )
          }else{
          this.postServ.addPost(post).subscribe(
            data=>{
              swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario agregado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.navigate(['/dashboard']);
    
    
            },error=>{
              swal.fire({
                icon: 'error',
                title: error.error,
              
              })
            }


          )
        }
    }

  }
  
    getAutor(){
    this.autroserv.getAutores().subscribe(
      data=>{
        this.listAutors = data
        console.log(data)
      },error=>{
        console.log(error);
      }
    )
  }


  getValues(){
    if(this.Id !== null){
      this.Titulo = "actualizar post"
      this.postServ.getPostByid(this.Id).subscribe(
       data=>{
        this.postForm.patchValue({
          titulo : data[0].titulo,
          contenido : data[0].contenido,
          imagen :data[0].imagen,
          autor:data[0].autor
        })
       }
      )
 
    }
    
  }
}
