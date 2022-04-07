import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interface';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl : String = environment.baseUrl

  constructor(private hhtp: HttpClient) { }

  login(nombreUsuario: String, password: String){
    const url = `${this.baseUrl}/login`
    const body = {nombreUsuario, password}
    return this.hhtp.post<AuthResponse>(url, body)
      .pipe(
        map( resp => {localStorage.setItem("token",resp.token); return resp})
      )
  }

  registro(nombre: String , nombreUsuario: String,email: String, password: String){
    const url = `${this.baseUrl}/nuevoUsuario`
    const body = {nombre, nombreUsuario, email, password}
    return this.hhtp.post<Usuario>(url, body)
      .pipe(
        map( resp => resp),
        catchError(err => of(false))
      )
  }


}
