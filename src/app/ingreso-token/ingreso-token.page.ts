import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicio/auth.service';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingreso-token',
  templateUrl: './ingreso-token.page.html',
  styleUrls: ['./ingreso-token.page.scss'],
  standalone: false,
})
export class IngresoTokenPage implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private modalCtrl: ModalController
  ) { }

  email: string = '';
  token: string = '';
  isTokenValid: boolean | null =null ;
  newPassword: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

// Validar token
  validateToken() {
    this.authService.validateToken(this.token).subscribe(
      (response: any) => {
        if (response.estado) {
          this.isTokenValid = true; // Si el token es válido, muestra el formulario
        } else {
          alert(response.mensaje);
          this.isTokenValid = false; // Oculta el formulario si el token no es válido
        }
      },
      (error) => {
        console.error('Error al validar el token', error);
        alert('Ocurrió un error al validar el token.');
        this.isTokenValid = false;
        this.modalCtrl.dismiss();
      }
    );
  }
  

  resetPassword() {
    this.authService.resetPassword(this.token, this.newPassword).subscribe(
      (response: any) => {
        if (response.estado) {
          alert('Contraseña restablecida con éxito.');
        } else {
          alert(response.mensaje);
        }
      },
      (error) => {
        console.error('Error al restablecer la contraseña', error);
        alert('Ocurrió un error. Inténtalo nuevamente.');
      }
    );
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }
}
