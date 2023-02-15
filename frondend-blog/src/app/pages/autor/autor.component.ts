import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { autorget } from 'src/app/models/autor';
import { AutoresService } from 'src/app/services/autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  listAutors : autorget[]= []

  constructor(
    private router :Router,
    private autorServ : AutoresService
  ) { }

  ngOnInit(): void {
    this.getAutors();
  }
    getAutors(){
      this.autorServ.getAutores().subscribe(
        data=>{
          this.listAutors = data
        },error=>{
          swal.fire({
            icon: 'error',
            title: error.error,
          
          })
        
        }
      )
    }

}
