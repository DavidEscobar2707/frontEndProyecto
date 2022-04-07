import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  formulario: FormGroup = this.fb.group ({
    nombre: ['juan',[Validators.required]],
    email: ['usuario@ejemplo.com',[Validators.required]],
    nombreUsuario: ['ejemploUsuario',[Validators.required]],
    password: ['password',[Validators.required]]
  }) 
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  register(){
    const {nombre, email, nombreUsuario, password} = this.formulario.value;
    this.authService.registro(nombre,nombreUsuario,email, password)
        .subscribe( resp => {
          console.log(resp)
          if(resp){
            this.router.navigateByUrl('/login')
          }
        })
  }


}
