import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { Usuario, AuthResponse } from '../../interfaces/interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  formulario: FormGroup = this.fb.group({
    nombreUsuario: ['ejemploUsuario',[Validators.required]],
    password: ['password',[Validators.required]]
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  
  login(){
    const {nombreUsuario, password} = this.formulario.value;
    this.authService.login(nombreUsuario, password)
        .subscribe( resp => {
          if(resp){
            this.router.navigateByUrl('/dashboard')
          }
        })
  }

}
