import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { autor } from 'src/app/models/autor';
import { AutoresService } from 'src/app/services/autores.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css']
})
export class AddAutorComponent implements OnInit {
  autorForm :FormGroup

  constructor(
    private router: Router,
    private autorServ : AutoresService,
    private fb : FormBuilder
  ) { 
    this.autorForm = this.fb.group({
      nombre : ['',Validators.required],
      apellidos: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  addAutor(){
    if(this.autorForm.invalid){
    
        swal.fire({
         icon: 'error',
         title: 'los campos son obligatorios',
       
       })
    }else{
      const autor : autor = {
        nombre : this.autorForm.get('nombre')?.value,
        apellidos : this.autorForm.get('apellidos')?.value
      }
      this.autorServ.addAutor(autor).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'autor agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['dashboard/autor'])
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
