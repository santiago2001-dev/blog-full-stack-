import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { login } from 'src/app/models/login';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private loginserv : LoginService
  ) { 
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  autenticacion(){
    if(this.loginForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
  }else{
    const credenciales : login = {
      email : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value
    }
    this.loginserv.login(credenciales).subscribe(
      (data : any)=>{
        let token = data.access_token
        localStorage.setItem('token',token);
        this.router.navigate(['/dashboard/post-adm'])
        },error=>{
        swal.fire({
          icon: 'error',
          title: error,
        
        })
      }
    )

  }
}
}
