import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = "http://localhost/wsAgenda25Ionic/agenda.php";

  constructor(
    private http: HttpClient
  ) { }

  // Solicitar recuperación de contraseña
  recoverPassword(email: string): Observable<any> {
    const payload = { accion: 'recoverPassword', email: email };
    return this.http.post(this.apiUrl, payload);
  }

  // Validar token
  validateToken(token: string): Observable<any> {
    const payload = { accion: 'validateToken', token: token };
    return this.http.post(this.apiUrl, payload);
  }
  
  // Restablecer la contraseña
  resetPassword(token: string, password: string): Observable<any> {
    const payload = { accion: 'updatePassword', token: token, password: password };
    return this.http.post(this.apiUrl, payload);
  }
}
