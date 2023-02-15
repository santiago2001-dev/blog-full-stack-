import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listPost : post[] = []
  constructor(
    private router :Router,
    private postServ : PostService,

  ) { }

  ngOnInit(): void {
    this.getPost();
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



  deletePost(id:any){
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿estás seguro?',
      text: "Una vez eiminado el contacto no podrá ser recuperado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si, deseo eliminarlo',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.postServ.deltePost(id).subscribe(
          data=>{
          swalWithBootstrapButtons.fire(
          'producto eliminado!',
          'el producto ha sido eliminado correctamente',
          'success'
        )
        this.router.navigate(['/dashboard/productos']); //redirección
        this.getPost()

      },error=>{
        swal.fire({
          icon: 'error',
          title: 'algo salio mal intenta de nuevo ',
        
        })


      }
      )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'operación cancelada',
          'error'
        )
      }
    })

}
  }

