import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicio/auth.service';

@Component({
  selector: 'app-ingreso-token',
  templateUrl: './ingreso-token.page.html',
  styleUrls: ['./ingreso-token.page.scss'],
  standalone: false,
})
export class IngresoTokenPage implements OnInit {
  email: string = '';
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  token: string = '';
  newPassword: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  recoverPassword() {
    this.authService.recoverPassword(this.email).subscribe(
      (response: any) => {
        if (response.estado) {
          alert('Se ha enviado un correo con el enlace para restablecer la contraseña.');
        } else {
          alert(response.mensaje);
        }
      },
      (error) => {
        console.error('Error al solicitar la recuperación', error);
        alert('Ocurrió un error. Inténtalo nuevamente.');
      }
    );
  }
}
