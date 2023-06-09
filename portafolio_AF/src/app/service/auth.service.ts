import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL = 'https://portafolioaf-b.onrender.com/auth/';
  constructor(private HttpClient: HttpClient) { }

  public create(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.HttpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
  return this.HttpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
}

}
